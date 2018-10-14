/*
 *    *** slider ***
 *
 *    - top page main slider
 *    - top.html
 *
 */


(function() {

    const topSlider = (function() {

        let elemCount = 3,
            elemTrans = 0;

        let current = 0,
            trans = 1;

        let nextElem = document.querySelector('.grid_prev'),
            prevElem = document.querySelector('.grid_next'),
            currentSlider = document.querySelector('.grid_thum .grid_thum_fig > *'),
            detailsBtn = document.querySelector('.grid_desc_down button a');

        nextElem.addEventListener('click', nextImage);
        prevElem.addEventListener('click', prevImage);

        detailsBtn.href = "/works/01.html";

        function nextImage() {
            if (current < elemCount){
                current ++;
                console.log(current);
            }
        };

        function prevImage() {
            if (current > 0) {
                current --;
                console.log(current);
            }
        }

        let bindActions = function() {
            if ( top ) {

            }
        };

        let init = function() {
            bindActions()
        };

        return { init: init }

    }());

    topSlider.init()

}());
