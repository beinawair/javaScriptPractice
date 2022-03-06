const btn = document.querySelector('.switch-btn');
const vid = document.querySelector('.video-container');
const preLoad = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preLoad.classList.add('hide-preloader')
})

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        vid.pause();
    } else {
        btn.classList.remove('slide');
        vid.play();
    }
});