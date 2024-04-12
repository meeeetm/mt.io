$(function() {

    $('#top-20 .jp-jplayer').each(function(index) {
        var i = index + 1;

        var element = jQuery(this);
        var muzik = element.find('.audio').data('src');
        element.jPlayer({
            ready: function() {
                jQuery(this).jPlayer("setMedia", {
                    mp3: muzik
                });
            },

            preload: "auto",

            pause: function() {
                var index = jQuery(this).attr("id");

                index = index.split("-");
                index = index[index.length - 1];
                var el = jQuery("#chart-container-" + index);
                el.find('.jp-progress,.jp-title')
                    .slideToggle();
            },
            play: function() { // Her iki jPlayer'ın birlikte oynamasını önlemek için.
                jQuery(this).jPlayer("pauseOthers");
                var index = jQuery(this).attr("id");
                index = index.split("-");
                index = index[index.length - 1];
                var el = jQuery("#chart-container-" + index);
                el.find('.jp-progress,.jp-title')
                    .slideToggle();
            },

            swfPath: "template/jPlayer/jplayer",
            supplied: "mp3",
            preload: false,
            cssSelectorAncestor: "#chart-container-" + i
        });
    });

    var slider = $(".slider").bxSlider({
        responsive: true,
        pager: true,
        pagerType: "full",
        controls: false,
        auto: true,
        pause: 6000,
        autoHover: true,
        mode: "fade",
        speed: 20,
        stopAutoOnClick: true,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });

    $('body').stop(true, true).on("mouseover", ".bx-pager-link", function(e) {
        $(this).trigger("click");
    })

    $("#programcilar .horizon-carousel").bxSlider({
        speed: 400,
        pager: false,
        responsive: true,
        touchEnabled: false,
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 240,
        slideMargin: 15,
        shrinkItems: true,
        oneToOneTouch: true,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });

    $(".vertical-carousel").bxSlider({
        speed: 400,
        auto: false,
        pause: 4000,
        mode: "vertical",
        pager: false,
        minSlides: 4,
        autoHover: true,
        shrinkItems: true,
        infiniteLoop: false,
        swipeThreshold: 100,
        oneToOneTouch: false,
        touchEnabled: false,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });

    $("#haberler .horizon-carousel").bxSlider({
        speed: 400,
        pause: 4000,
        auto: false,
        pager: false,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 15,
        autoHover: true,
        infiniteLoop: false,
        swipeThreshold: 100,
        oneToOneTouch: false,
        touchEnabled: false,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });

    var childWin;

    function popplayer(name, url, width, height) {
        //Alt pencerenin açık olup olmadığını kontrol et...
        if (childWin & !(childWin === undefined || childWin === null) && childWin.focus) {
            childWin.focus();
        } else {
            childWin = window.open(url, name, 'height=' + height + ',width=' + width);
        }
        return false;
    }

    $('#canli-dinle a').off('click').on('click', function(e) {
        e.preventDefault();
        $('#main-player').jPlayer("stop");
        popplayer('dinle', '/dinle/', 550, 450);
    });

    $('#mesaj-gonder').off('click').on('click', function(e) {
        e.preventDefault();
        popplayer('istek', '/istek/', 550, 750);
    })
});