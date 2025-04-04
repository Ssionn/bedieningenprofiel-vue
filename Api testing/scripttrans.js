import http from 'k6/http';
import { commonChecks } from './lib/checks.js'; 
import { headers } from './lib/headers.js';

export default function () {
  let url = 'https://development.sjef.dev/transactions/transactions';
  let payload = JSON.stringify({
      timestamp: "2022-01-01T10:00:00+02:00",
      bookingId: 1,
      accountId: 1,
      areaId: 1,
      clerkId: 1,
      locationId: 2,
      tableId: 1,
      subtotalId: 1,
      terminalSequence: 105,
      source: "turbopos",
      status: "completed",
      reference: "Ref 01",
      notes: "Note 01",
      customerName: "Yeri Westerkamp",
      customerEmail: "example@sjef.app",
      customerPhoneNumberCountryCode: "NL",
      customerPhoneNumber: "0123456789",
      customerZipcode: "1053AN",
      customerHousenumber: "59",
      customerStreetname: "Basisweg",
      customerCity: "Amsterdam",
      customerCountry: "NL",
      additionalData: {
      method: "quickorder"
      },
      lines: [
          {
              type: "revenue",
              itemId: "1",
              cashfunctionId: null,
              quantity: 1,
              rate: 5,
              rateWithoutDiscount: 0,
              tickets: [
                  {
                      uuid: "a65afaf1-27e7-4a65-999f-92d211c3c50c"
                  },
                  {
                      uuid: "8ad04b36-a32a-488e-a7ae-824ba696c82c"
                  }
              ]
          },
          {
              type: "revenue",
              itemId: "2",
              cashfunctionId: null,
              quantity: 1,
              rate: 5,
              rateWithoutDiscount: 0,
              tickets: [
                  {
                      uuid: "c8de4f47-5817-4173-9339-3e5559b98d65"
                  },
                  {
                      uuid: "8ad04b36-a32a-488e-a7ae-824ba696c82c"
                  }
              ]
          }
      ],
      payments: [
          {
              paymentmethodId: 1,
              paymentmethod: "PIN",
              timestamp: "2022-01-01T09:00:00Z",
              merchantReference: "FAKEREF",
              paymentAccountReference: "PAR001",
              alias: "A001",
              shopperReference: "REF001",
              shopperEmail: "example@sjef.app",
              amount: 9.99,
              amountCoins: 1.5,
              pspName: "AdyenPOS",
              pspMethod: "card",
              pspVariant: "visa",
              pspEftReceipt: "visa",
              pspPayload: {},
              pspResponse: {},
              online: "true",
              status: "completed"
          }
      ]
  });

  let params = { headers: headers };

  let response = http.post(url, payload, params);

  // Add checks for response if necessary
  commonChecks(response);

  if (__ENV.DEBUG) {
      console.log('Response: ', JSON.stringify(response, null, 2));
      console.log('Headers:', JSON.stringify(params.headers, null, 2));
  }
}