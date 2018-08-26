(function(){

    let dataJSON = new XMLHttpRequest(),
        url = "/data/data.json";

    dataJSON.open("GET", url, true);
    dataJSON.setRequestHeader('content-type', 'application/json');
    dataJSON.onreadystatechange = function() {
      if ((dataJSON.readyState === 4) && (dataJSON.status === 200)) {

        let dataContent = JSON.parse(dataJSON.responseText),
            motionBar_prev = document.querySelector('.grid__prev p'),
            motionBar_next = document.querySelector('.grid__next p');

        motionBar_prev.innerHTML = dataContent.prev[0].title.repeat(15);
        motionBar_next.innerHTML = dataContent.next[0].title.repeat(16);

      }
    }

    dataJSON.send(null);

})();
