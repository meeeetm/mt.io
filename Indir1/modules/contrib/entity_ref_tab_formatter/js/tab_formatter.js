/**
 * @file
 * File to initialize tabs.
 */

(function ($, Drupal, drupalSettings){
    Drupal.behaviors.entity_ref_tab_formatter = {
        attach: function (context, settings) {
            for (var id in settings.entity_ref_tab_formatter.tab) {
                var options = settings.entity_ref_tab_formatter.tab[id];
                $("#" + id, context).tabs(options);
            }
        }
    };
})(jQuery, Drupal, drupalSettings);
