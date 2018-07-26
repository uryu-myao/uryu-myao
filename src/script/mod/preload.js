(function() {

  let preload = document.querySelector('#preload')

  if (preload) {
      window.onload = function() {
          preload.style.display = 'none';
      }
  }

}());
