import http from 'k6/http';
import { sleep } from 'k6';

// Configureer de basis-URL van de API die je gaat testen
const BASE_URL = 'https://development.sjef.dev/user/health';

// Functie om een API-aanroep te doen
function makeAPICall() {
    const response = http.get(`${BASE_URL}`);
    // Log de statuscode van de respons
    console.log(`Status code: ${response.status}`);
    console.log(`Response data: ${response.body}`);
    // Voeg een korte vertraging toe om realistisch verkeer na te bootsen
    sleep(1);
}

// Scenario voor geleidelijke toename van de belasting
export default function () {
    // Begin met een initiële belasting
    makeAPICall();

    // Verhoog geleidelijk het aantal aanroepen
    for (let i = 2; i <= 100; i++) {
        // Doe een API-aanroep
        makeAPICall();
        // Voeg een kleine vertraging toe tussen de aanroepen
        sleep(0.5);
    }
}
