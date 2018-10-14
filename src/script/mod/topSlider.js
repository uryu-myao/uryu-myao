/*
 *    *** slider ***
 *
 *    - top page main slider
 *    - top.html
 *
 */


(function() {

    // const topSlider = (function() {

        // let elemCount = 3,
        //     elemTrans = 0;
        //
        // let current = 0,
        //     trans = 1;
        //
        // let nextElem = document.querySelector('.grid_prev'),
        //     prevElem = document.querySelector('.grid_next'),
        //     currentSlider = document.querySelector('.grid_thum .grid_thum_fig > *'),
        //     detailsBtn = document.querySelector('.grid_desc_down button a');
        //
        // nextElem.addEventListener('click', nextImage);
        // prevElem.addEventListener('click', prevImage);
        //
        // detailsBtn.href = "/works/01.html";
        //
        // function nextImage() {
        //     if (current < elemCount){
        //         current ++;
        //         console.log(current);
        //     }
        // };
        //
        // function prevImage() {
        //     if (current > 0) {
        //         current --;
        //         console.log(current);
        //     }
        // }


///   sample

    function slider(item) {
        let items = item.querySelectorAll('li'),
            current = 0,
            autoUpdate = true,
            timeTrans = 6000;

        //BTN link
        let detailsBtn = document.querySelector('.grid_desc_down button a');
        detailsBtn.href = "/works/01.html";

        //create button prev
        let prevbtn = document.querySelector('.grid_prev');

        //create button next
        let nextbtn = document.querySelector('.grid_next');


        items[current].className = "current";
        if (items) items[items.length - 1].className = "prev_slide";


        let navigate = function(dir) {
            items[current].className = "";

            if (dir === 'down') {
                current = current < items.length - 1 ? current + 1 : 0;
            } else {
                current = current > 0 ? current - 1 : items.length - 1;
            }

            let	nextCurrent = current < items.length - 1 ? current + 1 : 0,
                prevCurrent = current > 0 ? current - 1 : items.length-1;

            items[current].className = "current";
            items[prevCurrent].className = "prev_slide";
            items[nextCurrent].className = "";
        }

        // pause slider
        // let pauseZoom = document.querySelector('.grid_prev .banner_middle'),
        //     pauseZoom = document.querySelector('.grid_prev .banner_middle'),
        // item.addEventListener('mouseenter', function() { autoUpdate = false;});
        // item.addEventListener('mouseleave', function() { autoUpdate = true;});

        setInterval(function() {
            if (autoUpdate) navigate('down');
        },timeTrans);

        prevbtn.addEventListener('click', function() {
            navigate('up');
        });

        nextbtn.addEventListener('click', function() {
            navigate('down');
        });
    }



    let bindActions = function() {
        if ( top ) {
            [].slice.call(document.querySelectorAll('.grid_thum'))
              .forEach( function(item) {
                slider(item);
            });
            [].slice.call(document.querySelectorAll('.grid_desc_up'))
              .forEach( function(item) {
                slider(item);
            });
            [].slice.call(document.querySelectorAll('.grid_prev'))
              .forEach( function(item) {
                slider(item);
            });
            [].slice.call(document.querySelectorAll('.grid_next'))
              .forEach( function(item) {
                slider(item);
            });
            [].slice.call(document.querySelectorAll('.grid_prog'))
              .forEach( function(item) {
                slider(item);
            });
        }
    };

    bindActions()

}());
