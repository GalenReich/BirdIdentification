'use strict';

const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

const app = dialogflow({ debug: true });

// Intent handler
app.intent('how big', (conv, { size }) => {
    const birdSize = size;
    var birdName;
    switch (birdSize) {
        case "small":
            birdName = "Chaffinch";
            break;
        case "medium":
            birdName = "Blackbird";
            break;
        case "large":
            birdName = "Heron";
            break;
        default:
            birdName = size
    }

    conv.close('It is a  ' + birdName);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
