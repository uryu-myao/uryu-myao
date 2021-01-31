class Dialog {
  constructor(options) {
    this.options = options
    this.init()
  }

  getTemplate() {
    let { content } = this.options
    let template = `
            <div class="dialog vhs">
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
    let { buttons } = this.options

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
    this.$dialog.appendTo('body').css('display', 'none').fadeIn(300)
  }
}

// Specific
;(function () {
  // dialog specific about copyright
  if (document.querySelector('.cr')) {
    let cr = document.querySelectorAll('.cr')[0]

    cr.addEventListener('click', function () {
      var dialog = new Dialog({
        content:
          '<p>Copyright © 2021 by URYU MYAO<br><br>No part of this site including video footages may not be reproduced, distributed, or transmitted in any form or by any means.</p>',
        buttons: [
          {
            text: 'ok',
            action: function () {
              dialog.close()
            },
          },
        ],
      })
      dialog.open()
    })
  }

  // dialog specific on Work pages
  if (document.querySelector('.w2018')) {
    let info_w01 = document.querySelectorAll('.info_js')[0]

    info_w01.addEventListener('click', function () {
      var dialog = new Dialog({
        content:
          '<p>It is showing average assigned time per month in the project.</p>',
        buttons: [
          {
            text: 'ok',
            action: function () {
              dialog.close()
            },
          },
        ],
      })
      dialog.open()
    })
  }

  // dialog specific on About pages
  if (document.querySelector('#About')) {
    let info_a01 = document.querySelectorAll('.info_js')[0],
      info_a02 = document.querySelectorAll('.info_js')[1],
      info_a03 = document.querySelectorAll('.info_js')[2],
      info_a04 = document.querySelectorAll('.info_js')[3],
      info_a05 = document.querySelectorAll('.info_js')[4]

    info_a01.addEventListener('click', function () {
      var dialog = new Dialog({
        content:
          '<p>World-class direct selling company that distributes <br>premium-quality products in both <br>the personal care and nutritional supplements categories.<br><a href="https://www.nuskin.com/markets/ja_JP/home.html" target="_blank">NUSKIN JAPAN<span><svg class="ext" x="0px" y="0px" viewBox="0 0 8 7"><polygon points="1,2 0,2 0,7 6,7 6,6 1,6 "/><rect x="2" width="6" height="5"/></svg></span></a></p>',
        buttons: [
          {
            text: 'ok',
            action: function () {
              dialog.close()
            },
          },
        ],
      })
      dialog.open()
    })
    info_a02.addEventListener('click', function () {
      var dialog = new Dialog({
        content:
          '<p><br>An convenient and efficient online store platform<br>that has obviously well-designed interface.<br><a href="https://stores.jp/" target="_blank">STORES.JP<span><svg class="ext" x="0px" y="0px" viewBox="0 0 8 7"><polygon points="1,2 0,2 0,7 6,7 6,6 1,6 "/><rect x="2" width="6" height="5"/></svg></span></a></p>',
        buttons: [
          {
            text: 'ok',
            action: function () {
              dialog.close()
            },
          },
        ],
      })
      dialog.open()
    })
    info_a03.addEventListener('click', function () {
      var dialog = new Dialog({
        content:
          '<p>An award-winning Kyoto-based design and branding firm.<br><a href="https://www.econosys.jp/" target="_blank">Econosys Design,Inc<span><svg class="ext" x="0px" y="0px" viewBox="0 0 8 7"><polygon points="1,2 0,2 0,7 6,7 6,6 1,6 "/><rect x="2" width="6" height="5"/></svg></span></a></p>',
        buttons: [
          {
            text: 'ok',
            action: function () {
              dialog.close()
            },
          },
        ],
      })
      dialog.open()
    })
    info_a04.addEventListener('click', function () {
      var dialog = new Dialog({
        content:
          '<p>A global software development company in Tokyo.<br><a href="https://monstar-lab.com/" target="_blank">Monstar lab,Inc<span><svg class="ext" x="0px" y="0px" viewBox="0 0 8 7"><polygon points="1,2 0,2 0,7 6,7 6,6 1,6 "/><rect x="2" width="6" height="5"/></svg></span></a></p>',
        buttons: [
          {
            text: 'ok',
            action: function () {
              dialog.close()
            },
          },
        ],
      })
      dialog.open()
    })
    info_a05.addEventListener('click', function () {
      var dialog = new Dialog({
        content:
          '<p>An art school where I fallen in love with design.<br><a href="http://www.musabi.ac.jp" target="_blank">Musashino Art University<span><svg class="ext" x="0px" y="0px" viewBox="0 0 8 7"><polygon points="1,2 0,2 0,7 6,7 6,6 1,6 "/><rect x="2" width="6" height="5"/></svg></span></a></p>',
        buttons: [
          {
            text: 'ok',
            action: function () {
              dialog.close()
            },
          },
        ],
      })
      dialog.open()
    })
  }
})()
