function onYouTubeIframeAPIReady() {

  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');


var videos = [ '5s_v_Zocoeg', 'kUCksFd9a5s', 'Y-RSKBy5zK8', '3zLGEhGRg3k', 'xK1EngD7YVk', 'IIyOdlqjeu8', 'X8N1JMyLmpA', 'K7GHEvNHQFk', 'TEBJD15EHAc', '9MBm-6u88Yw','y4L0lm-QYQY',
'4UjpB63lOOQ','4zpyq9-H2pw','DWNMFZRcy-8','MABpFnN2CYw','1WzrxfQde4Y','QQXld9fDRTY','Vn5EWVkW_ZU','JWd-ZH4VwB4','QH9E4pQ0FPo','sdBTYG7HCfw',
'PgaJaUhfbIQ','2HNQAp2CGHQ','dKu8xVTh4hE','D2Rb5UtWQ04','sWg_JLFOvcU','rvvz3VG7PUE','VAgYXxJQW6s',
'J4zIiRpFHbY','7RkWc-2jMEc','D26NleYQzbs','JfTjsFHmSwY','ja58j5lfaEc','V67KBHa6pKE','doZnokCp-uc' ];






  var playlistThumbs = document.querySelector('.playlist-thumbs');

  var videoThumbs;
  var currentIndex = 0;

  videos.forEach(function(id, i){
    var activeClass = '';
    if ( i === currentIndex ) {
      activeClass = 'is-active';
    }
    playlistThumbs.innerHTML += '<li class="video-thumb '+activeClass+'"><img src="https://img.youtube.com/vi/'+id+'/default.jpg"/></li>';
  });
  
  videoThumbs = document.querySelectorAll('.video-thumb');
  
  initPlayer(videos[currentIndex]);
  
  
  var player;
  function initPlayer(id) {
    console.log('initPlayer');
    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    player = new YT.Player('player', {
      height: '250',
      width: '340',
      videoId: id,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  
  prevBtn.addEventListener('click', playPrevVideo);
  nextBtn.addEventListener('click', playNextVideo);

  // The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log('onPlayerREady', event);
    event.target.playVideo();
  }
  
  function onPlayerStateChange(event) {
    if ( event.data === 0 ) { // video ended
      playNextVideo();
    }
  }

  function playNextVideo() {
    currentIndex += 1;
    player.loadVideoById(videos[currentIndex], 0, "large");
    for ( var i=0; videoThumbs.length > i; i++ ) {
      videoThumbs[i].className = videoThumbs[i].className.split('is-active').join('');
      videoThumbs[currentIndex].className += ' is-active';
    }
  }
  
  function playPrevVideo() {
    currentIndex -= 1;
    player.loadVideoById(videos[currentIndex], 0, "large");
    for ( var i=0; videoThumbs.length > i; i++ ) {
      videoThumbs[i].className = videoThumbs[i].className.split('is-active').join('');
      videoThumbs[currentIndex].className += ' is-active';
    }
  }
  
  
  
}