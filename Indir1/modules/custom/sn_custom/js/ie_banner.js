(function ($, Drupal, drupalSettings, once) {
  'use strict';

  Drupal.behaviors.ie_banner = {
    attach: function (context, settings) {
      function isIE() {
        var ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

        return is_ie;
      }
      /* Create an alert to show if the browser is IE or not */
      if (isIE()){
        $(once('header-message', '.region--header')).prepend('<div class="iebanner"><div class="container"><p>Jouw browser wordt niet meer ondersteund. Je kan problemen ervaren bij het surfen op het internet. <a target="_blank" href="https://www.sint-niklaas.be/jouw-browser-wordt-niet-ondersteund">Download een recentere browser.</a></p></div></div>');
      }
    }
  };
})(jQuery, Drupal, drupalSettings, once);
