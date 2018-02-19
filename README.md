# Chatbot Analytics for node.js

A helper library for that allows to easily integrate analytics in your chatbot.

Supported 3rd party services:

* [Google Analytics](https://analytics.google.com)

_**Support for other chatbot analytics tools planned.**_

## Install

`npm install chatbot-analytics --save`

## Usage

First include this module and initialize it with your Google Analytics tracking ID.

```javascript
const ChatbotAnalytics = require('chatbot-analytics');
```

Then, simply track an event like this:

```javascript
// Instantiate:
const ca = new ChatbotAnalytics({ga: {trackingId: 'YOUR_GA_TRACKING_ID'}});

// Send an event:
ca.trackEvent('[user_id_here]', '[category]', '[action]', '[label]', null, {locale: 'en'});
```

## Advanced options

Possible options:

```javascript
{
    logging: my_logger,
    ga: { // Enable Google Analytics
        trackingId: GA_TRACKING_ID_USER,
        debug: true
    }
}
```

## Disclaimer

All mentions of Google Analytics and its use in this project are copyright of [Google](http://google.com). Google does not endorse this project in any way.
