
'use strict';

const ua = require('universal-analytics');

/**
 * Google Analytics implementation, based on the universal-analytics package.
 */
class GoogleAnalytics {

    constructor(config) {
        this.config = config;
        this.init();
    }

    init() {
        if (this.config.logging) {
            this.config.logging('chatbot-analytics [GA]: init')
        }
    }

    /**
     * Tracks a single. It will directly send the event to the UA server.
     */
    trackEvent(userId, category, action, label, value, userProperties) {
        let trackingId = this.config.ga.trackingId;
        // console.log('GA trackingId', trackingId);
        if (trackingId) {
            // This will create a new visitor instance:
            let visitor = ua(trackingId, userId, {strictCidFormat: false, https: true});
            // Enable debugging mode of the universal-analytics library:
            if (this.config.ga.debug) {
                visitor = visitor.debug();
            }
            // this.config.logging('userId=' + userId + ' userLocale=' + userLocale + ' category=' + category);
            let params = {};
            if (userProperties) {
                if (userProperties.locale) {
                    params.ul = userProperties.locale;
                }
                if (userProperties.geoid) {
                    params.geoid = userProperties.geoid;
                }
                if (userProperties.userAgent) {
                    params.ua = userProperties.userAgent;
                }
            }

            // Enqueue an event and send it directly:
            visitor.event(category, action, label, value, params).send();
            if (this.config.logging) {
                this.config.logging('chatbot-analytics [GA]: Tracking event for %s | cat: %s | action: %s | label: %s | locale: %s', userId, category, action, label, params.ul ? params.ul : '-');
            }
        } else {
            if (this.config.logging) {
                this.config.logging('chatbot-analytics [GA]: Would track event for %s | cat: %s | action: %s | label: %s | locale: %s', userId, category, action, label, params.ul ? params.ul : '-');
            }
        }
    }

}

module.exports = GoogleAnalytics;
