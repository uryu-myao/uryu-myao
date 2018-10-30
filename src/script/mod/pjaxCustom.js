$(function () {
    
    let $asyncContent = $('#container');

    $.pjax({
        area: '#container',
        link: '.async',
        ajax: {
            timeout: 3000
        },
        wait: function () {
            var wScr = $(window).scrollTop();
            if (wScr) {
                return 800;
            } else {
                return 400;
            }
        }
    });

    if ($asyncContent) {
        $(document).on('pjax:fetch', function() {
            $asyncContent.animate({
                'left' : '-10px',
                'opacity' : 0
            }, 500);
        });
        $(document).on('pjax:render', function() {
            $asyncContent.animate({
                'left': 0,
                'opacity': 1
            }, 500);
        });
    }

});



/*

*** readyState Values ***

0: request not initialized
1: server connection establishied
2: request received
3: processing request
4: request finishied and response is ready


*** HTTP Statuses ***

200: OK
403: Forbidden
404: Not Found

*/
