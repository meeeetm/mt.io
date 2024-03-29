dailymotion
    .createPlayer('my-dailymotion-player-1', {
      video: 'x8sdcwk',
      player: 'xbzld', //a different id can be passed in here 
    })
    .then((player) => console.log(player))
    .catch((e) => console.error(e));

  dailymotion
    .createPlayer('my-dailymotion-player-2', {
      video: 'x8sdcwk',
    })
    .then((player) => console.log(player))
    .catch((e) => console.error(e));