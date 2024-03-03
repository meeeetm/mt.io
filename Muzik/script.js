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
          name: "Rahmi Aydın",
          artist: "Senin Hasretin Varken Bu şehir Yaşanmaz",
          cover: " https://tubidy.cool/nthumbs/1/uKPJ7_2FL12TN_2FguBSP8Va_2Fw_3D_3D.jpg",
          source: "https://d229.d2mefast.net/tb/5/fc/rahmi_aydin_senin_hasretin_varken_bu_sehir_yasanmaz_mp3_57684.mp3?play",
          url: "https://d229.d2mefast.net/tb/4/88/rahmi_aydin_senin_hasretin_varken_bu_sehir_yasanmaz_h264_57806.mp4?play",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "GİDEMEDİM KÖYÜME",
          cover: "https://tubidy.cool/nthumbs/1/_2B5qrh2dBwoJJiz18G3GrQg_3D_3D.jpg",
          source: "https://d261.d2mefast.net/tb/0/bf/rahmi_aydin...gidemedim_koyume_mp3_58058.mp3?play",
          url: "https://d261.d2mefast.net/tb/5/24/rahmi_aydin...gidemedim_koyume_h264_58112.mp4?play",
          favorited: true
        },
        {
          name: "Rahmi Aydın",
          artist: "Bir Bilene Soralım",
          cover: "https://tubidy.cool/nthumbs/1/U2HhVxQcv4HgJiGAuON94Q_3D_3D.jpg",
          source: "https://d222.d2mefast.net/tb/8/b4/rahmi_aydin_bir_bilene_soralim_mp3_58161.mp3?play",
          url: "https://d222.d2mefast.net/tb/2/bf/rahmi_aydin_bir_bilene_soralim_h264_58269.mp4?play",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Vicdanın Yok mu Senin",
          cover: "https://tubidy.cool/nthumbs/1/bR2jON_2B04nKbEBXGUUZSIQ_3D_3D.jpg",
          source: "https://d175.d2mefast.net/tb/4/0b/rahmi_aydin_vicdanin_yok_mu_senin_mp3_58212.mp3?play",
          url: "https://d175.d2mefast.net/tb/6/55/rahmi_aydin_vicdanin_yok_mu_senin_h264_58244.mp4?play",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Ayşen",
          cover: "https://tubidy.cool/nthumbs/1/sVBUpuVJJMXRlzW22g2Wlw_3D_3D.jpg",
          source: "https://d222.d2mefast.net/tb/8/42/rahmi_aydin_aysen_mp3_58355.mp3?play",
          url: "https://d222.d2mefast.net/tb/0/4a/rahmi_aydin_aysen_h264_58335.mp4?play",
          favorited: true
        },
        {
          name: "Rahmi Aydın",
          artist: "Babam",
          cover: "https://tubidy.cool/nthumbs/1/pm_2BSkbfio1JaWv3ZD0pdyw_3D_3D.jpg",
          source: "https://d146.d2mefast.net/tb/6/5a/rahmi_aydin_babam_mp3_58436.mp3?play",
          url: "https://d146.d2mefast.net/tb/b/f1/rahmi_aydin_babam_h264_58415.mp4?play",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "BeLimizi Büken Var",
          cover: "https://tubidy.cool/nthumbs/1/G1XgRiGPD3Yc5ekNd81a4w_3D_3D.jpg",
          source: "https://d207.d2mefast.net/tb/2/50/rahmi_aydin_belimizi_buken_var_mp3_58524.mp3?play",
          url: "https://d207.d2mefast.net/tb/9/cc/rahmi_aydin_belimizi_buken_var_h264_58505.mp4?play",
          favorited: true
        },
        {
          name: "Rahmi Aydın",
          artist: "SEVDA YÜKLÜ KERVANLAR-ALEMDE TEK",
          cover: "https://tubidy.cool/nthumbs/1/e5cz2UvdnJ4SAhgzsnU9hA_3D_3D.jpg",
          source: "https://d230.d2mefast.net/tb/6/e4/rahmi_aydin-sevda_yuklu_kervanlar-alemde_tek_mp3_58651.mp3?play",
          url: "https://d230.d2mefast.net/tb/3/9f/rahmi_aydin-sevda_yuklu_kervanlar-alemde_tek_h264_58623.mp4?play ",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "ÇIKMA KARŞIMA",
          cover: "https://tubidy.cool/nthumbs/1/i_2FZRL_2FbaCZGlYZgadUkv7w_3D_3D.jpg",
          source: "https://d217.d2mefast.net/tb/2/d6/cikma_karsima_mp3_58743.mp3?play",
          url: "https://d217.d2mefast.net/tb/a/c9/cikma_karsima_h264_58726.mp4?play",
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