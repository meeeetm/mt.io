/**
 * @file
 * File to initialize accordion.
 */

(function ($, Drupal, drupalSettings){
    Drupal.behaviors.entity_ref_tab_formatter = {
        attach: function (context, settings) {
            for (var id in settings.entity_ref_tab_formatter.accordion) {
                var options = settings.entity_ref_tab_formatter.accordion[id];
                options = $.extend({
                    collapsible: true,
                    active: false
                }, options);
                $("#" + id, context).accordion(options);
            }
        }
    };
})(jQuery, Drupal, drupalSettings);
