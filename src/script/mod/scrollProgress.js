(function(){

    'use strict';

    const scrollProgress = document.querySelector( '.scrollProgress' )

    window.addEventListener ( 'scroll', function ()
    {
        if ( scrollProgress )
        {
            let docH = $(".child").height(),
                winH = $(window).height(),
                winT = $(window).scrollTop(),
                totalScroll = winT / ( docH - winH ) * 100

            document.querySelector( '.scrollProgress div' ).style.width = totalScroll + '%'
        }
    })

})();
