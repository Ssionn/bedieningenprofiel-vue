import http from 'k6/http';
import { check, sleep, fail } from 'k6';
import { Rate } from 'k6/metrics';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export let options = {
    stages: [
        { duration: '5m', target: 1000 },  // ramp up to 1000 users over 10 minutes
        { duration: '2h', target: 1000 },   // stay at 1000 users for 2 hours
        { duration: '5m', target: 2000 },  // ramp up to 2000 users over 10 minutes
        { duration: '2h', target: 2000 },   // stay at 2000 users for 2 hours
        { duration: '1m', target: 3000 },  // ramp up to 3000 users over 10 minutes
        { duration: '2h', target: 3000 },   // stay at 3000 users for 2 hours
        { duration: '10m', target: 4000 },  // ramp up to 4000 users over 10 minutes
        { duration: '2h', target: 4000 },   // stay at 4000 users for 2 hours
        { duration: '10m', target: 5000 },  // ramp up to 5000 users over 10 minutes
        { duration: '4h', target: 5000 },   // stay at 5000 users for 4 hours
        { duration: '10m', target: 0 },     // ramp down to 0 users over 10 minutes
    ],
    thresholds: {
        'errors': ['rate<0.1'], // Abort if more than 10% of requests fail
    },
};

let errorRate = new Rate('errors');
const maxConsecutiveFailures = 5;

export default function () {
    let consecutiveFailures = 0;

    while (true) {
        let res;
        let requestFailed = false;

        try {
            res = http.get('https://development.sjef.dev/user/health');
        } catch (e) {
            console.error(`Request failed due to network error: ${e.message}`);
            requestFailed = true;
        }

        if (!requestFailed) {
            let isSuccess = check(res, {
                'status is 200': (r) => r.status === 200,
            });

            if (!isSuccess) {
                if (res.status === 502 || res.status === 504) {
                    console.warn(`Request received status ${res.status}, not counted as failure.`);
                } else {
                    errorRate.add(1);
                    consecutiveFailures++;
                    console.error(`Request failed. Status: ${res.status}. Consecutive failures: ${consecutiveFailures}`);
                }
            } else {
                consecutiveFailures = 0; // Reset on success or acceptable status codes
            }
        } else {
            consecutiveFailures++;
        }

        if (consecutiveFailures >= maxConsecutiveFailures) {
            console.error('Max consecutive failures reached, aborting test');
            fail(`Test aborted due to ${consecutiveFailures} consecutive failures.`);
        }

        sleep(1); // Sleep for a short period to simulate realistic traffic
    }
}

export function handleSummary(data) {
    return {
        'result-summary.json': JSON.stringify(data),
        stdout: textSummary(data, { indent: ' ', enableColors: true })
    };
}
