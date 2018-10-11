/*
 *    *** slider ***
 *
 *    - top page main slider
 *    - top.html
 *
 */


(function() {
    let topPage = document.querySelector('#top');

    if (topPage) {
        let elemCount = 3,
            elemTrans = 0;

        let current = 1,
            trans = 1;

        let nextElem = document.querySelector('.grid_prev'),
            prevElem = document.querySelector('.grid_next'),
            currentSlider = document.querySelector('.grid_curS .grid_curS_view > *'),
            detailsBtn = document.querySelector('.grid_curI_desc button a');

        nextElem.addEventListener('click', nextImage);
        prevElem.addEventListener('click', prevImage);

        detailsBtn.href = "/works/01.html";

        function nextImage() {
            if (current < elemCount){
                current++;
                console.log(current);
            }
        };

        function prevImage() {
            if (current > 0) {
                current--;
                console.log(current);
            }
        }
    }
}());
