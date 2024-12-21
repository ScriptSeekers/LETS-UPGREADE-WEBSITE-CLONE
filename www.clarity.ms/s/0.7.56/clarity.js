/* clarity-js v0.7.56: https://github.com/microsoft/clarity (License: MIT) */
!(function () {
  "use strict";
  var t = Object.freeze({
      __proto__: null,
      get queue() {
        return dr;
      },
      get start() {
        return lr;
      },
      get stop() {
        return fr;
      },
      get track() {
        return ir;
      },
    }),
    e = Object.freeze({
      __proto__: null,
      get clone() {
        return Ar;
      },
      get compute() {
        return jr;
      },
      get data() {
        return Tr;
      },
      get keys() {
        return Nr;
      },
      get reset() {
        return Rr;
      },
      get start() {
        return Cr;
      },
      get stop() {
        return zr;
      },
      get trigger() {
        return Dr;
      },
      get update() {
        return Lr;
      },
    }),
    n = Object.freeze({
      __proto__: null,
      get check() {
        return qr;
      },
      get compute() {
        return Fr;
      },
      get data() {
        return Or;
      },
      get start() {
        return Yr;
      },
      get stop() {
        return Vr;
      },
      get trigger() {
        return Ur;
      },
    }),
    a = Object.freeze({
      __proto__: null,
      get compute() {
        return $r;
      },
      get data() {
        return Br;
      },
      get log() {
        return Qr;
      },
      get reset() {
        return ti;
      },
      get start() {
        return Kr;
      },
      get stop() {
        return Zr;
      },
      get updates() {
        return Jr;
      },
    }),
    r = Object.freeze({
      __proto__: null,
      get callback() {
        return fi;
      },
      get callbacks() {
        return ai;
      },
      get clear() {
        return di;
      },
      get consent() {
        return li;
      },
      get data() {
        return ni;
      },
      get electron() {
        return ri;
      },
      get id() {
        return si;
      },
      get metadata() {
        return ci;
      },
      get save() {
        return hi;
      },
      get shortid() {
        return gi;
      },
      get start() {
        return oi;
      },
      get stop() {
        return ui;
      },
    }),
    i = Object.freeze({
      __proto__: null,
      get data() {
        return Ei;
      },
      get envelope() {
        return Ni;
      },
      get start() {
        return Oi;
      },
      get stop() {
        return Ti;
      },
    }),
    o = {
      projectId: null,
      delay: 1e3,
      lean: !1,
      track: !0,
      content: !0,
      drop: [],
      mask: [],
      unmask: [],
      regions: [],
      cookies: [],
      fraud: !0,
      checksum: [],
      report: null,
      upload: null,
      fallback: null,
      upgrade: null,
      action: null,
      dob: null,
      delayDom: !1,
      throttleDom: !0,
      conversions: !1,
      longTask: 30,
    };
  function u(t) {
    return window.Zone && "__symbol__" in window.Zone
      ? window.Zone.__symbol__(t)
      : t;
  }
  var c = 0;
  function s(t) {
    void 0 === t && (t = null);
    var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now(),
      n = t && t.view ? t.view.performance.timeOrigin : performance.timeOrigin;
    return Math.max(Math.round(e + n - c), 0);
  }
  var l = "0.7.56";
  function d(t, e) {
    void 0 === e && (e = null);
    for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
      if (((a = ((a << 5) + a) ^ t.charCodeAt(i)), i + 1 < t.length))
        r = ((r << 5) + r) ^ t.charCodeAt(i + 1);
    }
    return (
      (n = Math.abs(a + 11579 * r)), (e ? n % Math.pow(2, e) : n).toString(36)
    );
  }
  var f = /\S/gi,
    h = !0,
    p = null,
    v = null,
    g = null;
  function m(t, e, n, a, r) {
    if ((void 0 === a && (a = !1), t)) {
      if ("input" == e && ("checkbox" === r || "radio" === r)) return t;
      switch (n) {
        case 0:
          return t;
        case 1:
          switch (e) {
            case "*T":
            case "value":
            case "placeholder":
            case "click":
              return (function (t) {
                var e = -1,
                  n = 0,
                  a = !1,
                  r = !1,
                  i = !1,
                  o = null;
                E();
                for (var u = 0; u < t.length; u++) {
                  var c = t.charCodeAt(u);
                  if (
                    ((a = a || (c >= 48 && c <= 57)),
                    (r = r || 64 === c),
                    (i = 9 === c || 10 === c || 13 === c || 32 === c),
                    0 === u || u === t.length - 1 || i)
                  ) {
                    if (a || r) {
                      null === o && (o = t.split(""));
                      var s = t.substring(e + 1, i ? u : u + 1);
                      (s =
                        h && null !== g
                          ? s.match(g)
                            ? s
                            : k(s, "▪", "▫")
                          : w(s)),
                        o.splice(e + 1 - n, s.length, s),
                        (n += s.length - 1);
                    }
                    i && ((a = !1), (r = !1), (e = u));
                  }
                }
                return o ? o.join("") : t;
              })(t);
            case "input":
            case "change":
              return S(t);
          }
          return t;
        case 2:
        case 3:
          switch (e) {
            case "*T":
            case "data-":
              return a ? b(t) : w(t);
            case "src":
            case "srcset":
            case "title":
            case "alt":
              return 3 === n ? "" : t;
            case "value":
            case "click":
            case "input":
            case "change":
              return S(t);
            case "placeholder":
              return w(t);
          }
          break;
        case 4:
          switch (e) {
            case "*T":
            case "data-":
              return a ? b(t) : w(t);
            case "value":
            case "input":
            case "click":
            case "change":
              return Array(5).join("•");
            case "checksum":
              return "";
          }
          break;
        case 5:
          switch (e) {
            case "*T":
            case "data-":
              return k(t, "▪", "▫");
            case "value":
            case "input":
            case "click":
            case "change":
              return Array(5).join("•");
            case "checksum":
            case "src":
            case "srcset":
            case "alt":
            case "title":
              return "";
          }
      }
    }
    return t;
  }
  function y(t, e) {
    if ((void 0 === e && (e = !1), e))
      return "".concat("https://").concat("Electron");
    var n = o.drop;
    if (n && n.length > 0 && t && t.indexOf("?") > 0) {
      var a = t.split("?"),
        r = a[0],
        i = a[1];
      return (
        r +
        "?" +
        i
          .split("&")
          .map(function (t) {
            return n.some(function (e) {
              return 0 === t.indexOf("".concat(e, "="));
            })
              ? "".concat(t.split("=")[0], "=").concat("*na*")
              : t;
          })
          .join("&")
      );
    }
    return t;
  }
  function b(t) {
    var e = t.trim();
    if (e.length > 0) {
      var n = e[0],
        a = t.indexOf(n),
        r = t.substr(0, a),
        i = t.substr(a + e.length);
      return "".concat(r).concat(e.length.toString(36)).concat(i);
    }
    return t;
  }
  function w(t) {
    return t.replace(f, "•");
  }
  function k(t, e, n) {
    return E(), t ? t.replace(v, e).replace(p, n) : t;
  }
  function S(t) {
    for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++)
      n += a > 0 && a % 5 == 0 ? " " : "•";
    return n;
  }
  function E() {
    if (h && null === p)
      try {
        (p = new RegExp("\\p{N}", "gu")),
          (v = new RegExp("\\p{L}", "gu")),
          (g = new RegExp("\\p{Sc}", "gu"));
      } catch (t) {
        h = !1;
      }
  }
  var O = null,
    T = null,
    N = !1;
  function M() {
    N &&
      (O = {
        time: s(),
        event: 4,
        data: {
          visible: T.visible,
          docWidth: T.docWidth,
          docHeight: T.docHeight,
          screenWidth: T.screenWidth,
          screenHeight: T.screenHeight,
          scrollX: T.scrollX,
          scrollY: T.scrollY,
          pointerX: T.pointerX,
          pointerY: T.pointerY,
          activityTime: T.activityTime,
          scrollTime: T.scrollTime,
        },
      }),
      (T = T || {
        visible: 1,
        docWidth: 0,
        docHeight: 0,
        screenWidth: 0,
        screenHeight: 0,
        scrollX: 0,
        scrollY: 0,
        pointerX: 0,
        pointerY: 0,
        activityTime: 0,
        scrollTime: 0,
      });
  }
  function x(t, e, n, a) {
    switch (t) {
      case 8:
        (T.docWidth = e), (T.docHeight = n);
        break;
      case 11:
        (T.screenWidth = e), (T.screenHeight = n);
        break;
      case 10:
        (T.scrollX = e), (T.scrollY = n), (T.scrollTime = a);
        break;
      default:
        (T.pointerX = e), (T.pointerY = n);
    }
    N = !0;
  }
  function _(t) {
    T.activityTime = t;
  }
  function I(t, e) {
    (T.visible = "visible" === e ? 1 : 0), T.visible || _(t), (N = !0);
  }
  function C() {
    N && Xr(4);
  }
  var D = Object.freeze({
      __proto__: null,
      activity: _,
      compute: C,
      reset: M,
      start: function () {
        (N = !1), M();
      },
      get state() {
        return O;
      },
      stop: function () {
        M();
      },
      track: x,
      visibility: I,
    }),
    A = null;
  function j(t, e) {
    Ui() &&
      t &&
      "string" == typeof t &&
      t.length < 255 &&
      ((A =
        e && "string" == typeof e && e.length < 255
          ? { key: t, value: e }
          : { value: t }),
      Xr(24));
  }
  var R,
    L = null,
    z = null;
  function H(t) {
    t in L || (L[t] = 0), t in z || (z[t] = 0), L[t]++, z[t]++;
  }
  function P(t, e) {
    null !== e &&
      (t in L || (L[t] = 0), t in z || (z[t] = 0), (L[t] += e), (z[t] += e));
  }
  function W(t, e) {
    null !== e &&
      !1 === isNaN(e) &&
      (t in L || (L[t] = 0),
      (e > L[t] || 0 === L[t]) && ((z[t] = e), (L[t] = e)));
  }
  function X(t, e, n) {
    return window.setTimeout(_i(t), e, n);
  }
  function Y(t) {
    return window.clearTimeout(t);
  }
  var q = 0,
    U = 0,
    F = null;
  function V() {
    F && Y(F), (F = X(B, U)), (q = s());
  }
  function B() {
    var t = s();
    (R = { gap: t - q }),
      Xr(25),
      R.gap < 3e5
        ? (F = X(B, U))
        : Xi &&
          (j("clarity", "suspend"),
          go(),
          ["mousemove", "touchstart"].forEach(function (t) {
            return Ci(document, t, Fi);
          }),
          ["resize", "scroll", "pageshow"].forEach(function (t) {
            return Ci(window, t, Fi);
          }));
  }
  var J = Object.freeze({
      __proto__: null,
      get data() {
        return R;
      },
      reset: V,
      start: function () {
        (U = 6e4), (q = 0);
      },
      stop: function () {
        Y(F), (q = 0), (U = 0);
      },
    }),
    G = null;
  function K(t, e) {
    if (t in G) {
      var n = G[t],
        a = n[n.length - 1];
      e - a[0] > 100 ? G[t].push([e, 0]) : (a[1] = e - a[0]);
    } else G[t] = [[e, 0]];
  }
  function Z() {
    Xr(36);
  }
  function Q() {
    G = {};
  }
  var $ = Object.freeze({
      __proto__: null,
      compute: Z,
      get data() {
        return G;
      },
      reset: Q,
      start: function () {
        G = {};
      },
      stop: function () {
        G = {};
      },
      track: K,
    }),
    tt = null;
  function et(t) {
    Ui() &&
      o.lean &&
      ((o.lean = !1),
      (tt = { key: t }),
      fi(),
      hi(),
      o.upgrade && o.upgrade(t),
      Xr(3));
  }
  var nt = Object.freeze({
    __proto__: null,
    get data() {
      return tt;
    },
    start: function () {
      !o.lean && o.upgrade && o.upgrade("Config"), (tt = null);
    },
    stop: function () {
      tt = null;
    },
    upgrade: et,
  });
  function at(t, e, n, a) {
    return new (n || (n = Promise))(function (r, i) {
      function o(t) {
        try {
          c(a.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          c(a.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? r(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(o, u);
      }
      c((a = a.apply(t, e || [])).next());
    });
  }
  function rt(t, e) {
    var n,
      a,
      r,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(u) {
      return function (c) {
        return (function (u) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; i && ((i = 0), u[0] && (o = 0)), o; )
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & u[0]
                      ? a.return
                      : u[0]
                      ? a.throw || ((r = a.return) && r.call(a), 0)
                      : a.next) &&
                  !(r = r.call(a, u[1])).done)
              )
                return r;
              switch (((a = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                case 0:
                case 1:
                  r = u;
                  break;
                case 4:
                  return o.label++, { value: u[1], done: !1 };
                case 5:
                  o.label++, (a = u[1]), (u = [0]);
                  continue;
                case 7:
                  (u = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((r = o.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== u[0] && 2 !== u[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                    o.label = u[1];
                    break;
                  }
                  if (6 === u[0] && o.label < r[1]) {
                    (o.label = r[1]), (r = u);
                    break;
                  }
                  if (r && o.label < r[2]) {
                    (o.label = r[2]), o.ops.push(u);
                    break;
                  }
                  r[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              u = e.call(t, o);
            } catch (t) {
              (u = [6, t]), (a = 0);
            } finally {
              n = r = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        })([u, c]);
      };
    }
  }
  var it = null;
  function ot(t, e) {
    ct(t, "string" == typeof e ? [e] : e);
  }
  function ut(t, e, n, a) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      void 0 === a && (a = null),
      at(this, void 0, void 0, function () {
        var r, i;
        return rt(this, function (o) {
          switch (o.label) {
            case 0:
              return (i = {}), [4, dt(t)];
            case 1:
              return (
                (i.userId = o.sent()),
                (i.userHint =
                  a ||
                  ((u = t) && u.length >= 5
                    ? ""
                        .concat(u.substring(0, 2))
                        .concat(k(u.substring(2), "*", "*"))
                    : k(u, "*", "*"))),
                ct("userId", [(r = i).userId]),
                ct("userHint", [r.userHint]),
                ct("userType", [ft(t)]),
                e && (ct("sessionId", [e]), (r.sessionId = e)),
                n && (ct("pageId", [n]), (r.pageId = n)),
                [2, r]
              );
          }
          var u;
        });
      })
    );
  }
  function ct(t, e) {
    if (Ui() && t && e && "string" == typeof t && t.length < 255) {
      for (var n = (t in it) ? it[t] : [], a = 0; a < e.length; a++)
        "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
      it[t] = n;
    }
  }
  function st() {
    Xr(34);
  }
  function lt() {
    it = {};
  }
  function dt(t) {
    return at(this, void 0, void 0, function () {
      var e;
      return rt(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              n.trys.push([0, 4, , 5]),
              crypto && t
                ? [
                    4,
                    crypto.subtle.digest(
                      "SHA-256",
                      new TextEncoder().encode(t)
                    ),
                  ]
                : [3, 2]
            );
          case 1:
            return (
              (e = n.sent()),
              [
                2,
                Array.prototype.map
                  .call(new Uint8Array(e), function (t) {
                    return ("00" + t.toString(16)).slice(-2);
                  })
                  .join(""),
              ]
            );
          case 2:
            return [2, ""];
          case 3:
            return [3, 5];
          case 4:
            return n.sent(), [2, ""];
          case 5:
            return [2];
        }
      });
    });
  }
  function ft(t) {
    return t && t.indexOf("@") > 0 ? "email" : "string";
  }
  var ht = "CompressionStream" in window;
  function pt(t) {
    return at(this, void 0, void 0, function () {
      var e, n;
      return rt(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              a.trys.push([0, 3, , 4]),
              ht
                ? ((e = new ReadableStream({
                    start: function (e) {
                      return at(this, void 0, void 0, function () {
                        return rt(this, function (n) {
                          return e.enqueue(t), e.close(), [2];
                        });
                      });
                    },
                  })
                    .pipeThrough(new TextEncoderStream())
                    .pipeThrough(new window.CompressionStream("gzip"))),
                  (n = Uint8Array.bind),
                  [4, vt(e)])
                : [3, 2]
            );
          case 1:
            return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))()];
          case 2:
            return [3, 4];
          case 3:
            return a.sent(), [3, 4];
          case 4:
            return [2, null];
        }
      });
    });
  }
  function vt(t) {
    return at(this, void 0, void 0, function () {
      var e, n, a, r, i;
      return rt(this, function (o) {
        switch (o.label) {
          case 0:
            (e = t.getReader()), (n = []), (a = !1), (r = []), (o.label = 1);
          case 1:
            return a ? [3, 3] : [4, e.read()];
          case 2:
            return (
              (i = o.sent()),
              (a = i.done),
              (r = i.value),
              a ? [2, n] : (n.push.apply(n, r), [3, 1])
            );
          case 3:
            return [2, n];
        }
      });
    });
  }
  var gt = null;
  function mt(t) {
    try {
      if (!gt) return;
      var e = (function (t) {
        try {
          return JSON.parse(t);
        } catch (t) {
          return [];
        }
      })(t);
      e.forEach(function (t) {
        gt(t);
      });
    } catch (t) {}
  }
  var yt = [
    D,
    a,
    Object.freeze({
      __proto__: null,
      compute: st,
      get data() {
        return it;
      },
      identify: ut,
      reset: lt,
      set: ot,
      start: function () {
        lt();
      },
      stop: function () {
        lt();
      },
    }),
    n,
    $,
    r,
    i,
    t,
    J,
    nt,
    e,
  ];
  function bt() {
    (L = {}),
      (z = {}),
      H(5),
      yt.forEach(function (t) {
        return _i(t.start)();
      });
  }
  function wt() {
    yt
      .slice()
      .reverse()
      .forEach(function (t) {
        return _i(t.stop)();
      }),
      (L = {}),
      (z = {});
  }
  function kt() {
    st(), C(), $r(), Xr(0), Z(), Fr(), jr();
  }
  var St,
    Et = [];
  function Ot(t, e, n) {
    o.fraud &&
      null !== t &&
      n &&
      n.length >= 5 &&
      ((St = { id: t, target: e, checksum: d(n, 28) }),
      Et.indexOf(St.checksum) < 0 && (Et.push(St.checksum), wr(41)));
  }
  var Tt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
    Nt = {};
  function Mt(t, e) {
    var n = t.attributes,
      a = t.prefix ? t.prefix[e] : null,
      r =
        0 === e
          ? "".concat("~").concat(t.position - 1)
          : ":nth-of-type(".concat(t.position, ")");
    switch (t.tag) {
      case "STYLE":
      case "TITLE":
      case "LINK":
      case "META":
      case "*T":
      case "*D":
        return "";
      case "HTML":
        return "HTML";
      default:
        if (null === a) return "";
        (a = "".concat(a).concat(">")),
          (t.tag =
            0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag);
        var i = "".concat(a).concat(t.tag).concat(r),
          o = "id" in n && n.id.length > 0 ? n.id : null,
          u =
            "BODY" !== t.tag && "class" in n && n.class.length > 0
              ? n.class
                  .trim()
                  .split(/\s+/)
                  .filter(function (t) {
                    return xt(t);
                  })
                  .join(".")
              : null;
        if (u && u.length > 0)
          if (0 === e) {
            var c = ""
              .concat(
                (function (t) {
                  for (var e = t.split(">"), n = 0; n < e.length; n++) {
                    var a = e[n].indexOf("~"),
                      r = e[n].indexOf(".");
                    e[n] = e[n].substring(
                      0,
                      r > 0 ? r : a > 0 ? a : e[n].length
                    );
                  }
                  return e.join(">");
                })(a)
              )
              .concat(t.tag)
              .concat(".")
              .concat(u);
            c in Nt || (Nt[c] = []),
              Nt[c].indexOf(t.id) < 0 && Nt[c].push(t.id),
              (i = "".concat(c).concat("~").concat(Nt[c].indexOf(t.id)));
          } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
        return (
          (i =
            o && xt(o)
              ? ""
                  .concat(
                    (function (t) {
                      var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                      if (a < 0) return "";
                      return t.substring(0, t.indexOf(">", a) + 1);
                    })(a)
                  )
                  .concat("#")
                  .concat(o)
              : i),
          i
        );
    }
  }
  function xt(t) {
    if (!t) return !1;
    if (
      Tt.some(function (e) {
        return t.toLowerCase().indexOf(e) >= 0;
      })
    )
      return !1;
    for (var e = 0; e < t.length; e++) {
      var n = t.charCodeAt(e);
      if (n >= 48 && n <= 57) return !1;
    }
    return !0;
  }
  var _t = 1,
    It = null,
    Ct = [],
    Dt = [],
    At = {},
    jt = [],
    Rt = [],
    Lt = [],
    zt = [],
    Ht = [],
    Pt = [],
    Wt = null,
    Xt = null,
    Yt = null,
    qt = null;
  function Ut() {
    Vt(), Bt(document, !0);
  }
  function Ft() {
    Vt();
  }
  function Vt() {
    (_t = 1),
      (Ct = []),
      (Dt = []),
      (At = {}),
      (jt = []),
      (Rt = []),
      (Lt = "address,password,contact".split(",")),
      (zt = "password,secret,pass,social,ssn,code,hidden".split(",")),
      (Ht = "radio,checkbox,range,button,reset,submit".split(",")),
      (Pt = "INPUT,SELECT,TEXTAREA".split(",")),
      (It = new Map()),
      (Wt = new WeakMap()),
      (Xt = new WeakMap()),
      (Yt = new WeakMap()),
      (qt = new WeakMap()),
      (Nt = {});
  }
  function Bt(t, e) {
    void 0 === e && (e = !1);
    try {
      e &&
        o.unmask.forEach(function (t) {
          return t.indexOf("!") < 0 ? Rt.push(t) : jt.push(t.substr(1));
        }),
        "querySelectorAll" in t &&
          (o.regions.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return Xa(t, "".concat(e[0]));
            });
          }),
          o.mask.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return Yt.set(t, 3);
            });
          }),
          o.checksum.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return qt.set(t, e[0]);
            });
          }),
          Rt.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return Yt.set(t, 0);
            });
          }));
    } catch (t) {
      Er(5, 1, t ? t.name : null);
    }
  }
  function Jt(t, e) {
    if ((void 0 === e && (e = !1), null === t)) return null;
    var n = Wt.get(t);
    return !n && e && ((n = _t++), Wt.set(t, n)), n || null;
  }
  function Gt(t) {
    var e = !1;
    if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
      var n = t;
      try {
        n.contentDocument && (Xt.set(n.contentDocument, n), (e = !0));
      } catch (t) {}
    }
    return e;
  }
  function Kt(t) {
    var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
    return e && Xt.has(e) ? Xt.get(e) : null;
  }
  function Zt(t, e, n) {
    if ("object" == typeof t[n] && "object" == typeof e[n]) {
      for (var a in t[n]) if (t[n][a] !== e[n][a]) return !0;
      for (var a in e[n]) if (e[n][a] !== t[n][a]) return !0;
      return !1;
    }
    return t[n] !== e[n];
  }
  function Qt(t) {
    var e = t.parent && t.parent in Ct ? Ct[t.parent] : null,
      n = e ? e.selector : null,
      a = t.data,
      r = (function (t, e) {
        e.metadata.position = 1;
        for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0; ) {
          var a = Ct[t.children[n]];
          if (e.data.tag === a.data.tag) {
            e.metadata.position = a.metadata.position + 1;
            break;
          }
        }
        return e.metadata.position;
      })(e, t),
      i = {
        id: t.id,
        tag: a.tag,
        prefix: n,
        position: r,
        attributes: a.attributes,
      };
    (t.selector = [Mt(i, 0), Mt(i, 1)]),
      (t.hash = t.selector.map(function (t) {
        return t ? d(t) : null;
      })),
      t.hash.forEach(function (e) {
        return (At[e] = t.id);
      });
  }
  function $t(t) {
    var e = te(ne(t));
    return null !== e && null !== e.textContent
      ? e.textContent.substr(0, 25)
      : "";
  }
  function te(t) {
    return It.has(t) ? It.get(t) : null;
  }
  function ee(t) {
    var e = Jt(t);
    return e in Ct ? Ct[e] : null;
  }
  function ne(t) {
    return t in At ? At[t] : null;
  }
  function ae(t) {
    return It.has(Jt(t));
  }
  function re() {
    for (var t = [], e = 0, n = Dt; e < n.length; e++) {
      var a = n[e];
      a in Ct && t.push(Ct[a]);
    }
    return (Dt = []), t;
  }
  function ie(t) {
    if (It.get(t).nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
      It.delete(t);
      var e = t in Ct ? Ct[t] : null;
      if (e && e.children)
        for (var n = 0, a = e.children; n < a.length; n++) {
          ie(a[n]);
        }
    }
  }
  function oe(t) {
    for (var e = null; null === e && t.previousSibling; )
      (e = Jt(t.previousSibling)), (t = t.previousSibling);
    return e;
  }
  function ue(t, e, n, a) {
    void 0 === n && (n = !0), void 0 === a && (a = !1);
    var r = Dt.indexOf(t);
    r >= 0 && 1 === e && a
      ? (Dt.splice(r, 1), Dt.push(t))
      : -1 === r && n && Dt.push(t);
  }
  var ce = Object.freeze({
      __proto__: null,
      add: function (t, e, n, a) {
        var r = Jt(t, !0),
          i = e ? Jt(e) : null,
          u = oe(t),
          c = null,
          s = Ya(t) ? r : null,
          l = qt.has(t) ? qt.get(t) : null,
          d = o.content ? 1 : 3;
        i >= 0 &&
          Ct[i] &&
          ((c = Ct[i]).children.push(r),
          (s = null === s ? c.region : s),
          (l = null === l ? c.metadata.fraud : l),
          (d = c.metadata.privacy)),
          n.attributes &&
            "data-clarity-region" in n.attributes &&
            (Xa(t, n.attributes["data-clarity-region"]), (s = r)),
          It.set(r, t),
          (Ct[r] = {
            id: r,
            parent: i,
            previous: u,
            children: [],
            data: n,
            selector: null,
            hash: null,
            region: s,
            metadata: {
              active: !0,
              suspend: !1,
              privacy: d,
              position: null,
              fraud: l,
              size: null,
            },
          }),
          (function (t, e, n) {
            var a,
              r = e.data,
              i = e.metadata,
              o = i.privacy,
              u = r.attributes || {},
              c = r.tag.toUpperCase();
            switch (!0) {
              case Pt.indexOf(c) >= 0:
                var s = u.type,
                  l = "",
                  d = ["class", "style"];
                Object.keys(u)
                  .filter(function (t) {
                    return !d.includes(t);
                  })
                  .forEach(function (t) {
                    return (l += u[t].toLowerCase());
                  });
                var f = zt.some(function (t) {
                  return l.indexOf(t) >= 0;
                });
                i.privacy = "INPUT" === c && Ht.indexOf(s) >= 0 ? o : f ? 4 : 2;
                break;
              case "data-clarity-mask" in u:
                i.privacy = 3;
                break;
              case "data-clarity-unmask" in u:
                i.privacy = 0;
                break;
              case Yt.has(t):
                i.privacy = Yt.get(t);
                break;
              case qt.has(t):
                i.privacy = 2;
                break;
              case "*T" === c:
                var h = n && n.data ? n.data.tag : "",
                  p = n && n.selector ? n.selector[1] : "",
                  v = ["STYLE", "TITLE", "svg:style"];
                i.privacy =
                  v.includes(h) ||
                  jt.some(function (t) {
                    return p.indexOf(t) >= 0;
                  })
                    ? 0
                    : o;
                break;
              case 1 === o:
                i.privacy = (function (t, e, n) {
                  if (
                    t &&
                    e.some(function (e) {
                      return t.indexOf(e) >= 0;
                    })
                  )
                    return 2;
                  return n.privacy;
                })(u.class, Lt, i);
                break;
              case "IMG" === c:
                (null === (a = u.src) || void 0 === a
                  ? void 0
                  : a.startsWith("blob:")) && (i.privacy = 3);
            }
          })(t, Ct[r], c),
          Qt(Ct[r]),
          (function (t) {
            if ("IMG" === t.data.tag && 3 === t.metadata.privacy) {
              var e = te(t.id);
              !e ||
                (e.complete && 0 !== e.naturalWidth) ||
                Ci(e, "load", function () {
                  e.setAttribute("data-clarity-loaded", "".concat(gi()));
                }),
                (t.metadata.size = []);
            }
          })(Ct[r]),
          ue(r, a);
      },
      get: ee,
      getId: Jt,
      getNode: te,
      getValue: function (t) {
        return t in Ct ? Ct[t] : null;
      },
      has: ae,
      hashText: $t,
      iframe: Kt,
      lookup: ne,
      parse: Bt,
      sameorigin: Gt,
      start: Ut,
      stop: Ft,
      update: function (t, e, n, a) {
        var r = Jt(t),
          i = e ? Jt(e) : null,
          o = oe(t),
          u = !1,
          c = !1;
        if (r in Ct) {
          var s = Ct[r];
          if (
            ((s.metadata.active = !0),
            s.previous !== o && ((u = !0), (s.previous = o)),
            s.parent !== i)
          ) {
            u = !0;
            var l = s.parent;
            if (((s.parent = i), null !== i && i >= 0)) {
              var d = null === o ? 0 : Ct[i].children.indexOf(o) + 1;
              Ct[i].children.splice(d, 0, r),
                (s.region = Ya(t) ? r : Ct[i].region);
            } else
              !(function (t, e) {
                if (t in Ct) {
                  var n = Ct[t];
                  (n.metadata.active = !1), (n.parent = null), ue(t, e), ie(t);
                }
              })(r, a);
            if (null !== l && l >= 0) {
              var f = Ct[l].children.indexOf(r);
              f >= 0 && Ct[l].children.splice(f, 1);
            }
            c = !0;
          }
          for (var h in n) Zt(s.data, n, h) && ((u = !0), (s.data[h] = n[h]));
          Qt(s), ue(r, a, u, c);
        }
      },
      updates: re,
    }),
    se = 5e3,
    le = {},
    de = [],
    fe = null,
    he = null,
    pe = null;
  function ve() {
    (le = {}), (de = []), (fe = null), (he = null);
  }
  function ge(t, e) {
    return (
      void 0 === e && (e = 0),
      at(this, void 0, void 0, function () {
        var n, a, r;
        return rt(this, function (i) {
          for (n = 0, a = de; n < a.length; n++)
            if (a[n].task === t) return [2];
          return (
            (r = new Promise(function (n) {
              de[1 === e ? "unshift" : "push"]({
                task: t,
                resolve: n,
                id: si(),
              });
            })),
            null === fe && null === he && me(),
            [2, r]
          );
        });
      })
    );
  }
  function me() {
    var t = de.shift();
    t &&
      ((fe = t),
      t
        .task()
        .then(function () {
          t.id === si() && (t.resolve(), (fe = null), me());
        })
        .catch(function (e) {
          t.id === si() &&
            (e && Er(0, 1, e.name, e.message, e.stack), (fe = null), me());
        }));
  }
  function ye(t) {
    var e = Se(t);
    return e in le
      ? performance.now() - le[e].start > le[e].yield
        ? 0
        : 1
      : 2;
  }
  function be(t) {
    le[Se(t)] = { start: performance.now(), calls: 0, yield: o.longTask };
  }
  function we(t) {
    var e = performance.now(),
      n = Se(t),
      a = e - le[n].start;
    P(t.cost, a), H(5), le[n].calls > 0 && P(4, a);
  }
  function ke(t) {
    return at(this, void 0, void 0, function () {
      var e, n;
      return rt(this, function (a) {
        switch (a.label) {
          case 0:
            return (e = Se(t)) in le ? (we(t), (n = le[e]), [4, Ee()]) : [3, 2];
          case 1:
            (n.yield = a.sent().timeRemaining()),
              (function (t) {
                var e = Se(t);
                if (le && le[e]) {
                  var n = le[e].calls,
                    a = le[e].yield;
                  be(t), (le[e].calls = n + 1), (le[e].yield = a);
                }
              })(t),
              (a.label = 2);
          case 2:
            return [2, e in le ? 1 : 2];
        }
      });
    });
  }
  function Se(t) {
    return "".concat(t.id, ".").concat(t.cost);
  }
  function Ee() {
    return at(this, void 0, void 0, function () {
      return rt(this, function (t) {
        switch (t.label) {
          case 0:
            return he ? [4, he] : [3, 2];
          case 1:
            t.sent(), (t.label = 2);
          case 2:
            return [
              2,
              new Promise(function (t) {
                Te(t, { timeout: se });
              }),
            ];
        }
      });
    });
  }
  var Oe,
    Te =
      window.requestIdleCallback ||
      function (t, e) {
        var n = performance.now(),
          a = new MessageChannel(),
          r = a.port1,
          i = a.port2;
        (r.onmessage = function (a) {
          var r = performance.now(),
            u = r - n,
            c = r - a.data;
          if (c > o.longTask && u < e.timeout)
            requestAnimationFrame(function () {
              i.postMessage(r);
            });
          else {
            var s = u > e.timeout;
            t({
              didTimeout: s,
              timeRemaining: function () {
                return s ? o.longTask : Math.max(0, o.longTask - c);
              },
            });
          }
        }),
          requestAnimationFrame(function () {
            i.postMessage(performance.now());
          });
      };
  function Ne() {
    Oe = null;
  }
  function Me() {
    var t = document.body,
      e = document.documentElement,
      n = t ? t.clientWidth : null,
      a = t ? t.scrollWidth : null,
      r = t ? t.offsetWidth : null,
      i = e ? e.clientWidth : null,
      o = e ? e.scrollWidth : null,
      u = e ? e.offsetWidth : null,
      c = Math.max(n, a, r, i, o, u),
      s = t ? t.clientHeight : null,
      l = t ? t.scrollHeight : null,
      d = t ? t.offsetHeight : null,
      f = e ? e.clientHeight : null,
      h = e ? e.scrollHeight : null,
      p = e ? e.offsetHeight : null,
      v = Math.max(s, l, d, f, h, p);
    (null !== Oe && c === Oe.width && v === Oe.height) ||
      null === c ||
      null === v ||
      ((Oe = { width: c, height: v }), Ca(8));
  }
  var xe = [];
  function _e(t) {
    var e = Ja(t);
    if (e) {
      var n = e.value,
        a =
          n &&
          n.length >= 5 &&
          o.fraud &&
          -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type)
            ? d(n, 28)
            : "";
      xe.push({
        time: s(t),
        event: 42,
        data: { target: Ja(t), type: e.type, value: n, checksum: a },
      }),
        ge(Ka.bind(this, 42));
    }
  }
  function Ie() {
    xe = [];
  }
  function Ce(t) {
    var e = { x: 0, y: 0 };
    if (t && t.offsetParent)
      do {
        var n = t.offsetParent,
          a = null === n ? Kt(t.ownerDocument) : null;
        (e.x += t.offsetLeft), (e.y += t.offsetTop), (t = a || n);
      } while (t);
    return e;
  }
  var De = ["input", "textarea", "radio", "button", "canvas"],
    Ae = [];
  function je(t) {
    Ci(t, "click", Re.bind(this, 9, t), !0);
  }
  function Re(t, e, n) {
    var a = Kt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = Ce(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    var c = Ja(n),
      l = (function (t) {
        for (; t && t !== document; ) {
          if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t;
            if ("A" === e.tagName) return e;
          }
          t = t.parentNode;
        }
        return null;
      })(c),
      d = (function (t) {
        var e = null,
          n = document.documentElement;
        if ("function" == typeof t.getBoundingClientRect) {
          var a = t.getBoundingClientRect();
          a &&
            a.width > 0 &&
            a.height > 0 &&
            (e = {
              x: Math.floor(
                a.left +
                  ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)
              ),
              y: Math.floor(
                a.top +
                  ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)
              ),
              w: Math.floor(a.width),
              h: Math.floor(a.height),
            });
        }
        return e;
      })(c);
    0 === n.detail &&
      d &&
      ((i = Math.round(d.x + d.w / 2)), (o = Math.round(d.y + d.h / 2)));
    var f = d ? Math.max(Math.floor(((i - d.x) / d.w) * 32767), 0) : 0,
      h = d ? Math.max(Math.floor(((o - d.y) / d.h) * 32767), 0) : 0;
    null !== i &&
      null !== o &&
      (Ae.push({
        time: s(n),
        event: t,
        data: {
          target: c,
          x: i,
          y: o,
          eX: f,
          eY: h,
          button: n.button,
          reaction: ze(c),
          context: He(l),
          text: Le(c),
          link: l ? l.href : null,
          hash: null,
          trust: n.isTrusted ? 1 : 0,
        },
      }),
      ge(Ka.bind(this, t)));
  }
  function Le(t) {
    var e = null;
    if (t) {
      var n = t.textContent || String(t.value || "") || t.alt;
      n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25));
    }
    return e;
  }
  function ze(t) {
    if (t.nodeType === Node.ELEMENT_NODE) {
      var e = t.tagName.toLowerCase();
      if (De.indexOf(e) >= 0) return 0;
    }
    return 1;
  }
  function He(t) {
    if (t && t.hasAttribute("target"))
      switch (t.getAttribute("target")) {
        case "_blank":
          return 1;
        case "_parent":
          return 2;
        case "_top":
          return 3;
      }
    return 0;
  }
  function Pe() {
    Ae = [];
  }
  var We = [];
  function Xe(t, e) {
    We.push({ time: s(e), event: 38, data: { target: Ja(e), action: t } }),
      ge(Ka.bind(this, 38));
  }
  function Ye() {
    We = [];
  }
  var qe = null,
    Ue = [];
  function Fe(t) {
    var e = Ja(t),
      n = ee(e);
    if (e && e.type && n) {
      var a = e.value,
        r = e.type;
      switch (e.type) {
        case "radio":
        case "checkbox":
          a = e.checked ? "true" : "false";
      }
      var i = { target: e, value: a, type: r };
      Ue.length > 0 && Ue[Ue.length - 1].data.target === i.target && Ue.pop(),
        Ue.push({ time: s(t), event: 27, data: i }),
        Y(qe),
        (qe = X(Ve, 1e3, 27));
    }
  }
  function Ve(t) {
    ge(Ka.bind(this, t));
  }
  function Be() {
    Ue = [];
  }
  var Je,
    Ge = [],
    Ke = null;
  function Ze(t, e, n) {
    var a = Kt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = Ce(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    null !== i &&
      null !== o &&
      $e({ time: s(n), event: t, data: { target: Ja(n), x: i, y: o } });
  }
  function Qe(t, e, n) {
    var a = Kt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i = n.changedTouches,
      o = s(n);
    if (i)
      for (var u = 0; u < i.length; u++) {
        var c = i[u],
          l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
          d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
        (l = l && a ? l + Math.round(a.offsetLeft) : l),
          (d = d && a ? d + Math.round(a.offsetTop) : d);
        var f = "identifier" in c ? c.identifier : void 0;
        null !== l &&
          null !== d &&
          $e({ time: o, event: t, data: { target: Ja(n), x: l, y: d, id: f } });
      }
  }
  function $e(t) {
    switch (t.event) {
      case 12:
      case 15:
      case 19:
        var e = Ge.length,
          n = e > 1 ? Ge[e - 2] : null;
        n &&
          (function (t, e) {
            var n = t.data.x - e.data.x,
              a = t.data.y - e.data.y,
              r = Math.sqrt(n * n + a * a),
              i = e.time - t.time,
              o = e.data.target === t.data.target;
            return e.event === t.event && o && r < 20 && i < 25;
          })(n, t) &&
          Ge.pop(),
          Ge.push(t),
          Y(Ke),
          (Ke = X(tn, 500, t.event));
        break;
      default:
        Ge.push(t), tn(t.event);
    }
  }
  function tn(t) {
    ge(Ka.bind(this, t));
  }
  function en() {
    Ge = [];
  }
  var nn = null;
  function an() {
    var t = document.documentElement;
    (Je = {
      width:
        t && "clientWidth" in t
          ? Math.min(t.clientWidth, window.innerWidth)
          : window.innerWidth,
      height:
        t && "clientHeight" in t
          ? Math.min(t.clientHeight, window.innerHeight)
          : window.innerHeight,
    }),
      Y(nn),
      (nn = X(rn, 500, 11));
  }
  function rn(t) {
    ge(Ka.bind(this, t));
  }
  function on() {
    (Je = null), Y(nn);
  }
  var un = [],
    cn = null,
    sn = null,
    ln = null;
  function dn(t) {
    void 0 === t && (t = null);
    var e = window,
      n = document.documentElement,
      a = t ? Ja(t) : n;
    if (a && a.nodeType === Node.DOCUMENT_NODE) {
      var r = Kt(a);
      (e = r ? r.contentWindow : e), (a = n = a.documentElement);
    }
    var i =
        a === n && "pageXOffset" in e
          ? Math.round(e.pageXOffset)
          : Math.round(a.scrollLeft),
      o =
        a === n && "pageYOffset" in e
          ? Math.round(e.pageYOffset)
          : Math.round(a.scrollTop),
      u = window.innerWidth,
      c = window.innerHeight,
      l = u / 3,
      d = u > c ? 0.15 * c : 0.2 * c,
      f = c - d,
      h = fn(l, d),
      p = fn(l, f),
      v = {
        time: s(t),
        event: 10,
        data: { target: a, x: i, y: o, top: h, bottom: p },
      };
    if ((null === t && 0 === i && 0 === o) || null === i || null === o)
      return (cn = h), void (sn = p);
    var g = un.length,
      m = g > 1 ? un[g - 2] : null;
    m &&
      (function (t, e) {
        var n = t.data.x - e.data.x,
          a = t.data.y - e.data.y;
        return n * n + a * a < 400 && e.time - t.time < 25;
      })(m, v) &&
      un.pop(),
      un.push(v),
      Y(ln),
      (ln = X(hn, 500, 10));
  }
  function fn(t, e) {
    var n, a, r;
    return (
      "caretPositionFromPoint" in document
        ? (r =
            null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n
              ? void 0
              : n.offsetNode)
        : "caretRangeFromPoint" in document &&
          (r =
            null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a
              ? void 0
              : a.startContainer),
      r || (r = document.elementFromPoint(t, e)),
      r && r.nodeType === Node.TEXT_NODE && (r = r.parentNode),
      r
    );
  }
  function hn(t) {
    ge(Ka.bind(this, t));
  }
  function pn() {
    var t, e;
    if (cn) {
      var n = Ga(cn, null);
      Qr(
        31,
        null === (t = null == n ? void 0 : n.hash) || void 0 === t
          ? void 0
          : t.join(".")
      );
    }
    if (sn) {
      var a = Ga(sn, null);
      Qr(
        32,
        null === (e = null == a ? void 0 : a.hash) || void 0 === e
          ? void 0
          : e.join(".")
      );
    }
  }
  var vn = null,
    gn = null,
    mn = null;
  function yn(t) {
    var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
    if (
      null !== e &&
      !(
        (null === e.anchorNode && null === e.focusNode) ||
        (e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)
      )
    ) {
      var n = vn.start ? vn.start : null;
      null !== gn && null !== vn.start && n !== e.anchorNode && (Y(mn), bn(21)),
        (vn = {
          start: e.anchorNode,
          startOffset: e.anchorOffset,
          end: e.focusNode,
          endOffset: e.focusOffset,
        }),
        (gn = e),
        Y(mn),
        (mn = X(bn, 500, 21));
    }
  }
  function bn(t) {
    ge(Ka.bind(this, t));
  }
  function wn() {
    (gn = null), (vn = { start: 0, startOffset: 0, end: 0, endOffset: 0 });
  }
  var kn,
    Sn,
    En = [];
  function On(t) {
    En.push({ time: s(t), event: 39, data: { target: Ja(t) } }),
      ge(Ka.bind(this, 39));
  }
  function Tn() {
    En = [];
  }
  function Nn(t) {
    (kn = { name: t.type }), Ka(26, s(t)), go();
  }
  function Mn() {
    kn = null;
  }
  function xn(t) {
    void 0 === t && (t = null),
      (Sn = {
        visible:
          "visibilityState" in document ? document.visibilityState : "default",
      }),
      Ka(28, s(t));
  }
  function _n() {
    Sn = null;
  }
  function In(t) {
    !(function (t) {
      var e = Kt(t);
      Ci(e ? e.contentWindow : t === document ? window : t, "scroll", dn, !0);
    })(t),
      t.nodeType === Node.DOCUMENT_NODE &&
        (je(t),
        (function (t) {
          Ci(t, "cut", Xe.bind(this, 0), !0),
            Ci(t, "copy", Xe.bind(this, 1), !0),
            Ci(t, "paste", Xe.bind(this, 2), !0);
        })(t),
        (function (t) {
          Ci(t, "mousedown", Ze.bind(this, 13, t), !0),
            Ci(t, "mouseup", Ze.bind(this, 14, t), !0),
            Ci(t, "mousemove", Ze.bind(this, 12, t), !0),
            Ci(t, "wheel", Ze.bind(this, 15, t), !0),
            Ci(t, "dblclick", Ze.bind(this, 16, t), !0),
            Ci(t, "touchstart", Qe.bind(this, 17, t), !0),
            Ci(t, "touchend", Qe.bind(this, 18, t), !0),
            Ci(t, "touchmove", Qe.bind(this, 19, t), !0),
            Ci(t, "touchcancel", Qe.bind(this, 20, t), !0);
        })(t),
        (function (t) {
          Ci(t, "input", Fe, !0);
        })(t),
        (function (t) {
          Ci(t, "selectstart", yn.bind(this, t), !0),
            Ci(t, "selectionchange", yn.bind(this, t), !0);
        })(t),
        (function (t) {
          Ci(t, "change", _e, !0);
        })(t),
        (function (t) {
          Ci(t, "submit", On, !0);
        })(t));
  }
  var Cn = Object.freeze({
    __proto__: null,
    observe: In,
    start: function () {
      (Za = []),
        $a(),
        Pe(),
        Ye(),
        en(),
        Be(),
        Ci(window, "resize", an),
        an(),
        Ci(document, "visibilitychange", xn),
        xn(),
        (un = []),
        dn(),
        wn(),
        Ie(),
        Tn(),
        Ci(window, "pagehide", Nn);
    },
    stop: function () {
      (Za = []),
        $a(),
        Pe(),
        Ye(),
        Y(Ke),
        Ge.length > 0 && tn(Ge[Ge.length - 1].event),
        Y(qe),
        Be(),
        on(),
        _n(),
        Y(ln),
        (un = []),
        (cn = null),
        (sn = null),
        wn(),
        Y(mn),
        Ie(),
        Tn(),
        Mn();
    },
  });
  function Dn(t, e, n, a) {
    return at(this, void 0, void 0, function () {
      var r, i, o, u, c;
      return rt(this, function (s) {
        switch (s.label) {
          case 0:
            (r = [t]), (s.label = 1);
          case 1:
            if (!(r.length > 0)) return [3, 4];
            for (i = r.shift(), o = i.firstChild; o; )
              r.push(o), (o = o.nextSibling);
            return 0 !== (u = ye(e)) ? [3, 3] : [4, ke(e)];
          case 2:
            (u = s.sent()), (s.label = 3);
          case 3:
            return 2 === u ? [3, 4] : ((c = na(i, n, a)) && r.push(c), [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  }
  var An = [],
    jn = [],
    Rn = null,
    Ln = null,
    zn = null,
    Hn = null,
    Pn = null,
    Wn = [],
    Xn = null,
    Yn = null,
    qn = {};
  function Un() {
    if (
      ((An = []),
      (Wn = []),
      (Xn = null),
      (Yn = 0),
      (qn = {}),
      null === Rn &&
        ((Rn = CSSStyleSheet.prototype.insertRule),
        (CSSStyleSheet.prototype.insertRule = function () {
          return Ui() && Gn(this.ownerNode), Rn.apply(this, arguments);
        })),
      "CSSMediaRule" in window &&
        null === Hn &&
        ((Hn = CSSMediaRule.prototype.insertRule),
        (CSSMediaRule.prototype.insertRule = function () {
          return (
            Ui() && Gn(this.parentStyleSheet.ownerNode),
            Hn.apply(this, arguments)
          );
        })),
      null === Ln &&
        ((Ln = CSSStyleSheet.prototype.deleteRule),
        (CSSStyleSheet.prototype.deleteRule = function () {
          return Ui() && Gn(this.ownerNode), Ln.apply(this, arguments);
        })),
      "CSSMediaRule" in window &&
        null === Pn &&
        ((Pn = CSSMediaRule.prototype.deleteRule),
        (CSSMediaRule.prototype.deleteRule = function () {
          return (
            Ui() && Gn(this.parentStyleSheet.ownerNode),
            Pn.apply(this, arguments)
          );
        })),
      null === zn)
    ) {
      zn = Element.prototype.attachShadow;
      try {
        Element.prototype.attachShadow = function () {
          return Ui()
            ? Gn(zn.apply(this, arguments))
            : zn.apply(this, arguments);
        };
      } catch (t) {
        zn = null;
      }
    }
  }
  function Fn(t) {
    var e = s();
    K(6, e),
      jn.push({ time: e, mutations: t }),
      ge(Vn, 1).then(function () {
        X(Me), _i(qa)();
      });
  }
  function Vn() {
    return at(this, void 0, void 0, function () {
      var t, e, n, a, r, i, u, c, l, d;
      return rt(this, function (f) {
        switch (f.label) {
          case 0:
            be((t = { id: si(), cost: 3 })), (f.label = 1);
          case 1:
            if (!(jn.length > 0)) return [3, 8];
            (e = jn.shift()),
              (n = s()),
              (a = 0),
              (r = e.mutations),
              (f.label = 2);
          case 2:
            return a < r.length
              ? ((i = r[a]), 0 !== (u = ye(t)) ? [3, 4] : [4, ke(t)])
              : [3, 6];
          case 3:
            (u = f.sent()), (f.label = 4);
          case 4:
            if (2 === u) return [3, 6];
            switch (
              ((c = i.target),
              (l = o.throttleDom
                ? (function (t, e, n, a) {
                    var r = t.target ? ee(t.target.parentNode) : null;
                    if (r && "HTML" !== r.data.tag) {
                      var i = a > Yn,
                        o = ee(t.target),
                        u =
                          o && o.selector
                            ? o.selector.join()
                            : t.target.nodeName,
                        c = [
                          r.selector ? r.selector.join() : "",
                          u,
                          t.attributeName,
                          Bn(t.addedNodes),
                          Bn(t.removedNodes),
                        ].join();
                      qn[c] = c in qn ? qn[c] : [0, n];
                      var s = qn[c];
                      if (
                        (!1 === i && s[0] >= 10 && Jn(s[2], 2, e, a),
                        (s[0] = i ? (s[1] === n ? s[0] : s[0] + 1) : 1),
                        (s[1] = n),
                        10 === s[0])
                      )
                        return (s[2] = t.removedNodes), "suspend";
                      if (s[0] > 10) return "";
                    }
                    return t.type;
                  })(i, t, n, e.time)
                : i.type),
              l && c && c.ownerDocument && Bt(c.ownerDocument),
              l &&
                c &&
                c.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                c.host &&
                Bt(c),
              l)
            ) {
              case "attributes":
                na(c, 3, e.time);
                break;
              case "characterData":
                na(c, 4, e.time);
                break;
              case "childList":
                Jn(i.addedNodes, 1, t, e.time),
                  Jn(i.removedNodes, 2, t, e.time);
                break;
              case "suspend":
                (d = ee(c)) && (d.metadata.suspend = !0);
            }
            f.label = 5;
          case 5:
            return a++, [3, 2];
          case 6:
            return [4, Ca(6, t, e.time)];
          case 7:
            return f.sent(), [3, 1];
          case 8:
            return we(t), [2];
        }
      });
    });
  }
  function Bn(t) {
    for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
    return e.join();
  }
  function Jn(t, e, n, a) {
    return at(this, void 0, void 0, function () {
      var r, i, o;
      return rt(this, function (u) {
        switch (u.label) {
          case 0:
            (r = t ? t.length : 0), (i = 0), (u.label = 1);
          case 1:
            return i < r
              ? 1 !== e
                ? [3, 2]
                : (Dn(t[i], n, e, a), [3, 5])
              : [3, 6];
          case 2:
            return 0 !== (o = ye(n)) ? [3, 4] : [4, ke(n)];
          case 3:
            (o = u.sent()), (u.label = 4);
          case 4:
            if (2 === o) return [3, 6];
            na(t[i], e, a), (u.label = 5);
          case 5:
            return i++, [3, 1];
          case 6:
            return [2];
        }
      });
    });
  }
  function Gn(t) {
    return (
      Wn.indexOf(t) < 0 && Wn.push(t),
      Xn && Y(Xn),
      (Xn = X(function () {
        !(function () {
          for (var t = 0, e = Wn; t < e.length; t++) {
            var n = e[t];
            if (n) {
              var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              if (a && ae(n)) continue;
              Kn(n, a ? "childList" : "characterData");
            }
          }
          Wn = [];
        })();
      }, 33)),
      t
    );
  }
  function Kn(t, e) {
    _i(Fn)([
      {
        addedNodes: [t],
        attributeName: null,
        attributeNamespace: null,
        nextSibling: null,
        oldValue: null,
        previousSibling: null,
        removedNodes: [],
        target: t,
        type: e,
      },
    ]);
  }
  var Zn = /[^0-9\.]/g;
  function Qn(t) {
    for (var e = 0, n = Object.keys(t); e < n.length; e++) {
      var a = n[e],
        r = t[a];
      if ("@type" === a && "string" == typeof r)
        switch (
          (r =
            (r = r.toLowerCase()).indexOf("article") >= 0 ||
            r.indexOf("posting") >= 0
              ? "article"
              : r)
        ) {
          case "article":
          case "recipe":
            Qr(5, t[a]), Qr(8, t.creator), Qr(18, t.headline);
            break;
          case "product":
            Qr(5, t[a]),
              Qr(10, t.name),
              Qr(12, t.sku),
              t.brand && Qr(6, t.brand.name);
            break;
          case "aggregaterating":
            t.ratingValue &&
              (W(11, $n(t.ratingValue, 100)),
              W(18, $n(t.bestRating)),
              W(19, $n(t.worstRating))),
              W(12, $n(t.ratingCount)),
              W(17, $n(t.reviewCount));
            break;
          case "offer":
            Qr(7, t.availability),
              Qr(14, t.itemCondition),
              Qr(13, t.priceCurrency),
              Qr(12, t.sku),
              W(13, $n(t.price));
            break;
          case "brand":
            Qr(6, t.name);
        }
      null !== r && "object" == typeof r && Qn(r);
    }
  }
  function $n(t, e) {
    if ((void 0 === e && (e = 1), null !== t))
      switch (typeof t) {
        case "number":
          return Math.round(t * e);
        case "string":
          return Math.round(parseFloat(t.replace(Zn, "")) * e);
      }
    return null;
  }
  var ta = [
      "title",
      "alt",
      "onload",
      "onfocus",
      "onerror",
      "data-drupal-form-submit-last",
      "aria-label",
    ],
    ea = /[\r\n]+/g;
  function na(t, e, n) {
    var a,
      r = null;
    if (2 === e && !1 === ae(t)) return r;
    0 !== e &&
      t.nodeType === Node.TEXT_NODE &&
      t.parentElement &&
      "STYLE" === t.parentElement.tagName &&
      (t = t.parentNode);
    var i = !1 === ae(t) ? "add" : "update",
      o = t.parentElement ? t.parentElement : null,
      u = t.ownerDocument !== document;
    switch (t.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        o = u && t.parentNode ? Kt(t.parentNode) : o;
        var c = t,
          s = {
            tag: (u ? "iframe:" : "") + "*D",
            attributes: {
              name: c.name ? c.name : "HTML",
              publicId: c.publicId,
              systemId: c.systemId,
            },
          };
        ce[i](t, o, s, e);
        break;
      case Node.DOCUMENT_NODE:
        t === document && Bt(document), va(t, n), aa(t);
        break;
      case Node.DOCUMENT_FRAGMENT_NODE:
        var l = t;
        if (l.host) {
          if (
            (Bt(l),
            "function" === typeof l.constructor &&
              l.constructor.toString().indexOf("[native code]") >= 0)
          ) {
            aa(l);
            var d = { tag: "*S", attributes: { style: "" } };
            ce[i](t, l.host, d, e);
          } else ce[i](t, l.host, { tag: "*P", attributes: {} }, e);
          va(t, n);
        }
        break;
      case Node.TEXT_NODE:
        if (
          ((o = o || t.parentNode),
          "update" === i ||
            (o && ae(o) && "STYLE" !== o.tagName && "NOSCRIPT" !== o.tagName))
        ) {
          var f = { tag: "*T", value: t.nodeValue };
          ce[i](t, o, f, e);
        }
        break;
      case Node.ELEMENT_NODE:
        var h = t,
          p = h.tagName,
          v = (function (t) {
            var e = {},
              n = t.attributes;
            if (n && n.length > 0)
              for (var a = 0; a < n.length; a++) {
                var r = n[a].name;
                ta.indexOf(r) < 0 && (e[r] = n[a].value);
              }
            "INPUT" === t.tagName &&
              !("value" in e) &&
              t.value &&
              (e.value = t.value);
            return e;
          })(h);
        switch (
          ((o = t.parentElement
            ? t.parentElement
            : t.parentNode
            ? t.parentNode
            : null),
          "http://www.w3.org/2000/svg" === h.namespaceURI && (p = "svg:" + p),
          p)
        ) {
          case "HTML":
            o = u && o ? Kt(o) : o;
            var g = { tag: (u ? "iframe:" : "") + p, attributes: v };
            ce[i](t, o, g, e);
            break;
          case "SCRIPT":
            if ("type" in v && "application/ld+json" === v.type)
              try {
                Qn(JSON.parse(h.text.replace(ea, "")));
              } catch (t) {}
            break;
          case "NOSCRIPT":
            var m = { tag: p, attributes: {}, value: "" };
            ce[i](t, o, m, e);
            break;
          case "META":
            var y = "property" in v ? "property" : "name" in v ? "name" : null;
            if (y && "content" in v) {
              var b = v.content;
              switch (v[y]) {
                case "og:title":
                  Qr(20, b);
                  break;
                case "og:type":
                  Qr(19, b);
                  break;
                case "generator":
                  Qr(21, b);
              }
            }
            break;
          case "HEAD":
            var w = { tag: p, attributes: v },
              k =
                u &&
                (null === (a = t.ownerDocument) || void 0 === a
                  ? void 0
                  : a.location)
                  ? t.ownerDocument.location
                  : location;
            (w.attributes["*B"] = k.protocol + "//" + k.host + k.pathname),
              ce[i](t, o, w, e);
            break;
          case "BASE":
            var S = ee(t.parentElement);
            if (S) {
              var E = document.createElement("a");
              (E.href = v.href),
                (S.data.attributes["*B"] =
                  E.protocol + "//" + E.host + E.pathname);
            }
            break;
          case "STYLE":
            var O = { tag: p, attributes: v, value: ra(h) };
            ce[i](t, o, O, e);
            break;
          case "IFRAME":
            var T = t,
              N = { tag: p, attributes: v };
            Gt(T) &&
              (!(function (t) {
                !1 === ae(t) &&
                  Ci(t, "load", Kn.bind(this, t, "childList"), !0);
              })(T),
              (N.attributes["*O"] = "true"),
              T.contentDocument &&
                T.contentWindow &&
                "loading" !== T.contentDocument.readyState &&
                (r = T.contentDocument)),
              ce[i](t, o, N, e);
            break;
          case "LINK":
            if (ri && "stylesheet" === v.rel) {
              for (var M in Object.keys(document.styleSheets)) {
                var x = document.styleSheets[M];
                if (x.ownerNode == h) {
                  var _ = { tag: "STYLE", attributes: v, value: ia(x) };
                  ce[i](t, o, _, e);
                  break;
                }
              }
              break;
            }
            var I = { tag: p, attributes: v };
            ce[i](t, o, I, e);
            break;
          case "VIDEO":
          case "AUDIO":
          case "SOURCE":
            "src" in v && v.src.startsWith("data:") && (v.src = "");
            var C = { tag: p, attributes: v };
            ce[i](t, o, C, e);
            break;
          default:
            var D = { tag: p, attributes: v };
            h.shadowRoot && (r = h.shadowRoot), ce[i](t, o, D, e);
        }
    }
    return r;
  }
  function aa(t) {
    ae(t) ||
      (!(function (t) {
        try {
          var e = u("MutationObserver"),
            n = e in window ? new window[e](_i(Fn)) : null;
          n &&
            (n.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0,
            }),
            An.push(n));
        } catch (t) {
          Er(2, 0, t ? t.name : null);
        }
      })(t),
      In(t));
  }
  function ra(t) {
    var e = t.textContent ? t.textContent.trim() : "",
      n = t.dataset ? Object.keys(t.dataset).length : 0;
    return (0 === e.length || n > 0 || t.id.length > 0) && (e = ia(t.sheet)), e;
  }
  function ia(t) {
    var e = "",
      n = null;
    try {
      n = t ? t.cssRules : [];
    } catch (t) {
      if ((Er(1, 1, t ? t.name : null), t && "SecurityError" !== t.name))
        throw t;
    }
    if (null !== n) for (var a = 0; a < n.length; a++) e += n[a].cssText;
    return e;
  }
  var oa = [],
    ua = [],
    ca = null,
    sa = null,
    la = "claritySheetId",
    da = "claritySheetNum",
    fa = {},
    ha = {},
    pa = [];
  function va(t, e) {
    if (
      (-1 === pa.indexOf(t) && pa.push(t),
      (e = e || s()),
      null == t ? void 0 : t.adoptedStyleSheets)
    ) {
      W(36, 1);
      for (var n = [], a = 0, r = t.adoptedStyleSheets; a < r.length; a++) {
        var i = r[a],
          o = ni.pageNum;
        i[da] !== o &&
          ((i[da] = o),
          (i[la] = gi()),
          ma(e, i[la], 0),
          ma(e, i[la], 2, ia(i))),
          n.push(i[la]);
      }
      var u = Jt(t, !0);
      fa[u] || (fa[u] = []),
        (function (t, e) {
          if (t.length !== e.length) return !1;
          return t.every(function (t, n) {
            return t === e[n];
          });
        })(n, fa[u]) ||
          (!(function (t, e, n, a) {
            ua.push({
              time: t,
              event: 45,
              data: { id: e, operation: n, newIds: a },
            }),
              Ca(45);
          })(e, t == document ? -1 : Jt(t), 3, n),
          (fa[u] = n),
          (ha[u] = e));
    }
  }
  function ga() {
    (ua = []), (oa = []);
  }
  function ma(t, e, n, a) {
    oa.push({ time: t, event: 46, data: { id: e, operation: n, cssRules: a } }),
      Ca(46);
  }
  var ya = [],
    ba = null,
    wa = null,
    ka = null,
    Sa = null,
    Ea = null,
    Oa = "clarityAnimationId",
    Ta = "clarityOperationCount",
    Na = 20;
  function Ma() {
    ya = [];
  }
  function xa(t, e, n, a, r, i, o) {
    ya.push({
      time: t,
      event: 44,
      data: {
        id: e,
        operation: n,
        keyFrames: a,
        timing: r,
        targetId: i,
        timeline: o,
      },
    }),
      Ca(44);
  }
  function _a(t, e) {
    null === t &&
      ((t = Animation.prototype[e]),
      (Animation.prototype[e] = function () {
        return Ia(this, e), t.apply(this, arguments);
      }));
  }
  function Ia(t, e) {
    if (Ui()) {
      var n = t.effect,
        a = Jt(n.target);
      if (null !== a && n.getKeyframes && n.getTiming) {
        if (!t[Oa]) {
          (t[Oa] = gi()), (t[Ta] = 0);
          var r = n.getKeyframes(),
            i = n.getTiming();
          xa(s(), t[Oa], 0, JSON.stringify(r), JSON.stringify(i), a);
        }
        if (t[Ta]++ < Na) {
          var o = null;
          switch (e) {
            case "play":
              o = 1;
              break;
            case "pause":
              o = 2;
              break;
            case "cancel":
              o = 3;
              break;
            case "finish":
              o = 4;
          }
          o && xa(s(), t[Oa], o);
        }
      }
    }
  }
  function Ca(t, e, n) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      at(this, void 0, void 0, function () {
        var a,
          r,
          i,
          u,
          c,
          l,
          d,
          f,
          h,
          p,
          v,
          g,
          y,
          b,
          w,
          k,
          S,
          E,
          O,
          T,
          N,
          M,
          I,
          C,
          D,
          A,
          j,
          R,
          L;
        return rt(this, function (z) {
          switch (z.label) {
            case 0:
              switch (((a = n || s()), (r = [a, t]), t)) {
                case 8:
                  return [3, 1];
                case 7:
                  return [3, 2];
                case 45:
                case 46:
                  return [3, 3];
                case 44:
                  return [3, 4];
                case 5:
                case 6:
                  return [3, 5];
              }
              return [3, 12];
            case 1:
              return (
                (i = Oe),
                r.push(i.width),
                r.push(i.height),
                x(t, i.width, i.height),
                dr(r),
                [3, 12]
              );
            case 2:
              for (u = 0, c = Ra; u < c.length; u++)
                (l = c[u]),
                  (r = [l.time, 7]).push(l.data.id),
                  r.push(l.data.interaction),
                  r.push(l.data.visibility),
                  r.push(l.data.name),
                  dr(r);
              return Ba(), [3, 12];
            case 3:
              for (d = 0, f = ua; d < f.length; d++)
                (y = f[d]),
                  (r = [y.time, y.event]).push(y.data.id),
                  r.push(y.data.operation),
                  r.push(y.data.newIds),
                  dr(r);
              for (h = 0, p = oa; h < p.length; h++)
                (y = p[h]),
                  (r = [y.time, y.event]).push(y.data.id),
                  r.push(y.data.operation),
                  r.push(y.data.cssRules),
                  dr(r);
              return ga(), [3, 12];
            case 4:
              for (v = 0, g = ya; v < g.length; v++)
                (y = g[v]),
                  (r = [y.time, y.event]).push(y.data.id),
                  r.push(y.data.operation),
                  r.push(y.data.keyFrames),
                  r.push(y.data.timing),
                  r.push(y.data.timeline),
                  r.push(y.data.targetId),
                  dr(r);
              return Ma(), [3, 12];
            case 5:
              if (2 === ye(e)) return [3, 12];
              if (!((b = re()).length > 0)) return [3, 11];
              (w = 0), (k = b), (z.label = 6);
            case 6:
              return w < k.length
                ? ((S = k[w]), 0 !== (E = ye(e)) ? [3, 8] : [4, ke(e)])
                : [3, 10];
            case 7:
              (E = z.sent()), (z.label = 8);
            case 8:
              if (2 === E) return [3, 10];
              for (
                O = S.data,
                  T = S.metadata.active,
                  N = S.metadata.suspend,
                  M = S.metadata.privacy,
                  I = (function (t) {
                    var e = t.metadata.privacy;
                    return "*T" === t.data.tag && !(0 === e || 1 === e);
                  })(S),
                  C = 0,
                  D = T ? ["tag", "attributes", "value"] : ["tag"];
                C < D.length;
                C++
              )
                if (O[(A = D[C])])
                  switch (A) {
                    case "tag":
                      (j = Da(S)),
                        (R = I ? -1 : 1),
                        r.push(S.id * R),
                        S.parent &&
                          T &&
                          (r.push(S.parent), S.previous && r.push(S.previous)),
                        r.push(N ? "*M" : O[A]),
                        j &&
                          2 === j.length &&
                          r.push(
                            ""
                              .concat("#")
                              .concat(Aa(j[0]), ".")
                              .concat(Aa(j[1]))
                          );
                      break;
                    case "attributes":
                      for (L in O[A])
                        void 0 !== O[A][L] && r.push(ja(L, O[A][L], M));
                      break;
                    case "value":
                      Ot(S.metadata.fraud, S.id, O[A]),
                        r.push(m(O[A], O.tag, M, I));
                  }
              z.label = 9;
            case 9:
              return w++, [3, 6];
            case 10:
              6 === t && _(a),
                dr(
                  (function (t) {
                    for (
                      var e = [], n = {}, a = 0, r = null, i = 0;
                      i < t.length;
                      i++
                    )
                      if ("string" == typeof t[i]) {
                        var o = t[i],
                          u = n[o] || -1;
                        u >= 0
                          ? r
                            ? r.push(u)
                            : ((r = [u]), e.push(r), a++)
                          : ((r = null), e.push(o), (n[o] = a++));
                      } else (r = null), e.push(t[i]), a++;
                    return e;
                  })(r),
                  !o.lean
                ),
                (z.label = 11);
            case 11:
              return [3, 12];
            case 12:
              return [2];
          }
        });
      })
    );
  }
  function Da(t) {
    if (null !== t.metadata.size && 0 === t.metadata.size.length) {
      var e = te(t.id);
      if (e)
        return [
          Math.floor(100 * e.offsetWidth),
          Math.floor(100 * e.offsetHeight),
        ];
    }
    return t.metadata.size;
  }
  function Aa(t) {
    return t.toString(36);
  }
  function ja(t, e, n) {
    return ""
      .concat(t, "=")
      .concat(m(e, 0 === t.indexOf("data-") ? "data-" : t, n));
  }
  var Ra = [],
    La = null,
    za = {},
    Ha = [],
    Pa = !1,
    Wa = null;
  function Xa(t, e) {
    !1 === La.has(t) &&
      (La.set(t, e),
      (Wa =
        null === Wa && Pa
          ? new IntersectionObserver(Ua, {
              threshold: [
                0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
              ],
            })
          : Wa) &&
        t &&
        t.nodeType === Node.ELEMENT_NODE &&
        Wa.observe(t));
  }
  function Ya(t) {
    return La && La.has(t);
  }
  function qa() {
    for (var t = [], e = 0, n = Ha; e < n.length; e++) {
      var a = n[e],
        r = Jt(a.node);
      r
        ? ((a.state.data.id = r), (za[r] = a.state.data), Ra.push(a.state))
        : t.push(a);
    }
    (Ha = t), Ra.length > 0 && Ca(7);
  }
  function Ua(t) {
    for (var e = 0, n = t; e < n.length; e++) {
      var a = n[e],
        r = a.target,
        i = a.boundingClientRect,
        o = a.intersectionRect,
        u = a.rootBounds;
      if (La.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
        var c = r ? Jt(r) : null,
          s =
            c in za
              ? za[c]
              : { id: c, name: La.get(r), interaction: 16, visibility: 0 },
          l =
            (o ? (o.width * o.height * 1) / (u.width * u.height) : 0) > 0.05 ||
            a.intersectionRatio > 0.8,
          d =
            (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
        Fa(r, s, s.interaction, d ? 13 : l ? 10 : 0),
          s.visibility >= 13 && Wa && Wa.unobserve(r);
      }
    }
    Ra.length > 0 && Ca(7);
  }
  function Fa(t, e, n, a) {
    var r = n > e.interaction || a > e.visibility;
    (e.interaction = n > e.interaction ? n : e.interaction),
      (e.visibility = a > e.visibility ? a : e.visibility),
      e.id
        ? ((e.id in za && r) || !(e.id in za)) &&
          ((za[e.id] = e), Ra.push(Va(e)))
        : Ha.push({ node: t, state: Va(e) });
  }
  function Va(t) {
    return {
      time: s(),
      data: {
        id: t.id,
        interaction: t.interaction,
        visibility: t.visibility,
        name: t.name,
      },
    };
  }
  function Ba() {
    Ra = [];
  }
  function Ja(t) {
    var e = t.composed && t.composedPath ? t.composedPath() : null,
      n = e && e.length > 0 ? e[0] : t.target;
    return (
      (Yn = s() + 3e3),
      n && n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    );
  }
  function Ga(t, e, n) {
    void 0 === n && (n = null);
    var a = { id: 0, hash: null, privacy: 2, node: t };
    if (t) {
      var r = ee(t);
      if (null !== r) {
        var i = r.metadata;
        (a.id = r.id),
          (a.hash = r.hash),
          (a.privacy = i.privacy),
          r.region &&
            (function (t, e) {
              var n = te(t),
                a =
                  t in za
                    ? za[t]
                    : {
                        id: t,
                        visibility: 0,
                        interaction: 16,
                        name: La.get(n),
                      },
                r = 16;
              switch (e) {
                case 9:
                  r = 20;
                  break;
                case 27:
                  r = 30;
              }
              Fa(n, a, r, a.visibility);
            })(r.region, e),
          i.fraud && Ot(i.fraud, r.id, n || r.data.value);
      }
    }
    return a;
  }
  function Ka(t, e) {
    return (
      void 0 === e && (e = null),
      at(this, void 0, void 0, function () {
        var n,
          a,
          r,
          i,
          o,
          u,
          c,
          l,
          d,
          f,
          h,
          p,
          v,
          g,
          b,
          w,
          k,
          S,
          E,
          O,
          T,
          N,
          M,
          _,
          C,
          D,
          A,
          j,
          R,
          L,
          z,
          H,
          P,
          W,
          X;
        return rt(this, function (Y) {
          switch (((n = e || s()), (a = [n, t]), t)) {
            case 13:
            case 14:
            case 12:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
              for (r = 0, i = Ge; r < i.length; r++)
                (W = i[r]),
                  (o = Ga(W.data.target, W.event)).id > 0 &&
                    ((a = [W.time, W.event]).push(o.id),
                    a.push(W.data.x),
                    a.push(W.data.y),
                    void 0 !== W.data.id && a.push(W.data.id),
                    dr(a),
                    x(W.event, W.data.x, W.data.y));
              en();
              break;
            case 9:
              for (u = 0, c = Ae; u < c.length; u++)
                (W = c[u]),
                  (l = Ga(W.data.target, W.event, W.data.text)),
                  (a = [W.time, W.event]),
                  (d = l.hash ? l.hash.join(".") : ""),
                  a.push(l.id),
                  a.push(W.data.x),
                  a.push(W.data.y),
                  a.push(W.data.eX),
                  a.push(W.data.eY),
                  a.push(W.data.button),
                  a.push(W.data.reaction),
                  a.push(W.data.context),
                  a.push(m(W.data.text, "click", l.privacy)),
                  a.push(y(W.data.link)),
                  a.push(d),
                  a.push(W.data.trust),
                  dr(a),
                  tr(
                    W.time,
                    W.event,
                    d,
                    W.data.x,
                    W.data.y,
                    W.data.reaction,
                    W.data.context
                  );
              Pe();
              break;
            case 38:
              for (f = 0, h = We; f < h.length; f++)
                (W = h[f]),
                  (a = [W.time, W.event]),
                  (z = Ga(W.data.target, W.event)).id > 0 &&
                    (a.push(z.id), a.push(W.data.action), dr(a));
              Ye();
              break;
            case 11:
              (p = Je),
                a.push(p.width),
                a.push(p.height),
                x(t, p.width, p.height),
                on(),
                dr(a);
              break;
            case 26:
              (v = kn), a.push(v.name), Mn(), dr(a);
              break;
            case 27:
              for (g = 0, b = Ue; g < b.length; g++)
                (W = b[g]),
                  (w = Ga(W.data.target, W.event, W.data.value)),
                  (a = [W.time, W.event]).push(w.id),
                  a.push(m(W.data.value, "input", w.privacy, !1, W.data.type)),
                  dr(a);
              Be();
              break;
            case 21:
              (k = vn) &&
                ((S = Ga(k.start, t)),
                (E = Ga(k.end, t)),
                a.push(S.id),
                a.push(k.startOffset),
                a.push(E.id),
                a.push(k.endOffset),
                wn(),
                dr(a));
              break;
            case 10:
              for (O = 0, T = un; O < T.length; O++)
                (W = T[O]),
                  (N = Ga(W.data.target, W.event)),
                  (M = Ga(W.data.top, W.event)),
                  (_ = Ga(W.data.bottom, W.event)),
                  (C = (null == M ? void 0 : M.hash) ? M.hash.join(".") : ""),
                  (D = (null == _ ? void 0 : _.hash) ? _.hash.join(".") : ""),
                  N.id > 0 &&
                    ((a = [W.time, W.event]).push(N.id),
                    a.push(W.data.x),
                    a.push(W.data.y),
                    a.push(C),
                    a.push(D),
                    dr(a),
                    x(W.event, W.data.x, W.data.y, W.time));
              (un = []), (cn = null), (sn = null);
              break;
            case 42:
              for (A = 0, j = xe; A < j.length; A++)
                (W = j[A]),
                  (a = [W.time, W.event]),
                  (z = Ga(W.data.target, W.event)).id > 0 &&
                    ((a = [W.time, W.event]).push(z.id),
                    a.push(W.data.type),
                    a.push(m(W.data.value, "change", z.privacy)),
                    a.push(m(W.data.checksum, "checksum", z.privacy)),
                    dr(a));
              Ie();
              break;
            case 39:
              for (R = 0, L = En; R < L.length; R++)
                (W = L[R]),
                  (a = [W.time, W.event]),
                  (z = Ga(W.data.target, W.event)).id > 0 &&
                    (a.push(z.id), dr(a));
              Tn();
              break;
            case 22:
              for (H = 0, P = Qa; H < P.length; H++)
                (W = P[H]),
                  (a = [W.time, W.event]).push(W.data.type),
                  a.push(W.data.hash),
                  a.push(W.data.x),
                  a.push(W.data.y),
                  a.push(W.data.reaction),
                  a.push(W.data.context),
                  dr(a, !1);
              $a();
              break;
            case 28:
              (X = Sn), a.push(X.visible), dr(a), I(n, X.visible), _n();
          }
          return [2];
        });
      })
    );
  }
  var Za = [],
    Qa = [];
  function $a() {
    Qa = [];
  }
  function tr(t, e, n, a, r, i, o) {
    void 0 === i && (i = 1),
      void 0 === o && (o = 0),
      Za.push({
        time: t,
        event: 22,
        data: { type: e, hash: n, x: a, y: r, reaction: i, context: o },
      }),
      x(e, a, r);
  }
  var er,
    nr,
    ar,
    rr,
    ir,
    or = 0,
    ur = 0,
    cr = null,
    sr = 0;
  function lr() {
    (rr = !0),
      (or = 0),
      (ur = 0),
      (sr = 0),
      (er = []),
      (nr = []),
      (ar = {}),
      (ir = null);
  }
  function dr(t, e) {
    if ((void 0 === e && (e = !0), rr)) {
      var n = s(),
        a = t.length > 1 ? t[1] : null,
        r = JSON.stringify(t);
      switch (a) {
        case 5:
          or += r.length;
        case 37:
        case 6:
        case 43:
        case 45:
        case 46:
          (ur += r.length), er.push(r);
          break;
        default:
          nr.push(r);
      }
      H(25);
      var i = (function () {
        var t = !1 === o.lean && or > 0 ? 100 : Ei.sequence * o.delay;
        return "string" == typeof o.upload
          ? Math.max(Math.min(t, 3e4), 100)
          : o.delay;
      })();
      n - sr > 2 * i && (Y(cr), (cr = null)),
        e &&
          null === cr &&
          (25 !== a && V(), (cr = X(hr, i)), (sr = n), qr(ur));
    }
  }
  function fr() {
    Y(cr),
      hr(!0),
      (or = 0),
      (ur = 0),
      (sr = 0),
      (er = []),
      (nr = []),
      (ar = {}),
      (ir = null),
      (rr = !1);
  }
  function hr(t) {
    return (
      void 0 === t && (t = !1),
      at(this, void 0, void 0, function () {
        var e, n, a, r, i, u, c, s;
        return rt(this, function (l) {
          switch (l.label) {
            case 0:
              return (
                (cr = null),
                (e =
                  !1 === o.lean &&
                  ur > 0 &&
                  (ur < 1048576 || Ei.sequence > 0)) && W(1, 1),
                qa(),
                (function () {
                  var t = [];
                  Qa = [];
                  for (
                    var e = Ei.start + Ei.duration,
                      n = Math.max(e - 2e3, 0),
                      a = 0,
                      r = Za;
                    a < r.length;
                    a++
                  ) {
                    var i = r[a];
                    i.time >= n && (i.time <= e && Qa.push(i), t.push(i));
                  }
                  (Za = t), Ka(22);
                })(),
                kt(),
                (function () {
                  for (var t = 0, e = pa; t < e.length; t++) {
                    var n = e[t],
                      a = n == document ? -1 : Jt(n),
                      r = a in ha ? ha[a] : null;
                    va(document, r);
                  }
                })(),
                (n = !0 === t),
                (a = JSON.stringify(Ni(n))),
                (r = "[".concat(nr.join(), "]")),
                (i = e ? "[".concat(er.join(), "]") : ""),
                (u = (function (t) {
                  return t.p.length > 0
                    ? '{"e":'
                        .concat(t.e, ',"a":')
                        .concat(t.a, ',"p":')
                        .concat(t.p, "}")
                    : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}");
                })({ e: a, a: r, p: i })),
                n ? ((s = null), [3, 3]) : [3, 1]
              );
            case 1:
              return [4, pt(u)];
            case 2:
              (s = l.sent()), (l.label = 3);
            case 3:
              return (
                P(2, (c = s) ? c.length : u.length),
                pr(u, c, Ei.sequence, n),
                (nr = []),
                e && ((er = []), (ur = 0), (or = 0)),
                [2]
              );
          }
        });
      })
    );
  }
  function pr(t, e, n, a) {
    if ((void 0 === a && (a = !1), "string" == typeof o.upload)) {
      var r = o.upload,
        i = !1;
      if (a && "sendBeacon" in navigator)
        try {
          (i = navigator.sendBeacon.bind(navigator)(r, t)) && gr(n);
        } catch (t) {}
      if (!1 === i) {
        n in ar ? ar[n].attempts++ : (ar[n] = { data: t, attempts: 1 });
        var u = new XMLHttpRequest();
        u.open("POST", r, !0),
          (u.timeout = 15e3),
          (u.ontimeout = function () {
            xi(new Error("".concat("Timeout", " : ").concat(r)));
          }),
          null !== n &&
            (u.onreadystatechange = function () {
              _i(vr)(u, n);
            }),
          (u.withCredentials = !0),
          e
            ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"),
              u.send(e))
            : u.send(t);
      }
    } else if (o.upload) {
      (0, o.upload)(t), gr(n);
    }
  }
  function vr(t, e) {
    var n = ar[e];
    t &&
      4 === t.readyState &&
      n &&
      ((t.status < 200 || t.status > 208) && n.attempts <= 1
        ? t.status >= 400 && t.status < 500
          ? Ur(6)
          : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload),
            pr(n.data, null, e))
        : ((ir = { sequence: e, attempts: n.attempts, status: t.status }),
          n.attempts > 1 && Xr(2),
          200 === t.status &&
            t.responseText &&
            (function (t) {
              for (
                var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e;
                n < a.length;
                n++
              ) {
                var r = a[n],
                  i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                  case "END":
                    Ur(6);
                    break;
                  case "UPGRADE":
                    et("Auto");
                    break;
                  case "ACTION":
                    o.action && i.length > 1 && o.action(i[1]);
                    break;
                  case "EXTRACT":
                    i.length > 1 && Dr(i[1]);
                    break;
                  case "SIGNAL":
                    i.length > 1 && mt(i[1]);
                }
              }
            })(t.responseText),
          0 === t.status && (pr(n.data, null, e, !0), Ur(3)),
          t.status >= 200 && t.status <= 208 && gr(e),
          delete ar[e]));
  }
  function gr(t) {
    1 === t && (hi(), fi());
  }
  var mr,
    yr = {};
  function br(t) {
    var e = t.error || t;
    return (
      e.message in yr || (yr[e.message] = 0),
      yr[e.message]++ >= 5 ||
        (e &&
          e.message &&
          ((mr = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename,
          }),
          wr(31))),
      !0
    );
  }
  function wr(t) {
    return at(this, void 0, void 0, function () {
      var e;
      return rt(this, function (n) {
        switch (((e = [s(), t]), t)) {
          case 31:
            e.push(mr.message),
              e.push(mr.line),
              e.push(mr.column),
              e.push(mr.stack),
              e.push(y(mr.source)),
              dr(e);
            break;
          case 33:
            kr &&
              (e.push(kr.code),
              e.push(kr.name),
              e.push(kr.message),
              e.push(kr.stack),
              e.push(kr.severity),
              dr(e, !1));
            break;
          case 41:
            St &&
              (e.push(St.id),
              e.push(St.target),
              e.push(St.checksum),
              dr(e, !1));
        }
        return [2];
      });
    });
  }
  var kr,
    Sr = {};
  function Er(t, e, n, a, r) {
    void 0 === n && (n = null),
      void 0 === a && (a = null),
      void 0 === r && (r = null);
    var i = n ? "".concat(n, "|").concat(a) : "";
    (t in Sr && Sr[t].indexOf(i) >= 0) ||
      ((kr = { code: t, name: n, message: a, stack: r, severity: e }),
      t in Sr ? Sr[t].push(i) : (Sr[t] = [i]),
      wr(33));
  }
  var Or,
    Tr = {},
    Nr = new Set(),
    Mr = {},
    xr = {},
    _r = {},
    Ir = {};
  function Cr() {
    Rr();
  }
  function Dr(t) {
    try {
      var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
        n = e[0].split(/\|(.*)/),
        a = parseInt(n[0]),
        r = n.length > 1 ? n[1] : "",
        i = e.length > 1 ? JSON.parse(e[1]) : {};
      for (var o in ((Mr[a] = {}),
      (xr[a] = {}),
      (_r[a] = {}),
      (Ir[a] = r),
      i)) {
        var u = parseInt(o),
          c = i[o],
          s = 2;
        switch (
          (c.startsWith("~") ? (s = 0) : c.startsWith("!") && (s = 4), s)
        ) {
          case 0:
            var l = c.substring(1, c.length);
            Mr[a][u] = Hr(l);
            break;
          case 2:
            xr[a][u] = c;
            break;
          case 4:
            var d = c.substring(1, c.length);
            _r[a][u] = d;
        }
      }
    } catch (t) {
      Er(8, 1, t ? t.name : null);
    }
  }
  function Ar(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function jr() {
    try {
      for (var t in Mr) {
        var e = parseInt(t);
        if ("" == Ir[e] || document.querySelector(Ir[e])) {
          var n = Mr[e];
          for (var a in n) {
            var r = parseInt(a),
              i = (h = Pr(Ar(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
            i && Lr(e, r, i);
          }
          var o = xr[e];
          for (var u in o) {
            var c = parseInt(u),
              s = document.querySelectorAll(o[c]);
            if (s)
              Lr(
                e,
                c,
                Array.from(s)
                  .map(function (t) {
                    return t.textContent;
                  })
                  .join("<SEP>")
                  .substring(0, 1e4)
              );
          }
          var l = _r[e];
          for (var d in l) {
            var f = parseInt(d);
            Lr(e, f, $t(l[f]).trim().substring(0, 1e4));
          }
        }
      }
      Nr.size > 0 && Xr(40);
    } catch (t) {
      Er(5, 1, t ? t.name : null);
    }
    var h;
  }
  function Rr() {
    Nr.clear();
  }
  function Lr(t, e, n) {
    var a,
      r = !1;
    t in Tr || ((Tr[t] = {}), (r = !0)),
      (a = _r[t]),
      0 == Object.keys(a).length || (e in Tr[t] && Tr[t][e] == n) || (r = !0),
      (Tr[t][e] = n),
      r && Nr.add(t);
  }
  function zr() {
    Rr();
  }
  function Hr(t) {
    for (var e = [], n = t.split("."); n.length > 0; ) {
      var a = n.shift(),
        r = a.indexOf("["),
        i = a.indexOf("{"),
        o = a.indexOf("}");
      e.push({
        name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
        type: r > 0 ? 1 : i > 0 ? 2 : 3,
        condition: i > 0 ? a.substring(i + 1, o) : null,
      });
    }
    return e;
  }
  function Pr(t, e) {
    if ((void 0 === e && (e = window), 0 == t.length)) return e;
    var n,
      a = t.shift();
    if (e && e[a.name]) {
      var r = e[a.name];
      if (1 !== a.type && Wr(r, a.condition)) n = Pr(t, r);
      else if (Array.isArray(r)) {
        for (var i = [], o = 0, u = r; o < u.length; o++) {
          var c = u[o];
          if (Wr(c, a.condition)) {
            var s = Pr(t, c);
            s && i.push(s);
          }
        }
        n = i;
      }
      return n;
    }
    return null;
  }
  function Wr(t, e) {
    if (e) {
      var n = e.split(":");
      return n.length > 1 ? t[n[0]] == n[1] : t[n[0]];
    }
    return !0;
  }
  function Xr(t) {
    var e = [s(), t];
    switch (t) {
      case 4:
        var n = O;
        n &&
          ((e = [n.time, n.event]).push(n.data.visible),
          e.push(n.data.docWidth),
          e.push(n.data.docHeight),
          e.push(n.data.screenWidth),
          e.push(n.data.screenHeight),
          e.push(n.data.scrollX),
          e.push(n.data.scrollY),
          e.push(n.data.pointerX),
          e.push(n.data.pointerY),
          e.push(n.data.activityTime),
          e.push(n.data.scrollTime),
          dr(e, !1)),
          M();
        break;
      case 25:
        e.push(R.gap), dr(e);
        break;
      case 35:
        e.push(Or.check), dr(e, !1);
        break;
      case 3:
        e.push(tt.key), dr(e);
        break;
      case 2:
        e.push(ir.sequence), e.push(ir.attempts), e.push(ir.status), dr(e, !1);
        break;
      case 24:
        A.key && e.push(A.key), e.push(A.value), dr(e);
        break;
      case 34:
        var a = Object.keys(it);
        if (a.length > 0) {
          for (var r = 0, i = a; r < i.length; r++) {
            var o = i[r];
            e.push(o), e.push(it[o]);
          }
          lt(), dr(e, !1);
        }
        break;
      case 0:
        var u = Object.keys(z);
        if (u.length > 0) {
          for (var c = 0, l = u; c < l.length; c++) {
            var d = l[c],
              f = parseInt(d, 10);
            e.push(f), e.push(Math.round(z[d]));
          }
          (z = {}), dr(e, !1);
        }
        break;
      case 1:
        var h = Object.keys(Jr);
        if (h.length > 0) {
          for (var p = 0, v = h; p < v.length; p++) {
            var g = v[p];
            f = parseInt(g, 10);
            e.push(f), e.push(Jr[g]);
          }
          ti(), dr(e, !1);
        }
        break;
      case 36:
        var m = Object.keys(G);
        if (m.length > 0) {
          for (var y = 0, b = m; y < b.length; y++) {
            var w = b[y];
            f = parseInt(w, 10);
            e.push(f), e.push([].concat.apply([], G[w]));
          }
          Q(), dr(e, !1);
        }
        break;
      case 40:
        Nr.forEach(function (t) {
          e.push(t);
          var n = [];
          for (var a in Tr[t]) {
            var r = parseInt(a, 10);
            n.push(r), n.push(Tr[t][a]);
          }
          e.push(n);
        }),
          Rr(),
          dr(e, !1);
    }
  }
  function Yr() {
    Or = { check: 0 };
  }
  function qr(t) {
    if (0 === Or.check) {
      var e = Or.check;
      (e = Ei.sequence >= 128 ? 1 : e),
        (e = Ei.pageNum >= 128 ? 7 : e),
        (e = s() > 72e5 ? 2 : e),
        (e = t > 10485760 ? 2 : e) !== Or.check && Ur(e);
    }
  }
  function Ur(t) {
    (Or.check = t), 5 !== t && (di(), go());
  }
  function Fr() {
    0 !== Or.check && Xr(35);
  }
  function Vr() {
    Or = null;
  }
  var Br = null,
    Jr = null,
    Gr = !1;
  function Kr() {
    (Br = {}), (Jr = {}), (Gr = !1);
  }
  function Zr() {
    (Br = {}), (Jr = {}), (Gr = !1);
  }
  function Qr(t, e) {
    if (
      e &&
      ((e = "".concat(e)), t in Br || (Br[t] = []), Br[t].indexOf(e) < 0)
    ) {
      if (Br[t].length > 128) return void (Gr || ((Gr = !0), Ur(5)));
      Br[t].push(e), t in Jr || (Jr[t] = []), Jr[t].push(e);
    }
  }
  function $r() {
    Xr(1);
  }
  function ti() {
    (Jr = {}), (Gr = !1);
  }
  function ei(t) {
    Qr(36, t.toString());
  }
  var ni = null,
    ai = [],
    ri = 0,
    ii = null;
  function oi() {
    var t, e, n;
    ii = null;
    var a = navigator && "userAgent" in navigator ? navigator.userAgent : "",
      r =
        null !==
          (n =
            null ===
              (e =
                null ===
                  (t =
                    null === Intl || void 0 === Intl
                      ? void 0
                      : Intl.DateTimeFormat()) || void 0 === t
                  ? void 0
                  : t.resolvedOptions()) || void 0 === e
              ? void 0
              : e.timeZone) && void 0 !== n
          ? n
          : "",
      i = new Date().getTimezoneOffset().toString(),
      u = window.location.ancestorOrigins
        ? Array.from(window.location.ancestorOrigins).toString()
        : "",
      c = document && document.title ? document.title : "";
    ri = a.indexOf("Electron") > 0 ? 1 : 0;
    var s,
      l = (function () {
        var t = {
            session: gi(),
            ts: Math.round(Date.now()),
            count: 1,
            upgrade: null,
            upload: "",
          },
          e = bi("_clsk");
        if (e) {
          var n = e.split("|");
          n.length >= 5 &&
            t.ts - mi(n[1]) < 18e5 &&
            ((t.session = n[0]),
            (t.count = mi(n[2]) + 1),
            (t.upgrade = mi(n[3])),
            (t.upload =
              n.length >= 6
                ? "".concat("https://").concat(n[5], "/").concat(n[4])
                : "".concat("https://").concat(n[4])));
        }
        return t;
      })(),
      f = yi(),
      h = o.projectId || d(location.host);
    (ni = {
      projectId: h,
      userId: f.id,
      sessionId: l.session,
      pageNum: l.count,
    }),
      (o.lean = o.track && null !== l.upgrade ? 0 === l.upgrade : o.lean),
      (o.upload =
        o.track &&
        "string" == typeof o.upload &&
        l.upload &&
        l.upload.length > "https://".length
          ? l.upload
          : o.upload),
      Qr(0, a),
      Qr(3, c),
      Qr(1, y(location.href, !!ri)),
      Qr(2, document.referrer),
      Qr(
        15,
        (function () {
          var t = gi();
          if (o.track && pi(window, "sessionStorage")) {
            var e = sessionStorage.getItem("_cltk");
            (t = e || t), sessionStorage.setItem("_cltk", t);
          }
          return t;
        })()
      ),
      Qr(16, document.documentElement.lang),
      Qr(17, document.dir),
      Qr(26, "".concat(window.devicePixelRatio)),
      Qr(28, f.dob.toString()),
      Qr(29, f.version.toString()),
      Qr(33, u),
      Qr(34, r),
      Qr(35, i),
      W(0, l.ts),
      W(1, 0),
      W(35, ri),
      navigator &&
        (Qr(9, navigator.language),
        W(33, navigator.hardwareConcurrency),
        W(32, navigator.maxTouchPoints),
        W(34, Math.round(navigator.deviceMemory)),
        (s = navigator.userAgentData) && s.getHighEntropyValues
          ? s
              .getHighEntropyValues([
                "model",
                "platform",
                "platformVersion",
                "uaFullVersion",
              ])
              .then(function (t) {
                var e;
                Qr(22, t.platform),
                  Qr(23, t.platformVersion),
                  null === (e = t.brands) ||
                    void 0 === e ||
                    e.forEach(function (t) {
                      Qr(24, t.name + "~" + t.version);
                    }),
                  Qr(25, t.model),
                  W(27, t.mobile ? 1 : 0);
              })
          : Qr(22, navigator.platform)),
      screen &&
        (W(14, Math.round(screen.width)),
        W(15, Math.round(screen.height)),
        W(16, Math.round(screen.colorDepth)));
    for (var p = 0, v = o.cookies; p < v.length; p++) {
      var g = v[p],
        m = bi(g);
      m && ot(g, m);
    }
    !(function (t) {
      ei(t ? 1 : 0);
    })(o.track),
      vi(f);
  }
  function ui() {
    (ii = null),
      (ni = null),
      ai.forEach(function (t) {
        t.called = !1;
      });
  }
  function ci(t, e, n) {
    void 0 === e && (e = !0), void 0 === n && (n = !1);
    var a = o.lean ? 0 : 1,
      r = !1;
    ni && (a || !1 === e) && (t(ni, !o.lean), (r = !0)),
      (!n && r) || ai.push({ callback: t, wait: e, recall: n, called: r });
  }
  function si() {
    return ni ? [ni.userId, ni.sessionId, ni.pageNum].join(".") : "";
  }
  function li(t) {
    if ((void 0 === t && (t = !0), !t))
      return (
        (o.track = !1),
        ki("_clsk", "", -Number.MAX_VALUE),
        ki("_clck", "", -Number.MAX_VALUE),
        go(),
        void window.setTimeout(vo, 250)
      );
    Ui() && ((o.track = !0), vi(yi(), 1), hi(), ei(2));
  }
  function di() {
    ki("_clsk", "", 0);
  }
  function fi() {
    !(function (t) {
      if (ai.length > 0)
        for (var e = 0; e < ai.length; e++) {
          var n = ai[e];
          !n.callback ||
            n.called ||
            (n.wait && !t) ||
            (n.callback(ni, !o.lean),
            (n.called = !0),
            n.recall || (ai.splice(e, 1), e--));
        }
    })(o.lean ? 0 : 1);
  }
  function hi() {
    if (ni) {
      var t = Math.round(Date.now()),
        e =
          o.upload && "string" == typeof o.upload
            ? o.upload.replace("https://", "")
            : "",
        n = o.lean ? 0 : 1;
      ki("_clsk", [ni.sessionId, t, ni.pageNum, n, e].join("|"), 1);
    }
  }
  function pi(t, e) {
    try {
      return !!t[e];
    } catch (t) {
      return !1;
    }
  }
  function vi(t, e) {
    void 0 === e && (e = null), (e = null === e ? t.consent : e);
    var n = Math.ceil((Date.now() + 31536e6) / 864e5),
      a = 0 === t.dob ? (null === o.dob ? 0 : o.dob) : t.dob;
    (null === t.expiry ||
      Math.abs(n - t.expiry) >= 1 ||
      t.consent !== e ||
      t.dob !== a) &&
      ki("_clck", [ni.userId, 2, n.toString(36), e, a].join("|"), 365);
  }
  function gi() {
    var t = Math.floor(Math.random() * Math.pow(2, 32));
    return (
      window &&
        window.crypto &&
        window.crypto.getRandomValues &&
        Uint32Array &&
        (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
      t.toString(36)
    );
  }
  function mi(t, e) {
    return void 0 === e && (e = 10), parseInt(t, e);
  }
  function yi() {
    var t = { id: gi(), version: 0, expiry: null, consent: 0, dob: 0 },
      e = bi("_clck");
    if (e && e.length > 0) {
      for (
        var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";");
        r < i.length;
        r++
      ) {
        a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0;
      }
      if (1 === n.length || a > 1) {
        var u = ""
          .concat(";")
          .concat("expires=")
          .concat(new Date(0).toUTCString())
          .concat(";path=/");
        (document.cookie = "".concat("_clck", "=").concat(u)),
          (document.cookie = "".concat("_clsk", "=").concat(u));
      }
      n.length > 1 && (t.version = mi(n[1])),
        n.length > 2 && (t.expiry = mi(n[2], 36)),
        n.length > 3 && 1 === mi(n[3]) && (t.consent = 1),
        n.length > 4 && mi(n[1]) > 1 && (t.dob = mi(n[4])),
        (o.track = o.track || 1 === t.consent),
        (t.id = o.track ? n[0] : t.id);
    }
    return t;
  }
  function bi(t) {
    var e;
    if (pi(document, "cookie")) {
      var n = document.cookie.split(";");
      if (n)
        for (var a = 0; a < n.length; a++) {
          var r = n[a].split("=");
          if (r.length > 1 && r[0] && r[0].trim() === t) {
            for (var i = wi(r[1]), o = i[0], u = i[1]; o; )
              (o = (e = wi(u))[0]), (u = e[1]);
            return u;
          }
        }
    }
    return null;
  }
  function wi(t) {
    try {
      var e = decodeURIComponent(t);
      return [e != t, e];
    } catch (t) {}
    return [!1, t];
  }
  function ki(t, e, n) {
    if (
      (o.track || "" == e) &&
      ((navigator && navigator.cookieEnabled) || pi(document, "cookie"))
    ) {
      var a = (function (t) {
          return encodeURIComponent(t);
        })(e),
        r = new Date();
      r.setDate(r.getDate() + n);
      var i = r ? "expires=" + r.toUTCString() : "",
        u = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
      try {
        if (null === ii) {
          for (
            var c = location.hostname ? location.hostname.split(".") : [],
              s = c.length - 1;
            s >= 0;
            s--
          )
            if (
              ((ii = ".".concat(c[s]).concat(ii || "")),
              s < c.length - 1 &&
                ((document.cookie = ""
                  .concat(u)
                  .concat(";")
                  .concat("domain=")
                  .concat(ii)),
                bi(t) === e))
            )
              return;
          ii = "";
        }
      } catch (t) {
        ii = "";
      }
      document.cookie = ii
        ? "".concat(u).concat(";").concat("domain=").concat(ii)
        : u;
    }
  }
  var Si,
    Ei = null;
  function Oi() {
    var t = ni;
    Ei = {
      version: l,
      sequence: 0,
      start: 0,
      duration: 0,
      projectId: t.projectId,
      userId: t.userId,
      sessionId: t.sessionId,
      pageNum: t.pageNum,
      upload: 0,
      end: 0,
    };
  }
  function Ti() {
    Ei = null;
  }
  function Ni(t) {
    return (
      (Ei.start = Ei.start + Ei.duration),
      (Ei.duration = s() - Ei.start),
      Ei.sequence++,
      (Ei.upload = t && "sendBeacon" in navigator ? 1 : 0),
      (Ei.end = t ? 1 : 0),
      [
        Ei.version,
        Ei.sequence,
        Ei.start,
        Ei.duration,
        Ei.projectId,
        Ei.userId,
        Ei.sessionId,
        Ei.pageNum,
        Ei.upload,
        Ei.end,
      ]
    );
  }
  function Mi() {
    Si = [];
  }
  function xi(t) {
    if (Si && -1 === Si.indexOf(t.message)) {
      var e = o.report;
      if (e && e.length > 0) {
        var n = {
          v: Ei.version,
          p: Ei.projectId,
          u: Ei.userId,
          s: Ei.sessionId,
          n: Ei.pageNum,
        };
        t.message && (n.m = t.message), t.stack && (n.e = t.stack);
        var a = new XMLHttpRequest();
        a.open("POST", e, !0), a.send(JSON.stringify(n)), Si.push(t.message);
      }
    }
    return t;
  }
  function _i(t) {
    return function () {
      var e = performance.now();
      try {
        t.apply(this, arguments);
      } catch (t) {
        throw xi(t);
      }
      var n = performance.now() - e;
      P(4, n), n > o.longTask && (H(7), W(6, n));
    };
  }
  var Ii = [];
  function Ci(t, e, n, a) {
    void 0 === a && (a = !1), (n = _i(n));
    try {
      t[u("addEventListener")](e, n, a),
        Ii.push({ event: e, target: t, listener: n, capture: a });
    } catch (t) {}
  }
  function Di() {
    for (var t = 0, e = Ii; t < e.length; t++) {
      var n = e[t];
      try {
        n.target[u("removeEventListener")](n.event, n.listener, n.capture);
      } catch (t) {}
    }
    Ii = [];
  }
  var Ai = null,
    ji = null,
    Ri = null,
    Li = 0;
  function zi() {
    return !(Li++ > 20) || (Er(4, 0), !1);
  }
  function Hi() {
    (Li = 0), Ri !== Wi() && (go(), window.setTimeout(Pi, 250));
  }
  function Pi() {
    vo(), W(29, 1);
  }
  function Wi() {
    return location.href
      ? location.href.replace(location.hash, "")
      : location.href;
  }
  var Xi = !1;
  function Yi() {
    (Xi = !0),
      (c = performance.now() + performance.timeOrigin),
      ve(),
      Di(),
      Mi(),
      (Ri = Wi()),
      (Li = 0),
      Ci(window, "popstate", Hi),
      null === Ai &&
        ((Ai = history.pushState),
        (history.pushState = function () {
          Ai.apply(this, arguments), Ui() && zi() && Hi();
        })),
      null === ji &&
        ((ji = history.replaceState),
        (history.replaceState = function () {
          ji.apply(this, arguments), Ui() && zi() && Hi();
        }));
  }
  function qi() {
    (Ri = null), (Li = 0), Mi(), Di(), ve(), (c = 0), (Xi = !1);
  }
  function Ui() {
    return Xi;
  }
  function Fi() {
    vo(), j("clarity", "restart");
  }
  var Vi = Object.freeze({
    __proto__: null,
    start: function () {
      !(function () {
        (Et = []), W(26, navigator.webdriver ? 1 : 0);
        try {
          W(31, window.top == window.self || window.top == window ? 1 : 2);
        } catch (t) {
          W(31, 0);
        }
      })(),
        Ci(window, "error", br),
        (yr = {}),
        (Sr = {});
    },
    stop: function () {
      Sr = {};
    },
  });
  function Bi() {
    return at(this, void 0, void 0, function () {
      var t, e;
      return rt(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = s()),
              be((e = { id: si(), cost: 3 })),
              [4, Dn(document, e, 0, t)]
            );
          case 1:
            return n.sent(), va(document, t), [4, Ca(5, e, t)];
          case 2:
            return n.sent(), we(e), [2];
        }
      });
    });
  }
  var Ji = Object.freeze({
    __proto__: null,
    hashText: $t,
    start: function () {
      Ne(),
        Me(),
        Ba(),
        (Wa = null),
        (La = new WeakMap()),
        (za = {}),
        (Ha = []),
        (Pa = !!window.IntersectionObserver),
        Ut(),
        o.delayDom
          ? Ci(window, "load", function () {
              Un();
            })
          : Un(),
        ge(Bi, 1).then(function () {
          _i(Me)(), _i(qa)(), _i(pn)();
        }),
        null === ca &&
          ((ca = CSSStyleSheet.prototype.replace),
          (CSSStyleSheet.prototype.replace = function () {
            return (
              Ui() &&
                (W(36, 1),
                this[da] === ni.pageNum && ma(s(), this[la], 1, arguments[0])),
              ca.apply(this, arguments)
            );
          })),
        null === sa &&
          ((sa = CSSStyleSheet.prototype.replaceSync),
          (CSSStyleSheet.prototype.replaceSync = function () {
            return (
              Ui() &&
                (W(36, 1),
                this[da] === ni.pageNum && ma(s(), this[la], 2, arguments[0])),
              sa.apply(this, arguments)
            );
          })),
        (function () {
          if (
            window.Animation &&
            window.KeyframeEffect &&
            window.KeyframeEffect.prototype.getKeyframes &&
            window.KeyframeEffect.prototype.getTiming &&
            (Ma(),
            _a(wa, "play"),
            _a(ka, "pause"),
            _a(Sa, "cancel"),
            _a(Ea, "finish"),
            null === ba &&
              ((ba = Element.prototype.animate),
              (Element.prototype.animate = function () {
                var t = ba.apply(this, arguments);
                return Ia(t, "play"), t;
              })),
            document.getAnimations)
          )
            for (var t = 0, e = document.getAnimations(); t < e.length; t++) {
              var n = e[t];
              "finished" === n.playState
                ? Ia(n, "finish")
                : "paused" === n.playState || "idle" === n.playState
                ? Ia(n, "pause")
                : "running" === n.playState && Ia(n, "play");
            }
        })();
    },
    stop: function () {
      Ba(),
        (La = null),
        (za = {}),
        (Ha = []),
        Wa && (Wa.disconnect(), (Wa = null)),
        (Pa = !1),
        Ft(),
        (function () {
          for (var t = 0, e = An; t < e.length; t++) {
            var n = e[t];
            n && n.disconnect();
          }
          (An = []), (qn = {}), (jn = []), (Wn = []), (Yn = 0), (Xn = null);
        })(),
        Ne(),
        (fa = {}),
        (ha = {}),
        (pa = []),
        ga(),
        Ma();
    },
  });
  var Gi = null;
  function Ki() {
    Gi = null;
  }
  function Zi(t) {
    (Gi = {
      fetchStart: Math.round(t.fetchStart),
      connectStart: Math.round(t.connectStart),
      connectEnd: Math.round(t.connectEnd),
      requestStart: Math.round(t.requestStart),
      responseStart: Math.round(t.responseStart),
      responseEnd: Math.round(t.responseEnd),
      domInteractive: Math.round(t.domInteractive),
      domComplete: Math.round(t.domComplete),
      loadEventStart: Math.round(t.loadEventStart),
      loadEventEnd: Math.round(t.loadEventEnd),
      redirectCount: Math.round(t.redirectCount),
      size: t.transferSize ? t.transferSize : 0,
      type: t.type,
      protocol: t.nextHopProtocol,
      encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
      decodedSize: t.decodedBodySize ? t.decodedBodySize : 0,
    }),
      (function (t) {
        at(this, void 0, void 0, function () {
          var e, n;
          return rt(this, function (a) {
            return (
              (e = s()),
              (n = [e, t]),
              29 === t &&
                (n.push(Gi.fetchStart),
                n.push(Gi.connectStart),
                n.push(Gi.connectEnd),
                n.push(Gi.requestStart),
                n.push(Gi.responseStart),
                n.push(Gi.responseEnd),
                n.push(Gi.domInteractive),
                n.push(Gi.domComplete),
                n.push(Gi.loadEventStart),
                n.push(Gi.loadEventEnd),
                n.push(Gi.redirectCount),
                n.push(Gi.size),
                n.push(Gi.type),
                n.push(Gi.protocol),
                n.push(Gi.encodedSize),
                n.push(Gi.decodedSize),
                Ki(),
                dr(n)),
              [2]
            );
          });
        });
      })(29);
  }
  var Qi,
    $i = 0,
    to = 1 / 0,
    eo = 0,
    no = 0,
    ao = [],
    ro = new Map(),
    io = function () {
      return $i || 0;
    },
    oo = function () {
      if (!ao.length) return -1;
      var t = Math.min(ao.length - 1, Math.floor((io() - no) / 50));
      return ao[t].latency;
    },
    uo = function () {
      (no = io()), (ao.length = 0), ro.clear();
    },
    co = function (t) {
      if (t.interactionId && !(t.duration < 40)) {
        !(function (t) {
          "interactionCount" in performance
            ? ($i = performance.interactionCount)
            : t.interactionId &&
              ((to = Math.min(to, t.interactionId)),
              (eo = Math.max(eo, t.interactionId)),
              ($i = eo ? (eo - to) / 7 + 1 : 0));
        })(t);
        var e = ao[ao.length - 1],
          n = ro.get(t.interactionId);
        if (
          n ||
          ao.length < 10 ||
          t.duration > (null == e ? void 0 : e.latency)
        ) {
          if (n) t.duration > n.latency && (n.latency = t.duration);
          else {
            var a = { id: t.interactionId, latency: t.duration };
            ro.set(a.id, a), ao.push(a);
          }
          ao.sort(function (t, e) {
            return e.latency - t.latency;
          }),
            ao.length > 10 &&
              ao.splice(10).forEach(function (t) {
                return ro.delete(t.id);
              });
        }
      }
    },
    so = [
      "navigation",
      "resource",
      "longtask",
      "first-input",
      "layout-shift",
      "largest-contentful-paint",
      "event",
    ];
  function lo() {
    try {
      Qi && Qi.disconnect(), (Qi = new PerformanceObserver(_i(fo)));
      for (var t = 0, e = so; t < e.length; t++) {
        var n = e[t];
        PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 &&
          ("layout-shift" === n && P(9, 0),
          Qi.observe({ type: n, buffered: !0 }));
      }
    } catch (t) {
      Er(3, 1);
    }
  }
  function fo(t) {
    !(function (t) {
      for (
        var e =
            !("visibilityState" in document) ||
            "visible" === document.visibilityState,
          n = 0;
        n < t.length;
        n++
      ) {
        var a = t[n];
        switch (a.entryType) {
          case "navigation":
            Zi(a);
            break;
          case "resource":
            var r = a.name;
            Qr(4, ho(r)),
              (r !== o.upload && r !== o.fallback) || W(28, a.duration);
            break;
          case "longtask":
            H(7);
            break;
          case "first-input":
            e && W(10, a.processingStart - a.startTime);
            break;
          case "event":
            e &&
              "PerformanceEventTiming" in window &&
              "interactionId" in PerformanceEventTiming.prototype &&
              (co(a), Qr(37, oo().toString()));
            break;
          case "layout-shift":
            e && !a.hadRecentInput && P(9, 1e3 * a.value);
            break;
          case "largest-contentful-paint":
            e && W(8, a.startTime);
        }
      }
    })(t.getEntries());
  }
  function ho(t) {
    var e = document.createElement("a");
    return (e.href = t), e.host;
  }
  var po = [
    Vi,
    Ji,
    Cn,
    Object.freeze({
      __proto__: null,
      start: function () {
        Ki(),
          (function () {
            navigator &&
              "connection" in navigator &&
              Qr(27, navigator.connection.effectiveType),
              window.PerformanceObserver &&
              PerformanceObserver.supportedEntryTypes
                ? "complete" !== document.readyState
                  ? Ci(window, "load", X.bind(this, lo, 0))
                  : lo()
                : Er(3, 0);
          })();
      },
      stop: function () {
        Qi && Qi.disconnect(), (Qi = null), uo(), Ki();
      },
    }),
  ];
  function vo(t) {
    void 0 === t && (t = null),
      (function () {
        try {
          var t =
            navigator &&
            "globalPrivacyControl" in navigator &&
            1 == navigator.globalPrivacyControl;
          return (
            !1 === Xi &&
            "undefined" != typeof Promise &&
            window.MutationObserver &&
            document.createTreeWalker &&
            "now" in Date &&
            "now" in performance &&
            "undefined" != typeof WeakMap &&
            !t
          );
        } catch (t) {
          return !1;
        }
      })() &&
        (!(function (t) {
          if (null === t || Xi) return !1;
          for (var e in t) e in o && (o[e] = t[e]);
        })(t),
        Yi(),
        bt(),
        po.forEach(function (t) {
          return _i(t.start)();
        }),
        null === t && wo());
  }
  function go() {
    Ui() &&
      (po
        .slice()
        .reverse()
        .forEach(function (t) {
          return _i(t.stop)();
        }),
      wt(),
      qi(),
      void 0 !== yo &&
        (yo[bo] = function () {
          (yo[bo].q = yo[bo].q || []).push(arguments),
            "start" === arguments[0] &&
              yo[bo].q.unshift(yo[bo].q.pop()) &&
              wo();
        }));
  }
  var mo = Object.freeze({
      __proto__: null,
      consent: li,
      event: j,
      hashText: $t,
      identify: ut,
      metadata: ci,
      pause: function () {
        Ui() &&
          (j("clarity", "pause"),
          null === he &&
            (he = new Promise(function (t) {
              pe = t;
            })));
      },
      resume: function () {
        Ui() &&
          (he && (pe(), (he = null), null === fe && me()),
          j("clarity", "resume"));
      },
      set: ot,
      signal: function (t) {
        gt = t;
      },
      start: vo,
      stop: go,
      upgrade: et,
      version: l,
    }),
    yo = window,
    bo = "clarity";
  function wo() {
    if (void 0 !== yo) {
      if (yo[bo] && yo[bo].v)
        return console.warn("Error CL001: Multiple Clarity tags detected.");
      var t = (yo[bo] && yo[bo].q) || [];
      for (
        yo[bo] = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          return mo[t].apply(mo, e);
        },
          yo[bo].v = l;
        t.length > 0;

      )
        yo[bo].apply(yo, t.shift());
    }
  }
  wo();
})();
