let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };
  });
}

//

!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function () {
  "use strict";
  const t = t => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
          let i = t.getAttribute("href");
          if (!i || !i.includes("#") && !i.startsWith("."))
              return null;
          i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
              e = i && "#" !== i ? i.trim() : null
      }
      return e
  }
      , e = e => {
          const i = t(e);
          return i && document.querySelector(i) ? i : null
      }
      , i = e => {
          const i = t(e);
          return i ? document.querySelector(i) : null
      }
      , n = t => {
          t.dispatchEvent(new Event("transitionend"))
      }
      , s = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
          void 0 !== t.nodeType)
      , o = t => s(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
      , r = (t, e, i) => {
          Object.keys(i).forEach(n => {
              const o = i[n]
                  , r = e[n]
                  , a = r && s(r) ? "element" : null == (l = r) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
              var l;
              if (!new RegExp(o).test(a))
                  throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${o}".`)
          }
          )
      }
      , a = t => !(!s(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
      , l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , c = t => { }
      , h = () => { }
      , d = t => {
          t.offsetHeight
      }
      , u = () => {
          const { jQuery: t } = window;
          return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
      }
      , f = []
      , p = () => "rtl" === document.documentElement.dir
      , m = t => {
          var e;
          e = () => {
              const e = u();
              if (e) {
                  const i = t.NAME
                      , n = e.fn[i];
                  e.fn[i] = t.jQueryInterface,
                      e.fn[i].Constructor = t,
                      e.fn[i].noConflict = () => (e.fn[i] = n)
              }
          }
              ,
              "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
                  f.forEach(t => t())
              }
              ),
                  f.push(e)) : e()
      }
      , g = t => {
          "function" == typeof t && t()
      }
      , _ = (t, e, i = !0) => {
          if (!i)
              return void g(t);
          const s = (t => {
              if (!t)
                  return 0;
              let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
              const n = Number.parseFloat(e)
                  , s = Number.parseFloat(i);
              return n || s ? (e = e.split(",")[0],
                  i = i.split(",")[0],
                  1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
          }
          )(e) + 5;
          let o = !1;
          const r = ({ target: i }) => {
              i === e && (o = !0,
                  e.removeEventListener("transitionend", r),
                  g(t))
          }
              ;
          e.addEventListener("transitionend", r),
              setTimeout(() => {
                  o || n(e)
              }
                  , s)
      }
      , b = (t, e, i, n) => { }
      , v = /[^.]*(?=\..*)\.|.*/
      , y = /\..*/
      , w = /::\d+$/
      , E = {};
  let A = 1;
  const T = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
  }
      , O = /^(mouseenter|mouseleave)/i
      , C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function k(t, e) {
      return e && `${e}::${A++}` || t.uidEvent || A++
  }
  function L(t) {
      const e = k(t);
      return t.uidEvent = e,
          E[e] = E[e] || {},
          E[e]
  }
  function x(t, e, i = null) {
      const n = Object.keys(t);
      for (let s = 0, o = n.length; s < o; s++) {
          const o = t[n[s]];
          if (o.originalHandler === e && o.delegationSelector === i)
              return o
      }
      return null
  }
  function D(t, e, i) {
      const n = "string" == typeof e
          , s = n ? i : e;
      let o = I(t);
      return C.has(o) || (o = t),
          [n, s, o]
  }
  function S(t, e, i, n, s) {
      if ("string" != typeof e || !t)
          return;
      if (i || (i = n,
          n = null),
          O.test(e)) {
          const t = t => function (e) { }
              ;
          n ? n = t(n) : i = t(i)
      }
      const [o, r, a] = D(e, i, n)
          , l = L(t)
          , c = l[a] || (l[a] = {})
          , h = x(c, r, o ? i : null);
      if (h)
          return void (h.oneOff = h.oneOff && s);
      const d = k(r, e.replace(v, ""))
          , u = o ? function (t, e, i) {
              return function n(s) {
                  const o = t.querySelectorAll(e);
                  for (let { target: r } = s; r && r !== this; r = r.parentNode)
                      for (let a = o.length; a--;)
                          if (o[a] === r)
                              return s.delegateTarget = r,
                                  n.oneOff && P.off(t, s.type, e, i),
                                  i.apply(r, [s]);
                  return null
              }
          }(t, i, n) : function (t, e) {
              return function i(n) {
                  return n.delegateTarget = t,
                      i.oneOff && P.off(t, n.type, e),
                      e.apply(t, [n])
              }
          }(t, i);
      u.delegationSelector = o ? i : null,
          u.originalHandler = r,
          u.oneOff = s,
          u.uidEvent = d,
          c[d] = u,
          t.addEventListener(a, u, o)
  }
  function I(t) {
      return t = t.replace(y, ""),
          T[t] || t
  }
  const P = {
      on(t, e, i, n) {
          S(t, e, i, n, !1)
      },
      trigger(t, e, i) {
          if ("string" != typeof e || !t)
              return null;
          const n = u()
              , s = I(e)
              , o = e !== s
              , r = C.has(s);
          let a, l = !0, c = !0, h = !1, d = null;
          return o && n && (a = n.Event(e, i),
              n(t).trigger(a),
              l = !a.isPropagationStopped(),
              c = !a.isImmediatePropagationStopped(),
              h = a.isDefaultPrevented()),
              r ? (d = document.createEvent("HTMLEvents"),
                  d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
                      bubbles: l,
                      cancelable: !0
                  }),
              void 0 !== i && Object.keys(i).forEach(t => { }
              ),
              h && d.preventDefault(),
              c && t.dispatchEvent(d),
              d.defaultPrevented && void 0 !== a && a.preventDefault(),
              d
      }
  }
      , j = new Map;
  var M = {
      set(t, e, i) {
          j.has(t) || j.set(t, new Map);
          const n = j.get(t);
          n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
      },
      get: (t, e) => j.has(t) && j.get(t).get(e) || null,
  };
  class H {
      constructor(t) {
          (t = o(t)) && (this._element = t,
              M.set(this._element, this.constructor.DATA_KEY, this))
      }
      _queueCallback(t, e, i = !0) {
          _(t, e, i)
      }
      static getInstance(t) {
          return M.get(o(t), this.DATA_KEY)
      }
      static getOrCreateInstance(t, e = {}) {
          return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      }
      static get VERSION() { }
      static get NAME() { }
      static get DATA_KEY() {
          return "bs." + this.NAME
      }
      static get EVENT_KEY() {
          return "." + this.DATA_KEY
      }
  }
  const B = (t, e = "hide") => {
      const n = "click.dismiss" + t.EVENT_KEY
          , s = t.NAME;
      P.on(document, n, `[data-bs-dismiss="${s}"]`, (function (n) { }
      ))
  }
      ;
  class R extends H {
      static get NAME() {
          return "alert"
      }
      static jQueryInterface(t) { }
  }
  B(R, "close"),
      m(R);
  class W extends H {
      static get NAME() { }
      static jQueryInterface(t) { }
  }
  function z(t) {
      return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
  }
  P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => { }
  ),
      m(W);
  const F = {
      getDataAttributes(t) {
          if (!t)
              return {};
          const e = {};
          return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
              let n = i.replace(/^bs/, "");
              n = n.charAt(0).toLowerCase() + n.slice(1, n.length),
                  e[n] = z(t.dataset[i])
          }
          ),
              e
      },
      getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + q(e))),
      position: t => ({})
  }
      , U = {
          find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
          findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
          children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
      }
      , $ = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0
      }
      , V = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean"
      }
      , K = "next"
      , X = "prev"
      , Y = "left"
      , Q = "right"
      , G = {
          ArrowLeft: Q,
          ArrowRight: Y
      };
  class Z extends H {
      static get Default() { }
      static get NAME() { }
      static carouselInterface(t, e) { }
      static jQueryInterface(t) { }
      static dataApiClickHandler(t) { }
  }
  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler),
      P.on(window, "load.bs.carousel.data-api", () => {
          const t = U.find('[data-bs-ride="carousel"]');
          for (let e = 0, i = t.length; e < i; e++)
              Z.carouselInterface(t[e], Z.getInstance(t[e]))
      }
      ),
      m(Z);
  const J = {
      toggle: !0,
      parent: null
  }
      , tt = {
          toggle: "boolean",
          parent: "(null|element)"
      };
  class et extends H {
      constructor(t, i) {
          super(t),
              this._isTransitioning = !1,
              this._config = this._getConfig(i),
              this._triggerArray = [];
          const n = U.find('[data-bs-toggle="collapse"]');
          for (let t = 0, i = n.length; t < i; t++) {
              const i = n[t]
                  , s = e(i)
                  , o = U.find(s).filter(t => t === this._element);
              null !== s && o.length && (this._selector = s,
                  this._triggerArray.push(i))
          }
          this._initializeChildren(),
              this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
              this._config.toggle && this.toggle()
      }
      static get Default() { }
      static get NAME() {
          return "collapse"
      }
      toggle() {
          this._isShown() ? this.hide() : this.show()
      }
      show() {
          if (this._isTransitioning || this._isShown())
              return;
          let t, e = [];
          if (this._config.parent) {
              const t = U.find(".collapse .collapse", this._config.parent);
              e = U.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(e => !t.includes(e))
          }
          const i = U.findOne(this._selector);
          if (e.length) {
              const n = e.find(t => i !== t);
              if (t = n ? et.getInstance(n) : null,
                  t && t._isTransitioning)
                  return
          }
          if (P.trigger(this._element, "show.bs.collapse").defaultPrevented)
              return;
          e.forEach(e => {
              i !== e && et.getOrCreateInstance(e, {
                  toggle: !1
              }).hide(),
                  t || M.set(e, "bs.collapse", null)
          }
          );
          const n = this._getDimension();
          this._element.classList.remove("collapse"),
              this._element.classList.add("collapsing"),
              this._element.style[n] = 0,
              this._addAriaAndCollapsedClass(this._triggerArray, !0),
              this._isTransitioning = !0;
          const s = "scroll" + (n[0].toUpperCase() + n.slice(1));
          this._queueCallback(() => {
              this._isTransitioning = !1,
                  this._element.classList.remove("collapsing"),
                  this._element.classList.add("collapse", "show"),
                  this._element.style[n] = "",
                  P.trigger(this._element, "shown.bs.collapse")
          }
              , this._element, !0),
              this._element.style[n] = this._element[s] + "px"
      }
      hide() {
          if (this._isTransitioning || !this._isShown())
              return;
          if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented)
              return;
          const t = this._getDimension();
          this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
              d(this._element),
              this._element.classList.add("collapsing"),
              this._element.classList.remove("collapse", "show");
          const e = this._triggerArray.length;
          for (let t = 0; t < e; t++) {
              const e = this._triggerArray[t]
                  , n = i(e);
              n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1)
          }
          this._isTransitioning = !0,
              this._element.style[t] = "",
              this._queueCallback(() => {
                  this._isTransitioning = !1,
                      this._element.classList.remove("collapsing"),
                      this._element.classList.add("collapse"),
                      P.trigger(this._element, "hidden.bs.collapse")
              }
                  , this._element, !0)
      }
      _isShown(t = this._element) {
          return t.classList.contains("show")
      }
      _getConfig(t) {
          return (t = {
              ...J,
              ...F.getDataAttributes(this._element),
              ...t
          }).toggle = Boolean(t.toggle),
              t.parent = o(t.parent),
              r("collapse", t, tt),
              t
      }
      _getDimension() {
          return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
      }
      _initializeChildren() {
          if (!this._config.parent)
              return;
          const t = U.find(".collapse .collapse", this._config.parent);
          U.find('[data-bs-toggle="collapse"]', this._config.parent).filter(e => !t.includes(e)).forEach(t => {
              const e = i(t);
              e && this._addAriaAndCollapsedClass([t], this._isShown(e))
          }
          )
      }
      _addAriaAndCollapsedClass(t, e) {
          t.length && t.forEach(t => {
              e ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
                  t.setAttribute("aria-expanded", e)
          }
          )
      }
      static jQueryInterface(t) { }
  }
  P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
      ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
      const i = e(this);
      U.find(i).forEach(t => {
          et.getOrCreateInstance(t, {
              toggle: !1
          }).toggle()
      }
      )
  }
  )),
      m(et);
  var it = "top"
      , nt = "bottom"
      , st = "right"
      , ot = "left"
      , rt = [it, nt, st, ot]
      , at = "end"
      , lt = rt.reduce((function (t, e) {
          return t.concat([e + "-start", e + "-" + at])
      }
      ), [])
      , ct = [].concat(rt, ["auto"]).reduce((function (t, e) {
          return t.concat([e, e + "-start", e + "-" + at])
      }
      ), [])
      , ht = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
  var gt = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (t) { },
      effect: function (t) { },
      requires: ["computeStyles"]
  };
  var bt = Math.round;
  var xt = Math.max
      , Dt = Math.min
      , St = Math.round;
  var jt = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (t) { },
      effect: function (t) { },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
  };
  var Ht = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
  };
  var Rt = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (t) { },
      data: {}
  }
      , Wt = {
          passive: !0
      }
      , zt = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () { },
          effect: function (t) { },
          data: {}
      }
      , qt = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
      };
  var Ut = {
      start: "end",
      end: "start"
  };
  var ee = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (t) { },
      requiresIfExists: ["offset"],
      data: {
          _skip: !1
      }
  };
  var se = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) { }
  }
      , oe = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (t) { }
      }
      , re = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (t) { },
          data: {}
      }
      , ae = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (t) { },
          requiresIfExists: ["offset"]
      };
  var ce = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
  };
  function de(t) {
      void 0 === t && (t = {});
      var e = t
          , i = e.defaultModifiers
          , n = void 0 === i ? [] : i
          , s = e.defaultOptions
          , o = void 0 === s ? ce : s;
      return function (t, e, i) { }
  }
  var ue = de()
      , fe = de({
          defaultModifiers: [zt, re, Rt, gt]
      })
      , pe = de({
          defaultModifiers: [zt, re, Rt, gt, oe, ee, ae, jt, se]
      })
      , me = Object.freeze({
          __proto__: null,
          popperGenerator: de,
          detectOverflow: Jt,
          createPopperBase: ue,
          createPopper: pe,
          createPopperLite: fe,
          top: it,
          bottom: nt,
          right: st,
          left: ot,
          auto: "auto",
          basePlacements: rt,
          start: "start",
          end: at,
          clippingParents: "clippingParents",
          viewport: "viewport",
          popper: "popper",
          reference: "reference",
          variationPlacements: lt,
          placements: ct,
          beforeRead: "beforeRead",
          read: "read",
          afterRead: "afterRead",
          beforeMain: "beforeMain",
          main: "main",
          afterMain: "afterMain",
          beforeWrite: "beforeWrite",
          write: "write",
          afterWrite: "afterWrite",
          modifierPhases: ht,
          applyStyles: gt,
          arrow: jt,
          computeStyles: Rt,
          eventListeners: zt,
          flip: ee,
          hide: se,
          offset: oe,
          popperOffsets: re,
          preventOverflow: ae
      });
  const ge = new RegExp("ArrowUp|ArrowDown|Escape")
      , _e = p() ? "top-end" : "top-start"
      , be = p() ? "top-start" : "top-end"
      , ve = p() ? "bottom-end" : "bottom-start"
      , ye = p() ? "bottom-start" : "bottom-end"
      , we = p() ? "left-start" : "right-start"
      , Ee = p() ? "right-start" : "left-start"
      , Ae = {
          offset: [0, 2],
          boundary: "clippingParents",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
          autoClose: !0
      }
      , Te = {
          offset: "(array|string|function)",
          boundary: "(string|element)",
          reference: "(string|element|object)",
          display: "string",
          popperConfig: "(null|object|function)",
          autoClose: "(boolean|string)"
      };
  class Oe extends H {
      static get Default() { }
      static get DefaultType() { }
      static get NAME() { }
      static jQueryInterface(t) { }
      static clearMenus(t) { }
      static getParentFromElement(t) { }
      static dataApiKeydownHandler(t) { }
  }
  P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Oe.dataApiKeydownHandler),
      P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Oe.dataApiKeydownHandler),
      P.on(document, "click.bs.dropdown.data-api", Oe.clearMenus),
      P.on(document, "keyup.bs.dropdown.data-api", Oe.clearMenus),
      P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) { }
      )),
      m(Oe);
  class Ce {
  }
  const ke = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null
  }
      , Le = {
          className: "string",
          isVisible: "boolean",
          isAnimated: "boolean",
          rootElement: "(element|string)",
          clickCallback: "(function|null)"
      };
  class xe {
  }
  const De = {
      trapElement: null,
      autofocus: !0
  }
      , Se = {
          trapElement: "element",
          autofocus: "boolean"
      };
  class Ne {
  }
  const Ie = {
      backdrop: !0,
      keyboard: !0,
      focus: !0
  }
      , Pe = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean"
      };
  class je extends H {
      static get Default() { }
      static get NAME() { }
      static jQueryInterface(t, e) { }
  }
  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) { }
  )),
      B(je),
      m(je);
  const Me = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
  }
      , He = {
          backdrop: "boolean",
          keyboard: "boolean",
          scroll: "boolean"
      };
  class Be extends H {
      static get NAME() { }
      static get Default() { }
      static jQueryInterface(t) { }
  }
  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) { }
  )),
      P.on(window, "load.bs.offcanvas.data-api", () => U.find(".offcanvas.show").forEach(t => Be.getOrCreateInstance(t).show())),
      B(Be),
      m(Be);
  const Re = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , We = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i
      , ze = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , qe = (t, e) => { }
      ;
  const Ue = new Set(["sanitize", "allowList", "sanitizeFn"])
      , $e = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(array|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacements: "array",
          boundary: "(string|element)",
          customClass: "(string|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          allowList: "object",
          popperConfig: "(null|object|function)"
      }
      , Ve = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: p() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: p() ? "right" : "left"
      }
      , Ke = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: [0, 0],
          container: !1,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          boundary: "clippingParents",
          customClass: "",
          sanitize: !0,
          sanitizeFn: null,
          allowList: {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              div: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: []
          },
          popperConfig: null
      }
      , Xe = {
          HIDE: "hide.bs.tooltip",
          HIDDEN: "hidden.bs.tooltip",
          SHOW: "show.bs.tooltip",
          SHOWN: "shown.bs.tooltip",
          INSERTED: "inserted.bs.tooltip",
          CLICK: "click.bs.tooltip",
          FOCUSIN: "focusin.bs.tooltip",
          FOCUSOUT: "focusout.bs.tooltip",
          MOUSEENTER: "mouseenter.bs.tooltip",
          MOUSELEAVE: "mouseleave.bs.tooltip"
      };
  class Ye extends H {
      static get Default() { }
      static get NAME() { }
      static get Event() { }
      static get DefaultType() { }
      static jQueryInterface(t) { }
  }
  m(Ye);
  const Qe = {
      ...Ye.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }
      , Ge = {
          ...Ye.DefaultType,
          content: "(string|element|function)"
      }
      , Ze = {
          HIDE: "hide.bs.popover",
          HIDDEN: "hidden.bs.popover",
          SHOW: "show.bs.popover",
          SHOWN: "shown.bs.popover",
          INSERTED: "inserted.bs.popover",
          CLICK: "click.bs.popover",
          FOCUSIN: "focusin.bs.popover",
          FOCUSOUT: "focusout.bs.popover",
          MOUSEENTER: "mouseenter.bs.popover",
          MOUSELEAVE: "mouseleave.bs.popover"
      };
  class Je extends Ye {
      static get Default() { }
      static get NAME() { }
      static get Event() { }
      static get DefaultType() { }
      static jQueryInterface(t) { }
  }
  m(Je);
  const ti = {
      offset: 10,
      method: "auto",
      target: ""
  }
      , ei = {
          offset: "number",
          method: "string",
          target: "(string|element)"
      }
      , ii = ".nav-link, .list-group-item, .dropdown-item";
  class ni extends H {
      static get Default() { }
      static get NAME() { }
      static jQueryInterface(t) { }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => { }
  ),
      m(ni);
  class si extends H {
      static get NAME() { }
      static jQueryInterface(t) { }
  }
  P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) { }
  )),
      m(si);
  const oi = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
  }
      , ri = {
          animation: !0,
          autohide: !0,
          delay: 5e3
      };
  class ai extends H {
      static get DefaultType() { }
      static get Default() { }
      static get NAME() { }
      static jQueryInterface(t) { }
  }
  return B(ai),
      m(ai),
  {
      Alert: R,
      Button: W,
      Carousel: Z,
      Collapse: et,
      Dropdown: Oe,
      Modal: je,
      Offcanvas: Be,
      Popover: Je,
      ScrollSpy: ni,
      Tab: si,
      Toast: ai,
      Tooltip: Ye
  }
}
));