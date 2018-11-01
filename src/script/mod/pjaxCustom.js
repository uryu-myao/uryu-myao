$(function () {
    
    $.pjax({
        area: '#container',
        link: '.async',
        ajax: {
            timeout: 3000
        }
    });

    $("body").on('click', '#container', function () {

        let $asyncContent = $('#container');

        $(document).on('pjax:start', function () {
            $asyncContent.fadeOut(200);
        });
        $(document).on('pjax:complete', function () {
            $asyncContent.fadeIn(200);
        });
    });
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
