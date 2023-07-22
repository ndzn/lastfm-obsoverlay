function parse(input) {
    const urlParams = new URLSearchParams(window.location.search);
    const s = urlParams.get(input);
    return s;
}

const socketUrl = `wss://api.x3.lol/fm/${parse("username")}`;
const socket = new WebSocket(socketUrl);
let currentImage = '';
// let delay = `${parse("delay")}`;
// if (delay == null) {
//     delay = 300;
// }
let delay = 300;
socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    const artistElement = document.getElementById('artist');
    const trackElement = document.getElementById('track');
    const imageElement = document.getElementById('image');
    const trackInfoElement = document.getElementById('currentTrack');

    if (message.is_now_playing == true) {
        currentImage = message.image_url;
        imageElement.style.opacity = '0';
        trackInfoElement.style.opacity = '0';

        setTimeout(function() {
            imageElement.src = message.image_url;
            imageElement.style.opacity = '1';
            // statusElement.innerHTML = message.is_now_playing ? 'Now Playing on Spotify' : 'Last Played on Spotify';
            artistElement.innerHTML = `by ${message.artist}`;
            trackElement.innerHTML = `${message.track}`;
            trackInfoElement.style.opacity = '1';
        }, delay);
    }
    if (message.is_now_playing !== true) {
        imageElement.style.opacity = '0';
        trackInfoElement.style.opacity = '0';
    }
    // if username is set to nothing
    if (parse("username") == null) {
        currentImage = message.image_url;
        imageElement.style.opacity = '0';
        trackInfoElement.style.opacity = '0';

        setTimeout(function() {
            imageElement.style.opacity = '1';
            // statusElement.innerHTML = message.is_now_playing ? 'Now Playing on Spotify' : 'Last Played on Spotify';
            artistElement.innerHTML = `Please set your username in the URL.`;
            trackElement.innerHTML = `No username set.`;
            trackInfoElement.style.opacity = '1';
        }, 300);
    }
};