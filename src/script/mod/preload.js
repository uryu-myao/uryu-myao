(function() {

    const LOADING = (function() {

        let loadingPage = document.querySelector('#preload')

        let loaded = false;


        let preload = function() {

            if (!loaded) {

                loadingPage.classList.add('preload-active');

                // window.addEventListener( 'scroll', noscroll );

            } else {



            }



        };

        function noscroll() {
            window.scrollTo( 0, 0 );
        };

        let bindActions = function() {
            window.onload = preload;
        };

        let init = function() { bindActions();};

        return { init: init };

    }());

    LOADING.init();

}());
