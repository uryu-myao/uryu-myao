/*
    *** slider ***

    - top page main slider
    - top.html

*/


(function() {

    if ( document.querySelector('#top') ) {

    const elemCount = 3;
    const elemTrans = 0;

    let current = 1,
        trans = 1;

    const nextElem = document.querySelector('.grid__prev');
    const prevElem = document.querySelector('.grid__next');
    const currentSlider = document.querySelector('.grid__curS .__cur-show > *');
    const detailsBtn = document.querySelector('.__curI-desc button a');

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
