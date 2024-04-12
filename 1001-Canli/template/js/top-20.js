/*
 * Radyo Scripti V7.0
 * Author - Harun EFE - ( Web Yazılım Hizmetleri)
 * Web - www.radyotescil.com - www.radyotescil.net
 * Mail - info@radyotescil.net  -  bilgi@radyotescil.com
 * Version - v7.0
*/
$(function(){

    $('#top-20 .jp-jplayer,#top-20-ayrinti .jp-jplayer').each(function(index) {
        var i = index+1;

        var element = jQuery(this);
        var muzik = element.find('.audio').data('src');
        element.jPlayer({
            ready: function () {
                jQuery(this).jPlayer("setMedia", {
                    mp3: muzik
                });
            },

            preload : "auto",

            pause : function() {
                var index = jQuery(this).attr("id");

                index = index.split("-");
                index = index[index.length-1];
                var el = jQuery("#chart-container-"+index);
                el.find('.jp-progress,.jp-title')
                    .slideToggle();
            },
            play: function() { // To avoid both jPlayers playing together.
                jQuery(this).jPlayer("pauseOthers");
                var index = jQuery(this).attr("id");
                index = index.split("-");
                index = index[index.length-1];
                var el = jQuery("#chart-container-"+index);
                el.find('.jp-progress,.jp-title')
                    .slideToggle();
            },

            swfPath: "template/radyo/jPlayer/jplayer",
            supplied: "mp3",
            preload:false,
            cssSelectorAncestor:"#chart-container-"+i
        });
    });

});