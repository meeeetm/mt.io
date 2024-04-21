(function ($, Drupal, drupalSettings, once) {
    'use strict';
    Drupal.behaviors.sn_slideshow = {
        attach: function (context, settings) {

            $.each(drupalSettings.sn_slideshow, function(slideshow_identifier, slideshow_settings ) {

                if (slideshow_settings.show_navigation) {

                  $(once('init-slider', '#' + slideshow_identifier + ' .slick-slider', context)).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000,
                    draggable: true,
                    arrows: slideshow_settings.show_arrows,
                    dots: slideshow_settings.show_dots,
                    fade: slideshow_settings.show_fade,
                    autoplay: slideshow_settings.auto_play,
                    speed: 1000,
                    adaptiveHeight: true,
                    asNavFor: '#' + slideshow_identifier + ' .slider-nav'
                  });

                  $(once('init-nav', '#' + slideshow_identifier + ' .slider-nav', context)).slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    arrows: true,
                    asNavFor: '#' + slideshow_identifier + ' .slick-slider',
                  });

                } else {

                    $(once('init-slider', '#' + slideshow_identifier + ' .slick-slider', context)).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000,
                    draggable: true,
                    arrows: slideshow_settings.show_arrows,
                    dots: slideshow_settings.show_dots,
                    fade: slideshow_settings.show_fade,
                    autoplay: slideshow_settings.auto_play,
                    speed: 1000,
                    adaptiveHeight: true,
                  });
                }
            });
        }
    };

})(jQuery, Drupal, drupalSettings, once);
