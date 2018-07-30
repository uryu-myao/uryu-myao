(function(){

    let scrollProgress = document.querySelector( '.scrollProgress' )

    window.addEventListener ( 'scroll', function ()
    {
        if ( scrollProgress )
        {
            let docH = document.querySelector('.child').clientHeight,
                winH = window.style.height,
                winT = document.body.scrollTop,
                totalScroll = winT / ( docH - winH ) * 100

            document.querySelector( '.scrollProgress div' ).style.width = totalScroll + '%';
        }
    })

})();
