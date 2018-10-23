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

// Works
if (document.querySelector('#Works')) {

    let info_w01 = document.querySelectorAll('.info_js')[0]

    info_w01.addEventListener('click', function() {
        var dialog = new Dialog({
            content:
            '<p>It is showing how much times that I was spended in the project.<br>Assuming 8 hours per workday I have had :)</p>',
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
            '<p><a href="https://https://www.econosys.jp/" target="_blank">Econosys Design,Inc</a><br></p>',
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
            '<p><a href="https://monstar-lab.com/" target="_blank">Monstar lab,Inc</a></p>',
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
            '<p><a href="https://http://www.musabi.ac.jp" target="_blank">Musashino Art University</a></p>',
            buttons: [{
                text: 'ok',
                action: function() { dialog.close() }
            }]
        })
        dialog.open()
    })

}
