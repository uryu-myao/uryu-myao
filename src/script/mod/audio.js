(function() {

    // Hover Sound Resourse
    const glitch_01 = document.querySelector('#sound_hv-1');
    const BGM = document.querySelector('#sound_bgm');

    let audio_hvGlitch_01 = document.querySelector('.audio__hv'),
        audio_switchBGM = document.querySelector('.sound__switch');


    let btnHoverSoundEffect = function () {

        audio_hvGlitch_01.addEventListener('mouseenter', function() {
            glitch_01.play();
        }, false);
        audio_hvGlitch_01.addEventListener('mouseleave', function() {
            glitch_01.pause();
        }, false);

    };

    btnHoverSoundEffect();


    let play = true;

    let toggleBGMBtn = function () {

        if (play) {

            audio_switchBGM.classList.add('_pause');
            BGM.pause();

            play = false;

        } else {

            audio_switchBGM.classList.remove('_pause');
            BGM.play();

            play = true;

        }
    };

    let switchBGM = function() {
        audio_switchBGM.addEventListener('click', toggleBGMBtn, false);
    };


    BGM.play();
    switchBGM();


}());
