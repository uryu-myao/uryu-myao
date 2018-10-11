(function() {
    const LOADING = (function() {
        let preload = document.querySelector('#preload')

        let classChanges = function() {
            preload.classList.remove('loading');
            preload.classList.add('loaded')
        };

        let bindActions = function() {
            document.addEventListener("DOMContentLoaded", classChanges)
        };

        let init = function() {
            bindActions()
        };

        return { init: init }

    }());

    LOADING.init();

}());
