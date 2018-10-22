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


// Works page
(function() {

    if (document.querySelector('#Works')) {
        let info_01 = document.querySelectorAll('.info')[0]

        info_01.addEventListener('click', function() {
            var dialog = new Dialog({
                content:
                '<p><a href="https://www.awwwards.com/sites/wonderland-ams" target="_blank">baidu</a>aaosidjfasdaskdfj;aslkjdfaslkjd<br>asdfasdfasf</p>',
                buttons: [{
                    text: 'ok',
                    action: function() { dialog.close() }
                }]
            })
            dialog.open()
        })
    }

}());

// About page
(function() {

    if (document.querySelector('#About')) {
        let info_01 = document.querySelectorAll('.info')[0],
        let info_02 = document.querySelectorAll('.info')[1],
        let info_03 = document.querySelectorAll('.info')[2]

        info_01.addEventListener('click', function() {
            var dialog = new Dialog({
                content:
                '<p><a href="https://www.awwwards.com/sites/wonderland-ams" target="_blank">baidu</a>aaosidjfasdaskdfj;aslkjdfaslkjd<br>asdfasdfasf</p>',
                buttons: [{
                    text: 'ok',
                    action: function() { dialog.close() }
                }]
            })
            dialog.open()
        });
        info_02.addEventListener('click', function() {
            var dialog = new Dialog({
                content:
                '<p><a href="https://www.awwwards.com/sites/wonderland-ams" target="_blank">baidu</a>aaosidjfasdaskdfj;aslkjdfaslkjd<br>asdfasdfasf</p>',
                buttons: [{
                    text: 'ok',
                    action: function() { dialog.close() }
                }]
            })
            dialog.open()
        });
        info_03.addEventListener('click', function() {
            var dialog = new Dialog({
                content:
                '<p><a href="https://www.awwwards.com/sites/wonderland-ams" target="_blank">baidu</a>aaosidjfasdaskdfj;aslkjdfaslkjd<br>asdfasdfasf</p>',
                buttons: [{
                    text: 'ok',
                    action: function() { dialog.close() }
                }]
            })
            dialog.open()
        });
    }

}())
