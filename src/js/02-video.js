import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const localStorageKey = 'videoplayer-current-time';
const videoContainer = document.querySelector('#vimeo-player');
const player = new Player(videoContainer);
const currentPlayTime = localStorage.getItem(localStorageKey) || 0;

player.on('timeupdate', throttle(playTimeMemoriser, 1000));

player.setCurrentTime(currentPlayTime);

function playTimeMemoriser({ seconds }) {
  localStorage.setItem(localStorageKey, seconds);
}
