/**
 * @file
 * Calibr8 custom scripts.
 */

(function ($, Drupal, once) {

  'use strict';

  var options = {};
  if(drupalSettings.portaal_subtheme != undefined) {
    var options = $.extend({
      breakpoints: {
        'sm': drupalSettings.portaal_subtheme.breakpoints['sm'],
        'md': drupalSettings.portaal_subtheme.breakpoints['md'],
        'lg': drupalSettings.portaal_subtheme.breakpoints['lg'],
        'xl': drupalSettings.portaal_subtheme.breakpoints['xl']
      }
    }, drupalSettings.calibr8);
  } else {
    // default breakpoints
    var options = {
      breakpoints: {
        'sm': 'screen and (min-width: 392px)',
        'md': 'screen and (min-width: 692px)',
        'lg': 'screen and (min-width: 992px)',
        'xl': 'screen and (min-width: 992px)'
      }
    }
  }

  // Extract the pixel value from the breakpoint
  function bpExtract($bp) {
    return $bp.substring($bp.lastIndexOf(": ")+1,$bp.lastIndexOf("px"));
  }

/**
 * MatchHeight settings
 */
// Under certain conditions where the size of the page is dynamically changing,
// such as during resize or when adding new elements,
// browser bugs cause the page scroll position to change unexpectedly.
$.fn.matchHeight._maintainScroll = true;
// By default, the _update method is throttled to execute at a maximum rate
// of once every 80ms.
$.fn.matchHeight._throttle = 80;
// Execute matchheight.
$.fn.matchHeight._update();

var matchHeightElements = [
  '.equal-heights article',
];

/**
 * Media Queries
 */
var mobileQuery = 'screen and (max-width:' + (bpExtract(options.breakpoints.md) - 1) + 'px)';
var nonMobileQuery = options.breakpoints.md;

/**
 * Variables
 */


/**
 * Mobile menu
 */
  Drupal.behaviors.mobileMenu = {
    attach: function (context, settings) {
      $('#mobile-menu-anchor', context).click(function (e) {
        e.preventDefault();
        Drupal.behaviors.mobileMenu.toggle();
      });
    },
    toggle: function(animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(!$('#mobile-menu').is(':visible')) {
        Drupal.behaviors.mobileMenu.show(animate);
      } else {
        Drupal.behaviors.mobileMenu.hide(animate);
      }
    },
    show: function(animate) {
      $('#mobile-menu-anchor').addClass("anchor-open");
      $('body').addClass("no-scroll");
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $('#mobile-menu').slideDown();
      } else {
        $('#mobile-menu').show();
      }
    },
    hide: function(animate) {
      $('#mobile-menu-anchor').removeClass("anchor-open");
      $('body').removeClass("no-scroll");
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $('#mobile-menu').slideUp();
      } else {
        $('#mobile-menu').hide();
      }
    }
  };

  Drupal.behaviors.mobileSearch = {
    attach: function (context, settings) {
      $('#block-exposedformsearchsearch-page-3 .form-text').focus(function() {
        $(this).attr('placeholder', 'Wat zoek je?');
      }).blur(function() {
        $(this).attr('placeholder', 'Zoeken');
      });
    }
  };

/*  Drupal.behaviors.removeHiddenTimeline = {
    attach: function (context, settings) {
      $('.custom-timeline--wrapper').each(function() {
        $(this).find('.extended-timeline').remove();
      });
    }
  }; NEW*/

  Drupal.behaviors.inpageScrollLink = {
    attach: function (context, settings) {
      $(once('scroll-link', '.timeline_element--link')).on( 'click', function(e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 500);
      });

    }
  };
  Drupal.behaviors.responsiveIframe = {
    attach: function (context, settings) {
      // Find all iframes
      var $iframes = $( "iframe" );
// Find &#x26; save the aspect ratio for all iframes
      $iframes.each(function () {
        $( this ).data( "ratio", this.height / this.width )
          // Remove the hardcoded width &#x26; height attributes
          .width(0)
          .height(0);
      });
// Resize the iframes when the window is resized
      $( window ).resize( function () {
        $iframes.each( function() {
          // Get the parent container&#x27;s width
          var width = $( this ).parent().width();
          $( this ).width( width );
          $( this ).height( width * $( this ).data( "ratio" ) );
        });
// Resize to fix all iframes on page load.
      }).resize();
    }
  };

  Drupal.behaviors.watchTabChange = {
    attach: function (context, settings) {
      // Trigger a resize when a different tab is opened to make sure iframes have the correct size.
      var tabLinks = $('.ui-tabs-anchor, .ui-accordion-header');
      tabLinks.each(function () {
        $(this).on('click', function(){
          $(window).trigger('resize');
        });
      });
    }
  };

  Drupal.behaviors.footerToggle = {
    attach: function (context, settings) {
      $('.region--footer h2').addClass('mobiletoggle');
      $('.region--footer h2', context).click(function (e) {
        e.preventDefault();
        Drupal.behaviors.footerToggle.toggle(this);
      });
    },
    toggle: function(target, animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(!$(target).parent().find('.menu').is(':visible') && !$(target).parent().find('.field--body').is(':visible')) {
        Drupal.behaviors.footerToggle.show(target, animate);
      } else {
        Drupal.behaviors.footerToggle.hide(target, animate);
      }
    },
    show: function(target, animate) {
      $(target).addClass('mobiletoggle--open');
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $(target).parent().find('.menu').slideDown();
        $(target).parent().find('.field--body').slideDown();

      } else {
        $(target).parent().find('.menu').show();
        $(target).parent().find('.field--body').show();
      }
    },
    hide: function(target, animate) {
      $(target).removeClass('mobiletoggle--open');
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $(target).parent().find('.menu').slideUp();
        $(target).parent().find('.field--body').slideUp();
      } else {
        $(target).parent().find('.menu').hide();
        $(target).parent().find('.field--body').hide();
      }
    }
  };

  Drupal.behaviors.ClosingDaysToggle = {
    attach: function (context, settings) {
      $('.closingdays-data').hide();
      $('.closingdays-wrapper .field-label-above', context).click(function (e) {
        e.preventDefault();
        Drupal.behaviors.ClosingDaysToggle.toggle(this);
      });
    },
    toggle: function(target, animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(!$(target).parent().find('.closingdays-data').is(':visible')) {
        Drupal.behaviors.ClosingDaysToggle.show(target, animate);
      } else {
        Drupal.behaviors.ClosingDaysToggle.hide(target, animate);
      }
    },
    show: function(target, animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $(target).parent().find('.closingdays-data').slideDown();

      } else {
        $(target).parent().find('.closingdays-data').show();
      }
    },
    hide: function(target, animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $(target).parent().find('.closingdays-data').slideUp();
      } else {
        $(target).parent().find('.closingdays-data').hide();
      }
    }
  };

  Drupal.behaviors.locationToggle = {
    attach: function (context, settings) {
      if($('.map-locations-box div').hasClass('open')) {
        $('.map-locations-box div ul li.active').parent().parent().addClass('open');
      } else {
        $('.map-locations-box .kindergartens').addClass('open');
        $('.map-locations-box .primary_schools ul').hide();
      }
      $(once('map-list', '.map-locations-box h3', context)).click(function (e) {
        e.preventDefault();
        Drupal.behaviors.locationToggle.toggle(this);
      });


    },
    toggle: function(target, animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(!$(target).parent().hasClass('open')) {
        Drupal.behaviors.locationToggle.show(target, animate);
      } else {
        Drupal.behaviors.locationToggle.hide(target, animate);
      }
    },
    show: function(target, animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      $('.map-locations-box div').removeClass('open');
      $(target).parent().addClass('open');

      if(animate) {
        $('.map-locations-box div ul').slideUp();
        $(target).parent().find('ul').slideDown();
      } else {
        $('.map-locations-box div ul').hide();
        $(target).parent().find('ul').show();
      }

    },
    hide: function(target, animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      $('.map-locations-box div').addClass('open');
      $(target).parent().removeClass('open');

      if(animate) {
        $('.map-locations-box div ul').slideDown();
        $(target).parent().find('ul').slideUp();
      } else {
        $('.map-locations-box div ul').show();
        $(target).parent().find('ul').hide();
      }
    }
  };

  Drupal.behaviors.floatingLabels = {
    attach: function (context, settings) {
      var floatingText = $('.webform-submission-form .floatinglabel input');
      var floatingArea = $('.webform-submission-form .floatinglabel textarea');

      $(once('floating-text', floatingText)).each(function() {
        if ($(this).val().length != 0) {

          $(this).addClass('floating');
        }
        $(this).focus(function() {
          $(this).addClass('floating');
        });

        $(this).blur(function() {
          if ($(this).val().length == 0) {
            $(this).removeClass('floating');
          }
        });
      });

      $(once('floating-area', floatingArea)).each(function() {
        if ($(this).val().length != 0) {

          $(this).parent().addClass('floating');
        }
        $(this).focus(function() {
          $(this).parent().addClass('floating');
        });

        $(this).blur(function() {
          if ($(this).val().length == 0) {
            $(this).parent().removeClass('floating');
          }
        });
      });
    }
  };

  Drupal.behaviors.filterToggle = {
    attach: function (context, settings) {
      if($('.facets_region_2 input[type="checkbox"]:checked').length > 0) {
        Drupal.behaviors.filterToggle.showToggler();
        Drupal.behaviors.filterToggle.show(false);
      }

      if($('.facets_region_2 .filter').length > 0 || $('.facets_region_1 .filter li').length > 3) {
        $(once('more-filters', '.facets_region_1 > .container')).append('<div class="filter-toggle-wrapper rs_preserve"><p class="filter-toggle">' + Drupal.t('More filters') + '</p></div>');
        Drupal.behaviors.filterToggle.showToggler();
      }

    },
    showToggler: function() {
      $('.filter-toggle-wrapper').show();
      $(once('filter-toggle', '.filter-toggle')).click(function (e) {
        Drupal.behaviors.filterToggle.toggle();
      });
    },
    hideToggler: function() {
      $('.filter-toggle-wrapper').hide();
    },
    toggle: function(animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(!$('.facets_region_2').is(':visible')) {
        Drupal.behaviors.filterToggle.show(animate);
      } else {
        Drupal.behaviors.filterToggle.hide(animate);
      }
    },
    show: function(animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      $('.filter-toggle').addClass("open");
      if(animate) {
        $('.facets_region_2').slideDown();
        $('.facets_region_1 > .container > div:nth-child(2)').css('max-height', 'none');
      } else {
        $('.facets_region_2').show();
        $('.facets_region_1 > .container > div:nth-child(2)').css('max-height', 'none');
      }

      $('.filter-toggle').text(Drupal.t('Less filters'));
    },
    hide: function(animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      $('.filter-toggle').removeClass("open");
      if(animate) {
        $('.facets_region_2').slideUp();
        $('.facets_region_1 > .container > div:nth-child(2)').css('max-height', '62px');
      } else {
        $('.facets_region_2').hide();
        $('.facets_region_1 > .container > div:nth-child(2)').css('max-height', '62px');
      }
      $('.filter-toggle').text(Drupal.t('More filters'));
    }
  };

  Drupal.behaviors.mobileFilters = {
    attach: function (context, settings) {
      if ($('.content-wrapper .field--search-page-filters')[0]) {
        $(once('mobile-filter', '.ds-header h1')).append('<div class="mobile-filter-toggle-wrapper rs_preserve"><p class="mobile-filter-toggle">filteren</p></div>');

        $('.content-wrapper .field--search-page-filters .facets_region_1').addClass('hide-on-mobile');
        $('.content-wrapper .field--search-page-filters .facets_region_2').addClass('hide-on-mobile');

        $('.mobile-filter-toggle', context).click(function (e) {
          e.preventDefault();
          Drupal.behaviors.mobileFilters.toggle();
        });
      }
    },
    toggle: function(animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(!$('.content-wrapper .field--search-page-filters .facets_region_1').is(':visible')) {
        Drupal.behaviors.mobileFilters.show(animate);
      } else {
        Drupal.behaviors.mobileFilters.hide(animate);
      }
    },
    show: function(animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $('.content-wrapper .field--search-page-filters .facets_region_1').slideDown();
        $('.content-wrapper .field--search-page-filters .facets_region_2').slideDown();
      } else {
        $('.content-wrapper .field--search-page-filters .facets_region_1').show();
        $('.content-wrapper .field--search-page-filters .facets_region_2').show();
      }
    },
    hide: function(animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $('.content-wrapper .field--search-page-filters .facets_region_1').slideUp();
        $('.content-wrapper .field--search-page-filters .facets_region_2').slideUp();
      } else {
        $('.content-wrapper .field--search-page-filters .facets_region_1').hide();
        $('.content-wrapper .field--search-page-filters .facets_region_2').hide();
      }
    }
  };

  Drupal.behaviors.mapToggle = {
    attach: function (context, settings) {
      $(once('map-view', '.facets_region_3 .geolocation .geolocation-map-wrapper')).append('<div class="map-toggle-wrapper rs_preserve"><p class="map-toggle">' + Drupal.t('Map view') + '</p></div>');

      $(once('map-toggle', '.map-toggle-wrapper')).click(function (e) {
        Drupal.behaviors.mapToggle.toggle();
      });
    },
    toggle: function(animate) {
      animate = typeof animate !== 'undefined' ? animate : true;
      if($('.facets_region_3 .geolocation .geolocation-map-wrapper').height() == "120") {
        Drupal.behaviors.mapToggle.show(animate);
      } else {
        Drupal.behaviors.mapToggle.hide(animate);
      }
    },
    show: function(animate) {

      $('.facets_region_3').addClass("anchor-open");
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $('.facets_region_3 .geolocation .geolocation-map-wrapper').animate({
          height: $('.facets_region_3 .geolocation .geolocation-map-wrapper').get(0).scrollHeight
        }, 300, function(){
          $(this).height('auto');
        });
      } else {
        $('.facets_region_3 .geolocation .geolocation-map-wrapper').css('height', 'auto');
      }
    },
    hide: function(animate) {

      $('.facets_region_3').removeClass("anchor-open");
      animate = typeof animate !== 'undefined' ? animate : true;
      if(animate) {
        $('.facets_region_3 .geolocation .geolocation-map-wrapper').animate({
          height: '120px',
        }, 300);
      } else {
        $('.facets_region_3 .geolocation .geolocation-map-wrapper').css('height', '120px');
      }
    }
  };

  $('#sharing-menu').addClass('rs_skip');
  $('.field--sn-socialmedia-share').addClass('rs_skip');

  Drupal.behaviors.webformChecks = {
    attach: function (context, settings) {

      $(document).ready(function() {
        $('form').find('textarea').each(function () {

          console.log($(this).attr('required'));

          if ($(this).attr('required')) {
            $(this).addClass('required');
          }
        });

        $('textarea.required').parent().parent().addClass('required');
      });


    }
  };

  Drupal.behaviors.addParamsApplicationLink = {
    attach: function (context, settings) {
      $(once('add-application-params', '.job-cta.button--wysiwyg a', context)).each(function () {
        var jobtitle = $('.node--job.node--full h1').text().trim();
        $(this).attr('href', function(i, h) {
          return h + (h.indexOf('?') != -1 ? "&voor_welke_vacature_solliciteer_je_2=" + jobtitle : "?voor_welke_vacature_solliciteer_je_2=" + jobtitle);
        });
      });
    }
  };

  Drupal.behaviors.BeforeInstallPrompt = {
    attach: function (context, settings) {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.prompt();
      });
    }
  };

/**
 * Initialize Enquire
 */
enquire.register(mobileQuery, {

  match : function() {
    Drupal.behaviors.filterToggle.show(false);
  },

  unmatch : function() {
    Drupal.behaviors.mobileMenu.hide(false);
  },

  setup : function() {},
  deferSetup : true,

  destroy : function() {

  }

}).register(nonMobileQuery, {
  match : function() {
    Drupal.behaviors.filterToggle.hide(false);
    $(matchHeightElements.join(', ')).matchHeight({ byRow: true, property: 'min-height' });
  },

  unmatch : function() {
    $(matchHeightElements.join(', ')).matchHeight({ property: 'min-height', remove: true });
    Drupal.behaviors.generalToggle.hideAll(false);
  },

  setup : function() {},
  deferSetup : true,

  destroy : function() {}

});

})(jQuery, Drupal, once);
