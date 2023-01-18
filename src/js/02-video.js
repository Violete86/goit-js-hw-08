import Player from '@vimeo/player';

const frameEl = document.querySelector('#vimeo-player');

const player = new Player(frameEl);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', function(e) {
    console.log(e);
});

