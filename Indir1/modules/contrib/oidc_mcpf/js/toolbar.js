/**
 * @file
 * The toolbar library.
 */

(function (Drupal, client, window) {

  'use strict';

  Drupal.behaviors.oidcMcpfToolbar = {
    attach: function (context, settings) {
      settings = settings.oidcMcpfToolbar;

      once('oidc-mcpf-toolbar', 'body', context).forEach(function (body) {
        client.capture(function (widget) {
          if (widget.getPluginTypeId() === 'global_header') {
            widget.getExtension('citizen_profile.session').then(function (session) {
              // Configure the session.
              session.configure(settings.session);

              // Extend the session on certain events.
              let eventNames = [
                'mousedown',
                'mousemove',
                'mousewheel',
                'DOMMouseScroll',
                'scroll',
                'wheel',
                'keydown',
                'keypress',
                'touchmove',
                'touchstart'
              ];

              for (let i = 0; i < eventNames.length; i++) {
                window.addEventListener(eventNames[i], function () {
                  session.extend();
                });
              }
            });

            body.classList.add('oidc-mcpf-toolbar');
          }
        });
      });
    }
  }

})(Drupal, vl.widget.client, window);
