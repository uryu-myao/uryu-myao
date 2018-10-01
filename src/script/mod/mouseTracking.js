(function () {

  let container = document.querySelector('body');
  let circle = document.querySelector('.circle');

  TweenMax.set(".section", {
  backgroundColor: function() {
    return Math.random() * 0xffffff;
  }
  });

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

  function positionCircle(e) {
      let rect = container.getBoundingClientRect();
      let relX = e.pageX - container.offsetLeft;
      let relY = e.pageY - container.offsetTop;

      TweenMax.to(circle, 0.3, { x: relX, y: relY });
  }

})();
