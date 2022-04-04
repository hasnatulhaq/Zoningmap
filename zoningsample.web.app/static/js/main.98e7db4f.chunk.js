(this.webpackJsonpApp = this.webpackJsonpApp || []).push([
    [1], {
        105: function(e, n, t) {},
        116: function(e, n, t) {},
        117: function(e, n, t) {
            "use strict";
            t.r(n);
            var c = t(0),
                s = t.n(c),
                i = t(28),
                l = t.n(i),
                r = t(24),
                a = t(2),
                o = t(58),
                j = t(9),
                d = t.n(j),
                b = t(18),
                O = t(7),
                h = t(14),
                x = (t(81), t(23)),
                f = (t(102), t(15)),
                u = t.n(f),
                m = t(1);
            u.a.workerClass = t(104).default;
            var y = ["#3a006b", "#9bf39d", "#d37cff", "#007c00", "#ff79ee", "#006200", "#005cc6", "#f79a05", "#004f97", "#ff4f00", "#00ffff", "#bf2000", "#00deb9", "#c3002d", "#00c0ca", "#bb0021", "#009b64", "#9f0044", "#7dc877", "#2d003c", "#ff7731", "#00a5b3", "#6f0000", "#82e1ff", "#5f0000", "#97d0f7", "#906e00", "#003a61", "#e57949", "#002541", "#8a6000", "#eaa3e0", "#005e00", "#ffa0c5", "#002d00", "#ebe3ff", "#1a2800", "#a6c9eb", "#466700", "#481741", "#49491e", "#718fbd", "#161918", "#927465"],
                p = ["COMMERCIAL", "RESIDENTIAL", "SPECIAL PLAN"],
                _ = ["case"],
                g = p.length - 1,
                E = 0;
            for (var A in p) _.push(["==", ["get", "ZONE_TYPE"], p[A]]), _.push(y[A]), E == g && _.push("dimgrey"), E += 1;
            var S = ["AB", "CO", "DA", "GMU", "NTO", "WHWNOD"],
                N = ["case"],
                v = S.length - 1,
                L = 0;
            for (var A in S) N.push(["==", ["get", "ZONE_TYPE"], p[A]]), N.push(y[A]), L == v && N.push("dimgrey"), L += 1;
            var C = ["case"],
                R = ["Commercial", "Government", "Industrial", "Institutional", "Miscellaneous", "Recreational", "Residential"],
                I = R.length - 1,
                P = 0;
            for (var A in R) C.push(["==", ["get", "PARCEL_USE"], R[A]]), C.push(y[A]), P == I && (console.log("exe"), C.push("dimgrey")), P += 1;
            var k = [],
                M = Object(x.c)({
                    accessToken: "pk.eyJ1IjoiZmFyaGFuMzIiLCJhIjoiY2tzejAxbnA0Mm91ZTJ5bjEzaTU2cGswYiJ9.6uR1oXCY089BjFo38KCY7g"
                }),
                T = Object(a.I)((function() {
                    var e = Object(c.useState)({}),
                        n = Object(O.a)(e, 2),
                        t = n[0],
                        s = n[1],
                        i = Object(c.useState)({}),
                        l = Object(O.a)(i, 2),
                        r = l[0],
                        o = l[1],
                        j = Object(c.useState)({}),
                        f = Object(O.a)(j, 2),
                        u = f[0],
                        y = f[1],
                        p = Object(c.useState)({}),
                        g = Object(O.a)(p, 2),
                        E = g[0],
                        A = g[1],
                        S = Object(c.useState)({}),
                        v = Object(O.a)(S, 2),
                        L = v[0],
                        C = v[1],
                        I = Object(c.useState)({}),
                        P = Object(O.a)(I, 2),
                        T = P[0],
                        B = P[1];
                    Object(c.useEffect)((function() {
                        fetch("./data/boundary.json").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            s(e)
                        })), fetch("./data/buildings.json").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            o(e)
                        })), fetch("./data/parcels.json").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            y(e)
                        })), fetch("./data/sidedarks.json").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            A(e)
                        })), fetch("./data/zoning.json").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            C(e)
                        })), fetch("./data/zoningoverlay.json").then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            B(e)
                        }))
                    }), []);
                    var D = Object(c.useState)(x.c.prototype),
                        w = Object(O.a)(D, 2),
                        U = w[0],
                        Y = w[1],
                        z = Object(c.useState)(0),
                        H = Object(O.a)(z, 2),
                        Z = H[0],
                        V = H[1],
                        X = Object(c.useState)(14),
                        G = Object(O.a)(X, 2),
                        q = G[0],
                        J = G[1],
                        W = Object(c.useState)(-118.37852055293303),
                        K = Object(O.a)(W, 2),
                        Q = K[0],
                        $ = K[1],
                        ee = Object(c.useState)(34.08150350937754),
                        ne = Object(O.a)(ee, 2),
                        te = ne[0],
                        ce = ne[1],
                        se = Object(c.useState)(!1),
                        ie = Object(O.a)(se, 2),
                        le = ie[0],
                        re = ie[1],
                        ae = Object(c.useState)(!1),
                        oe = Object(O.a)(ae, 2),
                        je = oe[0],
                        de = oe[1],
                        be = Object(c.useState)("info"),
                        Oe = Object(O.a)(be, 2),
                        he = Oe[0],
                        xe = Oe[1],
                        fe = Object(c.useState)([73, 33]),
                        ue = Object(O.a)(fe, 2),
                        me = ue[0],
                        ye = ue[1],
                        pe = Object(c.useState)(""),
                        _e = Object(O.a)(pe, 2),
                        ge = _e[0],
                        Ee = (_e[1], Object(c.useState)("info")),
                        Ae = Object(O.a)(Ee, 2),
                        Se = (Ae[0], Ae[1], Object(c.useState)(null)),
                        Ne = Object(O.a)(Se, 2),
                        ve = Ne[0],
                        Le = Ne[1],
                        Ce = Object(c.useState)(!1),
                        Re = Object(O.a)(Ce, 2),
                        Ie = Re[0],
                        Pe = Re[1],
                        ke = Object(c.useState)(!1),
                        Me = Object(O.a)(ke, 2),
                        Te = Me[0],
                        Fe = Me[1],
                        Be = Object(c.useState)(!0),
                        De = Object(O.a)(Be, 2),
                        we = De[0],
                        Ue = De[1],
                        Ye = Object(c.useState)(!1),
                        ze = Object(O.a)(Ye, 2),
                        He = ze[0],
                        Ze = ze[1],
                        Ve = Object(c.useState)(!0),
                        Xe = Object(O.a)(Ve, 2),
                        Ge = Xe[0],
                        qe = Xe[1],
                        Je = Object(c.useState)(!0),
                        We = Object(O.a)(Je, 2),
                        Ke = We[0],
                        Qe = We[1],
                        $e = Object(c.useState)([]),
                        en = Object(O.a)($e, 2),
                        nn = (en[0], en[1], Object(c.useState)({
                            filter: ["!=", "PARCEL_USE", ""]
                        })),
                        tn = Object(O.a)(nn, 2),
                        cn = tn[0],
                        sn = tn[1],
                        ln = Object(c.useState)({
                            ain: null,
                            apn: null,
                            address: "",
                            use: "",
                            use1: "",
                            ass: "",
                            subty: "",
                            zone: "",
                            loc: "",
                            area: 0,
                            depth: 0,
                            type: "",
                            parking: "",
                            lotwidth: 0,
                            floors: "",
                            ahdensbo: "",
                            ahdens1: "",
                            openspace: "",
                            zonedesc: "",
                            minsetbac: "",
                            minsetb1: "",
                            minsetb2: "",
                            minsetb3: "",
                            minsetb4: "",
                            minsetb5: "",
                            minsetb6: "",
                            maxsetbac: "",
                            maxsetb6: "",
                            maxdwelli: "",
                            heightmax: "",
                            farmax: "",
                            numfloors: "",
                            overalyty: "",
                            overlaysu: "",
                            overlayma: "",
                            overlay1: "",
                            overlayde: "",
                            publicy: "",
                            bonusmisc: "",
                            overlay2: "",
                            overlayop: "",
                            heightinc: "",
                            height_i1: "",
                            farincent: "",
                            farince: "",
                            farmaxal: "",
                            floorarea: "",
                            floorar1: "",
                            ssptarget: "",
                            devrestri: "",
                            maxbldfo: 0,
                            maxblden: 0,
                            maxbld1: 0,
                            openspa: "",
                            dumaxall: "",
                            scratch: ""
                        }),
                        rn = Object(O.a)(ln, 2),
                        an = rn[0],
                        on = rn[1],
                        jn = function() {
                            var e = Object(b.a)(d.a.mark((function e(n) {
                                var t, c;
                                return d.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (k.includes(n) ? k = k.filter((function(e) {
                                                    return e !== n
                                                })) : k.push(n), t = ["all"], k.length > 0)
                                                for (c in k) t.push(["!=", "PARCEL_USE", k[c]]);
                                            else t.push(["!=", "PARCEL_USE", ""]);
                                            setTimeout((function() {
                                                sn({
                                                    filter: t
                                                })
                                            }), 500), console.log(cn);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(a.H)((function() {
                        re(!0)
                    }));
                    return Object(m.jsx)(m.Fragment, {
                        children: le ? Object(m.jsxs)(a.g, {
                            fullscreen: !0,
                            children: [je ? Object(m.jsxs)(a.d, {
                                className: "sidebar",
                                children: [Object(m.jsx)(a.k, {
                                    children: Object(m.jsxs)(a.y, {
                                        color: "primary",
                                        children: [Object(m.jsx)(a.n, {
                                            className: "ion-margin ion-padding",
                                            slot: "start",
                                            children: an.address
                                        }), Object(m.jsx)(a.c, {
                                            slot: "end",
                                            children: Object(m.jsx)(a.b, {
                                                shape: "round",
                                                onClick: function() {
                                                    de(!1)
                                                },
                                                children: Object(m.jsx)(a.l, {
                                                    icon: h.f
                                                })
                                            })
                                        })]
                                    })
                                }), Object(m.jsxs)(a.u, {
                                    onIonChange: function(e) {
                                        xe(e.detail.value)
                                    },
                                    value: he,
                                    children: [Object(m.jsxs)(a.v, {
                                        value: "info",
                                        children: [Object(m.jsx)(a.l, {
                                            icon: h.k
                                        }), " Info"]
                                    }), Object(m.jsxs)(a.v, {
                                        value: "layers",
                                        children: [Object(m.jsx)(a.l, {
                                            icon: h.l
                                        }), "Layers"]
                                    }), Object(m.jsxs)(a.v, {
                                        value: "filter",
                                        children: [Object(m.jsx)(a.l, {
                                            icon: h.j
                                        }), " Filter"]
                                    })]
                                }), Object(m.jsx)(a.e, {
                                    children: Object(m.jsx)(a.g, {
                                        fullscreen: !0,
                                        children: "info" == he ? Object(m.jsx)(m.Fragment, {
                                            children: an.ain ? Object(m.jsxs)(a.o, {
                                                children: [Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        color: "danger",
                                                        children: Object(m.jsx)("b", {
                                                            children: " Parcel ID"
                                                        })
                                                    }), Object(m.jsx)(a.n, {
                                                        color: "danger",
                                                        className: "ion-float-end",
                                                        children: Object(m.jsx)("b", {
                                                            children: an.ain
                                                        })
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "APN"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.apn
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        slot: "start",
                                                        children: "Address"
                                                    }), Object(m.jsx)(a.p, {
                                                        style: {
                                                            fontSize: "14px"
                                                        },
                                                        slot: "end",
                                                        children: an.address
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Zone"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.zone
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Zone Type"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.type
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Lot Width"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.lotwidth
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Area"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: null != an.area ? an.area.toFixed(2) : "N/A"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Lot Depth"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.depth
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Lot Width"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: null != an.lotwidth ? an.lotwidth.toFixed(2) : "N/A"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Front Setback"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.minsetbac
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Side setback"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.minsetb2
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Rear Setback"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.minsetb6
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        color: "danger",
                                                        children: "MAX Dwelling Units"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        color: "danger",
                                                        children: an.maxdwelli
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Max Far"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.farmax
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Max Height"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.heightmax
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Max Stories"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.numfloors
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Open Space Required"
                                                    }), Object(m.jsx)(a.p, {
                                                        style: {
                                                            fontSize: "14px"
                                                        },
                                                        slot: "end",
                                                        children: an.openspace
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        slot: "start",
                                                        children: "Land Use"
                                                    }), Object(m.jsx)(a.p, {
                                                        style: {
                                                            fontSize: "14px"
                                                        },
                                                        slot: "end",
                                                        children: an.zonedesc
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "OVERLAY TYPE"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: "null" != an.overalyty ? an.overalyty : "N/A"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "OVERLAY FAR BONUS"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.overlay1
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "OVERLAY HEIGHT BONUS"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.overlayma
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        slot: "start",
                                                        children: "OVERLAY Description"
                                                    }), Object(m.jsx)(a.p, {
                                                        slot: "end",
                                                        children: "null" != an.overlayde ? an.overlayde : "N/A"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Density Bonus Height"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.heightinc
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Density Bonus FAR"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: "null" != an.farincent ? an.farincent : "N/A"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Buildable Footprint"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.maxbldfo ? an.maxbldfo.toFixed(2) : "N/A"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Buildable Envelope"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: an.maxblden ? an.maxblden.toFixed(2) : "N/A"
                                                    })]
                                                }), Object(m.jsx)(a.m, {
                                                    children: Object(m.jsxs)(a.p, {
                                                        style: {
                                                            fontSize: "14px"
                                                        },
                                                        children: [Object(m.jsx)("b", {
                                                            children: "Parking Required : "
                                                        }), an.parking]
                                                    })
                                                }), Object(m.jsxs)(a.m, {
                                                    children: [Object(m.jsx)(a.n, {
                                                        children: "Open Space Required"
                                                    }), Object(m.jsx)(a.n, {
                                                        className: "ion-float-end",
                                                        children: "null" != an.openspa ? an.openspa : "N/A"
                                                    })]
                                                })]
                                            }) : Object(m.jsx)(a.m, {
                                                color: "warning",
                                                children: Object(m.jsx)(a.n, {
                                                    children: "Click on the Map to Preview Details"
                                                })
                                            })
                                        }) : "layers" == he ? Object(m.jsx)(m.Fragment, {
                                            children: Object(m.jsxs)(a.o, {
                                                children: [Object(m.jsxs)(a.m, {
                                                    lines: "full",
                                                    children: [Object(m.jsx)(a.f, {
                                                        checked: Ie,
                                                        slot: "end",
                                                        onIonChange: function() {
                                                            Pe(!Ie)
                                                        }
                                                    }), Object(m.jsx)(a.n, {
                                                        children: "Zones"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    lines: "full",
                                                    children: [Object(m.jsx)(a.f, {
                                                        checked: Te,
                                                        slot: "end",
                                                        onIonChange: function() {
                                                            Fe(!Te)
                                                        }
                                                    }), Object(m.jsx)(a.n, {
                                                        children: "Zones Overlay"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    lines: "full",
                                                    children: [Object(m.jsx)(a.f, {
                                                        checked: Ge,
                                                        slot: "end",
                                                        onIonChange: function() {
                                                            qe(!Ge)
                                                        }
                                                    }), Object(m.jsx)(a.n, {
                                                        children: "Boundary"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    lines: "full",
                                                    children: [Object(m.jsx)(a.f, {
                                                        checked: Ke,
                                                        slot: "end",
                                                        onIonChange: function() {
                                                            Qe(!Ke)
                                                        }
                                                    }), Object(m.jsx)(a.n, {
                                                        children: "Focus Shadow"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    lines: "full",
                                                    children: [Object(m.jsx)(a.f, {
                                                        checked: we,
                                                        slot: "end",
                                                        onIonChange: function() {
                                                            Ue(!we)
                                                        }
                                                    }), Object(m.jsx)(a.n, {
                                                        children: "Parcels"
                                                    })]
                                                }), Object(m.jsxs)(a.m, {
                                                    lines: "full",
                                                    children: [Object(m.jsx)(a.f, {
                                                        checked: He,
                                                        slot: "end",
                                                        onIonChange: function() {
                                                            Ze(!He)
                                                        }
                                                    }), Object(m.jsx)(a.n, {
                                                        children: "Buildings"
                                                    })]
                                                })]
                                            })
                                        }) : Object(m.jsx)(m.Fragment, {
                                            children: R.map((function(e, n) {
                                                return Object(m.jsx)(F, {
                                                    obj: e,
                                                    handler: jn
                                                })
                                            }))
                                        })
                                    })
                                })]
                            }) : Object(m.jsxs)(a.h, {
                                style: {
                                    marginTop: "60px"
                                },
                                vertical: "top",
                                horizontal: "start",
                                children: [Object(m.jsx)(a.i, {
                                    style: {
                                        marginBottom: "3px"
                                    },
                                    onClick: function() {
                                        de(!0), xe("info")
                                    },
                                    children: Object(m.jsx)(a.l, {
                                        icon: h.k
                                    })
                                }), Object(m.jsx)(a.i, {
                                    style: {
                                        marginBottom: "3px"
                                    },
                                    onClick: function() {
                                        de(!0), xe("filter")
                                    },
                                    children: Object(m.jsx)(a.l, {
                                        icon: h.i
                                    })
                                }), Object(m.jsx)(a.i, {
                                    style: {
                                        marginBottom: "3px"
                                    },
                                    onClick: function() {
                                        de(!0), xe("layers")
                                    },
                                    children: Object(m.jsx)(a.l, {
                                        icon: h.l
                                    })
                                })]
                            }), Object(m.jsxs)("div", {
                                className: "searchbar",
                                children: [Object(m.jsx)(a.t, {
                                    placeholder: "Search By Name"
                                }), Object(m.jsx)(a.b, {
                                    className: "searchbtn",
                                    children: Object(m.jsx)(a.l, {
                                        icon: h.r
                                    })
                                })]
                            }), Object(m.jsx)("div", {
                                className: "zoomcontrols",
                                children: Object(m.jsxs)(a.d, {
                                    style: {
                                        marginBottom: "-13px"
                                    },
                                    children: [Object(m.jsx)(a.m, {
                                        lines: "none",
                                        onClick: function() {
                                            U.zoomIn({
                                                duration: 500
                                            })
                                        },
                                        button: !0,
                                        children: Object(m.jsx)(a.l, {
                                            icon: h.a
                                        })
                                    }), Object(m.jsx)(a.m, {
                                        lines: "none",
                                        button: !0,
                                        onClick: function() {
                                            U.zoomOut({
                                                duration: 500
                                            })
                                        },
                                        children: Object(m.jsx)(a.l, {
                                            icon: h.o
                                        })
                                    }), Object(m.jsx)(a.m, {
                                        lines: "none",
                                        color: 0 == Z ? "" : "primary",
                                        button: !0,
                                        onClick: function() {
                                            V(0 == Z ? 60 : 0), Ze(!He)
                                        },
                                        children: "3D"
                                    })]
                                })
                            }), Object(m.jsxs)(M, {
                                pitch: [Z],
                                onStyleLoad: function(e) {
                                    e.resize(), e.setCenter([Q, te]), e.setZoom([q]), Y(e)
                                },
                                onDragEnd: function(e) {
                                    var n = e.getCenter();
                                    $(n.lng), ce(n.lat)
                                },
                                onZoomEnd: function(e) {
                                    J(e.getZoom())
                                },
                                style: "mapbox://styles/mapbox/streets-v9",
                                containerStyle: {
                                    height: "100%",
                                    width: "100vw"
                                },
                                children: [we ? Object(m.jsxs)(m.Fragment, {
                                    children: [Object(m.jsx)(x.a, {
                                        data: u,
                                        layerOptions: cn,
                                        fillPaint: {
                                            "fill-color": "aqua",
                                            "fill-opacity": 0
                                        },
                                        fillOnClick: function(e) {
                                            de(!0), xe("info");
                                            var n = e.features[0].properties;
                                            Le(e.features[0]);
                                            var t = {
                                                ain: n.PARCEL_AIN,
                                                apn: n.PARCEL_APN,
                                                address: n.PARCEL_ADD,
                                                use: n.PARCEL_USE,
                                                use1: n.PARCEL_U_1,
                                                ass: n.PARCEL_ASS,
                                                subty: n.ZONE_SUBTY,
                                                zone: n.ZONE,
                                                loc: n.PARCEL_TYP,
                                                area: n.LOT_AREA,
                                                depth: n.LOT_DEPTH,
                                                type: n.ZONE_TYPE,
                                                parking: n.PARKING_RE,
                                                lotwidth: n.LOT_WIDTH,
                                                floors: n.NUM_FLOORS,
                                                ahdensbo: n.AH_DENS_BO,
                                                ahdens1: n.AH_DENS_1,
                                                openspace: n.OPEN_SPACE,
                                                zonedesc: n.ZONE_DESCR,
                                                minsetbac: n.MIN_SETBAC,
                                                minsetb1: n.MIN_SETB_1,
                                                minsetb2: n.MIN_SETB_2,
                                                minsetb3: n.MIN_SETB_3,
                                                minsetb4: n.MIN_SETB_4,
                                                minsetb5: n.MIN_SETB_5,
                                                minsetb6: n.MIN_SETB_6,
                                                maxsetbac: n.MAX_SETBAC,
                                                maxsetb6: n.MAX_SETB_1,
                                                maxdwelli: n.MAX_DWELLI,
                                                heightmax: n.HEIGHT_MAX,
                                                farmax: n.FAR_MAX_BA,
                                                numfloors: n.NUM_FLOORS,
                                                overalyty: n.OVERLAY_TY,
                                                overlaysu: n.OVERLAY_SU,
                                                overlayma: n.OVERLAY_MA,
                                                overlay1: n.OVERLAY_1,
                                                overlayde: n.OVERLAY_DE,
                                                publicy: n.PUBLICLY_D,
                                                bonusmisc: n.BONUS_MISC,
                                                overlay2: n.OVERLAY_2,
                                                overlayop: n.OVERLAY_OP,
                                                heightinc: n.HEIGHT_INC,
                                                height_i1: n.HEIGHT_I_1,
                                                farincent: n.FAR_INCENT,
                                                farince: n.FAR_INCE_1,
                                                farmaxal: n.FAR_MAX_AL,
                                                floorarea: n.FLOOR_AREA,
                                                floorar1: n.FLOOR_AR_1,
                                                ssptarget: n.SSP_TARGET,
                                                devrestri: n.DEV_RESTRI,
                                                maxbldfo: n.MAX_BLD_FO,
                                                maxblden: n.MAX_BLD_EN,
                                                maxbld1: n.MAX_BLD__1,
                                                openspa: n.OPEN_SPA_1,
                                                dumaxall: n.DU_MAX_ALL,
                                                scratch: n.scratch
                                            };
                                            on(t)
                                        },
                                        linePaint: {
                                            "line-color": "aqua",
                                            "line-width": 1
                                        },
                                        fillOnMouseEnter: function() {
                                            U.getCanvas().style.cursor = "pointer"
                                        },
                                        fillOnMouseLeave: function() {
                                            ye([0, 0]), U.getCanvas().style.cursor = ""
                                        }
                                    }), Object(m.jsx)(x.a, {
                                        data: ve,
                                        linePaint: {
                                            "line-color": "red",
                                            "line-width": 3
                                        }
                                    })]
                                }) : Object(m.jsx)(m.Fragment, {}), Ie ? Object(m.jsx)(x.a, {
                                    data: L,
                                    fillPaint: {
                                        "fill-color": _,
                                        "fill-opacity": .5
                                    },
                                    symbolLayout: {
                                        "text-field": ["get", "Label"],
                                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                                        "text-offset": [0, .6]
                                    }
                                }) : Object(m.jsx)(m.Fragment, {}), Te ? Object(m.jsx)(x.a, {
                                    data: T,
                                    fillPaint: {
                                        "fill-color": N,
                                        "fill-opacity": .5
                                    },
                                    linePaint: {
                                        "line-color": "red",
                                        "line-width": 3
                                    },
                                    symbolLayout: {
                                        "text-field": ["get", "OverlayTyp"],
                                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                                        "text-offset": [0, .6]
                                    }
                                }) : Object(m.jsx)(m.Fragment, {}), He ? Object(m.jsx)(x.a, {
                                    fillExtrusionPaint: {
                                        "fill-extrusion-color": "grey",
                                        "fill-extrusion-height": ["get", "HEIGHT"],
                                        "fill-extrusion-opacity": 1
                                    },
                                    data: r
                                }) : Object(m.jsx)(m.Fragment, {}), Ke ? Object(m.jsx)(x.a, {
                                    data: E,
                                    fillPaint: {
                                        "fill-color": "dimgrey",
                                        "fill-opacity": .9
                                    }
                                }) : Object(m.jsx)(m.Fragment, {}), Ge ? Object(m.jsx)(x.a, {
                                    data: t,
                                    linePaint: {
                                        "line-color": "red",
                                        "line-width": 3
                                    }
                                }) : Object(m.jsx)(m.Fragment, {}), Object(m.jsx)(x.b, {
                                    coordinates: me,
                                    children: Object(m.jsx)(a.m, {
                                        lines: "full",
                                        children: Object(m.jsx)(a.n, {
                                            children: ge
                                        })
                                    })
                                })]
                            }), Object(m.jsx)("div", {
                                className: "footer",
                                children: Object(m.jsx)(a.j, {
                                    children: Object(m.jsxs)(a.y, {
                                        children: [Object(m.jsx)(a.c, {
                                            slot: "end",
                                            children: Object(m.jsx)(a.b, {
                                                children: "Help us Improve"
                                            })
                                        }), "Allrights Reserverd"]
                                    })
                                })
                            })]
                        }) : Object(m.jsx)(m.Fragment, {
                            children: Object(m.jsx)(a.w, {
                                style: {
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%"
                                },
                                color: "primary"
                            })
                        })
                    })
                })),
                F = function(e) {
                    var n = Object(c.useState)(!0),
                        t = Object(O.a)(n, 2),
                        s = t[0],
                        i = t[1];
                    return Object(m.jsx)(m.Fragment, {
                        children: Object(m.jsxs)(a.m, {
                            onClick: function(n) {
                                e.handler(e.obj)
                            },
                            lines: "full",
                            children: [Object(m.jsx)(a.f, {
                                checked: s,
                                slot: "end",
                                onIonChange: function(e) {
                                    i(!s)
                                }
                            }), Object(m.jsx)(a.n, {
                                children: e.obj
                            })]
                        })
                    })
                },
                B = (t(105), function() {
                    return Object(m.jsxs)(a.q, {
                        children: [Object(m.jsx)(a.k, {
                            children: Object(m.jsx)(a.y, {
                                children: Object(m.jsx)(a.x, {
                                    children: "Zoning Map"
                                })
                            })
                        }), Object(m.jsxs)(a.g, {
                            fullscreen: !0,
                            children: [Object(m.jsx)(a.k, {
                                collapse: "condense",
                                children: Object(m.jsx)(a.y, {
                                    children: Object(m.jsx)(a.x, {
                                        size: "large",
                                        children: "Zoning Map"
                                    })
                                })
                            }), Object(m.jsx)(T, {})]
                        })]
                    })
                }),
                D = (t(106), t(107), t(108), t(109), t(110), t(111), t(112), t(113), t(114), t(115), t(116), function() {
                    return Object(m.jsx)(a.a, {
                        children: Object(m.jsx)(o.a, {
                            children: Object(m.jsxs)(a.s, {
                                children: [Object(m.jsx)(r.b, {
                                    exact: !0,
                                    path: "/home",
                                    children: Object(m.jsx)(B, {})
                                }), Object(m.jsx)(r.b, {
                                    exact: !0,
                                    path: "/",
                                    children: Object(m.jsx)(r.a, {
                                        to: "/home"
                                    })
                                })]
                            })
                        })
                    })
                });
            l.a.render(Object(m.jsx)(s.a.StrictMode, {
                children: Object(m.jsx)(D, {})
            }), document.getElementById("root"))
        },
        71: function(e, n, t) {
            var c = {
                "./ion-action-sheet.entry.js": [119, 5],
                "./ion-alert.entry.js": [120, 6],
                "./ion-app_8.entry.js": [121, 7],
                "./ion-avatar_3.entry.js": [122, 17],
                "./ion-back-button.entry.js": [123, 18],
                "./ion-backdrop.entry.js": [124, 43],
                "./ion-button_2.entry.js": [125, 19],
                "./ion-card_5.entry.js": [126, 20],
                "./ion-checkbox.entry.js": [127, 21],
                "./ion-chip.entry.js": [128, 22],
                "./ion-col_3.entry.js": [129, 44],
                "./ion-datetime_3.entry.js": [130, 10],
                "./ion-fab_3.entry.js": [131, 23],
                "./ion-img.entry.js": [132, 45],
                "./ion-infinite-scroll_2.entry.js": [133, 46],
                "./ion-input.entry.js": [134, 24],
                "./ion-item-option_3.entry.js": [135, 25],
                "./ion-item_8.entry.js": [136, 26],
                "./ion-loading.entry.js": [137, 27],
                "./ion-menu_3.entry.js": [138, 28],
                "./ion-modal.entry.js": [139, 8],
                "./ion-nav_2.entry.js": [140, 14],
                "./ion-popover.entry.js": [141, 9],
                "./ion-progress-bar.entry.js": [142, 29],
                "./ion-radio_2.entry.js": [143, 30],
                "./ion-range.entry.js": [144, 31],
                "./ion-refresher_2.entry.js": [145, 11],
                "./ion-reorder_2.entry.js": [146, 16],
                "./ion-ripple-effect.entry.js": [147, 47],
                "./ion-route_4.entry.js": [148, 32],
                "./ion-searchbar.entry.js": [149, 33],
                "./ion-segment_2.entry.js": [150, 34],
                "./ion-select_3.entry.js": [151, 35],
                "./ion-slide_2.entry.js": [152, 48],
                "./ion-spinner.entry.js": [153, 13],
                "./ion-split-pane.entry.js": [154, 49],
                "./ion-tab-bar_2.entry.js": [155, 36],
                "./ion-tab_2.entry.js": [156, 15],
                "./ion-text.entry.js": [157, 37],
                "./ion-textarea.entry.js": [158, 38],
                "./ion-toast.entry.js": [159, 39],
                "./ion-toggle.entry.js": [160, 12],
                "./ion-virtual-scroll.entry.js": [161, 50]
            };

            function s(e) {
                if (!t.o(c, e)) return Promise.resolve().then((function() {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }));
                var n = c[e],
                    s = n[0];
                return t.e(n[1]).then((function() {
                    return t(s)
                }))
            }
            s.keys = function() {
                return Object.keys(c)
            }, s.id = 71, e.exports = s
        },
        73: function(e, n, t) {
            var c = {
                "./ion-icon.entry.js": [162, 57]
            };

            function s(e) {
                if (!t.o(c, e)) return Promise.resolve().then((function() {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }));
                var n = c[e],
                    s = n[0];
                return t.e(n[1]).then((function() {
                    return t(s)
                }))
            }
            s.keys = function() {
                return Object.keys(c)
            }, s.id = 73, e.exports = s
        },
        81: function(e, n, t) {}
    },
    [
        [117, 3, 4]
    ]
]);
//# sourceMappingURL=main.98e7db4f.chunk.js.map