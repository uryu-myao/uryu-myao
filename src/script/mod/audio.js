(function() {
    // Sound Resourses
    const glitch_01 = document.querySelector('#sound_hv-01'); // @audio.njk
    const BGM = document.querySelector('#sound_bgm'); // @audio.njk

    // DOM
    let audio_hvGlitch_01 = document.querySelector('.audio_hv_01'),
        audio_switchBGM = document.querySelector('.BGM')

    let btnHoverSoundEffect = function() {
        audio_hvGlitch_01.addEventListener('mouseenter', function() {
            glitch_01.play();
        }, false);

        audio_hvGlitch_01.addEventListener('mouseleave', function() {
            glitch_01.pause();
        }, false)
    };

    if (audio_hvGlitch_01) {
        btnHoverSoundEffect()
    }

    // Turn on/off BGM
    let play = true;

    let toggleBGMBtn = function () {
        if (play) {
            audio_switchBGM.classList.add('_pause');
            BGM.pause();
            play = false
        } else {
            audio_switchBGM.classList.remove('_pause');
            BGM.play();
            play = true
        }
    };

    let switchBGM = function() {
        audio_switchBGM.addEventListener('click', toggleBGMBtn, false);
    };

    BGM.play();

    switchBGM();

}());
