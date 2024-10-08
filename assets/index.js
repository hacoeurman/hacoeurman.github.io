(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Tn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Oy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Ox(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
            enumerable: !0,
            get: function () {
              return e[r];
            },
          }
      );
    }),
    n
  );
}
var jy = { exports: {} },
  Ol = {},
  Ly = { exports: {} },
  ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ps = Symbol.for("react.element"),
  jx = Symbol.for("react.portal"),
  Lx = Symbol.for("react.fragment"),
  Mx = Symbol.for("react.strict_mode"),
  Ax = Symbol.for("react.profiler"),
  Dx = Symbol.for("react.provider"),
  Nx = Symbol.for("react.context"),
  Rx = Symbol.for("react.forward_ref"),
  Ix = Symbol.for("react.suspense"),
  Vx = Symbol.for("react.memo"),
  zx = Symbol.for("react.lazy"),
  xm = Symbol.iterator;
function $x(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xm && e[xm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var My = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () { },
  enqueueReplaceState: function () { },
  enqueueSetState: function () { },
},
  Ay = Object.assign,
  Dy = {};
function to(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dy),
    (this.updater = n || My);
}
to.prototype.isReactComponent = {};
to.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
to.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ny() { }
Ny.prototype = to.prototype;
function fd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dy),
    (this.updater = n || My);
}
var dd = (fd.prototype = new Ny());
dd.constructor = fd;
Ay(dd, to.prototype);
dd.isPureReactComponent = !0;
var bm = Array.isArray,
  Ry = Object.prototype.hasOwnProperty,
  hd = { current: null },
  Iy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vy(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
      Ry.call(t, r) && !Iy.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ps,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: hd.current,
  };
}
function Fx(e, t) {
  return {
    $$typeof: ps,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ps;
}
function Hx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Cm = /\/+/g;
function Hu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Hx("" + e.key)
    : t.toString(36);
}
function Ca(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ps:
          case jx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Hu(s, 0) : r),
      bm(i)
        ? ((n = ""),
          e != null && (n = e.replace(Cm, "$&/") + "/"),
          Ca(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
        (pd(i) &&
          (i = Fx(
            i,
            n +
            (!i.key || (s && s.key === i.key)
              ? ""
              : ("" + i.key).replace(Cm, "$&/") + "/") +
            e
          )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), bm(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + Hu(o, l);
      s += Ca(o, t, n, u, i);
    }
  else if (((u = $x(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done;)
      (o = o.value), (u = r + Hu(o, l++)), (s += Ca(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
        ))
    );
  return s;
}
function Zs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ca(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Bx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _t = { current: null },
  Ta = { transition: null },
  Wx = {
    ReactCurrentDispatcher: _t,
    ReactCurrentBatchConfig: Ta,
    ReactCurrentOwner: hd,
  };
function zy() {
  throw Error("act(...) is not supported in production builds of React.");
}
ce.Children = {
  map: Zs,
  forEach: function (e, t, n) {
    Zs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Zs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Zs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!pd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ce.Component = to;
ce.Fragment = Lx;
ce.Profiler = Ax;
ce.PureComponent = fd;
ce.StrictMode = Mx;
ce.Suspense = Ix;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wx;
ce.act = zy;
ce.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
      e +
      "."
    );
  var r = Ay({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = hd.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Ry.call(t, u) &&
        !Iy.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: ps, type: e.type, key: i, ref: o, props: r, _owner: s };
};
ce.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dx, _context: e }),
    (e.Consumer = e)
  );
};
ce.createElement = Vy;
ce.createFactory = function (e) {
  var t = Vy.bind(null, e);
  return (t.type = e), t;
};
ce.createRef = function () {
  return { current: null };
};
ce.forwardRef = function (e) {
  return { $$typeof: Rx, render: e };
};
ce.isValidElement = pd;
ce.lazy = function (e) {
  return { $$typeof: zx, _payload: { _status: -1, _result: e }, _init: Bx };
};
ce.memo = function (e, t) {
  return { $$typeof: Vx, type: e, compare: t === void 0 ? null : t };
};
ce.startTransition = function (e) {
  var t = Ta.transition;
  Ta.transition = {};
  try {
    e();
  } finally {
    Ta.transition = t;
  }
};
ce.unstable_act = zy;
ce.useCallback = function (e, t) {
  return _t.current.useCallback(e, t);
};
ce.useContext = function (e) {
  return _t.current.useContext(e);
};
ce.useDebugValue = function () { };
ce.useDeferredValue = function (e) {
  return _t.current.useDeferredValue(e);
};
ce.useEffect = function (e, t) {
  return _t.current.useEffect(e, t);
};
ce.useId = function () {
  return _t.current.useId();
};
ce.useImperativeHandle = function (e, t, n) {
  return _t.current.useImperativeHandle(e, t, n);
};
ce.useInsertionEffect = function (e, t) {
  return _t.current.useInsertionEffect(e, t);
};
ce.useLayoutEffect = function (e, t) {
  return _t.current.useLayoutEffect(e, t);
};
ce.useMemo = function (e, t) {
  return _t.current.useMemo(e, t);
};
ce.useReducer = function (e, t, n) {
  return _t.current.useReducer(e, t, n);
};
ce.useRef = function (e) {
  return _t.current.useRef(e);
};
ce.useState = function (e) {
  return _t.current.useState(e);
};
ce.useSyncExternalStore = function (e, t, n) {
  return _t.current.useSyncExternalStore(e, t, n);
};
ce.useTransition = function () {
  return _t.current.useTransition();
};
ce.version = "18.3.1";
Ly.exports = ce;
var U = Ly.exports;
const ue = Oy(U);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ux = U,
  Kx = Symbol.for("react.element"),
  Qx = Symbol.for("react.fragment"),
  Yx = Object.prototype.hasOwnProperty,
  Xx = Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gx = { key: !0, ref: !0, __self: !0, __source: !0 };
function $y(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Yx.call(t, r) && !Gx.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Kx,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Xx.current,
  };
}
Ol.Fragment = Qx;
Ol.jsx = $y;
Ol.jsxs = $y;
jy.exports = Ol;
var v = jy.exports,
  Bc = {},
  Fy = { exports: {} },
  It = {},
  Hy = { exports: {} },
  By = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, G) {
    var O = z.length;
    z.push(G);
    e: for (; 0 < O;) {
      var pe = (O - 1) >>> 1,
        ke = z[pe];
      if (0 < i(ke, G)) (z[pe] = G), (z[O] = ke), (O = pe);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var G = z[0],
      O = z.pop();
    if (O !== G) {
      z[0] = O;
      e: for (var pe = 0, ke = z.length, it = ke >>> 1; pe < it;) {
        var Qe = 2 * (pe + 1) - 1,
          dt = z[Qe],
          Ye = Qe + 1,
          zn = z[Ye];
        if (0 > i(dt, O))
          Ye < ke && 0 > i(zn, dt)
            ? ((z[pe] = zn), (z[Ye] = O), (pe = Ye))
            : ((z[pe] = dt), (z[Qe] = O), (pe = Qe));
        else if (Ye < ke && 0 > i(zn, O)) (z[pe] = zn), (z[Ye] = O), (pe = Ye);
        else break e;
      }
    }
    return G;
  }
  function i(z, G) {
    var O = z.sortIndex - G.sortIndex;
    return O !== 0 ? O : z.id - G.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    c = [],
    d = 1,
    h = null,
    m = 3,
    S = !1,
    b = !1,
    x = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(z) {
    for (var G = n(c); G !== null;) {
      if (G.callback === null) r(c);
      else if (G.startTime <= z)
        r(c), (G.sortIndex = G.expirationTime), t(u, G);
      else break;
      G = n(c);
    }
  }
  function T(z) {
    if (((x = !1), _(z), !b))
      if (n(u) !== null) (b = !0), de(k);
      else {
        var G = n(c);
        G !== null && He(T, G.startTime - z);
      }
  }
  function k(z, G) {
    (b = !1), x && ((x = !1), w(A), (A = -1)), (S = !0);
    var O = m;
    try {
      for (
        _(G), h = n(u);
        h !== null && (!(h.expirationTime > G) || (z && !K()));

      ) {
        var pe = h.callback;
        if (typeof pe == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var ke = pe(h.expirationTime <= G);
          (G = e.unstable_now()),
            typeof ke == "function" ? (h.callback = ke) : h === n(u) && r(u),
            _(G);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var it = !0;
      else {
        var Qe = n(c);
        Qe !== null && He(T, Qe.startTime - G), (it = !1);
      }
      return it;
    } finally {
      (h = null), (m = O), (S = !1);
    }
  }
  var j = !1,
    R = null,
    A = -1,
    D = 5,
    M = -1;
  function K() {
    return !(e.unstable_now() - M < D);
  }
  function Q() {
    if (R !== null) {
      var z = e.unstable_now();
      M = z;
      var G = !0;
      try {
        G = R(!0, z);
      } finally {
        G ? Y() : ((j = !1), (R = null));
      }
    } else j = !1;
  }
  var Y;
  if (typeof g == "function")
    Y = function () {
      g(Q);
    };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(),
      ge = X.port2;
    (X.port1.onmessage = Q),
      (Y = function () {
        ge.postMessage(null);
      });
  } else
    Y = function () {
      P(Q, 0);
    };
  function de(z) {
    (R = z), j || ((j = !0), Y());
  }
  function He(z, G) {
    A = P(function () {
      z(e.unstable_now());
    }, G);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || S || ((b = !0), de(k));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        )
        : (D = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = m;
      }
      var O = m;
      m = G;
      try {
        return z();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () { }),
    (e.unstable_requestPaint = function () { }),
    (e.unstable_runWithPriority = function (z, G) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var O = m;
      m = z;
      try {
        return G();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (z, G, O) {
      var pe = e.unstable_now();
      switch (
      (typeof O == "object" && O !== null
        ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? pe + O : pe))
        : (O = pe),
        z)
      ) {
        case 1:
          var ke = -1;
          break;
        case 2:
          ke = 250;
          break;
        case 5:
          ke = 1073741823;
          break;
        case 4:
          ke = 1e4;
          break;
        default:
          ke = 5e3;
      }
      return (
        (ke = O + ke),
        (z = {
          id: d++,
          callback: G,
          priorityLevel: z,
          startTime: O,
          expirationTime: ke,
          sortIndex: -1,
        }),
        O > pe
          ? ((z.sortIndex = O),
            t(c, z),
            n(u) === null &&
            z === n(c) &&
            (x ? (w(A), (A = -1)) : (x = !0), He(T, O - pe)))
          : ((z.sortIndex = ke), t(u, z), b || S || ((b = !0), de(k))),
        z
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (z) {
      var G = m;
      return function () {
        var O = m;
        m = G;
        try {
          return z.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    });
})(By);
Hy.exports = By;
var qx = Hy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zx = U,
  Nt = qx;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wy = new Set(),
  Uo = {};
function Zr(e, t) {
  Hi(e, t), Hi(e + "Capture", t);
}
function Hi(e, t) {
  for (Uo[e] = t, e = 0; e < t.length; e++) Wy.add(t[e]);
}
var Dn = !(
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
),
  Wc = Object.prototype.hasOwnProperty,
  Jx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tm = {},
  Em = {};
function eb(e) {
  return Wc.call(Em, e)
    ? !0
    : Wc.call(Tm, e)
      ? !1
      : Jx.test(e)
        ? (Em[e] = !0)
        : ((Tm[e] = !0), !1);
}
function tb(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function nb(e, t, n, r) {
  if (t === null || typeof t > "u" || tb(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function St(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var rt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new St(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new St(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  rt[e] = new St(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  rt[e] = new St(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new St(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  rt[e] = new St(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  rt[e] = new St(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  rt[e] = new St(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  rt[e] = new St(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var md = /[\-:]([a-z])/g;
function gd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(md, gd);
    rt[t] = new St(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(md, gd);
    rt[t] = new St(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(md, gd);
  rt[t] = new St(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  rt[e] = new St(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new St(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  rt[e] = new St(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vd(e, t, n, r) {
  var i = rt.hasOwnProperty(t) ? rt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
    !(2 < t.length) ||
    (t[0] !== "o" && t[0] !== "O") ||
    (t[1] !== "n" && t[1] !== "N")) &&
    (nb(t, n, i, r) && (n = null),
      r || i === null
        ? eb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
          ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vn = Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Js = Symbol.for("react.element"),
  yi = Symbol.for("react.portal"),
  wi = Symbol.for("react.fragment"),
  yd = Symbol.for("react.strict_mode"),
  Uc = Symbol.for("react.profiler"),
  Uy = Symbol.for("react.provider"),
  Ky = Symbol.for("react.context"),
  wd = Symbol.for("react.forward_ref"),
  Kc = Symbol.for("react.suspense"),
  Qc = Symbol.for("react.suspense_list"),
  _d = Symbol.for("react.memo"),
  Yn = Symbol.for("react.lazy"),
  Qy = Symbol.for("react.offscreen"),
  Pm = Symbol.iterator;
function yo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pm && e[Pm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ve = Object.assign,
  Bu;
function Po(e) {
  if (Bu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bu = (t && t[1]) || "";
    }
  return (
    `
` +
    Bu +
    e
  );
}
var Wu = !1;
function Uu(e, t) {
  if (!e || Wu) return "";
  Wu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
        o = r.stack.split(`
`),
        s = i.length - 1,
        l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                  u.includes("<anonymous>") &&
                  (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Wu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Po(e) : "";
}
function rb(e) {
  switch (e.tag) {
    case 5:
      return Po(e.type);
    case 16:
      return Po("Lazy");
    case 13:
      return Po("Suspense");
    case 19:
      return Po("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Uu(e.type, !1)), e;
    case 11:
      return (e = Uu(e.type.render, !1)), e;
    case 1:
      return (e = Uu(e.type, !0)), e;
    default:
      return "";
  }
}
function Yc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wi:
      return "Fragment";
    case yi:
      return "Portal";
    case Uc:
      return "Profiler";
    case yd:
      return "StrictMode";
    case Kc:
      return "Suspense";
    case Qc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ky:
        return (e.displayName || "Context") + ".Consumer";
      case Uy:
        return (e._context.displayName || "Context") + ".Provider";
      case wd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
          ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _d:
        return (
          (t = e.displayName || null), t !== null ? t : Yc(e.type) || "Memo"
        );
      case Yn:
        (t = e._payload), (e = e._init);
        try {
          return Yc(e(t));
        } catch { }
    }
  return null;
}
function ib(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Yc(t);
    case 8:
      return t === yd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Yy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ob(e) {
  var t = Yy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ea(e) {
  e._valueTracker || (e._valueTracker = ob(e));
}
function Xy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Yy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xc(e, t) {
  var n = t.checked;
  return Ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function km(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gy(e, t) {
  (t = t.checked), t != null && vd(e, "checked", t, !1);
}
function Gc(e, t) {
  Gy(e, t);
  var n = dr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? qc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && qc(e, t.type, dr(t.defaultValue)),
    t.checked == null &&
    t.defaultChecked != null &&
    (e.defaultChecked = !!t.defaultChecked);
}
function Om(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function qc(e, t, n) {
  (t !== "number" || Fa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ko = Array.isArray;
function Di(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Zc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (ko(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dr(n) };
}
function qy(e, t) {
  var n = dr(t.value),
    r = dr(t.defaultValue);
  n != null &&
    ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ta,
  Jy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
          return e(t, n, r, i);
        });
      }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ta = ta || document.createElement("div"),
        ta.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ta.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function Ko(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0,
},
  sb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mo).forEach(function (e) {
  sb.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mo[t] = Mo[e]);
  });
});
function e0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mo.hasOwnProperty(e) && Mo[e])
      ? ("" + t).trim()
      : t + "px";
}
function t0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = e0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ab = Ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ef(e, t) {
  if (t) {
    if (ab[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function tf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var nf = null;
function Sd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var rf = null,
  Ni = null,
  Ri = null;
function Mm(e) {
  if ((e = vs(e))) {
    if (typeof rf != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = Dl(t)), rf(e.stateNode, e.type, t));
  }
}
function n0(e) {
  Ni ? (Ri ? Ri.push(e) : (Ri = [e])) : (Ni = e);
}
function r0() {
  if (Ni) {
    var e = Ni,
      t = Ri;
    if (((Ri = Ni = null), Mm(e), t)) for (e = 0; e < t.length; e++) Mm(t[e]);
  }
}
function i0(e, t) {
  return e(t);
}
function o0() { }
var Ku = !1;
function s0(e, t, n) {
  if (Ku) return e(t, n);
  Ku = !0;
  try {
    return i0(e, t, n);
  } finally {
    (Ku = !1), (Ni !== null || Ri !== null) && (o0(), r0());
  }
}
function Qo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var of = !1;
if (Dn)
  try {
    var wo = {};
    Object.defineProperty(wo, "passive", {
      get: function () {
        of = !0;
      },
    }),
      window.addEventListener("test", wo, wo),
      window.removeEventListener("test", wo, wo);
  } catch {
    of = !1;
  }
function lb(e, t, n, r, i, o, s, l, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Ao = !1,
  Ha = null,
  Ba = !1,
  sf = null,
  ub = {
    onError: function (e) {
      (Ao = !0), (Ha = e);
    },
  };
function cb(e, t, n, r, i, o, s, l, u) {
  (Ao = !1), (Ha = null), lb.apply(ub, arguments);
}
function fb(e, t, n, r, i, o, s, l, u) {
  if ((cb.apply(this, arguments), Ao)) {
    if (Ao) {
      var c = Ha;
      (Ao = !1), (Ha = null);
    } else throw Error(I(198));
    Ba || ((Ba = !0), (sf = c));
  }
}
function Jr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function a0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Am(e) {
  if (Jr(e) !== e) throw Error(I(188));
}
function db(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jr(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o;) {
        if (o === n) return Am(i), e;
        if (o === r) return Am(i), t;
        o = o.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l;) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l;) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function l0(e) {
  return (e = db(e)), e !== null ? u0(e) : null;
}
function u0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = u0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var c0 = Nt.unstable_scheduleCallback,
  Dm = Nt.unstable_cancelCallback,
  hb = Nt.unstable_shouldYield,
  pb = Nt.unstable_requestPaint,
  Ue = Nt.unstable_now,
  mb = Nt.unstable_getCurrentPriorityLevel,
  xd = Nt.unstable_ImmediatePriority,
  f0 = Nt.unstable_UserBlockingPriority,
  Wa = Nt.unstable_NormalPriority,
  gb = Nt.unstable_LowPriority,
  d0 = Nt.unstable_IdlePriority,
  jl = null,
  gn = null;
function vb(e) {
  if (gn && typeof gn.onCommitFiberRoot == "function")
    try {
      gn.onCommitFiberRoot(jl, e, void 0, (e.current.flags & 128) === 128);
    } catch { }
}
var on = Math.clz32 ? Math.clz32 : _b,
  yb = Math.log,
  wb = Math.LN2;
function _b(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((yb(e) / wb) | 0)) | 0;
}
var na = 64,
  ra = 4194304;
function Oo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ua(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Oo(l)) : ((o &= s), o !== 0 && (r = Oo(o)));
  } else (s = n & ~i), s !== 0 ? (r = Oo(s)) : o !== 0 && (r = Oo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      (n = 31 - on(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Sb(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xb(e, t) {
  for (
    var n = e.suspendedLanes,
    r = e.pingedLanes,
    i = e.expirationTimes,
    o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - on(o),
      l = 1 << s,
      u = i[s];
    u === -1
      ? (!(l & n) || l & r) && (i[s] = Sb(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function af(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function h0() {
  var e = na;
  return (na <<= 1), !(na & 4194240) && (na = 64), e;
}
function Qu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ms(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - on(t)),
    (e[t] = n);
}
function bb(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - on(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function bd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - on(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var we = 0;
function p0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var m0,
  Cd,
  g0,
  v0,
  y0,
  lf = !1,
  ia = [],
  nr = null,
  rr = null,
  ir = null,
  Yo = new Map(),
  Xo = new Map(),
  Zn = [],
  Cb =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Nm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nr = null;
      break;
    case "dragenter":
    case "dragleave":
      rr = null;
      break;
    case "mouseover":
    case "mouseout":
      ir = null;
      break;
    case "pointerover":
    case "pointerout":
      Yo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xo.delete(t.pointerId);
  }
}
function _o(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [i],
    }),
      t !== null && ((t = vs(t)), t !== null && Cd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Tb(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (nr = _o(nr, e, t, n, r, i)), !0;
    case "dragenter":
      return (rr = _o(rr, e, t, n, r, i)), !0;
    case "mouseover":
      return (ir = _o(ir, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Yo.set(o, _o(Yo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Xo.set(o, _o(Xo.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function w0(e) {
  var t = zr(e.target);
  if (t !== null) {
    var n = Jr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = a0(n)), t !== null)) {
          (e.blockedOn = t),
            y0(e.priority, function () {
              g0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ea(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = uf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (nf = r), n.target.dispatchEvent(r), (nf = null);
    } else return (t = vs(n)), t !== null && Cd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Rm(e, t, n) {
  Ea(e) && n.delete(t);
}
function Eb() {
  (lf = !1),
    nr !== null && Ea(nr) && (nr = null),
    rr !== null && Ea(rr) && (rr = null),
    ir !== null && Ea(ir) && (ir = null),
    Yo.forEach(Rm),
    Xo.forEach(Rm);
}
function So(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
      lf ||
      ((lf = !0),
        Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, Eb)));
}
function Go(e) {
  function t(i) {
    return So(i, e);
  }
  if (0 < ia.length) {
    So(ia[0], e);
    for (var n = 1; n < ia.length; n++) {
      var r = ia[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nr !== null && So(nr, e),
    rr !== null && So(rr, e),
    ir !== null && So(ir, e),
    Yo.forEach(t),
    Xo.forEach(t),
    n = 0;
    n < Zn.length;
    n++
  )
    (r = Zn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zn.length && ((n = Zn[0]), n.blockedOn === null);)
    w0(n), n.blockedOn === null && Zn.shift();
}
var Ii = Vn.ReactCurrentBatchConfig,
  Ka = !0;
function Pb(e, t, n, r) {
  var i = we,
    o = Ii.transition;
  Ii.transition = null;
  try {
    (we = 1), Td(e, t, n, r);
  } finally {
    (we = i), (Ii.transition = o);
  }
}
function kb(e, t, n, r) {
  var i = we,
    o = Ii.transition;
  Ii.transition = null;
  try {
    (we = 4), Td(e, t, n, r);
  } finally {
    (we = i), (Ii.transition = o);
  }
}
function Td(e, t, n, r) {
  if (Ka) {
    var i = uf(e, t, n, r);
    if (i === null) rc(e, t, r, Qa, n), Nm(e, r);
    else if (Tb(i, e, t, n, r)) r.stopPropagation();
    else if ((Nm(e, r), t & 4 && -1 < Cb.indexOf(e))) {
      for (; i !== null;) {
        var o = vs(i);
        if (
          (o !== null && m0(o),
            (o = uf(e, t, n, r)),
            o === null && rc(e, t, r, Qa, n),
            o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else rc(e, t, r, null, n);
  }
}
var Qa = null;
function uf(e, t, n, r) {
  if (((Qa = null), (e = Sd(r)), (e = zr(e)), e !== null))
    if (((t = Jr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = a0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Qa = e), null;
}
function _0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (mb()) {
        case xd:
          return 1;
        case f0:
          return 4;
        case Wa:
        case gb:
          return 16;
        case d0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var er = null,
  Ed = null,
  Pa = null;
function S0() {
  if (Pa) return Pa;
  var e,
    t = Ed,
    n = t.length,
    r,
    i = "value" in er ? er.value : er.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Pa = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ka(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function oa() {
  return !0;
}
function Im() {
  return !1;
}
function Vt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? oa
        : Im),
      (this.isPropagationStopped = Im),
      this
    );
  }
  return (
    Ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = oa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = oa));
      },
      persist: function () { },
      isPersistent: oa,
    }),
    t
  );
}
var no = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (e) {
    return e.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0,
},
  Pd = Vt(no),
  gs = Ve({}, no, { view: 0, detail: 0 }),
  Ob = Vt(gs),
  Yu,
  Xu,
  xo,
  Ll = Ve({}, gs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: kd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xo &&
          (xo && e.type === "mousemove"
            ? ((Yu = e.screenX - xo.screenX), (Xu = e.screenY - xo.screenY))
            : (Xu = Yu = 0),
            (xo = e)),
          Yu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xu;
    },
  }),
  Vm = Vt(Ll),
  jb = Ve({}, Ll, { dataTransfer: 0 }),
  Lb = Vt(jb),
  Mb = Ve({}, gs, { relatedTarget: 0 }),
  Gu = Vt(Mb),
  Ab = Ve({}, no, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Db = Vt(Ab),
  Nb = Ve({}, no, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Rb = Vt(Nb),
  Ib = Ve({}, no, { data: 0 }),
  zm = Vt(Ib),
  Vb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $b = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Fb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $b[e]) ? !!t[e] : !1;
}
function kd() {
  return Fb;
}
var Hb = Ve({}, gs, {
  key: function (e) {
    if (e.key) {
      var t = Vb[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress"
      ? ((e = ka(e)), e === 13 ? "Enter" : String.fromCharCode(e))
      : e.type === "keydown" || e.type === "keyup"
        ? zb[e.keyCode] || "Unidentified"
        : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: kd,
  charCode: function (e) {
    return e.type === "keypress" ? ka(e) : 0;
  },
  keyCode: function (e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  },
  which: function (e) {
    return e.type === "keypress"
      ? ka(e)
      : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
  },
}),
  Bb = Vt(Hb),
  Wb = Ve({}, Ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $m = Vt(Wb),
  Ub = Ve({}, gs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: kd,
  }),
  Kb = Vt(Ub),
  Qb = Ve({}, no, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yb = Vt(Qb),
  Xb = Ve({}, Ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Gb = Vt(Xb),
  qb = [9, 13, 27, 32],
  Od = Dn && "CompositionEvent" in window,
  Do = null;
Dn && "documentMode" in document && (Do = document.documentMode);
var Zb = Dn && "TextEvent" in window && !Do,
  x0 = Dn && (!Od || (Do && 8 < Do && 11 >= Do)),
  Fm = " ",
  Hm = !1;
function b0(e, t) {
  switch (e) {
    case "keyup":
      return qb.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function C0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var _i = !1;
function Jb(e, t) {
  switch (e) {
    case "compositionend":
      return C0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hm = !0), Fm);
    case "textInput":
      return (e = t.data), e === Fm && Hm ? null : e;
    default:
      return null;
  }
}
function eC(e, t) {
  if (_i)
    return e === "compositionend" || (!Od && b0(e, t))
      ? ((e = S0()), (Pa = Ed = er = null), (_i = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return x0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tC = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Bm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tC[e.type] : t === "textarea";
}
function T0(e, t, n, r) {
  n0(r),
    (t = Ya(t, "onChange")),
    0 < t.length &&
    ((n = new Pd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var No = null,
  qo = null;
function nC(e) {
  R0(e, 0);
}
function Ml(e) {
  var t = bi(e);
  if (Xy(t)) return e;
}
function rC(e, t) {
  if (e === "change") return t;
}
var E0 = !1;
if (Dn) {
  var qu;
  if (Dn) {
    var Zu = "oninput" in document;
    if (!Zu) {
      var Wm = document.createElement("div");
      Wm.setAttribute("oninput", "return;"),
        (Zu = typeof Wm.oninput == "function");
    }
    qu = Zu;
  } else qu = !1;
  E0 = qu && (!document.documentMode || 9 < document.documentMode);
}
function Um() {
  No && (No.detachEvent("onpropertychange", P0), (qo = No = null));
}
function P0(e) {
  if (e.propertyName === "value" && Ml(qo)) {
    var t = [];
    T0(t, qo, e, Sd(e)), s0(nC, t);
  }
}
function iC(e, t, n) {
  e === "focusin"
    ? (Um(), (No = t), (qo = n), No.attachEvent("onpropertychange", P0))
    : e === "focusout" && Um();
}
function oC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ml(qo);
}
function sC(e, t) {
  if (e === "click") return Ml(t);
}
function aC(e, t) {
  if (e === "input" || e === "change") return Ml(t);
}
function lC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var an = typeof Object.is == "function" ? Object.is : lC;
function Zo(e, t) {
  if (an(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Wc.call(t, i) || !an(e[i], t[i])) return !1;
  }
  return !0;
}
function Km(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function Qm(e, t) {
  var n = Km(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Km(n);
  }
}
function k0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? k0(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function O0() {
  for (var e = window, t = Fa(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fa(e.document);
  }
  return t;
}
function jd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function uC(e) {
  var t = O0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    k0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && jd(n)) {
      if (
        ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Qm(n, o));
        var s = Qm(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var cC = Dn && "documentMode" in document && 11 >= document.documentMode,
  Si = null,
  cf = null,
  Ro = null,
  ff = !1;
function Ym(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ff ||
    Si == null ||
    Si !== Fa(r) ||
    ((r = Si),
      "selectionStart" in r && jd(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Ro && Zo(Ro, r)) ||
      ((Ro = r),
        (r = Ya(cf, "onSelect")),
        0 < r.length &&
        ((t = new Pd("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Si))));
}
function sa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xi = {
  animationend: sa("Animation", "AnimationEnd"),
  animationiteration: sa("Animation", "AnimationIteration"),
  animationstart: sa("Animation", "AnimationStart"),
  transitionend: sa("Transition", "TransitionEnd"),
},
  Ju = {},
  j0 = {};
Dn &&
  ((j0 = document.createElement("div").style),
    "AnimationEvent" in window ||
    (delete xi.animationend.animation,
      delete xi.animationiteration.animation,
      delete xi.animationstart.animation),
    "TransitionEvent" in window || delete xi.transitionend.transition);
function Al(e) {
  if (Ju[e]) return Ju[e];
  if (!xi[e]) return e;
  var t = xi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in j0) return (Ju[e] = t[n]);
  return e;
}
var L0 = Al("animationend"),
  M0 = Al("animationiteration"),
  A0 = Al("animationstart"),
  D0 = Al("transitionend"),
  N0 = new Map(),
  Xm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vr(e, t) {
  N0.set(e, t), Zr(t, [e]);
}
for (var ec = 0; ec < Xm.length; ec++) {
  var tc = Xm[ec],
    fC = tc.toLowerCase(),
    dC = tc[0].toUpperCase() + tc.slice(1);
  vr(fC, "on" + dC);
}
vr(L0, "onAnimationEnd");
vr(M0, "onAnimationIteration");
vr(A0, "onAnimationStart");
vr("dblclick", "onDoubleClick");
vr("focusin", "onFocus");
vr("focusout", "onBlur");
vr(D0, "onTransitionEnd");
Hi("onMouseEnter", ["mouseout", "mouseover"]);
Hi("onMouseLeave", ["mouseout", "mouseover"]);
Hi("onPointerEnter", ["pointerout", "pointerover"]);
Hi("onPointerLeave", ["pointerout", "pointerover"]);
Zr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Zr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Zr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Zr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jo =
  "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ),
  hC = new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));
function Gm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), fb(r, t, void 0, e), (e.currentTarget = null);
}
function R0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          Gm(i, l, c), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
              (u = l.instance),
              (c = l.currentTarget),
              (l = l.listener),
              u !== o && i.isPropagationStopped())
          )
            break e;
          Gm(i, l, c), (o = u);
        }
    }
  }
  if (Ba) throw ((e = sf), (Ba = !1), (sf = null), e);
}
function Ee(e, t) {
  var n = t[gf];
  n === void 0 && (n = t[gf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (I0(t, e, 2, !1), n.add(r));
}
function nc(e, t, n) {
  var r = 0;
  t && (r |= 4), I0(n, e, r, t);
}
var aa = "_reactListening" + Math.random().toString(36).slice(2);
function Jo(e) {
  if (!e[aa]) {
    (e[aa] = !0),
      Wy.forEach(function (n) {
        n !== "selectionchange" && (hC.has(n) || nc(n, !1, e), nc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[aa] || ((t[aa] = !0), nc("selectionchange", !1, t));
  }
}
function I0(e, t, n, r) {
  switch (_0(t)) {
    case 1:
      var i = Pb;
      break;
    case 4:
      i = kb;
      break;
    default:
      i = Td;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !of ||
    (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
    (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function rc(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (; ;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null;) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
                u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null;) {
          if (((s = zr(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  s0(function () {
    var c = o,
      d = Sd(n),
      h = [];
    e: {
      var m = N0.get(e);
      if (m !== void 0) {
        var S = Pd,
          b = e;
        switch (e) {
          case "keypress":
            if (ka(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Bb;
            break;
          case "focusin":
            (b = "focus"), (S = Gu);
            break;
          case "focusout":
            (b = "blur"), (S = Gu);
            break;
          case "beforeblur":
          case "afterblur":
            S = Gu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Vm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Lb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Kb;
            break;
          case L0:
          case M0:
          case A0:
            S = Db;
            break;
          case D0:
            S = Yb;
            break;
          case "scroll":
            S = Ob;
            break;
          case "wheel":
            S = Gb;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Rb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = $m;
        }
        var x = (t & 4) !== 0,
          P = !x && e === "scroll",
          w = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var g = c, _; g !== null;) {
          _ = g;
          var T = _.stateNode;
          if (
            (_.tag === 5 &&
              T !== null &&
              ((_ = T),
                w !== null && ((T = Qo(g, w)), T != null && x.push(es(g, T, _)))),
              P)
          )
            break;
          g = g.return;
        }
        0 < x.length &&
          ((m = new S(m, b, null, n, d)), h.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            m &&
            n !== nf &&
            (b = n.relatedTarget || n.fromElement) &&
            (zr(b) || b[Nn]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            S
              ? ((b = n.relatedTarget || n.toElement),
                (S = c),
                (b = b ? zr(b) : null),
                b !== null &&
                ((P = Jr(b)), b !== P || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
              : ((S = null), (b = c)),
            S !== b)
        ) {
          if (
            ((x = Vm),
              (T = "onMouseLeave"),
              (w = "onMouseEnter"),
              (g = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
              ((x = $m),
                (T = "onPointerLeave"),
                (w = "onPointerEnter"),
                (g = "pointer")),
              (P = S == null ? m : bi(S)),
              (_ = b == null ? m : bi(b)),
              (m = new x(T, g + "leave", S, n, d)),
              (m.target = P),
              (m.relatedTarget = _),
              (T = null),
              zr(d) === c &&
              ((x = new x(w, g + "enter", b, n, d)),
                (x.target = _),
                (x.relatedTarget = P),
                (T = x)),
              (P = T),
              S && b)
          )
            t: {
              for (x = S, w = b, g = 0, _ = x; _; _ = vi(_)) g++;
              for (_ = 0, T = w; T; T = vi(T)) _++;
              for (; 0 < g - _;) (x = vi(x)), g--;
              for (; 0 < _ - g;) (w = vi(w)), _--;
              for (; g--;) {
                if (x === w || (w !== null && x === w.alternate)) break t;
                (x = vi(x)), (w = vi(w));
              }
              x = null;
            }
          else x = null;
          S !== null && qm(h, m, S, x, !1),
            b !== null && P !== null && qm(h, P, b, x, !0);
        }
      }
      e: {
        if (
          ((m = c ? bi(c) : window),
            (S = m.nodeName && m.nodeName.toLowerCase()),
            S === "select" || (S === "input" && m.type === "file"))
        )
          var k = rC;
        else if (Bm(m))
          if (E0) k = aC;
          else {
            k = oC;
            var j = iC;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = sC);
        if (k && (k = k(e, c))) {
          T0(h, k, n, d);
          break e;
        }
        j && j(e, m, c),
          e === "focusout" &&
          (j = m._wrapperState) &&
          j.controlled &&
          m.type === "number" &&
          qc(m, "number", m.value);
      }
      switch (((j = c ? bi(c) : window), e)) {
        case "focusin":
          (Bm(j) || j.contentEditable === "true") &&
            ((Si = j), (cf = c), (Ro = null));
          break;
        case "focusout":
          Ro = cf = Si = null;
          break;
        case "mousedown":
          ff = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ff = !1), Ym(h, n, d);
          break;
        case "selectionchange":
          if (cC) break;
        case "keydown":
        case "keyup":
          Ym(h, n, d);
      }
      var R;
      if (Od)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        _i
          ? b0(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (x0 &&
          n.locale !== "ko" &&
          (_i || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && _i && (R = S0())
            : ((er = d),
              (Ed = "value" in er ? er.value : er.textContent),
              (_i = !0))),
          (j = Ya(c, A)),
          0 < j.length &&
          ((A = new zm(A, e, null, n, d)),
            h.push({ event: A, listeners: j }),
            R ? (A.data = R) : ((R = C0(n)), R !== null && (A.data = R)))),
        (R = Zb ? Jb(e, n) : eC(e, n)) &&
        ((c = Ya(c, "onBeforeInput")),
          0 < c.length &&
          ((d = new zm("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: c }),
            (d.data = R)));
    }
    R0(h, t);
  });
}
function es(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ya(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
        (o = Qo(e, n)),
        o != null && r.unshift(es(e, o, i)),
        (o = Qo(e, t)),
        o != null && r.push(es(e, o, i))),
      (e = e.return);
  }
  return r;
}
function vi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qm(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r;) {
    var l = n,
      u = l.alternate,
      c = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
        i
          ? ((u = Qo(n, o)), u != null && s.unshift(es(n, u, l)))
          : i || ((u = Qo(n, o)), u != null && s.push(es(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var pC = /\r\n?/g,
  mC = /\u0000|\uFFFD/g;
function Zm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      pC,
      `
`
    )
    .replace(mC, "");
}
function la(e, t, n) {
  if (((t = Zm(t)), Zm(e) !== t && n)) throw Error(I(425));
}
function Xa() { }
var df = null,
  hf = null;
function pf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var mf = typeof setTimeout == "function" ? setTimeout : void 0,
  gC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Jm = typeof Promise == "function" ? Promise : void 0,
  vC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Jm < "u"
        ? function (e) {
          return Jm.resolve(null).then(e).catch(yC);
        }
        : mf;
function yC(e) {
  setTimeout(function () {
    throw e;
  });
}
function ic(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Go(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Go(t);
}
function or(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function eg(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ro = Math.random().toString(36).slice(2),
  mn = "__reactFiber$" + ro,
  ts = "__reactProps$" + ro,
  Nn = "__reactContainer$" + ro,
  gf = "__reactEvents$" + ro,
  wC = "__reactListeners$" + ro,
  _C = "__reactHandles$" + ro;
function zr(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[Nn] || n[mn])) {
      if (
        ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
      )
        for (e = eg(e); e !== null;) {
          if ((n = e[mn])) return n;
          e = eg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vs(e) {
  return (
    (e = e[mn] || e[Nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Dl(e) {
  return e[ts] || null;
}
var vf = [],
  Ci = -1;
function yr(e) {
  return { current: e };
}
function Pe(e) {
  0 > Ci || ((e.current = vf[Ci]), (vf[Ci] = null), Ci--);
}
function Ce(e, t) {
  Ci++, (vf[Ci] = e.current), (e.current = t);
}
var hr = {},
  ft = yr(hr),
  Tt = yr(!1),
  Kr = hr;
function Bi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
    ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Et(e) {
  return (e = e.childContextTypes), e != null;
}
function Ga() {
  Pe(Tt), Pe(ft);
}
function tg(e, t, n) {
  if (ft.current !== hr) throw Error(I(168));
  Ce(ft, t), Ce(Tt, n);
}
function V0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, ib(e) || "Unknown", i));
  return Ve({}, n, r);
}
function qa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hr),
    (Kr = ft.current),
    Ce(ft, e),
    Ce(Tt, Tt.current),
    !0
  );
}
function ng(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = V0(e, t, Kr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Pe(Tt),
      Pe(ft),
      Ce(ft, e))
    : Pe(Tt),
    Ce(Tt, n);
}
var Cn = null,
  Nl = !1,
  oc = !1;
function z0(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function SC(e) {
  (Nl = !0), z0(e);
}
function wr() {
  if (!oc && Cn !== null) {
    oc = !0;
    var e = 0,
      t = we;
    try {
      var n = Cn;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Cn = null), (Nl = !1);
    } catch (i) {
      throw (Cn !== null && (Cn = Cn.slice(e + 1)), c0(xd, wr), i);
    } finally {
      (we = t), (oc = !1);
    }
  }
  return null;
}
var Ti = [],
  Ei = 0,
  Za = null,
  Ja = 0,
  Kt = [],
  Qt = 0,
  Qr = null,
  En = 1,
  Pn = "";
function Dr(e, t) {
  (Ti[Ei++] = Ja), (Ti[Ei++] = Za), (Za = e), (Ja = t);
}
function $0(e, t, n) {
  (Kt[Qt++] = En), (Kt[Qt++] = Pn), (Kt[Qt++] = Qr), (Qr = e);
  var r = En;
  e = Pn;
  var i = 32 - on(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - on(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (En = (1 << (32 - on(t) + i)) | (n << i) | r),
      (Pn = o + e);
  } else (En = (1 << o) | (n << i) | r), (Pn = e);
}
function Ld(e) {
  e.return !== null && (Dr(e, 1), $0(e, 1, 0));
}
function Md(e) {
  for (; e === Za;)
    (Za = Ti[--Ei]), (Ti[Ei] = null), (Ja = Ti[--Ei]), (Ti[Ei] = null);
  for (; e === Qr;)
    (Qr = Kt[--Qt]),
      (Kt[Qt] = null),
      (Pn = Kt[--Qt]),
      (Kt[Qt] = null),
      (En = Kt[--Qt]),
      (Kt[Qt] = null);
}
var Dt = null,
  At = null,
  Le = !1,
  rn = null;
function F0(e, t) {
  var n = Yt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Dt = e), (At = or(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Dt = e), (At = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qr !== null ? { id: En, overflow: Pn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Yt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Dt = e),
            (At = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wf(e) {
  if (Le) {
    var t = At;
    if (t) {
      var n = t;
      if (!rg(e, t)) {
        if (yf(e)) throw Error(I(418));
        t = or(n.nextSibling);
        var r = Dt;
        t && rg(e, t)
          ? F0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Le = !1), (Dt = e));
      }
    } else {
      if (yf(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (Le = !1), (Dt = e);
    }
  }
}
function ig(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Dt = e;
}
function ua(e) {
  if (e !== Dt) return !1;
  if (!Le) return ig(e), (Le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
        (t = t !== "head" && t !== "body" && !pf(e.type, e.memoizedProps))),
      t && (t = At))
  ) {
    if (yf(e)) throw (H0(), Error(I(418)));
    for (; t;) F0(e, t), (t = or(t.nextSibling));
  }
  if ((ig(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              At = or(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      At = null;
    }
  } else At = Dt ? or(e.stateNode.nextSibling) : null;
  return !0;
}
function H0() {
  for (var e = At; e;) e = or(e.nextSibling);
}
function Wi() {
  (At = Dt = null), (Le = !1);
}
function Ad(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
var xC = Vn.ReactCurrentBatchConfig;
function bo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
          var l = i.refs;
          s === null ? delete l[o] : (l[o] = s);
        }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function ca(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
      Error(
        I(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
  );
}
function og(e) {
  var t = e._init;
  return t(e._payload);
}
function B0(e) {
  function t(w, g) {
    if (e) {
      var _ = w.deletions;
      _ === null ? ((w.deletions = [g]), (w.flags |= 16)) : _.push(g);
    }
  }
  function n(w, g) {
    if (!e) return null;
    for (; g !== null;) t(w, g), (g = g.sibling);
    return null;
  }
  function r(w, g) {
    for (w = new Map(); g !== null;)
      g.key !== null ? w.set(g.key, g) : w.set(g.index, g), (g = g.sibling);
    return w;
  }
  function i(w, g) {
    return (w = ur(w, g)), (w.index = 0), (w.sibling = null), w;
  }
  function o(w, g, _) {
    return (
      (w.index = _),
      e
        ? ((_ = w.alternate),
          _ !== null
            ? ((_ = _.index), _ < g ? ((w.flags |= 2), g) : _)
            : ((w.flags |= 2), g))
        : ((w.flags |= 1048576), g)
    );
  }
  function s(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function l(w, g, _, T) {
    return g === null || g.tag !== 6
      ? ((g = dc(_, w.mode, T)), (g.return = w), g)
      : ((g = i(g, _)), (g.return = w), g);
  }
  function u(w, g, _, T) {
    var k = _.type;
    return k === wi
      ? d(w, g, _.props.children, T, _.key)
      : g !== null &&
        (g.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Yn &&
            og(k) === g.type))
        ? ((T = i(g, _.props)), (T.ref = bo(w, g, _)), (T.return = w), T)
        : ((T = Na(_.type, _.key, _.props, null, w.mode, T)),
          (T.ref = bo(w, g, _)),
          (T.return = w),
          T);
  }
  function c(w, g, _, T) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== _.containerInfo ||
      g.stateNode.implementation !== _.implementation
      ? ((g = hc(_, w.mode, T)), (g.return = w), g)
      : ((g = i(g, _.children || [])), (g.return = w), g);
  }
  function d(w, g, _, T, k) {
    return g === null || g.tag !== 7
      ? ((g = Wr(_, w.mode, T, k)), (g.return = w), g)
      : ((g = i(g, _)), (g.return = w), g);
  }
  function h(w, g, _) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = dc("" + g, w.mode, _)), (g.return = w), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Js:
          return (
            (_ = Na(g.type, g.key, g.props, null, w.mode, _)),
            (_.ref = bo(w, null, g)),
            (_.return = w),
            _
          );
        case yi:
          return (g = hc(g, w.mode, _)), (g.return = w), g;
        case Yn:
          var T = g._init;
          return h(w, T(g._payload), _);
      }
      if (ko(g) || yo(g))
        return (g = Wr(g, w.mode, _, null)), (g.return = w), g;
      ca(w, g);
    }
    return null;
  }
  function m(w, g, _, T) {
    var k = g !== null ? g.key : null;
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return k !== null ? null : l(w, g, "" + _, T);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Js:
          return _.key === k ? u(w, g, _, T) : null;
        case yi:
          return _.key === k ? c(w, g, _, T) : null;
        case Yn:
          return (k = _._init), m(w, g, k(_._payload), T);
      }
      if (ko(_) || yo(_)) return k !== null ? null : d(w, g, _, T, null);
      ca(w, _);
    }
    return null;
  }
  function S(w, g, _, T, k) {
    if ((typeof T == "string" && T !== "") || typeof T == "number")
      return (w = w.get(_) || null), l(g, w, "" + T, k);
    if (typeof T == "object" && T !== null) {
      switch (T.$$typeof) {
        case Js:
          return (w = w.get(T.key === null ? _ : T.key) || null), u(g, w, T, k);
        case yi:
          return (w = w.get(T.key === null ? _ : T.key) || null), c(g, w, T, k);
        case Yn:
          var j = T._init;
          return S(w, g, _, j(T._payload), k);
      }
      if (ko(T) || yo(T)) return (w = w.get(_) || null), d(g, w, T, k, null);
      ca(g, T);
    }
    return null;
  }
  function b(w, g, _, T) {
    for (
      var k = null, j = null, R = g, A = (g = 0), D = null;
      R !== null && A < _.length;
      A++
    ) {
      R.index > A ? ((D = R), (R = null)) : (D = R.sibling);
      var M = m(w, R, _[A], T);
      if (M === null) {
        R === null && (R = D);
        break;
      }
      e && R && M.alternate === null && t(w, R),
        (g = o(M, g, A)),
        j === null ? (k = M) : (j.sibling = M),
        (j = M),
        (R = D);
    }
    if (A === _.length) return n(w, R), Le && Dr(w, A), k;
    if (R === null) {
      for (; A < _.length; A++)
        (R = h(w, _[A], T)),
          R !== null &&
          ((g = o(R, g, A)), j === null ? (k = R) : (j.sibling = R), (j = R));
      return Le && Dr(w, A), k;
    }
    for (R = r(w, R); A < _.length; A++)
      (D = S(R, w, A, _[A], T)),
        D !== null &&
        (e && D.alternate !== null && R.delete(D.key === null ? A : D.key),
          (g = o(D, g, A)),
          j === null ? (k = D) : (j.sibling = D),
          (j = D));
    return (
      e &&
      R.forEach(function (K) {
        return t(w, K);
      }),
      Le && Dr(w, A),
      k
    );
  }
  function x(w, g, _, T) {
    var k = yo(_);
    if (typeof k != "function") throw Error(I(150));
    if (((_ = k.call(_)), _ == null)) throw Error(I(151));
    for (
      var j = (k = null), R = g, A = (g = 0), D = null, M = _.next();
      R !== null && !M.done;
      A++, M = _.next()
    ) {
      R.index > A ? ((D = R), (R = null)) : (D = R.sibling);
      var K = m(w, R, M.value, T);
      if (K === null) {
        R === null && (R = D);
        break;
      }
      e && R && K.alternate === null && t(w, R),
        (g = o(K, g, A)),
        j === null ? (k = K) : (j.sibling = K),
        (j = K),
        (R = D);
    }
    if (M.done) return n(w, R), Le && Dr(w, A), k;
    if (R === null) {
      for (; !M.done; A++, M = _.next())
        (M = h(w, M.value, T)),
          M !== null &&
          ((g = o(M, g, A)), j === null ? (k = M) : (j.sibling = M), (j = M));
      return Le && Dr(w, A), k;
    }
    for (R = r(w, R); !M.done; A++, M = _.next())
      (M = S(R, w, A, M.value, T)),
        M !== null &&
        (e && M.alternate !== null && R.delete(M.key === null ? A : M.key),
          (g = o(M, g, A)),
          j === null ? (k = M) : (j.sibling = M),
          (j = M));
    return (
      e &&
      R.forEach(function (Q) {
        return t(w, Q);
      }),
      Le && Dr(w, A),
      k
    );
  }
  function P(w, g, _, T) {
    if (
      (typeof _ == "object" &&
        _ !== null &&
        _.type === wi &&
        _.key === null &&
        (_ = _.props.children),
        typeof _ == "object" && _ !== null)
    ) {
      switch (_.$$typeof) {
        case Js:
          e: {
            for (var k = _.key, j = g; j !== null;) {
              if (j.key === k) {
                if (((k = _.type), k === wi)) {
                  if (j.tag === 7) {
                    n(w, j.sibling),
                      (g = i(j, _.props.children)),
                      (g.return = w),
                      (w = g);
                    break e;
                  }
                } else if (
                  j.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Yn &&
                    og(k) === j.type)
                ) {
                  n(w, j.sibling),
                    (g = i(j, _.props)),
                    (g.ref = bo(w, j, _)),
                    (g.return = w),
                    (w = g);
                  break e;
                }
                n(w, j);
                break;
              } else t(w, j);
              j = j.sibling;
            }
            _.type === wi
              ? ((g = Wr(_.props.children, w.mode, T, _.key)),
                (g.return = w),
                (w = g))
              : ((T = Na(_.type, _.key, _.props, null, w.mode, T)),
                (T.ref = bo(w, g, _)),
                (T.return = w),
                (w = T));
          }
          return s(w);
        case yi:
          e: {
            for (j = _.key; g !== null;) {
              if (g.key === j)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === _.containerInfo &&
                  g.stateNode.implementation === _.implementation
                ) {
                  n(w, g.sibling),
                    (g = i(g, _.children || [])),
                    (g.return = w),
                    (w = g);
                  break e;
                } else {
                  n(w, g);
                  break;
                }
              else t(w, g);
              g = g.sibling;
            }
            (g = hc(_, w.mode, T)), (g.return = w), (w = g);
          }
          return s(w);
        case Yn:
          return (j = _._init), P(w, g, j(_._payload), T);
      }
      if (ko(_)) return b(w, g, _, T);
      if (yo(_)) return x(w, g, _, T);
      ca(w, _);
    }
    return (typeof _ == "string" && _ !== "") || typeof _ == "number"
      ? ((_ = "" + _),
        g !== null && g.tag === 6
          ? (n(w, g.sibling), (g = i(g, _)), (g.return = w), (w = g))
          : (n(w, g), (g = dc(_, w.mode, T)), (g.return = w), (w = g)),
        s(w))
      : n(w, g);
  }
  return P;
}
var Ui = B0(!0),
  W0 = B0(!1),
  el = yr(null),
  tl = null,
  Pi = null,
  Dd = null;
function Nd() {
  Dd = Pi = tl = null;
}
function Rd(e) {
  var t = el.current;
  Pe(el), (e._currentValue = t);
}
function _f(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
    )
      break;
    e = e.return;
  }
}
function Vi(e, t) {
  (tl = e),
    (Dd = Pi = null),
    (e = e.dependencies),
    e !== null &&
    e.firstContext !== null &&
    (e.lanes & t && (Ct = !0), (e.firstContext = null));
}
function Gt(e) {
  var t = e._currentValue;
  if (Dd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pi === null)) {
      if (tl === null) throw Error(I(308));
      (Pi = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else Pi = Pi.next = e;
  return t;
}
var $r = null;
function Id(e) {
  $r === null ? ($r = [e]) : $r.push(e);
}
function U0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Id(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Rn(e, r)
  );
}
function Rn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xn = !1;
function Vd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function K0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
    (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects,
    });
}
function On(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), he & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Rn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Id(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Rn(e, n)
  );
}
function Oa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bd(e, n);
  }
}
function sg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
  var i = e.updateQueue;
  Xn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      c = u.next;
    (u.next = null), s === null ? (o = c) : (s.next = c), (s = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
        (l = d.lastBaseUpdate),
        l !== s &&
        (l === null ? (d.firstBaseUpdate = c) : (l.next = c),
          (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = i.baseState;
    (s = 0), (d = c = u = null), (l = o);
    do {
      var m = l.lane,
        S = l.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
          {
            eventTime: S,
            lane: 0,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          });
        e: {
          var b = e,
            x = l;
          switch (((m = t), (S = n), x.tag)) {
            case 1:
              if (((b = x.payload), typeof b == "function")) {
                h = b.call(S, h, m);
                break e;
              }
              h = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = x.payload),
                  (m = typeof b == "function" ? b.call(S, h, m) : b),
                  m == null)
              )
                break e;
              h = Ve({}, h, m);
              break e;
            case 2:
              Xn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
            (m = i.effects),
            m === null ? (i.effects = [l]) : m.push(l));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((c = d = S), (u = h)) : (d = d.next = S),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = h),
        (i.baseState = u),
        (i.firstBaseUpdate = c),
        (i.lastBaseUpdate = d),
        (t = i.shared.interleaved),
        t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Xr |= s), (e.lanes = s), (e.memoizedState = h);
  }
}
function ag(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(I(191, i));
        i.call(r);
      }
    }
}
var ys = {},
  vn = yr(ys),
  ns = yr(ys),
  rs = yr(ys);
function Fr(e) {
  if (e === ys) throw Error(I(174));
  return e;
}
function zd(e, t) {
  switch ((Ce(rs, t), Ce(ns, e), Ce(vn, ys), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Jc(t, e));
  }
  Pe(vn), Ce(vn, t);
}
function Ki() {
  Pe(vn), Pe(ns), Pe(rs);
}
function Q0(e) {
  Fr(rs.current);
  var t = Fr(vn.current),
    n = Jc(t, e.type);
  t !== n && (Ce(ns, e), Ce(vn, n));
}
function $d(e) {
  ns.current === e && (Pe(vn), Pe(ns));
}
var Ne = yr(0);
function rl(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var sc = [];
function Fd() {
  for (var e = 0; e < sc.length; e++)
    sc[e]._workInProgressVersionPrimary = null;
  sc.length = 0;
}
var ja = Vn.ReactCurrentDispatcher,
  ac = Vn.ReactCurrentBatchConfig,
  Yr = 0,
  Ie = null,
  Xe = null,
  Ze = null,
  il = !1,
  Io = !1,
  is = 0,
  bC = 0;
function ot() {
  throw Error(I(321));
}
function Hd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!an(e[n], t[n])) return !1;
  return !0;
}
function Bd(e, t, n, r, i, o) {
  if (
    ((Yr = o),
      (Ie = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ja.current = e === null || e.memoizedState === null ? PC : kC),
      (e = n(r, i)),
      Io)
  ) {
    o = 0;
    do {
      if (((Io = !1), (is = 0), 25 <= o)) throw Error(I(301));
      (o += 1),
        (Ze = Xe = null),
        (t.updateQueue = null),
        (ja.current = OC),
        (e = n(r, i));
    } while (Io);
  }
  if (
    ((ja.current = ol),
      (t = Xe !== null && Xe.next !== null),
      (Yr = 0),
      (Ze = Xe = Ie = null),
      (il = !1),
      t)
  )
    throw Error(I(300));
  return e;
}
function Wd() {
  var e = is !== 0;
  return (is = 0), e;
}
function hn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ze === null ? (Ie.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze;
}
function qt() {
  if (Xe === null) {
    var e = Ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Xe.next;
  var t = Ze === null ? Ie.memoizedState : Ze.next;
  if (t !== null) (Ze = t), (Xe = e);
  else {
    if (e === null) throw Error(I(310));
    (Xe = e),
      (e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      Ze === null ? (Ie.memoizedState = Ze = e) : (Ze = Ze.next = e);
  }
  return Ze;
}
function os(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lc(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Xe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      c = o;
    do {
      var d = c.lane;
      if ((Yr & d) === d)
        u !== null &&
          (u = u.next =
          {
            lane: 0,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((l = u = h), (s = r)) : (u = u.next = h),
          (Ie.lanes |= d),
          (Xr |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (s = r) : (u.next = l),
      an(r, t.memoizedState) || (Ct = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Ie.lanes |= o), (Xr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uc(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    an(o, t.memoizedState) || (Ct = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Y0() { }
function X0(e, t) {
  var n = Ie,
    r = qt(),
    i = t(),
    o = !an(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ct = !0)),
      (r = r.queue),
      Ud(Z0.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Ze !== null && Ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
        ss(9, q0.bind(null, n, r, i, t), void 0, null),
        Je === null)
    )
      throw Error(I(349));
    Yr & 30 || G0(n, t, i);
  }
  return i;
}
function G0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function q0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), J0(t) && e1(e);
}
function Z0(e, t, n) {
  return n(function () {
    J0(t) && e1(e);
  });
}
function J0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !an(e, n);
  } catch {
    return !0;
  }
}
function e1(e) {
  var t = Rn(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function lg(e) {
  var t = hn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: os,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = EC.bind(null, Ie, e)),
    [t.memoizedState, e]
  );
}
function ss(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function t1() {
  return qt().memoizedState;
}
function La(e, t, n, r) {
  var i = hn();
  (Ie.flags |= e),
    (i.memoizedState = ss(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rl(e, t, n, r) {
  var i = qt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Xe !== null) {
    var s = Xe.memoizedState;
    if (((o = s.destroy), r !== null && Hd(r, s.deps))) {
      i.memoizedState = ss(t, n, o, r);
      return;
    }
  }
  (Ie.flags |= e), (i.memoizedState = ss(1 | t, n, o, r));
}
function ug(e, t) {
  return La(8390656, 8, e, t);
}
function Ud(e, t) {
  return Rl(2048, 8, e, t);
}
function n1(e, t) {
  return Rl(4, 2, e, t);
}
function r1(e, t) {
  return Rl(4, 4, e, t);
}
function i1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function o1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Rl(4, 4, i1.bind(null, t, e), n)
  );
}
function Kd() { }
function s1(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function a1(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function l1(e, t, n) {
  return Yr & 21
    ? (an(n, t) || ((n = h0()), (Ie.lanes |= n), (Xr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ct = !0)), (e.memoizedState = n));
}
function CC(e, t) {
  var n = we;
  (we = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ac.transition;
  ac.transition = {};
  try {
    e(!1), t();
  } finally {
    (we = n), (ac.transition = r);
  }
}
function u1() {
  return qt().memoizedState;
}
function TC(e, t, n) {
  var r = lr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      c1(e))
  )
    f1(t, n);
  else if (((n = U0(e, t, n, r)), n !== null)) {
    var i = wt();
    sn(n, e, r, i), d1(n, t, r);
  }
}
function EC(e, t, n) {
  var r = lr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (c1(e)) f1(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), an(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Id(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = U0(e, t, i, r)),
      n !== null && ((i = wt()), sn(n, e, r, i), d1(n, t, r));
  }
}
function c1(e) {
  var t = e.alternate;
  return e === Ie || (t !== null && t === Ie);
}
function f1(e, t) {
  Io = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function d1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bd(e, n);
  }
}
var ol = {
  readContext: Gt,
  useCallback: ot,
  useContext: ot,
  useEffect: ot,
  useImperativeHandle: ot,
  useInsertionEffect: ot,
  useLayoutEffect: ot,
  useMemo: ot,
  useReducer: ot,
  useRef: ot,
  useState: ot,
  useDebugValue: ot,
  useDeferredValue: ot,
  useTransition: ot,
  useMutableSource: ot,
  useSyncExternalStore: ot,
  useId: ot,
  unstable_isNewReconciler: !1,
},
  PC = {
    readContext: Gt,
    useCallback: function (e, t) {
      return (hn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Gt,
    useEffect: ug,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        La(4194308, 4, i1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return La(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return La(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = hn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = hn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = TC.bind(null, Ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = hn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lg,
    useDebugValue: Kd,
    useDeferredValue: function (e) {
      return (hn().memoizedState = e);
    },
    useTransition: function () {
      var e = lg(!1),
        t = e[0];
      return (e = CC.bind(null, e[1])), (hn().memoizedState = e), [t, e];
    },
    useMutableSource: function () { },
    useSyncExternalStore: function (e, t, n) {
      var r = Ie,
        i = hn();
      if (Le) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Je === null)) throw Error(I(349));
        Yr & 30 || G0(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ug(Z0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ss(9, q0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = hn(),
        t = Je.identifierPrefix;
      if (Le) {
        var n = Pn,
          r = En;
        (n = (r & ~(1 << (32 - on(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = is++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = bC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kC = {
    readContext: Gt,
    useCallback: s1,
    useContext: Gt,
    useEffect: Ud,
    useImperativeHandle: o1,
    useInsertionEffect: n1,
    useLayoutEffect: r1,
    useMemo: a1,
    useReducer: lc,
    useRef: t1,
    useState: function () {
      return lc(os);
    },
    useDebugValue: Kd,
    useDeferredValue: function (e) {
      var t = qt();
      return l1(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = lc(os)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: Y0,
    useSyncExternalStore: X0,
    useId: u1,
    unstable_isNewReconciler: !1,
  },
  OC = {
    readContext: Gt,
    useCallback: s1,
    useContext: Gt,
    useEffect: Ud,
    useImperativeHandle: o1,
    useInsertionEffect: n1,
    useLayoutEffect: r1,
    useMemo: a1,
    useReducer: uc,
    useRef: t1,
    useState: function () {
      return uc(os);
    },
    useDebugValue: Kd,
    useDeferredValue: function (e) {
      var t = qt();
      return Xe === null ? (t.memoizedState = e) : l1(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = uc(os)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: Y0,
    useSyncExternalStore: X0,
    useId: u1,
    unstable_isNewReconciler: !1,
  };
function tn(e, t) {
  if (e && e.defaultProps) {
    (t = Ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Sf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Il = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      i = lr(e),
      o = On(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = sr(e, o, i)),
      t !== null && (sn(t, e, i, r), Oa(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      i = lr(e),
      o = On(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = sr(e, o, i)),
      t !== null && (sn(t, e, i, r), Oa(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = wt(),
      r = lr(e),
      i = On(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = sr(e, i, r)),
      t !== null && (sn(t, e, r, n), Oa(t, e, r));
  },
};
function cg(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Zo(n, r) || !Zo(i, o)
        : !0
  );
}
function h1(e, t, n) {
  var r = !1,
    i = hr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Gt(o))
      : ((i = Et(t) ? Kr : ft.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Bi(e, i) : hr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Il),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
    ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function fg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
    t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
    t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Il.enqueueReplaceState(t, t.state, null);
}
function xf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Vd(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Gt(o))
    : ((o = Et(t) ? Kr : ft.current), (i.context = Bi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Sf(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
    typeof i.getSnapshotBeforeUpdate == "function" ||
    (typeof i.UNSAFE_componentWillMount != "function" &&
      typeof i.componentWillMount != "function") ||
    ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
      i.UNSAFE_componentWillMount(),
      t !== i.state && Il.enqueueReplaceState(i, i.state, null),
      nl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += rb(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jC = typeof WeakMap == "function" ? WeakMap : Map;
function p1(e, t, n) {
  (n = On(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (Af = r)), bf(e, t);
    }),
    n
  );
}
function m1(e, t, n) {
  (n = On(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        bf(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
    typeof o.componentDidCatch == "function" &&
    (n.callback = function () {
      bf(e, t),
        typeof r != "function" &&
        (ar === null ? (ar = new Set([this])) : ar.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: s !== null ? s : "",
      });
    }),
    n
  );
}
function dg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jC();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = WC.bind(null, e, t, n)), t.then(e, e));
}
function hg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pg(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
      ? (e.flags |= 65536)
      : ((e.flags |= 128),
        (n.flags |= 131072),
        (n.flags &= -52805),
        n.tag === 1 &&
        (n.alternate === null
          ? (n.tag = 17)
          : ((t = On(-1, 1)), (t.tag = 2), sr(n, t, 1))),
        (n.lanes |= 1)),
      e);
}
var LC = Vn.ReactCurrentOwner,
  Ct = !1;
function yt(e, t, n, r) {
  t.child = e === null ? W0(t, null, n, r) : Ui(t, e.child, n, r);
}
function mg(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Vi(t, i),
    (r = Bd(e, t, n, r, o, i)),
    (n = Wd()),
    e !== null && !Ct
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        In(e, t, i))
      : (Le && n && Ld(t), (t.flags |= 1), yt(e, t, r, i), t.child)
  );
}
function gg(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !eh(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), g1(e, t, o, r, i))
      : ((e = Na(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zo), n(s, r) && e.ref === t.ref)
    )
      return In(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ur(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function g1(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zo(o, r) && e.ref === t.ref)
      if (((Ct = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ct = !0);
      else return (t.lanes = e.lanes), In(e, t, i);
  }
  return Cf(e, t, n, r, i);
}
function v1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ce(Oi, Mt),
        (Mt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ce(Oi, Mt),
          (Mt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Ce(Oi, Mt),
        (Mt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ce(Oi, Mt),
      (Mt |= r);
  return yt(e, t, i, n), t.child;
}
function y1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cf(e, t, n, r, i) {
  var o = Et(n) ? Kr : ft.current;
  return (
    (o = Bi(t, o)),
    Vi(t, i),
    (n = Bd(e, t, n, r, o, i)),
    (r = Wd()),
    e !== null && !Ct
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        In(e, t, i))
      : (Le && r && Ld(t), (t.flags |= 1), yt(e, t, n, i), t.child)
  );
}
function vg(e, t, n, r, i) {
  if (Et(n)) {
    var o = !0;
    qa(t);
  } else o = !1;
  if ((Vi(t, i), t.stateNode === null))
    Ma(e, t), h1(t, n, r), xf(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Gt(c))
      : ((c = Et(n) ? Kr : ft.current), (c = Bi(t, c)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== c) && fg(t, s, r, c)),
      (Xn = !1);
    var m = t.memoizedState;
    (s.state = m),
      nl(t, r, s, i),
      (u = t.memoizedState),
      l !== r || m !== u || Tt.current || Xn
        ? (typeof d == "function" && (Sf(t, n, d, r), (u = t.memoizedState)),
          (l = Xn || cg(t, n, l, r, m, u, c))
            ? (h ||
              (typeof s.UNSAFE_componentWillMount != "function" &&
                typeof s.componentWillMount != "function") ||
              (typeof s.componentWillMount == "function" &&
                s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = c),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      K0(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : tn(t.type, l)),
      (s.props = c),
      (h = t.pendingProps),
      (m = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Gt(u))
        : ((u = Et(n) ? Kr : ft.current), (u = Bi(t, u)));
    var S = n.getDerivedStateFromProps;
    (d =
      typeof S == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== h || m !== u) && fg(t, s, r, u)),
      (Xn = !1),
      (m = t.memoizedState),
      (s.state = m),
      nl(t, r, s, i);
    var b = t.memoizedState;
    l !== h || m !== b || Tt.current || Xn
      ? (typeof S == "function" && (Sf(t, n, S, r), (b = t.memoizedState)),
        (c = Xn || cg(t, n, c, r, m, b, u) || !1)
          ? (d ||
            (typeof s.UNSAFE_componentWillUpdate != "function" &&
              typeof s.componentWillUpdate != "function") ||
            (typeof s.componentWillUpdate == "function" &&
              s.componentWillUpdate(r, b, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
              s.UNSAFE_componentWillUpdate(r, b, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
            (l === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
            (l === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (s.props = r),
        (s.state = b),
        (s.context = u),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
        (l === e.memoizedProps && m === e.memoizedState) ||
        (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
        (l === e.memoizedProps && m === e.memoizedState) ||
        (t.flags |= 1024),
        (r = !1));
  }
  return Tf(e, t, n, r, o, i);
}
function Tf(e, t, n, r, i, o) {
  y1(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ng(t, n, !1), In(e, t, o);
  (r = t.stateNode), (LC.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ui(t, e.child, null, o)), (t.child = Ui(t, null, l, o)))
      : yt(e, t, l, o),
    (t.memoizedState = r.state),
    i && ng(t, n, !0),
    t.child
  );
}
function w1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? tg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && tg(e, t.context, !1),
    zd(e, t.containerInfo);
}
function yg(e, t, n, r, i) {
  return Wi(), Ad(i), (t.flags |= 256), yt(e, t, n, r), t.child;
}
var Ef = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _1(e, t, n) {
  var r = t.pendingProps,
    i = Ne.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      l
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      Ce(Ne, i & 1),
      e === null)
  )
    return (
      wf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
          ? e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824)
          : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = $l(s, r, 0, null)),
              (e = Wr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Pf(n)),
              (t.memoizedState = Ef),
              e)
            : Qd(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return MC(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ur(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = ur(l, o)) : ((o = Wr(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Pf(n)
          : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions,
          }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ef),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ur(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
    ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qd(e, t) {
  return (
    (t = $l({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fa(e, t, n, r) {
  return (
    r !== null && Ad(r),
    Ui(t, e.child, null, n),
    (e = Qd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function MC(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cc(Error(I(422)))), fa(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = $l({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Wr(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Ui(t, e.child, null, s),
          (t.child.memoizedState = Pf(s)),
          (t.memoizedState = Ef),
          o);
  if (!(t.mode & 1)) return fa(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(I(419))), (r = cc(o, r, void 0)), fa(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ct || l)) {
    if (((r = Je), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
        i !== o.retryLane &&
        ((o.retryLane = i), Rn(e, i), sn(r, e, i, -1));
    }
    return Jd(), (r = cc(Error(I(421)))), fa(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = UC.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (At = or(i.nextSibling)),
      (Dt = t),
      (Le = !0),
      (rn = null),
      e !== null &&
      ((Kt[Qt++] = En),
        (Kt[Qt++] = Pn),
        (Kt[Qt++] = Qr),
        (En = e.id),
        (Pn = e.overflow),
        (Qr = t)),
      (t = Qd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _f(e.return, t, n);
}
function fc(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i,
    })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function S1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((yt(e, t, r.children, n), (r = Ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && wg(e, n, t);
        else if (e.tag === 19) wg(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ce(Ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null;)
          (e = n.alternate),
            e !== null && rl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          fc(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null;) {
          if (((e = i.alternate), e !== null && rl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        fc(t, !0, n, null, o);
        break;
      case "together":
        fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ma(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function In(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
      (Xr |= t.lanes),
      !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ur(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ur(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function AC(e, t, n) {
  switch (t.tag) {
    case 3:
      w1(t), Wi();
      break;
    case 5:
      Q0(t);
      break;
    case 1:
      Et(t.type) && qa(t);
      break;
    case 4:
      zd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Ce(el, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ce(Ne, Ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? _1(e, t, n)
            : (Ce(Ne, Ne.current & 1),
              (e = In(e, t, n)),
              e !== null ? e.sibling : null);
      Ce(Ne, Ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return S1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
          i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Ce(Ne, Ne.current),
          r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), v1(e, t, n);
  }
  return In(e, t, n);
}
var x1, kf, b1, C1;
x1 = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
kf = function () { };
b1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Fr(vn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Xc(e, i)), (r = Xc(e, r)), (o = []);
        break;
      case "select":
        (i = Ve({}, i, { value: void 0 })),
          (r = Ve({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Zc(e, i)), (r = Zc(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xa);
    }
    ef(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Uo.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
          r.hasOwnProperty(c) && u !== l && (u != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Uo.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && Ee("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
C1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Co(e, t) {
  if (!Le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function st(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null;)
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null;)
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function DC(e, t, n) {
  var r = t.pendingProps;
  switch ((Md(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return st(t), null;
    case 1:
      return Et(t.type) && Ga(), st(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ki(),
        Pe(Tt),
        Pe(ft),
        Fd(),
        r.pendingContext &&
        ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
        (ua(t)
          ? (t.flags |= 4)
          : e === null ||
          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
          ((t.flags |= 1024), rn !== null && (Rf(rn), (rn = null)))),
        kf(e, t),
        st(t),
        null
      );
    case 5:
      $d(t);
      var i = Fr(rs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        b1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return st(t), null;
        }
        if (((e = Fr(vn.current)), ua(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[mn] = t), (r[ts] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ee("cancel", r), Ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ee("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < jo.length; i++) Ee(jo[i], r);
              break;
            case "source":
              Ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ee("error", r), Ee("load", r);
              break;
            case "details":
              Ee("toggle", r);
              break;
            case "input":
              km(r, o), Ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Ee("invalid", r);
              break;
            case "textarea":
              jm(r, o), Ee("invalid", r);
          }
          ef(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                  (o.suppressHydrationWarning !== !0 &&
                    la(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                  r.textContent !== "" + l &&
                  (o.suppressHydrationWarning !== !0 &&
                    la(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Uo.hasOwnProperty(s) &&
                l != null &&
                s === "onScroll" &&
                Ee("scroll", r);
            }
          switch (n) {
            case "input":
              ea(r), Om(r, o, !0);
              break;
            case "textarea":
              ea(r), Lm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xa);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                    ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[mn] = t),
            (e[ts] = r),
            x1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = tf(n, r)), n)) {
              case "dialog":
                Ee("cancel", e), Ee("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < jo.length; i++) Ee(jo[i], e);
                i = r;
                break;
              case "source":
                Ee("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Ee("error", e), Ee("load", e), (i = r);
                break;
              case "details":
                Ee("toggle", e), (i = r);
                break;
              case "input":
                km(e, r), (i = Xc(e, r)), Ee("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ve({}, r, { value: void 0 })),
                  Ee("invalid", e);
                break;
              case "textarea":
                jm(e, r), (i = Zc(e, r)), Ee("invalid", e);
                break;
              default:
                i = r;
            }
            ef(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? t0(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Jy(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Ko(e, u)
                        : typeof u == "number" && Ko(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (Uo.hasOwnProperty(o)
                        ? u != null && o === "onScroll" && Ee("scroll", e)
                        : u != null && vd(e, o, u, s));
              }
            switch (n) {
              case "input":
                ea(e), Om(e, r, !1);
                break;
              case "textarea":
                ea(e), Lm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Di(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                    Di(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Xa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return st(t), null;
    case 6:
      if (e && t.stateNode != null) C1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Fr(rs.current)), Fr(vn.current), ua(t))) {
          if (
            ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[mn] = t),
              (o = r.nodeValue !== n) && ((e = Dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                la(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  la(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[mn] = t),
            (t.stateNode = r);
      }
      return st(t), null;
    case 13:
      if (
        (Pe(Ne),
          (r = t.memoizedState),
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Le && At !== null && t.mode & 1 && !(t.flags & 128))
          H0(), Wi(), (t.flags |= 98560), (o = !1);
        else if (((o = ua(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(I(318));
            if (
              ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
            )
              throw Error(I(317));
            o[mn] = t;
          } else
            Wi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          st(t), (o = !1);
        } else rn !== null && (Rf(rn), (rn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
          r &&
          ((t.child.flags |= 8192),
            t.mode & 1 &&
            (e === null || Ne.current & 1 ? Ge === 0 && (Ge = 3) : Jd())),
          t.updateQueue !== null && (t.flags |= 4),
          st(t),
          null);
    case 4:
      return (
        Ki(), kf(e, t), e === null && Jo(t.stateNode.containerInfo), st(t), null
      );
    case 10:
      return Rd(t.type._context), st(t), null;
    case 17:
      return Et(t.type) && Ga(), st(t), null;
    case 19:
      if ((Pe(Ne), (o = t.memoizedState), o === null)) return st(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Co(o, !1);
        else {
          if (Ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((s = rl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                  Co(o, !1),
                  r = s.updateQueue,
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  t.subtreeFlags = 0,
                  r = n,
                  n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                              lanes: e.lanes,
                              firstContext: e.firstContext,
                            })),
                    (n = n.sibling);
                return Ce(Ne, (Ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ue() > Yi &&
            ((t.flags |= 128), (r = !0), Co(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Co(o, !0),
                o.tail === null && o.tailMode === "hidden" && !s.alternate && !Le)
            )
              return st(t), null;
          } else
            2 * Ue() - o.renderingStartTime > Yi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Co(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ue()),
          (t.sibling = null),
          (n = Ne.current),
          Ce(Ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (st(t), null);
    case 22:
    case 23:
      return (
        Zd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Mt & 1073741824 && (st(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : st(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function NC(e, t) {
  switch ((Md(t), t.tag)) {
    case 1:
      return (
        Et(t.type) && Ga(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ki(),
        Pe(Tt),
        Pe(ft),
        Fd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $d(t), null;
    case 13:
      if (
        (Pe(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Wi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Pe(Ne), null;
    case 4:
      return Ki(), null;
    case 10:
      return Rd(t.type._context), null;
    case 22:
    case 23:
      return Zd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var da = !1,
  lt = !1,
  RC = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function ki(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Fe(e, t, r);
      }
    else n.current = null;
}
function Of(e, t, n) {
  try {
    n();
  } catch (r) {
    Fe(e, t, r);
  }
}
var _g = !1;
function IC(e, t) {
  if (((df = Ka), (e = O0()), jd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            c = 0,
            d = 0,
            h = e,
            m = null;
          t: for (; ;) {
            for (
              var S;
              h !== n || (i !== 0 && h.nodeType !== 3) || (l = s + i),
              h !== o || (r !== 0 && h.nodeType !== 3) || (u = s + r),
              h.nodeType === 3 && (s += h.nodeValue.length),
              (S = h.firstChild) !== null;

            )
              (m = h), (h = S);
            for (; ;) {
              if (h === e) break t;
              if (
                (m === n && ++c === i && (l = s),
                  m === o && ++d === r && (u = s),
                  (S = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = S;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hf = { focusedElem: e, selectionRange: n }, Ka = !1, B = t; B !== null;)
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null;) {
        t = B;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var x = b.memoizedProps,
                    P = b.memoizedState,
                    w = t.stateNode,
                    g = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : tn(t.type, x),
                      P
                    );
                  w.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var _ = t.stateNode.containerInfo;
                _.nodeType === 1
                  ? (_.textContent = "")
                  : _.nodeType === 9 &&
                  _.documentElement &&
                  _.removeChild(_.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (T) {
          Fe(t, t.return, T);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (b = _g), (_g = !1), b;
}
function Vo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Of(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function T1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), T1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
    ((t = e.stateNode),
      t !== null &&
      (delete t[mn], delete t[ts], delete t[gf], delete t[wC], delete t[_C])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function E1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sg(e) {
  e: for (; ;) {
    for (; e.sibling === null;) {
      if (e.return === null || E1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
          ? ((t = n.parentNode), t.insertBefore(e, n))
          : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lf(e, t, n), e = e.sibling; e !== null;) Lf(e, t, n), (e = e.sibling);
}
function Mf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mf(e, t, n), e = e.sibling; e !== null;) Mf(e, t, n), (e = e.sibling);
}
var et = null,
  nn = !1;
function Wn(e, t, n) {
  for (n = n.child; n !== null;) P1(e, t, n), (n = n.sibling);
}
function P1(e, t, n) {
  if (gn && typeof gn.onCommitFiberUnmount == "function")
    try {
      gn.onCommitFiberUnmount(jl, n);
    } catch { }
  switch (n.tag) {
    case 5:
      lt || ki(n, t);
    case 6:
      var r = et,
        i = nn;
      (et = null),
        Wn(e, t, n),
        (et = r),
        (nn = i),
        et !== null &&
        (nn
          ? ((e = et),
            (n = n.stateNode),
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
          : et.removeChild(n.stateNode));
      break;
    case 18:
      et !== null &&
        (nn
          ? ((e = et),
            (n = n.stateNode),
            e.nodeType === 8
              ? ic(e.parentNode, n)
              : e.nodeType === 1 && ic(e, n),
            Go(e))
          : ic(et, n.stateNode));
      break;
    case 4:
      (r = et),
        (i = nn),
        (et = n.stateNode.containerInfo),
        (nn = !0),
        Wn(e, t, n),
        (et = r),
        (nn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !lt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Of(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Wn(e, t, n);
      break;
    case 1:
      if (
        !lt &&
        (ki(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Fe(n, t, l);
        }
      Wn(e, t, n);
      break;
    case 21:
      Wn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((lt = (r = lt) || n.memoizedState !== null), Wn(e, t, n), (lt = r))
        : Wn(e, t, n);
      break;
    default:
      Wn(e, t, n);
  }
}
function xg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new RC()),
      t.forEach(function (r) {
        var i = KC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function en(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              (et = l.stateNode), (nn = !1);
              break e;
            case 3:
              (et = l.stateNode.containerInfo), (nn = !0);
              break e;
            case 4:
              (et = l.stateNode.containerInfo), (nn = !0);
              break e;
          }
          l = l.return;
        }
        if (et === null) throw Error(I(160));
        P1(o, s, i), (et = null), (nn = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        Fe(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) k1(t, e), (t = t.sibling);
}
function k1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((en(t, e), dn(e), r & 4)) {
        try {
          Vo(3, e, e.return), Vl(3, e);
        } catch (x) {
          Fe(e, e.return, x);
        }
        try {
          Vo(5, e, e.return);
        } catch (x) {
          Fe(e, e.return, x);
        }
      }
      break;
    case 1:
      en(t, e), dn(e), r & 512 && n !== null && ki(n, n.return);
      break;
    case 5:
      if (
        (en(t, e),
          dn(e),
          r & 512 && n !== null && ki(n, n.return),
          e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ko(i, "");
        } catch (x) {
          Fe(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Gy(i, o),
              tf(l, s);
            var c = tf(l, o);
            for (s = 0; s < u.length; s += 2) {
              var d = u[s],
                h = u[s + 1];
              d === "style"
                ? t0(i, h)
                : d === "dangerouslySetInnerHTML"
                  ? Jy(i, h)
                  : d === "children"
                    ? Ko(i, h)
                    : vd(i, d, h, c);
            }
            switch (l) {
              case "input":
                Gc(i, o);
                break;
              case "textarea":
                qy(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Di(i, !!o.multiple, S, !1)
                  : m !== !!o.multiple &&
                  (o.defaultValue != null
                    ? Di(i, !!o.multiple, o.defaultValue, !0)
                    : Di(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ts] = o;
          } catch (x) {
            Fe(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((en(t, e), dn(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          Fe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (en(t, e), dn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Go(t.containerInfo);
        } catch (x) {
          Fe(e, e.return, x);
        }
      break;
    case 4:
      en(t, e), dn(e);
      break;
    case 13:
      en(t, e),
        dn(e),
        (i = e.child),
        i.flags & 8192 &&
        ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
          (i.alternate !== null && i.alternate.memoizedState !== null) ||
          (Gd = Ue())),
        r & 4 && xg(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((lt = (c = lt) || d), en(t, e), (lt = c)) : en(t, e),
          dn(e),
          r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (B = e, d = e.child; d !== null;) {
            for (h = B = d; B !== null;) {
              switch (((m = B), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vo(4, m, m.return);
                  break;
                case 1:
                  ki(m, m.return);
                  var b = m.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (x) {
                      Fe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  ki(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Cg(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (B = S)) : Cg(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ;) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (i = h.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = h.stateNode),
                      (u = h.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = e0("display", s)));
              } catch (x) {
                Fe(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (x) {
                Fe(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null;) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      en(t, e), dn(e), r & 4 && xg(e);
      break;
    case 21:
      break;
    default:
      en(t, e), dn(e);
  }
}
function dn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (E1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ko(i, ""), (r.flags &= -33));
          var o = Sg(e);
          Mf(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Sg(e);
          Lf(e, l, s);
          break;
        default:
          throw Error(I(161));
      }
    } catch (u) {
      Fe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function VC(e, t, n) {
  (B = e), O1(e);
}
function O1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null;) {
    var i = B,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || da;
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || lt;
        l = da;
        var c = lt;
        if (((da = s), (lt = u) && !c))
          for (B = i; B !== null;)
            (s = B),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Tg(i)
                : u !== null
                  ? ((u.return = s), (B = u))
                  : Tg(i);
        for (; o !== null;) (B = o), O1(o), (o = o.sibling);
        (B = i), (da = l), (lt = c);
      }
      bg(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (B = o)) : bg(e);
  }
}
function bg(e) {
  for (; B !== null;) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              lt || Vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !lt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ag(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ag(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && Go(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        lt || (t.flags & 512 && jf(t));
      } catch (m) {
        Fe(t, t.return, m);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Cg(e) {
  for (; B !== null;) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Tg(e) {
  for (; B !== null;) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vl(4, t);
          } catch (u) {
            Fe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Fe(t, i, u);
            }
          }
          var o = t.return;
          try {
            jf(t);
          } catch (u) {
            Fe(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            jf(t);
          } catch (u) {
            Fe(t, s, u);
          }
      }
    } catch (u) {
      Fe(t, t.return, u);
    }
    if (t === e) {
      B = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (B = l);
      break;
    }
    B = t.return;
  }
}
var zC = Math.ceil,
  sl = Vn.ReactCurrentDispatcher,
  Yd = Vn.ReactCurrentOwner,
  Xt = Vn.ReactCurrentBatchConfig,
  he = 0,
  Je = null,
  Ke = null,
  nt = 0,
  Mt = 0,
  Oi = yr(0),
  Ge = 0,
  as = null,
  Xr = 0,
  zl = 0,
  Xd = 0,
  zo = null,
  bt = null,
  Gd = 0,
  Yi = 1 / 0,
  bn = null,
  al = !1,
  Af = null,
  ar = null,
  ha = !1,
  tr = null,
  ll = 0,
  $o = 0,
  Df = null,
  Aa = -1,
  Da = 0;
function wt() {
  return he & 6 ? Ue() : Aa !== -1 ? Aa : (Aa = Ue());
}
function lr(e) {
  return e.mode & 1
    ? he & 2 && nt !== 0
      ? nt & -nt
      : xC.transition !== null
        ? (Da === 0 && (Da = h0()), Da)
        : ((e = we),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : _0(e.type))),
          e)
    : 1;
}
function sn(e, t, n, r) {
  if (50 < $o) throw (($o = 0), (Df = null), Error(I(185)));
  ms(e, n, r),
    (!(he & 2) || e !== Je) &&
    (e === Je && (!(he & 2) && (zl |= n), Ge === 4 && Jn(e, nt)),
      Pt(e, r),
      n === 1 && he === 0 && !(t.mode & 1) && ((Yi = Ue() + 500), Nl && wr()));
}
function Pt(e, t) {
  var n = e.callbackNode;
  xb(e, t);
  var r = Ua(e, e === Je ? nt : 0);
  if (r === 0)
    n !== null && Dm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Dm(n), t === 1))
      e.tag === 0 ? SC(Eg.bind(null, e)) : z0(Eg.bind(null, e)),
        vC(function () {
          !(he & 6) && wr();
        }),
        (n = null);
    else {
      switch (p0(r)) {
        case 1:
          n = xd;
          break;
        case 4:
          n = f0;
          break;
        case 16:
          n = Wa;
          break;
        case 536870912:
          n = d0;
          break;
        default:
          n = Wa;
      }
      n = I1(n, j1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function j1(e, t) {
  if (((Aa = -1), (Da = 0), he & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (zi() && e.callbackNode !== n) return null;
  var r = Ua(e, e === Je ? nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
  else {
    t = r;
    var i = he;
    he |= 2;
    var o = M1();
    (Je !== e || nt !== t) && ((bn = null), (Yi = Ue() + 500), Br(e, t));
    do
      try {
        HC();
        break;
      } catch (l) {
        L1(e, l);
      }
    while (!0);
    Nd(),
      (sl.current = o),
      (he = i),
      Ke !== null ? (t = 0) : ((Je = null), (nt = 0), (t = Ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = af(e)), i !== 0 && ((r = i), (t = Nf(e, i)))), t === 1)
    )
      throw ((n = as), Br(e, 0), Jn(e, r), Pt(e, Ue()), n);
    if (t === 6) Jn(e, r);
    else {
      if (
        ((i = e.current.alternate),
          !(r & 30) &&
          !$C(i) &&
          ((t = ul(e, r)),
            t === 2 && ((o = af(e)), o !== 0 && ((r = o), (t = Nf(e, o)))),
            t === 1))
      )
        throw ((n = as), Br(e, 0), Jn(e, r), Pt(e, Ue()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Nr(e, bt, bn);
          break;
        case 3:
          if (
            (Jn(e, r), (r & 130023424) === r && ((t = Gd + 500 - Ue()), 10 < t))
          ) {
            if (Ua(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              wt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = mf(Nr.bind(null, e, bt, bn), t);
            break;
          }
          Nr(e, bt, bn);
          break;
        case 4:
          if ((Jn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r;) {
            var s = 31 - on(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
              (r = Ue() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * zC(r / 1960)) - r),
              10 < r)
          ) {
            e.timeoutHandle = mf(Nr.bind(null, e, bt, bn), r);
            break;
          }
          Nr(e, bt, bn);
          break;
        case 5:
          Nr(e, bt, bn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Pt(e, Ue()), e.callbackNode === n ? j1.bind(null, e) : null;
}
function Nf(e, t) {
  var n = zo;
  return (
    e.current.memoizedState.isDehydrated && (Br(e, t).flags |= 256),
    (e = ul(e, t)),
    e !== 2 && ((t = bt), (bt = n), t !== null && Rf(t)),
    e
  );
}
function Rf(e) {
  bt === null ? (bt = e) : bt.push.apply(bt, e);
}
function $C(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!an(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Jn(e, t) {
  for (
    t &= ~Xd,
    t &= ~zl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - on(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Eg(e) {
  if (he & 6) throw Error(I(327));
  zi();
  var t = Ua(e, 0);
  if (!(t & 1)) return Pt(e, Ue()), null;
  var n = ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = af(e);
    r !== 0 && ((t = r), (n = Nf(e, r)));
  }
  if (n === 1) throw ((n = as), Br(e, 0), Jn(e, t), Pt(e, Ue()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nr(e, bt, bn),
    Pt(e, Ue()),
    null
  );
}
function qd(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    (he = n), he === 0 && ((Yi = Ue() + 500), Nl && wr());
  }
}
function Gr(e) {
  tr !== null && tr.tag === 0 && !(he & 6) && zi();
  var t = he;
  he |= 1;
  var n = Xt.transition,
    r = we;
  try {
    if (((Xt.transition = null), (we = 1), e)) return e();
  } finally {
    (we = r), (Xt.transition = n), (he = t), !(he & 6) && wr();
  }
}
function Zd() {
  (Mt = Oi.current), Pe(Oi);
}
function Br(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gC(n)), Ke !== null))
    for (n = Ke.return; n !== null;) {
      var r = n;
      switch ((Md(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ga();
          break;
        case 3:
          Ki(), Pe(Tt), Pe(ft), Fd();
          break;
        case 5:
          $d(r);
          break;
        case 4:
          Ki();
          break;
        case 13:
          Pe(Ne);
          break;
        case 19:
          Pe(Ne);
          break;
        case 10:
          Rd(r.type._context);
          break;
        case 22:
        case 23:
          Zd();
      }
      n = n.return;
    }
  if (
    ((Je = e),
      (Ke = e = ur(e.current, null)),
      (nt = Mt = t),
      (Ge = 0),
      (as = null),
      (Xd = zl = Xr = 0),
      (bt = zo = null),
      $r !== null)
  ) {
    for (t = 0; t < $r.length; t++)
      if (((n = $r[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    $r = null;
  }
  return e;
}
function L1(e, t) {
  do {
    var n = Ke;
    try {
      if ((Nd(), (ja.current = ol), il)) {
        for (var r = Ie.memoizedState; r !== null;) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Yr = 0),
          (Ze = Xe = Ie = null),
          (Io = !1),
          (is = 0),
          (Yd.current = null),
          n === null || n.return === null)
      ) {
        (Ge = 1), (as = t), (Ke = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = nt),
            (l.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = l,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var S = hg(s);
          if (S !== null) {
            (S.flags &= -257),
              pg(S, s, l, o, t),
              S.mode & 1 && dg(o, c, t),
              (t = S),
              (u = c);
            var b = t.updateQueue;
            if (b === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else b.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              dg(o, c, t), Jd();
              break e;
            }
            u = Error(I(426));
          }
        } else if (Le && l.mode & 1) {
          var P = hg(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              pg(P, s, l, o, t),
              Ad(Qi(u, l));
            break e;
          }
        }
        (o = u = Qi(u, l)),
          Ge !== 4 && (Ge = 2),
          zo === null ? (zo = [o]) : zo.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var w = p1(o, u, t);
              sg(o, w);
              break e;
            case 1:
              l = u;
              var g = o.type,
                _ = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (_ !== null &&
                    typeof _.componentDidCatch == "function" &&
                    (ar === null || !ar.has(_))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var T = m1(o, l, t);
                sg(o, T);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      D1(n);
    } catch (k) {
      (t = k), Ke === n && n !== null && (Ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function M1() {
  var e = sl.current;
  return (sl.current = ol), e === null ? ol : e;
}
function Jd() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4),
    Je === null || (!(Xr & 268435455) && !(zl & 268435455)) || Jn(Je, nt);
}
function ul(e, t) {
  var n = he;
  he |= 2;
  var r = M1();
  (Je !== e || nt !== t) && ((bn = null), Br(e, t));
  do
    try {
      FC();
      break;
    } catch (i) {
      L1(e, i);
    }
  while (!0);
  if ((Nd(), (he = n), (sl.current = r), Ke !== null)) throw Error(I(261));
  return (Je = null), (nt = 0), Ge;
}
function FC() {
  for (; Ke !== null;) A1(Ke);
}
function HC() {
  for (; Ke !== null && !hb();) A1(Ke);
}
function A1(e) {
  var t = R1(e.alternate, e, Mt);
  (e.memoizedProps = e.pendingProps),
    t === null ? D1(e) : (Ke = t),
    (Yd.current = null);
}
function D1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = NC(n, t)), n !== null)) {
        (n.flags &= 32767), (Ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ge = 6), (Ke = null);
        return;
      }
    } else if (((n = DC(n, t, Mt)), n !== null)) {
      Ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ke = t;
      return;
    }
    Ke = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function Nr(e, t, n) {
  var r = we,
    i = Xt.transition;
  try {
    (Xt.transition = null), (we = 1), BC(e, t, n, r);
  } finally {
    (Xt.transition = i), (we = r);
  }
  return null;
}
function BC(e, t, n, r) {
  do zi();
  while (tr !== null);
  if (he & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (bb(e, o),
      e === Je && ((Ke = Je = null), (nt = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ha ||
      ((ha = !0),
        I1(Wa, function () {
          return zi(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
  ) {
    (o = Xt.transition), (Xt.transition = null);
    var s = we;
    we = 1;
    var l = he;
    (he |= 4),
      (Yd.current = null),
      IC(e, n),
      k1(n, e),
      uC(hf),
      (Ka = !!df),
      (hf = df = null),
      (e.current = n),
      VC(n),
      pb(),
      (he = l),
      (we = s),
      (Xt.transition = o);
  } else e.current = n;
  if (
    (ha && ((ha = !1), (tr = e), (ll = i)),
      (o = e.pendingLanes),
      o === 0 && (ar = null),
      vb(n.stateNode),
      Pt(e, Ue()),
      t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (al) throw ((al = !1), (e = Af), (Af = null), e);
  return (
    ll & 1 && e.tag !== 0 && zi(),
    (o = e.pendingLanes),
    o & 1 ? (e === Df ? $o++ : (($o = 0), (Df = e))) : ($o = 0),
    wr(),
    null
  );
}
function zi() {
  if (tr !== null) {
    var e = p0(ll),
      t = Xt.transition,
      n = we;
    try {
      if (((Xt.transition = null), (we = 16 > e ? 16 : e), tr === null))
        var r = !1;
      else {
        if (((e = tr), (tr = null), (ll = 0), he & 6)) throw Error(I(331));
        var i = he;
        for (he |= 4, B = e.current; B !== null;) {
          var o = B,
            s = o.child;
          if (B.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for (B = c; B !== null;) {
                  var d = B;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vo(8, d, o);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (B = h);
                  else
                    for (; B !== null;) {
                      d = B;
                      var m = d.sibling,
                        S = d.return;
                      if ((T1(d), d === c)) {
                        B = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (B = m);
                        break;
                      }
                      B = S;
                    }
                }
              }
              var b = o.alternate;
              if (b !== null) {
                var x = b.child;
                if (x !== null) {
                  b.child = null;
                  do {
                    var P = x.sibling;
                    (x.sibling = null), (x = P);
                  } while (x !== null);
                }
              }
              B = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (B = s);
          else
            e: for (; B !== null;) {
              if (((o = B), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vo(9, o, o.return);
                }
              var w = o.sibling;
              if (w !== null) {
                (w.return = o.return), (B = w);
                break e;
              }
              B = o.return;
            }
        }
        var g = e.current;
        for (B = g; B !== null;) {
          s = B;
          var _ = s.child;
          if (s.subtreeFlags & 2064 && _ !== null) (_.return = s), (B = _);
          else
            e: for (s = g; B !== null;) {
              if (((l = B), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vl(9, l);
                  }
                } catch (k) {
                  Fe(l, l.return, k);
                }
              if (l === s) {
                B = null;
                break e;
              }
              var T = l.sibling;
              if (T !== null) {
                (T.return = l.return), (B = T);
                break e;
              }
              B = l.return;
            }
        }
        if (
          ((he = i), wr(), gn && typeof gn.onPostCommitFiberRoot == "function")
        )
          try {
            gn.onPostCommitFiberRoot(jl, e);
          } catch { }
        r = !0;
      }
      return r;
    } finally {
      (we = n), (Xt.transition = t);
    }
  }
  return !1;
}
function Pg(e, t, n) {
  (t = Qi(n, t)),
    (t = p1(e, t, 1)),
    (e = sr(e, t, 1)),
    (t = wt()),
    e !== null && (ms(e, 1, t), Pt(e, t));
}
function Fe(e, t, n) {
  if (e.tag === 3) Pg(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Pg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ar === null || !ar.has(r)))
        ) {
          (e = Qi(n, e)),
            (e = m1(t, e, 1)),
            (t = sr(t, e, 1)),
            (e = wt()),
            t !== null && (ms(t, 1, e), Pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function WC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = wt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Je === e &&
    (nt & n) === n &&
    (Ge === 4 || (Ge === 3 && (nt & 130023424) === nt && 500 > Ue() - Gd)
      ? Br(e, 0)
      : (Xd |= n)),
    Pt(e, t);
}
function N1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ra), (ra <<= 1), !(ra & 130023424) && (ra = 4194304))
      : (t = 1));
  var n = wt();
  (e = Rn(e, t)), e !== null && (ms(e, t, n), Pt(e, n));
}
function UC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), N1(e, n);
}
function KC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), N1(e, n);
}
var R1;
R1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Tt.current) Ct = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ct = !1), AC(e, t, n);
      Ct = !!(e.flags & 131072);
    }
  else (Ct = !1), Le && t.flags & 1048576 && $0(t, Ja, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ma(e, t), (e = t.pendingProps);
      var i = Bi(t, ft.current);
      Vi(t, n), (i = Bd(null, t, r, e, i, n));
      var o = Wd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Et(r) ? ((o = !0), qa(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Vd(t),
            (i.updater = Il),
            (t.stateNode = i),
            (i._reactInternals = t),
            xf(t, r, e, n),
            (t = Tf(null, t, r, !0, o, n)))
          : ((t.tag = 0), Le && o && Ld(t), yt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
        (Ma(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = YC(r)),
          (e = tn(r, e)),
          i)
        ) {
          case 0:
            t = Cf(null, t, r, e, n);
            break e;
          case 1:
            t = vg(null, t, r, e, n);
            break e;
          case 11:
            t = mg(null, t, r, e, n);
            break e;
          case 14:
            t = gg(null, t, r, tn(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tn(r, i)),
        Cf(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tn(r, i)),
        vg(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((w1(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          K0(e, t),
          nl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
          ) {
            (i = Qi(Error(I(423)), t)), (t = yg(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Qi(Error(I(424)), t)), (t = yg(e, t, r, n, i));
            break e;
          } else
            for (
              At = or(t.stateNode.containerInfo.firstChild),
              Dt = t,
              Le = !0,
              rn = null,
              n = W0(t, null, r, n),
              t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Wi(), r === i)) {
            t = In(e, t, n);
            break e;
          }
          yt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Q0(t),
        e === null && wf(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        pf(r, i) ? (s = null) : o !== null && pf(r, o) && (t.flags |= 32),
        y1(e, t),
        yt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && wf(t), null;
    case 13:
      return _1(e, t, n);
    case 4:
      return (
        zd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ui(t, null, r, n)) : yt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tn(r, i)),
        mg(e, t, r, i, n)
      );
    case 7:
      return yt(e, t, t.pendingProps, n), t.child;
    case 8:
      return yt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return yt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (s = i.value),
            Ce(el, r._currentValue),
            (r._currentValue = s),
            o !== null)
        )
          if (an(o.value, s)) {
            if (o.children === i.children && !Tt.current) {
              t = In(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null;) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var u = l.firstContext; u !== null;) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = On(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      _f(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(I(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  _f(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null;) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        yt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Vi(t, n),
        (i = Gt(i)),
        (r = r(i)),
        (t.flags |= 1),
        yt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = tn(r, t.pendingProps)),
        (i = tn(r.type, i)),
        gg(e, t, r, i, n)
      );
    case 15:
      return g1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tn(r, i)),
        Ma(e, t),
        (t.tag = 1),
        Et(r) ? ((e = !0), qa(t)) : (e = !1),
        Vi(t, n),
        h1(t, r, i),
        xf(t, r, i, n),
        Tf(null, t, r, !0, e, n)
      );
    case 19:
      return S1(e, t, n);
    case 22:
      return v1(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function I1(e, t) {
  return c0(e, t);
}
function QC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
      null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
      null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Yt(e, t, n, r) {
  return new QC(e, t, n, r);
}
function eh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function YC(e) {
  if (typeof e == "function") return eh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wd)) return 11;
    if (e === _d) return 14;
  }
  return 2;
}
function ur(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Yt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Na(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) eh(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case wi:
        return Wr(n.children, i, o, t);
      case yd:
        (s = 8), (i |= 8);
        break;
      case Uc:
        return (
          (e = Yt(12, n, t, i | 2)), (e.elementType = Uc), (e.lanes = o), e
        );
      case Kc:
        return (e = Yt(13, n, t, i)), (e.elementType = Kc), (e.lanes = o), e;
      case Qc:
        return (e = Yt(19, n, t, i)), (e.elementType = Qc), (e.lanes = o), e;
      case Qy:
        return $l(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Uy:
              s = 10;
              break e;
            case Ky:
              s = 9;
              break e;
            case wd:
              s = 11;
              break e;
            case _d:
              s = 14;
              break e;
            case Yn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Yt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Wr(e, t, n, r) {
  return (e = Yt(7, e, r, t)), (e.lanes = n), e;
}
function $l(e, t, n, r) {
  return (
    (e = Yt(22, e, r, t)),
    (e.elementType = Qy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function dc(e, t, n) {
  return (e = Yt(6, e, null, t)), (e.lanes = n), e;
}
function hc(e, t, n) {
  return (
    (t = Yt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function XC(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
      null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qu(0)),
    (this.expirationTimes = Qu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
      0),
    (this.entanglements = Qu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function th(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new XC(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Yt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vd(o),
    e
  );
}
function GC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function V1(e) {
  if (!e) return hr;
  e = e._reactInternals;
  e: {
    if (Jr(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Et(n)) return V0(e, n, t);
  }
  return t;
}
function z1(e, t, n, r, i, o, s, l, u) {
  return (
    (e = th(n, r, !0, e, i, o, s, l, u)),
    (e.context = V1(null)),
    (n = e.current),
    (r = wt()),
    (i = lr(n)),
    (o = On(r, i)),
    (o.callback = t ?? null),
    sr(n, o, i),
    (e.current.lanes = i),
    ms(e, i, r),
    Pt(e, r),
    e
  );
}
function Fl(e, t, n, r) {
  var i = t.current,
    o = wt(),
    s = lr(i);
  return (
    (n = V1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = On(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sr(i, t, s)),
    e !== null && (sn(e, i, s, o), Oa(e, i, s)),
    s
  );
}
function cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nh(e, t) {
  kg(e, t), (e = e.alternate) && kg(e, t);
}
function qC() {
  return null;
}
var $1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
      console.error(e);
    };
function rh(e) {
  this._internalRoot = e;
}
Hl.prototype.render = rh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Fl(e, t, null, null);
};
Hl.prototype.unmount = rh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gr(function () {
      Fl(null, e, null, null);
    }),
      (t[Nn] = null);
  }
};
function Hl(e) {
  this._internalRoot = e;
}
Hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = v0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zn.length && t !== 0 && t < Zn[n].priority; n++);
    Zn.splice(n, 0, e), n === 0 && w0(e);
  }
};
function ih(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Og() { }
function ZC(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = cl(s);
        o.call(c);
      };
    }
    var s = z1(t, r, e, 0, null, !1, !1, "", Og);
    return (
      (e._reactRootContainer = s),
      (e[Nn] = s.current),
      Jo(e.nodeType === 8 ? e.parentNode : e),
      Gr(),
      s
    );
  }
  for (; (i = e.lastChild);) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = cl(u);
      l.call(c);
    };
  }
  var u = th(e, 0, !1, null, null, !1, !1, "", Og);
  return (
    (e._reactRootContainer = u),
    (e[Nn] = u.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    Gr(function () {
      Fl(t, u, n, r);
    }),
    u
  );
}
function Wl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = cl(s);
        l.call(u);
      };
    }
    Fl(t, s, e, i);
  } else s = ZC(n, t, e, i, r);
  return cl(s);
}
m0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Oo(t.pendingLanes);
        n !== 0 &&
          (bd(t, n | 1), Pt(t, Ue()), !(he & 6) && ((Yi = Ue() + 500), wr()));
      }
      break;
    case 13:
      Gr(function () {
        var r = Rn(e, 1);
        if (r !== null) {
          var i = wt();
          sn(r, e, 1, i);
        }
      }),
        nh(e, 1);
  }
};
Cd = function (e) {
  if (e.tag === 13) {
    var t = Rn(e, 134217728);
    if (t !== null) {
      var n = wt();
      sn(t, e, 134217728, n);
    }
    nh(e, 134217728);
  }
};
g0 = function (e) {
  if (e.tag === 13) {
    var t = lr(e),
      n = Rn(e, t);
    if (n !== null) {
      var r = wt();
      sn(n, e, t, r);
    }
    nh(e, t);
  }
};
v0 = function () {
  return we;
};
y0 = function (e, t) {
  var n = we;
  try {
    return (we = e), t();
  } finally {
    we = n;
  }
};
rf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Gc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
          t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Dl(r);
            if (!i) throw Error(I(90));
            Xy(r), Gc(r, i);
          }
        }
      }
      break;
    case "textarea":
      qy(e, n);
      break;
    case "select":
      (t = n.value), t != null && Di(e, !!n.multiple, t, !1);
  }
};
i0 = qd;
o0 = Gr;
var JC = { usingClientEntryPoint: !1, Events: [vs, bi, Dl, n0, r0, qd] },
  To = {
    findFiberByHostInstance: zr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  eT = {
    bundleType: To.bundleType,
    version: To.version,
    rendererPackageName: To.rendererPackageName,
    rendererConfig: To.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = l0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: To.findFiberByHostInstance || qC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var pa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!pa.isDisabled && pa.supportsFiber)
    try {
      (jl = pa.inject(eT)), (gn = pa);
    } catch { }
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JC;
It.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ih(t)) throw Error(I(200));
  return GC(e, t, null, n);
};
It.createRoot = function (e, t) {
  if (!ih(e)) throw Error(I(299));
  var n = !1,
    r = "",
    i = $1;
  return (
    t != null &&
    (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = th(e, 1, !1, null, null, n, !1, r, i)),
    (e[Nn] = t.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    new rh(t)
  );
};
It.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = l0(t)), (e = e === null ? null : e.stateNode), e;
};
It.flushSync = function (e) {
  return Gr(e);
};
It.hydrate = function (e, t, n) {
  if (!Bl(t)) throw Error(I(200));
  return Wl(null, e, t, !0, n);
};
It.hydrateRoot = function (e, t, n) {
  if (!ih(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = $1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
      (t = z1(t, null, e, 1, n ?? null, i, !1, o, s)),
      (e[Nn] = t.current),
      Jo(e),
      r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Hl(t);
};
It.render = function (e, t, n) {
  if (!Bl(t)) throw Error(I(200));
  return Wl(null, e, t, !1, n);
};
It.unmountComponentAtNode = function (e) {
  if (!Bl(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Gr(function () {
      Wl(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[Nn] = null);
      });
    }),
      !0)
    : !1;
};
It.unstable_batchedUpdates = qd;
It.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Bl(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Wl(e, t, n, !1, r);
};
It.version = "18.3.1-next-f1338f8080-20240426";
function F1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F1);
    } catch (e) {
      console.error(e);
    }
}
F1(), (Fy.exports = It);
var H1 = Fy.exports,
  jg = H1;
(Bc.createRoot = jg.createRoot), (Bc.hydrateRoot = jg.hydrateRoot);
const B1 = U.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never",
}),
  Ul = U.createContext({}),
  oh = U.createContext(null),
  sh = typeof document < "u",
  tT = sh ? U.useLayoutEffect : U.useEffect,
  W1 = U.createContext({ strict: !1 }),
  ah = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  nT = "framerAppearId",
  U1 = "data-" + ah(nT),
  rT = { skipAnimations: !1, useManualTiming: !1 };
class Lg {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function iT(e) {
  let t = new Lg(),
    n = new Lg(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (u, c = !1, d = !1) => {
        const h = d && i,
          m = h ? t : n;
        return c && s.add(u), m.add(u) && h && i && (r = t.order.length), u;
      },
      cancel: (u) => {
        n.remove(u), s.delete(u);
      },
      process: (u) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            const d = t.order[c];
            s.has(d) && (l.schedule(d), e()), d(u);
          }
        (i = !1), o && ((o = !1), l.process(u));
      },
    };
  return l;
}
const ma = [
  "read",
  "resolveKeyframes",
  "update",
  "preRender",
  "render",
  "postRender",
],
  oT = 40;
function K1(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = ma.reduce((h, m) => ((h[m] = iT(() => (n = !0))), h), {}),
    s = (h) => {
      o[h].process(i);
    },
    l = () => {
      const h = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, oT), 1)),
        (i.timestamp = h),
        (i.isProcessing = !0),
        ma.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    u = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: ma.reduce((h, m) => {
      const S = o[m];
      return (h[m] = (b, x = !1, P = !1) => (n || u(), S.schedule(b, x, P))), h;
    }, {}),
    cancel: (h) => ma.forEach((m) => o[m].cancel(h)),
    state: i,
    steps: o,
  };
}
const { schedule: lh, cancel: h5 } = K1(queueMicrotask, !1);
function sT(e, t, n, r) {
  const { visualElement: i } = U.useContext(Ul),
    o = U.useContext(W1),
    s = U.useContext(oh),
    l = U.useContext(B1).reducedMotion,
    u = U.useRef();
  (r = r || o.renderer),
    !u.current &&
    r &&
    (u.current = r(e, {
      visualState: t,
      parent: i,
      props: n,
      presenceContext: s,
      blockInitialAnimation: s ? s.initial === !1 : !1,
      reducedMotionConfig: l,
    }));
  const c = u.current;
  U.useInsertionEffect(() => {
    c && c.update(n, s);
  });
  const d = U.useRef(!!(n[U1] && !window.HandoffComplete));
  return (
    tT(() => {
      c &&
        (lh.postRender(c.render),
          d.current && c.animationState && c.animationState.animateChanges());
    }),
    U.useEffect(() => {
      c &&
        (c.updateFeatures(),
          !d.current && c.animationState && c.animationState.animateChanges(),
          d.current && ((d.current = !1), (window.HandoffComplete = !0)));
    }),
    c
  );
}
function ji(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function aT(e, t, n) {
  return U.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : ji(n) && (n.current = r));
    },
    [t]
  );
}
function ls(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Kl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const uh = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit",
],
  ch = ["initial", ...uh];
function Ql(e) {
  return Kl(e.animate) || ch.some((t) => ls(e[t]));
}
function Q1(e) {
  return !!(Ql(e) || e.variants);
}
function lT(e, t) {
  if (Ql(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ls(n) ? n : void 0,
      animate: ls(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function uT(e) {
  const { initial: t, animate: n } = lT(e, U.useContext(Ul));
  return U.useMemo(() => ({ initial: t, animate: n }), [Mg(t), Mg(n)]);
}
function Mg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ag = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag",
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"],
},
  us = {};
for (const e in Ag) us[e] = { isEnabled: (t) => Ag[e].some((n) => !!t[n]) };
function cT(e) {
  for (const t in e) us[t] = { ...us[t], ...e[t] };
}
const Y1 = U.createContext({}),
  X1 = U.createContext({}),
  fT = Symbol.for("motionComponentSymbol");
function dT({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && cT(e);
  function o(l, u) {
    let c;
    const d = { ...U.useContext(B1), ...l, layoutId: hT(l) },
      { isStatic: h } = d,
      m = uT(l),
      S = r(l, h);
    if (!h && sh) {
      m.visualElement = sT(i, S, d, t);
      const b = U.useContext(X1),
        x = U.useContext(W1).strict;
      m.visualElement && (c = m.visualElement.loadFeatures(d, x, e, b));
    }
    return v.jsxs(Ul.Provider, {
      value: m,
      children: [
        c && m.visualElement
          ? v.jsx(c, { visualElement: m.visualElement, ...d })
          : null,
        n(i, l, aT(S, m.visualElement, u), S, h, m.visualElement),
      ],
    });
  }
  const s = U.forwardRef(o);
  return (s[fT] = i), s;
}
function hT({ layoutId: e }) {
  const t = U.useContext(Y1).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function pT(e) {
  function t(r, i = {}) {
    return dT(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const mT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function fh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(mT.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const fl = {};
function gT(e) {
  Object.assign(fl, e);
}
const ws = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY",
],
  ei = new Set(ws);
function G1(e, { layout: t, layoutId: n }) {
  return (
    ei.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!fl[e] || e === "opacity"))
  );
}
const ut = (e) => !!(e && e.getVelocity),
  vT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  yT = ws.length;
function wT(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < yT; s++) {
    const l = ws[s];
    if (e[l] !== void 0) {
      const u = vT[l] || l;
      o += `${u}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const q1 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Z1 = q1("--"),
  _T = q1("var(--"),
  dh = (e) => (_T(e) ? ST.test(e.split("/*")[0].trim()) : !1),
  ST =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  xT = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  pr = (e, t, n) => (n > t ? t : n < e ? e : n),
  io = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Fo = { ...io, transform: (e) => pr(0, 1, e) },
  ga = { ...io, default: 1 },
  Ho = (e) => Math.round(e * 1e5) / 1e5,
  hh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  bT =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  CT =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function _s(e) {
  return typeof e == "string";
}
const Ss = (e) => ({
  test: (t) => _s(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`,
}),
  Qn = Ss("deg"),
  yn = Ss("%"),
  J = Ss("px"),
  TT = Ss("vh"),
  ET = Ss("vw"),
  Dg = {
    ...yn,
    parse: (e) => yn.parse(e) / 100,
    transform: (e) => yn.transform(e * 100),
  },
  Ng = { ...io, transform: Math.round },
  J1 = {
    borderWidth: J,
    borderTopWidth: J,
    borderRightWidth: J,
    borderBottomWidth: J,
    borderLeftWidth: J,
    borderRadius: J,
    radius: J,
    borderTopLeftRadius: J,
    borderTopRightRadius: J,
    borderBottomRightRadius: J,
    borderBottomLeftRadius: J,
    width: J,
    maxWidth: J,
    height: J,
    maxHeight: J,
    size: J,
    top: J,
    right: J,
    bottom: J,
    left: J,
    padding: J,
    paddingTop: J,
    paddingRight: J,
    paddingBottom: J,
    paddingLeft: J,
    margin: J,
    marginTop: J,
    marginRight: J,
    marginBottom: J,
    marginLeft: J,
    rotate: Qn,
    rotateX: Qn,
    rotateY: Qn,
    rotateZ: Qn,
    scale: ga,
    scaleX: ga,
    scaleY: ga,
    scaleZ: ga,
    skew: Qn,
    skewX: Qn,
    skewY: Qn,
    distance: J,
    translateX: J,
    translateY: J,
    translateZ: J,
    x: J,
    y: J,
    z: J,
    perspective: J,
    transformPerspective: J,
    opacity: Fo,
    originX: Dg,
    originY: Dg,
    originZ: J,
    zIndex: Ng,
    backgroundPositionX: J,
    backgroundPositionY: J,
    fillOpacity: Fo,
    strokeOpacity: Fo,
    numOctaves: Ng,
  };
function ph(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let u = !1,
    c = !1,
    d = !0;
  for (const h in t) {
    const m = t[h];
    if (Z1(h)) {
      o[h] = m;
      continue;
    }
    const S = J1[h],
      b = xT(m, S);
    if (ei.has(h)) {
      if (((u = !0), (s[h] = b), !d)) continue;
      m !== (S.default || 0) && (d = !1);
    } else h.startsWith("origin") ? ((c = !0), (l[h] = b)) : (i[h] = b);
  }
  if (
    (t.transform ||
      (u || r
        ? (i.transform = wT(e.transform, n, d, r))
        : i.transform && (i.transform = "none")),
      c)
  ) {
    const { originX: h = "50%", originY: m = "50%", originZ: S = 0 } = l;
    i.transformOrigin = `${h} ${m} ${S}`;
  }
}
const mh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ew(e, t, n) {
  for (const r in t) !ut(t[r]) && !G1(r, n) && (e[r] = t[r]);
}
function PT({ transformTemplate: e }, t, n) {
  return U.useMemo(() => {
    const r = mh();
    return (
      ph(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function kT(e, t, n) {
  const r = e.style || {},
    i = {};
  return ew(i, r, e), Object.assign(i, PT(e, t, n)), i;
}
function OT(e, t, n) {
  const r = {},
    i = kT(e, t, n);
  return (
    e.drag &&
    e.dragListener !== !1 &&
    ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
    (e.onTap || e.onTapStart || e.whileTap) &&
    (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const jT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function dl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    jT.has(e)
  );
}
let tw = (e) => !dl(e);
function LT(e) {
  e && (tw = (t) => (t.startsWith("on") ? !dl(t) : e(t)));
}
try {
  LT(require("@emotion/is-prop-valid").default);
} catch { }
function MT(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((tw(i) ||
        (n === !0 && dl(i)) ||
        (!t && !dl(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Rg(e, t, n) {
  return typeof e == "string" ? e : J.transform(t + n * e);
}
function AT(e, t, n) {
  const r = Rg(t, e.x, e.width),
    i = Rg(n, e.y, e.height);
  return `${r} ${i}`;
}
const DT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  NT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function RT(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? DT : NT;
  e[o.offset] = J.transform(-r);
  const s = J.transform(t),
    l = J.transform(n);
  e[o.array] = `${s} ${l}`;
}
function gh(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: u = 0,
    ...c
  },
  d,
  h,
  m
) {
  if ((ph(e, c, d, m), h)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: S, style: b, dimensions: x } = e;
  S.transform && (x && (b.transform = S.transform), delete S.transform),
    x &&
    (i !== void 0 || o !== void 0 || b.transform) &&
    (b.transformOrigin = AT(
      x,
      i !== void 0 ? i : 0.5,
      o !== void 0 ? o : 0.5
    )),
    t !== void 0 && (S.x = t),
    n !== void 0 && (S.y = n),
    r !== void 0 && (S.scale = r),
    s !== void 0 && RT(S, s, l, u, !1);
}
const nw = () => ({ ...mh(), attrs: {} }),
  vh = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function IT(e, t, n, r) {
  const i = U.useMemo(() => {
    const o = nw();
    return (
      gh(o, t, { enableHardwareAcceleration: !1 }, vh(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    ew(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function VT(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const u = (fh(n) ? IT : OT)(r, o, s, n),
      c = MT(r, typeof n == "string", e),
      d = n !== U.Fragment ? { ...c, ...u, ref: i } : {},
      { children: h } = r,
      m = U.useMemo(() => (ut(h) ? h.get() : h), [h]);
    return U.createElement(n, { ...d, children: m });
  };
}
function rw(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const iw = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ow(e, t, n, r) {
  rw(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(iw.has(i) ? i : ah(i), t.attrs[i]);
}
function yh(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (ut(i[s]) ||
      (t.style && ut(t.style[s])) ||
      G1(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function sw(e, t, n) {
  const r = yh(e, t, n);
  for (const i in e)
    if (ut(e[i]) || ut(t[i])) {
      const o =
        ws.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function wh(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function zT(e) {
  const t = U.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const If = (e) => Array.isArray(e),
  $T = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  FT = (e) => (If(e) ? e[e.length - 1] || 0 : e);
function Ra(e) {
  const t = ut(e) ? e.get() : e;
  return $T(t) ? t.toValue() : t;
}
function HT(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: BT(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const aw = (e) => (t, n) => {
  const r = U.useContext(Ul),
    i = U.useContext(oh),
    o = () => HT(e, t, r, i);
  return n ? o() : zT(o);
};
function BT(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const m in o) i[m] = Ra(o[m]);
  let { initial: s, animate: l } = e;
  const u = Ql(e),
    c = Q1(e);
  t &&
    c &&
    !u &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || s === !1;
  const h = d ? l : s;
  return (
    h &&
    typeof h != "boolean" &&
    !Kl(h) &&
    (Array.isArray(h) ? h : [h]).forEach((S) => {
      const b = wh(e, S);
      if (!b) return;
      const { transitionEnd: x, transition: P, ...w } = b;
      for (const g in w) {
        let _ = w[g];
        if (Array.isArray(_)) {
          const T = d ? _.length - 1 : 0;
          _ = _[T];
        }
        _ !== null && (i[g] = _);
      }
      for (const g in x) i[g] = x[g];
    }),
    i
  );
}
const ct = (e) => e,
  {
    schedule: Te,
    cancel: mr,
    state: tt,
    steps: pc,
  } = K1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0),
  WT = {
    useVisualState: aw({
      scrapeMotionValuesFromProps: sw,
      createRenderState: nw,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Te.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Te.render(() => {
            gh(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              vh(t.tagName),
              e.transformTemplate
            ),
              ow(t, n);
          });
      },
    }),
  },
  UT = {
    useVisualState: aw({
      scrapeMotionValuesFromProps: yh,
      createRenderState: mh,
    }),
  };
function KT(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(fh(e) ? WT : UT),
    preloadedFeatures: n,
    useRender: VT(t),
    createVisualElement: r,
    Component: e,
  };
}
function kn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const lw = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Yl(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const QT = (e) => (t) => lw(t) && e(t, Yl(t));
function jn(e, t, n, r) {
  return kn(e, t, QT(n), r);
}
const YT = (e, t) => (n) => t(e(n)),
  Ln = (...e) => e.reduce(YT);
function uw(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Ig = uw("dragHorizontal"),
  Vg = uw("dragVertical");
function cw(e) {
  let t = !1;
  if (e === "y") t = Vg();
  else if (e === "x") t = Ig();
  else {
    const n = Ig(),
      r = Vg();
    n && r
      ? (t = () => {
        n(), r();
      })
      : (n && n(), r && r());
  }
  return t;
}
function fw() {
  const e = cw(!0);
  return e ? (e(), !1) : !0;
}
class _r {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() { }
}
function zg(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || fw()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t);
      const u = l[r];
      u && Te.postRender(() => u(o, s));
    };
  return jn(e.current, n, i, { passive: !e.getProps()[r] });
}
class XT extends _r {
  mount() {
    this.unmount = Ln(zg(this.node, !0), zg(this.node, !1));
  }
  unmount() { }
}
class GT extends _r {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
  }
  mount() {
    this.unmount = Ln(
      kn(this.node.current, "focus", () => this.onFocus()),
      kn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() { }
}
const dw = (e, t) => (t ? (e === t ? !0 : dw(e, t.parentElement)) : !1);
function mc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Yl(n));
}
class qT extends _r {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ct),
      (this.removeEndListeners = ct),
      (this.removeAccessibleListeners = ct),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = jn(
            window,
            "pointerup",
            (l, u) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: c,
                onTapCancel: d,
                globalTapTarget: h,
              } = this.node.getProps(),
                m = !h && !dw(this.node.current, l.target) ? d : c;
              m && Te.update(() => m(l, u));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = jn(window, "pointercancel", (l, u) => this.cancelPress(l, u), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Ln(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
          if (o.key !== "Enter" || this.isPressing) return;
          const s = (l) => {
            l.key !== "Enter" ||
              !this.checkPressEnd() ||
              mc("up", (u, c) => {
                const { onTap: d } = this.node.getProps();
                d && Te.postRender(() => d(u, c));
              });
          };
          this.removeEndListeners(),
            (this.removeEndListeners = kn(this.node.current, "keyup", s)),
            mc("down", (l, u) => {
              this.startPress(l, u);
            });
        },
          n = kn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && mc("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = kn(this.node.current, "blur", r);
        this.removeAccessibleListeners = Ln(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Te.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !1),
      !fw()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Te.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = jn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = kn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Ln(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Vf = new WeakMap(),
  gc = new WeakMap(),
  ZT = (e) => {
    const t = Vf.get(e.target);
    t && t(e);
  },
  JT = (e) => {
    e.forEach(ZT);
  };
function eE({ root: e, ...t }) {
  const n = e || document;
  gc.has(n) || gc.set(n, {});
  const r = gc.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(JT, { root: e, ...t })), r[i];
}
function tE(e, t, n) {
  const r = eE(t);
  return (
    Vf.set(e, n),
    r.observe(e),
    () => {
      Vf.delete(e), r.unobserve(e);
    }
  );
}
const nE = { some: 0, all: 1 };
class rE extends _r {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : nE[i],
      },
      l = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
          this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: h } = this.node.getProps(),
          m = c ? d : h;
        m && m(u);
      };
    return tE(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(iE(t, n)) && this.startObserver();
  }
  unmount() { }
}
function iE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const oE = {
  inView: { Feature: rE },
  tap: { Feature: qT },
  focus: { Feature: GT },
  hover: { Feature: XT },
};
function hw(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function sE(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function aE(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Xl(e, t, n) {
  const r = e.getProps();
  return wh(r, t, n !== void 0 ? n : r.custom, sE(e), aE(e));
}
const cr = (e) => e * 1e3,
  Mn = (e) => e / 1e3,
  lE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  uE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  cE = { type: "keyframes", duration: 0.8 },
  fE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  dE = (e, { keyframes: t }) =>
    t.length > 2
      ? cE
      : ei.has(e)
        ? e.startsWith("scale")
          ? uE(t[1])
          : lE
        : fE;
function hE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: u,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
function _h(e, t) {
  return e[t] || e.default || e;
}
const pE = (e) => e !== null;
function Gl(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(pE),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
let Ia;
function mE() {
  Ia = void 0;
}
const fr = {
  now: () => (
    Ia === void 0 &&
    fr.set(
      tt.isProcessing || rT.useManualTiming
        ? tt.timestamp
        : performance.now()
    ),
    Ia
  ),
  set: (e) => {
    (Ia = e), queueMicrotask(mE);
  },
},
  pw = (e) => /^0[^.\s]+$/u.test(e);
function gE(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || pw(e)
      : !0;
}
let zf = ct;
const mw = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  vE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function yE(e) {
  const t = vE.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function gw(e, t, n = 1) {
  const [r, i] = yE(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return mw(s) ? parseFloat(s) : s;
  }
  return dh(i) ? gw(i, t, n + 1) : i;
}
const wE = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY",
]),
  $g = (e) => e === io || e === J,
  Fg = (e, t) => parseFloat(e.split(", ")[t]),
  Hg =
    (e, t) =>
      (n, { transform: r }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return Fg(i[1], t);
        {
          const o = r.match(/^matrix\((.+)\)$/u);
          return o ? Fg(o[1], e) : 0;
        }
      },
  _E = new Set(["x", "y", "z"]),
  SE = ws.filter((e) => !_E.has(e));
function xE(e) {
  const t = [];
  return (
    SE.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Xi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Hg(4, 13),
  y: Hg(5, 14),
};
Xi.translateX = Xi.x;
Xi.translateY = Xi.y;
const vw = (e) => (t) => t.test(e),
  bE = { test: (e) => e === "auto", parse: (e) => e },
  yw = [io, J, yn, Qn, ET, TT, bE],
  Bg = (e) => yw.find(vw(e)),
  Ur = new Set();
let $f = !1,
  Ff = !1;
function ww() {
  if (Ff) {
    const e = Array.from(Ur).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = xE(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var l;
            (l = r.getValue(o)) === null || l === void 0 || l.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Ff = !1), ($f = !1), Ur.forEach((e) => e.complete()), Ur.clear();
}
function _w() {
  Ur.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ff = !0);
  });
}
function CE() {
  _w(), ww();
}
class Sh {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Ur.add(this),
          $f || (($f = !0), Te.read(_w), Te.resolveKeyframes(ww)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const u = r.readValue(n, l);
            u != null && (t[0] = u);
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Ur.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Ur.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const xh = (e, t) => (n) =>
  !!(
    (_s(n) && CT.test(n) && n.startsWith(e)) ||
    (t && Object.prototype.hasOwnProperty.call(n, t))
  ),
  Sw = (e, t, n) => (r) => {
    if (!_s(r)) return r;
    const [i, o, s, l] = r.match(hh);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  TE = (e) => pr(0, 255, e),
  vc = { ...io, transform: (e) => Math.round(TE(e)) },
  Hr = {
    test: xh("rgb", "red"),
    parse: Sw("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      vc.transform(e) +
      ", " +
      vc.transform(t) +
      ", " +
      vc.transform(n) +
      ", " +
      Ho(Fo.transform(r)) +
      ")",
  };
function EE(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Hf = { test: xh("#"), parse: EE, transform: Hr.transform },
  Li = {
    test: xh("hsl", "hue"),
    parse: Sw("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      yn.transform(Ho(t)) +
      ", " +
      yn.transform(Ho(n)) +
      ", " +
      Ho(Fo.transform(r)) +
      ")",
  },
  at = {
    test: (e) => Hr.test(e) || Hf.test(e) || Li.test(e),
    parse: (e) =>
      Hr.test(e) ? Hr.parse(e) : Li.test(e) ? Li.parse(e) : Hf.parse(e),
    transform: (e) =>
      _s(e) ? e : e.hasOwnProperty("red") ? Hr.transform(e) : Li.transform(e),
  };
function PE(e) {
  var t, n;
  return (
    isNaN(e) &&
    _s(e) &&
    (((t = e.match(hh)) === null || t === void 0 ? void 0 : t.length) || 0) +
    (((n = e.match(bT)) === null || n === void 0 ? void 0 : n.length) || 0) >
    0
  );
}
const xw = "number",
  bw = "color",
  kE = "var",
  OE = "var(",
  Wg = "${}",
  jE =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function cs(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const l = t
    .replace(
      jE,
      (u) => (
        at.test(u)
          ? (r.color.push(o), i.push(bw), n.push(at.parse(u)))
          : u.startsWith(OE)
            ? (r.var.push(o), i.push(kE), n.push(u))
            : (r.number.push(o), i.push(xw), n.push(parseFloat(u))),
        ++o,
        Wg
      )
    )
    .split(Wg);
  return { values: n, split: l, indexes: r, types: i };
}
function Cw(e) {
  return cs(e).values;
}
function Tw(e) {
  const { split: t, types: n } = cs(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s];
        l === xw
          ? (o += Ho(i[s]))
          : l === bw
            ? (o += at.transform(i[s]))
            : (o += i[s]);
      }
    return o;
  };
}
const LE = (e) => (typeof e == "number" ? 0 : e);
function ME(e) {
  const t = Cw(e);
  return Tw(e)(t.map(LE));
}
const gr = {
  test: PE,
  parse: Cw,
  createTransformer: Tw,
  getAnimatableNone: ME,
},
  AE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function DE(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(hh) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = AE.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const NE = /\b([a-z-]*)\(.*?\)/gu,
  Bf = {
    ...gr,
    getAnimatableNone: (e) => {
      const t = e.match(NE);
      return t ? t.map(DE).join(" ") : e;
    },
  },
  RE = {
    ...J1,
    color: at,
    backgroundColor: at,
    outlineColor: at,
    fill: at,
    stroke: at,
    borderColor: at,
    borderTopColor: at,
    borderRightColor: at,
    borderBottomColor: at,
    borderLeftColor: at,
    filter: Bf,
    WebkitFilter: Bf,
  },
  bh = (e) => RE[e];
function Ew(e, t) {
  let n = bh(e);
  return (
    n !== Bf && (n = gr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const IE = new Set(["auto", "none", "0"]);
function VE(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    const o = e[r];
    typeof o == "string" && !IE.has(o) && cs(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = Ew(n, i);
}
class Pw extends Sh {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      const c = t[u];
      if (typeof c == "string" && dh(c)) {
        const d = gw(c, n.current);
        d !== void 0 && (t[u] = d),
          u === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !wE.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Bg(i),
      l = Bg(o);
    if (s !== l)
      if ($g(s) && $g(l))
        for (let u = 0; u < t.length; u++) {
          const c = t[u];
          typeof c == "string" && (t[u] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) gE(t[i]) && r.push(i);
    r.length && VE(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Xi[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      l = i[s];
    (i[s] = Xi[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
      t.length &&
      this.removedTransforms.forEach(([u, c]) => {
        n.getValue(u).set(c);
      }),
      this.resolveNoneKeyframes();
  }
}
function zE(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ug = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
      typeof e == "number" ||
      Array.isArray(e) ||
      (typeof e == "string" &&
        (gr.test(e) || e === "0") &&
        !e.startsWith("url("))
    );
function $E(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function FE(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Ug(i, t),
    l = Ug(o, t);
  return !s || !l ? !1 : $E(e) || (n === "spring" && r);
}
class kw {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && CE(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: l,
      onUpdate: u,
      isGenerator: c,
    } = this.options;
    if (!c && !FE(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        u == null || u(Gl(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
        this.onPostResolved());
  }
  onPostResolved() { }
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Ow(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const HE = 5;
function jw(e, t, n) {
  const r = Math.max(t - HE, 0);
  return Ow(n - e(r), t - r);
}
const yc = 0.001,
  BE = 0.01,
  WE = 10,
  UE = 0.05,
  KE = 1;
function QE({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = pr(UE, KE, s)),
    (e = pr(BE, WE, Mn(e))),
    s < 1
      ? ((i = (c) => {
        const d = c * s,
          h = d * e,
          m = d - n,
          S = Wf(c, s),
          b = Math.exp(-h);
        return yc - (m / S) * b;
      }),
        (o = (c) => {
          const h = c * s * e,
            m = h * n + n,
            S = Math.pow(s, 2) * Math.pow(c, 2) * e,
            b = Math.exp(-h),
            x = Wf(Math.pow(c, 2), s);
          return ((-i(c) + yc > 0 ? -1 : 1) * ((m - S) * b)) / x;
        }))
      : ((i = (c) => {
        const d = Math.exp(-c * e),
          h = (c - n) * e + 1;
        return -yc + d * h;
      }),
        (o = (c) => {
          const d = Math.exp(-c * e),
            h = (n - c) * (e * e);
          return d * h;
        }));
  const l = 5 / e,
    u = XE(i, o, l);
  if (((e = cr(e)), isNaN(u)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(u, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
const YE = 12;
function XE(e, t, n) {
  let r = n;
  for (let i = 1; i < YE; i++) r = r - e(r) / t(r);
  return r;
}
function Wf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const GE = ["duration", "bounce"],
  qE = ["stiffness", "damping", "mass"];
function Kg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function ZE(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Kg(e, qE) && Kg(e, GE)) {
    const n = QE(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Lw({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: h,
      isResolvedFromDuration: m,
    } = ZE({ ...r, velocity: -Mn(r.velocity || 0) }),
    S = h || 0,
    b = u / (2 * Math.sqrt(l * c)),
    x = o - i,
    P = Mn(Math.sqrt(l / c)),
    w = Math.abs(x) < 5;
  n || (n = w ? 0.01 : 2), t || (t = w ? 0.005 : 0.5);
  let g;
  if (b < 1) {
    const _ = Wf(P, b);
    g = (T) => {
      const k = Math.exp(-b * P * T);
      return (
        o - k * (((S + b * P * x) / _) * Math.sin(_ * T) + x * Math.cos(_ * T))
      );
    };
  } else if (b === 1) g = (_) => o - Math.exp(-P * _) * (x + (S + P * x) * _);
  else {
    const _ = P * Math.sqrt(b * b - 1);
    g = (T) => {
      const k = Math.exp(-b * P * T),
        j = Math.min(_ * T, 300);
      return (
        o - (k * ((S + b * P * x) * Math.sinh(j) + _ * x * Math.cosh(j))) / _
      );
    };
  }
  return {
    calculatedDuration: (m && d) || null,
    next: (_) => {
      const T = g(_);
      if (m) s.done = _ >= d;
      else {
        let k = S;
        _ !== 0 && (b < 1 ? (k = jw(g, _, T)) : (k = 0));
        const j = Math.abs(k) <= n,
          R = Math.abs(o - T) <= t;
        s.done = j && R;
      }
      return (s.value = s.done ? o : T), s;
    },
  };
}
function Qg({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: u,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const h = e[0],
    m = { done: !1, value: h },
    S = (A) => (l !== void 0 && A < l) || (u !== void 0 && A > u),
    b = (A) =>
      l === void 0
        ? u
        : u === void 0 || Math.abs(l - A) < Math.abs(u - A)
          ? l
          : u;
  let x = n * t;
  const P = h + x,
    w = s === void 0 ? P : s(P);
  w !== P && (x = w - h);
  const g = (A) => -x * Math.exp(-A / r),
    _ = (A) => w + g(A),
    T = (A) => {
      const D = g(A),
        M = _(A);
      (m.done = Math.abs(D) <= c), (m.value = m.done ? w : M);
    };
  let k, j;
  const R = (A) => {
    S(m.value) &&
      ((k = A),
        (j = Lw({
          keyframes: [m.value, b(m.value)],
          velocity: jw(_, A, m.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: d,
        })));
  };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let D = !1;
        return (
          !j && k === void 0 && ((D = !0), T(A), R(A)),
          k !== void 0 && A >= k ? j.next(A - k) : (!D && T(A), m)
        );
      },
    }
  );
}
const Mw = (e, t, n) =>
  (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  JE = 1e-7,
  eP = 12;
function tP(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Mw(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > JE && ++l < eP);
  return s;
}
function xs(e, t, n, r) {
  if (e === t && n === r) return ct;
  const i = (o) => tP(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Mw(i(o), t, r));
}
const nP = xs(0.42, 0, 1, 1),
  rP = xs(0, 0, 0.58, 1),
  Aw = xs(0.42, 0, 0.58, 1),
  iP = (e) => Array.isArray(e) && typeof e[0] != "number",
  Dw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Nw = (e) => (t) => 1 - e(1 - t),
  Ch = (e) => 1 - Math.sin(Math.acos(e)),
  Rw = Nw(Ch),
  oP = Dw(Ch),
  Iw = xs(0.33, 1.53, 0.69, 0.99),
  Th = Nw(Iw),
  sP = Dw(Th),
  aP = (e) =>
    (e *= 2) < 1 ? 0.5 * Th(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Yg = {
    linear: ct,
    easeIn: nP,
    easeInOut: Aw,
    easeOut: rP,
    circIn: Ch,
    circInOut: oP,
    circOut: Rw,
    backIn: Th,
    backInOut: sP,
    backOut: Iw,
    anticipate: aP,
  },
  Xg = (e) => {
    if (Array.isArray(e)) {
      zf(e.length === 4);
      const [t, n, r, i] = e;
      return xs(t, n, r, i);
    } else if (typeof e == "string") return zf(Yg[e] !== void 0), Yg[e];
    return e;
  },
  fs = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Re = (e, t, n) => e + (t - e) * n;
function wc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function lP({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      u = 2 * n - l;
    (i = wc(u, l, e + 1 / 3)), (o = wc(u, l, e)), (s = wc(u, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const _c = (e, t, n) => {
  const r = e * e,
    i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
},
  uP = [Hf, Hr, Li],
  cP = (e) => uP.find((t) => t.test(e));
function Gg(e) {
  const t = cP(e);
  let n = t.parse(e);
  return t === Li && (n = lP(n)), n;
}
const qg = (e, t) => {
  const n = Gg(e),
    r = Gg(t),
    i = { ...n };
  return (o) => (
    (i.red = _c(n.red, r.red, o)),
    (i.green = _c(n.green, r.green, o)),
    (i.blue = _c(n.blue, r.blue, o)),
    (i.alpha = Re(n.alpha, r.alpha, o)),
    Hr.transform(i)
  );
},
  Uf = new Set(["none", "hidden"]);
function fP(e, t) {
  return Uf.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Kf(e, t) {
  return (n) => (n > 0 ? t : e);
}
function dP(e, t) {
  return (n) => Re(e, t, n);
}
function Eh(e) {
  return typeof e == "number"
    ? dP
    : typeof e == "string"
      ? dh(e)
        ? Kf
        : at.test(e)
          ? qg
          : mP
      : Array.isArray(e)
        ? Vw
        : typeof e == "object"
          ? at.test(e)
            ? qg
            : hP
          : Kf;
}
function Vw(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Eh(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function hP(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Eh(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function pP(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      u = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[o] = u), i[s]++;
  }
  return r;
}
const mP = (e, t) => {
  const n = gr.createTransformer(t),
    r = cs(e),
    i = cs(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Uf.has(e) && !i.values.length) || (Uf.has(t) && !r.values.length)
      ? fP(e, t)
      : Ln(Vw(pP(r, i), i.values), n)
    : Kf(e, t);
};
function zw(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Re(e, t, n)
    : Eh(e)(e, t);
}
function gP(e, t, n) {
  const r = [],
    i = n || zw,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[s] || ct : t;
      l = Ln(u, l);
    }
    r.push(l);
  }
  return r;
}
function vP(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((zf(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = gP(t, r, i),
    l = s.length,
    u = (c) => {
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const h = fs(e[d], e[d + 1], c);
      return s[d](h);
    };
  return n ? (c) => u(pr(e[0], e[o - 1], c)) : u;
}
function yP(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = fs(0, t, r);
    e.push(Re(n, 1, i));
  }
}
function wP(e) {
  const t = [0];
  return yP(t, e.length - 1), t;
}
function _P(e, t) {
  return e.map((n) => n * t);
}
function SP(e, t) {
  return e.map(() => t || Aw).splice(0, e.length - 1);
}
function hl({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = iP(r) ? r.map(Xg) : Xg(r),
    o = { done: !1, value: t[0] },
    s = _P(n && n.length === t.length ? n : wP(t), e),
    l = vP(s, t, { ease: Array.isArray(i) ? i : SP(t, i) });
  return {
    calculatedDuration: e,
    next: (u) => ((o.value = l(u)), (o.done = u >= e), o),
  };
}
const Zg = 2e4;
function xP(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Zg;) (t += n), (r = e.next(t));
  return t >= Zg ? 1 / 0 : t;
}
const bP = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Te.update(t, !0),
    stop: () => mr(t),
    now: () => (tt.isProcessing ? tt.timestamp : fr.now()),
  };
},
  CP = { decay: Qg, inertia: Qg, tween: hl, keyframes: hl, spring: Lw },
  TP = (e) => e / 100;
class Ph extends kw {
  constructor({ KeyframeResolver: t = Sh, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: r, motionValue: i, keyframes: o } = this.options,
      s = (l, u) => this.onKeyframesResolved(l, u);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(o, s, r, i))
      : (this.resolver = new t(o, s, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: s = 0,
    } = this.options,
      l = CP[n] || hl;
    let u, c;
    l !== hl &&
      typeof t[0] != "number" &&
      ((u = Ln(TP, zw(t[0], t[1]))), (t = [0, 100]));
    const d = l({ ...this.options, keyframes: t });
    o === "mirror" &&
      (c = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      d.calculatedDuration === null && (d.calculatedDuration = xP(d));
    const { calculatedDuration: h } = d,
      m = h + i,
      S = m * (r + 1) - i;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: u,
      calculatedDuration: h,
      resolvedDuration: m,
      totalDuration: S,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: A } = this.options;
      return { done: !0, value: A[A.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: u,
      calculatedDuration: c,
      totalDuration: d,
      resolvedDuration: h,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: m,
      repeat: S,
      repeatType: b,
      repeatDelay: x,
      onUpdate: P,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
      (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const w = this.currentTime - m * (this.speed >= 0 ? 1 : -1),
      g = this.speed >= 0 ? w < 0 : w > d;
    (this.currentTime = Math.max(w, 0)),
      this.state === "finished" &&
      this.holdTime === null &&
      (this.currentTime = d);
    let _ = this.currentTime,
      T = o;
    if (S) {
      const A = Math.min(this.currentTime, d) / h;
      let D = Math.floor(A),
        M = A % 1;
      !M && A >= 1 && (M = 1),
        M === 1 && D--,
        (D = Math.min(D, S + 1)),
        !!(D % 2) &&
        (b === "reverse"
          ? ((M = 1 - M), x && (M -= x / h))
          : b === "mirror" && (T = s)),
        (_ = pr(0, 1, M) * h);
    }
    const k = g ? { done: !1, value: u[0] } : T.next(_);
    l && (k.value = l(k.value));
    let { done: j } = k;
    !g &&
      c !== null &&
      (j = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const R =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && j));
    return (
      R && i !== void 0 && (k.value = Gl(u, this.options, i)),
      P && P(k.value),
      R && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Mn(t.calculatedDuration) : 0;
  }
  get time() {
    return Mn(this.currentTime);
  }
  set time(t) {
    (t = cr(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Mn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = bP, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const $w = (e) => Array.isArray(e) && typeof e[0] == "number";
function Fw(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in kh) ||
    $w(e) ||
    (Array.isArray(e) && e.every(Fw))
  );
}
const Lo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  kh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Lo([0, 0.65, 0.55, 1]),
    circOut: Lo([0.55, 0, 1, 0.45]),
    backIn: Lo([0.31, 0.01, 0.66, -0.59]),
    backOut: Lo([0.33, 1.53, 0.69, 0.99]),
  };
function EP(e) {
  return Hw(e) || kh.easeOut;
}
function Hw(e) {
  if (e) return $w(e) ? Lo(e) : Array.isArray(e) ? e.map(EP) : kh[e];
}
function PP(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: u,
  } = {}
) {
  const c = { [t]: n };
  u && (c.offset = u);
  const d = Hw(l);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const kP = zE(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  OP = new Set(["opacity", "clipPath", "filter", "transform"]),
  pl = 10,
  jP = 2e4;
function LP(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !Fw(e.ease);
}
function MP(e, t) {
  const n = new Ph({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < jP;) (r = n.sample(o)), i.push(r.value), (o += pl);
  return { times: void 0, keyframes: i, duration: o - pl, ease: "linear" };
}
class Jg extends kw {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new Pw(i, (o, s) => this.onKeyframesResolved(o, s), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: l,
      motionValue: u,
      name: c,
    } = this.options;
    if (!(!((r = u.owner) === null || r === void 0) && r.current)) return !1;
    if (LP(this.options)) {
      const { onComplete: h, onUpdate: m, motionValue: S, ...b } = this.options,
        x = MP(t, b);
      (t = x.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = x.duration),
        (o = x.times),
        (s = x.ease),
        (l = "keyframes");
    }
    const d = PP(u.owner.current, c, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (d.startTime = fr.now()),
      this.pendingTimeline
        ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
          const { onComplete: h } = this.options;
          u.set(Gl(t, this.options, n)),
            h && h(),
            this.cancel(),
            this.resolveFinishedPromise();
        }),
      { animation: d, duration: i, times: o, type: l, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Mn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Mn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = cr(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return ct;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return ct;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: l,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          ...h
        } = this.options,
          m = new Ph({
            ...h,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: l,
            isGenerator: !0,
          }),
          S = cr(this.time);
        u.setWithVelocity(m.sample(S - pl).value, m.sample(S).value, pl);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: l,
    } = t;
    return (
      kP() &&
      r &&
      OP.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      l !== "inertia"
    );
  }
}
const Oh =
  (e, t, n, r = {}, i, o) =>
    (s) => {
      const l = _h(r, e) || {},
        u = l.delay || r.delay || 0;
      let { elapsed: c = 0 } = r;
      c = c - cr(u);
      let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -c,
        onUpdate: (m) => {
          t.set(m), l.onUpdate && l.onUpdate(m);
        },
        onComplete: () => {
          s(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      hE(l) || (d = { ...d, ...dE(e, d) }),
        d.duration && (d.duration = cr(d.duration)),
        d.repeatDelay && (d.repeatDelay = cr(d.repeatDelay)),
        d.from !== void 0 && (d.keyframes[0] = d.from);
      let h = !1;
      if (
        ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
          ((d.duration = 0), d.delay === 0 && (h = !0)),
          h && !o && t.get() !== void 0)
      ) {
        const m = Gl(d.keyframes, l);
        if (m !== void 0) {
          Te.update(() => {
            d.onUpdate(m), d.onComplete();
          });
          return;
        }
      }
      return !o && Jg.supports(d) ? new Jg(d) : new Ph(d);
    };
function ml(e) {
  return !!(ut(e) && e.add);
}
function jh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Lh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Mh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return jh(this.subscriptions, t), () => Lh(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ev = 30,
  AP = (e) => !isNaN(parseFloat(e));
class DP {
  constructor(t, n = {}) {
    (this.version = "11.2.0"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = fr.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
          this.events.change &&
          this.events.change.notify(this.current),
          i &&
          this.events.renderRequest &&
          this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = AP(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = fr.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Mh());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
        r(),
          Te.read(() => {
            this.events.change.getSize() || this.stop();
          });
      }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = fr.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > ev
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ev);
    return Ow(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ds(e, t) {
  return new DP(e, t);
}
function NP(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ds(n));
}
function RP(e, t) {
  const n = Xl(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = FT(o[s]);
    NP(e, s, l);
  }
}
function IP({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Bw(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...u } = t;
  const c = e.getValue("willChange");
  r && (s = r);
  const d = [],
    h = i && e.animationState && e.animationState.getState()[i];
  for (const m in u) {
    const S = e.getValue(
      m,
      (o = e.latestValues[m]) !== null && o !== void 0 ? o : null
    ),
      b = u[m];
    if (b === void 0 || (h && IP(h, m))) continue;
    const x = { delay: n, elapsed: 0, ..._h(s || {}, m) };
    let P = !1;
    if (window.HandoffAppearAnimations) {
      const _ = e.getProps()[U1];
      if (_) {
        const T = window.HandoffAppearAnimations(_, m);
        T !== null && ((x.elapsed = T), (P = !0));
      }
    }
    S.start(
      Oh(m, S, b, e.shouldReduceMotion && ei.has(m) ? { type: !1 } : x, e, P)
    );
    const w = S.animation;
    w && (ml(c) && (c.add(m), w.then(() => c.remove(m))), d.push(w));
  }
  return (
    l &&
    Promise.all(d).then(() => {
      Te.update(() => {
        l && RP(e, l);
      });
    }),
    d
  );
}
function Qf(e, t, n = {}) {
  var r;
  const i = Xl(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(Bw(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
          const {
            delayChildren: d = 0,
            staggerChildren: h,
            staggerDirection: m,
          } = o;
          return VP(e, t, d + c, h, m, n);
        }
        : () => Promise.resolve(),
    { when: u } = o;
  if (u) {
    const [c, d] = u === "beforeChildren" ? [s, l] : [l, s];
    return c().then(() => d());
  } else return Promise.all([s(), l(n.delay)]);
}
function VP(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    u = i === 1 ? (c = 0) => c * r : (c = 0) => l - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(zP)
      .forEach((c, d) => {
        c.notify("AnimationStart", t),
          s.push(
            Qf(c, t, { ...o, delay: n + u(d) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function zP(e, t) {
  return e.sortNodePosition(t);
}
function $P(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Qf(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Qf(e, t, n);
  else {
    const i = typeof t == "function" ? Xl(e, t, n.custom) : t;
    r = Promise.all(Bw(e, i, n));
  }
  return r.then(() => {
    Te.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const FP = [...uh].reverse(),
  HP = uh.length;
function BP(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => $P(e, n, r)));
}
function WP(e) {
  let t = BP(e);
  const n = KP();
  let r = !0;
  const i = (u) => (c, d) => {
    var h;
    const m = Xl(
      e,
      d,
      u === "exit"
        ? (h = e.presenceContext) === null || h === void 0
          ? void 0
          : h.custom
        : void 0
    );
    if (m) {
      const { transition: S, transitionEnd: b, ...x } = m;
      c = { ...c, ...x, ...b };
    }
    return c;
  };
  function o(u) {
    t = u(e);
  }
  function s(u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      h = [],
      m = new Set();
    let S = {},
      b = 1 / 0;
    for (let P = 0; P < HP; P++) {
      const w = FP[P],
        g = n[w],
        _ = c[w] !== void 0 ? c[w] : d[w],
        T = ls(_),
        k = w === u ? g.isActive : null;
      k === !1 && (b = P);
      let j = _ === d[w] && _ !== c[w] && T;
      if (
        (j && r && e.manuallyAnimateOnMount && (j = !1),
          (g.protectedKeys = { ...S }),
          (!g.isActive && k === null) ||
          (!_ && !g.prevProp) ||
          Kl(_) ||
          typeof _ == "boolean")
      )
        continue;
      let A =
        UP(g.prevProp, _) ||
        (w === u && g.isActive && !j && T) ||
        (P > b && T),
        D = !1;
      const M = Array.isArray(_) ? _ : [_];
      let K = M.reduce(i(w), {});
      k === !1 && (K = {});
      const { prevResolvedValues: Q = {} } = g,
        Y = { ...Q, ...K },
        X = (ge) => {
          (A = !0),
            m.has(ge) && ((D = !0), m.delete(ge)),
            (g.needsAnimating[ge] = !0);
          const de = e.getValue(ge);
          de && (de.liveStyle = !1);
        };
      for (const ge in Y) {
        const de = K[ge],
          He = Q[ge];
        if (S.hasOwnProperty(ge)) continue;
        let z = !1;
        If(de) && If(He) ? (z = !hw(de, He)) : (z = de !== He),
          z
            ? de != null
              ? X(ge)
              : m.add(ge)
            : de !== void 0 && m.has(ge)
              ? X(ge)
              : (g.protectedKeys[ge] = !0);
      }
      (g.prevProp = _),
        (g.prevResolvedValues = K),
        g.isActive && (S = { ...S, ...K }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
        (!j || D) &&
        h.push(...M.map((ge) => ({ animation: ge, options: { type: w } })));
    }
    if (m.size) {
      const P = {};
      m.forEach((w) => {
        const g = e.getBaseTarget(w),
          _ = e.getValue(w);
        _ && (_.liveStyle = !0), (P[w] = g ?? null);
      }),
        h.push({ animation: P });
    }
    let x = !!h.length;
    return (
      r &&
      (c.initial === !1 || c.initial === c.animate) &&
      !e.manuallyAnimateOnMount &&
      (x = !1),
      (r = !1),
      x ? t(h) : Promise.resolve()
    );
  }
  function l(u, c) {
    var d;
    if (n[u].isActive === c) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((m) => {
        var S;
        return (S = m.animationState) === null || S === void 0
          ? void 0
          : S.setActive(u, c);
      }),
      (n[u].isActive = c);
    const h = s(u);
    for (const m in n) n[m].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function UP(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hw(t, e) : !1;
}
function Mr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function KP() {
  return {
    animate: Mr(!0),
    whileInView: Mr(),
    whileHover: Mr(),
    whileTap: Mr(),
    whileDrag: Mr(),
    whileFocus: Mr(),
    exit: Mr(),
  };
}
class QP extends _r {
  constructor(t) {
    super(t), t.animationState || (t.animationState = WP(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Kl(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() { }
}
let YP = 0;
class XP extends _r {
  constructor() {
    super(...arguments), (this.id = YP++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() { }
}
const GP = { animation: { Feature: QP }, exit: { Feature: XP } },
  tv = (e, t) => Math.abs(e - t);
function qP(e, t) {
  const n = tv(e.x, t.x),
    r = tv(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ww {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const h = xc(this.lastMoveEventInfo, this.history),
            m = this.startEvent !== null,
            S = qP(h.offset, { x: 0, y: 0 }) >= 3;
          if (!m && !S) return;
          const { point: b } = h,
            { timestamp: x } = tt;
          this.history.push({ ...b, timestamp: x });
          const { onStart: P, onMove: w } = this.handlers;
          m ||
            (P && P(this.lastMoveEvent, h),
              (this.startEvent = this.lastMoveEvent)),
            w && w(this.lastMoveEvent, h);
        }),
        (this.handlePointerMove = (h, m) => {
          (this.lastMoveEvent = h),
            (this.lastMoveEventInfo = Sc(m, this.transformPagePoint)),
            Te.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (h, m) => {
          this.end();
          const { onEnd: S, onSessionEnd: b, resumeAnimation: x } = this.handlers;
          if (
            (this.dragSnapToOrigin && x && x(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const P = xc(
            h.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Sc(m, this.transformPagePoint),
            this.history
          );
          this.startEvent && S && S(h, P), b && b(h, P);
        }),
        !lw(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Yl(t),
      l = Sc(s, this.transformPagePoint),
      { point: u } = l,
      { timestamp: c } = tt;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, xc(l, this.history)),
      (this.removeListeners = Ln(
        jn(this.contextWindow, "pointermove", this.handlePointerMove),
        jn(this.contextWindow, "pointerup", this.handlePointerUp),
        jn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), mr(this.updatePoint);
  }
}
function Sc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function nv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function xc({ point: e }, t) {
  return {
    point: e,
    delta: nv(e, Uw(t)),
    offset: nv(e, ZP(t)),
    velocity: JP(t, 0.1),
  };
}
function ZP(e) {
  return e[0];
}
function Uw(e) {
  return e[e.length - 1];
}
function JP(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Uw(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > cr(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Mn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Rt(e) {
  return e.max - e.min;
}
function Yf(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function rv(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Re(t.min, t.max, e.origin)),
    (e.scale = Rt(n) / Rt(t)),
    (Yf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Re(n.min, n.max, e.origin) - e.originPoint),
    (Yf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Bo(e, t, n, r) {
  rv(e.x, t.x, n.x, r ? r.originX : void 0),
    rv(e.y, t.y, n.y, r ? r.originY : void 0);
}
function iv(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Rt(t));
}
function ek(e, t, n) {
  iv(e.x, t.x, n.x), iv(e.y, t.y, n.y);
}
function ov(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Rt(t));
}
function Wo(e, t, n) {
  ov(e.x, t.x, n.x), ov(e.y, t.y, n.y);
}
function tk(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Re(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Re(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function sv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function nk(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: sv(e.x, n, i), y: sv(e.y, t, r) };
}
function av(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function rk(e, t) {
  return { x: av(e.x, t.x), y: av(e.y, t.y) };
}
function ik(e, t) {
  let n = 0.5;
  const r = Rt(e),
    i = Rt(t);
  return (
    i > r
      ? (n = fs(t.min, t.max - r, e.min))
      : r > i && (n = fs(e.min, e.max - i, t.min)),
    pr(0, 1, n)
  );
}
function ok(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Xf = 0.35;
function sk(e = Xf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Xf),
    { x: lv(e, "left", "right"), y: lv(e, "top", "bottom") }
  );
}
function lv(e, t, n) {
  return { min: uv(e, t), max: uv(e, n) };
}
function uv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const cv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Mi = () => ({ x: cv(), y: cv() }),
  fv = () => ({ min: 0, max: 0 }),
  We = () => ({ x: fv(), y: fv() });
function Ut(e) {
  return [e("x"), e("y")];
}
function Kw({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ak({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lk(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function bc(e) {
  return e === void 0 || e === 1;
}
function Gf({ scale: e, scaleX: t, scaleY: n }) {
  return !bc(e) || !bc(t) || !bc(n);
}
function Rr(e) {
  return (
    Gf(e) ||
    Qw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Qw(e) {
  return dv(e.x) || dv(e.y);
}
function dv(e) {
  return e && e !== "0%";
}
function gl(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function hv(e, t, n, r, i) {
  return i !== void 0 && (e = gl(e, i, r)), gl(e, n, r) + t;
}
function qf(e, t = 0, n = 1, r, i) {
  (e.min = hv(e.min, t, n, r, i)), (e.max = hv(e.max, t, n, r, i));
}
function Yw(e, { x: t, y: n }) {
  qf(e.x, t.translate, t.scale, t.originPoint),
    qf(e.y, n.translate, n.scale, n.originPoint);
}
function uk(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const u = o.instance;
    (u && u.style && u.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Ai(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
        s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Yw(e, s)),
        r && Rr(o.latestValues) && Ai(e, o.latestValues));
  }
  (t.x = pv(t.x)), (t.y = pv(t.y));
}
function pv(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Gn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function mv(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = Re(e.min, e.max, o);
  qf(e, t[n], t[r], s, t.scale);
}
const ck = ["x", "scaleX", "originX"],
  fk = ["y", "scaleY", "originY"];
function Ai(e, t) {
  mv(e.x, t, ck), mv(e.y, t, fk);
}
function Xw(e, t) {
  return Kw(lk(e.getBoundingClientRect(), t));
}
function dk(e, t, n) {
  const r = Xw(e, n),
    { scroll: i } = t;
  return i && (Gn(r.x, i.offset.x), Gn(r.y, i.offset.y)), r;
}
const Gw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  hk = new WeakMap();
class pk {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = We()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (d) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(),
        n && this.snapToCursor(Yl(d, "page").point);
    },
      o = (d, h) => {
        const { drag: m, dragPropagation: S, onDragStart: b } = this.getProps();
        if (
          m &&
          !S &&
          (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = cw(m)),
            !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
          ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ut((P) => {
            let w = this.getAxisMotionValue(P).get() || 0;
            if (yn.test(w)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const _ = g.layout.layoutBox[P];
                _ && (w = Rt(_) * (parseFloat(w) / 100));
              }
            }
            this.originPoint[P] = w;
          }),
          b && Te.postRender(() => b(d, h));
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      s = (d, h) => {
        const {
          dragPropagation: m,
          dragDirectionLock: S,
          onDirectionLock: b,
          onDrag: x,
        } = this.getProps();
        if (!m && !this.openGlobalLock) return;
        const { offset: P } = h;
        if (S && this.currentDirection === null) {
          (this.currentDirection = mk(P)),
            this.currentDirection !== null && b && b(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, P),
          this.updateAxis("y", h.point, P),
          this.visualElement.render(),
          x && x(d, h);
      },
      l = (d, h) => this.stop(d, h),
      u = () =>
        Ut((d) => {
          var h;
          return (
            this.getAnimationState(d) === "paused" &&
            ((h = this.getAxisMotionValue(d).animation) === null || h === void 0
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Ww(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Gw(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && Te.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !va(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = tk(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    n && ji(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = nk(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = sk(r)),
      o !== this.constraints &&
      i &&
      this.constraints &&
      !this.hasMutatedConstraints &&
      Ut((s) => {
        this.constraints !== !1 &&
          this.getAxisMotionValue(s) &&
          (this.constraints[s] = ok(i.layoutBox[s], this.constraints[s]));
      });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ji(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = dk(r, i.root, this.visualElement.getTransformPagePoint());
    let s = rk(i.layout.layoutBox, o);
    if (n) {
      const l = n(ak(s));
      (this.hasMutatedConstraints = !!l), l && (s = Kw(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
      drag: n,
      dragMomentum: r,
      dragElastic: i,
      dragTransition: o,
      dragSnapToOrigin: s,
      onDragTransitionEnd: l,
    } = this.getProps(),
      u = this.constraints || {},
      c = Ut((d) => {
        if (!va(d, n, this.currentDirection)) return;
        let h = (u && u[d]) || {};
        s && (h = { min: 0, max: 0 });
        const m = i ? 200 : 1e6,
          S = i ? 40 : 1e7,
          b = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: m,
            bounceDamping: S,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...h,
          };
        return this.startAxisValueAnimation(d, b);
      });
    return Promise.all(c).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Oh(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    Ut((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ut((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ut((n) => {
      const { drag: r } = this.getProps();
      if (!va(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - Re(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ji(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ut((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const u = l.get();
        i[s] = ik({ min: u, max: u }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ut((s) => {
        if (!va(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: u, max: c } = this.constraints[s];
        l.set(Re(u, c, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    hk.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = jn(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(u);
      }),
      r = () => {
        const { dragConstraints: u } = this.getProps();
        ji(u) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = kn(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Ut((d) => {
              const h = this.getAxisMotionValue(d);
              h &&
                ((this.originPoint[d] += u[d].translate),
                  h.set(h.get() + u[d].translate));
            }),
              this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Xf,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function va(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function mk(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class gk extends _r {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ct),
      (this.removeListeners = ct),
      (this.controls = new pk(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ct);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const gv = (e) => (t, n) => {
  e && Te.postRender(() => e(t, n));
};
class vk extends _r {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ct);
  }
  onPointerDown(t) {
    this.session = new Ww(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Gw(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: gv(t),
      onStart: gv(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && Te.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = jn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function yk() {
  const e = U.useContext(oh);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = U.useId();
  return U.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Va = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function vv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Eo = {
  correct: (e, t) => {
    if (!t.target) return e;
    if (typeof e == "string")
      if (J.test(e)) e = parseFloat(e);
      else return e;
    const n = vv(e, t.target.x),
      r = vv(e, t.target.y);
    return `${n}% ${r}%`;
  },
},
  wk = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = gr.parse(e);
      if (i.length > 5) return r;
      const o = gr.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        u = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= u);
      const c = Re(l, u, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  };
class _k extends U.Component {
  componentDidMount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r,
      layoutId: i,
    } = this.props,
      { projection: o } = t;
    gT(Sk),
      o &&
      (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Va.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
      layoutDependency: n,
      visualElement: r,
      drag: i,
      isPresent: o,
    } = this.props,
      s = r.projection;
    return (
      s &&
      ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
        (o
          ? s.promote()
          : s.relegate() ||
          Te.postRender(() => {
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove();
          }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
        lh.postRender(() => {
          !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
  }
  componentWillUnmount() {
    const {
      visualElement: t,
      layoutGroup: n,
      switchLayoutGroup: r,
    } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function qw(e) {
  const [t, n] = yk(),
    r = U.useContext(Y1);
  return v.jsx(_k, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: U.useContext(X1),
    isPresent: t,
    safeToRemove: n,
  });
}
const Sk = {
  borderRadius: {
    ...Eo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Eo,
  borderTopRightRadius: Eo,
  borderBottomLeftRadius: Eo,
  borderBottomRightRadius: Eo,
  boxShadow: wk,
},
  Zw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  xk = Zw.length,
  yv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  wv = (e) => typeof e == "number" || J.test(e);
function bk(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Re(0, n.opacity !== void 0 ? n.opacity : 1, Ck(r))),
      (e.opacityExit = Re(t.opacity !== void 0 ? t.opacity : 1, 0, Tk(r))))
    : o &&
    (e.opacity = Re(
      t.opacity !== void 0 ? t.opacity : 1,
      n.opacity !== void 0 ? n.opacity : 1,
      r
    ));
  for (let s = 0; s < xk; s++) {
    const l = `border${Zw[s]}Radius`;
    let u = _v(t, l),
      c = _v(n, l);
    if (u === void 0 && c === void 0) continue;
    u || (u = 0),
      c || (c = 0),
      u === 0 || c === 0 || wv(u) === wv(c)
        ? ((e[l] = Math.max(Re(yv(u), yv(c), r), 0)),
          (yn.test(c) || yn.test(u)) && (e[l] += "%"))
        : (e[l] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = Re(t.rotate || 0, n.rotate || 0, r));
}
function _v(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Ck = Jw(0, 0.5, Rw),
  Tk = Jw(0.5, 0.95, ct);
function Jw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(fs(e, t, r)));
}
function Sv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Wt(e, t) {
  Sv(e.x, t.x), Sv(e.y, t.y);
}
function xv(e, t, n, r, i) {
  return (
    (e -= t), (e = gl(e, 1 / n, r)), i !== void 0 && (e = gl(e, 1 / i, r)), e
  );
}
function Ek(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (yn.test(t) &&
      ((t = parseFloat(t)), (t = Re(s.min, s.max, t / 100) - s.min)),
      typeof t != "number")
  )
    return;
  let l = Re(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = xv(e.min, t, n, l, i)),
    (e.max = xv(e.max, t, n, l, i));
}
function bv(e, t, [n, r, i], o, s) {
  Ek(e, t[n], t[r], t[i], t.scale, o, s);
}
const Pk = ["x", "scaleX", "originX"],
  kk = ["y", "scaleY", "originY"];
function Cv(e, t, n, r) {
  bv(e.x, t, Pk, n ? n.x : void 0, r ? r.x : void 0),
    bv(e.y, t, kk, n ? n.y : void 0, r ? r.y : void 0);
}
function Tv(e) {
  return e.translate === 0 && e.scale === 1;
}
function e_(e) {
  return Tv(e.x) && Tv(e.y);
}
function Ok(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function t_(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Ev(e) {
  return Rt(e.x) / Rt(e.y);
}
class jk {
  constructor() {
    this.members = [];
  }
  add(t) {
    jh(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Lh(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
        ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Pv(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
      (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
      n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: h,
      rotateY: m,
      skewX: S,
      skewY: b,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      h && (r += `rotateX(${h}deg) `),
      m && (r += `rotateY(${m}deg) `),
      S && (r += `skewX(${S}deg) `),
      b && (r += `skewY(${b}deg) `);
  }
  const l = e.x.scale * t.x,
    u = e.y.scale * t.y;
  return (l !== 1 || u !== 1) && (r += `scale(${l}, ${u})`), r || "none";
}
const Lk = (e, t) => e.depth - t.depth;
class Mk {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    jh(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Lh(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Lk),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Ak(e, t) {
  const n = fr.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (mr(r), e(o - t));
    };
  return Te.read(r, !0), () => mr(r);
}
function Dk(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Nk(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Rk(e, t, n) {
  const r = ut(e) ? e : ds(e);
  return r.start(Oh("", r, t, n)), r.animation;
}
const Cc = ["", "X", "Y", "Z"],
  Ik = { visibility: "hidden" },
  kv = 1e3;
let Vk = 0;
const Ir = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Tc(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function n_({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = Vk++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Ir.totalNodes =
              Ir.resolvedTargetDeltas =
              Ir.recalculatedProjection =
              0),
            this.nodes.forEach(Fk),
            this.nodes.forEach(Kk),
            this.nodes.forEach(Qk),
            this.nodes.forEach(Hk),
            Dk(Ir);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Mk());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Mh()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const u = this.eventHandlers.get(s);
      u && u.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Nk(s)), (this.instance = s);
      const { layoutId: u, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(s),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          l && (c || u) && (this.isLayoutDirty = !0),
          e)
      ) {
        let h;
        const m = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            h && h(),
            (h = Ak(m, 250)),
            Va.hasAnimatedSinceResize &&
            ((Va.hasAnimatedSinceResize = !1), this.nodes.forEach(jv));
        });
      }
      u && this.root.registerSharedNode(u, this),
        this.options.animate !== !1 &&
        d &&
        (u || c) &&
        this.addEventListener(
          "didUpdate",
          ({
            delta: h,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: S,
            layout: b,
          }) => {
            if (this.isTreeAnimationBlocked()) {
              (this.target = void 0), (this.relativeTarget = void 0);
              return;
            }
            const x =
              this.options.transition || d.getDefaultTransition() || Zk,
              { onLayoutAnimationStart: P, onLayoutAnimationComplete: w } =
                d.getProps(),
              g = !this.targetLayout || !t_(this.targetLayout, b) || S,
              _ = !m && S;
            if (
              this.options.layoutRoot ||
              (this.resumeFrom && this.resumeFrom.instance) ||
              _ ||
              (m && (g || !this.currentAnimation))
            ) {
              this.resumeFrom &&
                ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                this.setAnimationOrigin(h, _);
              const T = { ..._h(x, "layout"), onPlay: P, onComplete: w };
              (d.shouldReduceMotion || this.options.layoutRoot) &&
                ((T.delay = 0), (T.type = !1)),
                this.startAnimation(T);
            } else
              m || jv(this),
                this.isLead() &&
                this.options.onExitComplete &&
                this.options.onExitComplete();
            this.targetLayout = b;
          }
        );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        mr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(Yk),
          this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const h = this.path[d];
        (h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: l, layout: u } = this.options;
      if (l === void 0 && !u) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ov);
        return;
      }
      this.isUpdating || this.nodes.forEach(Wk),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
        window.HandoffCancelAllAnimations(),
        this.nodes.forEach(Uk),
        this.nodes.forEach(zk),
        this.nodes.forEach($k),
        this.clearAllSnapshots();
      const l = fr.now();
      (tt.delta = pr(0, 1e3 / 60, l - tt.timestamp)),
        (tt.timestamp = l),
        (tt.isProcessing = !0),
        pc.update.process(tt),
        pc.preRender.process(tt),
        pc.render.process(tt),
        (tt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), lh.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Bk), this.sharedNodes.forEach(Xk);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
          Te.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Te.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = We()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
        (this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: r(this.instance),
          offset: n(this.instance),
        });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !e_(this.projectionDelta),
        u = this.getTransformTemplate(),
        c = u ? u(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      s &&
        (l || Rr(this.latestValues) || d) &&
        (i(this.instance, c),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let u = this.removeElementScroll(l);
      return (
        s && (u = this.removeTransform(u)),
        Jk(u),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: u,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return We();
      const l = s.measureViewportBox(),
        { scroll: u } = this.root;
      return u && (Gn(l.x, u.offset.x), Gn(l.y, u.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = We();
      Wt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: h } = c;
        if (c !== this.root && d && h.layoutScroll) {
          if (d.isRoot) {
            Wt(l, s);
            const { scroll: m } = this.root;
            m && (Gn(l.x, -m.offset.x), Gn(l.y, -m.offset.y));
          }
          Gn(l.x, d.offset.x), Gn(l.y, d.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const u = We();
      Wt(u, s);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !l &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Ai(u, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          Rr(d.latestValues) && Ai(u, d.latestValues);
      }
      return Rr(this.latestValues) && Ai(u, this.latestValues), u;
    }
    removeTransform(s) {
      const l = We();
      Wt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !Rr(c.latestValues)) continue;
        Gf(c.latestValues) && c.updateSnapshot();
        const d = We(),
          h = c.measurePageBox();
        Wt(d, h),
          Cv(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return Rr(this.latestValues) && Cv(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== tt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const u = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
        this.isSharedProjectionDirty ||
        (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== u;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: h, layoutId: m } = this.options;
      if (!(!this.layout || !(h || m))) {
        if (
          ((this.resolvedRelativeTargetAt = tt.timestamp),
            !this.targetDelta && !this.relativeTarget)
        ) {
          const S = this.getClosestProjectingParent();
          S && S.layout && this.animationProgress !== 1
            ? ((this.relativeParent = S),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = We()),
              (this.relativeTargetOrigin = We()),
              Wo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                S.layout.layoutBox
              ),
              Wt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = We()), (this.targetWithTransforms = We())),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  ek(
                    this.target,
                    this.relativeTarget,
                    this.relativeParent.target
                  ))
                : this.targetDelta
                  ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Wt(this.target, this.layout.layoutBox),
                    Yw(this.target, this.targetDelta))
                  : Wt(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const S = this.getClosestProjectingParent();
            S &&
              !!S.resumingFrom == !!this.resumingFrom &&
              !S.options.layoutScroll &&
              S.target &&
              this.animationProgress !== 1
              ? ((this.relativeParent = S),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = We()),
                (this.relativeTargetOrigin = We()),
                Wo(this.relativeTargetOrigin, this.target, S.target),
                Wt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ir.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Gf(this.parent.latestValues) ||
          Qw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        u = !!this.resumingFrom || this !== l;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
          u &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
          this.resolvedRelativeTargetAt === tt.timestamp && (c = !1),
          c)
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
          this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(d || h))
      )
        return;
      Wt(this.layoutCorrected, this.layout.layoutBox);
      const m = this.treeScale.x,
        S = this.treeScale.y;
      uk(this.layoutCorrected, this.treeScale, this.path, u),
        l.layout &&
        !l.target &&
        (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
        ((l.target = l.layout.layoutBox), (l.targetWithTransforms = We()));
      const { target: b } = l;
      if (!b) {
        this.projectionTransform &&
          ((this.projectionDelta = Mi()),
            (this.projectionTransform = "none"),
            this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Mi()),
          (this.projectionDeltaWithTransform = Mi()));
      const x = this.projectionTransform;
      Bo(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
        (this.projectionTransform = Pv(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== m ||
          this.treeScale.y !== S) &&
        ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", b)),
        Ir.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        d = { ...this.latestValues },
        h = Mi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const m = We(),
        S = u ? u.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        x = S !== b,
        P = this.getStack(),
        w = !P || P.members.length <= 1,
        g = !!(x && !w && this.options.crossfade === !0 && !this.path.some(qk));
      this.animationProgress = 0;
      let _;
      (this.mixTargetDelta = (T) => {
        const k = T / 1e3;
        Lv(h.x, s.x, k),
          Lv(h.y, s.y, k),
          this.setTargetDelta(h),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.layout &&
          this.relativeParent &&
          this.relativeParent.layout &&
          (Wo(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Gk(this.relativeTarget, this.relativeTargetOrigin, m, k),
            _ && Ok(this.relativeTarget, _) && (this.isProjectionDirty = !1),
            _ || (_ = We()),
            Wt(_, this.relativeTarget)),
          x &&
          ((this.animationValues = d), bk(d, c, this.latestValues, k, g, w)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
        this.resumingFrom.currentAnimation &&
        this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
        (mr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Te.update(() => {
          (Va.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Rk(0, kv, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
            (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
          void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(kv),
          this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: u,
        layout: c,
        latestValues: d,
      } = s;
      if (!(!l || !u || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          r_(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          u = this.target || We();
          const h = Rt(this.layout.layoutBox.x);
          (u.x.min = s.target.x.min), (u.x.max = u.x.min + h);
          const m = Rt(this.layout.layoutBox.y);
          (u.y.min = s.target.y.min), (u.y.max = u.y.min + m);
        }
        Wt(l, u),
          Ai(l, d),
          Bo(this.projectionDeltaWithTransform, this.layoutCorrected, l, d);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new jk()),
        this.sharedNodes.get(s).add(l);
      const c = l.options.initialPromotionConfig;
      l.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
        this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: u } = {}) {
      const c = this.getStack();
      c && c.promote(this, u),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: u } = s;
      if (
        ((u.z ||
          u.rotate ||
          u.rotateX ||
          u.rotateY ||
          u.rotateZ ||
          u.skewX ||
          u.skewY) &&
          (l = !0),
          !l)
      )
        return;
      const c = {};
      u.z && Tc("z", s, c, this.animationValues);
      for (let d = 0; d < Cc.length; d++)
        Tc(`rotate${Cc[d]}`, s, c, this.animationValues),
          Tc(`skew${Cc[d]}`, s, c, this.animationValues);
      s.render();
      for (const d in c)
        s.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, u;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Ik;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Ra(s == null ? void 0 : s.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const x = {};
        return (
          this.options.layoutId &&
          ((x.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
            (x.pointerEvents = Ra(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
          !Rr(this.latestValues) &&
          ((x.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const m = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Pv(
          this.projectionDeltaWithTransform,
          this.treeScale,
          m
        )),
        d && (c.transform = d(m, c.transform));
      const { x: S, y: b } = this.projectionDelta;
      (c.transformOrigin = `${S.origin * 100}% ${b.origin * 100}% 0`),
        h.animationValues
          ? (c.opacity =
            h === this
              ? (u =
                (l = m.opacity) !== null && l !== void 0
                  ? l
                  : this.latestValues.opacity) !== null && u !== void 0
                ? u
                : 1
              : this.preserveOpacity
                ? this.latestValues.opacity
                : m.opacityExit)
          : (c.opacity =
            h === this
              ? m.opacity !== void 0
                ? m.opacity
                : ""
              : m.opacityExit !== void 0
                ? m.opacityExit
                : 0);
      for (const x in fl) {
        if (m[x] === void 0) continue;
        const { correct: P, applyTo: w } = fl[x],
          g = c.transform === "none" ? m[x] : P(m[x], h);
        if (w) {
          const _ = w.length;
          for (let T = 0; T < _; T++) c[w[T]] = g;
        } else c[x] = g;
      }
      return (
        this.options.layoutId &&
        (c.pointerEvents =
          h === this
            ? Ra(s == null ? void 0 : s.pointerEvents) || ""
            : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Ov),
        this.root.sharedNodes.clear();
    }
  };
}
function zk(e) {
  e.updateLayout();
}
function $k(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? Ut((h) => {
        const m = s ? n.measuredBox[h] : n.layoutBox[h],
          S = Rt(m);
        (m.min = r[h].min), (m.max = m.min + S);
      })
      : r_(o, n.layoutBox, r) &&
      Ut((h) => {
        const m = s ? n.measuredBox[h] : n.layoutBox[h],
          S = Rt(r[h]);
        (m.max = m.min + S),
          e.relativeTarget &&
          !e.currentAnimation &&
          ((e.isProjectionDirty = !0),
            (e.relativeTarget[h].max = e.relativeTarget[h].min + S));
      });
    const l = Mi();
    Bo(l, r, n.layoutBox);
    const u = Mi();
    s ? Bo(u, e.applyTransform(i, !0), n.measuredBox) : Bo(u, r, n.layoutBox);
    const c = !e_(l);
    let d = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: m, layout: S } = h;
        if (m && S) {
          const b = We();
          Wo(b, n.layoutBox, m.layoutBox);
          const x = We();
          Wo(x, r, S.layoutBox),
            t_(b, x) || (d = !0),
            h.options.layoutRoot &&
            ((e.relativeTarget = x),
              (e.relativeTargetOrigin = b),
              (e.relativeParent = h));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: u,
      layoutDelta: l,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Fk(e) {
  Ir.totalNodes++,
    e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Hk(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Bk(e) {
  e.clearSnapshot();
}
function Ov(e) {
  e.clearMeasurements();
}
function Wk(e) {
  e.isLayoutDirty = !1;
}
function Uk(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function jv(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Kk(e) {
  e.resolveTargetDelta();
}
function Qk(e) {
  e.calcProjection();
}
function Yk(e) {
  e.resetSkewAndRotation();
}
function Xk(e) {
  e.removeLeadSnapshot();
}
function Lv(e, t, n) {
  (e.translate = Re(t.translate, 0, n)),
    (e.scale = Re(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Mv(e, t, n, r) {
  (e.min = Re(t.min, n.min, r)), (e.max = Re(t.max, n.max, r));
}
function Gk(e, t, n, r) {
  Mv(e.x, t.x, n.x, r), Mv(e.y, t.y, n.y, r);
}
function qk(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Zk = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Av = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Dv = Av("applewebkit/") && !Av("chrome/") ? Math.round : ct;
function Nv(e) {
  (e.min = Dv(e.min)), (e.max = Dv(e.max));
}
function Jk(e) {
  Nv(e.x), Nv(e.y);
}
function r_(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Yf(Ev(t), Ev(n), 0.2))
  );
}
const eO = n_({
  attachResizeListener: (e, t) => kn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop,
  }),
  checkIsScrollRoot: () => !0,
}),
  Ec = { current: void 0 },
  i_ = n_({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ec.current) {
        const e = new eO({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ec.current = e);
      }
      return Ec.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  tO = {
    pan: { Feature: vk },
    drag: { Feature: gk, ProjectionNode: i_, MeasureLayout: qw },
  },
  Zf = { current: null },
  o_ = { current: !1 };
function nO() {
  if (((o_.current = !0), !!sh))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Zf.current = e.matches);
      e.addListener(t), t();
    } else Zf.current = !1;
}
function rO(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (ut(o)) e.addValue(i, o), ml(r) && r.add(i);
    else if (ut(s)) e.addValue(i, ds(o, { owner: e })), ml(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, ds(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Rv = new WeakMap(),
  iO = [...yw, at, gr],
  oO = (e) => iO.find(vw(e)),
  s_ = Object.keys(us),
  sO = s_.length,
  Iv = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  aO = ch.length;
function a_(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : a_(e.parent);
}
class lO {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    l = {}
  ) {
    (this.resolveKeyframes = (m, S, b, x) =>
      new this.KeyframeResolver(m, S, b, x, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Sh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.scheduleRender = () => Te.render(this.render, !1, !0));
    const { latestValues: u, renderState: c } = s;
    (this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Ql(n)),
      (this.isVariantNode = Q1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const m in h) {
      const S = h[m];
      u[m] !== void 0 && ut(S) && (S.set(u[m], !1), ml(d) && d.add(m));
    }
  }
  mount(t) {
    (this.current = t),
      Rv.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
      this.isVariantNode &&
      !this.isControllingVariants &&
      (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      o_.current || nO(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Zf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    Rv.delete(this.current),
      this.projection && this.projection.unmount(),
      mr(this.notifyUpdate),
      mr(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features)
      (t = this.features[n]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = ei.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Te.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let u = 0; u < sO; u++) {
      const c = s_[u],
        {
          isEnabled: d,
          Feature: h,
          ProjectionNode: m,
          MeasureLayout: S,
        } = us[c];
      m && (s = m),
        d(n) &&
        (!this.features[c] && h && (this.features[c] = new h(this)),
          S && (l = S));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(this.latestValues, a_(this.parent));
      const {
        layoutId: u,
        layout: c,
        drag: d,
        dragConstraints: h,
        layoutScroll: m,
        layoutRoot: S,
      } = n;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!d || (h && ji(h)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: o,
        layoutScroll: m,
        layoutRoot: S,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : We();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Iv.length; r++) {
      const i = Iv[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
          delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = rO(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < aO; r++) {
      const i = ch[r],
        o = this.props[i];
      (ls(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
      n !== void 0 &&
      ((r = ds(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
      (typeof i == "string" && (mw(i) || pw(i))
        ? (i = parseFloat(i))
        : !oO(i) && gr.test(n) && (i = Ew(t, n)),
        this.setBaseTarget(t, ut(i) ? i.get() : i)),
      ut(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = wh(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ut(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Mh()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class l_ extends lO {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Pw);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function uO(e) {
  return window.getComputedStyle(e);
}
class cO extends l_ {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (ei.has(n)) {
      const r = bh(n);
      return (r && r.default) || 0;
    } else {
      const r = uO(t),
        i = (Z1(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Xw(t, n);
  }
  build(t, n, r, i) {
    ph(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return yh(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ut(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    rw(t, n, r, i);
  }
}
class fO extends l_ {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ei.has(n)) {
      const r = bh(n);
      return (r && r.default) || 0;
    }
    return (n = iw.has(n) ? n : ah(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return We();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return sw(t, n, r);
  }
  build(t, n, r, i) {
    gh(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    ow(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = vh(t.tagName)), super.mount(t);
  }
}
const dO = (e, t) =>
  fh(e)
    ? new fO(t, { enableHardwareAcceleration: !1 })
    : new cO(t, {
      allowProjection: e !== U.Fragment,
      enableHardwareAcceleration: !0,
    }),
  hO = { layout: { ProjectionNode: i_, MeasureLayout: qw } },
  pO = { ...GP, ...oE, ...tO, ...hO },
  u_ = pT((e, t) => KT(e, t, pO, dO)),
  An = ({ children: e, id: t = 1 }) => {
    const n = {
      offscreen: { y: 40, opacity: 0 },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, delay: t === 1 ? 0 : 0.1 * t },
      },
    };
    return v.jsx(u_.div, {
      variants: n,
      initial: "offscreen",
      whileInView: "onscreen",
      viewport: { once: !0, amount: 0 },
      children: e,
    });
  },
  mO = () =>
    v.jsx("section", {
      id: "home",
      className: "main-hero-area",
      children: v.jsx("div", {
        className: "container",
        children: v.jsx("div", {
          className: "container-inner",
          children: v.jsx("div", {
            className: "row align-items-center",
            children: v.jsx("div", {
              className: "col-lg-12 col-sm-12",
              children: v.jsx(An, {
                children: v.jsxs("div", {
                  className: "hero-content rmb-25 text-center",
                  children: [
                    v.jsxs("h1", {
                      children: [
                        v.jsx("span", { children: "Ethane" }),
                        " Assamois",
                      ],
                    }),
                    v.jsxs("div", {
                      className: "job",
                      children: [
                        v.jsx("span", { children: "Créateur de contenu" }),
                        v.jsx("span", { children: "Coach en Dev perso" }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  gO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z",
      })
    ),
  vO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z",
      })
    ),
  yO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z",
      })
    ),
  Vr = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z",
      })
    ),
  wO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z",
      })
    ),
  _O = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM11 5H4V19H11V5ZM13 5V19H20V5H13ZM14 7H19V9H14V7ZM14 10H19V12H14V10Z",
      })
    ),
  SO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z",
      })
    ),
  xO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z",
      })
    ),
  bO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z",
      })
    ),
  CO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M2.04932 12.9999H7.52725C7.70624 16.2688 8.7574 19.3053 10.452 21.8809C5.98761 21.1871 2.5001 17.5402 2.04932 12.9999ZM2.04932 10.9999C2.5001 6.45968 5.98761 2.81276 10.452 2.11902C8.7574 4.69456 7.70624 7.73111 7.52725 10.9999H2.04932ZM21.9506 10.9999H16.4726C16.2936 7.73111 15.2425 4.69456 13.5479 2.11902C18.0123 2.81276 21.4998 6.45968 21.9506 10.9999ZM21.9506 12.9999C21.4998 17.5402 18.0123 21.1871 13.5479 21.8809C15.2425 19.3053 16.2936 16.2688 16.4726 12.9999H21.9506ZM9.53068 12.9999H14.4692C14.2976 15.7828 13.4146 18.3732 11.9999 20.5915C10.5852 18.3732 9.70229 15.7828 9.53068 12.9999ZM9.53068 10.9999C9.70229 8.21709 10.5852 5.62672 11.9999 3.40841C13.4146 5.62672 14.2976 8.21709 14.4692 10.9999H9.53068Z",
      })
    ),
  TO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z",
      })
    ),
  c_ = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z",
      })
    ),
  EO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z",
      })
    ),
  PO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M4.00021 18.9223L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L4.00021 12.3671V18.9223ZM8.85987 21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V13.9221L8.85987 21ZM6.02202 5.96771L15.2939 2.22164C15.8059 2.01475 16.3888 2.26215 16.5956 2.77422L22.2147 16.682C22.4216 17.194 22.1742 17.7769 21.6622 17.9838L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1773L5.46944 7.2695C5.26255 6.75743 5.50995 6.1746 6.02202 5.96771ZM9.00021 9.00004C9.55249 9.00004 10.0002 8.55233 10.0002 8.00004C10.0002 7.44776 9.55249 7.00004 9.00021 7.00004C8.44792 7.00004 8.00021 7.44776 8.00021 8.00004C8.00021 8.55233 8.44792 9.00004 9.00021 9.00004Z",
      })
    ),
  kO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z",
      })
    ),
  OO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z",
      })
    ),
  jO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM18.8309 11H5.17788L5.84488 19H18.1639L18.8309 11ZM13.0049 13V17H11.0049V13H13.0049ZM9.00488 13V17H7.00488V13H9.00488ZM17.0049 13V17H15.0049V13H17.0049ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z",
      })
    ),
  LO = ({ color: e = "currentColor", size: t = 24, className: n, ...r }) =>
    ue.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        fill: e,
        ...r,
        className: "remixicon " + (n || ""),
      },
      ue.createElement("path", {
        d: "M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z",
      })
    ),
  MO = "/assets/eso2406a.jpg",
  AO = () =>
    v.jsx("section", {
      id: "about",
      className: "about-area",
      children: v.jsx("div", {
        className: "container",
        children: v.jsxs("div", {
          className: "row align-items-center",
          children: [
            v.jsx("div", {
              className: "col-lg-5",
              children: v.jsx(An, {
                children: v.jsxs("div", {
                  className: "about-image-part",
                  children: [
                    v.jsx("img", { src: MO, alt: "About Me" }),
                    v.jsx("h2", { children: "Ethane Assamois" }),
                    v.jsxs("div", {
                      className: "about-btn btn-one text-center",
                      children: [
                        v.jsx("h6", { children: "Available for Work" }),
                        v.jsx("div", { className: "circle pulse color-pulse" }),
                      ],
                    }),
                    v.jsx("div", {
                      className: "about-social text-center",
                      children: v.jsxs("ul", {
                        children: [
                          v.jsx("li", {
                            children: v.jsx("a", {
                              href: "",
                              children: v.jsx("i", {
                                children: v.jsx(xO, { size: 20 }),
                              }),
                            }),
                          }),
                          v.jsx("li", {
                            children: v.jsx("a", {
                              href: "",
                              children: v.jsx("i", {
                                children: v.jsx(LO, { size: 20 }),
                              }),
                            }),
                          }),
                          v.jsx("li", {
                            children: v.jsx("a", {
                              href: "",
                              children: v.jsx("i", {
                                children: v.jsx(TO, { size: 20 }),
                              }),
                            }),
                          }),
                          v.jsx("li", {
                            children: v.jsx("a", {
                              href: "",
                              children: v.jsx("i", {
                                children: v.jsx(bO, { size: 20 }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            v.jsx("div", {
              className: "col-lg-7",
              children: v.jsxs("div", {
                className: "about-content-part",
                children: [
                  v.jsxs(An, {
                    children: [
                      v.jsxs("h2", {
                        children: [
                          "Salut, je suis Ethane Assamois, ",
                          v.jsx("span", { children: "Coach" }),
                          " en dev perso.",
                        ],
                      }),
                      v.jsx("div", {
                        className: "hero-btns",
                        children: v.jsxs("a", {
                          href: "#",
                          className: "theme-btn",
                          children: [
                            "Download CV ",
                            v.jsx("i", { children: v.jsx(SO, { size: 16 }) }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  v.jsx(An, {
                    children: v.jsxs("ul", {
                      className: "list-style-one two-column",
                      children: [
                        v.jsxs("li", {
                          children: [
                            v.jsx("i", { children: v.jsx(Vr, { size: 18 }) }),
                            " Dev perso",
                          ],
                        }),
                        v.jsxs("li", {
                          children: [
                            v.jsx("i", { children: v.jsx(Vr, { size: 18 }) }),
                            " Art oratoire",
                          ]
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  oo = ({ children: e }) =>
    v.jsx(An, {
      children: v.jsx("div", {
        className: "section-title text-center wow fadeInUp delay-0-2s",
        children: e,
      }),
    }),
  Ah = ({ children: e, id: t = 1 }) => {
    const n = {
      offscreen: { opacity: 0 },
      onscreen: {
        opacity: 1,
        transition: { duration: 0.8, delay: t === 1 ? 0 : 0.1 * t },
      },
    };
    return v.jsx(u_.div, {
      variants: n,
      initial: "offscreen",
      whileInView: "onscreen",
      viewport: { once: !0, amount: 0 },
      children: e,
    });
  },
  DO = [
    {
      id: 1,
      icon: v.jsx(CO, { size: 65 }),
      service_name: "Brand Identity Design",
      service_description:
        "Kane gives you the blocks & kits you need to create a true website within minutes.",
    },
    {
      id: 2,
      icon: v.jsx(OO, { size: 65 }),
      service_name: "Website Design",
      service_description:
        "Kane gives you the blocks & kits you need to create a true website within minutes.",
    },
    {
      id: 3,
      icon: v.jsx(PO, { size: 65 }),
      service_name: "Application Design",
      service_description:
        "Kane gives you the blocks & kits you need to create a true website within minutes.",
    },
  ],
  NO = () =>
    v.jsx("section", {
      id: "services",
      className: "services-area",
      children: v.jsxs("div", {
        className: "container",
        children: [
          v.jsx("div", {
            className: "row",
            children: v.jsx("div", {
              className: "col-xl-12 col-lg-12",
              children: v.jsxs(oo, {
                children: [
                  v.jsx("p", { children: "Services" }),
                  v.jsx("h2", { children: "Quality Services" }),
                ],
              }),
            }),
          }),
          v.jsx("div", {
            className: "row",
            children: DO.map(
              ({ icon: e, id: t, service_description: n, service_name: r }) =>
                v.jsx(
                  "div",
                  {
                    className: "col-lg-4 col-md-6",
                    children: v.jsx(Ah, {
                      id: t,
                      children: v.jsxs("div", {
                        className: "service-item",
                        children: [
                          e,
                          v.jsx("h4", { children: r }),
                          v.jsx("p", { children: n }),
                        ],
                      }),
                    }),
                  },
                  t
                )
            ),
          }),
        ],
      }),
    }),
  RO = [
    {
      id: 1,
      years: "2021 - Present",
      institute: "Themeforest Market",
      position: "Web Designer",
    },
    {
      id: 2,
      years: "2021 - 2023",
      institute: "Envato Theme Developer",
      position: "Web Development",
    },
    {
      id: 3,
      years: "2021 - 2022",
      institute: "Marketing Expert GRP",
      position: "Web Developer & Business Partner",
    },
  ],
  IO = [
    {
      id: 1,
      years: "2013 - 2015",
      institute: "Bachelor Degree of Information Technology",
      position: "State University bangladesh",
    },
    {
      id: 2,
      years: "2021 - 2024",
      institute: "Higher secoundery Education",
      position: "Premium College United VC",
    },
    {
      id: 3,
      years: "2021 - 2024",
      institute: "Webster College",
      position: "UI/UX Design",
    },
  ],
  VO = () =>
    v.jsx("section", {
      id: "resume",
      className: "resume-area",
      children: v.jsxs("div", {
        className: "container",
        children: [
          v.jsx("div", {
            className: "row",
            children: v.jsx("div", {
              className: "col-xl-12 col-lg-12",
              children: v.jsxs(oo, {
                children: [
                  v.jsx("p", { children: "Experience" }),
                  v.jsx("h2", { children: " Professional Resume" }),
                ],
              }),
            }),
          }),
          v.jsx("div", {
            className: "resume-items",
            children: v.jsxs("div", {
              className: "row",
              children: [
                v.jsx("div", {
                  className: "col-xl-6 col-md-6",
                  children: v.jsx("div", {
                    className: "experience-list",
                    children: RO.map(
                      ({ id: e, institute: t, position: n, years: r }) =>
                        v.jsx(Vv, { institute: t, position: n, years: r }, e)
                    ),
                  }),
                }),
                v.jsx("div", {
                  className: "col-xl-6 col-md-6",
                  children: v.jsx("div", {
                    className: "experience-list",
                    children: IO.map(
                      ({ id: e, institute: t, position: n, years: r }) =>
                        v.jsx(Vv, { institute: t, position: n, years: r }, e)
                    ),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  Vv = ({ institute: e, position: t, years: n }) =>
    v.jsx(An, {
      children: v.jsxs("div", {
        className: "resume-item",
        children: [
          v.jsx("div", {
            className: "icon",
            children: v.jsx("i", { children: v.jsx(wO, {}) }),
          }),
          v.jsxs("div", {
            className: "content",
            children: [
              v.jsx("span", { className: "years", children: n }),
              v.jsx("h4", { children: e }),
              v.jsx("span", { className: "company", children: t }),
            ],
          }),
        ],
      }),
    }),
  zv = "/assets/ethan-black.png";
var $e = {},
  Dh = {},
  bs = {},
  Cs = {},
  f_ = "Expected a function",
  $v = NaN,
  zO = "[object Symbol]",
  $O = /^\s+|\s+$/g,
  FO = /^[-+]0x[0-9a-f]+$/i,
  HO = /^0b[01]+$/i,
  BO = /^0o[0-7]+$/i,
  WO = parseInt,
  UO = typeof Tn == "object" && Tn && Tn.Object === Object && Tn,
  KO = typeof self == "object" && self && self.Object === Object && self,
  QO = UO || KO || Function("return this")(),
  YO = Object.prototype,
  XO = YO.toString,
  GO = Math.max,
  qO = Math.min,
  Pc = function () {
    return QO.Date.now();
  };
function ZO(e, t, n) {
  var r,
    i,
    o,
    s,
    l,
    u,
    c = 0,
    d = !1,
    h = !1,
    m = !0;
  if (typeof e != "function") throw new TypeError(f_);
  (t = Fv(t) || 0),
    vl(n) &&
    ((d = !!n.leading),
      (h = "maxWait" in n),
      (o = h ? GO(Fv(n.maxWait) || 0, t) : o),
      (m = "trailing" in n ? !!n.trailing : m));
  function S(j) {
    var R = r,
      A = i;
    return (r = i = void 0), (c = j), (s = e.apply(A, R)), s;
  }
  function b(j) {
    return (c = j), (l = setTimeout(w, t)), d ? S(j) : s;
  }
  function x(j) {
    var R = j - u,
      A = j - c,
      D = t - R;
    return h ? qO(D, o - A) : D;
  }
  function P(j) {
    var R = j - u,
      A = j - c;
    return u === void 0 || R >= t || R < 0 || (h && A >= o);
  }
  function w() {
    var j = Pc();
    if (P(j)) return g(j);
    l = setTimeout(w, x(j));
  }
  function g(j) {
    return (l = void 0), m && r ? S(j) : ((r = i = void 0), s);
  }
  function _() {
    l !== void 0 && clearTimeout(l), (c = 0), (r = u = i = l = void 0);
  }
  function T() {
    return l === void 0 ? s : g(Pc());
  }
  function k() {
    var j = Pc(),
      R = P(j);
    if (((r = arguments), (i = this), (u = j), R)) {
      if (l === void 0) return b(u);
      if (h) return (l = setTimeout(w, t)), S(u);
    }
    return l === void 0 && (l = setTimeout(w, t)), s;
  }
  return (k.cancel = _), (k.flush = T), k;
}
function JO(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(f_);
  return (
    vl(n) &&
    ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    ZO(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function vl(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function e3(e) {
  return !!e && typeof e == "object";
}
function t3(e) {
  return typeof e == "symbol" || (e3(e) && XO.call(e) == zO);
}
function Fv(e) {
  if (typeof e == "number") return e;
  if (t3(e)) return $v;
  if (vl(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vl(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace($O, "");
  var n = HO.test(e);
  return n || BO.test(e) ? WO(e.slice(2), n ? 2 : 8) : FO.test(e) ? $v : +e;
}
var n3 = JO,
  Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.addPassiveEventListener = function (t, n, r) {
  var i = r.name;
  i || ((i = n), console.warn("Listener must be a named function.")),
    za.has(n) || za.set(n, new Set());
  var o = za.get(n);
  if (!o.has(i)) {
    var s = (function () {
      var l = !1;
      try {
        var u = Object.defineProperty({}, "passive", {
          get: function () {
            l = !0;
          },
        });
        window.addEventListener("test", null, u);
      } catch { }
      return l;
    })();
    t.addEventListener(n, r, s ? { passive: !0 } : !1), o.add(i);
  }
};
Ts.removePassiveEventListener = function (t, n, r) {
  t.removeEventListener(n, r), za.get(n).delete(r.name || n);
};
var za = new Map();
Object.defineProperty(Cs, "__esModule", { value: !0 });
var r3 = n3,
  i3 = s3(r3),
  o3 = Ts;
function s3(e) {
  return e && e.__esModule ? e : { default: e };
}
var a3 = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
  return (0, i3.default)(t, n);
},
  Ae = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (t, n) {
      if (t) {
        var r = a3(function (i) {
          Ae.scrollHandler(t);
        }, n);
        Ae.scrollSpyContainers.push(t),
          (0, o3.addPassiveEventListener)(t, "scroll", r);
      }
    },
    isMounted: function (t) {
      return Ae.scrollSpyContainers.indexOf(t) !== -1;
    },
    currentPositionX: function (t) {
      if (t === document) {
        var n = window.pageYOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageXOffset
          : r
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
      } else return t.scrollLeft;
    },
    currentPositionY: function (t) {
      if (t === document) {
        var n = window.pageXOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageYOffset
          : r
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
      } else return t.scrollTop;
    },
    scrollHandler: function (t) {
      var n =
        Ae.scrollSpyContainers[Ae.scrollSpyContainers.indexOf(t)]
          .spyCallbacks || [];
      n.forEach(function (r) {
        return r(Ae.currentPositionX(t), Ae.currentPositionY(t));
      });
    },
    addStateHandler: function (t) {
      Ae.spySetState.push(t);
    },
    addSpyHandler: function (t, n) {
      var r = Ae.scrollSpyContainers[Ae.scrollSpyContainers.indexOf(n)];
      r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(Ae.currentPositionX(n), Ae.currentPositionY(n));
    },
    updateStates: function () {
      Ae.spySetState.forEach(function (t) {
        return t();
      });
    },
    unmount: function (t, n) {
      Ae.scrollSpyContainers.forEach(function (r) {
        return (
          r.spyCallbacks &&
          r.spyCallbacks.length &&
          r.spyCallbacks.indexOf(n) > -1 &&
          r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        );
      }),
        Ae.spySetState &&
        Ae.spySetState.length &&
        Ae.spySetState.indexOf(t) > -1 &&
        Ae.spySetState.splice(Ae.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", Ae.scrollHandler);
    },
    update: function () {
      return Ae.scrollSpyContainers.forEach(function (t) {
        return Ae.scrollHandler(t);
      });
    },
  };
Cs.default = Ae;
var so = {},
  Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
var l3 = function (t, n) {
  var r = t.indexOf("#") === 0 ? t.substring(1) : t,
    i = r ? "#" + r : "",
    o = window && window.location,
    s = i ? o.pathname + o.search + i : o.pathname + o.search;
  n
    ? history.pushState(history.state, "", s)
    : history.replaceState(history.state, "", s);
},
  u3 = function () {
    return window.location.hash.replace(/^#/, "");
  },
  c3 = function (t) {
    return function (n) {
      return t.contains
        ? t != n && t.contains(n)
        : !!(t.compareDocumentPosition(n) & 16);
    };
  },
  f3 = function (t) {
    return getComputedStyle(t).position !== "static";
  },
  kc = function (t, n) {
    for (var r = t.offsetTop, i = t.offsetParent; i && !n(i);)
      (r += i.offsetTop), (i = i.offsetParent);
    return { offsetTop: r, offsetParent: i };
  },
  d3 = function (t, n, r) {
    if (r)
      return t === document
        ? n.getBoundingClientRect().left +
        (window.scrollX || window.pageXOffset)
        : getComputedStyle(t).position !== "static"
          ? n.offsetLeft
          : n.offsetLeft - t.offsetLeft;
    if (t === document)
      return (
        n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      );
    if (f3(t)) {
      if (n.offsetParent !== t) {
        var i = function (d) {
          return d === t || d === document;
        },
          o = kc(n, i),
          s = o.offsetTop,
          l = o.offsetParent;
        if (l !== t)
          throw new Error(
            "Seems containerElement is not an ancestor of the Element"
          );
        return s;
      }
      return n.offsetTop;
    }
    if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
    var u = function (d) {
      return d === document;
    };
    return kc(n, u).offsetTop - kc(t, u).offsetTop;
  };
Es.default = {
  updateHash: l3,
  getHash: u3,
  filterElementInContainer: c3,
  scrollOffset: d3,
};
var ql = {},
  Nh = {};
Object.defineProperty(Nh, "__esModule", { value: !0 });
Nh.default = {
  defaultEasing: function (t) {
    return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
  },
  linear: function (t) {
    return t;
  },
  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return t * (2 - t);
  },
  easeInOutQuad: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
var Rh = {};
Object.defineProperty(Rh, "__esModule", { value: !0 });
var h3 = Ts,
  p3 = ["mousedown", "mousewheel", "touchmove", "keydown"];
Rh.default = {
  subscribe: function (t) {
    return (
      typeof document < "u" &&
      p3.forEach(function (n) {
        return (0, h3.addPassiveEventListener)(document, n, t);
      })
    );
  },
};
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
var Jf = {
  registered: {},
  scrollEvent: {
    register: function (t, n) {
      Jf.registered[t] = n;
    },
    remove: function (t) {
      Jf.registered[t] = null;
    },
  },
};
Ps.default = Jf;
Object.defineProperty(ql, "__esModule", { value: !0 });
var m3 =
  Object.assign ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  },
  g3 = Es;
Zl(g3);
var v3 = Nh,
  Hv = Zl(v3),
  y3 = Rh,
  w3 = Zl(y3),
  _3 = Ps,
  pn = Zl(_3);
function Zl(e) {
  return e && e.__esModule ? e : { default: e };
}
var d_ = function (t) {
  return Hv.default[t.smooth] || Hv.default.defaultEasing;
},
  S3 = function (t) {
    return typeof t == "function"
      ? t
      : function () {
        return t;
      };
  },
  x3 = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  ed = (function () {
    return (
      x3() ||
      function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  h_ = function () {
    return {
      currentPosition: 0,
      startPosition: 0,
      targetPosition: 0,
      progress: 0,
      duration: 0,
      cancel: !1,
      target: null,
      containerElement: null,
      to: null,
      start: null,
      delta: null,
      percent: null,
      delayTimeout: null,
    };
  },
  p_ = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollLeft;
    var r = window.pageXOffset !== void 0,
      i = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageXOffset
      : i
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft;
  },
  m_ = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollTop;
    var r = window.pageXOffset !== void 0,
      i = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageYOffset
      : i
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
  },
  b3 = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollWidth - n.offsetWidth;
    var r = document.body,
      i = document.documentElement;
    return Math.max(
      r.scrollWidth,
      r.offsetWidth,
      i.clientWidth,
      i.scrollWidth,
      i.offsetWidth
    );
  },
  C3 = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollHeight - n.offsetHeight;
    var r = document.body,
      i = document.documentElement;
    return Math.max(
      r.scrollHeight,
      r.offsetHeight,
      i.clientHeight,
      i.scrollHeight,
      i.offsetHeight
    );
  },
  T3 = function e(t, n, r) {
    var i = n.data;
    if (!n.ignoreCancelEvents && i.cancel) {
      pn.default.registered.end &&
        pn.default.registered.end(i.to, i.target, i.currentPositionY);
      return;
    }
    if (
      ((i.delta = Math.round(i.targetPosition - i.startPosition)),
        i.start === null && (i.start = r),
        (i.progress = r - i.start),
        (i.percent = i.progress >= i.duration ? 1 : t(i.progress / i.duration)),
        (i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent)),
        i.containerElement &&
          i.containerElement !== document &&
          i.containerElement !== document.body
          ? n.horizontal
            ? (i.containerElement.scrollLeft = i.currentPosition)
            : (i.containerElement.scrollTop = i.currentPosition)
          : n.horizontal
            ? window.scrollTo(i.currentPosition, 0)
            : window.scrollTo(0, i.currentPosition),
        i.percent < 1)
    ) {
      var o = e.bind(null, t, n);
      ed.call(window, o);
      return;
    }
    pn.default.registered.end &&
      pn.default.registered.end(i.to, i.target, i.currentPosition);
  },
  Ih = function (t) {
    t.data.containerElement = t
      ? t.containerId
        ? document.getElementById(t.containerId)
        : t.container && t.container.nodeType
          ? t.container
          : document
      : null;
  },
  ks = function (t, n, r, i) {
    (n.data = n.data || h_()), window.clearTimeout(n.data.delayTimeout);
    var o = function () {
      n.data.cancel = !0;
    };
    if (
      (w3.default.subscribe(o),
        Ih(n),
        (n.data.start = null),
        (n.data.cancel = !1),
        (n.data.startPosition = n.horizontal ? p_(n) : m_(n)),
        (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
        n.data.startPosition === n.data.targetPosition)
    ) {
      pn.default.registered.end &&
        pn.default.registered.end(
          n.data.to,
          n.data.target,
          n.data.currentPosition
        );
      return;
    }
    (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
      (n.data.duration = S3(n.duration)(n.data.delta)),
      (n.data.duration = isNaN(parseFloat(n.data.duration))
        ? 1e3
        : parseFloat(n.data.duration)),
      (n.data.to = r),
      (n.data.target = i);
    var s = d_(n),
      l = T3.bind(null, s, n);
    if (n && n.delay > 0) {
      n.data.delayTimeout = window.setTimeout(function () {
        pn.default.registered.begin &&
          pn.default.registered.begin(n.data.to, n.data.target),
          ed.call(window, l);
      }, n.delay);
      return;
    }
    pn.default.registered.begin &&
      pn.default.registered.begin(n.data.to, n.data.target),
      ed.call(window, l);
  },
  Jl = function (t) {
    return (t = m3({}, t)), (t.data = t.data || h_()), (t.absolute = !0), t;
  },
  E3 = function (t) {
    ks(0, Jl(t));
  },
  P3 = function (t, n) {
    ks(t, Jl(n));
  },
  k3 = function (t) {
    (t = Jl(t)), Ih(t), ks(t.horizontal ? b3(t) : C3(t), t);
  },
  O3 = function (t, n) {
    (n = Jl(n)), Ih(n);
    var r = n.horizontal ? p_(n) : m_(n);
    ks(t + r, n);
  };
ql.default = {
  animateTopScroll: ks,
  getAnimationType: d_,
  scrollToTop: E3,
  scrollToBottom: k3,
  scrollTo: P3,
  scrollMore: O3,
};
Object.defineProperty(so, "__esModule", { value: !0 });
var j3 =
  Object.assign ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  },
  L3 = Es,
  M3 = Vh(L3),
  A3 = ql,
  D3 = Vh(A3),
  N3 = Ps,
  ya = Vh(N3);
function Vh(e) {
  return e && e.__esModule ? e : { default: e };
}
var wa = {},
  Bv = void 0;
so.default = {
  unmount: function () {
    wa = {};
  },
  register: function (t, n) {
    wa[t] = n;
  },
  unregister: function (t) {
    delete wa[t];
  },
  get: function (t) {
    return (
      wa[t] ||
      document.getElementById(t) ||
      document.getElementsByName(t)[0] ||
      document.getElementsByClassName(t)[0]
    );
  },
  setActiveLink: function (t) {
    return (Bv = t);
  },
  getActiveLink: function () {
    return Bv;
  },
  scrollTo: function (t, n) {
    var r = this.get(t);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = j3({}, n, { absolute: !1 });
    var i = n.containerId,
      o = n.container,
      s = void 0;
    i
      ? (s = document.getElementById(i))
      : o && o.nodeType
        ? (s = o)
        : (s = document),
      (n.absolute = !0);
    var l = n.horizontal,
      u = M3.default.scrollOffset(s, r, l) + (n.offset || 0);
    if (!n.smooth) {
      ya.default.registered.begin && ya.default.registered.begin(t, r),
        s === document
          ? n.horizontal
            ? window.scrollTo(u, 0)
            : window.scrollTo(0, u)
          : (s.scrollTop = u),
        ya.default.registered.end && ya.default.registered.end(t, r);
      return;
    }
    D3.default.animateTopScroll(u, n, t, r);
  },
};
var g_ = { exports: {} },
  R3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  I3 = R3,
  V3 = I3;
function v_() { }
function y_() { }
y_.resetWarningCache = v_;
var z3 = function () {
  function e(r, i, o, s, l, u) {
    if (u !== V3) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: y_,
    resetWarningCache: v_,
  };
  return (n.PropTypes = n), n;
};
g_.exports = z3();
var eu = g_.exports,
  tu = {};
Object.defineProperty(tu, "__esModule", { value: !0 });
var $3 = Es,
  Oc = F3($3);
function F3(e) {
  return e && e.__esModule ? e : { default: e };
}
var H3 = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function (t) {
    (this.scroller = t),
      (this.handleHashChange = this.handleHashChange.bind(this)),
      window.addEventListener("hashchange", this.handleHashChange),
      this.initStateFromHash(),
      (this.mountFlag = !0);
  },
  mapContainer: function (t, n) {
    this.containers[t] = n;
  },
  isMounted: function () {
    return this.mountFlag;
  },
  isInitialized: function () {
    return this.initialized;
  },
  initStateFromHash: function () {
    var t = this,
      n = this.getHash();
    n
      ? window.setTimeout(function () {
        t.scrollTo(n, !0), (t.initialized = !0);
      }, 10)
      : (this.initialized = !0);
  },
  scrollTo: function (t, n) {
    var r = this.scroller,
      i = r.get(t);
    if (i && (n || t !== r.getActiveLink())) {
      var o = this.containers[t] || document;
      r.scrollTo(t, { container: o });
    }
  },
  getHash: function () {
    return Oc.default.getHash();
  },
  changeHash: function (t, n) {
    this.isInitialized() &&
      Oc.default.getHash() !== t &&
      Oc.default.updateHash(t, n);
  },
  handleHashChange: function () {
    this.scrollTo(this.getHash());
  },
  unmount: function () {
    (this.scroller = null),
      (this.containers = null),
      window.removeEventListener("hashchange", this.handleHashChange);
  },
};
tu.default = H3;
Object.defineProperty(bs, "__esModule", { value: !0 });
var _a =
  Object.assign ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  },
  B3 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  W3 = U,
  Wv = Os(W3),
  U3 = Cs,
  Sa = Os(U3),
  K3 = so,
  Q3 = Os(K3),
  Y3 = eu,
  Oe = Os(Y3),
  X3 = tu,
  Un = Os(X3);
function Os(e) {
  return e && e.__esModule ? e : { default: e };
}
function G3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function q3(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Z3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Uv = {
  to: Oe.default.string.isRequired,
  containerId: Oe.default.string,
  container: Oe.default.object,
  activeClass: Oe.default.string,
  activeStyle: Oe.default.object,
  spy: Oe.default.bool,
  horizontal: Oe.default.bool,
  smooth: Oe.default.oneOfType([Oe.default.bool, Oe.default.string]),
  offset: Oe.default.number,
  delay: Oe.default.number,
  isDynamic: Oe.default.bool,
  onClick: Oe.default.func,
  duration: Oe.default.oneOfType([Oe.default.number, Oe.default.func]),
  absolute: Oe.default.bool,
  onSetActive: Oe.default.func,
  onSetInactive: Oe.default.func,
  ignoreCancelEvents: Oe.default.bool,
  hashSpy: Oe.default.bool,
  saveHashHistory: Oe.default.bool,
  spyThrottle: Oe.default.number,
};
bs.default = function (e, t) {
  var n = t || Q3.default,
    r = (function (o) {
      Z3(s, o);
      function s(l) {
        G3(this, s);
        var u = q3(
          this,
          (s.__proto__ || Object.getPrototypeOf(s)).call(this, l)
        );
        return i.call(u), (u.state = { active: !1 }), u;
      }
      return (
        B3(s, [
          {
            key: "getScrollSpyContainer",
            value: function () {
              var u = this.props.containerId,
                c = this.props.container;
              return u && !c
                ? document.getElementById(u)
                : c && c.nodeType
                  ? c
                  : document;
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.spy || this.props.hashSpy) {
                var u = this.getScrollSpyContainer();
                Sa.default.isMounted(u) ||
                  Sa.default.mount(u, this.props.spyThrottle),
                  this.props.hashSpy &&
                  (Un.default.isMounted() || Un.default.mount(n),
                    Un.default.mapContainer(this.props.to, u)),
                  Sa.default.addSpyHandler(this.spyHandler, u),
                  this.setState({ container: u });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              Sa.default.unmount(this.stateHandler, this.spyHandler);
            },
          },
          {
            key: "render",
            value: function () {
              var u = "";
              this.state && this.state.active
                ? (u = (
                  (this.props.className || "") +
                  " " +
                  (this.props.activeClass || "active")
                ).trim())
                : (u = this.props.className);
              var c = {};
              this.state && this.state.active
                ? (c = _a({}, this.props.style, this.props.activeStyle))
                : (c = _a({}, this.props.style));
              var d = _a({}, this.props);
              for (var h in Uv) d.hasOwnProperty(h) && delete d[h];
              return (
                (d.className = u),
                (d.style = c),
                (d.onClick = this.handleClick),
                Wv.default.createElement(e, d)
              );
            },
          },
        ]),
        s
      );
    })(Wv.default.PureComponent),
    i = function () {
      var s = this;
      (this.scrollTo = function (l, u) {
        n.scrollTo(l, _a({}, s.state, u));
      }),
        (this.handleClick = function (l) {
          s.props.onClick && s.props.onClick(l),
            l.stopPropagation && l.stopPropagation(),
            l.preventDefault && l.preventDefault(),
            s.scrollTo(s.props.to, s.props);
        }),
        (this.spyHandler = function (l, u) {
          var c = s.getScrollSpyContainer();
          if (!(Un.default.isMounted() && !Un.default.isInitialized())) {
            var d = s.props.horizontal,
              h = s.props.to,
              m = null,
              S = void 0,
              b = void 0;
            if (d) {
              var x = 0,
                P = 0,
                w = 0;
              if (c.getBoundingClientRect) {
                var g = c.getBoundingClientRect();
                w = g.left;
              }
              if (!m || s.props.isDynamic) {
                if (((m = n.get(h)), !m)) return;
                var _ = m.getBoundingClientRect();
                (x = _.left - w + l), (P = x + _.width);
              }
              var T = l - s.props.offset;
              (S = T >= Math.floor(x) && T < Math.floor(P)),
                (b = T < Math.floor(x) || T >= Math.floor(P));
            } else {
              var k = 0,
                j = 0,
                R = 0;
              if (c.getBoundingClientRect) {
                var A = c.getBoundingClientRect();
                R = A.top;
              }
              if (!m || s.props.isDynamic) {
                if (((m = n.get(h)), !m)) return;
                var D = m.getBoundingClientRect();
                (k = D.top - R + u), (j = k + D.height);
              }
              var M = u - s.props.offset;
              (S = M >= Math.floor(k) && M < Math.floor(j)),
                (b = M < Math.floor(k) || M >= Math.floor(j));
            }
            var K = n.getActiveLink();
            if (b) {
              if (
                (h === K && n.setActiveLink(void 0),
                  s.props.hashSpy && Un.default.getHash() === h)
              ) {
                var Q = s.props.saveHashHistory,
                  Y = Q === void 0 ? !1 : Q;
                Un.default.changeHash("", Y);
              }
              s.props.spy &&
                s.state.active &&
                (s.setState({ active: !1 }),
                  s.props.onSetInactive && s.props.onSetInactive(h, m));
            }
            if (S && (K !== h || s.state.active === !1)) {
              n.setActiveLink(h);
              var X = s.props.saveHashHistory,
                ge = X === void 0 ? !1 : X;
              s.props.hashSpy && Un.default.changeHash(h, ge),
                s.props.spy &&
                (s.setState({ active: !0 }),
                  s.props.onSetActive && s.props.onSetActive(h, m));
            }
          }
        });
    };
  return (r.propTypes = Uv), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(Dh, "__esModule", { value: !0 });
var J3 = U,
  Kv = w_(J3),
  e4 = bs,
  t4 = w_(e4);
function w_(e) {
  return e && e.__esModule ? e : { default: e };
}
function n4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qv(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function r4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var i4 = (function (e) {
  r4(t, e);
  function t() {
    var n, r, i, o;
    n4(this, t);
    for (var s = arguments.length, l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u];
    return (
      (o =
        ((r =
          ((i = Qv(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(l)
            )
          )),
            i)),
          (i.render = function () {
            return Kv.default.createElement("a", i.props, i.props.children);
          }),
          r)),
      Qv(i, o)
    );
  }
  return t;
})(Kv.default.Component);
Dh.default = (0, t4.default)(i4);
var zh = {};
Object.defineProperty(zh, "__esModule", { value: !0 });
var o4 = (function () {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
})(),
  s4 = U,
  Yv = __(s4),
  a4 = bs,
  l4 = __(a4);
function __(e) {
  return e && e.__esModule ? e : { default: e };
}
function u4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c4(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function f4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var d4 = (function (e) {
  f4(t, e);
  function t() {
    return (
      u4(this, t),
      c4(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    o4(t, [
      {
        key: "render",
        value: function () {
          return Yv.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        },
      },
    ]),
    t
  );
})(Yv.default.Component);
zh.default = (0, l4.default)(d4);
var $h = {},
  nu = {};
Object.defineProperty(nu, "__esModule", { value: !0 });
var h4 =
  Object.assign ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  },
  p4 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  m4 = U,
  Xv = ru(m4),
  g4 = H1;
ru(g4);
var v4 = so,
  Gv = ru(v4),
  y4 = eu,
  qv = ru(y4);
function ru(e) {
  return e && e.__esModule ? e : { default: e };
}
function w4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _4(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function S4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
nu.default = function (e) {
  var t = (function (n) {
    S4(r, n);
    function r(i) {
      w4(this, r);
      var o = _4(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
      return (o.childBindings = { domNode: null }), o;
    }
    return (
      p4(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (typeof window > "u") return !1;
            this.registerElems(this.props.name);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (o) {
            this.props.name !== o.name && this.registerElems(this.props.name);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (typeof window > "u") return !1;
            Gv.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (o) {
            Gv.default.register(o, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return Xv.default.createElement(
              e,
              h4({}, this.props, { parentBindings: this.childBindings })
            );
          },
        },
      ]),
      r
    );
  })(Xv.default.Component);
  return (t.propTypes = { name: qv.default.string, id: qv.default.string }), t;
};
Object.defineProperty($h, "__esModule", { value: !0 });
var Zv =
  Object.assign ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  },
  x4 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  b4 = U,
  Jv = Fh(b4),
  C4 = nu,
  T4 = Fh(C4),
  E4 = eu,
  ey = Fh(E4);
function Fh(e) {
  return e && e.__esModule ? e : { default: e };
}
function P4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function k4(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function O4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var S_ = (function (e) {
  O4(t, e);
  function t() {
    return (
      P4(this, t),
      k4(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    x4(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            i = Zv({}, this.props);
          return (
            delete i.name,
            i.parentBindings && delete i.parentBindings,
            Jv.default.createElement(
              "div",
              Zv({}, i, {
                ref: function (s) {
                  r.props.parentBindings.domNode = s;
                },
              }),
              this.props.children
            )
          );
        },
      },
    ]),
    t
  );
})(Jv.default.Component);
S_.propTypes = { name: ey.default.string, id: ey.default.string };
$h.default = (0, T4.default)(S_);
var jc =
  Object.assign ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  },
  ty = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function ny(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ry(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function iy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var xa = U,
  Ar = Cs,
  Lc = so,
  De = eu,
  Kn = tu,
  oy = {
    to: De.string.isRequired,
    containerId: De.string,
    container: De.object,
    activeClass: De.string,
    spy: De.bool,
    smooth: De.oneOfType([De.bool, De.string]),
    offset: De.number,
    delay: De.number,
    isDynamic: De.bool,
    onClick: De.func,
    duration: De.oneOfType([De.number, De.func]),
    absolute: De.bool,
    onSetActive: De.func,
    onSetInactive: De.func,
    ignoreCancelEvents: De.bool,
    hashSpy: De.bool,
    spyThrottle: De.number,
  },
  j4 = {
    Scroll: function (t, n) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = n || Lc,
        i = (function (s) {
          iy(l, s);
          function l(u) {
            ny(this, l);
            var c = ry(
              this,
              (l.__proto__ || Object.getPrototypeOf(l)).call(this, u)
            );
            return o.call(c), (c.state = { active: !1 }), c;
          }
          return (
            ty(l, [
              {
                key: "getScrollSpyContainer",
                value: function () {
                  var c = this.props.containerId,
                    d = this.props.container;
                  return c
                    ? document.getElementById(c)
                    : d && d.nodeType
                      ? d
                      : document;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var c = this.getScrollSpyContainer();
                    Ar.isMounted(c) || Ar.mount(c, this.props.spyThrottle),
                      this.props.hashSpy &&
                      (Kn.isMounted() || Kn.mount(r),
                        Kn.mapContainer(this.props.to, c)),
                      this.props.spy && Ar.addStateHandler(this.stateHandler),
                      Ar.addSpyHandler(this.spyHandler, c),
                      this.setState({ container: c });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  Ar.unmount(this.stateHandler, this.spyHandler);
                },
              },
              {
                key: "render",
                value: function () {
                  var c = "";
                  this.state && this.state.active
                    ? (c = (
                      (this.props.className || "") +
                      " " +
                      (this.props.activeClass || "active")
                    ).trim())
                    : (c = this.props.className);
                  var d = jc({}, this.props);
                  for (var h in oy) d.hasOwnProperty(h) && delete d[h];
                  return (
                    (d.className = c),
                    (d.onClick = this.handleClick),
                    xa.createElement(t, d)
                  );
                },
              },
            ]),
            l
          );
        })(xa.Component),
        o = function () {
          var l = this;
          (this.scrollTo = function (u, c) {
            r.scrollTo(u, jc({}, l.state, c));
          }),
            (this.handleClick = function (u) {
              l.props.onClick && l.props.onClick(u),
                u.stopPropagation && u.stopPropagation(),
                u.preventDefault && u.preventDefault(),
                l.scrollTo(l.props.to, l.props);
            }),
            (this.stateHandler = function () {
              r.getActiveLink() !== l.props.to &&
                (l.state !== null &&
                  l.state.active &&
                  l.props.onSetInactive &&
                  l.props.onSetInactive(),
                  l.setState({ active: !1 }));
            }),
            (this.spyHandler = function (u) {
              var c = l.getScrollSpyContainer();
              if (!(Kn.isMounted() && !Kn.isInitialized())) {
                var d = l.props.to,
                  h = null,
                  m = 0,
                  S = 0,
                  b = 0;
                if (c.getBoundingClientRect) {
                  var x = c.getBoundingClientRect();
                  b = x.top;
                }
                if (!h || l.props.isDynamic) {
                  if (((h = r.get(d)), !h)) return;
                  var P = h.getBoundingClientRect();
                  (m = P.top - b + u), (S = m + P.height);
                }
                var w = u - l.props.offset,
                  g = w >= Math.floor(m) && w < Math.floor(S),
                  _ = w < Math.floor(m) || w >= Math.floor(S),
                  T = r.getActiveLink();
                if (_)
                  return (
                    d === T && r.setActiveLink(void 0),
                    l.props.hashSpy && Kn.getHash() === d && Kn.changeHash(),
                    l.props.spy &&
                    l.state.active &&
                    (l.setState({ active: !1 }),
                      l.props.onSetInactive && l.props.onSetInactive()),
                    Ar.updateStates()
                  );
                if (g && T !== d)
                  return (
                    r.setActiveLink(d),
                    l.props.hashSpy && Kn.changeHash(d),
                    l.props.spy &&
                    (l.setState({ active: !0 }),
                      l.props.onSetActive && l.props.onSetActive(d)),
                    Ar.updateStates()
                  );
              }
            });
        };
      return (i.propTypes = oy), (i.defaultProps = { offset: 0 }), i;
    },
    Element: function (t) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var n = (function (r) {
        iy(i, r);
        function i(o) {
          ny(this, i);
          var s = ry(
            this,
            (i.__proto__ || Object.getPrototypeOf(i)).call(this, o)
          );
          return (s.childBindings = { domNode: null }), s;
        }
        return (
          ty(i, [
            {
              key: "componentDidMount",
              value: function () {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (s) {
                this.props.name !== s.name &&
                  this.registerElems(this.props.name);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                if (typeof window > "u") return !1;
                Lc.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (s) {
                Lc.register(s, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return xa.createElement(
                  t,
                  jc({}, this.props, { parentBindings: this.childBindings })
                );
              },
            },
          ]),
          i
        );
      })(xa.Component);
      return (n.propTypes = { name: De.string, id: De.string }), n;
    },
  },
  L4 = j4;
Object.defineProperty($e, "__esModule", { value: !0 });
$e.Helpers =
  $e.ScrollElement =
  $e.ScrollLink =
  $e.animateScroll =
  $e.scrollSpy =
  $e.Events =
  $e.scroller =
  $e.Element =
  $e.Button =
  M_ =
  $e.Link =
  void 0;
var M4 = Dh,
  x_ = wn(M4),
  A4 = zh,
  b_ = wn(A4),
  D4 = $h,
  C_ = wn(D4),
  N4 = so,
  T_ = wn(N4),
  R4 = Ps,
  E_ = wn(R4),
  I4 = Cs,
  P_ = wn(I4),
  V4 = ql,
  k_ = wn(V4),
  z4 = bs,
  O_ = wn(z4),
  $4 = nu,
  j_ = wn($4),
  F4 = L4,
  L_ = wn(F4);
function wn(e) {
  return e && e.__esModule ? e : { default: e };
}
var M_ = ($e.Link = x_.default);
$e.Button = b_.default;
$e.Element = C_.default;
$e.scroller = T_.default;
$e.Events = E_.default;
$e.scrollSpy = P_.default;
$e.animateScroll = k_.default;
$e.ScrollLink = O_.default;
$e.ScrollElement = j_.default;
$e.Helpers = L_.default;
$e.default = {
  Link: x_.default,
  Button: b_.default,
  Element: C_.default,
  scroller: T_.default,
  Events: E_.default,
  scrollSpy: P_.default,
  animateScroll: k_.default,
  ScrollLink: O_.default,
  ScrollElement: j_.default,
  Helpers: L_.default,
};
const H4 = [
  { id: 1, path: "home", label: "Home" },
  { id: 2, path: "about", label: "About" },
  { id: 3, path: "services", label: "Services" },
  { id: 4, path: "resume", label: "Resume" },
  { id: 5, path: "portfolio", label: "Projects" },
  { id: 6, path: "contact", label: "Contact" },
],
  B4 = () => {
    const [e, t] = U.useState(!1);
    U.useEffect(
      () => (
        window.addEventListener("scroll", n),
        () => window.removeEventListener("scroll", n)
      ),
      []
    );
    const n = () => {
      window.scrollY > 85 ? t(!0) : t(!1);
    };
    return v.jsx("header", {
      className: `main-header ${e ? "fixed-header" : ""}`,
      children: v.jsx("div", {
        className: "header-upper",
        children: v.jsx("div", {
          className: "container",
          children: v.jsxs("div", {
            className: "header-inner d-flex align-items-center",
            children: [
              v.jsx("div", {
                className: "logo-outer",
                children: v.jsx("div", {
                  className: "logo",
                  children: v.jsx("a", {
                    href: "#",
                    children: v.jsx("img", {
                      src: zv,
                      alt: "Logo",
                      title: "Logo",
                    }),
                  }),
                }),
              }),
              v.jsx("div", {
                className: "nav-outer",
                children: v.jsxs("nav", {
                  className: "main-menu navbar-expand-lg",
                  children: [
                    v.jsxs("div", {
                      className: "navbar-header",
                      children: [
                        v.jsx("div", {
                          className: "mobile-logo",
                          children: v.jsx("a", {
                            href: "#",
                            children: v.jsx("img", {
                              src: zv,
                              alt: "Logo",
                              title: "Logo",
                            }),
                          }),
                        }),
                        v.jsxs("button", {
                          type: "button",
                          className: "navbar-toggle",
                          "data-bs-toggle": "collapse",
                          "data-bs-target": ".navbar-collapse",
                          children: [
                            v.jsx("span", { className: "icon-bar" }),
                            v.jsx("span", { className: "icon-bar" }),
                            v.jsx("span", { className: "icon-bar" }),
                          ],
                        }),
                      ],
                    }),
                    v.jsx("div", {
                      className: "navbar-collapse collapse",
                      children: v.jsx("ul", {
                        className: "navigation onepage clearfix",
                        children: H4.map(({ id: r, label: i, path: o }) =>
                          v.jsx(
                            "li",
                            {
                              children: v.jsx(M_, {
                                to: o,
                                spy: !0,
                                smooth: !0,
                                offset: 0,
                                duration: 500,
                                className: "nav-link-click",
                                children: i,
                              }),
                            },
                            r
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    });
  };
var A_ = {},
  D_ = {},
  iu = {},
  N_ = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  e.default = t;
})(N_);
var W4 = "Expected a function",
  sy = NaN,
  U4 = "[object Symbol]",
  K4 = /^\s+|\s+$/g,
  Q4 = /^[-+]0x[0-9a-f]+$/i,
  Y4 = /^0b[01]+$/i,
  X4 = /^0o[0-7]+$/i,
  G4 = parseInt,
  q4 = typeof Tn == "object" && Tn && Tn.Object === Object && Tn,
  Z4 = typeof self == "object" && self && self.Object === Object && self,
  J4 = q4 || Z4 || Function("return this")(),
  ej = Object.prototype,
  tj = ej.toString,
  nj = Math.max,
  rj = Math.min,
  Mc = function () {
    return J4.Date.now();
  };
function ij(e, t, n) {
  var r,
    i,
    o,
    s,
    l,
    u,
    c = 0,
    d = !1,
    h = !1,
    m = !0;
  if (typeof e != "function") throw new TypeError(W4);
  (t = ay(t) || 0),
    td(n) &&
    ((d = !!n.leading),
      (h = "maxWait" in n),
      (o = h ? nj(ay(n.maxWait) || 0, t) : o),
      (m = "trailing" in n ? !!n.trailing : m));
  function S(j) {
    var R = r,
      A = i;
    return (r = i = void 0), (c = j), (s = e.apply(A, R)), s;
  }
  function b(j) {
    return (c = j), (l = setTimeout(w, t)), d ? S(j) : s;
  }
  function x(j) {
    var R = j - u,
      A = j - c,
      D = t - R;
    return h ? rj(D, o - A) : D;
  }
  function P(j) {
    var R = j - u,
      A = j - c;
    return u === void 0 || R >= t || R < 0 || (h && A >= o);
  }
  function w() {
    var j = Mc();
    if (P(j)) return g(j);
    l = setTimeout(w, x(j));
  }
  function g(j) {
    return (l = void 0), m && r ? S(j) : ((r = i = void 0), s);
  }
  function _() {
    l !== void 0 && clearTimeout(l), (c = 0), (r = u = i = l = void 0);
  }
  function T() {
    return l === void 0 ? s : g(Mc());
  }
  function k() {
    var j = Mc(),
      R = P(j);
    if (((r = arguments), (i = this), (u = j), R)) {
      if (l === void 0) return b(u);
      if (h) return (l = setTimeout(w, t)), S(u);
    }
    return l === void 0 && (l = setTimeout(w, t)), s;
  }
  return (k.cancel = _), (k.flush = T), k;
}
function td(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function oj(e) {
  return !!e && typeof e == "object";
}
function sj(e) {
  return typeof e == "symbol" || (oj(e) && tj.call(e) == U4);
}
function ay(e) {
  if (typeof e == "number") return e;
  if (sj(e)) return sy;
  if (td(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = td(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(K4, "");
  var n = Y4.test(e);
  return n || X4.test(e) ? G4(e.slice(2), n ? 2 : 8) : Q4.test(e) ? sy : +e;
}
var aj = ij,
  R_ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var l = arguments[s];
        l && (o = i(o, r(l)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var s = "";
      for (var l in o) t.call(o, l) && o[l] && (s = i(s, l));
      return s;
    }
    function i(o, s) {
      return s ? (o ? o + " " + s : o + s) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(R_);
var ou = R_.exports,
  $ = {},
  Hh = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(U);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (o) {
      return t.default.createElement("ul", { style: { display: "block" } }, o);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (o) {
      return t.default.createElement("button", null, o + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
  };
  e.default = r;
})(Hh);
Object.defineProperty($, "__esModule", { value: !0 });
$.checkSpecKeys =
  $.checkNavigable =
  $.changeSlide =
  $.canUseDOM =
  $.canGoNext =
  void 0;
$.clamp = V_;
$.extractObject = void 0;
$.filterSettings = xj;
$.validSettings =
  $.swipeStart =
  $.swipeMove =
  $.swipeEnd =
  $.slidesOnRight =
  $.slidesOnLeft =
  $.slideHandler =
  $.siblingDirection =
  $.safePreventDefault =
  $.lazyStartIndex =
  $.lazySlidesOnRight =
  $.lazySlidesOnLeft =
  $.lazyEndIndex =
  $.keyHandler =
  $.initializedState =
  $.getWidth =
  $.getTrackLeft =
  $.getTrackCSS =
  $.getTrackAnimateCSS =
  $.getTotalSlides =
  $.getSwipeDirection =
  $.getSlideCount =
  $.getRequiredLazySlides =
  $.getPreClones =
  $.getPostClones =
  $.getOnDemandLazySlides =
  $.getNavigableIndexes =
  $.getHeight =
  void 0;
var lj = I_(U),
  uj = I_(Hh);
function I_(e) {
  return e && e.__esModule ? e : { default: e };
}
function hs(e) {
  "@babel/helpers - typeof";
  return (
    (hs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
          return typeof t;
        }
        : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    hs(e)
  );
}
function ly(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ly(Object(n), !0).forEach(function (r) {
        cj(e, r, n[r]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ly(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function cj(e, t, n) {
  return (
    (t = fj(t)),
    t in e
      ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (e[t] = n),
    e
  );
}
function fj(e) {
  var t = dj(e, "string");
  return hs(t) == "symbol" ? t : String(t);
}
function dj(e, t) {
  if (hs(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (hs(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V_(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var $i = ($.safePreventDefault = function (t) {
  var n = ["onTouchStart", "onTouchMove", "onWheel"];
  n.includes(t._reactName) || t.preventDefault();
}),
  z_ = ($.getOnDemandLazySlides = function (t) {
    for (var n = [], r = $_(t), i = F_(t), o = r; o < i; o++)
      t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
    return n;
  });
$.getRequiredLazySlides = function (t) {
  for (var n = [], r = $_(t), i = F_(t), o = r; o < i; o++) n.push(o);
  return n;
};
var $_ = ($.lazyStartIndex = function (t) {
  return t.currentSlide - hj(t);
}),
  F_ = ($.lazyEndIndex = function (t) {
    return t.currentSlide + pj(t);
  }),
  hj = ($.lazySlidesOnLeft = function (t) {
    return t.centerMode
      ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  pj = ($.lazySlidesOnRight = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) +
      1 +
      (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  }),
  nd = ($.getWidth = function (t) {
    return (t && t.offsetWidth) || 0;
  }),
  H_ = ($.getHeight = function (t) {
    return (t && t.offsetHeight) || 0;
  }),
  B_ = ($.getSwipeDirection = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r,
      i,
      o,
      s;
    return (
      (r = t.startX - t.curX),
      (i = t.startY - t.curY),
      (o = Math.atan2(i, r)),
      (s = Math.round((o * 180) / Math.PI)),
      s < 0 && (s = 360 - Math.abs(s)),
      (s <= 45 && s >= 0) || (s <= 360 && s >= 315)
        ? "left"
        : s >= 135 && s <= 225
          ? "right"
          : n === !0
            ? s >= 35 && s <= 135
              ? "up"
              : "down"
            : "vertical"
    );
  }),
  W_ = ($.canGoNext = function (t) {
    var n = !0;
    return (
      t.infinite ||
      (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
        t.slideCount <= t.slidesToShow ||
        t.currentSlide >= t.slideCount - t.slidesToShow) &&
        (n = !1)),
      n
    );
  });
$.extractObject = function (t, n) {
  var r = {};
  return (
    n.forEach(function (i) {
      return (r[i] = t[i]);
    }),
    r
  );
};
$.initializedState = function (t) {
  var n = lj.default.Children.count(t.children),
    r = t.listRef,
    i = Math.ceil(nd(r)),
    o = t.trackRef && t.trackRef.node,
    s = Math.ceil(nd(o)),
    l;
  if (t.vertical) l = i;
  else {
    var u = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (u *= i / 100),
      (l = Math.ceil((i - u) / t.slidesToShow));
  }
  var c = r && H_(r.querySelector('[data-index="0"]')),
    d = c * t.slidesToShow,
    h = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (h = n - 1 - t.initialSlide);
  var m = t.lazyLoadedList || [],
    S = z_(je(je({}, t), {}, { currentSlide: h, lazyLoadedList: m }));
  m = m.concat(S);
  var b = {
    slideCount: n,
    slideWidth: l,
    listWidth: i,
    trackWidth: s,
    currentSlide: h,
    slideHeight: c,
    listHeight: d,
    lazyLoadedList: m,
  };
  return t.autoplaying === null && t.autoplay && (b.autoplaying = "playing"), b;
};
$.slideHandler = function (t) {
  var n = t.waitForAnimate,
    r = t.animating,
    i = t.fade,
    o = t.infinite,
    s = t.index,
    l = t.slideCount,
    u = t.lazyLoad,
    c = t.currentSlide,
    d = t.centerMode,
    h = t.slidesToScroll,
    m = t.slidesToShow,
    S = t.useCSS,
    b = t.lazyLoadedList;
  if (n && r) return {};
  var x = s,
    P,
    w,
    g,
    _ = {},
    T = {},
    k = o ? s : V_(s, 0, l - 1);
  if (i) {
    if (!o && (s < 0 || s >= l)) return {};
    s < 0 ? (x = s + l) : s >= l && (x = s - l),
      u && b.indexOf(x) < 0 && (b = b.concat(x)),
      (_ = {
        animating: !0,
        currentSlide: x,
        lazyLoadedList: b,
        targetSlide: x,
      }),
      (T = { animating: !1, targetSlide: x });
  } else
    (P = x),
      x < 0
        ? ((P = x + l), o ? l % h !== 0 && (P = l - (l % h)) : (P = 0))
        : !W_(t) && x > c
          ? (x = P = c)
          : d && x >= l
            ? ((x = o ? l : l - 1), (P = o ? 0 : l - 1))
            : x >= l && ((P = x - l), o ? l % h !== 0 && (P = 0) : (P = l - m)),
      !o && x + m >= l && (P = l - m),
      (w = wl(je(je({}, t), {}, { slideIndex: x }))),
      (g = wl(je(je({}, t), {}, { slideIndex: P }))),
      o || (w === g && (x = P), (w = g)),
      u && (b = b.concat(z_(je(je({}, t), {}, { currentSlide: x })))),
      S
        ? ((_ = {
          animating: !0,
          currentSlide: P,
          trackStyle: U_(je(je({}, t), {}, { left: w })),
          lazyLoadedList: b,
          targetSlide: k,
        }),
          (T = {
            animating: !1,
            currentSlide: P,
            trackStyle: yl(je(je({}, t), {}, { left: g })),
            swipeLeft: null,
            targetSlide: k,
          }))
        : (_ = {
          currentSlide: P,
          trackStyle: yl(je(je({}, t), {}, { left: g })),
          lazyLoadedList: b,
          targetSlide: k,
        });
  return { state: _, nextState: T };
};
$.changeSlide = function (t, n) {
  var r,
    i,
    o,
    s,
    l,
    u = t.slidesToScroll,
    c = t.slidesToShow,
    d = t.slideCount,
    h = t.currentSlide,
    m = t.targetSlide,
    S = t.lazyLoad,
    b = t.infinite;
  if (((s = d % u !== 0), (r = s ? 0 : (d - h) % u), n.message === "previous"))
    (o = r === 0 ? u : c - r),
      (l = h - o),
      S && !b && ((i = h - o), (l = i === -1 ? d - 1 : i)),
      b || (l = m - u);
  else if (n.message === "next")
    (o = r === 0 ? u : r),
      (l = h + o),
      S && !b && (l = ((h + u) % d) + r),
      b || (l = m + u);
  else if (n.message === "dots") l = n.index * n.slidesToScroll;
  else if (n.message === "children") {
    if (((l = n.index), b)) {
      var x = yj(je(je({}, t), {}, { targetSlide: l }));
      l > n.currentSlide && x === "left"
        ? (l = l - d)
        : l < n.currentSlide && x === "right" && (l = l + d);
    }
  } else n.message === "index" && (l = Number(n.index));
  return l;
};
$.keyHandler = function (t, n, r) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n
    ? ""
    : t.keyCode === 37
      ? r
        ? "next"
        : "previous"
      : t.keyCode === 39
        ? r
          ? "previous"
          : "next"
        : "";
};
$.swipeStart = function (t, n, r) {
  return (
    t.target.tagName === "IMG" && $i(t),
    !n || (!r && t.type.indexOf("mouse") !== -1)
      ? ""
      : {
        dragging: !0,
        touchObject: {
          startX: t.touches ? t.touches[0].pageX : t.clientX,
          startY: t.touches ? t.touches[0].pageY : t.clientY,
          curX: t.touches ? t.touches[0].pageX : t.clientX,
          curY: t.touches ? t.touches[0].pageY : t.clientY,
        },
      }
  );
};
$.swipeMove = function (t, n) {
  var r = n.scrolling,
    i = n.animating,
    o = n.vertical,
    s = n.swipeToSlide,
    l = n.verticalSwiping,
    u = n.rtl,
    c = n.currentSlide,
    d = n.edgeFriction,
    h = n.edgeDragged,
    m = n.onEdge,
    S = n.swiped,
    b = n.swiping,
    x = n.slideCount,
    P = n.slidesToScroll,
    w = n.infinite,
    g = n.touchObject,
    _ = n.swipeEvent,
    T = n.listHeight,
    k = n.listWidth;
  if (!r) {
    if (i) return $i(t);
    o && s && l && $i(t);
    var j,
      R = {},
      A = wl(n);
    (g.curX = t.touches ? t.touches[0].pageX : t.clientX),
      (g.curY = t.touches ? t.touches[0].pageY : t.clientY),
      (g.swipeLength = Math.round(Math.sqrt(Math.pow(g.curX - g.startX, 2))));
    var D = Math.round(Math.sqrt(Math.pow(g.curY - g.startY, 2)));
    if (!l && !b && D > 10) return { scrolling: !0 };
    l && (g.swipeLength = D);
    var M = (u ? -1 : 1) * (g.curX > g.startX ? 1 : -1);
    l && (M = g.curY > g.startY ? 1 : -1);
    var K = Math.ceil(x / P),
      Q = B_(n.touchObject, l),
      Y = g.swipeLength;
    return (
      w ||
      (((c === 0 && (Q === "right" || Q === "down")) ||
        (c + 1 >= K && (Q === "left" || Q === "up")) ||
        (!W_(n) && (Q === "left" || Q === "up"))) &&
        ((Y = g.swipeLength * d),
          h === !1 && m && (m(Q), (R.edgeDragged = !0)))),
      !S && _ && (_(Q), (R.swiped = !0)),
      o ? (j = A + Y * (T / k) * M) : u ? (j = A - Y * M) : (j = A + Y * M),
      l && (j = A + Y * M),
      (R = je(
        je({}, R),
        {},
        {
          touchObject: g,
          swipeLeft: j,
          trackStyle: yl(je(je({}, n), {}, { left: j })),
        }
      )),
      Math.abs(g.curX - g.startX) < Math.abs(g.curY - g.startY) * 0.8 ||
      (g.swipeLength > 10 && ((R.swiping = !0), $i(t))),
      R
    );
  }
};
$.swipeEnd = function (t, n) {
  var r = n.dragging,
    i = n.swipe,
    o = n.touchObject,
    s = n.listWidth,
    l = n.touchThreshold,
    u = n.verticalSwiping,
    c = n.listHeight,
    d = n.swipeToSlide,
    h = n.scrolling,
    m = n.onSwipe,
    S = n.targetSlide,
    b = n.currentSlide,
    x = n.infinite;
  if (!r) return i && $i(t), {};
  var P = u ? c / l : s / l,
    w = B_(o, u),
    g = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (h || !o.swipeLength) return g;
  if (o.swipeLength > P) {
    $i(t), m && m(w);
    var _,
      T,
      k = x ? b : S;
    switch (w) {
      case "left":
      case "up":
        (T = k + cy(n)), (_ = d ? uy(n, T) : T), (g.currentDirection = 0);
        break;
      case "right":
      case "down":
        (T = k - cy(n)), (_ = d ? uy(n, T) : T), (g.currentDirection = 1);
        break;
      default:
        _ = k;
    }
    g.triggerSlideHandler = _;
  } else {
    var j = wl(n);
    g.trackStyle = U_(je(je({}, n), {}, { left: j }));
  }
  return g;
};
var mj = ($.getNavigableIndexes = function (t) {
  for (
    var n = t.infinite ? t.slideCount * 2 : t.slideCount,
    r = t.infinite ? t.slidesToShow * -1 : 0,
    i = t.infinite ? t.slidesToShow * -1 : 0,
    o = [];
    r < n;

  )
    o.push(r),
      (r = i + t.slidesToScroll),
      (i += Math.min(t.slidesToScroll, t.slidesToShow));
  return o;
}),
  uy = ($.checkNavigable = function (t, n) {
    var r = mj(t),
      i = 0;
    if (n > r[r.length - 1]) n = r[r.length - 1];
    else
      for (var o in r) {
        if (n < r[o]) {
          n = i;
          break;
        }
        i = r[o];
      }
    return n;
  }),
  cy = ($.getSlideCount = function (t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var r,
        i = t.listRef,
        o = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(o).every(function (u) {
          if (t.vertical) {
            if (u.offsetTop + H_(u) / 2 > t.swipeLeft * -1) return (r = u), !1;
          } else if (u.offsetLeft - n + nd(u) / 2 > t.swipeLeft * -1) return (r = u), !1;
          return !0;
        }),
          !r)
      )
        return 0;
      var s = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
        l = Math.abs(r.dataset.index - s) || 1;
      return l;
    } else return t.slidesToScroll;
  }),
  Bh = ($.checkSpecKeys = function (t, n) {
    return n.reduce(function (r, i) {
      return r && t.hasOwnProperty(i);
    }, !0)
      ? null
      : console.error("Keys Missing:", t);
  }),
  yl = ($.getTrackCSS = function (t) {
    Bh(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var n,
      r,
      i = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (r = i * t.slideHeight) : (n = vj(t) * t.slideWidth);
    var o = { opacity: 1, transition: "", WebkitTransition: "" };
    if (t.useTransform) {
      var s = t.vertical
        ? "translate3d(0px, " + t.left + "px, 0px)"
        : "translate3d(" + t.left + "px, 0px, 0px)",
        l = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        u = t.vertical
          ? "translateY(" + t.left + "px)"
          : "translateX(" + t.left + "px)";
      o = je(
        je({}, o),
        {},
        { WebkitTransform: s, transform: l, msTransform: u }
      );
    } else t.vertical ? (o.top = t.left) : (o.left = t.left);
    return (
      t.fade && (o = { opacity: 1 }),
      n && (o.width = n),
      r && (o.height = r),
      window &&
      !window.addEventListener &&
      window.attachEvent &&
      (t.vertical
        ? (o.marginTop = t.left + "px")
        : (o.marginLeft = t.left + "px")),
      o
    );
  }),
  U_ = ($.getTrackAnimateCSS = function (t) {
    Bh(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var n = yl(t);
    return (
      t.useTransform
        ? ((n.WebkitTransition =
          "-webkit-transform " + t.speed + "ms " + t.cssEase),
          (n.transition = "transform " + t.speed + "ms " + t.cssEase))
        : t.vertical
          ? (n.transition = "top " + t.speed + "ms " + t.cssEase)
          : (n.transition = "left " + t.speed + "ms " + t.cssEase),
      n
    );
  }),
  wl = ($.getTrackLeft = function (t) {
    if (t.unslick) return 0;
    Bh(t, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var n = t.slideIndex,
      r = t.trackRef,
      i = t.infinite,
      o = t.centerMode,
      s = t.slideCount,
      l = t.slidesToShow,
      u = t.slidesToScroll,
      c = t.slideWidth,
      d = t.listWidth,
      h = t.variableWidth,
      m = t.slideHeight,
      S = t.fade,
      b = t.vertical,
      x = 0,
      P,
      w,
      g = 0;
    if (S || t.slideCount === 1) return 0;
    var _ = 0;
    if (
      (i
        ? ((_ = -$a(t)),
          s % u !== 0 && n + u > s && (_ = -(n > s ? l - (n - s) : s % u)),
          o && (_ += parseInt(l / 2)))
        : (s % u !== 0 && n + u > s && (_ = l - (s % u)),
          o && (_ = parseInt(l / 2))),
        (x = _ * c),
        (g = _ * m),
        b ? (P = n * m * -1 + g) : (P = n * c * -1 + x),
        h === !0)
    ) {
      var T,
        k = r && r.node;
      if (
        ((T = n + $a(t)),
          (w = k && k.childNodes[T]),
          (P = w ? w.offsetLeft * -1 : 0),
          o === !0)
      ) {
        (T = i ? n + $a(t) : n), (w = k && k.children[T]), (P = 0);
        for (var j = 0; j < T; j++)
          P -= k && k.children[j] && k.children[j].offsetWidth;
        (P -= parseInt(t.centerPadding)), (P += w && (d - w.offsetWidth) / 2);
      }
    }
    return P;
  }),
  $a = ($.getPreClones = function (t) {
    return t.unslick || !t.infinite
      ? 0
      : t.variableWidth
        ? t.slideCount
        : t.slidesToShow + (t.centerMode ? 1 : 0);
  }),
  gj = ($.getPostClones = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  }),
  vj = ($.getTotalSlides = function (t) {
    return t.slideCount === 1 ? 1 : $a(t) + t.slideCount + gj(t);
  }),
  yj = ($.siblingDirection = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + wj(t)
        ? "left"
        : "right"
      : t.targetSlide < t.currentSlide - _j(t)
        ? "right"
        : "left";
  }),
  wj = ($.slidesOnRight = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var s = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (s += 1), i && n % 2 === 0 && (s += 1), s;
    }
    return i ? 0 : n - 1;
  }),
  _j = ($.slidesOnLeft = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var s = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (s += 1), !i && n % 2 === 0 && (s += 1), s;
    }
    return i ? n - 1 : 0;
  });
$.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var Sj = ($.validSettings = Object.keys(uj.default));
function xj(e) {
  return Sj.reduce(function (t, n) {
    return e.hasOwnProperty(n) && (t[n] = e[n]), t;
  }, {});
}
var su = {};
Object.defineProperty(su, "__esModule", { value: !0 });
su.Track = void 0;
var qn = K_(U),
  Ac = K_(ou),
  Dc = $;
function K_(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gi(e) {
  "@babel/helpers - typeof";
  return (
    (Gi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
          return typeof t;
        }
        : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Gi(e)
  );
}
function rd() {
  return (
    (rd = Object.assign
      ? Object.assign.bind()
      : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    rd.apply(this, arguments)
  );
}
function bj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cj(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Y_(r.key), r);
  }
}
function Tj(e, t, n) {
  return (
    t && Cj(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ej(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && id(e, t);
}
function id(e, t) {
  return (
    (id = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
        return (r.__proto__ = i), r;
      }),
    id(e, t)
  );
}
function Pj(e) {
  var t = Q_();
  return function () {
    var r = _l(e),
      i;
    if (t) {
      var o = _l(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return kj(this, i);
  };
}
function kj(e, t) {
  if (t && (Gi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return od(e);
}
function od(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Q_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () { })
    );
  } catch { }
  return (Q_ = function () {
    return !!e;
  })();
}
function _l(e) {
  return (
    (_l = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }),
    _l(e)
  );
}
function fy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fy(Object(n), !0).forEach(function (r) {
        sd(e, r, n[r]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function sd(e, t, n) {
  return (
    (t = Y_(t)),
    t in e
      ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (e[t] = n),
    e
  );
}
function Y_(e) {
  var t = Oj(e, "string");
  return Gi(t) == "symbol" ? t : String(t);
}
function Oj(e, t) {
  if (Gi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Gi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Nc = function (t) {
  var n, r, i, o, s;
  t.rtl ? (s = t.slideCount - 1 - t.index) : (s = t.index),
    (i = s < 0 || s >= t.slideCount),
    t.centerMode
      ? ((o = Math.floor(t.slidesToShow / 2)),
        (r = (s - t.currentSlide) % t.slideCount === 0),
        s > t.currentSlide - o - 1 && s <= t.currentSlide + o && (n = !0))
      : (n = t.currentSlide <= s && s < t.currentSlide + t.slidesToShow);
  var l;
  t.targetSlide < 0
    ? (l = t.targetSlide + t.slideCount)
    : t.targetSlide >= t.slideCount
      ? (l = t.targetSlide - t.slideCount)
      : (l = t.targetSlide);
  var u = s === l;
  return {
    "slick-slide": !0,
    "slick-active": n,
    "slick-center": r,
    "slick-cloned": i,
    "slick-current": u,
  };
},
  jj = function (t) {
    var n = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) &&
      (n.width = t.slideWidth),
      t.fade &&
      ((n.position = "relative"),
        t.vertical
          ? (n.top = -t.index * parseInt(t.slideHeight))
          : (n.left = -t.index * parseInt(t.slideWidth)),
        (n.opacity = t.currentSlide === t.index ? 1 : 0),
        (n.zIndex = t.currentSlide === t.index ? 999 : 998),
        t.useCSS &&
        (n.transition =
          "opacity " +
          t.speed +
          "ms " +
          t.cssEase +
          ", visibility " +
          t.speed +
          "ms " +
          t.cssEase)),
      n
    );
  },
  Rc = function (t, n) {
    return t.key || n;
  },
  Lj = function (t) {
    var n,
      r = [],
      i = [],
      o = [],
      s = qn.default.Children.count(t.children),
      l = (0, Dc.lazyStartIndex)(t),
      u = (0, Dc.lazyEndIndex)(t);
    return (
      qn.default.Children.forEach(t.children, function (c, d) {
        var h,
          m = {
            message: "children",
            index: d,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(d) >= 0)
          ? (h = c)
          : (h = qn.default.createElement("div", null));
        var S = jj(xt(xt({}, t), {}, { index: d })),
          b = h.props.className || "",
          x = Nc(xt(xt({}, t), {}, { index: d }));
        if (
          (r.push(
            qn.default.cloneElement(h, {
              key: "original" + Rc(h, d),
              "data-index": d,
              className: (0, Ac.default)(x, b),
              tabIndex: "-1",
              "aria-hidden": !x["slick-active"],
              style: xt(xt({ outline: "none" }, h.props.style || {}), S),
              onClick: function (g) {
                h.props && h.props.onClick && h.props.onClick(g),
                  t.focusOnSelect && t.focusOnSelect(m);
              },
            })
          ),
            t.infinite && t.fade === !1)
        ) {
          var P = s - d;
          P <= (0, Dc.getPreClones)(t) &&
            ((n = -P),
              n >= l && (h = c),
              (x = Nc(xt(xt({}, t), {}, { index: n }))),
              i.push(
                qn.default.cloneElement(h, {
                  key: "precloned" + Rc(h, n),
                  "data-index": n,
                  tabIndex: "-1",
                  className: (0, Ac.default)(x, b),
                  "aria-hidden": !x["slick-active"],
                  style: xt(xt({}, h.props.style || {}), S),
                  onClick: function (g) {
                    h.props && h.props.onClick && h.props.onClick(g),
                      t.focusOnSelect && t.focusOnSelect(m);
                  },
                })
              )),
            (n = s + d),
            n < u && (h = c),
            (x = Nc(xt(xt({}, t), {}, { index: n }))),
            o.push(
              qn.default.cloneElement(h, {
                key: "postcloned" + Rc(h, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, Ac.default)(x, b),
                "aria-hidden": !x["slick-active"],
                style: xt(xt({}, h.props.style || {}), S),
                onClick: function (g) {
                  h.props && h.props.onClick && h.props.onClick(g),
                    t.focusOnSelect && t.focusOnSelect(m);
                },
              })
            );
        }
      }),
      t.rtl ? i.concat(r, o).reverse() : i.concat(r, o)
    );
  };
su.Track = (function (e) {
  Ej(n, e);
  var t = Pj(n);
  function n() {
    var r;
    bj(this, n);
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      (r = t.call.apply(t, [this].concat(o))),
      sd(od(r), "node", null),
      sd(od(r), "handleRef", function (l) {
        r.node = l;
      }),
      r
    );
  }
  return (
    Tj(n, [
      {
        key: "render",
        value: function () {
          var i = Lj(this.props),
            o = this.props,
            s = o.onMouseEnter,
            l = o.onMouseOver,
            u = o.onMouseLeave,
            c = { onMouseEnter: s, onMouseOver: l, onMouseLeave: u };
          return qn.default.createElement(
            "div",
            rd(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              c
            ),
            i
          );
        },
      },
    ]),
    n
  );
})(qn.default.PureComponent);
var au = {};
function qi(e) {
  "@babel/helpers - typeof";
  return (
    (qi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
          return typeof t;
        }
        : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    qi(e)
  );
}
Object.defineProperty(au, "__esModule", { value: !0 });
au.Dots = void 0;
var ba = X_(U),
  Mj = X_(ou),
  dy = $;
function X_(e) {
  return e && e.__esModule ? e : { default: e };
}
function hy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Aj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hy(Object(n), !0).forEach(function (r) {
        Dj(e, r, n[r]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Dj(e, t, n) {
  return (
    (t = G_(t)),
    t in e
      ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (e[t] = n),
    e
  );
}
function Nj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rj(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, G_(r.key), r);
  }
}
function Ij(e, t, n) {
  return (
    t && Rj(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function G_(e) {
  var t = Vj(e, "string");
  return qi(t) == "symbol" ? t : String(t);
}
function Vj(e, t) {
  if (qi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (qi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ad(e, t);
}
function ad(e, t) {
  return (
    (ad = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
        return (r.__proto__ = i), r;
      }),
    ad(e, t)
  );
}
function $j(e) {
  var t = q_();
  return function () {
    var r = Sl(e),
      i;
    if (t) {
      var o = Sl(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Fj(this, i);
  };
}
function Fj(e, t) {
  if (t && (qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Hj(e);
}
function Hj(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function q_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () { })
    );
  } catch { }
  return (q_ = function () {
    return !!e;
  })();
}
function Sl(e) {
  return (
    (Sl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }),
    Sl(e)
  );
}
var Bj = function (t) {
  var n;
  return (
    t.infinite
      ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
      : (n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
    n
  );
};
au.Dots = (function (e) {
  zj(n, e);
  var t = $j(n);
  function n() {
    return Nj(this, n), t.apply(this, arguments);
  }
  return (
    Ij(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o.preventDefault(), this.props.clickHandler(i);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var i = this.props,
            o = i.onMouseEnter,
            s = i.onMouseOver,
            l = i.onMouseLeave,
            u = i.infinite,
            c = i.slidesToScroll,
            d = i.slidesToShow,
            h = i.slideCount,
            m = i.currentSlide,
            S = Bj({
              slideCount: h,
              slidesToScroll: c,
              slidesToShow: d,
              infinite: u,
            }),
            b = { onMouseEnter: o, onMouseOver: s, onMouseLeave: l },
            x = [],
            P = 0;
            P < S;
            P++
          ) {
            var w = (P + 1) * c - 1,
              g = u ? w : (0, dy.clamp)(w, 0, h - 1),
              _ = g - (c - 1),
              T = u ? _ : (0, dy.clamp)(_, 0, h - 1),
              k = (0, Mj.default)({
                "slick-active": u ? m >= T && m <= g : m === T,
              }),
              j = {
                message: "dots",
                index: P,
                slidesToScroll: c,
                currentSlide: m,
              },
              R = this.clickHandler.bind(this, j);
            x = x.concat(
              ba.default.createElement(
                "li",
                { key: P, className: k },
                ba.default.cloneElement(this.props.customPaging(P), {
                  onClick: R,
                })
              )
            );
          }
          return ba.default.cloneElement(
            this.props.appendDots(x),
            Aj({ className: this.props.dotsClass }, b)
          );
        },
      },
    ]),
    n
  );
})(ba.default.PureComponent);
var Zi = {};
function Ji(e) {
  "@babel/helpers - typeof";
  return (
    (Ji =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
          return typeof t;
        }
        : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Ji(e)
  );
}
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.PrevArrow = Zi.NextArrow = void 0;
var Fi = J_(U),
  Z_ = J_(ou),
  Wj = $;
function J_(e) {
  return e && e.__esModule ? e : { default: e };
}
function xl() {
  return (
    (xl = Object.assign
      ? Object.assign.bind()
      : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    xl.apply(this, arguments)
  );
}
function py(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? py(Object(n), !0).forEach(function (r) {
        Uj(e, r, n[r]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : py(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Uj(e, t, n) {
  return (
    (t = nS(t)),
    t in e
      ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (e[t] = n),
    e
  );
}
function eS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kj(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, nS(r.key), r);
  }
}
function tS(e, t, n) {
  return (
    t && Kj(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function nS(e) {
  var t = Qj(e, "string");
  return Ji(t) == "symbol" ? t : String(t);
}
function Qj(e, t) {
  if (Ji(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ji(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ld(e, t);
}
function ld(e, t) {
  return (
    (ld = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
        return (r.__proto__ = i), r;
      }),
    ld(e, t)
  );
}
function iS(e) {
  var t = oS();
  return function () {
    var r = Cl(e),
      i;
    if (t) {
      var o = Cl(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Yj(this, i);
  };
}
function Yj(e, t) {
  if (t && (Ji(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Xj(e);
}
function Xj(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function oS() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () { })
    );
  } catch { }
  return (oS = function () {
    return !!e;
  })();
}
function Cl(e) {
  return (
    (Cl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }),
    Cl(e)
  );
}
Zi.PrevArrow = (function (e) {
  rS(n, e);
  var t = iS(n);
  function n() {
    return eS(this, n), t.apply(this, arguments);
  }
  return (
    tS(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-prev": !0 },
            o = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
            key: "0",
            "data-role": "none",
            className: (0, Z_.default)(i),
            style: { display: "block" },
            onClick: o,
          },
            l = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            u;
          return (
            this.props.prevArrow
              ? (u = Fi.default.cloneElement(
                this.props.prevArrow,
                bl(bl({}, s), l)
              ))
              : (u = Fi.default.createElement(
                "button",
                xl({ key: "0", type: "button" }, s),
                " ",
                "Previous"
              )),
            u
          );
        },
      },
    ]),
    n
  );
})(Fi.default.PureComponent);
Zi.NextArrow = (function (e) {
  rS(n, e);
  var t = iS(n);
  function n() {
    return eS(this, n), t.apply(this, arguments);
  }
  return (
    tS(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-next": !0 },
            o = this.clickHandler.bind(this, { message: "next" });
          (0, Wj.canGoNext)(this.props) ||
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
            key: "1",
            "data-role": "none",
            className: (0, Z_.default)(i),
            style: { display: "block" },
            onClick: o,
          },
            l = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            u;
          return (
            this.props.nextArrow
              ? (u = Fi.default.cloneElement(
                this.props.nextArrow,
                bl(bl({}, s), l)
              ))
              : (u = Fi.default.createElement(
                "button",
                xl({ key: "1", type: "button" }, s),
                " ",
                "Next"
              )),
            u
          );
        },
      },
    ]),
    n
  );
})(Fi.default.PureComponent);
var sS = (function () {
  if (typeof Map < "u") return Map;
  function e(t, n) {
    var r = -1;
    return (
      t.some(function (i, o) {
        return i[0] === n ? ((r = o), !0) : !1;
      }),
      r
    );
  }
  return (function () {
    function t() {
      this.__entries__ = [];
    }
    return (
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.get = function (n) {
        var r = e(this.__entries__, n),
          i = this.__entries__[r];
        return i && i[1];
      }),
      (t.prototype.set = function (n, r) {
        var i = e(this.__entries__, n);
        ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
      }),
      (t.prototype.delete = function (n) {
        var r = this.__entries__,
          i = e(r, n);
        ~i && r.splice(i, 1);
      }),
      (t.prototype.has = function (n) {
        return !!~e(this.__entries__, n);
      }),
      (t.prototype.clear = function () {
        this.__entries__.splice(0);
      }),
      (t.prototype.forEach = function (n, r) {
        r === void 0 && (r = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var s = o[i];
          n.call(r, s[1], s[0]);
        }
      }),
      t
    );
  })();
})(),
  ud =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Tl = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
        ? self
        : typeof window < "u" && window.Math === Math
          ? window
          : Function("return this")();
  })(),
  Gj = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Tl)
      : function (e) {
        return setTimeout(function () {
          return e(Date.now());
        }, 1e3 / 60);
      };
  })(),
  qj = 2;
function Zj(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function o() {
    n && ((n = !1), e()), r && l();
  }
  function s() {
    Gj(o);
  }
  function l() {
    var u = Date.now();
    if (n) {
      if (u - i < qj) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(s, t);
    i = u;
  }
  return l;
}
var Jj = 20,
  eL = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  tL = typeof MutationObserver < "u",
  nL = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = Zj(this.refresh.bind(this), Jj));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !ud ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            tL
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))
              : (document.addEventListener("DOMSubtreeModified", this.refresh),
                (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !ud ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          i = eL.some(function (o) {
            return !!~r.indexOf(o);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  aS = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  eo = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Tl;
  },
  lS = lu(0, 0, 0, 0);
function El(e) {
  return parseFloat(e) || 0;
}
function my(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var o = e["border-" + i + "-width"];
    return r + El(o);
  }, 0);
}
function rL(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var o = i[r],
      s = e["padding-" + o];
    n[o] = El(s);
  }
  return n;
}
function iL(e) {
  var t = e.getBBox();
  return lu(0, 0, t.width, t.height);
}
function oL(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return lS;
  var r = eo(e).getComputedStyle(e),
    i = rL(r),
    o = i.left + i.right,
    s = i.top + i.bottom,
    l = El(r.width),
    u = El(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(l + o) !== t && (l -= my(r, "left", "right") + o),
        Math.round(u + s) !== n && (u -= my(r, "top", "bottom") + s)),
      !aL(e))
  ) {
    var c = Math.round(l + o) - t,
      d = Math.round(u + s) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(d) !== 1 && (u -= d);
  }
  return lu(i.left, i.top, l, u);
}
var sL = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
      return e instanceof eo(e).SVGGraphicsElement;
    }
    : function (e) {
      return e instanceof eo(e).SVGElement && typeof e.getBBox == "function";
    };
})();
function aL(e) {
  return e === eo(e).document.documentElement;
}
function lL(e) {
  return ud ? (sL(e) ? iL(e) : oL(e)) : lS;
}
function uL(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    s = Object.create(o.prototype);
  return (
    aS(s, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    s
  );
}
function lu(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var cL = (function () {
  function e(t) {
    (this.broadcastWidth = 0),
      (this.broadcastHeight = 0),
      (this.contentRect_ = lu(0, 0, 0, 0)),
      (this.target = t);
  }
  return (
    (e.prototype.isActive = function () {
      var t = lL(this.target);
      return (
        (this.contentRect_ = t),
        t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
      );
    }),
    (e.prototype.broadcastRect = function () {
      var t = this.contentRect_;
      return (
        (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
      );
    }),
    e
  );
})(),
  fL = (function () {
    function e(t, n) {
      var r = uL(n);
      aS(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  dL = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
          (this.observations_ = new sS()),
          typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof eo(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new cL(t)),
              this.controller_.addObserver(this),
              this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof eo(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new fL(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  uS = typeof WeakMap < "u" ? new WeakMap() : new sS(),
  cS = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = nL.getInstance(),
        r = new dL(t, n, this);
      uS.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  cS.prototype[e] = function () {
    var t;
    return (t = uS.get(this))[e].apply(t, arguments);
  };
});
var hL = (function () {
  return typeof Tl.ResizeObserver < "u" ? Tl.ResizeObserver : cS;
})();
const pL = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: hL },
    Symbol.toStringTag,
    { value: "Module" }
  )
),
  mL = Ox(pL);
Object.defineProperty(iu, "__esModule", { value: !0 });
iu.InnerSlider = void 0;
var vt = js(U),
  gL = js(N_),
  vL = js(aj),
  yL = js(ou),
  Me = $,
  wL = su,
  _L = au,
  gy = Zi,
  SL = js(mL);
function js(e) {
  return e && e.__esModule ? e : { default: e };
}
function qr(e) {
  "@babel/helpers - typeof";
  return (
    (qr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
          return typeof t;
        }
        : function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    qr(e)
  );
}
function Pl() {
  return (
    (Pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Pl.apply(this, arguments)
  );
}
function xL(e, t) {
  if (e == null) return {};
  var n = bL(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
        Object.prototype.propertyIsEnumerable.call(e, r) &&
        (n[r] = e[r]);
  }
  return n;
}
function bL(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function vy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vy(Object(n), !0).forEach(function (r) {
        le(e, r, n[r]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function CL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TL(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, dS(r.key), r);
  }
}
function EL(e, t, n) {
  return (
    t && TL(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function PL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && cd(e, t);
}
function cd(e, t) {
  return (
    (cd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
        return (r.__proto__ = i), r;
      }),
    cd(e, t)
  );
}
function kL(e) {
  var t = fS();
  return function () {
    var r = kl(e),
      i;
    if (t) {
      var o = kl(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return OL(this, i);
  };
}
function OL(e, t) {
  if (t && (qr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return ae(e);
}
function ae(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function fS() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () { })
    );
  } catch { }
  return (fS = function () {
    return !!e;
  })();
}
function kl(e) {
  return (
    (kl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }),
    kl(e)
  );
}
function le(e, t, n) {
  return (
    (t = dS(t)),
    t in e
      ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (e[t] = n),
    e
  );
}
function dS(e) {
  var t = jL(e, "string");
  return qr(t) == "symbol" ? t : String(t);
}
function jL(e, t) {
  if (qr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (qr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
iu.InnerSlider = (function (e) {
  PL(n, e);
  var t = kL(n);
  function n(r) {
    var i;
    CL(this, n),
      (i = t.call(this, r)),
      le(ae(i), "listRefHandler", function (s) {
        return (i.list = s);
      }),
      le(ae(i), "trackRefHandler", function (s) {
        return (i.track = s);
      }),
      le(ae(i), "adaptHeight", function () {
        if (i.props.adaptiveHeight && i.list) {
          var s = i.list.querySelector(
            '[data-index="'.concat(i.state.currentSlide, '"]')
          );
          i.list.style.height = (0, Me.getHeight)(s) + "px";
        }
      }),
      le(ae(i), "componentDidMount", function () {
        if ((i.props.onInit && i.props.onInit(), i.props.lazyLoad)) {
          var s = (0, Me.getOnDemandLazySlides)(Z(Z({}, i.props), i.state));
          s.length > 0 &&
            (i.setState(function (u) {
              return { lazyLoadedList: u.lazyLoadedList.concat(s) };
            }),
              i.props.onLazyLoad && i.props.onLazyLoad(s));
        }
        var l = Z({ listRef: i.list, trackRef: i.track }, i.props);
        i.updateState(l, !0, function () {
          i.adaptHeight(), i.props.autoplay && i.autoPlay("update");
        }),
          i.props.lazyLoad === "progressive" &&
          (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
          (i.ro = new SL.default(function () {
            i.state.animating
              ? (i.onWindowResized(!1),
                i.callbackTimers.push(
                  setTimeout(function () {
                    return i.onWindowResized();
                  }, i.props.speed)
                ))
              : i.onWindowResized();
          })),
          i.ro.observe(i.list),
          document.querySelectorAll &&
          Array.prototype.forEach.call(
            document.querySelectorAll(".slick-slide"),
            function (u) {
              (u.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null),
                (u.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null);
            }
          ),
          window.addEventListener
            ? window.addEventListener("resize", i.onWindowResized)
            : window.attachEvent("onresize", i.onWindowResized);
      }),
      le(ae(i), "componentWillUnmount", function () {
        i.animationEndCallback && clearTimeout(i.animationEndCallback),
          i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
          i.callbackTimers.length &&
          (i.callbackTimers.forEach(function (s) {
            return clearTimeout(s);
          }),
            (i.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", i.onWindowResized)
            : window.detachEvent("onresize", i.onWindowResized),
          i.autoplayTimer && clearInterval(i.autoplayTimer),
          i.ro.disconnect();
      }),
      le(ae(i), "componentDidUpdate", function (s) {
        if (
          (i.checkImagesLoad(),
            i.props.onReInit && i.props.onReInit(),
            i.props.lazyLoad)
        ) {
          var l = (0, Me.getOnDemandLazySlides)(Z(Z({}, i.props), i.state));
          l.length > 0 &&
            (i.setState(function (d) {
              return { lazyLoadedList: d.lazyLoadedList.concat(l) };
            }),
              i.props.onLazyLoad && i.props.onLazyLoad(l));
        }
        i.adaptHeight();
        var u = Z(Z({ listRef: i.list, trackRef: i.track }, i.props), i.state),
          c = i.didPropsChange(s);
        c &&
          i.updateState(u, c, function () {
            i.state.currentSlide >=
              vt.default.Children.count(i.props.children) &&
              i.changeSlide({
                message: "index",
                index:
                  vt.default.Children.count(i.props.children) -
                  i.props.slidesToShow,
                currentSlide: i.state.currentSlide,
              }),
              i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          });
      }),
      le(ae(i), "onWindowResized", function (s) {
        i.debouncedResize && i.debouncedResize.cancel(),
          (i.debouncedResize = (0, vL.default)(function () {
            return i.resizeWindow(s);
          }, 50)),
          i.debouncedResize();
      }),
      le(ae(i), "resizeWindow", function () {
        var s =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          l = !!(i.track && i.track.node);
        if (l) {
          var u = Z(
            Z({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          );
          i.updateState(u, s, function () {
            i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          }),
            i.setState({ animating: !1 }),
            clearTimeout(i.animationEndCallback),
            delete i.animationEndCallback;
        }
      }),
      le(ae(i), "updateState", function (s, l, u) {
        var c = (0, Me.initializedState)(s);
        s = Z(Z(Z({}, s), c), {}, { slideIndex: c.currentSlide });
        var d = (0, Me.getTrackLeft)(s);
        s = Z(Z({}, s), {}, { left: d });
        var h = (0, Me.getTrackCSS)(s);
        (l ||
          vt.default.Children.count(i.props.children) !==
          vt.default.Children.count(s.children)) &&
          (c.trackStyle = h),
          i.setState(c, u);
      }),
      le(ae(i), "ssrInit", function () {
        if (i.props.variableWidth) {
          var s = 0,
            l = 0,
            u = [],
            c = (0, Me.getPreClones)(
              Z(
                Z(Z({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            ),
            d = (0, Me.getPostClones)(
              Z(
                Z(Z({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            );
          i.props.children.forEach(function (R) {
            u.push(R.props.style.width), (s += R.props.style.width);
          });
          for (var h = 0; h < c; h++)
            (l += u[u.length - 1 - h]), (s += u[u.length - 1 - h]);
          for (var m = 0; m < d; m++) s += u[m];
          for (var S = 0; S < i.state.currentSlide; S++) l += u[S];
          var b = { width: s + "px", left: -l + "px" };
          if (i.props.centerMode) {
            var x = "".concat(u[i.state.currentSlide], "px");
            b.left = "calc("
              .concat(b.left, " + (100% - ")
              .concat(x, ") / 2 ) ");
          }
          return { trackStyle: b };
        }
        var P = vt.default.Children.count(i.props.children),
          w = Z(Z(Z({}, i.props), i.state), {}, { slideCount: P }),
          g = (0, Me.getPreClones)(w) + (0, Me.getPostClones)(w) + P,
          _ = (100 / i.props.slidesToShow) * g,
          T = 100 / g,
          k = (-T * ((0, Me.getPreClones)(w) + i.state.currentSlide) * _) / 100;
        i.props.centerMode && (k += (100 - (T * _) / 100) / 2);
        var j = { width: _ + "%", left: k + "%" };
        return { slideWidth: T + "%", trackStyle: j };
      }),
      le(ae(i), "checkImagesLoad", function () {
        var s =
          (i.list &&
            i.list.querySelectorAll &&
            i.list.querySelectorAll(".slick-slide img")) ||
          [],
          l = s.length,
          u = 0;
        Array.prototype.forEach.call(s, function (c) {
          var d = function () {
            return ++u && u >= l && i.onWindowResized();
          };
          if (!c.onclick)
            c.onclick = function () {
              return c.parentNode.focus();
            };
          else {
            var h = c.onclick;
            c.onclick = function (m) {
              h(m), c.parentNode.focus();
            };
          }
          c.onload ||
            (i.props.lazyLoad
              ? (c.onload = function () {
                i.adaptHeight(),
                  i.callbackTimers.push(
                    setTimeout(i.onWindowResized, i.props.speed)
                  );
              })
              : ((c.onload = d),
                (c.onerror = function () {
                  d(), i.props.onLazyLoadError && i.props.onLazyLoadError();
                })));
        });
      }),
      le(ae(i), "progressiveLazyLoad", function () {
        for (
          var s = [], l = Z(Z({}, i.props), i.state), u = i.state.currentSlide;
          u < i.state.slideCount + (0, Me.getPostClones)(l);
          u++
        )
          if (i.state.lazyLoadedList.indexOf(u) < 0) {
            s.push(u);
            break;
          }
        for (
          var c = i.state.currentSlide - 1;
          c >= -(0, Me.getPreClones)(l);
          c--
        )
          if (i.state.lazyLoadedList.indexOf(c) < 0) {
            s.push(c);
            break;
          }
        s.length > 0
          ? (i.setState(function (d) {
            return { lazyLoadedList: d.lazyLoadedList.concat(s) };
          }),
            i.props.onLazyLoad && i.props.onLazyLoad(s))
          : i.lazyLoadTimer &&
          (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer);
      }),
      le(ae(i), "slideHandler", function (s) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          u = i.props,
          c = u.asNavFor,
          d = u.beforeChange,
          h = u.onLazyLoad,
          m = u.speed,
          S = u.afterChange,
          b = i.state.currentSlide,
          x = (0, Me.slideHandler)(
            Z(
              Z(Z({ index: s }, i.props), i.state),
              {},
              { trackRef: i.track, useCSS: i.props.useCSS && !l }
            )
          ),
          P = x.state,
          w = x.nextState;
        if (P) {
          d && d(b, P.currentSlide);
          var g = P.lazyLoadedList.filter(function (_) {
            return i.state.lazyLoadedList.indexOf(_) < 0;
          });
          h && g.length > 0 && h(g),
            !i.props.waitForAnimate &&
            i.animationEndCallback &&
            (clearTimeout(i.animationEndCallback),
              S && S(b),
              delete i.animationEndCallback),
            i.setState(P, function () {
              c &&
                i.asNavForIndex !== s &&
                ((i.asNavForIndex = s), c.innerSlider.slideHandler(s)),
                w &&
                (i.animationEndCallback = setTimeout(function () {
                  var _ = w.animating,
                    T = xL(w, ["animating"]);
                  i.setState(T, function () {
                    i.callbackTimers.push(
                      setTimeout(function () {
                        return i.setState({ animating: _ });
                      }, 10)
                    ),
                      S && S(P.currentSlide),
                      delete i.animationEndCallback;
                  });
                }, m));
            });
        }
      }),
      le(ae(i), "changeSlide", function (s) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          u = Z(Z({}, i.props), i.state),
          c = (0, Me.changeSlide)(u, s);
        if (
          !(c !== 0 && !c) &&
          (l === !0 ? i.slideHandler(c, l) : i.slideHandler(c),
            i.props.autoplay && i.autoPlay("update"),
            i.props.focusOnSelect)
        ) {
          var d = i.list.querySelectorAll(".slick-current");
          d[0] && d[0].focus();
        }
      }),
      le(ae(i), "clickHandler", function (s) {
        i.clickable === !1 && (s.stopPropagation(), s.preventDefault()),
          (i.clickable = !0);
      }),
      le(ae(i), "keyHandler", function (s) {
        var l = (0, Me.keyHandler)(s, i.props.accessibility, i.props.rtl);
        l !== "" && i.changeSlide({ message: l });
      }),
      le(ae(i), "selectHandler", function (s) {
        i.changeSlide(s);
      }),
      le(ae(i), "disableBodyScroll", function () {
        var s = function (u) {
          (u = u || window.event),
            u.preventDefault && u.preventDefault(),
            (u.returnValue = !1);
        };
        window.ontouchmove = s;
      }),
      le(ae(i), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      le(ae(i), "swipeStart", function (s) {
        i.props.verticalSwiping && i.disableBodyScroll();
        var l = (0, Me.swipeStart)(s, i.props.swipe, i.props.draggable);
        l !== "" && i.setState(l);
      }),
      le(ae(i), "swipeMove", function (s) {
        var l = (0, Me.swipeMove)(
          s,
          Z(
            Z(Z({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        l && (l.swiping && (i.clickable = !1), i.setState(l));
      }),
      le(ae(i), "swipeEnd", function (s) {
        var l = (0, Me.swipeEnd)(
          s,
          Z(
            Z(Z({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        if (l) {
          var u = l.triggerSlideHandler;
          delete l.triggerSlideHandler,
            i.setState(l),
            u !== void 0 &&
            (i.slideHandler(u),
              i.props.verticalSwiping && i.enableBodyScroll());
        }
      }),
      le(ae(i), "touchEnd", function (s) {
        i.swipeEnd(s), (i.clickable = !0);
      }),
      le(ae(i), "slickPrev", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      le(ae(i), "slickNext", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      le(ae(i), "slickGoTo", function (s) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((s = Number(s)), isNaN(s))) return "";
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide(
              {
                message: "index",
                index: s,
                currentSlide: i.state.currentSlide,
              },
              l
            );
          }, 0)
        );
      }),
      le(ae(i), "play", function () {
        var s;
        if (i.props.rtl) s = i.state.currentSlide - i.props.slidesToScroll;
        else if ((0, Me.canGoNext)(Z(Z({}, i.props), i.state)))
          s = i.state.currentSlide + i.props.slidesToScroll;
        else return !1;
        i.slideHandler(s);
      }),
      le(ae(i), "autoPlay", function (s) {
        i.autoplayTimer && clearInterval(i.autoplayTimer);
        var l = i.state.autoplaying;
        if (s === "update") {
          if (l === "hovered" || l === "focused" || l === "paused") return;
        } else if (s === "leave") {
          if (l === "paused" || l === "focused") return;
        } else if (s === "blur" && (l === "paused" || l === "hovered")) return;
        (i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50)),
          i.setState({ autoplaying: "playing" });
      }),
      le(ae(i), "pause", function (s) {
        i.autoplayTimer &&
          (clearInterval(i.autoplayTimer), (i.autoplayTimer = null));
        var l = i.state.autoplaying;
        s === "paused"
          ? i.setState({ autoplaying: "paused" })
          : s === "focused"
            ? (l === "hovered" || l === "playing") &&
            i.setState({ autoplaying: "focused" })
            : l === "playing" && i.setState({ autoplaying: "hovered" });
      }),
      le(ae(i), "onDotsOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      le(ae(i), "onDotsLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      le(ae(i), "onTrackOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      le(ae(i), "onTrackLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      le(ae(i), "onSlideFocus", function () {
        return i.props.autoplay && i.pause("focused");
      }),
      le(ae(i), "onSlideBlur", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "focused" &&
          i.autoPlay("blur")
        );
      }),
      le(ae(i), "render", function () {
        var s = (0, yL.default)("slick-slider", i.props.className, {
          "slick-vertical": i.props.vertical,
          "slick-initialized": !0,
        }),
          l = Z(Z({}, i.props), i.state),
          u = (0, Me.extractObject)(l, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          c = i.props.pauseOnHover;
        u = Z(
          Z({}, u),
          {},
          {
            onMouseEnter: c ? i.onTrackOver : null,
            onMouseLeave: c ? i.onTrackLeave : null,
            onMouseOver: c ? i.onTrackOver : null,
            focusOnSelect:
              i.props.focusOnSelect && i.clickable ? i.selectHandler : null,
          }
        );
        var d;
        if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
          var h = (0, Me.extractObject)(l, [
            "dotsClass",
            "slideCount",
            "slidesToShow",
            "currentSlide",
            "slidesToScroll",
            "clickHandler",
            "children",
            "customPaging",
            "infinite",
            "appendDots",
          ]),
            m = i.props.pauseOnDotsHover;
          (h = Z(
            Z({}, h),
            {},
            {
              clickHandler: i.changeSlide,
              onMouseEnter: m ? i.onDotsLeave : null,
              onMouseOver: m ? i.onDotsOver : null,
              onMouseLeave: m ? i.onDotsLeave : null,
            }
          )),
            (d = vt.default.createElement(_L.Dots, h));
        }
        var S,
          b,
          x = (0, Me.extractObject)(l, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (x.clickHandler = i.changeSlide),
          i.props.arrows &&
          ((S = vt.default.createElement(gy.PrevArrow, x)),
            (b = vt.default.createElement(gy.NextArrow, x)));
        var P = null;
        i.props.vertical && (P = { height: i.state.listHeight });
        var w = null;
        i.props.vertical === !1
          ? i.props.centerMode === !0 &&
          (w = { padding: "0px " + i.props.centerPadding })
          : i.props.centerMode === !0 &&
          (w = { padding: i.props.centerPadding + " 0px" });
        var g = Z(Z({}, P), w),
          _ = i.props.touchMove,
          T = {
            className: "slick-list",
            style: g,
            onClick: i.clickHandler,
            onMouseDown: _ ? i.swipeStart : null,
            onMouseMove: i.state.dragging && _ ? i.swipeMove : null,
            onMouseUp: _ ? i.swipeEnd : null,
            onMouseLeave: i.state.dragging && _ ? i.swipeEnd : null,
            onTouchStart: _ ? i.swipeStart : null,
            onTouchMove: i.state.dragging && _ ? i.swipeMove : null,
            onTouchEnd: _ ? i.touchEnd : null,
            onTouchCancel: i.state.dragging && _ ? i.swipeEnd : null,
            onKeyDown: i.props.accessibility ? i.keyHandler : null,
          },
          k = { className: s, dir: "ltr", style: i.props.style };
        return (
          i.props.unslick &&
          ((T = { className: "slick-list" }), (k = { className: s })),
          vt.default.createElement(
            "div",
            k,
            i.props.unslick ? "" : S,
            vt.default.createElement(
              "div",
              Pl({ ref: i.listRefHandler }, T),
              vt.default.createElement(
                wL.Track,
                Pl({ ref: i.trackRefHandler }, u),
                i.props.children
              )
            ),
            i.props.unslick ? "" : b,
            i.props.unslick ? "" : d
          )
        );
      }),
      (i.list = null),
      (i.track = null),
      (i.state = Z(
        Z({}, gL.default),
        {},
        {
          currentSlide: i.props.initialSlide,
          targetSlide: i.props.initialSlide ? i.props.initialSlide : 0,
          slideCount: vt.default.Children.count(i.props.children),
        }
      )),
      (i.callbackTimers = []),
      (i.clickable = !0),
      (i.debouncedResize = null);
    var o = i.ssrInit();
    return (i.state = Z(Z({}, i.state), o)), i;
  }
  return (
    EL(n, [
      {
        key: "didPropsChange",
        value: function (i) {
          for (
            var o = !1, s = 0, l = Object.keys(this.props);
            s < l.length;
            s++
          ) {
            var u = l[s];
            if (!i.hasOwnProperty(u)) {
              o = !0;
              break;
            }
            if (
              !(
                qr(i[u]) === "object" ||
                typeof i[u] == "function" ||
                isNaN(i[u])
              ) &&
              i[u] !== this.props[u]
            ) {
              o = !0;
              break;
            }
          }
          return (
            o ||
            vt.default.Children.count(this.props.children) !==
            vt.default.Children.count(i.children)
          );
        },
      },
    ]),
    n
  );
})(vt.default.Component);
var LL = function (e) {
  return e
    .replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    })
    .toLowerCase();
},
  ML = LL,
  AL = ML,
  DL = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  yy = function (e) {
    var t = "",
      n = Object.keys(e);
    return (
      n.forEach(function (r, i) {
        var o = e[r];
        (r = AL(r)),
          DL(r) && typeof o == "number" && (o = o + "px"),
          o === !0
            ? (t += r)
            : o === !1
              ? (t += "not " + r)
              : (t += "(" + r + ": " + o + ")"),
          i < n.length - 1 && (t += " and ");
      }),
      t
    );
  },
  NL = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
        ? (e.forEach(function (n, r) {
          (t += yy(n)), r < e.length - 1 && (t += ", ");
        }),
          t)
        : yy(e);
  },
  RL = NL,
  Ic,
  wy;
function IL() {
  if (wy) return Ic;
  wy = 1;
  function e(t) {
    (this.options = t), !t.deferSetup && this.setup();
  }
  return (
    (e.prototype = {
      constructor: e,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (t) {
        return this.options === t || this.options.match === t;
      },
    }),
    (Ic = e),
    Ic
  );
}
var Vc, _y;
function hS() {
  if (_y) return Vc;
  _y = 1;
  function e(r, i) {
    var o = 0,
      s = r.length,
      l;
    for (o; o < s && ((l = i(r[o], o)), l !== !1); o++);
  }
  function t(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }
  function n(r) {
    return typeof r == "function";
  }
  return (Vc = { isFunction: n, isArray: t, each: e }), Vc;
}
var zc, Sy;
function VL() {
  if (Sy) return zc;
  Sy = 1;
  var e = IL(),
    t = hS().each;
  function n(r, i) {
    (this.query = r),
      (this.isUnconditional = i),
      (this.handlers = []),
      (this.mql = window.matchMedia(r));
    var o = this;
    (this.listener = function (s) {
      (o.mql = s.currentTarget || s), o.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (n.prototype = {
      constuctor: n,
      addHandler: function (r) {
        var i = new e(r);
        this.handlers.push(i), this.matches() && i.on();
      },
      removeHandler: function (r) {
        var i = this.handlers;
        t(i, function (o, s) {
          if (o.equals(r)) return o.destroy(), !i.splice(s, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (r) {
          r.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var r = this.matches() ? "on" : "off";
        t(this.handlers, function (i) {
          i[r]();
        });
      },
    }),
    (zc = n),
    zc
  );
}
var $c, xy;
function zL() {
  if (xy) return $c;
  xy = 1;
  var e = VL(),
    t = hS(),
    n = t.each,
    r = t.isFunction,
    i = t.isArray;
  function o() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (o.prototype = {
      constructor: o,
      register: function (s, l, u) {
        var c = this.queries,
          d = u && this.browserIsIncapable;
        return (
          c[s] || (c[s] = new e(s, d)),
          r(l) && (l = { match: l }),
          i(l) || (l = [l]),
          n(l, function (h) {
            r(h) && (h = { match: h }), c[s].addHandler(h);
          }),
          this
        );
      },
      unregister: function (s, l) {
        var u = this.queries[s];
        return (
          u && (l ? u.removeHandler(l) : (u.clear(), delete this.queries[s])),
          this
        );
      },
    }),
    ($c = o),
    $c
  );
}
var Fc, by;
function $L() {
  if (by) return Fc;
  by = 1;
  var e = zL();
  return (Fc = new e()), Fc;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = s(U),
    n = iu,
    r = s(RL),
    i = s(Hh),
    o = $;
  function s(D) {
    return D && D.__esModule ? D : { default: D };
  }
  function l(D) {
    "@babel/helpers - typeof";
    return (
      (l =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (M) {
            return typeof M;
          }
          : function (M) {
            return M &&
              typeof Symbol == "function" &&
              M.constructor === Symbol &&
              M !== Symbol.prototype
              ? "symbol"
              : typeof M;
          }),
      l(D)
    );
  }
  function u() {
    return (
      (u = Object.assign
        ? Object.assign.bind()
        : function (D) {
          for (var M = 1; M < arguments.length; M++) {
            var K = arguments[M];
            for (var Q in K)
              Object.prototype.hasOwnProperty.call(K, Q) && (D[Q] = K[Q]);
          }
          return D;
        }),
      u.apply(this, arguments)
    );
  }
  function c(D, M) {
    var K = Object.keys(D);
    if (Object.getOwnPropertySymbols) {
      var Q = Object.getOwnPropertySymbols(D);
      M &&
        (Q = Q.filter(function (Y) {
          return Object.getOwnPropertyDescriptor(D, Y).enumerable;
        })),
        K.push.apply(K, Q);
    }
    return K;
  }
  function d(D) {
    for (var M = 1; M < arguments.length; M++) {
      var K = arguments[M] != null ? arguments[M] : {};
      M % 2
        ? c(Object(K), !0).forEach(function (Q) {
          k(D, Q, K[Q]);
        })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(K))
          : c(Object(K)).forEach(function (Q) {
            Object.defineProperty(D, Q, Object.getOwnPropertyDescriptor(K, Q));
          });
    }
    return D;
  }
  function h(D, M) {
    if (!(D instanceof M))
      throw new TypeError("Cannot call a class as a function");
  }
  function m(D, M) {
    for (var K = 0; K < M.length; K++) {
      var Q = M[K];
      (Q.enumerable = Q.enumerable || !1),
        (Q.configurable = !0),
        "value" in Q && (Q.writable = !0),
        Object.defineProperty(D, j(Q.key), Q);
    }
  }
  function S(D, M, K) {
    return (
      M && m(D.prototype, M),
      Object.defineProperty(D, "prototype", { writable: !1 }),
      D
    );
  }
  function b(D, M) {
    if (typeof M != "function" && M !== null)
      throw new TypeError("Super expression must either be null or a function");
    (D.prototype = Object.create(M && M.prototype, {
      constructor: { value: D, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(D, "prototype", { writable: !1 }),
      M && x(D, M);
  }
  function x(D, M) {
    return (
      (x = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (Q, Y) {
          return (Q.__proto__ = Y), Q;
        }),
      x(D, M)
    );
  }
  function P(D) {
    var M = _();
    return function () {
      var Q = T(D),
        Y;
      if (M) {
        var X = T(this).constructor;
        Y = Reflect.construct(Q, arguments, X);
      } else Y = Q.apply(this, arguments);
      return w(this, Y);
    };
  }
  function w(D, M) {
    if (M && (l(M) === "object" || typeof M == "function")) return M;
    if (M !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return g(D);
  }
  function g(D) {
    if (D === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return D;
  }
  function _() {
    try {
      var D = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () { })
      );
    } catch { }
    return (_ = function () {
      return !!D;
    })();
  }
  function T(D) {
    return (
      (T = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (K) {
          return K.__proto__ || Object.getPrototypeOf(K);
        }),
      T(D)
    );
  }
  function k(D, M, K) {
    return (
      (M = j(M)),
      M in D
        ? Object.defineProperty(D, M, {
          value: K,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
        : (D[M] = K),
      D
    );
  }
  function j(D) {
    var M = R(D, "string");
    return l(M) == "symbol" ? M : String(M);
  }
  function R(D, M) {
    if (l(D) != "object" || !D) return D;
    var K = D[Symbol.toPrimitive];
    if (K !== void 0) {
      var Q = K.call(D, M || "default");
      if (l(Q) != "object") return Q;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (M === "string" ? String : Number)(D);
  }
  var A = (0, o.canUseDOM)() && $L();
  e.default = (function (D) {
    b(K, D);
    var M = P(K);
    function K(Q) {
      var Y;
      return (
        h(this, K),
        (Y = M.call(this, Q)),
        k(g(Y), "innerSliderRefHandler", function (X) {
          return (Y.innerSlider = X);
        }),
        k(g(Y), "slickPrev", function () {
          return Y.innerSlider.slickPrev();
        }),
        k(g(Y), "slickNext", function () {
          return Y.innerSlider.slickNext();
        }),
        k(g(Y), "slickGoTo", function (X) {
          var ge =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return Y.innerSlider.slickGoTo(X, ge);
        }),
        k(g(Y), "slickPause", function () {
          return Y.innerSlider.pause("paused");
        }),
        k(g(Y), "slickPlay", function () {
          return Y.innerSlider.autoPlay("play");
        }),
        (Y.state = { breakpoint: null }),
        (Y._responsiveMediaHandlers = []),
        Y
      );
    }
    return (
      S(K, [
        {
          key: "media",
          value: function (Y, X) {
            A.register(Y, X),
              this._responsiveMediaHandlers.push({ query: Y, handler: X });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var Y = this;
            if (this.props.responsive) {
              var X = this.props.responsive.map(function (de) {
                return de.breakpoint;
              });
              X.sort(function (de, He) {
                return de - He;
              }),
                X.forEach(function (de, He) {
                  var z;
                  He === 0
                    ? (z = (0, r.default)({ minWidth: 0, maxWidth: de }))
                    : (z = (0, r.default)({
                      minWidth: X[He - 1] + 1,
                      maxWidth: de,
                    })),
                    (0, o.canUseDOM)() &&
                    Y.media(z, function () {
                      Y.setState({ breakpoint: de });
                    });
                });
              var ge = (0, r.default)({ minWidth: X.slice(-1)[0] });
              (0, o.canUseDOM)() &&
                this.media(ge, function () {
                  Y.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function (Y) {
              A.unregister(Y.query, Y.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var Y = this,
              X,
              ge;
            this.state.breakpoint
              ? ((ge = this.props.responsive.filter(function (dt) {
                return dt.breakpoint === Y.state.breakpoint;
              })),
                (X =
                  ge[0].settings === "unslick"
                    ? "unslick"
                    : d(d(d({}, i.default), this.props), ge[0].settings)))
              : (X = d(d({}, i.default), this.props)),
              X.centerMode && (X.slidesToScroll > 1, (X.slidesToScroll = 1)),
              X.fade &&
              (X.slidesToShow > 1,
                X.slidesToScroll > 1,
                (X.slidesToShow = 1),
                (X.slidesToScroll = 1));
            var de = t.default.Children.toArray(this.props.children);
            (de = de.filter(function (dt) {
              return typeof dt == "string" ? !!dt.trim() : !!dt;
            })),
              X.variableWidth &&
              (X.rows > 1 || X.slidesPerRow > 1) &&
              (console.warn(
                "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
              ),
                (X.variableWidth = !1));
            for (
              var He = [], z = null, G = 0;
              G < de.length;
              G += X.rows * X.slidesPerRow
            ) {
              for (
                var O = [], pe = G;
                pe < G + X.rows * X.slidesPerRow;
                pe += X.slidesPerRow
              ) {
                for (
                  var ke = [], it = pe;
                  it < pe + X.slidesPerRow &&
                  (X.variableWidth &&
                    de[it].props.style &&
                    (z = de[it].props.style.width),
                    !(it >= de.length));
                  it += 1
                )
                  ke.push(
                    t.default.cloneElement(de[it], {
                      key: 100 * G + 10 * pe + it,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / X.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                O.push(
                  t.default.createElement("div", { key: 10 * G + pe }, ke)
                );
              }
              X.variableWidth
                ? He.push(
                  t.default.createElement(
                    "div",
                    { key: G, style: { width: z } },
                    O
                  )
                )
                : He.push(t.default.createElement("div", { key: G }, O));
            }
            if (X === "unslick") {
              var Qe = "regular slider " + (this.props.className || "");
              return t.default.createElement("div", { className: Qe }, de);
            } else
              He.length <= X.slidesToShow && !X.infinite && (X.unslick = !0);
            return t.default.createElement(
              n.InnerSlider,
              u(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, o.filterSettings)(X)
              ),
              He
            );
          },
        },
      ]),
      K
    );
  })(t.default.Component);
})(D_);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(D_);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.default = t.default;
})(A_);
const FL = Oy(A_),
  HL = [
    {
      id: 1,
      name: "@YoussoufAboubakar-u6w",
      position: "Viewer",
      src: "/assets/YA_profile.jpg",
      review: `Merci pour cette vérité choquant je vous assure il a raison vraiment il faut être prudent c'est un piège que tu ne peux pas comprendre. même si tu connais c'est un piège`,
    },
    {
      id: 2,
      name: "@AkhyCyborg",
      position: "Viewer",
      src: "/assets/AC_profile.jpg",
      review: `Je suis touché par ce phénomène et je reçois ta vidéo a pic , merci.`,
    },
    {
      id: 3,
      name: "@ezelasagesse9507",
      position: "Viewer",
      src: "/assets/ez_profile.jpg",
      review: `Je veux être un createur de contenue, et apprendre à faire le montage video avec vous, que dois-je faire???`,
    },
    {
      id: 4,
      name: "@aldyabondi4131",
      position: "Viewer",
      src: "/assets/unnamed.jpg",
      review: `Je veux être un createur de contenue, et apprendre à faire le montage video avec vous, que dois-je faire???`,
    },    
    {
      id: 5,
      name: "@dedissoncarlos6453",
      position: "Viewer",
      src: "/assets/al_profile.jpg",
      review: `L'art oratoire est en place bro❤ je m'abonne`,
    },
  ],
  BL = () => {
    const e = U.useRef(null);
    let t = {
      dots: !1,
      infinite: !0,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: !1,
      responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
    };
    return v.jsx("section", {
      className: "testimonials-area",
      children: v.jsxs("div", {
        className: "container",
        children: [
          v.jsx("div", {
            className: "row",
            children: v.jsx("div", {
              className: "col-xl-12 col-lg-12",
              children: v.jsxs(oo, {
                children: [
                  v.jsx("p", { children: "Testinomials" }),
                  v.jsx("h2", { children: "Les commentaires des abonnés" }),
                ],
              }),
            }),
          }),
          v.jsx("div", {
            className: "row",
            children: v.jsxs("div", {
              className: "col-lg-12",
              children: [
                v.jsx("div", {
                  className: "testimonials-wrap",
                  children: v.jsx(FL, {
                    ref: e,
                    ...t,
                    children: HL.map(
                      ({ id: n, name: r, position: i, review: o, src: s }) =>
                        v.jsx(
                          An,
                          {
                            children: v.jsxs("div", {
                              className: "testimonial-item",
                              children: [
                                v.jsx("div", {
                                  className: "author",
                                  children: v.jsx("img", {
                                    src: s,
                                    alt: "Author",
                                  }),
                                }),
                                v.jsx("div", {
                                  className: "text",
                                  children: o,
                                }),
                                v.jsxs("div", {
                                  className: "testi-des",
                                  children: [
                                    v.jsx("h5", { children: r }),
                                    v.jsx("span", { children: i }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          n
                        )
                    ),
                  }),
                }),
                v.jsx(An, {
                  children: v.jsxs("div", {
                    className: "slider-arrows text-center pt-40",
                    style: { paddingTop: "40px" },
                    children: [
                      v.jsxs("button", {
                        className: "testimonial-prev",
                        onClick: () => {
                          var n;
                          return (n = e == null ? void 0 : e.current) == null
                            ? void 0
                            : n.slickPrev();
                        },
                        children: [
                          " ",
                          v.jsx("i", { children: v.jsx(gO, {}) }),
                        ],
                      }),
                      v.jsxs("button", {
                        className: "testimonial-next",
                        onClick: () => {
                          var n;
                          return (n = e == null ? void 0 : e.current) == null
                            ? void 0
                            : n.slickNext();
                        },
                        children: [
                          " ",
                          v.jsx("i", { children: v.jsx(yO, {}) }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  WL = [
    {
      id: 1,
      plan_name: "Basic",
      info: "Have design ready to build? <br/> or small budget",
      price: "15",
      offers: [
        { id: 1, unable: !1, item: "Need your wireframe" },
        { id: 2, unable: !1, item: "Design with Figma, Framer" },
        { id: 3, unable: !1, item: "Product Design" },
        { id: 4, unable: !0, item: "Digital Marketing" },
        { id: 5, unable: !0, item: "Custom Support" },
      ],
    },
    {
      id: 2,
      plan_name: "Standard",
      info: "Not have any design? <br /> Leave its for me",
      price: "59",
      offers: [
        { id: 1, unable: !1, item: "Website Design" },
        { id: 2, unable: !1, item: "Mobile Apps Design" },
        { id: 3, unable: !1, item: "Product Design" },
        { id: 4, unable: !1, item: "Digital Marketing" },
        { id: 5, unable: !0, item: "Custom Support" },
      ],
    },
    {
      id: 3,
      plan_name: "Standard",
      info: "Not have any design? <br /> Leave its for me",
      price: "59",
      offers: [
        { id: 1, unable: !1, item: "Website Design" },
        { id: 2, unable: !1, item: "Mobile Apps Design" },
        { id: 3, unable: !1, item: "Product Design" },
        { id: 4, unable: !1, item: "Digital Marketing" },
        { id: 5, unable: !0, item: "Custom Support" },
      ],
    },
  ],
  UL = () =>
    v.jsx("section", {
      className: "pricing-area",
      children: v.jsxs("div", {
        className: "container",
        children: [
          v.jsx("div", {
            className: "row",
            children: v.jsx("div", {
              className: "col-xl-12 col-lg-12",
              children: v.jsxs(oo, {
                children: [
                  v.jsx("p", { children: "Pricing" }),
                  v.jsx("h2", { children: "Flexible Pricing Plan" }),
                ],
              }),
            }),
          }),
          v.jsx("div", {
            className: "row justify-content-center",
            children: WL.map(
              ({ id: e, info: t, offers: n, plan_name: r, price: i }) =>
                v.jsx(
                  KL,
                  { info: t, offers: n, plan_name: r, price: i, id: !0 },
                  e
                )
            ),
          }),
        ],
      }),
    }),
  KL = ({ info: e, offers: t, plan_name: n, price: r, id: i }) =>
    v.jsx("div", {
      className: "col-lg-4 col-md-6",
      children: v.jsx(Ah, {
        id: i,
        children: v.jsxs("div", {
          className: "pricing-item ",
          children: [
            v.jsxs("div", {
              className: "pricing-header",
              children: [
                v.jsx("h4", { className: "title", children: n }),
                v.jsx("p", {
                  className: "save-percent",
                  dangerouslySetInnerHTML: { __html: e },
                }),
                v.jsx("span", { className: "price", children: r }),
              ],
            }),
            v.jsxs("div", {
              className: "pricing-details",
              children: [
                v.jsx("ul", {
                  children: t.map(({ id: o, unable: s, item: l }) =>
                    v.jsxs(
                      "li",
                      {
                        className: `${s ? "unable" : ""}`,
                        children: [
                          v.jsx("i", { children: v.jsx(vO, { size: 16 }) }),
                          l,
                        ],
                      },
                      o
                    )
                  ),
                }),
                v.jsxs("a", {
                  href: "#",
                  className: "theme-btn",
                  children: [
                    "Order Now ",
                    v.jsx("i", { children: v.jsx(jO, { size: 16 }) }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  GL = [
    {
      id: 1,
      title: "Comment Devenir automatiquement plus captivant grâce à la prosodie ?",
      date: "26 Septembre 2024",
      src: "https://img.youtube.com/vi/Qy_kwmGZzvs/mqdefault.jpg",
      descripation:
        "Comment devenir plus captivant avec la prosodie ? Devenez plus captivant avec cette technique_La méthode de la prosodie.",
    },
    {
      id: 2,
      title: "Ce piège ☠️ ralentit ton développement personnel.😱 #Ep1",
      date: "19 Septembre 2024",
      src: "https://img.youtube.com/vi/5ovCHT_t_Ls/mqdefault.jpg",
      descripation:
        "Ce piège ☠️ ralentit ton développement personnel.😱#Ep1",
    },
    {
      id: 3,
      title: "Comment devenir automatiquement plus intelligent avec ces 6 méthodes prouvées",
      date: "22 Avril 2024",
      src: "https://img.youtube.com/vi/CB2smmikDOM/mqdefault.jpg",
      descripation:
        "Comment devenir automatiquement plus intelligent avec ces 6 méthodes prouvées.",
    },
  ],
  qL = () =>
    v.jsx("section", {
      id: "blog",
      className: "blog-area",
      children: v.jsxs("div", {
        className: "container",
        children: [
          v.jsx("div", {
            className: "row",
            children: v.jsx("div", {
              className: "col-xl-12 col-lg-12",
              children: v.jsxs(oo, {
                children: [
                  v.jsx("p", { children: "blog" }),
                  v.jsx("h2", { children: "Dernières publications" }),
                ],
              }),
            }),
          }),
          v.jsx("div", {
            className: "row",
            children: GL.map(
              ({ date: e, descripation: t, id: n, src: r, title: i }) =>
                v.jsx(
                  ZL,
                  { date: e, src: r, descripation: t, title: i, id: n },
                  n
                )
            ),
          }),
        ],
      }),
    }),
  ZL = ({ date: e, src: t, title: n, descripation: r, id: i }) =>
    v.jsx("div", {
      className: "col-lg-4 col-md-6",
      children: v.jsx(Ah, {
        id: i,
        children: v.jsxs("div", {
          className: "blog-item",
          children: [
            v.jsx("div", {
              className: "image",
              children: v.jsx("img", { src: t, alt: "Blog" }),
            }),
            v.jsxs("div", {
              className: "content",
              children: [
                v.jsx("div", {
                  className: "blog-meta mt-15",
                  children: v.jsxs("a", {
                    className: "date",
                    href: "#",
                    children: [
                      v.jsx("i", { className: "far fa-calendar-alt" }),
                      e,
                    ],
                  }),
                }),
                v.jsx("h5", {
                  children: v.jsx("a", { href: "https://www.youtube.com/watch?v=Qy_kwmGZzvs", children: n }),
                }),
                v.jsx("p", { children: r }),
                v.jsx("hr", {}),
                v.jsxs("a", {
                  href: "https://www.youtube.com/watch?v=Qy_kwmGZzvs",
                  className: "theme-btn",
                  children: [
                    "Voir la suite",
                    v.jsx("i", { children: v.jsx(_O, { size: 15 }) }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  JL = () =>
    v.jsx("div", {
      className: "col-lg-4",
      children: v.jsxs("div", {
        className: "contact-content-part  wow fadeInUp delay-0-2s",
        children: [
          v.jsxs("div", {
            className: "single-contact wow fadeInUp",
            "data-wow-delay": ".2s",
            children: [
              v.jsx("div", {
                className: "contact-icon",
                children: v.jsx("i", { children: v.jsx(EO, { size: 20 }) }),
              }),
              v.jsx("h2", { children: "our office:" }),
              v.jsx("p", { children: "Jurain,Dhaka Bangladesh" }),
            ],
          }),
          v.jsxs("div", {
            className: "single-contact wow fadeInUp",
            "data-wow-delay": ".4s",
            children: [
              v.jsx("div", {
                className: "contact-icon",
                children: v.jsx("i", { children: v.jsx(kO, { size: 20 }) }),
              }),
              v.jsx("h2", { children: "Téléphone :" }),
              v.jsx("p", { children: "+1234321321" }),
            ],
          }),
          v.jsxs("div", {
            className: "single-contact wow fadeInUp",
            "data-wow-delay": ".6s",
            children: [
              v.jsx("div", {
                className: "contact-icon",
                children: v.jsx("i", { children: v.jsx(c_, { size: 20 }) }),
              }),
              v.jsx("h2", { children: "Ecrivez moi :" }),
              v.jsx("p", { children: "websitename@mail.com" }),
            ],
          }),
        ],
      }),
    }),
  e5 = () =>
    v.jsx("div", {
      className: "col-lg-8",
      children: v.jsx("div", {
        className: "contact-form contact-form-area wow fadeInUp delay-0-4s",
        children: v.jsx("form", {
          id: "contactForm",
          className: "contactForm",
          name: "contactForm",
          action: "assets/php/form-process.php",
          method: "post",
          children: v.jsxs("div", {
            className: "row",
            children: [
              v.jsx("div", {
                className: "col-md-6",
                children: v.jsxs("div", {
                  className: "form-group",
                  children: [
                    v.jsx("label", { htmlFor: "name", children: "Nom complet" }),
                    v.jsx("input", {
                      type: "text",
                      id: "name",
                      name: "name",
                      className: "form-control",
                      defaultValue: "",
                      placeholder: "Ethane Assamois",
                      required: "",
                      "data-error": "Entrez votre nom svp",
                    }),
                    v.jsx("label", {
                      htmlFor: "name",
                      className: "for-icon",
                      children: v.jsx("i", { className: "far fa-user" }),
                    }),
                    v.jsx("div", { className: "help-block with-errors" }),
                  ],
                }),
              }),
              v.jsx("div", {
                className: "col-md-6",
                children: v.jsxs("div", {
                  className: "form-group",
                  children: [
                    v.jsx("label", {
                      htmlFor: "email",
                      children: "Adresse email : ",
                    }),
                    v.jsx("input", {
                      type: "email",
                      id: "email",
                      name: "email",
                      className: "form-control",
                      defaultValue: "",
                      placeholder: "name@email.com",
                      required: "",
                      "data-error": "Veuillez entrer votre email",
                    }),
                    v.jsx("label", {
                      htmlFor: "email",
                      className: "for-icon",
                      children: v.jsx("i", { className: "far fa-envelope" }),
                    }),
                    v.jsx("div", { className: "help-block with-errors" }),
                  ],
                }),
              }),
              v.jsx("div", {
                className: "col-md-12",
                children: v.jsxs("div", {
                  className: "form-group",
                  children: [
                    v.jsx("label", {
                      htmlFor: "message",
                      children: "Your Message",
                    }),
                    v.jsx("textarea", {
                      name: "message",
                      id: "message",
                      className: "form-control",
                      rows: "4",
                      placeholder: "Ecrivez votre message",
                      required: "",
                      "data-error": "Veuillez entrer votre message",
                    }),
                    v.jsx("div", { className: "help-block with-errors" }),
                  ],
                }),
              }),
              v.jsx("div", {
                className: "col-md-12",
                children: v.jsxs("div", {
                  className: "form-group mb-0",
                  children: [
                    v.jsxs("button", {
                      type: "submit",
                      className: "theme-btn",
                      children: [
                        "Envoyer le message ",
                        v.jsx("i", { children: v.jsx(c_, { size: 16 }) }),
                      ],
                    }),
                    v.jsx("div", { id: "msgSubmit", className: "hidden" }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  t5 = () =>
    v.jsx("section", {
      id: "contact",
      className: "contact-area",
      children: v.jsxs("div", {
        className: "container",
        children: [
          v.jsx("div", {
            className: "row",
            children: v.jsx("div", {
              className: "col-xl-12 col-lg-12",
              children: v.jsxs("div", {
                className: "section-title text-center wow fadeInUp delay-0-2s",
                children: [
                  v.jsx("p", { children: "contact" }),
                  v.jsx("h2", { children: "Contactez moi" }),
                ],
              }),
            }),
          }),
          v.jsx(An, {
            children: v.jsxs("div", {
              className: "row",
              children: [v.jsx(JL, {}), v.jsx(e5, {})],
            }),
          }),
        ],
      }),
    }),
  Ey = "/assets/EA_profile.jpg",
  n5 = "/assets/EAT_profile.jpg",
  Hc = [
    { 
      id: 1, 
      src: Ey, 
      category: "Dev perso", 
      title: "Je vous aides à devenir meilleur•e" 
    },
    { 
      id: 2, 
      src: n5, 
      category: "Art oratoire", 
      title: "Je t'aides à t'exprimer" },
  ],
  i5 = ({ selectedImage: e, onClose: t }) =>
    e
      ? v.jsxs("div", {
        className: "lightbox",
        onClick: t,
        children: [
          v.jsx("span", { className: "close", onClick: t, children: "×" }),
          v.jsx("img", { className: "lightbox-content", src: e, alt: "" }),
        ],
      })
      : null,
  ky = ["slideIn", "fadeIn", "scaleUp"],
  o5 = () => {
    const e = Math.floor(Math.random() * ky.length);
    return ky[e];
  },
  s5 = () => {
    const [e, t] = U.useState("All"),
      [n, r] = U.useState(""),
      [i, o] = U.useState(null),
      s = (h) => {
        console.log("click"), o(h);
      },
      l = () => {
        o(null);
      },
      u = (h) => {
        t(h);
        const m = o5();
        r(m);
      },
      c = ["All"];
    Hc.forEach(({ category: h }) => {
      c.includes(h) || c.push(h);
    });
    const d = e === "All" ? Hc : Hc.filter((h) => h.category === e);
    return v.jsxs("section", {
      id: "portfolio",
      className: "projects-area",
      children: [
        v.jsxs("div", {
          className: "container",
          children: [
            v.jsx("div", {
              className: "row",
              children: v.jsx("div", {
                className: "col-xl-12 col-lg-12",
                children: v.jsxs(oo, {
                  children: [
                    v.jsx("p", { children: "Works" }),
                    v.jsx("h2", { children: "Mes médias" }),
                  ],
                }),
              }),
            }),
            v.jsx("ul", {
              className:
                "project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s",
              children: c.map((h, m) =>
                v.jsx(
                  "li",
                  {
                    onClick: () => u(h),
                    className: h === e ? "current" : "",
                    children: h,
                  },
                  m
                )
              ),
            }),
            v.jsx("div", {
              className: "row project-masonry-active",
              children: d.map(({ category: h, id: m, src: S, title: b }) =>
                v.jsx(
                  a5,
                  {
                    category: h,
                    title: b,
                    src: S,
                    animationClass: n,
                    openLightbox: s,
                  },
                  m
                )
              ),
            }),
          ],
        }),
        v.jsx(i5, { selectedImage: i, onClose: l }),
      ],
    });
  },
  a5 = ({
    category: e,
    title: t,
    src: n,
    animationClass: r,
    openLightbox: i,
  }) =>
    v.jsx("div", {
      className: `col-lg-4 col-md-6 item branding ${r}`,
      children: v.jsxs("div", {
        className: "project-item style-two wow fadeInUp delay-0-2s",
        children: [
          v.jsxs("div", {
            className: "project-image",
            children: [
              v.jsx("img", { src: n, alt: "Project" }),
              v.jsx("div", {
                onClick: () => i(n),
                className: "details-btn work-popup",
                children: v.jsx("i", { children: v.jsx(Vr, {}) }),
              }),
            ],
          }),
          v.jsxs("div", {
            className: "project-content",
            children: [
              v.jsx("span", { className: "sub-title", children: e }),
              v.jsx("h3", { children: t }),
            ],
          }),
        ],
      }),
    }),
  l5 = () =>
    v.jsx("footer", {
      class: "main-footer",
      children: v.jsx("div", {
        class: "footer-bottom pt-50 pb-40",
        children: v.jsx("div", {
          class: "container",
          children: v.jsx("div", {
            class: "row",
            children: v.jsx("div", {
              class: "col-lg-12 text-center",
              children: v.jsx("div", {
                class: "copyright-text",
                children: v.jsxs("p", {
                  children: [
                    "Copyright @2024, ",
                    v.jsx("a", { href: "https://www.youtube.com/@ethane77", children: "Ethane Assamois" }),
                    " All Rights Reserved.",
                  ],
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  u5 = "/assets/double-arrow-top.png",
  c5 = () => {
    const [e, t] = U.useState(0),
      [n, r] = U.useState(!1);
    U.useEffect(() => {
      const o = () => {
        const s = window.scrollY,
          l = window.innerHeight,
          c = document.body.clientHeight - l,
          d = (s / c) * 100;
        t(d), r(s > 350);
      };
      return (
        window.addEventListener("scroll", o),
        () => {
          window.removeEventListener("scroll", o);
        }
      );
    }, []);
    const i = () => {
      typeof window < "u" && window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return v.jsxs("div", {
      className: " progress-area",
      children: [
        v.jsx("i", {
          className: "progress-arrow",
          style: n ? { opacity: "100", visibility: "visible" } : {},
          children: v.jsx("img", { src: u5, alt: "arrow" }),
        }),
        v.jsx("div", {
          onClick: i,
          className: `${n ? "active-progress" : ""
            } progress-wrap cursor-pointer`,
          children: v.jsx("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            strokeWidth: 5,
            fill: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: v.jsx("path", {
              d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",
              style: {
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: 307.919 - (e * 307.919) / 100,
              },
            }),
          }),
        }),
      ],
    });
  },
  f5 = () =>
    v.jsxs("main", {
      children: [
        v.jsx(B4, {}),
        v.jsx(mO, {}),
        v.jsx(AO, {}),
        v.jsx(NO, {}),
        v.jsx(VO, {}),
        v.jsx(s5, {}),
        v.jsx(BL, {}),
        v.jsx(UL, {}),
        v.jsx(qL, {}),
        v.jsx(t5, {}),
        v.jsx(l5, {}),
        v.jsx(c5, {}),
      ],
    });
var d5 = { exports: {} };
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Tn, function () {
    const n = new Map(),
      r = {
        set(p, a, f) {
          n.has(p) || n.set(p, new Map());
          const y = n.get(p);
          y.has(a) || y.size === 0
            ? y.set(a, f)
            : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]
              }.`
            );
        },
        get: (p, a) => (n.has(p) && n.get(p).get(a)) || null,
        remove(p, a) {
          if (!n.has(p)) return;
          const f = n.get(p);
          f.delete(a), f.size === 0 && n.delete(p);
        },
      },
      i = "transitionend",
      o = (p) => (
        p &&
        window.CSS &&
        window.CSS.escape &&
        (p = p.replace(/#([^\s"#']+)/g, (a, f) => `#${CSS.escape(f)}`)),
        p
      ),
      s = (p) => {
        p.dispatchEvent(new Event(i));
      },
      l = (p) =>
        !(!p || typeof p != "object") &&
        (p.jquery !== void 0 && (p = p[0]), p.nodeType !== void 0),
      u = (p) =>
        l(p)
          ? p.jquery
            ? p[0]
            : p
          : typeof p == "string" && p.length > 0
            ? document.querySelector(o(p))
            : null,
      c = (p) => {
        if (!l(p) || p.getClientRects().length === 0) return !1;
        const a =
          getComputedStyle(p).getPropertyValue("visibility") === "visible",
          f = p.closest("details:not([open])");
        if (!f) return a;
        if (f !== p) {
          const y = p.closest("summary");
          if ((y && y.parentNode !== f) || y === null) return !1;
        }
        return a;
      },
      d = (p) =>
        !p ||
        p.nodeType !== Node.ELEMENT_NODE ||
        !!p.classList.contains("disabled") ||
        (p.disabled !== void 0
          ? p.disabled
          : p.hasAttribute("disabled") &&
          p.getAttribute("disabled") !== "false"),
      h = (p) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof p.getRootNode == "function") {
          const a = p.getRootNode();
          return a instanceof ShadowRoot ? a : null;
        }
        return p instanceof ShadowRoot
          ? p
          : p.parentNode
            ? h(p.parentNode)
            : null;
      },
      m = () => { },
      S = (p) => {
        p.offsetHeight;
      },
      b = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      x = [],
      P = () => document.documentElement.dir === "rtl",
      w = (p) => {
        var a;
        (a = () => {
          const f = b();
          if (f) {
            const y = p.NAME,
              C = f.fn[y];
            (f.fn[y] = p.jQueryInterface),
              (f.fn[y].Constructor = p),
              (f.fn[y].noConflict = () => ((f.fn[y] = C), p.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (x.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const f of x) f();
              }),
              x.push(a))
            : a();
      },
      g = (p, a = [], f = p) => (typeof p == "function" ? p(...a) : f),
      _ = (p, a, f = !0) => {
        if (!f) return void g(p);
        const y =
          ((L) => {
            if (!L) return 0;
            let { transitionDuration: N, transitionDelay: V } =
              window.getComputedStyle(L);
            const H = Number.parseFloat(N),
              W = Number.parseFloat(V);
            return H || W
              ? ((N = N.split(",")[0]),
                (V = V.split(",")[0]),
                1e3 * (Number.parseFloat(N) + Number.parseFloat(V)))
              : 0;
          })(a) + 5;
        let C = !1;
        const E = ({ target: L }) => {
          L === a && ((C = !0), a.removeEventListener(i, E), g(p));
        };
        a.addEventListener(i, E),
          setTimeout(() => {
            C || s(a);
          }, y);
      },
      T = (p, a, f, y) => {
        const C = p.length;
        let E = p.indexOf(a);
        return E === -1
          ? !f && y
            ? p[C - 1]
            : p[0]
          : ((E += f ? 1 : -1),
            y && (E = (E + C) % C),
            p[Math.max(0, Math.min(E, C - 1))]);
      },
      k = /[^.]*(?=\..*)\.|.*/,
      j = /\..*/,
      R = /::\d+$/,
      A = {};
    let D = 1;
    const M = { mouseenter: "mouseover", mouseleave: "mouseout" },
      K = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function Q(p, a) {
      return (a && `${a}::${D++}`) || p.uidEvent || D++;
    }
    function Y(p) {
      const a = Q(p);
      return (p.uidEvent = a), (A[a] = A[a] || {}), A[a];
    }
    function X(p, a, f = null) {
      return Object.values(p).find(
        (y) => y.callable === a && y.delegationSelector === f
      );
    }
    function ge(p, a, f) {
      const y = typeof a == "string",
        C = y ? f : a || f;
      let E = G(p);
      return K.has(E) || (E = p), [y, C, E];
    }
    function de(p, a, f, y, C) {
      if (typeof a != "string" || !p) return;
      let [E, L, N] = ge(a, f, y);
      a in M &&
        (L = ((ne) =>
          function (te) {
            if (
              !te.relatedTarget ||
              (te.relatedTarget !== te.delegateTarget &&
                !te.delegateTarget.contains(te.relatedTarget))
            )
              return ne.call(this, te);
          })(L));
      const V = Y(p),
        H = V[N] || (V[N] = {}),
        W = X(H, L, E ? f : null);
      if (W) return void (W.oneOff = W.oneOff && C);
      const F = Q(L, a.replace(k, "")),
        ie = E
          ? (function (ee, ne, te) {
            return function re(_e) {
              const be = ee.querySelectorAll(ne);
              for (
                let { target: se } = _e;
                se && se !== this;
                se = se.parentNode
              )
                for (const me of be)
                  if (me === se)
                    return (
                      pe(_e, { delegateTarget: se }),
                      re.oneOff && O.off(ee, _e.type, ne, te),
                      te.apply(se, [_e])
                    );
            };
          })(p, f, L)
          : (function (ee, ne) {
            return function te(re) {
              return (
                pe(re, { delegateTarget: ee }),
                te.oneOff && O.off(ee, re.type, ne),
                ne.apply(ee, [re])
              );
            };
          })(p, L);
      (ie.delegationSelector = E ? f : null),
        (ie.callable = L),
        (ie.oneOff = C),
        (ie.uidEvent = F),
        (H[F] = ie),
        p.addEventListener(N, ie, E);
    }
    function He(p, a, f, y, C) {
      const E = X(a[f], y, C);
      E && (p.removeEventListener(f, E, !!C), delete a[f][E.uidEvent]);
    }
    function z(p, a, f, y) {
      const C = a[f] || {};
      for (const [E, L] of Object.entries(C))
        E.includes(y) && He(p, a, f, L.callable, L.delegationSelector);
    }
    function G(p) {
      return (p = p.replace(j, "")), M[p] || p;
    }
    const O = {
      on(p, a, f, y) {
        de(p, a, f, y, !1);
      },
      one(p, a, f, y) {
        de(p, a, f, y, !0);
      },
      off(p, a, f, y) {
        if (typeof a != "string" || !p) return;
        const [C, E, L] = ge(a, f, y),
          N = L !== a,
          V = Y(p),
          H = V[L] || {},
          W = a.startsWith(".");
        if (E === void 0) {
          if (W) for (const F of Object.keys(V)) z(p, V, F, a.slice(1));
          for (const [F, ie] of Object.entries(H)) {
            const ee = F.replace(R, "");
            (N && !a.includes(ee)) ||
              He(p, V, L, ie.callable, ie.delegationSelector);
          }
        } else {
          if (!Object.keys(H).length) return;
          He(p, V, L, E, C ? f : null);
        }
      },
      trigger(p, a, f) {
        if (typeof a != "string" || !p) return null;
        const y = b();
        let C = null,
          E = !0,
          L = !0,
          N = !1;
        a !== G(a) &&
          y &&
          ((C = y.Event(a, f)),
            y(p).trigger(C),
            (E = !C.isPropagationStopped()),
            (L = !C.isImmediatePropagationStopped()),
            (N = C.isDefaultPrevented()));
        const V = pe(new Event(a, { bubbles: E, cancelable: !0 }), f);
        return (
          N && V.preventDefault(),
          L && p.dispatchEvent(V),
          V.defaultPrevented && C && C.preventDefault(),
          V
        );
      },
    };
    function pe(p, a = {}) {
      for (const [f, y] of Object.entries(a))
        try {
          p[f] = y;
        } catch {
          Object.defineProperty(p, f, { configurable: !0, get: () => y });
        }
      return p;
    }
    function ke(p) {
      if (p === "true") return !0;
      if (p === "false") return !1;
      if (p === Number(p).toString()) return Number(p);
      if (p === "" || p === "null") return null;
      if (typeof p != "string") return p;
      try {
        return JSON.parse(decodeURIComponent(p));
      } catch {
        return p;
      }
    }
    function it(p) {
      return p.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`);
    }
    const Qe = {
      setDataAttribute(p, a, f) {
        p.setAttribute(`data-bs-${it(a)}`, f);
      },
      removeDataAttribute(p, a) {
        p.removeAttribute(`data-bs-${it(a)}`);
      },
      getDataAttributes(p) {
        if (!p) return {};
        const a = {},
          f = Object.keys(p.dataset).filter(
            (y) => y.startsWith("bs") && !y.startsWith("bsConfig")
          );
        for (const y of f) {
          let C = y.replace(/^bs/, "");
          (C = C.charAt(0).toLowerCase() + C.slice(1, C.length)),
            (a[C] = ke(p.dataset[y]));
        }
        return a;
      },
      getDataAttribute: (p, a) => ke(p.getAttribute(`data-bs-${it(a)}`)),
    };
    class dt {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(a) {
        return (
          (a = this._mergeConfigObj(a)),
          (a = this._configAfterMerge(a)),
          this._typeCheckConfig(a),
          a
        );
      }
      _configAfterMerge(a) {
        return a;
      }
      _mergeConfigObj(a, f) {
        const y = l(f) ? Qe.getDataAttribute(f, "config") : {};
        return {
          ...this.constructor.Default,
          ...(typeof y == "object" ? y : {}),
          ...(l(f) ? Qe.getDataAttributes(f) : {}),
          ...(typeof a == "object" ? a : {}),
        };
      }
      _typeCheckConfig(a, f = this.constructor.DefaultType) {
        for (const [C, E] of Object.entries(f)) {
          const L = a[C],
            N = l(L)
              ? "element"
              : (y = L) == null
                ? `${y}`
                : Object.prototype.toString
                  .call(y)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(E).test(N))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${C}" provided type "${N}" but expected type "${E}".`
            );
        }
        var y;
      }
    }
    class Ye extends dt {
      constructor(a, f) {
        super(),
          (a = u(a)) &&
          ((this._element = a),
            (this._config = this._getConfig(f)),
            r.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        r.remove(this._element, this.constructor.DATA_KEY),
          O.off(this._element, this.constructor.EVENT_KEY);
        for (const a of Object.getOwnPropertyNames(this)) this[a] = null;
      }
      _queueCallback(a, f, y = !0) {
        _(a, f, y);
      }
      _getConfig(a) {
        return (
          (a = this._mergeConfigObj(a, this._element)),
          (a = this._configAfterMerge(a)),
          this._typeCheckConfig(a),
          a
        );
      }
      static getInstance(a) {
        return r.get(u(a), this.DATA_KEY);
      }
      static getOrCreateInstance(a, f = {}) {
        return (
          this.getInstance(a) || new this(a, typeof f == "object" ? f : null)
        );
      }
      static get VERSION() {
        return "5.3.3";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(a) {
        return `${a}${this.EVENT_KEY}`;
      }
    }
    const zn = (p) => {
      let a = p.getAttribute("data-bs-target");
      if (!a || a === "#") {
        let f = p.getAttribute("href");
        if (!f || (!f.includes("#") && !f.startsWith("."))) return null;
        f.includes("#") && !f.startsWith("#") && (f = `#${f.split("#")[1]}`),
          (a = f && f !== "#" ? f.trim() : null);
      }
      return a
        ? a
          .split(",")
          .map((f) => o(f))
          .join(",")
        : null;
    },
      q = {
        find: (p, a = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(a, p)),
        findOne: (p, a = document.documentElement) =>
          Element.prototype.querySelector.call(a, p),
        children: (p, a) =>
          [].concat(...p.children).filter((f) => f.matches(a)),
        parents(p, a) {
          const f = [];
          let y = p.parentNode.closest(a);
          for (; y;) f.push(y), (y = y.parentNode.closest(a));
          return f;
        },
        prev(p, a) {
          let f = p.previousElementSibling;
          for (; f;) {
            if (f.matches(a)) return [f];
            f = f.previousElementSibling;
          }
          return [];
        },
        next(p, a) {
          let f = p.nextElementSibling;
          for (; f;) {
            if (f.matches(a)) return [f];
            f = f.nextElementSibling;
          }
          return [];
        },
        focusableChildren(p) {
          const a = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((f) => `${f}:not([tabindex^="-"])`)
            .join(",");
          return this.find(a, p).filter((f) => !d(f) && c(f));
        },
        getSelectorFromElement(p) {
          const a = zn(p);
          return a && q.findOne(a) ? a : null;
        },
        getElementFromSelector(p) {
          const a = zn(p);
          return a ? q.findOne(a) : null;
        },
        getMultipleElementsFromSelector(p) {
          const a = zn(p);
          return a ? q.find(a) : [];
        },
      },
      Ls = (p, a = "hide") => {
        const f = `click.dismiss${p.EVENT_KEY}`,
          y = p.NAME;
        O.on(document, f, `[data-bs-dismiss="${y}"]`, function (C) {
          if (
            (["A", "AREA"].includes(this.tagName) && C.preventDefault(),
              d(this))
          )
            return;
          const E = q.getElementFromSelector(this) || this.closest(`.${y}`);
          p.getOrCreateInstance(E)[a]();
        });
      },
      Wh = ".bs.alert",
      pS = `close${Wh}`,
      mS = `closed${Wh}`;
    class ao extends Ye {
      static get NAME() {
        return "alert";
      }
      close() {
        if (O.trigger(this._element, pS).defaultPrevented) return;
        this._element.classList.remove("show");
        const a = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, a);
      }
      _destroyElement() {
        this._element.remove(), O.trigger(this._element, mS), this.dispose();
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = ao.getOrCreateInstance(this);
          if (typeof a == "string") {
            if (f[a] === void 0 || a.startsWith("_") || a === "constructor")
              throw new TypeError(`No method named "${a}"`);
            f[a](this);
          }
        });
      }
    }
    Ls(ao, "close"), w(ao);
    const Uh = '[data-bs-toggle="button"]';
    class lo extends Ye {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = lo.getOrCreateInstance(this);
          a === "toggle" && f[a]();
        });
      }
    }
    O.on(document, "click.bs.button.data-api", Uh, (p) => {
      p.preventDefault();
      const a = p.target.closest(Uh);
      lo.getOrCreateInstance(a).toggle();
    }),
      w(lo);
    const ti = ".bs.swipe",
      gS = `touchstart${ti}`,
      vS = `touchmove${ti}`,
      yS = `touchend${ti}`,
      wS = `pointerdown${ti}`,
      _S = `pointerup${ti}`,
      SS = { endCallback: null, leftCallback: null, rightCallback: null },
      xS = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class Ms extends dt {
      constructor(a, f) {
        super(),
          (this._element = a),
          a &&
          Ms.isSupported() &&
          ((this._config = this._getConfig(f)),
            (this._deltaX = 0),
            (this._supportPointerEvents = !!window.PointerEvent),
            this._initEvents());
      }
      static get Default() {
        return SS;
      }
      static get DefaultType() {
        return xS;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        O.off(this._element, ti);
      }
      _start(a) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(a) && (this._deltaX = a.clientX)
          : (this._deltaX = a.touches[0].clientX);
      }
      _end(a) {
        this._eventIsPointerPenTouch(a) &&
          (this._deltaX = a.clientX - this._deltaX),
          this._handleSwipe(),
          g(this._config.endCallback);
      }
      _move(a) {
        this._deltaX =
          a.touches && a.touches.length > 1
            ? 0
            : a.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const a = Math.abs(this._deltaX);
        if (a <= 40) return;
        const f = a / this._deltaX;
        (this._deltaX = 0),
          f &&
          g(f > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (O.on(this._element, wS, (a) => this._start(a)),
            O.on(this._element, _S, (a) => this._end(a)),
            this._element.classList.add("pointer-event"))
          : (O.on(this._element, gS, (a) => this._start(a)),
            O.on(this._element, vS, (a) => this._move(a)),
            O.on(this._element, yS, (a) => this._end(a)));
      }
      _eventIsPointerPenTouch(a) {
        return (
          this._supportPointerEvents &&
          (a.pointerType === "pen" || a.pointerType === "touch")
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const $n = ".bs.carousel",
      Kh = ".data-api",
      uo = "next",
      ni = "prev",
      ri = "left",
      As = "right",
      bS = `slide${$n}`,
      uu = `slid${$n}`,
      CS = `keydown${$n}`,
      TS = `mouseenter${$n}`,
      ES = `mouseleave${$n}`,
      PS = `dragstart${$n}`,
      kS = `load${$n}${Kh}`,
      OS = `click${$n}${Kh}`,
      Qh = "carousel",
      Ds = "active",
      Yh = ".active",
      Xh = ".carousel-item",
      jS = Yh + Xh,
      LS = { ArrowLeft: As, ArrowRight: ri },
      MS = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      AS = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class ii extends Ye {
      constructor(a, f) {
        super(a, f),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = q.findOne(
            ".carousel-indicators",
            this._element
          )),
          this._addEventListeners(),
          this._config.ride === Qh && this.cycle();
      }
      static get Default() {
        return MS;
      }
      static get DefaultType() {
        return AS;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(uo);
      }
      nextWhenVisible() {
        !document.hidden && c(this._element) && this.next();
      }
      prev() {
        this._slide(ni);
      }
      pause() {
        this._isSliding && s(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval
          ));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? O.one(this._element, uu, () => this.cycle())
            : this.cycle());
      }
      to(a) {
        const f = this._getItems();
        if (a > f.length - 1 || a < 0) return;
        if (this._isSliding)
          return void O.one(this._element, uu, () => this.to(a));
        const y = this._getItemIndex(this._getActive());
        if (y === a) return;
        const C = a > y ? uo : ni;
        this._slide(C, f[a]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(a) {
        return (a.defaultInterval = a.interval), a;
      }
      _addEventListeners() {
        this._config.keyboard &&
          O.on(this._element, CS, (a) => this._keydown(a)),
          this._config.pause === "hover" &&
          (O.on(this._element, TS, () => this.pause()),
            O.on(this._element, ES, () => this._maybeEnableCycle())),
          this._config.touch &&
          Ms.isSupported() &&
          this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const f of q.find(".carousel-item img", this._element))
          O.on(f, PS, (y) => y.preventDefault());
        const a = {
          leftCallback: () => this._slide(this._directionToOrder(ri)),
          rightCallback: () => this._slide(this._directionToOrder(As)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval
                )));
          },
        };
        this._swipeHelper = new Ms(this._element, a);
      }
      _keydown(a) {
        if (/input|textarea/i.test(a.target.tagName)) return;
        const f = LS[a.key];
        f && (a.preventDefault(), this._slide(this._directionToOrder(f)));
      }
      _getItemIndex(a) {
        return this._getItems().indexOf(a);
      }
      _setActiveIndicatorElement(a) {
        if (!this._indicatorsElement) return;
        const f = q.findOne(Yh, this._indicatorsElement);
        f.classList.remove(Ds), f.removeAttribute("aria-current");
        const y = q.findOne(
          `[data-bs-slide-to="${a}"]`,
          this._indicatorsElement
        );
        y && (y.classList.add(Ds), y.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const a = this._activeElement || this._getActive();
        if (!a) return;
        const f = Number.parseInt(a.getAttribute("data-bs-interval"), 10);
        this._config.interval = f || this._config.defaultInterval;
      }
      _slide(a, f = null) {
        if (this._isSliding) return;
        const y = this._getActive(),
          C = a === uo,
          E = f || T(this._getItems(), y, C, this._config.wrap);
        if (E === y) return;
        const L = this._getItemIndex(E),
          N = (F) =>
            O.trigger(this._element, F, {
              relatedTarget: E,
              direction: this._orderToDirection(a),
              from: this._getItemIndex(y),
              to: L,
            });
        if (N(bS).defaultPrevented || !y || !E) return;
        const V = !!this._interval;
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement(L),
          (this._activeElement = E);
        const H = C ? "carousel-item-start" : "carousel-item-end",
          W = C ? "carousel-item-next" : "carousel-item-prev";
        E.classList.add(W),
          S(E),
          y.classList.add(H),
          E.classList.add(H),
          this._queueCallback(
            () => {
              E.classList.remove(H, W),
                E.classList.add(Ds),
                y.classList.remove(Ds, W, H),
                (this._isSliding = !1),
                N(uu);
            },
            y,
            this._isAnimated()
          ),
          V && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return q.findOne(jS, this._element);
      }
      _getItems() {
        return q.find(Xh, this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(a) {
        return P() ? (a === ri ? ni : uo) : a === ri ? uo : ni;
      }
      _orderToDirection(a) {
        return P() ? (a === ni ? ri : As) : a === ni ? As : ri;
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = ii.getOrCreateInstance(this, a);
          if (typeof a != "number") {
            if (typeof a == "string") {
              if (f[a] === void 0 || a.startsWith("_") || a === "constructor")
                throw new TypeError(`No method named "${a}"`);
              f[a]();
            }
          } else f.to(a);
        });
      }
    }
    O.on(document, OS, "[data-bs-slide], [data-bs-slide-to]", function (p) {
      const a = q.getElementFromSelector(this);
      if (!a || !a.classList.contains(Qh)) return;
      p.preventDefault();
      const f = ii.getOrCreateInstance(a),
        y = this.getAttribute("data-bs-slide-to");
      return y
        ? (f.to(y), void f._maybeEnableCycle())
        : Qe.getDataAttribute(this, "slide") === "next"
          ? (f.next(), void f._maybeEnableCycle())
          : (f.prev(), void f._maybeEnableCycle());
    }),
      O.on(window, kS, () => {
        const p = q.find('[data-bs-ride="carousel"]');
        for (const a of p) ii.getOrCreateInstance(a);
      }),
      w(ii);
    const co = ".bs.collapse",
      DS = `show${co}`,
      NS = `shown${co}`,
      RS = `hide${co}`,
      IS = `hidden${co}`,
      VS = `click${co}.data-api`,
      cu = "show",
      oi = "collapse",
      Ns = "collapsing",
      zS = `:scope .${oi} .${oi}`,
      fu = '[data-bs-toggle="collapse"]',
      $S = { parent: null, toggle: !0 },
      FS = { parent: "(null|element)", toggle: "boolean" };
    class si extends Ye {
      constructor(a, f) {
        super(a, f), (this._isTransitioning = !1), (this._triggerArray = []);
        const y = q.find(fu);
        for (const C of y) {
          const E = q.getSelectorFromElement(C),
            L = q.find(E).filter((N) => N === this._element);
          E !== null && L.length && this._triggerArray.push(C);
        }
        this._initializeChildren(),
          this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return $S;
      }
      static get DefaultType() {
        return FS;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let a = [];
        if (
          (this._config.parent &&
            (a = this._getFirstLevelChildren(
              ".collapse.show, .collapse.collapsing"
            )
              .filter((C) => C !== this._element)
              .map((C) => si.getOrCreateInstance(C, { toggle: !1 }))),
            (a.length && a[0]._isTransitioning) ||
            O.trigger(this._element, DS).defaultPrevented)
        )
          return;
        for (const C of a) C.hide();
        const f = this._getDimension();
        this._element.classList.remove(oi),
          this._element.classList.add(Ns),
          (this._element.style[f] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const y = `scroll${f[0].toUpperCase() + f.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Ns),
              this._element.classList.add(oi, cu),
              (this._element.style[f] = ""),
              O.trigger(this._element, NS);
          },
          this._element,
          !0
        ),
          (this._element.style[f] = `${this._element[y]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          O.trigger(this._element, RS).defaultPrevented
        )
          return;
        const a = this._getDimension();
        (this._element.style[a] = `${this._element.getBoundingClientRect()[a]
          }px`),
          S(this._element),
          this._element.classList.add(Ns),
          this._element.classList.remove(oi, cu);
        for (const f of this._triggerArray) {
          const y = q.getElementFromSelector(f);
          y && !this._isShown(y) && this._addAriaAndCollapsedClass([f], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[a] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(Ns),
                this._element.classList.add(oi),
                O.trigger(this._element, IS);
            },
            this._element,
            !0
          );
      }
      _isShown(a = this._element) {
        return a.classList.contains(cu);
      }
      _configAfterMerge(a) {
        return (a.toggle = !!a.toggle), (a.parent = u(a.parent)), a;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const a = this._getFirstLevelChildren(fu);
        for (const f of a) {
          const y = q.getElementFromSelector(f);
          y && this._addAriaAndCollapsedClass([f], this._isShown(y));
        }
      }
      _getFirstLevelChildren(a) {
        const f = q.find(zS, this._config.parent);
        return q.find(a, this._config.parent).filter((y) => !f.includes(y));
      }
      _addAriaAndCollapsedClass(a, f) {
        if (a.length)
          for (const y of a)
            y.classList.toggle("collapsed", !f),
              y.setAttribute("aria-expanded", f);
      }
      static jQueryInterface(a) {
        const f = {};
        return (
          typeof a == "string" && /show|hide/.test(a) && (f.toggle = !1),
          this.each(function () {
            const y = si.getOrCreateInstance(this, f);
            if (typeof a == "string") {
              if (y[a] === void 0)
                throw new TypeError(`No method named "${a}"`);
              y[a]();
            }
          })
        );
      }
    }
    O.on(document, VS, fu, function (p) {
      (p.target.tagName === "A" ||
        (p.delegateTarget && p.delegateTarget.tagName === "A")) &&
        p.preventDefault();
      for (const a of q.getMultipleElementsFromSelector(this))
        si.getOrCreateInstance(a, { toggle: !1 }).toggle();
    }),
      w(si);
    var ht = "top",
      kt = "bottom",
      Ot = "right",
      pt = "left",
      Rs = "auto",
      ai = [ht, kt, Ot, pt],
      Sr = "start",
      li = "end",
      Gh = "clippingParents",
      du = "viewport",
      ui = "popper",
      qh = "reference",
      hu = ai.reduce(function (p, a) {
        return p.concat([a + "-" + Sr, a + "-" + li]);
      }, []),
      pu = [].concat(ai, [Rs]).reduce(function (p, a) {
        return p.concat([a, a + "-" + Sr, a + "-" + li]);
      }, []),
      Zh = "beforeRead",
      Jh = "read",
      ep = "afterRead",
      tp = "beforeMain",
      np = "main",
      rp = "afterMain",
      ip = "beforeWrite",
      op = "write",
      sp = "afterWrite",
      ap = [Zh, Jh, ep, tp, np, rp, ip, op, sp];
    function ln(p) {
      return p ? (p.nodeName || "").toLowerCase() : null;
    }
    function jt(p) {
      if (p == null) return window;
      if (p.toString() !== "[object Window]") {
        var a = p.ownerDocument;
        return (a && a.defaultView) || window;
      }
      return p;
    }
    function xr(p) {
      return p instanceof jt(p).Element || p instanceof Element;
    }
    function zt(p) {
      return p instanceof jt(p).HTMLElement || p instanceof HTMLElement;
    }
    function mu(p) {
      return (
        typeof ShadowRoot < "u" &&
        (p instanceof jt(p).ShadowRoot || p instanceof ShadowRoot)
      );
    }
    const gu = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (p) {
        var a = p.state;
        Object.keys(a.elements).forEach(function (f) {
          var y = a.styles[f] || {},
            C = a.attributes[f] || {},
            E = a.elements[f];
          zt(E) &&
            ln(E) &&
            (Object.assign(E.style, y),
              Object.keys(C).forEach(function (L) {
                var N = C[L];
                N === !1
                  ? E.removeAttribute(L)
                  : E.setAttribute(L, N === !0 ? "" : N);
              }));
        });
      },
      effect: function (p) {
        var a = p.state,
          f = {
            popper: {
              position: a.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(a.elements.popper.style, f.popper),
          (a.styles = f),
          a.elements.arrow && Object.assign(a.elements.arrow.style, f.arrow),
          function () {
            Object.keys(a.elements).forEach(function (y) {
              var C = a.elements[y],
                E = a.attributes[y] || {},
                L = Object.keys(
                  a.styles.hasOwnProperty(y) ? a.styles[y] : f[y]
                ).reduce(function (N, V) {
                  return (N[V] = ""), N;
                }, {});
              zt(C) &&
                ln(C) &&
                (Object.assign(C.style, L),
                  Object.keys(E).forEach(function (N) {
                    C.removeAttribute(N);
                  }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function un(p) {
      return p.split("-")[0];
    }
    var br = Math.max,
      Is = Math.min,
      ci = Math.round;
    function vu() {
      var p = navigator.userAgentData;
      return p != null && p.brands && Array.isArray(p.brands)
        ? p.brands
          .map(function (a) {
            return a.brand + "/" + a.version;
          })
          .join(" ")
        : navigator.userAgent;
    }
    function lp() {
      return !/^((?!chrome|android).)*safari/i.test(vu());
    }
    function fi(p, a, f) {
      a === void 0 && (a = !1), f === void 0 && (f = !1);
      var y = p.getBoundingClientRect(),
        C = 1,
        E = 1;
      a &&
        zt(p) &&
        ((C = (p.offsetWidth > 0 && ci(y.width) / p.offsetWidth) || 1),
          (E = (p.offsetHeight > 0 && ci(y.height) / p.offsetHeight) || 1));
      var L = (xr(p) ? jt(p) : window).visualViewport,
        N = !lp() && f,
        V = (y.left + (N && L ? L.offsetLeft : 0)) / C,
        H = (y.top + (N && L ? L.offsetTop : 0)) / E,
        W = y.width / C,
        F = y.height / E;
      return {
        width: W,
        height: F,
        top: H,
        right: V + W,
        bottom: H + F,
        left: V,
        x: V,
        y: H,
      };
    }
    function yu(p) {
      var a = fi(p),
        f = p.offsetWidth,
        y = p.offsetHeight;
      return (
        Math.abs(a.width - f) <= 1 && (f = a.width),
        Math.abs(a.height - y) <= 1 && (y = a.height),
        { x: p.offsetLeft, y: p.offsetTop, width: f, height: y }
      );
    }
    function up(p, a) {
      var f = a.getRootNode && a.getRootNode();
      if (p.contains(a)) return !0;
      if (f && mu(f)) {
        var y = a;
        do {
          if (y && p.isSameNode(y)) return !0;
          y = y.parentNode || y.host;
        } while (y);
      }
      return !1;
    }
    function _n(p) {
      return jt(p).getComputedStyle(p);
    }
    function HS(p) {
      return ["table", "td", "th"].indexOf(ln(p)) >= 0;
    }
    function Fn(p) {
      return (
        (xr(p) ? p.ownerDocument : p.document) || window.document
      ).documentElement;
    }
    function Vs(p) {
      return ln(p) === "html"
        ? p
        : p.assignedSlot || p.parentNode || (mu(p) ? p.host : null) || Fn(p);
    }
    function cp(p) {
      return zt(p) && _n(p).position !== "fixed" ? p.offsetParent : null;
    }
    function fo(p) {
      for (
        var a = jt(p), f = cp(p);
        f && HS(f) && _n(f).position === "static";

      )
        f = cp(f);
      return f &&
        (ln(f) === "html" || (ln(f) === "body" && _n(f).position === "static"))
        ? a
        : f ||
        (function (y) {
          var C = /firefox/i.test(vu());
          if (/Trident/i.test(vu()) && zt(y) && _n(y).position === "fixed")
            return null;
          var E = Vs(y);
          for (
            mu(E) && (E = E.host);
            zt(E) && ["html", "body"].indexOf(ln(E)) < 0;

          ) {
            var L = _n(E);
            if (
              L.transform !== "none" ||
              L.perspective !== "none" ||
              L.contain === "paint" ||
              ["transform", "perspective"].indexOf(L.willChange) !== -1 ||
              (C && L.willChange === "filter") ||
              (C && L.filter && L.filter !== "none")
            )
              return E;
            E = E.parentNode;
          }
          return null;
        })(p) ||
        a;
    }
    function wu(p) {
      return ["top", "bottom"].indexOf(p) >= 0 ? "x" : "y";
    }
    function ho(p, a, f) {
      return br(p, Is(a, f));
    }
    function fp(p) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, p);
    }
    function dp(p, a) {
      return a.reduce(function (f, y) {
        return (f[y] = p), f;
      }, {});
    }
    const hp = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (p) {
        var a,
          f = p.state,
          y = p.name,
          C = p.options,
          E = f.elements.arrow,
          L = f.modifiersData.popperOffsets,
          N = un(f.placement),
          V = wu(N),
          H = [pt, Ot].indexOf(N) >= 0 ? "height" : "width";
        if (E && L) {
          var W = (function (Se, ye) {
            return fp(
              typeof (Se =
                typeof Se == "function"
                  ? Se(
                    Object.assign({}, ye.rects, { placement: ye.placement })
                  )
                  : Se) != "number"
                ? Se
                : dp(Se, ai)
            );
          })(C.padding, f),
            F = yu(E),
            ie = V === "y" ? ht : pt,
            ee = V === "y" ? kt : Ot,
            ne =
              f.rects.reference[H] +
              f.rects.reference[V] -
              L[V] -
              f.rects.popper[H],
            te = L[V] - f.rects.reference[V],
            re = fo(E),
            _e = re
              ? V === "y"
                ? re.clientHeight || 0
                : re.clientWidth || 0
              : 0,
            be = ne / 2 - te / 2,
            se = W[ie],
            me = _e - F[H] - W[ee],
            oe = _e / 2 - F[H] / 2 + be,
            fe = ho(se, oe, me),
            ve = V;
          f.modifiersData[y] =
            (((a = {})[ve] = fe), (a.centerOffset = fe - oe), a);
        }
      },
      effect: function (p) {
        var a = p.state,
          f = p.options.element,
          y = f === void 0 ? "[data-popper-arrow]" : f;
        y != null &&
          (typeof y != "string" || (y = a.elements.popper.querySelector(y))) &&
          up(a.elements.popper, y) &&
          (a.elements.arrow = y);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function di(p) {
      return p.split("-")[1];
    }
    var BS = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function pp(p) {
      var a,
        f = p.popper,
        y = p.popperRect,
        C = p.placement,
        E = p.variation,
        L = p.offsets,
        N = p.position,
        V = p.gpuAcceleration,
        H = p.adaptive,
        W = p.roundOffsets,
        F = p.isFixed,
        ie = L.x,
        ee = ie === void 0 ? 0 : ie,
        ne = L.y,
        te = ne === void 0 ? 0 : ne,
        re = typeof W == "function" ? W({ x: ee, y: te }) : { x: ee, y: te };
      (ee = re.x), (te = re.y);
      var _e = L.hasOwnProperty("x"),
        be = L.hasOwnProperty("y"),
        se = pt,
        me = ht,
        oe = window;
      if (H) {
        var fe = fo(f),
          ve = "clientHeight",
          Se = "clientWidth";
        fe === jt(f) &&
          _n((fe = Fn(f))).position !== "static" &&
          N === "absolute" &&
          ((ve = "scrollHeight"), (Se = "scrollWidth")),
          (C === ht || ((C === pt || C === Ot) && E === li)) &&
          ((me = kt),
            (te -=
              (F && fe === oe && oe.visualViewport
                ? oe.visualViewport.height
                : fe[ve]) - y.height),
            (te *= V ? 1 : -1)),
          (C !== pt && ((C !== ht && C !== kt) || E !== li)) ||
          ((se = Ot),
            (ee -=
              (F && fe === oe && oe.visualViewport
                ? oe.visualViewport.width
                : fe[Se]) - y.width),
            (ee *= V ? 1 : -1));
      }
      var ye,
        Be = Object.assign({ position: N }, H && BS),
        Lt =
          W === !0
            ? (function (Jt, mt) {
              var Ft = Jt.x,
                Ht = Jt.y,
                ze = mt.devicePixelRatio || 1;
              return { x: ci(Ft * ze) / ze || 0, y: ci(Ht * ze) / ze || 0 };
            })({ x: ee, y: te }, jt(f))
            : { x: ee, y: te };
      return (
        (ee = Lt.x),
        (te = Lt.y),
        V
          ? Object.assign(
            {},
            Be,
            (((ye = {})[me] = be ? "0" : ""),
              (ye[se] = _e ? "0" : ""),
              (ye.transform =
                (oe.devicePixelRatio || 1) <= 1
                  ? "translate(" + ee + "px, " + te + "px)"
                  : "translate3d(" + ee + "px, " + te + "px, 0)"),
              ye)
          )
          : Object.assign(
            {},
            Be,
            (((a = {})[me] = be ? te + "px" : ""),
              (a[se] = _e ? ee + "px" : ""),
              (a.transform = ""),
              a)
          )
      );
    }
    const _u = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (p) {
        var a = p.state,
          f = p.options,
          y = f.gpuAcceleration,
          C = y === void 0 || y,
          E = f.adaptive,
          L = E === void 0 || E,
          N = f.roundOffsets,
          V = N === void 0 || N,
          H = {
            placement: un(a.placement),
            variation: di(a.placement),
            popper: a.elements.popper,
            popperRect: a.rects.popper,
            gpuAcceleration: C,
            isFixed: a.options.strategy === "fixed",
          };
        a.modifiersData.popperOffsets != null &&
          (a.styles.popper = Object.assign(
            {},
            a.styles.popper,
            pp(
              Object.assign({}, H, {
                offsets: a.modifiersData.popperOffsets,
                position: a.options.strategy,
                adaptive: L,
                roundOffsets: V,
              })
            )
          )),
          a.modifiersData.arrow != null &&
          (a.styles.arrow = Object.assign(
            {},
            a.styles.arrow,
            pp(
              Object.assign({}, H, {
                offsets: a.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: V,
              })
            )
          )),
          (a.attributes.popper = Object.assign({}, a.attributes.popper, {
            "data-popper-placement": a.placement,
          }));
      },
      data: {},
    };
    var zs = { passive: !0 };
    const Su = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () { },
      effect: function (p) {
        var a = p.state,
          f = p.instance,
          y = p.options,
          C = y.scroll,
          E = C === void 0 || C,
          L = y.resize,
          N = L === void 0 || L,
          V = jt(a.elements.popper),
          H = [].concat(a.scrollParents.reference, a.scrollParents.popper);
        return (
          E &&
          H.forEach(function (W) {
            W.addEventListener("scroll", f.update, zs);
          }),
          N && V.addEventListener("resize", f.update, zs),
          function () {
            E &&
              H.forEach(function (W) {
                W.removeEventListener("scroll", f.update, zs);
              }),
              N && V.removeEventListener("resize", f.update, zs);
          }
        );
      },
      data: {},
    };
    var WS = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function $s(p) {
      return p.replace(/left|right|bottom|top/g, function (a) {
        return WS[a];
      });
    }
    var US = { start: "end", end: "start" };
    function mp(p) {
      return p.replace(/start|end/g, function (a) {
        return US[a];
      });
    }
    function xu(p) {
      var a = jt(p);
      return { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
    }
    function bu(p) {
      return fi(Fn(p)).left + xu(p).scrollLeft;
    }
    function Cu(p) {
      var a = _n(p),
        f = a.overflow,
        y = a.overflowX,
        C = a.overflowY;
      return /auto|scroll|overlay|hidden/.test(f + C + y);
    }
    function gp(p) {
      return ["html", "body", "#document"].indexOf(ln(p)) >= 0
        ? p.ownerDocument.body
        : zt(p) && Cu(p)
          ? p
          : gp(Vs(p));
    }
    function po(p, a) {
      var f;
      a === void 0 && (a = []);
      var y = gp(p),
        C = y === ((f = p.ownerDocument) == null ? void 0 : f.body),
        E = jt(y),
        L = C ? [E].concat(E.visualViewport || [], Cu(y) ? y : []) : y,
        N = a.concat(L);
      return C ? N : N.concat(po(Vs(L)));
    }
    function Tu(p) {
      return Object.assign({}, p, {
        left: p.x,
        top: p.y,
        right: p.x + p.width,
        bottom: p.y + p.height,
      });
    }
    function vp(p, a, f) {
      return a === du
        ? Tu(
          (function (y, C) {
            var E = jt(y),
              L = Fn(y),
              N = E.visualViewport,
              V = L.clientWidth,
              H = L.clientHeight,
              W = 0,
              F = 0;
            if (N) {
              (V = N.width), (H = N.height);
              var ie = lp();
              (ie || (!ie && C === "fixed")) &&
                ((W = N.offsetLeft), (F = N.offsetTop));
            }
            return { width: V, height: H, x: W + bu(y), y: F };
          })(p, f)
        )
        : xr(a)
          ? (function (y, C) {
            var E = fi(y, !1, C === "fixed");
            return (
              (E.top = E.top + y.clientTop),
              (E.left = E.left + y.clientLeft),
              (E.bottom = E.top + y.clientHeight),
              (E.right = E.left + y.clientWidth),
              (E.width = y.clientWidth),
              (E.height = y.clientHeight),
              (E.x = E.left),
              (E.y = E.top),
              E
            );
          })(a, f)
          : Tu(
            (function (y) {
              var C,
                E = Fn(y),
                L = xu(y),
                N = (C = y.ownerDocument) == null ? void 0 : C.body,
                V = br(
                  E.scrollWidth,
                  E.clientWidth,
                  N ? N.scrollWidth : 0,
                  N ? N.clientWidth : 0
                ),
                H = br(
                  E.scrollHeight,
                  E.clientHeight,
                  N ? N.scrollHeight : 0,
                  N ? N.clientHeight : 0
                ),
                W = -L.scrollLeft + bu(y),
                F = -L.scrollTop;
              return (
                _n(N || E).direction === "rtl" &&
                (W += br(E.clientWidth, N ? N.clientWidth : 0) - V),
                { width: V, height: H, x: W, y: F }
              );
            })(Fn(p))
          );
    }
    function yp(p) {
      var a,
        f = p.reference,
        y = p.element,
        C = p.placement,
        E = C ? un(C) : null,
        L = C ? di(C) : null,
        N = f.x + f.width / 2 - y.width / 2,
        V = f.y + f.height / 2 - y.height / 2;
      switch (E) {
        case ht:
          a = { x: N, y: f.y - y.height };
          break;
        case kt:
          a = { x: N, y: f.y + f.height };
          break;
        case Ot:
          a = { x: f.x + f.width, y: V };
          break;
        case pt:
          a = { x: f.x - y.width, y: V };
          break;
        default:
          a = { x: f.x, y: f.y };
      }
      var H = E ? wu(E) : null;
      if (H != null) {
        var W = H === "y" ? "height" : "width";
        switch (L) {
          case Sr:
            a[H] = a[H] - (f[W] / 2 - y[W] / 2);
            break;
          case li:
            a[H] = a[H] + (f[W] / 2 - y[W] / 2);
        }
      }
      return a;
    }
    function hi(p, a) {
      a === void 0 && (a = {});
      var f = a,
        y = f.placement,
        C = y === void 0 ? p.placement : y,
        E = f.strategy,
        L = E === void 0 ? p.strategy : E,
        N = f.boundary,
        V = N === void 0 ? Gh : N,
        H = f.rootBoundary,
        W = H === void 0 ? du : H,
        F = f.elementContext,
        ie = F === void 0 ? ui : F,
        ee = f.altBoundary,
        ne = ee !== void 0 && ee,
        te = f.padding,
        re = te === void 0 ? 0 : te,
        _e = fp(typeof re != "number" ? re : dp(re, ai)),
        be = ie === ui ? qh : ui,
        se = p.rects.popper,
        me = p.elements[ne ? be : ie],
        oe = (function (mt, Ft, Ht, ze) {
          var cn =
            Ft === "clippingParents"
              ? (function (xe) {
                var gt = po(Vs(xe)),
                  Bt =
                    ["absolute", "fixed"].indexOf(_n(xe).position) >= 0 &&
                      zt(xe)
                      ? fo(xe)
                      : xe;
                return xr(Bt)
                  ? gt.filter(function (Bn) {
                    return xr(Bn) && up(Bn, Bt) && ln(Bn) !== "body";
                  })
                  : [];
              })(mt)
              : [].concat(Ft),
            fn = [].concat(cn, [Ht]),
            gi = fn[0],
            qe = fn.reduce(function (xe, gt) {
              var Bt = vp(mt, gt, ze);
              return (
                (xe.top = br(Bt.top, xe.top)),
                (xe.right = Is(Bt.right, xe.right)),
                (xe.bottom = Is(Bt.bottom, xe.bottom)),
                (xe.left = br(Bt.left, xe.left)),
                xe
              );
            }, vp(mt, gi, ze));
          return (
            (qe.width = qe.right - qe.left),
            (qe.height = qe.bottom - qe.top),
            (qe.x = qe.left),
            (qe.y = qe.top),
            qe
          );
        })(xr(me) ? me : me.contextElement || Fn(p.elements.popper), V, W, L),
        fe = fi(p.elements.reference),
        ve = yp({
          reference: fe,
          element: se,
          strategy: "absolute",
          placement: C,
        }),
        Se = Tu(Object.assign({}, se, ve)),
        ye = ie === ui ? Se : fe,
        Be = {
          top: oe.top - ye.top + _e.top,
          bottom: ye.bottom - oe.bottom + _e.bottom,
          left: oe.left - ye.left + _e.left,
          right: ye.right - oe.right + _e.right,
        },
        Lt = p.modifiersData.offset;
      if (ie === ui && Lt) {
        var Jt = Lt[C];
        Object.keys(Be).forEach(function (mt) {
          var Ft = [Ot, kt].indexOf(mt) >= 0 ? 1 : -1,
            Ht = [ht, kt].indexOf(mt) >= 0 ? "y" : "x";
          Be[mt] += Jt[Ht] * Ft;
        });
      }
      return Be;
    }
    function KS(p, a) {
      a === void 0 && (a = {});
      var f = a,
        y = f.placement,
        C = f.boundary,
        E = f.rootBoundary,
        L = f.padding,
        N = f.flipVariations,
        V = f.allowedAutoPlacements,
        H = V === void 0 ? pu : V,
        W = di(y),
        F = W
          ? N
            ? hu
            : hu.filter(function (ne) {
              return di(ne) === W;
            })
          : ai,
        ie = F.filter(function (ne) {
          return H.indexOf(ne) >= 0;
        });
      ie.length === 0 && (ie = F);
      var ee = ie.reduce(function (ne, te) {
        return (
          (ne[te] = hi(p, {
            placement: te,
            boundary: C,
            rootBoundary: E,
            padding: L,
          })[un(te)]),
          ne
        );
      }, {});
      return Object.keys(ee).sort(function (ne, te) {
        return ee[ne] - ee[te];
      });
    }
    const wp = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (p) {
        var a = p.state,
          f = p.options,
          y = p.name;
        if (!a.modifiersData[y]._skip) {
          for (
            var C = f.mainAxis,
            E = C === void 0 || C,
            L = f.altAxis,
            N = L === void 0 || L,
            V = f.fallbackPlacements,
            H = f.padding,
            W = f.boundary,
            F = f.rootBoundary,
            ie = f.altBoundary,
            ee = f.flipVariations,
            ne = ee === void 0 || ee,
            te = f.allowedAutoPlacements,
            re = a.options.placement,
            _e = un(re),
            be =
              V ||
              (_e !== re && ne
                ? (function (xe) {
                  if (un(xe) === Rs) return [];
                  var gt = $s(xe);
                  return [mp(xe), gt, mp(gt)];
                })(re)
                : [$s(re)]),
            se = [re].concat(be).reduce(function (xe, gt) {
              return xe.concat(
                un(gt) === Rs
                  ? KS(a, {
                    placement: gt,
                    boundary: W,
                    rootBoundary: F,
                    padding: H,
                    flipVariations: ne,
                    allowedAutoPlacements: te,
                  })
                  : gt
              );
            }, []),
            me = a.rects.reference,
            oe = a.rects.popper,
            fe = new Map(),
            ve = !0,
            Se = se[0],
            ye = 0;
            ye < se.length;
            ye++
          ) {
            var Be = se[ye],
              Lt = un(Be),
              Jt = di(Be) === Sr,
              mt = [ht, kt].indexOf(Lt) >= 0,
              Ft = mt ? "width" : "height",
              Ht = hi(a, {
                placement: Be,
                boundary: W,
                rootBoundary: F,
                altBoundary: ie,
                padding: H,
              }),
              ze = mt ? (Jt ? Ot : pt) : Jt ? kt : ht;
            me[Ft] > oe[Ft] && (ze = $s(ze));
            var cn = $s(ze),
              fn = [];
            if (
              (E && fn.push(Ht[Lt] <= 0),
                N && fn.push(Ht[ze] <= 0, Ht[cn] <= 0),
                fn.every(function (xe) {
                  return xe;
                }))
            ) {
              (Se = Be), (ve = !1);
              break;
            }
            fe.set(Be, fn);
          }
          if (ve)
            for (
              var gi = function (xe) {
                var gt = se.find(function (Bt) {
                  var Bn = fe.get(Bt);
                  if (Bn)
                    return Bn.slice(0, xe).every(function (Xs) {
                      return Xs;
                    });
                });
                if (gt) return (Se = gt), "break";
              },
              qe = ne ? 3 : 1;
              qe > 0 && gi(qe) !== "break";
              qe--
            );
          a.placement !== Se &&
            ((a.modifiersData[y]._skip = !0),
              (a.placement = Se),
              (a.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function _p(p, a, f) {
      return (
        f === void 0 && (f = { x: 0, y: 0 }),
        {
          top: p.top - a.height - f.y,
          right: p.right - a.width + f.x,
          bottom: p.bottom - a.height + f.y,
          left: p.left - a.width - f.x,
        }
      );
    }
    function Sp(p) {
      return [ht, Ot, kt, pt].some(function (a) {
        return p[a] >= 0;
      });
    }
    const xp = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (p) {
        var a = p.state,
          f = p.name,
          y = a.rects.reference,
          C = a.rects.popper,
          E = a.modifiersData.preventOverflow,
          L = hi(a, { elementContext: "reference" }),
          N = hi(a, { altBoundary: !0 }),
          V = _p(L, y),
          H = _p(N, C, E),
          W = Sp(V),
          F = Sp(H);
        (a.modifiersData[f] = {
          referenceClippingOffsets: V,
          popperEscapeOffsets: H,
          isReferenceHidden: W,
          hasPopperEscaped: F,
        }),
          (a.attributes.popper = Object.assign({}, a.attributes.popper, {
            "data-popper-reference-hidden": W,
            "data-popper-escaped": F,
          }));
      },
    },
      bp = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (p) {
          var a = p.state,
            f = p.options,
            y = p.name,
            C = f.offset,
            E = C === void 0 ? [0, 0] : C,
            L = pu.reduce(function (W, F) {
              return (
                (W[F] = (function (ie, ee, ne) {
                  var te = un(ie),
                    re = [pt, ht].indexOf(te) >= 0 ? -1 : 1,
                    _e =
                      typeof ne == "function"
                        ? ne(Object.assign({}, ee, { placement: ie }))
                        : ne,
                    be = _e[0],
                    se = _e[1];
                  return (
                    (be = be || 0),
                    (se = (se || 0) * re),
                    [pt, Ot].indexOf(te) >= 0
                      ? { x: se, y: be }
                      : { x: be, y: se }
                  );
                })(F, a.rects, E)),
                W
              );
            }, {}),
            N = L[a.placement],
            V = N.x,
            H = N.y;
          a.modifiersData.popperOffsets != null &&
            ((a.modifiersData.popperOffsets.x += V),
              (a.modifiersData.popperOffsets.y += H)),
            (a.modifiersData[y] = L);
        },
      },
      Eu = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (p) {
          var a = p.state,
            f = p.name;
          a.modifiersData[f] = yp({
            reference: a.rects.reference,
            element: a.rects.popper,
            strategy: "absolute",
            placement: a.placement,
          });
        },
        data: {},
      },
      Cp = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (p) {
          var a = p.state,
            f = p.options,
            y = p.name,
            C = f.mainAxis,
            E = C === void 0 || C,
            L = f.altAxis,
            N = L !== void 0 && L,
            V = f.boundary,
            H = f.rootBoundary,
            W = f.altBoundary,
            F = f.padding,
            ie = f.tether,
            ee = ie === void 0 || ie,
            ne = f.tetherOffset,
            te = ne === void 0 ? 0 : ne,
            re = hi(a, {
              boundary: V,
              rootBoundary: H,
              padding: F,
              altBoundary: W,
            }),
            _e = un(a.placement),
            be = di(a.placement),
            se = !be,
            me = wu(_e),
            oe = me === "x" ? "y" : "x",
            fe = a.modifiersData.popperOffsets,
            ve = a.rects.reference,
            Se = a.rects.popper,
            ye =
              typeof te == "function"
                ? te(Object.assign({}, a.rects, { placement: a.placement }))
                : te,
            Be =
              typeof ye == "number"
                ? { mainAxis: ye, altAxis: ye }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, ye),
            Lt = a.modifiersData.offset
              ? a.modifiersData.offset[a.placement]
              : null,
            Jt = { x: 0, y: 0 };
          if (fe) {
            if (E) {
              var mt,
                Ft = me === "y" ? ht : pt,
                Ht = me === "y" ? kt : Ot,
                ze = me === "y" ? "height" : "width",
                cn = fe[me],
                fn = cn + re[Ft],
                gi = cn - re[Ht],
                qe = ee ? -Se[ze] / 2 : 0,
                xe = be === Sr ? ve[ze] : Se[ze],
                gt = be === Sr ? -Se[ze] : -ve[ze],
                Bt = a.elements.arrow,
                Bn = ee && Bt ? yu(Bt) : { width: 0, height: 0 },
                Xs = a.modifiersData["arrow#persistent"]
                  ? a.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                cm = Xs[Ft],
                fm = Xs[Ht],
                Gs = ho(0, ve[ze], Bn[ze]),
                Sx = se
                  ? ve[ze] / 2 - qe - Gs - cm - Be.mainAxis
                  : xe - Gs - cm - Be.mainAxis,
                xx = se
                  ? -ve[ze] / 2 + qe + Gs + fm + Be.mainAxis
                  : gt + Gs + fm + Be.mainAxis,
                zu = a.elements.arrow && fo(a.elements.arrow),
                bx = zu
                  ? me === "y"
                    ? zu.clientTop || 0
                    : zu.clientLeft || 0
                  : 0,
                dm = (mt = Lt == null ? void 0 : Lt[me]) != null ? mt : 0,
                Cx = cn + xx - dm,
                hm = ho(
                  ee ? Is(fn, cn + Sx - dm - bx) : fn,
                  cn,
                  ee ? br(gi, Cx) : gi
                );
              (fe[me] = hm), (Jt[me] = hm - cn);
            }
            if (N) {
              var pm,
                Tx = me === "x" ? ht : pt,
                Ex = me === "x" ? kt : Ot,
                Lr = fe[oe],
                qs = oe === "y" ? "height" : "width",
                mm = Lr + re[Tx],
                gm = Lr - re[Ex],
                $u = [ht, pt].indexOf(_e) !== -1,
                vm = (pm = Lt == null ? void 0 : Lt[oe]) != null ? pm : 0,
                ym = $u ? mm : Lr - ve[qs] - Se[qs] - vm + Be.altAxis,
                wm = $u ? Lr + ve[qs] + Se[qs] - vm - Be.altAxis : gm,
                _m =
                  ee && $u
                    ? (function (Px, kx, Fu) {
                      var Sm = ho(Px, kx, Fu);
                      return Sm > Fu ? Fu : Sm;
                    })(ym, Lr, wm)
                    : ho(ee ? ym : mm, Lr, ee ? wm : gm);
              (fe[oe] = _m), (Jt[oe] = _m - Lr);
            }
            a.modifiersData[y] = Jt;
          }
        },
        requiresIfExists: ["offset"],
      };
    function QS(p, a, f) {
      f === void 0 && (f = !1);
      var y,
        C,
        E = zt(a),
        L =
          zt(a) &&
          (function (F) {
            var ie = F.getBoundingClientRect(),
              ee = ci(ie.width) / F.offsetWidth || 1,
              ne = ci(ie.height) / F.offsetHeight || 1;
            return ee !== 1 || ne !== 1;
          })(a),
        N = Fn(a),
        V = fi(p, L, f),
        H = { scrollLeft: 0, scrollTop: 0 },
        W = { x: 0, y: 0 };
      return (
        (E || (!E && !f)) &&
        ((ln(a) !== "body" || Cu(N)) &&
          (H =
            (y = a) !== jt(y) && zt(y)
              ? { scrollLeft: (C = y).scrollLeft, scrollTop: C.scrollTop }
              : xu(y)),
          zt(a)
            ? (((W = fi(a, !0)).x += a.clientLeft), (W.y += a.clientTop))
            : N && (W.x = bu(N))),
        {
          x: V.left + H.scrollLeft - W.x,
          y: V.top + H.scrollTop - W.y,
          width: V.width,
          height: V.height,
        }
      );
    }
    function YS(p) {
      var a = new Map(),
        f = new Set(),
        y = [];
      function C(E) {
        f.add(E.name),
          []
            .concat(E.requires || [], E.requiresIfExists || [])
            .forEach(function (L) {
              if (!f.has(L)) {
                var N = a.get(L);
                N && C(N);
              }
            }),
          y.push(E);
      }
      return (
        p.forEach(function (E) {
          a.set(E.name, E);
        }),
        p.forEach(function (E) {
          f.has(E.name) || C(E);
        }),
        y
      );
    }
    var Tp = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Ep() {
      for (var p = arguments.length, a = new Array(p), f = 0; f < p; f++)
        a[f] = arguments[f];
      return !a.some(function (y) {
        return !(y && typeof y.getBoundingClientRect == "function");
      });
    }
    function Fs(p) {
      p === void 0 && (p = {});
      var a = p,
        f = a.defaultModifiers,
        y = f === void 0 ? [] : f,
        C = a.defaultOptions,
        E = C === void 0 ? Tp : C;
      return function (L, N, V) {
        V === void 0 && (V = E);
        var H,
          W,
          F = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Tp, E),
            modifiersData: {},
            elements: { reference: L, popper: N },
            attributes: {},
            styles: {},
          },
          ie = [],
          ee = !1,
          ne = {
            state: F,
            setOptions: function (re) {
              var _e = typeof re == "function" ? re(F.options) : re;
              te(),
                (F.options = Object.assign({}, E, F.options, _e)),
                (F.scrollParents = {
                  reference: xr(L)
                    ? po(L)
                    : L.contextElement
                      ? po(L.contextElement)
                      : [],
                  popper: po(N),
                });
              var be,
                se,
                me = (function (oe) {
                  var fe = YS(oe);
                  return ap.reduce(function (ve, Se) {
                    return ve.concat(
                      fe.filter(function (ye) {
                        return ye.phase === Se;
                      })
                    );
                  }, []);
                })(
                  ((be = [].concat(y, F.options.modifiers)),
                    (se = be.reduce(function (oe, fe) {
                      var ve = oe[fe.name];
                      return (
                        (oe[fe.name] = ve
                          ? Object.assign({}, ve, fe, {
                            options: Object.assign({}, ve.options, fe.options),
                            data: Object.assign({}, ve.data, fe.data),
                          })
                          : fe),
                        oe
                      );
                    }, {})),
                    Object.keys(se).map(function (oe) {
                      return se[oe];
                    }))
                );
              return (
                (F.orderedModifiers = me.filter(function (oe) {
                  return oe.enabled;
                })),
                F.orderedModifiers.forEach(function (oe) {
                  var fe = oe.name,
                    ve = oe.options,
                    Se = ve === void 0 ? {} : ve,
                    ye = oe.effect;
                  if (typeof ye == "function") {
                    var Be = ye({
                      state: F,
                      name: fe,
                      instance: ne,
                      options: Se,
                    });
                    ie.push(Be || function () { });
                  }
                }),
                ne.update()
              );
            },
            forceUpdate: function () {
              if (!ee) {
                var re = F.elements,
                  _e = re.reference,
                  be = re.popper;
                if (Ep(_e, be)) {
                  (F.rects = {
                    reference: QS(_e, fo(be), F.options.strategy === "fixed"),
                    popper: yu(be),
                  }),
                    (F.reset = !1),
                    (F.placement = F.options.placement),
                    F.orderedModifiers.forEach(function (ye) {
                      return (F.modifiersData[ye.name] = Object.assign(
                        {},
                        ye.data
                      ));
                    });
                  for (var se = 0; se < F.orderedModifiers.length; se++)
                    if (F.reset !== !0) {
                      var me = F.orderedModifiers[se],
                        oe = me.fn,
                        fe = me.options,
                        ve = fe === void 0 ? {} : fe,
                        Se = me.name;
                      typeof oe == "function" &&
                        (F =
                          oe({
                            state: F,
                            options: ve,
                            name: Se,
                            instance: ne,
                          }) || F);
                    } else (F.reset = !1), (se = -1);
                }
              }
            },
            update:
              ((H = function () {
                return new Promise(function (re) {
                  ne.forceUpdate(), re(F);
                });
              }),
                function () {
                  return (
                    W ||
                    (W = new Promise(function (re) {
                      Promise.resolve().then(function () {
                        (W = void 0), re(H());
                      });
                    })),
                    W
                  );
                }),
            destroy: function () {
              te(), (ee = !0);
            },
          };
        if (!Ep(L, N)) return ne;
        function te() {
          ie.forEach(function (re) {
            return re();
          }),
            (ie = []);
        }
        return (
          ne.setOptions(V).then(function (re) {
            !ee && V.onFirstUpdate && V.onFirstUpdate(re);
          }),
          ne
        );
      };
    }
    var XS = Fs(),
      GS = Fs({ defaultModifiers: [Su, Eu, _u, gu] }),
      Pu = Fs({ defaultModifiers: [Su, Eu, _u, gu, bp, wp, Cp, hp, xp] });
    const Pp = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          afterMain: rp,
          afterRead: ep,
          afterWrite: sp,
          applyStyles: gu,
          arrow: hp,
          auto: Rs,
          basePlacements: ai,
          beforeMain: tp,
          beforeRead: Zh,
          beforeWrite: ip,
          bottom: kt,
          clippingParents: Gh,
          computeStyles: _u,
          createPopper: Pu,
          createPopperBase: XS,
          createPopperLite: GS,
          detectOverflow: hi,
          end: li,
          eventListeners: Su,
          flip: wp,
          hide: xp,
          left: pt,
          main: np,
          modifierPhases: ap,
          offset: bp,
          placements: pu,
          popper: ui,
          popperGenerator: Fs,
          popperOffsets: Eu,
          preventOverflow: Cp,
          read: Jh,
          reference: qh,
          right: Ot,
          start: Sr,
          top: ht,
          variationPlacements: hu,
          viewport: du,
          write: op,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
      kp = "dropdown",
      Cr = ".bs.dropdown",
      ku = ".data-api",
      qS = "ArrowUp",
      Op = "ArrowDown",
      ZS = `hide${Cr}`,
      JS = `hidden${Cr}`,
      e2 = `show${Cr}`,
      t2 = `shown${Cr}`,
      jp = `click${Cr}${ku}`,
      Lp = `keydown${Cr}${ku}`,
      n2 = `keyup${Cr}${ku}`,
      pi = "show",
      Tr = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      r2 = `${Tr}.${pi}`,
      Hs = ".dropdown-menu",
      i2 = P() ? "top-end" : "top-start",
      o2 = P() ? "top-start" : "top-end",
      s2 = P() ? "bottom-end" : "bottom-start",
      a2 = P() ? "bottom-start" : "bottom-end",
      l2 = P() ? "left-start" : "right-start",
      u2 = P() ? "right-start" : "left-start",
      c2 = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      f2 = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class Zt extends Ye {
      constructor(a, f) {
        super(a, f),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            q.next(this._element, Hs)[0] ||
            q.prev(this._element, Hs)[0] ||
            q.findOne(Hs, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return c2;
      }
      static get DefaultType() {
        return f2;
      }
      static get NAME() {
        return kp;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (d(this._element) || this._isShown()) return;
        const a = { relatedTarget: this._element };
        if (!O.trigger(this._element, e2, a).defaultPrevented) {
          if (
            (this._createPopper(),
              "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const f of [].concat(...document.body.children))
              O.on(f, "mouseover", m);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(pi),
            this._element.classList.add(pi),
            O.trigger(this._element, t2, a);
        }
      }
      hide() {
        if (d(this._element) || !this._isShown()) return;
        const a = { relatedTarget: this._element };
        this._completeHide(a);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(a) {
        if (!O.trigger(this._element, ZS, a).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const f of [].concat(...document.body.children))
              O.off(f, "mouseover", m);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(pi),
            this._element.classList.remove(pi),
            this._element.setAttribute("aria-expanded", "false"),
            Qe.removeDataAttribute(this._menu, "popper"),
            O.trigger(this._element, JS, a);
        }
      }
      _getConfig(a) {
        if (
          typeof (a = super._getConfig(a)).reference == "object" &&
          !l(a.reference) &&
          typeof a.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${kp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return a;
      }
      _createPopper() {
        if (Pp === void 0)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let a = this._element;
        this._config.reference === "parent"
          ? (a = this._parent)
          : l(this._config.reference)
            ? (a = u(this._config.reference))
            : typeof this._config.reference == "object" &&
            (a = this._config.reference);
        const f = this._getPopperConfig();
        this._popper = Pu(a, this._menu, f);
      }
      _isShown() {
        return this._menu.classList.contains(pi);
      }
      _getPlacement() {
        const a = this._parent;
        if (a.classList.contains("dropend")) return l2;
        if (a.classList.contains("dropstart")) return u2;
        if (a.classList.contains("dropup-center")) return "top";
        if (a.classList.contains("dropdown-center")) return "bottom";
        const f =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return a.classList.contains("dropup") ? (f ? o2 : i2) : f ? a2 : s2;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: a } = this._config;
        return typeof a == "string"
          ? a.split(",").map((f) => Number.parseInt(f, 10))
          : typeof a == "function"
            ? (f) => a(f, this._element)
            : a;
      }
      _getPopperConfig() {
        const a = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
          (Qe.setDataAttribute(this._menu, "popper", "static"),
            (a.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          { ...a, ...g(this._config.popperConfig, [a]) }
        );
      }
      _selectMenuItem({ key: a, target: f }) {
        const y = q
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          )
          .filter((C) => c(C));
        y.length && T(y, f, a === Op, !y.includes(f)).focus();
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = Zt.getOrCreateInstance(this, a);
          if (typeof a == "string") {
            if (f[a] === void 0) throw new TypeError(`No method named "${a}"`);
            f[a]();
          }
        });
      }
      static clearMenus(a) {
        if (a.button === 2 || (a.type === "keyup" && a.key !== "Tab")) return;
        const f = q.find(r2);
        for (const y of f) {
          const C = Zt.getInstance(y);
          if (!C || C._config.autoClose === !1) continue;
          const E = a.composedPath(),
            L = E.includes(C._menu);
          if (
            E.includes(C._element) ||
            (C._config.autoClose === "inside" && !L) ||
            (C._config.autoClose === "outside" && L) ||
            (C._menu.contains(a.target) &&
              ((a.type === "keyup" && a.key === "Tab") ||
                /input|select|option|textarea|form/i.test(a.target.tagName)))
          )
            continue;
          const N = { relatedTarget: C._element };
          a.type === "click" && (N.clickEvent = a), C._completeHide(N);
        }
      }
      static dataApiKeydownHandler(a) {
        const f = /input|textarea/i.test(a.target.tagName),
          y = a.key === "Escape",
          C = [qS, Op].includes(a.key);
        if ((!C && !y) || (f && !y)) return;
        a.preventDefault();
        const E = this.matches(Tr)
          ? this
          : q.prev(this, Tr)[0] ||
          q.next(this, Tr)[0] ||
          q.findOne(Tr, a.delegateTarget.parentNode),
          L = Zt.getOrCreateInstance(E);
        if (C) return a.stopPropagation(), L.show(), void L._selectMenuItem(a);
        L._isShown() && (a.stopPropagation(), L.hide(), E.focus());
      }
    }
    O.on(document, Lp, Tr, Zt.dataApiKeydownHandler),
      O.on(document, Lp, Hs, Zt.dataApiKeydownHandler),
      O.on(document, jp, Zt.clearMenus),
      O.on(document, n2, Zt.clearMenus),
      O.on(document, jp, Tr, function (p) {
        p.preventDefault(), Zt.getOrCreateInstance(this).toggle();
      }),
      w(Zt);
    const Mp = "backdrop",
      Ap = "show",
      Dp = `mousedown.bs.${Mp}`,
      d2 = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      h2 = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class Np extends dt {
      constructor(a) {
        super(),
          (this._config = this._getConfig(a)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return d2;
      }
      static get DefaultType() {
        return h2;
      }
      static get NAME() {
        return Mp;
      }
      show(a) {
        if (!this._config.isVisible) return void g(a);
        this._append();
        const f = this._getElement();
        this._config.isAnimated && S(f),
          f.classList.add(Ap),
          this._emulateAnimation(() => {
            g(a);
          });
      }
      hide(a) {
        this._config.isVisible
          ? (this._getElement().classList.remove(Ap),
            this._emulateAnimation(() => {
              this.dispose(), g(a);
            }))
          : g(a);
      }
      dispose() {
        this._isAppended &&
          (O.off(this._element, Dp),
            this._element.remove(),
            (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const a = document.createElement("div");
          (a.className = this._config.className),
            this._config.isAnimated && a.classList.add("fade"),
            (this._element = a);
        }
        return this._element;
      }
      _configAfterMerge(a) {
        return (a.rootElement = u(a.rootElement)), a;
      }
      _append() {
        if (this._isAppended) return;
        const a = this._getElement();
        this._config.rootElement.append(a),
          O.on(a, Dp, () => {
            g(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(a) {
        _(a, this._getElement(), this._config.isAnimated);
      }
    }
    const Bs = ".bs.focustrap",
      p2 = `focusin${Bs}`,
      m2 = `keydown.tab${Bs}`,
      Rp = "backward",
      g2 = { autofocus: !0, trapElement: null },
      v2 = { autofocus: "boolean", trapElement: "element" };
    class Ip extends dt {
      constructor(a) {
        super(),
          (this._config = this._getConfig(a)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return g2;
      }
      static get DefaultType() {
        return v2;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
            O.off(document, Bs),
            O.on(document, p2, (a) => this._handleFocusin(a)),
            O.on(document, m2, (a) => this._handleKeydown(a)),
            (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), O.off(document, Bs));
      }
      _handleFocusin(a) {
        const { trapElement: f } = this._config;
        if (a.target === document || a.target === f || f.contains(a.target))
          return;
        const y = q.focusableChildren(f);
        y.length === 0
          ? f.focus()
          : this._lastTabNavDirection === Rp
            ? y[y.length - 1].focus()
            : y[0].focus();
      }
      _handleKeydown(a) {
        a.key === "Tab" &&
          (this._lastTabNavDirection = a.shiftKey ? Rp : "forward");
      }
    }
    const Vp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      zp = ".sticky-top",
      Ws = "padding-right",
      $p = "margin-right";
    class Ou {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const a = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - a);
      }
      hide() {
        const a = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, Ws, (f) => f + a),
          this._setElementAttributes(Vp, Ws, (f) => f + a),
          this._setElementAttributes(zp, $p, (f) => f - a);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, Ws),
          this._resetElementAttributes(Vp, Ws),
          this._resetElementAttributes(zp, $p);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(a, f, y) {
        const C = this.getWidth();
        this._applyManipulationCallback(a, (E) => {
          if (E !== this._element && window.innerWidth > E.clientWidth + C)
            return;
          this._saveInitialAttribute(E, f);
          const L = window.getComputedStyle(E).getPropertyValue(f);
          E.style.setProperty(f, `${y(Number.parseFloat(L))}px`);
        });
      }
      _saveInitialAttribute(a, f) {
        const y = a.style.getPropertyValue(f);
        y && Qe.setDataAttribute(a, f, y);
      }
      _resetElementAttributes(a, f) {
        this._applyManipulationCallback(a, (y) => {
          const C = Qe.getDataAttribute(y, f);
          C !== null
            ? (Qe.removeDataAttribute(y, f), y.style.setProperty(f, C))
            : y.style.removeProperty(f);
        });
      }
      _applyManipulationCallback(a, f) {
        if (l(a)) f(a);
        else for (const y of q.find(a, this._element)) f(y);
      }
    }
    const $t = ".bs.modal",
      y2 = `hide${$t}`,
      w2 = `hidePrevented${$t}`,
      Fp = `hidden${$t}`,
      Hp = `show${$t}`,
      _2 = `shown${$t}`,
      S2 = `resize${$t}`,
      x2 = `click.dismiss${$t}`,
      b2 = `mousedown.dismiss${$t}`,
      C2 = `keydown.dismiss${$t}`,
      T2 = `click${$t}.data-api`,
      Bp = "modal-open",
      Wp = "show",
      ju = "modal-static",
      E2 = { backdrop: !0, focus: !0, keyboard: !0 },
      P2 = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class Er extends Ye {
      constructor(a, f) {
        super(a, f),
          (this._dialog = q.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new Ou()),
          this._addEventListeners();
      }
      static get Default() {
        return E2;
      }
      static get DefaultType() {
        return P2;
      }
      static get NAME() {
        return "modal";
      }
      toggle(a) {
        return this._isShown ? this.hide() : this.show(a);
      }
      show(a) {
        this._isShown ||
          this._isTransitioning ||
          O.trigger(this._element, Hp, { relatedTarget: a }).defaultPrevented ||
          ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(Bp),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(a)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (O.trigger(this._element, y2).defaultPrevented ||
            ((this._isShown = !1),
              (this._isTransitioning = !0),
              this._focustrap.deactivate(),
              this._element.classList.remove(Wp),
              this._queueCallback(
                () => this._hideModal(),
                this._element,
                this._isAnimated()
              )));
      }
      dispose() {
        O.off(window, $t),
          O.off(this._dialog, $t),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Np({
          isVisible: !!this._config.backdrop,
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new Ip({ trapElement: this._element });
      }
      _showElement(a) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const f = q.findOne(".modal-body", this._dialog);
        f && (f.scrollTop = 0),
          S(this._element),
          this._element.classList.add(Wp),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                O.trigger(this._element, _2, { relatedTarget: a });
            },
            this._dialog,
            this._isAnimated()
          );
      }
      _addEventListeners() {
        O.on(this._element, C2, (a) => {
          a.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : this._triggerBackdropTransition());
        }),
          O.on(window, S2, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          O.on(this._element, b2, (a) => {
            O.one(this._element, x2, (f) => {
              this._element === a.target &&
                this._element === f.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(Bp),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              O.trigger(this._element, Fp);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (O.trigger(this._element, w2).defaultPrevented) return;
        const a =
          this._element.scrollHeight > document.documentElement.clientHeight,
          f = this._element.style.overflowY;
        f === "hidden" ||
          this._element.classList.contains(ju) ||
          (a || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(ju),
            this._queueCallback(() => {
              this._element.classList.remove(ju),
                this._queueCallback(() => {
                  this._element.style.overflowY = f;
                }, this._dialog);
            }, this._dialog),
            this._element.focus());
      }
      _adjustDialog() {
        const a =
          this._element.scrollHeight > document.documentElement.clientHeight,
          f = this._scrollBar.getWidth(),
          y = f > 0;
        if (y && !a) {
          const C = P() ? "paddingLeft" : "paddingRight";
          this._element.style[C] = `${f}px`;
        }
        if (!y && a) {
          const C = P() ? "paddingRight" : "paddingLeft";
          this._element.style[C] = `${f}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(a, f) {
        return this.each(function () {
          const y = Er.getOrCreateInstance(this, a);
          if (typeof a == "string") {
            if (y[a] === void 0) throw new TypeError(`No method named "${a}"`);
            y[a](f);
          }
        });
      }
    }
    O.on(document, T2, '[data-bs-toggle="modal"]', function (p) {
      const a = q.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && p.preventDefault(),
        O.one(a, Hp, (y) => {
          y.defaultPrevented ||
            O.one(a, Fp, () => {
              c(this) && this.focus();
            });
        });
      const f = q.findOne(".modal.show");
      f && Er.getInstance(f).hide(), Er.getOrCreateInstance(a).toggle(this);
    }),
      Ls(Er),
      w(Er);
    const Sn = ".bs.offcanvas",
      Up = ".data-api",
      k2 = `load${Sn}${Up}`,
      Kp = "show",
      Qp = "showing",
      Yp = "hiding",
      Xp = ".offcanvas.show",
      O2 = `show${Sn}`,
      j2 = `shown${Sn}`,
      L2 = `hide${Sn}`,
      Gp = `hidePrevented${Sn}`,
      qp = `hidden${Sn}`,
      M2 = `resize${Sn}`,
      A2 = `click${Sn}${Up}`,
      D2 = `keydown.dismiss${Sn}`,
      N2 = { backdrop: !0, keyboard: !0, scroll: !1 },
      R2 = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class xn extends Ye {
      constructor(a, f) {
        super(a, f),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return N2;
      }
      static get DefaultType() {
        return R2;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(a) {
        return this._isShown ? this.hide() : this.show(a);
      }
      show(a) {
        this._isShown ||
          O.trigger(this._element, O2, { relatedTarget: a }).defaultPrevented ||
          ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new Ou().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Qp),
            this._queueCallback(
              () => {
                (this._config.scroll && !this._config.backdrop) ||
                  this._focustrap.activate(),
                  this._element.classList.add(Kp),
                  this._element.classList.remove(Qp),
                  O.trigger(this._element, j2, { relatedTarget: a });
              },
              this._element,
              !0
            ));
      }
      hide() {
        this._isShown &&
          (O.trigger(this._element, L2).defaultPrevented ||
            (this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = !1),
              this._element.classList.add(Yp),
              this._backdrop.hide(),
              this._queueCallback(
                () => {
                  this._element.classList.remove(Kp, Yp),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._config.scroll || new Ou().reset(),
                    O.trigger(this._element, qp);
                },
                this._element,
                !0
              )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const a = !!this._config.backdrop;
        return new Np({
          className: "offcanvas-backdrop",
          isVisible: a,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: a
            ? () => {
              this._config.backdrop !== "static"
                ? this.hide()
                : O.trigger(this._element, Gp);
            }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new Ip({ trapElement: this._element });
      }
      _addEventListeners() {
        O.on(this._element, D2, (a) => {
          a.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : O.trigger(this._element, Gp));
        });
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = xn.getOrCreateInstance(this, a);
          if (typeof a == "string") {
            if (f[a] === void 0 || a.startsWith("_") || a === "constructor")
              throw new TypeError(`No method named "${a}"`);
            f[a](this);
          }
        });
      }
    }
    O.on(document, A2, '[data-bs-toggle="offcanvas"]', function (p) {
      const a = q.getElementFromSelector(this);
      if ((["A", "AREA"].includes(this.tagName) && p.preventDefault(), d(this)))
        return;
      O.one(a, qp, () => {
        c(this) && this.focus();
      });
      const f = q.findOne(Xp);
      f && f !== a && xn.getInstance(f).hide(),
        xn.getOrCreateInstance(a).toggle(this);
    }),
      O.on(window, k2, () => {
        for (const p of q.find(Xp)) xn.getOrCreateInstance(p).show();
      }),
      O.on(window, M2, () => {
        for (const p of q.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(p).position !== "fixed" &&
            xn.getOrCreateInstance(p).hide();
      }),
      Ls(xn),
      w(xn);
    const Zp = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      dd: [],
      div: [],
      dl: [],
      dt: [],
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
      ul: [],
    },
      I2 = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      V2 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      z2 = (p, a) => {
        const f = p.nodeName.toLowerCase();
        return a.includes(f)
          ? !I2.has(f) || !!V2.test(p.nodeValue)
          : a.filter((y) => y instanceof RegExp).some((y) => y.test(f));
      },
      $2 = {
        allowList: Zp,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      F2 = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      H2 = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class B2 extends dt {
      constructor(a) {
        super(), (this._config = this._getConfig(a));
      }
      static get Default() {
        return $2;
      }
      static get DefaultType() {
        return F2;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((a) => this._resolvePossibleFunction(a))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(a) {
        return (
          this._checkContent(a),
          (this._config.content = { ...this._config.content, ...a }),
          this
        );
      }
      toHtml() {
        const a = document.createElement("div");
        a.innerHTML = this._maybeSanitize(this._config.template);
        for (const [C, E] of Object.entries(this._config.content))
          this._setContent(a, E, C);
        const f = a.children[0],
          y = this._resolvePossibleFunction(this._config.extraClass);
        return y && f.classList.add(...y.split(" ")), f;
      }
      _typeCheckConfig(a) {
        super._typeCheckConfig(a), this._checkContent(a.content);
      }
      _checkContent(a) {
        for (const [f, y] of Object.entries(a))
          super._typeCheckConfig({ selector: f, entry: y }, H2);
      }
      _setContent(a, f, y) {
        const C = q.findOne(y, a);
        C &&
          ((f = this._resolvePossibleFunction(f))
            ? l(f)
              ? this._putElementInTemplate(u(f), C)
              : this._config.html
                ? (C.innerHTML = this._maybeSanitize(f))
                : (C.textContent = f)
            : C.remove());
      }
      _maybeSanitize(a) {
        return this._config.sanitize
          ? (function (f, y, C) {
            if (!f.length) return f;
            if (C && typeof C == "function") return C(f);
            const E = new window.DOMParser().parseFromString(f, "text/html"),
              L = [].concat(...E.body.querySelectorAll("*"));
            for (const N of L) {
              const V = N.nodeName.toLowerCase();
              if (!Object.keys(y).includes(V)) {
                N.remove();
                continue;
              }
              const H = [].concat(...N.attributes),
                W = [].concat(y["*"] || [], y[V] || []);
              for (const F of H) z2(F, W) || N.removeAttribute(F.nodeName);
            }
            return E.body.innerHTML;
          })(a, this._config.allowList, this._config.sanitizeFn)
          : a;
      }
      _resolvePossibleFunction(a) {
        return g(a, [this]);
      }
      _putElementInTemplate(a, f) {
        if (this._config.html) return (f.innerHTML = ""), void f.append(a);
        f.textContent = a.textContent;
      }
    }
    const W2 = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Lu = "fade",
      Us = "show",
      Jp = ".modal",
      em = "hide.bs.modal",
      mo = "hover",
      Mu = "focus",
      U2 = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: P() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: P() ? "right" : "left",
      },
      K2 = {
        allowList: Zp,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      Q2 = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class Pr extends Ye {
      constructor(a, f) {
        if (Pp === void 0)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(a, f),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return K2;
      }
      static get DefaultType() {
        return Q2;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click),
            this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          O.off(this._element.closest(Jp), em, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const a = O.trigger(this._element, this.constructor.eventName("show")),
          f = (
            h(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (a.defaultPrevented || !f) return;
        this._disposePopper();
        const y = this._getTipElement();
        this._element.setAttribute("aria-describedby", y.getAttribute("id"));
        const { container: C } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (C.append(y),
              O.trigger(this._element, this.constructor.eventName("inserted"))),
            (this._popper = this._createPopper(y)),
            y.classList.add(Us),
            "ontouchstart" in document.documentElement)
        )
          for (const E of [].concat(...document.body.children))
            O.on(E, "mouseover", m);
        this._queueCallback(
          () => {
            O.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated()
        );
      }
      hide() {
        if (
          this._isShown() &&
          !O.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        ) {
          if (
            (this._getTipElement().classList.remove(Us),
              "ontouchstart" in document.documentElement)
          )
            for (const a of [].concat(...document.body.children))
              O.off(a, "mouseover", m);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[Mu] = !1),
            (this._activeTrigger[mo] = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    O.trigger(
                      this._element,
                      this.constructor.eventName("hidden")
                    ));
              },
              this.tip,
              this._isAnimated()
            );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return (
          this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
          this.tip
        );
      }
      _createTipElement(a) {
        const f = this._getTemplateFactory(a).toHtml();
        if (!f) return null;
        f.classList.remove(Lu, Us),
          f.classList.add(`bs-${this.constructor.NAME}-auto`);
        const y = ((C) => {
          do C += Math.floor(1e6 * Math.random());
          while (document.getElementById(C));
          return C;
        })(this.constructor.NAME).toString();
        return (
          f.setAttribute("id", y), this._isAnimated() && f.classList.add(Lu), f
        );
      }
      setContent(a) {
        (this._newContent = a),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(a) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(a)
            : (this._templateFactory = new B2({
              ...this._config,
              content: a,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(a) {
        return this.constructor.getOrCreateInstance(
          a.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(Lu))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Us);
      }
      _createPopper(a) {
        const f = g(this._config.placement, [this, a, this._element]),
          y = U2[f.toUpperCase()];
        return Pu(this._element, a, this._getPopperConfig(y));
      }
      _getOffset() {
        const { offset: a } = this._config;
        return typeof a == "string"
          ? a.split(",").map((f) => Number.parseInt(f, 10))
          : typeof a == "function"
            ? (f) => a(f, this._element)
            : a;
      }
      _resolvePossibleFunction(a) {
        return g(a, [this._element]);
      }
      _getPopperConfig(a) {
        const f = {
          placement: a,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (y) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  y.state.placement
                );
              },
            },
          ],
        };
        return { ...f, ...g(this._config.popperConfig, [f]) };
      }
      _setListeners() {
        const a = this._config.trigger.split(" ");
        for (const f of a)
          if (f === "click")
            O.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (y) => {
                this._initializeOnDelegatedTarget(y).toggle();
              }
            );
          else if (f !== "manual") {
            const y =
              f === mo
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
              C =
                f === mo
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            O.on(this._element, y, this._config.selector, (E) => {
              const L = this._initializeOnDelegatedTarget(E);
              (L._activeTrigger[E.type === "focusin" ? Mu : mo] = !0),
                L._enter();
            }),
              O.on(this._element, C, this._config.selector, (E) => {
                const L = this._initializeOnDelegatedTarget(E);
                (L._activeTrigger[E.type === "focusout" ? Mu : mo] =
                  L._element.contains(E.relatedTarget)),
                  L._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          O.on(this._element.closest(Jp), em, this._hideModalHandler);
      }
      _fixTitle() {
        const a = this._element.getAttribute("title");
        a &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", a),
            this._element.setAttribute("data-bs-original-title", a),
            this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
      }
      _setTimeout(a, f) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(a, f));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(a) {
        const f = Qe.getDataAttributes(this._element);
        for (const y of Object.keys(f)) W2.has(y) && delete f[y];
        return (
          (a = { ...f, ...(typeof a == "object" && a ? a : {}) }),
          (a = this._mergeConfigObj(a)),
          (a = this._configAfterMerge(a)),
          this._typeCheckConfig(a),
          a
        );
      }
      _configAfterMerge(a) {
        return (
          (a.container = a.container === !1 ? document.body : u(a.container)),
          typeof a.delay == "number" &&
          (a.delay = { show: a.delay, hide: a.delay }),
          typeof a.title == "number" && (a.title = a.title.toString()),
          typeof a.content == "number" && (a.content = a.content.toString()),
          a
        );
      }
      _getDelegateConfig() {
        const a = {};
        for (const [f, y] of Object.entries(this._config))
          this.constructor.Default[f] !== y && (a[f] = y);
        return (a.selector = !1), (a.trigger = "manual"), a;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = Pr.getOrCreateInstance(this, a);
          if (typeof a == "string") {
            if (f[a] === void 0) throw new TypeError(`No method named "${a}"`);
            f[a]();
          }
        });
      }
    }
    w(Pr);
    const Y2 = {
      ...Pr.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
      X2 = { ...Pr.DefaultType, content: "(null|string|element|function)" };
    class Ks extends Pr {
      static get Default() {
        return Y2;
      }
      static get DefaultType() {
        return X2;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = Ks.getOrCreateInstance(this, a);
          if (typeof a == "string") {
            if (f[a] === void 0) throw new TypeError(`No method named "${a}"`);
            f[a]();
          }
        });
      }
    }
    w(Ks);
    const Au = ".bs.scrollspy",
      G2 = `activate${Au}`,
      tm = `click${Au}`,
      q2 = `load${Au}.data-api`,
      mi = "active",
      Du = "[href]",
      nm = ".nav-link",
      Z2 = `${nm}, .nav-item > ${nm}, .list-group-item`,
      J2 = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      ex = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class go extends Ye {
      constructor(a, f) {
        super(a, f),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return J2;
      }
      static get DefaultType() {
        return ex;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const a of this._observableSections.values())
          this._observer.observe(a);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(a) {
        return (
          (a.target = u(a.target) || document.body),
          (a.rootMargin = a.offset ? `${a.offset}px 0px -30%` : a.rootMargin),
          typeof a.threshold == "string" &&
          (a.threshold = a.threshold
            .split(",")
            .map((f) => Number.parseFloat(f))),
          a
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (O.off(this._config.target, tm),
            O.on(this._config.target, tm, Du, (a) => {
              const f = this._observableSections.get(a.target.hash);
              if (f) {
                a.preventDefault();
                const y = this._rootElement || window,
                  C = f.offsetTop - this._element.offsetTop;
                if (y.scrollTo)
                  return void y.scrollTo({ top: C, behavior: "smooth" });
                y.scrollTop = C;
              }
            }));
      }
      _getNewObserver() {
        const a = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((f) => this._observerCallback(f), a);
      }
      _observerCallback(a) {
        const f = (L) => this._targetLinks.get(`#${L.target.id}`),
          y = (L) => {
            (this._previousScrollData.visibleEntryTop = L.target.offsetTop),
              this._process(f(L));
          },
          C = (this._rootElement || document.documentElement).scrollTop,
          E = C >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = C;
        for (const L of a) {
          if (!L.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(f(L));
            continue;
          }
          const N =
            L.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (E && N) {
            if ((y(L), !C)) return;
          } else E || N || y(L);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const a = q.find(Du, this._config.target);
        for (const f of a) {
          if (!f.hash || d(f)) continue;
          const y = q.findOne(decodeURI(f.hash), this._element);
          c(y) &&
            (this._targetLinks.set(decodeURI(f.hash), f),
              this._observableSections.set(f.hash, y));
        }
      }
      _process(a) {
        this._activeTarget !== a &&
          (this._clearActiveClass(this._config.target),
            (this._activeTarget = a),
            a.classList.add(mi),
            this._activateParents(a),
            O.trigger(this._element, G2, { relatedTarget: a }));
      }
      _activateParents(a) {
        if (a.classList.contains("dropdown-item"))
          q.findOne(".dropdown-toggle", a.closest(".dropdown")).classList.add(
            mi
          );
        else
          for (const f of q.parents(a, ".nav, .list-group"))
            for (const y of q.prev(f, Z2)) y.classList.add(mi);
      }
      _clearActiveClass(a) {
        a.classList.remove(mi);
        const f = q.find(`${Du}.${mi}`, a);
        for (const y of f) y.classList.remove(mi);
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = go.getOrCreateInstance(this, a);
          if (typeof a == "string") {
            if (f[a] === void 0 || a.startsWith("_") || a === "constructor")
              throw new TypeError(`No method named "${a}"`);
            f[a]();
          }
        });
      }
    }
    O.on(window, q2, () => {
      for (const p of q.find('[data-bs-spy="scroll"]'))
        go.getOrCreateInstance(p);
    }),
      w(go);
    const kr = ".bs.tab",
      tx = `hide${kr}`,
      nx = `hidden${kr}`,
      rx = `show${kr}`,
      ix = `shown${kr}`,
      ox = `click${kr}`,
      sx = `keydown${kr}`,
      ax = `load${kr}`,
      lx = "ArrowLeft",
      rm = "ArrowRight",
      ux = "ArrowUp",
      im = "ArrowDown",
      Nu = "Home",
      om = "End",
      Or = "active",
      sm = "fade",
      Ru = "show",
      am = ".dropdown-toggle",
      Iu = `:not(${am})`,
      lm =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Vu = `.nav-link${Iu}, .list-group-item${Iu}, [role="tab"]${Iu}, ${lm}`,
      cx = `.${Or}[data-bs-toggle="tab"], .${Or}[data-bs-toggle="pill"], .${Or}[data-bs-toggle="list"]`;
    class jr extends Ye {
      constructor(a) {
        super(a),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]'
          )),
          this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
            O.on(this._element, sx, (f) => this._keydown(f)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const a = this._element;
        if (this._elemIsActive(a)) return;
        const f = this._getActiveElem(),
          y = f ? O.trigger(f, tx, { relatedTarget: a }) : null;
        O.trigger(a, rx, { relatedTarget: f }).defaultPrevented ||
          (y && y.defaultPrevented) ||
          (this._deactivate(f, a), this._activate(a, f));
      }
      _activate(a, f) {
        a &&
          (a.classList.add(Or),
            this._activate(q.getElementFromSelector(a)),
            this._queueCallback(
              () => {
                a.getAttribute("role") === "tab"
                  ? (a.removeAttribute("tabindex"),
                    a.setAttribute("aria-selected", !0),
                    this._toggleDropDown(a, !0),
                    O.trigger(a, ix, { relatedTarget: f }))
                  : a.classList.add(Ru);
              },
              a,
              a.classList.contains(sm)
            ));
      }
      _deactivate(a, f) {
        a &&
          (a.classList.remove(Or),
            a.blur(),
            this._deactivate(q.getElementFromSelector(a)),
            this._queueCallback(
              () => {
                a.getAttribute("role") === "tab"
                  ? (a.setAttribute("aria-selected", !1),
                    a.setAttribute("tabindex", "-1"),
                    this._toggleDropDown(a, !1),
                    O.trigger(a, nx, { relatedTarget: f }))
                  : a.classList.remove(Ru);
              },
              a,
              a.classList.contains(sm)
            ));
      }
      _keydown(a) {
        if (![lx, rm, ux, im, Nu, om].includes(a.key)) return;
        a.stopPropagation(), a.preventDefault();
        const f = this._getChildren().filter((C) => !d(C));
        let y;
        if ([Nu, om].includes(a.key)) y = f[a.key === Nu ? 0 : f.length - 1];
        else {
          const C = [rm, im].includes(a.key);
          y = T(f, a.target, C, !0);
        }
        y && (y.focus({ preventScroll: !0 }), jr.getOrCreateInstance(y).show());
      }
      _getChildren() {
        return q.find(Vu, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((a) => this._elemIsActive(a)) || null;
      }
      _setInitialAttributes(a, f) {
        this._setAttributeIfNotExists(a, "role", "tablist");
        for (const y of f) this._setInitialAttributesOnChild(y);
      }
      _setInitialAttributesOnChild(a) {
        a = this._getInnerElement(a);
        const f = this._elemIsActive(a),
          y = this._getOuterElement(a);
        a.setAttribute("aria-selected", f),
          y !== a && this._setAttributeIfNotExists(y, "role", "presentation"),
          f || a.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(a, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(a);
      }
      _setInitialAttributesOnTargetPanel(a) {
        const f = q.getElementFromSelector(a);
        f &&
          (this._setAttributeIfNotExists(f, "role", "tabpanel"),
            a.id &&
            this._setAttributeIfNotExists(f, "aria-labelledby", `${a.id}`));
      }
      _toggleDropDown(a, f) {
        const y = this._getOuterElement(a);
        if (!y.classList.contains("dropdown")) return;
        const C = (E, L) => {
          const N = q.findOne(E, y);
          N && N.classList.toggle(L, f);
        };
        C(am, Or), C(".dropdown-menu", Ru), y.setAttribute("aria-expanded", f);
      }
      _setAttributeIfNotExists(a, f, y) {
        a.hasAttribute(f) || a.setAttribute(f, y);
      }
      _elemIsActive(a) {
        return a.classList.contains(Or);
      }
      _getInnerElement(a) {
        return a.matches(Vu) ? a : q.findOne(Vu, a);
      }
      _getOuterElement(a) {
        return a.closest(".nav-item, .list-group-item") || a;
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = jr.getOrCreateInstance(this);
          if (typeof a == "string") {
            if (f[a] === void 0 || a.startsWith("_") || a === "constructor")
              throw new TypeError(`No method named "${a}"`);
            f[a]();
          }
        });
      }
    }
    O.on(document, ox, lm, function (p) {
      ["A", "AREA"].includes(this.tagName) && p.preventDefault(),
        d(this) || jr.getOrCreateInstance(this).show();
    }),
      O.on(window, ax, () => {
        for (const p of q.find(cx)) jr.getOrCreateInstance(p);
      }),
      w(jr);
    const Hn = ".bs.toast",
      fx = `mouseover${Hn}`,
      dx = `mouseout${Hn}`,
      hx = `focusin${Hn}`,
      px = `focusout${Hn}`,
      mx = `hide${Hn}`,
      gx = `hidden${Hn}`,
      vx = `show${Hn}`,
      yx = `shown${Hn}`,
      um = "hide",
      Qs = "show",
      Ys = "showing",
      wx = { animation: "boolean", autohide: "boolean", delay: "number" },
      _x = { animation: !0, autohide: !0, delay: 5e3 };
    class vo extends Ye {
      constructor(a, f) {
        super(a, f),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return _x;
      }
      static get DefaultType() {
        return wx;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        O.trigger(this._element, vx).defaultPrevented ||
          (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(um),
            S(this._element),
            this._element.classList.add(Qs, Ys),
            this._queueCallback(
              () => {
                this._element.classList.remove(Ys),
                  O.trigger(this._element, yx),
                  this._maybeScheduleHide();
              },
              this._element,
              this._config.animation
            ));
      }
      hide() {
        this.isShown() &&
          (O.trigger(this._element, mx).defaultPrevented ||
            (this._element.classList.add(Ys),
              this._queueCallback(
                () => {
                  this._element.classList.add(um),
                    this._element.classList.remove(Ys, Qs),
                    O.trigger(this._element, gx);
                },
                this._element,
                this._config.animation
              )));
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(Qs),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(Qs);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(a, f) {
        switch (a.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = f;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = f;
        }
        if (f) return void this._clearTimeout();
        const y = a.relatedTarget;
        this._element === y ||
          this._element.contains(y) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        O.on(this._element, fx, (a) => this._onInteraction(a, !0)),
          O.on(this._element, dx, (a) => this._onInteraction(a, !1)),
          O.on(this._element, hx, (a) => this._onInteraction(a, !0)),
          O.on(this._element, px, (a) => this._onInteraction(a, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(a) {
        return this.each(function () {
          const f = vo.getOrCreateInstance(this, a);
          if (typeof a == "string") {
            if (f[a] === void 0) throw new TypeError(`No method named "${a}"`);
            f[a](this);
          }
        });
      }
    }
    return (
      Ls(vo),
      w(vo),
      {
        Alert: ao,
        Button: lo,
        Carousel: ii,
        Collapse: si,
        Dropdown: Zt,
        Modal: Er,
        Offcanvas: xn,
        Popover: Ks,
        ScrollSpy: go,
        Tab: jr,
        Toast: vo,
        Tooltip: Pr,
      }
    );
  });
})(d5);
Bc.createRoot(document.getElementById("root")).render(
  v.jsx(ue.StrictMode, { children: v.jsx(f5, {}) })
);
