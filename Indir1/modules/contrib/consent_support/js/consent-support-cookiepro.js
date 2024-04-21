/**
 * @file
 * consent-support-cookiepro.js
 */

window.consent_support = window.consent_support || {};
window.consent_support.cookiepro = {

  // We need this for no-consent page in iframe.
  showInfoDisplay: function () {
    OneTrust.ToggleInfoDisplay();
  },
};
