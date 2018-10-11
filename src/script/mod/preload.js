(function() {
    const LOADING = (function() {
        let preload = document.querySelector('#preload');
        let removing = function() {
            preload.classList.remove('loading');
        };

        let bindActions = function() {
            document.addEventListener("DOMContentLoaded", removing);
        };

        let init = function() {
            bindActions();
        };

        return {
            init: init
        };

    }());

    LOADING.init();

}());
