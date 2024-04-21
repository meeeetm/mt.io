(function (Drupal) {
  'use strict';
  Drupal.behaviors.open_readspeaker_post_mode = {
    attach: function (context, settings) {
      window.rsConf = { general: { usePost: true } };
    }
  };
})(Drupal);
