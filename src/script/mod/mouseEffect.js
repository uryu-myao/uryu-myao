(function () {

    let container = document.querySelector('body');
    let circle = document.querySelector('.circle');
    let noEffect = document.querySelector('.kl');

    TweenMax.set(circle, { scale: 0, xPercent: -50, yPercent: -50 });

    container.addEventListener("pointerenter", function(e) {
        TweenMax.to(circle, 0.3, { scale: 1, opacity: 1 });
        positionCircle(e);
    });

    container.addEventListener("pointerleave", function(e) {
        TweenMax.to(circle, 0.3, { scale: 0, opacity: 0 });
        positionCircle(e);
    });

    container.addEventListener("pointermove", function(e) {
        positionCircle(e);
    });


    if ( noEffect.length ) {

        noEffect.addEventListener("pointerenter", function() {
            killAction();
        });

        noEffect.addEventListener("pointerleave", function(e) {
            TweenMax.to(circle, 0.3, { scale: 1, opacity: 1 });
            positionCircle(e);
        });

        function killAction() {
            TweenMax.to(circle, 0.3, { scale: 0, opacity: 0 });
            TweenMax.killTweensOf(noEffect);
        };
    };

    function positionCircle(e) {
        let rect = container.getBoundingClientRect();
        let relX = e.pageX - container.offsetLeft;
        let relY = e.pageY - container.offsetTop;

        TweenMax.to(circle, 0.3, { x: relX, y: relY });
    };



})();
