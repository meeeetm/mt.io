/**
 * @file
 */

var social_share_width = 520;
var social_share_height = 350;

(function ($) {

  Drupal.behaviors.q8SocialShare = {
    attach: function(context, settings) {

      var $socialshare_menu = $('#sharing-menu');

      $('a', $socialshare_menu).click(function(e) {
        var link = $(this).attr('href');
        if(!$(this).hasClass('social-share-link--link') && !link.startsWith('mailto')) {
          e.preventDefault();
          var top = (screen.height / 2) - (social_share_width / 2);
          var left = (screen.width / 2) - (social_share_height / 2);
          window.open(link, 'social-share', 'top=' + top + ',left=' + left + ',toolbar=0,status=0,width=' + social_share_width + ',height=' + social_share_height);
        }
      });

    }
  };

  Drupal.behaviors.shareLink = {
    attach: function(context, settings) {
      var linkBtn = $('.social-share-link--link');
      var link = linkBtn.attr('href');
      new Clipboard('.social-share-link--link');
      linkBtn.attr('data-clipboard-text', link);
      linkBtn.click(function(e) {
        $(this).addClass('copied');
        e.preventDefault();
      });
    }
  };

})(jQuery);
