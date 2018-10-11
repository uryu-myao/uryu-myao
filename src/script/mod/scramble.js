/*
 *    *** scramble ***
 *
 *    - text scrambling effect
 *    @ top.html
 *
 */

(function(){
    function _classCallCheck(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    function ScrambleText(t) {
        var e = t.innerText,
            a = new TextScramble(t),
            n = function () {
                a.setText(e).then(function () {
                    setTimeout(n, 1e3 * (Math.floor(3 * Math.random()) + 2))
                })
            };
        n()
    }
    for (var TextScramble = function () {
        function t(e) {
            _classCallCheck(this, t),
            this.el = e,
            this.chars = "!<>-_\\/[]{}=+*^?)$#________",
            this.update = this.update.bind(this)
        }
        return t.prototype.setText = function (t) {
            var e = this,
                a = this.el.innerText,
                n = Math.max(a.length, t.length),
                r = new Promise(function (t) {
                    return e.resolve = t
                });
            this.queue = [];
            for (var s = 0; s < n; s++) {
                var h = a[s] || "",
                    i = t[s] || "",
                    o = Math.floor(40 * Math.random()),
                    u = o + Math.floor(40 * Math.random());
                this.queue.push({
                    from: h,
                    to: i,
                    start: o,
                    end: u
                })
            }
            return cancelAnimationFrame(this.frameRequest),
            this.frame = 0,
            this.update(), r
        },
        t.prototype.update = function () {
            for (var t = "", e = 0, a = 0, n = this.queue.length; a < n; a++) {
                var r = this.queue[a],
                    s = r.from,
                    h = r.to,
                    i = r.start,
                    o = r.end,
                    u = r.char;
                this.frame >= o ? (e++, t += h) : this.frame >= i ? ((!u || Math.random() < .28) && (u = this.randomChar(),
                    this.queue[a].char = u), t += '<span class="dud">' + u + "</span>") : t += s
            }
            this.el.innerHTML = t,
            e === this.queue.length ? this.resolve() : (this.frameRequest = requestAnimationFrame (this.update), this.frame++)
        },
        t.prototype.randomChar = function () {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        }, t
    }(),
    elements = document.getElementsByClassName("scramble__txt"), i = 0, length = elements.length; i < length; i++)

    ScrambleText(elements[i]);

}());
