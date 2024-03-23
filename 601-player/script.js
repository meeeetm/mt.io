// JS libraries used:
// 1. HLS.js https://github.com/video-dev/hls.js/
// 2. Plyr: https://plyr.io/

// We'll need an HLS playlist (.m3u8) file to start with.
// This can be the output of the Amazon Media Convert process
const videoSourceUrl = "https://turkmedya-live.ercdn.net/tv24/tv24.m3u8";

window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById('video-player');
  const player = new Plyr(video, {
    quality: {
      default: 1080 } });



  if (Hls.isSupported()) {
    const hls = new Hls({
      startLevel: 6 // Set 1080p as default quality
    });
    hls.loadSource(videoSourceUrl);
    hls.attachMedia(video);
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    // Some devices might not support HLS js but can still play the
    // m3u8 media
    video.src = videoSourceUrl;
  } else {
    // Consider using a replacement video in a more traditional format
    // like mp4 as a fallback
    console.log("HLS videos are not supported by your browser.");
    return false;
  }
});