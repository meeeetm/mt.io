window.onload = function () {
 
  var container = document.getElementById("live"),
      player,
      initialDelay = 10,
      timer,
      // clone default errors for customization
      customErrors = flowplayer.defaults.errors.slice(0),
      //customError = "<h2>We are sorry, currently no live stream available.</h2>"
      //            + "<p>Retrying in <span>" + initialDelay + "</span> seconds ...</p>",
      // preload error image; case: user disconnects
      errImage = new Image();
 
  //customErrors[2] = customError;
  //customErrors[4] = customError;
 
  player = flowplayer(container, {

    // use custom errors 2 and 4
    errors: customErrors,
    ratio: 9/16,
    mutedAutoplay: false,
    key: "$366314822078578",
    autoplay: true,
    splash: true,
    live: true,
    dvr: true,
    share: false,
    clip: {
      
      live: true,
      dvr: true,
      hlsjs: {
        xhrSetup: function (xhr, url) {
          var isPlaylist = url.lastIndexOf(".m3u8") === url.length - 5;
          xhr.addEventListener("error", function () {
            if (isPlaylist) {
              // intentionally throw Network error
              player.trigger("error", [player, {code: 2}]);
            }
          });
          xhr.addEventListener("readystatechange", function (e) {
            var xstatus = e.currentTarget.status;
            if (isPlaylist && xhr.readyState === 4 && xstatus >= 400 && xstatus < 499) {
              // intentionally throw Video file not found error
              player.trigger("error", [player, {code: 4}]);
            }
          });
        }
      },
      flashls: {
        // limit amount of retries to load hls manifests in Flash
        manifestloadmaxretry: 1
      },
      sources: [
        { type: "application/x-mpegurl",
          src:  "https://turkmedya-live.ercdn.net/tv360/tv360_720p.m3u8" }
      ]
    }
 
  }).on("error", function (e, api, err) {
    var delay = initialDelay;
    console.info("code: " + e.code + ", message: " + e.message);
    clearInterval(timer);
 
    if (err.code === 2 || err.code === 4) {
      container.className += " is-offline";
 
      if (flowplayer.support.flashVideo) {
        api.one("flashdisabled", function () {
          container.querySelector(".fp-flash-disabled").style.display = "none";
        });
      }
 
      timer = setInterval(function () {
        var messageElement = container.querySelector(".fp-ui .fp-message");
 
        delay -= 1;
 
        if (delay && messageElement) {
          messageElement.querySelector("span").innerHTML = delay;
          // only for disconnected user:
          messageElement.style.backgroundImage = "url(" + errImage.src + ")";
        } else {
          clearInterval(timer);
          api.error = api.loading = false;
          if (messageElement) {
            container.querySelector(".fp-ui").removeChild(messageElement);
          }
          container.className = container.className.replace(/\bis-(error|offline)\b/g, "");
          api.load();
        }
 
      }, 1000);
    }
  
  //});
  }).on("load", function (e, api, video) {
      // disable API for pre-roll
      console.log(video);
      console.log(e);
      console.log(api);

      api.load();
     
      console.info("code: " + e.code + ", message: " + e.msg);
      
      // info for demo purposes only
      //document.getElementById("live").innerHTML =
      //api.engine.engineName + " engine playing " + video.src;
   
    });
  // preload error image in case of network timeouts
  errImage.src = "https://demos.flowplayer.com/media/img/interruption.png";
 
 
};