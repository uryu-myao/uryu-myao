class Dialog {

    constructor(options) {
        this.options = options
        this.init()
    }

    getTemplate() {
        let {content} = this.options
        let template = `
            <div class="dialog kl">
                <div class="dialog_inner">
                    <div class="info"><p>i</p></div>
                    <main class="dialog_cts">${content}</main>
                    <footer class="dialog_footer"></footer>
                </div>
            </div>
        `
        return template
    }

    getButtons() {
        let {buttons} = this.options

        let buttonsTemplate = buttons.map((button) => {
            var $b = $(`<button></button>`)
            $b.text(button.text)
            $b.on('click', button.action)
            return $b
        })
        return buttonsTemplate
    }

    init() {
        let $dialog = $(this.getTemplate())

        $dialog.find('footer').append(this.getButtons())
        this.$dialog = $dialog
    }

    close() {
        this.$dialog.detach()
    }

    open() {
        this.$dialog.appendTo('body')
    }
}


// Specific
(function() {

    // Works
    if (document.querySelector('#Works')) {

        let info_w01 = document.querySelectorAll('.info_js')[0]

        info_w01.addEventListener('click', function() {
            var dialog = new Dialog({
                content:
                '<p>It is showing how much times that I was spended in the project.</p>',
                buttons: [{
                    text: 'ok',
                    action: function() { dialog.close() }
                }]
            })
            dialog.open()
        })
    }

    // About
    if (document.querySelector('#About')) {

        let info_a01 = document.querySelectorAll('.info_js')[0],
            info_a02 = document.querySelectorAll('.info_js')[1],
            info_a03 = document.querySelectorAll('.info_js')[2]

        info_a01.addEventListener('click', function() {
            var dialog = new Dialog({
                content:
                '<p>Award-winning Kyoto-based design and branding firm.<br><a href="https://www.econosys.jp/" target="_blank">Econosys Design,Inc<span><svg class="ext" x="0px" y="0px" viewBox="0 0 8 7"><polygon points="1,2 0,2 0,7 6,7 6,6 1,6 "/><rect x="2" width="6" height="5"/></svg></span></a></p>',
                buttons: [{
                    text: 'ok',
                    action: function() { dialog.close() }
                }]
            })
            dialog.open()
        })
        info_a02.addEventListener('click', function() {
            var dialog = new Dialog({
                content:
                '<p>A global software development company in Tokyo.<a href="https://monstar-lab.com/" target="_blank">Monstar lab,Inc<span><svg class="ext" x="0px" y="0px" viewBox="0 0 8 7"><polygon points="1,2 0,2 0,7 6,7 6,6 1,6 "/><rect x="2" width="6" height="5"/></svg></span></a></p>',
                buttons: [{
                    text: 'ok',
                    action: function() { dialog.close() }
                }]
            })
            dialog.open()
        })
        info_a03.addEventListener('click', function() {
            var dialog = new Dialog({
                content:
                '<p>An art school where I fallen in love with design and a paopao-name bread.<a href="https://http://www.musabi.ac.jp" target="_blank">Musashino Art University<span><svg class="ext" x="0px" y="0px" viewBox="0 0 8 7"><polygon points="1,2 0,2 0,7 6,7 6,6 1,6 "/><rect x="2" width="6" height="5"/></svg></span></a></p>',
                buttons: [{
                    text: 'ok',
                    action: function() { dialog.close() }
                }]
            })
            dialog.open()
        })
    }
}())