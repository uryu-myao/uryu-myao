(function() {
    const Loading = (function() {
        let preload = document.querySelector('#Preload'),
            entryBtn = document.querySelector('.entry'),
            entryLetter = ['.e1','.e2','.e3','.e4','.e5']

        let bindLoadingAnimation = function() {
            preload.classList.remove('loading');
            preload.classList.add('loaded');

            TweenMax.delayedCall( 1, letterAimation );

            function letterAimation() {
                TweenMax.staggerFromTo( entryLetter, .4,
                    { opacity: 0 },
                    { opacity: 1 }, .2
                )
            }
        };

        let entringAnimaion = function () {

            TweenMax.to( entryBtn, .2,
                { ease: Circ.easeOut, opacity: 0 }
            );
            TweenMax.to( preload, .2,
                { ease: Circ.easeOut, opacity: 0 }
            );
        }

        let bindActions = function() {
            document.addEventListener("DOMContentLoaded", bindLoadingAnimation);
            if (entryBtn) { entryBtn.addEventListener("click", entringAnimaion); }
        };

        let init = function() {
            bindActions()
        };

        return { init: init }

    }());

    Loading.init()

}());
