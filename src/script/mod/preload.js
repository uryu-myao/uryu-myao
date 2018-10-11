(function() {
    const Loading = (function() {
        let preload = document.querySelector('#preload'),
            startBtn = document.querySelector('.start')

        let changeClass = function() {
            preload.classList.remove('loading');
            preload.classList.add('loaded')
        };

        let entryThroughBtn = function(num) {
            if (!num == 0) {
                preload.style.visibility = "hidden";
            }
        }

        let bindActions = function() {
            document.addEventListener("DOMContentLoaded", changeClass);
            startBtn.addEventListener("click", entryThroughBtn);
        };

        let init = function() {
            bindActions()
        };

        return { init: init }

    }());

    Loading.init()

}());
