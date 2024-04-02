const channelData = [
  {
    title: "BEYAZ TV",
    url:
      "https://www.google.be/?hl=nl",
    image: "https://od.lk/s/MTBfMjQ1NzUxMzgwXw/beyaztv.png",
    language: "Haber"
  },

  {
    title: "CNN TÜRK",
    url:
      "https://www.google.be/?hl=nl",
    image: "https://od.lk/s/MTBfMjQ1NTQ0Nzc2Xw/CNN_T%C3%BCrk.png",
    language: "Haber"
  },
  {
    title: "AKIT TV",
    url: "https://www.google.be/?hl=nl",
    image: "https://od.lk/s/MTBfMjQ1NzIzMDE0Xw/Akit_TV.png",
    language: "Haber"
  },
  {
    title: "NTV",
    url:
      "https://www.google.be/?hl=nl",
    image: "https://od.lk/s/MTBfMjQ1NTQ0OTQ0Xw/NTV_logo.png",
    language: "Haber"
  },
  {
    title: "FLASH HABER",
    url: "https://stream.guventechnology.com:19360/flashtv/flashtv.m3u8",
    image: "https://od.lk/s/MTBfMjQ1NTQ5NjczXw/Flash-tv.png",
    language: "Haber"
  },
  {
    title: "TEVE 2 ",
    url: "https://live.duhnet.tv/S2/HLS_LIVE/teve2np/playlist.m3u8",
    image: "https://i.ibb.co/1Z22dCY/teve2.png",
    language: "Haber"
  },
  {
    title: "HABER TÜRK",
    url:
      "https://ciner-live.daioncdn.net/haberturktv/haberturktv.m3u8",
    image: "https://i.ibb.co/wdwm0fn/haberturk.png",
    language: "Haber"
  },

  {
    title: "HABER GLOBAL",
    url:
      "https://haberglobal.blutv.com/blutv_haberglobal2/live.m3u8",
    image: "https://i.ibb.co/k58p7P2/hglobal.png",
    language: "Haber"
  },
  {
    title: "TV 100",
    url: "https://tv100.blutv.com/blutv_tv100_live/live.m3u8",
    image: "https://i.ibb.co/bLpTdYZ/tv100.png",
    language: "Haber"
  },

  {
    title: "TRT HABER",
    url: "https://trthaber.blutv.com/blutv_trthaber_live/live.m3u8",
    image: "https://i.ibb.co/Bt6frts/trthaber.png",
    language: "Haber"
  },
  {
    title: "SÖZCÜ TV",
    url:
      "https://szctvdvr.blutv.com/blutv_szctv_dvr/live.m3u8",
    image: "https://i.ibb.co/B40rjP3/szc1.png",
    language: "Haber"
  },
  {
    title: "ULUSAL KANAL",
    url:
      "https://stream.guventechnology.com:19360/ulusaltv/ulusaltv.m3u8",
    image: "https://i.ibb.co/tXdf2YF/ulusal22.png",
    language: "Haber"
  }
];

const channelList = document.querySelector(".channel-list");
channelData.forEach((channel) => {
  const markup = `<li class="channel">
      <div class="handle">☰</div>
      <button class="play-channel" title="${channel.title}" data-m3u8="${channel.url}">
        <img class="channel-poster" src="${channel.image}">
      </button>
      <div class="channel-info">
        <div class="channel-title">${channel.title}</div>
        <div class="channel-language">${channel.language}</div>
       </div>
    </li>`;
  channelList.insertAdjacentHTML("beforeend", markup);
});

const video = document.querySelector("#player");
const channelPlays = document.querySelectorAll(".play-channel");
const channels = document.querySelectorAll(".channel");
const nowPlayingTitle = document.querySelector("#channel-playing");

const sortable = Sortable.create(channelList);

function loadStream(channelPlay) {
  channels.forEach((channel) => {
    channel.dataset.playing = "false";
  });
  const url = channelPlay.dataset.m3u8;
  const parent = channelPlay.closest("li");
  const title = parent.querySelector(".channel-title").textContent;
  parent.dataset.playing = "true";
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
      nowPlayingTitle.textContent = title;
    });
  }
}

channelPlays.forEach((channelPlay) => {
  channelPlay.addEventListener("click", (e) => {
    loadStream(channelPlay);
  });
});