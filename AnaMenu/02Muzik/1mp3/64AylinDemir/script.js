function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [
    {
      name:"♫ Ahlatın Başındayım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1ddc91354e339ed6e4a69f6ff7584410.mp3 ",
      duration:""
    },

    {
      name:"♫ Bir Çift Güvercin Olsam ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5c805bda86ce8c03ac079a95ec9c5a2b.mp3 ",
      duration:""
    },
    {
      name:"♫ Bitlisin Önünde Bağlar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0a5fe4b37407731dde17d0b2057051ff.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Tepe Pullu Tepe ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7941ec560fde45891836b3247f4fd36f.mp3 ",
      duration:""
    },
 {
      name:"♫ Bülbül Havalanmış Yüksekten Uçar ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/250fac8b0b329d445ae994cc7945c208.mp3",
      duration:""
    },
 {
      name:"♫ Değme Felek ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/da3041e8142d033ac347d75ee7702eb6.mp3 ",
      duration:""
    },
 {
      name:"♫ Diyarbakır Şad Akar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2200df433e9a504cae27de86d8c7b6b6.mp3 ",
      duration:""
    },
 {
      name:"♫ El Gözünde Dertsiz Gamsız Biriyim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5fc5f81911858a8df4df9b7f6bb6cf02.mp3 ",
      duration:""
    },
 {
      name:"♫ Ela Gözlüm Ben bu Elden Gidersem ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6afe7f156e1982422dbd03a26611bc43.mp3 ",
      duration:""
    },
 {
      name:"♫ Erzurum Yapıları ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/67043aecd6019fcc1dff01bb30c70e96.mp3 ",
      duration:""
    },
 {
      name:"♫ Erzurumun Güzelleri ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b2da977f2b9232555db8921804b5e296.mp3 ",
      duration:""
    },
 {
      name:"♫ Eşarbını Yan Bağlama ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/18e2eb0f0fa24462a7abce4b4be553b7.mp3 ",
      duration:""
    },
 {
      name:"♫ Fincanlım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/88bbc1b82c500e2f2965ca8b64c8719e.mp3 ",
      duration:""
    },

 {
      name:"♫ Hey Güzeller ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f9b8b18114186bbd5e7508e68b16f130.mp3 ",
      duration:""
    },

 {
      name:"♫ Karaduta Yaslandım, Bahçenizde Gül Var mı, Al Yarim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/dee94530251e3f5541816d01df9c3625.mp3 ",
      duration:""
    },

 {
      name:"♫ Kaymakamın Kızları ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fec6ac9ef34d411c9ae54132c9c49629.mp3 ",
      duration:""
    },

 {
      name:"♫  Keyfimiz Ellere Dert Oldu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/86d23ca04804d8ba2abf07d12bfefd2f.mp3 ",
      duration:""
    },

 {
      name:"♫ Kim Bilir ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1993efdd5a527dcb929797d267e92116.mp3 ",
      duration:""
    },

 {
      name:"♫ Kimbilir ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1993d5c60a13559d66d4437e469c2e55.mp3 ",
      duration:""
    },

 {
      name:"♫ Kınayı Getir Aney ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/33322c8ffe98eec29c12ac3b2c6e9086.mp3 ",
      duration:""
    },

 {
      name:"♫ Konma Bülbül Konma Nergis Dalına ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e35f5712498e0132c1ada9bac351776e.mp3 ",
      duration:""
    },

 {
      name:"♫  Kürdün Kızı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4af9beef807c49625542e6b4470b4941.mp3 ",
      duration:""
    },

 {
      name:"♫ Malatya Malatya ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4fe09c7c23dba50bf040a538285de501.mp3 ",
      duration:""
    },

 {
      name:"♫ Mısto ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1117df6a3cfbd3c7c4cc5104e0b44698.mp3 ",
      duration:""
    },

 {
      name:"♫ Nargilemin Dumanı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e28abb35956ef2dac68f4c35ebc5ea34.mp3 ",
      duration:""
    },

 {
      name:"♫ Narini ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0f4d3c1a8129ac560cef1f4ac6c3cd88.mp3 ",
      duration:""
    },

 {
      name:"♫ O Yar Gelir ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c9ec11411a12cef09bc763e271fdd99b.mp3 ",
      duration:""
    },

 {
      name:"♫ Ölürem Kızlar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/85cf2c59a549528f66630f8c5a34d277.mp3 ",
      duration:""
    },


 {
      name:"♫ Özeniyorlar Ama Çözemiyorlar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d81019948b4e1bcbe5d642295940b033.mp3 ",
      duration:""
    },


 {
      name:"♫ Potpori ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/07374801472ed6d2f9e1dc68d2fa9892.mp3 ",
      duration:""
    },


 {
      name:"♫ Sormayın ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/367890c2eca55cd8f7f9d09ff8bfc7f6.mp3 ",
      duration:""
    },


 {
      name:"♫ Şu Dünyaya Geldim Giderim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0ca2d7b73eadd155eadd52c8780e8579.mp3 ",
      duration:""
    },


 {
      name:"♫ Tello Can ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/309fe5b5125589e1b781776ff8207047.mp3 ",
      duration:""
    },


 {
      name:"♫ Tello Gider Yan Gider ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/24ee0a1bb124f435fb6a4f3aa5e21ae1.mp3 ",
      duration:""
    },


 {
      name:"♫ Tutuştu Gönül Çerağım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/080ddf3f7001cfff8f7cd87e05c581d5.mp3 ",
      duration:""
    },


 {
      name:"♫ Tribin Olurum  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/baa28dd262f44e8d9150f63f1997820d.mp3 ",
      duration:""
    },


 {
      name:"♫ Urfalıyam Ezelden ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/877690a583b4e5c42e162a957491de14.mp3 ",
      duration:""
    },


 {
      name:"♫ Usandım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7d50d84b5cbd1aa596ef642214bcc656.mp3 ",
      duration:""
    },


 {
      name:"♫ Uyan Sunam Uyan ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8080e7cab00d3f1d3a92f49e12bfc154.mp3 ",
      duration:""
    },


 {
      name:"♫ Yaylalar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/06a19f6d0ad9a14fa38e3564e7ccdc0f.mp3 ",
      duration:""
    },


 {
      name:"♫ Yazıyorum Seni ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c9af8aa42bebc305fbdb14fed9c9cca9.mp3 ",
      duration:""
    },


 {
      name:"♫ Yazıyorum Seni Kalem Elimde ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/429e39813bb1498bc752768a7050b9d1.mp3  ",
      duration:""
    }




  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }