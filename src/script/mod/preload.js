(function() {
    const Loading = (function() {

        let preload = document.querySelector('#Preload'),
            entryBtn = document.querySelector('.entry'),
            entryLetters = ['.e1','.e2','.e3','.e4','.e5'];

        let bindLoadingAnimation = function() {
            // Cyberline motion in CSS
            preload.classList.remove('loading');
            preload.classList.add('loaded');

            // Letters fade in
            TweenMax.delayedCall( 1, letterAimation );
            function letterAimation() {
                TweenMax.staggerFromTo( entryLetters, .4,
                    { opacity: 0 },
                    { opacity: 1 }, .2
                )
            }
        };

        let bindEntringAnimaion = function () {
            let entryLetterNodes = document.querySelectorAll('.enl'),
                arrEntryLetters = Array.from( entryLetterNodes );

            // Letters fade out randomly
            TweenMax.set( arrEntryLetters, { opacity: 1 });

            arrEntryLetters.sort( function() {
                return .3 - Math.random()
            });

            TweenMax.staggerTo( arrEntryLetters, .4,
                { opacity: 0, ease: Quad.easeInOut }, .2
            );

            // Whole Preload fade out
            TweenMax.delayedCall( .8, bgFadeOut );

            function bgFadeOut() {
                TweenMax.to( preload, .5,
                    { ease: Circ.easeOut, opacity: 0 }
                )
            }
        }

        let bindActions = function() {
            document.addEventListener("DOMContentLoaded", bindLoadingAnimation);
            if (entryBtn) { entryBtn.addEventListener("click", bindEntringAnimaion); }
        };

        let init = function() {
            bindActions()
        };

        return { init: init }

    }());

    Loading.init()

}());
