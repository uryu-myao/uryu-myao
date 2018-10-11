/*
 *  *** JSON ***
 *
 *  - repeat text data from JSON
 *  @ top.html & about.html
 *
 */


(function(){

    let top = document.querySelector('#top');

    if (top) {
        let dataJSON = new XMLHttpRequest(),
            url = "/data/data.json"

        dataJSON.open("GET", url, true);
        dataJSON.setRequestHeader('content-type', 'application/json');

        dataJSON.onreadystatechange = function() {
          if ((dataJSON.readyState === 4) && (dataJSON.status === 200)) {
              let dataContent = JSON.parse(dataJSON.responseText),
                  banner_motion_prev = document.querySelector('.grid_prev p'),
                  banner_motion_next = document.querySelector('.grid_next p');

              banner_motion_prev.innerHTML = dataContent.prev[0].title.repeat(15);
              banner_motion_next.innerHTML = dataContent.next[0].title.repeat(16);
          }
        }

        dataJSON.send(null);

    } else {
        return false
    }

})();
