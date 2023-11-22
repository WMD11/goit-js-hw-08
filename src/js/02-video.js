import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const onTimeUpdate = throttle((data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

var throttle = require('lodash.throttle');
player.on('timeupdate', onTimeUpdate);

const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(savedTime).catch((error) => {
    switch (error.name) {
        case 'RangeError':
           
            break;
        default:
          
            break;
    }
});