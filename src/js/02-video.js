import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Definește funcția onTimeUpdate
const onTimeUpdate = throttle((data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

// Ascultă evenimentul 'timeupdate'
player.on('timeupdate', onTimeUpdate);

// Așteaptă ca playerul să fie pregătit înainte de a seta timpul curent
player.ready().then(() => {
    const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
    player.setCurrentTime(savedTime).catch((error) => {
        switch (error.name) {
            case 'RangeError':
                // Gestionează RangeError
                break;
            default:
                // Gestionează alte erori
                break;
        }
    });
});
