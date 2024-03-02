//TIPSPORT LIGA LIVE STREAM
var format = 'rtsp';  //jwplayer stream
var file = '';        //stream input

var listH = [         //array of actual streams
  //Trt1
  'https://ddc75c8a6akqr.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-1/master.m3u8', 
  //Show
  'https://ciner-live.daioncdn.net/showtv/showtv_1080p.m3u8',
  //Kanal D
  'https://demiroren.daioncdn.net/kanald/kanald_1080p.m3u8?app=da2109ea-5dfe-4107-89ab-23593336ed61&ce=3',
  //Kanal 7	
  'https://ecanlitv4.etvserver.com:8081/kanal7.m3u8?tkn=jNRYPBt90ETb7gTxiaQXMQ&tms=1681524785',
  //Star Tv
  'https://dogus-live.daioncdn.net/startv/startv.m3u8',
  //Beyaz Tv
  'https://ddc75c8a6akqr.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-1/master.m3u8',
  //360 Tv
  'https://turkmedya-live.ercdn.net/tv360/tv360_720p.m3u8',
  //Trt 2
  'https://tv-trt2.medya.trt.com.tr/master_720.m3u8',
  //Trt Türk
  'https://tv-trtturk.medya.trt.com.tr/master_720.m3u8',
  //Trt 4K
  'https://livestream.ibb.gov.tr/cam_turistik/cam_trsk_anadolu_hisari.stream/chunklist_w12046225.m3u8',
  //Trt Hd
  'https://ddc75c8a6akqr.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-1/master.m3u8',
  //4one
  'https://edge1.socialsmart.tv/on4/bant1/chunks.m3u8',
  //Cine 5
  'https://cdn-cine5tv.yayin.com.tr/cine5tv/cine5tv/playlist.m3u8',
  //Tgrt Eu
  'https://tv.ensonhaber.com/tv/tr/tgrteu/index.m3u8',
  //Naturel Tv
  'https://broadcasttr.com:446/naturaltv/bant1/chunklist.m3u8',
  //Kedi Tv
  'https://59cba4d34b678.streamlock.net/live/kanalpati/playlist.m3u8',
  //Kanal 19
  'https://vdo.digitalbox.xyz:3644/live/kanal19tvlive.m3u8',
  //Cnn Türk
  'https://live.duhnet.tv/S2/HLS_LIVE/cnnturknp/playlist.m3u8',
  //Haber Türk
  'https://ecanlitv3.etvserver.com/live_sd/haberturk/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8xNS8yMDIzIDEyOjEzOjEwIEFNJmhhc2hfdmFsdWU9TnFEQjJaZHhZWC9va243THQ1YVJBdz09JnZhbGlkbWludXRlcz0xMA==',
  //A Haber
  'https://ecanlitv3.etvserver.com:8081/ahaber.m3u8?tkn=aq32PFz1BW_JDGbS8d_UJA&tms=1681524790',
  //Trt Haber
  'https://ecanlitv3.etvserver.com/live_sd/trthaber/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8xNS8yMDIzIDEyOjEzOjEwIEFNJmhhc2hfdmFsdWU9TnFEQjJaZHhZWC9va243THQ1YVJBdz09JnZhbGlkbWludXRlcz0xMA==',
  //Global
  'https://tv.ensonhaber.com/tv/tr/haberglobal/index.m3u8',
  //Bengü Türk
  'https://tv.ensonhaber.com/tv/tr/benguturk/index.m3u8',
  //Ntv
  'https://ecanlitv3.etvserver.com:8081/ntv.m3u8?tkn=aq32PFz1BW_JDGbS8d_UJA&tms=1681524790',
  //Bloomberg
  'https://ecanlitv4.etvserver.com:8081/bloomberght.m3u8?tkn=SIHi1uSjR8_VCFe-VI59mQ&tms=1681524791',
  //Akit Tv
  'https://akittv-live.ercdn.net/akittv/akittv.m3u8',
  //Tv Net
  'https://mn-nl.mncdn.com/tvnet/tvnet/chunklist.m3u8',
  //Halk Tv
  'https://ecanlitv4.etvserver.com:8081/halktv.m3u8?tkn=SIHi1uSjR8_VCFe-VI59mQ&tms=1681524791',
  //Euro News
  'https://rakuten-euronews-1-gb.samsung.wurl.com/manifest/playlist.m3u8',
  //Flash Tv
  'https://ecanlitv3.etvserver.com/live_sd/flashtv/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8xNS8yMDIzIDEyOjEzOjEyIEFNJmhhc2hfdmFsdWU9WUV1YUR1RWpraDJsN0hZeis2Wnp1UT09JnZhbGlkbWludXRlcz0xMA==',
  //Zvolen
  'https://ddc75c8a6akqr.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-1/master.m3u8'];
 

for (var i=1; i<=45; i++) {
  window['t' + i] = document.getElementById(i);
  window['t' + i].addEventListener('click', playMatch);
}

function playMatch(event) {
  var that = event.currentTarget.id;

  if (listH[that-1] == "no") {
    jwplayer('rtsp').remove();
    document.getElementById('gameInfo').innerHTML = "No game today!";
  } else {
    document.getElementById('gameInfo').innerHTML = "";
    file = listH[that-1]; 
    playGame();
  }
}

function playGame() {
  window.jwplayer('rtsp').setup({
    file: file,
    image: 'https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png/355x355&text=' + format,
    aspectratio: '16:9',
    skin: 'bekle'});
}