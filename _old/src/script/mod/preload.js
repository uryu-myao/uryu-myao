const Loading = (function() {

    let preload = document.querySelector('#Preload'),
        entryBtn = document.querySelector('.entry'),
        entryLetters = ['.e1','.e2','.e3','.e4','.e5'],
        entryVisual = document.querySelector('.visual');
    
    // function LoadingAnimation() {
    //     let noticeLetterNodes = document.querySelectorAll('.notice span'),
    //         arrNoticeLetters = Array.from(noticeLetterNodes);
        
    //     TweenMax.set(arrNoticeLetters, { opacity: 0 });
    //     TweenMax.staggerTo(arrNoticeLetters, .3,
    //         { opacity: 1, ease: Quad.easeInOut }, .03
    //     );
    // }

    let bindLoadedAnimation = function() {
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

        // Logo trun on
        entryVisual.classList.add('visual_on');
    }

    let bindEntringAnimaion = function() {
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
        TweenMax.delayedCall( .6, bgFadeOut );

        function bgFadeOut() {
            TweenMax.set( preload,
                { opacity: 1, display:"block" }
            );
            TweenMax.to( preload, .4,
                { ease: Circ.easeOut, opacity: 0, display:"none" }
            );
        }
    }

    let bindActions = function() {
        if (entryBtn) {
            // LoadingAnimation();
            window.addEventListener("load", bindLoadedAnimation);
            entryBtn.addEventListener("click", bindEntringAnimaion);
        }
    }

    let init = function() {
        bindActions();
    }

    return { init: init }

}());

Loading.init();

