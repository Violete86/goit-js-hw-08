import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

const frameEl = document.querySelector('#vimeo-player');

frameEl.addEventListener('', saveTime)