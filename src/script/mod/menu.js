(function() {

    const Menu = (function() {
        
        let menu = document.querySelector('.menu'),
            overlay = document.querySelector('.overlay'),
            navItem = document.querySelectorAll('.overlay_item')

        const click_01 = document.querySelector('#sound_click-01')

        let active = false

        let toggleMenu = function() {
            if (!active) {
                overlay.classList.add('overlay_active');
                menu.classList.add('menu_active');

                for ( var i = 0; i < navItem.length; i++ ) {
                    navItem[i].classList.add('overlay_item_active')
                }

                active = true

            } else {
                overlay.classList.remove('overlay_active');
                menu.classList.remove('menu_active');

                for ( var i = 0; i < navItem.length; i++ ) {
                    navItem[i].classList.remove('overlay_item_active')
                }

                active = false
            }

            click_01.play()
        };

        let bindActions = function() {
            menu.addEventListener('click', toggleMenu, false)
        };

        let init = function() {
            bindActions()
        };

        return { init: init }

    }());

    Menu.init()

}());
