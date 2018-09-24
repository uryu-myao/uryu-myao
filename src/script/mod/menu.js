(function() {

    const MENU = (function() {

        let menu = document.querySelector('.menu'),
            overlay = document.querySelector('.overlay'),
            navItem = document.querySelectorAll('.overlay__item');

        let active = false;


        let toggleMenu = function() {

            if (!active) {

                overlay.classList.add('overlay-active');
                menu.classList.add('menu-active');

                for ( var i = 0; i < navItem.length; i++ ) {
                    navItem[i].classList.add('overlay__item-active');
                }

                active = true;

            } else {

                overlay.classList.remove('overlay-active');
                menu.classList.remove('menu-active');

                for ( var i = 0; i < navItem.length; i++ ) {
                    navItem[i].classList.remove('overlay__item-active');
                }

                active = false;
            }
        };


        let bindActions = function() {
            menu.addEventListener('click', toggleMenu, false);
        };

        let init = function() { bindActions();};

        return { init: init };

    }());

    MENU.init();

}());
