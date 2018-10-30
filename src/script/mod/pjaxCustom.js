$(function () {

    $.pjax({
        area: '#container', // 遷移するエリアを指定
        link: '.async', // イベント発火のターゲットを指定できる
        ajax: {
            timeout: 3000
        }, // 読み込みにこれ以上かかる場合は通常遷移
        wait: function () { // エフェクト分の待ち時間を作る(関数可)
            var wScr = $(window).scrollTop();
            if (wScr) {
                return 800;
            } else {
                return 400;
            }
        }
    })

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
