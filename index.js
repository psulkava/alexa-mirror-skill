'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.9940f13b-9e08-43ae-a82d-579d83a40e40';

const languageStrings = {
    'en-US': {
        translation: {
            HELP_MESSAGE: 'You can ask me to take a selfie for you.',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye.'
        },
    }
}

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell', 'Welcome to the smart mirror skill!');
    },
    'TakeSelfie': function () {
        this.emit(':tell', 'Taking a picture. Say cheese!');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_REPROMPT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_REPROMPT');
        this.emit(':ask', speechOutput, reprompt);
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};       
