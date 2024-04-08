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
      name:"1 • Al-Fatihah",
      file:"https://server8.mp3quran.net/afs/001.mp3",
      duration:"00:51"
    },
    {
      name:"2 • Al-Baqarah",
      file:"https://server8.mp3quran.net/afs/002.mp3?opwvc=1",
      duration:"02:05:39"
    },
    {
      name:"3 • Ali-'Imran",
      file:"https://server8.mp3quran.net/afs/003.mp3",
      duration:"01:17:29"
    },
    {
      name:"4 • An-Nisa'",
      file:"https://server8.mp3quran.net/afs/004.mp3",
      duration:"01:19:45"
    },
    {
      name:"5 • Al-Mai'dah",
      file:"https://server8.mp3quran.net/afs/005.mp3",
      duration:"01:02:47"
    },
    {
      name:"6 • Al-An'am",
      file:"https://server8.mp3quran.net/afs/006.mp3",
      duration:"01:12:15"
    },
    {
      name:"7 • Al-A'raf",
      file:"https://server8.mp3quran.net/afs/007.mp3",
      duration:"01:22:52"
    },
    {
      name:"8 • Al-Anfal",
      file:"https://server8.mp3quran.net/afs/008.mp3",
      duration:"30:23"
    },
    {
      name:"9 • At-Taubah",
      file:"https://server8.mp3quran.net/afs/009.mp3",
      duration:"01:00:24"
    },
    {
      name:"10 • Yunus",
      file:"https://server8.mp3quran.net/afs/010.mp3",
      duration:"44:50"
    },
    {
      name:"11 • Hud",
      file:"https://server8.mp3quran.net/afs/011.mp3",
      duration:"46:11"
    },
    {
      name:"12 • Yusuf",
      file:"https://server8.mp3quran.net/afs/012.mp3",
      duration:"42:04"
    },
    {
      name:"13 • Ar-Ra'd",
      file:"https://server8.mp3quran.net/afs/013.mp3",
      duration:"20:16"
    },
    {
      name:"14 • Ibrahim",
      file:"https://server8.mp3quran.net/afs/014.mp3",
      duration:"20:27"
    },
    {
      name:"15 • Al-Hijr",
      file:"https://server8.mp3quran.net/afs/015.mp3",
      duration:"15:54"
    },
    {
      name:"16 • An-Nahl",
      file:"https://server8.mp3quran.net/afs/016.mp3",
      duration:"42:08"
    },
    {
      name:"17 • Al-Isra'",
      file:"https://server8.mp3quran.net/afs/017.mp3",
      duration:"35:13"
    },
    {
      name:"18 • Al-Kahf",
      file:"https://server8.mp3quran.net/afs/018.mp3",
      duration:"33:15"
    },
    {
      name:"19 • Maryam",
      file:"https://server8.mp3quran.net/afs/019.mp3",
      duration:"21:22"
    },
    {
      name:"20 • Ta Ha",
      file:"https://server8.mp3quran.net/afs/020.mp3",
      duration:"27:07"
    },
    {
      name:"21 • Al-Anbiya",
      file:"https://server8.mp3quran.net/afs/021.mp3",
      duration:"26:10"
    },
    {
      name:"22 • Al-Hajj",
      file:"https://server8.mp3quran.net/afs/022.mp3",
      duration:"29:32"
    },
    {
      name:"23 • Al-Mu'minun",
      file:"https://server8.mp3quran.net/afs/023.mp3",
      duration:"24:45"
    },
    {
      name:"24 • An-Nur",
      file:"https://server8.mp3quran.net/afs/024.mp3",
      duration:"30:40"
    },
    {
      name:"25 • Al-Furqan",
      file:"https://server8.mp3quran.net/afs/025.mp3",
      duration:"18:21"
    },
    {
      name:"26 • Asy-Syu'ara'",
      file:"https://server8.mp3quran.net/afs/026.mp3",
      duration:"30:32"
    },
    {
      name:"27 • An-Naml",
      file:"https://server8.mp3quran.net/afs/027.mp3",
      duration:"26:12"
    },
    {
      name:"28 • Al-Qasas",
      file:"https://server8.mp3quran.net/afs/028.mp3",
      duration:"31:43"
    },
    {
      name:"29 • Al-'Ankabut",
      file:"https://server8.mp3quran.net/afs/029.mp3",
      duration:"21:10"
    },
    {
      name:"30 • Ar-Rum",
      file:"https://server8.mp3quran.net/afs/030.mp3",
      duration:"19:31"
    },
    {
      name:"31 • Luqman",
      file:"https://server8.mp3quran.net/afs/031.mp3",
      duration:"11:55"
    },
    {
      name:"32 • As-Sajdah",
      file:"https://server8.mp3quran.net/afs/032.mp3",
      duration:"08:43"
    },
    {
      name:"33 • Al-Ahzab",
      file:"https://server8.mp3quran.net/afs/033.mp3",
      duration:"29:02"
    },
    {
      name:"34 • Saba'",
      file:"https://server8.mp3quran.net/afs/034.mp3",
      duration:"19:02"
    },
    {
      name:"35 • Fatir",
      file:"https://server8.mp3quran.net/afs/035.mp3",
      duration:"17:36"
    },
    {
      name:"36 • Ya Sin",
      file:"https://server8.mp3quran.net/afs/036.mp3",
      duration:"17:39"
    },
    {
      name:"37 • As-Saffat",
      file:"https://server8.mp3quran.net/afs/037.mp3",
      duration:"24:09"
    },
    {
      name:"38 • Sad",
      file:"https://server8.mp3quran.net/afs/038.mp3",
      duration:"17:49"
    },
    {
      name:"39 • Az-Zumar",
      file:"https://server8.mp3quran.net/afs/039.mp3",
      duration:"27:09"
    },
    {
      name:"40 • Ghafir",
      file:"https://server8.mp3quran.net/afs/040.mp3",
      duration:"26:07"
    },
    {
      name:"41 • Fussilat",
      file:"https://server8.mp3quran.net/afs/041.mp3",
      duration:"19:20"
    },
    {
      name:"42 • Asy-Syura",
      file:"https://server8.mp3quran.net/afs/042.mp3",
      duration:"19:29"
    },
    {
      name:"43 • Az-Zukhruf",
      file:"https://server8.mp3quran.net/afs/043.mp3",
      duration:"20:28"
    },
    {
      name:"44 • Ad-Dukhan",
      file:"https://server8.mp3quran.net/afs/044.mp3",
      duration:"09:36"
    },
    {
      name:"45 • Al-Jasiyah",
      file:"https://server8.mp3quran.net/afs/045.mp3",
      duration:"10:20"
    },
    {
      name:"46 • Al-Ahqaf",
      file:"https://server8.mp3quran.net/afs/046.mp3",
      duration:"15:57"
    },
    {
      name:"47 • Muhammad",
      file:"https://server8.mp3quran.net/afs/047.mp3",
      duration:"12:17"
    },
    {
      name:"48 • Al-Fath",
      file:"https://server8.mp3quran.net/afs/048.mp3",
      duration:"12:01"
    },
    {
      name:"49 • Al-Hujurat",
      file:"https://server8.mp3quran.net/afs/049.mp3",
      duration:"08:21"
    },
    {
      name:"50 • Qaf",
      file:"https://server8.mp3quran.net/afs/050.mp3",
      duration:"09:19"
    },
    {
      name:"51 • Az-Zariyat",
      file:"https://server8.mp3quran.net/afs/051.mp3",
      duration:"09:04"
    },
    {
      name:"52 • At-Tur",
      file:"https://server8.mp3quran.net/afs/052.mp3",
      duration:"08:05"
    },
    {
      name:"53 • An-Najm",
      file:"https://server8.mp3quran.net/afs/053.mp3",
      duration:"07:41"
    },
    {
      name:"54 • Al-Qamar",
      file:"https://server8.mp3quran.net/afs/054.mp3",
      duration:"08:02"
    },
    {
      name:"55 • Ar-Rahman",
      file:"https://server8.mp3quran.net/afs/055.mp3",
      duration:"11:19"
    },
    {
      name:"56 • Al-Waqi'ah",
      file:"https://server8.mp3quran.net/afs/056.mp3",
      duration:"11:56"
    },
    {
      name:"57 • Al-Hadid",
      file:"https://server8.mp3quran.net/afs/057.mp3",
      duration:"13:28"
    },
    {
      name:"58 • Al-Mujadilah",
      file:"https://server8.mp3quran.net/afs/058.mp3",
      duration:"18:13"
    },
    {
      name:"59 • Al-Hasyr",
      file:"https://server8.mp3quran.net/afs/059.mp3",
      duration:"10:26"
    },
    {
      name:"60 • Al-Mumtahanah",
      file:"https://server8.mp3quran.net/afs/060.mp3",
      duration:"07:31"
    },
    {
      name:"61 • As-Saff",
      file:"https://server8.mp3quran.net/afs/061.mp3",
      duration:"04:52"
    },
    {
      name:"62 • Al-Jumu'ah",
      file:"https://server8.mp3quran.net/afs/062.mp3",
      duration:"03:33"
    },
    {
      name:"63 • Al-Munafiqun",
      file:"https://server8.mp3quran.net/afs/063.mp3",
      duration:"04:18"
    },
    {
      name:"64 • At-Tagabun",
      file:"https://server8.mp3quran.net/afs/064.mp3",
      duration:"05:24"
    },
    {
      name:"65 • At-Talaq",
      file:"https://server8.mp3quran.net/afs/065.mp3",
      duration:"06:01"
    },
    {
      name:"66 • At-Tahrim",
      file:"https://server8.mp3quran.net/afs/066.mp3",
      duration:"05:57"
    },
    {
      name:"67 • Al-Mulk",
      file:"https://server8.mp3quran.net/afs/067.mp3",
      duration:"07:35"
    },
    {
      name:"68 • Al-Qalam",
      file:"https://server8.mp3quran.net/afs/068.mp3",
      duration:"07:36"
    },
    {
      name:"69 • Al-Haqqah",
      file:"https://server8.mp3quran.net/afs/069.mp3",
      duration:"06:45"
    },
    {
      name:"70 • Al-Ma'arij",
      file:"https://server8.mp3quran.net/afs/070.mp3",
      duration:"05:17"
    },
    {
      name:"71 • Nuh",
      file:"https://server8.mp3quran.net/afs/071.mp3",
      duration:"04:40"
    },
    {
      name:"72 • Al-Jinn",
      file:"https://server8.mp3quran.net/afs/072.mp3",
      duration:"05:34"
    },
    {
      name:"73 • Al-Muzzammil",
      file:"https://server8.mp3quran.net/afs/073.mp3",
      duration:"04:04"
    },
    {
      name:"74 • Al-Muddassir",
      file:"https://server8.mp3quran.net/afs/074.mp3",
      duration:"05:24"
    },
    {
      name:"75 • Al-Qiyamah",
      file:"https://server8.mp3quran.net/afs/075.mp3",
      duration:"03:31"
    },
    {
      name:"76 • Al-Insan",
      file:"https://server8.mp3quran.net/afs/076.mp3",
      duration:"05:14"
    },
    {
      name:"77 • Al-Mursalat",
      file:"https://server8.mp3quran.net/afs/077.mp3",
      duration:"04:45"
    },
    {
      name:"78 • An-Naba'",
      file:"https://server8.mp3quran.net/afs/078.mp3",
      duration:"04:52"
    },
    {
      name:"79 • An-Nazi'at",
      file:"https://server8.mp3quran.net/afs/079.mp3",
      duration:"04:16"
    },
    {
      name:"80 • 'Abasa",
      file:"https://server8.mp3quran.net/afs/080.mp3",
      duration:"03:40"
    },
    {
      name:"81 • At-Takwir",
      file:"https://server8.mp3quran.net/afs/081.mp3",
      duration:"02:38"
    },
    {
      name:"82 • Al-Infitar",
      file:"https://server8.mp3quran.net/afs/082.mp3",
      duration:"02:16"
    },
    {
      name:"83 • Al-Mutaffifin",
 file:"https://server8.mp3quran.net/afs/083.mp3",
      duration:"05:10"
    },
    {
      name:"84 • Al-Insyiqaq",
 file:"https://server8.mp3quran.net/afs/084.mp3",
      duration:"02:40"
    },
    {
      name:"85 • Al-Buruj",
      file:"https://server8.mp3quran.net/afs/085.mp3",
      duration:"03:18"
    },
    {
      name:"86 • At-Tariq",
      file:"https://server8.mp3quran.net/afs/086.mp3",
      duration:"01:40"
    },
    {
      name:"87 • Al-A'la",
      file:"https://server8.mp3quran.net/afs/087.mp3",
      duration:"01:47"
    },
    {
      name:"88 • Al-Gasyiyah",
      file:"https://server8.mp3quran.net/afs/088.mp3",
      duration:"02:14"
    },
    {
      name:"89 • Al-Fajr",
      file:"https://server8.mp3quran.net/afs/089.mp3",
      duration:"03:32"
    },
    {
      name:"90 • Al-Balad",
      file:"https://server8.mp3quran.net/afs/090.mp3",
      duration:"02:00"
    },
    {
      name:"91 • Asy-Syams",
      file:"https://server8.mp3quran.net/afs/091.mp3",
      duration:"01:24"
    },
    {
      name:"92 • Al-Lail",
      file:"https://server8.mp3quran.net/afs/092.mp3",
      duration:"01:51"
    },
    {
      name:"93 • Ad-Duha",
      file:"https://server8.mp3quran.net/afs/093.mp3",
      duration:"01:05"
    },
    {
      name:"94 • Al-Insyirah",
      file:"https://server8.mp3quran.net/afs/094.mp3",
      duration:"00:43"
    },
    {
      name:"95 • At-Tin",
      file:"https://server8.mp3quran.net/afs/095.mp3",
      duration:"01:04"
    },
    {
      name:"96 • Al-'Alaq",
      file:"https://server8.mp3quran.net/afs/096.mp3",
      duration:"01:35"
    },
    {
      name:"97 • Al-Qadr",
      file:"https://server8.mp3quran.net/afs/097.mp3",
      duration:"00:45"
    },
    {
      name:"98 • Al-Bayyinah",
      file:"https://server8.mp3quran.net/afs/098.mp3",
      duration:"02:06"
    },
    {
      name:"99 • Az-Zalzalah",
      file:"https://server8.mp3quran.net/afs/099.mp3",
      duration:"00:59"
    },
    {
      name:"100 • Al-'Adiyat",
      file:"https://server8.mp3quran.net/afs/100.mp3",
      duration:"01:10"
    },
    {
      name:"101 • Al-Qori'ah",
      file:"https://server8.mp3quran.net/afs/101.mp3",
      duration:"01:02"
    },
    {
      name:"102 • At-Takasur",
      file:"https://server8.mp3quran.net/afs/102.mp3",
      duration:"01:02"
    },
    {
      name:"103 • Al-'Asr",
      file:"https://server8.mp3quran.net/afs/103.mp3",
      duration:"00:27"
    },
    {
      name:"104 • Al-Humazah",
      file:"https://server8.mp3quran.net/afs/104.mp3",
      duration:"00:58"
    },
    {
      name:"105 • Al-Fil",
      file:"https://server8.mp3quran.net/afs/105.mp3",
      duration:"00:48"
    },
    {
      name:"106 • Quraisy",
      file:"https://server8.mp3quran.net/afs/106.mp3",
      duration:"00:42"
    },
    {
      name:"107 • Al-Ma'un",
      file:"https://server8.mp3quran.net/afs/107.mp3",
      duration:"00:57"
    },
    {
      name:"108 • Al-Kausar",
      file:"https://server8.mp3quran.net/afs/108.mp3",
      duration:"00:24"
    },
    {
      name:"109 • Al-Kafirun",
      file:"https://server8.mp3quran.net/afs/109.mp3",
      duration:"00:54"
    },
    {
      name:"110 • An-Nasr",
      file:"https://server8.mp3quran.net/afs/110.mp3",
      duration:"00:34"
    },
    {
      name:"111 • Al-Lahad",
      file:"https://server8.mp3quran.net/afs/111.mp3",
      duration:"00:41"
    },
    {
      name:"112 • Al-Ikhlas",
      file:"https://server8.mp3quran.net/afs/112.mp3",
      duration:"00:21"
    },
    {
      name:"113 • Al-Falaq",
    file:"https://server8.mp3quran.net/afs/113.mp3",
      duration:"00:33"
    },
    {
      name:"114 • An-Nas",   
 file:"//server8.mp3quran.net/afs/114.mp3",
      duration:"00:50"
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