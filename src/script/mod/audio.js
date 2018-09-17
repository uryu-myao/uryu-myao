(function() {

    const audio__hover = document.querySelector('.audio__hv');
    const audio = document.querySelector('#sound_hv-1');


    audio__hover.addEventListener('mouseenter', function() {
        audio.play();
    })
    audio__hover.addEventListener('mouseleave', function() {
        audio.pause();
    })

}());
