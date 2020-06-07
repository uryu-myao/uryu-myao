




function scrollProgressing (content) {

    let scrollProgressBar = document.querySelector('.scrollProgressBar'),
        docHeight = document.querySelector(content).scrollHeight,
        // winHeight = window.style.height,
        // winT = document.body.scrollTop,
        totalScroll = winT / (docHeight - winHeight) * 100;

        document.querySelector('.scrollProgress div').style.width = totalScroll + '%';
        window.onscroll = function () {
            scrollProgressing('.grid_content');
        }


    if (scrollProgressBar) {

        window.onscroll = function () {
            scrollProgressing('.grid_content');
        }
    }
}







