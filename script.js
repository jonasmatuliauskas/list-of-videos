const videoListContainer = document.getElementById('video-list-container');
const videoPlayer = document.getElementById('video-player');

function clearVideoPlayer() {
    videoPlayer.innerHTML = '';
}

function renderVideoPlayer(id) {
    const markup = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videoPlayer.innerHTML = markup;
}

function highlightSelected(id) {
    const listArr = [...document.querySelectorAll('.video__small-box')]; 

    listArr.forEach(el => {
        el.classList.remove('video__small-box--active');
    });

    document.querySelector(`[data-video='https://www.youtube.com/watch?v=${id}']`).classList.add('video__small-box--active');
}

videoListContainer.addEventListener('click', e => {
    const videoURL = e.target.closest('.video__small-box').getAttribute('data-video');
    const videoID = videoURL.split('=').pop();

    clearVideoPlayer();
    renderVideoPlayer(videoID);
    highlightSelected(videoID);
});