/*
    *** slider ***

    - top page main slider
    - top.html

*/


(function() {

    let topPage = document.querySelector('#top');

    if ( topPage.length ) {

        let elemCount = 3,
            elemTrans = 0;

        let current = 1,
            trans = 1;

        let nextElem = document.querySelector('.grid__prev'),
            prevElem = document.querySelector('.grid__next'),
            currentSlider = document.querySelector('.grid__curS .__cur-show > *'),
            detailsBtn = document.querySelector('.__curI-desc button a');

        nextElem.addEventListener('click', nextImage);
        prevElem.addEventListener('click', prevImage);

        detailsBtn.href = "/works/01.html";

        function nextImage () {
            if ( current < elemCount )
            {
                current++;
                console.log(current);
            }
        };

        function prevImage () {
            if ( current > 0 )
            {
                current--;
                console.log(current);
            }
        }

    }
}());
