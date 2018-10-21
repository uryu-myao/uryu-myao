/*
 *    *** slider ***
 *
 *    - top main slider
 *    - top.html
 *
 */


(function() {

    function slider(item) {
        let items = item.querySelectorAll('li'),
            current = 0,
            autoUpdate = true,
            timeTrans = 5000,
            slidersNum = 4;

        // Define main visual
        let thm = document.querySelector('.grid_thum');
        // Define button prev
        let prevbtn = document.querySelector('.grid_prev');
        // Define button next
        let nextbtn = document.querySelector('.grid_next');


        // Set up current
        items[current].className = "current";
        if (items) items[items.length - 1].className = "prev_slide";

        let navigate = function(dir) {
            items[current].className = "";

            if ( dir === 'down' ) {
                current = current < items.length - 1 ? current + 1 : 0;
            } else {
                current = current > 0 ? current - 1 : items.length - 1;
            }

            let	nextCurrent = current < items.length - 1 ? current + 1 : 0,
                prevCurrent = current > 0 ? current - 1 : items.length - 1;

            items[current].className = "current";
            items[prevCurrent].className = "prev_slide";
            items[nextCurrent].className = "";
        };

        setInterval( function() {
            if ( autoUpdate ) navigate('down');
        }, timeTrans);


        // Change BTN link
        let detailsBtn = document.querySelector('.grid_desc_down button a');

        let linkHref = function(current) {
            detailsBtn.href = "/works/w0" + current + ".html";
        };

        setInterval( function() {
            if ( autoUpdate ) linkHref( current + 1 );
        }, timeTrans );


        // Pause slider by hover-on
        let pauseZoom = [ prevbtn, nextbtn, thm ];

        function pauseAction( pauseItem ) {
            pauseItem.addEventListener('mouseenter', function() { autoUpdate = false;});
            pauseItem.addEventListener('mouseleave', function() { autoUpdate = true;});
        };

        pauseZoom.forEach( pauseAction );


        // Execute prev and next clicking
        prevbtn.addEventListener('click', function() {
            navigate('up')
        });

        nextbtn.addEventListener('click', function() {
            navigate('down')
        });
    };


    let bindActions = function() {
        if ( top ) {
            [].slice.call(document.querySelectorAll('.grid_thum'))
              .forEach( function(item) {
                  slider(item)
            });
            [].slice.call(document.querySelectorAll('.grid_desc_up'))
              .forEach( function(item) {
                  slider(item)
            });
            [].slice.call(document.querySelectorAll('.grid_prev'))
              .forEach( function(item) {
                  slider(item)
            });
            [].slice.call(document.querySelectorAll('.grid_next'))
              .forEach( function(item) {
                  slider(item)
            });
            [].slice.call(document.querySelectorAll('.grid_prog'))
              .forEach( function(item) {
                  slider(item)
            });
        }
    };

    bindActions()

}());
