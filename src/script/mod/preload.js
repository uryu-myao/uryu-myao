(function() {
    const Loading = (function() {
        let preload = document.querySelector('#Preload'),
            entryBtn = document.querySelector('.entry')

        let changeClass = function() {
            preload.classList.remove('loading');
            preload.classList.add('loaded');

            TweenMax.to( entryBtn, .4,
                { ease: Sine.easeOut, bottom: "10vh", opacity: 1 }
            ).delay(1);
        };

        let siteOpening = function () {

            TweenMax.to( entryBtn, .2,
                { ease: Circ.easeOut, opacity: 0 }
            );
            TweenMax.to( preload, .2,
                { ease: Circ.easeOut, opacity: 0 }
            ).delay(.2);
        }

        let bindActions = function() {
            document.addEventListener("DOMContentLoaded", changeClass);
            if (entryBtn) { entryBtn.addEventListener("click", siteOpening); }
        };

        let init = function() {
            bindActions()
        };

        return { init: init }

    }());

    Loading.init()

}());
