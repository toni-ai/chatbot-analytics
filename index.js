// https://docs.npmjs.com/getting-started/creating-node-modules

'use strict';

const GoogleAnalytics = require("./services/google-analytics");

/**
 * The main class
 */
class ChatbotAnalytics {

    constructor(config) {
        this.config = config;
        this.init();
    }

    init() {
        if (this.config.logging) {
            this.config.logging('chatbot-analytics: init')
        }
        if (this.config.ga) {
            this.googleAnalytics = new GoogleAnalytics(this.config);
        }
    }

    trackEvent(userId, category, action, label, value, userProperties) {
        if (this.config.ga) {
            this.googleAnalytics.trackEvent(userId, category, action, label, value, userProperties)
        }
    }

}

module.exports = ChatbotAnalytics;
