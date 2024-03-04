/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "İbrahim Tatlıses ",
          artist: "Yeni Mavişim",
          cover: " https://vivaturkiye.eu/wp-content/uploads/2021/09/Cover-1-12.jpg",
          source: "https://tpsrv.cfd/file/1399/1/29/1/c/12/3/13/9/10/4/4/%C4%B0brahim%20Tatl%C4%B1ses%20-%20Mavi%C5%9Fim%20(feat.%20DJ%20Lazvegasl%C4%B1)%20(2021)%20Single%20%C4%B0ndir/%C4%B0brahim%20Tatl%C4%B1ses%20-%20Mavi%C5%9Fim%20%28feat.%20DJ%20Lazvegasl%C4%B1%29.mp3",
          favorited: false
        },
        {
          name: "İbrahim Tatlıses",
          artist: "Kara Üzüm Habbesi",
          cover: "https://mp3sepet.com/files/images/101/ibrahim-tatlises-kara-uzum-habbesi-tefo-ve-seko-duet.jpg",
          source: "https://mp3sepet.com/files/mp3/101/ibrahim-tatlises-gozleri-bela-kiz.mp3",
          favorited: true
        },
        {
          name: "İbrahim Tatlıses",
          artist: "Haydi Söyle",
          cover: "https://mp3sepet.com/files/images/101/ibrahim-tatlises-haydi-soyle-yeni-versiyon.jpg",
          source: "https://mp3sepet.com/files/mp3/101/ibrahim-tatlises-haydi-soyle-yeni-versiyon.mp3",
          favorited: false
        },
        {
          name: "İbrahim Tatlıses",
          artist: "Medineye Varamadım",
          cover: "https://mp3sepet.com/files/images/101/ibrahim-tatlises-medineye-varamadim.jpg",
          source: "https://mp3sepet.com/files/mp3/101/ibrahim-tatlises-medineye-varamadim.mp3",
          favorited: false
        },
        {
          name: "İbrahim Tatlıses",
          artist: "Gelmesin (Remix)",
          cover: "https://mp3sepet.com/files/images/101/ibrahim-tatlises-gelmesin-remix.jpg",
          source: "https://mp3sepet.com/files/mp3/101/ibrahim-tatlises-gelmesin-remix.mp3",
          favorited: true
        },
        {
          name: "İbrahim Tatlıses",
          artist: "Yaylalar",
          cover: "https://mp3sepet.com/files/images/101/ibrahim-tatlises-yaylalar.jpg",
          source: "https://mp3sepet.com/files/mp3/101/ibrahim-tatlises-yaylalar.mp3",
          favorited: false
        },
        {
          name: "İbrahim Tatlıses",
          artist: "Yaradan Var",
          cover: "https://mp3sepet.com/files/images/101/ibrahim-tatlises-yaradan-var.jpg",
          source: "https://mp3sepet.com/files/mp3/101/ibrahim-tatlises-yaradan-var.mp3",
          favorited: true
        },
        {
          name: "İbrahim Tatlıses",
          artist: "Yemin Ettim",
          cover: "https://mp3sepet.com/files/images/101/ibrahim-tatlises-yemin-ettim.jpg",
          source: "https://mp3sepet.com/files/mp3/101/ibrahim-tatlises-yemin-ettim.mp3",
          favorited: false
        },
        {
          name: "İbrahim Tatlıses",
          artist: "Yeşil Yeşil",
          cover: "https://mp3sepet.com/files/images/101/ibrahim-tatlises-yesil-yesil.jpg",
          source: "https://mp3sepet.com/files/mp3/101/ibrahim-tatlises-yesil-yesil.mp3",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});