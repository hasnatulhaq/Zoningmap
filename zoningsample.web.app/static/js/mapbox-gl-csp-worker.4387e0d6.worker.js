! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/", r(r.s = 10)
}([function(e, t) {
    function r(t) {
        return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, r(t)
    }
    e.exports = r
}, function(e, t, r) {
    var n = r(8);
    e.exports = function(e, t) {
        if (e) {
            if ("string" === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
        }
    }
}, function(e, t) {
    function r(t, n) {
        return e.exports = r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, r(t, n)
    }
    e.exports = r
}, function(e, t, r) {
    var n = r(2),
        i = r(4);

    function a(t, r, o) {
        return i() ? e.exports = a = Reflect.construct : e.exports = a = function(e, t, r) {
            var i = [null];
            i.push.apply(i, t);
            var a = new(Function.bind.apply(e, i));
            return r && n(a, r.prototype), a
        }, a.apply(null, arguments)
    }
    e.exports = a
}, function(e, t) {
    e.exports = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }
}, function(e, t, r) {
    var n = r(13),
        i = r(14);
    e.exports = function(e, t) {
        return !t || "object" !== n(t) && "function" !== typeof t ? i(e) : t
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(e, t, r) {
    var n = r(3),
        i = r(11),
        a = r(0),
        o = r(5),
        s = r(15),
        u = r(16),
        l = r(19),
        c = r(20),
        h = r(21),
        f = r(22),
        p = r(24),
        y = r(26),
        d = r(27);
    ! function() {
        "use strict";
        var e = t;

        function t(e, t, r, n) {
            this.cx = 3 * e, this.bx = 3 * (r - e) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * t, this.by = 3 * (n - t) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = e, this.p1y = n, this.p2x = r, this.p2y = n
        }
        t.prototype.sampleCurveX = function(e) {
            return ((this.ax * e + this.bx) * e + this.cx) * e
        }, t.prototype.sampleCurveY = function(e) {
            return ((this.ay * e + this.by) * e + this.cy) * e
        }, t.prototype.sampleCurveDerivativeX = function(e) {
            return (3 * this.ax * e + 2 * this.bx) * e + this.cx
        }, t.prototype.solveCurveX = function(e, t) {
            var r, n, i, a, o;
            for (void 0 === t && (t = 1e-6), i = e, o = 0; o < 8; o++) {
                if (a = this.sampleCurveX(i) - e, Math.abs(a) < t) return i;
                var s = this.sampleCurveDerivativeX(i);
                if (Math.abs(s) < 1e-6) break;
                i -= a / s
            }
            if ((i = e) < (r = 0)) return r;
            if (i > (n = 1)) return n;
            for (; r < n;) {
                if (a = this.sampleCurveX(i), Math.abs(a - e) < t) return i;
                e > a ? r = i : n = i, i = .5 * (n - r) + r
            }
            return i
        }, t.prototype.solve = function(e, t) {
            return this.sampleCurveY(this.solveCurveX(e, t))
        };
        var r = v;

        function v(e, t) {
            this.x = e, this.y = t
        }
        v.prototype = {
            clone: function() {
                return new v(this.x, this.y)
            },
            add: function(e) {
                return this.clone()._add(e)
            },
            sub: function(e) {
                return this.clone()._sub(e)
            },
            multByPoint: function(e) {
                return this.clone()._multByPoint(e)
            },
            divByPoint: function(e) {
                return this.clone()._divByPoint(e)
            },
            mult: function(e) {
                return this.clone()._mult(e)
            },
            div: function(e) {
                return this.clone()._div(e)
            },
            rotate: function(e) {
                return this.clone()._rotate(e)
            },
            rotateAround: function(e, t) {
                return this.clone()._rotateAround(e, t)
            },
            matMult: function(e) {
                return this.clone()._matMult(e)
            },
            unit: function() {
                return this.clone()._unit()
            },
            perp: function() {
                return this.clone()._perp()
            },
            round: function() {
                return this.clone()._round()
            },
            mag: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            equals: function(e) {
                return this.x === e.x && this.y === e.y
            },
            dist: function(e) {
                return Math.sqrt(this.distSqr(e))
            },
            distSqr: function(e) {
                var t = e.x - this.x,
                    r = e.y - this.y;
                return t * t + r * r
            },
            angle: function() {
                return Math.atan2(this.y, this.x)
            },
            angleTo: function(e) {
                return Math.atan2(this.y - e.y, this.x - e.x)
            },
            angleWith: function(e) {
                return this.angleWithSep(e.x, e.y)
            },
            angleWithSep: function(e, t) {
                return Math.atan2(this.x * t - this.y * e, this.x * e + this.y * t)
            },
            _matMult: function(e) {
                var t = e[2] * this.x + e[3] * this.y;
                return this.x = e[0] * this.x + e[1] * this.y, this.y = t, this
            },
            _add: function(e) {
                return this.x += e.x, this.y += e.y, this
            },
            _sub: function(e) {
                return this.x -= e.x, this.y -= e.y, this
            },
            _mult: function(e) {
                return this.x *= e, this.y *= e, this
            },
            _div: function(e) {
                return this.x /= e, this.y /= e, this
            },
            _multByPoint: function(e) {
                return this.x *= e.x, this.y *= e.y, this
            },
            _divByPoint: function(e) {
                return this.x /= e.x, this.y /= e.y, this
            },
            _unit: function() {
                return this._div(this.mag()), this
            },
            _perp: function() {
                var e = this.y;
                return this.y = this.x, this.x = -e, this
            },
            _rotate: function(e) {
                var t = Math.cos(e),
                    r = Math.sin(e),
                    n = r * this.x + t * this.y;
                return this.x = t * this.x - r * this.y, this.y = n, this
            },
            _rotateAround: function(e, t) {
                var r = Math.cos(e),
                    n = Math.sin(e),
                    i = t.y + n * (this.x - t.x) + r * (this.y - t.y);
                return this.x = t.x + r * (this.x - t.x) - n * (this.y - t.y), this.y = i, this
            },
            _round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            }
        }, v.convert = function(e) {
            return e instanceof v ? e : Array.isArray(e) ? new v(e[0], e[1]) : e
        };
        var m = "undefined" != typeof self ? self : {},
            g = Math.pow(2, 53) - 1,
            x = Math.PI / 180;

        function b(e) {
            return e * x
        }

        function k(e, t, r) {
            return Math.min(r, Math.max(t, e))
        }

        function w(e) {
            var t = [];
            for (var r in e) t.push(e[r]);
            return t
        }

        function _(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            for (var i = 0, a = r; i < a.length; i++) {
                var o = a[i];
                for (var s in o) e[s] = o[s]
            }
            return e
        }

        function S() {
            return function e(t) {
                return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -[1e3] + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
            }()
        }

        function A(e) {
            return !!e && /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)
        }

        function I(e, t) {
            e.forEach((function(e) {
                t[e] && (t[e] = t[e].bind(t))
            }))
        }

        function z(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }

        function M(e, t, r) {
            var n = {};
            for (var i in e) n[i] = t.call(r || this, e[i], i, e);
            return n
        }

        function C(e) {
            return Array.isArray(e) ? e.map(C) : "object" == typeof e && e ? M(e, C) : e
        }
        var B = {};

        function P(e) {
            B[e] || ("undefined" != typeof console && console.warn(e), B[e] = !0)
        }

        function V(e, t, r) {
            return (r.y - e.y) * (t.x - e.x) > (t.y - e.y) * (r.x - e.x)
        }

        function T(e) {
            for (var t, r, n = 0, i = 0, a = e.length, o = a - 1; i < a; o = i++) t = e[i], n += ((r = e[o]).x - t.x) * (t.y + r.y);
            return n
        }

        function E() {
            return "undefined" != typeof WorkerGlobalScope && "undefined" != typeof self && self instanceof WorkerGlobalScope
        }

        function D(e) {
            var t = {};
            if (e.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g, (function(e, r, n, i) {
                    var a = n || i;
                    return t[r] = !a || a.toLowerCase(), ""
                })), t["max-age"]) {
                var r = parseInt(t["max-age"], 10);
                isNaN(r) ? delete t["max-age"] : t["max-age"] = r
            }
            return t
        }
        var F = null;

        function L(e) {
            if (null == F) {
                var t = e.navigator ? e.navigator.userAgent : null;
                F = !!e.safari || !(!t || !(/\b(iPad|iPhone|iPod)\b/.test(t) || t.match("Safari") && !t.match("Chrome")))
            }
            return F
        }

        function O(e) {
            try {
                var t = m[e];
                return t.setItem("_mapbox_test_", 1), t.removeItem("_mapbox_test_"), !0
            } catch (e) {
                return !1
            }
        }
        var R = j;

        function j(e, t, r) {
            var n = this.cells = [];
            if (e instanceof ArrayBuffer) {
                this.arrayBuffer = e;
                var i = new Int32Array(this.arrayBuffer);
                e = i[0], this.d = (t = i[1]) + 2 * (r = i[2]);
                for (var a = 0; a < this.d * this.d; a++) {
                    var o = i[3 + a],
                        s = i[3 + a + 1];
                    n.push(o === s ? null : i.subarray(o, s))
                }
                var u = i[3 + n.length + 1];
                this.keys = i.subarray(i[3 + n.length], u), this.bboxes = i.subarray(u), this.insert = this._insertReadonly
            } else {
                this.d = t + 2 * r;
                for (var l = 0; l < this.d * this.d; l++) n.push([]);
                this.keys = [], this.bboxes = []
            }
            this.n = t, this.extent = e, this.padding = r, this.scale = t / e, this.uid = 0;
            var c = r / t * e;
            this.min = -c, this.max = e + c
        }

        function U(e) {
            var t = {
                exports: {}
            };
            return e(t, t.exports), t.exports
        }
        j.prototype.insert = function(e, t, r, n, i) {
            this._forEachCell(t, r, n, i, this._insertCell, this.uid++), this.keys.push(e), this.bboxes.push(t), this.bboxes.push(r), this.bboxes.push(n), this.bboxes.push(i)
        }, j.prototype._insertReadonly = function() {
            throw "Cannot insert into a GridIndex created from an ArrayBuffer."
        }, j.prototype._insertCell = function(e, t, r, n, i, a) {
            this.cells[i].push(a)
        }, j.prototype.query = function(e, t, r, n, i) {
            var a = this.min,
                o = this.max;
            if (e <= a && t <= a && o <= r && o <= n && !i) return Array.prototype.slice.call(this.keys);
            var s = [];
            return this._forEachCell(e, t, r, n, this._queryCell, s, {}, i), s
        }, j.prototype._queryCell = function(e, t, r, n, i, a, o, s) {
            var u = this.cells[i];
            if (null !== u)
                for (var l = this.keys, c = this.bboxes, h = 0; h < u.length; h++) {
                    var f = u[h];
                    if (void 0 === o[f]) {
                        var p = 4 * f;
                        (s ? s(c[p + 0], c[p + 1], c[p + 2], c[p + 3]) : e <= c[p + 2] && t <= c[p + 3] && r >= c[p + 0] && n >= c[p + 1]) ? (o[f] = !0, a.push(l[f])) : o[f] = !1
                    }
                }
        }, j.prototype._forEachCell = function(e, t, r, n, i, a, o, s) {
            for (var u = this._convertToCellCoord(e), l = this._convertToCellCoord(t), c = this._convertToCellCoord(r), h = this._convertToCellCoord(n), f = u; f <= c; f++)
                for (var p = l; p <= h; p++) {
                    var y = this.d * p + f;
                    if ((!s || s(this._convertFromCellCoord(f), this._convertFromCellCoord(p), this._convertFromCellCoord(f + 1), this._convertFromCellCoord(p + 1))) && i.call(this, e, t, r, n, y, a, o, s)) return
                }
        }, j.prototype._convertFromCellCoord = function(e) {
            return (e - this.padding) / this.scale
        }, j.prototype._convertToCellCoord = function(e) {
            return Math.max(0, Math.min(this.d - 1, Math.floor(e * this.scale) + this.padding))
        }, j.prototype.toArrayBuffer = function() {
            if (this.arrayBuffer) return this.arrayBuffer;
            for (var e = this.cells, t = 3 + this.cells.length + 1 + 1, r = 0, n = 0; n < this.cells.length; n++) r += this.cells[n].length;
            var i = new Int32Array(t + r + this.keys.length + this.bboxes.length);
            i[0] = this.extent, i[1] = this.n, i[2] = this.padding;
            for (var a = t, o = 0; o < e.length; o++) {
                var s = e[o];
                i[3 + o] = a, i.set(s, a), a += s.length
            }
            return i[3 + e.length] = a, i.set(this.keys, a), i[3 + e.length + 1] = a += this.keys.length, i.set(this.bboxes, a), a += this.bboxes.length, i.buffer
        };
        var q = U((function(e, t) {
                var r = {
                    transparent: [0, 0, 0, 0],
                    aliceblue: [240, 248, 255, 1],
                    antiquewhite: [250, 235, 215, 1],
                    aqua: [0, 255, 255, 1],
                    aquamarine: [127, 255, 212, 1],
                    azure: [240, 255, 255, 1],
                    beige: [245, 245, 220, 1],
                    bisque: [255, 228, 196, 1],
                    black: [0, 0, 0, 1],
                    blanchedalmond: [255, 235, 205, 1],
                    blue: [0, 0, 255, 1],
                    blueviolet: [138, 43, 226, 1],
                    brown: [165, 42, 42, 1],
                    burlywood: [222, 184, 135, 1],
                    cadetblue: [95, 158, 160, 1],
                    chartreuse: [127, 255, 0, 1],
                    chocolate: [210, 105, 30, 1],
                    coral: [255, 127, 80, 1],
                    cornflowerblue: [100, 149, 237, 1],
                    cornsilk: [255, 248, 220, 1],
                    crimson: [220, 20, 60, 1],
                    cyan: [0, 255, 255, 1],
                    darkblue: [0, 0, 139, 1],
                    darkcyan: [0, 139, 139, 1],
                    darkgoldenrod: [184, 134, 11, 1],
                    darkgray: [169, 169, 169, 1],
                    darkgreen: [0, 100, 0, 1],
                    darkgrey: [169, 169, 169, 1],
                    darkkhaki: [189, 183, 107, 1],
                    darkmagenta: [139, 0, 139, 1],
                    darkolivegreen: [85, 107, 47, 1],
                    darkorange: [255, 140, 0, 1],
                    darkorchid: [153, 50, 204, 1],
                    darkred: [139, 0, 0, 1],
                    darksalmon: [233, 150, 122, 1],
                    darkseagreen: [143, 188, 143, 1],
                    darkslateblue: [72, 61, 139, 1],
                    darkslategray: [47, 79, 79, 1],
                    darkslategrey: [47, 79, 79, 1],
                    darkturquoise: [0, 206, 209, 1],
                    darkviolet: [148, 0, 211, 1],
                    deeppink: [255, 20, 147, 1],
                    deepskyblue: [0, 191, 255, 1],
                    dimgray: [105, 105, 105, 1],
                    dimgrey: [105, 105, 105, 1],
                    dodgerblue: [30, 144, 255, 1],
                    firebrick: [178, 34, 34, 1],
                    floralwhite: [255, 250, 240, 1],
                    forestgreen: [34, 139, 34, 1],
                    fuchsia: [255, 0, 255, 1],
                    gainsboro: [220, 220, 220, 1],
                    ghostwhite: [248, 248, 255, 1],
                    gold: [255, 215, 0, 1],
                    goldenrod: [218, 165, 32, 1],
                    gray: [128, 128, 128, 1],
                    green: [0, 128, 0, 1],
                    greenyellow: [173, 255, 47, 1],
                    grey: [128, 128, 128, 1],
                    honeydew: [240, 255, 240, 1],
                    hotpink: [255, 105, 180, 1],
                    indianred: [205, 92, 92, 1],
                    indigo: [75, 0, 130, 1],
                    ivory: [255, 255, 240, 1],
                    khaki: [240, 230, 140, 1],
                    lavender: [230, 230, 250, 1],
                    lavenderblush: [255, 240, 245, 1],
                    lawngreen: [124, 252, 0, 1],
                    lemonchiffon: [255, 250, 205, 1],
                    lightblue: [173, 216, 230, 1],
                    lightcoral: [240, 128, 128, 1],
                    lightcyan: [224, 255, 255, 1],
                    lightgoldenrodyellow: [250, 250, 210, 1],
                    lightgray: [211, 211, 211, 1],
                    lightgreen: [144, 238, 144, 1],
                    lightgrey: [211, 211, 211, 1],
                    lightpink: [255, 182, 193, 1],
                    lightsalmon: [255, 160, 122, 1],
                    lightseagreen: [32, 178, 170, 1],
                    lightskyblue: [135, 206, 250, 1],
                    lightslategray: [119, 136, 153, 1],
                    lightslategrey: [119, 136, 153, 1],
                    lightsteelblue: [176, 196, 222, 1],
                    lightyellow: [255, 255, 224, 1],
                    lime: [0, 255, 0, 1],
                    limegreen: [50, 205, 50, 1],
                    linen: [250, 240, 230, 1],
                    magenta: [255, 0, 255, 1],
                    maroon: [128, 0, 0, 1],
                    mediumaquamarine: [102, 205, 170, 1],
                    mediumblue: [0, 0, 205, 1],
                    mediumorchid: [186, 85, 211, 1],
                    mediumpurple: [147, 112, 219, 1],
                    mediumseagreen: [60, 179, 113, 1],
                    mediumslateblue: [123, 104, 238, 1],
                    mediumspringgreen: [0, 250, 154, 1],
                    mediumturquoise: [72, 209, 204, 1],
                    mediumvioletred: [199, 21, 133, 1],
                    midnightblue: [25, 25, 112, 1],
                    mintcream: [245, 255, 250, 1],
                    mistyrose: [255, 228, 225, 1],
                    moccasin: [255, 228, 181, 1],
                    navajowhite: [255, 222, 173, 1],
                    navy: [0, 0, 128, 1],
                    oldlace: [253, 245, 230, 1],
                    olive: [128, 128, 0, 1],
                    olivedrab: [107, 142, 35, 1],
                    orange: [255, 165, 0, 1],
                    orangered: [255, 69, 0, 1],
                    orchid: [218, 112, 214, 1],
                    palegoldenrod: [238, 232, 170, 1],
                    palegreen: [152, 251, 152, 1],
                    paleturquoise: [175, 238, 238, 1],
                    palevioletred: [219, 112, 147, 1],
                    papayawhip: [255, 239, 213, 1],
                    peachpuff: [255, 218, 185, 1],
                    peru: [205, 133, 63, 1],
                    pink: [255, 192, 203, 1],
                    plum: [221, 160, 221, 1],
                    powderblue: [176, 224, 230, 1],
                    purple: [128, 0, 128, 1],
                    rebeccapurple: [102, 51, 153, 1],
                    red: [255, 0, 0, 1],
                    rosybrown: [188, 143, 143, 1],
                    royalblue: [65, 105, 225, 1],
                    saddlebrown: [139, 69, 19, 1],
                    salmon: [250, 128, 114, 1],
                    sandybrown: [244, 164, 96, 1],
                    seagreen: [46, 139, 87, 1],
                    seashell: [255, 245, 238, 1],
                    sienna: [160, 82, 45, 1],
                    silver: [192, 192, 192, 1],
                    skyblue: [135, 206, 235, 1],
                    slateblue: [106, 90, 205, 1],
                    slategray: [112, 128, 144, 1],
                    slategrey: [112, 128, 144, 1],
                    snow: [255, 250, 250, 1],
                    springgreen: [0, 255, 127, 1],
                    steelblue: [70, 130, 180, 1],
                    tan: [210, 180, 140, 1],
                    teal: [0, 128, 128, 1],
                    thistle: [216, 191, 216, 1],
                    tomato: [255, 99, 71, 1],
                    turquoise: [64, 224, 208, 1],
                    violet: [238, 130, 238, 1],
                    wheat: [245, 222, 179, 1],
                    white: [255, 255, 255, 1],
                    whitesmoke: [245, 245, 245, 1],
                    yellow: [255, 255, 0, 1],
                    yellowgreen: [154, 205, 50, 1]
                };

                function n(e) {
                    return (e = Math.round(e)) < 0 ? 0 : e > 255 ? 255 : e
                }

                function i(e) {
                    return n("%" === e[e.length - 1] ? parseFloat(e) / 100 * 255 : parseInt(e))
                }

                function a(e) {
                    return (t = "%" === e[e.length - 1] ? parseFloat(e) / 100 : parseFloat(e)) < 0 ? 0 : t > 1 ? 1 : t;
                    var t
                }

                function o(e, t, r) {
                    return r < 0 ? r += 1 : r > 1 && (r -= 1), 6 * r < 1 ? e + (t - e) * r * 6 : 2 * r < 1 ? t : 3 * r < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e
                }
                try {
                    t.parseCSSColor = function(e) {
                        var t, s = e.replace(/ /g, "").toLowerCase();
                        if (s in r) return r[s].slice();
                        if ("#" === s[0]) return 4 === s.length ? (t = parseInt(s.substr(1), 16)) >= 0 && t <= 4095 ? [(3840 & t) >> 4 | (3840 & t) >> 8, 240 & t | (240 & t) >> 4, 15 & t | (15 & t) << 4, 1] : null : 7 === s.length && (t = parseInt(s.substr(1), 16)) >= 0 && t <= 16777215 ? [(16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 1] : null;
                        var u = s.indexOf("("),
                            l = s.indexOf(")");
                        if (-1 !== u && l + 1 === s.length) {
                            var c = s.substr(0, u),
                                h = s.substr(u + 1, l - (u + 1)).split(","),
                                f = 1;
                            switch (c) {
                                case "rgba":
                                    if (4 !== h.length) return null;
                                    f = a(h.pop());
                                case "rgb":
                                    return 3 !== h.length ? null : [i(h[0]), i(h[1]), i(h[2]), f];
                                case "hsla":
                                    if (4 !== h.length) return null;
                                    f = a(h.pop());
                                case "hsl":
                                    if (3 !== h.length) return null;
                                    var p = (parseFloat(h[0]) % 360 + 360) % 360 / 360,
                                        y = a(h[1]),
                                        d = a(h[2]),
                                        v = d <= .5 ? d * (y + 1) : d + y - d * y,
                                        m = 2 * d - v;
                                    return [n(255 * o(m, v, p + 1 / 3)), n(255 * o(m, v, p)), n(255 * o(m, v, p - 1 / 3)), f];
                                default:
                                    return null
                            }
                        }
                        return null
                    }
                } catch (e) {}
            })),
            N = function() {
                function e(t, r, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    y(this, e), this.r = t, this.g = r, this.b = n, this.a = i
                }
                return d(e, [{
                    key: "toString",
                    value: function() {
                        var e = this.toArray(),
                            t = p(e, 4),
                            r = t[0],
                            n = t[1],
                            i = t[2],
                            a = t[3];
                        return "rgba(".concat(Math.round(r), ",").concat(Math.round(n), ",").concat(Math.round(i), ",").concat(a, ")")
                    }
                }, {
                    key: "toArray",
                    value: function() {
                        var e = this.r,
                            t = this.g,
                            r = this.b,
                            n = this.a;
                        return 0 === n ? [0, 0, 0, 0] : [255 * e / n, 255 * t / n, 255 * r / n, n]
                    }
                }], [{
                    key: "parse",
                    value: function(t) {
                        if (t) {
                            if (t instanceof e) return t;
                            if ("string" == typeof t) {
                                var r = q.parseCSSColor(t);
                                return r ? new e(r[0] / 255 * r[3], r[1] / 255 * r[3], r[2] / 255 * r[3], r[3]) : void 0
                            }
                        }
                    }
                }]), e
            }();

        function Z(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            for (var i = 0, a = r; i < a.length; i++) {
                var o = a[i];
                for (var s in o) e[s] = o[s]
            }
            return e
        }
        N.black = new N(0, 0, 0, 1), N.white = new N(1, 1, 1, 1), N.transparent = new N(0, 0, 0, 0), N.red = new N(1, 0, 0, 1), N.blue = new N(0, 0, 1, 1);
        var X = function(e) {
                c(r, e);
                var t = h(r);

                function r(e, n) {
                    var i;
                    return y(this, r), (i = t.call(this, n)).message = n, i.key = e, i
                }
                return r
            }(f(Error)),
            G = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    y(this, e), this.parent = t, this.bindings = {};
                    var n, i = l(r);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var a = p(n.value, 2),
                                o = a[0],
                                s = a[1];
                            this.bindings[o] = s
                        }
                    } catch (u) {
                        i.e(u)
                    } finally {
                        i.f()
                    }
                }
                return d(e, [{
                    key: "concat",
                    value: function(t) {
                        return new e(this, t)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        if (this.bindings[e]) return this.bindings[e];
                        if (this.parent) return this.parent.get(e);
                        throw new Error("".concat(e, " not found in scope."))
                    }
                }, {
                    key: "has",
                    value: function(e) {
                        return !!this.bindings[e] || !!this.parent && this.parent.has(e)
                    }
                }]), e
            }(),
            Y = {
                kind: "null"
            },
            K = {
                kind: "number"
            },
            J = {
                kind: "string"
            },
            H = {
                kind: "boolean"
            },
            W = {
                kind: "color"
            },
            $ = {
                kind: "object"
            },
            Q = {
                kind: "value"
            },
            ee = {
                kind: "collator"
            },
            te = {
                kind: "formatted"
            },
            re = {
                kind: "resolvedImage"
            };

        function ne(e, t) {
            return {
                kind: "array",
                itemType: e,
                N: t
            }
        }

        function ie(e) {
            if ("array" === e.kind) {
                var t = ie(e.itemType);
                return "number" == typeof e.N ? "array<".concat(t, ", ").concat(e.N, ">") : "value" === e.itemType.kind ? "array" : "array<".concat(t, ">")
            }
            return e.kind
        }
        var ae = [Y, K, J, H, W, te, $, ne(Q), re];

        function oe(e, t) {
            if ("error" === t.kind) return null;
            if ("array" === e.kind) {
                if ("array" === t.kind && (0 === t.N && "value" === t.itemType.kind || !oe(e.itemType, t.itemType)) && ("number" != typeof e.N || e.N === t.N)) return null
            } else {
                if (e.kind === t.kind) return null;
                if ("value" === e.kind) {
                    var r, n = l(ae);
                    try {
                        for (n.s(); !(r = n.n()).done;) {
                            if (!oe(r.value, t)) return null
                        }
                    } catch (i) {
                        n.e(i)
                    } finally {
                        n.f()
                    }
                }
            }
            return "Expected ".concat(ie(e), " but found ").concat(ie(t), " instead.")
        }

        function se(e, t) {
            return t.some((function(t) {
                return t.kind === e.kind
            }))
        }

        function ue(e, t) {
            return t.some((function(t) {
                return "null" === t ? null === e : "array" === t ? Array.isArray(e) : "object" === t ? e && !Array.isArray(e) && "object" == typeof e : t === typeof e
            }))
        }
        var le = function() {
                function e(t, r, n) {
                    y(this, e), this.sensitivity = t ? r ? "variant" : "case" : r ? "accent" : "base", this.locale = n, this.collator = new Intl.Collator(this.locale ? this.locale : [], {
                        sensitivity: this.sensitivity,
                        usage: "search"
                    })
                }
                return d(e, [{
                    key: "compare",
                    value: function(e, t) {
                        return this.collator.compare(e, t)
                    }
                }, {
                    key: "resolvedLocale",
                    value: function() {
                        return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale
                    }
                }]), e
            }(),
            ce = function e(t, r, n, i, a) {
                y(this, e), this.text = t, this.image = r, this.scale = n, this.fontStack = i, this.textColor = a
            },
            he = function() {
                function e(t) {
                    y(this, e), this.sections = t
                }
                return d(e, [{
                    key: "isEmpty",
                    value: function() {
                        return 0 === this.sections.length || !this.sections.some((function(e) {
                            return 0 !== e.text.length || e.image && 0 !== e.image.name.length
                        }))
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return 0 === this.sections.length ? "" : this.sections.map((function(e) {
                            return e.text
                        })).join("")
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e, t = ["format"],
                            r = l(this.sections);
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var n = e.value;
                                if (n.image) t.push(["image", n.image.name]);
                                else {
                                    t.push(n.text);
                                    var i = {};
                                    n.fontStack && (i["text-font"] = ["literal", n.fontStack.split(",")]), n.scale && (i["font-scale"] = n.scale), n.textColor && (i["text-color"] = ["rgba"].concat(n.textColor.toArray())), t.push(i)
                                }
                            }
                        } catch (a) {
                            r.e(a)
                        } finally {
                            r.f()
                        }
                        return t
                    }
                }], [{
                    key: "fromString",
                    value: function(t) {
                        return new e([new ce(t, null, null, null, null)])
                    }
                }, {
                    key: "factory",
                    value: function(t) {
                        return t instanceof e ? t : e.fromString(t)
                    }
                }]), e
            }(),
            fe = function() {
                function e(t) {
                    y(this, e), this.name = t.name, this.available = t.available
                }
                return d(e, [{
                    key: "toString",
                    value: function() {
                        return this.name
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return ["image", this.name]
                    }
                }], [{
                    key: "fromString",
                    value: function(t) {
                        return t ? new e({
                            name: t,
                            available: !1
                        }) : null
                    }
                }]), e
            }();

        function pe(e, t, r, n) {
            return "number" == typeof e && e >= 0 && e <= 255 && "number" == typeof t && t >= 0 && t <= 255 && "number" == typeof r && r >= 0 && r <= 255 ? void 0 === n || "number" == typeof n && n >= 0 && n <= 1 ? null : "Invalid rgba value [".concat([e, t, r, n].join(", "), "]: 'a' must be between 0 and 1.") : "Invalid rgba value [".concat(("number" == typeof n ? [e, t, r, n] : [e, t, r]).join(", "), "]: 'r', 'g', and 'b' must be between 0 and 255.")
        }

        function ye(e) {
            if (null === e) return !0;
            if ("string" == typeof e) return !0;
            if ("boolean" == typeof e) return !0;
            if ("number" == typeof e) return !0;
            if (e instanceof N) return !0;
            if (e instanceof le) return !0;
            if (e instanceof he) return !0;
            if (e instanceof fe) return !0;
            if (Array.isArray(e)) {
                var t, r = l(e);
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        if (!ye(t.value)) return !1
                    }
                } catch (i) {
                    r.e(i)
                } finally {
                    r.f()
                }
                return !0
            }
            if ("object" == typeof e) {
                for (var n in e)
                    if (!ye(e[n])) return !1;
                return !0
            }
            return !1
        }

        function de(e) {
            if (null === e) return Y;
            if ("string" == typeof e) return J;
            if ("boolean" == typeof e) return H;
            if ("number" == typeof e) return K;
            if (e instanceof N) return W;
            if (e instanceof le) return ee;
            if (e instanceof he) return te;
            if (e instanceof fe) return re;
            if (Array.isArray(e)) {
                var t, r, n = e.length,
                    i = l(e);
                try {
                    for (i.s(); !(r = i.n()).done;) {
                        var a = de(r.value);
                        if (t) {
                            if (t === a) continue;
                            t = Q;
                            break
                        }
                        t = a
                    }
                } catch (o) {
                    i.e(o)
                } finally {
                    i.f()
                }
                return ne(t || Q, n)
            }
            return $
        }

        function ve(e) {
            var t = typeof e;
            return null === e ? "" : "string" === t || "number" === t || "boolean" === t ? String(e) : e instanceof N || e instanceof he || e instanceof fe ? e.toString() : JSON.stringify(e)
        }
        var me = function() {
                function e(t, r) {
                    y(this, e), this.type = t, this.value = r
                }
                return d(e, [{
                    key: "evaluate",
                    value: function() {
                        return this.value
                    }
                }, {
                    key: "eachChild",
                    value: function() {}
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return "array" === this.type.kind || "object" === this.type.kind ? ["literal", this.value] : this.value instanceof N ? ["rgba"].concat(this.value.toArray()) : this.value instanceof he ? this.value.serialize() : this.value
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (2 !== t.length) return r.error("'literal' expression requires exactly one argument, but found ".concat(t.length - 1, " instead."));
                        if (!ye(t[1])) return r.error("invalid value");
                        var n = t[1],
                            i = de(n),
                            a = r.expectedType;
                        return "array" !== i.kind || 0 !== i.N || !a || "array" !== a.kind || "number" == typeof a.N && 0 !== a.N || (i = a), new e(i, n)
                    }
                }]), e
            }(),
            ge = function() {
                function e(t) {
                    y(this, e), this.name = "ExpressionEvaluationError", this.message = t
                }
                return d(e, [{
                    key: "toJSON",
                    value: function() {
                        return this.message
                    }
                }]), e
            }(),
            xe = {
                string: J,
                number: K,
                boolean: H,
                object: $
            },
            be = function() {
                function e(t, r) {
                    y(this, e), this.type = t, this.args = r
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        for (var t = 0; t < this.args.length; t++) {
                            var r = this.args[t].evaluate(e);
                            if (!oe(this.type, de(r))) return r;
                            if (t === this.args.length - 1) throw new ge("Expected value to be of type ".concat(ie(this.type), ", but found ").concat(ie(de(r)), " instead."))
                        }
                        return null
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        this.args.forEach(e)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return this.args.every((function(e) {
                            return e.outputDefined()
                        }))
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e = this.type,
                            t = [e.kind];
                        if ("array" === e.kind) {
                            var r = e.itemType;
                            if ("string" === r.kind || "number" === r.kind || "boolean" === r.kind) {
                                t.push(r.kind);
                                var n = e.N;
                                ("number" == typeof n || this.args.length > 1) && t.push(n)
                            }
                        }
                        return t.concat(this.args.map((function(e) {
                            return e.serialize()
                        })))
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length < 2) return r.error("Expected at least one argument.");
                        var n, i = 1,
                            a = t[0];
                        if ("array" === a) {
                            var o, s;
                            if (t.length > 2) {
                                var u = t[1];
                                if ("string" != typeof u || !(u in xe) || "object" === u) return r.error('The item type argument of "array" must be one of string, number, boolean', 1);
                                o = xe[u], i++
                            } else o = Q;
                            if (t.length > 3) {
                                if (null !== t[2] && ("number" != typeof t[2] || t[2] < 0 || t[2] !== Math.floor(t[2]))) return r.error('The length argument to "array" must be a positive integer literal', 2);
                                s = t[2], i++
                            }
                            n = ne(o, s)
                        } else n = xe[a];
                        for (var l = []; i < t.length; i++) {
                            var c = r.parse(t[i], i, Q);
                            if (!c) return null;
                            l.push(c)
                        }
                        return new e(n, l)
                    }
                }]), e
            }(),
            ke = function() {
                function e(t) {
                    y(this, e), this.type = te, this.sections = t
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        return new he(this.sections.map((function(t) {
                            var r = t.content.evaluate(e);
                            return de(r) === re ? new ce("", r, null, null, null) : new ce(ve(r), null, t.scale ? t.scale.evaluate(e) : null, t.font ? t.font.evaluate(e).join(",") : null, t.textColor ? t.textColor.evaluate(e) : null)
                        })))
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        var t, r = l(this.sections);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = t.value;
                                e(n.content), n.scale && e(n.scale), n.font && e(n.font), n.textColor && e(n.textColor)
                            }
                        } catch (i) {
                            r.e(i)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e, t = ["format"],
                            r = l(this.sections);
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var n = e.value;
                                t.push(n.content.serialize());
                                var i = {};
                                n.scale && (i["font-scale"] = n.scale.serialize()), n.font && (i["text-font"] = n.font.serialize()), n.textColor && (i["text-color"] = n.textColor.serialize()), t.push(i)
                            }
                        } catch (a) {
                            r.e(a)
                        } finally {
                            r.f()
                        }
                        return t
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length < 2) return r.error("Expected at least one argument.");
                        var n = t[1];
                        if (!Array.isArray(n) && "object" == typeof n) return r.error("First argument must be an image or text section.");
                        for (var i = [], a = !1, o = 1; o <= t.length - 1; ++o) {
                            var s = t[o];
                            if (a && "object" == typeof s && !Array.isArray(s)) {
                                a = !1;
                                var u = null;
                                if (s["font-scale"] && !(u = r.parse(s["font-scale"], 1, K))) return null;
                                var l = null;
                                if (s["text-font"] && !(l = r.parse(s["text-font"], 1, ne(J)))) return null;
                                var c = null;
                                if (s["text-color"] && !(c = r.parse(s["text-color"], 1, W))) return null;
                                var h = i[i.length - 1];
                                h.scale = u, h.font = l, h.textColor = c
                            } else {
                                var f = r.parse(t[o], 1, Q);
                                if (!f) return null;
                                var p = f.type.kind;
                                if ("string" !== p && "value" !== p && "null" !== p && "resolvedImage" !== p) return r.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");
                                a = !0, i.push({
                                    content: f,
                                    scale: null,
                                    font: null,
                                    textColor: null
                                })
                            }
                        }
                        return new e(i)
                    }
                }]), e
            }(),
            we = function() {
                function e(t) {
                    y(this, e), this.type = re, this.input = t
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t = this.input.evaluate(e),
                            r = fe.fromString(t);
                        return r && e.availableImages && (r.available = e.availableImages.indexOf(t) > -1), r
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.input)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return ["image", this.input.serialize()]
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (2 !== t.length) return r.error("Expected two arguments.");
                        var n = r.parse(t[1], 1, J);
                        return n ? new e(n) : r.error("No image name provided.")
                    }
                }]), e
            }(),
            _e = {
                "to-boolean": H,
                "to-color": W,
                "to-number": K,
                "to-string": J
            },
            Se = function() {
                function e(t, r) {
                    y(this, e), this.type = t, this.args = r
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        if ("boolean" === this.type.kind) return Boolean(this.args[0].evaluate(e));
                        if ("color" === this.type.kind) {
                            var t, r, n, i = l(this.args);
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    if (t = n.value.evaluate(e), r = null, t instanceof N) return t;
                                    if ("string" == typeof t) {
                                        var a = e.parseColor(t);
                                        if (a) return a
                                    } else if (Array.isArray(t) && !(r = t.length < 3 || t.length > 4 ? "Invalid rbga value ".concat(JSON.stringify(t), ": expected an array containing either three or four numeric values.") : pe(t[0], t[1], t[2], t[3]))) return new N(t[0] / 255, t[1] / 255, t[2] / 255, t[3])
                                }
                            } catch (h) {
                                i.e(h)
                            } finally {
                                i.f()
                            }
                            throw new ge(r || "Could not parse color from value '".concat("string" == typeof t ? t : String(JSON.stringify(t)), "'"))
                        }
                        if ("number" === this.type.kind) {
                            var o, s = null,
                                u = l(this.args);
                            try {
                                for (u.s(); !(o = u.n()).done;) {
                                    if (null === (s = o.value.evaluate(e))) return 0;
                                    var c = Number(s);
                                    if (!isNaN(c)) return c
                                }
                            } catch (h) {
                                u.e(h)
                            } finally {
                                u.f()
                            }
                            throw new ge("Could not convert ".concat(JSON.stringify(s), " to number."))
                        }
                        return "formatted" === this.type.kind ? he.fromString(ve(this.args[0].evaluate(e))) : "resolvedImage" === this.type.kind ? fe.fromString(ve(this.args[0].evaluate(e))) : ve(this.args[0].evaluate(e))
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        this.args.forEach(e)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return this.args.every((function(e) {
                            return e.outputDefined()
                        }))
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        if ("formatted" === this.type.kind) return new ke([{
                            content: this.args[0],
                            scale: null,
                            font: null,
                            textColor: null
                        }]).serialize();
                        if ("resolvedImage" === this.type.kind) return new we(this.args[0]).serialize();
                        var e = ["to-".concat(this.type.kind)];
                        return this.eachChild((function(t) {
                            e.push(t.serialize())
                        })), e
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length < 2) return r.error("Expected at least one argument.");
                        var n = t[0];
                        if (("to-boolean" === n || "to-string" === n) && 2 !== t.length) return r.error("Expected one argument.");
                        for (var i = _e[n], a = [], o = 1; o < t.length; o++) {
                            var s = r.parse(t[o], o, Q);
                            if (!s) return null;
                            a.push(s)
                        }
                        return new e(i, a)
                    }
                }]), e
            }(),
            Ae = ["Unknown", "Point", "LineString", "Polygon"],
            Ie = function() {
                function e() {
                    y(this, e), this.globals = null, this.feature = null, this.featureState = null, this.formattedSection = null, this._parseColorCache = {}, this.availableImages = null, this.canonical = null
                }
                return d(e, [{
                    key: "id",
                    value: function() {
                        return this.feature && "id" in this.feature ? this.feature.id : null
                    }
                }, {
                    key: "geometryType",
                    value: function() {
                        return this.feature ? "number" == typeof this.feature.type ? Ae[this.feature.type] : this.feature.type : null
                    }
                }, {
                    key: "geometry",
                    value: function() {
                        return this.feature && "geometry" in this.feature ? this.feature.geometry : null
                    }
                }, {
                    key: "canonicalID",
                    value: function() {
                        return this.canonical
                    }
                }, {
                    key: "properties",
                    value: function() {
                        return this.feature && this.feature.properties || {}
                    }
                }, {
                    key: "parseColor",
                    value: function(e) {
                        var t = this._parseColorCache[e];
                        return t || (t = this._parseColorCache[e] = N.parse(e)), t
                    }
                }]), e
            }(),
            ze = function() {
                function e(t, r, n, i) {
                    y(this, e), this.name = t, this.type = r, this._evaluate = n, this.args = i
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        return this._evaluate(e, this.args)
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        this.args.forEach(e)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return [this.name].concat(this.args.map((function(e) {
                            return e.serialize()
                        })))
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        var n, i = t[0],
                            a = e.definitions[i];
                        if (!a) return r.error('Unknown expression "'.concat(i, '". If you wanted a literal array, use ["literal", [...]].'), 0);
                        var o, s = Array.isArray(a) ? a[0] : a.type,
                            c = Array.isArray(a) ? [
                                [a[1], a[2]]
                            ] : a.overloads,
                            h = c.filter((function(e) {
                                var r = p(e, 1)[0];
                                return !Array.isArray(r) || r.length === t.length - 1
                            })),
                            f = null,
                            y = l(h);
                        try {
                            for (y.s(); !(o = y.n()).done;) {
                                var d = p(o.value, 2),
                                    v = d[0],
                                    m = d[1];
                                f = new He(r.registry, r.path, null, r.scope);
                                for (var g = [], x = !1, b = 1; b < t.length; b++) {
                                    var k = t[b],
                                        w = Array.isArray(v) ? v[b - 1] : v.type,
                                        _ = f.parse(k, 1 + g.length, w);
                                    if (!_) {
                                        x = !0;
                                        break
                                    }
                                    g.push(_)
                                }
                                if (!x)
                                    if (Array.isArray(v) && v.length !== g.length) f.error("Expected ".concat(v.length, " arguments, but found ").concat(g.length, " instead."));
                                    else {
                                        for (var S = 0; S < g.length; S++) {
                                            var A = Array.isArray(v) ? v[S] : v.type,
                                                I = g[S];
                                            f.concat(S + 1).checkSubtype(A, I.type)
                                        }
                                        if (0 === f.errors.length) return new e(i, s, m, g)
                                    }
                            }
                        } catch (P) {
                            y.e(P)
                        } finally {
                            y.f()
                        }
                        if (1 === h.length)(n = r.errors).push.apply(n, u(f.errors));
                        else {
                            for (var z = (h.length ? h : c).map((function(e) {
                                    var t;
                                    return t = p(e, 1)[0], Array.isArray(t) ? "(".concat(t.map(ie).join(", "), ")") : "(".concat(ie(t.type), "...)")
                                })).join(" | "), M = [], C = 1; C < t.length; C++) {
                                var B = r.parse(t[C], 1 + M.length);
                                if (!B) return null;
                                M.push(ie(B.type))
                            }
                            r.error("Expected arguments of type ".concat(z, ", but found (").concat(M.join(", "), ") instead."))
                        }
                        return null
                    }
                }, {
                    key: "register",
                    value: function(t, r) {
                        for (var n in e.definitions = r, r) t[n] = e
                    }
                }]), e
            }(),
            Me = function() {
                function e(t, r, n) {
                    y(this, e), this.type = ee, this.locale = n, this.caseSensitive = t, this.diacriticSensitive = r
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        return new le(this.caseSensitive.evaluate(e), this.diacriticSensitive.evaluate(e), this.locale ? this.locale.evaluate(e) : null)
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.caseSensitive), e(this.diacriticSensitive), this.locale && e(this.locale)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e = {};
                        return e["case-sensitive"] = this.caseSensitive.serialize(), e["diacritic-sensitive"] = this.diacriticSensitive.serialize(), this.locale && (e.locale = this.locale.serialize()), ["collator", e]
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (2 !== t.length) return r.error("Expected one argument.");
                        var n = t[1];
                        if ("object" != typeof n || Array.isArray(n)) return r.error("Collator options argument must be an object.");
                        var i = r.parse(void 0 !== n["case-sensitive"] && n["case-sensitive"], 1, H);
                        if (!i) return null;
                        var a = r.parse(void 0 !== n["diacritic-sensitive"] && n["diacritic-sensitive"], 1, H);
                        if (!a) return null;
                        var o = null;
                        return n.locale && !(o = r.parse(n.locale, 1, J)) ? null : new e(i, a, o)
                    }
                }]), e
            }(),
            Ce = 8192;

        function Be(e, t) {
            e[0] = Math.min(e[0], t[0]), e[1] = Math.min(e[1], t[1]), e[2] = Math.max(e[2], t[0]), e[3] = Math.max(e[3], t[1])
        }

        function Pe(e, t) {
            return !(e[0] <= t[0] || e[2] >= t[2] || e[1] <= t[1] || e[3] >= t[3])
        }

        function Ve(e, t) {
            var r = (180 + e[0]) / 360,
                n = (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + e[1] * Math.PI / 360))) / 360,
                i = Math.pow(2, t.z);
            return [Math.round(r * i * Ce), Math.round(n * i * Ce)]
        }

        function Te(e, t, r) {
            var n = e[0] - t[0],
                i = e[1] - t[1],
                a = e[0] - r[0],
                o = e[1] - r[1];
            return n * o - a * i == 0 && n * a <= 0 && i * o <= 0
        }

        function Ee(e, t) {
            for (var r, n, i, a = !1, o = 0, s = t.length; o < s; o++)
                for (var u = t[o], l = 0, c = u.length; l < c - 1; l++) {
                    if (Te(e, u[l], u[l + 1])) return !1;
                    (n = u[l])[1] > (r = e)[1] != (i = u[l + 1])[1] > r[1] && r[0] < (i[0] - n[0]) * (r[1] - n[1]) / (i[1] - n[1]) + n[0] && (a = !a)
                }
            return a
        }

        function De(e, t) {
            for (var r = 0; r < t.length; r++)
                if (Ee(e, t[r])) return !0;
            return !1
        }

        function Fe(e, t, r, n) {
            var i = n[0] - r[0],
                a = n[1] - r[1],
                o = (e[0] - r[0]) * a - i * (e[1] - r[1]),
                s = (t[0] - r[0]) * a - i * (t[1] - r[1]);
            return o > 0 && s < 0 || o < 0 && s > 0
        }

        function Le(e, t, r) {
            var n, i, a, o, s, u, c, h = l(r);
            try {
                for (h.s(); !(n = h.n()).done;)
                    for (var f = n.value, p = 0; p < f.length - 1; ++p)
                        if (0 != (u = [(s = f[p + 1])[0] - (o = f[p])[0], s[1] - o[1]])[0] * (c = [(a = t)[0] - (i = e)[0], a[1] - i[1]])[1] - u[1] * c[0] && Fe(i, a, o, s) && Fe(o, s, i, a)) return !0
            } catch (y) {
                h.e(y)
            } finally {
                h.f()
            }
            return !1
        }

        function Oe(e, t) {
            for (var r = 0; r < e.length; ++r)
                if (!Ee(e[r], t)) return !1;
            for (var n = 0; n < e.length - 1; ++n)
                if (Le(e[n], e[n + 1], t)) return !1;
            return !0
        }

        function Re(e, t) {
            for (var r = 0; r < t.length; r++)
                if (Oe(e, t[r])) return !0;
            return !1
        }

        function je(e, t, r) {
            for (var n = [], i = 0; i < e.length; i++) {
                for (var a = [], o = 0; o < e[i].length; o++) {
                    var s = Ve(e[i][o], r);
                    Be(t, s), a.push(s)
                }
                n.push(a)
            }
            return n
        }

        function Ue(e, t, r) {
            for (var n = [], i = 0; i < e.length; i++) {
                var a = je(e[i], t, r);
                n.push(a)
            }
            return n
        }

        function qe(e, t, r, n) {
            if (e[0] < r[0] || e[0] > r[2]) {
                var i = .5 * n,
                    a = e[0] - r[0] > i ? -n : r[0] - e[0] > i ? n : 0;
                0 === a && (a = e[0] - r[2] > i ? -n : r[2] - e[0] > i ? n : 0), e[0] += a
            }
            Be(t, e)
        }

        function Ne(e, t, r, n) {
            var i, a = Math.pow(2, n.z) * Ce,
                o = [n.x * Ce, n.y * Ce],
                s = [],
                u = l(e);
            try {
                for (u.s(); !(i = u.n()).done;) {
                    var c, h = i.value,
                        f = l(h);
                    try {
                        for (f.s(); !(c = f.n()).done;) {
                            var p = c.value,
                                y = [p.x + o[0], p.y + o[1]];
                            qe(y, t, r, a), s.push(y)
                        }
                    } catch (d) {
                        f.e(d)
                    } finally {
                        f.f()
                    }
                }
            } catch (d) {
                u.e(d)
            } finally {
                u.f()
            }
            return s
        }

        function Ze(e, t, r, n) {
            var i, a, o = Math.pow(2, n.z) * Ce,
                s = [n.x * Ce, n.y * Ce],
                u = [],
                c = l(e);
            try {
                for (c.s(); !(i = c.n()).done;) {
                    var h, f = i.value,
                        p = [],
                        y = l(f);
                    try {
                        for (y.s(); !(h = y.n()).done;) {
                            var d = h.value,
                                v = [d.x + s[0], d.y + s[1]];
                            Be(t, v), p.push(v)
                        }
                    } catch (w) {
                        y.e(w)
                    } finally {
                        y.f()
                    }
                    u.push(p)
                }
            } catch (w) {
                c.e(w)
            } finally {
                c.f()
            }
            if (t[2] - t[0] <= o / 2) {
                (a = t)[0] = a[1] = 1 / 0, a[2] = a[3] = -1 / 0;
                var m, g = l(u);
                try {
                    for (g.s(); !(m = g.n()).done;) {
                        var x, b = m.value,
                            k = l(b);
                        try {
                            for (k.s(); !(x = k.n()).done;) {
                                qe(x.value, t, r, o)
                            }
                        } catch (w) {
                            k.e(w)
                        } finally {
                            k.f()
                        }
                    }
                } catch (w) {
                    g.e(w)
                } finally {
                    g.f()
                }
            }
            return u
        }
        var Xe = function() {
            function e(t, r) {
                y(this, e), this.type = H, this.geojson = t, this.geometries = r
            }
            return d(e, [{
                key: "evaluate",
                value: function(e) {
                    if (null != e.geometry() && null != e.canonicalID()) {
                        if ("Point" === e.geometryType()) return function(e, t) {
                            var r = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
                                n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
                                i = e.canonicalID();
                            if ("Polygon" === t.type) {
                                var a = je(t.coordinates, n, i),
                                    o = Ne(e.geometry(), r, n, i);
                                if (!Pe(r, n)) return !1;
                                var s, u = l(o);
                                try {
                                    for (u.s(); !(s = u.n()).done;) {
                                        if (!Ee(s.value, a)) return !1
                                    }
                                } catch (y) {
                                    u.e(y)
                                } finally {
                                    u.f()
                                }
                            }
                            if ("MultiPolygon" === t.type) {
                                var c = Ue(t.coordinates, n, i),
                                    h = Ne(e.geometry(), r, n, i);
                                if (!Pe(r, n)) return !1;
                                var f, p = l(h);
                                try {
                                    for (p.s(); !(f = p.n()).done;) {
                                        if (!De(f.value, c)) return !1
                                    }
                                } catch (y) {
                                    p.e(y)
                                } finally {
                                    p.f()
                                }
                            }
                            return !0
                        }(e, this.geometries);
                        if ("LineString" === e.geometryType()) return function(e, t) {
                            var r = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
                                n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
                                i = e.canonicalID();
                            if ("Polygon" === t.type) {
                                var a = je(t.coordinates, n, i),
                                    o = Ze(e.geometry(), r, n, i);
                                if (!Pe(r, n)) return !1;
                                var s, u = l(o);
                                try {
                                    for (u.s(); !(s = u.n()).done;) {
                                        if (!Oe(s.value, a)) return !1
                                    }
                                } catch (y) {
                                    u.e(y)
                                } finally {
                                    u.f()
                                }
                            }
                            if ("MultiPolygon" === t.type) {
                                var c = Ue(t.coordinates, n, i),
                                    h = Ze(e.geometry(), r, n, i);
                                if (!Pe(r, n)) return !1;
                                var f, p = l(h);
                                try {
                                    for (p.s(); !(f = p.n()).done;) {
                                        if (!Re(f.value, c)) return !1
                                    }
                                } catch (y) {
                                    p.e(y)
                                } finally {
                                    p.f()
                                }
                            }
                            return !0
                        }(e, this.geometries)
                    }
                    return !1
                }
            }, {
                key: "eachChild",
                value: function() {}
            }, {
                key: "outputDefined",
                value: function() {
                    return !0
                }
            }, {
                key: "serialize",
                value: function() {
                    return ["within", this.geojson]
                }
            }], [{
                key: "parse",
                value: function(t, r) {
                    if (2 !== t.length) return r.error("'within' expression requires exactly one argument, but found ".concat(t.length - 1, " instead."));
                    if (ye(t[1])) {
                        var n = t[1];
                        if ("FeatureCollection" === n.type)
                            for (var i = 0; i < n.features.length; ++i) {
                                var a = n.features[i].geometry.type;
                                if ("Polygon" === a || "MultiPolygon" === a) return new e(n, n.features[i].geometry)
                            } else if ("Feature" === n.type) {
                                var o = n.geometry.type;
                                if ("Polygon" === o || "MultiPolygon" === o) return new e(n, n.geometry)
                            } else if ("Polygon" === n.type || "MultiPolygon" === n.type) return new e(n, n)
                    }
                    return r.error("'within' expression requires valid geojson object that contains polygon geometry type.")
                }
            }]), e
        }();

        function Ge(e) {
            if (e instanceof ze) {
                if ("get" === e.name && 1 === e.args.length) return !1;
                if ("feature-state" === e.name) return !1;
                if ("has" === e.name && 1 === e.args.length) return !1;
                if ("properties" === e.name || "geometry-type" === e.name || "id" === e.name) return !1;
                if (/^filter-/.test(e.name)) return !1
            }
            if (e instanceof Xe) return !1;
            var t = !0;
            return e.eachChild((function(e) {
                t && !Ge(e) && (t = !1)
            })), t
        }

        function Ye(e) {
            if (e instanceof ze && "feature-state" === e.name) return !1;
            var t = !0;
            return e.eachChild((function(e) {
                t && !Ye(e) && (t = !1)
            })), t
        }

        function Ke(e, t) {
            if (e instanceof ze && t.indexOf(e.name) >= 0) return !1;
            var r = !0;
            return e.eachChild((function(e) {
                r && !Ke(e, t) && (r = !1)
            })), r
        }
        var Je = function() {
                function e(t, r) {
                    y(this, e), this.type = r.type, this.name = t, this.boundExpression = r
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        return this.boundExpression.evaluate(e)
                    }
                }, {
                    key: "eachChild",
                    value: function() {}
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return ["var", this.name]
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (2 !== t.length || "string" != typeof t[1]) return r.error("'var' expression requires exactly one string literal argument.");
                        var n = t[1];
                        return r.scope.has(n) ? new e(n, r.scope.get(n)) : r.error('Unknown variable "'.concat(n, '". Make sure "').concat(n, '" has been bound in an enclosing "let" expression before using it.'), 1)
                    }
                }]), e
            }(),
            He = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new G,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                    y(this, e), this.registry = t, this.path = r, this.key = r.map((function(e) {
                        return "[".concat(e, "]")
                    })).join(""), this.scope = i, this.errors = a, this.expectedType = n
                }
                return d(e, [{
                    key: "parse",
                    value: function(e, t, r, n) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        return t ? this.concat(t, r, n)._parse(e, i) : this._parse(e, i)
                    }
                }, {
                    key: "_parse",
                    value: function(e, t) {
                        function r(e, t, r) {
                            return "assert" === r ? new be(t, [e]) : "coerce" === r ? new Se(t, [e]) : e
                        }
                        if (null !== e && "string" != typeof e && "boolean" != typeof e && "number" != typeof e || (e = ["literal", e]), Array.isArray(e)) {
                            if (0 === e.length) return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
                            var n = e[0];
                            if ("string" != typeof n) return this.error("Expression name must be a string, but found ".concat(typeof n, ' instead. If you wanted a literal array, use ["literal", [...]].'), 0), null;
                            var i = this.registry[n];
                            if (i) {
                                var a = i.parse(e, this);
                                if (!a) return null;
                                if (this.expectedType) {
                                    var o = this.expectedType,
                                        s = a.type;
                                    if ("string" !== o.kind && "number" !== o.kind && "boolean" !== o.kind && "object" !== o.kind && "array" !== o.kind || "value" !== s.kind)
                                        if ("color" !== o.kind && "formatted" !== o.kind && "resolvedImage" !== o.kind || "value" !== s.kind && "string" !== s.kind) {
                                            if (this.checkSubtype(o, s)) return null
                                        } else a = r(a, o, t.typeAnnotation || "coerce");
                                    else a = r(a, o, t.typeAnnotation || "assert")
                                }
                                if (!(a instanceof me) && "resolvedImage" !== a.type.kind && We(a)) {
                                    var u = new Ie;
                                    try {
                                        a = new me(a.type, a.evaluate(u))
                                    } catch (e) {
                                        return this.error(e.message), null
                                    }
                                }
                                return a
                            }
                            return this.error('Unknown expression "'.concat(n, '". If you wanted a literal array, use ["literal", [...]].'), 0)
                        }
                        return this.error(void 0 === e ? "'undefined' value invalid. Use null instead." : "object" == typeof e ? 'Bare objects invalid. Use ["literal", {...}] instead.' : "Expected an array, but found ".concat(typeof e, " instead."))
                    }
                }, {
                    key: "concat",
                    value: function(t, r, n) {
                        var i = "number" == typeof t ? this.path.concat(t) : this.path,
                            a = n ? this.scope.concat(n) : this.scope;
                        return new e(this.registry, i, r || null, a, this.errors)
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        var i = "".concat(this.key).concat(r.map((function(e) {
                            return "[".concat(e, "]")
                        })).join(""));
                        this.errors.push(new X(i, e))
                    }
                }, {
                    key: "checkSubtype",
                    value: function(e, t) {
                        var r = oe(e, t);
                        return r && this.error(r), r
                    }
                }]), e
            }();

        function We(e) {
            if (e instanceof Je) return We(e.boundExpression);
            if (e instanceof ze && "error" === e.name) return !1;
            if (e instanceof Me) return !1;
            if (e instanceof Xe) return !1;
            var t = e instanceof Se || e instanceof be,
                r = !0;
            return e.eachChild((function(e) {
                r = t ? r && We(e) : r && e instanceof me
            })), !!r && Ge(e) && Ke(e, ["zoom", "heatmap-density", "line-progress", "sky-radial-progress", "accumulated", "is-supported-script"])
        }

        function $e(e, t) {
            for (var r, n, i = e.length - 1, a = 0, o = i, s = 0; a <= o;)
                if (r = e[s = Math.floor((a + o) / 2)], n = e[s + 1], r <= t) {
                    if (s === i || t < n) return s;
                    a = s + 1
                } else {
                    if (!(r > t)) throw new ge("Input is not a number.");
                    o = s - 1
                }
            return 0
        }
        var Qe = function() {
            function e(t, r, n) {
                y(this, e), this.type = t, this.input = r, this.labels = [], this.outputs = [];
                var i, a = l(n);
                try {
                    for (a.s(); !(i = a.n()).done;) {
                        var o = p(i.value, 2),
                            s = o[0],
                            u = o[1];
                        this.labels.push(s), this.outputs.push(u)
                    }
                } catch (c) {
                    a.e(c)
                } finally {
                    a.f()
                }
            }
            return d(e, [{
                key: "evaluate",
                value: function(e) {
                    var t = this.labels,
                        r = this.outputs;
                    if (1 === t.length) return r[0].evaluate(e);
                    var n = this.input.evaluate(e);
                    if (n <= t[0]) return r[0].evaluate(e);
                    var i = t.length;
                    return n >= t[i - 1] ? r[i - 1].evaluate(e) : r[$e(t, n)].evaluate(e)
                }
            }, {
                key: "eachChild",
                value: function(e) {
                    e(this.input);
                    var t, r = l(this.outputs);
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            e(t.value)
                        }
                    } catch (n) {
                        r.e(n)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "outputDefined",
                value: function() {
                    return this.outputs.every((function(e) {
                        return e.outputDefined()
                    }))
                }
            }, {
                key: "serialize",
                value: function() {
                    for (var e = ["step", this.input.serialize()], t = 0; t < this.labels.length; t++) t > 0 && e.push(this.labels[t]), e.push(this.outputs[t].serialize());
                    return e
                }
            }], [{
                key: "parse",
                value: function(t, r) {
                    if (t.length - 1 < 4) return r.error("Expected at least 4 arguments, but found only ".concat(t.length - 1, "."));
                    if ((t.length - 1) % 2 != 0) return r.error("Expected an even number of arguments.");
                    var n = r.parse(t[1], 1, K);
                    if (!n) return null;
                    var i = [],
                        a = null;
                    r.expectedType && "value" !== r.expectedType.kind && (a = r.expectedType);
                    for (var o = 1; o < t.length; o += 2) {
                        var s = 1 === o ? -1 / 0 : t[o],
                            u = t[o + 1],
                            l = o,
                            c = o + 1;
                        if ("number" != typeof s) return r.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', l);
                        if (i.length && i[i.length - 1][0] >= s) return r.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', l);
                        var h = r.parse(u, c, a);
                        if (!h) return null;
                        a = a || h.type, i.push([s, h])
                    }
                    return new e(a, n, i)
                }
            }]), e
        }();

        function et(e, t, r) {
            return e * (1 - r) + t * r
        }
        var tt = Object.freeze({
                __proto__: null,
                number: et,
                color: function(e, t, r) {
                    return new N(et(e.r, t.r, r), et(e.g, t.g, r), et(e.b, t.b, r), et(e.a, t.a, r))
                },
                array: function(e, t, r) {
                    return e.map((function(e, n) {
                        return et(e, t[n], r)
                    }))
                }
            }),
            rt = .95047,
            nt = 1.08883,
            it = 4 / 29,
            at = 6 / 29,
            ot = 3 * at * at,
            st = Math.PI / 180,
            ut = 180 / Math.PI;

        function lt(e) {
            return e > .008856451679035631 ? Math.pow(e, 1 / 3) : e / ot + it
        }

        function ct(e) {
            return e > at ? e * e * e : ot * (e - it)
        }

        function ht(e) {
            return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055)
        }

        function ft(e) {
            return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }

        function pt(e) {
            var t = ft(e.r),
                r = ft(e.g),
                n = ft(e.b),
                i = lt((.4124564 * t + .3575761 * r + .1804375 * n) / rt),
                a = lt((.2126729 * t + .7151522 * r + .072175 * n) / 1);
            return {
                l: 116 * a - 16,
                a: 500 * (i - a),
                b: 200 * (a - lt((.0193339 * t + .119192 * r + .9503041 * n) / nt)),
                alpha: e.a
            }
        }

        function yt(e) {
            var t = (e.l + 16) / 116,
                r = isNaN(e.a) ? t : t + e.a / 500,
                n = isNaN(e.b) ? t : t - e.b / 200;
            return t = 1 * ct(t), r = rt * ct(r), n = nt * ct(n), new N(ht(3.2404542 * r - 1.5371385 * t - .4985314 * n), ht(-.969266 * r + 1.8760108 * t + .041556 * n), ht(.0556434 * r - .2040259 * t + 1.0572252 * n), e.alpha)
        }

        function dt(e, t, r) {
            var n = t - e;
            return e + r * (n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
        }
        var vt = {
                forward: pt,
                reverse: yt,
                interpolate: function(e, t, r) {
                    return {
                        l: et(e.l, t.l, r),
                        a: et(e.a, t.a, r),
                        b: et(e.b, t.b, r),
                        alpha: et(e.alpha, t.alpha, r)
                    }
                }
            },
            mt = {
                forward: function(e) {
                    var t = pt(e),
                        r = t.l,
                        n = t.a,
                        i = t.b,
                        a = Math.atan2(i, n) * ut;
                    return {
                        h: a < 0 ? a + 360 : a,
                        c: Math.sqrt(n * n + i * i),
                        l: r,
                        alpha: e.a
                    }
                },
                reverse: function(e) {
                    var t = e.h * st,
                        r = e.c;
                    return yt({
                        l: e.l,
                        a: Math.cos(t) * r,
                        b: Math.sin(t) * r,
                        alpha: e.alpha
                    })
                },
                interpolate: function(e, t, r) {
                    return {
                        h: dt(e.h, t.h, r),
                        c: et(e.c, t.c, r),
                        l: et(e.l, t.l, r),
                        alpha: et(e.alpha, t.alpha, r)
                    }
                }
            },
            gt = Object.freeze({
                __proto__: null,
                lab: vt,
                hcl: mt
            }),
            xt = function() {
                function t(e, r, n, i, a) {
                    y(this, t), this.type = e, this.operator = r, this.interpolation = n, this.input = i, this.labels = [], this.outputs = [];
                    var o, s = l(a);
                    try {
                        for (s.s(); !(o = s.n()).done;) {
                            var u = p(o.value, 2),
                                c = u[0],
                                h = u[1];
                            this.labels.push(c), this.outputs.push(h)
                        }
                    } catch (f) {
                        s.e(f)
                    } finally {
                        s.f()
                    }
                }
                return d(t, [{
                    key: "evaluate",
                    value: function(e) {
                        var r = this.labels,
                            n = this.outputs;
                        if (1 === r.length) return n[0].evaluate(e);
                        var i = this.input.evaluate(e);
                        if (i <= r[0]) return n[0].evaluate(e);
                        var a = r.length;
                        if (i >= r[a - 1]) return n[a - 1].evaluate(e);
                        var o = $e(r, i),
                            s = t.interpolationFactor(this.interpolation, i, r[o], r[o + 1]),
                            u = n[o].evaluate(e),
                            l = n[o + 1].evaluate(e);
                        return "interpolate" === this.operator ? tt[this.type.kind.toLowerCase()](u, l, s) : "interpolate-hcl" === this.operator ? mt.reverse(mt.interpolate(mt.forward(u), mt.forward(l), s)) : vt.reverse(vt.interpolate(vt.forward(u), vt.forward(l), s))
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.input);
                        var t, r = l(this.outputs);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                e(t.value)
                            }
                        } catch (n) {
                            r.e(n)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return this.outputs.every((function(e) {
                            return e.outputDefined()
                        }))
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e;
                        e = "linear" === this.interpolation.name ? ["linear"] : "exponential" === this.interpolation.name ? 1 === this.interpolation.base ? ["linear"] : ["exponential", this.interpolation.base] : ["cubic-bezier"].concat(this.interpolation.controlPoints);
                        for (var t = [this.operator, e, this.input.serialize()], r = 0; r < this.labels.length; r++) t.push(this.labels[r], this.outputs[r].serialize());
                        return t
                    }
                }], [{
                    key: "interpolationFactor",
                    value: function(t, r, n, i) {
                        var a = 0;
                        if ("exponential" === t.name) a = bt(r, t.base, n, i);
                        else if ("linear" === t.name) a = bt(r, 1, n, i);
                        else if ("cubic-bezier" === t.name) {
                            var o = t.controlPoints;
                            a = new e(o[0], o[1], o[2], o[3]).solve(bt(r, 1, n, i))
                        }
                        return a
                    }
                }, {
                    key: "parse",
                    value: function(e, r) {
                        var n = s(e),
                            i = n[0],
                            a = n[1],
                            o = n[2],
                            u = n.slice(3);
                        if (!Array.isArray(a) || 0 === a.length) return r.error("Expected an interpolation type expression.", 1);
                        if ("linear" === a[0]) a = {
                            name: "linear"
                        };
                        else if ("exponential" === a[0]) {
                            var l = a[1];
                            if ("number" != typeof l) return r.error("Exponential interpolation requires a numeric base.", 1, 1);
                            a = {
                                name: "exponential",
                                base: l
                            }
                        } else {
                            if ("cubic-bezier" !== a[0]) return r.error("Unknown interpolation type ".concat(String(a[0])), 1, 0);
                            var c = a.slice(1);
                            if (4 !== c.length || c.some((function(e) {
                                    return "number" != typeof e || e < 0 || e > 1
                                }))) return r.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
                            a = {
                                name: "cubic-bezier",
                                controlPoints: c
                            }
                        }
                        if (e.length - 1 < 4) return r.error("Expected at least 4 arguments, but found only ".concat(e.length - 1, "."));
                        if ((e.length - 1) % 2 != 0) return r.error("Expected an even number of arguments.");
                        if (!(o = r.parse(o, 2, K))) return null;
                        var h = [],
                            f = null;
                        "interpolate-hcl" === i || "interpolate-lab" === i ? f = W : r.expectedType && "value" !== r.expectedType.kind && (f = r.expectedType);
                        for (var p = 0; p < u.length; p += 2) {
                            var y = u[p],
                                d = u[p + 1],
                                v = p + 3,
                                m = p + 4;
                            if ("number" != typeof y) return r.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', v);
                            if (h.length && h[h.length - 1][0] >= y) return r.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', v);
                            var g = r.parse(d, m, f);
                            if (!g) return null;
                            f = f || g.type, h.push([y, g])
                        }
                        return "number" === f.kind || "color" === f.kind || "array" === f.kind && "number" === f.itemType.kind && "number" == typeof f.N ? new t(f, i, a, o, h) : r.error("Type ".concat(ie(f), " is not interpolatable."))
                    }
                }]), t
            }();

        function bt(e, t, r, n) {
            var i = n - r,
                a = e - r;
            return 0 === i ? 0 : 1 === t ? a / i : (Math.pow(t, a) - 1) / (Math.pow(t, i) - 1)
        }
        var kt = function() {
                function e(t, r) {
                    y(this, e), this.type = t, this.args = r
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t, r, n = null,
                            i = 0,
                            a = l(this.args);
                        try {
                            for (a.s(); !(r = a.n()).done;) {
                                var o = r.value;
                                if (i++, (n = o.evaluate(e)) && n instanceof fe && !n.available && (t || (t = n.name), n = null, i === this.args.length && (n = t)), null !== n) break
                            }
                        } catch (s) {
                            a.e(s)
                        } finally {
                            a.f()
                        }
                        return n
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        this.args.forEach(e)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return this.args.every((function(e) {
                            return e.outputDefined()
                        }))
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e = ["coalesce"];
                        return this.eachChild((function(t) {
                            e.push(t.serialize())
                        })), e
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length < 2) return r.error("Expectected at least one argument.");
                        var n = null,
                            i = r.expectedType;
                        i && "value" !== i.kind && (n = i);
                        var a, o = [],
                            s = l(t.slice(1));
                        try {
                            for (s.s(); !(a = s.n()).done;) {
                                var u = a.value,
                                    c = r.parse(u, 1 + o.length, n, void 0, {
                                        typeAnnotation: "omit"
                                    });
                                if (!c) return null;
                                n = n || c.type, o.push(c)
                            }
                        } catch (f) {
                            s.e(f)
                        } finally {
                            s.f()
                        }
                        var h = i && o.some((function(e) {
                            return oe(i, e.type)
                        }));
                        return new e(h ? Q : n, o)
                    }
                }]), e
            }(),
            wt = function() {
                function e(t, r) {
                    y(this, e), this.type = r.type, this.bindings = [].concat(t), this.result = r
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        return this.result.evaluate(e)
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        var t, r = l(this.bindings);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                e(t.value[1])
                            }
                        } catch (n) {
                            r.e(n)
                        } finally {
                            r.f()
                        }
                        e(this.result)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return this.result.outputDefined()
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e, t = ["let"],
                            r = l(this.bindings);
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var n = p(e.value, 2),
                                    i = n[0],
                                    a = n[1];
                                t.push(i, a.serialize())
                            }
                        } catch (o) {
                            r.e(o)
                        } finally {
                            r.f()
                        }
                        return t.push(this.result.serialize()), t
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length < 4) return r.error("Expected at least 3 arguments, but found ".concat(t.length - 1, " instead."));
                        for (var n = [], i = 1; i < t.length - 1; i += 2) {
                            var a = t[i];
                            if ("string" != typeof a) return r.error("Expected string, but found ".concat(typeof a, " instead."), i);
                            if (/[^a-zA-Z0-9_]/.test(a)) return r.error("Variable names must contain only alphanumeric characters or '_'.", i);
                            var o = r.parse(t[i + 1], i + 1);
                            if (!o) return null;
                            n.push([a, o])
                        }
                        var s = r.parse(t[t.length - 1], t.length - 1, r.expectedType, n);
                        return s ? new e(n, s) : null
                    }
                }]), e
            }(),
            _t = function() {
                function e(t, r, n) {
                    y(this, e), this.type = t, this.index = r, this.input = n
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t = this.index.evaluate(e),
                            r = this.input.evaluate(e);
                        if (t < 0) throw new ge("Array index out of bounds: ".concat(t, " < 0."));
                        if (t >= r.length) throw new ge("Array index out of bounds: ".concat(t, " > ").concat(r.length - 1, "."));
                        if (t !== Math.floor(t)) throw new ge("Array index must be an integer, but found ".concat(t, " instead."));
                        return r[t]
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.index), e(this.input)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return ["at", this.index.serialize(), this.input.serialize()]
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (3 !== t.length) return r.error("Expected 2 arguments, but found ".concat(t.length - 1, " instead."));
                        var n = r.parse(t[1], 1, K),
                            i = r.parse(t[2], 2, ne(r.expectedType || Q));
                        return n && i ? new e(i.type.itemType, n, i) : null
                    }
                }]), e
            }(),
            St = function() {
                function e(t, r) {
                    y(this, e), this.type = H, this.needle = t, this.haystack = r
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t = this.needle.evaluate(e),
                            r = this.haystack.evaluate(e);
                        if (!r) return !1;
                        if (!ue(t, ["boolean", "string", "number", "null"])) throw new ge("Expected first argument to be of type boolean, string, number or null, but found ".concat(ie(de(t)), " instead."));
                        if (!ue(r, ["string", "array"])) throw new ge("Expected second argument to be of type array or string, but found ".concat(ie(de(r)), " instead."));
                        return r.indexOf(t) >= 0
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.needle), e(this.haystack)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return ["in", this.needle.serialize(), this.haystack.serialize()]
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (3 !== t.length) return r.error("Expected 2 arguments, but found ".concat(t.length - 1, " instead."));
                        var n = r.parse(t[1], 1, Q),
                            i = r.parse(t[2], 2, Q);
                        return n && i ? se(n.type, [H, J, K, Y, Q]) ? new e(n, i) : r.error("Expected first argument to be of type boolean, string, number or null, but found ".concat(ie(n.type), " instead")) : null
                    }
                }]), e
            }(),
            At = function() {
                function e(t, r, n) {
                    y(this, e), this.type = K, this.needle = t, this.haystack = r, this.fromIndex = n
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t = this.needle.evaluate(e),
                            r = this.haystack.evaluate(e);
                        if (!ue(t, ["boolean", "string", "number", "null"])) throw new ge("Expected first argument to be of type boolean, string, number or null, but found ".concat(ie(de(t)), " instead."));
                        if (!ue(r, ["string", "array"])) throw new ge("Expected second argument to be of type array or string, but found ".concat(ie(de(r)), " instead."));
                        if (this.fromIndex) {
                            var n = this.fromIndex.evaluate(e);
                            return r.indexOf(t, n)
                        }
                        return r.indexOf(t)
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.needle), e(this.haystack), this.fromIndex && e(this.fromIndex)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        if (null != this.fromIndex && void 0 !== this.fromIndex) {
                            var e = this.fromIndex.serialize();
                            return ["index-of", this.needle.serialize(), this.haystack.serialize(), e]
                        }
                        return ["index-of", this.needle.serialize(), this.haystack.serialize()]
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length <= 2 || t.length >= 5) return r.error("Expected 3 or 4 arguments, but found ".concat(t.length - 1, " instead."));
                        var n = r.parse(t[1], 1, Q),
                            i = r.parse(t[2], 2, Q);
                        if (!n || !i) return null;
                        if (!se(n.type, [H, J, K, Y, Q])) return r.error("Expected first argument to be of type boolean, string, number or null, but found ".concat(ie(n.type), " instead"));
                        if (4 === t.length) {
                            var a = r.parse(t[3], 3, K);
                            return a ? new e(n, i, a) : null
                        }
                        return new e(n, i)
                    }
                }]), e
            }(),
            It = function() {
                function e(t, r, n, i, a, o) {
                    y(this, e), this.inputType = t, this.type = r, this.input = n, this.cases = i, this.outputs = a, this.otherwise = o
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t = this.input.evaluate(e);
                        return (de(t) === this.inputType && this.outputs[this.cases[t]] || this.otherwise).evaluate(e)
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.input), this.outputs.forEach(e), e(this.otherwise)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return this.outputs.every((function(e) {
                            return e.outputDefined()
                        })) && this.otherwise.outputDefined()
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e, t = this,
                            r = ["match", this.input.serialize()],
                            n = Object.keys(this.cases).sort(),
                            i = [],
                            a = {},
                            o = l(n);
                        try {
                            for (o.s(); !(e = o.n()).done;) {
                                var s = e.value,
                                    u = a[this.cases[s]];
                                void 0 === u ? (a[this.cases[s]] = i.length, i.push([this.cases[s],
                                    [s]
                                ])) : i[u][1].push(s)
                            }
                        } catch (m) {
                            o.e(m)
                        } finally {
                            o.f()
                        }
                        for (var c = function(e) {
                                return "number" === t.inputType.kind ? Number(e) : e
                            }, h = 0, f = i; h < f.length; h++) {
                            var y = p(f[h], 2),
                                d = y[0],
                                v = y[1];
                            r.push(1 === v.length ? c(v[0]) : v.map(c)), r.push(this.outputs[d].serialize())
                        }
                        return r.push(this.otherwise.serialize()), r
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length < 5) return r.error("Expected at least 4 arguments, but found only ".concat(t.length - 1, "."));
                        if (t.length % 2 != 1) return r.error("Expected an even number of arguments.");
                        var n, i;
                        r.expectedType && "value" !== r.expectedType.kind && (i = r.expectedType);
                        for (var a = {}, o = [], s = 2; s < t.length - 1; s += 2) {
                            var u = t[s],
                                c = t[s + 1];
                            Array.isArray(u) || (u = [u]);
                            var h = r.concat(s);
                            if (0 === u.length) return h.error("Expected at least one branch label.");
                            var f, p = l(u);
                            try {
                                for (p.s(); !(f = p.n()).done;) {
                                    var y = f.value;
                                    if ("number" != typeof y && "string" != typeof y) return h.error("Branch labels must be numbers or strings.");
                                    if ("number" == typeof y && Math.abs(y) > Number.MAX_SAFE_INTEGER) return h.error("Branch labels must be integers no larger than ".concat(Number.MAX_SAFE_INTEGER, "."));
                                    if ("number" == typeof y && Math.floor(y) !== y) return h.error("Numeric branch labels must be integer values.");
                                    if (n) {
                                        if (h.checkSubtype(n, de(y))) return null
                                    } else n = de(y);
                                    if (void 0 !== a[String(y)]) return h.error("Branch labels must be unique.");
                                    a[String(y)] = o.length
                                }
                            } catch (g) {
                                p.e(g)
                            } finally {
                                p.f()
                            }
                            var d = r.parse(c, s, i);
                            if (!d) return null;
                            i = i || d.type, o.push(d)
                        }
                        var v = r.parse(t[1], 1, Q);
                        if (!v) return null;
                        var m = r.parse(t[t.length - 1], t.length - 1, i);
                        return m ? "value" !== v.type.kind && r.concat(1).checkSubtype(n, v.type) ? null : new e(n, i, v, a, o, m) : null
                    }
                }]), e
            }(),
            zt = function() {
                function e(t, r, n) {
                    y(this, e), this.type = t, this.branches = r, this.otherwise = n
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t, r = l(this.branches);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = p(t.value, 2),
                                    i = n[0],
                                    a = n[1];
                                if (i.evaluate(e)) return a.evaluate(e)
                            }
                        } catch (o) {
                            r.e(o)
                        } finally {
                            r.f()
                        }
                        return this.otherwise.evaluate(e)
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        var t, r = l(this.branches);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = p(t.value, 2),
                                    i = n[0],
                                    a = n[1];
                                e(i), e(a)
                            }
                        } catch (o) {
                            r.e(o)
                        } finally {
                            r.f()
                        }
                        e(this.otherwise)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return this.branches.every((function(e) {
                            var t = p(e, 2);
                            t[0];
                            return t[1].outputDefined()
                        })) && this.otherwise.outputDefined()
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e = ["case"];
                        return this.eachChild((function(t) {
                            e.push(t.serialize())
                        })), e
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length < 4) return r.error("Expected at least 3 arguments, but found only ".concat(t.length - 1, "."));
                        if (t.length % 2 != 0) return r.error("Expected an odd number of arguments.");
                        var n;
                        r.expectedType && "value" !== r.expectedType.kind && (n = r.expectedType);
                        for (var i = [], a = 1; a < t.length - 1; a += 2) {
                            var o = r.parse(t[a], a, H);
                            if (!o) return null;
                            var s = r.parse(t[a + 1], a + 1, n);
                            if (!s) return null;
                            i.push([o, s]), n = n || s.type
                        }
                        var u = r.parse(t[t.length - 1], t.length - 1, n);
                        return u ? new e(n, i, u) : null
                    }
                }]), e
            }(),
            Mt = function() {
                function e(t, r, n, i) {
                    y(this, e), this.type = t, this.input = r, this.beginIndex = n, this.endIndex = i
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t = this.input.evaluate(e),
                            r = this.beginIndex.evaluate(e);
                        if (!ue(t, ["string", "array"])) throw new ge("Expected first argument to be of type array or string, but found ".concat(ie(de(t)), " instead."));
                        if (this.endIndex) {
                            var n = this.endIndex.evaluate(e);
                            return t.slice(r, n)
                        }
                        return t.slice(r)
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.input), e(this.beginIndex), this.endIndex && e(this.endIndex)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        if (null != this.endIndex && void 0 !== this.endIndex) {
                            var e = this.endIndex.serialize();
                            return ["slice", this.input.serialize(), this.beginIndex.serialize(), e]
                        }
                        return ["slice", this.input.serialize(), this.beginIndex.serialize()]
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (t.length <= 2 || t.length >= 5) return r.error("Expected 3 or 4 arguments, but found ".concat(t.length - 1, " instead."));
                        var n = r.parse(t[1], 1, Q),
                            i = r.parse(t[2], 2, K);
                        if (!n || !i) return null;
                        if (!se(n.type, [ne(Q), J, Q])) return r.error("Expected first argument to be of type array or string, but found ".concat(ie(n.type), " instead"));
                        if (4 === t.length) {
                            var a = r.parse(t[3], 3, K);
                            return a ? new e(n.type, n, i, a) : null
                        }
                        return new e(n.type, n, i)
                    }
                }]), e
            }();

        function Ct(e, t) {
            return "==" === e || "!=" === e ? "boolean" === t.kind || "string" === t.kind || "number" === t.kind || "null" === t.kind || "value" === t.kind : "string" === t.kind || "number" === t.kind || "value" === t.kind
        }

        function Bt(e, t, r, n) {
            return 0 === n.compare(t, r)
        }

        function Pt(e, t, r) {
            var n = "==" !== e && "!=" !== e;
            return function() {
                function i(e, t, r) {
                    y(this, i), this.type = H, this.lhs = e, this.rhs = t, this.collator = r, this.hasUntypedArgument = "value" === e.type.kind || "value" === t.type.kind
                }
                return d(i, [{
                    key: "evaluate",
                    value: function(i) {
                        var a = this.lhs.evaluate(i),
                            o = this.rhs.evaluate(i);
                        if (n && this.hasUntypedArgument) {
                            var s = de(a),
                                u = de(o);
                            if (s.kind !== u.kind || "string" !== s.kind && "number" !== s.kind) throw new ge('Expected arguments for "'.concat(e, '" to be (string, string) or (number, number), but found (').concat(s.kind, ", ").concat(u.kind, ") instead."))
                        }
                        if (this.collator && !n && this.hasUntypedArgument) {
                            var l = de(a),
                                c = de(o);
                            if ("string" !== l.kind || "string" !== c.kind) return t(i, a, o)
                        }
                        return this.collator ? r(i, a, o, this.collator.evaluate(i)) : t(i, a, o)
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.lhs), e(this.rhs), this.collator && e(this.collator)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var t = [e];
                        return this.eachChild((function(e) {
                            t.push(e.serialize())
                        })), t
                    }
                }], [{
                    key: "parse",
                    value: function(e, t) {
                        if (3 !== e.length && 4 !== e.length) return t.error("Expected two or three arguments.");
                        var r = e[0],
                            a = t.parse(e[1], 1, Q);
                        if (!a) return null;
                        if (!Ct(r, a.type)) return t.concat(1).error('"'.concat(r, "\" comparisons are not supported for type '").concat(ie(a.type), "'."));
                        var o = t.parse(e[2], 2, Q);
                        if (!o) return null;
                        if (!Ct(r, o.type)) return t.concat(2).error('"'.concat(r, "\" comparisons are not supported for type '").concat(ie(o.type), "'."));
                        if (a.type.kind !== o.type.kind && "value" !== a.type.kind && "value" !== o.type.kind) return t.error("Cannot compare types '".concat(ie(a.type), "' and '").concat(ie(o.type), "'."));
                        n && ("value" === a.type.kind && "value" !== o.type.kind ? a = new be(o.type, [a]) : "value" !== a.type.kind && "value" === o.type.kind && (o = new be(a.type, [o])));
                        var s = null;
                        if (4 === e.length) {
                            if ("string" !== a.type.kind && "string" !== o.type.kind && "value" !== a.type.kind && "value" !== o.type.kind) return t.error("Cannot use collator to compare non-string types.");
                            if (!(s = t.parse(e[3], 3, ee))) return null
                        }
                        return new i(a, o, s)
                    }
                }]), i
            }()
        }
        var Vt = Pt("==", (function(e, t, r) {
                return t === r
            }), Bt),
            Tt = Pt("!=", (function(e, t, r) {
                return t !== r
            }), (function(e, t, r, n) {
                return !Bt(0, t, r, n)
            })),
            Et = Pt("<", (function(e, t, r) {
                return t < r
            }), (function(e, t, r, n) {
                return n.compare(t, r) < 0
            })),
            Dt = Pt(">", (function(e, t, r) {
                return t > r
            }), (function(e, t, r, n) {
                return n.compare(t, r) > 0
            })),
            Ft = Pt("<=", (function(e, t, r) {
                return t <= r
            }), (function(e, t, r, n) {
                return n.compare(t, r) <= 0
            })),
            Lt = Pt(">=", (function(e, t, r) {
                return t >= r
            }), (function(e, t, r, n) {
                return n.compare(t, r) >= 0
            })),
            Ot = function() {
                function e(t, r, n, i, a) {
                    y(this, e), this.type = J, this.number = t, this.locale = r, this.currency = n, this.minFractionDigits = i, this.maxFractionDigits = a
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        return new Intl.NumberFormat(this.locale ? this.locale.evaluate(e) : [], {
                            style: this.currency ? "currency" : "decimal",
                            currency: this.currency ? this.currency.evaluate(e) : void 0,
                            minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(e) : void 0,
                            maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(e) : void 0
                        }).format(this.number.evaluate(e))
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.number), this.locale && e(this.locale), this.currency && e(this.currency), this.minFractionDigits && e(this.minFractionDigits), this.maxFractionDigits && e(this.maxFractionDigits)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e = {};
                        return this.locale && (e.locale = this.locale.serialize()), this.currency && (e.currency = this.currency.serialize()), this.minFractionDigits && (e["min-fraction-digits"] = this.minFractionDigits.serialize()), this.maxFractionDigits && (e["max-fraction-digits"] = this.maxFractionDigits.serialize()), ["number-format", this.number.serialize(), e]
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (3 !== t.length) return r.error("Expected two arguments.");
                        var n = r.parse(t[1], 1, K);
                        if (!n) return null;
                        var i = t[2];
                        if ("object" != typeof i || Array.isArray(i)) return r.error("NumberFormat options argument must be an object.");
                        var a = null;
                        if (i.locale && !(a = r.parse(i.locale, 1, J))) return null;
                        var o = null;
                        if (i.currency && !(o = r.parse(i.currency, 1, J))) return null;
                        var s = null;
                        if (i["min-fraction-digits"] && !(s = r.parse(i["min-fraction-digits"], 1, K))) return null;
                        var u = null;
                        return i["max-fraction-digits"] && !(u = r.parse(i["max-fraction-digits"], 1, K)) ? null : new e(n, a, o, s, u)
                    }
                }]), e
            }(),
            Rt = function() {
                function e(t) {
                    y(this, e), this.type = K, this.input = t
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        var t = this.input.evaluate(e);
                        if ("string" == typeof t) return t.length;
                        if (Array.isArray(t)) return t.length;
                        throw new ge("Expected value to be of type string or array, but found ".concat(ie(de(t)), " instead."))
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        e(this.input)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e = ["length"];
                        return this.eachChild((function(t) {
                            e.push(t.serialize())
                        })), e
                    }
                }], [{
                    key: "parse",
                    value: function(t, r) {
                        if (2 !== t.length) return r.error("Expected 1 argument, but found ".concat(t.length - 1, " instead."));
                        var n = r.parse(t[1], 1);
                        return n ? "array" !== n.type.kind && "string" !== n.type.kind && "value" !== n.type.kind ? r.error("Expected argument of type string or array, but found ".concat(ie(n.type), " instead.")) : new e(n) : null
                    }
                }]), e
            }(),
            jt = {
                "==": Vt,
                "!=": Tt,
                ">": Dt,
                "<": Et,
                ">=": Lt,
                "<=": Ft,
                array: be,
                at: _t,
                boolean: be,
                case: zt,
                coalesce: kt,
                collator: Me,
                format: ke,
                image: we,
                in: St,
                "index-of": At,
                interpolate: xt,
                "interpolate-hcl": xt,
                "interpolate-lab": xt,
                length: Rt,
                let: wt,
                literal: me,
                match: It,
                number: be,
                "number-format": Ot,
                object: be,
                slice: Mt,
                step: Qe,
                string: be,
                "to-boolean": Se,
                "to-color": Se,
                "to-number": Se,
                "to-string": Se,
                var: Je,
                within: Xe
            };

        function Ut(e, t) {
            var r = p(t, 4),
                n = r[0],
                i = r[1],
                a = r[2],
                o = r[3];
            n = n.evaluate(e), i = i.evaluate(e), a = a.evaluate(e);
            var s = o ? o.evaluate(e) : 1,
                u = pe(n, i, a, s);
            if (u) throw new ge(u);
            return new N(n / 255 * s, i / 255 * s, a / 255 * s, s)
        }

        function qt(e, t) {
            return e in t
        }

        function Nt(e, t) {
            var r = t[e];
            return void 0 === r ? null : r
        }

        function Zt(e) {
            return {
                type: e
            }
        }

        function Xt(e) {
            return {
                result: "success",
                value: e
            }
        }

        function Gt(e) {
            return {
                result: "error",
                value: e
            }
        }

        function Yt(e) {
            return "data-driven" === e["property-type"] || "cross-faded-data-driven" === e["property-type"]
        }

        function Kt(e) {
            return !!e.expression && e.expression.parameters.indexOf("zoom") > -1
        }

        function Jt(e) {
            return !!e.expression && e.expression.interpolated
        }

        function Ht(e) {
            return e instanceof Number ? "number" : e instanceof String ? "string" : e instanceof Boolean ? "boolean" : Array.isArray(e) ? "array" : null === e ? "null" : typeof e
        }

        function Wt(e) {
            return "object" == typeof e && null !== e && !Array.isArray(e)
        }

        function $t(e) {
            return e
        }

        function Qt(e, t) {
            var r, n, i, a = "color" === t.type,
                o = e.stops && "object" == typeof e.stops[0][0],
                s = o || !(o || void 0 !== e.property),
                u = e.type || (Jt(t) ? "exponential" : "interval");
            if (a && ((e = Z({}, e)).stops && (e.stops = e.stops.map((function(e) {
                    return [e[0], N.parse(e[1])]
                }))), e.default = N.parse(e.default ? e.default : t.default)), e.colorSpace && "rgb" !== e.colorSpace && !gt[e.colorSpace]) throw new Error("Unknown color space: ".concat(e.colorSpace));
            if ("exponential" === u) r = nr;
            else if ("interval" === u) r = rr;
            else if ("categorical" === u) {
                r = tr, n = Object.create(null);
                var c, h = l(e.stops);
                try {
                    for (h.s(); !(c = h.n()).done;) {
                        var f = c.value;
                        n[f[0]] = f[1]
                    }
                } catch (S) {
                    h.e(S)
                } finally {
                    h.f()
                }
                i = typeof e.stops[0][0]
            } else {
                if ("identity" !== u) throw new Error('Unknown function type "'.concat(u, '"'));
                r = ir
            }
            if (o) {
                for (var p = {}, y = [], d = 0; d < e.stops.length; d++) {
                    var v = e.stops[d],
                        m = v[0].zoom;
                    void 0 === p[m] && (p[m] = {
                        zoom: m,
                        type: e.type,
                        property: e.property,
                        default: e.default,
                        stops: []
                    }, y.push(m)), p[m].stops.push([v[0].value, v[1]])
                }
                for (var g = [], x = 0, b = y; x < b.length; x++) {
                    var k = b[x];
                    g.push([p[k].zoom, Qt(p[k], t)])
                }
                var w = {
                    name: "linear"
                };
                return {
                    kind: "composite",
                    interpolationType: w,
                    interpolationFactor: xt.interpolationFactor.bind(void 0, w),
                    zoomStops: g.map((function(e) {
                        return e[0]
                    })),
                    evaluate: function(r, n) {
                        var i = r.zoom;
                        return nr({
                            stops: g,
                            base: e.base
                        }, t, i).evaluate(i, n)
                    }
                }
            }
            if (s) {
                var _ = "exponential" === u ? {
                    name: "exponential",
                    base: void 0 !== e.base ? e.base : 1
                } : null;
                return {
                    kind: "camera",
                    interpolationType: _,
                    interpolationFactor: xt.interpolationFactor.bind(void 0, _),
                    zoomStops: e.stops.map((function(e) {
                        return e[0]
                    })),
                    evaluate: function(a) {
                        var o = a.zoom;
                        return r(e, t, o, n, i)
                    }
                }
            }
            return {
                kind: "source",
                evaluate: function(a, o) {
                    var s = o && o.properties ? o.properties[e.property] : void 0;
                    return void 0 === s ? er(e.default, t.default) : r(e, t, s, n, i)
                }
            }
        }

        function er(e, t, r) {
            return void 0 !== e ? e : void 0 !== t ? t : void 0 !== r ? r : void 0
        }

        function tr(e, t, r, n, i) {
            return er(typeof r === i ? n[r] : void 0, e.default, t.default)
        }

        function rr(e, t, r) {
            if ("number" !== Ht(r)) return er(e.default, t.default);
            var n = e.stops.length;
            if (1 === n) return e.stops[0][1];
            if (r <= e.stops[0][0]) return e.stops[0][1];
            if (r >= e.stops[n - 1][0]) return e.stops[n - 1][1];
            var i = $e(e.stops.map((function(e) {
                return e[0]
            })), r);
            return e.stops[i][1]
        }

        function nr(e, t, r) {
            var n = void 0 !== e.base ? e.base : 1;
            if ("number" !== Ht(r)) return er(e.default, t.default);
            var i = e.stops.length;
            if (1 === i) return e.stops[0][1];
            if (r <= e.stops[0][0]) return e.stops[0][1];
            if (r >= e.stops[i - 1][0]) return e.stops[i - 1][1];
            var a = $e(e.stops.map((function(e) {
                    return e[0]
                })), r),
                o = function(e, t, r, n) {
                    var i = n - r,
                        a = e - r;
                    return 0 === i ? 0 : 1 === t ? a / i : (Math.pow(t, a) - 1) / (Math.pow(t, i) - 1)
                }(r, n, e.stops[a][0], e.stops[a + 1][0]),
                s = e.stops[a][1],
                u = e.stops[a + 1][1],
                l = tt[t.type] || $t;
            if (e.colorSpace && "rgb" !== e.colorSpace) {
                var c = gt[e.colorSpace];
                l = function(e, t) {
                    return c.reverse(c.interpolate(c.forward(e), c.forward(t), o))
                }
            }
            return "function" == typeof s.evaluate ? {
                evaluate: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = s.evaluate.apply(void 0, t),
                        i = u.evaluate.apply(void 0, t);
                    if (void 0 !== n && void 0 !== i) return l(n, i, o)
                }
            } : l(s, u, o)
        }

        function ir(e, t, r) {
            return "color" === t.type ? r = N.parse(r) : "formatted" === t.type ? r = he.fromString(r.toString()) : "resolvedImage" === t.type ? r = fe.fromString(r.toString()) : Ht(r) === t.type || "enum" === t.type && t.values[r] || (r = void 0), er(r, e.default, t.default)
        }
        ze.register(jt, {
            error: [{
                    kind: "error"
                },
                [J],
                function(e, t) {
                    var r = p(t, 1)[0];
                    throw new ge(r.evaluate(e))
                }
            ],
            typeof: [J, [Q], function(e, t) {
                return ie(de(p(t, 1)[0].evaluate(e)))
            }],
            "to-rgba": [ne(K, 4), [W], function(e, t) {
                return p(t, 1)[0].evaluate(e).toArray()
            }],
            rgb: [W, [K, K, K], Ut],
            rgba: [W, [K, K, K, K], Ut],
            has: {
                type: H,
                overloads: [
                    [
                        [J],
                        function(e, t) {
                            return qt(p(t, 1)[0].evaluate(e), e.properties())
                        }
                    ],
                    [
                        [J, $],
                        function(e, t) {
                            var r = p(t, 2),
                                n = r[0],
                                i = r[1];
                            return qt(n.evaluate(e), i.evaluate(e))
                        }
                    ]
                ]
            },
            get: {
                type: Q,
                overloads: [
                    [
                        [J],
                        function(e, t) {
                            return Nt(p(t, 1)[0].evaluate(e), e.properties())
                        }
                    ],
                    [
                        [J, $],
                        function(e, t) {
                            var r = p(t, 2),
                                n = r[0],
                                i = r[1];
                            return Nt(n.evaluate(e), i.evaluate(e))
                        }
                    ]
                ]
            },
            "feature-state": [Q, [J], function(e, t) {
                return Nt(p(t, 1)[0].evaluate(e), e.featureState || {})
            }],
            properties: [$, [], function(e) {
                return e.properties()
            }],
            "geometry-type": [J, [], function(e) {
                return e.geometryType()
            }],
            id: [Q, [], function(e) {
                return e.id()
            }],
            zoom: [K, [], function(e) {
                return e.globals.zoom
            }],
            "heatmap-density": [K, [], function(e) {
                return e.globals.heatmapDensity || 0
            }],
            "line-progress": [K, [], function(e) {
                return e.globals.lineProgress || 0
            }],
            "sky-radial-progress": [K, [], function(e) {
                return e.globals.skyRadialProgress || 0
            }],
            accumulated: [Q, [], function(e) {
                return void 0 === e.globals.accumulated ? null : e.globals.accumulated
            }],
            "+": [K, Zt(K), function(e, t) {
                var r, n = 0,
                    i = l(t);
                try {
                    for (i.s(); !(r = i.n()).done;) {
                        n += r.value.evaluate(e)
                    }
                } catch (a) {
                    i.e(a)
                } finally {
                    i.f()
                }
                return n
            }],
            "*": [K, Zt(K), function(e, t) {
                var r, n = 1,
                    i = l(t);
                try {
                    for (i.s(); !(r = i.n()).done;) {
                        n *= r.value.evaluate(e)
                    }
                } catch (a) {
                    i.e(a)
                } finally {
                    i.f()
                }
                return n
            }],
            "-": {
                type: K,
                overloads: [
                    [
                        [K, K],
                        function(e, t) {
                            var r = p(t, 2),
                                n = r[0],
                                i = r[1];
                            return n.evaluate(e) - i.evaluate(e)
                        }
                    ],
                    [
                        [K],
                        function(e, t) {
                            return -p(t, 1)[0].evaluate(e)
                        }
                    ]
                ]
            },
            "/": [K, [K, K], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1];
                return n.evaluate(e) / i.evaluate(e)
            }],
            "%": [K, [K, K], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1];
                return n.evaluate(e) % i.evaluate(e)
            }],
            ln2: [K, [], function() {
                return Math.LN2
            }],
            pi: [K, [], function() {
                return Math.PI
            }],
            e: [K, [], function() {
                return Math.E
            }],
            "^": [K, [K, K], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1];
                return Math.pow(n.evaluate(e), i.evaluate(e))
            }],
            sqrt: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.sqrt(r.evaluate(e))
            }],
            log10: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.log(r.evaluate(e)) / Math.LN10
            }],
            ln: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.log(r.evaluate(e))
            }],
            log2: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.log(r.evaluate(e)) / Math.LN2
            }],
            sin: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.sin(r.evaluate(e))
            }],
            cos: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.cos(r.evaluate(e))
            }],
            tan: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.tan(r.evaluate(e))
            }],
            asin: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.asin(r.evaluate(e))
            }],
            acos: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.acos(r.evaluate(e))
            }],
            atan: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.atan(r.evaluate(e))
            }],
            min: [K, Zt(K), function(e, t) {
                return Math.min.apply(Math, u(t.map((function(t) {
                    return t.evaluate(e)
                }))))
            }],
            max: [K, Zt(K), function(e, t) {
                return Math.max.apply(Math, u(t.map((function(t) {
                    return t.evaluate(e)
                }))))
            }],
            abs: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.abs(r.evaluate(e))
            }],
            round: [K, [K], function(e, t) {
                var r = p(t, 1)[0].evaluate(e);
                return r < 0 ? -Math.round(-r) : Math.round(r)
            }],
            floor: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.floor(r.evaluate(e))
            }],
            ceil: [K, [K], function(e, t) {
                var r = p(t, 1)[0];
                return Math.ceil(r.evaluate(e))
            }],
            "filter-==": [H, [J, Q], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1];
                return e.properties()[n.value] === i.value
            }],
            "filter-id-==": [H, [Q], function(e, t) {
                var r = p(t, 1)[0];
                return e.id() === r.value
            }],
            "filter-type-==": [H, [J], function(e, t) {
                var r = p(t, 1)[0];
                return e.geometryType() === r.value
            }],
            "filter-<": [H, [J, Q], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1],
                    a = e.properties()[n.value],
                    o = i.value;
                return typeof a == typeof o && a < o
            }],
            "filter-id-<": [H, [Q], function(e, t) {
                var r = p(t, 1)[0],
                    n = e.id(),
                    i = r.value;
                return typeof n == typeof i && n < i
            }],
            "filter->": [H, [J, Q], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1],
                    a = e.properties()[n.value],
                    o = i.value;
                return typeof a == typeof o && a > o
            }],
            "filter-id->": [H, [Q], function(e, t) {
                var r = p(t, 1)[0],
                    n = e.id(),
                    i = r.value;
                return typeof n == typeof i && n > i
            }],
            "filter-<=": [H, [J, Q], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1],
                    a = e.properties()[n.value],
                    o = i.value;
                return typeof a == typeof o && a <= o
            }],
            "filter-id-<=": [H, [Q], function(e, t) {
                var r = p(t, 1)[0],
                    n = e.id(),
                    i = r.value;
                return typeof n == typeof i && n <= i
            }],
            "filter->=": [H, [J, Q], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1],
                    a = e.properties()[n.value],
                    o = i.value;
                return typeof a == typeof o && a >= o
            }],
            "filter-id->=": [H, [Q], function(e, t) {
                var r = p(t, 1)[0],
                    n = e.id(),
                    i = r.value;
                return typeof n == typeof i && n >= i
            }],
            "filter-has": [H, [Q], function(e, t) {
                return p(t, 1)[0].value in e.properties()
            }],
            "filter-has-id": [H, [], function(e) {
                return null !== e.id() && void 0 !== e.id()
            }],
            "filter-type-in": [H, [ne(J)], function(e, t) {
                return p(t, 1)[0].value.indexOf(e.geometryType()) >= 0
            }],
            "filter-id-in": [H, [ne(Q)], function(e, t) {
                return p(t, 1)[0].value.indexOf(e.id()) >= 0
            }],
            "filter-in-small": [H, [J, ne(Q)], function(e, t) {
                var r = p(t, 2),
                    n = r[0];
                return r[1].value.indexOf(e.properties()[n.value]) >= 0
            }],
            "filter-in-large": [H, [J, ne(Q)], function(e, t) {
                var r = p(t, 2),
                    n = r[0],
                    i = r[1];
                return function(e, t, r, n) {
                    for (; r <= n;) {
                        var i = r + n >> 1;
                        if (t[i] === e) return !0;
                        t[i] > e ? n = i - 1 : r = i + 1
                    }
                    return !1
                }(e.properties()[n.value], i.value, 0, i.value.length - 1)
            }],
            all: {
                type: H,
                overloads: [
                    [
                        [H, H],
                        function(e, t) {
                            var r = p(t, 2),
                                n = r[0],
                                i = r[1];
                            return n.evaluate(e) && i.evaluate(e)
                        }
                    ],
                    [Zt(H), function(e, t) {
                        var r, n = l(t);
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                if (!r.value.evaluate(e)) return !1
                            }
                        } catch (i) {
                            n.e(i)
                        } finally {
                            n.f()
                        }
                        return !0
                    }]
                ]
            },
            any: {
                type: H,
                overloads: [
                    [
                        [H, H],
                        function(e, t) {
                            var r = p(t, 2),
                                n = r[0],
                                i = r[1];
                            return n.evaluate(e) || i.evaluate(e)
                        }
                    ],
                    [Zt(H), function(e, t) {
                        var r, n = l(t);
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                if (r.value.evaluate(e)) return !0
                            }
                        } catch (i) {
                            n.e(i)
                        } finally {
                            n.f()
                        }
                        return !1
                    }]
                ]
            },
            "!": [H, [H], function(e, t) {
                return !p(t, 1)[0].evaluate(e)
            }],
            "is-supported-script": [H, [J], function(e, t) {
                var r = p(t, 1)[0],
                    n = e.globals && e.globals.isSupportedScript;
                return !n || n(r.evaluate(e))
            }],
            upcase: [J, [J], function(e, t) {
                return p(t, 1)[0].evaluate(e).toUpperCase()
            }],
            downcase: [J, [J], function(e, t) {
                return p(t, 1)[0].evaluate(e).toLowerCase()
            }],
            concat: [J, Zt(Q), function(e, t) {
                return t.map((function(t) {
                    return ve(t.evaluate(e))
                })).join("")
            }],
            "resolved-locale": [J, [ee], function(e, t) {
                return p(t, 1)[0].evaluate(e).resolvedLocale()
            }]
        });
        var ar = function() {
            function e(t, r) {
                y(this, e), this.expression = t, this._warningHistory = {}, this._evaluator = new Ie, this._defaultValue = r ? function(e) {
                    return "color" === e.type && Wt(e.default) ? new N(0, 0, 0, 0) : "color" === e.type ? N.parse(e.default) || null : void 0 === e.default ? null : e.default
                }(r) : null, this._enumValues = r && "enum" === r.type ? r.values : null
            }
            return d(e, [{
                key: "evaluateWithoutErrorHandling",
                value: function(e, t, r, n, i, a) {
                    return this._evaluator.globals = e, this._evaluator.feature = t, this._evaluator.featureState = r, this._evaluator.canonical = n, this._evaluator.availableImages = i || null, this._evaluator.formattedSection = a, this.expression.evaluate(this._evaluator)
                }
            }, {
                key: "evaluate",
                value: function(e, t, r, n, i, a) {
                    this._evaluator.globals = e, this._evaluator.feature = t || null, this._evaluator.featureState = r || null, this._evaluator.canonical = n, this._evaluator.availableImages = i || null, this._evaluator.formattedSection = a || null;
                    try {
                        var o = this.expression.evaluate(this._evaluator);
                        if (null == o || "number" == typeof o && o != o) return this._defaultValue;
                        if (this._enumValues && !(o in this._enumValues)) throw new ge("Expected value to be one of ".concat(Object.keys(this._enumValues).map((function(e) {
                            return JSON.stringify(e)
                        })).join(", "), ", but found ").concat(JSON.stringify(o), " instead."));
                        return o
                    } catch (e) {
                        return this._warningHistory[e.message] || (this._warningHistory[e.message] = !0, "undefined" != typeof console && console.warn(e.message)), this._defaultValue
                    }
                }
            }]), e
        }();

        function or(e) {
            return Array.isArray(e) && e.length > 0 && "string" == typeof e[0] && e[0] in jt
        }

        function sr(e, t) {
            var r = new He(jt, [], t ? function(e) {
                    var t = {
                        color: W,
                        string: J,
                        number: K,
                        enum: J,
                        boolean: H,
                        formatted: te,
                        resolvedImage: re
                    };
                    return "array" === e.type ? ne(t[e.value] || Q, e.length) : t[e.type]
                }(t) : void 0),
                n = r.parse(e, void 0, void 0, void 0, t && "string" === t.type ? {
                    typeAnnotation: "coerce"
                } : void 0);
            return n ? Xt(new ar(n, t)) : Gt(r.errors)
        }
        var ur = function() {
                function e(t, r) {
                    y(this, e), this.kind = t, this._styleExpression = r, this.isStateDependent = "constant" !== t && !Ye(r.expression)
                }
                return d(e, [{
                    key: "evaluateWithoutErrorHandling",
                    value: function(e, t, r, n, i, a) {
                        return this._styleExpression.evaluateWithoutErrorHandling(e, t, r, n, i, a)
                    }
                }, {
                    key: "evaluate",
                    value: function(e, t, r, n, i, a) {
                        return this._styleExpression.evaluate(e, t, r, n, i, a)
                    }
                }]), e
            }(),
            lr = function() {
                function e(t, r, n, i) {
                    y(this, e), this.kind = t, this.zoomStops = n, this._styleExpression = r, this.isStateDependent = "camera" !== t && !Ye(r.expression), this.interpolationType = i
                }
                return d(e, [{
                    key: "evaluateWithoutErrorHandling",
                    value: function(e, t, r, n, i, a) {
                        return this._styleExpression.evaluateWithoutErrorHandling(e, t, r, n, i, a)
                    }
                }, {
                    key: "evaluate",
                    value: function(e, t, r, n, i, a) {
                        return this._styleExpression.evaluate(e, t, r, n, i, a)
                    }
                }, {
                    key: "interpolationFactor",
                    value: function(e, t, r) {
                        return this.interpolationType ? xt.interpolationFactor(this.interpolationType, e, t, r) : 0
                    }
                }]), e
            }();

        function cr(e, t) {
            if ("error" === (e = sr(e, t)).result) return e;
            var r = e.value.expression,
                n = Ge(r);
            if (!n && !Yt(t)) return Gt([new X("", "data expressions not supported")]);
            var i = Ke(r, ["zoom"]);
            if (!i && !Kt(t)) return Gt([new X("", "zoom expressions not supported")]);
            var a = fr(r);
            return a || i ? a instanceof X ? Gt([a]) : a instanceof xt && !Jt(t) ? Gt([new X("", '"interpolate" expressions cannot be used with this property')]) : Xt(a ? new lr(n ? "camera" : "composite", e.value, a.labels, a instanceof xt ? a.interpolation : void 0) : new ur(n ? "constant" : "source", e.value)) : Gt([new X("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])
        }
        var hr = function() {
            function e(t, r) {
                y(this, e), this._parameters = t, this._specification = r, Z(this, Qt(this._parameters, this._specification))
            }
            return d(e, null, [{
                key: "deserialize",
                value: function(t) {
                    return new e(t._parameters, t._specification)
                }
            }, {
                key: "serialize",
                value: function(e) {
                    return {
                        _parameters: e._parameters,
                        _specification: e._specification
                    }
                }
            }]), e
        }();

        function fr(e) {
            var t = null;
            if (e instanceof wt) t = fr(e.result);
            else if (e instanceof kt) {
                var r, n = l(e.args);
                try {
                    for (n.s(); !(r = n.n()).done;) {
                        var i = r.value;
                        if (t = fr(i)) break
                    }
                } catch (a) {
                    n.e(a)
                } finally {
                    n.f()
                }
            } else(e instanceof Qe || e instanceof xt) && e.input instanceof ze && "zoom" === e.input.name && (t = e);
            return t instanceof X || e.eachChild((function(e) {
                var r = fr(e);
                r instanceof X ? t = r : !t && r ? t = new X("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.') : t && r && t !== r && (t = new X("", 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))
            })), t
        }
        var pr = m.ImageData,
            yr = m.ImageBitmap,
            dr = {};

        function vr(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Object.defineProperty(t, "_classRegistryKey", {
                value: e,
                writeable: !1
            }), dr[e] = {
                klass: t,
                omit: r.omit || [],
                shallow: r.shallow || []
            }
        }
        for (var mr in vr("Object", Object), R.serialize = function(e, t) {
                var r = e.toArrayBuffer();
                return t && t.push(r), {
                    buffer: r
                }
            }, R.deserialize = function(e) {
                return new R(e.buffer)
            }, vr("Grid", R), vr("Color", N), vr("Error", Error), vr("ResolvedImage", fe), vr("StylePropertyFunction", hr), vr("StyleExpression", ar, {
                omit: ["_evaluator"]
            }), vr("ZoomDependentExpression", lr), vr("ZoomConstantExpression", ur), vr("CompoundExpression", ze, {
                omit: ["_evaluate"]
            }), jt) jt[mr]._classRegistryKey || vr("Expression_".concat(mr), jt[mr]);

        function gr(e) {
            return e && "undefined" != typeof ArrayBuffer && (e instanceof ArrayBuffer || e.constructor && "ArrayBuffer" === e.constructor.name)
        }

        function xr(e) {
            return yr && e instanceof yr
        }

        function br(e, t) {
            if (null == e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || e instanceof Boolean || e instanceof Number || e instanceof String || e instanceof Date || e instanceof RegExp) return e;
            if (gr(e) || xr(e)) return t && t.push(e), e;
            if (ArrayBuffer.isView(e)) {
                var r = e;
                return t && t.push(r.buffer), r
            }
            if (e instanceof pr) return t && t.push(e.data.buffer), e;
            if (Array.isArray(e)) {
                var n, i = [],
                    a = l(e);
                try {
                    for (a.s(); !(n = a.n()).done;) {
                        var o = n.value;
                        i.push(br(o, t))
                    }
                } catch (p) {
                    a.e(p)
                } finally {
                    a.f()
                }
                return i
            }
            if ("object" == typeof e) {
                var s = e.constructor,
                    u = s._classRegistryKey;
                if (!u) throw new Error("can't serialize object of unregistered class");
                var c = s.serialize ? s.serialize(e, t) : {};
                if (!s.serialize) {
                    for (var h in e)
                        if (e.hasOwnProperty(h) && !(dr[u].omit.indexOf(h) >= 0)) {
                            var f = e[h];
                            c[h] = dr[u].shallow.indexOf(h) >= 0 ? f : br(f, t)
                        }
                    e instanceof Error && (c.message = e.message)
                }
                if (c.$name) throw new Error("$name property is reserved for worker serialization logic.");
                return "Object" !== u && (c.$name = u), c
            }
            throw new Error("can't serialize object of type " + typeof e)
        }

        function kr(e) {
            if (null == e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || e instanceof Boolean || e instanceof Number || e instanceof String || e instanceof Date || e instanceof RegExp || gr(e) || xr(e) || ArrayBuffer.isView(e) || e instanceof pr) return e;
            if (Array.isArray(e)) return e.map(kr);
            if ("object" == typeof e) {
                var t = e.$name || "Object",
                    r = dr[t].klass;
                if (!r) throw new Error("can't deserialize unregistered class ".concat(t));
                if (r.deserialize) return r.deserialize(e);
                for (var n = Object.create(r.prototype), i = 0, a = Object.keys(e); i < a.length; i++) {
                    var o = a[i];
                    if ("$name" !== o) {
                        var s = e[o];
                        n[o] = dr[t].shallow.indexOf(o) >= 0 ? s : kr(s)
                    }
                }
                return n
            }
            throw new Error("can't deserialize object of type " + typeof e)
        }
        var wr = function() {
                function e(t) {
                    var r = this;
                    y(this, e), this._callback = t, this._triggered = !1, "undefined" != typeof MessageChannel && (this._channel = new MessageChannel, this._channel.port2.onmessage = function() {
                        r._triggered = !1, r._callback()
                    })
                }
                return d(e, [{
                    key: "trigger",
                    value: function() {
                        var e = this;
                        this._triggered || (this._triggered = !0, this._channel ? this._channel.port1.postMessage(!0) : setTimeout((function() {
                            e._triggered = !1, e._callback()
                        }), 0))
                    }
                }, {
                    key: "remove",
                    value: function() {
                        delete this._channel, this._callback = function() {}
                    }
                }]), e
            }(),
            _r = m.performance;

        function Sr(e) {
            var t = e ? e.url.toString() : void 0;
            return _r.getEntriesByName(t)
        }
        var Ar = function() {
                function e() {
                    y(this, e), this.tasks = {}, this.taskQueue = [], I(["process"], this), this.invoker = new wr(this.process), this.nextId = 0
                }
                return d(e, [{
                    key: "add",
                    value: function(e, t) {
                        var r = this,
                            n = this.nextId++,
                            i = function(e) {
                                var t = e.type,
                                    r = e.isSymbolTile,
                                    n = e.zoom;
                                return n = n || 0, "message" === t ? 0 : "maybePrepare" !== t || r ? "parseTile" !== t || r ? "parseTile" === t && r ? 300 - n : "maybePrepare" === t && r ? 400 - n : 500 : 200 - n : 100 - n
                            }(t);
                        if (0 === i) {
                            E();
                            try {
                                e()
                            } finally {}
                            return {
                                cancel: function() {}
                            }
                        }
                        return this.tasks[n] = {
                            fn: e,
                            metadata: t,
                            priority: i,
                            id: n
                        }, this.taskQueue.push(n), this.invoker.trigger(), {
                            cancel: function() {
                                delete r.tasks[n]
                            }
                        }
                    }
                }, {
                    key: "process",
                    value: function() {
                        var e = this;
                        E();
                        try {
                            if (this.taskQueue = this.taskQueue.filter((function(t) {
                                    return !!e.tasks[t]
                                })), !this.taskQueue.length) return;
                            var t = this.pick();
                            if (null === t) return;
                            var r = this.tasks[t];
                            if (delete this.tasks[t], this.taskQueue.length && this.invoker.trigger(), !r) return;
                            r.fn()
                        } finally {}
                    }
                }, {
                    key: "pick",
                    value: function() {
                        for (var e = null, t = 1 / 0, r = 0; r < this.taskQueue.length; r++) {
                            var n = this.tasks[this.taskQueue[r]];
                            n.priority < t && (t = n.priority, e = r)
                        }
                        if (null === e) return null;
                        var i = this.taskQueue[e];
                        return this.taskQueue.splice(e, 1), i
                    }
                }, {
                    key: "remove",
                    value: function() {
                        this.invoker.remove()
                    }
                }]), e
            }(),
            Ir = function() {
                function e(t, r, n) {
                    y(this, e), this.target = t, this.parent = r, this.mapId = n, this.callbacks = {}, this.cancelCallbacks = {}, I(["receive"], this), this.target.addEventListener("message", this.receive, !1), this.globalScope = E() ? t : m, this.scheduler = new Ar
                }
                return d(e, [{
                    key: "send",
                    value: function(e, t, r, n) {
                        var i = this,
                            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            o = arguments.length > 5 ? arguments[5] : void 0,
                            s = Math.round(1e18 * Math.random()).toString(36).substring(0, 10);
                        r && (r.metadata = o, this.callbacks[s] = r);
                        var u = L(this.globalScope) ? void 0 : [];
                        return this.target.postMessage({
                            id: s,
                            type: e,
                            hasCallback: !!r,
                            targetMapId: n,
                            mustQueue: a,
                            sourceMapId: this.mapId,
                            data: br(t, u)
                        }, u), {
                            cancel: function() {
                                r && delete i.callbacks[s], i.target.postMessage({
                                    id: s,
                                    type: "<cancel>",
                                    targetMapId: n,
                                    sourceMapId: i.mapId
                                })
                            }
                        }
                    }
                }, {
                    key: "receive",
                    value: function(e) {
                        var t = this,
                            r = e.data,
                            n = r.id;
                        if (n && (!r.targetMapId || this.mapId === r.targetMapId))
                            if ("<cancel>" === r.type) {
                                var i = this.cancelCallbacks[n];
                                delete this.cancelCallbacks[n], i && i.cancel()
                            } else if (r.mustQueue || E()) {
                            var a = this.callbacks[n];
                            this.cancelCallbacks[n] = this.scheduler.add((function() {
                                return t.processTask(n, r)
                            }), a && a.metadata || {
                                type: "message"
                            })
                        } else this.processTask(n, r)
                    }
                }, {
                    key: "processTask",
                    value: function(e, t) {
                        var r = this;
                        if ("<response>" === t.type) {
                            var n = this.callbacks[e];
                            delete this.callbacks[e], n && (t.error ? n(kr(t.error)) : n(null, kr(t.data)))
                        } else {
                            var i = L(this.globalScope) ? void 0 : [],
                                a = t.hasCallback ? function(t, n) {
                                    delete r.cancelCallbacks[e], r.target.postMessage({
                                        id: e,
                                        type: "<response>",
                                        sourceMapId: r.mapId,
                                        error: t ? br(t) : null,
                                        data: br(n, i)
                                    }, i)
                                } : function(e) {},
                                o = kr(t.data);
                            if (this.parent[t.type]) this.parent[t.type](t.sourceMapId, o, a);
                            else if (this.parent.getWorkerSource) {
                                var s = t.type.split(".");
                                this.parent.getWorkerSource(t.sourceMapId, s[0], o.source)[s[1]](o, a)
                            } else a(new Error("Could not find function ".concat(t.type)))
                        }
                    }
                }, {
                    key: "remove",
                    value: function() {
                        this.scheduler.remove(), this.target.removeEventListener("message", this.receive, !1)
                    }
                }]), e
            }(),
            zr = {
                $version: 8,
                $root: {
                    version: {
                        required: !0,
                        type: "enum",
                        values: [8]
                    },
                    name: {
                        type: "string"
                    },
                    metadata: {
                        type: "*"
                    },
                    center: {
                        type: "array",
                        value: "number"
                    },
                    zoom: {
                        type: "number"
                    },
                    bearing: {
                        type: "number",
                        default: 0,
                        period: 360,
                        units: "degrees"
                    },
                    pitch: {
                        type: "number",
                        default: 0,
                        units: "degrees"
                    },
                    light: {
                        type: "light"
                    },
                    terrain: {
                        type: "terrain"
                    },
                    fog: {
                        type: "fog"
                    },
                    sources: {
                        required: !0,
                        type: "sources"
                    },
                    sprite: {
                        type: "string"
                    },
                    glyphs: {
                        type: "string"
                    },
                    transition: {
                        type: "transition"
                    },
                    layers: {
                        required: !0,
                        type: "array",
                        value: "layer"
                    }
                },
                sources: {
                    "*": {
                        type: "source"
                    }
                },
                source: ["source_vector", "source_raster", "source_raster_dem", "source_geojson", "source_video", "source_image"],
                source_vector: {
                    type: {
                        required: !0,
                        type: "enum",
                        values: {
                            vector: {}
                        }
                    },
                    url: {
                        type: "string"
                    },
                    tiles: {
                        type: "array",
                        value: "string"
                    },
                    bounds: {
                        type: "array",
                        value: "number",
                        length: 4,
                        default: [-180, -85.051129, 180, 85.051129]
                    },
                    scheme: {
                        type: "enum",
                        values: {
                            xyz: {},
                            tms: {}
                        },
                        default: "xyz"
                    },
                    minzoom: {
                        type: "number",
                        default: 0
                    },
                    maxzoom: {
                        type: "number",
                        default: 22
                    },
                    attribution: {
                        type: "string"
                    },
                    promoteId: {
                        type: "promoteId"
                    },
                    volatile: {
                        type: "boolean",
                        default: !1
                    },
                    "*": {
                        type: "*"
                    }
                },
                source_raster: {
                    type: {
                        required: !0,
                        type: "enum",
                        values: {
                            raster: {}
                        }
                    },
                    url: {
                        type: "string"
                    },
                    tiles: {
                        type: "array",
                        value: "string"
                    },
                    bounds: {
                        type: "array",
                        value: "number",
                        length: 4,
                        default: [-180, -85.051129, 180, 85.051129]
                    },
                    minzoom: {
                        type: "number",
                        default: 0
                    },
                    maxzoom: {
                        type: "number",
                        default: 22
                    },
                    tileSize: {
                        type: "number",
                        default: 512,
                        units: "pixels"
                    },
                    scheme: {
                        type: "enum",
                        values: {
                            xyz: {},
                            tms: {}
                        },
                        default: "xyz"
                    },
                    attribution: {
                        type: "string"
                    },
                    volatile: {
                        type: "boolean",
                        default: !1
                    },
                    "*": {
                        type: "*"
                    }
                },
                source_raster_dem: {
                    type: {
                        required: !0,
                        type: "enum",
                        values: {
                            "raster-dem": {}
                        }
                    },
                    url: {
                        type: "string"
                    },
                    tiles: {
                        type: "array",
                        value: "string"
                    },
                    bounds: {
                        type: "array",
                        value: "number",
                        length: 4,
                        default: [-180, -85.051129, 180, 85.051129]
                    },
                    minzoom: {
                        type: "number",
                        default: 0
                    },
                    maxzoom: {
                        type: "number",
                        default: 22
                    },
                    tileSize: {
                        type: "number",
                        default: 512,
                        units: "pixels"
                    },
                    attribution: {
                        type: "string"
                    },
                    encoding: {
                        type: "enum",
                        values: {
                            terrarium: {},
                            mapbox: {}
                        },
                        default: "mapbox"
                    },
                    volatile: {
                        type: "boolean",
                        default: !1
                    },
                    "*": {
                        type: "*"
                    }
                },
                source_geojson: {
                    type: {
                        required: !0,
                        type: "enum",
                        values: {
                            geojson: {}
                        }
                    },
                    data: {
                        type: "*"
                    },
                    maxzoom: {
                        type: "number",
                        default: 18
                    },
                    attribution: {
                        type: "string"
                    },
                    buffer: {
                        type: "number",
                        default: 128,
                        maximum: 512,
                        minimum: 0
                    },
                    filter: {
                        type: "*"
                    },
                    tolerance: {
                        type: "number",
                        default: .375
                    },
                    cluster: {
                        type: "boolean",
                        default: !1
                    },
                    clusterRadius: {
                        type: "number",
                        default: 50,
                        minimum: 0
                    },
                    clusterMaxZoom: {
                        type: "number"
                    },
                    clusterMinPoints: {
                        type: "number"
                    },
                    clusterProperties: {
                        type: "*"
                    },
                    lineMetrics: {
                        type: "boolean",
                        default: !1
                    },
                    generateId: {
                        type: "boolean",
                        default: !1
                    },
                    promoteId: {
                        type: "promoteId"
                    }
                },
                source_video: {
                    type: {
                        required: !0,
                        type: "enum",
                        values: {
                            video: {}
                        }
                    },
                    urls: {
                        required: !0,
                        type: "array",
                        value: "string"
                    },
                    coordinates: {
                        required: !0,
                        type: "array",
                        length: 4,
                        value: {
                            type: "array",
                            length: 2,
                            value: "number"
                        }
                    }
                },
                source_image: {
                    type: {
                        required: !0,
                        type: "enum",
                        values: {
                            image: {}
                        }
                    },
                    url: {
                        required: !0,
                        type: "string"
                    },
                    coordinates: {
                        required: !0,
                        type: "array",
                        length: 4,
                        value: {
                            type: "array",
                            length: 2,
                            value: "number"
                        }
                    }
                },
                layer: {
                    id: {
                        type: "string",
                        required: !0
                    },
                    type: {
                        type: "enum",
                        values: {
                            fill: {},
                            line: {},
                            symbol: {},
                            circle: {},
                            heatmap: {},
                            "fill-extrusion": {},
                            raster: {},
                            hillshade: {},
                            background: {},
                            sky: {}
                        },
                        required: !0
                    },
                    metadata: {
                        type: "*"
                    },
                    source: {
                        type: "string"
                    },
                    "source-layer": {
                        type: "string"
                    },
                    minzoom: {
                        type: "number",
                        minimum: 0,
                        maximum: 24
                    },
                    maxzoom: {
                        type: "number",
                        minimum: 0,
                        maximum: 24
                    },
                    filter: {
                        type: "filter"
                    },
                    layout: {
                        type: "layout"
                    },
                    paint: {
                        type: "paint"
                    }
                },
                layout: ["layout_fill", "layout_line", "layout_circle", "layout_heatmap", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_hillshade", "layout_background", "layout_sky"],
                layout_background: {
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                layout_sky: {
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                layout_fill: {
                    "fill-sort-key": {
                        type: "number",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                layout_circle: {
                    "circle-sort-key": {
                        type: "number",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                layout_heatmap: {
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                "layout_fill-extrusion": {
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                layout_line: {
                    "line-cap": {
                        type: "enum",
                        values: {
                            butt: {},
                            round: {},
                            square: {}
                        },
                        default: "butt",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "line-join": {
                        type: "enum",
                        values: {
                            bevel: {},
                            round: {},
                            miter: {}
                        },
                        default: "miter",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "line-miter-limit": {
                        type: "number",
                        default: 2,
                        requires: [{
                            "line-join": "miter"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "line-round-limit": {
                        type: "number",
                        default: 1.05,
                        requires: [{
                            "line-join": "round"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "line-sort-key": {
                        type: "number",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                layout_symbol: {
                    "symbol-placement": {
                        type: "enum",
                        values: {
                            point: {},
                            line: {},
                            "line-center": {}
                        },
                        default: "point",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "symbol-spacing": {
                        type: "number",
                        default: 250,
                        minimum: 1,
                        units: "pixels",
                        requires: [{
                            "symbol-placement": "line"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "symbol-avoid-edges": {
                        type: "boolean",
                        default: !1,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "symbol-sort-key": {
                        type: "number",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "symbol-z-order": {
                        type: "enum",
                        values: {
                            auto: {},
                            "viewport-y": {},
                            source: {}
                        },
                        default: "auto",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-allow-overlap": {
                        type: "boolean",
                        default: !1,
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-ignore-placement": {
                        type: "boolean",
                        default: !1,
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-optional": {
                        type: "boolean",
                        default: !1,
                        requires: ["icon-image", "text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-rotation-alignment": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {},
                            auto: {}
                        },
                        default: "auto",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-size": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        units: "factor of the original icon size",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-text-fit": {
                        type: "enum",
                        values: {
                            none: {},
                            width: {},
                            height: {},
                            both: {}
                        },
                        default: "none",
                        requires: ["icon-image", "text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-text-fit-padding": {
                        type: "array",
                        value: "number",
                        length: 4,
                        default: [0, 0, 0, 0],
                        units: "pixels",
                        requires: ["icon-image", "text-field", {
                            "icon-text-fit": ["both", "width", "height"]
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-image": {
                        type: "resolvedImage",
                        tokens: !0,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-rotate": {
                        type: "number",
                        default: 0,
                        period: 360,
                        units: "degrees",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-padding": {
                        type: "number",
                        default: 2,
                        minimum: 0,
                        units: "pixels",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-keep-upright": {
                        type: "boolean",
                        default: !1,
                        requires: ["icon-image", {
                            "icon-rotation-alignment": "map"
                        }, {
                            "symbol-placement": ["line", "line-center"]
                        }],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-offset": {
                        type: "array",
                        value: "number",
                        length: 2,
                        default: [0, 0],
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-anchor": {
                        type: "enum",
                        values: {
                            center: {},
                            left: {},
                            right: {},
                            top: {},
                            bottom: {},
                            "top-left": {},
                            "top-right": {},
                            "bottom-left": {},
                            "bottom-right": {}
                        },
                        default: "center",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-pitch-alignment": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {},
                            auto: {}
                        },
                        default: "auto",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-pitch-alignment": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {},
                            auto: {}
                        },
                        default: "auto",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-rotation-alignment": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {},
                            auto: {}
                        },
                        default: "auto",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-field": {
                        type: "formatted",
                        default: "",
                        tokens: !0,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-font": {
                        type: "array",
                        value: "string",
                        default: ["Open Sans Regular", "Arial Unicode MS Regular"],
                        requires: ["text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-size": {
                        type: "number",
                        default: 16,
                        minimum: 0,
                        units: "pixels",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-max-width": {
                        type: "number",
                        default: 10,
                        minimum: 0,
                        units: "ems",
                        requires: ["text-field", {
                            "symbol-placement": ["point"]
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-line-height": {
                        type: "number",
                        default: 1.2,
                        units: "ems",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-letter-spacing": {
                        type: "number",
                        default: 0,
                        units: "ems",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-justify": {
                        type: "enum",
                        values: {
                            auto: {},
                            left: {},
                            center: {},
                            right: {}
                        },
                        default: "center",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-radial-offset": {
                        type: "number",
                        units: "ems",
                        default: 0,
                        requires: ["text-field"],
                        "property-type": "data-driven",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        }
                    },
                    "text-variable-anchor": {
                        type: "array",
                        value: "enum",
                        values: {
                            center: {},
                            left: {},
                            right: {},
                            top: {},
                            bottom: {},
                            "top-left": {},
                            "top-right": {},
                            "bottom-left": {},
                            "bottom-right": {}
                        },
                        requires: ["text-field", {
                            "symbol-placement": ["point"]
                        }],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-anchor": {
                        type: "enum",
                        values: {
                            center: {},
                            left: {},
                            right: {},
                            top: {},
                            bottom: {},
                            "top-left": {},
                            "top-right": {},
                            "bottom-left": {},
                            "bottom-right": {}
                        },
                        default: "center",
                        requires: ["text-field", {
                            "!": "text-variable-anchor"
                        }],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-max-angle": {
                        type: "number",
                        default: 45,
                        units: "degrees",
                        requires: ["text-field", {
                            "symbol-placement": ["line", "line-center"]
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-writing-mode": {
                        type: "array",
                        value: "enum",
                        values: {
                            horizontal: {},
                            vertical: {}
                        },
                        requires: ["text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-rotate": {
                        type: "number",
                        default: 0,
                        period: 360,
                        units: "degrees",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-padding": {
                        type: "number",
                        default: 2,
                        minimum: 0,
                        units: "pixels",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-keep-upright": {
                        type: "boolean",
                        default: !0,
                        requires: ["text-field", {
                            "text-rotation-alignment": "map"
                        }, {
                            "symbol-placement": ["line", "line-center"]
                        }],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-transform": {
                        type: "enum",
                        values: {
                            none: {},
                            uppercase: {},
                            lowercase: {}
                        },
                        default: "none",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-offset": {
                        type: "array",
                        value: "number",
                        units: "ems",
                        length: 2,
                        default: [0, 0],
                        requires: ["text-field", {
                            "!": "text-radial-offset"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-allow-overlap": {
                        type: "boolean",
                        default: !1,
                        requires: ["text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-ignore-placement": {
                        type: "boolean",
                        default: !1,
                        requires: ["text-field"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-optional": {
                        type: "boolean",
                        default: !1,
                        requires: ["text-field", "icon-image"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                layout_raster: {
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                layout_hillshade: {
                    visibility: {
                        type: "enum",
                        values: {
                            visible: {},
                            none: {}
                        },
                        default: "visible",
                        "property-type": "constant"
                    }
                },
                filter: {
                    type: "array",
                    value: "*"
                },
                filter_operator: {
                    type: "enum",
                    values: {
                        "==": {},
                        "!=": {},
                        ">": {},
                        ">=": {},
                        "<": {},
                        "<=": {},
                        in: {},
                        "!in": {},
                        all: {},
                        any: {},
                        none: {},
                        has: {},
                        "!has": {},
                        within: {}
                    }
                },
                geometry_type: {
                    type: "enum",
                    values: {
                        Point: {},
                        LineString: {},
                        Polygon: {}
                    }
                },
                function: {
                    expression: {
                        type: "expression"
                    },
                    stops: {
                        type: "array",
                        value: "function_stop"
                    },
                    base: {
                        type: "number",
                        default: 1,
                        minimum: 0
                    },
                    property: {
                        type: "string",
                        default: "$zoom"
                    },
                    type: {
                        type: "enum",
                        values: {
                            identity: {},
                            exponential: {},
                            interval: {},
                            categorical: {}
                        },
                        default: "exponential"
                    },
                    colorSpace: {
                        type: "enum",
                        values: {
                            rgb: {},
                            lab: {},
                            hcl: {}
                        },
                        default: "rgb"
                    },
                    default: {
                        type: "*",
                        required: !1
                    }
                },
                function_stop: {
                    type: "array",
                    minimum: 0,
                    maximum: 24,
                    value: ["number", "color"],
                    length: 2
                },
                expression: {
                    type: "array",
                    value: "*",
                    minimum: 1
                },
                fog: {
                    range: {
                        type: "array",
                        default: [.5, 10],
                        minimum: -20,
                        maximum: 20,
                        length: 2,
                        value: "number",
                        "property-type": "data-constant",
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        }
                    },
                    color: {
                        type: "color",
                        "property-type": "data-constant",
                        default: "#ffffff",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        transition: !0
                    },
                    "horizon-blend": {
                        type: "number",
                        "property-type": "data-constant",
                        default: .1,
                        minimum: 0,
                        maximum: 1,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        transition: !0
                    }
                },
                light: {
                    anchor: {
                        type: "enum",
                        default: "viewport",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        "property-type": "data-constant",
                        transition: !1,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        }
                    },
                    position: {
                        type: "array",
                        default: [1.15, 210, 30],
                        length: 3,
                        value: "number",
                        "property-type": "data-constant",
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        }
                    },
                    color: {
                        type: "color",
                        "property-type": "data-constant",
                        default: "#ffffff",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        transition: !0
                    },
                    intensity: {
                        type: "number",
                        "property-type": "data-constant",
                        default: .5,
                        minimum: 0,
                        maximum: 1,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        transition: !0
                    }
                },
                terrain: {
                    source: {
                        type: "string",
                        required: !0
                    },
                    exaggeration: {
                        type: "number",
                        "property-type": "data-constant",
                        default: 1,
                        minimum: 0,
                        maximum: 1e3,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        transition: !0
                    }
                },
                paint: ["paint_fill", "paint_line", "paint_circle", "paint_heatmap", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_hillshade", "paint_background", "paint_sky"],
                paint_fill: {
                    "fill-antialias": {
                        type: "boolean",
                        default: !0,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "fill-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "fill-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        requires: [{
                            "!": "fill-pattern"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "fill-outline-color": {
                        type: "color",
                        transition: !0,
                        requires: [{
                            "!": "fill-pattern"
                        }, {
                            "fill-antialias": !0
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "fill-translate": {
                        type: "array",
                        value: "number",
                        length: 2,
                        default: [0, 0],
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "fill-translate-anchor": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "map",
                        requires: ["fill-translate"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "fill-pattern": {
                        type: "resolvedImage",
                        transition: !0,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "cross-faded-data-driven"
                    }
                },
                "paint_fill-extrusion": {
                    "fill-extrusion-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "fill-extrusion-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        requires: [{
                            "!": "fill-extrusion-pattern"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "fill-extrusion-translate": {
                        type: "array",
                        value: "number",
                        length: 2,
                        default: [0, 0],
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "fill-extrusion-translate-anchor": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "map",
                        requires: ["fill-extrusion-translate"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "fill-extrusion-pattern": {
                        type: "resolvedImage",
                        transition: !0,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "cross-faded-data-driven"
                    },
                    "fill-extrusion-height": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        units: "meters",
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "fill-extrusion-base": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        units: "meters",
                        transition: !0,
                        requires: ["fill-extrusion-height"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "fill-extrusion-vertical-gradient": {
                        type: "boolean",
                        default: !0,
                        transition: !1,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    }
                },
                paint_line: {
                    "line-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "line-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        requires: [{
                            "!": "line-pattern"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "line-translate": {
                        type: "array",
                        value: "number",
                        length: 2,
                        default: [0, 0],
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "line-translate-anchor": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "map",
                        requires: ["line-translate"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "line-width": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "line-gap-width": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "line-offset": {
                        type: "number",
                        default: 0,
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "line-blur": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "line-dasharray": {
                        type: "array",
                        value: "number",
                        minimum: 0,
                        transition: !0,
                        units: "line widths",
                        requires: [{
                            "!": "line-pattern"
                        }],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "cross-faded-data-driven"
                    },
                    "line-pattern": {
                        type: "resolvedImage",
                        transition: !0,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom", "feature"]
                        },
                        "property-type": "cross-faded-data-driven"
                    },
                    "line-gradient": {
                        type: "color",
                        transition: !1,
                        requires: [{
                            "!": "line-pattern"
                        }, {
                            source: "geojson",
                            has: {
                                lineMetrics: !0
                            }
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["line-progress"]
                        },
                        "property-type": "color-ramp"
                    }
                },
                paint_circle: {
                    "circle-radius": {
                        type: "number",
                        default: 5,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "circle-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "circle-blur": {
                        type: "number",
                        default: 0,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "circle-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "circle-translate": {
                        type: "array",
                        value: "number",
                        length: 2,
                        default: [0, 0],
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "circle-translate-anchor": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "map",
                        requires: ["circle-translate"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "circle-pitch-scale": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "map",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "circle-pitch-alignment": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "viewport",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "circle-stroke-width": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "circle-stroke-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "circle-stroke-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    }
                },
                paint_heatmap: {
                    "heatmap-radius": {
                        type: "number",
                        default: 30,
                        minimum: 1,
                        transition: !0,
                        units: "pixels",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "heatmap-weight": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        transition: !1,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "heatmap-intensity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "heatmap-color": {
                        type: "color",
                        default: ["interpolate", ["linear"],
                            ["heatmap-density"], 0, "rgba(0, 0, 255, 0)", .1, "royalblue", .3, "cyan", .5, "lime", .7, "yellow", 1, "red"
                        ],
                        transition: !1,
                        expression: {
                            interpolated: !0,
                            parameters: ["heatmap-density"]
                        },
                        "property-type": "color-ramp"
                    },
                    "heatmap-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    }
                },
                paint_symbol: {
                    "icon-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-halo-color": {
                        type: "color",
                        default: "rgba(0, 0, 0, 0)",
                        transition: !0,
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-halo-width": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-halo-blur": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "icon-translate": {
                        type: "array",
                        value: "number",
                        length: 2,
                        default: [0, 0],
                        transition: !0,
                        units: "pixels",
                        requires: ["icon-image"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "icon-translate-anchor": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "map",
                        requires: ["icon-image", "icon-translate"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        overridable: !0,
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-halo-color": {
                        type: "color",
                        default: "rgba(0, 0, 0, 0)",
                        transition: !0,
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-halo-width": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-halo-blur": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        transition: !0,
                        units: "pixels",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom", "feature", "feature-state"]
                        },
                        "property-type": "data-driven"
                    },
                    "text-translate": {
                        type: "array",
                        value: "number",
                        length: 2,
                        default: [0, 0],
                        transition: !0,
                        units: "pixels",
                        requires: ["text-field"],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "text-translate-anchor": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "map",
                        requires: ["text-field", "text-translate"],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    }
                },
                paint_raster: {
                    "raster-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "raster-hue-rotate": {
                        type: "number",
                        default: 0,
                        period: 360,
                        transition: !0,
                        units: "degrees",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "raster-brightness-min": {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "raster-brightness-max": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "raster-saturation": {
                        type: "number",
                        default: 0,
                        minimum: -1,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "raster-contrast": {
                        type: "number",
                        default: 0,
                        minimum: -1,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "raster-resampling": {
                        type: "enum",
                        values: {
                            linear: {},
                            nearest: {}
                        },
                        default: "linear",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "raster-fade-duration": {
                        type: "number",
                        default: 300,
                        minimum: 0,
                        transition: !1,
                        units: "milliseconds",
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    }
                },
                paint_hillshade: {
                    "hillshade-illumination-direction": {
                        type: "number",
                        default: 335,
                        minimum: 0,
                        maximum: 359,
                        transition: !1,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "hillshade-illumination-anchor": {
                        type: "enum",
                        values: {
                            map: {},
                            viewport: {}
                        },
                        default: "viewport",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "hillshade-exaggeration": {
                        type: "number",
                        default: .5,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "hillshade-shadow-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "hillshade-highlight-color": {
                        type: "color",
                        default: "#FFFFFF",
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "hillshade-accent-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    }
                },
                paint_background: {
                    "background-color": {
                        type: "color",
                        default: "#000000",
                        transition: !0,
                        requires: [{
                            "!": "background-pattern"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "background-pattern": {
                        type: "resolvedImage",
                        transition: !0,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "cross-faded"
                    },
                    "background-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    }
                },
                paint_sky: {
                    "sky-type": {
                        type: "enum",
                        values: {
                            gradient: {},
                            atmosphere: {}
                        },
                        default: "atmosphere",
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "sky-atmosphere-sun": {
                        type: "array",
                        value: "number",
                        length: 2,
                        units: "degrees",
                        minimum: [0, 0],
                        maximum: [360, 180],
                        transition: !1,
                        requires: [{
                            "sky-type": "atmosphere"
                        }],
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "sky-atmosphere-sun-intensity": {
                        type: "number",
                        requires: [{
                            "sky-type": "atmosphere"
                        }],
                        default: 10,
                        minimum: 0,
                        maximum: 100,
                        transition: !1,
                        "property-type": "data-constant"
                    },
                    "sky-gradient-center": {
                        type: "array",
                        requires: [{
                            "sky-type": "gradient"
                        }],
                        value: "number",
                        default: [0, 0],
                        length: 2,
                        units: "degrees",
                        minimum: [0, 0],
                        maximum: [360, 180],
                        transition: !1,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "sky-gradient-radius": {
                        type: "number",
                        requires: [{
                            "sky-type": "gradient"
                        }],
                        default: 90,
                        minimum: 0,
                        maximum: 180,
                        transition: !1,
                        expression: {
                            interpolated: !1,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    },
                    "sky-gradient": {
                        type: "color",
                        default: ["interpolate", ["linear"],
                            ["sky-radial-progress"], .8, "#87ceeb", 1, "white"
                        ],
                        transition: !1,
                        requires: [{
                            "sky-type": "gradient"
                        }],
                        expression: {
                            interpolated: !0,
                            parameters: ["sky-radial-progress"]
                        },
                        "property-type": "color-ramp"
                    },
                    "sky-atmosphere-halo-color": {
                        type: "color",
                        default: "white",
                        transition: !1,
                        requires: [{
                            "sky-type": "atmosphere"
                        }],
                        "property-type": "data-constant"
                    },
                    "sky-atmosphere-color": {
                        type: "color",
                        default: "white",
                        transition: !1,
                        requires: [{
                            "sky-type": "atmosphere"
                        }],
                        "property-type": "data-constant"
                    },
                    "sky-opacity": {
                        type: "number",
                        default: 1,
                        minimum: 0,
                        maximum: 1,
                        transition: !0,
                        expression: {
                            interpolated: !0,
                            parameters: ["zoom"]
                        },
                        "property-type": "data-constant"
                    }
                },
                transition: {
                    duration: {
                        type: "number",
                        default: 300,
                        minimum: 0,
                        units: "milliseconds"
                    },
                    delay: {
                        type: "number",
                        default: 0,
                        minimum: 0,
                        units: "milliseconds"
                    }
                },
                "property-type": {
                    "data-driven": {
                        type: "property-type"
                    },
                    "cross-faded": {
                        type: "property-type"
                    },
                    "cross-faded-data-driven": {
                        type: "property-type"
                    },
                    "color-ramp": {
                        type: "property-type"
                    },
                    "data-constant": {
                        type: "property-type"
                    },
                    constant: {
                        type: "property-type"
                    }
                },
                promoteId: {
                    "*": {
                        type: "string"
                    }
                }
            },
            Mr = function e(t, r, n, i) {
                y(this, e), this.message = (t ? "".concat(t, ": ") : "") + n, i && (this.identifier = i), null != r && r.__line__ && (this.line = r.__line__)
            };

        function Cr(e) {
            var t = e.value;
            return t ? [new Mr(e.key, t, "constants have been deprecated as of v8")] : []
        }

        function Br(e) {
            return e instanceof Number || e instanceof String || e instanceof Boolean ? e.valueOf() : e
        }

        function Pr(e) {
            if (Array.isArray(e)) return e.map(Pr);
            if (e instanceof Object && !(e instanceof Number || e instanceof String || e instanceof Boolean)) {
                var t = {};
                for (var r in e) t[r] = Pr(e[r]);
                return t
            }
            return Br(e)
        }

        function Vr(e) {
            var t = e.key,
                r = e.value,
                n = e.valueSpec || {},
                i = e.objectElementValidators || {},
                a = e.style,
                o = e.styleSpec,
                s = [],
                u = Ht(r);
            if ("object" !== u) return [new Mr(t, r, "object expected, ".concat(u, " found"))];
            for (var l in r) {
                var c = l.split(".")[0],
                    h = n[c] || n["*"],
                    f = void 0;
                if (i[c]) f = i[c];
                else if (n[c]) f = un;
                else if (i["*"]) f = i["*"];
                else {
                    if (!n["*"]) {
                        s.push(new Mr(t, r[l], 'unknown property "'.concat(l, '"')));
                        continue
                    }
                    f = un
                }
                s = s.concat(f({
                    key: (t ? "".concat(t, ".") : t) + l,
                    value: r[l],
                    valueSpec: h,
                    style: a,
                    styleSpec: o,
                    object: r,
                    objectKey: l
                }, r))
            }
            for (var p in n) i[p] || n[p].required && void 0 === n[p].default && void 0 === r[p] && s.push(new Mr(t, r, 'missing required property "'.concat(p, '"')));
            return s
        }

        function Tr(e) {
            var t = e.value,
                r = e.valueSpec,
                n = e.style,
                i = e.styleSpec,
                a = e.key,
                o = e.arrayElementValidator || un;
            if ("array" !== Ht(t)) return [new Mr(a, t, "array expected, ".concat(Ht(t), " found"))];
            if (r.length && t.length !== r.length) return [new Mr(a, t, "array length ".concat(r.length, " expected, length ").concat(t.length, " found"))];
            if (r["min-length"] && t.length < r["min-length"]) return [new Mr(a, t, "array length at least ".concat(r["min-length"], " expected, length ").concat(t.length, " found"))];
            var s = {
                type: r.value,
                values: r.values,
                minimum: r.minimum,
                maximum: r.maximum
            };
            i.$version < 7 && (s.function = r.function), "object" === Ht(r.value) && (s = r.value);
            for (var u = [], l = 0; l < t.length; l++) u = u.concat(o({
                array: t,
                arrayIndex: l,
                value: t[l],
                valueSpec: s,
                style: n,
                styleSpec: i,
                key: "".concat(a, "[").concat(l, "]")
            }));
            return u
        }

        function Er(e) {
            var t = e.key,
                r = e.value,
                n = e.valueSpec,
                i = Ht(r);
            if ("number" === i && r != r && (i = "NaN"), "number" !== i) return [new Mr(t, r, "number expected, ".concat(i, " found"))];
            if ("minimum" in n) {
                var a = n.minimum;
                if ("array" === Ht(n.minimum) && (a = n.minimum[e.arrayIndex]), r < a) return [new Mr(t, r, "".concat(r, " is less than the minimum value ").concat(a))]
            }
            if ("maximum" in n) {
                var o = n.maximum;
                if ("array" === Ht(n.maximum) && (o = n.maximum[e.arrayIndex]), r > o) return [new Mr(t, r, "".concat(r, " is greater than the maximum value ").concat(o))]
            }
            return []
        }

        function Dr(e) {
            var t, r, n, i = e.valueSpec,
                a = Br(e.value.type),
                o = {},
                s = "categorical" !== a && void 0 === e.value.property,
                u = !s,
                l = "array" === Ht(e.value.stops) && "array" === Ht(e.value.stops[0]) && "object" === Ht(e.value.stops[0][0]),
                c = Vr({
                    key: e.key,
                    value: e.value,
                    valueSpec: e.styleSpec.function,
                    style: e.style,
                    styleSpec: e.styleSpec,
                    objectElementValidators: {
                        stops: function(e) {
                            if ("identity" === a) return [new Mr(e.key, e.value, 'identity function may not have a "stops" property')];
                            var t = [],
                                r = e.value;
                            return t = t.concat(Tr({
                                key: e.key,
                                value: r,
                                valueSpec: e.valueSpec,
                                style: e.style,
                                styleSpec: e.styleSpec,
                                arrayElementValidator: h
                            })), "array" === Ht(r) && 0 === r.length && t.push(new Mr(e.key, r, "array must have at least one stop")), t
                        },
                        default: function(e) {
                            return un({
                                key: e.key,
                                value: e.value,
                                valueSpec: i,
                                style: e.style,
                                styleSpec: e.styleSpec
                            })
                        }
                    }
                });
            return "identity" === a && s && c.push(new Mr(e.key, e.value, 'missing required property "property"')), "identity" === a || e.value.stops || c.push(new Mr(e.key, e.value, 'missing required property "stops"')), "exponential" === a && e.valueSpec.expression && !Jt(e.valueSpec) && c.push(new Mr(e.key, e.value, "exponential functions not supported")), e.styleSpec.$version >= 8 && (u && !Yt(e.valueSpec) ? c.push(new Mr(e.key, e.value, "property functions not supported")) : s && !Kt(e.valueSpec) && c.push(new Mr(e.key, e.value, "zoom functions not supported"))), "categorical" !== a && !l || void 0 !== e.value.property || c.push(new Mr(e.key, e.value, '"property" property is required')), c;

            function h(e) {
                var t = [],
                    a = e.value,
                    s = e.key;
                if ("array" !== Ht(a)) return [new Mr(s, a, "array expected, ".concat(Ht(a), " found"))];
                if (2 !== a.length) return [new Mr(s, a, "array length 2 expected, length ".concat(a.length, " found"))];
                if (l) {
                    if ("object" !== Ht(a[0])) return [new Mr(s, a, "object expected, ".concat(Ht(a[0]), " found"))];
                    if (void 0 === a[0].zoom) return [new Mr(s, a, "object stop key must have zoom")];
                    if (void 0 === a[0].value) return [new Mr(s, a, "object stop key must have value")];
                    if (n && n > Br(a[0].zoom)) return [new Mr(s, a[0].zoom, "stop zoom values must appear in ascending order")];
                    Br(a[0].zoom) !== n && (n = Br(a[0].zoom), r = void 0, o = {}), t = t.concat(Vr({
                        key: "".concat(s, "[0]"),
                        value: a[0],
                        valueSpec: {
                            zoom: {}
                        },
                        style: e.style,
                        styleSpec: e.styleSpec,
                        objectElementValidators: {
                            zoom: Er,
                            value: f
                        }
                    }))
                } else t = t.concat(f({
                    key: "".concat(s, "[0]"),
                    value: a[0],
                    valueSpec: {},
                    style: e.style,
                    styleSpec: e.styleSpec
                }, a));
                return or(Pr(a[1])) ? t.concat([new Mr("".concat(s, "[1]"), a[1], "expressions are not allowed in function stops.")]) : t.concat(un({
                    key: "".concat(s, "[1]"),
                    value: a[1],
                    valueSpec: i,
                    style: e.style,
                    styleSpec: e.styleSpec
                }))
            }

            function f(e, n) {
                var s = Ht(e.value),
                    u = Br(e.value),
                    l = null !== e.value ? e.value : n;
                if (t) {
                    if (s !== t) return [new Mr(e.key, l, "".concat(s, " stop domain type must match previous stop domain type ").concat(t))]
                } else t = s;
                if ("number" !== s && "string" !== s && "boolean" !== s) return [new Mr(e.key, l, "stop domain value must be a number, string, or boolean")];
                if ("number" !== s && "categorical" !== a) {
                    var c = "number expected, ".concat(s, " found");
                    return Yt(i) && void 0 === a && (c += '\nIf you intended to use a categorical function, specify `"type": "categorical"`.'), [new Mr(e.key, l, c)]
                }
                return "categorical" !== a || "number" !== s || isFinite(u) && Math.floor(u) === u ? "categorical" !== a && "number" === s && void 0 !== r && u < r ? [new Mr(e.key, l, "stop domain values must appear in ascending order")] : (r = u, "categorical" === a && u in o ? [new Mr(e.key, l, "stop domain values must be unique")] : (o[u] = !0, [])) : [new Mr(e.key, l, "integer expected, found ".concat(u))]
            }
        }

        function Fr(e) {
            var t = ("property" === e.expressionContext ? cr : sr)(Pr(e.value), e.valueSpec);
            if ("error" === t.result) return t.value.map((function(t) {
                return new Mr("".concat(e.key).concat(t.key), e.value, t.message)
            }));
            var r = t.value.expression || t.value._styleExpression.expression;
            if ("property" === e.expressionContext && "text-font" === e.propertyKey && !r.outputDefined()) return [new Mr(e.key, e.value, 'Invalid data expression for "'.concat(e.propertyKey, '". Output values must be contained as literals within the expression.'))];
            if ("property" === e.expressionContext && "layout" === e.propertyType && !Ye(r)) return [new Mr(e.key, e.value, '"feature-state" data expressions are not supported with layout properties.')];
            if ("filter" === e.expressionContext && !Ye(r)) return [new Mr(e.key, e.value, '"feature-state" data expressions are not supported with filters.')];
            if (e.expressionContext && 0 === e.expressionContext.indexOf("cluster")) {
                if (!Ke(r, ["zoom", "feature-state"])) return [new Mr(e.key, e.value, '"zoom" and "feature-state" expressions are not supported with cluster properties.')];
                if ("cluster-initial" === e.expressionContext && !Ge(r)) return [new Mr(e.key, e.value, "Feature data expressions are not supported with initial expression part of cluster properties.")]
            }
            return []
        }

        function Lr(e) {
            var t = e.key,
                r = e.value,
                n = e.valueSpec,
                i = [];
            return Array.isArray(n.values) ? -1 === n.values.indexOf(Br(r)) && i.push(new Mr(t, r, "expected one of [".concat(n.values.join(", "), "], ").concat(JSON.stringify(r), " found"))) : -1 === Object.keys(n.values).indexOf(Br(r)) && i.push(new Mr(t, r, "expected one of [".concat(Object.keys(n.values).join(", "), "], ").concat(JSON.stringify(r), " found"))), i
        }

        function Or(e) {
            if (!0 === e || !1 === e) return !0;
            if (!Array.isArray(e) || 0 === e.length) return !1;
            switch (e[0]) {
                case "has":
                    return e.length >= 2 && "$id" !== e[1] && "$type" !== e[1];
                case "in":
                    return e.length >= 3 && ("string" != typeof e[1] || Array.isArray(e[2]));
                case "!in":
                case "!has":
                case "none":
                    return !1;
                case "==":
                case "!=":
                case ">":
                case ">=":
                case "<":
                case "<=":
                    return 3 !== e.length || Array.isArray(e[1]) || Array.isArray(e[2]);
                case "any":
                case "all":
                    var t, r = l(e.slice(1));
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var n = t.value;
                            if (!Or(n) && "boolean" != typeof n) return !1
                        }
                    } catch (i) {
                        r.e(i)
                    } finally {
                        r.f()
                    }
                    return !0;
                default:
                    return !0
            }
        }
        var Rr = {
            type: "boolean",
            default: !1,
            transition: !1,
            "property-type": "data-driven",
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            }
        };

        function jr(e) {
            if (null == e) return {
                filter: function() {
                    return !0
                },
                needGeometry: !1
            };
            Or(e) || (e = Nr(e));
            var t = sr(e, Rr);
            if ("error" === t.result) throw new Error(t.value.map((function(e) {
                return "".concat(e.key, ": ").concat(e.message)
            })).join(", "));
            return {
                filter: function(e, r, n) {
                    return t.value.evaluate(e, r, {}, n)
                },
                needGeometry: qr(e)
            }
        }

        function Ur(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }

        function qr(e) {
            if (!Array.isArray(e)) return !1;
            if ("within" === e[0]) return !0;
            for (var t = 1; t < e.length; t++)
                if (qr(e[t])) return !0;
            return !1
        }

        function Nr(e) {
            if (!e) return !0;
            var t, r = e[0];
            return e.length <= 1 ? "any" !== r : "==" === r ? Zr(e[1], e[2], "==") : "!=" === r ? Yr(Zr(e[1], e[2], "==")) : "<" === r || ">" === r || "<=" === r || ">=" === r ? Zr(e[1], e[2], r) : "any" === r ? (t = e.slice(1), ["any"].concat(t.map(Nr))) : "all" === r ? ["all"].concat(e.slice(1).map(Nr)) : "none" === r ? ["all"].concat(e.slice(1).map(Nr).map(Yr)) : "in" === r ? Xr(e[1], e.slice(2)) : "!in" === r ? Yr(Xr(e[1], e.slice(2))) : "has" === r ? Gr(e[1]) : "!has" === r ? Yr(Gr(e[1])) : "within" !== r || e
        }

        function Zr(e, t, r) {
            switch (e) {
                case "$type":
                    return ["filter-type-".concat(r), t];
                case "$id":
                    return ["filter-id-".concat(r), t];
                default:
                    return ["filter-".concat(r), e, t]
            }
        }

        function Xr(e, t) {
            if (0 === t.length) return !1;
            switch (e) {
                case "$type":
                    return ["filter-type-in", ["literal", t]];
                case "$id":
                    return ["filter-id-in", ["literal", t]];
                default:
                    return t.length > 200 && !t.some((function(e) {
                        return typeof e != typeof t[0]
                    })) ? ["filter-in-large", e, ["literal", t.sort(Ur)]] : ["filter-in-small", e, ["literal", t]]
            }
        }

        function Gr(e) {
            switch (e) {
                case "$type":
                    return !0;
                case "$id":
                    return ["filter-has-id"];
                default:
                    return ["filter-has", e]
            }
        }

        function Yr(e) {
            return ["!", e]
        }

        function Kr(e) {
            return Or(Pr(e.value)) ? Fr(Z({}, e, {
                expressionContext: "filter",
                valueSpec: {
                    value: "boolean"
                }
            })) : Jr(e)
        }

        function Jr(e) {
            var t = e.value,
                r = e.key;
            if ("array" !== Ht(t)) return [new Mr(r, t, "array expected, ".concat(Ht(t), " found"))];
            var n, i = e.styleSpec,
                a = [];
            if (t.length < 1) return [new Mr(r, t, "filter array must have at least 1 element")];
            switch (a = a.concat(Lr({
                key: "".concat(r, "[0]"),
                value: t[0],
                valueSpec: i.filter_operator,
                style: e.style,
                styleSpec: e.styleSpec
            })), Br(t[0])) {
                case "<":
                case "<=":
                case ">":
                case ">=":
                    t.length >= 2 && "$type" === Br(t[1]) && a.push(new Mr(r, t, '"$type" cannot be use with operator "'.concat(t[0], '"')));
                case "==":
                case "!=":
                    3 !== t.length && a.push(new Mr(r, t, 'filter array for operator "'.concat(t[0], '" must have 3 elements')));
                case "in":
                case "!in":
                    t.length >= 2 && ("string" !== (n = Ht(t[1])) && a.push(new Mr("".concat(r, "[1]"), t[1], "string expected, ".concat(n, " found"))));
                    for (var o = 2; o < t.length; o++) n = Ht(t[o]), "$type" === Br(t[1]) ? a = a.concat(Lr({
                        key: "".concat(r, "[").concat(o, "]"),
                        value: t[o],
                        valueSpec: i.geometry_type,
                        style: e.style,
                        styleSpec: e.styleSpec
                    })) : "string" !== n && "number" !== n && "boolean" !== n && a.push(new Mr("".concat(r, "[").concat(o, "]"), t[o], "string, number, or boolean expected, ".concat(n, " found")));
                    break;
                case "any":
                case "all":
                case "none":
                    for (var s = 1; s < t.length; s++) a = a.concat(Jr({
                        key: "".concat(r, "[").concat(s, "]"),
                        value: t[s],
                        style: e.style,
                        styleSpec: e.styleSpec
                    }));
                    break;
                case "has":
                case "!has":
                    n = Ht(t[1]), 2 !== t.length ? a.push(new Mr(r, t, 'filter array for "'.concat(t[0], '" operator must have 2 elements'))) : "string" !== n && a.push(new Mr("".concat(r, "[1]"), t[1], "string expected, ".concat(n, " found")));
                    break;
                case "within":
                    n = Ht(t[1]), 2 !== t.length ? a.push(new Mr(r, t, 'filter array for "'.concat(t[0], '" operator must have 2 elements'))) : "object" !== n && a.push(new Mr("".concat(r, "[1]"), t[1], "object expected, ".concat(n, " found")))
            }
            return a
        }

        function Hr(e, t) {
            var r = e.key,
                n = e.style,
                i = e.styleSpec,
                a = e.value,
                o = e.objectKey,
                s = i["".concat(t, "_").concat(e.layerType)];
            if (!s) return [];
            var u = o.match(/^(.*)-transition$/);
            if ("paint" === t && u && s[u[1]] && s[u[1]].transition) return un({
                key: r,
                value: a,
                valueSpec: i.transition,
                style: n,
                styleSpec: i
            });
            var l, c = e.valueSpec || s[o];
            if (!c) return [new Mr(r, a, 'unknown property "'.concat(o, '"'))];
            if ("string" === Ht(a) && Yt(c) && !c.tokens && (l = /^{([^}]+)}$/.exec(a))) return [new Mr(r, a, '"'.concat(o, '" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": ').concat(JSON.stringify(l[1]), " }`."))];
            var h = [];
            return "symbol" === e.layerType && ("text-field" === o && n && !n.glyphs && h.push(new Mr(r, a, 'use of "text-field" requires a style "glyphs" property')), "text-font" === o && Wt(Pr(a)) && "identity" === Br(a.type) && h.push(new Mr(r, a, '"text-font" does not support identity functions'))), h.concat(un({
                key: e.key,
                value: a,
                valueSpec: c,
                style: n,
                styleSpec: i,
                expressionContext: "property",
                propertyType: t,
                propertyKey: o
            }))
        }

        function Wr(e) {
            return Hr(e, "paint")
        }

        function $r(e) {
            return Hr(e, "layout")
        }

        function Qr(e) {
            var t = [],
                r = e.value,
                n = e.key,
                i = e.style,
                a = e.styleSpec;
            r.type || r.ref || t.push(new Mr(n, r, 'either "type" or "ref" is required'));
            var o, s = Br(r.type),
                u = Br(r.ref);
            if (r.id)
                for (var l = Br(r.id), c = 0; c < e.arrayIndex; c++) {
                    var h = i.layers[c];
                    Br(h.id) === l && t.push(new Mr(n, r.id, 'duplicate layer id "'.concat(r.id, '", previously used at line ').concat(h.id.__line__)))
                }
            if ("ref" in r)["type", "source", "source-layer", "filter", "layout"].forEach((function(e) {
                e in r && t.push(new Mr(n, r[e], '"'.concat(e, '" is prohibited for ref layers')))
            })), i.layers.forEach((function(e) {
                Br(e.id) === u && (o = e)
            })), o ? o.ref ? t.push(new Mr(n, r.ref, "ref cannot reference another ref layer")) : s = Br(o.type) : t.push(new Mr(n, r.ref, 'ref layer "'.concat(u, '" not found')));
            else if ("background" !== s && "sky" !== s)
                if (r.source) {
                    var f = i.sources && i.sources[r.source],
                        p = f && Br(f.type);
                    f ? "vector" === p && "raster" === s ? t.push(new Mr(n, r.source, 'layer "'.concat(r.id, '" requires a raster source'))) : "raster" === p && "raster" !== s ? t.push(new Mr(n, r.source, 'layer "'.concat(r.id, '" requires a vector source'))) : "vector" !== p || r["source-layer"] ? "raster-dem" === p && "hillshade" !== s ? t.push(new Mr(n, r.source, "raster-dem source can only be used with layer type 'hillshade'.")) : "line" !== s || !r.paint || !r.paint["line-gradient"] || "geojson" === p && f.lineMetrics || t.push(new Mr(n, r, 'layer "'.concat(r.id, '" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.'))) : t.push(new Mr(n, r, 'layer "'.concat(r.id, '" must specify a "source-layer"'))) : t.push(new Mr(n, r.source, 'source "'.concat(r.source, '" not found')))
                } else t.push(new Mr(n, r, 'missing required property "source"'));
            return t = t.concat(Vr({
                key: n,
                value: r,
                valueSpec: a.layer,
                style: e.style,
                styleSpec: e.styleSpec,
                objectElementValidators: {
                    "*": function() {
                        return []
                    },
                    type: function() {
                        return un({
                            key: "".concat(n, ".type"),
                            value: r.type,
                            valueSpec: a.layer.type,
                            style: e.style,
                            styleSpec: e.styleSpec,
                            object: r,
                            objectKey: "type"
                        })
                    },
                    filter: Kr,
                    layout: function(e) {
                        return Vr({
                            layer: r,
                            key: e.key,
                            value: e.value,
                            style: e.style,
                            styleSpec: e.styleSpec,
                            objectElementValidators: {
                                "*": function(e) {
                                    return $r(Z({
                                        layerType: s
                                    }, e))
                                }
                            }
                        })
                    },
                    paint: function(e) {
                        return Vr({
                            layer: r,
                            key: e.key,
                            value: e.value,
                            style: e.style,
                            styleSpec: e.styleSpec,
                            objectElementValidators: {
                                "*": function(e) {
                                    return Wr(Z({
                                        layerType: s
                                    }, e))
                                }
                            }
                        })
                    }
                }
            })), t
        }

        function en(e) {
            var t = e.value,
                r = e.key,
                n = Ht(t);
            return "string" !== n ? [new Mr(r, t, "string expected, ".concat(n, " found"))] : []
        }
        var tn = {
            promoteId: function(e) {
                var t = e.key,
                    r = e.value;
                if ("string" === Ht(r)) return en({
                    key: t,
                    value: r
                });
                var n = [];
                for (var i in r) n.push.apply(n, u(en({
                    key: "".concat(t, ".").concat(i),
                    value: r[i]
                })));
                return n
            }
        };

        function rn(e) {
            var t = e.value,
                r = e.key,
                n = e.styleSpec,
                i = e.style;
            if (!t.type) return [new Mr(r, t, '"type" is required')];
            var a, o = Br(t.type);
            switch (o) {
                case "vector":
                case "raster":
                case "raster-dem":
                    return a = Vr({
                        key: r,
                        value: t,
                        valueSpec: n["source_".concat(o.replace("-", "_"))],
                        style: e.style,
                        styleSpec: n,
                        objectElementValidators: tn
                    });
                case "geojson":
                    if (a = Vr({
                            key: r,
                            value: t,
                            valueSpec: n.source_geojson,
                            style: i,
                            styleSpec: n,
                            objectElementValidators: tn
                        }), t.cluster)
                        for (var s in t.clusterProperties) {
                            var l, c, h = p(t.clusterProperties[s], 2),
                                f = h[0],
                                y = h[1],
                                d = "string" == typeof f ? [f, ["accumulated"],
                                    ["get", s]
                                ] : f;
                            (l = a).push.apply(l, u(Fr({
                                key: "".concat(r, ".").concat(s, ".map"),
                                value: y,
                                expressionContext: "cluster-map"
                            }))), (c = a).push.apply(c, u(Fr({
                                key: "".concat(r, ".").concat(s, ".reduce"),
                                value: d,
                                expressionContext: "cluster-reduce"
                            })))
                        }
                    return a;
                case "video":
                    return Vr({
                        key: r,
                        value: t,
                        valueSpec: n.source_video,
                        style: i,
                        styleSpec: n
                    });
                case "image":
                    return Vr({
                        key: r,
                        value: t,
                        valueSpec: n.source_image,
                        style: i,
                        styleSpec: n
                    });
                case "canvas":
                    return [new Mr(r, null, "Please use runtime APIs to add canvas sources, rather than including them in stylesheets.", "source.canvas")];
                default:
                    return Lr({
                        key: "".concat(r, ".type"),
                        value: t.type,
                        valueSpec: {
                            values: ["vector", "raster", "raster-dem", "geojson", "video", "image"]
                        },
                        style: i,
                        styleSpec: n
                    })
            }
        }

        function nn(e) {
            var t = e.value,
                r = e.styleSpec,
                n = r.light,
                i = e.style,
                a = [],
                o = Ht(t);
            if (void 0 === t) return a;
            if ("object" !== o) return a = a.concat([new Mr("light", t, "object expected, ".concat(o, " found"))]);
            for (var s in t) {
                var u = s.match(/^(.*)-transition$/);
                a = a.concat(u && n[u[1]] && n[u[1]].transition ? un({
                    key: s,
                    value: t[s],
                    valueSpec: r.transition,
                    style: i,
                    styleSpec: r
                }) : n[s] ? un({
                    key: s,
                    value: t[s],
                    valueSpec: n[s],
                    style: i,
                    styleSpec: r
                }) : [new Mr(s, t[s], 'unknown property "'.concat(s, '"'))])
            }
            return a
        }

        function an(e) {
            var t = e.value,
                r = e.key,
                n = e.style,
                i = e.styleSpec,
                a = i.terrain,
                o = [],
                s = Ht(t);
            if (void 0 === t) return o;
            if ("object" !== s) return o = o.concat([new Mr("terrain", t, "object expected, ".concat(s, " found"))]);
            for (var u in t) {
                var l = u.match(/^(.*)-transition$/);
                o = o.concat(l && a[l[1]] && a[l[1]].transition ? un({
                    key: u,
                    value: t[u],
                    valueSpec: i.transition,
                    style: n,
                    styleSpec: i
                }) : a[u] ? un({
                    key: u,
                    value: t[u],
                    valueSpec: a[u],
                    style: n,
                    styleSpec: i
                }) : [new Mr(u, t[u], 'unknown property "'.concat(u, '"'))])
            }
            if (t.source) {
                var c = n.sources && n.sources[t.source],
                    h = c && Br(c.type);
                c ? "raster-dem" !== h && o.push(new Mr(r, t.source, "terrain cannot be used with a source of type ".concat(h, ', it only be used with a "raster-dem" source type'))) : o.push(new Mr(r, t.source, 'source "'.concat(t.source, '" not found')))
            } else o.push(new Mr(r, t, 'terrain is missing required property "source"'));
            return o
        }

        function on(e) {
            var t = e.value,
                r = e.style,
                n = e.styleSpec,
                i = n.fog,
                a = [],
                o = Ht(t);
            if (void 0 === t) return a;
            if ("object" !== o) return a = a.concat([new Mr("fog", t, "object expected, ".concat(o, " found"))]);
            for (var s in t) {
                var u = s.match(/^(.*)-transition$/);
                a = a.concat(u && i[u[1]] && i[u[1]].transition ? un({
                    key: s,
                    value: t[s],
                    valueSpec: n.transition,
                    style: r,
                    styleSpec: n
                }) : i[s] ? un({
                    key: s,
                    value: t[s],
                    valueSpec: i[s],
                    style: r,
                    styleSpec: n
                }) : [new Mr(s, t[s], 'unknown property "'.concat(s, '"'))])
            }
            return a
        }
        var sn = {
            "*": function() {
                return []
            },
            array: Tr,
            boolean: function(e) {
                var t = e.value,
                    r = e.key,
                    n = Ht(t);
                return "boolean" !== n ? [new Mr(r, t, "boolean expected, ".concat(n, " found"))] : []
            },
            number: Er,
            color: function(e) {
                var t = e.key,
                    r = e.value,
                    n = Ht(r);
                return "string" !== n ? [new Mr(t, r, "color expected, ".concat(n, " found"))] : null === q.parseCSSColor(r) ? [new Mr(t, r, 'color expected, "'.concat(r, '" found'))] : []
            },
            constants: Cr,
            enum: Lr,
            filter: Kr,
            function: Dr,
            layer: Qr,
            object: Vr,
            source: rn,
            light: nn,
            terrain: an,
            fog: on,
            string: en,
            formatted: function(e) {
                return 0 === en(e).length ? [] : Fr(e)
            },
            resolvedImage: function(e) {
                return 0 === en(e).length ? [] : Fr(e)
            }
        };

        function un(e) {
            var t = e.value,
                r = e.valueSpec,
                n = e.styleSpec;
            return r.expression && Wt(Br(t)) ? Dr(e) : r.expression && or(Pr(t)) ? Fr(e) : r.type && sn[r.type] ? sn[r.type](e) : Vr(Z({}, e, {
                valueSpec: r.type ? n[r.type] : r
            }))
        }

        function ln(e) {
            var t = e.value,
                r = e.key,
                n = en(e);
            return n.length || (-1 === t.indexOf("{fontstack}") && n.push(new Mr(r, t, '"glyphs" url must include a "{fontstack}" token')), -1 === t.indexOf("{range}") && n.push(new Mr(r, t, '"glyphs" url must include a "{range}" token'))), n
        }

        function cn(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zr,
                r = [];
            return r = r.concat(un({
                key: "",
                value: e,
                valueSpec: t.$root,
                styleSpec: t,
                style: e,
                objectElementValidators: {
                    glyphs: ln,
                    "*": function() {
                        return []
                    }
                }
            })), e.constants && (r = r.concat(Cr({
                key: "constants",
                value: e.constants,
                style: e,
                styleSpec: t
            }))), hn(r)
        }

        function hn(e) {
            return [].concat(e).sort((function(e, t) {
                return e.line - t.line
            }))
        }

        function fn(e) {
            return function() {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return hn(e.apply(this, r))
            }
        }

        function pn(e, t, r) {
            r[e] && -1 !== r[e].indexOf(t) || (r[e] = r[e] || [], r[e].push(t))
        }

        function yn(e, t, r) {
            if (r && r[e]) {
                var n = r[e].indexOf(t); - 1 !== n && r[e].splice(n, 1)
            }
        }
        cn.source = fn(rn), cn.light = fn(nn), cn.terrain = fn(an), cn.fog = fn(on), cn.layer = fn(Qr), cn.filter = fn(Kr), cn.paintProperty = fn(Wr), cn.layoutProperty = fn($r);
        var dn, vn = function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                y(this, e), _(this, r), this.type = t
            },
            mn = function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return y(this, r), t.call(this, "error", _({
                        error: e
                    }, n))
                }
                return r
            }(vn),
            gn = function() {
                function e() {
                    y(this, e)
                }
                return d(e, [{
                    key: "on",
                    value: function(e, t) {
                        return this._listeners = this._listeners || {}, pn(e, t, this._listeners), this
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        return yn(e, t, this._listeners), yn(e, t, this._oneTimeListeners), this
                    }
                }, {
                    key: "once",
                    value: function(e, t) {
                        var r = this;
                        return t ? (this._oneTimeListeners = this._oneTimeListeners || {}, pn(e, t, this._oneTimeListeners), this) : new Promise((function(t) {
                            return r.once(e, t)
                        }))
                    }
                }, {
                    key: "fire",
                    value: function(e, t) {
                        "string" == typeof e && (e = new vn(e, t || {}));
                        var r = e.type;
                        if (this.listens(r)) {
                            e.target = this;
                            var n, i = this._listeners && this._listeners[r] ? this._listeners[r].slice() : [],
                                a = l(i);
                            try {
                                for (a.s(); !(n = a.n()).done;) {
                                    n.value.call(this, e)
                                }
                            } catch (f) {
                                a.e(f)
                            } finally {
                                a.f()
                            }
                            var o, s = this._oneTimeListeners && this._oneTimeListeners[r] ? this._oneTimeListeners[r].slice() : [],
                                u = l(s);
                            try {
                                for (u.s(); !(o = u.n()).done;) {
                                    var c = o.value;
                                    yn(r, c, this._oneTimeListeners), c.call(this, e)
                                }
                            } catch (f) {
                                u.e(f)
                            } finally {
                                u.f()
                            }
                            var h = this._eventedParent;
                            h && (_(e, "function" == typeof this._eventedParentData ? this._eventedParentData() : this._eventedParentData), h.fire(e))
                        } else e instanceof mn && console.error(e.error);
                        return this
                    }
                }, {
                    key: "listens",
                    value: function(e) {
                        return !!(this._listeners && this._listeners[e] && this._listeners[e].length > 0 || this._oneTimeListeners && this._oneTimeListeners[e] && this._oneTimeListeners[e].length > 0 || this._eventedParent && this._eventedParent.listens(e))
                    }
                }, {
                    key: "setEventedParent",
                    value: function(e, t) {
                        return this._eventedParent = e, this._eventedParentData = t, this
                    }
                }]), e
            }(),
            xn = cn,
            bn = xn.paintProperty,
            kn = xn.layoutProperty,
            wn = function() {
                function e() {
                    y(this, e), this.first = !0
                }
                return d(e, [{
                    key: "update",
                    value: function(e, t) {
                        var r = Math.floor(e);
                        return this.first ? (this.first = !1, this.lastIntegerZoom = r, this.lastIntegerZoomTime = 0, this.lastZoom = e, this.lastFloorZoom = r, !0) : (this.lastFloorZoom > r ? (this.lastIntegerZoom = r + 1, this.lastIntegerZoomTime = t) : this.lastFloorZoom < r && (this.lastIntegerZoom = r, this.lastIntegerZoomTime = t), e !== this.lastZoom && (this.lastZoom = e, this.lastFloorZoom = r, !0))
                    }
                }]), e
            }(),
            _n = function(e) {
                return e >= 1536 && e <= 1791
            },
            Sn = function(e) {
                return e >= 1872 && e <= 1919
            },
            An = function(e) {
                return e >= 2208 && e <= 2303
            },
            In = function(e) {
                return e >= 11904 && e <= 12031
            },
            zn = function(e) {
                return e >= 12032 && e <= 12255
            },
            Mn = function(e) {
                return e >= 12272 && e <= 12287
            },
            Cn = function(e) {
                return e >= 12288 && e <= 12351
            },
            Bn = function(e) {
                return e >= 12352 && e <= 12447
            },
            Pn = function(e) {
                return e >= 12448 && e <= 12543
            },
            Vn = function(e) {
                return e >= 12544 && e <= 12591
            },
            Tn = function(e) {
                return e >= 12704 && e <= 12735
            },
            En = function(e) {
                return e >= 12736 && e <= 12783
            },
            Dn = function(e) {
                return e >= 12784 && e <= 12799
            },
            Fn = function(e) {
                return e >= 12800 && e <= 13055
            },
            Ln = function(e) {
                return e >= 13056 && e <= 13311
            },
            On = function(e) {
                return e >= 13312 && e <= 19903
            },
            Rn = function(e) {
                return e >= 19968 && e <= 40959
            },
            jn = function(e) {
                return e >= 40960 && e <= 42127
            },
            Un = function(e) {
                return e >= 42128 && e <= 42191
            },
            qn = function(e) {
                return e >= 63744 && e <= 64255
            },
            Nn = function(e) {
                return e >= 64336 && e <= 65023
            },
            Zn = function(e) {
                return e >= 65040 && e <= 65055
            },
            Xn = function(e) {
                return e >= 65072 && e <= 65103
            },
            Gn = function(e) {
                return e >= 65104 && e <= 65135
            },
            Yn = function(e) {
                return e >= 65136 && e <= 65279
            },
            Kn = function(e) {
                return e >= 65280 && e <= 65519
            };

        function Jn(e) {
            var t, r = l(e);
            try {
                for (r.s(); !(t = r.n()).done;) {
                    if (Wn(t.value.charCodeAt(0))) return !0
                }
            } catch (n) {
                r.e(n)
            } finally {
                r.f()
            }
            return !1
        }

        function Hn(e) {
            return !(_n(e) || Sn(e) || An(e) || Nn(e) || Yn(e))
        }

        function Wn(e) {
            return !(746 !== e && 747 !== e && (e < 4352 || !(Tn(e) || Vn(e) || Xn(e) && !(e >= 65097 && e <= 65103) || qn(e) || Ln(e) || In(e) || En(e) || !(!Cn(e) || e >= 12296 && e <= 12305 || e >= 12308 && e <= 12319 || 12336 === e) || On(e) || Rn(e) || Fn(e) || function(e) {
                return e >= 12592 && e <= 12687
            }(e) || function(e) {
                return e >= 43360 && e <= 43391
            }(e) || function(e) {
                return e >= 55216 && e <= 55295
            }(e) || function(e) {
                return e >= 4352 && e <= 4607
            }(e) || function(e) {
                return e >= 44032 && e <= 55215
            }(e) || Bn(e) || Mn(e) || function(e) {
                return e >= 12688 && e <= 12703
            }(e) || zn(e) || Dn(e) || Pn(e) && 12540 !== e || !(!Kn(e) || 65288 === e || 65289 === e || 65293 === e || e >= 65306 && e <= 65310 || 65339 === e || 65341 === e || 65343 === e || e >= 65371 && e <= 65503 || 65507 === e || e >= 65512 && e <= 65519) || !(!Gn(e) || e >= 65112 && e <= 65118 || e >= 65123 && e <= 65126) || function(e) {
                return e >= 5120 && e <= 5759
            }(e) || function(e) {
                return e >= 6320 && e <= 6399
            }(e) || Zn(e) || function(e) {
                return e >= 19904 && e <= 19967
            }(e) || jn(e) || Un(e))))
        }

        function $n(e) {
            return !(Wn(e) || function(e) {
                return !!(function(e) {
                    return e >= 128 && e <= 255
                }(e) && (167 === e || 169 === e || 174 === e || 177 === e || 188 === e || 189 === e || 190 === e || 215 === e || 247 === e) || function(e) {
                    return e >= 8192 && e <= 8303
                }(e) && (8214 === e || 8224 === e || 8225 === e || 8240 === e || 8241 === e || 8251 === e || 8252 === e || 8258 === e || 8263 === e || 8264 === e || 8265 === e || 8273 === e) || function(e) {
                    return e >= 8448 && e <= 8527
                }(e) || function(e) {
                    return e >= 8528 && e <= 8591
                }(e) || function(e) {
                    return e >= 8960 && e <= 9215
                }(e) && (e >= 8960 && e <= 8967 || e >= 8972 && e <= 8991 || e >= 8996 && e <= 9e3 || 9003 === e || e >= 9085 && e <= 9114 || e >= 9150 && e <= 9165 || 9167 === e || e >= 9169 && e <= 9179 || e >= 9186 && e <= 9215) || function(e) {
                    return e >= 9216 && e <= 9279
                }(e) && 9251 !== e || function(e) {
                    return e >= 9280 && e <= 9311
                }(e) || function(e) {
                    return e >= 9312 && e <= 9471
                }(e) || function(e) {
                    return e >= 9632 && e <= 9727
                }(e) || function(e) {
                    return e >= 9728 && e <= 9983
                }(e) && !(e >= 9754 && e <= 9759) || function(e) {
                    return e >= 11008 && e <= 11263
                }(e) && (e >= 11026 && e <= 11055 || e >= 11088 && e <= 11097 || e >= 11192 && e <= 11243) || Cn(e) || Pn(e) || function(e) {
                    return e >= 57344 && e <= 63743
                }(e) || Xn(e) || Gn(e) || Kn(e) || 8734 === e || 8756 === e || 8757 === e || e >= 9984 && e <= 10087 || e >= 10102 && e <= 10131 || 65532 === e || 65533 === e)
            }(e))
        }

        function Qn(e) {
            return e >= 1424 && e <= 2303 || Nn(e) || Yn(e)
        }

        function ei(e, t) {
            return !(!t && Qn(e) || e >= 2304 && e <= 3583 || e >= 3840 && e <= 4255 || function(e) {
                return e >= 6016 && e <= 6143
            }(e))
        }

        function ti(e) {
            var t, r = l(e);
            try {
                for (r.s(); !(t = r.n()).done;) {
                    if (Qn(t.value.charCodeAt(0))) return !0
                }
            } catch (n) {
                r.e(n)
            } finally {
                r.f()
            }
            return !1
        }
        var ri, ni, ii = {
                API_URL: "https://api.mapbox.com",
                get API_URL_REGEX() {
                    if (null == dn) {
                        var e = /^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/|\?|$)/i;
                        try {
                            dn = null != Object({
                                NODE_ENV: "production",
                                PUBLIC_URL: "",
                                WDS_SOCKET_HOST: void 0,
                                WDS_SOCKET_PATH: void 0,
                                WDS_SOCKET_PORT: void 0,
                                FAST_REFRESH: !0
                            }).API_URL_REGEX ? new RegExp(Object({
                                NODE_ENV: "production",
                                PUBLIC_URL: "",
                                WDS_SOCKET_HOST: void 0,
                                WDS_SOCKET_PATH: void 0,
                                WDS_SOCKET_PORT: void 0,
                                FAST_REFRESH: !0
                            }).API_URL_REGEX) : e
                        } catch (t) {
                            dn = e
                        }
                    }
                    return dn
                },
                get EVENTS_URL() {
                    return this.API_URL ? 0 === this.API_URL.indexOf("https://api.mapbox.cn") ? "https://events.mapbox.cn/events/v2" : 0 === this.API_URL.indexOf("https://api.mapbox.com") ? "https://events.mapbox.com/events/v2" : null : null
                },
                SESSION_PATH: "/map-sessions/v1",
                FEEDBACK_URL: "https://apps.mapbox.com/feedback",
                TILE_URL_VERSION: "v4",
                RASTER_URL_PREFIX: "raster/v1",
                REQUIRE_ACCESS_TOKEN: !0,
                ACCESS_TOKEN: null,
                MAX_PARALLEL_IMAGE_REQUESTS: 16
            },
            ai = {
                supported: !1,
                testSupport: function(e) {
                    !oi && ni && (si ? ui(e) : ri = e)
                }
            },
            oi = !1,
            si = !1;

        function ui(e) {
            var t = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, t);
            try {
                if (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, ni), e.isContextLost()) return;
                ai.supported = !0
            } catch (e) {}
            e.deleteTexture(t), oi = !0
        }
        m.document && ((ni = m.document.createElement("img")).onload = function() {
            ri && ui(ri), ri = null, si = !0
        }, ni.onerror = function() {
            oi = !0, ri = null
        }, ni.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=");
        var li = "NO_ACCESS_TOKEN";

        function ci(e) {
            return ii.API_URL_REGEX.test(e)
        }
        var hi = /^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;

        function fi(e) {
            var t = e.match(hi);
            if (!t) throw new Error("Unable to parse URL object");
            return {
                protocol: t[1],
                authority: t[2],
                path: t[3] || "/",
                params: t[4] ? t[4].split("&") : []
            }
        }

        function pi(e) {
            var t = e.params.length ? "?".concat(e.params.join("&")) : "";
            return "".concat(e.protocol, "://").concat(e.authority).concat(e.path).concat(t)
        }

        function yi(e) {
            if (!e) return null;
            var t = e.split(".");
            if (!t || 3 !== t.length) return null;
            try {
                return JSON.parse(decodeURIComponent(m.atob(t[1]).split("").map((function(e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                })).join("")))
            } catch (e) {
                return null
            }
        }
        var di = function() {
                function e(t) {
                    y(this, e), this.type = t, this.anonId = null, this.eventData = {}, this.queue = [], this.pendingRequest = null
                }
                return d(e, [{
                    key: "getStorageKey",
                    value: function(e) {
                        var t, r = yi(ii.ACCESS_TOKEN);
                        return t = r && r.u ? m.btoa(encodeURIComponent(r.u).replace(/%([0-9A-F]{2})/g, (function(e, t) {
                            return String.fromCharCode(Number("0x" + t))
                        }))) : "", e ? "mapbox.eventData.".concat(e, ":").concat(t) : "mapbox.eventData:".concat(t)
                    }
                }, {
                    key: "fetchEventData",
                    value: function() {
                        var e = O("localStorage"),
                            t = this.getStorageKey(),
                            r = this.getStorageKey("uuid");
                        if (e) try {
                            var n = m.localStorage.getItem(t);
                            n && (this.eventData = JSON.parse(n));
                            var i = m.localStorage.getItem(r);
                            i && (this.anonId = i)
                        } catch (e) {
                            P("Unable to read from LocalStorage")
                        }
                    }
                }, {
                    key: "saveEventData",
                    value: function() {
                        var e = O("localStorage"),
                            t = this.getStorageKey(),
                            r = this.getStorageKey("uuid");
                        if (e) try {
                            m.localStorage.setItem(r, this.anonId), Object.keys(this.eventData).length >= 1 && m.localStorage.setItem(t, JSON.stringify(this.eventData))
                        } catch (e) {
                            P("Unable to write to LocalStorage")
                        }
                    }
                }, {
                    key: "processRequests",
                    value: function(e) {}
                }, {
                    key: "postEvent",
                    value: function(e, t, r, n) {
                        var i = this;
                        if (ii.EVENTS_URL) {
                            var a = fi(ii.EVENTS_URL);
                            a.params.push("access_token=".concat(n || ii.ACCESS_TOKEN || ""));
                            var o = {
                                    event: this.type,
                                    created: new Date(e).toISOString(),
                                    sdkIdentifier: "mapbox-gl-js",
                                    sdkVersion: "2.5.1",
                                    skuId: "01",
                                    userId: this.anonId
                                },
                                s = t ? _(o, t) : o,
                                u = {
                                    url: pi(a),
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    body: JSON.stringify([s])
                                };
                            this.pendingRequest = Ii(u, (function(e) {
                                i.pendingRequest = null, r(e), i.saveEventData(), i.processRequests(n)
                            }))
                        }
                    }
                }, {
                    key: "queueRequest",
                    value: function(e, t) {
                        this.queue.push(e), this.processRequests(t)
                    }
                }]), e
            }(),
            vi = new(function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    var n;
                    return y(this, r), (n = t.call(this, "appUserTurnstile"))._customAccessToken = e, n
                }
                return d(r, [{
                    key: "postTurnstileEvent",
                    value: function(e, t) {
                        ii.EVENTS_URL && ii.ACCESS_TOKEN && Array.isArray(e) && e.some((function(e) {
                            return function(e) {
                                return 0 === e.indexOf("mapbox:")
                            }(e) || ci(e)
                        })) && this.queueRequest(Date.now(), t)
                    }
                }, {
                    key: "processRequests",
                    value: function(e) {
                        var t = this;
                        if (!this.pendingRequest && 0 !== this.queue.length) {
                            this.anonId && this.eventData.lastSuccess && this.eventData.tokenU || this.fetchEventData();
                            var r = yi(ii.ACCESS_TOKEN),
                                n = r ? r.u : ii.ACCESS_TOKEN,
                                i = n !== this.eventData.tokenU;
                            A(this.anonId) || (this.anonId = S(), i = !0);
                            var a = this.queue.shift();
                            if (this.eventData.lastSuccess) {
                                var o = new Date(this.eventData.lastSuccess),
                                    s = new Date(a),
                                    u = (a - this.eventData.lastSuccess) / 864e5;
                                i = i || u >= 1 || u < -1 || o.getDate() !== s.getDate()
                            } else i = !0;
                            if (!i) return this.processRequests();
                            this.postEvent(a, {
                                "enabled.telemetry": !1
                            }, (function(e) {
                                e || (t.eventData.lastSuccess = a, t.eventData.tokenU = n)
                            }), e)
                        }
                    }
                }]), r
            }(di));
        vi.postTurnstileEvent.bind(vi);
        var mi = new(function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                var e;
                return y(this, r), (e = t.call(this, "map.load")).success = {}, e.skuToken = "", e
            }
            return d(r, [{
                key: "postMapLoadEvent",
                value: function(e, t, r, n) {
                    this.skuToken = t, this.errorCb = n, ii.EVENTS_URL && (r || ii.ACCESS_TOKEN ? this.queueRequest({
                        id: e,
                        timestamp: Date.now()
                    }, r) : this.errorCb(new Error(li)))
                }
            }, {
                key: "processRequests",
                value: function(e) {
                    var t = this;
                    if (!this.pendingRequest && 0 !== this.queue.length) {
                        var r = this.queue.shift(),
                            n = r.id,
                            i = r.timestamp;
                        n && this.success[n] || (this.anonId || this.fetchEventData(), A(this.anonId) || (this.anonId = S()), this.postEvent(i, {
                            skuToken: this.skuToken
                        }, (function(e) {
                            e ? t.errorCb(e) : n && (t.success[n] = !0)
                        }), e))
                    }
                }
            }]), r
        }(di));
        mi.postMapLoadEvent.bind(mi);
        var gi, xi, bi = new(function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                var e;
                return y(this, r), (e = t.call(this, "map.auth")).success = {}, e.skuToken = "", e
            }
            return d(r, [{
                key: "getSession",
                value: function(e, t, r, n) {
                    var i = this,
                        a = fi(ii.API_URL + ii.SESSION_PATH);
                    a.params.push("sku=".concat(t || "")), a.params.push("access_token=".concat(n || ii.ACCESS_TOKEN || ""));
                    var o = {
                        url: pi(a),
                        headers: {
                            "Content-Type": "text/plain"
                        }
                    };
                    this.pendingRequest = zi(o, (function(e) {
                        i.pendingRequest = null, r(e), i.saveEventData(), i.processRequests(n)
                    }))
                }
            }, {
                key: "getSessionAPI",
                value: function(e, t, r, n) {
                    this.skuToken = t, this.errorCb = n, r || ii.ACCESS_TOKEN ? this.queueRequest({
                        id: e,
                        timestamp: Date.now()
                    }, r) : this.errorCb(new Error(li))
                }
            }, {
                key: "processRequests",
                value: function(e) {
                    var t = this;
                    if (!this.pendingRequest && 0 !== this.queue.length) {
                        var r = this.queue.shift(),
                            n = r.id,
                            i = r.timestamp;
                        n && this.success[n] || this.getSession(i, this.skuToken, (function(e) {
                            e ? t.errorCb(e) : n && (t.success[n] = !0)
                        }), e)
                    }
                }
            }]), r
        }(di));

        function ki() {
            m.caches && !gi && (gi = m.caches.open("mapbox-tiles"))
        }

        function wi(e) {
            var t = e.indexOf("?");
            return t < 0 ? e : e.slice(0, t)
        }
        bi.getSessionAPI.bind(bi), "function" == typeof Object.freeze && Object.freeze({
            Unknown: "Unknown",
            Style: "Style",
            Source: "Source",
            Tile: "Tile",
            Glyphs: "Glyphs",
            SpriteImage: "SpriteImage",
            SpriteJSON: "SpriteJSON",
            Image: "Image"
        });
        var _i = function(e) {
                c(r, e);
                var t = h(r);

                function r(e, n, i) {
                    var a;
                    return y(this, r), 401 === n && ci(i) && (e += ": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes"), (a = t.call(this, e)).status = n, a.url = i, a
                }
                return d(r, [{
                    key: "toString",
                    value: function() {
                        return "".concat(this.name, ": ").concat(this.message, " (").concat(this.status, "): ").concat(this.url)
                    }
                }]), r
            }(f(Error)),
            Si = E() ? function() {
                return self.worker && self.worker.referrer
            } : function() {
                return ("blob:" === m.location.protocol ? m.parent : m).location.href
            },
            Ai = function(e, t) {
                if (!(/^file:/.test(r = e.url) || /^file:/.test(Si()) && !/^\w+:/.test(r))) {
                    if (m.fetch && m.Request && m.AbortController && m.Request.prototype.hasOwnProperty("signal")) return function(e, t) {
                        var r, n = new m.AbortController,
                            i = new m.Request(e.url, {
                                method: e.method || "GET",
                                body: e.body,
                                credentials: e.credentials,
                                headers: e.headers,
                                referrer: Si(),
                                signal: n.signal
                            }),
                            a = !1,
                            o = !1,
                            s = (r = i.url).indexOf("sku=") > 0 && ci(r);
                        "json" === e.type && i.headers.set("Accept", "application/json");
                        var u = function(r, n, a) {
                                if (!o) {
                                    if (r && "SecurityError" !== r.message && P(r), n && a) return l(n);
                                    var u = Date.now();
                                    m.fetch(i).then((function(r) {
                                        if (r.ok) {
                                            var n = s ? r.clone() : null;
                                            return l(r, n, u)
                                        }
                                        return t(new _i(r.statusText, r.status, e.url))
                                    })).catch((function(e) {
                                        20 !== e.code && t(new Error(e.message))
                                    }))
                                }
                            },
                            l = function(r, n, s) {
                                ("arrayBuffer" === e.type ? r.arrayBuffer() : "json" === e.type ? r.json() : r.text()).then((function(e) {
                                    o || (n && s && function(e, t, r) {
                                        if (ki(), gi) {
                                            var n = {
                                                status: t.status,
                                                statusText: t.statusText,
                                                headers: new m.Headers
                                            };
                                            t.headers.forEach((function(e, t) {
                                                return n.headers.set(t, e)
                                            }));
                                            var i = D(t.headers.get("Cache-Control") || "");
                                            i["no-store"] || (i["max-age"] && n.headers.set("Expires", new Date(r + 1e3 * i["max-age"]).toUTCString()), new Date(n.headers.get("Expires")).getTime() - r < 42e4 || function(e, t) {
                                                if (void 0 === xi) try {
                                                    new Response(new ReadableStream), xi = !0
                                                } catch (e) {
                                                    xi = !1
                                                }
                                                xi ? t(e.body) : e.blob().then(t)
                                            }(t, (function(t) {
                                                var r = new m.Response(t, n);
                                                ki(), gi && gi.then((function(t) {
                                                    return t.put(wi(e.url), r)
                                                })).catch((function(e) {
                                                    return P(e.message)
                                                }))
                                            })))
                                        }
                                    }(i, n, s), a = !0, t(null, e, r.headers.get("Cache-Control"), r.headers.get("Expires")))
                                })).catch((function(e) {
                                    o || t(new Error(e.message))
                                }))
                            };
                        return s ? function(e, t) {
                            if (ki(), !gi) return t(null);
                            var r = wi(e.url);
                            gi.then((function(e) {
                                e.match(r).then((function(n) {
                                    var i = function(e) {
                                        if (!e) return !1;
                                        var t = new Date(e.headers.get("Expires") || 0),
                                            r = D(e.headers.get("Cache-Control") || "");
                                        return t > Date.now() && !r["no-cache"]
                                    }(n);
                                    e.delete(r), i && e.put(r, n.clone()), t(null, n, i)
                                })).catch(t)
                            })).catch(t)
                        }(i, u) : u(null, null), {
                            cancel: function() {
                                o = !0, a || n.abort()
                            }
                        }
                    }(e, t);
                    if (E() && self.worker && self.worker.actor) return self.worker.actor.send("getResource", e, t, void 0, !0)
                }
                var r;
                return function(e, t) {
                    var r = new m.XMLHttpRequest;
                    for (var n in r.open(e.method || "GET", e.url, !0), "arrayBuffer" === e.type && (r.responseType = "arraybuffer"), e.headers) r.setRequestHeader(n, e.headers[n]);
                    return "json" === e.type && (r.responseType = "text", r.setRequestHeader("Accept", "application/json")), r.withCredentials = "include" === e.credentials, r.onerror = function() {
                        t(new Error(r.statusText))
                    }, r.onload = function() {
                        if ((r.status >= 200 && r.status < 300 || 0 === r.status) && null !== r.response) {
                            var n = r.response;
                            if ("json" === e.type) try {
                                n = JSON.parse(r.response)
                            } catch (e) {
                                return t(e)
                            }
                            t(null, n, r.getResponseHeader("Cache-Control"), r.getResponseHeader("Expires"))
                        } else t(new _i(r.statusText, r.status, e.url))
                    }, r.send(e.body), {
                        cancel: function() {
                            return r.abort()
                        }
                    }
                }(e, t)
            },
            Ii = function(e, t) {
                return Ai(_(e, {
                    method: "POST"
                }), t)
            },
            zi = function(e, t) {
                return Ai(_(e, {
                    method: "GET"
                }), t)
            },
            Mi = "unavailable",
            Ci = null,
            Bi = {
                applyArabicShaping: null,
                processBidirectionalText: null,
                processStyledBidirectionalText: null,
                isLoaded: function() {
                    return "loaded" === Mi || null != Bi.applyArabicShaping
                },
                isLoading: function() {
                    return "loading" === Mi
                },
                setState: function(e) {
                    Mi = e.pluginStatus, Ci = e.pluginURL
                },
                isParsed: function() {
                    return null != Bi.applyArabicShaping && null != Bi.processBidirectionalText && null != Bi.processStyledBidirectionalText
                },
                getPluginURL: function() {
                    return Ci
                }
            },
            Pi = function() {
                function e(t, r) {
                    y(this, e), this.zoom = t, r ? (this.now = r.now, this.fadeDuration = r.fadeDuration, this.zoomHistory = r.zoomHistory, this.transition = r.transition) : (this.now = 0, this.fadeDuration = 0, this.zoomHistory = new wn, this.transition = {})
                }
                return d(e, [{
                    key: "isSupportedScript",
                    value: function(e) {
                        return function(e, t) {
                            var r, n = l(e);
                            try {
                                for (n.s(); !(r = n.n()).done;) {
                                    if (!ei(r.value.charCodeAt(0), t)) return !1
                                }
                            } catch (i) {
                                n.e(i)
                            } finally {
                                n.f()
                            }
                            return !0
                        }(e, Bi.isLoaded())
                    }
                }, {
                    key: "crossFadingFactor",
                    value: function() {
                        return 0 === this.fadeDuration ? 1 : Math.min((this.now - this.zoomHistory.lastIntegerZoomTime) / this.fadeDuration, 1)
                    }
                }, {
                    key: "getCrossfadeParameters",
                    value: function() {
                        var e = this.zoom,
                            t = e - Math.floor(e),
                            r = this.crossFadingFactor();
                        return e > this.zoomHistory.lastIntegerZoom ? {
                            fromScale: 2,
                            toScale: 1,
                            t: t + (1 - t) * r
                        } : {
                            fromScale: .5,
                            toScale: 1,
                            t: 1 - (1 - r) * t
                        }
                    }
                }]), e
            }(),
            Vi = function() {
                function e(t, r) {
                    y(this, e), this.property = t, this.value = r, this.expression = function(e, t) {
                        if (Wt(e)) return new hr(e, t);
                        if (or(e)) {
                            var r = cr(e, t);
                            if ("error" === r.result) throw new Error(r.value.map((function(e) {
                                return "".concat(e.key, ": ").concat(e.message)
                            })).join(", "));
                            return r.value
                        }
                        var n = e;
                        return "string" == typeof e && "color" === t.type && (n = N.parse(e)), {
                            kind: "constant",
                            evaluate: function() {
                                return n
                            }
                        }
                    }(void 0 === r ? t.specification.default : r, t.specification)
                }
                return d(e, [{
                    key: "isDataDriven",
                    value: function() {
                        return "source" === this.expression.kind || "composite" === this.expression.kind
                    }
                }, {
                    key: "possiblyEvaluate",
                    value: function(e, t, r) {
                        return this.property.possiblyEvaluate(this, e, t, r)
                    }
                }]), e
            }(),
            Ti = function() {
                function e(t) {
                    y(this, e), this.property = t, this.value = new Vi(t, void 0)
                }
                return d(e, [{
                    key: "transitioned",
                    value: function(e, t) {
                        return new Di(this.property, this.value, t, _({}, e.transition, this.transition), e.now)
                    }
                }, {
                    key: "untransitioned",
                    value: function() {
                        return new Di(this.property, this.value, null, {}, 0)
                    }
                }]), e
            }(),
            Ei = function() {
                function e(t) {
                    y(this, e), this._properties = t, this._values = Object.create(t.defaultTransitionablePropertyValues)
                }
                return d(e, [{
                    key: "getValue",
                    value: function(e) {
                        return C(this._values[e].value.value)
                    }
                }, {
                    key: "setValue",
                    value: function(e, t) {
                        this._values.hasOwnProperty(e) || (this._values[e] = new Ti(this._values[e].property)), this._values[e].value = new Vi(this._values[e].property, null === t ? void 0 : C(t))
                    }
                }, {
                    key: "getTransition",
                    value: function(e) {
                        return C(this._values[e].transition)
                    }
                }, {
                    key: "setTransition",
                    value: function(e, t) {
                        this._values.hasOwnProperty(e) || (this._values[e] = new Ti(this._values[e].property)), this._values[e].transition = C(t) || void 0
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        for (var e = {}, t = 0, r = Object.keys(this._values); t < r.length; t++) {
                            var n = r[t],
                                i = this.getValue(n);
                            void 0 !== i && (e[n] = i);
                            var a = this.getTransition(n);
                            void 0 !== a && (e["".concat(n, "-transition")] = a)
                        }
                        return e
                    }
                }, {
                    key: "transitioned",
                    value: function(e, t) {
                        for (var r = new Fi(this._properties), n = 0, i = Object.keys(this._values); n < i.length; n++) {
                            var a = i[n];
                            r._values[a] = this._values[a].transitioned(e, t._values[a])
                        }
                        return r
                    }
                }, {
                    key: "untransitioned",
                    value: function() {
                        for (var e = new Fi(this._properties), t = 0, r = Object.keys(this._values); t < r.length; t++) {
                            var n = r[t];
                            e._values[n] = this._values[n].untransitioned()
                        }
                        return e
                    }
                }]), e
            }(),
            Di = function() {
                function e(t, r, n, i, a) {
                    y(this, e);
                    var o = i.delay || 0,
                        s = i.duration || 0;
                    a = a || 0, this.property = t, this.value = r, this.begin = a + o, this.end = this.begin + s, t.specification.transition && (i.delay || i.duration) && (this.prior = n)
                }
                return d(e, [{
                    key: "possiblyEvaluate",
                    value: function(e, t, r) {
                        var n = e.now || 0,
                            i = this.value.possiblyEvaluate(e, t, r),
                            a = this.prior;
                        if (a) {
                            if (n > this.end) return this.prior = null, i;
                            if (this.value.isDataDriven()) return this.prior = null, i;
                            if (n < this.begin) return a.possiblyEvaluate(e, t, r);
                            var o = (n - this.begin) / (this.end - this.begin);
                            return this.property.interpolate(a.possiblyEvaluate(e, t, r), i, function(e) {
                                if (e <= 0) return 0;
                                if (e >= 1) return 1;
                                var t = e * e,
                                    r = t * e;
                                return 4 * (e < .5 ? r : 3 * (e - t) + r - .75)
                            }(o))
                        }
                        return i
                    }
                }]), e
            }(),
            Fi = function() {
                function e(t) {
                    y(this, e), this._properties = t, this._values = Object.create(t.defaultTransitioningPropertyValues)
                }
                return d(e, [{
                    key: "possiblyEvaluate",
                    value: function(e, t, r) {
                        for (var n = new Ri(this._properties), i = 0, a = Object.keys(this._values); i < a.length; i++) {
                            var o = a[i];
                            n._values[o] = this._values[o].possiblyEvaluate(e, t, r)
                        }
                        return n
                    }
                }, {
                    key: "hasTransition",
                    value: function() {
                        for (var e = 0, t = Object.keys(this._values); e < t.length; e++) {
                            var r = t[e];
                            if (this._values[r].prior) return !0
                        }
                        return !1
                    }
                }]), e
            }(),
            Li = function() {
                function e(t) {
                    y(this, e), this._properties = t, this._values = Object.create(t.defaultPropertyValues)
                }
                return d(e, [{
                    key: "getValue",
                    value: function(e) {
                        return C(this._values[e].value)
                    }
                }, {
                    key: "setValue",
                    value: function(e, t) {
                        this._values[e] = new Vi(this._values[e].property, null === t ? void 0 : C(t))
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        for (var e = {}, t = 0, r = Object.keys(this._values); t < r.length; t++) {
                            var n = r[t],
                                i = this.getValue(n);
                            void 0 !== i && (e[n] = i)
                        }
                        return e
                    }
                }, {
                    key: "possiblyEvaluate",
                    value: function(e, t, r) {
                        for (var n = new Ri(this._properties), i = 0, a = Object.keys(this._values); i < a.length; i++) {
                            var o = a[i];
                            n._values[o] = this._values[o].possiblyEvaluate(e, t, r)
                        }
                        return n
                    }
                }]), e
            }(),
            Oi = function() {
                function e(t, r, n) {
                    y(this, e), this.property = t, this.value = r, this.parameters = n
                }
                return d(e, [{
                    key: "isConstant",
                    value: function() {
                        return "constant" === this.value.kind
                    }
                }, {
                    key: "constantOr",
                    value: function(e) {
                        return "constant" === this.value.kind ? this.value.value : e
                    }
                }, {
                    key: "evaluate",
                    value: function(e, t, r, n) {
                        return this.property.evaluate(this.value, this.parameters, e, t, r, n)
                    }
                }]), e
            }(),
            Ri = function() {
                function e(t) {
                    y(this, e), this._properties = t, this._values = Object.create(t.defaultPossiblyEvaluatedValues)
                }
                return d(e, [{
                    key: "get",
                    value: function(e) {
                        return this._values[e]
                    }
                }]), e
            }(),
            ji = function() {
                function e(t) {
                    y(this, e), this.specification = t
                }
                return d(e, [{
                    key: "possiblyEvaluate",
                    value: function(e, t) {
                        return e.expression.evaluate(t)
                    }
                }, {
                    key: "interpolate",
                    value: function(e, t, r) {
                        var n = tt[this.specification.type];
                        return n ? n(e, t, r) : e
                    }
                }]), e
            }(),
            Ui = function() {
                function e(t, r) {
                    y(this, e), this.specification = t, this.overrides = r
                }
                return d(e, [{
                    key: "possiblyEvaluate",
                    value: function(e, t, r, n) {
                        return new Oi(this, "constant" === e.expression.kind || "camera" === e.expression.kind ? {
                            kind: "constant",
                            value: e.expression.evaluate(t, null, {}, r, n)
                        } : e.expression, t)
                    }
                }, {
                    key: "interpolate",
                    value: function(e, t, r) {
                        if ("constant" !== e.value.kind || "constant" !== t.value.kind) return e;
                        if (void 0 === e.value.value || void 0 === t.value.value) return new Oi(this, {
                            kind: "constant",
                            value: void 0
                        }, e.parameters);
                        var n = tt[this.specification.type];
                        return n ? new Oi(this, {
                            kind: "constant",
                            value: n(e.value.value, t.value.value, r)
                        }, e.parameters) : e
                    }
                }, {
                    key: "evaluate",
                    value: function(e, t, r, n, i, a) {
                        return "constant" === e.kind ? e.value : e.evaluate(t, r, n, i, a)
                    }
                }]), e
            }(),
            qi = function(e) {
                c(r, e);
                var t = h(r);

                function r() {
                    return y(this, r), t.apply(this, arguments)
                }
                return d(r, [{
                    key: "possiblyEvaluate",
                    value: function(e, t, r, n) {
                        if (void 0 === e.value) return new Oi(this, {
                            kind: "constant",
                            value: void 0
                        }, t);
                        if ("constant" === e.expression.kind) {
                            var i = e.expression.evaluate(t, null, {}, r, n),
                                a = "resolvedImage" === e.property.specification.type && "string" != typeof i ? i.name : i,
                                o = this._calculate(a, a, a, t);
                            return new Oi(this, {
                                kind: "constant",
                                value: o
                            }, t)
                        }
                        if ("camera" === e.expression.kind) {
                            var s = this._calculate(e.expression.evaluate({
                                zoom: t.zoom - 1
                            }), e.expression.evaluate({
                                zoom: t.zoom
                            }), e.expression.evaluate({
                                zoom: t.zoom + 1
                            }), t);
                            return new Oi(this, {
                                kind: "constant",
                                value: s
                            }, t)
                        }
                        return new Oi(this, e.expression, t)
                    }
                }, {
                    key: "evaluate",
                    value: function(e, t, r, n, i, a) {
                        if ("source" === e.kind) {
                            var o = e.evaluate(t, r, n, i, a);
                            return this._calculate(o, o, o, t)
                        }
                        return "composite" === e.kind ? this._calculate(e.evaluate({
                            zoom: Math.floor(t.zoom) - 1
                        }, r, n), e.evaluate({
                            zoom: Math.floor(t.zoom)
                        }, r, n), e.evaluate({
                            zoom: Math.floor(t.zoom) + 1
                        }, r, n), t) : e.value
                    }
                }, {
                    key: "_calculate",
                    value: function(e, t, r, n) {
                        return n.zoom > n.zoomHistory.lastIntegerZoom ? {
                            from: e,
                            to: t,
                            other: r
                        } : {
                            from: r,
                            to: t,
                            other: e
                        }
                    }
                }, {
                    key: "interpolate",
                    value: function(e) {
                        return e
                    }
                }]), r
            }(Ui),
            Ni = function() {
                function e(t) {
                    y(this, e), this.specification = t
                }
                return d(e, [{
                    key: "possiblyEvaluate",
                    value: function(e, t, r, n) {
                        if (void 0 !== e.value) {
                            if ("constant" === e.expression.kind) {
                                var i = e.expression.evaluate(t, null, {}, r, n);
                                return this._calculate(i, i, i, t)
                            }
                            return this._calculate(e.expression.evaluate(new Pi(Math.floor(t.zoom - 1), t)), e.expression.evaluate(new Pi(Math.floor(t.zoom), t)), e.expression.evaluate(new Pi(Math.floor(t.zoom + 1), t)), t)
                        }
                    }
                }, {
                    key: "_calculate",
                    value: function(e, t, r, n) {
                        return n.zoom > n.zoomHistory.lastIntegerZoom ? {
                            from: e,
                            to: t
                        } : {
                            from: r,
                            to: t
                        }
                    }
                }, {
                    key: "interpolate",
                    value: function(e) {
                        return e
                    }
                }]), e
            }(),
            Zi = function() {
                function e(t) {
                    y(this, e), this.specification = t
                }
                return d(e, [{
                    key: "possiblyEvaluate",
                    value: function(e, t, r, n) {
                        return !!e.expression.evaluate(t, null, {}, r, n)
                    }
                }, {
                    key: "interpolate",
                    value: function() {
                        return !1
                    }
                }]), e
            }(),
            Xi = function e(t) {
                for (var r in y(this, e), this.properties = t, this.defaultPropertyValues = {}, this.defaultTransitionablePropertyValues = {}, this.defaultTransitioningPropertyValues = {}, this.defaultPossiblyEvaluatedValues = {}, this.overridableProperties = [], t) {
                    var n = t[r];
                    n.specification.overridable && this.overridableProperties.push(r);
                    var i = this.defaultPropertyValues[r] = new Vi(n, void 0),
                        a = this.defaultTransitionablePropertyValues[r] = new Ti(n);
                    this.defaultTransitioningPropertyValues[r] = a.untransitioned(), this.defaultPossiblyEvaluatedValues[r] = i.possiblyEvaluate({})
                }
            };

        function Gi(e, t) {
            return 256 * (e = k(Math.floor(e), 0, 255)) + k(Math.floor(t), 0, 255)
        }
        vr("DataDrivenProperty", Ui), vr("DataConstantProperty", ji), vr("CrossFadedDataDrivenProperty", qi), vr("CrossFadedProperty", Ni), vr("ColorRampProperty", Zi);
        var Yi = {
                Int8: Int8Array,
                Uint8: Uint8Array,
                Int16: Int16Array,
                Uint16: Uint16Array,
                Int32: Int32Array,
                Uint32: Uint32Array,
                Float32: Float32Array
            },
            Ki = function e(t, r) {
                y(this, e), this._structArray = t, this._pos1 = r * this.size, this._pos2 = this._pos1 / 2, this._pos4 = this._pos1 / 4, this._pos8 = this._pos1 / 8
            },
            Ji = function() {
                function e() {
                    y(this, e), this.isTransferred = !1, this.capacity = -1, this.resize(0)
                }
                return d(e, [{
                    key: "_trim",
                    value: function() {
                        this.length !== this.capacity && (this.capacity = this.length, this.arrayBuffer = this.arrayBuffer.slice(0, this.length * this.bytesPerElement), this._refreshViews())
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.length = 0
                    }
                }, {
                    key: "resize",
                    value: function(e) {
                        this.reserve(e), this.length = e
                    }
                }, {
                    key: "reserve",
                    value: function(e) {
                        if (e > this.capacity) {
                            this.capacity = Math.max(e, Math.floor(5 * this.capacity), 128), this.arrayBuffer = new ArrayBuffer(this.capacity * this.bytesPerElement);
                            var t = this.uint8;
                            this._refreshViews(), t && this.uint8.set(t)
                        }
                    }
                }, {
                    key: "_refreshViews",
                    value: function() {
                        throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")
                    }
                }], [{
                    key: "serialize",
                    value: function(e, t) {
                        return e._trim(), t && (e.isTransferred = !0, t.push(e.arrayBuffer)), {
                            length: e.length,
                            arrayBuffer: e.arrayBuffer
                        }
                    }
                }, {
                    key: "deserialize",
                    value: function(e) {
                        var t = Object.create(this.prototype);
                        return t.arrayBuffer = e.arrayBuffer, t.length = e.length, t.capacity = e.arrayBuffer.byteLength / t.bytesPerElement, t._refreshViews(), t
                    }
                }]), e
            }();

        function Hi(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                r = 0,
                n = 0;
            return {
                members: e.map((function(e) {
                    var i = Yi[e.type].BYTES_PER_ELEMENT,
                        a = r = Wi(r, Math.max(t, i)),
                        o = e.components || 1;
                    return n = Math.max(n, i), r += i * o, {
                        name: e.name,
                        type: e.type,
                        components: o,
                        offset: a
                    }
                })),
                size: Wi(r, Math.max(n, t)),
                alignment: t
            }
        }

        function Wi(e, t) {
            return Math.ceil(e / t) * t
        }
        var $i = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t) {
                    var r = this.length;
                    return this.resize(r + 1), this.emplace(r, e, t)
                }
            }, {
                key: "emplace",
                value: function(e, t, r) {
                    var n = 2 * e;
                    return this.int16[n + 0] = t, this.int16[n + 1] = r, e
                }
            }]), r
        }(Ji);
        $i.prototype.bytesPerElement = 4, vr("StructArrayLayout2i4", $i);
        var Qi = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n) {
                    var i = this.length;
                    return this.resize(i + 1), this.emplace(i, e, t, r, n)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i) {
                    var a = 4 * e;
                    return this.int16[a + 0] = t, this.int16[a + 1] = r, this.int16[a + 2] = n, this.int16[a + 3] = i, e
                }
            }]), r
        }(Ji);
        Qi.prototype.bytesPerElement = 8, vr("StructArrayLayout4i8", Qi);
        var ea = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i, a, o) {
                    var s = this.length;
                    return this.resize(s + 1), this.emplace(s, e, t, r, n, i, a, o)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a, o, s) {
                    var u = 6 * e,
                        l = 12 * e,
                        c = 3 * e;
                    return this.int16[u + 0] = t, this.int16[u + 1] = r, this.uint8[l + 4] = n, this.uint8[l + 5] = i, this.uint8[l + 6] = a, this.uint8[l + 7] = o, this.float32[c + 2] = s, e
                }
            }]), r
        }(Ji);
        ea.prototype.bytesPerElement = 12, vr("StructArrayLayout2i4ub1f12", ea);
        var ta = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r) {
                    var n = this.length;
                    return this.resize(n + 1), this.emplace(n, e, t, r)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n) {
                    var i = 3 * e;
                    return this.float32[i + 0] = t, this.float32[i + 1] = r, this.float32[i + 2] = n, e
                }
            }]), r
        }(Ji);
        ta.prototype.bytesPerElement = 12, vr("StructArrayLayout3f12", ta);
        var ra = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i, a, o, s, u, l) {
                    var c = this.length;
                    return this.resize(c + 1), this.emplace(c, e, t, r, n, i, a, o, s, u, l)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a, o, s, u, l, c) {
                    var h = 10 * e;
                    return this.uint16[h + 0] = t, this.uint16[h + 1] = r, this.uint16[h + 2] = n, this.uint16[h + 3] = i, this.uint16[h + 4] = a, this.uint16[h + 5] = o, this.uint16[h + 6] = s, this.uint16[h + 7] = u, this.uint16[h + 8] = l, this.uint16[h + 9] = c, e
                }
            }]), r
        }(Ji);
        ra.prototype.bytesPerElement = 20, vr("StructArrayLayout10ui20", ra);
        var na = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i, a, o, s) {
                    var u = this.length;
                    return this.resize(u + 1), this.emplace(u, e, t, r, n, i, a, o, s)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a, o, s, u) {
                    var l = 8 * e;
                    return this.uint16[l + 0] = t, this.uint16[l + 1] = r, this.uint16[l + 2] = n, this.uint16[l + 3] = i, this.uint16[l + 4] = a, this.uint16[l + 5] = o, this.uint16[l + 6] = s, this.uint16[l + 7] = u, e
                }
            }]), r
        }(Ji);
        na.prototype.bytesPerElement = 16, vr("StructArrayLayout8ui16", na);
        var ia = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d) {
                    var v = this.length;
                    return this.resize(v + 1), this.emplace(v, e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d, v) {
                    var m = 16 * e;
                    return this.int16[m + 0] = t, this.int16[m + 1] = r, this.int16[m + 2] = n, this.int16[m + 3] = i, this.uint16[m + 4] = a, this.uint16[m + 5] = o, this.uint16[m + 6] = s, this.uint16[m + 7] = u, this.int16[m + 8] = l, this.int16[m + 9] = c, this.int16[m + 10] = h, this.int16[m + 11] = f, this.int16[m + 12] = p, this.int16[m + 13] = y, this.int16[m + 14] = d, this.int16[m + 15] = v, e
                }
            }]), r
        }(Ji);
        ia.prototype.bytesPerElement = 32, vr("StructArrayLayout4i4ui4i4i32", ia);
        var aa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e) {
                    var t = this.length;
                    return this.resize(t + 1), this.emplace(t, e)
                }
            }, {
                key: "emplace",
                value: function(e, t) {
                    return this.uint32[1 * e + 0] = t, e
                }
            }]), r
        }(Ji);
        aa.prototype.bytesPerElement = 4, vr("StructArrayLayout1ul4", aa);
        var oa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f) {
                    var p = this.length;
                    return this.resize(p + 1), this.emplace(p, e, t, r, n, i, a, o, s, u, l, c, h, f)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f, p) {
                    var y = 20 * e,
                        d = 10 * e;
                    return this.int16[y + 0] = t, this.int16[y + 1] = r, this.int16[y + 2] = n, this.int16[y + 3] = i, this.int16[y + 4] = a, this.float32[d + 3] = o, this.float32[d + 4] = s, this.float32[d + 5] = u, this.float32[d + 6] = l, this.int16[y + 14] = c, this.uint32[d + 8] = h, this.uint16[y + 18] = f, this.uint16[y + 19] = p, e
                }
            }]), r
        }(Ji);
        oa.prototype.bytesPerElement = 40, vr("StructArrayLayout5i4f1i1ul2ui40", oa);
        var sa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i, a, o) {
                    var s = this.length;
                    return this.resize(s + 1), this.emplace(s, e, t, r, n, i, a, o)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a, o, s) {
                    var u = 8 * e;
                    return this.int16[u + 0] = t, this.int16[u + 1] = r, this.int16[u + 2] = n, this.int16[u + 4] = i, this.int16[u + 5] = a, this.int16[u + 6] = o, this.int16[u + 7] = s, e
                }
            }]), r
        }(Ji);
        sa.prototype.bytesPerElement = 16, vr("StructArrayLayout3i2i2i16", sa);
        var ua = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i) {
                    var a = this.length;
                    return this.resize(a + 1), this.emplace(a, e, t, r, n, i)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a) {
                    var o = 4 * e,
                        s = 8 * e;
                    return this.float32[o + 0] = t, this.float32[o + 1] = r, this.float32[o + 2] = n, this.int16[s + 6] = i, this.int16[s + 7] = a, e
                }
            }]), r
        }(Ji);
        ua.prototype.bytesPerElement = 16, vr("StructArrayLayout2f1f2i16", ua);
        var la = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n) {
                    var i = this.length;
                    return this.resize(i + 1), this.emplace(i, e, t, r, n)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i) {
                    var a = 12 * e,
                        o = 3 * e;
                    return this.uint8[a + 0] = t, this.uint8[a + 1] = r, this.float32[o + 1] = n, this.float32[o + 2] = i, e
                }
            }]), r
        }(Ji);
        la.prototype.bytesPerElement = 12, vr("StructArrayLayout2ub2f12", la);
        var ca = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r) {
                    var n = this.length;
                    return this.resize(n + 1), this.emplace(n, e, t, r)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n) {
                    var i = 3 * e;
                    return this.uint16[i + 0] = t, this.uint16[i + 1] = r, this.uint16[i + 2] = n, e
                }
            }]), r
        }(Ji);
        ca.prototype.bytesPerElement = 6, vr("StructArrayLayout3ui6", ca);
        var ha = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d, v, m, g, x, b) {
                    var k = this.length;
                    return this.resize(k + 1), this.emplace(k, e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d, v, m, g, x, b)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d, v, m, g, x, b, k) {
                    var w = 30 * e,
                        _ = 15 * e,
                        S = 60 * e;
                    return this.int16[w + 0] = t, this.int16[w + 1] = r, this.int16[w + 2] = n, this.float32[_ + 2] = i, this.float32[_ + 3] = a, this.uint16[w + 8] = o, this.uint16[w + 9] = s, this.uint32[_ + 5] = u, this.uint32[_ + 6] = l, this.uint32[_ + 7] = c, this.uint16[w + 16] = h, this.uint16[w + 17] = f, this.uint16[w + 18] = p, this.float32[_ + 10] = y, this.float32[_ + 11] = d, this.uint8[S + 48] = v, this.uint8[S + 49] = m, this.uint8[S + 50] = g, this.uint32[_ + 13] = x, this.int16[w + 28] = b, this.uint8[S + 58] = k, e
                }
            }]), r
        }(Ji);
        ha.prototype.bytesPerElement = 60, vr("StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60", ha);
        var fa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d, v, m, g, x, b, k, w, _, S, A, I, z, M, C) {
                    var B = this.length;
                    return this.resize(B + 1), this.emplace(B, e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d, v, m, g, x, b, k, w, _, S, A, I, z, M, C)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d, v, m, g, x, b, k, w, _, S, A, I, z, M, C, B) {
                    var P = 38 * e,
                        V = 19 * e;
                    return this.int16[P + 0] = t, this.int16[P + 1] = r, this.int16[P + 2] = n, this.float32[V + 2] = i, this.float32[V + 3] = a, this.int16[P + 8] = o, this.int16[P + 9] = s, this.int16[P + 10] = u, this.int16[P + 11] = l, this.int16[P + 12] = c, this.int16[P + 13] = h, this.uint16[P + 14] = f, this.uint16[P + 15] = p, this.uint16[P + 16] = y, this.uint16[P + 17] = d, this.uint16[P + 18] = v, this.uint16[P + 19] = m, this.uint16[P + 20] = g, this.uint16[P + 21] = x, this.uint16[P + 22] = b, this.uint16[P + 23] = k, this.uint16[P + 24] = w, this.uint16[P + 25] = _, this.uint16[P + 26] = S, this.uint16[P + 27] = A, this.uint16[P + 28] = I, this.uint32[V + 15] = z, this.float32[V + 16] = M, this.float32[V + 17] = C, this.float32[V + 18] = B, e
                }
            }]), r
        }(Ji);
        fa.prototype.bytesPerElement = 76, vr("StructArrayLayout3i2f6i15ui1ul3f76", fa);
        var pa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e) {
                    var t = this.length;
                    return this.resize(t + 1), this.emplace(t, e)
                }
            }, {
                key: "emplace",
                value: function(e, t) {
                    return this.float32[1 * e + 0] = t, e
                }
            }]), r
        }(Ji);
        pa.prototype.bytesPerElement = 4, vr("StructArrayLayout1f4", pa);
        var ya = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r) {
                    var n = this.length;
                    return this.resize(n + 1), this.emplace(n, e, t, r)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n) {
                    var i = 3 * e;
                    return this.int16[i + 0] = t, this.int16[i + 1] = r, this.int16[i + 2] = n, e
                }
            }]), r
        }(Ji);
        ya.prototype.bytesPerElement = 6, vr("StructArrayLayout3i6", ya);
        var da = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n) {
                    var i = this.length;
                    return this.resize(i + 1), this.emplace(i, e, t, r, n)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i) {
                    var a = 6 * e;
                    return this.uint32[3 * e + 0] = t, this.uint16[a + 2] = r, this.uint16[a + 3] = n, this.uint16[a + 4] = i, e
                }
            }]), r
        }(Ji);
        da.prototype.bytesPerElement = 12, vr("StructArrayLayout1ul3ui12", da);
        var va = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t) {
                    var r = this.length;
                    return this.resize(r + 1), this.emplace(r, e, t)
                }
            }, {
                key: "emplace",
                value: function(e, t, r) {
                    var n = 2 * e;
                    return this.uint16[n + 0] = t, this.uint16[n + 1] = r, e
                }
            }]), r
        }(Ji);
        va.prototype.bytesPerElement = 4, vr("StructArrayLayout2ui4", va);
        var ma = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e) {
                    var t = this.length;
                    return this.resize(t + 1), this.emplace(t, e)
                }
            }, {
                key: "emplace",
                value: function(e, t) {
                    return this.uint16[1 * e + 0] = t, e
                }
            }]), r
        }(Ji);
        ma.prototype.bytesPerElement = 2, vr("StructArrayLayout1ui2", ma);
        var ga = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n, i) {
                    var a = this.length;
                    return this.resize(a + 1), this.emplace(a, e, t, r, n, i)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i, a) {
                    var o = 5 * e;
                    return this.float32[o + 0] = t, this.float32[o + 1] = r, this.float32[o + 2] = n, this.float32[o + 3] = i, this.float32[o + 4] = a, e
                }
            }]), r
        }(Ji);
        ga.prototype.bytesPerElement = 20, vr("StructArrayLayout5f20", ga);
        var xa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t) {
                    var r = this.length;
                    return this.resize(r + 1), this.emplace(r, e, t)
                }
            }, {
                key: "emplace",
                value: function(e, t, r) {
                    var n = 2 * e;
                    return this.float32[n + 0] = t, this.float32[n + 1] = r, e
                }
            }]), r
        }(Ji);
        xa.prototype.bytesPerElement = 8, vr("StructArrayLayout2f8", xa);
        var ba = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "_refreshViews",
                value: function() {
                    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer)
                }
            }, {
                key: "emplaceBack",
                value: function(e, t, r, n) {
                    var i = this.length;
                    return this.resize(i + 1), this.emplace(i, e, t, r, n)
                }
            }, {
                key: "emplace",
                value: function(e, t, r, n, i) {
                    var a = 4 * e;
                    return this.float32[a + 0] = t, this.float32[a + 1] = r, this.float32[a + 2] = n, this.float32[a + 3] = i, e
                }
            }]), r
        }(Ji);
        ba.prototype.bytesPerElement = 16, vr("StructArrayLayout4f16", ba);
        var ka = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "projectedAnchorX",
                get: function() {
                    return this._structArray.int16[this._pos2 + 0]
                }
            }, {
                key: "projectedAnchorY",
                get: function() {
                    return this._structArray.int16[this._pos2 + 1]
                }
            }, {
                key: "projectedAnchorZ",
                get: function() {
                    return this._structArray.int16[this._pos2 + 2]
                }
            }, {
                key: "tileAnchorX",
                get: function() {
                    return this._structArray.int16[this._pos2 + 3]
                }
            }, {
                key: "tileAnchorY",
                get: function() {
                    return this._structArray.int16[this._pos2 + 4]
                }
            }, {
                key: "x1",
                get: function() {
                    return this._structArray.float32[this._pos4 + 3]
                }
            }, {
                key: "y1",
                get: function() {
                    return this._structArray.float32[this._pos4 + 4]
                }
            }, {
                key: "x2",
                get: function() {
                    return this._structArray.float32[this._pos4 + 5]
                }
            }, {
                key: "y2",
                get: function() {
                    return this._structArray.float32[this._pos4 + 6]
                }
            }, {
                key: "padding",
                get: function() {
                    return this._structArray.int16[this._pos2 + 14]
                }
            }, {
                key: "featureIndex",
                get: function() {
                    return this._structArray.uint32[this._pos4 + 8]
                }
            }, {
                key: "sourceLayerIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 18]
                }
            }, {
                key: "bucketIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 19]
                }
            }]), r
        }(Ki);
        ka.prototype.size = 40;
        var wa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "get",
                value: function(e) {
                    return new ka(this, e)
                }
            }]), r
        }(oa);
        vr("CollisionBoxArray", wa);
        var _a = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "projectedAnchorX",
                get: function() {
                    return this._structArray.int16[this._pos2 + 0]
                }
            }, {
                key: "projectedAnchorY",
                get: function() {
                    return this._structArray.int16[this._pos2 + 1]
                }
            }, {
                key: "projectedAnchorZ",
                get: function() {
                    return this._structArray.int16[this._pos2 + 2]
                }
            }, {
                key: "tileAnchorX",
                get: function() {
                    return this._structArray.float32[this._pos4 + 2]
                }
            }, {
                key: "tileAnchorY",
                get: function() {
                    return this._structArray.float32[this._pos4 + 3]
                }
            }, {
                key: "glyphStartIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 8]
                }
            }, {
                key: "numGlyphs",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 9]
                }
            }, {
                key: "vertexStartIndex",
                get: function() {
                    return this._structArray.uint32[this._pos4 + 5]
                }
            }, {
                key: "lineStartIndex",
                get: function() {
                    return this._structArray.uint32[this._pos4 + 6]
                }
            }, {
                key: "lineLength",
                get: function() {
                    return this._structArray.uint32[this._pos4 + 7]
                }
            }, {
                key: "segment",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 16]
                }
            }, {
                key: "lowerSize",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 17]
                }
            }, {
                key: "upperSize",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 18]
                }
            }, {
                key: "lineOffsetX",
                get: function() {
                    return this._structArray.float32[this._pos4 + 10]
                }
            }, {
                key: "lineOffsetY",
                get: function() {
                    return this._structArray.float32[this._pos4 + 11]
                }
            }, {
                key: "writingMode",
                get: function() {
                    return this._structArray.uint8[this._pos1 + 48]
                }
            }, {
                key: "placedOrientation",
                get: function() {
                    return this._structArray.uint8[this._pos1 + 49]
                },
                set: function(e) {
                    this._structArray.uint8[this._pos1 + 49] = e
                }
            }, {
                key: "hidden",
                get: function() {
                    return this._structArray.uint8[this._pos1 + 50]
                },
                set: function(e) {
                    this._structArray.uint8[this._pos1 + 50] = e
                }
            }, {
                key: "crossTileID",
                get: function() {
                    return this._structArray.uint32[this._pos4 + 13]
                },
                set: function(e) {
                    this._structArray.uint32[this._pos4 + 13] = e
                }
            }, {
                key: "associatedIconIndex",
                get: function() {
                    return this._structArray.int16[this._pos2 + 28]
                }
            }, {
                key: "flipState",
                get: function() {
                    return this._structArray.uint8[this._pos1 + 58]
                },
                set: function(e) {
                    this._structArray.uint8[this._pos1 + 58] = e
                }
            }]), r
        }(Ki);
        _a.prototype.size = 60;
        var Sa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "get",
                value: function(e) {
                    return new _a(this, e)
                }
            }]), r
        }(ha);
        vr("PlacedSymbolArray", Sa);
        var Aa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "projectedAnchorX",
                get: function() {
                    return this._structArray.int16[this._pos2 + 0]
                }
            }, {
                key: "projectedAnchorY",
                get: function() {
                    return this._structArray.int16[this._pos2 + 1]
                }
            }, {
                key: "projectedAnchorZ",
                get: function() {
                    return this._structArray.int16[this._pos2 + 2]
                }
            }, {
                key: "tileAnchorX",
                get: function() {
                    return this._structArray.float32[this._pos4 + 2]
                }
            }, {
                key: "tileAnchorY",
                get: function() {
                    return this._structArray.float32[this._pos4 + 3]
                }
            }, {
                key: "rightJustifiedTextSymbolIndex",
                get: function() {
                    return this._structArray.int16[this._pos2 + 8]
                }
            }, {
                key: "centerJustifiedTextSymbolIndex",
                get: function() {
                    return this._structArray.int16[this._pos2 + 9]
                }
            }, {
                key: "leftJustifiedTextSymbolIndex",
                get: function() {
                    return this._structArray.int16[this._pos2 + 10]
                }
            }, {
                key: "verticalPlacedTextSymbolIndex",
                get: function() {
                    return this._structArray.int16[this._pos2 + 11]
                }
            }, {
                key: "placedIconSymbolIndex",
                get: function() {
                    return this._structArray.int16[this._pos2 + 12]
                }
            }, {
                key: "verticalPlacedIconSymbolIndex",
                get: function() {
                    return this._structArray.int16[this._pos2 + 13]
                }
            }, {
                key: "key",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 14]
                }
            }, {
                key: "textBoxStartIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 15]
                }
            }, {
                key: "textBoxEndIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 16]
                }
            }, {
                key: "verticalTextBoxStartIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 17]
                }
            }, {
                key: "verticalTextBoxEndIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 18]
                }
            }, {
                key: "iconBoxStartIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 19]
                }
            }, {
                key: "iconBoxEndIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 20]
                }
            }, {
                key: "verticalIconBoxStartIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 21]
                }
            }, {
                key: "verticalIconBoxEndIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 22]
                }
            }, {
                key: "featureIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 23]
                }
            }, {
                key: "numHorizontalGlyphVertices",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 24]
                }
            }, {
                key: "numVerticalGlyphVertices",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 25]
                }
            }, {
                key: "numIconVertices",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 26]
                }
            }, {
                key: "numVerticalIconVertices",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 27]
                }
            }, {
                key: "useRuntimeCollisionCircles",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 28]
                }
            }, {
                key: "crossTileID",
                get: function() {
                    return this._structArray.uint32[this._pos4 + 15]
                },
                set: function(e) {
                    this._structArray.uint32[this._pos4 + 15] = e
                }
            }, {
                key: "textOffset0",
                get: function() {
                    return this._structArray.float32[this._pos4 + 16]
                }
            }, {
                key: "textOffset1",
                get: function() {
                    return this._structArray.float32[this._pos4 + 17]
                }
            }, {
                key: "collisionCircleDiameter",
                get: function() {
                    return this._structArray.float32[this._pos4 + 18]
                }
            }]), r
        }(Ki);
        Aa.prototype.size = 76;
        var Ia = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "get",
                value: function(e) {
                    return new Aa(this, e)
                }
            }]), r
        }(fa);
        vr("SymbolInstanceArray", Ia);
        var za = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "getoffsetX",
                value: function(e) {
                    return this.float32[1 * e + 0]
                }
            }]), r
        }(pa);
        vr("GlyphOffsetArray", za);
        var Ma = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "getx",
                value: function(e) {
                    return this.int16[3 * e + 0]
                }
            }, {
                key: "gety",
                value: function(e) {
                    return this.int16[3 * e + 1]
                }
            }, {
                key: "gettileUnitDistanceFromAnchor",
                value: function(e) {
                    return this.int16[3 * e + 2]
                }
            }]), r
        }(ya);
        vr("SymbolLineVertexArray", Ma);
        var Ca = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "featureIndex",
                get: function() {
                    return this._structArray.uint32[this._pos4 + 0]
                }
            }, {
                key: "sourceLayerIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 2]
                }
            }, {
                key: "bucketIndex",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 3]
                }
            }, {
                key: "layoutVertexArrayOffset",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 4]
                }
            }]), r
        }(Ki);
        Ca.prototype.size = 12;
        var Ba = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "get",
                value: function(e) {
                    return new Ca(this, e)
                }
            }]), r
        }(da);
        vr("FeatureIndexArray", Ba);
        var Pa = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "a_centroid_pos0",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 0]
                }
            }, {
                key: "a_centroid_pos1",
                get: function() {
                    return this._structArray.uint16[this._pos2 + 1]
                }
            }]), r
        }(Ki);
        Pa.prototype.size = 4;
        var Va = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return d(r, [{
                key: "get",
                value: function(e) {
                    return new Pa(this, e)
                }
            }]), r
        }(va);
        vr("FillExtrusionCentroidArray", Va);
        var Ta = Hi([{
                name: "a_pattern_to",
                components: 4,
                type: "Uint16"
            }, {
                name: "a_pattern_from",
                components: 4,
                type: "Uint16"
            }, {
                name: "a_pixel_ratio_to",
                components: 1,
                type: "Uint16"
            }, {
                name: "a_pixel_ratio_from",
                components: 1,
                type: "Uint16"
            }]),
            Ea = Hi([{
                name: "a_dash_to",
                components: 4,
                type: "Uint16"
            }, {
                name: "a_dash_from",
                components: 4,
                type: "Uint16"
            }]),
            Da = U((function(e) {
                e.exports = function(e, t) {
                    var r, n, i, a, o, s, u, l;
                    for (n = e.length - (r = 3 & e.length), i = t, o = 3432918353, s = 461845907, l = 0; l < n;) u = 255 & e.charCodeAt(l) | (255 & e.charCodeAt(++l)) << 8 | (255 & e.charCodeAt(++l)) << 16 | (255 & e.charCodeAt(++l)) << 24, ++l, i = 27492 + (65535 & (a = 5 * (65535 & (i = (i ^= u = (65535 & (u = (u = (65535 & u) * o + (((u >>> 16) * o & 65535) << 16) & 4294967295) << 15 | u >>> 17)) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295) << 13 | i >>> 19)) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (a >>> 16) & 65535) << 16);
                    switch (u = 0, r) {
                        case 3:
                            u ^= (255 & e.charCodeAt(l + 2)) << 16;
                        case 2:
                            u ^= (255 & e.charCodeAt(l + 1)) << 8;
                        case 1:
                            i ^= u = (65535 & (u = (u = (65535 & (u ^= 255 & e.charCodeAt(l))) * o + (((u >>> 16) * o & 65535) << 16) & 4294967295) << 15 | u >>> 17)) * s + (((u >>> 16) * s & 65535) << 16) & 4294967295
                    }
                    return i ^= e.length, i = 2246822507 * (65535 & (i ^= i >>> 16)) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i = 3266489909 * (65535 & (i ^= i >>> 13)) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, (i ^= i >>> 16) >>> 0
                }
            })),
            Fa = U((function(e) {
                e.exports = function(e, t) {
                    for (var r, n = e.length, i = t ^ n, a = 0; n >= 4;) r = 1540483477 * (65535 & (r = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24)) + ((1540483477 * (r >>> 16) & 65535) << 16), i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ (r = 1540483477 * (65535 & (r ^= r >>> 24)) + ((1540483477 * (r >>> 16) & 65535) << 16)), n -= 4, ++a;
                    switch (n) {
                        case 3:
                            i ^= (255 & e.charCodeAt(a + 2)) << 16;
                        case 2:
                            i ^= (255 & e.charCodeAt(a + 1)) << 8;
                        case 1:
                            i = 1540483477 * (65535 & (i ^= 255 & e.charCodeAt(a))) + ((1540483477 * (i >>> 16) & 65535) << 16)
                    }
                    return i = 1540483477 * (65535 & (i ^= i >>> 13)) + ((1540483477 * (i >>> 16) & 65535) << 16), (i ^= i >>> 15) >>> 0
                }
            })),
            La = Da,
            Oa = Fa;
        La.murmur3 = Da, La.murmur2 = Oa;
        var Ra = function() {
            function e() {
                y(this, e), this.ids = [], this.positions = [], this.indexed = !1
            }
            return d(e, [{
                key: "add",
                value: function(e, t, r, n) {
                    this.ids.push(ja(e)), this.positions.push(t, r, n)
                }
            }, {
                key: "getPositions",
                value: function(e) {
                    for (var t = ja(e), r = 0, n = this.ids.length - 1; r < n;) {
                        var i = r + n >> 1;
                        this.ids[i] >= t ? n = i : r = i + 1
                    }
                    for (var a = []; this.ids[r] === t;) a.push({
                        index: this.positions[3 * r],
                        start: this.positions[3 * r + 1],
                        end: this.positions[3 * r + 2]
                    }), r++;
                    return a
                }
            }], [{
                key: "serialize",
                value: function(e, t) {
                    var r = new Float64Array(e.ids),
                        n = new Uint32Array(e.positions);
                    return Ua(r, n, 0, r.length - 1), t && t.push(r.buffer, n.buffer), {
                        ids: r,
                        positions: n
                    }
                }
            }, {
                key: "deserialize",
                value: function(t) {
                    var r = new e;
                    return r.ids = t.ids, r.positions = t.positions, r.indexed = !0, r
                }
            }]), e
        }();

        function ja(e) {
            var t = +e;
            return !isNaN(t) && t <= g ? t : La(String(e))
        }

        function Ua(e, t, r, n) {
            for (; r < n;) {
                for (var i = e[r + n >> 1], a = r - 1, o = n + 1;;) {
                    do {
                        a++
                    } while (e[a] < i);
                    do {
                        o--
                    } while (e[o] > i);
                    if (a >= o) break;
                    qa(e, a, o), qa(t, 3 * a, 3 * o), qa(t, 3 * a + 1, 3 * o + 1), qa(t, 3 * a + 2, 3 * o + 2)
                }
                o - r < n - o ? (Ua(e, t, r, o), r = o + 1) : (Ua(e, t, o + 1, n), n = o)
            }
        }

        function qa(e, t, r) {
            var n = e[t];
            e[t] = e[r], e[r] = n
        }
        vr("FeaturePositionMap", Ra);
        var Na = function e(t, r) {
                y(this, e), this.gl = t.gl, this.location = r
            },
            Za = function(e) {
                c(r, e);
                var t = h(r);

                function r(e, n) {
                    var i;
                    return y(this, r), (i = t.call(this, e, n)).current = 0, i
                }
                return d(r, [{
                    key: "set",
                    value: function(e) {
                        this.current !== e && (this.current = e, this.gl.uniform1f(this.location, e))
                    }
                }]), r
            }(Na),
            Xa = function(e) {
                c(r, e);
                var t = h(r);

                function r(e, n) {
                    var i;
                    return y(this, r), (i = t.call(this, e, n)).current = [0, 0, 0, 0], i
                }
                return d(r, [{
                    key: "set",
                    value: function(e) {
                        e[0] === this.current[0] && e[1] === this.current[1] && e[2] === this.current[2] && e[3] === this.current[3] || (this.current = e, this.gl.uniform4f(this.location, e[0], e[1], e[2], e[3]))
                    }
                }]), r
            }(Na),
            Ga = function(e) {
                c(r, e);
                var t = h(r);

                function r(e, n) {
                    var i;
                    return y(this, r), (i = t.call(this, e, n)).current = N.transparent, i
                }
                return d(r, [{
                    key: "set",
                    value: function(e) {
                        e.r === this.current.r && e.g === this.current.g && e.b === this.current.b && e.a === this.current.a || (this.current = e, this.gl.uniform4f(this.location, e.r, e.g, e.b, e.a))
                    }
                }]), r
            }(Na);

        function Ya(e) {
            return [Gi(255 * e.r, 255 * e.g), Gi(255 * e.b, 255 * e.a)]
        }
        var Ka = function() {
                function e(t, r, n) {
                    y(this, e), this.value = t, this.uniformNames = r.map((function(e) {
                        return "u_".concat(e)
                    })), this.type = n
                }
                return d(e, [{
                    key: "setUniform",
                    value: function(e, t, r) {
                        e.set(r.constantOr(this.value))
                    }
                }, {
                    key: "getBinding",
                    value: function(e, t, r) {
                        return "color" === this.type ? new Ga(e, t) : new Za(e, t)
                    }
                }]), e
            }(),
            Ja = function() {
                function e(t, r) {
                    y(this, e), this.uniformNames = r.map((function(e) {
                        return "u_".concat(e)
                    })), this.patternFrom = null, this.patternTo = null, this.pixelRatioFrom = 1, this.pixelRatioTo = 1
                }
                return d(e, [{
                    key: "setConstantPatternPositions",
                    value: function(e, t) {
                        this.pixelRatioFrom = t.pixelRatio, this.pixelRatioTo = e.pixelRatio, this.patternFrom = t.tl.concat(t.br), this.patternTo = e.tl.concat(e.br)
                    }
                }, {
                    key: "setUniform",
                    value: function(e, t, r, n) {
                        var i = "u_pattern_to" === n || "u_dash_to" === n ? this.patternTo : "u_pattern_from" === n || "u_dash_from" === n ? this.patternFrom : "u_pixel_ratio_to" === n ? this.pixelRatioTo : "u_pixel_ratio_from" === n ? this.pixelRatioFrom : null;
                        i && e.set(i)
                    }
                }, {
                    key: "getBinding",
                    value: function(e, t, r) {
                        return "u_pattern_from" === r || "u_pattern_to" === r || "u_dash_from" === r || "u_dash_to" === r ? new Xa(e, t) : new Za(e, t)
                    }
                }]), e
            }(),
            Ha = function() {
                function e(t, r, n, i) {
                    y(this, e), this.expression = t, this.type = n, this.maxValue = 0, this.paintVertexAttributes = r.map((function(e) {
                        return {
                            name: "a_".concat(e),
                            type: "Float32",
                            components: "color" === n ? 2 : 1,
                            offset: 0
                        }
                    })), this.paintVertexArray = new i
                }
                return d(e, [{
                    key: "populatePaintArray",
                    value: function(e, t, r, n, i) {
                        var a = this.paintVertexArray.length,
                            o = this.expression.evaluate(new Pi(0), t, {}, n, [], i);
                        this.paintVertexArray.resize(e), this._setPaintValue(a, e, o)
                    }
                }, {
                    key: "updatePaintArray",
                    value: function(e, t, r, n) {
                        var i = this.expression.evaluate({
                            zoom: 0
                        }, r, n);
                        this._setPaintValue(e, t, i)
                    }
                }, {
                    key: "_setPaintValue",
                    value: function(e, t, r) {
                        if ("color" === this.type)
                            for (var n = Ya(r), i = e; i < t; i++) this.paintVertexArray.emplace(i, n[0], n[1]);
                        else {
                            for (var a = e; a < t; a++) this.paintVertexArray.emplace(a, r);
                            this.maxValue = Math.max(this.maxValue, Math.abs(r))
                        }
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        this.paintVertexArray && this.paintVertexArray.arrayBuffer && (this.paintVertexBuffer && this.paintVertexBuffer.buffer ? this.paintVertexBuffer.updateData(this.paintVertexArray) : this.paintVertexBuffer = e.createVertexBuffer(this.paintVertexArray, this.paintVertexAttributes, this.expression.isStateDependent))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.paintVertexBuffer && this.paintVertexBuffer.destroy()
                    }
                }]), e
            }(),
            Wa = function() {
                function e(t, r, n, i, a, o) {
                    y(this, e), this.expression = t, this.uniformNames = r.map((function(e) {
                        return "u_".concat(e, "_t")
                    })), this.type = n, this.useIntegerZoom = i, this.zoom = a, this.maxValue = 0, this.paintVertexAttributes = r.map((function(e) {
                        return {
                            name: "a_".concat(e),
                            type: "Float32",
                            components: "color" === n ? 4 : 2,
                            offset: 0
                        }
                    })), this.paintVertexArray = new o
                }
                return d(e, [{
                    key: "populatePaintArray",
                    value: function(e, t, r, n, i) {
                        var a = this.expression.evaluate(new Pi(this.zoom), t, {}, n, [], i),
                            o = this.expression.evaluate(new Pi(this.zoom + 1), t, {}, n, [], i),
                            s = this.paintVertexArray.length;
                        this.paintVertexArray.resize(e), this._setPaintValue(s, e, a, o)
                    }
                }, {
                    key: "updatePaintArray",
                    value: function(e, t, r, n) {
                        var i = this.expression.evaluate({
                                zoom: this.zoom
                            }, r, n),
                            a = this.expression.evaluate({
                                zoom: this.zoom + 1
                            }, r, n);
                        this._setPaintValue(e, t, i, a)
                    }
                }, {
                    key: "_setPaintValue",
                    value: function(e, t, r, n) {
                        if ("color" === this.type)
                            for (var i = Ya(r), a = Ya(n), o = e; o < t; o++) this.paintVertexArray.emplace(o, i[0], i[1], a[0], a[1]);
                        else {
                            for (var s = e; s < t; s++) this.paintVertexArray.emplace(s, r, n);
                            this.maxValue = Math.max(this.maxValue, Math.abs(r), Math.abs(n))
                        }
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        this.paintVertexArray && this.paintVertexArray.arrayBuffer && (this.paintVertexBuffer && this.paintVertexBuffer.buffer ? this.paintVertexBuffer.updateData(this.paintVertexArray) : this.paintVertexBuffer = e.createVertexBuffer(this.paintVertexArray, this.paintVertexAttributes, this.expression.isStateDependent))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.paintVertexBuffer && this.paintVertexBuffer.destroy()
                    }
                }, {
                    key: "setUniform",
                    value: function(e, t) {
                        var r = this.useIntegerZoom ? Math.floor(t.zoom) : t.zoom,
                            n = k(this.expression.interpolationFactor(r, this.zoom, this.zoom + 1), 0, 1);
                        e.set(n)
                    }
                }, {
                    key: "getBinding",
                    value: function(e, t, r) {
                        return new Za(e, t)
                    }
                }]), e
            }(),
            $a = function() {
                function e(t, r, n, i, a, o, s) {
                    y(this, e), this.expression = t, this.type = n, this.useIntegerZoom = i, this.zoom = a, this.layerId = s, this.paintVertexAttributes = ("array" === n ? Ea : Ta).members;
                    for (var u = 0; u < r.length; ++u);
                    this.zoomInPaintVertexArray = new o, this.zoomOutPaintVertexArray = new o
                }
                return d(e, [{
                    key: "populatePaintArray",
                    value: function(e, t, r) {
                        var n = this.zoomInPaintVertexArray.length;
                        this.zoomInPaintVertexArray.resize(e), this.zoomOutPaintVertexArray.resize(e), this._setPaintValues(n, e, t.patterns && t.patterns[this.layerId], r)
                    }
                }, {
                    key: "updatePaintArray",
                    value: function(e, t, r, n, i) {
                        this._setPaintValues(e, t, r.patterns && r.patterns[this.layerId], i)
                    }
                }, {
                    key: "_setPaintValues",
                    value: function(e, t, r, n) {
                        if (n && r) {
                            var i = r.min,
                                a = r.mid,
                                o = r.max,
                                s = n[i],
                                u = n[a],
                                l = n[o];
                            if (s && u && l)
                                for (var c = e; c < t; c++) this._setPaintValue(this.zoomInPaintVertexArray, c, u, s), this._setPaintValue(this.zoomOutPaintVertexArray, c, u, l)
                        }
                    }
                }, {
                    key: "_setPaintValue",
                    value: function(e, t, r, n) {
                        e.emplace(t, r.tl[0], r.tl[1], r.br[0], r.br[1], n.tl[0], n.tl[1], n.br[0], n.br[1], r.pixelRatio, n.pixelRatio)
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        this.zoomInPaintVertexArray && this.zoomInPaintVertexArray.arrayBuffer && this.zoomOutPaintVertexArray && this.zoomOutPaintVertexArray.arrayBuffer && (this.zoomInPaintVertexBuffer = e.createVertexBuffer(this.zoomInPaintVertexArray, this.paintVertexAttributes, this.expression.isStateDependent), this.zoomOutPaintVertexBuffer = e.createVertexBuffer(this.zoomOutPaintVertexArray, this.paintVertexAttributes, this.expression.isStateDependent))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.zoomOutPaintVertexBuffer && this.zoomOutPaintVertexBuffer.destroy(), this.zoomInPaintVertexBuffer && this.zoomInPaintVertexBuffer.destroy()
                    }
                }]), e
            }(),
            Qa = function() {
                function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                        return !0
                    };
                    y(this, e), this.binders = {}, this._buffers = [];
                    var i = [];
                    for (var a in t.paint._values)
                        if (n(a)) {
                            var o = t.paint.get(a);
                            if (o instanceof Oi && Yt(o.property.specification)) {
                                var s = ro(a, t.type),
                                    u = o.value,
                                    l = o.property.specification.type,
                                    c = o.property.useIntegerZoom,
                                    h = o.property.specification["property-type"],
                                    f = "cross-faded" === h || "cross-faded-data-driven" === h,
                                    p = "line-dasharray" === String(a) && "constant" !== t.layout.get("line-cap").value.kind;
                                if ("constant" !== u.kind || p)
                                    if ("source" === u.kind || p || f) {
                                        var d = ao(a, l, "source");
                                        this.binders[a] = f ? new $a(u, s, l, c, r, d, t.id) : new Ha(u, s, l, d), i.push("/a_".concat(a))
                                    } else {
                                        var v = ao(a, l, "composite");
                                        this.binders[a] = new Wa(u, s, l, c, r, v), i.push("/z_".concat(a))
                                    }
                                else this.binders[a] = f ? new Ja(u.value, s) : new Ka(u.value, s, l), i.push("/u_".concat(a))
                            }
                        }
                    this.cacheKey = i.sort().join("")
                }
                return d(e, [{
                    key: "getMaxValue",
                    value: function(e) {
                        var t = this.binders[e];
                        return t instanceof Ha || t instanceof Wa ? t.maxValue : 0
                    }
                }, {
                    key: "populatePaintArrays",
                    value: function(e, t, r, n, i) {
                        for (var a in this.binders) {
                            var o = this.binders[a];
                            (o instanceof Ha || o instanceof Wa || o instanceof $a) && o.populatePaintArray(e, t, r, n, i)
                        }
                    }
                }, {
                    key: "setConstantPatternPositions",
                    value: function(e, t) {
                        for (var r in this.binders) {
                            var n = this.binders[r];
                            n instanceof Ja && n.setConstantPatternPositions(e, t)
                        }
                    }
                }, {
                    key: "updatePaintArrays",
                    value: function(e, t, r, n, i) {
                        var a = !1;
                        for (var o in e) {
                            var s, u = t.getPositions(o),
                                c = l(u);
                            try {
                                for (c.s(); !(s = c.n()).done;) {
                                    var h = s.value,
                                        f = r.feature(h.index);
                                    for (var p in this.binders) {
                                        var y = this.binders[p];
                                        if ((y instanceof Ha || y instanceof Wa || y instanceof $a) && !0 === y.expression.isStateDependent) {
                                            var d = n.paint.get(p);
                                            y.expression = d.value, y.updatePaintArray(h.start, h.end, f, e[o], i), a = !0
                                        }
                                    }
                                }
                            } catch (v) {
                                c.e(v)
                            } finally {
                                c.f()
                            }
                        }
                        return a
                    }
                }, {
                    key: "defines",
                    value: function() {
                        var e = [];
                        for (var t in this.binders) {
                            var r = this.binders[t];
                            (r instanceof Ka || r instanceof Ja) && e.push.apply(e, u(r.uniformNames.map((function(e) {
                                return "#define HAS_UNIFORM_".concat(e)
                            }))))
                        }
                        return e
                    }
                }, {
                    key: "getBinderAttributes",
                    value: function() {
                        var e = [];
                        for (var t in this.binders) {
                            var r = this.binders[t];
                            if (r instanceof Ha || r instanceof Wa || r instanceof $a)
                                for (var n = 0; n < r.paintVertexAttributes.length; n++) e.push(r.paintVertexAttributes[n].name)
                        }
                        return e
                    }
                }, {
                    key: "getBinderUniforms",
                    value: function() {
                        var e = [];
                        for (var t in this.binders) {
                            var r = this.binders[t];
                            if (r instanceof Ka || r instanceof Ja || r instanceof Wa) {
                                var n, i = l(r.uniformNames);
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var a = n.value;
                                        e.push(a)
                                    }
                                } catch (o) {
                                    i.e(o)
                                } finally {
                                    i.f()
                                }
                            }
                        }
                        return e
                    }
                }, {
                    key: "getPaintVertexBuffers",
                    value: function() {
                        return this._buffers
                    }
                }, {
                    key: "getUniforms",
                    value: function(e, t) {
                        var r = [];
                        for (var n in this.binders) {
                            var i = this.binders[n];
                            if (i instanceof Ka || i instanceof Ja || i instanceof Wa) {
                                var a, o = l(i.uniformNames);
                                try {
                                    for (o.s(); !(a = o.n()).done;) {
                                        var s = a.value;
                                        if (t[s]) {
                                            var u = i.getBinding(e, t[s], s);
                                            r.push({
                                                name: s,
                                                property: n,
                                                binding: u
                                            })
                                        }
                                    }
                                } catch (c) {
                                    o.e(c)
                                } finally {
                                    o.f()
                                }
                            }
                        }
                        return r
                    }
                }, {
                    key: "setUniforms",
                    value: function(e, t, r, n) {
                        var i, a = l(t);
                        try {
                            for (a.s(); !(i = a.n()).done;) {
                                var o = i.value,
                                    s = o.name,
                                    u = o.property,
                                    c = o.binding;
                                this.binders[u].setUniform(c, n, r.get(u), s)
                            }
                        } catch (h) {
                            a.e(h)
                        } finally {
                            a.f()
                        }
                    }
                }, {
                    key: "updatePaintBuffers",
                    value: function(e) {
                        for (var t in this._buffers = [], this.binders) {
                            var r = this.binders[t];
                            if (e && r instanceof $a) {
                                var n = 2 === e.fromScale ? r.zoomInPaintVertexBuffer : r.zoomOutPaintVertexBuffer;
                                n && this._buffers.push(n)
                            } else(r instanceof Ha || r instanceof Wa) && r.paintVertexBuffer && this._buffers.push(r.paintVertexBuffer)
                        }
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        for (var t in this.binders) {
                            var r = this.binders[t];
                            (r instanceof Ha || r instanceof Wa || r instanceof $a) && r.upload(e)
                        }
                        this.updatePaintBuffers()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        for (var e in this.binders) {
                            var t = this.binders[e];
                            (t instanceof Ha || t instanceof Wa || t instanceof $a) && t.destroy()
                        }
                    }
                }]), e
            }(),
            eo = function() {
                function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                        return !0
                    };
                    y(this, e), this.programConfigurations = {};
                    var i, a = l(t);
                    try {
                        for (a.s(); !(i = a.n()).done;) {
                            var o = i.value;
                            this.programConfigurations[o.id] = new Qa(o, r, n)
                        }
                    } catch (s) {
                        a.e(s)
                    } finally {
                        a.f()
                    }
                    this.needsUpload = !1, this._featureMap = new Ra, this._bufferOffset = 0
                }
                return d(e, [{
                    key: "populatePaintArrays",
                    value: function(e, t, r, n, i, a) {
                        for (var o in this.programConfigurations) this.programConfigurations[o].populatePaintArrays(e, t, n, i, a);
                        void 0 !== t.id && this._featureMap.add(t.id, r, this._bufferOffset, e), this._bufferOffset = e, this.needsUpload = !0
                    }
                }, {
                    key: "updatePaintArrays",
                    value: function(e, t, r, n) {
                        var i, a = l(r);
                        try {
                            for (a.s(); !(i = a.n()).done;) {
                                var o = i.value;
                                this.needsUpload = this.programConfigurations[o.id].updatePaintArrays(e, this._featureMap, t, o, n) || this.needsUpload
                            }
                        } catch (s) {
                            a.e(s)
                        } finally {
                            a.f()
                        }
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this.programConfigurations[e]
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        if (this.needsUpload) {
                            for (var t in this.programConfigurations) this.programConfigurations[t].upload(e);
                            this.needsUpload = !1
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        for (var e in this.programConfigurations) this.programConfigurations[e].destroy()
                    }
                }]), e
            }(),
            to = {
                "text-opacity": ["opacity"],
                "icon-opacity": ["opacity"],
                "text-color": ["fill_color"],
                "icon-color": ["fill_color"],
                "text-halo-color": ["halo_color"],
                "icon-halo-color": ["halo_color"],
                "text-halo-blur": ["halo_blur"],
                "icon-halo-blur": ["halo_blur"],
                "text-halo-width": ["halo_width"],
                "icon-halo-width": ["halo_width"],
                "line-gap-width": ["gapwidth"],
                "line-pattern": ["pattern_to", "pattern_from", "pixel_ratio_to", "pixel_ratio_from"],
                "fill-pattern": ["pattern_to", "pattern_from", "pixel_ratio_to", "pixel_ratio_from"],
                "fill-extrusion-pattern": ["pattern_to", "pattern_from", "pixel_ratio_to", "pixel_ratio_from"],
                "line-dasharray": ["dash_to", "dash_from"]
            };

        function ro(e, t) {
            return to[e] || [e.replace("".concat(t, "-"), "").replace(/-/g, "_")]
        }
        var no = {
                "line-pattern": {
                    source: ra,
                    composite: ra
                },
                "fill-pattern": {
                    source: ra,
                    composite: ra
                },
                "fill-extrusion-pattern": {
                    source: ra,
                    composite: ra
                },
                "line-dasharray": {
                    source: na,
                    composite: na
                }
            },
            io = {
                color: {
                    source: xa,
                    composite: ba
                },
                number: {
                    source: pa,
                    composite: xa
                }
            };

        function ao(e, t, r) {
            var n = no[e];
            return n && n[r] || io[t][r]
        }
        vr("ConstantBinder", Ka), vr("CrossFadedConstantBinder", Ja), vr("SourceExpressionBinder", Ha), vr("CrossFadedCompositeBinder", $a), vr("CompositeExpressionBinder", Wa), vr("ProgramConfiguration", Qa, {
            omit: ["_buffers"]
        }), vr("ProgramConfigurationSet", eo);
        var oo = "-transition",
            so = function(e) {
                c(r, e);
                var t = h(r);

                function r(e, n) {
                    var i;
                    if (y(this, r), (i = t.call(this)).id = e.id, i.type = e.type, i._featureFilter = {
                            filter: function() {
                                return !0
                            },
                            needGeometry: !1
                        }, "custom" !== e.type && (i.metadata = (e = e).metadata, i.minzoom = e.minzoom, i.maxzoom = e.maxzoom, "background" !== e.type && "sky" !== e.type && (i.source = e.source, i.sourceLayer = e["source-layer"], i.filter = e.filter), n.layout && (i._unevaluatedLayout = new Li(n.layout)), n.paint)) {
                        for (var a in i._transitionablePaint = new Ei(n.paint), e.paint) i.setPaintProperty(a, e.paint[a], {
                            validate: !1
                        });
                        for (var s in e.layout) i.setLayoutProperty(s, e.layout[s], {
                            validate: !1
                        });
                        i._transitioningPaint = i._transitionablePaint.untransitioned(), i.paint = new Ri(n.paint)
                    }
                    return o(i)
                }
                return d(r, [{
                    key: "getCrossfadeParameters",
                    value: function() {
                        return this._crossfadeParameters
                    }
                }, {
                    key: "getLayoutProperty",
                    value: function(e) {
                        return "visibility" === e ? this.visibility : this._unevaluatedLayout.getValue(e)
                    }
                }, {
                    key: "setLayoutProperty",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        null != t && this._validate(kn, "layers.".concat(this.id, ".layout.").concat(e), e, t, r) || ("visibility" !== e ? this._unevaluatedLayout.setValue(e, t) : this.visibility = t)
                    }
                }, {
                    key: "getPaintProperty",
                    value: function(e) {
                        return z(e, oo) ? this._transitionablePaint.getTransition(e.slice(0, -oo.length)) : this._transitionablePaint.getValue(e)
                    }
                }, {
                    key: "setPaintProperty",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (null != t && this._validate(bn, "layers.".concat(this.id, ".paint.").concat(e), e, t, r)) return !1;
                        if (z(e, oo)) return this._transitionablePaint.setTransition(e.slice(0, -oo.length), t || void 0), !1;
                        var n = this._transitionablePaint._values[e],
                            i = "cross-faded-data-driven" === n.property.specification["property-type"],
                            a = n.value.isDataDriven(),
                            o = n.value;
                        this._transitionablePaint.setValue(e, t), this._handleSpecialPaintPropertyUpdate(e);
                        var s = this._transitionablePaint._values[e].value;
                        return s.isDataDriven() || a || i || this._handleOverridablePaintPropertyUpdate(e, o, s)
                    }
                }, {
                    key: "_handleSpecialPaintPropertyUpdate",
                    value: function(e) {}
                }, {
                    key: "getProgramIds",
                    value: function() {
                        return null
                    }
                }, {
                    key: "getProgramConfiguration",
                    value: function(e) {
                        return null
                    }
                }, {
                    key: "_handleOverridablePaintPropertyUpdate",
                    value: function(e, t, r) {
                        return !1
                    }
                }, {
                    key: "isHidden",
                    value: function(e) {
                        return !!(this.minzoom && e < this.minzoom) || !!(this.maxzoom && e >= this.maxzoom) || "none" === this.visibility
                    }
                }, {
                    key: "updateTransitions",
                    value: function(e) {
                        this._transitioningPaint = this._transitionablePaint.transitioned(e, this._transitioningPaint)
                    }
                }, {
                    key: "hasTransition",
                    value: function() {
                        return this._transitioningPaint.hasTransition()
                    }
                }, {
                    key: "recalculate",
                    value: function(e, t) {
                        e.getCrossfadeParameters && (this._crossfadeParameters = e.getCrossfadeParameters()), this._unevaluatedLayout && (this.layout = this._unevaluatedLayout.possiblyEvaluate(e, void 0, t)), this.paint = this._transitioningPaint.possiblyEvaluate(e, void 0, t)
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        var e = {
                            id: this.id,
                            type: this.type,
                            source: this.source,
                            "source-layer": this.sourceLayer,
                            metadata: this.metadata,
                            minzoom: this.minzoom,
                            maxzoom: this.maxzoom,
                            filter: this.filter,
                            layout: this._unevaluatedLayout && this._unevaluatedLayout.serialize(),
                            paint: this._transitionablePaint && this._transitionablePaint.serialize()
                        };
                        return this.visibility && (e.layout = e.layout || {}, e.layout.visibility = this.visibility),
                            function(e, t, r) {
                                var n = {};
                                for (var i in e) t.call(this, e[i], i, e) && (n[i] = e[i]);
                                return n
                            }(e, (function(e, t) {
                                return !(void 0 === e || "layout" === t && !Object.keys(e).length || "paint" === t && !Object.keys(e).length)
                            }))
                    }
                }, {
                    key: "_validate",
                    value: function(e, t, r, n) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        return (!i || !1 !== i.validate) && function(e, t) {
                            var r = !1;
                            if (t && t.length) {
                                var n, i = l(t);
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var a = n.value;
                                        e.fire(new mn(new Error(a.message))), r = !0
                                    }
                                } catch (o) {
                                    i.e(o)
                                } finally {
                                    i.f()
                                }
                            }
                            return r
                        }(this, e.call(xn, {
                            key: t,
                            layerType: this.type,
                            objectKey: r,
                            value: n,
                            styleSpec: zr,
                            style: {
                                glyphs: !0,
                                sprite: !0
                            }
                        }))
                    }
                }, {
                    key: "is3D",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isSky",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isTileClipped",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "hasOffscreenPass",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "resize",
                    value: function() {}
                }, {
                    key: "isStateDependent",
                    value: function() {
                        for (var e in this.paint._values) {
                            var t = this.paint.get(e);
                            if (t instanceof Oi && Yt(t.property.specification) && ("source" === t.value.kind || "composite" === t.value.kind) && t.value.isStateDependent) return !0
                        }
                        return !1
                    }
                }]), r
            }(gn),
            uo = Hi([{
                name: "a_pos",
                components: 2,
                type: "Int16"
            }], 4).members,
            lo = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    y(this, e), this.segments = t
                }
                return d(e, [{
                    key: "prepareSegment",
                    value: function(t, r, n, i) {
                        var a = this.segments[this.segments.length - 1];
                        return t > e.MAX_VERTEX_ARRAY_LENGTH && P("Max vertices per segment is ".concat(e.MAX_VERTEX_ARRAY_LENGTH, ": bucket requested ").concat(t)), (!a || a.vertexLength + t > e.MAX_VERTEX_ARRAY_LENGTH || a.sortKey !== i) && (a = {
                            vertexOffset: r.length,
                            primitiveOffset: n.length,
                            vertexLength: 0,
                            primitiveLength: 0
                        }, void 0 !== i && (a.sortKey = i), this.segments.push(a)), a
                    }
                }, {
                    key: "get",
                    value: function() {
                        return this.segments
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e, t = l(this.segments);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var r = e.value;
                                for (var n in r.vaos) r.vaos[n].destroy()
                            }
                        } catch (i) {
                            t.e(i)
                        } finally {
                            t.f()
                        }
                    }
                }], [{
                    key: "simpleSegment",
                    value: function(t, r, n, i) {
                        return new e([{
                            vertexOffset: t,
                            primitiveOffset: r,
                            vertexLength: n,
                            primitiveLength: i,
                            vaos: {},
                            sortKey: 0
                        }])
                    }
                }]), e
            }();
        lo.MAX_VERTEX_ARRAY_LENGTH = Math.pow(2, 16) - 1, vr("SegmentVector", lo);
        var co = 8192,
            ho = Math.pow(2, 14) - 1,
            fo = -ho - 1;

        function po(e) {
            for (var t = co / e.extent, r = e.loadGeometry(), n = 0; n < r.length; n++)
                for (var i = r[n], a = 0; a < i.length; a++) {
                    var o = i[a],
                        s = Math.round(o.x * t),
                        u = Math.round(o.y * t);
                    o.x = k(s, fo, ho), o.y = k(u, fo, ho), (s < o.x || s > o.x + 1 || u < o.y || u > o.y + 1) && P("Geometry exceeds allowed extent, reduce your vector tile buffer size")
                }
            return r
        }

        function yo(e, t) {
            return {
                type: e.type,
                id: e.id,
                properties: e.properties,
                geometry: t ? po(e) : []
            }
        }

        function vo(e, t, r, n, i) {
            e.emplaceBack(2 * t + (n + 1) / 2, 2 * r + (i + 1) / 2)
        }
        var mo = function() {
            function e(t) {
                y(this, e), this.zoom = t.zoom, this.overscaling = t.overscaling, this.layers = t.layers, this.layerIds = this.layers.map((function(e) {
                    return e.id
                })), this.index = t.index, this.hasPattern = !1, this.layoutVertexArray = new $i, this.indexArray = new ca, this.segments = new lo, this.programConfigurations = new eo(t.layers, t.zoom), this.stateDependentLayerIds = this.layers.filter((function(e) {
                    return e.isStateDependent()
                })).map((function(e) {
                    return e.id
                }))
            }
            return d(e, [{
                key: "populate",
                value: function(e, t, r) {
                    var n = this.layers[0],
                        i = [],
                        a = null;
                    "circle" === n.type && (a = n.layout.get("circle-sort-key"));
                    var o, s = l(e);
                    try {
                        for (s.s(); !(o = s.n()).done;) {
                            var u = o.value,
                                c = u.feature,
                                h = u.id,
                                f = u.index,
                                p = u.sourceLayerIndex,
                                y = this.layers[0]._featureFilter.needGeometry,
                                d = yo(c, y);
                            if (this.layers[0]._featureFilter.filter(new Pi(this.zoom), d, r)) {
                                var v = a ? a.evaluate(d, {}, r) : void 0,
                                    m = {
                                        id: h,
                                        properties: c.properties,
                                        type: c.type,
                                        sourceLayerIndex: p,
                                        index: f,
                                        geometry: y ? d.geometry : po(c),
                                        patterns: {},
                                        sortKey: v
                                    };
                                i.push(m)
                            }
                        }
                    } catch (A) {
                        s.e(A)
                    } finally {
                        s.f()
                    }
                    a && i.sort((function(e, t) {
                        return e.sortKey - t.sortKey
                    }));
                    for (var g = 0, x = i; g < x.length; g++) {
                        var b = x[g],
                            k = b.geometry,
                            w = b.index,
                            _ = b.sourceLayerIndex,
                            S = e[w].feature;
                        this.addFeature(b, k, w, r), t.featureIndex.insert(S, k, w, _, this.index)
                    }
                }
            }, {
                key: "update",
                value: function(e, t, r) {
                    this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e, t, this.stateDependentLayers, r)
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return 0 === this.layoutVertexArray.length
                }
            }, {
                key: "uploadPending",
                value: function() {
                    return !this.uploaded || this.programConfigurations.needsUpload
                }
            }, {
                key: "upload",
                value: function(e) {
                    this.uploaded || (this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, uo), this.indexBuffer = e.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e), this.uploaded = !0
                }
            }, {
                key: "destroy",
                value: function() {
                    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy())
                }
            }, {
                key: "addFeature",
                value: function(e, t, r, n) {
                    var i, a = l(t);
                    try {
                        for (a.s(); !(i = a.n()).done;) {
                            var o, s = i.value,
                                u = l(s);
                            try {
                                for (u.s(); !(o = u.n()).done;) {
                                    var c = o.value,
                                        h = c.x,
                                        f = c.y;
                                    if (!(h < 0 || h >= co || f < 0 || f >= co)) {
                                        var p = this.segments.prepareSegment(4, this.layoutVertexArray, this.indexArray, e.sortKey),
                                            y = p.vertexLength;
                                        vo(this.layoutVertexArray, h, f, -1, -1), vo(this.layoutVertexArray, h, f, 1, -1), vo(this.layoutVertexArray, h, f, 1, 1), vo(this.layoutVertexArray, h, f, -1, 1), this.indexArray.emplaceBack(y, y + 1, y + 2), this.indexArray.emplaceBack(y, y + 3, y + 2), p.vertexLength += 4, p.primitiveLength += 2
                                    }
                                }
                            } catch (d) {
                                u.e(d)
                            } finally {
                                u.f()
                            }
                        }
                    } catch (d) {
                        a.e(d)
                    } finally {
                        a.f()
                    }
                    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e, r, {}, n)
                }
            }]), e
        }();

        function go(e, t) {
            for (var r = 0; r < e.length; r++)
                if (zo(t, e[r])) return !0;
            for (var n = 0; n < t.length; n++)
                if (zo(e, t[n])) return !0;
            return !!wo(e, t)
        }

        function xo(e, t, r) {
            return !!zo(e, t) || !!So(t, e, r)
        }

        function bo(e, t) {
            if (1 === e.length) return Io(t, e[0]);
            for (var r = 0; r < t.length; r++)
                for (var n = t[r], i = 0; i < n.length; i++)
                    if (zo(e, n[i])) return !0;
            for (var a = 0; a < e.length; a++)
                if (Io(t, e[a])) return !0;
            for (var o = 0; o < t.length; o++)
                if (wo(e, t[o])) return !0;
            return !1
        }

        function ko(e, t, r) {
            if (e.length > 1) {
                if (wo(e, t)) return !0;
                for (var n = 0; n < t.length; n++)
                    if (So(t[n], e, r)) return !0
            }
            for (var i = 0; i < e.length; i++)
                if (So(e[i], t, r)) return !0;
            return !1
        }

        function wo(e, t) {
            if (0 === e.length || 0 === t.length) return !1;
            for (var r = 0; r < e.length - 1; r++)
                for (var n = e[r], i = e[r + 1], a = 0; a < t.length - 1; a++)
                    if (_o(n, i, t[a], t[a + 1])) return !0;
            return !1
        }

        function _o(e, t, r, n) {
            return V(e, r, n) !== V(t, r, n) && V(e, t, r) !== V(e, t, n)
        }

        function So(e, t, r) {
            var n = r * r;
            if (1 === t.length) return e.distSqr(t[0]) < n;
            for (var i = 1; i < t.length; i++)
                if (Ao(e, t[i - 1], t[i]) < n) return !0;
            return !1
        }

        function Ao(e, t, r) {
            var n = t.distSqr(r);
            if (0 === n) return e.distSqr(t);
            var i = ((e.x - t.x) * (r.x - t.x) + (e.y - t.y) * (r.y - t.y)) / n;
            return e.distSqr(i < 0 ? t : i > 1 ? r : r.sub(t)._mult(i)._add(t))
        }

        function Io(e, t) {
            for (var r, n, i, a = !1, o = 0; o < e.length; o++)
                for (var s = 0, u = (r = e[o]).length - 1; s < r.length; u = s++) n = r[s], i = r[u], n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (a = !a);
            return a
        }

        function zo(e, t) {
            for (var r = !1, n = 0, i = e.length - 1; n < e.length; i = n++) {
                var a = e[n],
                    o = e[i];
                a.y > t.y != o.y > t.y && t.x < (o.x - a.x) * (t.y - a.y) / (o.y - a.y) + a.x && (r = !r)
            }
            return r
        }

        function Mo(e, t, r) {
            var n = r[0],
                i = r[2];
            if (e.x < n.x && t.x < n.x || e.x > i.x && t.x > i.x || e.y < n.y && t.y < n.y || e.y > i.y && t.y > i.y) return !1;
            var a = V(e, t, r[0]);
            return a !== V(e, t, r[1]) || a !== V(e, t, r[2]) || a !== V(e, t, r[3])
        }

        function Co(e, t, r) {
            var n = t.paint.get(e).value;
            return "constant" === n.kind ? n.value : r.programConfigurations.get(t.id).getMaxValue(e)
        }

        function Bo(e) {
            return Math.sqrt(e[0] * e[0] + e[1] * e[1])
        }

        function Po(e, t, n, i, a) {
            if (!t[0] && !t[1]) return e;
            var o = r.convert(t)._mult(a);
            "viewport" === n && o._rotate(-i);
            for (var s = [], u = 0; u < e.length; u++) s.push(e[u].sub(o));
            return s
        }

        function Vo(e, t, n, i) {
            var a = r.convert(e)._mult(i);
            return "viewport" === t && a._rotate(-n), a
        }
        vr("CircleBucket", mo, {
            omit: ["layers"]
        });
        var To, Eo = new Xi({
                "circle-sort-key": new Ui(zr.layout_circle["circle-sort-key"])
            }),
            Do = {
                paint: new Xi({
                    "circle-radius": new Ui(zr.paint_circle["circle-radius"]),
                    "circle-color": new Ui(zr.paint_circle["circle-color"]),
                    "circle-blur": new Ui(zr.paint_circle["circle-blur"]),
                    "circle-opacity": new Ui(zr.paint_circle["circle-opacity"]),
                    "circle-translate": new ji(zr.paint_circle["circle-translate"]),
                    "circle-translate-anchor": new ji(zr.paint_circle["circle-translate-anchor"]),
                    "circle-pitch-scale": new ji(zr.paint_circle["circle-pitch-scale"]),
                    "circle-pitch-alignment": new ji(zr.paint_circle["circle-pitch-alignment"]),
                    "circle-stroke-width": new Ui(zr.paint_circle["circle-stroke-width"]),
                    "circle-stroke-color": new Ui(zr.paint_circle["circle-stroke-color"]),
                    "circle-stroke-opacity": new Ui(zr.paint_circle["circle-stroke-opacity"])
                }),
                layout: Eo
            },
            Fo = "undefined" != typeof Float32Array ? Float32Array : Array;

        function Lo(e) {
            return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
        }

        function Oo() {
            var e = new Fo(3);
            return Fo != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e
        }

        function Ro(e, t, r) {
            var n = new Fo(3);
            return n[0] = e, n[1] = t, n[2] = r, n
        }

        function jo(e, t, r, n) {
            return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e[2] = t[2] + r[2] * n, e
        }

        function Uo(e, t, r) {
            var n = t[0],
                i = t[1],
                a = t[2],
                o = t[3];
            return e[0] = r[0] * n + r[4] * i + r[8] * a + r[12] * o, e[1] = r[1] * n + r[5] * i + r[9] * a + r[13] * o, e[2] = r[2] * n + r[6] * i + r[10] * a + r[14] * o, e[3] = r[3] * n + r[7] * i + r[11] * a + r[15] * o, e
        }

        function qo() {
            var e = new Fo(4);
            return Fo != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e
        }

        function No(e, t, r, n, i, a, o, s, u) {
            if (a && e.queryGeometry.isAboveHorizon) return !1;
            a && (u *= e.pixelToTileUnitsFactor);
            var c, h = l(t);
            try {
                for (h.s(); !(c = h.n()).done;) {
                    var f, p = c.value,
                        y = l(p);
                    try {
                        var d = function() {
                            var t = f.value,
                                l = t.add(s),
                                c = i && r.elevation ? r.elevation.exaggeration() * i.getElevationAt(l.x, l.y, !0) : 0,
                                h = a ? l : Zo(l, c, n),
                                p = a ? e.tilespaceRays.map((function(e) {
                                    return Yo(e, c)
                                })) : e.queryGeometry.screenGeometry,
                                y = Uo([], [t.x, t.y, c, 1], n);
                            if (!o && a ? u *= y[3] / r.cameraToCenterDistance : o && !a && (u *= r.cameraToCenterDistance / y[3]), xo(p, h, u)) return {
                                v: !0
                            }
                        };
                        for (y.s(); !(f = y.n()).done;) {
                            var v = d();
                            if ("object" === typeof v) return v.v
                        }
                    } catch (m) {
                        y.e(m)
                    } finally {
                        y.f()
                    }
                }
            } catch (m) {
                h.e(m)
            } finally {
                h.f()
            }
            return !1
        }

        function Zo(e, t, n) {
            var i = Uo([], [e.x, e.y, t, 1], n);
            return new r(i[0] / i[3], i[1] / i[3])
        }
        Math.hypot || (Math.hypot = function() {
                for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
                return Math.sqrt(e)
            }), Oo(),
            function() {
                var e;
                e = new Fo(4), Fo != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0)
            }(), Oo(), Ro(1, 0, 0), Ro(0, 1, 0), qo(), qo(), To = new Fo(9), Fo != Float32Array && (To[1] = 0, To[2] = 0, To[3] = 0, To[5] = 0, To[6] = 0, To[7] = 0), To[0] = 1, To[4] = 1, To[8] = 1;
        var Xo = Ro(0, 0, 0),
            Go = Ro(0, 0, 1);

        function Yo(e, t) {
            var n = Oo();
            return Xo[2] = t, e.intersectsPlane(Xo, Go, n), new r(n[0], n[1])
        }
        var Ko = function(e) {
            c(r, e);
            var t = h(r);

            function r() {
                return y(this, r), t.apply(this, arguments)
            }
            return r
        }(mo);

        function Jo(e, t, r, n) {
            var i = t.width,
                a = t.height;
            if (n) {
                if (n instanceof Uint8ClampedArray) n = new Uint8Array(n.buffer);
                else if (n.length !== i * a * r) throw new RangeError("mismatched image size")
            } else n = new Uint8Array(i * a * r);
            return e.width = i, e.height = a, e.data = n, e
        }

        function Ho(e, t, r) {
            var n = t.width,
                i = t.height;
            if (n !== e.width || i !== e.height) {
                var a = Jo({}, {
                    width: n,
                    height: i
                }, r);
                Wo(e, a, {
                    x: 0,
                    y: 0
                }, {
                    x: 0,
                    y: 0
                }, {
                    width: Math.min(e.width, n),
                    height: Math.min(e.height, i)
                }, r), e.width = n, e.height = i, e.data = a.data
            }
        }

        function Wo(e, t, r, n, i, a) {
            if (0 === i.width || 0 === i.height) return t;
            if (i.width > e.width || i.height > e.height || r.x > e.width - i.width || r.y > e.height - i.height) throw new RangeError("out of range source coordinates for image copy");
            if (i.width > t.width || i.height > t.height || n.x > t.width - i.width || n.y > t.height - i.height) throw new RangeError("out of range destination coordinates for image copy");
            for (var o = e.data, s = t.data, u = 0; u < i.height; u++)
                for (var l = ((r.y + u) * e.width + r.x) * a, c = ((n.y + u) * t.width + n.x) * a, h = 0; h < i.width * a; h++) s[c + h] = o[l + h];
            return t
        }
        vr("HeatmapBucket", Ko, {
            omit: ["layers"]
        });
        var $o = function() {
                function e(t, r) {
                    y(this, e), Jo(this, t, 1, r)
                }
                return d(e, [{
                    key: "resize",
                    value: function(e) {
                        Ho(this, e, 1)
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new e({
                            width: this.width,
                            height: this.height
                        }, new Uint8Array(this.data))
                    }
                }], [{
                    key: "copy",
                    value: function(e, t, r, n, i) {
                        Wo(e, t, r, n, i, 1)
                    }
                }]), e
            }(),
            Qo = function() {
                function e(t, r) {
                    y(this, e), Jo(this, t, 4, r)
                }
                return d(e, [{
                    key: "resize",
                    value: function(e) {
                        Ho(this, e, 4)
                    }
                }, {
                    key: "replace",
                    value: function(e, t) {
                        t ? this.data.set(e) : this.data = e instanceof Uint8ClampedArray ? new Uint8Array(e.buffer) : e
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new e({
                            width: this.width,
                            height: this.height
                        }, new Uint8Array(this.data))
                    }
                }], [{
                    key: "copy",
                    value: function(e, t, r, n, i) {
                        Wo(e, t, r, n, i, 4)
                    }
                }]), e
            }();
        vr("AlphaImage", $o), vr("RGBAImage", Qo);
        var es = {
            paint: new Xi({
                "heatmap-radius": new Ui(zr.paint_heatmap["heatmap-radius"]),
                "heatmap-weight": new Ui(zr.paint_heatmap["heatmap-weight"]),
                "heatmap-intensity": new ji(zr.paint_heatmap["heatmap-intensity"]),
                "heatmap-color": new Zi(zr.paint_heatmap["heatmap-color"]),
                "heatmap-opacity": new ji(zr.paint_heatmap["heatmap-opacity"])
            })
        };

        function ts(e) {
            var t = {},
                r = e.resolution || 256,
                n = e.clips ? e.clips.length : 1,
                i = e.image || new Qo({
                    width: r,
                    height: n
                }),
                a = function(r, n, a) {
                    t[e.evaluationKey] = a;
                    var o = e.expression.evaluate(t);
                    i.data[r + n + 0] = Math.floor(255 * o.r / o.a), i.data[r + n + 1] = Math.floor(255 * o.g / o.a), i.data[r + n + 2] = Math.floor(255 * o.b / o.a), i.data[r + n + 3] = Math.floor(255 * o.a)
                };
            if (e.clips)
                for (var o = 0, s = 0; o < n; ++o, s += 4 * r)
                    for (var u = 0, l = 0; u < r; u++, l += 4) {
                        var c = u / (r - 1),
                            h = e.clips[o];
                        a(s, l, h.start * (1 - c) + h.end * c)
                    } else
                        for (var f = 0, p = 0; f < r; f++, p += 4) a(0, p, f / (r - 1));
            return i
        }
        var rs = {
                paint: new Xi({
                    "hillshade-illumination-direction": new ji(zr.paint_hillshade["hillshade-illumination-direction"]),
                    "hillshade-illumination-anchor": new ji(zr.paint_hillshade["hillshade-illumination-anchor"]),
                    "hillshade-exaggeration": new ji(zr.paint_hillshade["hillshade-exaggeration"]),
                    "hillshade-shadow-color": new ji(zr.paint_hillshade["hillshade-shadow-color"]),
                    "hillshade-highlight-color": new ji(zr.paint_hillshade["hillshade-highlight-color"]),
                    "hillshade-accent-color": new ji(zr.paint_hillshade["hillshade-accent-color"])
                })
            },
            ns = Hi([{
                name: "a_pos",
                components: 2,
                type: "Int16"
            }], 4).members,
            is = os,
            as = os;

        function os(e, t, r) {
            r = r || 2;
            var n, i, a, o, s, u, l, c = t && t.length,
                h = c ? t[0] * r : e.length,
                f = ss(e, 0, h, r, !0),
                p = [];
            if (!f || f.next === f.prev) return p;
            if (c && (f = function(e, t, r, n) {
                    var i, a, o, s = [];
                    for (i = 0, a = t.length; i < a; i++)(o = ss(e, t[i] * n, i < a - 1 ? t[i + 1] * n : e.length, n, !1)) === o.next && (o.steiner = !0), s.push(gs(o));
                    for (s.sort(ys), i = 0; i < s.length; i++) ds(s[i], r), r = us(r, r.next);
                    return r
                }(e, t, f, r)), e.length > 80 * r) {
                n = a = e[0], i = o = e[1];
                for (var y = r; y < h; y += r)(s = e[y]) < n && (n = s), (u = e[y + 1]) < i && (i = u), s > a && (a = s), u > o && (o = u);
                l = 0 !== (l = Math.max(a - n, o - i)) ? 1 / l : 0
            }
            return ls(f, p, r, n, i, l), p
        }

        function ss(e, t, r, n, i) {
            var a, o;
            if (i === Ps(e, t, r, n) > 0)
                for (a = t; a < r; a += n) o = Ms(a, e[a], e[a + 1], o);
            else
                for (a = r - n; a >= t; a -= n) o = Ms(a, e[a], e[a + 1], o);
            return o && ws(o, o.next) && (Cs(o), o = o.next), o
        }

        function us(e, t) {
            if (!e) return e;
            t || (t = e);
            var r, n = e;
            do {
                if (r = !1, n.steiner || !ws(n, n.next) && 0 !== ks(n.prev, n, n.next)) n = n.next;
                else {
                    if (Cs(n), (n = t = n.prev) === n.next) break;
                    r = !0
                }
            } while (r || n !== t);
            return t
        }

        function ls(e, t, r, n, i, a, o) {
            if (e) {
                !o && a && function(e, t, r, n) {
                    var i = e;
                    do {
                        null === i.z && (i.z = ms(i.x, i.y, t, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
                    } while (i !== e);
                    i.prevZ.nextZ = null, i.prevZ = null,
                        function(e) {
                            var t, r, n, i, a, o, s, u, l = 1;
                            do {
                                for (r = e, e = null, a = null, o = 0; r;) {
                                    for (o++, n = r, s = 0, t = 0; t < l && (s++, n = n.nextZ); t++);
                                    for (u = l; s > 0 || u > 0 && n;) 0 !== s && (0 === u || !n || r.z <= n.z) ? (i = r, r = r.nextZ, s--) : (i = n, n = n.nextZ, u--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
                                    r = n
                                }
                                a.nextZ = null, l *= 2
                            } while (o > 1)
                        }(i)
                }(e, n, i, a);
                for (var s, u, l = e; e.prev !== e.next;)
                    if (s = e.prev, u = e.next, a ? hs(e, n, i, a) : cs(e)) t.push(s.i / r), t.push(e.i / r), t.push(u.i / r), Cs(e), e = u.next, l = u.next;
                    else if ((e = u) === l) {
                    o ? 1 === o ? ls(e = fs(us(e), t, r), t, r, n, i, a, 2) : 2 === o && ps(e, t, r, n, i, a) : ls(us(e), t, r, n, i, a, 1);
                    break
                }
            }
        }

        function cs(e) {
            var t = e.prev,
                r = e,
                n = e.next;
            if (ks(t, r, n) >= 0) return !1;
            for (var i = e.next.next; i !== e.prev;) {
                if (xs(t.x, t.y, r.x, r.y, n.x, n.y, i.x, i.y) && ks(i.prev, i, i.next) >= 0) return !1;
                i = i.next
            }
            return !0
        }

        function hs(e, t, r, n) {
            var i = e.prev,
                a = e,
                o = e.next;
            if (ks(i, a, o) >= 0) return !1;
            for (var s = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, u = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, l = ms(i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, t, r, n), c = ms(s, u, t, r, n), h = e.prevZ, f = e.nextZ; h && h.z >= l && f && f.z <= c;) {
                if (h !== e.prev && h !== e.next && xs(i.x, i.y, a.x, a.y, o.x, o.y, h.x, h.y) && ks(h.prev, h, h.next) >= 0) return !1;
                if (h = h.prevZ, f !== e.prev && f !== e.next && xs(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && ks(f.prev, f, f.next) >= 0) return !1;
                f = f.nextZ
            }
            for (; h && h.z >= l;) {
                if (h !== e.prev && h !== e.next && xs(i.x, i.y, a.x, a.y, o.x, o.y, h.x, h.y) && ks(h.prev, h, h.next) >= 0) return !1;
                h = h.prevZ
            }
            for (; f && f.z <= c;) {
                if (f !== e.prev && f !== e.next && xs(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && ks(f.prev, f, f.next) >= 0) return !1;
                f = f.nextZ
            }
            return !0
        }

        function fs(e, t, r) {
            var n = e;
            do {
                var i = n.prev,
                    a = n.next.next;
                !ws(i, a) && _s(i, n, n.next, a) && Is(i, a) && Is(a, i) && (t.push(i.i / r), t.push(n.i / r), t.push(a.i / r), Cs(n), Cs(n.next), n = e = a), n = n.next
            } while (n !== e);
            return us(n)
        }

        function ps(e, t, r, n, i, a) {
            var o = e;
            do {
                for (var s = o.next.next; s !== o.prev;) {
                    if (o.i !== s.i && bs(o, s)) {
                        var u = zs(o, s);
                        return o = us(o, o.next), u = us(u, u.next), ls(o, t, r, n, i, a), void ls(u, t, r, n, i, a)
                    }
                    s = s.next
                }
                o = o.next
            } while (o !== e)
        }

        function ys(e, t) {
            return e.x - t.x
        }

        function ds(e, t) {
            if (t = function(e, t) {
                    var r, n = t,
                        i = e.x,
                        a = e.y,
                        o = -1 / 0;
                    do {
                        if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
                            var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                            if (s <= i && s > o) {
                                if (o = s, s === i) {
                                    if (a === n.y) return n;
                                    if (a === n.next.y) return n.next
                                }
                                r = n.x < n.next.x ? n : n.next
                            }
                        }
                        n = n.next
                    } while (n !== t);
                    if (!r) return null;
                    if (i === o) return r;
                    var u, l = r,
                        c = r.x,
                        h = r.y,
                        f = 1 / 0;
                    n = r;
                    do {
                        i >= n.x && n.x >= c && i !== n.x && xs(a < h ? i : o, a, c, h, a < h ? o : i, a, n.x, n.y) && (u = Math.abs(a - n.y) / (i - n.x), Is(n, e) && (u < f || u === f && (n.x > r.x || n.x === r.x && vs(r, n))) && (r = n, f = u)), n = n.next
                    } while (n !== l);
                    return r
                }(e, t)) {
                var r = zs(t, e);
                us(t, t.next), us(r, r.next)
            }
        }

        function vs(e, t) {
            return ks(e.prev, e, t.prev) < 0 && ks(t.next, e, e.next) < 0
        }

        function ms(e, t, r, n, i) {
            return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
        }

        function gs(e) {
            var t = e,
                r = e;
            do {
                (t.x < r.x || t.x === r.x && t.y < r.y) && (r = t), t = t.next
            } while (t !== e);
            return r
        }

        function xs(e, t, r, n, i, a, o, s) {
            return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (n - s) - (r - o) * (t - s) >= 0 && (r - o) * (a - s) - (i - o) * (n - s) >= 0
        }

        function bs(e, t) {
            return e.next.i !== t.i && e.prev.i !== t.i && ! function(e, t) {
                var r = e;
                do {
                    if (r.i !== e.i && r.next.i !== e.i && r.i !== t.i && r.next.i !== t.i && _s(r, r.next, e, t)) return !0;
                    r = r.next
                } while (r !== e);
                return !1
            }(e, t) && (Is(e, t) && Is(t, e) && function(e, t) {
                var r = e,
                    n = !1,
                    i = (e.x + t.x) / 2,
                    a = (e.y + t.y) / 2;
                do {
                    r.y > a != r.next.y > a && r.next.y !== r.y && i < (r.next.x - r.x) * (a - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next
                } while (r !== e);
                return n
            }(e, t) && (ks(e.prev, e, t.prev) || ks(e, t.prev, t)) || ws(e, t) && ks(e.prev, e, e.next) > 0 && ks(t.prev, t, t.next) > 0)
        }

        function ks(e, t, r) {
            return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y)
        }

        function ws(e, t) {
            return e.x === t.x && e.y === t.y
        }

        function _s(e, t, r, n) {
            var i = As(ks(e, t, r)),
                a = As(ks(e, t, n)),
                o = As(ks(r, n, e)),
                s = As(ks(r, n, t));
            return i !== a && o !== s || !(0 !== i || !Ss(e, r, t)) || !(0 !== a || !Ss(e, n, t)) || !(0 !== o || !Ss(r, e, n)) || !(0 !== s || !Ss(r, t, n))
        }

        function Ss(e, t, r) {
            return t.x <= Math.max(e.x, r.x) && t.x >= Math.min(e.x, r.x) && t.y <= Math.max(e.y, r.y) && t.y >= Math.min(e.y, r.y)
        }

        function As(e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0
        }

        function Is(e, t) {
            return ks(e.prev, e, e.next) < 0 ? ks(e, t, e.next) >= 0 && ks(e, e.prev, t) >= 0 : ks(e, t, e.prev) < 0 || ks(e, e.next, t) < 0
        }

        function zs(e, t) {
            var r = new Bs(e.i, e.x, e.y),
                n = new Bs(t.i, t.x, t.y),
                i = e.next,
                a = t.prev;
            return e.next = t, t.prev = e, r.next = i, i.prev = r, n.next = r, r.prev = n, a.next = n, n.prev = a, n
        }

        function Ms(e, t, r, n) {
            var i = new Bs(e, t, r);
            return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i
        }

        function Cs(e) {
            e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }

        function Bs(e, t, r) {
            this.i = e, this.x = t, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }

        function Ps(e, t, r, n) {
            for (var i = 0, a = t, o = r - n; a < r; a += n) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
            return i
        }

        function Vs(e, t, r, n, i) {
            Ts(e, t, r || 0, n || e.length - 1, i || Ds)
        }

        function Ts(e, t, r, n, i) {
            for (; n > r;) {
                if (n - r > 600) {
                    var a = n - r + 1,
                        o = t - r + 1,
                        s = Math.log(a),
                        u = .5 * Math.exp(2 * s / 3),
                        l = .5 * Math.sqrt(s * u * (a - u) / a) * (o - a / 2 < 0 ? -1 : 1);
                    Ts(e, t, Math.max(r, Math.floor(t - o * u / a + l)), Math.min(n, Math.floor(t + (a - o) * u / a + l)), i)
                }
                var c = e[t],
                    h = r,
                    f = n;
                for (Es(e, r, t), i(e[n], c) > 0 && Es(e, r, n); h < f;) {
                    for (Es(e, h, f), h++, f--; i(e[h], c) < 0;) h++;
                    for (; i(e[f], c) > 0;) f--
                }
                0 === i(e[r], c) ? Es(e, r, f) : Es(e, ++f, n), f <= t && (r = f + 1), t <= f && (n = f - 1)
            }
        }

        function Es(e, t, r) {
            var n = e[t];
            e[t] = e[r], e[r] = n
        }

        function Ds(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }

        function Fs(e, t) {
            var r = e.length;
            if (r <= 1) return [e];
            for (var n, i, a = [], o = 0; o < r; o++) {
                var s = T(e[o]);
                0 !== s && (e[o].area = Math.abs(s), void 0 === i && (i = s < 0), i === s < 0 ? (n && a.push(n), n = [e[o]]) : n.push(e[o]))
            }
            if (n && a.push(n), t > 1)
                for (var u = 0; u < a.length; u++) a[u].length <= t || (Vs(a[u], t, 1, a[u].length - 1, Ls), a[u] = a[u].slice(0, t));
            return a
        }

        function Ls(e, t) {
            return t.area - e.area
        }

        function Os(e, t, r) {
            var n, i = r.patternDependencies,
                a = !1,
                o = l(t);
            try {
                for (o.s(); !(n = o.n()).done;) {
                    var s = n.value.paint.get("".concat(e, "-pattern"));
                    s.isConstant() || (a = !0);
                    var u = s.constantOr(null);
                    u && (a = !0, i[u.to] = !0, i[u.from] = !0)
                }
            } catch (c) {
                o.e(c)
            } finally {
                o.f()
            }
            return a
        }

        function Rs(e, t, r, n, i) {
            var a, o = i.patternDependencies,
                s = l(t);
            try {
                for (s.s(); !(a = s.n()).done;) {
                    var u = a.value,
                        c = u.paint.get("".concat(e, "-pattern")).value;
                    if ("constant" !== c.kind) {
                        var h = c.evaluate({
                                zoom: n - 1
                            }, r, {}, i.availableImages),
                            f = c.evaluate({
                                zoom: n
                            }, r, {}, i.availableImages),
                            p = c.evaluate({
                                zoom: n + 1
                            }, r, {}, i.availableImages);
                        h = h && h.name ? h.name : h, f = f && f.name ? f.name : f, p = p && p.name ? p.name : p, o[h] = !0, o[f] = !0, o[p] = !0, r.patterns[u.id] = {
                            min: h,
                            mid: f,
                            max: p
                        }
                    }
                }
            } catch (y) {
                s.e(y)
            } finally {
                s.f()
            }
            return r
        }
        os.deviation = function(e, t, r, n) {
            var i = t && t.length,
                a = Math.abs(Ps(e, 0, i ? t[0] * r : e.length, r));
            if (i)
                for (var o = 0, s = t.length; o < s; o++) a -= Math.abs(Ps(e, t[o] * r, o < s - 1 ? t[o + 1] * r : e.length, r));
            var u = 0;
            for (o = 0; o < n.length; o += 3) {
                var l = n[o] * r,
                    c = n[o + 1] * r,
                    h = n[o + 2] * r;
                u += Math.abs((e[l] - e[h]) * (e[c + 1] - e[l + 1]) - (e[l] - e[c]) * (e[h + 1] - e[l + 1]))
            }
            return 0 === a && 0 === u ? 0 : Math.abs((u - a) / a)
        }, os.flatten = function(e) {
            for (var t = e[0][0].length, r = {
                    vertices: [],
                    holes: [],
                    dimensions: t
                }, n = 0, i = 0; i < e.length; i++) {
                for (var a = 0; a < e[i].length; a++)
                    for (var o = 0; o < t; o++) r.vertices.push(e[i][a][o]);
                i > 0 && r.holes.push(n += e[i - 1].length)
            }
            return r
        }, is.default = as;
        var js = function() {
            function e(t) {
                y(this, e), this.zoom = t.zoom, this.overscaling = t.overscaling, this.layers = t.layers, this.layerIds = this.layers.map((function(e) {
                    return e.id
                })), this.index = t.index, this.hasPattern = !1, this.patternFeatures = [], this.layoutVertexArray = new $i, this.indexArray = new ca, this.indexArray2 = new va, this.programConfigurations = new eo(t.layers, t.zoom), this.segments = new lo, this.segments2 = new lo, this.stateDependentLayerIds = this.layers.filter((function(e) {
                    return e.isStateDependent()
                })).map((function(e) {
                    return e.id
                }))
            }
            return d(e, [{
                key: "populate",
                value: function(e, t, r) {
                    this.hasPattern = Os("fill", this.layers, t);
                    var n, i = this.layers[0].layout.get("fill-sort-key"),
                        a = [],
                        o = l(e);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var s = n.value,
                                u = s.feature,
                                c = s.id,
                                h = s.index,
                                f = s.sourceLayerIndex,
                                p = this.layers[0]._featureFilter.needGeometry,
                                y = yo(u, p);
                            if (this.layers[0]._featureFilter.filter(new Pi(this.zoom), y, r)) {
                                var d = i ? i.evaluate(y, {}, r, t.availableImages) : void 0,
                                    v = {
                                        id: c,
                                        properties: u.properties,
                                        type: u.type,
                                        sourceLayerIndex: f,
                                        index: h,
                                        geometry: p ? y.geometry : po(u),
                                        patterns: {},
                                        sortKey: d
                                    };
                                a.push(v)
                            }
                        }
                    } catch (S) {
                        o.e(S)
                    } finally {
                        o.f()
                    }
                    i && a.sort((function(e, t) {
                        return e.sortKey - t.sortKey
                    }));
                    for (var m = 0, g = a; m < g.length; m++) {
                        var x = g[m],
                            b = x.geometry,
                            k = x.index,
                            w = x.sourceLayerIndex;
                        if (this.hasPattern) {
                            var _ = Rs("fill", this.layers, x, this.zoom, t);
                            this.patternFeatures.push(_)
                        } else this.addFeature(x, b, k, r, {});
                        t.featureIndex.insert(e[k].feature, b, k, w, this.index)
                    }
                }
            }, {
                key: "update",
                value: function(e, t, r) {
                    this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e, t, this.stateDependentLayers, r)
                }
            }, {
                key: "addFeatures",
                value: function(e, t, r) {
                    var n, i = l(this.patternFeatures);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var a = n.value;
                            this.addFeature(a, a.geometry, a.index, t, r)
                        }
                    } catch (o) {
                        i.e(o)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return 0 === this.layoutVertexArray.length
                }
            }, {
                key: "uploadPending",
                value: function() {
                    return !this.uploaded || this.programConfigurations.needsUpload
                }
            }, {
                key: "upload",
                value: function(e) {
                    this.uploaded || (this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, ns), this.indexBuffer = e.createIndexBuffer(this.indexArray), this.indexBuffer2 = e.createIndexBuffer(this.indexArray2)), this.programConfigurations.upload(e), this.uploaded = !0
                }
            }, {
                key: "destroy",
                value: function() {
                    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.indexBuffer2.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.segments2.destroy())
                }
            }, {
                key: "addFeature",
                value: function(e, t, r, n, i) {
                    var a, o = l(Fs(t, 500));
                    try {
                        for (o.s(); !(a = o.n()).done;) {
                            var s, u = a.value,
                                c = 0,
                                h = l(u);
                            try {
                                for (h.s(); !(s = h.n()).done;) {
                                    c += s.value.length
                                }
                            } catch (S) {
                                h.e(S)
                            } finally {
                                h.f()
                            }
                            var f, p = this.segments.prepareSegment(c, this.layoutVertexArray, this.indexArray),
                                y = p.vertexLength,
                                d = [],
                                v = [],
                                m = l(u);
                            try {
                                for (m.s(); !(f = m.n()).done;) {
                                    var g = f.value;
                                    if (0 !== g.length) {
                                        g !== u[0] && v.push(d.length / 2);
                                        var x = this.segments2.prepareSegment(g.length, this.layoutVertexArray, this.indexArray2),
                                            b = x.vertexLength;
                                        this.layoutVertexArray.emplaceBack(g[0].x, g[0].y), this.indexArray2.emplaceBack(b + g.length - 1, b), d.push(g[0].x), d.push(g[0].y);
                                        for (var k = 1; k < g.length; k++) this.layoutVertexArray.emplaceBack(g[k].x, g[k].y), this.indexArray2.emplaceBack(b + k - 1, b + k), d.push(g[k].x), d.push(g[k].y);
                                        x.vertexLength += g.length, x.primitiveLength += g.length
                                    }
                                }
                            } catch (S) {
                                m.e(S)
                            } finally {
                                m.f()
                            }
                            for (var w = is(d, v), _ = 0; _ < w.length; _ += 3) this.indexArray.emplaceBack(y + w[_], y + w[_ + 1], y + w[_ + 2]);
                            p.vertexLength += c, p.primitiveLength += w.length / 3
                        }
                    } catch (S) {
                        o.e(S)
                    } finally {
                        o.f()
                    }
                    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e, r, i, n)
                }
            }]), e
        }();
        vr("FillBucket", js, {
            omit: ["layers", "patternFeatures"]
        });
        var Us = new Xi({
                "fill-sort-key": new Ui(zr.layout_fill["fill-sort-key"])
            }),
            qs = {
                paint: new Xi({
                    "fill-antialias": new ji(zr.paint_fill["fill-antialias"]),
                    "fill-opacity": new Ui(zr.paint_fill["fill-opacity"]),
                    "fill-color": new Ui(zr.paint_fill["fill-color"]),
                    "fill-outline-color": new Ui(zr.paint_fill["fill-outline-color"]),
                    "fill-translate": new ji(zr.paint_fill["fill-translate"]),
                    "fill-translate-anchor": new ji(zr.paint_fill["fill-translate-anchor"]),
                    "fill-pattern": new qi(zr.paint_fill["fill-pattern"])
                }),
                layout: Us
            },
            Ns = Hi([{
                name: "a_pos_normal_ed",
                components: 4,
                type: "Int16"
            }]),
            Zs = Hi([{
                name: "a_centroid_pos",
                components: 2,
                type: "Uint16"
            }]),
            Xs = Ns.members,
            Gs = Ys;

        function Ys(e, t, r, n, i) {
            this.properties = {}, this.extent = r, this.type = 0, this._pbf = e, this._geometry = -1, this._keys = n, this._values = i, e.readFields(Ks, this, t)
        }

        function Ks(e, t, r) {
            1 == e ? t.id = r.readVarint() : 2 == e ? function(e, t) {
                for (var r = e.readVarint() + e.pos; e.pos < r;) {
                    var n = t._keys[e.readVarint()],
                        i = t._values[e.readVarint()];
                    t.properties[n] = i
                }
            }(r, t) : 3 == e ? t.type = r.readVarint() : 4 == e && (t._geometry = r.pos)
        }

        function Js(e) {
            for (var t, r, n = 0, i = 0, a = e.length, o = a - 1; i < a; o = i++) n += ((r = e[o]).x - (t = e[i]).x) * (t.y + r.y);
            return n
        }
        Ys.types = ["Unknown", "Point", "LineString", "Polygon"], Ys.prototype.loadGeometry = function() {
            var e = this._pbf;
            e.pos = this._geometry;
            for (var t, n = e.readVarint() + e.pos, i = 1, a = 0, o = 0, s = 0, u = []; e.pos < n;) {
                if (a <= 0) {
                    var l = e.readVarint();
                    i = 7 & l, a = l >> 3
                }
                if (a--, 1 === i || 2 === i) o += e.readSVarint(), s += e.readSVarint(), 1 === i && (t && u.push(t), t = []), t.push(new r(o, s));
                else {
                    if (7 !== i) throw new Error("unknown command " + i);
                    t && t.push(t[0].clone())
                }
            }
            return t && u.push(t), u
        }, Ys.prototype.bbox = function() {
            var e = this._pbf;
            e.pos = this._geometry;
            for (var t = e.readVarint() + e.pos, r = 1, n = 0, i = 0, a = 0, o = 1 / 0, s = -1 / 0, u = 1 / 0, l = -1 / 0; e.pos < t;) {
                if (n <= 0) {
                    var c = e.readVarint();
                    r = 7 & c, n = c >> 3
                }
                if (n--, 1 === r || 2 === r)(i += e.readSVarint()) < o && (o = i), i > s && (s = i), (a += e.readSVarint()) < u && (u = a), a > l && (l = a);
                else if (7 !== r) throw new Error("unknown command " + r)
            }
            return [o, u, s, l]
        }, Ys.prototype.toGeoJSON = function(e, t, r) {
            var n, i, a = this.extent * Math.pow(2, r),
                o = this.extent * e,
                s = this.extent * t,
                u = this.loadGeometry(),
                l = Ys.types[this.type];

            function c(e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    e[t] = [360 * (r.x + o) / a - 180, 360 / Math.PI * Math.atan(Math.exp((180 - 360 * (r.y + s) / a) * Math.PI / 180)) - 90]
                }
            }
            switch (this.type) {
                case 1:
                    var h = [];
                    for (n = 0; n < u.length; n++) h[n] = u[n][0];
                    c(u = h);
                    break;
                case 2:
                    for (n = 0; n < u.length; n++) c(u[n]);
                    break;
                case 3:
                    for (u = function(e) {
                            var t = e.length;
                            if (t <= 1) return [e];
                            for (var r, n, i = [], a = 0; a < t; a++) {
                                var o = Js(e[a]);
                                0 !== o && (void 0 === n && (n = o < 0), n === o < 0 ? (r && i.push(r), r = [e[a]]) : r.push(e[a]))
                            }
                            return r && i.push(r), i
                        }(u), n = 0; n < u.length; n++)
                        for (i = 0; i < u[n].length; i++) c(u[n][i])
            }
            1 === u.length ? u = u[0] : l = "Multi" + l;
            var f = {
                type: "Feature",
                geometry: {
                    type: l,
                    coordinates: u
                },
                properties: this.properties
            };
            return "id" in this && (f.id = this.id), f
        };
        var Hs = Ws;

        function Ws(e, t) {
            this.version = 1, this.name = null, this.extent = 4096, this.length = 0, this._pbf = e, this._keys = [], this._values = [], this._features = [], e.readFields($s, this, t), this.length = this._features.length
        }

        function $s(e, t, r) {
            15 === e ? t.version = r.readVarint() : 1 === e ? t.name = r.readString() : 5 === e ? t.extent = r.readVarint() : 2 === e ? t._features.push(r.pos) : 3 === e ? t._keys.push(r.readString()) : 4 === e && t._values.push(function(e) {
                for (var t = null, r = e.readVarint() + e.pos; e.pos < r;) {
                    var n = e.readVarint() >> 3;
                    t = 1 === n ? e.readString() : 2 === n ? e.readFloat() : 3 === n ? e.readDouble() : 4 === n ? e.readVarint64() : 5 === n ? e.readVarint() : 6 === n ? e.readSVarint() : 7 === n ? e.readBoolean() : null
                }
                return t
            }(r))
        }

        function Qs(e, t, r) {
            if (3 === e) {
                var n = new Hs(r, r.readVarint() + r.pos);
                n.length && (t[n.name] = n)
            }
        }
        Ws.prototype.feature = function(e) {
            if (e < 0 || e >= this._features.length) throw new Error("feature index out of bounds");
            this._pbf.pos = this._features[e];
            var t = this._pbf.readVarint() + this._pbf.pos;
            return new Gs(this._pbf, t, this.extent, this._keys, this._values)
        };
        var eu = {
                VectorTile: function(e, t) {
                    this.layers = e.readFields(Qs, {}, t)
                },
                VectorTileFeature: Gs,
                VectorTileLayer: Hs
            },
            tu = eu.VectorTileFeature.types,
            ru = Math.pow(2, 13);

        function nu(e, t, r, n, i, a, o, s) {
            e.emplaceBack((t << 1) + o, (r << 1) + a, (Math.floor(n * ru) << 1) + i, Math.round(s))
        }
        var iu = function() {
                function e() {
                    y(this, e), this.acc = new r(0, 0), this.polyCount = []
                }
                return d(e, [{
                    key: "startRing",
                    value: function(e) {
                        this.currentPolyCount = {
                            edges: 0,
                            top: 0
                        }, this.polyCount.push(this.currentPolyCount), this.min || (this.min = new r(e.x, e.y), this.max = new r(e.x, e.y))
                    }
                }, {
                    key: "append",
                    value: function(e, t) {
                        this.currentPolyCount.edges++, this.acc._add(e);
                        var r = !!this.borders,
                            n = this.min,
                            i = this.max;
                        e.x < n.x ? (n.x = e.x, r = !0) : e.x > i.x && (i.x = e.x, r = !0), e.y < n.y ? (n.y = e.y, r = !0) : e.y > i.y && (i.y = e.y, r = !0), ((0 === e.x || e.x === co) && e.x === t.x) != ((0 === e.y || e.y === co) && e.y === t.y) && this.processBorderOverlap(e, t), r && this.checkBorderIntersection(e, t)
                    }
                }, {
                    key: "checkBorderIntersection",
                    value: function(e, t) {
                        t.x < 0 != e.x < 0 && this.addBorderIntersection(0, et(t.y, e.y, (0 - t.x) / (e.x - t.x))), t.x > co != e.x > co && this.addBorderIntersection(1, et(t.y, e.y, (co - t.x) / (e.x - t.x))), t.y < 0 != e.y < 0 && this.addBorderIntersection(2, et(t.x, e.x, (0 - t.y) / (e.y - t.y))), t.y > co != e.y > co && this.addBorderIntersection(3, et(t.x, e.x, (co - t.y) / (e.y - t.y)))
                    }
                }, {
                    key: "addBorderIntersection",
                    value: function(e, t) {
                        this.borders || (this.borders = [
                            [Number.MAX_VALUE, -Number.MAX_VALUE],
                            [Number.MAX_VALUE, -Number.MAX_VALUE],
                            [Number.MAX_VALUE, -Number.MAX_VALUE],
                            [Number.MAX_VALUE, -Number.MAX_VALUE]
                        ]);
                        var r = this.borders[e];
                        t < r[0] && (r[0] = t), t > r[1] && (r[1] = t)
                    }
                }, {
                    key: "processBorderOverlap",
                    value: function(e, t) {
                        if (e.x === t.x) {
                            if (e.y === t.y) return;
                            var r = 0 === e.x ? 0 : 1;
                            this.addBorderIntersection(r, t.y), this.addBorderIntersection(r, e.y)
                        } else {
                            var n = 0 === e.y ? 2 : 3;
                            this.addBorderIntersection(n, t.x), this.addBorderIntersection(n, e.x)
                        }
                    }
                }, {
                    key: "centroid",
                    value: function() {
                        var e = this.polyCount.reduce((function(e, t) {
                            return e + t.edges
                        }), 0);
                        return 0 !== e ? this.acc.div(e)._round() : new r(0, 0)
                    }
                }, {
                    key: "span",
                    value: function() {
                        return new r(this.max.x - this.min.x, this.max.y - this.min.y)
                    }
                }, {
                    key: "intersectsCount",
                    value: function() {
                        return this.borders.reduce((function(e, t) {
                            return e + +(t[0] !== Number.MAX_VALUE)
                        }), 0)
                    }
                }]), e
            }(),
            au = function() {
                function e(t) {
                    y(this, e), this.zoom = t.zoom, this.overscaling = t.overscaling, this.layers = t.layers, this.layerIds = this.layers.map((function(e) {
                        return e.id
                    })), this.index = t.index, this.hasPattern = !1, this.layoutVertexArray = new Qi, this.centroidVertexArray = new Va, this.indexArray = new ca, this.programConfigurations = new eo(t.layers, t.zoom), this.segments = new lo, this.stateDependentLayerIds = this.layers.filter((function(e) {
                        return e.isStateDependent()
                    })).map((function(e) {
                        return e.id
                    })), this.enableTerrain = t.enableTerrain
                }
                return d(e, [{
                    key: "populate",
                    value: function(e, t, r) {
                        this.features = [], this.hasPattern = Os("fill-extrusion", this.layers, t), this.featuresOnBorder = [], this.borders = [
                            [],
                            [],
                            [],
                            []
                        ], this.borderDone = [!1, !1, !1, !1], this.tileToMeter = function(e) {
                            var t = Math.exp(Math.PI * (1 - e.y / (1 << e.z) * 2));
                            return 80150034 * t / (t * t + 1) / co / (1 << e.z)
                        }(r);
                        var n, i = l(e);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var a = n.value,
                                    o = a.feature,
                                    s = a.id,
                                    u = a.index,
                                    c = a.sourceLayerIndex,
                                    h = this.layers[0]._featureFilter.needGeometry,
                                    f = yo(o, h);
                                if (this.layers[0]._featureFilter.filter(new Pi(this.zoom), f, r)) {
                                    var p = {
                                            id: s,
                                            sourceLayerIndex: c,
                                            index: u,
                                            geometry: h ? f.geometry : po(o),
                                            properties: o.properties,
                                            type: o.type,
                                            patterns: {}
                                        },
                                        y = this.layoutVertexArray.length;
                                    this.hasPattern ? this.features.push(Rs("fill-extrusion", this.layers, p, this.zoom, t)) : this.addFeature(p, p.geometry, u, r, {}), t.featureIndex.insert(o, p.geometry, u, c, this.index, y)
                                }
                            }
                        } catch (d) {
                            i.e(d)
                        } finally {
                            i.f()
                        }
                        this.sortBorders()
                    }
                }, {
                    key: "addFeatures",
                    value: function(e, t, r) {
                        var n, i = l(this.features);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var a = n.value,
                                    o = a.geometry;
                                this.addFeature(a, o, a.index, t, r)
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                        this.sortBorders()
                    }
                }, {
                    key: "update",
                    value: function(e, t, r) {
                        this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e, t, this.stateDependentLayers, r)
                    }
                }, {
                    key: "isEmpty",
                    value: function() {
                        return 0 === this.layoutVertexArray.length
                    }
                }, {
                    key: "uploadPending",
                    value: function() {
                        return !this.uploaded || this.programConfigurations.needsUpload
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        this.uploaded || (this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, Xs), this.indexBuffer = e.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e), this.uploaded = !0
                    }
                }, {
                    key: "uploadCentroid",
                    value: function(e) {
                        0 !== this.centroidVertexArray.length && (this.centroidVertexBuffer ? this.needsCentroidUpdate && this.centroidVertexBuffer.updateData(this.centroidVertexArray) : this.centroidVertexBuffer = e.createVertexBuffer(this.centroidVertexArray, Zs.members, !0), this.needsCentroidUpdate = !1)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.centroidVertexBuffer && this.centroidVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy())
                    }
                }, {
                    key: "addFeature",
                    value: function(e, t, r, n, i) {
                        var a, o, s = this.enableTerrain ? new iu : null,
                            u = l(Fs(t, 500));
                        try {
                            for (u.s(); !(a = u.n()).done;) {
                                var c = a.value,
                                    h = 0,
                                    f = this.segments.prepareSegment(4, this.layoutVertexArray, this.indexArray);
                                if (!(0 === c.length || (o = c[0]).every((function(e) {
                                        return e.x <= 0
                                    })) || o.every((function(e) {
                                        return e.x >= co
                                    })) || o.every((function(e) {
                                        return e.y <= 0
                                    })) || o.every((function(e) {
                                        return e.y >= co
                                    })))) {
                                    for (var p = 0; p < c.length; p++) {
                                        var y = c[p];
                                        if (0 !== y.length) {
                                            h += y.length;
                                            var d = 0;
                                            s && s.startRing(y[0]);
                                            for (var v = 0; v < y.length; v++) {
                                                var m = y[v];
                                                if (v >= 1) {
                                                    var g = y[v - 1];
                                                    if (!ou(m, g)) {
                                                        s && s.append(m, g), f.vertexLength + 4 > lo.MAX_VERTEX_ARRAY_LENGTH && (f = this.segments.prepareSegment(4, this.layoutVertexArray, this.indexArray));
                                                        var x = m.sub(g)._perp(),
                                                            b = x.x / (Math.abs(x.x) + Math.abs(x.y)),
                                                            k = x.y > 0 ? 1 : 0,
                                                            w = g.dist(m);
                                                        d + w > 32768 && (d = 0), nu(this.layoutVertexArray, m.x, m.y, b, k, 0, 0, d), nu(this.layoutVertexArray, m.x, m.y, b, k, 0, 1, d), d += w, nu(this.layoutVertexArray, g.x, g.y, b, k, 0, 0, d), nu(this.layoutVertexArray, g.x, g.y, b, k, 0, 1, d);
                                                        var _ = f.vertexLength;
                                                        this.indexArray.emplaceBack(_, _ + 2, _ + 1), this.indexArray.emplaceBack(_ + 1, _ + 2, _ + 3), f.vertexLength += 4, f.primitiveLength += 2
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (f.vertexLength + h > lo.MAX_VERTEX_ARRAY_LENGTH && (f = this.segments.prepareSegment(h, this.layoutVertexArray, this.indexArray)), "Polygon" === tu[e.type]) {
                                        for (var S = [], A = [], I = f.vertexLength, z = 0; z < c.length; z++) {
                                            var M = c[z];
                                            if (0 !== M.length) {
                                                M !== c[0] && A.push(S.length / 2);
                                                for (var C = 0; C < M.length; C++) {
                                                    var B = M[C];
                                                    nu(this.layoutVertexArray, B.x, B.y, 0, 0, 1, 1, 0), S.push(B.x), S.push(B.y), s && s.currentPolyCount.top++
                                                }
                                            }
                                        }
                                        for (var P = is(S, A), V = 0; V < P.length; V += 3) this.indexArray.emplaceBack(I + P[V], I + P[V + 2], I + P[V + 1]);
                                        f.primitiveLength += P.length / 3, f.vertexLength += h
                                    }
                                }
                            }
                        } catch (F) {
                            u.e(F)
                        } finally {
                            u.f()
                        }
                        if (s && s.polyCount.length > 0) {
                            if (s.borders) {
                                s.vertexArrayOffset = this.centroidVertexArray.length;
                                for (var T = s.borders, E = this.featuresOnBorder.push(s) - 1, D = 0; D < 4; D++) T[D][0] !== Number.MAX_VALUE && this.borders[D].push(E)
                            }
                            this.encodeCentroid(s.borders ? void 0 : s.centroid(), s)
                        }
                        this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e, r, i, n)
                    }
                }, {
                    key: "sortBorders",
                    value: function() {
                        for (var e = this, t = function(t) {
                                e.borders[t].sort((function(r, n) {
                                    return e.featuresOnBorder[r].borders[t][0] - e.featuresOnBorder[n].borders[t][0]
                                }))
                            }, r = 0; r < 4; r++) t(r)
                    }
                }, {
                    key: "encodeCentroid",
                    value: function(e, t) {
                        var r, n, i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (e)
                            if (0 !== e.y) {
                                var a = t.span()._mult(this.tileToMeter);
                                r = (Math.max(e.x, 1) << 3) + Math.min(7, Math.round(a.x / 10)), n = (Math.max(e.y, 1) << 3) + Math.min(7, Math.round(a.y / 10))
                            } else r = Math.ceil(7 * (e.x + 450)), n = 0;
                        else r = 0, n = +i;
                        var o, s = i ? this.centroidVertexArray.length : t.vertexArrayOffset,
                            u = l(t.polyCount);
                        try {
                            for (u.s(); !(o = u.n()).done;) {
                                var c = o.value;
                                i && this.centroidVertexArray.resize(this.centroidVertexArray.length + 4 * c.edges + c.top);
                                for (var h = 0; h < 2 * c.edges; h++) this.centroidVertexArray.emplace(s++, 0, n), this.centroidVertexArray.emplace(s++, r, n);
                                for (var f = 0; f < c.top; f++) this.centroidVertexArray.emplace(s++, r, n)
                            }
                        } catch (p) {
                            u.e(p)
                        } finally {
                            u.f()
                        }
                    }
                }]), e
            }();

        function ou(e, t) {
            return e.x === t.x && (e.x < 0 || e.x > co) || e.y === t.y && (e.y < 0 || e.y > co)
        }
        vr("FillExtrusionBucket", au, {
            omit: ["layers", "features"]
        }), vr("PartMetadata", iu);
        var su = {
            paint: new Xi({
                "fill-extrusion-opacity": new ji(zr["paint_fill-extrusion"]["fill-extrusion-opacity"]),
                "fill-extrusion-color": new Ui(zr["paint_fill-extrusion"]["fill-extrusion-color"]),
                "fill-extrusion-translate": new ji(zr["paint_fill-extrusion"]["fill-extrusion-translate"]),
                "fill-extrusion-translate-anchor": new ji(zr["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),
                "fill-extrusion-pattern": new qi(zr["paint_fill-extrusion"]["fill-extrusion-pattern"]),
                "fill-extrusion-height": new Ui(zr["paint_fill-extrusion"]["fill-extrusion-height"]),
                "fill-extrusion-base": new Ui(zr["paint_fill-extrusion"]["fill-extrusion-base"]),
                "fill-extrusion-vertical-gradient": new ji(zr["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])
            })
        };

        function uu(e, t) {
            return e.x * t.x + e.y * t.y
        }

        function lu(e, t) {
            if (1 === e.length) {
                for (var r, n = 0, i = t[n++]; !r || i.equals(r);)
                    if (!(r = t[n++])) return 1 / 0;
                for (; n < t.length; n++) {
                    var a = t[n],
                        o = e[0],
                        s = r.sub(i),
                        u = a.sub(i),
                        c = o.sub(i),
                        h = uu(s, s),
                        f = uu(s, u),
                        p = uu(u, u),
                        y = uu(c, s),
                        d = uu(c, u),
                        v = h * p - f * f,
                        m = (p * y - f * d) / v,
                        g = (h * d - f * y) / v,
                        x = i.z * (1 - m - g) + r.z * m + a.z * g;
                    if (isFinite(x)) return x
                }
                return 1 / 0
            }
            var b, k = 1 / 0,
                w = l(t);
            try {
                for (w.s(); !(b = w.n()).done;) {
                    var _ = b.value;
                    k = Math.min(k, _.z)
                }
            } catch (S) {
                w.e(S)
            } finally {
                w.f()
            }
            return k
        }

        function cu(e) {
            var t = new r(e[0], e[1]);
            return t.z = e[2], t
        }

        function hu(e, t, r, n, i, a, o, s) {
            var u = o * i.getElevationAt(e, t, !0, !0),
                l = 0 !== a[0],
                c = l ? 0 === a[1] ? o * (a[0] / 7 - 450) : o * function(e, t, r) {
                    var n = Math.floor(t[0] / 8),
                        i = Math.floor(t[1] / 8),
                        a = 10 * (t[0] - 8 * n),
                        o = 10 * (t[1] - 8 * i),
                        s = e.getElevationAt(n, i, !0, !0),
                        u = e.getMeterToDEM(r),
                        l = Math.floor(.5 * (a * u - 1)),
                        c = Math.floor(.5 * (o * u - 1)),
                        h = e.tileCoordToPixel(n, i),
                        f = 2 * l + 1,
                        p = 2 * c + 1,
                        y = function(e, t, r, n, i) {
                            return [e.getElevationAtPixel(t, r, !0), e.getElevationAtPixel(t + i, r, !0), e.getElevationAtPixel(t, r + i, !0), e.getElevationAtPixel(t + n, r + i, !0)]
                        }(e, h.x - l, h.y - c, f, p),
                        d = Math.abs(y[0] - y[1]),
                        v = Math.abs(y[2] - y[3]),
                        m = Math.abs(y[0] - y[2]) + Math.abs(y[1] - y[3]),
                        g = Math.min(.25, .5 * u * (d + v) / f),
                        x = Math.min(.25, .5 * u * m / p);
                    return s + Math.max(g * a, x * o)
                }(i, a, s) : u;
            return {
                base: u + (0 === r) ? -1 : r,
                top: l ? Math.max(c + n, u + r + 2) : u + n
            }
        }
        var fu = Hi([{
                name: "a_pos_normal",
                components: 2,
                type: "Int16"
            }, {
                name: "a_data",
                components: 4,
                type: "Uint8"
            }, {
                name: "a_linesofar",
                components: 1,
                type: "Float32"
            }], 4).members,
            pu = Hi([{
                name: "a_packed",
                components: 3,
                type: "Float32"
            }]).members,
            yu = eu.VectorTileFeature.types,
            du = Math.cos(Math.PI / 180 * 37.5),
            vu = function() {
                function e(t) {
                    var r = this;
                    y(this, e), this.zoom = t.zoom, this.overscaling = t.overscaling, this.layers = t.layers, this.layerIds = this.layers.map((function(e) {
                        return e.id
                    })), this.index = t.index, this.hasPattern = !1, this.patternFeatures = [], this.lineClipsArray = [], this.gradients = {}, this.layers.forEach((function(e) {
                        r.gradients[e.id] = {}
                    })), this.layoutVertexArray = new ea, this.layoutVertexArray2 = new ta, this.indexArray = new ca, this.programConfigurations = new eo(t.layers, t.zoom), this.segments = new lo, this.maxLineLength = 0, this.stateDependentLayerIds = this.layers.filter((function(e) {
                        return e.isStateDependent()
                    })).map((function(e) {
                        return e.id
                    }))
                }
                return d(e, [{
                    key: "populate",
                    value: function(e, t, r) {
                        this.hasPattern = Os("line", this.layers, t);
                        var n, i = this.layers[0].layout.get("line-sort-key"),
                            a = [],
                            o = l(e);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var s = n.value,
                                    u = s.feature,
                                    c = s.id,
                                    h = s.index,
                                    f = s.sourceLayerIndex,
                                    p = this.layers[0]._featureFilter.needGeometry,
                                    y = yo(u, p);
                                if (this.layers[0]._featureFilter.filter(new Pi(this.zoom), y, r)) {
                                    var d = i ? i.evaluate(y, {}, r) : void 0,
                                        v = {
                                            id: c,
                                            properties: u.properties,
                                            type: u.type,
                                            sourceLayerIndex: f,
                                            index: h,
                                            geometry: p ? y.geometry : po(u),
                                            patterns: {},
                                            sortKey: d
                                        };
                                    a.push(v)
                                }
                            }
                        } catch (z) {
                            o.e(z)
                        } finally {
                            o.f()
                        }
                        i && a.sort((function(e, t) {
                            return e.sortKey - t.sortKey
                        }));
                        for (var m = t.lineAtlas, g = t.featureIndex, x = this.addConstantDashes(m), b = 0, k = a; b < k.length; b++) {
                            var w = k[b],
                                _ = w.geometry,
                                S = w.index,
                                A = w.sourceLayerIndex;
                            if (x && this.addFeatureDashes(w, m), this.hasPattern) {
                                var I = Rs("line", this.layers, w, this.zoom, t);
                                this.patternFeatures.push(I)
                            } else this.addFeature(w, _, S, r, m.positions);
                            g.insert(e[S].feature, _, S, A, this.index)
                        }
                    }
                }, {
                    key: "addConstantDashes",
                    value: function(e) {
                        var t, r = !1,
                            n = l(this.layers);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i = t.value,
                                    a = i.paint.get("line-dasharray").value,
                                    o = i.layout.get("line-cap").value;
                                if ("constant" !== a.kind || "constant" !== o.kind) r = !0;
                                else {
                                    var s = o.value,
                                        u = a.value;
                                    if (!u) continue;
                                    e.addDash(u.from, s), e.addDash(u.to, s), u.other && e.addDash(u.other, s)
                                }
                            }
                        } catch (c) {
                            n.e(c)
                        } finally {
                            n.f()
                        }
                        return r
                    }
                }, {
                    key: "addFeatureDashes",
                    value: function(e, t) {
                        var r, n = this.zoom,
                            i = l(this.layers);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var a = r.value,
                                    o = a.paint.get("line-dasharray").value,
                                    s = a.layout.get("line-cap").value;
                                if ("constant" !== o.kind || "constant" !== s.kind) {
                                    var u = void 0,
                                        c = void 0,
                                        h = void 0,
                                        f = void 0,
                                        p = void 0,
                                        y = void 0;
                                    if ("constant" === o.kind) {
                                        var d = o.value;
                                        if (!d) continue;
                                        u = d.other || d.to, c = d.to, h = d.from
                                    } else u = o.evaluate({
                                        zoom: n - 1
                                    }, e), c = o.evaluate({
                                        zoom: n
                                    }, e), h = o.evaluate({
                                        zoom: n + 1
                                    }, e);
                                    "constant" === s.kind ? f = p = y = s.value : (f = s.evaluate({
                                        zoom: n - 1
                                    }, e), p = s.evaluate({
                                        zoom: n
                                    }, e), y = s.evaluate({
                                        zoom: n + 1
                                    }, e)), t.addDash(u, f), t.addDash(c, p), t.addDash(h, y);
                                    var v = t.getKey(u, f),
                                        m = t.getKey(c, p),
                                        g = t.getKey(h, y);
                                    e.patterns[a.id] = {
                                        min: v,
                                        mid: m,
                                        max: g
                                    }
                                }
                            }
                        } catch (x) {
                            i.e(x)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "update",
                    value: function(e, t, r) {
                        this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e, t, this.stateDependentLayers, r)
                    }
                }, {
                    key: "addFeatures",
                    value: function(e, t, r) {
                        var n, i = l(this.patternFeatures);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var a = n.value;
                                this.addFeature(a, a.geometry, a.index, t, r)
                            }
                        } catch (o) {
                            i.e(o)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "isEmpty",
                    value: function() {
                        return 0 === this.layoutVertexArray.length
                    }
                }, {
                    key: "uploadPending",
                    value: function() {
                        return !this.uploaded || this.programConfigurations.needsUpload
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        this.uploaded || (0 !== this.layoutVertexArray2.length && (this.layoutVertexBuffer2 = e.createVertexBuffer(this.layoutVertexArray2, pu)), this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, fu), this.indexBuffer = e.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e), this.uploaded = !0
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy())
                    }
                }, {
                    key: "lineFeatureClips",
                    value: function(e) {
                        if (e.properties && e.properties.hasOwnProperty("mapbox_clip_start") && e.properties.hasOwnProperty("mapbox_clip_end")) return {
                            start: +e.properties.mapbox_clip_start,
                            end: +e.properties.mapbox_clip_end
                        }
                    }
                }, {
                    key: "addFeature",
                    value: function(e, t, r, n, i) {
                        var a = this.layers[0].layout,
                            o = a.get("line-join").evaluate(e, {}),
                            s = a.get("line-cap").evaluate(e, {}),
                            u = a.get("line-miter-limit"),
                            c = a.get("line-round-limit");
                        this.lineClips = this.lineFeatureClips(e);
                        var h, f = l(t);
                        try {
                            for (f.s(); !(h = f.n()).done;) {
                                var p = h.value;
                                this.addLine(p, e, o, s, u, c)
                            }
                        } catch (y) {
                            f.e(y)
                        } finally {
                            f.f()
                        }
                        this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e, r, i, n)
                    }
                }, {
                    key: "addLine",
                    value: function(e, t, r, n, i, a) {
                        if (this.distance = 0, this.scaledDistance = 0, this.totalDistance = 0, this.lineSoFar = 0, this.lineClips) {
                            this.lineClipsArray.push(this.lineClips);
                            for (var o = 0; o < e.length - 1; o++) this.totalDistance += e[o].dist(e[o + 1]);
                            this.updateScaledDistance(), this.maxLineLength = Math.max(this.maxLineLength, this.totalDistance)
                        }
                        for (var s = "Polygon" === yu[t.type], u = e.length; u >= 2 && e[u - 1].equals(e[u - 2]);) u--;
                        for (var l = 0; l < u - 1 && e[l].equals(e[l + 1]);) l++;
                        if (!(u < (s ? 3 : 2))) {
                            "bevel" === r && (i = 1.05);
                            var c, h, f, p, y, d = this.overscaling <= 16 ? 122880 / (512 * this.overscaling) : 0,
                                v = this.segments.prepareSegment(10 * u, this.layoutVertexArray, this.indexArray);
                            this.e1 = this.e2 = -1, s && (c = e[u - 2], y = e[l].sub(c)._unit()._perp());
                            for (var m = l; m < u; m++)
                                if (!(f = m === u - 1 ? s ? e[l + 1] : void 0 : e[m + 1]) || !e[m].equals(f)) {
                                    y && (p = y), c && (h = c), c = e[m], y = f ? f.sub(c)._unit()._perp() : p;
                                    var g = (p = p || y).add(y);
                                    0 === g.x && 0 === g.y || g._unit();
                                    var x = p.x * y.x + p.y * y.y,
                                        b = g.x * y.x + g.y * y.y,
                                        k = 0 !== b ? 1 / b : 1 / 0,
                                        w = 2 * Math.sqrt(2 - 2 * b),
                                        _ = b < du && h && f,
                                        S = p.x * y.y - p.y * y.x > 0;
                                    if (_ && m > l) {
                                        var A = c.dist(h);
                                        if (A > 2 * d) {
                                            var I = c.sub(c.sub(h)._mult(d / A)._round());
                                            this.updateDistance(h, I), this.addCurrentVertex(I, p, 0, 0, v), h = I
                                        }
                                    }
                                    var z = h && f,
                                        M = z ? r : s ? "butt" : n;
                                    if (z && "round" === M && (k < a ? M = "miter" : k <= 2 && (M = "fakeround")), "miter" === M && k > i && (M = "bevel"), "bevel" === M && (k > 2 && (M = "flipbevel"), k < i && (M = "miter")), h && this.updateDistance(h, c), "miter" === M) g._mult(k), this.addCurrentVertex(c, g, 0, 0, v);
                                    else if ("flipbevel" === M) {
                                        if (k > 100) g = y.mult(-1);
                                        else {
                                            var C = k * p.add(y).mag() / p.sub(y).mag();
                                            g._perp()._mult(C * (S ? -1 : 1))
                                        }
                                        this.addCurrentVertex(c, g, 0, 0, v), this.addCurrentVertex(c, g.mult(-1), 0, 0, v)
                                    } else if ("bevel" === M || "fakeround" === M) {
                                        var B = -Math.sqrt(k * k - 1),
                                            P = S ? B : 0,
                                            V = S ? 0 : B;
                                        if (h && this.addCurrentVertex(c, p, P, V, v), "fakeround" === M)
                                            for (var T = Math.round(180 * w / Math.PI / 20), E = 1; E < T; E++) {
                                                var D = E / T;
                                                if (.5 !== D) {
                                                    var F = D - .5;
                                                    D += D * F * (D - 1) * ((1.0904 + x * (x * (3.55645 - 1.43519 * x) - 3.2452)) * F * F + (.848013 + x * (.215638 * x - 1.06021)))
                                                }
                                                var L = y.sub(p)._mult(D)._add(p)._unit()._mult(S ? -1 : 1);
                                                this.addHalfVertex(c, L.x, L.y, !1, S, 0, v)
                                            }
                                        f && this.addCurrentVertex(c, y, -P, -V, v)
                                    } else if ("butt" === M) this.addCurrentVertex(c, g, 0, 0, v);
                                    else if ("square" === M) {
                                        var O = h ? 1 : -1;
                                        h || this.addCurrentVertex(c, g, O, O, v), this.addCurrentVertex(c, g, 0, 0, v), h && this.addCurrentVertex(c, g, O, O, v)
                                    } else "round" === M && (h && (this.addCurrentVertex(c, p, 0, 0, v), this.addCurrentVertex(c, p, 1, 1, v, !0)), f && (this.addCurrentVertex(c, y, -1, -1, v, !0), this.addCurrentVertex(c, y, 0, 0, v)));
                                    if (_ && m < u - 1) {
                                        var R = c.dist(f);
                                        if (R > 2 * d) {
                                            var j = c.add(f.sub(c)._mult(d / R)._round());
                                            this.updateDistance(c, j), this.addCurrentVertex(j, y, 0, 0, v), c = j
                                        }
                                    }
                                }
                        }
                    }
                }, {
                    key: "addCurrentVertex",
                    value: function(e, t, r, n, i) {
                        var a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                            o = t.y * n - t.x,
                            s = -t.y - t.x * n;
                        this.addHalfVertex(e, t.x + t.y * r, t.y - t.x * r, a, !1, r, i), this.addHalfVertex(e, o, s, a, !0, -n, i)
                    }
                }, {
                    key: "addHalfVertex",
                    value: function(e, t, r, n, i, a, o) {
                        var s = e.x,
                            u = e.y;
                        this.layoutVertexArray.emplaceBack((s << 1) + (n ? 1 : 0), (u << 1) + (i ? 1 : 0), Math.round(63 * t) + 128, Math.round(63 * r) + 128, 1 + (0 === a ? 0 : a < 0 ? -1 : 1), 0, this.lineSoFar), this.lineClips && this.layoutVertexArray2.emplaceBack(this.scaledDistance, this.lineClipsArray.length, this.lineSoFar);
                        var l = o.vertexLength++;
                        this.e1 >= 0 && this.e2 >= 0 && (this.indexArray.emplaceBack(this.e1, this.e2, l), o.primitiveLength++), i ? this.e2 = l : this.e1 = l
                    }
                }, {
                    key: "updateScaledDistance",
                    value: function() {
                        if (this.lineClips) {
                            var e = this.totalDistance / (this.lineClips.end - this.lineClips.start);
                            this.scaledDistance = this.distance / this.totalDistance, this.lineSoFar = e * this.lineClips.start + this.distance
                        } else this.lineSoFar = this.distance
                    }
                }, {
                    key: "updateDistance",
                    value: function(e, t) {
                        this.distance += e.dist(t), this.updateScaledDistance()
                    }
                }]), e
            }();
        vr("LineBucket", vu, {
            omit: ["layers", "patternFeatures"]
        });
        var mu = new Xi({
                "line-cap": new Ui(zr.layout_line["line-cap"]),
                "line-join": new Ui(zr.layout_line["line-join"]),
                "line-miter-limit": new ji(zr.layout_line["line-miter-limit"]),
                "line-round-limit": new ji(zr.layout_line["line-round-limit"]),
                "line-sort-key": new Ui(zr.layout_line["line-sort-key"])
            }),
            gu = {
                paint: new Xi({
                    "line-opacity": new Ui(zr.paint_line["line-opacity"]),
                    "line-color": new Ui(zr.paint_line["line-color"]),
                    "line-translate": new ji(zr.paint_line["line-translate"]),
                    "line-translate-anchor": new ji(zr.paint_line["line-translate-anchor"]),
                    "line-width": new Ui(zr.paint_line["line-width"]),
                    "line-gap-width": new Ui(zr.paint_line["line-gap-width"]),
                    "line-offset": new Ui(zr.paint_line["line-offset"]),
                    "line-blur": new Ui(zr.paint_line["line-blur"]),
                    "line-dasharray": new qi(zr.paint_line["line-dasharray"]),
                    "line-pattern": new qi(zr.paint_line["line-pattern"]),
                    "line-gradient": new Zi(zr.paint_line["line-gradient"])
                }),
                layout: mu
            },
            xu = new(function(e) {
                c(r, e);
                var t = h(r);

                function r() {
                    return y(this, r), t.apply(this, arguments)
                }
                return d(r, [{
                    key: "possiblyEvaluate",
                    value: function(e, t) {
                        return t = new Pi(Math.floor(t.zoom), {
                            now: t.now,
                            fadeDuration: t.fadeDuration,
                            zoomHistory: t.zoomHistory,
                            transition: t.transition
                        }), i(a(r.prototype), "possiblyEvaluate", this).call(this, e, t)
                    }
                }, {
                    key: "evaluate",
                    value: function(e, t, n, o) {
                        return t = _({}, t, {
                            zoom: Math.floor(t.zoom)
                        }), i(a(r.prototype), "evaluate", this).call(this, e, t, n, o)
                    }
                }]), r
            }(Ui))(gu.paint.properties["line-width"].specification);

        function bu(e, t) {
            return t > 0 ? t + 2 * e : e
        }
        xu.useIntegerZoom = !0;
        var ku = Hi([{
                name: "a_pos_offset",
                components: 4,
                type: "Int16"
            }, {
                name: "a_tex_size",
                components: 4,
                type: "Uint16"
            }, {
                name: "a_pixeloffset",
                components: 4,
                type: "Int16"
            }, {
                name: "a_z_tile_anchor",
                components: 4,
                type: "Int16"
            }], 4),
            wu = Hi([{
                name: "a_projected_pos",
                components: 3,
                type: "Float32"
            }], 4);
        Hi([{
            name: "a_fade_opacity",
            components: 1,
            type: "Uint32"
        }], 4);
        var _u = Hi([{
                name: "a_placed",
                components: 2,
                type: "Uint8"
            }, {
                name: "a_shift",
                components: 2,
                type: "Float32"
            }]),
            Su = Hi([{
                name: "a_size_scale",
                components: 1,
                type: "Float32"
            }, {
                name: "a_padding",
                components: 2,
                type: "Float32"
            }]);
        Hi([{
            type: "Int16",
            name: "projectedAnchorX"
        }, {
            type: "Int16",
            name: "projectedAnchorY"
        }, {
            type: "Int16",
            name: "projectedAnchorZ"
        }, {
            type: "Int16",
            name: "tileAnchorX"
        }, {
            type: "Int16",
            name: "tileAnchorY"
        }, {
            type: "Float32",
            name: "x1"
        }, {
            type: "Float32",
            name: "y1"
        }, {
            type: "Float32",
            name: "x2"
        }, {
            type: "Float32",
            name: "y2"
        }, {
            type: "Int16",
            name: "padding"
        }, {
            type: "Uint32",
            name: "featureIndex"
        }, {
            type: "Uint16",
            name: "sourceLayerIndex"
        }, {
            type: "Uint16",
            name: "bucketIndex"
        }]);
        var Au = Hi([{
            name: "a_pos",
            components: 3,
            type: "Int16"
        }, {
            name: "a_anchor_pos",
            components: 2,
            type: "Int16"
        }, {
            name: "a_extrude",
            components: 2,
            type: "Int16"
        }], 4);
        Hi([{
            name: "a_pos_2f",
            components: 2,
            type: "Float32"
        }, {
            name: "a_radius",
            components: 1,
            type: "Float32"
        }, {
            name: "a_flags",
            components: 2,
            type: "Int16"
        }], 4), Hi([{
            name: "triangle",
            components: 3,
            type: "Uint16"
        }]), Hi([{
            type: "Int16",
            name: "projectedAnchorX"
        }, {
            type: "Int16",
            name: "projectedAnchorY"
        }, {
            type: "Int16",
            name: "projectedAnchorZ"
        }, {
            type: "Float32",
            name: "tileAnchorX"
        }, {
            type: "Float32",
            name: "tileAnchorY"
        }, {
            type: "Uint16",
            name: "glyphStartIndex"
        }, {
            type: "Uint16",
            name: "numGlyphs"
        }, {
            type: "Uint32",
            name: "vertexStartIndex"
        }, {
            type: "Uint32",
            name: "lineStartIndex"
        }, {
            type: "Uint32",
            name: "lineLength"
        }, {
            type: "Uint16",
            name: "segment"
        }, {
            type: "Uint16",
            name: "lowerSize"
        }, {
            type: "Uint16",
            name: "upperSize"
        }, {
            type: "Float32",
            name: "lineOffsetX"
        }, {
            type: "Float32",
            name: "lineOffsetY"
        }, {
            type: "Uint8",
            name: "writingMode"
        }, {
            type: "Uint8",
            name: "placedOrientation"
        }, {
            type: "Uint8",
            name: "hidden"
        }, {
            type: "Uint32",
            name: "crossTileID"
        }, {
            type: "Int16",
            name: "associatedIconIndex"
        }, {
            type: "Uint8",
            name: "flipState"
        }]), Hi([{
            type: "Int16",
            name: "projectedAnchorX"
        }, {
            type: "Int16",
            name: "projectedAnchorY"
        }, {
            type: "Int16",
            name: "projectedAnchorZ"
        }, {
            type: "Float32",
            name: "tileAnchorX"
        }, {
            type: "Float32",
            name: "tileAnchorY"
        }, {
            type: "Int16",
            name: "rightJustifiedTextSymbolIndex"
        }, {
            type: "Int16",
            name: "centerJustifiedTextSymbolIndex"
        }, {
            type: "Int16",
            name: "leftJustifiedTextSymbolIndex"
        }, {
            type: "Int16",
            name: "verticalPlacedTextSymbolIndex"
        }, {
            type: "Int16",
            name: "placedIconSymbolIndex"
        }, {
            type: "Int16",
            name: "verticalPlacedIconSymbolIndex"
        }, {
            type: "Uint16",
            name: "key"
        }, {
            type: "Uint16",
            name: "textBoxStartIndex"
        }, {
            type: "Uint16",
            name: "textBoxEndIndex"
        }, {
            type: "Uint16",
            name: "verticalTextBoxStartIndex"
        }, {
            type: "Uint16",
            name: "verticalTextBoxEndIndex"
        }, {
            type: "Uint16",
            name: "iconBoxStartIndex"
        }, {
            type: "Uint16",
            name: "iconBoxEndIndex"
        }, {
            type: "Uint16",
            name: "verticalIconBoxStartIndex"
        }, {
            type: "Uint16",
            name: "verticalIconBoxEndIndex"
        }, {
            type: "Uint16",
            name: "featureIndex"
        }, {
            type: "Uint16",
            name: "numHorizontalGlyphVertices"
        }, {
            type: "Uint16",
            name: "numVerticalGlyphVertices"
        }, {
            type: "Uint16",
            name: "numIconVertices"
        }, {
            type: "Uint16",
            name: "numVerticalIconVertices"
        }, {
            type: "Uint16",
            name: "useRuntimeCollisionCircles"
        }, {
            type: "Uint32",
            name: "crossTileID"
        }, {
            type: "Float32",
            components: 2,
            name: "textOffset"
        }, {
            type: "Float32",
            name: "collisionCircleDiameter"
        }]), Hi([{
            type: "Float32",
            name: "offsetX"
        }]), Hi([{
            type: "Int16",
            name: "x"
        }, {
            type: "Int16",
            name: "y"
        }, {
            type: "Int16",
            name: "tileUnitDistanceFromAnchor"
        }]);
        var Iu = 24,
            zu = 128;

        function Mu(e, t) {
            var r = t.expression;
            if ("constant" === r.kind) return {
                kind: "constant",
                layoutSize: r.evaluate(new Pi(e + 1))
            };
            if ("source" === r.kind) return {
                kind: "source"
            };
            for (var n = r.zoomStops, i = r.interpolationType, a = 0; a < n.length && n[a] <= e;) a++;
            for (var o = a = Math.max(0, a - 1); o < n.length && n[o] < e + 1;) o++;
            o = Math.min(n.length - 1, o);
            var s = n[a],
                u = n[o];
            return "composite" === r.kind ? {
                kind: "composite",
                minZoom: s,
                maxZoom: u,
                interpolationType: i
            } : {
                kind: "camera",
                minZoom: s,
                maxZoom: u,
                minSize: r.evaluate(new Pi(s)),
                maxSize: r.evaluate(new Pi(u)),
                interpolationType: i
            }
        }

        function Cu(e, t, r) {
            var n = t.uSize,
                i = t.uSizeT,
                a = r.lowerSize,
                o = r.upperSize;
            return "source" === e.kind ? a / zu : "composite" === e.kind ? et(a / zu, o / zu, i) : n
        }

        function Bu(e, t) {
            var r = 0,
                n = 0;
            if ("constant" === e.kind) n = e.layoutSize;
            else if ("source" !== e.kind) {
                var i = e.interpolationType,
                    a = e.minZoom,
                    o = e.maxZoom,
                    s = i ? k(xt.interpolationFactor(i, t, a, o), 0, 1) : 0;
                "camera" === e.kind ? n = et(e.minSize, e.maxSize, s) : r = s
            }
            return {
                uSizeT: r,
                uSize: n
            }
        }

        function Pu(e, t, r) {
            return e.sections.forEach((function(e) {
                e.text = function(e, t, r) {
                    var n = t.layout.get("text-transform").evaluate(r, {});
                    return "uppercase" === n ? e = e.toLocaleUpperCase() : "lowercase" === n && (e = e.toLocaleLowerCase()), Bi.applyArabicShaping && (e = Bi.applyArabicShaping(e)), e
                }(e.text, t, r)
            })), e
        }
        var Vu = {
            "!": "\ufe15",
            "#": "\uff03",
            $: "\uff04",
            "%": "\uff05",
            "&": "\uff06",
            "(": "\ufe35",
            ")": "\ufe36",
            "*": "\uff0a",
            "+": "\uff0b",
            ",": "\ufe10",
            "-": "\ufe32",
            ".": "\u30fb",
            "/": "\uff0f",
            ":": "\ufe13",
            ";": "\ufe14",
            "<": "\ufe3f",
            "=": "\uff1d",
            ">": "\ufe40",
            "?": "\ufe16",
            "@": "\uff20",
            "[": "\ufe47",
            "\\": "\uff3c",
            "]": "\ufe48",
            "^": "\uff3e",
            _: "\ufe33",
            "`": "\uff40",
            "{": "\ufe37",
            "|": "\u2015",
            "}": "\ufe38",
            "~": "\uff5e",
            "\xa2": "\uffe0",
            "\xa3": "\uffe1",
            "\xa5": "\uffe5",
            "\xa6": "\uffe4",
            "\xac": "\uffe2",
            "\xaf": "\uffe3",
            "\u2013": "\ufe32",
            "\u2014": "\ufe31",
            "\u2018": "\ufe43",
            "\u2019": "\ufe44",
            "\u201c": "\ufe41",
            "\u201d": "\ufe42",
            "\u2026": "\ufe19",
            "\u2027": "\u30fb",
            "\u20a9": "\uffe6",
            "\u3001": "\ufe11",
            "\u3002": "\ufe12",
            "\u3008": "\ufe3f",
            "\u3009": "\ufe40",
            "\u300a": "\ufe3d",
            "\u300b": "\ufe3e",
            "\u300c": "\ufe41",
            "\u300d": "\ufe42",
            "\u300e": "\ufe43",
            "\u300f": "\ufe44",
            "\u3010": "\ufe3b",
            "\u3011": "\ufe3c",
            "\u3014": "\ufe39",
            "\u3015": "\ufe3a",
            "\u3016": "\ufe17",
            "\u3017": "\ufe18",
            "\uff01": "\ufe15",
            "\uff08": "\ufe35",
            "\uff09": "\ufe36",
            "\uff0c": "\ufe10",
            "\uff0d": "\ufe32",
            "\uff0e": "\u30fb",
            "\uff1a": "\ufe13",
            "\uff1b": "\ufe14",
            "\uff1c": "\ufe3f",
            "\uff1e": "\ufe40",
            "\uff1f": "\ufe16",
            "\uff3b": "\ufe47",
            "\uff3d": "\ufe48",
            "\uff3f": "\ufe33",
            "\uff5b": "\ufe37",
            "\uff5c": "\u2015",
            "\uff5d": "\ufe38",
            "\uff5f": "\ufe35",
            "\uff60": "\ufe36",
            "\uff61": "\ufe12",
            "\uff62": "\ufe41",
            "\uff63": "\ufe42"
        };

        function Tu(e) {
            return "\ufe36" === e || "\ufe48" === e || "\ufe38" === e || "\ufe44" === e || "\ufe42" === e || "\ufe3e" === e || "\ufe3c" === e || "\ufe3a" === e || "\ufe18" === e || "\ufe40" === e || "\ufe10" === e || "\ufe13" === e || "\ufe14" === e || "\uff40" === e || "\uffe3" === e || "\ufe11" === e || "\ufe12" === e
        }

        function Eu(e) {
            return "\ufe35" === e || "\ufe47" === e || "\ufe37" === e || "\ufe43" === e || "\ufe41" === e || "\ufe3d" === e || "\ufe3b" === e || "\ufe39" === e || "\ufe17" === e || "\ufe3f" === e
        }
        var Du = function(e, t, r, n, i) {
                var a, o, s = 8 * i - n - 1,
                    u = (1 << s) - 1,
                    l = u >> 1,
                    c = -7,
                    h = r ? i - 1 : 0,
                    f = r ? -1 : 1,
                    p = e[t + h];
                for (h += f, a = p & (1 << -c) - 1, p >>= -c, c += s; c > 0; a = 256 * a + e[t + h], h += f, c -= 8);
                for (o = a & (1 << -c) - 1, a >>= -c, c += n; c > 0; o = 256 * o + e[t + h], h += f, c -= 8);
                if (0 === a) a = 1 - l;
                else {
                    if (a === u) return o ? NaN : 1 / 0 * (p ? -1 : 1);
                    o += Math.pow(2, n), a -= l
                }
                return (p ? -1 : 1) * o * Math.pow(2, a - n)
            },
            Fu = function(e, t, r, n, i, a) {
                var o, s, u, l = 8 * a - i - 1,
                    c = (1 << l) - 1,
                    h = c >> 1,
                    f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = n ? 0 : a - 1,
                    y = n ? 1 : -1,
                    d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (o++, u /= 2), o + h >= c ? (s = 0, o = c) : o + h >= 1 ? (s = (t * u - 1) * Math.pow(2, i), o += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; e[r + p] = 255 & s, p += y, s /= 256, i -= 8);
                for (o = o << i | s, l += i; l > 0; e[r + p] = 255 & o, p += y, o /= 256, l -= 8);
                e[r + p - y] |= 128 * d
            },
            Lu = Ou;

        function Ou(e) {
            this.buf = ArrayBuffer.isView && ArrayBuffer.isView(e) ? e : new Uint8Array(e || 0), this.pos = 0, this.type = 0, this.length = this.buf.length
        }
        Ou.Varint = 0, Ou.Fixed64 = 1, Ou.Bytes = 2, Ou.Fixed32 = 5;
        var Ru = 4294967296,
            ju = 1 / Ru,
            Uu = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf8");

        function qu(e) {
            return e.type === Ou.Bytes ? e.readVarint() + e.pos : e.pos + 1
        }

        function Nu(e, t, r) {
            return r ? 4294967296 * t + (e >>> 0) : 4294967296 * (t >>> 0) + (e >>> 0)
        }

        function Zu(e, t, r) {
            var n = t <= 16383 ? 1 : t <= 2097151 ? 2 : t <= 268435455 ? 3 : Math.floor(Math.log(t) / (7 * Math.LN2));
            r.realloc(n);
            for (var i = r.pos - 1; i >= e; i--) r.buf[i + n] = r.buf[i]
        }

        function Xu(e, t) {
            for (var r = 0; r < e.length; r++) t.writeVarint(e[r])
        }

        function Gu(e, t) {
            for (var r = 0; r < e.length; r++) t.writeSVarint(e[r])
        }

        function Yu(e, t) {
            for (var r = 0; r < e.length; r++) t.writeFloat(e[r])
        }

        function Ku(e, t) {
            for (var r = 0; r < e.length; r++) t.writeDouble(e[r])
        }

        function Ju(e, t) {
            for (var r = 0; r < e.length; r++) t.writeBoolean(e[r])
        }

        function Hu(e, t) {
            for (var r = 0; r < e.length; r++) t.writeFixed32(e[r])
        }

        function Wu(e, t) {
            for (var r = 0; r < e.length; r++) t.writeSFixed32(e[r])
        }

        function $u(e, t) {
            for (var r = 0; r < e.length; r++) t.writeFixed64(e[r])
        }

        function Qu(e, t) {
            for (var r = 0; r < e.length; r++) t.writeSFixed64(e[r])
        }

        function el(e, t) {
            return (e[t] | e[t + 1] << 8 | e[t + 2] << 16) + 16777216 * e[t + 3]
        }

        function tl(e, t, r) {
            e[r] = t, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24
        }

        function rl(e, t) {
            return (e[t] | e[t + 1] << 8 | e[t + 2] << 16) + (e[t + 3] << 24)
        }

        function nl(e) {
            var t, r = 0,
                n = 0,
                i = l(e);
            try {
                for (i.s(); !(t = i.n()).done;) {
                    var a = t.value;
                    r += a.w * a.h, n = Math.max(n, a.w)
                }
            } catch (v) {
                i.e(v)
            } finally {
                i.f()
            }
            e.sort((function(e, t) {
                return t.h - e.h
            }));
            var o, s = [{
                    x: 0,
                    y: 0,
                    w: Math.max(Math.ceil(Math.sqrt(r / .95)), n),
                    h: 1 / 0
                }],
                u = 0,
                c = 0,
                h = l(e);
            try {
                for (h.s(); !(o = h.n()).done;)
                    for (var f = o.value, p = s.length - 1; p >= 0; p--) {
                        var y = s[p];
                        if (!(f.w > y.w || f.h > y.h)) {
                            if (f.x = y.x, f.y = y.y, c = Math.max(c, f.y + f.h), u = Math.max(u, f.x + f.w), f.w === y.w && f.h === y.h) {
                                var d = s.pop();
                                p < s.length && (s[p] = d)
                            } else f.h === y.h ? (y.x += f.w, y.w -= f.w) : f.w === y.w ? (y.y += f.h, y.h -= f.h) : (s.push({
                                x: y.x + f.w,
                                y: y.y,
                                w: y.w - f.w,
                                h: f.h
                            }), y.y += f.h, y.h -= f.h);
                            break
                        }
                    }
            } catch (v) {
                h.e(v)
            } finally {
                h.f()
            }
            return {
                w: u,
                h: c,
                fill: r / (u * c) || 0
            }
        }
        Ou.prototype = {
            destroy: function() {
                this.buf = null
            },
            readFields: function(e, t, r) {
                for (r = r || this.length; this.pos < r;) {
                    var n = this.readVarint(),
                        i = n >> 3,
                        a = this.pos;
                    this.type = 7 & n, e(i, t, this), this.pos === a && this.skip(n)
                }
                return t
            },
            readMessage: function(e, t) {
                return this.readFields(e, t, this.readVarint() + this.pos)
            },
            readFixed32: function() {
                var e = el(this.buf, this.pos);
                return this.pos += 4, e
            },
            readSFixed32: function() {
                var e = rl(this.buf, this.pos);
                return this.pos += 4, e
            },
            readFixed64: function() {
                var e = el(this.buf, this.pos) + el(this.buf, this.pos + 4) * Ru;
                return this.pos += 8, e
            },
            readSFixed64: function() {
                var e = el(this.buf, this.pos) + rl(this.buf, this.pos + 4) * Ru;
                return this.pos += 8, e
            },
            readFloat: function() {
                var e = Du(this.buf, this.pos, !0, 23, 4);
                return this.pos += 4, e
            },
            readDouble: function() {
                var e = Du(this.buf, this.pos, !0, 52, 8);
                return this.pos += 8, e
            },
            readVarint: function(e) {
                var t, r, n = this.buf;
                return t = 127 & (r = n[this.pos++]), r < 128 ? t : (t |= (127 & (r = n[this.pos++])) << 7, r < 128 ? t : (t |= (127 & (r = n[this.pos++])) << 14, r < 128 ? t : (t |= (127 & (r = n[this.pos++])) << 21, r < 128 ? t : function(e, t, r) {
                    var n, i, a = r.buf;
                    if (n = (112 & (i = a[r.pos++])) >> 4, i < 128) return Nu(e, n, t);
                    if (n |= (127 & (i = a[r.pos++])) << 3, i < 128) return Nu(e, n, t);
                    if (n |= (127 & (i = a[r.pos++])) << 10, i < 128) return Nu(e, n, t);
                    if (n |= (127 & (i = a[r.pos++])) << 17, i < 128) return Nu(e, n, t);
                    if (n |= (127 & (i = a[r.pos++])) << 24, i < 128) return Nu(e, n, t);
                    if (n |= (1 & (i = a[r.pos++])) << 31, i < 128) return Nu(e, n, t);
                    throw new Error("Expected varint not more than 10 bytes")
                }(t |= (15 & (r = n[this.pos])) << 28, e, this))))
            },
            readVarint64: function() {
                return this.readVarint(!0)
            },
            readSVarint: function() {
                var e = this.readVarint();
                return e % 2 == 1 ? (e + 1) / -2 : e / 2
            },
            readBoolean: function() {
                return Boolean(this.readVarint())
            },
            readString: function() {
                var e = this.readVarint() + this.pos,
                    t = this.pos;
                return this.pos = e, e - t >= 12 && Uu ? function(e, t, r) {
                    return Uu.decode(e.subarray(t, r))
                }(this.buf, t, e) : function(e, t, r) {
                    for (var n = "", i = t; i < r;) {
                        var a, o, s, u = e[i],
                            l = null,
                            c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (i + c > r) break;
                        1 === c ? u < 128 && (l = u) : 2 === c ? 128 == (192 & (a = e[i + 1])) && (l = (31 & u) << 6 | 63 & a) <= 127 && (l = null) : 3 === c ? (o = e[i + 2], 128 == (192 & (a = e[i + 1])) && 128 == (192 & o) && ((l = (15 & u) << 12 | (63 & a) << 6 | 63 & o) <= 2047 || l >= 55296 && l <= 57343) && (l = null)) : 4 === c && (o = e[i + 2], s = e[i + 3], 128 == (192 & (a = e[i + 1])) && 128 == (192 & o) && 128 == (192 & s) && ((l = (15 & u) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) <= 65535 || l >= 1114112) && (l = null)), null === l ? (l = 65533, c = 1) : l > 65535 && (l -= 65536, n += String.fromCharCode(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n += String.fromCharCode(l), i += c
                    }
                    return n
                }(this.buf, t, e)
            },
            readBytes: function() {
                var e = this.readVarint() + this.pos,
                    t = this.buf.subarray(this.pos, e);
                return this.pos = e, t
            },
            readPackedVarint: function(e, t) {
                if (this.type !== Ou.Bytes) return e.push(this.readVarint(t));
                var r = qu(this);
                for (e = e || []; this.pos < r;) e.push(this.readVarint(t));
                return e
            },
            readPackedSVarint: function(e) {
                if (this.type !== Ou.Bytes) return e.push(this.readSVarint());
                var t = qu(this);
                for (e = e || []; this.pos < t;) e.push(this.readSVarint());
                return e
            },
            readPackedBoolean: function(e) {
                if (this.type !== Ou.Bytes) return e.push(this.readBoolean());
                var t = qu(this);
                for (e = e || []; this.pos < t;) e.push(this.readBoolean());
                return e
            },
            readPackedFloat: function(e) {
                if (this.type !== Ou.Bytes) return e.push(this.readFloat());
                var t = qu(this);
                for (e = e || []; this.pos < t;) e.push(this.readFloat());
                return e
            },
            readPackedDouble: function(e) {
                if (this.type !== Ou.Bytes) return e.push(this.readDouble());
                var t = qu(this);
                for (e = e || []; this.pos < t;) e.push(this.readDouble());
                return e
            },
            readPackedFixed32: function(e) {
                if (this.type !== Ou.Bytes) return e.push(this.readFixed32());
                var t = qu(this);
                for (e = e || []; this.pos < t;) e.push(this.readFixed32());
                return e
            },
            readPackedSFixed32: function(e) {
                if (this.type !== Ou.Bytes) return e.push(this.readSFixed32());
                var t = qu(this);
                for (e = e || []; this.pos < t;) e.push(this.readSFixed32());
                return e
            },
            readPackedFixed64: function(e) {
                if (this.type !== Ou.Bytes) return e.push(this.readFixed64());
                var t = qu(this);
                for (e = e || []; this.pos < t;) e.push(this.readFixed64());
                return e
            },
            readPackedSFixed64: function(e) {
                if (this.type !== Ou.Bytes) return e.push(this.readSFixed64());
                var t = qu(this);
                for (e = e || []; this.pos < t;) e.push(this.readSFixed64());
                return e
            },
            skip: function(e) {
                var t = 7 & e;
                if (t === Ou.Varint)
                    for (; this.buf[this.pos++] > 127;);
                else if (t === Ou.Bytes) this.pos = this.readVarint() + this.pos;
                else if (t === Ou.Fixed32) this.pos += 4;
                else {
                    if (t !== Ou.Fixed64) throw new Error("Unimplemented type: " + t);
                    this.pos += 8
                }
            },
            writeTag: function(e, t) {
                this.writeVarint(e << 3 | t)
            },
            realloc: function(e) {
                for (var t = this.length || 16; t < this.pos + e;) t *= 2;
                if (t !== this.length) {
                    var r = new Uint8Array(t);
                    r.set(this.buf), this.buf = r, this.length = t
                }
            },
            finish: function() {
                return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length)
            },
            writeFixed32: function(e) {
                this.realloc(4), tl(this.buf, e, this.pos), this.pos += 4
            },
            writeSFixed32: function(e) {
                this.realloc(4), tl(this.buf, e, this.pos), this.pos += 4
            },
            writeFixed64: function(e) {
                this.realloc(8), tl(this.buf, -1 & e, this.pos), tl(this.buf, Math.floor(e * ju), this.pos + 4), this.pos += 8
            },
            writeSFixed64: function(e) {
                this.realloc(8), tl(this.buf, -1 & e, this.pos), tl(this.buf, Math.floor(e * ju), this.pos + 4), this.pos += 8
            },
            writeVarint: function(e) {
                (e = +e || 0) > 268435455 || e < 0 ? function(e, t) {
                    var r, n;
                    if (e >= 0 ? (r = e % 4294967296 | 0, n = e / 4294967296 | 0) : (n = ~(-e / 4294967296), 4294967295 ^ (r = ~(-e % 4294967296)) ? r = r + 1 | 0 : (r = 0, n = n + 1 | 0)), e >= 0x10000000000000000 || e < -0x10000000000000000) throw new Error("Given varint doesn't fit into 10 bytes");
                    t.realloc(10),
                        function(e, t, r) {
                            r.buf[r.pos++] = 127 & e | 128, e >>>= 7, r.buf[r.pos++] = 127 & e | 128, e >>>= 7, r.buf[r.pos++] = 127 & e | 128, e >>>= 7, r.buf[r.pos++] = 127 & e | 128, r.buf[r.pos] = 127 & (e >>>= 7)
                        }(r, 0, t),
                        function(e, t) {
                            var r = (7 & e) << 4;
                            t.buf[t.pos++] |= r | ((e >>>= 3) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e | ((e >>>= 7) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e | ((e >>>= 7) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e | ((e >>>= 7) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e | ((e >>>= 7) ? 128 : 0), e && (t.buf[t.pos++] = 127 & e)))))
                        }(n, t)
                }(e, this) : (this.realloc(4), this.buf[this.pos++] = 127 & e | (e > 127 ? 128 : 0), e <= 127 || (this.buf[this.pos++] = 127 & (e >>>= 7) | (e > 127 ? 128 : 0), e <= 127 || (this.buf[this.pos++] = 127 & (e >>>= 7) | (e > 127 ? 128 : 0), e <= 127 || (this.buf[this.pos++] = e >>> 7 & 127))))
            },
            writeSVarint: function(e) {
                this.writeVarint(e < 0 ? 2 * -e - 1 : 2 * e)
            },
            writeBoolean: function(e) {
                this.writeVarint(Boolean(e))
            },
            writeString: function(e) {
                e = String(e), this.realloc(4 * e.length), this.pos++;
                var t = this.pos;
                this.pos = function(e, t, r) {
                    for (var n, i, a = 0; a < t.length; a++) {
                        if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                            if (!i) {
                                n > 56319 || a + 1 === t.length ? (e[r++] = 239, e[r++] = 191, e[r++] = 189) : i = n;
                                continue
                            }
                            if (n < 56320) {
                                e[r++] = 239, e[r++] = 191, e[r++] = 189, i = n;
                                continue
                            }
                            n = i - 55296 << 10 | n - 56320 | 65536, i = null
                        } else i && (e[r++] = 239, e[r++] = 191, e[r++] = 189, i = null);
                        n < 128 ? e[r++] = n : (n < 2048 ? e[r++] = n >> 6 | 192 : (n < 65536 ? e[r++] = n >> 12 | 224 : (e[r++] = n >> 18 | 240, e[r++] = n >> 12 & 63 | 128), e[r++] = n >> 6 & 63 | 128), e[r++] = 63 & n | 128)
                    }
                    return r
                }(this.buf, e, this.pos);
                var r = this.pos - t;
                r >= 128 && Zu(t, r, this), this.pos = t - 1, this.writeVarint(r), this.pos += r
            },
            writeFloat: function(e) {
                this.realloc(4), Fu(this.buf, e, this.pos, !0, 23, 4), this.pos += 4
            },
            writeDouble: function(e) {
                this.realloc(8), Fu(this.buf, e, this.pos, !0, 52, 8), this.pos += 8
            },
            writeBytes: function(e) {
                var t = e.length;
                this.writeVarint(t), this.realloc(t);
                for (var r = 0; r < t; r++) this.buf[this.pos++] = e[r]
            },
            writeRawMessage: function(e, t) {
                this.pos++;
                var r = this.pos;
                e(t, this);
                var n = this.pos - r;
                n >= 128 && Zu(r, n, this), this.pos = r - 1, this.writeVarint(n), this.pos += n
            },
            writeMessage: function(e, t, r) {
                this.writeTag(e, Ou.Bytes), this.writeRawMessage(t, r)
            },
            writePackedVarint: function(e, t) {
                t.length && this.writeMessage(e, Xu, t)
            },
            writePackedSVarint: function(e, t) {
                t.length && this.writeMessage(e, Gu, t)
            },
            writePackedBoolean: function(e, t) {
                t.length && this.writeMessage(e, Ju, t)
            },
            writePackedFloat: function(e, t) {
                t.length && this.writeMessage(e, Yu, t)
            },
            writePackedDouble: function(e, t) {
                t.length && this.writeMessage(e, Ku, t)
            },
            writePackedFixed32: function(e, t) {
                t.length && this.writeMessage(e, Hu, t)
            },
            writePackedSFixed32: function(e, t) {
                t.length && this.writeMessage(e, Wu, t)
            },
            writePackedFixed64: function(e, t) {
                t.length && this.writeMessage(e, $u, t)
            },
            writePackedSFixed64: function(e, t) {
                t.length && this.writeMessage(e, Qu, t)
            },
            writeBytesField: function(e, t) {
                this.writeTag(e, Ou.Bytes), this.writeBytes(t)
            },
            writeFixed32Field: function(e, t) {
                this.writeTag(e, Ou.Fixed32), this.writeFixed32(t)
            },
            writeSFixed32Field: function(e, t) {
                this.writeTag(e, Ou.Fixed32), this.writeSFixed32(t)
            },
            writeFixed64Field: function(e, t) {
                this.writeTag(e, Ou.Fixed64), this.writeFixed64(t)
            },
            writeSFixed64Field: function(e, t) {
                this.writeTag(e, Ou.Fixed64), this.writeSFixed64(t)
            },
            writeVarintField: function(e, t) {
                this.writeTag(e, Ou.Varint), this.writeVarint(t)
            },
            writeSVarintField: function(e, t) {
                this.writeTag(e, Ou.Varint), this.writeSVarint(t)
            },
            writeStringField: function(e, t) {
                this.writeTag(e, Ou.Bytes), this.writeString(t)
            },
            writeFloatField: function(e, t) {
                this.writeTag(e, Ou.Fixed32), this.writeFloat(t)
            },
            writeDoubleField: function(e, t) {
                this.writeTag(e, Ou.Fixed64), this.writeDouble(t)
            },
            writeBooleanField: function(e, t) {
                this.writeVarintField(e, Boolean(t))
            }
        };
        var il = function() {
                function e(t, r) {
                    var n = r.pixelRatio,
                        i = r.version,
                        a = r.stretchX,
                        o = r.stretchY,
                        s = r.content;
                    y(this, e), this.paddedRect = t, this.pixelRatio = n, this.stretchX = a, this.stretchY = o, this.content = s, this.version = i
                }
                return d(e, [{
                    key: "tl",
                    get: function() {
                        return [this.paddedRect.x + 1, this.paddedRect.y + 1]
                    }
                }, {
                    key: "br",
                    get: function() {
                        return [this.paddedRect.x + this.paddedRect.w - 1, this.paddedRect.y + this.paddedRect.h - 1]
                    }
                }, {
                    key: "displaySize",
                    get: function() {
                        return [(this.paddedRect.w - 2) / this.pixelRatio, (this.paddedRect.h - 2) / this.pixelRatio]
                    }
                }]), e
            }(),
            al = function() {
                function e(t, r) {
                    y(this, e);
                    var n = {},
                        i = {};
                    this.haveRenderCallbacks = [];
                    var a = [];
                    this.addImages(t, n, a), this.addImages(r, i, a);
                    var o = nl(a),
                        s = o.w,
                        u = o.h,
                        l = new Qo({
                            width: s || 1,
                            height: u || 1
                        });
                    for (var c in t) {
                        var h = t[c],
                            f = n[c].paddedRect;
                        Qo.copy(h.data, l, {
                            x: 0,
                            y: 0
                        }, {
                            x: f.x + 1,
                            y: f.y + 1
                        }, h.data)
                    }
                    for (var p in r) {
                        var d = r[p],
                            v = i[p].paddedRect,
                            m = v.x + 1,
                            g = v.y + 1,
                            x = d.data.width,
                            b = d.data.height;
                        Qo.copy(d.data, l, {
                            x: 0,
                            y: 0
                        }, {
                            x: m,
                            y: g
                        }, d.data), Qo.copy(d.data, l, {
                            x: 0,
                            y: b - 1
                        }, {
                            x: m,
                            y: g - 1
                        }, {
                            width: x,
                            height: 1
                        }), Qo.copy(d.data, l, {
                            x: 0,
                            y: 0
                        }, {
                            x: m,
                            y: g + b
                        }, {
                            width: x,
                            height: 1
                        }), Qo.copy(d.data, l, {
                            x: x - 1,
                            y: 0
                        }, {
                            x: m - 1,
                            y: g
                        }, {
                            width: 1,
                            height: b
                        }), Qo.copy(d.data, l, {
                            x: 0,
                            y: 0
                        }, {
                            x: m + x,
                            y: g
                        }, {
                            width: 1,
                            height: b
                        })
                    }
                    this.image = l, this.iconPositions = n, this.patternPositions = i
                }
                return d(e, [{
                    key: "addImages",
                    value: function(e, t, r) {
                        for (var n in e) {
                            var i = e[n],
                                a = {
                                    x: 0,
                                    y: 0,
                                    w: i.data.width + 2,
                                    h: i.data.height + 2
                                };
                            r.push(a), t[n] = new il(a, i), i.hasRenderCallback && this.haveRenderCallbacks.push(n)
                        }
                    }
                }, {
                    key: "patchUpdatedImages",
                    value: function(e, t) {
                        for (var r in e.dispatchRenderCallbacks(this.haveRenderCallbacks), e.updatedImages) this.patchUpdatedImage(this.iconPositions[r], e.getImage(r), t), this.patchUpdatedImage(this.patternPositions[r], e.getImage(r), t)
                    }
                }, {
                    key: "patchUpdatedImage",
                    value: function(e, t, r) {
                        if (e && t && e.version !== t.version) {
                            e.version = t.version;
                            var n = p(e.tl, 2),
                                i = n[0],
                                a = n[1];
                            r.update(t.data, void 0, {
                                x: i,
                                y: a
                            })
                        }
                    }
                }]), e
            }();
        vr("ImagePosition", il), vr("ImageAtlas", al);
        var ol = {
                horizontal: 1,
                vertical: 2,
                horizontalOnly: 3
            },
            sl = function() {
                function e() {
                    y(this, e), this.scale = 1, this.fontStack = "", this.imageName = null
                }
                return d(e, null, [{
                    key: "forText",
                    value: function(t, r) {
                        var n = new e;
                        return n.scale = t || 1, n.fontStack = r, n
                    }
                }, {
                    key: "forImage",
                    value: function(t) {
                        var r = new e;
                        return r.imageName = t, r
                    }
                }]), e
            }(),
            ul = function() {
                function e() {
                    y(this, e), this.text = "", this.sectionIndex = [], this.sections = [], this.imageSectionID = null
                }
                return d(e, [{
                    key: "length",
                    value: function() {
                        return this.text.length
                    }
                }, {
                    key: "getSection",
                    value: function(e) {
                        return this.sections[this.sectionIndex[e]]
                    }
                }, {
                    key: "getSections",
                    value: function() {
                        return this.sections
                    }
                }, {
                    key: "getSectionIndex",
                    value: function(e) {
                        return this.sectionIndex[e]
                    }
                }, {
                    key: "getCharCode",
                    value: function(e) {
                        return this.text.charCodeAt(e)
                    }
                }, {
                    key: "verticalizePunctuation",
                    value: function(e) {
                        this.text = function(e, t) {
                            for (var r = "", n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n + 1) || null,
                                    a = e.charCodeAt(n - 1) || null;
                                r += !t && (i && $n(i) && !Vu[e[n + 1]] || a && $n(a) && !Vu[e[n - 1]]) || !Vu[e[n]] ? e[n] : Vu[e[n]]
                            }
                            return r
                        }(this.text, e)
                    }
                }, {
                    key: "trim",
                    value: function() {
                        for (var e = 0, t = 0; t < this.text.length && cl[this.text.charCodeAt(t)]; t++) e++;
                        for (var r = this.text.length, n = this.text.length - 1; n >= 0 && n >= e && cl[this.text.charCodeAt(n)]; n--) r--;
                        this.text = this.text.substring(e, r), this.sectionIndex = this.sectionIndex.slice(e, r)
                    }
                }, {
                    key: "substring",
                    value: function(t, r) {
                        var n = new e;
                        return n.text = this.text.substring(t, r), n.sectionIndex = this.sectionIndex.slice(t, r), n.sections = this.sections, n
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return this.text
                    }
                }, {
                    key: "getMaxScale",
                    value: function() {
                        var e = this;
                        return this.sectionIndex.reduce((function(t, r) {
                            return Math.max(t, e.sections[r].scale)
                        }), 0)
                    }
                }, {
                    key: "addTextSection",
                    value: function(e, t) {
                        this.text += e.text, this.sections.push(sl.forText(e.scale, e.fontStack || t));
                        for (var r = this.sections.length - 1, n = 0; n < e.text.length; ++n) this.sectionIndex.push(r)
                    }
                }, {
                    key: "addImageSection",
                    value: function(e) {
                        var t = e.image ? e.image.name : "";
                        if (0 !== t.length) {
                            var r = this.getNextImageSectionCharCode();
                            r ? (this.text += String.fromCharCode(r), this.sections.push(sl.forImage(t)), this.sectionIndex.push(this.sections.length - 1)) : P("Reached maximum number of images 6401")
                        } else P("Can't add FormattedSection with an empty image.")
                    }
                }, {
                    key: "getNextImageSectionCharCode",
                    value: function() {
                        return this.imageSectionID ? this.imageSectionID >= 63743 ? null : ++this.imageSectionID : (this.imageSectionID = 57344, this.imageSectionID)
                    }
                }], [{
                    key: "fromFeature",
                    value: function(t, r) {
                        for (var n = new e, i = 0; i < t.sections.length; i++) {
                            var a = t.sections[i];
                            a.image ? n.addImageSection(a) : n.addTextSection(a, r)
                        }
                        return n
                    }
                }]), e
            }();

        function ll(e, t, r, n, i, a, o, s, u, c, h, f, p, y, d, v) {
            var m, g = ul.fromFeature(e, i);
            f === ol.vertical && g.verticalizePunctuation(p);
            var x = Bi.processBidirectionalText,
                b = Bi.processStyledBidirectionalText;
            if (x && 1 === g.sections.length) {
                m = [];
                var k, w = x(g.toString(), ml(g, c, a, t, n, y, d)),
                    _ = l(w);
                try {
                    for (_.s(); !(k = _.n()).done;) {
                        var S = k.value,
                            A = new ul;
                        A.text = S, A.sections = g.sections;
                        for (var I = 0; I < S.length; I++) A.sectionIndex.push(0);
                        m.push(A)
                    }
                } catch (E) {
                    _.e(E)
                } finally {
                    _.f()
                }
            } else if (b) {
                m = [];
                var z, M = b(g.text, g.sectionIndex, ml(g, c, a, t, n, y, d)),
                    C = l(M);
                try {
                    for (C.s(); !(z = C.n()).done;) {
                        var B = z.value,
                            P = new ul;
                        P.text = B[0], P.sectionIndex = B[1], P.sections = g.sections, m.push(P)
                    }
                } catch (E) {
                    C.e(E)
                } finally {
                    C.f()
                }
            } else m = function(e, t) {
                var r, n = [],
                    i = e.text,
                    a = 0,
                    o = l(t);
                try {
                    for (o.s(); !(r = o.n()).done;) {
                        var s = r.value;
                        n.push(e.substring(a, s)), a = s
                    }
                } catch (E) {
                    o.e(E)
                } finally {
                    o.f()
                }
                return a < i.length && n.push(e.substring(a, i.length)), n
            }(g, ml(g, c, a, t, n, y, d));
            var V = [],
                T = {
                    positionedLines: V,
                    text: g.toString(),
                    top: h[1],
                    bottom: h[1],
                    left: h[0],
                    right: h[0],
                    writingMode: f,
                    iconsInText: !1,
                    verticalizable: !1,
                    hasBaseline: !1
                };
            return function(e, t, r, n, i, a, o, s, u, c, h, f) {
                var p, y = 0,
                    d = 0,
                    v = 0,
                    m = "right" === s ? 1 : "left" === s ? 0 : .5,
                    g = !1,
                    x = l(i);
                try {
                    for (x.s(); !(p = x.n()).done;) {
                        var b, k = p.value.getSections(),
                            w = l(k);
                        try {
                            for (w.s(); !(b = w.n()).done;) {
                                var _ = b.value;
                                if (!_.imageName) {
                                    var S = t[_.fontStack];
                                    if (S && !(g = void 0 !== S.ascender && void 0 !== S.descender)) break
                                }
                            }
                        } catch (E) {
                            w.e(E)
                        } finally {
                            w.f()
                        }
                        if (!g) break
                    }
                } catch (E) {
                    x.e(E)
                } finally {
                    x.f()
                }
                var A, I, z = 0,
                    M = l(i);
                try {
                    for (M.s(); !(A = M.n()).done;) {
                        var C = A.value;
                        C.trim();
                        var B = C.getMaxScale(),
                            P = (B - 1) * Iu,
                            V = {
                                positionedGlyphs: [],
                                lineOffset: 0
                            };
                        e.positionedLines[z] = V;
                        var T = V.positionedGlyphs,
                            D = 0;
                        if (C.length()) {
                            for (var F = 0, L = 0, O = 0; O < C.length(); O++) {
                                var R = C.getSection(O),
                                    j = C.getSectionIndex(O),
                                    U = C.getCharCode(O),
                                    q = R.scale,
                                    N = null,
                                    Z = null,
                                    X = null,
                                    G = Iu,
                                    Y = 0,
                                    K = !(u === ol.horizontal || !h && !Wn(U) || h && (cl[U] || (I = U, _n(I) || Sn(I) || An(I) || Nn(I) || Yn(I))));
                                if (R.imageName) {
                                    var J = n[R.imageName];
                                    if (!J) continue;
                                    X = R.imageName, e.iconsInText = e.iconsInText || !0, Z = J.paddedRect;
                                    var H = J.displaySize;
                                    q = q * Iu / f, N = {
                                        width: H[0],
                                        height: H[1],
                                        left: 1,
                                        top: -3,
                                        advance: K ? H[1] : H[0],
                                        localGlyph: !1
                                    }, Y = g ? -N.height * q : B * Iu - 17 - H[1] * q, G = N.advance;
                                    var W = (K ? H[0] : H[1]) * q - Iu * B;
                                    W > 0 && W > D && (D = W)
                                } else {
                                    var $ = r[R.fontStack];
                                    if (!$) continue;
                                    $[U] && (Z = $[U]);
                                    var Q = t[R.fontStack];
                                    if (!Q) continue;
                                    var ee = Q.glyphs[U];
                                    if (!ee) continue;
                                    if (N = ee.metrics, G = 8203 !== U ? Iu : 0, g) {
                                        var te = void 0 !== Q.ascender ? Math.abs(Q.ascender) : 0,
                                            re = void 0 !== Q.descender ? Math.abs(Q.descender) : 0,
                                            ne = (te + re) * q;
                                        F < ne && (F = ne, L = (te - re) / 2 * q), Y = -te * q
                                    } else Y = (B - q) * Iu - 17
                                }
                                K ? (e.verticalizable = !0, T.push({
                                    glyph: U,
                                    imageName: X,
                                    x: y,
                                    y: d + Y,
                                    vertical: K,
                                    scale: q,
                                    localGlyph: N.localGlyph,
                                    fontStack: R.fontStack,
                                    sectionIndex: j,
                                    metrics: N,
                                    rect: Z
                                }), y += G * q + c) : (T.push({
                                    glyph: U,
                                    imageName: X,
                                    x: y,
                                    y: d + Y,
                                    vertical: K,
                                    scale: q,
                                    localGlyph: N.localGlyph,
                                    fontStack: R.fontStack,
                                    sectionIndex: j,
                                    metrics: N,
                                    rect: Z
                                }), y += N.advance * q + c)
                            }
                            0 !== T.length && (v = Math.max(y - c, v), g ? xl(T, m, D, L, a * B / 2) : xl(T, m, D, 0, a / 2)), y = 0;
                            var ie = a * B + D;
                            V.lineOffset = Math.max(D, P), d += ie, ++z
                        } else d += a, ++z
                    }
                } catch (E) {
                    M.e(E)
                } finally {
                    M.f()
                }
                var ae = d,
                    oe = gl(o),
                    se = oe.horizontalAlign,
                    ue = oe.verticalAlign;
                (function(e, t, r, n, i, a) {
                    var o, s = (t - r) * i,
                        u = -a * n,
                        c = l(e);
                    try {
                        for (c.s(); !(o = c.n()).done;) {
                            var h, f = o.value,
                                p = l(f.positionedGlyphs);
                            try {
                                for (p.s(); !(h = p.n()).done;) {
                                    var y = h.value;
                                    y.x += s, y.y += u
                                }
                            } catch (E) {
                                p.e(E)
                            } finally {
                                p.f()
                            }
                        }
                    } catch (E) {
                        c.e(E)
                    } finally {
                        c.f()
                    }
                })(e.positionedLines, m, se, ue, v, ae), e.top += -ue * ae, e.bottom = e.top + ae, e.left += -se * v, e.right = e.left + v, e.hasBaseline = g
            }(T, t, r, n, m, o, s, u, f, c, p, v), ! function(e) {
                var t, r = l(e);
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        if (0 !== t.value.positionedGlyphs.length) return !1
                    }
                } catch (E) {
                    r.e(E)
                } finally {
                    r.f()
                }
                return !0
            }(V) && T
        }
        var cl = {
                9: !0,
                10: !0,
                11: !0,
                12: !0,
                13: !0,
                32: !0
            },
            hl = {
                10: !0,
                32: !0,
                38: !0,
                40: !0,
                41: !0,
                43: !0,
                45: !0,
                47: !0,
                173: !0,
                183: !0,
                8203: !0,
                8208: !0,
                8211: !0,
                8231: !0
            };

        function fl(e, t, r, n, i, a) {
            if (t.imageName) {
                var o = n[t.imageName];
                return o ? o.displaySize[0] * t.scale * Iu / a + i : 0
            }
            var s = r[t.fontStack],
                u = s && s.glyphs[e];
            return u ? u.metrics.advance * t.scale + i : 0
        }

        function pl(e, t, r, n) {
            var i = Math.pow(e - t, 2);
            return n ? e < t ? i / 2 : 2 * i : i + Math.abs(r) * r
        }

        function yl(e, t, r) {
            var n = 0;
            return 10 === e && (n -= 1e4), r && (n += 150), 40 !== e && 65288 !== e || (n += 50), 41 !== t && 65289 !== t || (n += 50), n
        }

        function dl(e, t, r, n, i, a) {
            var o, s = null,
                u = pl(t, r, i, a),
                c = l(n);
            try {
                for (c.s(); !(o = c.n()).done;) {
                    var h = o.value,
                        f = pl(t - h.x, r, i, a) + h.badness;
                    f <= u && (s = h, u = f)
                }
            } catch (p) {
                c.e(p)
            } finally {
                c.f()
            }
            return {
                index: e,
                x: t,
                priorBreak: s,
                badness: u
            }
        }

        function vl(e) {
            return e ? vl(e.priorBreak).concat(e.index) : []
        }

        function ml(e, t, r, n, i, a, o) {
            if ("point" !== a) return [];
            if (!e) return [];
            for (var s, u = [], l = function(e, t, r, n, i, a) {
                    for (var o = 0, s = 0; s < e.length(); s++) {
                        var u = e.getSection(s);
                        o += fl(e.getCharCode(s), u, n, i, t, a)
                    }
                    return o / Math.max(1, Math.ceil(o / r))
                }(e, t, r, n, i, o), c = e.text.indexOf("\u200b") >= 0, h = 0, f = 0; f < e.length(); f++) {
                var p = e.getSection(f),
                    y = e.getCharCode(f);
                if (cl[y] || (h += fl(y, p, n, i, t, o)), f < e.length() - 1) {
                    var d = !((s = y) < 11904 || !(Tn(s) || Vn(s) || Xn(s) || qn(s) || Ln(s) || In(s) || En(s) || Cn(s) || On(s) || Rn(s) || Fn(s) || Kn(s) || Bn(s) || Mn(s) || zn(s) || Dn(s) || Pn(s) || Zn(s) || Un(s) || jn(s)));
                    (hl[y] || d || p.imageName) && u.push(dl(f + 1, h, l, u, yl(y, e.getCharCode(f + 1), d && c), !1))
                }
            }
            return vl(dl(e.length(), h, l, u, 0, !0))
        }

        function gl(e) {
            var t = .5,
                r = .5;
            switch (e) {
                case "right":
                case "top-right":
                case "bottom-right":
                    t = 1;
                    break;
                case "left":
                case "top-left":
                case "bottom-left":
                    t = 0
            }
            switch (e) {
                case "bottom":
                case "bottom-right":
                case "bottom-left":
                    r = 1;
                    break;
                case "top":
                case "top-right":
                case "top-left":
                    r = 0
            }
            return {
                horizontalAlign: t,
                verticalAlign: r
            }
        }

        function xl(e, t, r, n, i) {
            if (t || r || n || i)
                for (var a = e.length - 1, o = e[a], s = (o.x + o.metrics.advance * o.scale) * t, u = 0; u <= a; u++) e[u].x -= s, e[u].y += r + n + i
        }

        function bl(e, t, r, n, i, a) {
            var o, s = e.image;
            if (s.content) {
                var u = s.content,
                    l = s.pixelRatio || 1;
                o = [u[0] / l, u[1] / l, s.displaySize[0] - u[2] / l, s.displaySize[1] - u[3] / l]
            }
            var c, h, f, p, y = t.left * a,
                d = t.right * a;
            "width" === r || "both" === r ? (p = i[0] + y - n[3], h = i[0] + d + n[1]) : h = (p = i[0] + (y + d - s.displaySize[0]) / 2) + s.displaySize[0];
            var v = t.top * a,
                m = t.bottom * a;
            return "height" === r || "both" === r ? (c = i[1] + v - n[0], f = i[1] + m + n[2]) : f = (c = i[1] + (v + m - s.displaySize[1]) / 2) + s.displaySize[1], {
                image: s,
                top: c,
                right: h,
                bottom: f,
                left: p,
                collisionPadding: o
            }
        }
        var kl = function(e) {
            c(r, e);
            var t = h(r);

            function r(e, n, i, a, o) {
                var s;
                return y(this, r), (s = t.call(this, e, n)).angle = a, s.z = i, void 0 !== o && (s.segment = o), s
            }
            return d(r, [{
                key: "clone",
                value: function() {
                    return new r(this.x, this.y, this.z, this.angle, this.segment)
                }
            }]), r
        }(r);

        function wl(e, t, r, n, i) {
            if (void 0 === t.segment) return !0;
            for (var a = t, o = t.segment + 1, s = 0; s > -r / 2;) {
                if (--o < 0) return !1;
                s -= e[o].dist(a), a = e[o]
            }
            s += e[o].dist(e[o + 1]), o++;
            for (var u = [], l = 0; s < r / 2;) {
                var c = e[o],
                    h = e[o + 1];
                if (!h) return !1;
                var f = e[o - 1].angleTo(c) - c.angleTo(h);
                for (f = Math.abs((f + 3 * Math.PI) % (2 * Math.PI) - Math.PI), u.push({
                        distance: s,
                        angleDelta: f
                    }), l += f; s - u[0].distance > n;) l -= u.shift().angleDelta;
                if (l > i) return !1;
                o++, s += c.dist(h)
            }
            return !0
        }

        function _l(e) {
            for (var t = 0, r = 0; r < e.length - 1; r++) t += e[r].dist(e[r + 1]);
            return t
        }

        function Sl(e, t, r) {
            return e ? .6 * t * r : 0
        }

        function Al(e, t) {
            return Math.max(e ? e.right - e.left : 0, t ? t.right - t.left : 0)
        }

        function Il(e, t, r, n, i, a) {
            for (var o = Sl(r, i, a), s = Al(r, n) * a, u = 0, l = _l(e) / 2, c = 0; c < e.length - 1; c++) {
                var h = e[c],
                    f = e[c + 1],
                    p = h.dist(f);
                if (u + p > l) {
                    var y = (l - u) / p,
                        d = et(h.x, f.x, y),
                        v = et(h.y, f.y, y),
                        m = new kl(d, v, 0, f.angleTo(h), c);
                    return !o || wl(e, m, s, o, t) ? m : void 0
                }
                u += p
            }
        }

        function zl(e, t, r, n, i, a, o, s, u) {
            var l = Sl(n, a, o),
                c = Al(n, i),
                h = c * o,
                f = 0 === e[0].x || e[0].x === u || 0 === e[0].y || e[0].y === u;
            return t - h < t / 4 && (t = h + t / 4), Ml(e, f ? t / 2 * s % t : (c / 2 + 2 * a) * o * s % t, t, l, r, h, f, !1, u)
        }

        function Ml(e, t, r, n, i, a, o, s, u) {
            for (var l = a / 2, c = _l(e), h = 0, f = t - r, p = [], y = 0; y < e.length - 1; y++) {
                for (var d = e[y], v = e[y + 1], m = d.dist(v), g = v.angleTo(d); f + r < h + m;) {
                    var x = ((f += r) - h) / m,
                        b = et(d.x, v.x, x),
                        k = et(d.y, v.y, x);
                    if (b >= 0 && b < u && k >= 0 && k < u && f - l >= 0 && f + l <= c) {
                        var w = new kl(b, k, 0, g, y);
                        w._round(), n && !wl(e, w, a, n, i) || p.push(w)
                    }
                }
                h += m
            }
            return s || p.length || o || (p = Ml(e, h / 2, r, n, i, a, o, !0, u)), p
        }

        function Cl(e, t, n, i) {
            var a = [],
                o = e.image,
                s = o.pixelRatio,
                u = o.paddedRect.w - 2,
                l = o.paddedRect.h - 2,
                c = e.right - e.left,
                h = e.bottom - e.top,
                f = o.stretchX || [
                    [0, u]
                ],
                p = o.stretchY || [
                    [0, l]
                ],
                y = function(e, t) {
                    return e + t[1] - t[0]
                },
                d = f.reduce(y, 0),
                v = p.reduce(y, 0),
                m = u - d,
                g = l - v,
                x = 0,
                b = d,
                k = 0,
                w = v,
                _ = 0,
                S = m,
                A = 0,
                I = g;
            if (o.content && i) {
                var z = o.content;
                x = Bl(f, 0, z[0]), k = Bl(p, 0, z[1]), b = Bl(f, z[0], z[2]), w = Bl(p, z[1], z[3]), _ = z[0] - x, A = z[1] - k, S = z[2] - z[0] - b, I = z[3] - z[1] - w
            }
            var M = function(i, a, u, l) {
                var f = Vl(i.stretch - x, b, c, e.left),
                    p = Tl(i.fixed - _, S, i.stretch, d),
                    y = Vl(a.stretch - k, w, h, e.top),
                    m = Tl(a.fixed - A, I, a.stretch, v),
                    g = Vl(u.stretch - x, b, c, e.left),
                    z = Tl(u.fixed - _, S, u.stretch, d),
                    M = Vl(l.stretch - k, w, h, e.top),
                    C = Tl(l.fixed - A, I, l.stretch, v),
                    B = new r(f, y),
                    P = new r(g, y),
                    V = new r(g, M),
                    T = new r(f, M),
                    E = new r(p / s, m / s),
                    D = new r(z / s, C / s),
                    F = t * Math.PI / 180;
                if (F) {
                    var L = Math.sin(F),
                        O = Math.cos(F),
                        R = [O, -L, L, O];
                    B._matMult(R), P._matMult(R), T._matMult(R), V._matMult(R)
                }
                var j = i.stretch + i.fixed,
                    U = a.stretch + a.fixed;
                return {
                    tl: B,
                    tr: P,
                    bl: T,
                    br: V,
                    tex: {
                        x: o.paddedRect.x + 1 + j,
                        y: o.paddedRect.y + 1 + U,
                        w: u.stretch + u.fixed - j,
                        h: l.stretch + l.fixed - U
                    },
                    writingMode: void 0,
                    glyphOffset: [0, 0],
                    sectionIndex: 0,
                    pixelOffsetTL: E,
                    pixelOffsetBR: D,
                    minFontScaleX: S / s / c,
                    minFontScaleY: I / s / h,
                    isSDF: n
                }
            };
            if (i && (o.stretchX || o.stretchY))
                for (var C = Pl(f, m, d), B = Pl(p, g, v), P = 0; P < C.length - 1; P++)
                    for (var V = C[P], T = C[P + 1], E = 0; E < B.length - 1; E++) a.push(M(V, B[E], T, B[E + 1]));
            else a.push(M({
                fixed: 0,
                stretch: -1
            }, {
                fixed: 0,
                stretch: -1
            }, {
                fixed: 0,
                stretch: u + 1
            }, {
                fixed: 0,
                stretch: l + 1
            }));
            return a
        }

        function Bl(e, t, r) {
            var n, i = 0,
                a = l(e);
            try {
                for (a.s(); !(n = a.n()).done;) {
                    var o = n.value;
                    i += Math.max(t, Math.min(r, o[1])) - Math.max(t, Math.min(r, o[0]))
                }
            } catch (s) {
                a.e(s)
            } finally {
                a.f()
            }
            return i
        }

        function Pl(e, t, r) {
            var n, i = [{
                    fixed: -1,
                    stretch: 0
                }],
                a = l(e);
            try {
                for (a.s(); !(n = a.n()).done;) {
                    var o = p(n.value, 2),
                        s = o[0],
                        u = o[1],
                        c = i[i.length - 1];
                    i.push({
                        fixed: s - c.stretch,
                        stretch: c.stretch
                    }), i.push({
                        fixed: s - c.stretch,
                        stretch: c.stretch + (u - s)
                    })
                }
            } catch (h) {
                a.e(h)
            } finally {
                a.f()
            }
            return i.push({
                fixed: t + 1,
                stretch: r
            }), i
        }

        function Vl(e, t, r, n) {
            return e / t * r + n
        }

        function Tl(e, t, r, n) {
            return e - t * r / n
        }

        function El(e, t, r, n) {
            var i = t + e.positionedLines[n].lineOffset;
            return 0 === n ? r + i / 2 : r + (i + (t + e.positionedLines[n - 1].lineOffset)) / 2
        }
        vr("Anchor", kl);
        var Dl = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fl;
                if (y(this, e), this.data = t, this.length = this.data.length, this.compare = r, this.length > 0)
                    for (var n = (this.length >> 1) - 1; n >= 0; n--) this._down(n)
            }
            return d(e, [{
                key: "push",
                value: function(e) {
                    this.data.push(e), this.length++, this._up(this.length - 1)
                }
            }, {
                key: "pop",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.data[0],
                            t = this.data.pop();
                        return this.length--, this.length > 0 && (this.data[0] = t, this._down(0)), e
                    }
                }
            }, {
                key: "peek",
                value: function() {
                    return this.data[0]
                }
            }, {
                key: "_up",
                value: function(e) {
                    for (var t = this.data, r = this.compare, n = t[e]; e > 0;) {
                        var i = e - 1 >> 1,
                            a = t[i];
                        if (r(n, a) >= 0) break;
                        t[e] = a, e = i
                    }
                    t[e] = n
                }
            }, {
                key: "_down",
                value: function(e) {
                    for (var t = this.data, r = this.compare, n = this.length >> 1, i = t[e]; e < n;) {
                        var a = 1 + (e << 1),
                            o = t[a],
                            s = a + 1;
                        if (s < this.length && r(t[s], o) < 0 && (a = s, o = t[s]), r(o, i) >= 0) break;
                        t[e] = o, e = a
                    }
                    t[e] = i
                }
            }]), e
        }();

        function Fl(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }

        function Ll(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = 1 / 0, a = 1 / 0, o = -1 / 0, s = -1 / 0, u = e[0], l = 0; l < u.length; l++) {
                var c = u[l];
                (!l || c.x < i) && (i = c.x), (!l || c.y < a) && (a = c.y), (!l || c.x > o) && (o = c.x), (!l || c.y > s) && (s = c.y)
            }
            var h = Math.min(o - i, s - a),
                f = h / 2,
                p = new Dl([], Ol);
            if (0 === h) return new r(i, a);
            for (var y = i; y < o; y += h)
                for (var d = a; d < s; d += h) p.push(new Rl(y + f, d + f, f, e));
            for (var v = function(e) {
                    for (var t = 0, r = 0, n = 0, i = e[0], a = 0, o = i.length, s = o - 1; a < o; s = a++) {
                        var u = i[a],
                            l = i[s],
                            c = u.x * l.y - l.x * u.y;
                        r += (u.x + l.x) * c, n += (u.y + l.y) * c, t += 3 * c
                    }
                    return new Rl(r / t, n / t, 0, e)
                }(e), m = p.length; p.length;) {
                var g = p.pop();
                (g.d > v.d || !v.d) && (v = g, n && console.log("found best %d after %d probes", Math.round(1e4 * g.d) / 1e4, m)), g.max - v.d <= t || (f = g.h / 2, p.push(new Rl(g.p.x - f, g.p.y - f, f, e)), p.push(new Rl(g.p.x + f, g.p.y - f, f, e)), p.push(new Rl(g.p.x - f, g.p.y + f, f, e)), p.push(new Rl(g.p.x + f, g.p.y + f, f, e)), m += 4)
            }
            return n && (console.log("num probes: ".concat(m)), console.log("best distance: ".concat(v.d))), v.p
        }

        function Ol(e, t) {
            return t.max - e.max
        }

        function Rl(e, t, n, i) {
            this.p = new r(e, t), this.h = n, this.d = function(e, t) {
                for (var r = !1, n = 1 / 0, i = 0; i < t.length; i++)
                    for (var a = t[i], o = 0, s = a.length, u = s - 1; o < s; u = o++) {
                        var l = a[o],
                            c = a[u];
                        l.y > e.y != c.y > e.y && e.x < (c.x - l.x) * (e.y - l.y) / (c.y - l.y) + l.x && (r = !r), n = Math.min(n, Ao(e, l, c))
                    }
                return (r ? 1 : -1) * Math.sqrt(n)
            }(this.p, i), this.max = this.d + this.h * Math.SQRT2
        }
        var jl = Number.POSITIVE_INFINITY,
            Ul = Math.sqrt(2);

        function ql(e, t, r, n, i, a, o, s) {
            e.createArrays(), e.tilePixelRatio = co / (512 * e.overscaling), e.compareText = {}, e.iconsNeedLinear = !1;
            var u = e.layers[0].layout,
                c = e.layers[0]._unevaluatedLayout._values,
                h = {};
            if ("composite" === e.textSizeData.kind) {
                var f = e.textSizeData,
                    p = f.minZoom,
                    y = f.maxZoom;
                h.compositeTextSizes = [c["text-size"].possiblyEvaluate(new Pi(p), o), c["text-size"].possiblyEvaluate(new Pi(y), o)]
            }
            if ("composite" === e.iconSizeData.kind) {
                var d = e.iconSizeData,
                    v = d.minZoom,
                    m = d.maxZoom;
                h.compositeIconSizes = [c["icon-size"].possiblyEvaluate(new Pi(v), o), c["icon-size"].possiblyEvaluate(new Pi(m), o)]
            }
            h.layoutTextSize = c["text-size"].possiblyEvaluate(new Pi(s + 1), o), h.layoutIconSize = c["icon-size"].possiblyEvaluate(new Pi(s + 1), o), h.textMaxSize = c["text-size"].possiblyEvaluate(new Pi(18), o);
            var g, x, b, k = "map" === u.get("text-rotation-alignment") && "point" !== u.get("symbol-placement"),
                w = u.get("text-size"),
                _ = l(e.features);
            try {
                var S = function() {
                    var a = g.value,
                        s = u.get("text-font").evaluate(a, {}, o).join(","),
                        c = w.evaluate(a, {}, o),
                        f = h.layoutTextSize.evaluate(a, {}, o),
                        p = (h.layoutIconSize.evaluate(a, {}, o), {
                            horizontal: {},
                            vertical: void 0
                        }),
                        y = a.text,
                        d = void 0,
                        v = [0, 0];
                    if (y) {
                        var m = y.toString(),
                            _ = u.get("text-letter-spacing").evaluate(a, {}, o) * Iu,
                            S = u.get("text-line-height").evaluate(a, {}, o) * Iu,
                            A = function(e) {
                                var t, r = l(e);
                                try {
                                    for (r.s(); !(t = r.n()).done;)
                                        if (!Hn(t.value.charCodeAt(0))) return !1
                                } catch (n) {
                                    r.e(n)
                                } finally {
                                    r.f()
                                }
                                return !0
                            }(m) ? _ : 0,
                            I = u.get("text-anchor").evaluate(a, {}, o),
                            z = u.get("text-variable-anchor");
                        if (!z) {
                            var M = u.get("text-radial-offset").evaluate(a, {}, o);
                            M ? (x = I, v = (b = [M * Iu, jl])[1] !== jl ? function(e, t, r) {
                                var n = 0,
                                    i = 0;
                                switch (t = Math.abs(t), r = Math.abs(r), e) {
                                    case "top-right":
                                    case "top-left":
                                    case "top":
                                        i = r - 7;
                                        break;
                                    case "bottom-right":
                                    case "bottom-left":
                                    case "bottom":
                                        i = 7 - r
                                }
                                switch (e) {
                                    case "top-right":
                                    case "bottom-right":
                                    case "right":
                                        n = -t;
                                        break;
                                    case "top-left":
                                    case "bottom-left":
                                    case "left":
                                        n = t
                                }
                                return [n, i]
                            }(x, b[0], b[1]) : function(e, t) {
                                var r = 0,
                                    n = 0;
                                t < 0 && (t = 0);
                                var i = t / Ul;
                                switch (e) {
                                    case "top-right":
                                    case "top-left":
                                        n = i - 7;
                                        break;
                                    case "bottom-right":
                                    case "bottom-left":
                                        n = 7 - i;
                                        break;
                                    case "bottom":
                                        n = 7 - t;
                                        break;
                                    case "top":
                                        n = t - 7
                                }
                                switch (e) {
                                    case "top-right":
                                    case "bottom-right":
                                        r = -i;
                                        break;
                                    case "top-left":
                                    case "bottom-left":
                                        r = i;
                                        break;
                                    case "left":
                                        r = t;
                                        break;
                                    case "right":
                                        r = -t
                                }
                                return [r, n]
                            }(x, b[0])) : v = u.get("text-offset").evaluate(a, {}, o).map((function(e) {
                                return e * Iu
                            }))
                        }
                        var C = k ? "center" : u.get("text-justify").evaluate(a, {}, o),
                            B = u.get("symbol-placement"),
                            V = "point" === B,
                            T = "point" === B ? u.get("text-max-width").evaluate(a, {}, o) * Iu : 0,
                            E = function(n) {
                                e.allowVerticalPlacement && Jn(m) && (p.vertical = ll(y, t, r, i, s, T, S, I, n, A, v, ol.vertical, !0, B, f, c))
                            };
                        if (!k && z) {
                            for (var D = "auto" === C ? z.map((function(e) {
                                    return Nl(e)
                                })) : [C], F = !1, L = 0; L < D.length; L++) {
                                var O = D[L];
                                if (!p.horizontal[O])
                                    if (F) p.horizontal[O] = p.horizontal[0];
                                    else {
                                        var R = ll(y, t, r, i, s, T, S, "center", O, A, v, ol.horizontal, !1, B, f, c);
                                        R && (p.horizontal[O] = R, F = 1 === R.positionedLines.length)
                                    }
                            }
                            E("left")
                        } else {
                            if ("auto" === C && (C = Nl(I)), V || u.get("text-writing-mode").indexOf("horizontal") >= 0 || !Jn(m)) {
                                var j = ll(y, t, r, i, s, T, S, I, C, A, v, ol.horizontal, !1, B, f, c);
                                j && (p.horizontal[C] = j)
                            }
                            E("point" === B ? "left" : C)
                        }
                    }
                    var U = !1;
                    if (a.icon && a.icon.name) {
                        var q = n[a.icon.name];
                        q && (d = function(e, t, r) {
                            var n = gl(r),
                                i = n.horizontalAlign,
                                a = n.verticalAlign,
                                o = t[0] - e.displaySize[0] * i,
                                s = t[1] - e.displaySize[1] * a;
                            return {
                                image: e,
                                top: s,
                                bottom: s + e.displaySize[1],
                                left: o,
                                right: o + e.displaySize[0]
                            }
                        }(i[a.icon.name], u.get("icon-offset").evaluate(a, {}, o), u.get("icon-anchor").evaluate(a, {}, o)), U = q.sdf, void 0 === e.sdfIcons ? e.sdfIcons = q.sdf : e.sdfIcons !== q.sdf && P("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"), (q.pixelRatio !== e.pixelRatio || 0 !== u.get("icon-rotate").constantOr(1)) && (e.iconsNeedLinear = !0))
                    }
                    var N = Yl(p.horizontal) || p.vertical;
                    e.iconsInText || (e.iconsInText = !!N && N.iconsInText), (N || d) && Zl(e, a, p, d, n, h, f, 0, v, U, o)
                };
                for (_.s(); !(g = _.n()).done;) S()
            } catch (A) {
                _.e(A)
            } finally {
                _.f()
            }
            a && e.generateCollisionDebugBuffers(s, e.collisionBoxArray)
        }

        function Nl(e) {
            switch (e) {
                case "right":
                case "top-right":
                case "bottom-right":
                    return "right";
                case "left":
                case "top-left":
                case "bottom-left":
                    return "left"
            }
            return "center"
        }

        function Zl(e, t, n, i, a, o, s, u, c, h, f) {
            var y = o.textMaxSize.evaluate(t, {}, f);
            void 0 === y && (y = s);
            var d, v = e.layers[0].layout,
                m = v.get("icon-offset").evaluate(t, {}, f),
                g = Yl(n.horizontal) || n.vertical,
                x = s / 24,
                k = e.tilePixelRatio * y / 24,
                w = e.tilePixelRatio * v.get("symbol-spacing"),
                _ = v.get("text-padding") * e.tilePixelRatio,
                S = v.get("icon-padding") * e.tilePixelRatio,
                A = b(v.get("text-max-angle")),
                I = "map" === v.get("text-rotation-alignment") && "point" !== v.get("symbol-placement"),
                z = "map" === v.get("icon-rotation-alignment") && "point" !== v.get("symbol-placement"),
                M = v.get("symbol-placement"),
                C = w / 2,
                B = v.get("icon-text-fit");
            i && "none" !== B && (e.allowVerticalPlacement && n.vertical && (d = bl(i, n.vertical, B, v.get("icon-text-fit-padding"), m, x)), g && (i = bl(i, g, B, v.get("icon-text-fit-padding"), m, x)));
            var V = function(r, s) {
                s.x < 0 || s.x >= co || s.y < 0 || s.y >= co || function(e, t, r, n, i, a, o, s, u, l, c, h, f, y, d, v, m, g, x, b, k, w, _, S) {
                    var A, I, z, M, C, B, V, T, E, D = e.addToLineVertexArray(t, n),
                        F = 0,
                        L = 0,
                        O = 0,
                        R = 0,
                        j = -1,
                        U = -1,
                        q = {},
                        N = La(""),
                        Z = 0,
                        X = 0;
                    if (void 0 === u._unevaluatedLayout.getValue("text-radial-offset") ? (A = u.layout.get("text-offset").evaluate(k, {}, S).map((function(e) {
                            return e * Iu
                        })), Z = (I = p(A, 2))[0], X = I[1]) : (Z = u.layout.get("text-radial-offset").evaluate(k, {}, S) * Iu, X = jl), e.allowVerticalPlacement && i.vertical) {
                        var G = i.vertical;
                        if (d) T = Jl(G), s && (E = Jl(s));
                        else {
                            var Y = u.layout.get("text-rotate").evaluate(k, {}, S) + 90;
                            C = Kl(l, r, t, c, h, f, G, y, Y, v), s && (B = Kl(l, r, t, c, h, f, s, g, Y))
                        }
                    }
                    if (a) {
                        var K = u.layout.get("icon-rotate").evaluate(k, {}, S),
                            J = "none" !== u.layout.get("icon-text-fit"),
                            H = Cl(a, K, _, J),
                            W = s ? Cl(s, K, _, J) : void 0;
                        M = Kl(l, r, t, c, h, f, a, g, K), F = 4 * H.length;
                        var $ = e.iconSizeData,
                            Q = null;
                        "source" === $.kind ? (Q = [zu * u.layout.get("icon-size").evaluate(k, {}, S)])[0] > Xl && P("".concat(e.layerIds[0], ': Value for "icon-size" is >= 255. Reduce your "icon-size".')) : "composite" === $.kind && (((Q = [zu * w.compositeIconSizes[0].evaluate(k, {}, S), zu * w.compositeIconSizes[1].evaluate(k, {}, S)])[0] > Xl || Q[1] > Xl) && P("".concat(e.layerIds[0], ': Value for "icon-size" is >= 255. Reduce your "icon-size".'))), e.addSymbols(e.icon, H, Q, b, x, k, !1, r, t, D.lineStartIndex, D.lineLength, -1, S), j = e.icon.placedSymbolArray.length - 1, W && (L = 4 * W.length, e.addSymbols(e.icon, W, Q, b, x, k, ol.vertical, r, t, D.lineStartIndex, D.lineLength, -1, S), U = e.icon.placedSymbolArray.length - 1)
                    }
                    for (var ee in i.horizontal) {
                        var te = i.horizontal[ee];
                        z || (N = La(te.text), d ? V = Jl(te) : z = Kl(l, r, t, c, h, f, te, y, u.layout.get("text-rotate").evaluate(k, {}, S), v));
                        var re = 1 === te.positionedLines.length;
                        if (O += Gl(e, r, t, te, o, u, d, k, v, D, i.vertical ? ol.horizontal : ol.horizontalOnly, re ? Object.keys(i.horizontal) : [ee], q, j, w, S), re) break
                    }
                    i.vertical && (R += Gl(e, r, t, i.vertical, o, u, d, k, v, D, ol.vertical, ["vertical"], q, U, w, S));
                    var ne = -1,
                        ie = function(e, t) {
                            return e ? Math.max(e, t) : t
                        };
                    ne = ie(V, ne), ne = ie(T, ne);
                    var ae = (ne = ie(E, ne)) > -1 ? 1 : 0;
                    e.glyphOffsetArray.length >= ic.MAX_GLYPHS && P("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"), void 0 !== k.sortKey && e.addToSortKeyRanges(e.symbolInstances.length, k.sortKey), e.symbolInstances.emplaceBack(r.x, r.y, r.z, t.x, t.y, q.right >= 0 ? q.right : -1, q.center >= 0 ? q.center : -1, q.left >= 0 ? q.left : -1, q.vertical >= 0 ? q.vertical : -1, j, U, N, void 0 !== z ? z : e.collisionBoxArray.length, void 0 !== z ? z + 1 : e.collisionBoxArray.length, void 0 !== C ? C : e.collisionBoxArray.length, void 0 !== C ? C + 1 : e.collisionBoxArray.length, void 0 !== M ? M : e.collisionBoxArray.length, void 0 !== M ? M + 1 : e.collisionBoxArray.length, B || e.collisionBoxArray.length, B ? B + 1 : e.collisionBoxArray.length, c, O, R, F, L, ae, 0, Z, X, ne)
                }(e, s, s, r, n, i, a, d, e.layers[0], e.collisionBoxArray, t.index, t.sourceLayerIndex, e.index, _, I, c, 0, S, z, m, t, o, h, f)
            };
            if ("line" === M) {
                var T, E = l(function(e, t, n, i, a) {
                    for (var o = [], s = 0; s < e.length; s++)
                        for (var u = e[s], l = void 0, c = 0; c < u.length - 1; c++) {
                            var h = u[c],
                                f = u[c + 1];
                            h.x < 0 && f.x < 0 || (h.x < 0 ? h = new r(0, h.y + (0 - h.x) / (f.x - h.x) * (f.y - h.y))._round() : f.x < 0 && (f = new r(0, h.y + (0 - h.x) / (f.x - h.x) * (f.y - h.y))._round()), h.y < 0 && f.y < 0 || (h.y < 0 ? h = new r(h.x + (0 - h.y) / (f.y - h.y) * (f.x - h.x), 0)._round() : f.y < 0 && (f = new r(h.x + (0 - h.y) / (f.y - h.y) * (f.x - h.x), 0)._round()), h.x >= i && f.x >= i || (h.x >= i ? h = new r(i, h.y + (i - h.x) / (f.x - h.x) * (f.y - h.y))._round() : f.x >= i && (f = new r(i, h.y + (i - h.x) / (f.x - h.x) * (f.y - h.y))._round()), h.y >= a && f.y >= a || (h.y >= a ? h = new r(h.x + (a - h.y) / (f.y - h.y) * (f.x - h.x), a)._round() : f.y >= a && (f = new r(h.x + (a - h.y) / (f.y - h.y) * (f.x - h.x), a)._round()), l && h.equals(l[l.length - 1]) || (l = [h], o.push(l)), l.push(f)))))
                        }
                    return o
                }(t.geometry, 0, 0, co, co));
                try {
                    for (E.s(); !(T = E.n()).done;) {
                        var D, F = T.value,
                            L = zl(F, w, A, n.vertical || g, i, 24, k, e.overscaling, co),
                            O = l(L);
                        try {
                            for (O.s(); !(D = O.n()).done;) {
                                var R = D.value;
                                g && Hl(e, g.text, C, R) || V(F, R)
                            }
                        } catch (ne) {
                            O.e(ne)
                        } finally {
                            O.f()
                        }
                    }
                } catch (ne) {
                    E.e(ne)
                } finally {
                    E.f()
                }
            } else if ("line-center" === M) {
                var j, U = l(t.geometry);
                try {
                    for (U.s(); !(j = U.n()).done;) {
                        var q = j.value;
                        if (q.length > 1) {
                            var N = Il(q, A, n.vertical || g, i, 24, k);
                            N && V(q, N)
                        }
                    }
                } catch (ne) {
                    U.e(ne)
                } finally {
                    U.f()
                }
            } else if ("Polygon" === t.type) {
                var Z, X = l(Fs(t.geometry, 0));
                try {
                    for (X.s(); !(Z = X.n()).done;) {
                        var G = Z.value,
                            Y = Ll(G, 16);
                        V(G[0], new kl(Y.x, Y.y, 0, 0, void 0))
                    }
                } catch (ne) {
                    X.e(ne)
                } finally {
                    X.f()
                }
            } else if ("LineString" === t.type) {
                var K, J = l(t.geometry);
                try {
                    for (J.s(); !(K = J.n()).done;) {
                        var H = K.value;
                        V(H, new kl(H[0].x, H[0].y, 0, 0, void 0))
                    }
                } catch (ne) {
                    J.e(ne)
                } finally {
                    J.f()
                }
            } else if ("Point" === t.type) {
                var W, $ = l(t.geometry);
                try {
                    for ($.s(); !(W = $.n()).done;) {
                        var Q, ee = W.value,
                            te = l(ee);
                        try {
                            for (te.s(); !(Q = te.n()).done;) {
                                var re = Q.value;
                                V([re], new kl(re.x, re.y, 0, 0, void 0))
                            }
                        } catch (ne) {
                            te.e(ne)
                        } finally {
                            te.f()
                        }
                    }
                } catch (ne) {
                    $.e(ne)
                } finally {
                    $.f()
                }
            }
        }
        var Xl = 32640;

        function Gl(e, t, i, a, o, s, c, h, f, p, y, d, v, m, g, x) {
            var b = function(e, t, i, a, o, s, c, h) {
                    var f = [];
                    if (0 === t.positionedLines.length) return f;
                    var p, y = a.layout.get("text-rotate").evaluate(s, {}) * Math.PI / 180,
                        d = function(e) {
                            var t = e[0],
                                r = e[1],
                                n = t * r;
                            return n > 0 ? [t, -r] : n < 0 ? [-t, r] : 0 === t ? [r, t] : [r, -t]
                        }(i),
                        v = Math.abs(t.top - t.bottom),
                        m = l(t.positionedLines);
                    try {
                        for (m.s(); !(p = m.n()).done;) {
                            v -= p.value.lineOffset
                        }
                    } catch (oe) {
                        m.e(oe)
                    } finally {
                        m.f()
                    }
                    for (var g = t.positionedLines.length, x = v / g, b = t.top - i[1], k = 0; k < g; ++k) {
                        var w = t.positionedLines[k];
                        b = El(t, x, b, k);
                        var _, S = l(w.positionedGlyphs);
                        try {
                            for (S.s(); !(_ = S.n()).done;) {
                                var A = _.value;
                                if (A.rect) {
                                    var I = A.rect || {},
                                        z = 4,
                                        M = !0,
                                        C = 1,
                                        B = 0;
                                    if (A.imageName) {
                                        var V = c[A.imageName];
                                        if (!V) continue;
                                        if (V.sdf) {
                                            P("SDF images are not supported in formatted text and will be ignored.");
                                            continue
                                        }
                                        M = !1, z = 1 / (C = V.pixelRatio)
                                    }
                                    var T = (o || h) && A.vertical,
                                        E = A.metrics.advance * A.scale / 2,
                                        D = A.metrics,
                                        F = A.rect;
                                    if (null !== F) {
                                        h && t.verticalizable && (B = A.imageName ? E - A.metrics.width * A.scale / 2 : 0);
                                        var L = o ? [A.x + E, A.y] : [0, 0],
                                            O = [0, 0],
                                            R = [0, 0],
                                            j = !1;
                                        o || (T ? (R = [A.x + E + d[0], A.y + d[1] - B], j = !0) : O = [A.x + E + i[0], A.y + i[1] - B]);
                                        var U = F.w * A.scale / (C * (A.localGlyph ? 2 : 1)),
                                            q = F.h * A.scale / (C * (A.localGlyph ? 2 : 1)),
                                            N = void 0,
                                            Z = void 0,
                                            X = void 0,
                                            G = void 0;
                                        if (T) {
                                            var Y = A.y - b,
                                                K = new r(-E, E - Y),
                                                J = -Math.PI / 2,
                                                H = n(r, u(R));
                                            (N = new r(-E + O[0], O[1]))._rotateAround(J, K)._add(H), N.x += -Y + E, N.y -= (D.left - z) * A.scale;
                                            var W = A.imageName ? D.advance * A.scale : Iu * A.scale,
                                                $ = String.fromCharCode(A.glyph);
                                            Tu($) ? N.x += (1 - z) * A.scale : Eu($) ? N.x += W - D.height * A.scale + (-z - 1) * A.scale : N.x += A.imageName || D.width + 2 * z === F.w && D.height + 2 * z === F.h ? (W - q) / 2 : (W - (D.height + 2 * z) * A.scale) / 2, Z = new r(N.x, N.y - U), X = new r(N.x + q, N.y), G = new r(N.x + q, N.y - U)
                                        } else {
                                            var Q = (D.left - z) * A.scale - E + O[0],
                                                ee = (-D.top - z) * A.scale + O[1],
                                                te = Q + U,
                                                re = ee + q;
                                            N = new r(Q, ee), Z = new r(te, ee), X = new r(Q, re), G = new r(te, re)
                                        }
                                        if (y) {
                                            var ne;
                                            ne = o ? new r(0, 0) : j ? new r(d[0], d[1]) : new r(i[0], i[1]), N._rotateAround(y, ne), Z._rotateAround(y, ne), X._rotateAround(y, ne), G._rotateAround(y, ne)
                                        }
                                        var ie = new r(0, 0),
                                            ae = new r(0, 0);
                                        f.push({
                                            tl: N,
                                            tr: Z,
                                            bl: X,
                                            br: G,
                                            tex: I,
                                            writingMode: t.writingMode,
                                            glyphOffset: L,
                                            sectionIndex: A.sectionIndex,
                                            isSDF: M,
                                            pixelOffsetTL: ie,
                                            pixelOffsetBR: ae,
                                            minFontScaleX: 0,
                                            minFontScaleY: 0
                                        })
                                    }
                                }
                            }
                        } catch (oe) {
                            S.e(oe)
                        } finally {
                            S.f()
                        }
                    }
                    return f
                }(0, a, f, s, c, h, o, e.allowVerticalPlacement),
                k = e.textSizeData,
                w = null;
            "source" === k.kind ? (w = [zu * s.layout.get("text-size").evaluate(h, {}, x)])[0] > Xl && P("".concat(e.layerIds[0], ': Value for "text-size" is >= 255. Reduce your "text-size".')) : "composite" === k.kind && (((w = [zu * g.compositeTextSizes[0].evaluate(h, {}, x), zu * g.compositeTextSizes[1].evaluate(h, {}, x)])[0] > Xl || w[1] > Xl) && P("".concat(e.layerIds[0], ': Value for "text-size" is >= 255. Reduce your "text-size".'))), e.addSymbols(e.text, b, w, f, c, h, y, t, i, p.lineStartIndex, p.lineLength, m, x);
            var _, S = l(d);
            try {
                for (S.s(); !(_ = S.n()).done;) {
                    v[_.value] = e.text.placedSymbolArray.length - 1
                }
            } catch (A) {
                S.e(A)
            } finally {
                S.f()
            }
            return 4 * b.length
        }

        function Yl(e) {
            for (var t in e) return e[t];
            return null
        }

        function Kl(e, t, n, i, a, o, s, u, l, c) {
            var h = s.top,
                f = s.bottom,
                p = s.left,
                y = s.right,
                d = s.collisionPadding;
            if (d && (p -= d[0], h -= d[1], y += d[2], f += d[3]), l) {
                var v = new r(p, h),
                    m = new r(y, h),
                    g = new r(p, f),
                    x = new r(y, f),
                    k = b(l),
                    w = new r(0, 0);
                c && (w = new r(c[0], c[1])), v._rotateAround(k, w), m._rotateAround(k, w), g._rotateAround(k, w), x._rotateAround(k, w), p = Math.min(v.x, m.x, g.x, x.x), y = Math.max(v.x, m.x, g.x, x.x), h = Math.min(v.y, m.y, g.y, x.y), f = Math.max(v.y, m.y, g.y, x.y)
            }
            return e.emplaceBack(t.x, t.y, t.z, n.x, n.y, p, h, y, f, u, i, a, o), e.length - 1
        }

        function Jl(e) {
            e.collisionPadding && (e.top -= e.collisionPadding[1], e.bottom += e.collisionPadding[3]);
            var t = e.bottom - e.top;
            return t > 0 ? Math.max(10, t) : null
        }

        function Hl(e, t, r, n) {
            var i = e.compareText;
            if (t in i) {
                for (var a = i[t], o = a.length - 1; o >= 0; o--)
                    if (n.dist(a[o]) < r) return !0
            } else i[t] = [];
            return i[t].push(n), !1
        }
        var Wl = eu.VectorTileFeature.types,
            $l = [{
                name: "a_fade_opacity",
                components: 1,
                type: "Uint8",
                offset: 0
            }];

        function Ql(e, t, r, n, i, a, o, s, u, l, c, h, f, p, y, d) {
            var v = c ? Math.min(Xl, Math.round(c[0])) : 0,
                m = c ? Math.min(Xl, Math.round(c[1])) : 0;
            e.emplaceBack(t, r, Math.round(32 * o), Math.round(32 * s), u, l, (v << 1) + (h ? 1 : 0), m, 16 * f, 16 * p, 256 * y, 256 * d, n, i, a, 0)
        }

        function ec(e, t, r) {
            e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r)
        }

        function tc(e) {
            var t, r = l(e.sections);
            try {
                for (r.s(); !(t = r.n()).done;) {
                    if (ti(t.value.text)) return !0
                }
            } catch (n) {
                r.e(n)
            } finally {
                r.f()
            }
            return !1
        }
        var rc = function() {
            function e(t) {
                y(this, e), this.layoutVertexArray = new ia, this.indexArray = new ca, this.programConfigurations = t, this.segments = new lo, this.dynamicLayoutVertexArray = new ta, this.opacityVertexArray = new aa, this.placedSymbolArray = new Sa
            }
            return d(e, [{
                key: "isEmpty",
                value: function() {
                    return 0 === this.layoutVertexArray.length && 0 === this.indexArray.length && 0 === this.dynamicLayoutVertexArray.length && 0 === this.opacityVertexArray.length
                }
            }, {
                key: "upload",
                value: function(e, t, r, n) {
                    this.isEmpty() || (r && (this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, ku.members), this.indexBuffer = e.createIndexBuffer(this.indexArray, t), this.dynamicLayoutVertexBuffer = e.createVertexBuffer(this.dynamicLayoutVertexArray, wu.members, !0), this.opacityVertexBuffer = e.createVertexBuffer(this.opacityVertexArray, $l, !0), this.opacityVertexBuffer.itemSize = 1), (r || n) && this.programConfigurations.upload(e))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.dynamicLayoutVertexBuffer.destroy(), this.opacityVertexBuffer.destroy())
                }
            }]), e
        }();
        vr("SymbolBuffers", rc);
        var nc = function() {
            function e(t, r, n) {
                y(this, e), this.layoutVertexArray = new t, this.layoutAttributes = r, this.indexArray = new n, this.segments = new lo, this.collisionVertexArray = new la, this.collisionVertexArrayExt = new ta
            }
            return d(e, [{
                key: "upload",
                value: function(e) {
                    this.layoutVertexBuffer = e.createVertexBuffer(this.layoutVertexArray, this.layoutAttributes), this.indexBuffer = e.createIndexBuffer(this.indexArray), this.collisionVertexBuffer = e.createVertexBuffer(this.collisionVertexArray, _u.members, !0), this.collisionVertexBufferExt = e.createVertexBuffer(this.collisionVertexArrayExt, Su.members, !0)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.segments.destroy(), this.collisionVertexBuffer.destroy(), this.collisionVertexBufferExt.destroy())
                }
            }]), e
        }();
        vr("CollisionBuffers", nc);
        var ic = function() {
            function e(t) {
                y(this, e), this.collisionBoxArray = t.collisionBoxArray, this.zoom = t.zoom, this.overscaling = t.overscaling, this.layers = t.layers, this.layerIds = this.layers.map((function(e) {
                    return e.id
                })), this.index = t.index, this.pixelRatio = t.pixelRatio, this.sourceLayerIndex = t.sourceLayerIndex, this.hasPattern = !1, this.hasRTLText = !1, this.sortKeyRanges = [], this.collisionCircleArray = [], this.placementInvProjMatrix = Lo([]), this.placementViewportMatrix = Lo([]);
                var r = this.layers[0]._unevaluatedLayout._values;
                this.textSizeData = Mu(this.zoom, r["text-size"]), this.iconSizeData = Mu(this.zoom, r["icon-size"]);
                var n = this.layers[0].layout,
                    i = n.get("symbol-sort-key"),
                    a = n.get("symbol-z-order");
                this.canOverlap = n.get("text-allow-overlap") || n.get("icon-allow-overlap") || n.get("text-ignore-placement") || n.get("icon-ignore-placement"), this.sortFeaturesByKey = "viewport-y" !== a && void 0 !== i.constantOr(1), this.sortFeaturesByY = ("viewport-y" === a || "auto" === a && !this.sortFeaturesByKey) && this.canOverlap, this.writingModes = n.get("text-writing-mode").map((function(e) {
                    return ol[e]
                })), this.stateDependentLayerIds = this.layers.filter((function(e) {
                    return e.isStateDependent()
                })).map((function(e) {
                    return e.id
                })), this.sourceID = t.sourceID
            }
            return d(e, [{
                key: "createArrays",
                value: function() {
                    this.text = new rc(new eo(this.layers, this.zoom, (function(e) {
                        return /^text/.test(e)
                    }))), this.icon = new rc(new eo(this.layers, this.zoom, (function(e) {
                        return /^icon/.test(e)
                    }))), this.glyphOffsetArray = new za, this.lineVertexArray = new Ma, this.symbolInstances = new Ia
                }
            }, {
                key: "calculateGlyphDependencies",
                value: function(e, t, r, n, i) {
                    for (var a = 0; a < e.length; a++)
                        if (t[e.charCodeAt(a)] = !0, n && i) {
                            var o = Vu[e.charAt(a)];
                            o && (t[o.charCodeAt(0)] = !0)
                        }
                }
            }, {
                key: "populate",
                value: function(e, t, r) {
                    var n = this.layers[0],
                        i = n.layout,
                        a = i.get("text-font"),
                        o = i.get("text-field"),
                        s = i.get("icon-image"),
                        u = ("constant" !== o.value.kind || o.value.value instanceof he && !o.value.value.isEmpty() || o.value.value.toString().length > 0) && ("constant" !== a.value.kind || a.value.value.length > 0),
                        c = "constant" !== s.value.kind || !!s.value.value || Object.keys(s.parameters).length > 0,
                        h = i.get("symbol-sort-key");
                    if (this.features = [], u || c) {
                        var f, p = t.iconDependencies,
                            y = t.glyphDependencies,
                            d = t.availableImages,
                            v = new Pi(this.zoom),
                            m = l(e);
                        try {
                            for (m.s(); !(f = m.n()).done;) {
                                var g = f.value,
                                    x = g.feature,
                                    b = g.id,
                                    k = g.index,
                                    w = g.sourceLayerIndex,
                                    _ = n._featureFilter.needGeometry,
                                    S = yo(x, _);
                                if (n._featureFilter.filter(v, S, r)) {
                                    var A = void 0,
                                        I = void 0;
                                    if (_ || (S.geometry = po(x)), u) {
                                        var z = n.getValueAndResolveTokens("text-field", S, r, d),
                                            M = he.factory(z);
                                        tc(M) && (this.hasRTLText = !0), (!this.hasRTLText || "unavailable" === Mi || this.hasRTLText && Bi.isParsed()) && (A = Pu(M, n, S))
                                    }
                                    if (c) {
                                        var C = n.getValueAndResolveTokens("icon-image", S, r, d);
                                        I = C instanceof fe ? C : fe.fromString(C)
                                    }
                                    if (A || I) {
                                        var B = this.sortFeaturesByKey ? h.evaluate(S, {}, r) : void 0;
                                        if (this.features.push({
                                                id: b,
                                                text: A,
                                                icon: I,
                                                index: k,
                                                sourceLayerIndex: w,
                                                geometry: S.geometry,
                                                properties: x.properties,
                                                type: Wl[x.type],
                                                sortKey: B
                                            }), I && (p[I.name] = !0), A) {
                                            var P = a.evaluate(S, {}, r).join(","),
                                                V = "map" === i.get("text-rotation-alignment") && "point" !== i.get("symbol-placement");
                                            this.allowVerticalPlacement = this.writingModes && this.writingModes.indexOf(ol.vertical) >= 0;
                                            var T, E = l(A.sections);
                                            try {
                                                for (E.s(); !(T = E.n()).done;) {
                                                    var D = T.value;
                                                    if (D.image) p[D.image.name] = !0;
                                                    else {
                                                        var F = Jn(A.toString()),
                                                            L = D.fontStack || P,
                                                            O = y[L] = y[L] || {};
                                                        this.calculateGlyphDependencies(D.text, O, V, this.allowVerticalPlacement, F)
                                                    }
                                                }
                                            } catch (R) {
                                                E.e(R)
                                            } finally {
                                                E.f()
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (R) {
                            m.e(R)
                        } finally {
                            m.f()
                        }
                        "line" === i.get("symbol-placement") && (this.features = function(e) {
                            var t = {},
                                r = {},
                                n = [],
                                i = 0;

                            function a(t) {
                                n.push(e[t]), i++
                            }

                            function o(e, t, i) {
                                var a = r[e];
                                return delete r[e], r[t] = a, n[a].geometry[0].pop(), n[a].geometry[0] = n[a].geometry[0].concat(i[0]), a
                            }

                            function s(e, r, i) {
                                var a = t[r];
                                return delete t[r], t[e] = a, n[a].geometry[0].shift(), n[a].geometry[0] = i[0].concat(n[a].geometry[0]), a
                            }

                            function u(e, t, r) {
                                var n = r ? t[0][t[0].length - 1] : t[0][0];
                                return "".concat(e, ":").concat(n.x, ":").concat(n.y)
                            }
                            for (var l = 0; l < e.length; l++) {
                                var c = e[l],
                                    h = c.geometry,
                                    f = c.text ? c.text.toString() : null;
                                if (f) {
                                    var p = u(f, h),
                                        y = u(f, h, !0);
                                    if (p in r && y in t && r[p] !== t[y]) {
                                        var d = s(p, y, h),
                                            v = o(p, y, n[d].geometry);
                                        delete t[p], delete r[y], r[u(f, n[v].geometry, !0)] = v, n[d].geometry = null
                                    } else p in r ? o(p, y, h) : y in t ? s(p, y, h) : (a(l), t[p] = i - 1, r[y] = i - 1)
                                } else a(l)
                            }
                            return n.filter((function(e) {
                                return e.geometry
                            }))
                        }(this.features)), this.sortFeaturesByKey && this.features.sort((function(e, t) {
                            return e.sortKey - t.sortKey
                        }))
                    }
                }
            }, {
                key: "update",
                value: function(e, t, r) {
                    this.stateDependentLayers.length && (this.text.programConfigurations.updatePaintArrays(e, t, this.layers, r), this.icon.programConfigurations.updatePaintArrays(e, t, this.layers, r))
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return 0 === this.symbolInstances.length && !this.hasRTLText
                }
            }, {
                key: "uploadPending",
                value: function() {
                    return !this.uploaded || this.text.programConfigurations.needsUpload || this.icon.programConfigurations.needsUpload
                }
            }, {
                key: "upload",
                value: function(e) {
                    !this.uploaded && this.hasDebugData() && (this.textCollisionBox.upload(e), this.iconCollisionBox.upload(e)), this.text.upload(e, this.sortFeaturesByY, !this.uploaded, this.text.programConfigurations.needsUpload), this.icon.upload(e, this.sortFeaturesByY, !this.uploaded, this.icon.programConfigurations.needsUpload), this.uploaded = !0
                }
            }, {
                key: "destroyDebugData",
                value: function() {
                    this.textCollisionBox.destroy(), this.iconCollisionBox.destroy()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.text.destroy(), this.icon.destroy(), this.hasDebugData() && this.destroyDebugData()
                }
            }, {
                key: "addToLineVertexArray",
                value: function(e, t) {
                    var r = this.lineVertexArray.length;
                    if (void 0 !== e.segment) {
                        for (var n = e.dist(t[e.segment + 1]), i = e.dist(t[e.segment]), a = {}, o = e.segment + 1; o < t.length; o++) a[o] = {
                            x: t[o].x,
                            y: t[o].y,
                            tileUnitDistanceFromAnchor: n
                        }, o < t.length - 1 && (n += t[o + 1].dist(t[o]));
                        for (var s = e.segment || 0; s >= 0; s--) a[s] = {
                            x: t[s].x,
                            y: t[s].y,
                            tileUnitDistanceFromAnchor: i
                        }, s > 0 && (i += t[s - 1].dist(t[s]));
                        for (var u = 0; u < t.length; u++) {
                            var l = a[u];
                            this.lineVertexArray.emplaceBack(l.x, l.y, l.tileUnitDistanceFromAnchor)
                        }
                    }
                    return {
                        lineStartIndex: r,
                        lineLength: this.lineVertexArray.length - r
                    }
                }
            }, {
                key: "addSymbols",
                value: function(e, t, r, n, i, a, o, s, u, l, c, h, f) {
                    for (var p = e.indexArray, y = e.layoutVertexArray, d = e.segments.prepareSegment(4 * t.length, y, p, this.canOverlap ? a.sortKey : void 0), v = this.glyphOffsetArray.length, m = d.vertexLength, g = this.allowVerticalPlacement && o === ol.vertical ? Math.PI / 2 : 0, x = a.text && a.text.sections, b = 0; b < t.length; b++) {
                        var k = t[b],
                            w = k.tl,
                            _ = k.tr,
                            S = k.bl,
                            A = k.br,
                            I = k.tex,
                            z = k.pixelOffsetTL,
                            M = k.pixelOffsetBR,
                            C = k.minFontScaleX,
                            B = k.minFontScaleY,
                            P = k.glyphOffset,
                            V = k.isSDF,
                            T = k.sectionIndex,
                            E = d.vertexLength,
                            D = P[1];
                        Ql(y, s.x, s.y, s.z, u.x, u.y, w.x, D + w.y, I.x, I.y, r, V, z.x, z.y, C, B), Ql(y, s.x, s.y, s.z, u.x, u.y, _.x, D + _.y, I.x + I.w, I.y, r, V, M.x, z.y, C, B), Ql(y, s.x, s.y, s.z, u.x, u.y, S.x, D + S.y, I.x, I.y + I.h, r, V, z.x, M.y, C, B), Ql(y, s.x, s.y, s.z, u.x, u.y, A.x, D + A.y, I.x + I.w, I.y + I.h, r, V, M.x, M.y, C, B), ec(e.dynamicLayoutVertexArray, s, g), p.emplaceBack(E, E + 1, E + 2), p.emplaceBack(E + 1, E + 2, E + 3), d.vertexLength += 4, d.primitiveLength += 2, this.glyphOffsetArray.emplaceBack(P[0]), b !== t.length - 1 && T === t[b + 1].sectionIndex || e.programConfigurations.populatePaintArrays(y.length, a, a.index, {}, f, x && x[T])
                    }
                    e.placedSymbolArray.emplaceBack(s.x, s.y, s.z, u.x, u.y, v, this.glyphOffsetArray.length - v, m, l, c, u.segment, r ? r[0] : 0, r ? r[1] : 0, n[0], n[1], o, 0, !1, 0, h, 0)
                }
            }, {
                key: "_commitLayoutVertex",
                value: function(e, t, r, n, i, a, o) {
                    e.emplaceBack(t, r, n, i, a, Math.round(o.x), Math.round(o.y))
                }
            }, {
                key: "_addCollisionDebugVertices",
                value: function(e, t, n, i, a, o, s) {
                    for (var u = n.segments.prepareSegment(4, n.layoutVertexArray, n.indexArray), l = u.vertexLength, c = s.tileAnchorX, h = s.tileAnchorY, f = 0; f < 4; f++) n.collisionVertexArray.emplaceBack(0, 0, 0, 0);
                    n.collisionVertexArrayExt.emplaceBack(t, -e.padding, -e.padding), n.collisionVertexArrayExt.emplaceBack(t, e.padding, -e.padding), n.collisionVertexArrayExt.emplaceBack(t, e.padding, e.padding), n.collisionVertexArrayExt.emplaceBack(t, -e.padding, e.padding), this._commitLayoutVertex(n.layoutVertexArray, i, a, o, c, h, new r(e.x1, e.y1)), this._commitLayoutVertex(n.layoutVertexArray, i, a, o, c, h, new r(e.x2, e.y1)), this._commitLayoutVertex(n.layoutVertexArray, i, a, o, c, h, new r(e.x2, e.y2)), this._commitLayoutVertex(n.layoutVertexArray, i, a, o, c, h, new r(e.x1, e.y2)), u.vertexLength += 4;
                    var p = n.indexArray;
                    p.emplaceBack(l, l + 1), p.emplaceBack(l + 1, l + 2), p.emplaceBack(l + 2, l + 3), p.emplaceBack(l + 3, l), u.primitiveLength += 4
                }
            }, {
                key: "_addTextDebugCollisionBoxes",
                value: function(e, t, r, n, i, a) {
                    for (var o = n; o < i; o++) {
                        var s = r.get(o),
                            u = this.getSymbolInstanceTextSize(e, a, t, o);
                        this._addCollisionDebugVertices(s, u, this.textCollisionBox, s.projectedAnchorX, s.projectedAnchorY, s.projectedAnchorZ, a)
                    }
                }
            }, {
                key: "_addIconDebugCollisionBoxes",
                value: function(e, t, r, n, i, a) {
                    for (var o = n; o < i; o++) {
                        var s = r.get(o),
                            u = this.getSymbolInstanceIconSize(e, t, o);
                        this._addCollisionDebugVertices(s, u, this.iconCollisionBox, s.projectedAnchorX, s.projectedAnchorY, s.projectedAnchorZ, a)
                    }
                }
            }, {
                key: "generateCollisionDebugBuffers",
                value: function(e, t) {
                    this.hasDebugData() && this.destroyDebugData(), this.textCollisionBox = new nc(sa, Au.members, va), this.iconCollisionBox = new nc(sa, Au.members, va);
                    for (var r = Bu(this.iconSizeData, e), n = Bu(this.textSizeData, e), i = 0; i < this.symbolInstances.length; i++) {
                        var a = this.symbolInstances.get(i);
                        this._addTextDebugCollisionBoxes(n, e, t, a.textBoxStartIndex, a.textBoxEndIndex, a), this._addTextDebugCollisionBoxes(n, e, t, a.verticalTextBoxStartIndex, a.verticalTextBoxEndIndex, a), this._addIconDebugCollisionBoxes(r, e, t, a.iconBoxStartIndex, a.iconBoxEndIndex, a), this._addIconDebugCollisionBoxes(r, e, t, a.verticalIconBoxStartIndex, a.verticalIconBoxEndIndex, a)
                    }
                }
            }, {
                key: "getSymbolInstanceTextSize",
                value: function(e, t, r, n) {
                    var i = this.text.placedSymbolArray.get(t.rightJustifiedTextSymbolIndex >= 0 ? t.rightJustifiedTextSymbolIndex : t.centerJustifiedTextSymbolIndex >= 0 ? t.centerJustifiedTextSymbolIndex : t.leftJustifiedTextSymbolIndex >= 0 ? t.leftJustifiedTextSymbolIndex : t.verticalPlacedTextSymbolIndex >= 0 ? t.verticalPlacedTextSymbolIndex : n),
                        a = Cu(this.textSizeData, e, i) / Iu;
                    return this.tilePixelRatio * a
                }
            }, {
                key: "getSymbolInstanceIconSize",
                value: function(e, t, r) {
                    var n = this.icon.placedSymbolArray.get(r),
                        i = Cu(this.iconSizeData, e, n);
                    return this.tilePixelRatio * i
                }
            }, {
                key: "_commitDebugCollisionVertexUpdate",
                value: function(e, t, r) {
                    e.emplaceBack(t, -r, -r), e.emplaceBack(t, r, -r), e.emplaceBack(t, r, r), e.emplaceBack(t, -r, r)
                }
            }, {
                key: "_updateTextDebugCollisionBoxes",
                value: function(e, t, r, n, i, a) {
                    for (var o = n; o < i; o++) {
                        var s = r.get(o),
                            u = this.getSymbolInstanceTextSize(e, a, t, o);
                        this._commitDebugCollisionVertexUpdate(this.textCollisionBox.collisionVertexArrayExt, u, s.padding)
                    }
                }
            }, {
                key: "_updateIconDebugCollisionBoxes",
                value: function(e, t, r, n, i) {
                    for (var a = n; a < i; a++) {
                        var o = r.get(a),
                            s = this.getSymbolInstanceIconSize(e, t, a);
                        this._commitDebugCollisionVertexUpdate(this.iconCollisionBox.collisionVertexArrayExt, s, o.padding)
                    }
                }
            }, {
                key: "updateCollisionDebugBuffers",
                value: function(e, t) {
                    if (this.hasDebugData()) {
                        this.hasTextCollisionBoxData() && this.textCollisionBox.collisionVertexArrayExt.clear(), this.hasIconCollisionBoxData() && this.iconCollisionBox.collisionVertexArrayExt.clear();
                        for (var r = Bu(this.iconSizeData, e), n = Bu(this.textSizeData, e), i = 0; i < this.symbolInstances.length; i++) {
                            var a = this.symbolInstances.get(i);
                            this._updateTextDebugCollisionBoxes(n, e, t, a.textBoxStartIndex, a.textBoxEndIndex, a), this._updateTextDebugCollisionBoxes(n, e, t, a.verticalTextBoxStartIndex, a.verticalTextBoxEndIndex, a), this._updateIconDebugCollisionBoxes(r, e, t, a.iconBoxStartIndex, a.iconBoxEndIndex), this._updateIconDebugCollisionBoxes(r, e, t, a.verticalIconBoxStartIndex, a.verticalIconBoxEndIndex)
                        }
                        this.hasTextCollisionBoxData() && this.textCollisionBox.collisionVertexBufferExt && this.textCollisionBox.collisionVertexBufferExt.updateData(this.textCollisionBox.collisionVertexArrayExt), this.hasIconCollisionBoxData() && this.iconCollisionBox.collisionVertexBufferExt && this.iconCollisionBox.collisionVertexBufferExt.updateData(this.iconCollisionBox.collisionVertexArrayExt)
                    }
                }
            }, {
                key: "_deserializeCollisionBoxesForSymbol",
                value: function(e, t, r, n, i, a, o, s, u) {
                    for (var l = {}, c = t; c < r; c++) {
                        var h = e.get(c);
                        l.textBox = {
                            x1: h.x1,
                            y1: h.y1,
                            x2: h.x2,
                            y2: h.y2,
                            padding: h.padding,
                            projectedAnchorX: h.projectedAnchorX,
                            projectedAnchorY: h.projectedAnchorY,
                            projectedAnchorZ: h.projectedAnchorZ,
                            tileAnchorX: h.tileAnchorX,
                            tileAnchorY: h.tileAnchorY
                        }, l.textFeatureIndex = h.featureIndex;
                        break
                    }
                    for (var f = n; f < i; f++) {
                        var p = e.get(f);
                        l.verticalTextBox = {
                            x1: p.x1,
                            y1: p.y1,
                            x2: p.x2,
                            y2: p.y2,
                            padding: p.padding,
                            projectedAnchorX: p.projectedAnchorX,
                            projectedAnchorY: p.projectedAnchorY,
                            projectedAnchorZ: p.projectedAnchorZ,
                            tileAnchorX: p.tileAnchorX,
                            tileAnchorY: p.tileAnchorY
                        }, l.verticalTextFeatureIndex = p.featureIndex;
                        break
                    }
                    for (var y = a; y < o; y++) {
                        var d = e.get(y);
                        l.iconBox = {
                            x1: d.x1,
                            y1: d.y1,
                            x2: d.x2,
                            y2: d.y2,
                            padding: d.padding,
                            projectedAnchorX: d.projectedAnchorX,
                            projectedAnchorY: d.projectedAnchorY,
                            projectedAnchorZ: d.projectedAnchorZ,
                            tileAnchorX: d.tileAnchorX,
                            tileAnchorY: d.tileAnchorY
                        }, l.iconFeatureIndex = d.featureIndex;
                        break
                    }
                    for (var v = s; v < u; v++) {
                        var m = e.get(v);
                        l.verticalIconBox = {
                            x1: m.x1,
                            y1: m.y1,
                            x2: m.x2,
                            y2: m.y2,
                            padding: m.padding,
                            projectedAnchorX: m.projectedAnchorX,
                            projectedAnchorY: m.projectedAnchorY,
                            projectedAnchorZ: m.projectedAnchorZ,
                            tileAnchorX: m.tileAnchorX,
                            tileAnchorY: m.tileAnchorY
                        }, l.verticalIconFeatureIndex = m.featureIndex;
                        break
                    }
                    return l
                }
            }, {
                key: "deserializeCollisionBoxes",
                value: function(e) {
                    this.collisionArrays = [];
                    for (var t = 0; t < this.symbolInstances.length; t++) {
                        var r = this.symbolInstances.get(t);
                        this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(e, r.textBoxStartIndex, r.textBoxEndIndex, r.verticalTextBoxStartIndex, r.verticalTextBoxEndIndex, r.iconBoxStartIndex, r.iconBoxEndIndex, r.verticalIconBoxStartIndex, r.verticalIconBoxEndIndex))
                    }
                }
            }, {
                key: "hasTextData",
                value: function() {
                    return this.text.segments.get().length > 0
                }
            }, {
                key: "hasIconData",
                value: function() {
                    return this.icon.segments.get().length > 0
                }
            }, {
                key: "hasDebugData",
                value: function() {
                    return this.textCollisionBox && this.iconCollisionBox
                }
            }, {
                key: "hasTextCollisionBoxData",
                value: function() {
                    return this.hasDebugData() && this.textCollisionBox.segments.get().length > 0
                }
            }, {
                key: "hasIconCollisionBoxData",
                value: function() {
                    return this.hasDebugData() && this.iconCollisionBox.segments.get().length > 0
                }
            }, {
                key: "addIndicesForPlacedSymbol",
                value: function(e, t) {
                    for (var r = e.placedSymbolArray.get(t), n = r.vertexStartIndex + 4 * r.numGlyphs, i = r.vertexStartIndex; i < n; i += 4) e.indexArray.emplaceBack(i, i + 1, i + 2), e.indexArray.emplaceBack(i + 1, i + 2, i + 3)
                }
            }, {
                key: "getSortedSymbolIndexes",
                value: function(e) {
                    if (this.sortedAngle === e && void 0 !== this.symbolInstanceIndexes) return this.symbolInstanceIndexes;
                    for (var t = Math.sin(e), r = Math.cos(e), n = [], i = [], a = [], o = 0; o < this.symbolInstances.length; ++o) {
                        a.push(o);
                        var s = this.symbolInstances.get(o);
                        n.push(0 | Math.round(t * s.tileAnchorX + r * s.tileAnchorY)), i.push(s.featureIndex)
                    }
                    return a.sort((function(e, t) {
                        return n[e] - n[t] || i[t] - i[e]
                    })), a
                }
            }, {
                key: "addToSortKeyRanges",
                value: function(e, t) {
                    var r = this.sortKeyRanges[this.sortKeyRanges.length - 1];
                    r && r.sortKey === t ? r.symbolInstanceEnd = e + 1 : this.sortKeyRanges.push({
                        sortKey: t,
                        symbolInstanceStart: e,
                        symbolInstanceEnd: e + 1
                    })
                }
            }, {
                key: "sortFeatures",
                value: function(e) {
                    var t = this;
                    if (this.sortFeaturesByY && this.sortedAngle !== e && !(this.text.segments.get().length > 1 || this.icon.segments.get().length > 1)) {
                        this.symbolInstanceIndexes = this.getSortedSymbolIndexes(e), this.sortedAngle = e, this.text.indexArray.clear(), this.icon.indexArray.clear(), this.featureSortOrder = [];
                        var r, n = l(this.symbolInstanceIndexes);
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                var i = r.value,
                                    a = this.symbolInstances.get(i);
                                this.featureSortOrder.push(a.featureIndex), [a.rightJustifiedTextSymbolIndex, a.centerJustifiedTextSymbolIndex, a.leftJustifiedTextSymbolIndex].forEach((function(e, r, n) {
                                    e >= 0 && n.indexOf(e) === r && t.addIndicesForPlacedSymbol(t.text, e)
                                })), a.verticalPlacedTextSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.text, a.verticalPlacedTextSymbolIndex), a.placedIconSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.icon, a.placedIconSymbolIndex), a.verticalPlacedIconSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.icon, a.verticalPlacedIconSymbolIndex)
                            }
                        } catch (o) {
                            n.e(o)
                        } finally {
                            n.f()
                        }
                        this.text.indexBuffer && this.text.indexBuffer.updateData(this.text.indexArray), this.icon.indexBuffer && this.icon.indexBuffer.updateData(this.icon.indexArray)
                    }
                }
            }]), e
        }();
        vr("SymbolBucket", ic, {
            omit: ["layers", "collisionBoxArray", "features", "compareText"]
        }), ic.MAX_GLYPHS = 65535, ic.addDynamicAttributes = ec;
        var ac = new Xi({
                "symbol-placement": new ji(zr.layout_symbol["symbol-placement"]),
                "symbol-spacing": new ji(zr.layout_symbol["symbol-spacing"]),
                "symbol-avoid-edges": new ji(zr.layout_symbol["symbol-avoid-edges"]),
                "symbol-sort-key": new Ui(zr.layout_symbol["symbol-sort-key"]),
                "symbol-z-order": new ji(zr.layout_symbol["symbol-z-order"]),
                "icon-allow-overlap": new ji(zr.layout_symbol["icon-allow-overlap"]),
                "icon-ignore-placement": new ji(zr.layout_symbol["icon-ignore-placement"]),
                "icon-optional": new ji(zr.layout_symbol["icon-optional"]),
                "icon-rotation-alignment": new ji(zr.layout_symbol["icon-rotation-alignment"]),
                "icon-size": new Ui(zr.layout_symbol["icon-size"]),
                "icon-text-fit": new ji(zr.layout_symbol["icon-text-fit"]),
                "icon-text-fit-padding": new ji(zr.layout_symbol["icon-text-fit-padding"]),
                "icon-image": new Ui(zr.layout_symbol["icon-image"]),
                "icon-rotate": new Ui(zr.layout_symbol["icon-rotate"]),
                "icon-padding": new ji(zr.layout_symbol["icon-padding"]),
                "icon-keep-upright": new ji(zr.layout_symbol["icon-keep-upright"]),
                "icon-offset": new Ui(zr.layout_symbol["icon-offset"]),
                "icon-anchor": new Ui(zr.layout_symbol["icon-anchor"]),
                "icon-pitch-alignment": new ji(zr.layout_symbol["icon-pitch-alignment"]),
                "text-pitch-alignment": new ji(zr.layout_symbol["text-pitch-alignment"]),
                "text-rotation-alignment": new ji(zr.layout_symbol["text-rotation-alignment"]),
                "text-field": new Ui(zr.layout_symbol["text-field"]),
                "text-font": new Ui(zr.layout_symbol["text-font"]),
                "text-size": new Ui(zr.layout_symbol["text-size"]),
                "text-max-width": new Ui(zr.layout_symbol["text-max-width"]),
                "text-line-height": new Ui(zr.layout_symbol["text-line-height"]),
                "text-letter-spacing": new Ui(zr.layout_symbol["text-letter-spacing"]),
                "text-justify": new Ui(zr.layout_symbol["text-justify"]),
                "text-radial-offset": new Ui(zr.layout_symbol["text-radial-offset"]),
                "text-variable-anchor": new ji(zr.layout_symbol["text-variable-anchor"]),
                "text-anchor": new Ui(zr.layout_symbol["text-anchor"]),
                "text-max-angle": new ji(zr.layout_symbol["text-max-angle"]),
                "text-writing-mode": new ji(zr.layout_symbol["text-writing-mode"]),
                "text-rotate": new Ui(zr.layout_symbol["text-rotate"]),
                "text-padding": new ji(zr.layout_symbol["text-padding"]),
                "text-keep-upright": new ji(zr.layout_symbol["text-keep-upright"]),
                "text-transform": new Ui(zr.layout_symbol["text-transform"]),
                "text-offset": new Ui(zr.layout_symbol["text-offset"]),
                "text-allow-overlap": new ji(zr.layout_symbol["text-allow-overlap"]),
                "text-ignore-placement": new ji(zr.layout_symbol["text-ignore-placement"]),
                "text-optional": new ji(zr.layout_symbol["text-optional"])
            }),
            oc = {
                paint: new Xi({
                    "icon-opacity": new Ui(zr.paint_symbol["icon-opacity"]),
                    "icon-color": new Ui(zr.paint_symbol["icon-color"]),
                    "icon-halo-color": new Ui(zr.paint_symbol["icon-halo-color"]),
                    "icon-halo-width": new Ui(zr.paint_symbol["icon-halo-width"]),
                    "icon-halo-blur": new Ui(zr.paint_symbol["icon-halo-blur"]),
                    "icon-translate": new ji(zr.paint_symbol["icon-translate"]),
                    "icon-translate-anchor": new ji(zr.paint_symbol["icon-translate-anchor"]),
                    "text-opacity": new Ui(zr.paint_symbol["text-opacity"]),
                    "text-color": new Ui(zr.paint_symbol["text-color"], {
                        runtimeType: W,
                        getOverride: function(e) {
                            return e.textColor
                        },
                        hasOverride: function(e) {
                            return !!e.textColor
                        }
                    }),
                    "text-halo-color": new Ui(zr.paint_symbol["text-halo-color"]),
                    "text-halo-width": new Ui(zr.paint_symbol["text-halo-width"]),
                    "text-halo-blur": new Ui(zr.paint_symbol["text-halo-blur"]),
                    "text-translate": new ji(zr.paint_symbol["text-translate"]),
                    "text-translate-anchor": new ji(zr.paint_symbol["text-translate-anchor"])
                }),
                layout: ac
            },
            sc = function() {
                function e(t) {
                    y(this, e), this.type = t.property.overrides ? t.property.overrides.runtimeType : Y, this.defaultValue = t
                }
                return d(e, [{
                    key: "evaluate",
                    value: function(e) {
                        if (e.formattedSection) {
                            var t = this.defaultValue.property.overrides;
                            if (t && t.hasOverride(e.formattedSection)) return t.getOverride(e.formattedSection)
                        }
                        return e.feature && e.featureState ? this.defaultValue.evaluate(e.feature, e.featureState) : this.defaultValue.property.specification.default
                    }
                }, {
                    key: "eachChild",
                    value: function(e) {
                        this.defaultValue.isConstant() || e(this.defaultValue.value._styleExpression.expression)
                    }
                }, {
                    key: "outputDefined",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return null
                    }
                }]), e
            }();
        vr("FormatSectionOverride", sc, {
            omit: ["defaultValue"]
        });
        var uc = function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    return y(this, r), t.call(this, e, oc)
                }
                return d(r, [{
                    key: "recalculate",
                    value: function(e, t) {
                        i(a(r.prototype), "recalculate", this).call(this, e, t), "auto" === this.layout.get("icon-rotation-alignment") && (this.layout._values["icon-rotation-alignment"] = "point" !== this.layout.get("symbol-placement") ? "map" : "viewport"), "auto" === this.layout.get("text-rotation-alignment") && (this.layout._values["text-rotation-alignment"] = "point" !== this.layout.get("symbol-placement") ? "map" : "viewport"), "auto" === this.layout.get("text-pitch-alignment") && (this.layout._values["text-pitch-alignment"] = this.layout.get("text-rotation-alignment")), "auto" === this.layout.get("icon-pitch-alignment") && (this.layout._values["icon-pitch-alignment"] = this.layout.get("icon-rotation-alignment"));
                        var n = this.layout.get("text-writing-mode");
                        if (n) {
                            var o, s = [],
                                u = l(n);
                            try {
                                for (u.s(); !(o = u.n()).done;) {
                                    var c = o.value;
                                    s.indexOf(c) < 0 && s.push(c)
                                }
                            } catch (h) {
                                u.e(h)
                            } finally {
                                u.f()
                            }
                            this.layout._values["text-writing-mode"] = s
                        } else this.layout._values["text-writing-mode"] = "point" === this.layout.get("symbol-placement") ? ["horizontal"] : ["horizontal", "vertical"];
                        this._setPaintOverrides()
                    }
                }, {
                    key: "getValueAndResolveTokens",
                    value: function(e, t, r, n) {
                        var i = this.layout.get(e).evaluate(t, {}, r, n),
                            a = this._unevaluatedLayout._values[e];
                        return a.isDataDriven() || or(a.value) || !i ? i : function(e, t) {
                            return t.replace(/{([^{}]+)}/g, (function(t, r) {
                                return r in e ? String(e[r]) : ""
                            }))
                        }(t.properties, i)
                    }
                }, {
                    key: "createBucket",
                    value: function(e) {
                        return new ic(e)
                    }
                }, {
                    key: "queryRadius",
                    value: function() {
                        return 0
                    }
                }, {
                    key: "queryIntersectsFeature",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "_setPaintOverrides",
                    value: function() {
                        var e, t = l(oc.paint.overridableProperties);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value;
                                if (r.hasPaintOverride(this.layout, n)) {
                                    var i, a = this.paint.get(n),
                                        o = new sc(a),
                                        s = new ar(o, a.property.specification);
                                    i = "constant" === a.value.kind || "source" === a.value.kind ? new ur("source", s) : new lr("composite", s, a.value.zoomStops, a.value._interpolationType), this.paint._values[n] = new Oi(a.property, i, a.parameters)
                                }
                            }
                        } catch (u) {
                            t.e(u)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "_handleOverridablePaintPropertyUpdate",
                    value: function(e, t, n) {
                        return !(!this.layout || t.isDataDriven() || n.isDataDriven()) && r.hasPaintOverride(this.layout, e)
                    }
                }, {
                    key: "getProgramConfiguration",
                    value: function(e) {
                        return new Qa(this, e)
                    }
                }], [{
                    key: "hasPaintOverride",
                    value: function(e, t) {
                        var r = e.get("text-field"),
                            n = oc.paint.properties[t],
                            i = !1,
                            a = function(e) {
                                var t, r = l(e);
                                try {
                                    for (r.s(); !(t = r.n()).done;) {
                                        var a = t.value;
                                        if (n.overrides && n.overrides.hasOverride(a)) return void(i = !0)
                                    }
                                } catch (o) {
                                    r.e(o)
                                } finally {
                                    r.f()
                                }
                            };
                        if ("constant" === r.value.kind && r.value.value instanceof he) a(r.value.value.sections);
                        else if ("source" === r.value.kind) {
                            var o = r.value;
                            o._styleExpression && function e(t) {
                                i || (t instanceof me && de(t.value) === te ? a(t.value.sections) : t instanceof ke ? a(t.sections) : t.eachChild(e))
                            }(o._styleExpression.expression)
                        }
                        return i
                    }
                }]), r
            }(so),
            lc = {
                paint: new Xi({
                    "background-color": new ji(zr.paint_background["background-color"]),
                    "background-pattern": new Ni(zr.paint_background["background-pattern"]),
                    "background-opacity": new ji(zr.paint_background["background-opacity"])
                })
            },
            cc = {
                paint: new Xi({
                    "raster-opacity": new ji(zr.paint_raster["raster-opacity"]),
                    "raster-hue-rotate": new ji(zr.paint_raster["raster-hue-rotate"]),
                    "raster-brightness-min": new ji(zr.paint_raster["raster-brightness-min"]),
                    "raster-brightness-max": new ji(zr.paint_raster["raster-brightness-max"]),
                    "raster-saturation": new ji(zr.paint_raster["raster-saturation"]),
                    "raster-contrast": new ji(zr.paint_raster["raster-contrast"]),
                    "raster-resampling": new ji(zr.paint_raster["raster-resampling"]),
                    "raster-fade-duration": new ji(zr.paint_raster["raster-fade-duration"])
                })
            },
            hc = function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    var n;
                    return y(this, r), (n = t.call(this, e, {})).implementation = e, n
                }
                return d(r, [{
                    key: "is3D",
                    value: function() {
                        return "3d" === this.implementation.renderingMode
                    }
                }, {
                    key: "hasOffscreenPass",
                    value: function() {
                        return void 0 !== this.implementation.prerender
                    }
                }, {
                    key: "recalculate",
                    value: function() {}
                }, {
                    key: "updateTransitions",
                    value: function() {}
                }, {
                    key: "hasTransition",
                    value: function() {}
                }, {
                    key: "serialize",
                    value: function() {}
                }, {
                    key: "onAdd",
                    value: function(e) {
                        this.implementation.onAdd && this.implementation.onAdd(e, e.painter.context.gl)
                    }
                }, {
                    key: "onRemove",
                    value: function(e) {
                        this.implementation.onRemove && this.implementation.onRemove(e, e.painter.context.gl)
                    }
                }]), r
            }(so),
            fc = {
                paint: new Xi({
                    "sky-type": new ji(zr.paint_sky["sky-type"]),
                    "sky-atmosphere-sun": new ji(zr.paint_sky["sky-atmosphere-sun"]),
                    "sky-atmosphere-sun-intensity": new ji(zr.paint_sky["sky-atmosphere-sun-intensity"]),
                    "sky-gradient-center": new ji(zr.paint_sky["sky-gradient-center"]),
                    "sky-gradient-radius": new ji(zr.paint_sky["sky-gradient-radius"]),
                    "sky-gradient": new Zi(zr.paint_sky["sky-gradient"]),
                    "sky-atmosphere-halo-color": new ji(zr.paint_sky["sky-atmosphere-halo-color"]),
                    "sky-atmosphere-color": new ji(zr.paint_sky["sky-atmosphere-color"]),
                    "sky-opacity": new ji(zr.paint_sky["sky-opacity"])
                })
            };

        function pc(e, t, r) {
            var n = Ro(0, 0, 1),
                i = function(e) {
                    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
                }(qo());
            return function(e, t, r) {
                    r *= .5;
                    var n = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = Math.sin(r),
                        u = Math.cos(r);
                    e[0] = n * u - a * s, e[1] = i * u + o * s, e[2] = a * u + n * s, e[3] = o * u - i * s
                }(i, i, r ? -b(e) + Math.PI : b(e)),
                function(e, t, r) {
                    r *= .5;
                    var n = t[0],
                        i = t[1],
                        a = t[2],
                        o = t[3],
                        s = Math.sin(r),
                        u = Math.cos(r);
                    e[0] = n * u + o * s, e[1] = i * u + a * s, e[2] = a * u - i * s, e[3] = o * u - n * s
                }(i, i, -b(t)),
                function(e, t, r) {
                    var n = r[0],
                        i = r[1],
                        a = r[2],
                        o = t[0],
                        s = t[1],
                        u = t[2],
                        l = i * u - a * s,
                        c = a * o - n * u,
                        h = n * s - i * o,
                        f = i * h - a * c,
                        p = a * l - n * h,
                        y = n * c - i * l,
                        d = 2 * r[3];
                    c *= d, h *= d, p *= 2, y *= 2, e[0] = o + (l *= d) + (f *= 2), e[1] = s + c + p, e[2] = u + h + y
                }(n, n, i),
                function(e, t) {
                    var r = t[0],
                        n = t[1],
                        i = t[2],
                        a = r * r + n * n + i * i;
                    return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e
                }(n, n)
        }
        var yc = {
            circle: function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    return y(this, r), t.call(this, e, Do)
                }
                return d(r, [{
                    key: "createBucket",
                    value: function(e) {
                        return new mo(e)
                    }
                }, {
                    key: "queryRadius",
                    value: function(e) {
                        var t = e;
                        return Co("circle-radius", this, t) + Co("circle-stroke-width", this, t) + Bo(this.paint.get("circle-translate"))
                    }
                }, {
                    key: "queryIntersectsFeature",
                    value: function(e, t, r, n, i, a, o, s) {
                        var u = Vo(this.paint.get("circle-translate"), this.paint.get("circle-translate-anchor"), a.angle, e.pixelToTileUnitsFactor),
                            l = this.paint.get("circle-radius").evaluate(t, r) + this.paint.get("circle-stroke-width").evaluate(t, r);
                        return No(e, n, a, o, s, "map" === this.paint.get("circle-pitch-alignment"), "map" === this.paint.get("circle-pitch-scale"), u, l)
                    }
                }, {
                    key: "getProgramIds",
                    value: function() {
                        return ["circle"]
                    }
                }, {
                    key: "getProgramConfiguration",
                    value: function(e) {
                        return new Qa(this, e)
                    }
                }]), r
            }(so),
            heatmap: function(e) {
                c(n, e);
                var t = h(n);

                function n(e) {
                    var r;
                    return y(this, n), (r = t.call(this, e, es))._updateColorRamp(), r
                }
                return d(n, [{
                    key: "createBucket",
                    value: function(e) {
                        return new Ko(e)
                    }
                }, {
                    key: "_handleSpecialPaintPropertyUpdate",
                    value: function(e) {
                        "heatmap-color" === e && this._updateColorRamp()
                    }
                }, {
                    key: "_updateColorRamp",
                    value: function() {
                        this.colorRamp = ts({
                            expression: this._transitionablePaint._values["heatmap-color"].value.expression,
                            evaluationKey: "heatmapDensity",
                            image: this.colorRamp
                        }), this.colorRampTexture = null
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.heatmapFbo && (this.heatmapFbo.destroy(), this.heatmapFbo = null)
                    }
                }, {
                    key: "queryRadius",
                    value: function(e) {
                        return Co("heatmap-radius", this, e)
                    }
                }, {
                    key: "queryIntersectsFeature",
                    value: function(e, t, n, i, a, o, s, u) {
                        var l = this.paint.get("heatmap-radius").evaluate(t, n);
                        return No(e, i, o, s, u, !0, !0, new r(0, 0), l)
                    }
                }, {
                    key: "hasOffscreenPass",
                    value: function() {
                        return 0 !== this.paint.get("heatmap-opacity") && "none" !== this.visibility
                    }
                }, {
                    key: "getProgramIds",
                    value: function() {
                        return ["heatmap", "heatmapTexture"]
                    }
                }, {
                    key: "getProgramConfiguration",
                    value: function(e) {
                        return new Qa(this, e)
                    }
                }]), n
            }(so),
            hillshade: function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    return y(this, r), t.call(this, e, rs)
                }
                return d(r, [{
                    key: "hasOffscreenPass",
                    value: function() {
                        return 0 !== this.paint.get("hillshade-exaggeration") && "none" !== this.visibility
                    }
                }, {
                    key: "getProgramIds",
                    value: function() {
                        return ["hillshade", "hillshadePrepare"]
                    }
                }, {
                    key: "getProgramConfiguration",
                    value: function(e) {
                        return new Qa(this, e)
                    }
                }]), r
            }(so),
            fill: function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    return y(this, r), t.call(this, e, qs)
                }
                return d(r, [{
                    key: "getProgramIds",
                    value: function() {
                        var e = this.paint.get("fill-pattern"),
                            t = e && e.constantOr(1),
                            r = [t ? "fillPattern" : "fill"];
                        return this.paint.get("fill-antialias") && r.push(t && !this.getPaintProperty("fill-outline-color") ? "fillOutlinePattern" : "fillOutline"), r
                    }
                }, {
                    key: "getProgramConfiguration",
                    value: function(e) {
                        return new Qa(this, e)
                    }
                }, {
                    key: "recalculate",
                    value: function(e, t) {
                        i(a(r.prototype), "recalculate", this).call(this, e, t);
                        var n = this.paint._values["fill-outline-color"];
                        "constant" === n.value.kind && void 0 === n.value.value && (this.paint._values["fill-outline-color"] = this.paint._values["fill-color"])
                    }
                }, {
                    key: "createBucket",
                    value: function(e) {
                        return new js(e)
                    }
                }, {
                    key: "queryRadius",
                    value: function() {
                        return Bo(this.paint.get("fill-translate"))
                    }
                }, {
                    key: "queryIntersectsFeature",
                    value: function(e, t, r, n, i, a) {
                        return !e.queryGeometry.isAboveHorizon && bo(Po(e.tilespaceGeometry, this.paint.get("fill-translate"), this.paint.get("fill-translate-anchor"), a.angle, e.pixelToTileUnitsFactor), n)
                    }
                }, {
                    key: "isTileClipped",
                    value: function() {
                        return !0
                    }
                }]), r
            }(so),
            "fill-extrusion": function(e) {
                c(n, e);
                var t = h(n);

                function n(e) {
                    return y(this, n), t.call(this, e, su)
                }
                return d(n, [{
                    key: "createBucket",
                    value: function(e) {
                        return new au(e)
                    }
                }, {
                    key: "queryRadius",
                    value: function() {
                        return Bo(this.paint.get("fill-extrusion-translate"))
                    }
                }, {
                    key: "is3D",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "getProgramIds",
                    value: function() {
                        return [this.paint.get("fill-extrusion-pattern").constantOr(1) ? "fillExtrusionPattern" : "fillExtrusion"]
                    }
                }, {
                    key: "getProgramConfiguration",
                    value: function(e) {
                        return new Qa(this, e)
                    }
                }, {
                    key: "queryIntersectsFeature",
                    value: function(e, t, n, i, a, o, s, u, c) {
                        var h = Vo(this.paint.get("fill-extrusion-translate"), this.paint.get("fill-extrusion-translate-anchor"), o.angle, e.pixelToTileUnitsFactor),
                            f = this.paint.get("fill-extrusion-height").evaluate(t, n),
                            p = this.paint.get("fill-extrusion-base").evaluate(t, n),
                            y = [0, 0],
                            d = u && o.elevation,
                            v = o.elevation ? o.elevation.exaggeration() : 1;
                        if (d) {
                            var m = e.tile.getBucket(this).centroidVertexArray,
                                g = c + 1;
                            if (g < m.length) {
                                var x = m.get(g);
                                y[0] = x.a_centroid_pos0, y[1] = x.a_centroid_pos1
                            }
                        }
                        if (0 === y[0] && 1 === y[1]) return !1;
                        var b = function(e, t, n, i, a, o, s, u, c) {
                                return o ? function(e, t, r, n, i, a, o, s, u) {
                                    var c, h = [],
                                        f = [],
                                        p = [0, 0, 0, 1],
                                        y = l(e);
                                    try {
                                        for (y.s(); !(c = y.n()).done;) {
                                            var d, v = c.value,
                                                m = [],
                                                g = [],
                                                x = l(v);
                                            try {
                                                for (x.s(); !(d = x.n()).done;) {
                                                    var b = d.value,
                                                        k = b.x + n.x,
                                                        w = b.y + n.y,
                                                        _ = hu(k, w, t, r, a, o, s, u);
                                                    p[0] = k, p[1] = w, p[2] = _.base, p[3] = 1, Uo(p, p, i), p[3] = Math.max(p[3], 1e-5);
                                                    var S = cu([p[0] / p[3], p[1] / p[3], p[2] / p[3]]);
                                                    p[0] = k, p[1] = w, p[2] = _.top, p[3] = 1, Uo(p, p, i), p[3] = Math.max(p[3], 1e-5);
                                                    var A = cu([p[0] / p[3], p[1] / p[3], p[2] / p[3]]);
                                                    m.push(S), g.push(A)
                                                }
                                            } catch (I) {
                                                x.e(I)
                                            } finally {
                                                x.f()
                                            }
                                            h.push(m), f.push(g)
                                        }
                                    } catch (I) {
                                        y.e(I)
                                    } finally {
                                        y.f()
                                    }
                                    return [h, f]
                                }(e, t, n, i, a, o, s, u, c) : function(e, t, n, i, a) {
                                    var o, s = [],
                                        u = [],
                                        c = a[8] * t,
                                        h = a[9] * t,
                                        f = a[10] * t,
                                        p = a[11] * t,
                                        y = a[8] * n,
                                        d = a[9] * n,
                                        v = a[10] * n,
                                        m = a[11] * n,
                                        g = l(e);
                                    try {
                                        for (g.s(); !(o = g.n()).done;) {
                                            var x, b = o.value,
                                                k = [],
                                                w = [],
                                                _ = l(b);
                                            try {
                                                for (_.s(); !(x = _.n()).done;) {
                                                    var S = x.value,
                                                        A = S.x + i.x,
                                                        I = S.y + i.y,
                                                        z = a[0] * A + a[4] * I + a[12],
                                                        M = a[1] * A + a[5] * I + a[13],
                                                        C = a[2] * A + a[6] * I + a[14],
                                                        B = a[3] * A + a[7] * I + a[15],
                                                        P = z + c,
                                                        V = M + h,
                                                        T = C + f,
                                                        E = Math.max(B + p, 1e-5),
                                                        D = z + y,
                                                        F = M + d,
                                                        L = C + v,
                                                        O = Math.max(B + m, 1e-5),
                                                        R = new r(P / E, V / E);
                                                    R.z = T / E, k.push(R);
                                                    var j = new r(D / O, F / O);
                                                    j.z = L / O, w.push(j)
                                                }
                                            } catch (U) {
                                                _.e(U)
                                            } finally {
                                                _.f()
                                            }
                                            s.push(k), u.push(w)
                                        }
                                    } catch (U) {
                                        g.e(U)
                                    } finally {
                                        g.f()
                                    }
                                    return [s, u]
                                }(e, t, n, i, a)
                            }(i, p, f, h, s, d ? u : null, y, v, o.center.lat),
                            k = e.queryGeometry;
                        return function(e, t, r) {
                            var n = 1 / 0;
                            bo(r, t) && (n = lu(r, t[0]));
                            for (var i = 0; i < t.length; i++)
                                for (var a = t[i], o = e[i], s = 0; s < a.length - 1; s++) {
                                    var u = a[s],
                                        l = [u, a[s + 1], o[s + 1], o[s], u];
                                    go(r, l) && (n = Math.min(n, lu(r, l)))
                                }
                            return n !== 1 / 0 && n
                        }(b[0], b[1], k.isPointQuery() ? k.screenBounds : k.screenGeometry)
                    }
                }]), n
            }(so),
            line: function(e) {
                c(n, e);
                var t = h(n);

                function n(e) {
                    var r;
                    return y(this, n), (r = t.call(this, e, gu)).gradientVersion = 0, r
                }
                return d(n, [{
                    key: "_handleSpecialPaintPropertyUpdate",
                    value: function(e) {
                        if ("line-gradient" === e) {
                            var t = this._transitionablePaint._values["line-gradient"].value.expression;
                            this.stepInterpolant = t._styleExpression && t._styleExpression.expression instanceof Qe, this.gradientVersion = (this.gradientVersion + 1) % g
                        }
                    }
                }, {
                    key: "gradientExpression",
                    value: function() {
                        return this._transitionablePaint._values["line-gradient"].value.expression
                    }
                }, {
                    key: "recalculate",
                    value: function(e, t) {
                        i(a(n.prototype), "recalculate", this).call(this, e, t), this.paint._values["line-floorwidth"] = xu.possiblyEvaluate(this._transitioningPaint._values["line-width"].value, e)
                    }
                }, {
                    key: "createBucket",
                    value: function(e) {
                        return new vu(e)
                    }
                }, {
                    key: "getProgramIds",
                    value: function() {
                        return [this.paint.get("line-pattern").constantOr(1) ? "linePattern" : "line"]
                    }
                }, {
                    key: "getProgramConfiguration",
                    value: function(e) {
                        return new Qa(this, e)
                    }
                }, {
                    key: "queryRadius",
                    value: function(e) {
                        var t = e,
                            r = bu(Co("line-width", this, t), Co("line-gap-width", this, t)),
                            n = Co("line-offset", this, t);
                        return r / 2 + Math.abs(n) + Bo(this.paint.get("line-translate"))
                    }
                }, {
                    key: "queryIntersectsFeature",
                    value: function(e, t, n, i, a, o) {
                        if (e.queryGeometry.isAboveHorizon) return !1;
                        var s = Po(e.tilespaceGeometry, this.paint.get("line-translate"), this.paint.get("line-translate-anchor"), o.angle, e.pixelToTileUnitsFactor),
                            u = e.pixelToTileUnitsFactor / 2 * bu(this.paint.get("line-width").evaluate(t, n), this.paint.get("line-gap-width").evaluate(t, n)),
                            l = this.paint.get("line-offset").evaluate(t, n);
                        return l && (i = function(e, t) {
                                for (var n = [], i = new r(0, 0), a = 0; a < e.length; a++) {
                                    for (var o = e[a], s = [], u = 0; u < o.length; u++) {
                                        var l = o[u - 1],
                                            c = o[u],
                                            h = o[u + 1],
                                            f = 0 === u ? i : c.sub(l)._unit()._perp(),
                                            p = u === o.length - 1 ? i : h.sub(c)._unit()._perp(),
                                            y = f._add(p)._unit();
                                        y._mult(1 / (y.x * p.x + y.y * p.y)), s.push(y._mult(t)._add(c))
                                    }
                                    n.push(s)
                                }
                                return n
                            }(i, l * e.pixelToTileUnitsFactor)),
                            function(e, t, r) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    if (e.length >= 3)
                                        for (var a = 0; a < i.length; a++)
                                            if (zo(e, i[a])) return !0;
                                    if (ko(e, i, r)) return !0
                                }
                                return !1
                            }(s, i, u)
                    }
                }, {
                    key: "isTileClipped",
                    value: function() {
                        return !0
                    }
                }]), n
            }(so),
            symbol: uc,
            background: function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    return y(this, r), t.call(this, e, lc)
                }
                return d(r, [{
                    key: "getProgramIds",
                    value: function() {
                        return [this.paint.get("background-pattern") ? "backgroundPattern" : "background"]
                    }
                }]), r
            }(so),
            raster: function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    return y(this, r), t.call(this, e, cc)
                }
                return d(r, [{
                    key: "getProgramIds",
                    value: function() {
                        return ["raster"]
                    }
                }]), r
            }(so),
            sky: function(e) {
                c(r, e);
                var t = h(r);

                function r(e) {
                    var n;
                    return y(this, r), (n = t.call(this, e, fc))._updateColorRamp(), n
                }
                return d(r, [{
                    key: "_handleSpecialPaintPropertyUpdate",
                    value: function(e) {
                        "sky-gradient" === e ? this._updateColorRamp() : "sky-atmosphere-sun" !== e && "sky-atmosphere-halo-color" !== e && "sky-atmosphere-color" !== e && "sky-atmosphere-sun-intensity" !== e || (this._skyboxInvalidated = !0)
                    }
                }, {
                    key: "_updateColorRamp",
                    value: function() {
                        this.colorRamp = ts({
                            expression: this._transitionablePaint._values["sky-gradient"].value.expression,
                            evaluationKey: "skyRadialProgress"
                        }), this.colorRampTexture && (this.colorRampTexture.destroy(), this.colorRampTexture = null)
                    }
                }, {
                    key: "needsSkyboxCapture",
                    value: function(e) {
                        if (this._skyboxInvalidated || !this.skyboxTexture || !this.skyboxGeometry) return !0;
                        if (!this.paint.get("sky-atmosphere-sun")) {
                            var t = e.style.light.properties.get("position");
                            return this._lightPosition.azimuthal !== t.azimuthal || this._lightPosition.polar !== t.polar
                        }
                    }
                }, {
                    key: "getCenter",
                    value: function(e, t) {
                        var r = this.paint.get("sky-type");
                        if ("atmosphere" === r) {
                            var n = this.paint.get("sky-atmosphere-sun"),
                                i = !n,
                                a = e.style.light,
                                o = a.properties.get("position");
                            return i && "viewport" === a.properties.get("anchor") && P("The sun direction is attached to a light with viewport anchor, lighting may behave unexpectedly."), i ? pc(o.azimuthal, 90 - o.polar, t) : pc(n[0], 90 - n[1], t)
                        }
                        if ("gradient" === r) {
                            var s = this.paint.get("sky-gradient-center");
                            return pc(s[0], 90 - s[1], t)
                        }
                    }
                }, {
                    key: "is3D",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isSky",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "markSkyboxValid",
                    value: function(e) {
                        this._skyboxInvalidated = !1, this._lightPosition = e.style.light.properties.get("position")
                    }
                }, {
                    key: "hasOffscreenPass",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "getProgramIds",
                    value: function() {
                        var e = this.paint.get("sky-type");
                        return "atmosphere" === e ? ["skyboxCapture", "skybox"] : "gradient" === e ? ["skyboxGradient"] : null
                    }
                }]), r
            }(so)
        };

        function dc(e) {
            return "custom" === e.type ? new hc(e) : new yc[e.type](e)
        }
        var vc = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];

        function mc(e) {
            var t = typeof e;
            if ("number" === t || "boolean" === t || "string" === t || null == e) return JSON.stringify(e);
            if (Array.isArray(e)) {
                var r, n = "[",
                    i = l(e);
                try {
                    for (i.s(); !(r = i.n()).done;) {
                        var a = r.value;
                        n += "".concat(mc(a), ",")
                    }
                } catch (c) {
                    i.e(c)
                } finally {
                    i.f()
                }
                return "".concat(n, "]")
            }
            for (var o = Object.keys(e).sort(), s = "{", u = 0; u < o.length; u++) s += "".concat(JSON.stringify(o[u]), ":").concat(mc(e[o[u]]), ",");
            return "".concat(s, "}")
        }

        function gc(e) {
            var t, r = "",
                n = l(vc);
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var i = t.value;
                    r += "/".concat(mc(e[i]))
                }
            } catch (a) {
                n.e(a)
            } finally {
                n.f()
            }
            return r
        }
        var xc = function() {
                function e(t) {
                    y(this, e), this.keyCache = {}, t && this.replace(t)
                }
                return d(e, [{
                    key: "replace",
                    value: function(e) {
                        this._layerConfigs = {}, this._layers = {}, this.update(e, [])
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var r, n = this,
                            i = l(e);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var a = r.value;
                                this._layerConfigs[a.id] = a;
                                var o = this._layers[a.id] = dc(a);
                                o._featureFilter = jr(o.filter), this.keyCache[a.id] && delete this.keyCache[a.id]
                            }
                        } catch (b) {
                            i.e(b)
                        } finally {
                            i.f()
                        }
                        var s, u = l(t);
                        try {
                            for (u.s(); !(s = u.n()).done;) {
                                var c = s.value;
                                delete this.keyCache[c], delete this._layerConfigs[c], delete this._layers[c]
                            }
                        } catch (b) {
                            u.e(b)
                        } finally {
                            u.f()
                        }
                        this.familiesBySource = {};
                        var h, f = function(e, t) {
                                for (var r = {}, n = 0; n < e.length; n++) {
                                    var i = t && t[e[n].id] || gc(e[n]);
                                    t && (t[e[n].id] = i);
                                    var a = r[i];
                                    a || (a = r[i] = []), a.push(e[n])
                                }
                                var o = [];
                                for (var s in r) o.push(r[s]);
                                return o
                            }(w(this._layerConfigs), this.keyCache),
                            p = l(f);
                        try {
                            for (p.s(); !(h = p.n()).done;) {
                                var y = h.value.map((function(e) {
                                        return n._layers[e.id]
                                    })),
                                    d = y[0];
                                if ("none" !== d.visibility) {
                                    var v = d.source || "",
                                        m = this.familiesBySource[v];
                                    m || (m = this.familiesBySource[v] = {});
                                    var g = d.sourceLayer || "_geojsonTileLayer",
                                        x = m[g];
                                    x || (x = m[g] = []), x.push(y)
                                }
                            }
                        } catch (b) {
                            p.e(b)
                        } finally {
                            p.f()
                        }
                    }
                }]), e
            }(),
            bc = function() {
                function e(t) {
                    y(this, e), this._stringToNumber = {}, this._numberToString = [];
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        this._stringToNumber[n] = r, this._numberToString[r] = n
                    }
                }
                return d(e, [{
                    key: "encode",
                    value: function(e) {
                        return this._stringToNumber[e]
                    }
                }, {
                    key: "decode",
                    value: function(e) {
                        return this._numberToString[e]
                    }
                }]), e
            }(),
            kc = function() {
                function e(t, r, n, i, a) {
                    y(this, e), this.type = "Feature", this._vectorTileFeature = t, t._z = r, t._x = n, t._y = i, this.properties = t.properties, this.id = a
                }
                return d(e, [{
                    key: "geometry",
                    get: function() {
                        return void 0 === this._geometry && (this._geometry = this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x, this._vectorTileFeature._y, this._vectorTileFeature._z).geometry), this._geometry
                    },
                    set: function(e) {
                        this._geometry = e
                    }
                }, {
                    key: "toJSON",
                    value: function() {
                        var e = {
                            geometry: this.geometry
                        };
                        for (var t in this) "_geometry" !== t && "_vectorTileFeature" !== t && (e[t] = this[t]);
                        return e
                    }
                }]), e
            }();

        function wc(e, t, r) {
            var n = 2 * Math.PI * 6378137 / 256 / Math.pow(2, r);
            return [e * n - 2 * Math.PI * 6378137 / 2, t * n - 2 * Math.PI * 6378137 / 2]
        }
        var _c = function() {
                function e(t, r) {
                    y(this, e), t && (r ? this.setSouthWest(t).setNorthEast(r) : 4 === t.length ? this.setSouthWest([t[0], t[1]]).setNorthEast([t[2], t[3]]) : this.setSouthWest(t[0]).setNorthEast(t[1]))
                }
                return d(e, [{
                    key: "setNorthEast",
                    value: function(e) {
                        return this._ne = e instanceof Ac ? new Ac(e.lng, e.lat) : Ac.convert(e), this
                    }
                }, {
                    key: "setSouthWest",
                    value: function(e) {
                        return this._sw = e instanceof Ac ? new Ac(e.lng, e.lat) : Ac.convert(e), this
                    }
                }, {
                    key: "extend",
                    value: function(t) {
                        var r, n, i = this._sw,
                            a = this._ne;
                        if (t instanceof Ac) r = t, n = t;
                        else {
                            if (!(t instanceof e)) return Array.isArray(t) ? 4 === t.length || t.every(Array.isArray) ? this.extend(e.convert(t)) : this.extend(Ac.convert(t)) : this;
                            if (r = t._sw, n = t._ne, !r || !n) return this
                        }
                        return i || a ? (i.lng = Math.min(r.lng, i.lng), i.lat = Math.min(r.lat, i.lat), a.lng = Math.max(n.lng, a.lng), a.lat = Math.max(n.lat, a.lat)) : (this._sw = new Ac(r.lng, r.lat), this._ne = new Ac(n.lng, n.lat)), this
                    }
                }, {
                    key: "getCenter",
                    value: function() {
                        return new Ac((this._sw.lng + this._ne.lng) / 2, (this._sw.lat + this._ne.lat) / 2)
                    }
                }, {
                    key: "getSouthWest",
                    value: function() {
                        return this._sw
                    }
                }, {
                    key: "getNorthEast",
                    value: function() {
                        return this._ne
                    }
                }, {
                    key: "getNorthWest",
                    value: function() {
                        return new Ac(this.getWest(), this.getNorth())
                    }
                }, {
                    key: "getSouthEast",
                    value: function() {
                        return new Ac(this.getEast(), this.getSouth())
                    }
                }, {
                    key: "getWest",
                    value: function() {
                        return this._sw.lng
                    }
                }, {
                    key: "getSouth",
                    value: function() {
                        return this._sw.lat
                    }
                }, {
                    key: "getEast",
                    value: function() {
                        return this._ne.lng
                    }
                }, {
                    key: "getNorth",
                    value: function() {
                        return this._ne.lat
                    }
                }, {
                    key: "toArray",
                    value: function() {
                        return [this._sw.toArray(), this._ne.toArray()]
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "LngLatBounds(".concat(this._sw.toString(), ", ").concat(this._ne.toString(), ")")
                    }
                }, {
                    key: "isEmpty",
                    value: function() {
                        return !(this._sw && this._ne)
                    }
                }, {
                    key: "contains",
                    value: function(e) {
                        var t = Ac.convert(e),
                            r = t.lng,
                            n = t.lat,
                            i = this._sw.lng <= r && r <= this._ne.lng;
                        return this._sw.lng > this._ne.lng && (i = this._sw.lng >= r && r >= this._ne.lng), this._sw.lat <= n && n <= this._ne.lat && i
                    }
                }], [{
                    key: "convert",
                    value: function(t) {
                        return !t || t instanceof e ? t : new e(t)
                    }
                }]), e
            }(),
            Sc = 6371008.8,
            Ac = function() {
                function e(t, r) {
                    if (y(this, e), isNaN(t) || isNaN(r)) throw new Error("Invalid LngLat object: (".concat(t, ", ").concat(r, ")"));
                    if (this.lng = +t, this.lat = +r, this.lat > 90 || this.lat < -90) throw new Error("Invalid LngLat latitude value: must be between -90 and 90")
                }
                return d(e, [{
                    key: "wrap",
                    value: function() {
                        return new e(function(e, t, r) {
                            var n = ((e - t) % 360 + 360) % 360 + t;
                            return n === t ? 180 : n
                        }(this.lng, -180), this.lat)
                    }
                }, {
                    key: "toArray",
                    value: function() {
                        return [this.lng, this.lat]
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "LngLat(".concat(this.lng, ", ").concat(this.lat, ")")
                    }
                }, {
                    key: "distanceTo",
                    value: function(e) {
                        var t = Math.PI / 180,
                            r = this.lat * t,
                            n = e.lat * t,
                            i = Math.sin(r) * Math.sin(n) + Math.cos(r) * Math.cos(n) * Math.cos((e.lng - this.lng) * t);
                        return Sc * Math.acos(Math.min(i, 1))
                    }
                }, {
                    key: "toBounds",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            r = 360 * t / 40075017,
                            n = r / Math.cos(Math.PI / 180 * this.lat);
                        return new _c(new e(this.lng - n, this.lat - r), new e(this.lng + n, this.lat + r))
                    }
                }], [{
                    key: "convert",
                    value: function(t) {
                        if (t instanceof e) return t;
                        if (Array.isArray(t) && (2 === t.length || 3 === t.length)) return new e(Number(t[0]), Number(t[1]));
                        if (!Array.isArray(t) && "object" == typeof t && null !== t) return new e(Number("lng" in t ? t.lng : t.lon), Number(t.lat));
                        throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")
                    }
                }]), e
            }(),
            Ic = 2 * Math.PI * Sc;

        function zc(e) {
            return Ic * Math.cos(e * Math.PI / 180)
        }

        function Mc(e, t) {
            return e / zc(t)
        }

        function Cc(e) {
            return 360 / Math.PI * Math.atan(Math.exp((180 - 360 * e) * Math.PI / 180)) - 90
        }

        function Bc(e, t) {
            return e * zc(Cc(t))
        }
        var Pc = function() {
                function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    y(this, e), this.x = +t, this.y = +r, this.z = +n
                }
                return d(e, [{
                    key: "toLngLat",
                    value: function() {
                        return new Ac(360 * this.x - 180, Cc(this.y))
                    }
                }, {
                    key: "toAltitude",
                    value: function() {
                        return Bc(this.z, this.y)
                    }
                }, {
                    key: "meterInMercatorCoordinateUnits",
                    value: function() {
                        return 1 / Ic * (e = Cc(this.y), 1 / Math.cos(e * Math.PI / 180));
                        var e
                    }
                }], [{
                    key: "fromLngLat",
                    value: function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = Ac.convert(t);
                        return new e((180 + n.lng) / 360, (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + n.lat * Math.PI / 360))) / 360, Mc(r, n.lat))
                    }
                }]), e
            }(),
            Vc = function() {
                function e(t, r, n) {
                    y(this, e), this.z = t, this.x = r, this.y = n, this.key = Dc(0, t, t, r, n)
                }
                return d(e, [{
                    key: "equals",
                    value: function(e) {
                        return this.z === e.z && this.x === e.x && this.y === e.y
                    }
                }, {
                    key: "url",
                    value: function(e, t) {
                        var r, n, i, a, o, s = (n = this.y, i = this.z, a = wc(256 * (r = this.x), 256 * (n = Math.pow(2, i) - n - 1), i), o = wc(256 * (r + 1), 256 * (n + 1), i), a[0] + "," + a[1] + "," + o[0] + "," + o[1]),
                            u = function(e, t, r) {
                                for (var n, i = "", a = e; a > 0; a--) i += (t & (n = 1 << a - 1) ? 1 : 0) + (r & n ? 2 : 0);
                                return i
                            }(this.z, this.x, this.y);
                        return e[(this.x + this.y) % e.length].replace("{prefix}", (this.x % 16).toString(16) + (this.y % 16).toString(16)).replace("{z}", String(this.z)).replace("{x}", String(this.x)).replace("{y}", String("tms" === t ? Math.pow(2, this.z) - this.y - 1 : this.y)).replace("{quadkey}", u).replace("{bbox-epsg-3857}", s)
                    }
                }, {
                    key: "getTilePoint",
                    value: function(e) {
                        var t = Math.pow(2, this.z);
                        return new r((e.x * t - this.x) * co, (e.y * t - this.y) * co)
                    }
                }, {
                    key: "getTileVec3",
                    value: function(e) {
                        var t = Math.pow(2, this.z);
                        return Ro((e.x * t - this.x) * co, (e.y * t - this.y) * co, Bc(e.z, e.y))
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "".concat(this.z, "/").concat(this.x, "/").concat(this.y)
                    }
                }]), e
            }(),
            Tc = function e(t, r) {
                y(this, e), this.wrap = t, this.canonical = r, this.key = Dc(t, r.z, r.z, r.x, r.y)
            },
            Ec = function() {
                function e(t, r, n, i, a) {
                    y(this, e), this.overscaledZ = t, this.wrap = r, this.canonical = new Vc(n, +i, +a), this.key = 0 === r && t === n ? this.canonical.key : Dc(r, t, n, i, a)
                }
                return d(e, [{
                    key: "equals",
                    value: function(e) {
                        return this.overscaledZ === e.overscaledZ && this.wrap === e.wrap && this.canonical.equals(e.canonical)
                    }
                }, {
                    key: "scaledTo",
                    value: function(t) {
                        var r = this.canonical.z - t;
                        return t > this.canonical.z ? new e(t, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y) : new e(t, this.wrap, t, this.canonical.x >> r, this.canonical.y >> r)
                    }
                }, {
                    key: "calculateScaledKey",
                    value: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (this.overscaledZ === e && t) return this.key;
                        if (e > this.canonical.z) return Dc(this.wrap * +t, e, this.canonical.z, this.canonical.x, this.canonical.y);
                        var r = this.canonical.z - e;
                        return Dc(this.wrap * +t, e, e, this.canonical.x >> r, this.canonical.y >> r)
                    }
                }, {
                    key: "isChildOf",
                    value: function(e) {
                        if (e.wrap !== this.wrap) return !1;
                        var t = this.canonical.z - e.canonical.z;
                        return 0 === e.overscaledZ || e.overscaledZ < this.overscaledZ && e.canonical.x === this.canonical.x >> t && e.canonical.y === this.canonical.y >> t
                    }
                }, {
                    key: "children",
                    value: function(t) {
                        if (this.overscaledZ >= t) return [new e(this.overscaledZ + 1, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y)];
                        var r = this.canonical.z + 1,
                            n = 2 * this.canonical.x,
                            i = 2 * this.canonical.y;
                        return [new e(r, this.wrap, r, n, i), new e(r, this.wrap, r, n + 1, i), new e(r, this.wrap, r, n, i + 1), new e(r, this.wrap, r, n + 1, i + 1)]
                    }
                }, {
                    key: "isLessThan",
                    value: function(e) {
                        return this.wrap < e.wrap || !(this.wrap > e.wrap) && (this.overscaledZ < e.overscaledZ || !(this.overscaledZ > e.overscaledZ) && (this.canonical.x < e.canonical.x || !(this.canonical.x > e.canonical.x) && this.canonical.y < e.canonical.y))
                    }
                }, {
                    key: "wrapped",
                    value: function() {
                        return new e(this.overscaledZ, 0, this.canonical.z, this.canonical.x, this.canonical.y)
                    }
                }, {
                    key: "unwrapTo",
                    value: function(t) {
                        return new e(this.overscaledZ, t, this.canonical.z, this.canonical.x, this.canonical.y)
                    }
                }, {
                    key: "overscaleFactor",
                    value: function() {
                        return Math.pow(2, this.overscaledZ - this.canonical.z)
                    }
                }, {
                    key: "toUnwrapped",
                    value: function() {
                        return new Tc(this.wrap, this.canonical)
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "".concat(this.overscaledZ, "/").concat(this.canonical.x, "/").concat(this.canonical.y)
                    }
                }, {
                    key: "getTilePoint",
                    value: function(e) {
                        return this.canonical.getTilePoint(new Pc(e.x - this.wrap, e.y))
                    }
                }, {
                    key: "getTileVec3",
                    value: function(e) {
                        return this.canonical.getTileVec3(new Pc(e.x - this.wrap, e.y, e.z))
                    }
                }]), e
            }();

        function Dc(e, t, r, n, i) {
            var a = 1 << Math.min(r, 22),
                o = a * (i % a) + n % a;
            return e && r < 22 && (o += a * a * ((e < 0 ? -2 * e - 1 : 2 * e) % (1 << 2 * (22 - r)))), 16 * (32 * o + r) + (t - r)
        }
        vr("CanonicalTileID", Vc), vr("OverscaledTileID", Ec, {
            omit: ["projMatrix"]
        }), Hi([{
            name: "a_pos",
            type: "Int16",
            components: 2
        }]);
        var Fc = function() {
            function e(t) {
                y(this, e), this.size = t, this.minimums = [], this.maximums = [], this.leaves = []
            }
            return d(e, [{
                key: "getElevation",
                value: function(e, t) {
                    var r = this.toIdx(e, t);
                    return {
                        min: this.minimums[r],
                        max: this.maximums[r]
                    }
                }
            }, {
                key: "isLeaf",
                value: function(e, t) {
                    return this.leaves[this.toIdx(e, t)]
                }
            }, {
                key: "toIdx",
                value: function(e, t) {
                    return t * this.size + e
                }
            }]), e
        }();

        function Lc(e, t, r, n) {
            for (var i = 0, a = Number.MAX_VALUE, o = 0; o < 3; o++)
                if (Math.abs(n[o]) < 1e-15) {
                    if (r[o] < e[o] || r[o] > t[o]) return null
                } else {
                    var s = 1 / n[o],
                        u = (e[o] - r[o]) * s,
                        l = (t[o] - r[o]) * s;
                    if (u > l) {
                        var c = u;
                        u = l, l = c
                    }
                    if (u > i && (i = u), l < a && (a = l), i > a) return null
                }
            return i
        }

        function Oc(e, t, r, n, i, a, o, s, u, l, c) {
            var h = n - e,
                f = i - t,
                p = a - r,
                y = o - e,
                d = s - t,
                v = u - r,
                m = c[1] * v - c[2] * d,
                g = c[2] * y - c[0] * v,
                x = c[0] * d - c[1] * y,
                b = h * m + f * g + p * x;
            if (Math.abs(b) < 1e-15) return null;
            var k = 1 / b,
                w = l[0] - e,
                _ = l[1] - t,
                S = l[2] - r,
                A = (w * m + _ * g + S * x) * k;
            if (A < 0 || A > 1) return null;
            var I = _ * p - S * f,
                z = S * h - w * p,
                M = w * f - _ * h,
                C = (c[0] * I + c[1] * z + c[2] * M) * k;
            return C < 0 || A + C > 1 ? null : (y * I + d * z + v * M) * k
        }

        function Rc(e, t, r) {
            return (e - t) / (r - t)
        }

        function jc(e, t, r, n, i, a, o, s, u) {
            var l = 1 << r,
                c = a - n,
                h = o - i,
                f = (e + 1) / l * c + n,
                p = (t + 0) / l * h + i,
                y = (t + 1) / l * h + i;
            s[0] = (e + 0) / l * c + n, s[1] = p, u[0] = f, u[1] = y
        }
        var Uc = function() {
            function e(t) {
                if (y(this, e), this.maximums = [], this.minimums = [], this.leaves = [], this.childOffsets = [], this.nodeCount = 0, this.dem = t, this._siblingOffset = [
                        [0, 0],
                        [1, 0],
                        [0, 1],
                        [1, 1]
                    ], this.dem) {
                    var r = function(e) {
                            for (var t = Math.ceil(Math.log2(e.dim / 8)), r = [], n = Math.ceil(Math.pow(2, t)), i = 1 / n, a = function(e, t, r, n, i) {
                                    var a = n ? 1 : 0,
                                        o = (e + 1) * r - a,
                                        s = t * r,
                                        u = (t + 1) * r - a;
                                    i[0] = e * r, i[1] = s, i[2] = o, i[3] = u
                                }, o = new Fc(n), s = [], u = 0; u < n * n; u++) {
                                a(u % n, Math.floor(u / n), i, !1, s);
                                var l = Nc(s[0], s[1], e),
                                    c = Nc(s[2], s[1], e),
                                    h = Nc(s[2], s[3], e),
                                    f = Nc(s[0], s[3], e);
                                o.minimums.push(Math.min(l, c, h, f)), o.maximums.push(Math.max(l, c, h, f)), o.leaves.push(1)
                            }
                            for (r.push(o), n /= 2; n >= 1; n /= 2) {
                                var p = r[r.length - 1];
                                o = new Fc(n);
                                for (var y = 0; y < n * n; y++) {
                                    a(y % n, Math.floor(y / n), 2, !0, s);
                                    var d = p.getElevation(s[0], s[1]),
                                        v = p.getElevation(s[2], s[1]),
                                        m = p.getElevation(s[2], s[3]),
                                        g = p.getElevation(s[0], s[3]),
                                        x = p.isLeaf(s[0], s[1]),
                                        b = p.isLeaf(s[2], s[1]),
                                        k = p.isLeaf(s[2], s[3]),
                                        w = p.isLeaf(s[0], s[3]),
                                        _ = Math.min(d.min, v.min, m.min, g.min),
                                        S = Math.max(d.max, v.max, m.max, g.max),
                                        A = x && b && k && w;
                                    o.maximums.push(S), o.minimums.push(_), o.leaves.push(S - _ <= 5 && A ? 1 : 0)
                                }
                                r.push(o)
                            }
                            return r
                        }(this.dem),
                        n = r.length - 1,
                        i = r[n];
                    this._addNode(i.minimums[0], i.maximums[0], i.leaves[0]), this._construct(r, 0, 0, n, 0)
                }
            }
            return d(e, [{
                key: "raycastRoot",
                value: function(e, t, r, n, i, a) {
                    var o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1;
                    return Lc([e, t, -100], [r, n, this.maximums[0] * o], i, a)
                }
            }, {
                key: "raycast",
                value: function(e, t, r, n, i, a) {
                    var o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1;
                    if (!this.nodeCount) return null;
                    var s = this.raycastRoot(e, t, r, n, i, a, o);
                    if (null == s) return null;
                    for (var u = [], l = [], c = [], h = [], f = [{
                            idx: 0,
                            t: s,
                            nodex: 0,
                            nodey: 0,
                            depth: 0
                        }]; f.length > 0;) {
                        var p = f.pop(),
                            y = p.idx,
                            d = p.t,
                            v = p.nodex,
                            m = p.nodey,
                            g = p.depth;
                        if (this.leaves[y]) {
                            jc(v, m, g, e, t, r, n, c, h);
                            var x = 1 << g,
                                b = (v + 0) / x,
                                k = (v + 1) / x,
                                w = (m + 0) / x,
                                _ = (m + 1) / x,
                                S = Nc(b, w, this.dem) * o,
                                A = Nc(k, w, this.dem) * o,
                                I = Nc(k, _, this.dem) * o,
                                z = Nc(b, _, this.dem) * o,
                                M = Oc(c[0], c[1], S, h[0], c[1], A, h[0], h[1], I, i, a),
                                C = Oc(h[0], h[1], I, c[0], h[1], z, c[0], c[1], S, i, a),
                                B = Math.min(null !== M ? M : Number.MAX_VALUE, null !== C ? C : Number.MAX_VALUE);
                            if (B !== Number.MAX_VALUE) return B;
                            var P = jo([], i, a, d);
                            if (qc(S, A, z, I, Rc(P[0], c[0], h[0]), Rc(P[1], c[1], h[1])) >= P[2]) return d
                        } else {
                            for (var V = 0, T = 0; T < this._siblingOffset.length; T++) {
                                jc((v << 1) + this._siblingOffset[T][0], (m << 1) + this._siblingOffset[T][1], g + 1, e, t, r, n, c, h), c[2] = -100, h[2] = this.maximums[this.childOffsets[y] + T] * o;
                                var E = Lc(c, h, i, a);
                                if (null != E) {
                                    var D = E;
                                    u[T] = D;
                                    for (var F = !1, L = 0; L < V && !F; L++) D >= u[l[L]] && (l.splice(L, 0, T), F = !0);
                                    F || (l[V] = T), V++
                                }
                            }
                            for (var O = 0; O < V; O++) {
                                var R = l[O];
                                f.push({
                                    idx: this.childOffsets[y] + R,
                                    t: u[R],
                                    nodex: (v << 1) + this._siblingOffset[R][0],
                                    nodey: (m << 1) + this._siblingOffset[R][1],
                                    depth: g + 1
                                })
                            }
                        }
                    }
                    return null
                }
            }, {
                key: "_addNode",
                value: function(e, t, r) {
                    return this.minimums.push(e), this.maximums.push(t), this.leaves.push(r), this.childOffsets.push(0), this.nodeCount++
                }
            }, {
                key: "_construct",
                value: function(e, t, r, n, i) {
                    if (1 !== e[n].isLeaf(t, r)) {
                        this.childOffsets[i] || (this.childOffsets[i] = this.nodeCount);
                        for (var a, o = n - 1, s = e[o], u = 0, l = 0; l < this._siblingOffset.length; l++) {
                            var c = 2 * t + this._siblingOffset[l][0],
                                h = 2 * r + this._siblingOffset[l][1],
                                f = s.getElevation(c, h),
                                p = s.isLeaf(c, h),
                                y = this._addNode(f.min, f.max, p);
                            p && (u |= 1 << l), a || (a = y)
                        }
                        for (var d = 0; d < this._siblingOffset.length; d++) u & 1 << d || this._construct(e, 2 * t + this._siblingOffset[d][0], 2 * r + this._siblingOffset[d][1], o, a + d)
                    }
                }
            }]), e
        }();

        function qc(e, t, r, n, i, a) {
            return et(et(e, r, a), et(t, n, a), i)
        }

        function Nc(e, t, r) {
            var n = r.dim,
                i = k(e * n - .5, 0, n - 1),
                a = k(t * n - .5, 0, n - 1),
                o = Math.floor(i),
                s = Math.floor(a),
                u = Math.min(o + 1, n - 1),
                l = Math.min(s + 1, n - 1);
            return qc(r.get(o, s), r.get(u, s), r.get(o, l), r.get(u, l), i - o, a - s)
        }
        var Zc = {
                mapbox: [6553.6, 25.6, .1, 1e4],
                terrarium: [256, 1, 1 / 256, 32768]
            },
            Xc = function() {
                function e(t, r, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    if (y(this, e), this.uid = t, r.height !== r.width) throw new RangeError("DEM tiles must be square");
                    if (n && "mapbox" !== n && "terrarium" !== n) return P('"'.concat(n, '" is not a valid encoding type. Valid types include "mapbox" and "terrarium".'));
                    this.stride = r.height;
                    var o = this.dim = r.height - 2;
                    if (this.data = new Uint32Array(r.data.buffer), this.encoding = n || "mapbox", this.borderReady = i, !i) {
                        for (var s = 0; s < o; s++) this.data[this._idx(-1, s)] = this.data[this._idx(0, s)], this.data[this._idx(o, s)] = this.data[this._idx(o - 1, s)], this.data[this._idx(s, -1)] = this.data[this._idx(s, 0)], this.data[this._idx(s, o)] = this.data[this._idx(s, o - 1)];
                        this.data[this._idx(-1, -1)] = this.data[this._idx(0, 0)], this.data[this._idx(o, -1)] = this.data[this._idx(o - 1, 0)], this.data[this._idx(-1, o)] = this.data[this._idx(0, o - 1)], this.data[this._idx(o, o)] = this.data[this._idx(o - 1, o - 1)], a && this._buildQuadTree()
                    }
                }
                return d(e, [{
                    key: "tree",
                    get: function() {
                        return this._tree || this._buildQuadTree(), this._tree
                    }
                }, {
                    key: "_buildQuadTree",
                    value: function() {
                        this._tree = new Uc(this)
                    }
                }, {
                    key: "get",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = new Uint8Array(this.data.buffer);
                        r && (e = k(e, -1, this.dim), t = k(t, -1, this.dim));
                        var i = 4 * this._idx(e, t);
                        return ("terrarium" === this.encoding ? this._unpackTerrarium : this._unpackMapbox)(n[i], n[i + 1], n[i + 2])
                    }
                }, {
                    key: "unpackVector",
                    get: function() {
                        return Zc[this.encoding]
                    }
                }, {
                    key: "_idx",
                    value: function(e, t) {
                        if (e < -1 || e >= this.dim + 1 || t < -1 || t >= this.dim + 1) throw new RangeError("out of range source coordinates for DEM data");
                        return (t + 1) * this.stride + (e + 1)
                    }
                }, {
                    key: "_unpackMapbox",
                    value: function(e, t, r) {
                        return (256 * e * 256 + 256 * t + r) / 10 - 1e4
                    }
                }, {
                    key: "_unpackTerrarium",
                    value: function(e, t, r) {
                        return 256 * e + t + r / 256 - 32768
                    }
                }, {
                    key: "getPixels",
                    value: function() {
                        return new Qo({
                            width: this.stride,
                            height: this.stride
                        }, new Uint8Array(this.data.buffer))
                    }
                }, {
                    key: "backfillBorder",
                    value: function(e, t, r) {
                        if (this.dim !== e.dim) throw new Error("dem dimension mismatch");
                        var n = t * this.dim,
                            i = t * this.dim + this.dim,
                            a = r * this.dim,
                            o = r * this.dim + this.dim;
                        switch (t) {
                            case -1:
                                n = i - 1;
                                break;
                            case 1:
                                i = n + 1
                        }
                        switch (r) {
                            case -1:
                                a = o - 1;
                                break;
                            case 1:
                                o = a + 1
                        }
                        for (var s = -t * this.dim, u = -r * this.dim, l = a; l < o; l++)
                            for (var c = n; c < i; c++) this.data[this._idx(c, l)] = e.data[this._idx(c + s, l + u)]
                    }
                }, {
                    key: "onDeserialize",
                    value: function() {
                        this._tree && (this._tree.dem = this)
                    }
                }], [{
                    key: "getUnpackVector",
                    value: function(e) {
                        return Zc[e]
                    }
                }, {
                    key: "pack",
                    value: function(t, r) {
                        var n = [0, 0, 0, 0],
                            i = e.getUnpackVector(r),
                            a = Math.floor((t + i[3]) / i[2]);
                        return n[2] = a % 256, a = Math.floor(a / 256), n[1] = a % 256, a = Math.floor(a / 256), n[0] = a, n
                    }
                }]), e
            }();
        vr("DEMData", Xc), vr("DemMinMaxQuadTree", Uc, {
            omit: ["dem"]
        });
        var Gc = function() {
                function e(t, r, n) {
                    y(this, e), this._demTile = t, this._dem = this._demTile.dem, this._scale = r, this._offset = n
                }
                return d(e, [{
                    key: "tileCoordToPixel",
                    value: function(e, t) {
                        var n = t * this._scale + this._offset[1],
                            i = Math.floor(e * this._scale + this._offset[0]),
                            a = Math.floor(n);
                        return new r(i, a)
                    }
                }, {
                    key: "getElevationAt",
                    value: function(e, t, r, n) {
                        var i = e * this._scale + this._offset[0],
                            a = t * this._scale + this._offset[1],
                            o = Math.floor(i),
                            s = Math.floor(a),
                            u = this._dem;
                        return n = !!n, r ? et(et(u.get(o, s, n), u.get(o, s + 1, n), a - s), et(u.get(o + 1, s, n), u.get(o + 1, s + 1, n), a - s), i - o) : u.get(o, s, n)
                    }
                }, {
                    key: "getElevationAtPixel",
                    value: function(e, t, r) {
                        return this._dem.get(e, t, !!r)
                    }
                }, {
                    key: "getMeterToDEM",
                    value: function(e) {
                        return (1 << this._demTile.tileID.canonical.z) * Mc(1, e) * this._dem.stride
                    }
                }], [{
                    key: "create",
                    value: function(t, r, n) {
                        var i = n || t.findDEMTileFor(r);
                        if (i && i.dem) {
                            var a = i.dem,
                                o = i.tileID,
                                s = 1 << r.canonical.z - o.canonical.z;
                            return new e(i, i.tileSize / co / s, [(r.canonical.x / s - o.canonical.x) * a.dim, (r.canonical.y / s - o.canonical.y) * a.dim])
                        }
                    }
                }]), e
            }(),
            Yc = function() {
                function e(t, r) {
                    y(this, e), this.tileID = t, this.x = t.canonical.x, this.y = t.canonical.y, this.z = t.canonical.z, this.grid = new R(co, 16, 0), this.featureIndexArray = new Ba, this.promoteId = r
                }
                return d(e, [{
                    key: "insert",
                    value: function(e, t, r, n, i) {
                        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                            o = this.featureIndexArray.length;
                        this.featureIndexArray.emplaceBack(r, n, i, a);
                        for (var s = this.grid, u = 0; u < t.length; u++) {
                            for (var l = t[u], c = [1 / 0, 1 / 0, -1 / 0, -1 / 0], h = 0; h < l.length; h++) {
                                var f = l[h];
                                c[0] = Math.min(c[0], f.x), c[1] = Math.min(c[1], f.y), c[2] = Math.max(c[2], f.x), c[3] = Math.max(c[3], f.y)
                            }
                            c[0] < co && c[1] < co && c[2] >= 0 && c[3] >= 0 && s.insert(o, c[0], c[1], c[2], c[3])
                        }
                    }
                }, {
                    key: "loadVTLayers",
                    value: function() {
                        return this.vtLayers || (this.vtLayers = new eu.VectorTile(new Lu(this.rawTileData)).layers, this.sourceLayerCoder = new bc(this.vtLayers ? Object.keys(this.vtLayers).sort() : ["_geojsonTileLayer"])), this.vtLayers
                    }
                }, {
                    key: "query",
                    value: function(e, t, n, i) {
                        var a = this;
                        this.loadVTLayers();
                        var o = e.params || {},
                            s = jr(o.filter),
                            u = e.tileResult,
                            c = e.transform,
                            h = u.bufferedTilespaceBounds,
                            f = this.grid.query(h.min.x, h.min.y, h.max.x, h.max.y, (function(e, t, n, i) {
                                return function(e, t, n, i, a) {
                                    var o, s = l(e);
                                    try {
                                        for (s.s(); !(o = s.n()).done;) {
                                            var u = o.value;
                                            if (t <= u.x && n <= u.y && i >= u.x && a >= u.y) return !0
                                        }
                                    } catch (y) {
                                        s.e(y)
                                    } finally {
                                        s.f()
                                    }
                                    var c = [new r(t, n), new r(t, a), new r(i, a), new r(i, n)];
                                    if (e.length > 2) {
                                        var h, f = l(c);
                                        try {
                                            for (f.s(); !(h = f.n()).done;) {
                                                if (zo(e, h.value)) return !0
                                            }
                                        } catch (y) {
                                            f.e(y)
                                        } finally {
                                            f.f()
                                        }
                                    }
                                    for (var p = 0; p < e.length - 1; p++)
                                        if (Mo(e[p], e[p + 1], c)) return !0;
                                    return !1
                                }(u.bufferedTilespaceGeometry, e, t, n, i)
                            }));
                        f.sort(Jc);
                        var p = null;
                        c.elevation && f.length > 0 && (p = Gc.create(c.elevation, this.tileID));
                        for (var y, d = {}, v = function(r) {
                                var l = f[r];
                                if (l === y) return "continue";
                                y = l;
                                var c = a.featureIndexArray.get(l),
                                    h = null;
                                a.loadMatchingFeature(d, c, s, o.layers, o.availableImages, t, n, i, (function(t, r, n) {
                                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                                    return h || (h = po(t)), r.queryIntersectsFeature(u, t, n, h, a.z, e.transform, e.pixelPosMatrix, p, i)
                                }))
                            }, m = 0; m < f.length; m++) v(m);
                        return d
                    }
                }, {
                    key: "loadMatchingFeature",
                    value: function(e, t, r, n, i, a, o, s, u) {
                        var l = t.featureIndex,
                            c = t.bucketIndex,
                            h = t.sourceLayerIndex,
                            f = t.layoutVertexArrayOffset,
                            p = this.bucketLayerIDs[c];
                        if (!n || function(e, t) {
                                for (var r = 0; r < e.length; r++)
                                    if (t.indexOf(e[r]) >= 0) return !0;
                                return !1
                            }(n, p)) {
                            var y = this.sourceLayerCoder.decode(h),
                                d = this.vtLayers[y].feature(l);
                            if (r.needGeometry) {
                                var v = yo(d, !0);
                                if (!r.filter(new Pi(this.tileID.overscaledZ), v, this.tileID.canonical)) return
                            } else if (!r.filter(new Pi(this.tileID.overscaledZ), d)) return;
                            for (var m = this.getId(d, y), g = 0; g < p.length; g++) {
                                var x = p[g];
                                if (!(n && n.indexOf(x) < 0)) {
                                    var b = a[x];
                                    if (b) {
                                        var k = {};
                                        void 0 !== m && s && (k = s.getState(b.sourceLayer || "_geojsonTileLayer", m));
                                        var w = _({}, o[x]);
                                        w.paint = Kc(w.paint, b.paint, d, k, i), w.layout = Kc(w.layout, b.layout, d, k, i);
                                        var S = !u || u(d, b, k, f);
                                        if (S) {
                                            var A = new kc(d, this.z, this.x, this.y, m);
                                            A.layer = w;
                                            var I = e[x];
                                            void 0 === I && (I = e[x] = []), I.push({
                                                featureIndex: l,
                                                feature: A,
                                                intersectionZ: S
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "lookupSymbolFeatures",
                    value: function(e, t, r, n, i, a, o, s) {
                        var u = {};
                        this.loadVTLayers();
                        var c, h = jr(i),
                            f = l(e);
                        try {
                            for (f.s(); !(c = f.n()).done;) {
                                var p = c.value;
                                this.loadMatchingFeature(u, {
                                    bucketIndex: r,
                                    sourceLayerIndex: n,
                                    featureIndex: p,
                                    layoutVertexArrayOffset: 0
                                }, h, a, o, s, t)
                            }
                        } catch (y) {
                            f.e(y)
                        } finally {
                            f.f()
                        }
                        return u
                    }
                }, {
                    key: "hasLayer",
                    value: function(e) {
                        var t, r = l(this.bucketLayerIDs);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n, i = t.value,
                                    a = l(i);
                                try {
                                    for (a.s(); !(n = a.n()).done;) {
                                        if (e === n.value) return !0
                                    }
                                } catch (o) {
                                    a.e(o)
                                } finally {
                                    a.f()
                                }
                            }
                        } catch (o) {
                            r.e(o)
                        } finally {
                            r.f()
                        }
                        return !1
                    }
                }, {
                    key: "getId",
                    value: function(e, t) {
                        var r = e.id;
                        return this.promoteId && ("boolean" == typeof(r = e.properties["string" == typeof this.promoteId ? this.promoteId : this.promoteId[t]]) && (r = Number(r))), r
                    }
                }]), e
            }();

        function Kc(e, t, r, n, i) {
            return M(e, (function(e, a) {
                var o = t instanceof Ri ? t.get(a) : null;
                return o && o.evaluate ? o.evaluate(r, n, i) : o
            }))
        }

        function Jc(e, t) {
            return t - e
        }
        vr("FeatureIndex", Yc, {
            omit: ["rawTileData", "sourceLayerCoder"]
        });
        var Hc = function() {
            function e(t, r) {
                y(this, e), this.width = t, this.height = r, this.nextRow = 0, this.image = new $o({
                    width: t,
                    height: r
                }), this.positions = {}, this.uploaded = !1
            }
            return d(e, [{
                key: "getDash",
                value: function(e, t) {
                    var r = this.getKey(e, t);
                    return this.positions[r]
                }
            }, {
                key: "trim",
                value: function() {
                    var e, t = this.width,
                        r = this.height = (e = this.nextRow) <= 1 ? 1 : Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
                    this.image.resize({
                        width: t,
                        height: r
                    })
                }
            }, {
                key: "getKey",
                value: function(e, t) {
                    return e.join(",") + t
                }
            }, {
                key: "getDashRanges",
                value: function(e, t, r) {
                    var n = [],
                        i = e.length % 2 == 1 ? -e[e.length - 1] * r : 0,
                        a = e[0] * r,
                        o = !0;
                    n.push({
                        left: i,
                        right: a,
                        isDash: o,
                        zeroLength: 0 === e[0]
                    });
                    for (var s = e[0], u = 1; u < e.length; u++) {
                        o = !o;
                        var l = e[u];
                        i = s * r, a = (s += l) * r, n.push({
                            left: i,
                            right: a,
                            isDash: o,
                            zeroLength: 0 === l
                        })
                    }
                    return n
                }
            }, {
                key: "addRoundDash",
                value: function(e, t, r) {
                    for (var n = t / 2, i = -r; i <= r; i++)
                        for (var a = this.width * (this.nextRow + r + i), o = 0, s = e[o], u = 0; u < this.width; u++) {
                            u / s.right > 1 && (s = e[++o]);
                            var l = Math.abs(u - s.left),
                                c = Math.abs(u - s.right),
                                h = Math.min(l, c),
                                f = void 0,
                                p = i / r * (n + 1);
                            if (s.isDash) {
                                var y = n - Math.abs(p);
                                f = Math.sqrt(h * h + y * y)
                            } else f = n - Math.sqrt(h * h + p * p);
                            this.image.data[a + u] = Math.max(0, Math.min(255, f + 128))
                        }
                }
            }, {
                key: "addRegularDash",
                value: function(e, t) {
                    for (var r = e.length - 1; r >= 0; --r) {
                        var n = e[r],
                            i = e[r + 1];
                        n.zeroLength ? e.splice(r, 1) : i && i.isDash === n.isDash && (i.left = n.left, e.splice(r, 1))
                    }
                    var a = e[0],
                        o = e[e.length - 1];
                    a.isDash === o.isDash && (a.left = o.left - this.width, o.right = a.right + this.width);
                    for (var s = this.width * this.nextRow, u = 0, l = e[u], c = 0; c < this.width; c++) {
                        c / l.right > 1 && (l = e[++u]);
                        var h = Math.abs(c - l.left),
                            f = Math.abs(c - l.right),
                            p = Math.min(h, f);
                        this.image.data[s + c] = Math.max(0, Math.min(255, (l.isDash ? p : -p) + t + 128))
                    }
                }
            }, {
                key: "addDash",
                value: function(e, t) {
                    var r = this.getKey(e, t);
                    if (this.positions[r]) return this.positions[r];
                    var n = "round" === t,
                        i = n ? 7 : 0,
                        a = 2 * i + 1;
                    if (this.nextRow + a > this.height) return P("LineAtlas out of space"), null;
                    0 === e.length && e.push(1);
                    for (var o = 0, s = 0; s < e.length; s++) e[s] < 0 && (P("Negative value is found in line dasharray, replacing values with 0"), e[s] = 0), o += e[s];
                    if (0 !== o) {
                        var u = this.width / o,
                            l = this.getDashRanges(e, this.width, u);
                        n ? this.addRoundDash(l, u, i) : this.addRegularDash(l, "square" === t ? .5 * u : 0)
                    }
                    var c = this.nextRow + i;
                    this.nextRow += a;
                    var h = {
                        tl: [c, i],
                        br: [o, 0]
                    };
                    return this.positions[r] = h, h
                }
            }]), e
        }();
        vr("LineAtlas", Hc);
        var Wc = function e(t) {
            y(this, e);
            var r = {},
                n = [];
            for (var i in t) {
                var a = t[i],
                    o = r[i] = {};
                for (var s in a.glyphs) {
                    var u = a.glyphs[+s];
                    if (u && 0 !== u.bitmap.width && 0 !== u.bitmap.height) {
                        var l = u.metrics.localGlyph ? 2 : 1,
                            c = {
                                x: 0,
                                y: 0,
                                w: u.bitmap.width + 2 * l,
                                h: u.bitmap.height + 2 * l
                            };
                        n.push(c), o[s] = c
                    }
                }
            }
            var h = nl(n),
                f = h.w,
                p = h.h,
                d = new $o({
                    width: f || 1,
                    height: p || 1
                });
            for (var v in t) {
                var m = t[v];
                for (var g in m.glyphs) {
                    var x = m.glyphs[+g];
                    if (x && 0 !== x.bitmap.width && 0 !== x.bitmap.height) {
                        var b = r[v][g],
                            k = x.metrics.localGlyph ? 2 : 1;
                        $o.copy(x.bitmap, d, {
                            x: 0,
                            y: 0
                        }, {
                            x: b.x + k,
                            y: b.y + k
                        }, x.bitmap)
                    }
                }
            }
            this.image = d, this.positions = r
        };
        vr("GlyphAtlas", Wc);
        var $c = function() {
            function e(t) {
                y(this, e), this.tileID = new Ec(t.tileID.overscaledZ, t.tileID.wrap, t.tileID.canonical.z, t.tileID.canonical.x, t.tileID.canonical.y), this.tileZoom = t.tileZoom, this.uid = t.uid, this.zoom = t.zoom, this.pixelRatio = t.pixelRatio, this.tileSize = t.tileSize, this.source = t.source, this.overscaling = this.tileID.overscaleFactor(), this.showCollisionBoxes = t.showCollisionBoxes, this.collectResourceTiming = !!t.collectResourceTiming, this.returnDependencies = !!t.returnDependencies, this.promoteId = t.promoteId, this.enableTerrain = !!t.enableTerrain, this.isSymbolTile = t.isSymbolTile
            }
            return d(e, [{
                key: "parse",
                value: function(e, t, r, n, i) {
                    var a = this;
                    this.status = "parsing", this.data = e, this.collisionBoxArray = new wa;
                    var o = new bc(Object.keys(e.layers).sort()),
                        s = new Yc(this.tileID, this.promoteId);
                    s.bucketLayerIDs = [];
                    var u, c, h, f, p = {},
                        y = new Hc(256, 256),
                        d = {
                            featureIndex: s,
                            iconDependencies: {},
                            patternDependencies: {},
                            glyphDependencies: {},
                            lineAtlas: y,
                            availableImages: r
                        },
                        v = t.familiesBySource[this.source];
                    for (var m in v) {
                        var g = e.layers[m];
                        if (g) {
                            var x, b = !1,
                                k = !1,
                                _ = l(v[m]);
                            try {
                                for (_.s(); !(x = _.n()).done;) {
                                    "symbol" === x.value[0].type ? b = !0 : k = !0
                                }
                            } catch (j) {
                                _.e(j)
                            } finally {
                                _.f()
                            }
                            if ((!0 !== this.isSymbolTile || b) && (!1 !== this.isSymbolTile || k)) {
                                1 === g.version && P('Vector tile source "'.concat(this.source, '" layer "').concat(m, '" does not use vector tile spec v2 and therefore may have some rendering errors.'));
                                for (var S = o.encode(m), A = [], I = 0; I < g.length; I++) {
                                    var z = g.feature(I),
                                        C = s.getId(z, m);
                                    A.push({
                                        feature: z,
                                        id: C,
                                        index: I,
                                        sourceLayerIndex: S
                                    })
                                }
                                var B, V = l(v[m]);
                                try {
                                    for (V.s(); !(B = V.n()).done;) {
                                        var T = B.value,
                                            E = T[0];
                                        void 0 !== this.isSymbolTile && "symbol" === E.type !== this.isSymbolTile || E.minzoom && this.zoom < Math.floor(E.minzoom) || E.maxzoom && this.zoom >= E.maxzoom || "none" !== E.visibility && (Qc(T, this.zoom, r), (p[E.id] = E.createBucket({
                                            index: s.bucketLayerIDs.length,
                                            layers: T,
                                            zoom: this.zoom,
                                            pixelRatio: this.pixelRatio,
                                            overscaling: this.overscaling,
                                            collisionBoxArray: this.collisionBoxArray,
                                            sourceLayerIndex: S,
                                            sourceID: this.source,
                                            enableTerrain: this.enableTerrain
                                        })).populate(A, d, this.tileID.canonical), s.bucketLayerIDs.push(T.map((function(e) {
                                            return e.id
                                        }))))
                                    }
                                } catch (j) {
                                    V.e(j)
                                } finally {
                                    V.f()
                                }
                            }
                        }
                    }
                    y.trim();
                    var D = {
                            type: "maybePrepare",
                            isSymbolTile: this.isSymbolTile,
                            zoom: this.zoom
                        },
                        F = M(d.glyphDependencies, (function(e) {
                            return Object.keys(e).map(Number)
                        }));
                    Object.keys(F).length ? n.send("getGlyphs", {
                        uid: this.uid,
                        stacks: F
                    }, (function(e, t) {
                        u || (u = e, c = t, R.call(a))
                    }), void 0, !1, D) : c = {};
                    var L = Object.keys(d.iconDependencies);
                    L.length ? n.send("getImages", {
                        icons: L,
                        source: this.source,
                        tileID: this.tileID,
                        type: "icons"
                    }, (function(e, t) {
                        u || (u = e, h = t, R.call(a))
                    }), void 0, !1, D) : h = {};
                    var O = Object.keys(d.patternDependencies);

                    function R() {
                        if (u) return i(u);
                        if (c && h && f) {
                            var e = new Wc(c),
                                t = new al(h, f);
                            for (var n in p) {
                                var a = p[n];
                                a instanceof ic ? (Qc(a.layers, this.zoom, r), ql(a, c, e.positions, h, t.iconPositions, this.showCollisionBoxes, this.tileID.canonical, this.tileZoom)) : a.hasPattern && (a instanceof vu || a instanceof js || a instanceof au) && (Qc(a.layers, this.zoom, r), a.addFeatures(d, this.tileID.canonical, t.patternPositions))
                            }
                            this.status = "done", i(null, {
                                buckets: w(p).filter((function(e) {
                                    return !e.isEmpty()
                                })),
                                featureIndex: s,
                                collisionBoxArray: this.collisionBoxArray,
                                glyphAtlasImage: e.image,
                                lineAtlas: y,
                                imageAtlas: t,
                                glyphMap: this.returnDependencies ? c : null,
                                iconMap: this.returnDependencies ? h : null,
                                glyphPositions: this.returnDependencies ? e.positions : null
                            })
                        }
                    }
                    O.length ? n.send("getImages", {
                        icons: O,
                        source: this.source,
                        tileID: this.tileID,
                        type: "patterns"
                    }, (function(e, t) {
                        u || (u = e, f = t, R.call(a))
                    }), void 0, !1, D) : f = {}, R.call(this)
                }
            }]), e
        }();

        function Qc(e, t, r) {
            var n, i = new Pi(t),
                a = l(e);
            try {
                for (a.s(); !(n = a.n()).done;) {
                    n.value.recalculate(i, r)
                }
            } catch (o) {
                a.e(o)
            } finally {
                a.f()
            }
        }
        var eh = function() {
            function e(t) {
                y(this, e), this.entries = {}, this.scheduler = t
            }
            return d(e, [{
                key: "request",
                value: function(e, t, r, n) {
                    var i = this,
                        a = this.entries[e] = this.entries[e] || {
                            callbacks: []
                        };
                    if (a.result) {
                        var o = p(a.result, 2),
                            s = o[0],
                            u = o[1];
                        return this.scheduler ? this.scheduler.add((function() {
                                n(s, u)
                            }), t) : n(s, u),
                            function() {}
                    }
                    return a.callbacks.push(n), a.cancel || (a.cancel = r((function(r, n) {
                            a.result = [r, n];
                            var o, s = l(a.callbacks);
                            try {
                                var u = function() {
                                    var e = o.value;
                                    i.scheduler ? i.scheduler.add((function() {
                                        e(r, n)
                                    }), t) : e(r, n)
                                };
                                for (s.s(); !(o = s.n()).done;) u()
                            } catch (c) {
                                s.e(c)
                            } finally {
                                s.f()
                            }
                            setTimeout((function() {
                                return delete i.entries[e]
                            }), 3e3)
                        }))),
                        function() {
                            a.result || (a.callbacks = a.callbacks.filter((function(e) {
                                return e !== n
                            })), a.callbacks.length || (a.cancel(), delete i.entries[e]))
                        }
                }
            }]), e
        }();

        function th(e, t, r) {
            var n = JSON.stringify(e.request);
            return e.data && (this.deduped.entries[n] = {
                result: [null, e.data]
            }), this.deduped.request(n, {
                type: "parseTile",
                isSymbolTile: e.isSymbolTile,
                zoom: e.tileZoom
            }, (function(t) {
                var n = function(e, t) {
                    return Ai(_(e, {
                        type: "arrayBuffer"
                    }), t)
                }(e.request, (function(e, n, i, a) {
                    e ? t(e) : n && t(null, {
                        vectorTile: r ? void 0 : new eu.VectorTile(new Lu(n)),
                        rawData: n,
                        cacheControl: i,
                        expires: a
                    })
                }));
                return function() {
                    n.cancel(), t()
                }
            }), t)
        }
        var rh = function(e) {
                c(r, e);
                var t = h(r);

                function r(e, n, i, a, o) {
                    var s;
                    return y(this, r), (s = t.call(this)).actor = e, s.layerIndex = n, s.availableImages = i, s.loadVectorData = o || th, s.loading = {}, s.loaded = {}, s.deduped = new eh(e.scheduler), s.isSpriteLoaded = a, s.scheduler = e.scheduler, s
                }
                return d(r, [{
                    key: "loadTile",
                    value: function(e, t) {
                        var r = this,
                            n = e.uid,
                            i = e && e.request,
                            a = i && i.collectResourceTiming,
                            o = this.loading[n] = new $c(e);
                        o.abort = this.loadVectorData(e, (function(s, u) {
                            var l = !r.loading[n];
                            if (delete r.loading[n], l || s || !u) return o.status = "done", l || (r.loaded[n] = o), t(s);
                            var c = u.rawData,
                                h = {};
                            u.expires && (h.expires = u.expires), u.cacheControl && (h.cacheControl = u.cacheControl), o.vectorTile = u.vectorTile || new eu.VectorTile(new Lu(c));
                            var f = function() {
                                o.parse(o.vectorTile, r.layerIndex, r.availableImages, r.actor, (function(e, r) {
                                    if (e || !r) return t(e);
                                    var n = {};
                                    if (a) {
                                        var o = Sr(i);
                                        o.length > 0 && (n.resourceTiming = JSON.parse(JSON.stringify(o)))
                                    }
                                    t(null, _({
                                        rawTileData: c.slice(0)
                                    }, r, h, n))
                                }))
                            };
                            r.isSpriteLoaded ? f() : r.once("isSpriteLoaded", (function() {
                                r.scheduler ? r.scheduler.add(f, {
                                    type: "parseTile",
                                    isSymbolTile: e.isSymbolTile,
                                    zoom: e.tileZoom
                                }) : f()
                            })), r.loaded = r.loaded || {}, r.loaded[n] = o
                        }))
                    }
                }, {
                    key: "reloadTile",
                    value: function(e, t) {
                        var r = this,
                            n = this.loaded,
                            i = e.uid,
                            a = this;
                        if (n && n[i]) {
                            var o = n[i];
                            o.showCollisionBoxes = e.showCollisionBoxes, o.enableTerrain = !!e.enableTerrain;
                            var s = function(e, n) {
                                var i = o.reloadCallback;
                                i && (delete o.reloadCallback, o.parse(o.vectorTile, a.layerIndex, r.availableImages, a.actor, i)), t(e, n)
                            };
                            "parsing" === o.status ? o.reloadCallback = s : "done" === o.status && (o.vectorTile ? o.parse(o.vectorTile, this.layerIndex, this.availableImages, this.actor, s) : s())
                        }
                    }
                }, {
                    key: "abortTile",
                    value: function(e, t) {
                        var r = e.uid,
                            n = this.loading[r];
                        n && (n.abort && n.abort(), delete this.loading[r]), t()
                    }
                }, {
                    key: "removeTile",
                    value: function(e, t) {
                        var r = this.loaded,
                            n = e.uid;
                        r && r[n] && delete r[n], t()
                    }
                }]), r
            }(gn),
            nh = m.ImageBitmap,
            ih = function() {
                function e() {
                    y(this, e)
                }
                return d(e, [{
                    key: "loadTile",
                    value: function(e, t) {
                        var r = e.uid,
                            n = e.encoding,
                            i = e.rawImageData,
                            a = e.padding,
                            o = e.buildQuadTree,
                            s = nh && i instanceof nh ? this.getImageData(i, a) : i;
                        t(null, new Xc(r, s, n, a < 1, o))
                    }
                }, {
                    key: "getImageData",
                    value: function(e, t) {
                        this.offscreenCanvas && this.offscreenCanvasContext || (this.offscreenCanvas = new OffscreenCanvas(e.width, e.height), this.offscreenCanvasContext = this.offscreenCanvas.getContext("2d")), this.offscreenCanvas.width = e.width, this.offscreenCanvas.height = e.height, this.offscreenCanvasContext.drawImage(e, 0, 0, e.width, e.height);
                        var r = this.offscreenCanvasContext.getImageData(-t, -t, e.width + 2 * t, e.height + 2 * t);
                        return this.offscreenCanvasContext.clearRect(0, 0, this.offscreenCanvas.width, this.offscreenCanvas.height), new Qo({
                            width: r.width,
                            height: r.height
                        }, r.data)
                    }
                }]), e
            }(),
            ah = function e(t, r) {
                var n, i = t && t.type;
                if ("FeatureCollection" === i)
                    for (n = 0; n < t.features.length; n++) e(t.features[n], r);
                else if ("GeometryCollection" === i)
                    for (n = 0; n < t.geometries.length; n++) e(t.geometries[n], r);
                else if ("Feature" === i) e(t.geometry, r);
                else if ("Polygon" === i) oh(t.coordinates, r);
                else if ("MultiPolygon" === i)
                    for (n = 0; n < t.coordinates.length; n++) oh(t.coordinates[n], r);
                return t
            };

        function oh(e, t) {
            if (0 !== e.length) {
                sh(e[0], t);
                for (var r = 1; r < e.length; r++) sh(e[r], !t)
            }
        }

        function sh(e, t) {
            for (var r = 0, n = 0, i = e.length, a = i - 1; n < i; a = n++) r += (e[n][0] - e[a][0]) * (e[a][1] + e[n][1]);
            r >= 0 != !!t && e.reverse()
        }
        var uh = eu.VectorTileFeature.prototype.toGeoJSON,
            lh = function() {
                function e(t) {
                    y(this, e), this._feature = t, this.extent = co, this.type = t.type, this.properties = t.tags, "id" in t && !isNaN(t.id) && (this.id = parseInt(t.id, 10))
                }
                return d(e, [{
                    key: "loadGeometry",
                    value: function() {
                        if (1 === this._feature.type) {
                            var e, t = [],
                                n = l(this._feature.geometry);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var i = e.value;
                                    t.push([new r(i[0], i[1])])
                                }
                            } catch (y) {
                                n.e(y)
                            } finally {
                                n.f()
                            }
                            return t
                        }
                        var a, o = [],
                            s = l(this._feature.geometry);
                        try {
                            for (s.s(); !(a = s.n()).done;) {
                                var u, c = a.value,
                                    h = [],
                                    f = l(c);
                                try {
                                    for (f.s(); !(u = f.n()).done;) {
                                        var p = u.value;
                                        h.push(new r(p[0], p[1]))
                                    }
                                } catch (y) {
                                    f.e(y)
                                } finally {
                                    f.f()
                                }
                                o.push(h)
                            }
                        } catch (y) {
                            s.e(y)
                        } finally {
                            s.f()
                        }
                        return o
                    }
                }, {
                    key: "toGeoJSON",
                    value: function(e, t, r) {
                        return uh.call(this, e, t, r)
                    }
                }]), e
            }(),
            ch = function() {
                function e(t) {
                    y(this, e), this.layers = {
                        _geojsonTileLayer: this
                    }, this.name = "_geojsonTileLayer", this.extent = co, this.length = t.length, this._features = t
                }
                return d(e, [{
                    key: "feature",
                    value: function(e) {
                        return new lh(this._features[e])
                    }
                }]), e
            }(),
            hh = eu.VectorTileFeature,
            fh = ph;

        function ph(e, t) {
            this.options = t || {}, this.features = e, this.length = e.length
        }

        function yh(e, t) {
            this.id = "number" == typeof e.id ? e.id : void 0, this.type = e.type, this.rawGeometry = 1 === e.type ? [e.geometry] : e.geometry, this.properties = e.tags, this.extent = t || 4096
        }
        ph.prototype.feature = function(e) {
            return new yh(this.features[e], this.options.extent)
        }, yh.prototype.loadGeometry = function() {
            var e = this.rawGeometry;
            this.geometry = [];
            for (var t = 0; t < e.length; t++) {
                for (var n = e[t], i = [], a = 0; a < n.length; a++) i.push(new r(n[a][0], n[a][1]));
                this.geometry.push(i)
            }
            return this.geometry
        }, yh.prototype.bbox = function() {
            this.geometry || this.loadGeometry();
            for (var e = this.geometry, t = 1 / 0, r = -1 / 0, n = 1 / 0, i = -1 / 0, a = 0; a < e.length; a++)
                for (var o = e[a], s = 0; s < o.length; s++) {
                    var u = o[s];
                    t = Math.min(t, u.x), r = Math.max(r, u.x), n = Math.min(n, u.y), i = Math.max(i, u.y)
                }
            return [t, n, r, i]
        }, yh.prototype.toGeoJSON = hh.prototype.toGeoJSON;
        var dh = mh,
            vh = fh;

        function mh(e) {
            var t = new Lu;
            return function(e, t) {
                for (var r in e.layers) t.writeMessage(3, gh, e.layers[r])
            }(e, t), t.finish()
        }

        function gh(e, t) {
            var r;
            t.writeVarintField(15, e.version || 1), t.writeStringField(1, e.name || ""), t.writeVarintField(5, e.extent || 4096);
            var n = {
                keys: [],
                values: [],
                keycache: {},
                valuecache: {}
            };
            for (r = 0; r < e.length; r++) n.feature = e.feature(r), t.writeMessage(2, xh, n);
            var i = n.keys;
            for (r = 0; r < i.length; r++) t.writeStringField(3, i[r]);
            var a = n.values;
            for (r = 0; r < a.length; r++) t.writeMessage(4, Sh, a[r])
        }

        function xh(e, t) {
            var r = e.feature;
            void 0 !== r.id && t.writeVarintField(1, r.id), t.writeMessage(2, bh, e), t.writeVarintField(3, r.type), t.writeMessage(4, _h, r)
        }

        function bh(e, t) {
            var r = e.feature,
                n = e.keys,
                i = e.values,
                a = e.keycache,
                o = e.valuecache;
            for (var s in r.properties) {
                var u = a[s];
                void 0 === u && (n.push(s), a[s] = u = n.length - 1), t.writeVarint(u);
                var l = r.properties[s],
                    c = typeof l;
                "string" !== c && "boolean" !== c && "number" !== c && (l = JSON.stringify(l));
                var h = c + ":" + l,
                    f = o[h];
                void 0 === f && (i.push(l), o[h] = f = i.length - 1), t.writeVarint(f)
            }
        }

        function kh(e, t) {
            return (t << 3) + (7 & e)
        }

        function wh(e) {
            return e << 1 ^ e >> 31
        }

        function _h(e, t) {
            for (var r = e.loadGeometry(), n = e.type, i = 0, a = 0, o = r.length, s = 0; s < o; s++) {
                var u = r[s],
                    l = 1;
                1 === n && (l = u.length), t.writeVarint(kh(1, l));
                for (var c = 3 === n ? u.length - 1 : u.length, h = 0; h < c; h++) {
                    1 === h && 1 !== n && t.writeVarint(kh(2, c - 1));
                    var f = u[h].x - i,
                        p = u[h].y - a;
                    t.writeVarint(wh(f)), t.writeVarint(wh(p)), i += f, a += p
                }
                3 === n && t.writeVarint(kh(7, 1))
            }
        }

        function Sh(e, t) {
            var r = typeof e;
            "string" === r ? t.writeStringField(1, e) : "boolean" === r ? t.writeBooleanField(7, e) : "number" === r && (e % 1 != 0 ? t.writeDoubleField(3, e) : e < 0 ? t.writeSVarintField(6, e) : t.writeVarintField(5, e))
        }

        function Ah(e, t, r, n, i, a) {
            if (!(i - n <= r)) {
                var o = n + i >> 1;
                Ih(e, t, o, n, i, a % 2), Ah(e, t, r, n, o - 1, a + 1), Ah(e, t, r, o + 1, i, a + 1)
            }
        }

        function Ih(e, t, r, n, i, a) {
            for (; i > n;) {
                if (i - n > 600) {
                    var o = i - n + 1,
                        s = r - n + 1,
                        u = Math.log(o),
                        l = .5 * Math.exp(2 * u / 3),
                        c = .5 * Math.sqrt(u * l * (o - l) / o) * (s - o / 2 < 0 ? -1 : 1);
                    Ih(e, t, r, Math.max(n, Math.floor(r - s * l / o + c)), Math.min(i, Math.floor(r + (o - s) * l / o + c)), a)
                }
                var h = t[2 * r + a],
                    f = n,
                    p = i;
                for (zh(e, t, n, r), t[2 * i + a] > h && zh(e, t, n, i); f < p;) {
                    for (zh(e, t, f, p), f++, p--; t[2 * f + a] < h;) f++;
                    for (; t[2 * p + a] > h;) p--
                }
                t[2 * n + a] === h ? zh(e, t, n, p) : zh(e, t, ++p, i), p <= r && (n = p + 1), r <= p && (i = p - 1)
            }
        }

        function zh(e, t, r, n) {
            Mh(e, r, n), Mh(t, 2 * r, 2 * n), Mh(t, 2 * r + 1, 2 * n + 1)
        }

        function Mh(e, t, r) {
            var n = e[t];
            e[t] = e[r], e[r] = n
        }

        function Ch(e, t, r, n) {
            var i = e - r,
                a = t - n;
            return i * i + a * a
        }
        dh.fromVectorTileJs = mh, dh.fromGeojsonVt = function(e, t) {
            t = t || {};
            var r = {};
            for (var n in e) r[n] = new fh(e[n].features, t), r[n].name = n, r[n].version = t.version, r[n].extent = t.extent;
            return mh({
                layers: r
            })
        }, dh.GeoJSONWrapper = vh;
        var Bh, Ph = function(e) {
                return e[0]
            },
            Vh = function(e) {
                return e[1]
            },
            Th = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ph,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vh,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 64,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Float64Array;
                    y(this, e), this.nodeSize = i, this.points = t;
                    for (var o = t.length < 65536 ? Uint16Array : Uint32Array, s = this.ids = new o(t.length), u = this.coords = new a(2 * t.length), l = 0; l < t.length; l++) s[l] = l, u[2 * l] = r(t[l]), u[2 * l + 1] = n(t[l]);
                    Ah(s, u, i, 0, s.length - 1, 0)
                }
                return d(e, [{
                    key: "range",
                    value: function(e, t, r, n) {
                        return function(e, t, r, n, i, a, o) {
                            for (var s, u, l = [0, e.length - 1, 0], c = []; l.length;) {
                                var h = l.pop(),
                                    f = l.pop(),
                                    p = l.pop();
                                if (f - p <= o)
                                    for (var y = p; y <= f; y++) s = t[2 * y], u = t[2 * y + 1], s >= r && s <= i && u >= n && u <= a && c.push(e[y]);
                                else {
                                    var d = Math.floor((p + f) / 2);
                                    s = t[2 * d], u = t[2 * d + 1], s >= r && s <= i && u >= n && u <= a && c.push(e[d]);
                                    var v = (h + 1) % 2;
                                    (0 === h ? r <= s : n <= u) && (l.push(p), l.push(d - 1), l.push(v)), (0 === h ? i >= s : a >= u) && (l.push(d + 1), l.push(f), l.push(v))
                                }
                            }
                            return c
                        }(this.ids, this.coords, e, t, r, n, this.nodeSize)
                    }
                }, {
                    key: "within",
                    value: function(e, t, r) {
                        return function(e, t, r, n, i, a) {
                            for (var o = [0, e.length - 1, 0], s = [], u = i * i; o.length;) {
                                var l = o.pop(),
                                    c = o.pop(),
                                    h = o.pop();
                                if (c - h <= a)
                                    for (var f = h; f <= c; f++) Ch(t[2 * f], t[2 * f + 1], r, n) <= u && s.push(e[f]);
                                else {
                                    var p = Math.floor((h + c) / 2),
                                        y = t[2 * p],
                                        d = t[2 * p + 1];
                                    Ch(y, d, r, n) <= u && s.push(e[p]);
                                    var v = (l + 1) % 2;
                                    (0 === l ? r - i <= y : n - i <= d) && (o.push(h), o.push(p - 1), o.push(v)), (0 === l ? r + i >= y : n + i >= d) && (o.push(p + 1), o.push(c), o.push(v))
                                }
                            }
                            return s
                        }(this.ids, this.coords, e, t, r, this.nodeSize)
                    }
                }]), e
            }(),
            Eh = {
                minZoom: 0,
                maxZoom: 16,
                minPoints: 2,
                radius: 40,
                extent: 512,
                nodeSize: 64,
                log: !1,
                generateId: !1,
                reduce: null,
                map: function(e) {
                    return e
                }
            },
            Dh = Math.fround || (Bh = new Float32Array(1), function(e) {
                return Bh[0] = +e, Bh[0]
            }),
            Fh = function() {
                function e(t) {
                    y(this, e), this.options = Zh(Object.create(Eh), t), this.trees = new Array(this.options.maxZoom + 1)
                }
                return d(e, [{
                    key: "load",
                    value: function(e) {
                        var t = this.options,
                            r = t.log,
                            n = t.minZoom,
                            i = t.maxZoom,
                            a = t.nodeSize;
                        r && console.time("total time");
                        var o = "prepare ".concat(e.length, " points");
                        r && console.time(o), this.points = e;
                        for (var s = [], u = 0; u < e.length; u++) e[u].geometry && s.push(Oh(e[u], u));
                        this.trees[i + 1] = new Th(s, Xh, Gh, a, Float32Array), r && console.timeEnd(o);
                        for (var l = i; l >= n; l--) {
                            var c = +Date.now();
                            s = this._cluster(s, l), this.trees[l] = new Th(s, Xh, Gh, a, Float32Array), r && console.log("z%d: %d clusters in %dms", l, s.length, +Date.now() - c)
                        }
                        return r && console.timeEnd("total time"), this
                    }
                }, {
                    key: "getClusters",
                    value: function(e, t) {
                        var r = ((e[0] + 180) % 360 + 360) % 360 - 180,
                            n = Math.max(-90, Math.min(90, e[1])),
                            i = 180 === e[2] ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180,
                            a = Math.max(-90, Math.min(90, e[3]));
                        if (e[2] - e[0] >= 360) r = -180, i = 180;
                        else if (r > i) {
                            var o = this.getClusters([r, n, 180, a], t),
                                s = this.getClusters([-180, n, i, a], t);
                            return o.concat(s)
                        }
                        var u, c = this.trees[this._limitZoom(t)],
                            h = c.range(Uh(r), qh(a), Uh(i), qh(n)),
                            f = [],
                            p = l(h);
                        try {
                            for (p.s(); !(u = p.n()).done;) {
                                var y = u.value,
                                    d = c.points[y];
                                f.push(d.numPoints ? Rh(d) : this.points[d.index])
                            }
                        } catch (v) {
                            p.e(v)
                        } finally {
                            p.f()
                        }
                        return f
                    }
                }, {
                    key: "getChildren",
                    value: function(e) {
                        var t = this._getOriginId(e),
                            r = this._getOriginZoom(e),
                            n = "No cluster with the specified id.",
                            i = this.trees[r];
                        if (!i) throw new Error(n);
                        var a = i.points[t];
                        if (!a) throw new Error(n);
                        var o, s = this.options.radius / (this.options.extent * Math.pow(2, r - 1)),
                            u = i.within(a.x, a.y, s),
                            c = [],
                            h = l(u);
                        try {
                            for (h.s(); !(o = h.n()).done;) {
                                var f = o.value,
                                    p = i.points[f];
                                p.parentId === e && c.push(p.numPoints ? Rh(p) : this.points[p.index])
                            }
                        } catch (y) {
                            h.e(y)
                        } finally {
                            h.f()
                        }
                        if (0 === c.length) throw new Error(n);
                        return c
                    }
                }, {
                    key: "getLeaves",
                    value: function(e, t, r) {
                        var n = [];
                        return this._appendLeaves(n, e, t = t || 10, r = r || 0, 0), n
                    }
                }, {
                    key: "getTile",
                    value: function(e, t, r) {
                        var n = this.trees[this._limitZoom(e)],
                            i = Math.pow(2, e),
                            a = this.options,
                            o = a.extent,
                            s = a.radius / o,
                            u = (r - s) / i,
                            l = (r + 1 + s) / i,
                            c = {
                                features: []
                            };
                        return this._addTileFeatures(n.range((t - s) / i, u, (t + 1 + s) / i, l), n.points, t, r, i, c), 0 === t && this._addTileFeatures(n.range(1 - s / i, u, 1, l), n.points, i, r, i, c), t === i - 1 && this._addTileFeatures(n.range(0, u, s / i, l), n.points, -1, r, i, c), c.features.length ? c : null
                    }
                }, {
                    key: "getClusterExpansionZoom",
                    value: function(e) {
                        for (var t = this._getOriginZoom(e) - 1; t <= this.options.maxZoom;) {
                            var r = this.getChildren(e);
                            if (t++, 1 !== r.length) break;
                            e = r[0].properties.cluster_id
                        }
                        return t
                    }
                }, {
                    key: "_appendLeaves",
                    value: function(e, t, r, n, i) {
                        var a, o = this.getChildren(t),
                            s = l(o);
                        try {
                            for (s.s(); !(a = s.n()).done;) {
                                var u = a.value,
                                    c = u.properties;
                                if (c && c.cluster ? i + c.point_count <= n ? i += c.point_count : i = this._appendLeaves(e, c.cluster_id, r, n, i) : i < n ? i++ : e.push(u), e.length === r) break
                            }
                        } catch (h) {
                            s.e(h)
                        } finally {
                            s.f()
                        }
                        return i
                    }
                }, {
                    key: "_addTileFeatures",
                    value: function(e, t, r, n, i, a) {
                        var o, s = l(e);
                        try {
                            for (s.s(); !(o = s.n()).done;) {
                                var u = t[o.value],
                                    c = u.numPoints,
                                    h = void 0,
                                    f = void 0,
                                    p = void 0;
                                if (c) h = jh(u), f = u.x, p = u.y;
                                else {
                                    var y = this.points[u.index];
                                    h = y.properties, f = Uh(y.geometry.coordinates[0]), p = qh(y.geometry.coordinates[1])
                                }
                                var d = {
                                        type: 1,
                                        geometry: [
                                            [Math.round(this.options.extent * (f * i - r)), Math.round(this.options.extent * (p * i - n))]
                                        ],
                                        tags: h
                                    },
                                    v = void 0;
                                c ? v = u.id : this.options.generateId ? v = u.index : this.points[u.index].id && (v = this.points[u.index].id), void 0 !== v && (d.id = v), a.features.push(d)
                            }
                        } catch (m) {
                            s.e(m)
                        } finally {
                            s.f()
                        }
                    }
                }, {
                    key: "_limitZoom",
                    value: function(e) {
                        return Math.max(this.options.minZoom, Math.min(+e, this.options.maxZoom + 1))
                    }
                }, {
                    key: "_cluster",
                    value: function(e, t) {
                        for (var r = [], n = this.options, i = n.radius, a = n.extent, o = n.reduce, s = n.minPoints, u = i / (a * Math.pow(2, t)), c = 0; c < e.length; c++) {
                            var h = e[c];
                            if (!(h.zoom <= t)) {
                                h.zoom = t;
                                var f, p = this.trees[t + 1],
                                    y = p.within(h.x, h.y, u),
                                    d = h.numPoints || 1,
                                    v = d,
                                    m = l(y);
                                try {
                                    for (m.s(); !(f = m.n()).done;) {
                                        var g = f.value,
                                            x = p.points[g];
                                        x.zoom > t && (v += x.numPoints || 1)
                                    }
                                } catch (T) {
                                    m.e(T)
                                } finally {
                                    m.f()
                                }
                                if (v >= s) {
                                    var b, k = h.x * d,
                                        w = h.y * d,
                                        _ = o && d > 1 ? this._map(h, !0) : null,
                                        S = (c << 5) + (t + 1) + this.points.length,
                                        A = l(y);
                                    try {
                                        for (A.s(); !(b = A.n()).done;) {
                                            var I = b.value,
                                                z = p.points[I];
                                            if (!(z.zoom <= t)) {
                                                z.zoom = t;
                                                var M = z.numPoints || 1;
                                                k += z.x * M, w += z.y * M, z.parentId = S, o && (_ || (_ = this._map(h, !0)), o(_, this._map(z)))
                                            }
                                        }
                                    } catch (T) {
                                        A.e(T)
                                    } finally {
                                        A.f()
                                    }
                                    h.parentId = S, r.push(Lh(k / v, w / v, S, v, _))
                                } else if (r.push(h), v > 1) {
                                    var C, B = l(y);
                                    try {
                                        for (B.s(); !(C = B.n()).done;) {
                                            var P = C.value,
                                                V = p.points[P];
                                            V.zoom <= t || (V.zoom = t, r.push(V))
                                        }
                                    } catch (T) {
                                        B.e(T)
                                    } finally {
                                        B.f()
                                    }
                                }
                            }
                        }
                        return r
                    }
                }, {
                    key: "_getOriginId",
                    value: function(e) {
                        return e - this.points.length >> 5
                    }
                }, {
                    key: "_getOriginZoom",
                    value: function(e) {
                        return (e - this.points.length) % 32
                    }
                }, {
                    key: "_map",
                    value: function(e, t) {
                        if (e.numPoints) return t ? Zh({}, e.properties) : e.properties;
                        var r = this.points[e.index].properties,
                            n = this.options.map(r);
                        return t && n === r ? Zh({}, n) : n
                    }
                }]), e
            }();

        function Lh(e, t, r, n, i) {
            return {
                x: Dh(e),
                y: Dh(t),
                zoom: 1 / 0,
                id: r,
                parentId: -1,
                numPoints: n,
                properties: i
            }
        }

        function Oh(e, t) {
            var r = p(e.geometry.coordinates, 2),
                n = r[0],
                i = r[1];
            return {
                x: Dh(Uh(n)),
                y: Dh(qh(i)),
                zoom: 1 / 0,
                index: t,
                parentId: -1
            }
        }

        function Rh(e) {
            return {
                type: "Feature",
                id: e.id,
                properties: jh(e),
                geometry: {
                    type: "Point",
                    coordinates: [(t = e.x, 360 * (t - .5)), Nh(e.y)]
                }
            };
            var t
        }

        function jh(e) {
            var t = e.numPoints,
                r = t >= 1e4 ? "".concat(Math.round(t / 1e3), "k") : t >= 1e3 ? Math.round(t / 100) / 10 + "k" : t;
            return Zh(Zh({}, e.properties), {
                cluster: !0,
                cluster_id: e.id,
                point_count: t,
                point_count_abbreviated: r
            })
        }

        function Uh(e) {
            return e / 360 + .5
        }

        function qh(e) {
            var t = Math.sin(e * Math.PI / 180),
                r = .5 - .25 * Math.log((1 + t) / (1 - t)) / Math.PI;
            return r < 0 ? 0 : r > 1 ? 1 : r
        }

        function Nh(e) {
            var t = (180 - 360 * e) * Math.PI / 180;
            return 360 * Math.atan(Math.exp(t)) / Math.PI - 90
        }

        function Zh(e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }

        function Xh(e) {
            return e.x
        }

        function Gh(e) {
            return e.y
        }

        function Yh(e, t, r, n) {
            for (var i, a = n, o = r - t >> 1, s = r - t, u = e[t], l = e[t + 1], c = e[r], h = e[r + 1], f = t + 3; f < r; f += 3) {
                var p = Kh(e[f], e[f + 1], u, l, c, h);
                if (p > a) i = f, a = p;
                else if (p === a) {
                    var y = Math.abs(f - o);
                    y < s && (i = f, s = y)
                }
            }
            a > n && (i - t > 3 && Yh(e, t, i, n), e[i + 2] = a, r - i > 3 && Yh(e, i, r, n))
        }

        function Kh(e, t, r, n, i, a) {
            var o = i - r,
                s = a - n;
            if (0 !== o || 0 !== s) {
                var u = ((e - r) * o + (t - n) * s) / (o * o + s * s);
                u > 1 ? (r = i, n = a) : u > 0 && (r += o * u, n += s * u)
            }
            return (o = e - r) * o + (s = t - n) * s
        }

        function Jh(e, t, r, n) {
            var i = {
                id: void 0 === e ? null : e,
                type: t,
                geometry: r,
                tags: n,
                minX: 1 / 0,
                minY: 1 / 0,
                maxX: -1 / 0,
                maxY: -1 / 0
            };
            return function(e) {
                var t = e.geometry,
                    r = e.type;
                if ("Point" === r || "MultiPoint" === r || "LineString" === r) Hh(e, t);
                else if ("Polygon" === r || "MultiLineString" === r)
                    for (var n = 0; n < t.length; n++) Hh(e, t[n]);
                else if ("MultiPolygon" === r)
                    for (n = 0; n < t.length; n++)
                        for (var i = 0; i < t[n].length; i++) Hh(e, t[n][i])
            }(i), i
        }

        function Hh(e, t) {
            for (var r = 0; r < t.length; r += 3) e.minX = Math.min(e.minX, t[r]), e.minY = Math.min(e.minY, t[r + 1]), e.maxX = Math.max(e.maxX, t[r]), e.maxY = Math.max(e.maxY, t[r + 1])
        }

        function Wh(e, t, r, n) {
            if (t.geometry) {
                var i = t.geometry.coordinates,
                    a = t.geometry.type,
                    o = Math.pow(r.tolerance / ((1 << r.maxZoom) * r.extent), 2),
                    s = [],
                    u = t.id;
                if (r.promoteId ? u = t.properties[r.promoteId] : r.generateId && (u = n || 0), "Point" === a) $h(i, s);
                else if ("MultiPoint" === a)
                    for (var l = 0; l < i.length; l++) $h(i[l], s);
                else if ("LineString" === a) Qh(i, s, o, !1);
                else if ("MultiLineString" === a) {
                    if (r.lineMetrics) {
                        for (l = 0; l < i.length; l++) Qh(i[l], s = [], o, !1), e.push(Jh(u, "LineString", s, t.properties));
                        return
                    }
                    ef(i, s, o, !1)
                } else if ("Polygon" === a) ef(i, s, o, !0);
                else {
                    if ("MultiPolygon" !== a) {
                        if ("GeometryCollection" === a) {
                            for (l = 0; l < t.geometry.geometries.length; l++) Wh(e, {
                                id: u,
                                geometry: t.geometry.geometries[l],
                                properties: t.properties
                            }, r, n);
                            return
                        }
                        throw new Error("Input data is not a valid GeoJSON object.")
                    }
                    for (l = 0; l < i.length; l++) {
                        var c = [];
                        ef(i[l], c, o, !0), s.push(c)
                    }
                }
                e.push(Jh(u, a, s, t.properties))
            }
        }

        function $h(e, t) {
            t.push(tf(e[0])), t.push(rf(e[1])), t.push(0)
        }

        function Qh(e, t, r, n) {
            for (var i, a, o = 0, s = 0; s < e.length; s++) {
                var u = tf(e[s][0]),
                    l = rf(e[s][1]);
                t.push(u), t.push(l), t.push(0), s > 0 && (o += n ? (i * l - u * a) / 2 : Math.sqrt(Math.pow(u - i, 2) + Math.pow(l - a, 2))), i = u, a = l
            }
            var c = t.length - 3;
            t[2] = 1, Yh(t, 0, c, r), t[c + 2] = 1, t.size = Math.abs(o), t.start = 0, t.end = t.size
        }

        function ef(e, t, r, n) {
            for (var i = 0; i < e.length; i++) {
                var a = [];
                Qh(e[i], a, r, n), t.push(a)
            }
        }

        function tf(e) {
            return e / 360 + .5
        }

        function rf(e) {
            var t = Math.sin(e * Math.PI / 180),
                r = .5 - .25 * Math.log((1 + t) / (1 - t)) / Math.PI;
            return r < 0 ? 0 : r > 1 ? 1 : r
        }

        function nf(e, t, r, n, i, a, o, s) {
            if (n /= t, a >= (r /= t) && o < n) return e;
            if (o < r || a >= n) return null;
            for (var u = [], l = 0; l < e.length; l++) {
                var c = e[l],
                    h = c.geometry,
                    f = c.type,
                    p = 0 === i ? c.minX : c.minY,
                    y = 0 === i ? c.maxX : c.maxY;
                if (p >= r && y < n) u.push(c);
                else if (!(y < r || p >= n)) {
                    var d = [];
                    if ("Point" === f || "MultiPoint" === f) af(h, d, r, n, i);
                    else if ("LineString" === f) of (h, d, r, n, i, !1, s.lineMetrics);
                    else if ("MultiLineString" === f) uf(h, d, r, n, i, !1);
                    else if ("Polygon" === f) uf(h, d, r, n, i, !0);
                    else if ("MultiPolygon" === f)
                        for (var v = 0; v < h.length; v++) {
                            var m = [];
                            uf(h[v], m, r, n, i, !0), m.length && d.push(m)
                        }
                    if (d.length) {
                        if (s.lineMetrics && "LineString" === f) {
                            for (v = 0; v < d.length; v++) u.push(Jh(c.id, f, d[v], c.tags));
                            continue
                        }
                        "LineString" !== f && "MultiLineString" !== f || (1 === d.length ? (f = "LineString", d = d[0]) : f = "MultiLineString"), "Point" !== f && "MultiPoint" !== f || (f = 3 === d.length ? "Point" : "MultiPoint"), u.push(Jh(c.id, f, d, c.tags))
                    }
                }
            }
            return u.length ? u : null
        }

        function af(e, t, r, n, i) {
            for (var a = 0; a < e.length; a += 3) {
                var o = e[a + i];
                o >= r && o <= n && (t.push(e[a]), t.push(e[a + 1]), t.push(e[a + 2]))
            }
        }

        function of (e, t, r, n, i, a, o) {
            for (var s, u, l = sf(e), c = 0 === i ? cf : hf, h = e.start, f = 0; f < e.length - 3; f += 3) {
                var p = e[f],
                    y = e[f + 1],
                    d = e[f + 2],
                    v = e[f + 3],
                    m = e[f + 4],
                    g = 0 === i ? p : y,
                    x = 0 === i ? v : m,
                    b = !1;
                o && (s = Math.sqrt(Math.pow(p - v, 2) + Math.pow(y - m, 2))), g < r ? x > r && (u = c(l, p, y, v, m, r), o && (l.start = h + s * u)) : g > n ? x < n && (u = c(l, p, y, v, m, n), o && (l.start = h + s * u)) : lf(l, p, y, d), x < r && g >= r && (u = c(l, p, y, v, m, r), b = !0), x > n && g <= n && (u = c(l, p, y, v, m, n), b = !0), !a && b && (o && (l.end = h + s * u), t.push(l), l = sf(e)), o && (h += s)
            }
            var k = e.length - 3;
            p = e[k], y = e[k + 1], d = e[k + 2], (g = 0 === i ? p : y) >= r && g <= n && lf(l, p, y, d), k = l.length - 3, a && k >= 3 && (l[k] !== l[0] || l[k + 1] !== l[1]) && lf(l, l[0], l[1], l[2]), l.length && t.push(l)
        }

        function sf(e) {
            var t = [];
            return t.size = e.size, t.start = e.start, t.end = e.end, t
        }

        function uf(e, t, r, n, i, a) {
            for (var o = 0; o < e.length; o++) of (e[o], t, r, n, i, a, !1)
        }

        function lf(e, t, r, n) {
            e.push(t), e.push(r), e.push(n)
        }

        function cf(e, t, r, n, i, a) {
            var o = (a - t) / (n - t);
            return e.push(a), e.push(r + (i - r) * o), e.push(1), o
        }

        function hf(e, t, r, n, i, a) {
            var o = (a - r) / (i - r);
            return e.push(t + (n - t) * o), e.push(a), e.push(1), o
        }

        function ff(e, t) {
            for (var r = [], n = 0; n < e.length; n++) {
                var i, a = e[n],
                    o = a.type;
                if ("Point" === o || "MultiPoint" === o || "LineString" === o) i = pf(a.geometry, t);
                else if ("MultiLineString" === o || "Polygon" === o) {
                    i = [];
                    for (var s = 0; s < a.geometry.length; s++) i.push(pf(a.geometry[s], t))
                } else if ("MultiPolygon" === o)
                    for (i = [], s = 0; s < a.geometry.length; s++) {
                        for (var u = [], l = 0; l < a.geometry[s].length; l++) u.push(pf(a.geometry[s][l], t));
                        i.push(u)
                    }
                r.push(Jh(a.id, o, i, a.tags))
            }
            return r
        }

        function pf(e, t) {
            var r = [];
            r.size = e.size, void 0 !== e.start && (r.start = e.start, r.end = e.end);
            for (var n = 0; n < e.length; n += 3) r.push(e[n] + t, e[n + 1], e[n + 2]);
            return r
        }

        function yf(e, t) {
            if (e.transformed) return e;
            var r, n, i, a = 1 << e.z,
                o = e.x,
                s = e.y;
            for (r = 0; r < e.features.length; r++) {
                var u = e.features[r],
                    l = u.geometry,
                    c = u.type;
                if (u.geometry = [], 1 === c)
                    for (n = 0; n < l.length; n += 2) u.geometry.push(df(l[n], l[n + 1], t, a, o, s));
                else
                    for (n = 0; n < l.length; n++) {
                        var h = [];
                        for (i = 0; i < l[n].length; i += 2) h.push(df(l[n][i], l[n][i + 1], t, a, o, s));
                        u.geometry.push(h)
                    }
            }
            return e.transformed = !0, e
        }

        function df(e, t, r, n, i, a) {
            return [Math.round(r * (e * n - i)), Math.round(r * (t * n - a))]
        }

        function vf(e, t, r, n, i) {
            for (var a = t === i.maxZoom ? 0 : i.tolerance / ((1 << t) * i.extent), o = {
                    features: [],
                    numPoints: 0,
                    numSimplified: 0,
                    numFeatures: 0,
                    source: null,
                    x: r,
                    y: n,
                    z: t,
                    transformed: !1,
                    minX: 2,
                    minY: 1,
                    maxX: -1,
                    maxY: 0
                }, s = 0; s < e.length; s++) {
                o.numFeatures++, mf(o, e[s], a, i);
                var u = e[s].minX,
                    l = e[s].minY,
                    c = e[s].maxX,
                    h = e[s].maxY;
                u < o.minX && (o.minX = u), l < o.minY && (o.minY = l), c > o.maxX && (o.maxX = c), h > o.maxY && (o.maxY = h)
            }
            return o
        }

        function mf(e, t, r, n) {
            var i = t.geometry,
                a = t.type,
                o = [];
            if ("Point" === a || "MultiPoint" === a)
                for (var s = 0; s < i.length; s += 3) o.push(i[s]), o.push(i[s + 1]), e.numPoints++, e.numSimplified++;
            else if ("LineString" === a) gf(o, i, e, r, !1, !1);
            else if ("MultiLineString" === a || "Polygon" === a)
                for (s = 0; s < i.length; s++) gf(o, i[s], e, r, "Polygon" === a, 0 === s);
            else if ("MultiPolygon" === a)
                for (var u = 0; u < i.length; u++) {
                    var l = i[u];
                    for (s = 0; s < l.length; s++) gf(o, l[s], e, r, !0, 0 === s)
                }
            if (o.length) {
                var c = t.tags || null;
                if ("LineString" === a && n.lineMetrics) {
                    for (var h in c = {}, t.tags) c[h] = t.tags[h];
                    c.mapbox_clip_start = i.start / i.size, c.mapbox_clip_end = i.end / i.size
                }
                var f = {
                    geometry: o,
                    type: "Polygon" === a || "MultiPolygon" === a ? 3 : "LineString" === a || "MultiLineString" === a ? 2 : 1,
                    tags: c
                };
                null !== t.id && (f.id = t.id), e.features.push(f)
            }
        }

        function gf(e, t, r, n, i, a) {
            var o = n * n;
            if (n > 0 && t.size < (i ? o : n)) r.numPoints += t.length / 3;
            else {
                for (var s = [], u = 0; u < t.length; u += 3)(0 === n || t[u + 2] > o) && (r.numSimplified++, s.push(t[u]), s.push(t[u + 1])), r.numPoints++;
                i && function(e, t) {
                    for (var r = 0, n = 0, i = e.length, a = i - 2; n < i; a = n, n += 2) r += (e[n] - e[a]) * (e[n + 1] + e[a + 1]);
                    if (r > 0 === t)
                        for (n = 0, i = e.length; n < i / 2; n += 2) {
                            var o = e[n],
                                s = e[n + 1];
                            e[n] = e[i - 2 - n], e[n + 1] = e[i - 1 - n], e[i - 2 - n] = o, e[i - 1 - n] = s
                        }
                }(s, a), e.push(s)
            }
        }

        function xf(e, t) {
            var r = (t = this.options = function(e, t) {
                for (var r in t) e[r] = t[r];
                return e
            }(Object.create(this.options), t)).debug;
            if (r && console.time("preprocess data"), t.maxZoom < 0 || t.maxZoom > 24) throw new Error("maxZoom should be in the 0-24 range");
            if (t.promoteId && t.generateId) throw new Error("promoteId and generateId cannot be used together.");
            var n = function(e, t) {
                var r = [];
                if ("FeatureCollection" === e.type)
                    for (var n = 0; n < e.features.length; n++) Wh(r, e.features[n], t, n);
                else Wh(r, "Feature" === e.type ? e : {
                    geometry: e
                }, t);
                return r
            }(e, t);
            this.tiles = {}, this.tileCoords = [], r && (console.timeEnd("preprocess data"), console.log("index: maxZoom: %d, maxPoints: %d", t.indexMaxZoom, t.indexMaxPoints), console.time("generate tiles"), this.stats = {}, this.total = 0), (n = function(e, t) {
                var r = t.buffer / t.extent,
                    n = e,
                    i = nf(e, 1, -1 - r, r, 0, -1, 2, t),
                    a = nf(e, 1, 1 - r, 2 + r, 0, -1, 2, t);
                return (i || a) && (n = nf(e, 1, -r, 1 + r, 0, -1, 2, t) || [], i && (n = ff(i, 1).concat(n)), a && (n = n.concat(ff(a, -1)))), n
            }(n, t)).length && this.splitTile(n, 0, 0, 0), r && (n.length && console.log("features: %d, points: %d", this.tiles[0].numFeatures, this.tiles[0].numPoints), console.timeEnd("generate tiles"), console.log("tiles generated:", this.total, JSON.stringify(this.stats)))
        }

        function bf(e, t, r) {
            return 32 * ((1 << e) * r + t) + e
        }

        function kf(e, t) {
            var r = e.tileID.canonical;
            if (!this._geoJSONIndex) return t(null, null);
            var n = this._geoJSONIndex.getTile(r.z, r.x, r.y);
            if (!n) return t(null, null);
            var i = new ch(n.features),
                a = dh(i);
            0 === a.byteOffset && a.byteLength === a.buffer.byteLength || (a = new Uint8Array(a)), t(null, {
                vectorTile: i,
                rawData: a.buffer
            })
        }
        xf.prototype.options = {
            maxZoom: 14,
            indexMaxZoom: 5,
            indexMaxPoints: 1e5,
            tolerance: 3,
            extent: 4096,
            buffer: 64,
            lineMetrics: !1,
            promoteId: null,
            generateId: !1,
            debug: 0
        }, xf.prototype.splitTile = function(e, t, r, n, i, a, o) {
            for (var s = [e, t, r, n], u = this.options, l = u.debug; s.length;) {
                n = s.pop(), r = s.pop(), t = s.pop(), e = s.pop();
                var c = 1 << t,
                    h = bf(t, r, n),
                    f = this.tiles[h];
                if (!f && (l > 1 && console.time("creation"), f = this.tiles[h] = vf(e, t, r, n, u), this.tileCoords.push({
                        z: t,
                        x: r,
                        y: n
                    }), l)) {
                    l > 1 && (console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)", t, r, n, f.numFeatures, f.numPoints, f.numSimplified), console.timeEnd("creation"));
                    var p = "z" + t;
                    this.stats[p] = (this.stats[p] || 0) + 1, this.total++
                }
                if (f.source = e, i) {
                    if (t === u.maxZoom || t === i) continue;
                    var y = 1 << i - t;
                    if (r !== Math.floor(a / y) || n !== Math.floor(o / y)) continue
                } else if (t === u.indexMaxZoom || f.numPoints <= u.indexMaxPoints) continue;
                if (f.source = null, 0 !== e.length) {
                    l > 1 && console.time("clipping");
                    var d, v, m, g, x, b, k = .5 * u.buffer / u.extent,
                        w = .5 - k,
                        _ = .5 + k,
                        S = 1 + k;
                    d = v = m = g = null, x = nf(e, c, r - k, r + _, 0, f.minX, f.maxX, u), b = nf(e, c, r + w, r + S, 0, f.minX, f.maxX, u), e = null, x && (d = nf(x, c, n - k, n + _, 1, f.minY, f.maxY, u), v = nf(x, c, n + w, n + S, 1, f.minY, f.maxY, u), x = null), b && (m = nf(b, c, n - k, n + _, 1, f.minY, f.maxY, u), g = nf(b, c, n + w, n + S, 1, f.minY, f.maxY, u), b = null), l > 1 && console.timeEnd("clipping"), s.push(d || [], t + 1, 2 * r, 2 * n), s.push(v || [], t + 1, 2 * r, 2 * n + 1), s.push(m || [], t + 1, 2 * r + 1, 2 * n), s.push(g || [], t + 1, 2 * r + 1, 2 * n + 1)
                }
            }
        }, xf.prototype.getTile = function(e, t, r) {
            var n = this.options,
                i = n.extent,
                a = n.debug;
            if (e < 0 || e > 24) return null;
            var o = 1 << e,
                s = bf(e, t = (t % o + o) % o, r);
            if (this.tiles[s]) return yf(this.tiles[s], i);
            a > 1 && console.log("drilling down to z%d-%d-%d", e, t, r);
            for (var u, l = e, c = t, h = r; !u && l > 0;) l--, c = Math.floor(c / 2), h = Math.floor(h / 2), u = this.tiles[bf(l, c, h)];
            return u && u.source ? (a > 1 && console.log("found parent tile z%d-%d-%d", l, c, h), a > 1 && console.time("drilling down"), this.splitTile(u.source, l, c, h, e, t, r), a > 1 && console.timeEnd("drilling down"), this.tiles[s] ? yf(this.tiles[s], i) : null) : null
        };
        var wf = function(e) {
                c(n, e);
                var t = h(n);

                function n(e, r, i, a, o) {
                    var s;
                    return y(this, n), s = t.call(this, e, r, i, a, kf), o && (s.loadGeoJSON = o), s
                }
                return d(n, [{
                    key: "loadData",
                    value: function(e, t) {
                        var r = this,
                            n = e && e.request,
                            i = n && n.collectResourceTiming;
                        this.loadGeoJSON(e, (function(a, o) {
                            if (a || !o) return t(a);
                            if ("object" != typeof o) return t(new Error("Input data given to '".concat(e.source, "' is not a valid GeoJSON object.")));
                            ah(o, !0);
                            try {
                                if (e.filter) {
                                    var s = sr(e.filter, {
                                        type: "boolean",
                                        "property-type": "data-driven",
                                        overridable: !1,
                                        transition: !1
                                    });
                                    if ("error" === s.result) throw new Error(s.value.map((function(e) {
                                        return "".concat(e.key, ": ").concat(e.message)
                                    })).join(", "));
                                    var u = o.features.filter((function(e) {
                                        return s.value.evaluate({
                                            zoom: 0
                                        }, e)
                                    }));
                                    o = {
                                        type: "FeatureCollection",
                                        features: u
                                    }
                                }
                                r._geoJSONIndex = e.cluster ? new Fh(function(e) {
                                    var t = e.superclusterOptions,
                                        r = e.clusterProperties;
                                    if (!r || !t) return t;
                                    for (var n = {}, i = {}, a = {
                                            accumulated: null,
                                            zoom: 0
                                        }, o = {
                                            properties: null
                                        }, s = Object.keys(r), u = 0, c = s; u < c.length; u++) {
                                        var h = c[u],
                                            f = p(r[h], 2),
                                            y = f[0],
                                            d = sr(f[1]),
                                            v = sr("string" == typeof y ? [y, ["accumulated"],
                                                ["get", h]
                                            ] : y);
                                        n[h] = d.value, i[h] = v.value
                                    }
                                    return t.map = function(e) {
                                        o.properties = e;
                                        var t, r = {},
                                            i = l(s);
                                        try {
                                            for (i.s(); !(t = i.n()).done;) {
                                                var u = t.value;
                                                r[u] = n[u].evaluate(a, o)
                                            }
                                        } catch (c) {
                                            i.e(c)
                                        } finally {
                                            i.f()
                                        }
                                        return r
                                    }, t.reduce = function(e, t) {
                                        o.properties = t;
                                        var r, n = l(s);
                                        try {
                                            for (n.s(); !(r = n.n()).done;) {
                                                var u = r.value;
                                                a.accumulated = e[u], e[u] = i[u].evaluate(a, o)
                                            }
                                        } catch (c) {
                                            n.e(c)
                                        } finally {
                                            n.f()
                                        }
                                    }, t
                                }(e)).load(o.features) : function(e, t) {
                                    return new xf(e, t)
                                }(o, e.geojsonVtOptions)
                            } catch (a) {
                                return t(a)
                            }
                            r.loaded = {};
                            var c = {};
                            if (i) {
                                var h = Sr(n);
                                h && (c.resourceTiming = {}, c.resourceTiming[e.source] = JSON.parse(JSON.stringify(h)))
                            }
                            t(null, c)
                        }))
                    }
                }, {
                    key: "reloadTile",
                    value: function(e, t) {
                        var r = this.loaded;
                        return r && r[e.uid] ? i(a(n.prototype), "reloadTile", this).call(this, e, t) : this.loadTile(e, t)
                    }
                }, {
                    key: "loadGeoJSON",
                    value: function(e, t) {
                        if (e.request) ! function(e, t) {
                            Ai(_(e, {
                                type: "json"
                            }), t)
                        }(e.request, t);
                        else {
                            if ("string" != typeof e.data) return t(new Error("Input data given to '".concat(e.source, "' is not a valid GeoJSON object.")));
                            try {
                                return t(null, JSON.parse(e.data))
                            } catch (r) {
                                return t(new Error("Input data given to '".concat(e.source, "' is not a valid GeoJSON object.")))
                            }
                        }
                    }
                }, {
                    key: "getClusterExpansionZoom",
                    value: function(e, t) {
                        try {
                            t(null, this._geoJSONIndex.getClusterExpansionZoom(e.clusterId))
                        } catch (e) {
                            t(e)
                        }
                    }
                }, {
                    key: "getClusterChildren",
                    value: function(e, t) {
                        try {
                            t(null, this._geoJSONIndex.getChildren(e.clusterId))
                        } catch (e) {
                            t(e)
                        }
                    }
                }, {
                    key: "getClusterLeaves",
                    value: function(e, t) {
                        try {
                            t(null, this._geoJSONIndex.getLeaves(e.clusterId, e.limit, e.offset))
                        } catch (e) {
                            t(e)
                        }
                    }
                }]), n
            }(rh),
            _f = function() {
                function e(t) {
                    var r = this;
                    y(this, e), this.self = t, this.actor = new Ir(t, this), this.layerIndexes = {}, this.availableImages = {}, this.isSpriteLoaded = !1, this.workerSourceTypes = {
                        vector: rh,
                        geojson: wf
                    }, this.workerSources = {}, this.demWorkerSources = {}, this.self.registerWorkerSource = function(e, t) {
                        if (r.workerSourceTypes[e]) throw new Error('Worker source with name "'.concat(e, '" already registered.'));
                        r.workerSourceTypes[e] = t
                    }, this.self.registerRTLTextPlugin = function(e) {
                        if (Bi.isParsed()) throw new Error("RTL text plugin already registered.");
                        Bi.applyArabicShaping = e.applyArabicShaping, Bi.processBidirectionalText = e.processBidirectionalText, Bi.processStyledBidirectionalText = e.processStyledBidirectionalText
                    }
                }
                return d(e, [{
                    key: "checkIfReady",
                    value: function(e, t, r) {
                        r()
                    }
                }, {
                    key: "setReferrer",
                    value: function(e, t) {
                        this.referrer = t
                    }
                }, {
                    key: "spriteLoaded",
                    value: function(e, t) {
                        for (var r in this.isSpriteLoaded = t, this.workerSources[e]) {
                            var n = this.workerSources[e][r];
                            for (var i in n) n[i] instanceof rh && (n[i].isSpriteLoaded = t, n[i].fire(new vn("isSpriteLoaded")))
                        }
                    }
                }, {
                    key: "setImages",
                    value: function(e, t, r) {
                        for (var n in this.availableImages[e] = t, this.workerSources[e]) {
                            var i = this.workerSources[e][n];
                            for (var a in i) i[a].availableImages = t
                        }
                        r()
                    }
                }, {
                    key: "enableTerrain",
                    value: function(e, t, r) {
                        this.terrain = t, r()
                    }
                }, {
                    key: "setLayers",
                    value: function(e, t, r) {
                        this.getLayerIndex(e).replace(t), r()
                    }
                }, {
                    key: "updateLayers",
                    value: function(e, t, r) {
                        this.getLayerIndex(e).update(t.layers, t.removedIds), r()
                    }
                }, {
                    key: "loadTile",
                    value: function(e, t, r) {
                        var n = this.enableTerrain ? _({
                            enableTerrain: this.terrain
                        }, t) : t;
                        this.getWorkerSource(e, t.type, t.source).loadTile(n, r)
                    }
                }, {
                    key: "loadDEMTile",
                    value: function(e, t, r) {
                        var n = this.enableTerrain ? _({
                            buildQuadTree: this.terrain
                        }, t) : t;
                        this.getDEMWorkerSource(e, t.source).loadTile(n, r)
                    }
                }, {
                    key: "reloadTile",
                    value: function(e, t, r) {
                        var n = this.enableTerrain ? _({
                            enableTerrain: this.terrain
                        }, t) : t;
                        this.getWorkerSource(e, t.type, t.source).reloadTile(n, r)
                    }
                }, {
                    key: "abortTile",
                    value: function(e, t, r) {
                        this.getWorkerSource(e, t.type, t.source).abortTile(t, r)
                    }
                }, {
                    key: "removeTile",
                    value: function(e, t, r) {
                        this.getWorkerSource(e, t.type, t.source).removeTile(t, r)
                    }
                }, {
                    key: "removeSource",
                    value: function(e, t, r) {
                        if (this.workerSources[e] && this.workerSources[e][t.type] && this.workerSources[e][t.type][t.source]) {
                            var n = this.workerSources[e][t.type][t.source];
                            delete this.workerSources[e][t.type][t.source], void 0 !== n.removeSource ? n.removeSource(t, r) : r()
                        }
                    }
                }, {
                    key: "loadWorkerSource",
                    value: function(e, t, r) {
                        try {
                            this.self.importScripts(t.url), r()
                        } catch (e) {
                            r(e.toString())
                        }
                    }
                }, {
                    key: "syncRTLPluginState",
                    value: function(e, t, r) {
                        try {
                            Bi.setState(t);
                            var n = Bi.getPluginURL();
                            if (Bi.isLoaded() && !Bi.isParsed() && null != n) {
                                this.self.importScripts(n);
                                var i = Bi.isParsed();
                                r(i ? void 0 : new Error("RTL Text Plugin failed to import scripts from ".concat(n)), i)
                            }
                        } catch (e) {
                            r(e.toString())
                        }
                    }
                }, {
                    key: "getAvailableImages",
                    value: function(e) {
                        var t = this.availableImages[e];
                        return t || (t = []), t
                    }
                }, {
                    key: "getLayerIndex",
                    value: function(e) {
                        var t = this.layerIndexes[e];
                        return t || (t = this.layerIndexes[e] = new xc), t
                    }
                }, {
                    key: "getWorkerSource",
                    value: function(e, t, r) {
                        var n = this;
                        return this.workerSources[e] || (this.workerSources[e] = {}), this.workerSources[e][t] || (this.workerSources[e][t] = {}), this.workerSources[e][t][r] || (this.workerSources[e][t][r] = new this.workerSourceTypes[t]({
                            send: function(t, r, i, a, o, s) {
                                n.actor.send(t, r, i, e, o, s)
                            },
                            scheduler: this.actor.scheduler
                        }, this.getLayerIndex(e), this.getAvailableImages(e), this.isSpriteLoaded)), this.workerSources[e][t][r]
                    }
                }, {
                    key: "getDEMWorkerSource",
                    value: function(e, t) {
                        return this.demWorkerSources[e] || (this.demWorkerSources[e] = {}), this.demWorkerSources[e][t] || (this.demWorkerSources[e][t] = new ih), this.demWorkerSources[e][t]
                    }
                }, {
                    key: "enforceCacheSizeLimit",
                    value: function(e, t) {
                        ! function(e) {
                            ki(), gi && gi.then((function(t) {
                                t.keys().then((function(r) {
                                    for (var n = 0; n < r.length - e; n++) t.delete(r[n])
                                }))
                            }))
                        }(t)
                    }
                }, {
                    key: "getWorkerPerformanceMetrics",
                    value: function(e, t, r) {
                        r(void 0, void 0)
                    }
                }]), e
            }();
        "undefined" != typeof WorkerGlobalScope && "undefined" != typeof self && self instanceof WorkerGlobalScope && (self.worker = new _f(self))
    }()
}, function(e, t, r) {
    var n = r(12);

    function i(t, r, a) {
        return "undefined" !== typeof Reflect && Reflect.get ? e.exports = i = Reflect.get : e.exports = i = function(e, t, r) {
            var i = n(e, t);
            if (i) {
                var a = Object.getOwnPropertyDescriptor(i, t);
                return a.get ? a.get.call(r) : a.value
            }
        }, i(t, r, a || t)
    }
    e.exports = i
}, function(e, t, r) {
    var n = r(0);
    e.exports = function(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e)););
        return e
    }
}, function(e, t) {
    function r(t) {
        return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? e.exports = r = function(e) {
            return typeof e
        } : e.exports = r = function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(t)
    }
    e.exports = r
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function(e, t, r) {
    var n = r(6),
        i = r(7),
        a = r(1),
        o = r(9);
    e.exports = function(e) {
        return n(e) || i(e) || a(e) || o()
    }
}, function(e, t, r) {
    var n = r(17),
        i = r(7),
        a = r(1),
        o = r(18);
    e.exports = function(e) {
        return n(e) || i(e) || a(e) || o()
    }
}, function(e, t, r) {
    var n = r(8);
    e.exports = function(e) {
        if (Array.isArray(e)) return n(e)
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(e, t, r) {
    var n = r(1);
    e.exports = function(e, t) {
        var r;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = n(e)) || t && e && "number" === typeof e.length) {
                r && (e = r);
                var i = 0,
                    a = function() {};
                return {
                    s: a,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
            u = !1;
        return {
            s: function() {
                r = e[Symbol.iterator]()
            },
            n: function() {
                var e = r.next();
                return s = e.done, e
            },
            e: function(e) {
                u = !0, o = e
            },
            f: function() {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (u) throw o
                }
            }
        }
    }
}, function(e, t, r) {
    var n = r(2);
    e.exports = function(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && n(e, t)
    }
}, function(e, t, r) {
    var n = r(0),
        i = r(4),
        a = r(5);
    e.exports = function(e) {
        var t = i();
        return function() {
            var r, i = n(e);
            if (t) {
                var o = n(this).constructor;
                r = Reflect.construct(i, arguments, o)
            } else r = i.apply(this, arguments);
            return a(this, r)
        }
    }
}, function(e, t, r) {
    var n = r(0),
        i = r(2),
        a = r(23),
        o = r(3);

    function s(t) {
        var r = "function" === typeof Map ? new Map : void 0;
        return e.exports = s = function(e) {
            if (null === e || !a(e)) return e;
            if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof r) {
                if (r.has(e)) return r.get(e);
                r.set(e, t)
            }

            function t() {
                return o(e, arguments, n(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), i(t, e)
        }, s(t)
    }
    e.exports = s
}, function(e, t) {
    e.exports = function(e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    }
}, function(e, t, r) {
    var n = r(6),
        i = r(25),
        a = r(1),
        o = r(9);
    e.exports = function(e, t) {
        return n(e) || i(e, t) || a(e, t) || o()
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
            var r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (u) {
                i = !0, a = u
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    function r(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    e.exports = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
}]);
//# sourceMappingURL=mapbox-gl-csp-worker.4387e0d6.worker.js.map