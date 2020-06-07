(function() {
    // Sound Resourses
    const glitch_01 = document.querySelector('#sound_hv-01'); // @audio.njk
    const glitch_02 = document.querySelector('#sound_hv-02'); // @audio.njk
    const BGM = document.querySelector('#sound_bgm'); // @audio.njk

    // DOM
    let audio_hvGlitch_01 = document.querySelectorAll('.audio_hv_01'),
        audio_hvGlitch_02 = document.querySelectorAll('.audio_hv_02'),
        audio_switchBGM = document.querySelector('.BGM')

    let btnHoverSoundEffect = function() {
        
        for (let i = 0; i < audio_hvGlitch_01.length; i++) {
            audio_hvGlitch_01[i].addEventListener('mouseenter', function () {
                glitch_01.play();
            }, false);
            audio_hvGlitch_01[i].addEventListener('mouseleave', function () {
                glitch_01.pause();
            }, false);
        };

        for (let i = 0; i < audio_hvGlitch_02.length; i++) {
            audio_hvGlitch_02[i].addEventListener('mouseenter', function () {
                glitch_02.play();
            }, false);
            audio_hvGlitch_02[i].addEventListener('mouseleave', function () {
                glitch_02.pause();
            }, false);
        };
    }

    if (audio_hvGlitch_01) {
        btnHoverSoundEffect();
    }

    // Turn on/off BGM
    let play = false;

    let toggleBGMBtn = function() {
        if (!play) {
            audio_switchBGM.classList.remove('_pause');
            BGM.play();
            play = true;
        } else {
            audio_switchBGM.classList.add('_pause');
            
            BGM.pause();
            play = false;
        }
    }

    let switchBGM = function() {
        audio_switchBGM.addEventListener('click', toggleBGMBtn, false)
    }

    // BGM.play();

    switchBGM();

}());
