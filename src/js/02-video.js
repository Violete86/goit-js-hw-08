import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const frameEl = document.querySelector('#vimeo-player');

const player = new Player(frameEl);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(time => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}, 1000)
);
let startTime = 0;
let getTime = localStorage.getItem('videoplayer-current-time');

if(getTime) {
    const parsedGetTime = JSON.parse(getTime);
    startTime = parsedGetTime.seconds;
}
player.setCurrentTime(startTime);

