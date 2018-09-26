(function() {

    // Sound Resourses
    const glitch_01 = document.querySelector('#sound_hv-01'); // @_audio.njk
    const glitch_02 = document.querySelector('#sound_hv-02'); // @_audio.njk
    const BGM = document.querySelector('#sound_bgm'); // @_audio.njk

    // DOM
    let audio_hvGlitch_01 = document.querySelector('.audio__hv-01'),
        audio_switchBGM = document.querySelector('.BGM');

    //
    // function hoverAudioEffect ( audio ) {
    //     return function () {
    //
    //         this.addEventListener('mouseenter', function() {
    //             audio.play();
    //         }, false);
    //         this.addEventListener('mouseleave', function() {
    //             audio.pause();
    //         }, false);
    //
    //     }
    // };
    //
    // let audio_glitch_01 = hoverAudioEffect( glitch_01 );
    // let audio_glitch_02 = hoverAudioEffect( glitch_02 );
    //
    // document.querySelector('.audio__hv-01').addEventListener = audio_glitch_01;

    let btnHoverSoundEffect = function () {

        audio_hvGlitch_01.addEventListener('mouseenter', function() {
            glitch_01.play();
        }, false);
        audio_hvGlitch_01.addEventListener('mouseleave', function() {
            glitch_01.pause();
        }, false);

    };

    btnHoverSoundEffect();


    // Turn on/off BGM
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

    switchBGM();

    BGM.play();

}());
