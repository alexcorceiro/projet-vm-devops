"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appInsights = require("applicationinsights");
class AppInsightsClient {
    constructor(hash) {
        this.client = new appInsights.TelemetryClient(hash);
    }
    sendEvent(eventName, properties) {
        this.client.trackEvent({ name: eventName, properties: properties });
    }
}
exports.AppInsightsClient = AppInsightsClient;
//# sourceMappingURL=appInsightsClient.js.map