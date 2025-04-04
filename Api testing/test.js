import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

const BASE_URL = 'https://development.sjef.dev/user/health';

function makeAPICall() {
    const response = http.get(`${BASE_URL}`);
    console.log(`Status code: ${response.status}`);
    console.log(`Response data: ${response.body}`);
    sleep(1);
}

export const options = {
  scenarios: {
    my_api_test_2: {
      executor: 'ramping-arrival-rate',
      startTime: '30s', 
      startRate: 500,
      timeUnit: '1s', 
      stages: [
        { target: 500, duration: '30s' }, 
        { target: 500, duration: '3m30s' }, 
        { target: 100, duration: '30s' }, 
      ],
      // voeg bij alle preallocated meer vus toe om een echte stress test te doen
      preAllocatedVUs: 350,
      maxVUs: 500, 
      tags: { test_type: 'api' }, 
      env: { MY_CROC_ID: '2' }, 
      exec: 'apitest',
    },
    ramp: {
      executor: 'ramping-arrival-rate',
      preAllocatedVUs: 1200,
      timeUnit: '1s',
      startRate: 400,
      stages: [
        { target: 300, duration: '5m' },
        { target: 400, duration: '0' },
        { target: 400, duration: '10m' },
        { target: 500, duration: '30s' },
        { target: 600, duration: '0' },
        { target: 600, duration: '10m' },
        { target: 700, duration: '5m' },
        { target: 800, duration: '0' },
        { target: 800, duration: '10m' },
        { target: 900, duration: '30s' },
        { target: 1050, duration: '0' },
        { target: 1050, duration: '10m' },
      ],
    },
  },
};

export function apitest() {
    http.get(`https://development.sjef.dev/user/health/${__ENV.MY_CROC_ID}/`);
}

class ErrorHandler {
  
  constructor(logErrorDetails) {
    this.logErrorDetails = logErrorDetails;
  }

  logError(isError, res, tags = {}) {
    if (!isError) return;

    const traceparentHeader = res.request.headers['Traceparent'];

    const errorData = Object.assign(
      {
        url: res.url,
        status: res.status,
        error_code: res.error_code,
        traceparent: traceparentHeader && traceparentHeader.toString(),
      },
      tags
    );
    this.logErrorDetails(errorData);
  }

  saveErrorToFile(errorData) {
    const fs = require('fs');
    const fileName = 'error.json';
    fs.writeFile(fileName, JSON.stringify(errorData), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Error details saved to', fileName);
        process.exit(1); // Exit the program after saving the error
      }
    });
  }
}

const errorHandler = new ErrorHandler((error) => {
  console.error(error);
  errorHandler.saveErrorToFile(error);
});

export default function () {
  let res, checkStatus;

  res = http.get(BASE_URL);
  checkStatus = check(res, { 'status is 200': (res) => res.status === 200 });
  errorHandler.logError(!checkStatus, res);

  res = http.get(BASE_URL);
  checkStatus = check(res, { 'status is 200': (res) => res.status === 200 });
  errorHandler.logError(!checkStatus, res);
};

export function handleSummary(data) {
  return {
    'summary.json': JSON.stringify(data),
  };
}
