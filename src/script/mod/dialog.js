// class Dialog {
//
//     constructor(options) {
//         this.options = options
//         this.init()
//     }
//
//     getTemplate() {
//         var {content} = this.options
//         var template = `
//             <div class="dialog">
//                 <div>
//                     <main>{content}</main>
//                     <footer></footer>
//                 </div>
//             </div>
//         `
//         return template
//     }
//
//     getButtons() {
//         var {buttons} = this.options
//         var buttonsTemplate = buttons.map((button) => {
//             var b = `<button></button>`
//             b.addEventListener('click', button.action)
//             return b
//         })
//         return buttonsTemplate
//     }
//
//     init() {
//         var
//     }
// }
