
$(document).ready(function () {
  $('#TrailerLink').click(function () {
    $('.detail-video-container ul li').removeClass("active");
    $(this).addClass("active"); $('#FirstEpisode').css("display", "none");
    rmpEpisode.pause();
    $('#Trailer').css("display", "block");
    $("#rmpPlayerDetail").height($('#rmpPlayerDetailFirstEpisode').height());
  });
  $('#FirstEpisodeLink').click(function () {
    $('.detail-video-container ul li').removeClass("active");
    $(this).addClass("active"); $('#Trailer').css("display", "none");
    rmpTrailer.pause();

    $('#FirstEpisode').css("display", "block");
  });
  var contentUrl = $("#dataTraveler").attr("DetailVideoUrl"),
    imgUrl = $("#dataTraveler").attr("ImgUrl"),
    firstEpisode = $("#dataTraveler").attr("firstEpisode"),
    firstEpisodeImgUrl = $("#dataTraveler").attr("firstEpisodeImgUrl"),
    AdUri = $("#dataTraveler").attr("AdUri");

  var PlayerLicenseKey = $('#dataTravelerGeneral').attr("PlayerLicenseKey")
  var src = {
    mp4: contentUrl
  };
  var settings = {
    licenseKey: PlayerLicenseKey,
    autoHeightMode: true,
    autoHeightModeRatio: 1.77,
    skin: 's2',
    pip: false,
    contentMetadata: {
      poster: [
        imgUrl
      ]
    },
    ads: true,
    adTagUrl: AdUri,
    googleCast: false,
    src: src
  };
  var elementID = 'rmpPlayerDetail';
  var rmpElementTrailer = document.getElementById(elementID);
  rmpElementTrailer.addEventListener('ready', function () {
    if ($('.rmp-volume').css("display") == "block") {
      $('.rmp-desktop-volume-icon-3').css("display", "none");
    }
    $('.rmp-desktop-volume-icon-3 .volume-icon').on("click",
      function () {
        if (rmpTrailer.getMute()) {
          $('.rmp-desktop-volume-icon-3').addClass("rmp-i-volume");
          $('.rmp-desktop-volume-icon-3').removeClass("rmp-i-off-volume");
          $("input[type=range]").val(100);
        } else {

          $('.rmp-desktop-volume-icon-3').addClass("rmp-i-off-volume");
          $('.rmp-desktop-volume-icon-3').removeClass("rmp-i-volume");

          $("input[type=range]").val(0);

        }
        rmpTrailer.setMute(!rmpTrailer.getMute());


      });
    $('input[type=range]').on('input', function () {
      rmpTrailer.setVolume($(this).val() / 100);
      if ($(this).val() < 10) {
        $('.rmp-desktop-volume-icon-3').addClass("rmp-i-off-volume");
        $('.rmp-desktop-volume-icon-3').removeClass("rmp-i-volume");
      } else {
        $('.rmp-desktop-volume-icon-3').addClass("rmp-i-volume");
        $('.rmp-desktop-volume-icon-3').removeClass("rmp-i-off-volume");
      }

    });
    $('#rmpPlayerDetail .rmp-control-bar').append($('.rmp-i-volume.rmp-desktop-volume-icon-3'));
    $('.rmp-i-volume.rmp-desktop-volume-icon-3').addClass("player-button");

    $('.rmp-desktop-volume-icon-3').css("display", "block");


  });
  var rmpTrailer = new RadiantMP(elementID);
  rmpTrailer.init(settings);


  var srcEpisode = {
    hls: firstEpisode
  };
  var settingsEpisode = {
    licenseKey: PlayerLicenseKey,
    autoHeightMode: true,
    autoHeightModeRatio: 1.77,
    skin: 's2',
    pip: false,
    contentMetadata: {
      poster: [
        firstEpisodeImgUrl
      ]
    },

    googleCast: false,
    src: srcEpisode
  };
  var elementIDEpisode = 'rmpPlayerDetailFirstEpisode';
  var rmpElement = document.getElementById(elementIDEpisode);
  if (rmpElement != null) {
    rmpElement.addEventListener('ready', function () {
      if ($('.rmp-volume').css("display") == "block") {
        $('.rmp-desktop-volume-icon-2').css("display", "none");
      }
      $('.rmp-desktop-volume-icon-2 .volume-icon').on("click",
        function () {
          if (rmpEpisode.getMute()) {
            $('.rmp-desktop-volume-icon-2').addClass("rmp-i-volume");
            $('.rmp-desktop-volume-icon-2').removeClass("rmp-i-off-volume");
            $("input[type=range]").val(100);
          } else {

            $('.rmp-desktop-volume-icon-2').addClass("rmp-i-off-volume");
            $('.rmp-desktop-volume-icon-2').removeClass("rmp-i-volume");

            $("input[type=range]").val(0);

          }
          rmpEpisode.setMute(!rmpEpisode.getMute());


        });
      $('input[type=range]').on('input', function () {
        rmpEpisode.setVolume($(this).val() / 100);
        if ($(this).val() < 10) {
          $('.rmp-desktop-volume-icon-2').addClass("rmp-i-off-volume");
          $('.rmp-desktop-volume-icon-2').removeClass("rmp-i-volume");
        } else {
          $('.rmp-desktop-volume-icon-2').addClass("rmp-i-volume");
          $('.rmp-desktop-volume-icon-2').removeClass("rmp-i-off-volume");
        }

      });
      $('#rmpPlayerDetailFirstEpisode .rmp-control-bar').append($('.rmp-i-volume.rmp-desktop-volume-icon-2'));
      $('.rmp-i-volume.rmp-desktop-volume-icon-2').addClass("player-button");
      $('.rmp-desktop-volume-icon-2').css("display", "block");


    });
    var rmpEpisode = new RadiantMP(elementIDEpisode);
    rmpEpisode.init(settingsEpisode);
  }



});
window.addEventListener("orientationchange", function (event) {
  if (event.target.screen.orientation.angle == 90 || event.target.screen.orientation.angle == 180) {
    if ($('.rmp-volume').css("display") == "block") {
      $('.rmp-desktop-volume-icon-2').css("display", "none");
    }
  }
});
