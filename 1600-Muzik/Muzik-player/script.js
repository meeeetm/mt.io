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
          name: "Uğur Işılak ",
          artist: "Yarına Kalır Yanına Kalmaz",
          cover: " https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/icinde-bir-sizi-kalir-2024/ugur-isilak-yarina-kalir-yanina-kalmaz.mp3",
          favorited: false
        },
        {
          name: "Uğur Işılak",
          artist: "Mevzu Yeni Başlıyor",
          cover: "https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/icinde-bir-sizi-kalir-2024/ugur-isilak-mevzu-yeni-basliyor.mp3",
          favorited: true
        },
        {
          name: "Uğur Işılak",
          artist: "Bıraktığın Yerdeyim",
          cover: "https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/icinde-bir-sizi-kalir-2024/ugur-isilak-biraktigin-yerdeyim.mp3",
          favorited: false
        },
        {
          name: "Uğur Işılak",
          artist: "Bu Dünya Dar Gelir Bize",
          cover: "https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/icinde-bir-sizi-kalir-2024/ugur-isilak-bu-dunya-dar-gelir-bize.mp3",
          favorited: false
        },
        {
          name: "Uğur Işılak",
          artist: "İçinde Bir Sızı Kalır",
          cover: "https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/icinde-bir-sizi-kalir-2024/ugur-isilak-icinde-bir-sizi-kalir.mp3",
          favorited: true
        },
        {
          name: "Uğur Işılak",
          artist: " Dur Patron Dur",
          cover: "https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/burasi-dunya-2023/ugur-isilak-dur-patron-dur.mp3",
          favorited: false
        },
        {
          name: "Uğur Işılak",
          artist: "Aslımızı Soran Sorsun",
          cover: "https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/burasi-dunya-2023/ugur-isilak-aslimizi-soran-sorsun.mp3",
          favorited: true
        },
        {
          name: "Uğur Işılak",
          artist: "Erdoğan Dombıra",
          cover: "https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/Ugur-Isilak/Single/Ugur-Isilak-Erdogan-Dombira.mp3",
          favorited: false
        },
        {
          name: "Uğur Işılak",
          artist: "Birleşmiş Milletler",
          cover: "https://yt3.googleusercontent.com/ytc/AIdro_m9PDizNinImaQUtB-uWUniH1cyBlTt3TjEMD558w=s900-c-k-c0x00ffffff-no-rj",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/burasi-dunya-2023/ugur-isilak-birlesmis-milletler.mp3",
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