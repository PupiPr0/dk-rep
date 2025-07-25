!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self)["lottie-player"] = {})
}(this, (function(exports) {
    "use strict";
    function ownKeys(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))),
            i.push.apply(i, r)
        }
        return i
    }
    function _objectSpread2(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ownKeys(Object(i), !0).forEach((function(e) {
                _defineProperty(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
        }
        return t
    }
    function asyncGeneratorStep(t, e, i, r, a, s, n) {
        try {
            var o = t[s](n),
                h = o.value
        } catch (t) {
            return void i(t)
        }
        o.done ? e(h) : Promise.resolve(h).then(r, a)
    }
    function _asyncToGenerator(t) {
        return function() {
            var e = this,
                i = arguments;
            return new Promise((function(r, a) {
                var s = t.apply(e, i);
                function n(t) {
                    asyncGeneratorStep(s, r, a, n, o, "next", t)
                }
                function o(t) {
                    asyncGeneratorStep(s, r, a, n, o, "throw", t)
                }
                n(void 0)
            }))
        }
    }
    function _defineProperty(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }
    function _taggedTemplateLiteral(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
            raw: {
                value: Object.freeze(e)
            }
        }))
    }
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    function __decorate(t, e, i, r) {
        var a,
            s = arguments.length,
            n = s < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            n = Reflect.decorate(t, e, i, r);
        else
            for (var o = t.length - 1; o >= 0; o--)
                (a = t[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(e, i, n) : a(e, i)) || n);
        return s > 3 && n && Object.defineProperty(e, i, n), n




    }
    /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
    var n$5 = t => e => "function" == typeof e ? ((t, e) => (window.customElements.define(t, e), e))(t, e) : ((t, e) => {
            var {kind: i, elements: r} = e;
            return {
                kind: i,
                elements: r,
                finisher(e) {
                    window.customElements.define(t, e)
                }
            }
        })(t, e)




        ,
        /**
           * @license
           * Copyright 2017 Google LLC
           * SPDX-License-Identifier: BSD-3-Clause
           */
        i$3 = (t, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? _objectSpread2(_objectSpread2({}, e), {}, {
            finisher(i) {
                i.createProperty(e.key, t)
            }
        }) : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: e.key,
            initializer() {
                "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
            },
            finisher(i) {
                i.createProperty(e.key, t)
            }
        };
    function e$3(t) {
        return (e, i) => void 0 !== i ? ((t, e, i) => {
            e.constructor.createProperty(i, t)
        })(t, e, i) : i$3(t, e)
    }
    /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
    var o$4 = t => {
            var {finisher: e, descriptor: i} = t;
            return (t, r) => {
                var a;
                if (void 0 === r) {
                    var s = null !== (a = t.originalKey) && void 0 !== a ? a : t.key,
                        n = null != i ? {
                            kind: "method",
                            placement: "prototype",
                            key: s,
                            descriptor: i(t.key)
                        } : _objectSpread2(_objectSpread2({}, t), {}, {
                            key: s
                        });
                    return null != e && (n.finisher = function(t) {
                        e(t, s)
                    }), n
                }
                var o = t.constructor;
                void 0 !== i && Object.defineProperty(t, r, i(r)),
                null == e || e(o, r)
            }
        },
        n$4;
    /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
    function i$2(t, e) {
        return o$4({
            descriptor: i => {
                var r = {
                    get() {
                        var e,
                            i;
                        return null !== (i = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(t)) && void 0 !== i ? i : null
                    },
                    enumerable: !0,
                    configurable: !0
                };
                if (e) {
                    var a = "symbol" == typeof i ? Symbol() : "__" + i;
                    r.get = function() {
                        var e,
                            i;
                        return void 0 === this[a] && (this[a] = null !== (i = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(t)) && void 0 !== i ? i : null), this[a]
                    }
                }
                return r
            }
        })
    }
    /**
       * @license
       * Copyright 2021 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
    null === (n$4 = window.HTMLSlotElement) || void 0 === n$4 || n$4.prototype.assignedElements;
    /*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    var Z_FIXED$1 = 4,
        Z_BINARY = 0,
        Z_TEXT = 1,
        Z_UNKNOWN$1 = 2;
    function zero$1(t) {
        for (var e = t.length; --e >= 0;)
            t[e] = 0
    }
    var STORED_BLOCK = 0,
        STATIC_TREES = 1,
        DYN_TREES = 2,
        MIN_MATCH$1 = 3,
        MAX_MATCH$1 = 258,
        LENGTH_CODES$1 = 29,
        LITERALS$1 = 256,
        L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1,
        D_CODES$1 = 30,
        BL_CODES$1 = 19,
        HEAP_SIZE$1 = 2 * L_CODES$1 + 1,
        MAX_BITS$1 = 15,
        Buf_size = 16,
        MAX_BL_BITS = 7,
        END_BLOCK = 256,
        REP_3_6 = 16,
        REPZ_3_10 = 17,
        REPZ_11_138 = 18,
        extra_lbits = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
        extra_dbits = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
        extra_blbits = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
        bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        DIST_CODE_LEN = 512,
        static_ltree = new Array(2 * (L_CODES$1 + 2));
    zero$1(static_ltree);
    var static_dtree = new Array(2 * D_CODES$1);
    zero$1(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero$1(_dist_code);
    var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
    zero$1(_length_code);
    var base_length = new Array(LENGTH_CODES$1);
    zero$1(base_length);
    var base_dist = new Array(D_CODES$1),
        static_l_desc,
        static_d_desc,
        static_bl_desc;
    function StaticTreeDesc(t, e, i, r, a) {
        this.static_tree = t,
        this.extra_bits = e,
        this.extra_base = i,
        this.elems = r,
        this.max_length = a,
        this.has_stree = t && t.length
    }
    function TreeDesc(t, e) {
        this.dyn_tree = t,
        this.max_code = 0,
        this.stat_desc = e
    }
    zero$1(base_dist);
    var d_code = t => t < 256 ? _dist_code[t] : _dist_code[256 + (t >>> 7)],
        put_short = (t, e) => {
            t.pending_buf[t.pending++] = 255 & e,
            t.pending_buf[t.pending++] = e >>> 8 & 255
        },
        send_bits = (t, e, i) => {
            t.bi_valid > Buf_size - i ? (t.bi_buf |= e << t.bi_valid & 65535, put_short(t, t.bi_buf), t.bi_buf = e >> Buf_size - t.bi_valid, t.bi_valid += i - Buf_size) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += i)
        },
        send_code = (t, e, i) => {
            send_bits(t, i[2 * e], i[2 * e + 1])
        },
        bi_reverse = (t, e) => {
            var i = 0;
            do {
                i |= 1 & t,
                t >>>= 1,
                i <<= 1
            } while (--e > 0);
            return i >>> 1
        },
        bi_flush = t => {
            16 === t.bi_valid ? (put_short(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
        },
        gen_bitlen = (t, e) => {
            var i,
                r,
                a,
                s,
                n,
                o,
                h = e.dyn_tree,
                l = e.max_code,
                p = e.stat_desc.static_tree,
                f = e.stat_desc.has_stree,
                c = e.stat_desc.extra_bits,
                d = e.stat_desc.extra_base,
                m = e.stat_desc.max_length,
                u = 0;
            for (s = 0; s <= MAX_BITS$1; s++)
                t.bl_count[s] = 0;
            for (h[2 * t.heap[t.heap_max] + 1] = 0, i = t.heap_max + 1; i < HEAP_SIZE$1; i++)
                (s = h[2 * h[2 * (r = t.heap[i]) + 1] + 1] + 1) > m && (s = m, u++),
                h[2 * r + 1] = s,
                r > l || (t.bl_count[s]++, n = 0, r >= d && (n = c[r - d]), o = h[2 * r], t.opt_len += o * (s + n), f && (t.static_len += o * (p[2 * r + 1] + n)));
            if (0 !== u) {
                do {
                    for (s = m - 1; 0 === t.bl_count[s];)
                        s--;
                    t.bl_count[s]--,
                    t.bl_count[s + 1] += 2,
                    t.bl_count[m]--,
                    u -= 2
                } while (u > 0);
                for (s = m; 0 !== s; s--)
                    for (r = t.bl_count[s]; 0 !== r;)
                        (a = t.heap[--i]) > l || (h[2 * a + 1] !== s && (t.opt_len += (s - h[2 * a + 1]) * h[2 * a], h[2 * a + 1] = s), r--)
            }
        },
        gen_codes = (t, e, i) => {
            var r,
                a,
                s = new Array(MAX_BITS$1 + 1),
                n = 0;
            for (r = 1; r <= MAX_BITS$1; r++)
                s[r] = n = n + i[r - 1] << 1;
            for (a = 0; a <= e; a++) {
                var o = t[2 * a + 1];
                0 !== o && (t[2 * a] = bi_reverse(s[o]++, o))
            }
        },
        tr_static_init = () => {
            var t,
                e,
                i,
                r,
                a,
                s = new Array(MAX_BITS$1 + 1);
            for (i = 0, r = 0; r < LENGTH_CODES$1 - 1; r++)
                for (base_length[r] = i, t = 0; t < 1 << extra_lbits[r]; t++)
                    _length_code[i++] = r;
            for (_length_code[i - 1] = r, a = 0, r = 0; r < 16; r++)
                for (base_dist[r] = a, t = 0; t < 1 << extra_dbits[r]; t++)
                    _dist_code[a++] = r;
            for (a >>= 7; r < D_CODES$1; r++)
                for (base_dist[r] = a << 7, t = 0; t < 1 << extra_dbits[r] - 7; t++)
                    _dist_code[256 + a++] = r;
            for (e = 0; e <= MAX_BITS$1; e++)
                s[e] = 0;
            for (t = 0; t <= 143;)
                static_ltree[2 * t + 1] = 8,
                t++,
                s[8]++;
            for (; t <= 255;)
                static_ltree[2 * t + 1] = 9,
                t++,
                s[9]++;
            for (; t <= 279;)
                static_ltree[2 * t + 1] = 7,
                t++,
                s[7]++;
            for (; t <= 287;)
                static_ltree[2 * t + 1] = 8,
                t++,
                s[8]++;
            for (gen_codes(static_ltree, L_CODES$1 + 1, s), t = 0; t < D_CODES$1; t++)
                static_dtree[2 * t + 1] = 5,
                static_dtree[2 * t] = bi_reverse(t, 5);
            static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1),
            static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1),
            static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS)
        },
        init_block = t => {
            var e;
            for (e = 0; e < L_CODES$1; e++)
                t.dyn_ltree[2 * e] = 0;
            for (e = 0; e < D_CODES$1; e++)
                t.dyn_dtree[2 * e] = 0;
            for (e = 0; e < BL_CODES$1; e++)
                t.bl_tree[2 * e] = 0;
            t.dyn_ltree[2 * END_BLOCK] = 1,
            t.opt_len = t.static_len = 0,
            t.last_lit = t.matches = 0
        },
        bi_windup = t => {
            t.bi_valid > 8 ? put_short(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
            t.bi_buf = 0,
            t.bi_valid = 0
        },
        copy_block = (t, e, i, r) => {
            bi_windup(t),
            r && (put_short(t, i), put_short(t, ~i)),
            t.pending_buf.set(t.window.subarray(e, e + i), t.pending),
            t.pending += i
        },
        smaller = (t, e, i, r) => {
            var a = 2 * e,
                s = 2 * i;
            return t[a] < t[s] || t[a] === t[s] && r[e] <= r[i]
        },
        pqdownheap = (t, e, i) => {
            for (var r = t.heap[i], a = i << 1; a <= t.heap_len && (a < t.heap_len && smaller(e, t.heap[a + 1], t.heap[a], t.depth) && a++, !smaller(e, r, t.heap[a], t.depth));)
                t.heap[i] = t.heap[a],
                i = a,
                a <<= 1;
            t.heap[i] = r
        },
        compress_block = (t, e, i) => {
            var r,
                a,
                s,
                n,
                o = 0;
            if (0 !== t.last_lit)
                do {
                    r = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1],
                    a = t.pending_buf[t.l_buf + o],
                    o++,
                    0 === r ? send_code(t, a, e) : (s = _length_code[a], send_code(t, s + LITERALS$1 + 1, e), 0 !== (n = extra_lbits[s]) && (a -= base_length[s], send_bits(t, a, n)), r--, s = d_code(r), send_code(t, s, i), 0 !== (n = extra_dbits[s]) && (r -= base_dist[s], send_bits(t, r, n)))
                } while (o < t.last_lit);
            send_code(t, END_BLOCK, e)
        },
        build_tree = (t, e) => {
            var i,
                r,
                a,
                s = e.dyn_tree,
                n = e.stat_desc.static_tree,
                o = e.stat_desc.has_stree,
                h = e.stat_desc.elems,
                l = -1;
            for (t.heap_len = 0, t.heap_max = HEAP_SIZE$1, i = 0; i < h; i++)
                0 !== s[2 * i] ? (t.heap[++t.heap_len] = l = i, t.depth[i] = 0) : s[2 * i + 1] = 0;
            for (; t.heap_len < 2;)
                s[2 * (a = t.heap[++t.heap_len] = l < 2 ? ++l : 0)] = 1,
                t.depth[a] = 0,
                t.opt_len--,
                o && (t.static_len -= n[2 * a + 1]);
            for (e.max_code = l, i = t.heap_len >> 1; i >= 1; i--)
                pqdownheap(t, s, i);
            a = h;
            do {
                i = t.heap[1],
                t.heap[1] = t.heap[t.heap_len--],
                pqdownheap(t, s, 1),
                r = t.heap[1],
                t.heap[--t.heap_max] = i,
                t.heap[--t.heap_max] = r,
                s[2 * a] = s[2 * i] + s[2 * r],
                t.depth[a] = (t.depth[i] >= t.depth[r] ? t.depth[i] : t.depth[r]) + 1,
                s[2 * i + 1] = s[2 * r + 1] = a,
                t.heap[1] = a++,
                pqdownheap(t, s, 1)
            } while (t.heap_len >= 2);
            t.heap[--t.heap_max] = t.heap[1],
            gen_bitlen(t, e),
            gen_codes(s, l, t.bl_count)
        },
        scan_tree = (t, e, i) => {
            var r,
                a,
                s = -1,
                n = e[1],
                o = 0,
                h = 7,
                l = 4;
            for (0 === n && (h = 138, l = 3), e[2 * (i + 1) + 1] = 65535, r = 0; r <= i; r++)
                a = n,
                n = e[2 * (r + 1) + 1],
                ++o < h && a === n || (o < l ? t.bl_tree[2 * a] += o : 0 !== a ? (a !== s && t.bl_tree[2 * a]++, t.bl_tree[2 * REP_3_6]++) : o <= 10 ? t.bl_tree[2 * REPZ_3_10]++ : t.bl_tree[2 * REPZ_11_138]++, o = 0, s = a, 0 === n ? (h = 138, l = 3) : a === n ? (h = 6, l = 3) : (h = 7, l = 4))
        },
        send_tree = (t, e, i) => {
            var r,
                a,
                s = -1,
                n = e[1],
                o = 0,
                h = 7,
                l = 4;
            for (0 === n && (h = 138, l = 3), r = 0; r <= i; r++)
                if (a = n, n = e[2 * (r + 1) + 1], !(++o < h && a === n)) {
                    if (o < l)
                        do {
                            send_code(t, a, t.bl_tree)
                        } while (0 != --o);
                    else
                        0 !== a ? (a !== s && (send_code(t, a, t.bl_tree), o--), send_code(t, REP_3_6, t.bl_tree), send_bits(t, o - 3, 2)) : o <= 10 ? (send_code(t, REPZ_3_10, t.bl_tree), send_bits(t, o - 3, 3)) : (send_code(t, REPZ_11_138, t.bl_tree), send_bits(t, o - 11, 7));
                    o = 0,
                    s = a,
                    0 === n ? (h = 138, l = 3) : a === n ? (h = 6, l = 3) : (h = 7, l = 4)
                }
        },
        build_bl_tree = t => {
            var e;
            for (scan_tree(t, t.dyn_ltree, t.l_desc.max_code), scan_tree(t, t.dyn_dtree, t.d_desc.max_code), build_tree(t, t.bl_desc), e = BL_CODES$1 - 1; e >= 3 && 0 === t.bl_tree[2 * bl_order[e] + 1]; e--)
                ;
            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
        },
        send_all_trees = (t, e, i, r) => {
            var a;
            for (send_bits(t, e - 257, 5), send_bits(t, i - 1, 5), send_bits(t, r - 4, 4), a = 0; a < r; a++)
                send_bits(t, t.bl_tree[2 * bl_order[a] + 1], 3);
            send_tree(t, t.dyn_ltree, e - 1),
            send_tree(t, t.dyn_dtree, i - 1)
        },
        detect_data_type = t => {
            var e,
                i = 4093624447;
            for (e = 0; e <= 31; e++, i >>>= 1)
                if (1 & i && 0 !== t.dyn_ltree[2 * e])
                    return Z_BINARY;
            if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
                return Z_TEXT;
            for (e = 32; e < LITERALS$1; e++)
                if (0 !== t.dyn_ltree[2 * e])
                    return Z_TEXT;
            return Z_BINARY
        },
        static_init_done = !1,
        _tr_init$1 = t => {
            static_init_done || (tr_static_init(), static_init_done = !0),
            t.l_desc = new TreeDesc(t.dyn_ltree, static_l_desc),
            t.d_desc = new TreeDesc(t.dyn_dtree, static_d_desc),
            t.bl_desc = new TreeDesc(t.bl_tree, static_bl_desc),
            t.bi_buf = 0,
            t.bi_valid = 0,
            init_block(t)
        },
        _tr_stored_block$1 = (t, e, i, r) => {
            send_bits(t, (STORED_BLOCK << 1) + (r ? 1 : 0), 3),
            copy_block(t, e, i, !0)
        },
        _tr_align$1 = t => {
            send_bits(t, STATIC_TREES << 1, 3),
            send_code(t, END_BLOCK, static_ltree),
            bi_flush(t)
        },
        _tr_flush_block$1 = (t, e, i, r) => {
            var a,
                s,
                n = 0;
            t.level > 0 ? (t.strm.data_type === Z_UNKNOWN$1 && (t.strm.data_type = detect_data_type(t)), build_tree(t, t.l_desc), build_tree(t, t.d_desc), n = build_bl_tree(t), a = t.opt_len + 3 + 7 >>> 3, (s = t.static_len + 3 + 7 >>> 3) <= a && (a = s)) : a = s = i + 5,
            i + 4 <= a && -1 !== e ? _tr_stored_block$1(t, e, i, r) : t.strategy === Z_FIXED$1 || s === a ? (send_bits(t, (STATIC_TREES << 1) + (r ? 1 : 0), 3), compress_block(t, static_ltree, static_dtree)) : (send_bits(t, (DYN_TREES << 1) + (r ? 1 : 0), 3), send_all_trees(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, n + 1), compress_block(t, t.dyn_ltree, t.dyn_dtree)),
            init_block(t),
            r && bi_windup(t)
        },
        _tr_tally$1 = (t, e, i) => (t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & i, t.last_lit++, 0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++, e--, t.dyn_ltree[2 * (_length_code[i] + LITERALS$1 + 1)]++, t.dyn_dtree[2 * d_code(e)]++), t.last_lit === t.lit_bufsize - 1),
        _tr_init_1 = _tr_init$1,
        _tr_stored_block_1 = _tr_stored_block$1,
        _tr_flush_block_1 = _tr_flush_block$1,
        _tr_tally_1 = _tr_tally$1,
        _tr_align_1 = _tr_align$1,
        trees = {
            _tr_init: _tr_init_1,
            _tr_stored_block: _tr_stored_block_1,
            _tr_flush_block: _tr_flush_block_1,
            _tr_tally: _tr_tally_1,
            _tr_align: _tr_align_1
        },
        adler32 = (t, e, i, r) => {
            for (var a = 65535 & t | 0, s = t >>> 16 & 65535 | 0, n = 0; 0 !== i;) {
                i -= n = i > 2e3 ? 2e3 : i;
                do {
                    s = s + (a = a + e[r++] | 0) | 0
                } while (--n);
                a %= 65521,
                s %= 65521
            }
            return a | s << 16 | 0
        },
        adler32_1 = adler32,
        makeTable = () => {
            for (var t, e = [], i = 0; i < 256; i++) {
                t = i;
                for (var r = 0; r < 8; r++)
                    t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                e[i] = t
            }
            return e
        },
        crcTable = new Uint32Array(makeTable()),
        crc32 = (t, e, i, r) => {
            var a = crcTable,
                s = r + i;
            t ^= -1;
            for (var n = r; n < s; n++)
                t = t >>> 8 ^ a[255 & (t ^ e[n])];
            return -1 ^ t
        },
        crc32_1 = crc32,
        messages = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        },
        constants$2 = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        },
        {_tr_init: _tr_init, _tr_stored_block: _tr_stored_block, _tr_flush_block: _tr_flush_block, _tr_tally: _tr_tally, _tr_align: _tr_align} = trees,
        {Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH: Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1, Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1, Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1, Z_FILTERED: Z_FILTERED, Z_HUFFMAN_ONLY: Z_HUFFMAN_ONLY, Z_RLE: Z_RLE, Z_FIXED: Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1, Z_UNKNOWN: Z_UNKNOWN, Z_DEFLATED: Z_DEFLATED$2} = constants$2,
        MAX_MEM_LEVEL = 9,
        MAX_WBITS$1 = 15,
        DEF_MEM_LEVEL = 8,
        LENGTH_CODES = 29,
        LITERALS = 256,
        L_CODES = LITERALS + 1 + LENGTH_CODES,
        D_CODES = 30,
        BL_CODES = 19,
        HEAP_SIZE = 2 * L_CODES + 1,
        MAX_BITS = 15,
        MIN_MATCH = 3,
        MAX_MATCH = 258,
        MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1,
        PRESET_DICT = 32,
        INIT_STATE = 42,
        EXTRA_STATE = 69,
        NAME_STATE = 73,
        COMMENT_STATE = 91,
        HCRC_STATE = 103,
        BUSY_STATE = 113,
        FINISH_STATE = 666,
        BS_NEED_MORE = 1,
        BS_BLOCK_DONE = 2,
        BS_FINISH_STARTED = 3,
        BS_FINISH_DONE = 4,
        OS_CODE = 3,
        err = (t, e) => (t.msg = messages[e], e),
        rank = t => (t << 1) - (t > 4 ? 9 : 0),
        zero = t => {
            for (var e = t.length; --e >= 0;)
                t[e] = 0
        },
        HASH_ZLIB = (t, e, i) => (e << t.hash_shift ^ i) & t.hash_mask,
        HASH = HASH_ZLIB,
        flush_pending = t => {
            var e = t.state,
                i = e.pending;
            i > t.avail_out && (i = t.avail_out),
            0 !== i && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + i), t.next_out), t.next_out += i, e.pending_out += i, t.total_out += i, t.avail_out -= i, e.pending -= i, 0 === e.pending && (e.pending_out = 0))
        },
        flush_block_only = (t, e) => {
            _tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
            t.block_start = t.strstart,
            flush_pending(t.strm)
        },
        put_byte = (t, e) => {
            t.pending_buf[t.pending++] = e
        },
        putShortMSB = (t, e) => {
            t.pending_buf[t.pending++] = e >>> 8 & 255,
            t.pending_buf[t.pending++] = 255 & e
        },
        read_buf = (t, e, i, r) => {
            var a = t.avail_in;
            return a > r && (a = r), 0 === a ? 0 : (t.avail_in -= a, e.set(t.input.subarray(t.next_in, t.next_in + a), i), 1 === t.state.wrap ? t.adler = adler32_1(t.adler, e, a, i) : 2 === t.state.wrap && (t.adler = crc32_1(t.adler, e, a, i)), t.next_in += a, t.total_in += a, a)
        },
        longest_match = (t, e) => {
            var i,
                r,
                a = t.max_chain_length,
                s = t.strstart,
                n = t.prev_length,
                o = t.nice_match,
                h = t.strstart > t.w_size - MIN_LOOKAHEAD ? t.strstart - (t.w_size - MIN_LOOKAHEAD) : 0,
                l = t.window,
                p = t.w_mask,
                f = t.prev,
                c = t.strstart + MAX_MATCH,
                d = l[s + n - 1],
                m = l[s + n];
            t.prev_length >= t.good_match && (a >>= 2),
            o > t.lookahead && (o = t.lookahead);
            do {
                if (l[(i = e) + n] === m && l[i + n - 1] === d && l[i] === l[s] && l[++i] === l[s + 1]) {
                    s += 2,
                    i++;
                    do {} while (l[++s] === l[++i] && l[++s] === l[++i] && l[++s] === l[++i] && l[++s] === l[++i] && l[++s] === l[++i] && l[++s] === l[++i] && l[++s] === l[++i] && l[++s] === l[++i] && s < c);
                    if (r = MAX_MATCH - (c - s), s = c - MAX_MATCH, r > n) {
                        if (t.match_start = e, n = r, r >= o)
                            break;
                        d = l[s + n - 1],
                        m = l[s + n]
                    }
                }
            } while ((e = f[e & p]) > h && 0 != --a);
            return n <= t.lookahead ? n : t.lookahead
        },
        fill_window = t => {
            var e,
                i,
                r,
                a,
                s,
                n = t.w_size;
            do {
                if (a = t.window_size - t.lookahead - t.strstart, t.strstart >= n + (n - MIN_LOOKAHEAD)) {
                    t.window.set(t.window.subarray(n, n + n), 0),
                    t.match_start -= n,
                    t.strstart -= n,
                    t.block_start -= n,
                    e = i = t.hash_size;
                    do {
                        r = t.head[--e],
                        t.head[e] = r >= n ? r - n : 0
                    } while (--i);
                    e = i = n;
                    do {
                        r = t.prev[--e],
                        t.prev[e] = r >= n ? r - n : 0
                    } while (--i);
                    a += n
                }
                if (0 === t.strm.avail_in)
                    break;
                if (i = read_buf(t.strm, t.window, t.strstart + t.lookahead, a), t.lookahead += i, t.lookahead + t.insert >= MIN_MATCH)
                    for (s = t.strstart - t.insert, t.ins_h = t.window[s], t.ins_h = HASH(t, t.ins_h, t.window[s + 1]); t.insert && (t.ins_h = HASH(t, t.ins_h, t.window[s + MIN_MATCH - 1]), t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < MIN_MATCH));)
                        ;
            } while (t.lookahead < MIN_LOOKAHEAD && 0 !== t.strm.avail_in)
        },
        deflate_stored = (t, e) => {
            var i = 65535;
            for (i > t.pending_buf_size - 5 && (i = t.pending_buf_size - 5);;) {
                if (t.lookahead <= 1) {
                    if (fill_window(t), 0 === t.lookahead && e === Z_NO_FLUSH$2)
                        return BS_NEED_MORE;
                    if (0 === t.lookahead)
                        break
                }
                t.strstart += t.lookahead,
                t.lookahead = 0;
                var r = t.block_start + i;
                if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r, t.strstart = r, flush_block_only(t, !1), 0 === t.strm.avail_out))
                    return BS_NEED_MORE;
                if (t.strstart - t.block_start >= t.w_size - MIN_LOOKAHEAD && (flush_block_only(t, !1), 0 === t.strm.avail_out))
                    return BS_NEED_MORE
            }
            return t.insert = 0, e === Z_FINISH$3 ? (flush_block_only(t, !0), 0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : (t.strstart > t.block_start && (flush_block_only(t, !1), t.strm.avail_out), BS_NEED_MORE)
        },
        deflate_fast = (t, e) => {
            for (var i, r;;) {
                if (t.lookahead < MIN_LOOKAHEAD) {
                    if (fill_window(t), t.lookahead < MIN_LOOKAHEAD && e === Z_NO_FLUSH$2)
                        return BS_NEED_MORE;
                    if (0 === t.lookahead)
                        break
                }
                if (i = 0, t.lookahead >= MIN_MATCH && (t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== i && t.strstart - i <= t.w_size - MIN_LOOKAHEAD && (t.match_length = longest_match(t, i)), t.match_length >= MIN_MATCH)
                    if (r = _tr_tally(t, t.strstart - t.match_start, t.match_length - MIN_MATCH), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= MIN_MATCH) {
                        t.match_length--;
                        do {
                            t.strstart++,
                            t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1]),
                            i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                            t.head[t.ins_h] = t.strstart
                        } while (0 != --t.match_length);
                        t.strstart++
                    } else
                        t.strstart += t.match_length,
                        t.match_length = 0,
                        t.ins_h = t.window[t.strstart],
                        t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + 1]);
                else
                    r = _tr_tally(t, 0, t.window[t.strstart]),
                    t.lookahead--,
                    t.strstart++;
                if (r && (flush_block_only(t, !1), 0 === t.strm.avail_out))
                    return BS_NEED_MORE
            }
            return t.insert = t.strstart < MIN_MATCH - 1 ? t.strstart : MIN_MATCH - 1, e === Z_FINISH$3 ? (flush_block_only(t, !0), 0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : t.last_lit && (flush_block_only(t, !1), 0 === t.strm.avail_out) ? BS_NEED_MORE : BS_BLOCK_DONE
        },
        deflate_slow = (t, e) => {
            for (var i, r, a;;) {
                if (t.lookahead < MIN_LOOKAHEAD) {
                    if (fill_window(t), t.lookahead < MIN_LOOKAHEAD && e === Z_NO_FLUSH$2)
                        return BS_NEED_MORE;
                    if (0 === t.lookahead)
                        break
                }
                if (i = 0, t.lookahead >= MIN_MATCH && (t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = MIN_MATCH - 1, 0 !== i && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - MIN_LOOKAHEAD && (t.match_length = longest_match(t, i), t.match_length <= 5 && (t.strategy === Z_FILTERED || t.match_length === MIN_MATCH && t.strstart - t.match_start > 4096) && (t.match_length = MIN_MATCH - 1)), t.prev_length >= MIN_MATCH && t.match_length <= t.prev_length) {
                    a = t.strstart + t.lookahead - MIN_MATCH,
                    r = _tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - MIN_MATCH),
                    t.lookahead -= t.prev_length - 1,
                    t.prev_length -= 2;
                    do {
                        ++t.strstart <= a && (t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                    } while (0 != --t.prev_length);
                    if (t.match_available = 0, t.match_length = MIN_MATCH - 1, t.strstart++, r && (flush_block_only(t, !1), 0 === t.strm.avail_out))
                        return BS_NEED_MORE
                } else if (t.match_available) {
                    if ((r = _tr_tally(t, 0, t.window[t.strstart - 1])) && flush_block_only(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out)
                        return BS_NEED_MORE
                } else
                    t.match_available = 1,
                    t.strstart++,
                    t.lookahead--
            }
            return t.match_available && (r = _tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < MIN_MATCH - 1 ? t.strstart : MIN_MATCH - 1, e === Z_FINISH$3 ? (flush_block_only(t, !0), 0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : t.last_lit && (flush_block_only(t, !1), 0 === t.strm.avail_out) ? BS_NEED_MORE : BS_BLOCK_DONE
        },
        deflate_rle = (t, e) => {
            for (var i, r, a, s, n = t.window;;) {
                if (t.lookahead <= MAX_MATCH) {
                    if (fill_window(t), t.lookahead <= MAX_MATCH && e === Z_NO_FLUSH$2)
                        return BS_NEED_MORE;
                    if (0 === t.lookahead)
                        break
                }
                if (t.match_length = 0, t.lookahead >= MIN_MATCH && t.strstart > 0 && (r = n[a = t.strstart - 1]) === n[++a] && r === n[++a] && r === n[++a]) {
                    s = t.strstart + MAX_MATCH;
                    do {} while (r === n[++a] && r === n[++a] && r === n[++a] && r === n[++a] && r === n[++a] && r === n[++a] && r === n[++a] && r === n[++a] && a < s);
                    t.match_length = MAX_MATCH - (s - a),
                    t.match_length > t.lookahead && (t.match_length = t.lookahead)
                }
                if (t.match_length >= MIN_MATCH ? (i = _tr_tally(t, 1, t.match_length - MIN_MATCH), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (i = _tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), i && (flush_block_only(t, !1), 0 === t.strm.avail_out))
                    return BS_NEED_MORE
            }
            return t.insert = 0, e === Z_FINISH$3 ? (flush_block_only(t, !0), 0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : t.last_lit && (flush_block_only(t, !1), 0 === t.strm.avail_out) ? BS_NEED_MORE : BS_BLOCK_DONE
        },
        deflate_huff = (t, e) => {
            for (var i;;) {
                if (0 === t.lookahead && (fill_window(t), 0 === t.lookahead)) {
                    if (e === Z_NO_FLUSH$2)
                        return BS_NEED_MORE;
                    break
                }
                if (t.match_length = 0, i = _tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, i && (flush_block_only(t, !1), 0 === t.strm.avail_out))
                    return BS_NEED_MORE
            }
            return t.insert = 0, e === Z_FINISH$3 ? (flush_block_only(t, !0), 0 === t.strm.avail_out ? BS_FINISH_STARTED : BS_FINISH_DONE) : t.last_lit && (flush_block_only(t, !1), 0 === t.strm.avail_out) ? BS_NEED_MORE : BS_BLOCK_DONE
        };
    function Config(t, e, i, r, a) {
        this.good_length = t,
        this.max_lazy = e,
        this.nice_length = i,
        this.max_chain = r,
        this.func = a
    }
    var configuration_table = [new Config(0, 0, 0, 0, deflate_stored), new Config(4, 4, 8, 4, deflate_fast), new Config(4, 5, 16, 8, deflate_fast), new Config(4, 6, 32, 32, deflate_fast), new Config(4, 4, 16, 16, deflate_slow), new Config(8, 16, 32, 32, deflate_slow), new Config(8, 16, 128, 128, deflate_slow), new Config(8, 32, 128, 256, deflate_slow), new Config(32, 128, 258, 1024, deflate_slow), new Config(32, 258, 258, 4096, deflate_slow)],
        lm_init = t => {
            t.window_size = 2 * t.w_size,
            zero(t.head),
            t.max_lazy_match = configuration_table[t.level].max_lazy,
            t.good_match = configuration_table[t.level].good_length,
            t.nice_match = configuration_table[t.level].nice_length,
            t.max_chain_length = configuration_table[t.level].max_chain,
            t.strstart = 0,
            t.block_start = 0,
            t.lookahead = 0,
            t.insert = 0,
            t.match_length = t.prev_length = MIN_MATCH - 1,
            t.match_available = 0,
            t.ins_h = 0
        };
    function DeflateState() {
        this.strm = null,
        this.status = 0,
        this.pending_buf = null,
        this.pending_buf_size = 0,
        this.pending_out = 0,
        this.pending = 0,
        this.wrap = 0,
        this.gzhead = null,
        this.gzindex = 0,
        this.method = Z_DEFLATED$2,
        this.last_flush = -1,
        this.w_size = 0,
        this.w_bits = 0,
        this.w_mask = 0,
        this.window = null,
        this.window_size = 0,
        this.prev = null,
        this.head = null,
        this.ins_h = 0,
        this.hash_size = 0,
        this.hash_bits = 0,
        this.hash_mask = 0,
        this.hash_shift = 0,
        this.block_start = 0,
        this.match_length = 0,
        this.prev_match = 0,
        this.match_available = 0,
        this.strstart = 0,
        this.match_start = 0,
        this.lookahead = 0,
        this.prev_length = 0,
        this.max_chain_length = 0,
        this.max_lazy_match = 0,
        this.level = 0,
        this.strategy = 0,
        this.good_match = 0,
        this.nice_match = 0,
        this.dyn_ltree = new Uint16Array(2 * HEAP_SIZE),
        this.dyn_dtree = new Uint16Array(2 * (2 * D_CODES + 1)),
        this.bl_tree = new Uint16Array(2 * (2 * BL_CODES + 1)),
        zero(this.dyn_ltree),
        zero(this.dyn_dtree),
        zero(this.bl_tree),
        this.l_desc = null,
        this.d_desc = null,
        this.bl_desc = null,
        this.bl_count = new Uint16Array(MAX_BITS + 1),
        this.heap = new Uint16Array(2 * L_CODES + 1),
        zero(this.heap),
        this.heap_len = 0,
        this.heap_max = 0,
        this.depth = new Uint16Array(2 * L_CODES + 1),
        zero(this.depth),
        this.l_buf = 0,
        this.lit_bufsize = 0,
        this.last_lit = 0,
        this.d_buf = 0,
        this.opt_len = 0,
        this.static_len = 0,
        this.matches = 0,
        this.insert = 0,
        this.bi_buf = 0,
        this.bi_valid = 0
    }
    var deflateResetKeep = t => {
            if (!t || !t.state)
                return err(t, Z_STREAM_ERROR$2);
            t.total_in = t.total_out = 0,
            t.data_type = Z_UNKNOWN;
            var e = t.state;
            return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? INIT_STATE : BUSY_STATE, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = Z_NO_FLUSH$2, _tr_init(e), Z_OK$3
        },
        deflateReset = t => {
            var e = deflateResetKeep(t);
            return e === Z_OK$3 && lm_init(t.state), e
        },
        deflateSetHeader = (t, e) => t && t.state ? 2 !== t.state.wrap ? Z_STREAM_ERROR$2 : (t.state.gzhead = e, Z_OK$3) : Z_STREAM_ERROR$2,
        deflateInit2 = (t, e, i, r, a, s) => {
            if (!t)
                return Z_STREAM_ERROR$2;
            var n = 1;
            if (e === Z_DEFAULT_COMPRESSION$1 && (e = 6), r < 0 ? (n = 0, r = -r) : r > 15 && (n = 2, r -= 16), a < 1 || a > MAX_MEM_LEVEL || i !== Z_DEFLATED$2 || r < 8 || r > 15 || e < 0 || e > 9 || s < 0 || s > Z_FIXED)
                return err(t, Z_STREAM_ERROR$2);
            8 === r && (r = 9);
            var o = new DeflateState;
            return t.state = o, o.strm = t, o.wrap = n, o.gzhead = null, o.w_bits = r, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = a + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + MIN_MATCH - 1) / MIN_MATCH), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << a + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = e, o.strategy = s, o.method = i, deflateReset(t)
        },
        deflateInit = (t, e) => deflateInit2(t, e, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1),
        deflate$2 = (t, e) => {
            var i,
                r;
            if (!t || !t.state || e > Z_BLOCK$1 || e < 0)
                return t ? err(t, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
            var a = t.state;
            if (!t.output || !t.input && 0 !== t.avail_in || a.status === FINISH_STATE && e !== Z_FINISH$3)
                return err(t, 0 === t.avail_out ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
            a.strm = t;
            var s = a.last_flush;
            if (a.last_flush = e, a.status === INIT_STATE)
                if (2 === a.wrap)
                    t.adler = 0,
                    put_byte(a, 31),
                    put_byte(a, 139),
                    put_byte(a, 8),
                    a.gzhead ? (put_byte(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), put_byte(a, 255 & a.gzhead.time), put_byte(a, a.gzhead.time >> 8 & 255), put_byte(a, a.gzhead.time >> 16 & 255), put_byte(a, a.gzhead.time >> 24 & 255), put_byte(a, 9 === a.level ? 2 : a.strategy >= Z_HUFFMAN_ONLY || a.level < 2 ? 4 : 0), put_byte(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (put_byte(a, 255 & a.gzhead.extra.length), put_byte(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (t.adler = crc32_1(t.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = EXTRA_STATE) : (put_byte(a, 0), put_byte(a, 0), put_byte(a, 0), put_byte(a, 0), put_byte(a, 0), put_byte(a, 9 === a.level ? 2 : a.strategy >= Z_HUFFMAN_ONLY || a.level < 2 ? 4 : 0), put_byte(a, OS_CODE), a.status = BUSY_STATE);
                else {
                    var n = Z_DEFLATED$2 + (a.w_bits - 8 << 4) << 8;
                    n |= (a.strategy >= Z_HUFFMAN_ONLY || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) << 6,
                    0 !== a.strstart && (n |= PRESET_DICT),
                    n += 31 - n % 31,
                    a.status = BUSY_STATE,
                    putShortMSB(a, n),
                    0 !== a.strstart && (putShortMSB(a, t.adler >>> 16), putShortMSB(a, 65535 & t.adler)),
                    t.adler = 1
                }
            if (a.status === EXTRA_STATE)
                if (a.gzhead.extra) {
                    for (i = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > i && (t.adler = crc32_1(t.adler, a.pending_buf, a.pending - i, i)), flush_pending(t), i = a.pending, a.pending !== a.pending_buf_size));)
                        put_byte(a, 255 & a.gzhead.extra[a.gzindex]),
                        a.gzindex++;
                    a.gzhead.hcrc && a.pending > i && (t.adler = crc32_1(t.adler, a.pending_buf, a.pending - i, i)),
                    a.gzindex === a.gzhead.extra.length && (a.gzindex = 0, a.status = NAME_STATE)
                } else
                    a.status = NAME_STATE;
            if (a.status === NAME_STATE)
                if (a.gzhead.name) {
                    i = a.pending;
                    do {
                        if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > i && (t.adler = crc32_1(t.adler, a.pending_buf, a.pending - i, i)), flush_pending(t), i = a.pending, a.pending === a.pending_buf_size)) {
                            r = 1;
                            break
                        }
                        r = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0,
                        put_byte(a, r)
                    } while (0 !== r);
                    a.gzhead.hcrc && a.pending > i && (t.adler = crc32_1(t.adler, a.pending_buf, a.pending - i, i)),
                    0 === r && (a.gzindex = 0, a.status = COMMENT_STATE)
                } else
                    a.status = COMMENT_STATE;
            if (a.status === COMMENT_STATE)
                if (a.gzhead.comment) {
                    i = a.pending;
                    do {
                        if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > i && (t.adler = crc32_1(t.adler, a.pending_buf, a.pending - i, i)), flush_pending(t), i = a.pending, a.pending === a.pending_buf_size)) {
                            r = 1;
                            break
                        }
                        r = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0,
                        put_byte(a, r)
                    } while (0 !== r);
                    a.gzhead.hcrc && a.pending > i && (t.adler = crc32_1(t.adler, a.pending_buf, a.pending - i, i)),
                    0 === r && (a.status = HCRC_STATE)
                } else
                    a.status = HCRC_STATE;
            if (a.status === HCRC_STATE && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && flush_pending(t), a.pending + 2 <= a.pending_buf_size && (put_byte(a, 255 & t.adler), put_byte(a, t.adler >> 8 & 255), t.adler = 0, a.status = BUSY_STATE)) : a.status = BUSY_STATE), 0 !== a.pending) {
                if (flush_pending(t), 0 === t.avail_out)
                    return a.last_flush = -1, Z_OK$3
            } else if (0 === t.avail_in && rank(e) <= rank(s) && e !== Z_FINISH$3)
                return err(t, Z_BUF_ERROR$1);
            if (a.status === FINISH_STATE && 0 !== t.avail_in)
                return err(t, Z_BUF_ERROR$1);
            if (0 !== t.avail_in || 0 !== a.lookahead || e !== Z_NO_FLUSH$2 && a.status !== FINISH_STATE) {
                var o = a.strategy === Z_HUFFMAN_ONLY ? deflate_huff(a, e) : a.strategy === Z_RLE ? deflate_rle(a, e) : configuration_table[a.level].func(a, e);
                if (o !== BS_FINISH_STARTED && o !== BS_FINISH_DONE || (a.status = FINISH_STATE), o === BS_NEED_MORE || o === BS_FINISH_STARTED)
                    return 0 === t.avail_out && (a.last_flush = -1), Z_OK$3;
                if (o === BS_BLOCK_DONE && (e === Z_PARTIAL_FLUSH ? _tr_align(a) : e !== Z_BLOCK$1 && (_tr_stored_block(a, 0, 0, !1), e === Z_FULL_FLUSH$1 && (zero(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), flush_pending(t), 0 === t.avail_out))
                    return a.last_flush = -1, Z_OK$3
            }
            return e !== Z_FINISH$3 ? Z_OK$3 : a.wrap <= 0 ? Z_STREAM_END$3 : (2 === a.wrap ? (put_byte(a, 255 & t.adler), put_byte(a, t.adler >> 8 & 255), put_byte(a, t.adler >> 16 & 255), put_byte(a, t.adler >> 24 & 255), put_byte(a, 255 & t.total_in), put_byte(a, t.total_in >> 8 & 255), put_byte(a, t.total_in >> 16 & 255), put_byte(a, t.total_in >> 24 & 255)) : (putShortMSB(a, t.adler >>> 16), putShortMSB(a, 65535 & t.adler)), flush_pending(t), a.wrap > 0 && (a.wrap = -a.wrap), 0 !== a.pending ? Z_OK$3 : Z_STREAM_END$3)
        },
        deflateEnd = t => {
            if (!t || !t.state)
                return Z_STREAM_ERROR$2;
            var e = t.state.status;
            return e !== INIT_STATE && e !== EXTRA_STATE && e !== NAME_STATE && e !== COMMENT_STATE && e !== HCRC_STATE && e !== BUSY_STATE && e !== FINISH_STATE ? err(t, Z_STREAM_ERROR$2) : (t.state = null, e === BUSY_STATE ? err(t, Z_DATA_ERROR$2) : Z_OK$3)
        },
        deflateSetDictionary = (t, e) => {
            var i = e.length;
            if (!t || !t.state)
                return Z_STREAM_ERROR$2;
            var r = t.state,
                a = r.wrap;
            if (2 === a || 1 === a && r.status !== INIT_STATE || r.lookahead)
                return Z_STREAM_ERROR$2;
            if (1 === a && (t.adler = adler32_1(t.adler, e, i, 0)), r.wrap = 0, i >= r.w_size) {
                0 === a && (zero(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
                var s = new Uint8Array(r.w_size);
                s.set(e.subarray(i - r.w_size, i), 0),
                e = s,
                i = r.w_size
            }
            var n = t.avail_in,
                o = t.next_in,
                h = t.input;
            for (t.avail_in = i, t.next_in = 0, t.input = e, fill_window(r); r.lookahead >= MIN_MATCH;) {
                var l = r.strstart,
                    p = r.lookahead - (MIN_MATCH - 1);
                do {
                    r.ins_h = HASH(r, r.ins_h, r.window[l + MIN_MATCH - 1]),
                    r.prev[l & r.w_mask] = r.head[r.ins_h],
                    r.head[r.ins_h] = l,
                    l++
                } while (--p);
                r.strstart = l,
                r.lookahead = MIN_MATCH - 1,
                fill_window(r)
            }
            return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = MIN_MATCH - 1, r.match_available = 0, t.next_in = o, t.input = h, t.avail_in = n, r.wrap = a, Z_OK$3
        },
        deflateInit_1 = deflateInit,
        deflateInit2_1 = deflateInit2,
        deflateReset_1 = deflateReset,
        deflateResetKeep_1 = deflateResetKeep,
        deflateSetHeader_1 = deflateSetHeader,
        deflate_2$1 = deflate$2,
        deflateEnd_1 = deflateEnd,
        deflateSetDictionary_1 = deflateSetDictionary,
        deflateInfo = "pako deflate (from Nodeca project)",
        deflate_1$2 = {
            deflateInit: deflateInit_1,
            deflateInit2: deflateInit2_1,
            deflateReset: deflateReset_1,
            deflateResetKeep: deflateResetKeep_1,
            deflateSetHeader: deflateSetHeader_1,
            deflate: deflate_2$1,
            deflateEnd: deflateEnd_1,
            deflateSetDictionary: deflateSetDictionary_1,
            deflateInfo: deflateInfo
        },
        _has = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        assign = function(t) {
            for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                var i = e.shift();
                if (i) {
                    if ("object" != typeof i)
                        throw new TypeError(i + "must be non-object");
                    for (var r in i)
                        _has(i, r) && (t[r] = i[r])
                }
            }
            return t
        },
        flattenChunks = t => {
            for (var e = 0, i = 0, r = t.length; i < r; i++)
                e += t[i].length;
            for (var a = new Uint8Array(e), s = 0, n = 0, o = t.length; s < o; s++) {
                var h = t[s];
                a.set(h, n),
                n += h.length
            }
            return a
        },
        common = {
            assign: assign,
            flattenChunks: flattenChunks
        },
        STR_APPLY_UIA_OK = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (t) {
        STR_APPLY_UIA_OK = !1
    }
    for (var _utf8len = new Uint8Array(256), q = 0; q < 256; q++)
        _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
    _utf8len[254] = _utf8len[254] = 1;
    var string2buf = t => {
            if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
                return (new TextEncoder).encode(t);
            var e,
                i,
                r,
                a,
                s,
                n = t.length,
                o = 0;
            for (a = 0; a < n; a++)
                55296 == (64512 & (i = t.charCodeAt(a))) && a + 1 < n && 56320 == (64512 & (r = t.charCodeAt(a + 1))) && (i = 65536 + (i - 55296 << 10) + (r - 56320), a++),
                o += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
            for (e = new Uint8Array(o), s = 0, a = 0; s < o; a++)
                55296 == (64512 & (i = t.charCodeAt(a))) && a + 1 < n && 56320 == (64512 & (r = t.charCodeAt(a + 1))) && (i = 65536 + (i - 55296 << 10) + (r - 56320), a++),
                i < 128 ? e[s++] = i : i < 2048 ? (e[s++] = 192 | i >>> 6, e[s++] = 128 | 63 & i) : i < 65536 ? (e[s++] = 224 | i >>> 12, e[s++] = 128 | i >>> 6 & 63, e[s++] = 128 | 63 & i) : (e[s++] = 240 | i >>> 18, e[s++] = 128 | i >>> 12 & 63, e[s++] = 128 | i >>> 6 & 63, e[s++] = 128 | 63 & i);
            return e
        },
        buf2binstring = (t, e) => {
            if (e < 65534 && t.subarray && STR_APPLY_UIA_OK)
                return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
            for (var i = "", r = 0; r < e; r++)
                i += String.fromCharCode(t[r]);
            return i
        },
        buf2string = (t, e) => {
            var i,
                r,
                a = e || t.length;
            if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
                return (new TextDecoder).decode(t.subarray(0, e));
            var s = new Array(2 * a);
            for (r = 0, i = 0; i < a;) {
                var n = t[i++];
                if (n < 128)
                    s[r++] = n;
                else {
                    var o = _utf8len[n];
                    if (o > 4)
                        s[r++] = 65533,
                        i += o - 1;
                    else {
                        for (n &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && i < a;)
                            n = n << 6 | 63 & t[i++],
                            o--;
                        o > 1 ? s[r++] = 65533 : n < 65536 ? s[r++] = n : (n -= 65536, s[r++] = 55296 | n >> 10 & 1023, s[r++] = 56320 | 1023 & n)
                    }
                }
            }
            return buf2binstring(s, r)
        },
        utf8border = (t, e) => {
            (e = e || t.length) > t.length && (e = t.length);
            for (var i = e - 1; i >= 0 && 128 == (192 & t[i]);)
                i--;
            return i < 0 || 0 === i ? e : i + _utf8len[t[i]] > e ? i : e
        },
        strings = {
            string2buf: string2buf,
            buf2string: buf2string,
            utf8border: utf8border
        };
    function ZStream() {
        this.input = null,
        this.next_in = 0,
        this.avail_in = 0,
        this.total_in = 0,
        this.output = null,
        this.next_out = 0,
        this.avail_out = 0,
        this.total_out = 0,
        this.msg = "",
        this.state = null,
        this.data_type = 2,
        this.adler = 0
    }
    var zstream = ZStream,
        toString$1 = Object.prototype.toString,
        {Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH: Z_SYNC_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2, Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2, Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY, Z_DEFLATED: Z_DEFLATED$1} = constants$2;
    function Deflate$1(t) {
        this.options = common.assign({
            level: Z_DEFAULT_COMPRESSION,
            method: Z_DEFLATED$1,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: Z_DEFAULT_STRATEGY
        }, t || {});
        var e = this.options;
        e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new zstream,
        this.strm.avail_out = 0;
        var i = deflate_1$2.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (i !== Z_OK$2)
            throw new Error(messages[i]);
        if (e.header && deflate_1$2.deflateSetHeader(this.strm, e.header), e.dictionary) {
            var r;
            if (r = "string" == typeof e.dictionary ? strings.string2buf(e.dictionary) : "[object ArrayBuffer]" === toString$1.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (i = deflate_1$2.deflateSetDictionary(this.strm, r)) !== Z_OK$2)
                throw new Error(messages[i]);
            this._dict_set = !0
        }
    }
    Deflate$1.prototype.push = function(t, e) {
        var i,
            r,
            a = this.strm,
            s = this.options.chunkSize;
        if (this.ended)
            return !1;
        for (r = e === ~~e ? e : !0 === e ? Z_FINISH$2 : Z_NO_FLUSH$1, "string" == typeof t ? a.input = strings.string2buf(t) : "[object ArrayBuffer]" === toString$1.call(t) ? a.input = new Uint8Array(t) : a.input = t, a.next_in = 0, a.avail_in = a.input.length;;)
            if (0 === a.avail_out && (a.output = new Uint8Array(s), a.next_out = 0, a.avail_out = s), (r === Z_SYNC_FLUSH || r === Z_FULL_FLUSH) && a.avail_out <= 6)
                this.onData(a.output.subarray(0, a.next_out)),
                a.avail_out = 0;
            else {
                if ((i = deflate_1$2.deflate(a, r)) === Z_STREAM_END$2)
                    return a.next_out > 0 && this.onData(a.output.subarray(0, a.next_out)), i = deflate_1$2.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === Z_OK$2;
                if (0 !== a.avail_out) {
                    if (r > 0 && a.next_out > 0)
                        this.onData(a.output.subarray(0, a.next_out)),
                        a.avail_out = 0;
                    else if (0 === a.avail_in)
                        break
                } else
                    this.onData(a.output)
            }
        return !0
    },
    Deflate$1.prototype.onData = function(t) {
        this.chunks.push(t)
    },
    Deflate$1.prototype.onEnd = function(t) {
        t === Z_OK$2 && (this.result = common.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
    };
    var BAD$1 = 30,
        TYPE$1 = 12,
        inffast = function(t, e) {
            var i,
                r,
                a,
                s,
                n,
                o,
                h,
                l,
                p,
                f,
                c,
                d,
                m,
                u,
                y,
                g,
                v,
                _,
                b,
                E,
                S,
                x,
                P,
                A,
                C = t.state;
            i = t.next_in,
            P = t.input,
            r = i + (t.avail_in - 5),
            a = t.next_out,
            A = t.output,
            s = a - (e - t.avail_out),
            n = a + (t.avail_out - 257),
            o = C.dmax,
            h = C.wsize,
            l = C.whave,
            p = C.wnext,
            f = C.window,
            c = C.hold,
            d = C.bits,
            m = C.lencode,
            u = C.distcode,
            y = (1 << C.lenbits) - 1,
            g = (1 << C.distbits) - 1;
            t:
            do {
                d < 15 && (c += P[i++] << d, d += 8, c += P[i++] << d, d += 8),
                v = m[c & y];
                e:
                for (;;) {
                    if (c >>>= _ = v >>> 24, d -= _, 0 === (_ = v >>> 16 & 255))
                        A[a++] = 65535 & v;
                    else {
                        if (!(16 & _)) {
                            if (0 == (64 & _)) {
                                v = m[(65535 & v) + (c & (1 << _) - 1)];
                                continue e
                            }
                            if (32 & _) {
                                C.mode = TYPE$1;
                                break t
                            }
                            t.msg = "invalid literal/length code",
                            C.mode = BAD$1;
                            break t
                        }
                        b = 65535 & v,
                        (_ &= 15) && (d < _ && (c += P[i++] << d, d += 8), b += c & (1 << _) - 1, c >>>= _, d -= _),
                        d < 15 && (c += P[i++] << d, d += 8, c += P[i++] << d, d += 8),
                        v = u[c & g];
                        i:
                        for (;;) {
                            if (c >>>= _ = v >>> 24, d -= _, !(16 & (_ = v >>> 16 & 255))) {
                                if (0 == (64 & _)) {
                                    v = u[(65535 & v) + (c & (1 << _) - 1)];
                                    continue i
                                }
                                t.msg = "invalid distance code",
                                C.mode = BAD$1;
                                break t
                            }
                            if (E = 65535 & v, d < (_ &= 15) && (c += P[i++] << d, (d += 8) < _ && (c += P[i++] << d, d += 8)), (E += c & (1 << _) - 1) > o) {
                                t.msg = "invalid distance too far back",
                                C.mode = BAD$1;
                                break t
                            }
                            if (c >>>= _, d -= _, E > (_ = a - s)) {
                                if ((_ = E - _) > l && C.sane) {
                                    t.msg = "invalid distance too far back",
                                    C.mode = BAD$1;
                                    break t
                                }
                                if (S = 0, x = f, 0 === p) {
                                    if (S += h - _, _ < b) {
                                        b -= _;
                                        do {
                                            A[a++] = f[S++]
                                        } while (--_);
                                        S = a - E,
                                        x = A
                                    }
                                } else if (p < _) {
                                    if (S += h + p - _, (_ -= p) < b) {
                                        b -= _;
                                        do {
                                            A[a++] = f[S++]
                                        } while (--_);
                                        if (S = 0, p < b) {
                                            b -= _ = p;
                                            do {
                                                A[a++] = f[S++]
                                            } while (--_);
                                            S = a - E,
                                            x = A
                                        }
                                    }
                                } else if (S += p - _, _ < b) {
                                    b -= _;
                                    do {
                                        A[a++] = f[S++]
                                    } while (--_);
                                    S = a - E,
                                    x = A
                                }
                                for (; b > 2;)
                                    A[a++] = x[S++],
                                    A[a++] = x[S++],
                                    A[a++] = x[S++],
                                    b -= 3;
                                b && (A[a++] = x[S++], b > 1 && (A[a++] = x[S++]))
                            } else {
                                S = a - E;
                                do {
                                    A[a++] = A[S++],
                                    A[a++] = A[S++],
                                    A[a++] = A[S++],
                                    b -= 3
                                } while (b > 2);
                                b && (A[a++] = A[S++], b > 1 && (A[a++] = A[S++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (i < r && a < n);
            i -= b = d >> 3,
            c &= (1 << (d -= b << 3)) - 1,
            t.next_in = i,
            t.next_out = a,
            t.avail_in = i < r ? r - i + 5 : 5 - (i - r),
            t.avail_out = a < n ? n - a + 257 : 257 - (a - n),
            C.hold = c,
            C.bits = d
        },
        MAXBITS = 15,
        ENOUGH_LENS$1 = 852,
        ENOUGH_DISTS$1 = 592,
        CODES$1 = 0,
        LENS$1 = 1,
        DISTS$1 = 2,
        lbase = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
        lext = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
        dbase = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
        dext = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]),
        inflate_table = (t, e, i, r, a, s, n, o) => {
            var h,
                l,
                p,
                f,
                c,
                d,
                m,
                u,
                y,
                g = o.bits,
                v = 0,
                _ = 0,
                b = 0,
                E = 0,
                S = 0,
                x = 0,
                P = 0,
                A = 0,
                C = 0,
                T = 0,
                w = null,
                k = 0,
                M = new Uint16Array(MAXBITS + 1),
                D = new Uint16Array(MAXBITS + 1),
                I = null,
                F = 0;
            for (v = 0; v <= MAXBITS; v++)
                M[v] = 0;
            for (_ = 0; _ < r; _++)
                M[e[i + _]]++;
            for (S = g, E = MAXBITS; E >= 1 && 0 === M[E]; E--)
                ;
            if (S > E && (S = E), 0 === E)
                return a[s++] = 20971520, a[s++] = 20971520, o.bits = 1, 0;
            for (b = 1; b < E && 0 === M[b]; b++)
                ;
            for (S < b && (S = b), A = 1, v = 1; v <= MAXBITS; v++)
                if (A <<= 1, (A -= M[v]) < 0)
                    return -1;
            if (A > 0 && (t === CODES$1 || 1 !== E))
                return -1;
            for (D[1] = 0, v = 1; v < MAXBITS; v++)
                D[v + 1] = D[v] + M[v];
            for (_ = 0; _ < r; _++)
                0 !== e[i + _] && (n[D[e[i + _]]++] = _);
            if (t === CODES$1 ? (w = I = n, d = 19) : t === LENS$1 ? (w = lbase, k -= 257, I = lext, F -= 257, d = 256) : (w = dbase, I = dext, d = -1), T = 0, _ = 0, v = b, c = s, x = S, P = 0, p = -1, f = (C = 1 << S) - 1, t === LENS$1 && C > ENOUGH_LENS$1 || t === DISTS$1 && C > ENOUGH_DISTS$1)
                return 1;
            for (;;) {
                m = v - P,
                n[_] < d ? (u = 0, y = n[_]) : n[_] > d ? (u = I[F + n[_]], y = w[k + n[_]]) : (u = 96, y = 0),
                h = 1 << v - P,
                b = l = 1 << x;
                do {
                    a[c + (T >> P) + (l -= h)] = m << 24 | u << 16 | y | 0
                } while (0 !== l);
                for (h = 1 << v - 1; T & h;)
                    h >>= 1;
                if (0 !== h ? (T &= h - 1, T += h) : T = 0, _++, 0 == --M[v]) {
                    if (v === E)
                        break;
                    v = e[i + n[_]]
                }
                if (v > S && (T & f) !== p) {
                    for (0 === P && (P = S), c += b, A = 1 << (x = v - P); x + P < E && !((A -= M[x + P]) <= 0);)
                        x++,
                        A <<= 1;
                    if (C += 1 << x, t === LENS$1 && C > ENOUGH_LENS$1 || t === DISTS$1 && C > ENOUGH_DISTS$1)
                        return 1;
                    a[p = T & f] = S << 24 | x << 16 | c - s | 0
                }
            }
            return 0 !== T && (a[c + T] = v - P << 24 | 64 << 16 | 0), o.bits = S, 0
        },
        inftrees = inflate_table,
        CODES = 0,
        LENS = 1,
        DISTS = 2,
        {Z_FINISH: Z_FINISH$1, Z_BLOCK: Z_BLOCK, Z_TREES: Z_TREES, Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR: Z_BUF_ERROR, Z_DEFLATED: Z_DEFLATED} = constants$2,
        HEAD = 1,
        FLAGS = 2,
        TIME = 3,
        OS = 4,
        EXLEN = 5,
        EXTRA = 6,
        NAME = 7,
        COMMENT = 8,
        HCRC = 9,
        DICTID = 10,
        DICT = 11,
        TYPE = 12,
        TYPEDO = 13,
        STORED = 14,
        COPY_ = 15,
        COPY = 16,
        TABLE = 17,
        LENLENS = 18,
        CODELENS = 19,
        LEN_ = 20,
        LEN = 21,
        LENEXT = 22,
        DIST = 23,
        DISTEXT = 24,
        MATCH = 25,
        LIT = 26,
        CHECK = 27,
        LENGTH = 28,
        DONE = 29,
        BAD = 30,
        MEM = 31,
        SYNC = 32,
        ENOUGH_LENS = 852,
        ENOUGH_DISTS = 592,
        MAX_WBITS = 15,
        DEF_WBITS = MAX_WBITS,
        zswap32 = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
    function InflateState() {
        this.mode = 0,
        this.last = !1,
        this.wrap = 0,
        this.havedict = !1,
        this.flags = 0,
        this.dmax = 0,
        this.check = 0,
        this.total = 0,
        this.head = null,
        this.wbits = 0,
        this.wsize = 0,
        this.whave = 0,
        this.wnext = 0,
        this.window = null,
        this.hold = 0,
        this.bits = 0,
        this.length = 0,
        this.offset = 0,
        this.extra = 0,
        this.lencode = null,
        this.distcode = null,
        this.lenbits = 0,
        this.distbits = 0,
        this.ncode = 0,
        this.nlen = 0,
        this.ndist = 0,
        this.have = 0,
        this.next = null,
        this.lens = new Uint16Array(320),
        this.work = new Uint16Array(288),
        this.lendyn = null,
        this.distdyn = null,
        this.sane = 0,
        this.back = 0,
        this.was = 0
    }
    var inflateResetKeep = t => {
            if (!t || !t.state)
                return Z_STREAM_ERROR$1;
            var e = t.state;
            return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = HEAD, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(ENOUGH_LENS), e.distcode = e.distdyn = new Int32Array(ENOUGH_DISTS), e.sane = 1, e.back = -1, Z_OK$1
        },
        inflateReset = t => {
            if (!t || !t.state)
                return Z_STREAM_ERROR$1;
            var e = t.state;
            return e.wsize = 0, e.whave = 0, e.wnext = 0, inflateResetKeep(t)
        },
        inflateReset2 = (t, e) => {
            var i;
            if (!t || !t.state)
                return Z_STREAM_ERROR$1;
            var r = t.state;
            return e < 0 ? (i = 0, e = -e) : (i = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Z_STREAM_ERROR$1 : (null !== r.window && r.wbits !== e && (r.window = null), r.wrap = i, r.wbits = e, inflateReset(t))
        },
        inflateInit2 = (t, e) => {
            if (!t)
                return Z_STREAM_ERROR$1;
            var i = new InflateState;
            t.state = i,
            i.window = null;
            var r = inflateReset2(t, e);
            return r !== Z_OK$1 && (t.state = null), r
        },
        inflateInit = t => inflateInit2(t, DEF_WBITS),
        virgin = !0,
        lenfix,
        distfix,
        fixedtables = t => {
            if (virgin) {
                lenfix = new Int32Array(512),
                distfix = new Int32Array(32);
                for (var e = 0; e < 144;)
                    t.lens[e++] = 8;
                for (; e < 256;)
                    t.lens[e++] = 9;
                for (; e < 280;)
                    t.lens[e++] = 7;
                for (; e < 288;)
                    t.lens[e++] = 8;
                for (inftrees(LENS, t.lens, 0, 288, lenfix, 0, t.work, {
                    bits: 9
                }), e = 0; e < 32;)
                    t.lens[e++] = 5;
                inftrees(DISTS, t.lens, 0, 32, distfix, 0, t.work, {
                    bits: 5
                }),
                virgin = !1
            }
            t.lencode = lenfix,
            t.lenbits = 9,
            t.distcode = distfix,
            t.distbits = 5
        },
        updatewindow = (t, e, i, r) => {
            var a,
                s = t.state;
            return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), r >= s.wsize ? (s.window.set(e.subarray(i - s.wsize, i), 0), s.wnext = 0, s.whave = s.wsize) : ((a = s.wsize - s.wnext) > r && (a = r), s.window.set(e.subarray(i - r, i - r + a), s.wnext), (r -= a) ? (s.window.set(e.subarray(i - r, i), 0), s.wnext = r, s.whave = s.wsize) : (s.wnext += a, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += a))), 0
        },
        inflate$2 = (t, e) => {
            var i,
                r,
                a,
                s,
                n,
                o,
                h,
                l,
                p,
                f,
                c,
                d,
                m,
                u,
                y,
                g,
                v,
                _,
                b,
                E,
                S,
                x,
                P,
                A,
                C = 0,
                T = new Uint8Array(4),
                w = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
            if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in)
                return Z_STREAM_ERROR$1;
            (i = t.state).mode === TYPE && (i.mode = TYPEDO),
            n = t.next_out,
            a = t.output,
            h = t.avail_out,
            s = t.next_in,
            r = t.input,
            o = t.avail_in,
            l = i.hold,
            p = i.bits,
            f = o,
            c = h,
            x = Z_OK$1;
            t:
            for (;;)
                switch (i.mode) {
                case HEAD:
                    if (0 === i.wrap) {
                        i.mode = TYPEDO;
                        break
                    }
                    for (; p < 16;) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    if (2 & i.wrap && 35615 === l) {
                        i.check = 0,
                        T[0] = 255 & l,
                        T[1] = l >>> 8 & 255,
                        i.check = crc32_1(i.check, T, 2, 0),
                        l = 0,
                        p = 0,
                        i.mode = FLAGS;
                        break
                    }
                    if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & l) << 8) + (l >> 8)) % 31) {
                        t.msg = "incorrect header check",
                        i.mode = BAD;
                        break
                    }
                    if ((15 & l) !== Z_DEFLATED) {
                        t.msg = "unknown compression method",
                        i.mode = BAD;
                        break
                    }
                    if (p -= 4, S = 8 + (15 & (l >>>= 4)), 0 === i.wbits)
                        i.wbits = S;
                    else if (S > i.wbits) {
                        t.msg = "invalid window size",
                        i.mode = BAD;
                        break
                    }
                    i.dmax = 1 << i.wbits,
                    t.adler = i.check = 1,
                    i.mode = 512 & l ? DICTID : TYPE,
                    l = 0,
                    p = 0;
                    break;
                case FLAGS:
                    for (; p < 16;) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    if (i.flags = l, (255 & i.flags) !== Z_DEFLATED) {
                        t.msg = "unknown compression method",
                        i.mode = BAD;
                        break
                    }
                    if (57344 & i.flags) {
                        t.msg = "unknown header flags set",
                        i.mode = BAD;
                        break
                    }
                    i.head && (i.head.text = l >> 8 & 1),
                    512 & i.flags && (T[0] = 255 & l, T[1] = l >>> 8 & 255, i.check = crc32_1(i.check, T, 2, 0)),
                    l = 0,
                    p = 0,
                    i.mode = TIME;
                case TIME:
                    for (; p < 32;) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    i.head && (i.head.time = l),
                    512 & i.flags && (T[0] = 255 & l, T[1] = l >>> 8 & 255, T[2] = l >>> 16 & 255, T[3] = l >>> 24 & 255, i.check = crc32_1(i.check, T, 4, 0)),
                    l = 0,
                    p = 0,
                    i.mode = OS;
                case OS:
                    for (; p < 16;) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    i.head && (i.head.xflags = 255 & l, i.head.os = l >> 8),
                    512 & i.flags && (T[0] = 255 & l, T[1] = l >>> 8 & 255, i.check = crc32_1(i.check, T, 2, 0)),
                    l = 0,
                    p = 0,
                    i.mode = EXLEN;
                case EXLEN:
                    if (1024 & i.flags) {
                        for (; p < 16;) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        i.length = l,
                        i.head && (i.head.extra_len = l),
                        512 & i.flags && (T[0] = 255 & l, T[1] = l >>> 8 & 255, i.check = crc32_1(i.check, T, 2, 0)),
                        l = 0,
                        p = 0
                    } else
                        i.head && (i.head.extra = null);
                    i.mode = EXTRA;
                case EXTRA:
                    if (1024 & i.flags && ((d = i.length) > o && (d = o), d && (i.head && (S = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Uint8Array(i.head.extra_len)), i.head.extra.set(r.subarray(s, s + d), S)), 512 & i.flags && (i.check = crc32_1(i.check, r, d, s)), o -= d, s += d, i.length -= d), i.length))
                        break t;
                    i.length = 0,
                    i.mode = NAME;
                case NAME:
                    if (2048 & i.flags) {
                        if (0 === o)
                            break t;
                        d = 0;
                        do {
                            S = r[s + d++],
                            i.head && S && i.length < 65536 && (i.head.name += String.fromCharCode(S))
                        } while (S && d < o);
                        if (512 & i.flags && (i.check = crc32_1(i.check, r, d, s)), o -= d, s += d, S)
                            break t
                    } else
                        i.head && (i.head.name = null);
                    i.length = 0,
                    i.mode = COMMENT;
                case COMMENT:
                    if (4096 & i.flags) {
                        if (0 === o)
                            break t;
                        d = 0;
                        do {
                            S = r[s + d++],
                            i.head && S && i.length < 65536 && (i.head.comment += String.fromCharCode(S))
                        } while (S && d < o);
                        if (512 & i.flags && (i.check = crc32_1(i.check, r, d, s)), o -= d, s += d, S)
                            break t
                    } else
                        i.head && (i.head.comment = null);
                    i.mode = HCRC;
                case HCRC:
                    if (512 & i.flags) {
                        for (; p < 16;) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        if (l !== (65535 & i.check)) {
                            t.msg = "header crc mismatch",
                            i.mode = BAD;
                            break
                        }
                        l = 0,
                        p = 0
                    }
                    i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0),
                    t.adler = i.check = 0,
                    i.mode = TYPE;
                    break;
                case DICTID:
                    for (; p < 32;) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    t.adler = i.check = zswap32(l),
                    l = 0,
                    p = 0,
                    i.mode = DICT;
                case DICT:
                    if (0 === i.havedict)
                        return t.next_out = n, t.avail_out = h, t.next_in = s, t.avail_in = o, i.hold = l, i.bits = p, Z_NEED_DICT$1;
                    t.adler = i.check = 1,
                    i.mode = TYPE;
                case TYPE:
                    if (e === Z_BLOCK || e === Z_TREES)
                        break t;
                case TYPEDO:
                    if (i.last) {
                        l >>>= 7 & p,
                        p -= 7 & p,
                        i.mode = CHECK;
                        break
                    }
                    for (; p < 3;) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    switch (i.last = 1 & l, p -= 1, 3 & (l >>>= 1)) {
                    case 0:
                        i.mode = STORED;
                        break;
                    case 1:
                        if (fixedtables(i), i.mode = LEN_, e === Z_TREES) {
                            l >>>= 2,
                            p -= 2;
                            break t
                        }
                        break;
                    case 2:
                        i.mode = TABLE;
                        break;
                    case 3:
                        t.msg = "invalid block type",
                        i.mode = BAD
                    }
                    l >>>= 2,
                    p -= 2;
                    break;
                case STORED:
                    for (l >>>= 7 & p, p -= 7 & p; p < 32;) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    if ((65535 & l) != (l >>> 16 ^ 65535)) {
                        t.msg = "invalid stored block lengths",
                        i.mode = BAD;
                        break
                    }
                    if (i.length = 65535 & l, l = 0, p = 0, i.mode = COPY_, e === Z_TREES)
                        break t;
                case COPY_:
                    i.mode = COPY;
                case COPY:
                    if (d = i.length) {
                        if (d > o && (d = o), d > h && (d = h), 0 === d)
                            break t;
                        a.set(r.subarray(s, s + d), n),
                        o -= d,
                        s += d,
                        h -= d,
                        n += d,
                        i.length -= d;
                        break
                    }
                    i.mode = TYPE;
                    break;
                case TABLE:
                    for (; p < 14;) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    if (i.nlen = 257 + (31 & l), l >>>= 5, p -= 5, i.ndist = 1 + (31 & l), l >>>= 5, p -= 5, i.ncode = 4 + (15 & l), l >>>= 4, p -= 4, i.nlen > 286 || i.ndist > 30) {
                        t.msg = "too many length or distance symbols",
                        i.mode = BAD;
                        break
                    }
                    i.have = 0,
                    i.mode = LENLENS;
                case LENLENS:
                    for (; i.have < i.ncode;) {
                        for (; p < 3;) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        i.lens[w[i.have++]] = 7 & l,
                        l >>>= 3,
                        p -= 3
                    }
                    for (; i.have < 19;)
                        i.lens[w[i.have++]] = 0;
                    if (i.lencode = i.lendyn, i.lenbits = 7, P = {
                        bits: i.lenbits
                    }, x = inftrees(CODES, i.lens, 0, 19, i.lencode, 0, i.work, P), i.lenbits = P.bits, x) {
                        t.msg = "invalid code lengths set",
                        i.mode = BAD;
                        break
                    }
                    i.have = 0,
                    i.mode = CODELENS;
                case CODELENS:
                    for (; i.have < i.nlen + i.ndist;) {
                        for (; g = (C = i.lencode[l & (1 << i.lenbits) - 1]) >>> 16 & 255, v = 65535 & C, !((y = C >>> 24) <= p);) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        if (v < 16)
                            l >>>= y,
                            p -= y,
                            i.lens[i.have++] = v;
                        else {
                            if (16 === v) {
                                for (A = y + 2; p < A;) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    l += r[s++] << p,
                                    p += 8
                                }
                                if (l >>>= y, p -= y, 0 === i.have) {
                                    t.msg = "invalid bit length repeat",
                                    i.mode = BAD;
                                    break
                                }
                                S = i.lens[i.have - 1],
                                d = 3 + (3 & l),
                                l >>>= 2,
                                p -= 2
                            } else if (17 === v) {
                                for (A = y + 3; p < A;) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    l += r[s++] << p,
                                    p += 8
                                }
                                p -= y,
                                S = 0,
                                d = 3 + (7 & (l >>>= y)),
                                l >>>= 3,
                                p -= 3
                            } else {
                                for (A = y + 7; p < A;) {
                                    if (0 === o)
                                        break t;
                                    o--,
                                    l += r[s++] << p,
                                    p += 8
                                }
                                p -= y,
                                S = 0,
                                d = 11 + (127 & (l >>>= y)),
                                l >>>= 7,
                                p -= 7
                            }
                            if (i.have + d > i.nlen + i.ndist) {
                                t.msg = "invalid bit length repeat",
                                i.mode = BAD;
                                break
                            }
                            for (; d--;)
                                i.lens[i.have++] = S
                        }
                    }
                    if (i.mode === BAD)
                        break;
                    if (0 === i.lens[256]) {
                        t.msg = "invalid code -- missing end-of-block",
                        i.mode = BAD;
                        break
                    }
                    if (i.lenbits = 9, P = {
                        bits: i.lenbits
                    }, x = inftrees(LENS, i.lens, 0, i.nlen, i.lencode, 0, i.work, P), i.lenbits = P.bits, x) {
                        t.msg = "invalid literal/lengths set",
                        i.mode = BAD;
                        break
                    }
                    if (i.distbits = 6, i.distcode = i.distdyn, P = {
                        bits: i.distbits
                    }, x = inftrees(DISTS, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, P), i.distbits = P.bits, x) {
                        t.msg = "invalid distances set",
                        i.mode = BAD;
                        break
                    }
                    if (i.mode = LEN_, e === Z_TREES)
                        break t;
                case LEN_:
                    i.mode = LEN;
                case LEN:
                    if (o >= 6 && h >= 258) {
                        t.next_out = n,
                        t.avail_out = h,
                        t.next_in = s,
                        t.avail_in = o,
                        i.hold = l,
                        i.bits = p,
                        inffast(t, c),
                        n = t.next_out,
                        a = t.output,
                        h = t.avail_out,
                        s = t.next_in,
                        r = t.input,
                        o = t.avail_in,
                        l = i.hold,
                        p = i.bits,
                        i.mode === TYPE && (i.back = -1);
                        break
                    }
                    for (i.back = 0; g = (C = i.lencode[l & (1 << i.lenbits) - 1]) >>> 16 & 255, v = 65535 & C, !((y = C >>> 24) <= p);) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    if (g && 0 == (240 & g)) {
                        for (_ = y, b = g, E = v; g = (C = i.lencode[E + ((l & (1 << _ + b) - 1) >> _)]) >>> 16 & 255, v = 65535 & C, !(_ + (y = C >>> 24) <= p);) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        l >>>= _,
                        p -= _,
                        i.back += _
                    }
                    if (l >>>= y, p -= y, i.back += y, i.length = v, 0 === g) {
                        i.mode = LIT;
                        break
                    }
                    if (32 & g) {
                        i.back = -1,
                        i.mode = TYPE;
                        break
                    }
                    if (64 & g) {
                        t.msg = "invalid literal/length code",
                        i.mode = BAD;
                        break
                    }
                    i.extra = 15 & g,
                    i.mode = LENEXT;
                case LENEXT:
                    if (i.extra) {
                        for (A = i.extra; p < A;) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        i.length += l & (1 << i.extra) - 1,
                        l >>>= i.extra,
                        p -= i.extra,
                        i.back += i.extra
                    }
                    i.was = i.length,
                    i.mode = DIST;
                case DIST:
                    for (; g = (C = i.distcode[l & (1 << i.distbits) - 1]) >>> 16 & 255, v = 65535 & C, !((y = C >>> 24) <= p);) {
                        if (0 === o)
                            break t;
                        o--,
                        l += r[s++] << p,
                        p += 8
                    }
                    if (0 == (240 & g)) {
                        for (_ = y, b = g, E = v; g = (C = i.distcode[E + ((l & (1 << _ + b) - 1) >> _)]) >>> 16 & 255, v = 65535 & C, !(_ + (y = C >>> 24) <= p);) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        l >>>= _,
                        p -= _,
                        i.back += _
                    }
                    if (l >>>= y, p -= y, i.back += y, 64 & g) {
                        t.msg = "invalid distance code",
                        i.mode = BAD;
                        break
                    }
                    i.offset = v,
                    i.extra = 15 & g,
                    i.mode = DISTEXT;
                case DISTEXT:
                    if (i.extra) {
                        for (A = i.extra; p < A;) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        i.offset += l & (1 << i.extra) - 1,
                        l >>>= i.extra,
                        p -= i.extra,
                        i.back += i.extra
                    }
                    if (i.offset > i.dmax) {
                        t.msg = "invalid distance too far back",
                        i.mode = BAD;
                        break
                    }
                    i.mode = MATCH;
                case MATCH:
                    if (0 === h)
                        break t;
                    if (d = c - h, i.offset > d) {
                        if ((d = i.offset - d) > i.whave && i.sane) {
                            t.msg = "invalid distance too far back",
                            i.mode = BAD;
                            break
                        }
                        d > i.wnext ? (d -= i.wnext, m = i.wsize - d) : m = i.wnext - d,
                        d > i.length && (d = i.length),
                        u = i.window
                    } else
                        u = a,
                        m = n - i.offset,
                        d = i.length;
                    d > h && (d = h),
                    h -= d,
                    i.length -= d;
                    do {
                        a[n++] = u[m++]
                    } while (--d);
                    0 === i.length && (i.mode = LEN);
                    break;
                case LIT:
                    if (0 === h)
                        break t;
                    a[n++] = i.length,
                    h--,
                    i.mode = LEN;
                    break;
                case CHECK:
                    if (i.wrap) {
                        for (; p < 32;) {
                            if (0 === o)
                                break t;
                            o--,
                            l |= r[s++] << p,
                            p += 8
                        }
                        if (c -= h, t.total_out += c, i.total += c, c && (t.adler = i.check = i.flags ? crc32_1(i.check, a, c, n - c) : adler32_1(i.check, a, c, n - c)), c = h, (i.flags ? l : zswap32(l)) !== i.check) {
                            t.msg = "incorrect data check",
                            i.mode = BAD;
                            break
                        }
                        l = 0,
                        p = 0
                    }
                    i.mode = LENGTH;
                case LENGTH:
                    if (i.wrap && i.flags) {
                        for (; p < 32;) {
                            if (0 === o)
                                break t;
                            o--,
                            l += r[s++] << p,
                            p += 8
                        }
                        if (l !== (4294967295 & i.total)) {
                            t.msg = "incorrect length check",
                            i.mode = BAD;
                            break
                        }
                        l = 0,
                        p = 0
                    }
                    i.mode = DONE;
                case DONE:
                    x = Z_STREAM_END$1;
                    break t;
                case BAD:
                    x = Z_DATA_ERROR$1;
                    break t;
                case MEM:
                    return Z_MEM_ERROR$1;
                default:
                    return Z_STREAM_ERROR$1
                }
            return t.next_out = n, t.avail_out = h, t.next_in = s, t.avail_in = o, i.hold = l, i.bits = p, (i.wsize || c !== t.avail_out && i.mode < BAD && (i.mode < CHECK || e !== Z_FINISH$1)) && updatewindow(t, t.output, t.next_out, c - t.avail_out), f -= t.avail_in, c -= t.avail_out, t.total_in += f, t.total_out += c, i.total += c, i.wrap && c && (t.adler = i.check = i.flags ? crc32_1(i.check, a, c, t.next_out - c) : adler32_1(i.check, a, c, t.next_out - c)), t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === TYPE ? 128 : 0) + (i.mode === LEN_ || i.mode === COPY_ ? 256 : 0), (0 === f && 0 === c || e === Z_FINISH$1) && x === Z_OK$1 && (x = Z_BUF_ERROR), x
        },
        inflateEnd = t => {
            if (!t || !t.state)
                return Z_STREAM_ERROR$1;
            var e = t.state;
            return e.window && (e.window = null), t.state = null, Z_OK$1
        },
        inflateGetHeader = (t, e) => {
            if (!t || !t.state)
                return Z_STREAM_ERROR$1;
            var i = t.state;
            return 0 == (2 & i.wrap) ? Z_STREAM_ERROR$1 : (i.head = e, e.done = !1, Z_OK$1)
        },
        inflateSetDictionary = (t, e) => {
            var i,
                r = e.length;
            return t && t.state ? 0 !== (i = t.state).wrap && i.mode !== DICT ? Z_STREAM_ERROR$1 : i.mode === DICT && adler32_1(1, e, r, 0) !== i.check ? Z_DATA_ERROR$1 : updatewindow(t, e, r, r) ? (i.mode = MEM, Z_MEM_ERROR$1) : (i.havedict = 1, Z_OK$1) : Z_STREAM_ERROR$1
        },
        inflateReset_1 = inflateReset,
        inflateReset2_1 = inflateReset2,
        inflateResetKeep_1 = inflateResetKeep,
        inflateInit_1 = inflateInit,
        inflateInit2_1 = inflateInit2,
        inflate_2$1 = inflate$2,
        inflateEnd_1 = inflateEnd,
        inflateGetHeader_1 = inflateGetHeader,
        inflateSetDictionary_1 = inflateSetDictionary,
        inflateInfo = "pako inflate (from Nodeca project)",
        inflate_1$2 = {
            inflateReset: inflateReset_1,
            inflateReset2: inflateReset2_1,
            inflateResetKeep: inflateResetKeep_1,
            inflateInit: inflateInit_1,
            inflateInit2: inflateInit2_1,
            inflate: inflate_2$1,
            inflateEnd: inflateEnd_1,
            inflateGetHeader: inflateGetHeader_1,
            inflateSetDictionary: inflateSetDictionary_1,
            inflateInfo: inflateInfo
        };
    function GZheader() {
        this.text = 0,
        this.time = 0,
        this.xflags = 0,
        this.os = 0,
        this.extra = null,
        this.extra_len = 0,
        this.name = "",
        this.comment = "",
        this.hcrc = 0,
        this.done = !1
    }
    var gzheader = GZheader,
        toString = Object.prototype.toString,
        {Z_NO_FLUSH: Z_NO_FLUSH, Z_FINISH: Z_FINISH, Z_OK: Z_OK, Z_STREAM_END: Z_STREAM_END, Z_NEED_DICT: Z_NEED_DICT, Z_STREAM_ERROR: Z_STREAM_ERROR, Z_DATA_ERROR: Z_DATA_ERROR, Z_MEM_ERROR: Z_MEM_ERROR} = constants$2;
    function Inflate$1(t) {
        this.options = common.assign({
            chunkSize: 65536,
            windowBits: 15,
            to: ""
        }, t || {});
        var e = this.options;
        e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)),
        !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32),
        e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new zstream,
        this.strm.avail_out = 0;
        var i = inflate_1$2.inflateInit2(this.strm, e.windowBits);
        if (i !== Z_OK)
            throw new Error(messages[i]);
        if (this.header = new gzheader, inflate_1$2.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = strings.string2buf(e.dictionary) : "[object ArrayBuffer]" === toString.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (i = inflate_1$2.inflateSetDictionary(this.strm, e.dictionary)) !== Z_OK))
            throw new Error(messages[i])
    }
    function inflate$1(t, e) {
        var i = new Inflate$1(e);
        if (i.push(t), i.err)
            throw i.msg || messages[i.err];
        return i.result
    }
    function inflateRaw$1(t, e) {
        return (e = e || {}).raw = !0, inflate$1(t, e)
    }
    Inflate$1.prototype.push = function(t, e) {
        var i,
            r,
            a,
            s = this.strm,
            n = this.options.chunkSize,
            o = this.options.dictionary;
        if (this.ended)
            return !1;
        for (r = e === ~~e ? e : !0 === e ? Z_FINISH : Z_NO_FLUSH, "[object ArrayBuffer]" === toString.call(t) ? s.input = new Uint8Array(t) : s.input = t, s.next_in = 0, s.avail_in = s.input.length;;) {
            for (0 === s.avail_out && (s.output = new Uint8Array(n), s.next_out = 0, s.avail_out = n), (i = inflate_1$2.inflate(s, r)) === Z_NEED_DICT && o && ((i = inflate_1$2.inflateSetDictionary(s, o)) === Z_OK ? i = inflate_1$2.inflate(s, r) : i === Z_DATA_ERROR && (i = Z_NEED_DICT)); s.avail_in > 0 && i === Z_STREAM_END && s.state.wrap > 0 && 0 !== t[s.next_in];)
                inflate_1$2.inflateReset(s),
                i = inflate_1$2.inflate(s, r);
            switch (i) {
            case Z_STREAM_ERROR:
            case Z_DATA_ERROR:
            case Z_NEED_DICT:
            case Z_MEM_ERROR:
                return this.onEnd(i), this.ended = !0, !1
            }
            if (a = s.avail_out, s.next_out && (0 === s.avail_out || i === Z_STREAM_END))
                if ("string" === this.options.to) {
                    var h = strings.utf8border(s.output, s.next_out),
                        l = s.next_out - h,
                        p = strings.buf2string(s.output, h);
                    s.next_out = l,
                    s.avail_out = n - l,
                    l && s.output.set(s.output.subarray(h, h + l), 0),
                    this.onData(p)
                } else
                    this.onData(s.output.length === s.next_out ? s.output : s.output.subarray(0, s.next_out));
            if (i !== Z_OK || 0 !== a) {
                if (i === Z_STREAM_END)
                    return i = inflate_1$2.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, !0;
                if (0 === s.avail_in)
                    break
            }
        }
        return !0
    },
    Inflate$1.prototype.onData = function(t) {
        this.chunks.push(t)
    },
    Inflate$1.prototype.onEnd = function(t) {
        t === Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = common.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
    };
    var Inflate_1$1 = Inflate$1,
        inflate_2 = inflate$1,
        inflateRaw_1$1 = inflateRaw$1,
        ungzip$1 = inflate$1,
        constants = constants$2,
        inflate_1$1 = {
            Inflate: Inflate_1$1,
            inflate: inflate_2,
            inflateRaw: inflateRaw_1$1,
            ungzip: ungzip$1,
            constants: constants
        },
        {Inflate: Inflate, inflate: inflate, inflateRaw: inflateRaw, ungzip: ungzip} = inflate_1$1,
        inflate_1 = inflate,
        t$1 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        e$2 = Symbol(),
        n$3 = new Map;
    class s$3 {
        constructor(t, e)
        {
            if (this._$cssResult$ = !0, e !== e$2)
                throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = t
        }
        get styleSheet()
        {
            var t = n$3.get(this.cssText);
            return t$1 && void 0 === t && (n$3.set(this.cssText, t = new CSSStyleSheet), t.replaceSync(this.cssText)), t
        }
        toString()
        {
            return this.cssText
        }
    }
    var o$3 = t => new s$3("string" == typeof t ? t : t + "", e$2),
        r$2 = function(t) {
            for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                i[r - 1] = arguments[r];
            var a = 1 === t.length ? t[0] : i.reduce(((e, i, r) => e + (t => {
                if (!0 === t._$cssResult$)
                    return t.cssText;
                if ("number" == typeof t)
                    return t;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            })(i) + t[r + 1]), t[0]);
            return new s$3(a, e$2)
        },
        i$1 = (t, e) => {
            t$1 ? t.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : e.forEach((e => {
                var i = document.createElement("style"),
                    r = window.litNonce;
                void 0 !== r && i.setAttribute("nonce", r),
                i.textContent = e.cssText,
                t.appendChild(i)
            }))
        },
        S$1 = t$1 ? t => t : t => t instanceof CSSStyleSheet ? (t => {
            var e = "";
            for (var i of t.cssRules)
                e += i.cssText;
            return o$3(e)
        })(t) : t




        ,
        /**
           * @license
           * Copyright 2017 Google LLC
           * SPDX-License-Identifier: BSD-3-Clause
           */
        s$2,
        e$1 = window.trustedTypes,
        r$1 = e$1 ? e$1.emptyScript : "",
        h$1 = window.reactiveElementPolyfillSupport,
        o$2 = {
            toAttribute(t, e) {
                switch (e) {
                case Boolean:
                    t = t ? r$1 : null;
                    break;
                case Object:
                case Array:
                    t = null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                var i = t;
                switch (e) {
                case Boolean:
                    i = null !== t;
                    break;
                case Number:
                    i = null === t ? null : Number(t);
                    break;
                case Object:
                case Array:
                    try {
                        i = JSON.parse(t)
                    } catch (t) {
                        i = null
                    }
                }
                return i
            }
        },
        n$2 = (t, e) => e !== t && (e == e || t == t),
        l$2 = {
            attribute: !0,
            type: String,
            converter: o$2,
            reflect: !1,
            hasChanged: n$2
        },
        t;
    class a$1 extends HTMLElement {
        constructor()
        {
            super(),
            this._$Et = new Map,
            this.isUpdatePending = !1,
            this.hasUpdated = !1,
            this._$Ei = null,
            this.o()
        }
        static addInitializer(t)
        {
            var e;
            null !== (e = this.l) && void 0 !== e || (this.l = []),
            this.l.push(t)
        }
        static get observedAttributes()
        {
            this.finalize();
            var t = [];
            return this.elementProperties.forEach(((e, i) => {
                var r = this._$Eh(i, e);
                void 0 !== r && (this._$Eu.set(r, i), t.push(r))
            })), t
        }
        static createProperty(t)
        {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l$2;
            if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                var i = "symbol" == typeof t ? Symbol() : "__" + t,
                    r = this.getPropertyDescriptor(t, i, e);
                void 0 !== r && Object.defineProperty(this.prototype, t, r)
            }
        }
        static getPropertyDescriptor(t, e, i)
        {
            return {
                get() {
                    return this[e]
                },
                set(r) {
                    var a = this[t];
                    this[e] = r,
                    this.requestUpdate(t, a, i)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(t)
        {
            return this.elementProperties.get(t) || l$2
        }
        static finalize()
        {
            if (this.hasOwnProperty("finalized"))
                return !1;
            this.finalized = !0;
            var t = Object.getPrototypeOf(this);
            if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map, this.hasOwnProperty("properties")) {
                var e = this.properties,
                    i = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
                for (var r of i)
                    this.createProperty(r, e[r])
            }
            return this.elementStyles = this.finalizeStyles(this.styles), !0
        }
        static finalizeStyles(t)
        {
            var e = [];
            if (Array.isArray(t)) {
                var i = new Set(t.flat(1 / 0).reverse());
                for (var r of i)
                    e.unshift(S$1(r))
            } else
                void 0 !== t && e.push(S$1(t));
            return e
        }
        static _$Eh(t, e)
        {
            var i = e.attribute;
            return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0
        }
        o()
        {
            var t;
            this._$Ep = new Promise((t => this.enableUpdating = t)),
            this._$AL = new Map,
            this._$Em(),
            this.requestUpdate(),
            null === (t = this.constructor.l) || void 0 === t || t.forEach((t => t(this)))
        }
        addController(t)
        {
            var e,
                i;
            (null !== (e = this._$Eg) && void 0 !== e ? e : this._$Eg = []).push(t),
            void 0 !== this.renderRoot && this.isConnected && (null === (i = t.hostConnected) || void 0 === i || i.call(t))
        }
        removeController(t)
        {
            var e;
            null === (e = this._$Eg) || void 0 === e || e.splice(this._$Eg.indexOf(t) >>> 0, 1)
        }
        _$Em()
        {
            this.constructor.elementProperties.forEach(((t, e) => {
                this.hasOwnProperty(e) && (this._$Et.set(e, this[e]), delete this[e])
            }))
        }
        createRenderRoot()
        {
            var t,
                e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
            return i$1(e, this.constructor.elementStyles), e
        }
        connectedCallback()
        {
            var t;
            void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (t = this._$Eg) || void 0 === t || t.forEach((t => {
                var e;
                return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
            }))
        }
        enableUpdating(t) {}
        disconnectedCallback()
        {
            var t;
            null === (t = this._$Eg) || void 0 === t || t.forEach((t => {
                var e;
                return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
            }))
        }
        attributeChangedCallback(t, e, i)
        {
            this._$AK(t, i)
        }
        _$ES(t, e)
        {
            var i,
                r,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l$2,
                s = this.constructor._$Eh(t, a);
            if (void 0 !== s && !0 === a.reflect) {
                var n = (null !== (r = null === (i = a.converter) || void 0 === i ? void 0 : i.toAttribute) && void 0 !== r ? r : o$2.toAttribute)(e, a.type);
                this._$Ei = t,
                null == n ? this.removeAttribute(s) : this.setAttribute(s, n),
                this._$Ei = null
            }
        }
        _$AK(t, e)
        {
            var i,
                r,
                a,
                s = this.constructor,
                n = s._$Eu.get(t);
            if (void 0 !== n && this._$Ei !== n) {
                var o = s.getPropertyOptions(n),
                    h = o.converter,
                    l = null !== (a = null !== (r = null === (i = h) || void 0 === i ? void 0 : i.fromAttribute) && void 0 !== r ? r : "function" == typeof h ? h : null) && void 0 !== a ? a : o$2.fromAttribute;
                this._$Ei = n,
                this[n] = l(e, o.type),
                this._$Ei = null
            }
        }
        requestUpdate(t, e, i)
        {
            var r = !0;
            void 0 !== t && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || n$2)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === i.reflect && this._$Ei !== t && (void 0 === this._$E_ && (this._$E_ = new Map), this._$E_.set(t, i))) : r = !1),
            !this.isUpdatePending && r && (this._$Ep = this._$EC())
        }
        _$EC()
        {
            var t = this;
            return _asyncToGenerator((function* () {
                t.isUpdatePending = !0;
                try {
                    yield t._$Ep
                } catch (e) {
                    Promise.reject(e)
                }
                var e = t.scheduleUpdate();
                return null != e && (yield e), !t.isUpdatePending
            }))()
        }
        scheduleUpdate()
        {
            return this.performUpdate()
        }
        performUpdate()
        {
            var t;
            if (this.isUpdatePending) {
                this.hasUpdated,
                this._$Et && (this._$Et.forEach(((t, e) => this[e] = t)), this._$Et = void 0);
                var e = !1,
                    i = this._$AL;
                try {
                    (e = this.shouldUpdate(i)) ? (this.willUpdate(i), null === (t = this._$Eg) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                    })), this.update(i)) : this._$EU()
                } catch (t) {
                    throw e = !1, this._$EU(), t
                }
                e && this._$AE(i)
            }
        }
        willUpdate(t) {}
        _$AE(t)
        {
            var e;
            null === (e = this._$Eg) || void 0 === e || e.forEach((t => {
                var e;
                return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
            })),
            this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)),
            this.updated(t)
        }
        _$EU()
        {
            this._$AL = new Map,
            this.isUpdatePending = !1
        }
        get updateComplete()
        {
            return this.getUpdateComplete()
        }
        getUpdateComplete()
        {
            return this._$Ep
        }
        shouldUpdate(t)
        {
            return !0
        }
        update(t)
        {
            void 0 !== this._$E_ && (this._$E_.forEach(((t, e) => this._$ES(e, this[e], t))), this._$E_ = void 0),
            this._$EU()
        }
        updated(t) {}
        firstUpdated(t) {}
    }
    a$1.finalized = !0,
    a$1.elementProperties = new Map,
    a$1.elementStyles = [],
    a$1.shadowRootOptions = {
        mode: "open"
    },
    null == h$1 || h$1({
        ReactiveElement: a$1
    }),
    (null !== (s$2 = globalThis.reactiveElementVersions) && void 0 !== s$2 ? s$2 : globalThis.reactiveElementVersions = []).push("1.2.1");
    var i = globalThis.trustedTypes,
        s$1 = i ? i.createPolicy("lit-html", {
            createHTML: t => t
        }) : void 0,
        e = "lit$".concat((Math.random() + "").slice(9), "$"),
        o$1 = "?" + e,
        n$1 = "<".concat(o$1, ">"),
        l$1 = document,
        h = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return l$1.createComment(t)
        },
        r = t => null === t || "object" != typeof t && "function" != typeof t,
        d = Array.isArray,
        u = t => {
            var e;
            return d(t) || "function" == typeof (null === (e = t) || void 0 === e ? void 0 : e[Symbol.iterator])
        },
        c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        v = /-->/g,
        a = />/g,
        f = />|[  \n\r](?:([^\s"'>=/]+)([   \n\r]*=[   \n\r]*(?:[^   \n\r"'`<>=]|("|')|))|$)/g,
        _ = /'/g,
        m = /"/g,
        g = /^(?:script|style|textarea)$/i,
        p = t => function(e) {
            for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                r[a - 1] = arguments[a];
            return {
                _$litType$: t,
                strings: e,
                values: r
            }
        },
        $ = p(1),
        b = Symbol.for("lit-noChange"),
        w = Symbol.for("lit-nothing"),
        T = new WeakMap,
        x = (t, e, i) => {
            var r,
                a,
                s = null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r ? r : e,
                n = s._$litPart$;
            if (void 0 === n) {
                var o = null !== (a = null == i ? void 0 : i.renderBefore) && void 0 !== a ? a : null;
                s._$litPart$ = n = new N(e.insertBefore(h(), o), o, void 0, null != i ? i : {})
            }
            return n._$AI(t), n
        },
        A = l$1.createTreeWalker(l$1, 129, null, !1),
        C = (t, i) => {
            for (var r, s = t.length - 1, n = [], o = 2 === i ? "<svg>" : "", h = c, l = 0; l < s; l++) {
                for (var p = t[l], d = void 0, u = void 0, y = -1, b = 0; b < p.length && (h.lastIndex = b, null !== (u = h.exec(p)));)
                    b = h.lastIndex,
                    h === c ? "!--" === u[1] ? h = v : void 0 !== u[1] ? h = a : void 0 !== u[2] ? (g.test(u[2]) && (r = RegExp("</" + u[2], "g")), h = f) : void 0 !== u[3] && (h = f) : h === f ? ">" === u[0] ? (h = null != r ? r : c, y = -1) : void 0 === u[1] ? y = -2 : (y = h.lastIndex - u[2].length, d = u[1], h = void 0 === u[3] ? f : '"' === u[3] ? m : _) : h === m || h === _ ? h = f : h === v || h === a ? h = c : (h = f, r = void 0);
                var E = h === f && t[l + 1].startsWith("/>") ? " " : "";
                o += h === c ? p + n$1 : y >= 0 ? (n.push(d), p.slice(0, y) + "$lit$" + p.slice(y) + e + E) : p + e + (-2 === y ? (n.push(void 0), l) : E)
            }
            var S = o + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
            if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
                throw Error("invalid template strings array");
            return [void 0 !== s$1 ? s$1.createHTML(S) : S, n]
        };
    class E {
        constructor(t, r)
        {
            var a,
                {strings: s, _$litType$: n} = t;
            this.parts = [];
            var o = 0,
                l = 0,
                p = s.length - 1,
                f = this.parts,
                [c, d] = C(s, n);
            if (this.el = E.createElement(c, r), A.currentNode = this.el.content, 2 === n) {
                var m = this.el.content,
                    u = m.firstChild;
                u.remove(),
                m.append(...u.childNodes)
            }
            for (; null !== (a = A.nextNode()) && f.length < p;) {
                if (1 === a.nodeType) {
                    if (a.hasAttributes()) {
                        var y = [];
                        for (var v of a.getAttributeNames())
                            if (v.endsWith("$lit$") || v.startsWith(e)) {
                                var _ = d[l++];
                                if (y.push(v), void 0 !== _) {
                                    var b = a.getAttribute(_.toLowerCase() + "$lit$").split(e),
                                        x = /([.?@])?(.*)/.exec(_);
                                    f.push({
                                        type: 1,
                                        index: o,
                                        name: x[2],
                                        strings: b,
                                        ctor: "." === x[1] ? M : "?" === x[1] ? H : "@" === x[1] ? I : S
                                    })
                                } else
                                    f.push({
                                        type: 6,
                                        index: o
                                    })
                            }
                        for (var P of y)
                            a.removeAttribute(P)
                    }
                    if (g.test(a.tagName)) {
                        var T = a.textContent.split(e),
                            w = T.length - 1;
                        if (w > 0) {
                            a.textContent = i ? i.emptyScript : "";
                            for (var k = 0; k < w; k++)
                                a.append(T[k], h()),
                                A.nextNode(),
                                f.push({
                                    type: 2,
                                    index: ++o
                                });
                            a.append(T[w], h())
                        }
                    }
                } else if (8 === a.nodeType)
                    if (a.data === o$1)
                        f.push({
                            type: 2,
                            index: o
                        });
                    else
                        for (var D = -1; -1 !== (D = a.data.indexOf(e, D + 1));)
                            f.push({
                                type: 7,
                                index: o
                            }),
                            D += e.length - 1;
                o++
            }
        }
        static createElement(t, e)
        {
            var i = l$1.createElement("template");
            return i.innerHTML = t, i
        }
    }
    function P(t, e) {
        var i,
            a,
            s,
            n,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            h = arguments.length > 3 ? arguments[3] : void 0;
        if (e === b)
            return e;
        var l = void 0 !== h ? null === (i = o._$Cl) || void 0 === i ? void 0 : i[h] : o._$Cu,
            p = r(e) ? void 0 : e._$litDirective$;
        return (null == l ? void 0 : l.constructor) !== p && (null === (a = null == l ? void 0 : l._$AO) || void 0 === a || a.call(l, !1), void 0 === p ? l = void 0 : (l = new p(t))._$AT(t, o, h), void 0 !== h ? (null !== (s = (n = o)._$Cl) && void 0 !== s ? s : n._$Cl = [])[h] = l : o._$Cu = l), void 0 !== l && (e = P(t, l._$AS(t, e.values), l, h)), e
    }
    class V {
        constructor(t, e)
        {
            this.v = [],
            this._$AN = void 0,
            this._$AD = t,
            this._$AM = e
        }
        get parentNode()
        {
            return this._$AM.parentNode
        }
        get _$AU()
        {
            return this._$AM._$AU
        }
        p(t)
        {
            var e,
                {el: {content: i}, parts: r} = this._$AD,
                a = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : l$1).importNode(i, !0);
            A.currentNode = a;
            for (var s = A.nextNode(), n = 0, o = 0, h = r[0]; void 0 !== h;) {
                if (n === h.index) {
                    var l = void 0;
                    2 === h.type ? l = new N(s, s.nextSibling, this, t) : 1 === h.type ? l = new h.ctor(s, h.name, h.strings, this, t) : 6 === h.type && (l = new L(s, this, t)),
                    this.v.push(l),
                    h = r[++o]
                }
                n !== (null == h ? void 0 : h.index) && (s = A.nextNode(), n++)
            }
            return a
        }
        m(t)
        {
            var e = 0;
            for (var i of this.v)
                void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])),
                e++
        }
    }
    class N {
        constructor(t, e, i, r)
        {
            var a;
            this.type = 2,
            this._$AH = w,
            this._$AN = void 0,
            this._$AA = t,
            this._$AB = e,
            this._$AM = i,
            this.options = r,
            this._$Cg = null === (a = null == r ? void 0 : r.isConnected) || void 0 === a || a
        }
        get _$AU()
        {
            var t,
                e;
            return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cg
        }
        get parentNode()
        {
            var t = this._$AA.parentNode,
                e = this._$AM;
            return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t
        }
        get startNode()
        {
            return this._$AA
        }
        get endNode()
        {
            return this._$AB
        }
        _$AI(t)
        {
            t = P(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this),
            r(t) ? t === w || null == t || "" === t ? (this._$AH !== w && this._$AR(), this._$AH = w) : t !== this._$AH && t !== b && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.S(t) : u(t) ? this.A(t) : this.$(t)
        }
        M(t)
        {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._$AB;
            return this._$AA.parentNode.insertBefore(t, e)
        }
        S(t)
        {
            this._$AH !== t && (this._$AR(), this._$AH = this.M(t))
        }
        $(t)
        {
            this._$AH !== w && r(this._$AH) ? this._$AA.nextSibling.data = t : this.S(l$1.createTextNode(t)),
            this._$AH = t
        }
        T(t)
        {
            var e,
                {values: i, _$litType$: r} = t,
                a = "number" == typeof r ? this._$AC(t) : (void 0 === r.el && (r.el = E.createElement(r.h, this.options)), r);
            if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === a)
                this._$AH.m(i);
            else {
                var s = new V(a, this),
                    n = s.p(this.options);
                s.m(i),
                this.S(n),
                this._$AH = s
            }
        }
        _$AC(t)
        {
            var e = T.get(t.strings);
            return void 0 === e && T.set(t.strings, e = new E(t)), e
        }
        A(t)
        {
            d(this._$AH) || (this._$AH = [], this._$AR());
            var e,
                i = this._$AH,
                r = 0;
            for (var a of t)
                r === i.length ? i.push(e = new N(this.M(h()), this.M(h()), this, this.options)) : e = i[r],
                e._$AI(a),
                r++;
            r < i.length && (this._$AR(e && e._$AB.nextSibling, r), i.length = r)
        }
        _$AR()
        {
            var t,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling,
                i = arguments.length > 1 ? arguments[1] : void 0;
            for (null === (t = this._$AP) || void 0 === t || t.call(this, !1, !0, i); e && e !== this._$AB;) {
                var r = e.nextSibling;
                e.remove(),
                e = r
            }
        }
        setConnected(t)
        {
            var e;
            void 0 === this._$AM && (this._$Cg = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
        }
    }
    class S {
        constructor(t, e, i, r, a)
        {
            this.type = 1,
            this._$AH = w,
            this._$AN = void 0,
            this.element = t,
            this.name = e,
            this._$AM = r,
            this.options = a,
            i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = w
        }
        get tagName()
        {
            return this.element.tagName
        }
        get _$AU()
        {
            return this._$AM._$AU
        }
        _$AI(t)
        {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                i = arguments.length > 2 ? arguments[2] : void 0,
                a = arguments.length > 3 ? arguments[3] : void 0,
                s = this.strings,
                n = !1;
            if (void 0 === s)
                t = P(this, t, e, 0),
                (n = !r(t) || t !== this._$AH && t !== b) && (this._$AH = t);
            else {
                var o,
                    h,
                    l = t;
                for (t = s[0], o = 0; o < s.length - 1; o++)
                    (h = P(this, l[i + o], e, o)) === b && (h = this._$AH[o]),
                    n || (n = !r(h) || h !== this._$AH[o]),
                    h === w ? t = w : t !== w && (t += (null != h ? h : "") + s[o + 1]),
                    this._$AH[o] = h
            }
            n && !a && this.k(t)
        }
        k(t)
        {
            t === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
        }
    }
    class M extends S {
        constructor()
        {
            super(...arguments),
            this.type = 3
        }
        k(t)
        {
            this.element[this.name] = t === w ? void 0 : t
        }
    }
    var k = i ? i.emptyScript : "";
    class H extends S {
        constructor()
        {
            super(...arguments),
            this.type = 4
        }
        k(t)
        {
            t && t !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name)
        }
    }
    class I extends S {
        constructor(t, e, i, r, a)
        {
            super(t, e, i, r, a),
            this.type = 5
        }
        _$AI(t)
        {
            var e;
            if ((t = null !== (e = P(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, 0)) && void 0 !== e ? e : w) !== b) {
                var i = this._$AH,
                    r = t === w && i !== w || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive,
                    a = t !== w && (i === w || r);
                r && this.element.removeEventListener(this.name, this, i),
                a && this.element.addEventListener(this.name, this, t),
                this._$AH = t
            }
        }
        handleEvent(t)
        {
            var e,
                i;
            "function" == typeof this._$AH ? this._$AH.call(null !== (i = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== i ? i : this.element, t) : this._$AH.handleEvent(t)
        }
    }
    class L {
        constructor(t, e, i)
        {
            this.element = t,
            this.type = 6,
            this._$AN = void 0,
            this._$AM = e,
            this.options = i
        }
        get _$AU()
        {
            return this._$AM._$AU
        }
        _$AI(t)
        {
            P(this, t)
        }
    }
    var z = window.litHtmlPolyfillSupport,
        l,
        o;
    null == z || z(E, N),
    (null !== (t = globalThis.litHtmlVersions) && void 0 !== t ? t : globalThis.litHtmlVersions = []).push("2.1.2");
    class s extends a$1 {
        constructor()
        {
            super(...arguments),
            this.renderOptions = {
                host: this
            },
            this._$Dt = void 0
        }
        createRenderRoot()
        {
            var t,
                e,
                i = super.createRenderRoot();
            return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i
        }
        update(t)
        {
            var e = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
            super.update(t),
            this._$Dt = x(e, this.renderRoot, this.renderOptions)
        }
        connectedCallback()
        {
            var t;
            super.connectedCallback(),
            null === (t = this._$Dt) || void 0 === t || t.setConnected(!0)
        }
        disconnectedCallback()
        {
            var t;
            super.disconnectedCallback(),
            null === (t = this._$Dt) || void 0 === t || t.setConnected(!1)
        }
        render()
        {
            return b
        }
    }
    s.finalized = !0,
    s._$litElement$ = !0,
    null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
        LitElement: s
    });
    var n = globalThis.litElementPolyfillSupport;
    null == n || n({
        LitElement: s
    }),
    (null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.1.2");
    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        lottie = {
            exports: {}
        },
        _templateObject$2;
    (function(module, exports) {
        var factory;
        "undefined" != typeof navigator && (factory = function() {
            var svgNS = "http://www.w3.org/2000/svg",
                locationHref = "",
                _useWebWorker = !1,
                initialDefaultFrame = -999999,
                setWebWorker = function(t) {
                    _useWebWorker = !!t
                },
                getWebWorker = function() {
                    return _useWebWorker
                },
                setLocationHref = function(t) {
                    locationHref = t
                },
                getLocationHref = function() {
                    return locationHref
                };
            function createTag(t) {
                return document.createElement(t)
            }
            function extendPrototype(t, e) {
                var i,
                    r,
                    a = t.length;
                for (i = 0; i < a; i += 1)
                    for (var s in r = t[i].prototype)
                        Object.prototype.hasOwnProperty.call(r, s) && (e.prototype[s] = r[s])
            }
            function getDescriptor(t, e) {
                return Object.getOwnPropertyDescriptor(t, e)
            }
            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t, e
            }
            var audioControllerFactory = function() {
                    function t(t) {
                        this.audios = [],
                        this.audioFactory = t,
                        this._volume = 1,
                        this._isMuted = !1
                    }
                    return t.prototype = {
                        addAudio: function(t) {
                            this.audios.push(t)
                        },
                        pause: function() {
                            var t,
                                e = this.audios.length;
                            for (t = 0; t < e; t += 1)
                                this.audios[t].pause()
                        },
                        resume: function() {
                            var t,
                                e = this.audios.length;
                            for (t = 0; t < e; t += 1)
                                this.audios[t].resume()
                        },
                        setRate: function(t) {
                            var e,
                                i = this.audios.length;
                            for (e = 0; e < i; e += 1)
                                this.audios[e].setRate(t)
                        },
                        createAudio: function(t) {
                            return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                src: [t]
                            }) : {
                                isPlaying: !1,
                                play: function() {
                                    this.isPlaying = !0
                                },
                                seek: function() {
                                    this.isPlaying = !1
                                },
                                playing: function() {},
                                rate: function() {},
                                setVolume: function() {}
                            }
                        },
                        setAudioFactory: function(t) {
                            this.audioFactory = t
                        },
                        setVolume: function(t) {
                            this._volume = t,
                            this._updateVolume()
                        },
                        mute: function() {
                            this._isMuted = !0,
                            this._updateVolume()
                        },
                        unmute: function() {
                            this._isMuted = !1,
                            this._updateVolume()
                        },
                        getVolume: function() {
                            return this._volume
                        },
                        _updateVolume: function() {
                            var t,
                                e = this.audios.length;
                            for (t = 0; t < e; t += 1)
                                this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                        }
                    }, function() {
                        return new t
                    }
                }(),
                createTypedArray = function() {
                    function t(t, e) {
                        var i,
                            r = 0,
                            a = [];
                        switch (t) {
                        case "int16":
                        case "uint8c":
                            i = 1;
                            break;
                        default:
                            i = 1.1
                        }
                        for (r = 0; r < e; r += 1)
                            a.push(i);
                        return a
                    }
                    return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                        return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                    } : t
                }();
            function createSizedArray(t) {
                return Array.apply(null, {
                    length: t
                })
            }
            function _typeof$6(t) {
                return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$6(t)
            }
            var subframeEnabled = !0,
                expressionsPlugin = null,
                expressionsInterfaces = null,
                idPrefix$1 = "",
                isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                bmPow = Math.pow,
                bmSqrt = Math.sqrt,
                bmFloor = Math.floor,
                bmMax = Math.max,
                bmMin = Math.min,
                BMMath = {};
            !function() {
                var t,
                    e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                    i = e.length;
                for (t = 0; t < i; t += 1)
                    BMMath[e[t]] = Math[e[t]]
            }(),
            BMMath.random = Math.random,
            BMMath.abs = function(t) {
                if ("object" === _typeof$6(t) && t.length) {
                    var e,
                        i = createSizedArray(t.length),
                        r = t.length;
                    for (e = 0; e < r; e += 1)
                        i[e] = Math.abs(t[e]);
                    return i
                }
                return Math.abs(t)
            };
            var defaultCurveSegments = 150,
                degToRads = Math.PI / 180,
                roundCorner = .5519;
            function styleDiv(t) {
                t.style.position = "absolute",
                t.style.top = 0,
                t.style.left = 0,
                t.style.display = "block",
                t.style.transformOrigin = "0 0",
                t.style.webkitTransformOrigin = "0 0",
                t.style.backfaceVisibility = "visible",
                t.style.webkitBackfaceVisibility = "visible",
                t.style.transformStyle = "preserve-3d",
                t.style.webkitTransformStyle = "preserve-3d",
                t.style.mozTransformStyle = "preserve-3d"
            }
            function BMEnterFrameEvent(t, e, i, r) {
                this.type = t,
                this.currentTime = e,
                this.totalTime = i,
                this.direction = r < 0 ? -1 : 1
            }
            function BMCompleteEvent(t, e) {
                this.type = t,
                this.direction = e < 0 ? -1 : 1
            }
            function BMCompleteLoopEvent(t, e, i, r) {
                this.type = t,
                this.currentLoop = i,
                this.totalLoops = e,
                this.direction = r < 0 ? -1 : 1
            }
            function BMSegmentStartEvent(t, e, i) {
                this.type = t,
                this.firstFrame = e,
                this.totalFrames = i
            }
            function BMDestroyEvent(t, e) {
                this.type = t,
                this.target = e
            }
            function BMRenderFrameErrorEvent(t, e) {
                this.type = "renderFrameError",
                this.nativeError = t,
                this.currentTime = e
            }
            function BMConfigErrorEvent(t) {
                this.type = "configError",
                this.nativeError = t
            }
            var createElementID = (_count = 0, function() {
                    return idPrefix$1 + "__lottie_element_" + (_count += 1)
                }),
                _count;
            function HSVtoRGB(t, e, i) {
                var r,
                    a,
                    s,
                    n,
                    o,
                    h,
                    l,
                    p;
                switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
                case 0:
                    r = i,
                    a = p,
                    s = h;
                    break;
                case 1:
                    r = l,
                    a = i,
                    s = h;
                    break;
                case 2:
                    r = h,
                    a = i,
                    s = p;
                    break;
                case 3:
                    r = h,
                    a = l,
                    s = i;
                    break;
                case 4:
                    r = p,
                    a = h,
                    s = i;
                    break;
                case 5:
                    r = i,
                    a = h,
                    s = l
                }
                return [r, a, s]
            }
            function RGBtoHSV(t, e, i) {
                var r,
                    a = Math.max(t, e, i),
                    s = Math.min(t, e, i),
                    n = a - s,
                    o = 0 === a ? 0 : n / a,
                    h = a / 255;
                switch (a) {
                case s:
                    r = 0;
                    break;
                case t:
                    r = e - i + n * (e < i ? 6 : 0),
                    r /= 6 * n;
                    break;
                case e:
                    r = i - t + 2 * n,
                    r /= 6 * n;
                    break;
                case i:
                    r = t - e + 4 * n,
                    r /= 6 * n
                }
                return [r, o, h]
            }
            function addSaturationToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
            }
            function addBrightnessToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
            }
            function addHueToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
            }
            var rgbToHex = function() {
                    var t,
                        e,
                        i = [];
                    for (t = 0; t < 256; t += 1)
                        e = t.toString(16),
                        i[t] = 1 === e.length ? "0" + e : e;
                    return function(t, e, r) {
                        return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
                    }
                }(),
                setSubframeEnabled = function(t) {
                    subframeEnabled = !!t
                },
                getSubframeEnabled = function() {
                    return subframeEnabled
                },
                setExpressionsPlugin = function(t) {
                    expressionsPlugin = t
                },
                getExpressionsPlugin = function() {
                    return expressionsPlugin
                },
                setExpressionInterfaces = function(t) {
                    expressionsInterfaces = t
                },
                getExpressionInterfaces = function() {
                    return expressionsInterfaces
                },
                setDefaultCurveSegments = function(t) {
                    defaultCurveSegments = t
                },
                getDefaultCurveSegments = function() {
                    return defaultCurveSegments
                },
                setIdPrefix = function(t) {
                    idPrefix$1 = t
                };
            function createNS(t) {
                return document.createElementNS(svgNS, t)
            }
            function _typeof$5(t) {
                return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$5(t)
            }
            var dataManager = function() {
                    var t,
                        e,
                        i = 1,
                        r = [],
                        a = {
                            onmessage: function() {},
                            postMessage: function(e) {
                                t({
                                    data: e
                                })
                            }
                        },
                        s = {
                            postMessage: function(t) {
                                a.onmessage({
                                    data: t
                                })
                            }
                        };
                    function n() {
                        e || (e = function(e) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                        type: "text/javascript"
                                    }),
                                    r = URL.createObjectURL(i);
                                return new Worker(r)
                            }
                            return t = e, a
                        }((function(t) {
                            if (s.dataManager || (s.dataManager = function() {
                                function t(a, s) {
                                    var n,
                                        o,
                                        h,
                                        l,
                                        p,
                                        c,
                                        d = a.length;
                                    for (o = 0; o < d; o += 1)
                                        if ("ks" in (n = a[o]) && !n.completed) {
                                            if (n.completed = !0, n.hasMask) {
                                                var m = n.masksProperties;
                                                for (l = m.length, h = 0; h < l; h += 1)
                                                    if (m[h].pt.k.i)
                                                        r(m[h].pt.k);
                                                    else
                                                        for (c = m[h].pt.k.length, p = 0; p < c; p += 1)
                                                            m[h].pt.k[p].s && r(m[h].pt.k[p].s[0]),
                                                            m[h].pt.k[p].e && r(m[h].pt.k[p].e[0])
                                            }
                                            0 === n.ty ? (n.layers = e(n.refId, s), t(n.layers, s)) : 4 === n.ty ? i(n.shapes) : 5 === n.ty && f(n)
                                        }
                                }
                                function e(t, e) {
                                    var i = function(t, e) {
                                        for (var i = 0, r = e.length; i < r;) {
                                            if (e[i].id === t)
                                                return e[i];
                                            i += 1
                                        }
                                        return null
                                    }(t, e);
                                    return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
                                }
                                function i(t) {
                                    var e,
                                        a,
                                        s;
                                    for (e = t.length - 1; e >= 0; e -= 1)
                                        if ("sh" === t[e].ty)
                                            if (t[e].ks.k.i)
                                                r(t[e].ks.k);
                                            else
                                                for (s = t[e].ks.k.length, a = 0; a < s; a += 1)
                                                    t[e].ks.k[a].s && r(t[e].ks.k[a].s[0]),
                                                    t[e].ks.k[a].e && r(t[e].ks.k[a].e[0]);
                                        else
                                            "gr" === t[e].ty && i(t[e].it)
                                }
                                function r(t) {
                                    var e,
                                        i = t.i.length;
                                    for (e = 0; e < i; e += 1)
                                        t.i[e][0] += t.v[e][0],
                                        t.i[e][1] += t.v[e][1],
                                        t.o[e][0] += t.v[e][0],
                                        t.o[e][1] += t.v[e][1]
                                }
                                function a(t, e) {
                                    var i = e ? e.split(".") : [100, 100, 100];
                                    return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                                }
                                var s,
                                    n = function() {
                                        var t = [4, 4, 14];
                                        function e(t) {
                                            var e,
                                                i,
                                                r,
                                                a = t.length;
                                            for (e = 0; e < a; e += 1)
                                                5 === t[e].ty && (r = void 0, r = (i = t[e]).t.d, i.t.d = {
                                                    k: [{
                                                        s: r,
                                                        t: 0
                                                    }]
                                                })
                                        }
                                        return function(i) {
                                            if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                var r,
                                                    s = i.assets.length;
                                                for (r = 0; r < s; r += 1)
                                                    i.assets[r].layers && e(i.assets[r].layers)
                                            }
                                        }
                                    }(),
                                    o = (s = [4, 7, 99], function(t) {
                                        if (t.chars && !a(s, t.v)) {
                                            var e,
                                                r = t.chars.length;
                                            for (e = 0; e < r; e += 1) {
                                                var n = t.chars[e];
                                                n.data && n.data.shapes && (i(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    }
                                                }, t.chars[e].t || (n.data.shapes.push({
                                                    ty: "no"
                                                }), n.data.shapes[0].it.push({
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    },
                                                    sk: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    sa: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    ty: "tr"
                                                })))
                                            }
                                        }
                                    }),
                                    h = function() {
                                        var t = [5, 7, 15];
                                        function e(t) {
                                            var e,
                                                i,
                                                r = t.length;
                                            for (e = 0; e < r; e += 1)
                                                5 === t[e].ty && (i = void 0, "number" == typeof (i = t[e].t.p).a && (i.a = {
                                                    a: 0,
                                                    k: i.a
                                                }), "number" == typeof i.p && (i.p = {
                                                    a: 0,
                                                    k: i.p
                                                }), "number" == typeof i.r && (i.r = {
                                                    a: 0,
                                                    k: i.r
                                                }))
                                        }
                                        return function(i) {
                                            if (a(t, i.v) && (e(i.layers), i.assets)) {
                                                var r,
                                                    s = i.assets.length;
                                                for (r = 0; r < s; r += 1)
                                                    i.assets[r].layers && e(i.assets[r].layers)
                                            }
                                        }
                                    }(),
                                    l = function() {
                                        var t = [4, 1, 9];
                                        function e(t) {
                                            var i,
                                                r,
                                                a,
                                                s = t.length;
                                            for (i = 0; i < s; i += 1)
                                                if ("gr" === t[i].ty)
                                                    e(t[i].it);
                                                else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                    if (t[i].c.k && t[i].c.k[0].i)
                                                        for (a = t[i].c.k.length, r = 0; r < a; r += 1)
                                                            t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255),
                                                            t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                                                    else
                                                        t[i].c.k[0] /= 255,
                                                        t[i].c.k[1] /= 255,
                                                        t[i].c.k[2] /= 255,
                                                        t[i].c.k[3] /= 255
                                        }
                                        function i(t) {
                                            var i,
                                                r = t.length;
                                            for (i = 0; i < r; i += 1)
                                                4 === t[i].ty && e(t[i].shapes)
                                        }
                                        return function(e) {
                                            if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                var r,
                                                    s = e.assets.length;
                                                for (r = 0; r < s; r += 1)
                                                    e.assets[r].layers && i(e.assets[r].layers)
                                            }
                                        }
                                    }(),
                                    p = function() {
                                        var t = [4, 4, 18];
                                        function e(t) {
                                            var i,
                                                r,
                                                a;
                                            for (i = t.length - 1; i >= 0; i -= 1)
                                                if ("sh" === t[i].ty)
                                                    if (t[i].ks.k.i)
                                                        t[i].ks.k.c = t[i].closed;
                                                    else
                                                        for (a = t[i].ks.k.length, r = 0; r < a; r += 1)
                                                            t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed),
                                                            t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                                                else
                                                    "gr" === t[i].ty && e(t[i].it)
                                        }
                                        function i(t) {
                                            var i,
                                                r,
                                                a,
                                                s,
                                                n,
                                                o,
                                                h = t.length;
                                            for (r = 0; r < h; r += 1) {
                                                if ((i = t[r]).hasMask) {
                                                    var l = i.masksProperties;
                                                    for (s = l.length, a = 0; a < s; a += 1)
                                                        if (l[a].pt.k.i)
                                                            l[a].pt.k.c = l[a].cl;
                                                        else
                                                            for (o = l[a].pt.k.length, n = 0; n < o; n += 1)
                                                                l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl),
                                                                l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl)
                                                }
                                                4 === i.ty && e(i.shapes)
                                            }
                                        }
                                        return function(e) {
                                            if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                var r,
                                                    s = e.assets.length;
                                                for (r = 0; r < s; r += 1)
                                                    e.assets[r].layers && i(e.assets[r].layers)
                                            }
                                        }
                                    }();
                                function f(t) {
                                    0 === t.t.a.length && t.t.p
                                }
                                var c = {
                                    completeData: function(i) {
                                        i.__complete || (l(i), n(i), o(i), h(i), p(i), t(i.layers, i.assets), function(i, r) {
                                            if (i) {
                                                var a = 0,
                                                    s = i.length;
                                                for (a = 0; a < s; a += 1)
                                                    1 === i[a].t && (i[a].data.layers = e(i[a].data.refId, r), t(i[a].data.layers, r))
                                            }
                                        }(i.chars, i.assets), i.__complete = !0)
                                    }
                                };
                                return c.checkColors = l, c.checkChars = o, c.checkPathProperties = h, c.checkShapes = p, c.completeLayers = t, c
                            }()), s.assetLoader || (s.assetLoader = function() {
                                function t(t) {
                                    var e = t.getResponseHeader("content-type");
                                    return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                }
                                return {
                                    load: function(e, i, r, a) {
                                        var s,
                                            n = new XMLHttpRequest;
                                        try {
                                            n.responseType = "json"
                                        } catch (t) {}
                                        n.onreadystatechange = function() {
                                            if (4 === n.readyState)
                                                if (200 === n.status)
                                                    s = t(n),
                                                    r(s);
                                                else
                                                    try {
                                                        s = t(n),
                                                        r(s)
                                                    } catch (t) {
                                                        a && a(t)
                                                    }
                                        };
                                        try {
                                            n.open(["G", "E", "T"].join(""), e, !0)
                                        } catch (t) {
                                            n.open(["G", "E", "T"].join(""), i + "/" + e, !0)
                                        }
                                        n.send()
                                    }
                                }
                            }()), "loadAnimation" === t.data.type)
                                s.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    s.dataManager.completeData(e),
                                    s.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    s.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }));
                            else if ("complete" === t.data.type) {
                                var e = t.data.animation;
                                s.dataManager.completeData(e),
                                s.postMessage({
                                    id: t.data.id,
                                    payload: e,
                                    status: "success"
                                })
                            } else
                                "loadData" === t.data.type && s.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    s.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    s.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }))
                        })), e.onmessage = function(t) {
                            var e = t.data,
                                i = e.id,
                                a = r[i];
                            r[i] = null,
                            "success" === e.status ? a.onComplete(e.payload) : a.onError && a.onError()
                        })
                    }
                    function o(t, e) {
                        var a = "processId_" + (i += 1);
                        return r[a] = {
                            onComplete: t,
                            onError: e
                        }, a
                    }
                    return {
                        loadAnimation: function(t, i, r) {
                            n();
                            var a = o(i, r);
                            e.postMessage({
                                type: "loadAnimation",
                                path: t,
                                fullPath: window.location.origin + window.location.pathname,
                                id: a
                            })
                        },
                        loadData: function(t, i, r) {
                            n();
                            var a = o(i, r);
                            e.postMessage({
                                type: "loadData",
                                path: t,
                                fullPath: window.location.origin + window.location.pathname,
                                id: a
                            })
                        },
                        completeAnimation: function(t, i, r) {
                            n();
                            var a = o(i, r);
                            e.postMessage({
                                type: "complete",
                                animation: t,
                                id: a
                            })
                        }
                    }
                }(),
                ImagePreloader = function() {
                    var t = function() {
                        var t = createTag("canvas");
                        t.width = 1,
                        t.height = 1;
                        var e = t.getContext("2d");
                        return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                    }();
                    function e() {
                        this.loadedAssets += 1,
                        this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }
                    function i() {
                        this.loadedFootagesCount += 1,
                        this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }
                    function r(t, e, i) {
                        var r = "";
                        if (t.e)
                            r = t.p;
                        else if (e) {
                            var a = t.p;
                            -1 !== a.indexOf("images/") && (a = a.split("/")[1]),
                            r = e + a
                        } else
                            r = i,
                            r += t.u ? t.u : "",
                            r += t.p;
                        return r
                    }
                    function a(t) {
                        var e = 0,
                            i = setInterval(function() {
                                (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)),
                                e += 1
                            }.bind(this), 50)
                    }
                    function s(t) {
                        var e = {
                                assetData: t
                            },
                            i = r(t, this.assetsPath, this.path);
                        return dataManager.loadData(i, function(t) {
                            e.img = t,
                            this._footageLoaded()
                        }.bind(this), function() {
                            e.img = {},
                            this._footageLoaded()
                        }.bind(this)), e
                    }
                    function n() {
                        this._imageLoaded = e.bind(this),
                        this._footageLoaded = i.bind(this),
                        this.testImageLoaded = a.bind(this),
                        this.createFootageData = s.bind(this),
                        this.assetsPath = "",
                        this.path = "",
                        this.totalImages = 0,
                        this.totalFootages = 0,
                        this.loadedAssets = 0,
                        this.loadedFootagesCount = 0,
                        this.imagesLoadedCb = null,
                        this.images = []
                    }
                    return n.prototype = {
                        loadAssets: function(t, e) {
                            var i;
                            this.imagesLoadedCb = e;
                            var r = t.length;
                            for (i = 0; i < r; i += 1)
                                t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                        },
                        setAssetsPath: function(t) {
                            this.assetsPath = t || ""
                        },
                        setPath: function(t) {
                            this.path = t || ""
                        },
                        loadedImages: function() {
                            return this.totalImages === this.loadedAssets
                        },
                        loadedFootages: function() {
                            return this.totalFootages === this.loadedFootagesCount
                        },
                        destroy: function() {
                            this.imagesLoadedCb = null,
                            this.images.length = 0
                        },
                        getAsset: function(t) {
                            for (var e = 0, i = this.images.length; e < i;) {
                                if (this.images[e].assetData === t)
                                    return this.images[e].img;
                                e += 1
                            }
                            return null
                        },
                        createImgData: function(e) {
                            var i = r(e, this.assetsPath, this.path),
                                a = createTag("img");
                            a.crossOrigin = "anonymous",
                            a.addEventListener("load", this._imageLoaded, !1),
                            a.addEventListener("error", function() {
                                s.img = t,
                                this._imageLoaded()
                            }.bind(this), !1),
                            a.src = i;
                            var s = {
                                img: a,
                                assetData: e
                            };
                            return s
                        },
                        createImageData: function(e) {
                            var i = r(e, this.assetsPath, this.path),
                                a = createNS("image");
                            isSafari ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1),
                            a.addEventListener("error", function() {
                                s.img = t,
                                this._imageLoaded()
                            }.bind(this), !1),
                            a.setAttributeNS("http://www.w3.org/1999/xlink", "href", i),
                            this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
                            var s = {
                                img: a,
                                assetData: e
                            };
                            return s
                        },
                        imageLoaded: e,
                        footageLoaded: i,
                        setCacheType: function(t, e) {
                            "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }
                    }, n
                }();
            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var i = this._cbs[t], r = 0; r < i.length; r += 1)
                            i[r](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function() {
                        this.removeEventListener(t, e)
                    }.bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for (var i = 0, r = this._cbs[t].length; i < r;)
                                this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1),
                                i += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else
                        this._cbs[t] = null
                }
            };
            var markerParser = function() {
                    function t(t) {
                        for (var e, i = t.split("\r\n"), r = {}, a = 0, s = 0; s < i.length; s += 1)
                            2 === (e = i[s].split(":")).length && (r[e[0]] = e[1].trim(), a += 1);
                        if (0 === a)
                            throw new Error;
                        return r
                    }
                    return function(e) {
                        for (var i = [], r = 0; r < e.length; r += 1) {
                            var a = e[r],
                                s = {
                                    time: a.tm,
                                    duration: a.dr
                                };
                            try {
                                s.payload = JSON.parse(e[r].cm)
                            } catch (i) {
                                try {
                                    s.payload = t(e[r].cm)
                                } catch (t) {
                                    s.payload = {
                                        name: e[r].cm
                                    }
                                }
                            }
                            i.push(s)
                        }
                        return i
                    }
                }(),
                ProjectInterface = function() {
                    function t(t) {
                        this.compositions.push(t)
                    }
                    return function() {
                        function e(t) {
                            for (var e = 0, i = this.compositions.length; e < i;) {
                                if (this.compositions[e].data && this.compositions[e].data.nm === t)
                                    return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                e += 1
                            }
                            return null
                        }
                        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                    }
                }(),
                renderers = {},
                registerRenderer = function(t, e) {
                    renderers[t] = e
                };
            function getRenderer(t) {
                return renderers[t]
            }
            function getRegisteredRenderer() {
                if (renderers.canvas)
                    return "canvas";
                for (var t in renderers)
                    if (renderers[t])
                        return t;
                return ""
            }
            function _typeof$4(t) {
                return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$4(t)
            }
            var AnimationItem = function() {
                this._cbs = [],
                this.name = "",
                this.path = "",
                this.isLoaded = !1,
                this.currentFrame = 0,
                this.currentRawFrame = 0,
                this.firstFrame = 0,
                this.totalFrames = 0,
                this.frameRate = 0,
                this.frameMult = 0,
                this.playSpeed = 1,
                this.playDirection = 1,
                this.playCount = 0,
                this.animationData = {},
                this.assets = [],
                this.isPaused = !0,
                this.autoplay = !1,
                this.loop = !0,
                this.renderer = null,
                this.animationID = createElementID(),
                this.assetsPath = "",
                this.timeCompleted = 0,
                this.segmentPos = 0,
                this.isSubframeEnabled = getSubframeEnabled(),
                this.segments = [],
                this._idle = !0,
                this._completedLoop = !1,
                this.projectInterface = ProjectInterface(),
                this.imagePreloader = new ImagePreloader,
                this.audioController = audioControllerFactory(),
                this.markers = [],
                this.configAnimation = this.configAnimation.bind(this),
                this.onSetupError = this.onSetupError.bind(this),
                this.onSegmentComplete = this.onSegmentComplete.bind(this),
                this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0),
                this.expressionsPlugin = getExpressionsPlugin()
            };
            extendPrototype([BaseEvent], AnimationItem),
            AnimationItem.prototype.setParams = function(t) {
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = "svg";
                t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                var i = getRenderer(e);
                this.renderer = new i(this, t.rendererSettings),
                this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
                this.renderer.setProjectInterface(this.projectInterface),
                this.animType = e,
                "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10),
                this.autoplay = !("autoplay" in t) || t.autoplay,
                this.name = t.name ? t.name : "",
                this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments,
                this.assetsPath = t.assetsPath,
                this.initialSegment = t.initialSegment,
                t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
                t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
            },
            AnimationItem.prototype.onSetupError = function() {
                this.trigger("data_failed")
            },
            AnimationItem.prototype.setupAnimation = function(t) {
                dataManager.completeAnimation(t, this.configAnimation)
            },
            AnimationItem.prototype.setData = function(t, e) {
                e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
                var i = {
                        wrapper: t,
                        animationData: e
                    },
                    r = t.attributes;
                i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "",
                i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                var a = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
                "false" === a ? i.loop = !1 : "true" === a ? i.loop = !0 : "" !== a && (i.loop = parseInt(a, 10));
                var s = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
                i.autoplay = "false" !== s,
                i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "",
                "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1),
                i.path ? this.setParams(i) : this.trigger("destroy")
            },
            AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e,
                    i,
                    r = this.animationData.layers,
                    a = r.length,
                    s = t.layers,
                    n = s.length;
                for (i = 0; i < n; i += 1)
                    for (e = 0; e < a;) {
                        if (r[e].id === s[i].id) {
                            r[e] = s[i];
                            break
                        }
                        e += 1
                    }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                    for (a = t.assets.length, e = 0; e < a; e += 1)
                        this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1,
                dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
            },
            AnimationItem.prototype.onSegmentComplete = function(t) {
                this.animationData = t;
                var e = getExpressionsPlugin();
                e && e.initExpressions(this),
                this.loadNextSegment()
            },
            AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments)
                    return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1,
                dataManager.loadData(i, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this))
            },
            AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames),
                this.loadNextSegment()
            },
            AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"),
                this.checkLoaded()
            },
            AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath),
                this.imagePreloader.setPath(this.path),
                this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            },
            AnimationItem.prototype.configAnimation = function(t) {
                if (this.renderer)
                    try {
                        this.animationData = t,
                        this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)),
                        this.renderer.configAnimation(t),
                        t.assets || (t.assets = []),
                        this.assets = this.animationData.assets,
                        this.frameRate = this.animationData.fr,
                        this.frameMult = this.animationData.fr / 1e3,
                        this.renderer.searchExtraCompositions(t.assets),
                        this.markers = markerParser(t.markers || []),
                        this.trigger("config_ready"),
                        this.preloadImages(),
                        this.loadSegments(),
                        this.updaFrameModifier(),
                        this.waitForFontsLoaded(),
                        this.isPaused && this.audioController.pause()
                    } catch (t) {
                        this.triggerConfigError(t)
                    }
            },
            AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            },
            AnimationItem.prototype.checkLoaded = function() {
                if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                    this.isLoaded = !0;
                    var t = getExpressionsPlugin();
                    t && t.initExpressions(this),
                    this.renderer.initItems(),
                    setTimeout(function() {
                        this.trigger("DOMLoaded")
                    }.bind(this), 0),
                    this.gotoFrame(),
                    this.autoplay && this.play()
                }
            },
            AnimationItem.prototype.resize = function(t, e) {
                var i = "number" == typeof t ? t : void 0,
                    r = "number" == typeof e ? e : void 0;
                this.renderer.updateContainerSize(i, r)
            },
            AnimationItem.prototype.setSubframe = function(t) {
                this.isSubframeEnabled = !!t
            },
            AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
                this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
                this.trigger("enterFrame"),
                this.renderFrame(),
                this.trigger("drawnFrame")
            },
            AnimationItem.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded && this.renderer)
                    try {
                        this.expressionsPlugin && this.expressionsPlugin.resetFrame(),
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
            },
            AnimationItem.prototype.play = function(t) {
                t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
            },
            AnimationItem.prototype.pause = function(t) {
                t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
            },
            AnimationItem.prototype.togglePause = function(t) {
                t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
            },
            AnimationItem.prototype.stop = function(t) {
                t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
            },
            AnimationItem.prototype.getMarkerData = function(t) {
                for (var e, i = 0; i < this.markers.length; i += 1)
                    if ((e = this.markers[i]).payload && e.payload.name === t)
                        return e;
                return null
            },
            AnimationItem.prototype.goToAndStop = function(t, e, i) {
                if (!i || this.name === i) {
                    var r = Number(t);
                    if (isNaN(r)) {
                        var a = this.getMarkerData(t);
                        a && this.goToAndStop(a.time, !0)
                    } else
                        e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                    this.pause()
                }
            },
            AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                if (!i || this.name === i) {
                    var r = Number(t);
                    if (isNaN(r)) {
                        var a = this.getMarkerData(t);
                        a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                    } else
                        this.goToAndStop(r, e, i);
                    this.play()
                }
            },
            AnimationItem.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier,
                        i = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e),
                    i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                }
            },
            AnimationItem.prototype.adjustSegment = function(t, e) {
                this.playCount = 0,
                t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)),
                this.trigger("segmentStart")
            },
            AnimationItem.prototype.setSegment = function(t, e) {
                var i = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
                this.firstFrame = t,
                this.totalFrames = e - t,
                this.timeCompleted = this.totalFrames,
                -1 !== i && this.goToAndStop(i, !0)
            },
            AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
                    var i,
                        r = t.length;
                    for (i = 0; i < r; i += 1)
                        this.segments.push(t[i])
                } else
                    this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
                this.isPaused && this.play()
            },
            AnimationItem.prototype.resetSegments = function(t) {
                this.segments.length = 0,
                this.segments.push([this.animationData.ip, this.animationData.op]),
                t && this.checkSegments(0)
            },
            AnimationItem.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
            },
            AnimationItem.prototype.destroy = function(t) {
                t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
            },
            AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t,
                this.gotoFrame()
            },
            AnimationItem.prototype.setSpeed = function(t) {
                this.playSpeed = t,
                this.updaFrameModifier()
            },
            AnimationItem.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1,
                this.updaFrameModifier()
            },
            AnimationItem.prototype.setLoop = function(t) {
                this.loop = t
            },
            AnimationItem.prototype.setVolume = function(t, e) {
                e && this.name !== e || this.audioController.setVolume(t)
            },
            AnimationItem.prototype.getVolume = function() {
                return this.audioController.getVolume()
            },
            AnimationItem.prototype.mute = function(t) {
                t && this.name !== t || this.audioController.mute()
            },
            AnimationItem.prototype.unmute = function(t) {
                t && this.name !== t || this.audioController.unmute()
            },
            AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection,
                this.audioController.setRate(this.playSpeed * this.playDirection)
            },
            AnimationItem.prototype.getPath = function() {
                return this.path
            },
            AnimationItem.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e)
                    e = t.p;
                else if (this.assetsPath) {
                    var i = t.p;
                    -1 !== i.indexOf("images/") && (i = i.split("/")[1]),
                    e = this.assetsPath + i
                } else
                    e = this.path,
                    e += t.u ? t.u : "",
                    e += t.p;
                return e
            },
            AnimationItem.prototype.getAssetData = function(t) {
                for (var e = 0, i = this.assets.length; e < i;) {
                    if (t === this.assets[e].id)
                        return this.assets[e];
                    e += 1
                }
                return null
            },
            AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            },
            AnimationItem.prototype.show = function() {
                this.renderer.show()
            },
            AnimationItem.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
            },
            AnimationItem.prototype.updateDocumentData = function(t, e, i) {
                try {
                    this.renderer.getElementByPath(t).updateDocumentData(e, i)
                } catch (t) {}
            },
            AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t])
                    switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "drawnFrame":
                        this.drawnFrameEvent.currentTime = this.currentFrame,
                        this.drawnFrameEvent.totalTime = this.totalFrames,
                        this.drawnFrameEvent.direction = this.frameModifier,
                        this.triggerEvent(t, this.drawnFrameEvent);
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t, this));
                        break;
                    default:
                        this.triggerEvent(t)
                    }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)),
                "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)),
                "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)),
                "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)),
                "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
            },
            AnimationItem.prototype.triggerRenderFrameError = function(t) {
                var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e)
            },
            AnimationItem.prototype.triggerConfigError = function(t) {
                var e = new BMConfigErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e)
            };
            var animationManager = function() {
                    var t = {},
                        e = [],
                        i = 0,
                        r = 0,
                        a = 0,
                        s = !0,
                        n = !1;
                    function o(t) {
                        for (var i = 0, a = t.target; i < r;)
                            e[i].animation === a && (e.splice(i, 1), i -= 1, r -= 1, a.isPaused || p()),
                            i += 1
                    }
                    function h(t, i) {
                        if (!t)
                            return null;
                        for (var a = 0; a < r;) {
                            if (e[a].elem === t && null !== e[a].elem)
                                return e[a].animation;
                            a += 1
                        }
                        var s = new AnimationItem;
                        return f(s, t), s.setData(t, i), s
                    }
                    function l() {
                        a += 1,
                        m()
                    }
                    function p() {
                        a -= 1
                    }
                    function f(t, i) {
                        t.addEventListener("destroy", o),
                        t.addEventListener("_active", l),
                        t.addEventListener("_idle", p),
                        e.push({
                            elem: i,
                            animation: t
                        }),
                        r += 1
                    }
                    function c(t) {
                        var o,
                            h = t - i;
                        for (o = 0; o < r; o += 1)
                            e[o].animation.advanceTime(h);
                        i = t,
                        a && !n ? window.requestAnimationFrame(c) : s = !0
                    }
                    function d(t) {
                        i = t,
                        window.requestAnimationFrame(c)
                    }
                    function m() {
                        !n && a && s && (window.requestAnimationFrame(d), s = !1)
                    }
                    return t.registerAnimation = h, t.loadAnimation = function(t) {
                        var e = new AnimationItem;
                        return f(e, null), e.setParams(t), e
                    }, t.setSpeed = function(t, i) {
                        var a;
                        for (a = 0; a < r; a += 1)
                            e[a].animation.setSpeed(t, i)
                    }, t.setDirection = function(t, i) {
                        var a;
                        for (a = 0; a < r; a += 1)
                            e[a].animation.setDirection(t, i)
                    }, t.play = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1)
                            e[i].animation.play(t)
                    }, t.pause = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1)
                            e[i].animation.pause(t)
                    }, t.stop = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1)
                            e[i].animation.stop(t)
                    }, t.togglePause = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1)
                            e[i].animation.togglePause(t)
                    }, t.searchAnimations = function(t, e, i) {
                        var r,
                            a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                            s = a.length;
                        for (r = 0; r < s; r += 1)
                            i && a[r].setAttribute("data-bm-type", i),
                            h(a[r], t);
                        if (e && 0 === s) {
                            i || (i = "svg");
                            var n = document.getElementsByTagName("body")[0];
                            n.innerText = "";
                            var o = createTag("div");
                            o.style.width = "100%",
                            o.style.height = "100%",
                            o.setAttribute("data-bm-type", i),
                            n.appendChild(o),
                            h(o, t)
                        }
                    }, t.resize = function() {
                        var t;
                        for (t = 0; t < r; t += 1)
                            e[t].animation.resize()
                    }, t.goToAndStop = function(t, i, a) {
                        var s;
                        for (s = 0; s < r; s += 1)
                            e[s].animation.goToAndStop(t, i, a)
                    }, t.destroy = function(t) {
                        var i;
                        for (i = r - 1; i >= 0; i -= 1)
                            e[i].animation.destroy(t)
                    }, t.freeze = function() {
                        n = !0
                    }, t.unfreeze = function() {
                        n = !1,
                        m()
                    }, t.setVolume = function(t, i) {
                        var a;
                        for (a = 0; a < r; a += 1)
                            e[a].animation.setVolume(t, i)
                    }, t.mute = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1)
                            e[i].animation.mute(t)
                    }, t.unmute = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1)
                            e[i].animation.unmute(t)
                    }, t.getRegisteredAnimations = function() {
                        var t,
                            i = e.length,
                            r = [];
                        for (t = 0; t < i; t += 1)
                            r.push(e[t].animation);
                        return r
                    }, t
                }(),
                BezierFactory = function() {
                    var t = {
                            getBezierEasing: function(t, i, r, a, s) {
                                var n = s || ("bez_" + t + "_" + i + "_" + r + "_" + a).replace(/\./g, "p");
                                if (e[n])
                                    return e[n];
                                var o = new l([t, i, r, a]);
                                return e[n] = o, o
                            }
                        },
                        e = {},
                        i = .1,
                        r = "function" == typeof Float32Array;
                    function a(t, e) {
                        return 1 - 3 * e + 3 * t
                    }
                    function s(t, e) {
                        return 3 * e - 6 * t
                    }
                    function n(t) {
                        return 3 * t
                    }
                    function o(t, e, i) {
                        return ((a(e, i) * t + s(e, i)) * t + n(e)) * t
                    }
                    function h(t, e, i) {
                        return 3 * a(e, i) * t * t + 2 * s(e, i) * t + n(e)
                    }
                    function l(t) {
                        this._p = t,
                        this._mSampleValues = r ? new Float32Array(11) : new Array(11),
                        this._precomputed = !1,
                        this.get = this.get.bind(this)
                    }
                    return l.prototype = {
                        get: function(t) {
                            var e = this._p[0],
                                i = this._p[1],
                                r = this._p[2],
                                a = this._p[3];
                            return this._precomputed || this._precompute(), e === i && r === a ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), i, a)
                        },
                        _precompute: function() {
                            var t = this._p[0],
                                e = this._p[1],
                                i = this._p[2],
                                r = this._p[3];
                            this._precomputed = !0,
                            t === e && i === r || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r)
                                this._mSampleValues[r] = o(r * i, t, e)
                        },
                        _getTForX: function(t) {
                            for (var e = this._p[0], r = this._p[2], a = this._mSampleValues, s = 0, n = 1; 10 !== n && a[n] <= t; ++n)
                                s += i;
                            var l = s + (t - a[--n]) / (a[n + 1] - a[n]) * i,
                                p = h(l, e, r);
                            return p >= .001 ? function(t, e, i, r) {
                                for (var a = 0; a < 4; ++a) {
                                    var s = h(e, i, r);
                                    if (0 === s)
                                        return e;
                                    e -= (o(e, i, r) - t) / s
                                }
                                return e
                            }(t, l, e, r) : 0 === p ? l : function(t, e, i, r, a) {
                                var s,
                                    n,
                                    h = 0;
                                do {
                                    (s = o(n = e + (i - e) / 2, r, a) - t) > 0 ? i = n : e = n
                                } while (Math.abs(s) > 1e-7 && ++h < 10);
                                return n
                            }(t, s, s + i, e, r)
                        }
                    }, t
                }(),
                pooling = {
                    double: function(t) {
                        return t.concat(createSizedArray(t.length))
                    }
                },
                poolFactory = function(t, e, i) {
                    var r = 0,
                        a = t,
                        s = createSizedArray(a);
                    return {
                        newElement: function() {
                            return r ? s[r -= 1] : e()
                        },
                        release: function(t) {
                            r === a && (s = pooling.double(s), a *= 2),
                            i && i(t),
                            s[r] = t,
                            r += 1
                        }
                    }
                },
                bezierLengthPool = poolFactory(8, (function() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                })),
                segmentsLengthPool = poolFactory(8, (function() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }), (function(t) {
                    var e,
                        i = t.lengths.length;
                    for (e = 0; e < i; e += 1)
                        bezierLengthPool.release(t.lengths[e]);
                    t.lengths.length = 0
                }));
            function bezFunction() {
                var t = Math;
                function e(t, e, i, r, a, s) {
                    var n = t * r + e * a + i * s - a * r - s * t - i * e;
                    return n > -.001 && n < .001
                }
                var i = function(t, e, i, r) {
                    var a,
                        s,
                        n,
                        o,
                        h,
                        l,
                        p = getDefaultCurveSegments(),
                        f = 0,
                        c = [],
                        d = [],
                        m = bezierLengthPool.newElement();
                    for (n = i.length, a = 0; a < p; a += 1) {
                        for (h = a / (p - 1), l = 0, s = 0; s < n; s += 1)
                            o = bmPow(1 - h, 3) * t[s] + 3 * bmPow(1 - h, 2) * h * i[s] + 3 * (1 - h) * bmPow(h, 2) * r[s] + bmPow(h, 3) * e[s],
                            c[s] = o,
                            null !== d[s] && (l += bmPow(c[s] - d[s], 2)),
                            d[s] = c[s];
                        l && (f += l = bmSqrt(l)),
                        m.percents[a] = h,
                        m.lengths[a] = f
                    }
                    return m.addedLength = f, m
                };
                function r(t) {
                    this.segmentLength = 0,
                    this.points = new Array(t)
                }
                function a(t, e) {
                    this.partialLength = t,
                    this.point = e
                }
                var s,
                    n = (s = {}, function(t, i, n, o) {
                        var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                        if (!s[h]) {
                            var l,
                                p,
                                f,
                                c,
                                d,
                                m,
                                u,
                                y = getDefaultCurveSegments(),
                                g = 0,
                                v = null;
                            2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (y = 2);
                            var _ = new r(y);
                            for (f = n.length, l = 0; l < y; l += 1) {
                                for (u = createSizedArray(f), d = l / (y - 1), m = 0, p = 0; p < f; p += 1)
                                    c = bmPow(1 - d, 3) * t[p] + 3 * bmPow(1 - d, 2) * d * (t[p] + n[p]) + 3 * (1 - d) * bmPow(d, 2) * (i[p] + o[p]) + bmPow(d, 3) * i[p],
                                    u[p] = c,
                                    null !== v && (m += bmPow(u[p] - v[p], 2));
                                g += m = bmSqrt(m),
                                _.points[l] = new a(m, u),
                                v = u
                            }
                            _.segmentLength = g,
                            s[h] = _
                        }
                        return s[h]
                    });
                function o(t, e) {
                    var i = e.percents,
                        r = e.lengths,
                        a = i.length,
                        s = bmFloor((a - 1) * t),
                        n = t * e.addedLength,
                        o = 0;
                    if (s === a - 1 || 0 === s || n === r[s])
                        return i[s];
                    for (var h = r[s] > n ? -1 : 1, l = !0; l;)
                        if (r[s] <= n && r[s + 1] > n ? (o = (n - r[s]) / (r[s + 1] - r[s]), l = !1) : s += h, s < 0 || s >= a - 1) {
                            if (s === a - 1)
                                return i[s];
                            l = !1
                        }
                    return i[s] + (i[s + 1] - i[s]) * o
                }
                var h = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(t) {
                        var e,
                            r = segmentsLengthPool.newElement(),
                            a = t.c,
                            s = t.v,
                            n = t.o,
                            o = t.i,
                            h = t._length,
                            l = r.lengths,
                            p = 0;
                        for (e = 0; e < h - 1; e += 1)
                            l[e] = i(s[e], s[e + 1], n[e], o[e + 1]),
                            p += l[e].addedLength;
                        return a && h && (l[e] = i(s[e], s[0], n[e], o[0]), p += l[e].addedLength), r.totalLength = p, r
                    },
                    getNewSegment: function(e, i, r, a, s, n, l) {
                        s < 0 ? s = 0 : s > 1 && (s = 1);
                        var p,
                            f = o(s, l),
                            c = o(n = n > 1 ? 1 : n, l),
                            d = e.length,
                            m = 1 - f,
                            u = 1 - c,
                            y = m * m * m,
                            g = f * m * m * 3,
                            v = f * f * m * 3,
                            _ = f * f * f,
                            b = m * m * u,
                            E = f * m * u + m * f * u + m * m * c,
                            S = f * f * u + m * f * c + f * m * c,
                            x = f * f * c,
                            P = m * u * u,
                            A = f * u * u + m * c * u + m * u * c,
                            C = f * c * u + m * c * c + f * u * c,
                            T = f * c * c,
                            w = u * u * u,
                            k = c * u * u + u * c * u + u * u * c,
                            M = c * c * u + u * c * c + c * u * c,
                            D = c * c * c;
                        for (p = 0; p < d; p += 1)
                            h[4 * p] = t.round(1e3 * (y * e[p] + g * r[p] + v * a[p] + _ * i[p])) / 1e3,
                            h[4 * p + 1] = t.round(1e3 * (b * e[p] + E * r[p] + S * a[p] + x * i[p])) / 1e3,
                            h[4 * p + 2] = t.round(1e3 * (P * e[p] + A * r[p] + C * a[p] + T * i[p])) / 1e3,
                            h[4 * p + 3] = t.round(1e3 * (w * e[p] + k * r[p] + M * a[p] + D * i[p])) / 1e3;
                        return h
                    },
                    getPointInSegment: function(e, i, r, a, s, n) {
                        var h = o(s, n),
                            l = 1 - h;
                        return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * r[0] + (h * h * l + l * h * h + h * l * h) * a[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * r[1] + (h * h * l + l * h * h + h * l * h) * a[1] + h * h * h * i[1])) / 1e3]
                    },
                    buildBezierData: n,
                    pointOnLine2D: e,
                    pointOnLine3D: function(i, r, a, s, n, o, h, l, p) {
                        if (0 === a && 0 === o && 0 === p)
                            return e(i, r, s, n, h, l);
                        var f,
                            c = t.sqrt(t.pow(s - i, 2) + t.pow(n - r, 2) + t.pow(o - a, 2)),
                            d = t.sqrt(t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(p - a, 2)),
                            m = t.sqrt(t.pow(h - s, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
                        return (f = c > d ? c > m ? c - d - m : m - d - c : m > d ? m - d - c : d - c - m) > -1e-4 && f < 1e-4
                    }
                }
            }
            var bez = bezFunction(),
                initFrame = initialDefaultFrame,
                mathAbs = Math.abs;
            function interpolateValue(t, e) {
                var i,
                    r = this.offsetTime;
                "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                for (var a, s, n, o, h, l, p, f, c, d = e.lastIndex, m = d, u = this.keyframes.length - 1, y = !0; y;) {
                    if (a = this.keyframes[m], s = this.keyframes[m + 1], m === u - 1 && t >= s.t - r) {
                        a.h && (a = s),
                        d = 0;
                        break
                    }
                    if (s.t - r > t) {
                        d = m;
                        break
                    }
                    m < u - 1 ? m += 1 : (d = 0, y = !1)
                }
                n = this.keyframesMetadata[m] || {};
                var g,
                    v = s.t - r,
                    _ = a.t - r;
                if (a.to) {
                    n.bezierData || (n.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
                    var b = n.bezierData;
                    if (t >= v || t < _) {
                        var E = t >= v ? b.points.length - 1 : 0;
                        for (h = b.points[E].point.length, o = 0; o < h; o += 1)
                            i[o] = b.points[E].point[o]
                    } else {
                        n.__fnct ? c = n.__fnct : (c = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, n.__fnct = c),
                        l = c((t - _) / (v - _));
                        var S,
                            x = b.segmentLength * l,
                            P = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                        for (f = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, y = !0, p = b.points.length; y;) {
                            if (P += b.points[f].partialLength, 0 === x || 0 === l || f === b.points.length - 1) {
                                for (h = b.points[f].point.length, o = 0; o < h; o += 1)
                                    i[o] = b.points[f].point[o];
                                break
                            }
                            if (x >= P && x < P + b.points[f + 1].partialLength) {
                                for (S = (x - P) / b.points[f + 1].partialLength, h = b.points[f].point.length, o = 0; o < h; o += 1)
                                    i[o] = b.points[f].point[o] + (b.points[f + 1].point[o] - b.points[f].point[o]) * S;
                                break
                            }
                            f < p - 1 ? f += 1 : y = !1
                        }
                        e._lastPoint = f,
                        e._lastAddedLength = P - b.points[f].partialLength,
                        e._lastKeyframeIndex = m
                    }
                } else {
                    var A,
                        C,
                        T,
                        w,
                        k;
                    if (u = a.s.length, g = s.s || a.e, this.sh && 1 !== a.h)
                        t >= v ? (i[0] = g[0], i[1] = g[1], i[2] = g[2]) : t <= _ ? (i[0] = a.s[0], i[1] = a.s[1], i[2] = a.s[2]) : quaternionToEuler(i, slerp(createQuaternion(a.s), createQuaternion(g), (t - _) / (v - _)));
                    else
                        for (m = 0; m < u; m += 1)
                            1 !== a.h && (t >= v ? l = 1 : t < _ ? l = 0 : (a.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[m] ? c = n.__fnct[m] : (A = void 0 === a.o.x[m] ? a.o.x[0] : a.o.x[m], C = void 0 === a.o.y[m] ? a.o.y[0] : a.o.y[m], T = void 0 === a.i.x[m] ? a.i.x[0] : a.i.x[m], w = void 0 === a.i.y[m] ? a.i.y[0] : a.i.y[m], c = BezierFactory.getBezierEasing(A, C, T, w).get, n.__fnct[m] = c)) : n.__fnct ? c = n.__fnct : (A = a.o.x, C = a.o.y, T = a.i.x, w = a.i.y, c = BezierFactory.getBezierEasing(A, C, T, w).get, a.keyframeMetadata = c), l = c((t - _) / (v - _)))),
                            g = s.s || a.e,
                            k = 1 === a.h ? a.s[m] : a.s[m] + (g[m] - a.s[m]) * l,
                            "multidimensional" === this.propType ? i[m] = k : i = k
                }
                return e.lastIndex = d, i
            }
            function slerp(t, e, i) {
                var r,
                    a,
                    s,
                    n,
                    o,
                    h = [],
                    l = t[0],
                    p = t[1],
                    f = t[2],
                    c = t[3],
                    d = e[0],
                    m = e[1],
                    u = e[2],
                    y = e[3];
                return (a = l * d + p * m + f * u + c * y) < 0 && (a = -a, d = -d, m = -m, u = -u, y = -y), 1 - a > 1e-6 ? (r = Math.acos(a), s = Math.sin(r), n = Math.sin((1 - i) * r) / s, o = Math.sin(i * r) / s) : (n = 1 - i, o = i), h[0] = n * l + o * d, h[1] = n * p + o * m, h[2] = n * f + o * u, h[3] = n * c + o * y, h
            }
            function quaternionToEuler(t, e) {
                var i = e[0],
                    r = e[1],
                    a = e[2],
                    s = e[3],
                    n = Math.atan2(2 * r * s - 2 * i * a, 1 - 2 * r * r - 2 * a * a),
                    o = Math.asin(2 * i * r + 2 * a * s),
                    h = Math.atan2(2 * i * s - 2 * r * a, 1 - 2 * i * i - 2 * a * a);
                t[0] = n / degToRads,
                t[1] = o / degToRads,
                t[2] = h / degToRads
            }
            function createQuaternion(t) {
                var e = t[0] * degToRads,
                    i = t[1] * degToRads,
                    r = t[2] * degToRads,
                    a = Math.cos(e / 2),
                    s = Math.cos(i / 2),
                    n = Math.cos(r / 2),
                    o = Math.sin(e / 2),
                    h = Math.sin(i / 2),
                    l = Math.sin(r / 2);
                return [o * h * n + a * s * l, o * s * n + a * h * l, a * h * n - o * s * l, a * s * n - o * h * l]
            }
            function getValueAtCurrentTime() {
                var t = this.comp.renderedFrame - this.offsetTime,
                    e = this.keyframes[0].t - this.offsetTime,
                    i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                    this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                    var r = this.interpolateValue(t, this._caching);
                    this.pv = r
                }
                return this._caching.lastFrame = t, this.pv
            }
            function setVValue(t) {
                var e;
                if ("unidimensional" === this.propType)
                    e = t * this.mult,
                    mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                else
                    for (var i = 0, r = this.v.length; i < r;)
                        e = t[i] * this.mult,
                        mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0),
                        i += 1
            }
            function processEffectsSequence() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                    if (this.lock)
                        this.setVValue(this.pv);
                    else {
                        var t;
                        this.lock = !0,
                        this._mdf = this._isFirstFrame;
                        var e = this.effectsSequence.length,
                            i = this.kf ? this.pv : this.data.k;
                        for (t = 0; t < e; t += 1)
                            i = this.effectsSequence[t](i);
                        this.setVValue(i),
                        this._isFirstFrame = !1,
                        this.lock = !1,
                        this.frameId = this.elem.globalData.frameId
                    }
            }
            function addEffect(t) {
                this.effectsSequence.push(t),
                this.container.addDynamicProperty(this)
            }
            function ValueProperty(t, e, i, r) {
                this.propType = "unidimensional",
                this.mult = i || 1,
                this.data = e,
                this.v = i ? e.k * i : e.k,
                this.pv = e.k,
                this._mdf = !1,
                this.elem = t,
                this.container = r,
                this.comp = t.comp,
                this.k = !1,
                this.kf = !1,
                this.vel = 0,
                this.effectsSequence = [],
                this._isFirstFrame = !0,
                this.getValue = processEffectsSequence,
                this.setVValue = setVValue,
                this.addEffect = addEffect
            }
            function MultiDimensionalProperty(t, e, i, r) {
                var a;
                this.propType = "multidimensional",
                this.mult = i || 1,
                this.data = e,
                this._mdf = !1,
                this.elem = t,
                this.container = r,
                this.comp = t.comp,
                this.k = !1,
                this.kf = !1,
                this.frameId = -1;
                var s = e.k.length;
                for (this.v = createTypedArray("float32", s), this.pv = createTypedArray("float32", s), this.vel = createTypedArray("float32", s), a = 0; a < s; a += 1)
                    this.v[a] = e.k[a] * this.mult,
                    this.pv[a] = e.k[a];
                this._isFirstFrame = !0,
                this.effectsSequence = [],
                this.getValue = processEffectsSequence,
                this.setVValue = setVValue,
                this.addEffect = addEffect
            }
            function KeyframedValueProperty(t, e, i, r) {
                this.propType = "unidimensional",
                this.keyframes = e.k,
                this.keyframesMetadata = [],
                this.offsetTime = t.data.st,
                this.frameId = -1,
                this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                },
                this.k = !0,
                this.kf = !0,
                this.data = e,
                this.mult = i || 1,
                this.elem = t,
                this.container = r,
                this.comp = t.comp,
                this.v = initFrame,
                this.pv = initFrame,
                this._isFirstFrame = !0,
                this.getValue = processEffectsSequence,
                this.setVValue = setVValue,
                this.interpolateValue = interpolateValue,
                this.effectsSequence = [getValueAtCurrentTime.bind(this)],
                this.addEffect = addEffect
            }
            function KeyframedMultidimensionalProperty(t, e, i, r) {
                var a;
                this.propType = "multidimensional";
                var s,
                    n,
                    o,
                    h,
                    l = e.k.length;
                for (a = 0; a < l - 1; a += 1)
                    e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (s = e.k[a].s, n = e.k[a + 1].s, o = e.k[a].to, h = e.k[a].ti, (2 === s.length && (s[0] !== n[0] || s[1] !== n[1]) && bez.pointOnLine2D(s[0], s[1], n[0], n[1], s[0] + o[0], s[1] + o[1]) && bez.pointOnLine2D(s[0], s[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === s.length && (s[0] !== n[0] || s[1] !== n[1] || s[2] !== n[2]) && bez.pointOnLine3D(s[0], s[1], s[2], n[0], n[1], n[2], s[0] + o[0], s[1] + o[1], s[2] + o[2]) && bez.pointOnLine3D(s[0], s[1], s[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[a].to = null, e.k[a].ti = null), s[0] === n[0] && s[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === s.length || s[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[a].to = null, e.k[a].ti = null));
                this.effectsSequence = [getValueAtCurrentTime.bind(this)],
                this.data = e,
                this.keyframes = e.k,
                this.keyframesMetadata = [],
                this.offsetTime = t.data.st,
                this.k = !0,
                this.kf = !0,
                this._isFirstFrame = !0,
                this.mult = i || 1,
                this.elem = t,
                this.container = r,
                this.comp = t.comp,
                this.getValue = processEffectsSequence,
                this.setVValue = setVValue,
                this.interpolateValue = interpolateValue,
                this.frameId = -1;
                var p = e.k[0].s.length;
                for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), a = 0; a < p; a += 1)
                    this.v[a] = initFrame,
                    this.pv[a] = initFrame;
                this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: createTypedArray("float32", p)
                },
                this.addEffect = addEffect
            }
            var PropertyFactory = (ob = {
                    getProp: function(t, e, i, r, a) {
                        var s;
                        if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
                            if ("number" == typeof e.k[0])
                                s = new MultiDimensionalProperty(t, e, r, a);
                            else
                                switch (i) {
                                case 0:
                                    s = new KeyframedValueProperty(t, e, r, a);
                                    break;
                                case 1:
                                    s = new KeyframedMultidimensionalProperty(t, e, r, a)
                                }
                        else
                            s = new ValueProperty(t, e, r, a);
                        return s.effectsSequence.length && a.addDynamicProperty(s), s
                    }
                }, ob),
                ob;
            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    var t;
                    this._mdf = !1;
                    var e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1)
                        this.dynamicProperties[t].getValue(),
                        this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t,
                    this.dynamicProperties = [],
                    this._mdf = !1,
                    this._isAnimated = !1
                }
            };
            var pointPool = poolFactory(8, (function() {
                return createTypedArray("float32", 2)
            }));
            function ShapePath() {
                this.c = !1,
                this._length = 0,
                this._maxLength = 8,
                this.v = createSizedArray(this._maxLength),
                this.o = createSizedArray(this._maxLength),
                this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(t, e) {
                this.c = t,
                this.setLength(e);
                for (var i = 0; i < e;)
                    this.v[i] = pointPool.newElement(),
                    this.o[i] = pointPool.newElement(),
                    this.i[i] = pointPool.newElement(),
                    i += 1
            },
            ShapePath.prototype.setLength = function(t) {
                for (; this._maxLength < t;)
                    this.doubleArrayLength();
                this._length = t
            },
            ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)),
                this.i = this.i.concat(createSizedArray(this._maxLength)),
                this.o = this.o.concat(createSizedArray(this._maxLength)),
                this._maxLength *= 2
            },
            ShapePath.prototype.setXYAt = function(t, e, i, r, a) {
                var s;
                switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                case "v":
                    s = this.v;
                    break;
                case "i":
                    s = this.i;
                    break;
                case "o":
                    s = this.o;
                    break;
                default:
                    s = []
                }
                (!s[r] || s[r] && !a) && (s[r] = pointPool.newElement()),
                s[r][0] = t,
                s[r][1] = e
            },
            ShapePath.prototype.setTripleAt = function(t, e, i, r, a, s, n, o) {
                this.setXYAt(t, e, "v", n, o),
                this.setXYAt(i, r, "o", n, o),
                this.setXYAt(a, s, "i", n, o)
            },
            ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v,
                    i = this.o,
                    r = this.i,
                    a = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), a = 1);
                var s,
                    n = this._length - 1,
                    o = this._length;
                for (s = a; s < o; s += 1)
                    t.setTripleAt(e[n][0], e[n][1], r[n][0], r[n][1], i[n][0], i[n][1], s, !1),
                    n -= 1;
                return t
            },
            ShapePath.prototype.length = function() {
                return this._length
            };
            var shapePool = (factory = poolFactory(4, (function() {
                    return new ShapePath
                }), (function(t) {
                    var e,
                        i = t._length;
                    for (e = 0; e < i; e += 1)
                        pointPool.release(t.v[e]),
                        pointPool.release(t.i[e]),
                        pointPool.release(t.o[e]),
                        t.v[e] = null,
                        t.i[e] = null,
                        t.o[e] = null;
                    t._length = 0,
                    t.c = !1
                })), factory.clone = function(t) {
                    var e,
                        i = factory.newElement(),
                        r = void 0 === t._length ? t.v.length : t._length;
                    for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1)
                        i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return i
                }, factory),
                factory;
            function ShapeCollection() {
                this._length = 0,
                this._maxLength = 4,
                this.shapes = createSizedArray(this._maxLength)
            }
            ShapeCollection.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2),
                this.shapes[this._length] = t,
                this._length += 1
            },
            ShapeCollection.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1)
                    shapePool.release(this.shapes[t]);
                this._length = 0
            };
            var shapeCollectionPool = function() {
                    var t = {
                            newShapeCollection: function() {
                                return e ? r[e -= 1] : new ShapeCollection
                            },
                            release: function(t) {
                                var a,
                                    s = t._length;
                                for (a = 0; a < s; a += 1)
                                    shapePool.release(t.shapes[a]);
                                t._length = 0,
                                e === i && (r = pooling.double(r), i *= 2),
                                r[e] = t,
                                e += 1
                            }
                        },
                        e = 0,
                        i = 4,
                        r = createSizedArray(i);
                    return t
                }(),
                ShapePropertyFactory = function() {
                    var t = -999999;
                    function e(t, e, i) {
                        var r,
                            a,
                            s,
                            n,
                            o,
                            h,
                            l,
                            p,
                            f,
                            c = i.lastIndex,
                            d = this.keyframes;
                        if (t < d[0].t - this.offsetTime)
                            r = d[0].s[0],
                            s = !0,
                            c = 0;
                        else if (t >= d[d.length - 1].t - this.offsetTime)
                            r = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0],
                            s = !0;
                        else {
                            for (var m, u, y, g = c, v = d.length - 1, _ = !0; _ && (m = d[g], !((u = d[g + 1]).t - this.offsetTime > t));)
                                g < v - 1 ? g += 1 : _ = !1;
                            if (y = this.keyframesMetadata[g] || {}, c = g, !(s = 1 === m.h)) {
                                if (t >= u.t - this.offsetTime)
                                    p = 1;
                                else if (t < m.t - this.offsetTime)
                                    p = 0;
                                else {
                                    var b;
                                    y.__fnct ? b = y.__fnct : (b = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, y.__fnct = b),
                                    p = b((t - (m.t - this.offsetTime)) / (u.t - this.offsetTime - (m.t - this.offsetTime)))
                                }
                                a = u.s ? u.s[0] : m.e[0]
                            }
                            r = m.s[0]
                        }
                        for (h = e._length, l = r.i[0].length, i.lastIndex = c, n = 0; n < h; n += 1)
                            for (o = 0; o < l; o += 1)
                                f = s ? r.i[n][o] : r.i[n][o] + (a.i[n][o] - r.i[n][o]) * p,
                                e.i[n][o] = f,
                                f = s ? r.o[n][o] : r.o[n][o] + (a.o[n][o] - r.o[n][o]) * p,
                                e.o[n][o] = f,
                                f = s ? r.v[n][o] : r.v[n][o] + (a.v[n][o] - r.v[n][o]) * p,
                                e.v[n][o] = f
                    }
                    function i() {
                        var e = this.comp.renderedFrame - this.offsetTime,
                            i = this.keyframes[0].t - this.offsetTime,
                            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            a = this._caching.lastFrame;
                        return a !== t && (a < i && e < i || a > r && e > r) || (this._caching.lastIndex = a < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                    }
                    function r() {
                        this.paths = this.localShapeCollection
                    }
                    function a(t) {
                        (function(t, e) {
                            if (t._length !== e._length || t.c !== e.c)
                                return !1;
                            var i,
                                r = t._length;
                            for (i = 0; i < r; i += 1)
                                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1])
                                    return !1;
                            return !0
                        })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }
                    function s() {
                        if (this.elem.globalData.frameId !== this.frameId)
                            if (this.effectsSequence.length)
                                if (this.lock)
                                    this.setVValue(this.pv);
                                else {
                                    var t,
                                        e;
                                    this.lock = !0,
                                    this._mdf = !1,
                                    t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                    var i = this.effectsSequence.length;
                                    for (e = 0; e < i; e += 1)
                                        t = this.effectsSequence[e](t);
                                    this.setVValue(t),
                                    this.lock = !1,
                                    this.frameId = this.elem.globalData.frameId
                                }
                            else
                                this._mdf = !1
                    }
                    function n(t, e, i) {
                        this.propType = "shape",
                        this.comp = t.comp,
                        this.container = t,
                        this.elem = t,
                        this.data = e,
                        this.k = !1,
                        this.kf = !1,
                        this._mdf = !1;
                        var a = 3 === i ? e.pt.k : e.ks.k;
                        this.v = shapePool.clone(a),
                        this.pv = shapePool.clone(this.v),
                        this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                        this.paths = this.localShapeCollection,
                        this.paths.addShape(this.v),
                        this.reset = r,
                        this.effectsSequence = []
                    }
                    function o(t) {
                        this.effectsSequence.push(t),
                        this.container.addDynamicProperty(this)
                    }
                    function h(e, a, s) {
                        this.propType = "shape",
                        this.comp = e.comp,
                        this.elem = e,
                        this.container = e,
                        this.offsetTime = e.data.st,
                        this.keyframes = 3 === s ? a.pt.k : a.ks.k,
                        this.keyframesMetadata = [],
                        this.k = !0,
                        this.kf = !0;
                        var n = this.keyframes[0].s[0].i.length;
                        this.v = shapePool.newElement(),
                        this.v.setPathData(this.keyframes[0].s[0].c, n),
                        this.pv = shapePool.clone(this.v),
                        this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                        this.paths = this.localShapeCollection,
                        this.paths.addShape(this.v),
                        this.lastFrame = t,
                        this.reset = r,
                        this._caching = {
                            lastFrame: t,
                            lastIndex: 0
                        },
                        this.effectsSequence = [i.bind(this)]
                    }
                    n.prototype.interpolateShape = e,
                    n.prototype.getValue = s,
                    n.prototype.setVValue = a,
                    n.prototype.addEffect = o,
                    h.prototype.getValue = s,
                    h.prototype.interpolateShape = e,
                    h.prototype.setVValue = a,
                    h.prototype.addEffect = o;
                    var l = function() {
                            var t = roundCorner;
                            function e(t, e) {
                                this.v = shapePool.newElement(),
                                this.v.setPathData(!0, 4),
                                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                                this.paths = this.localShapeCollection,
                                this.localShapeCollection.addShape(this.v),
                                this.d = e.d,
                                this.elem = t,
                                this.comp = t.comp,
                                this.frameId = -1,
                                this.initDynamicPropertyContainer(t),
                                this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                                this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                                this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                            }
                            return e.prototype = {
                                reset: r,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                },
                                convertEllToPath: function() {
                                    var e = this.p.v[0],
                                        i = this.p.v[1],
                                        r = this.s.v[0] / 2,
                                        a = this.s.v[1] / 2,
                                        s = 3 !== this.d,
                                        n = this.v;
                                    n.v[0][0] = e,
                                    n.v[0][1] = i - a,
                                    n.v[1][0] = s ? e + r : e - r,
                                    n.v[1][1] = i,
                                    n.v[2][0] = e,
                                    n.v[2][1] = i + a,
                                    n.v[3][0] = s ? e - r : e + r,
                                    n.v[3][1] = i,
                                    n.i[0][0] = s ? e - r * t : e + r * t,
                                    n.i[0][1] = i - a,
                                    n.i[1][0] = s ? e + r : e - r,
                                    n.i[1][1] = i - a * t,
                                    n.i[2][0] = s ? e + r * t : e - r * t,
                                    n.i[2][1] = i + a,
                                    n.i[3][0] = s ? e - r : e + r,
                                    n.i[3][1] = i + a * t,
                                    n.o[0][0] = s ? e + r * t : e - r * t,
                                    n.o[0][1] = i - a,
                                    n.o[1][0] = s ? e + r : e - r,
                                    n.o[1][1] = i + a * t,
                                    n.o[2][0] = s ? e - r * t : e + r * t,
                                    n.o[2][1] = i + a,
                                    n.o[3][0] = s ? e - r : e + r,
                                    n.o[3][1] = i - a * t
                                }
                            }, extendPrototype([DynamicPropertyContainer], e), e
                        }(),
                        p = function() {
                            function t(t, e) {
                                this.v = shapePool.newElement(),
                                this.v.setPathData(!0, 0),
                                this.elem = t,
                                this.comp = t.comp,
                                this.data = e,
                                this.frameId = -1,
                                this.d = e.d,
                                this.initDynamicPropertyContainer(t),
                                1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                                this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this),
                                this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                                this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this),
                                this.or = PropertyFactory.getProp(t, e.or, 0, 0, this),
                                this.os = PropertyFactory.getProp(t, e.os, 0, .01, this),
                                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                                this.localShapeCollection.addShape(this.v),
                                this.paths = this.localShapeCollection,
                                this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                            }
                            return t.prototype = {
                                reset: r,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                },
                                convertStarToPath: function() {
                                    var t,
                                        e,
                                        i,
                                        r,
                                        a = 2 * Math.floor(this.pt.v),
                                        s = 2 * Math.PI / a,
                                        n = !0,
                                        o = this.or.v,
                                        h = this.ir.v,
                                        l = this.os.v,
                                        p = this.is.v,
                                        f = 2 * Math.PI * o / (2 * a),
                                        c = 2 * Math.PI * h / (2 * a),
                                        d = -Math.PI / 2;
                                    d += this.r.v;
                                    var m = 3 === this.data.d ? -1 : 1;
                                    for (this.v._length = 0, t = 0; t < a; t += 1) {
                                        i = n ? l : p,
                                        r = n ? f : c;
                                        var u = (e = n ? o : h) * Math.cos(d),
                                            y = e * Math.sin(d),
                                            g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y),
                                            v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                                        u += +this.p.v[0],
                                        y += +this.p.v[1],
                                        this.v.setTripleAt(u, y, u - g * r * i * m, y - v * r * i * m, u + g * r * i * m, y + v * r * i * m, t, !0),
                                        n = !n,
                                        d += s * m
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var t,
                                        e = Math.floor(this.pt.v),
                                        i = 2 * Math.PI / e,
                                        r = this.or.v,
                                        a = this.os.v,
                                        s = 2 * Math.PI * r / (4 * e),
                                        n = .5 * -Math.PI,
                                        o = 3 === this.data.d ? -1 : 1;
                                    for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                        var h = r * Math.cos(n),
                                            l = r * Math.sin(n),
                                            p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                            f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                        h += +this.p.v[0],
                                        l += +this.p.v[1],
                                        this.v.setTripleAt(h, l, h - p * s * a * o, l - f * s * a * o, h + p * s * a * o, l + f * s * a * o, t, !0),
                                        n += i * o
                                    }
                                    this.paths.length = 0,
                                    this.paths[0] = this.v
                                }
                            }, extendPrototype([DynamicPropertyContainer], t), t
                        }(),
                        f = function() {
                            function t(t, e) {
                                this.v = shapePool.newElement(),
                                this.v.c = !0,
                                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                                this.localShapeCollection.addShape(this.v),
                                this.paths = this.localShapeCollection,
                                this.elem = t,
                                this.comp = t.comp,
                                this.frameId = -1,
                                this.d = e.d,
                                this.initDynamicPropertyContainer(t),
                                this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                                this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                                this.r = PropertyFactory.getProp(t, e.r, 0, 0, this),
                                this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                            }
                            return t.prototype = {
                                convertRectToPath: function() {
                                    var t = this.p.v[0],
                                        e = this.p.v[1],
                                        i = this.s.v[0] / 2,
                                        r = this.s.v[1] / 2,
                                        a = bmMin(i, r, this.r.v),
                                        s = a * (1 - roundCorner);
                                    this.v._length = 0,
                                    2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + a, t + i, e - r + a, t + i, e - r + s, 0, !0), this.v.setTripleAt(t + i, e + r - a, t + i, e + r - s, t + i, e + r - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e + r, t + i - a, e + r, t + i - s, e + r, 2, !0), this.v.setTripleAt(t - i + a, e + r, t - i + s, e + r, t - i + a, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - a, t - i, e + r - a, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i, e - r + a, t - i, e - r + s, t - i, e - r + a, 5, !0), this.v.setTripleAt(t - i + a, e - r, t - i + a, e - r, t - i + s, e - r, 6, !0), this.v.setTripleAt(t + i - a, e - r, t + i - s, e - r, t + i - a, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + s, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + s, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + a, t + i, e - r + s, t + i, e - r + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e - r, t + i - a, e - r, t + i - s, e - r, 1, !0), this.v.setTripleAt(t - i + a, e - r, t - i + s, e - r, t - i + a, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + a, t - i, e - r + a, t - i, e - r + s, 3, !0), this.v.setTripleAt(t - i, e + r - a, t - i, e + r - s, t - i, e + r - a, 4, !0), this.v.setTripleAt(t - i + a, e + r, t - i + a, e + r, t - i + s, e + r, 5, !0), this.v.setTripleAt(t + i - a, e + r, t + i - s, e + r, t + i - a, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - a, t + i, e + r - a, t + i, e + r - s, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + s, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - s, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - s, e + r, t + i, e + r, 3, !0)))
                                },
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                },
                                reset: r
                            }, extendPrototype([DynamicPropertyContainer], t), t
                        }(),
                        c = {
                            getShapeProp: function(t, e, i) {
                                var r;
                                return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new n(t, e, i) : 5 === i ? r = new f(t, e) : 6 === i ? r = new l(t, e) : 7 === i && (r = new p(t, e)), r.k && t.addDynamicProperty(r), r
                            },
                            getConstructorFunction: function() {
                                return n
                            },
                            getKeyframedConstructorFunction: function() {
                                return h
                            }
                        };
                    return c
                }(),
                Matrix = function() {
                    var t = Math.cos,
                        e = Math.sin,
                        i = Math.tan,
                        r = Math.round;
                    function a() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                    }
                    function s(i) {
                        if (0 === i)
                            return this;
                        var r = t(i),
                            a = e(i);
                        return this._t(r, -a, 0, 0, a, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }
                    function n(i) {
                        if (0 === i)
                            return this;
                        var r = t(i),
                            a = e(i);
                        return this._t(1, 0, 0, 0, 0, r, -a, 0, 0, a, r, 0, 0, 0, 0, 1)
                    }
                    function o(i) {
                        if (0 === i)
                            return this;
                        var r = t(i),
                            a = e(i);
                        return this._t(r, 0, a, 0, 0, 1, 0, 0, -a, 0, r, 0, 0, 0, 0, 1)
                    }
                    function h(i) {
                        if (0 === i)
                            return this;
                        var r = t(i),
                            a = e(i);
                        return this._t(r, -a, 0, 0, a, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }
                    function l(t, e) {
                        return this._t(1, e, t, 1, 0, 0)
                    }
                    function p(t, e) {
                        return this.shear(i(t), i(e))
                    }
                    function f(r, a) {
                        var s = t(a),
                            n = e(a);
                        return this._t(s, n, 0, 0, -n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }
                    function c(t, e, i) {
                        return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                    }
                    function d(t, e, i, r, a, s, n, o, h, l, p, f, c, d, m, u) {
                        return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = a, this.props[5] = s, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = c, this.props[13] = d, this.props[14] = m, this.props[15] = u, this
                    }
                    function m(t, e, i) {
                        return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                    }
                    function u(t, e, i, r, a, s, n, o, h, l, p, f, c, d, m, u) {
                        var y = this.props;
                        if (1 === t && 0 === e && 0 === i && 0 === r && 0 === a && 1 === s && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f)
                            return y[12] = y[12] * t + y[15] * c, y[13] = y[13] * s + y[15] * d, y[14] = y[14] * p + y[15] * m, y[15] *= u, this._identityCalculated = !1, this;
                        var g = y[0],
                            v = y[1],
                            _ = y[2],
                            b = y[3],
                            E = y[4],
                            S = y[5],
                            x = y[6],
                            P = y[7],
                            A = y[8],
                            C = y[9],
                            T = y[10],
                            w = y[11],
                            k = y[12],
                            M = y[13],
                            D = y[14],
                            I = y[15];
                        return y[0] = g * t + v * a + _ * h + b * c, y[1] = g * e + v * s + _ * l + b * d, y[2] = g * i + v * n + _ * p + b * m, y[3] = g * r + v * o + _ * f + b * u, y[4] = E * t + S * a + x * h + P * c, y[5] = E * e + S * s + x * l + P * d, y[6] = E * i + S * n + x * p + P * m, y[7] = E * r + S * o + x * f + P * u, y[8] = A * t + C * a + T * h + w * c, y[9] = A * e + C * s + T * l + w * d, y[10] = A * i + C * n + T * p + w * m, y[11] = A * r + C * o + T * f + w * u, y[12] = k * t + M * a + D * h + I * c, y[13] = k * e + M * s + D * l + I * d, y[14] = k * i + M * n + D * p + I * m, y[15] = k * r + M * o + D * f + I * u, this._identityCalculated = !1, this
                    }
                    function y(t) {
                        var e = t.props;
                        return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                    }
                    function g() {
                        return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                    }
                    function v(t) {
                        for (var e = 0; e < 16;) {
                            if (t.props[e] !== this.props[e])
                                return !1;
                            e += 1
                        }
                        return !0
                    }
                    function _(t) {
                        var e;
                        for (e = 0; e < 16; e += 1)
                            t.props[e] = this.props[e];
                        return t
                    }
                    function b(t) {
                        var e;
                        for (e = 0; e < 16; e += 1)
                            this.props[e] = t[e]
                    }
                    function E(t, e, i) {
                        return {
                            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        }
                    }
                    function S(t, e, i) {
                        return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                    }
                    function x(t, e, i) {
                        return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                    }
                    function P(t, e, i) {
                        return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }
                    function A() {
                        var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                            e = this.props[5] / t,
                            i = -this.props[1] / t,
                            r = -this.props[4] / t,
                            a = this.props[0] / t,
                            s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                            n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                            o = new Matrix;
                        return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = a, o.props[12] = s, o.props[13] = n, o
                    }
                    function C(t) {
                        return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                    }
                    function T(t) {
                        var e,
                            i = t.length,
                            r = [];
                        for (e = 0; e < i; e += 1)
                            r[e] = C(t[e]);
                        return r
                    }
                    function w(t, e, i) {
                        var r = createTypedArray("float32", 6);
                        if (this.isIdentity())
                            r[0] = t[0],
                            r[1] = t[1],
                            r[2] = e[0],
                            r[3] = e[1],
                            r[4] = i[0],
                            r[5] = i[1];
                        else {
                            var a = this.props[0],
                                s = this.props[1],
                                n = this.props[4],
                                o = this.props[5],
                                h = this.props[12],
                                l = this.props[13];
                            r[0] = t[0] * a + t[1] * n + h,
                            r[1] = t[0] * s + t[1] * o + l,
                            r[2] = e[0] * a + e[1] * n + h,
                            r[3] = e[0] * s + e[1] * o + l,
                            r[4] = i[0] * a + i[1] * n + h,
                            r[5] = i[0] * s + i[1] * o + l
                        }
                        return r
                    }
                    function k(t, e, i) {
                        return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                    }
                    function M(t, e) {
                        if (this.isIdentity())
                            return t + "," + e;
                        var i = this.props;
                        return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                    }
                    function D() {
                        for (var t = 0, e = this.props, i = "matrix3d("; t < 16;)
                            i += r(1e4 * e[t]) / 1e4,
                            i += 15 === t ? ")" : ",",
                            t += 1;
                        return i
                    }
                    function I(t) {
                        return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
                    }
                    function F() {
                        var t = this.props;
                        return "matrix(" + I(t[0]) + "," + I(t[1]) + "," + I(t[4]) + "," + I(t[5]) + "," + I(t[12]) + "," + I(t[13]) + ")"
                    }
                    return function() {
                        this.reset = a,
                        this.rotate = s,
                        this.rotateX = n,
                        this.rotateY = o,
                        this.rotateZ = h,
                        this.skew = p,
                        this.skewFromAxis = f,
                        this.shear = l,
                        this.scale = c,
                        this.setTransform = d,
                        this.translate = m,
                        this.transform = u,
                        this.multiply = y,
                        this.applyToPoint = E,
                        this.applyToX = S,
                        this.applyToY = x,
                        this.applyToZ = P,
                        this.applyToPointArray = k,
                        this.applyToTriplePoints = w,
                        this.applyToPointStringified = M,
                        this.toCSS = D,
                        this.to2dCSS = F,
                        this.clone = _,
                        this.cloneFromProps = b,
                        this.equals = v,
                        this.inversePoints = T,
                        this.inversePoint = C,
                        this.getInverseMatrix = A,
                        this._t = this.transform,
                        this.isIdentity = g,
                        this._identity = !0,
                        this._identityCalculated = !1,
                        this.props = createTypedArray("float32", 16),
                        this.reset()
                    }
                }();
            function _typeof$3(t) {
                return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$3(t)
            }
            var lottie = {};
            function setLocation(t) {
                setLocationHref(t)
            }
            function searchAnimations() {
                animationManager.searchAnimations()
            }
            function setSubframeRendering(t) {
                setSubframeEnabled(t)
            }
            function setPrefix(t) {
                setIdPrefix(t)
            }
            function loadAnimation(t) {
                return animationManager.loadAnimation(t)
            }
            function setQuality(t) {
                if ("string" == typeof t)
                    switch (t) {
                    case "high":
                        setDefaultCurveSegments(200);
                        break;
                    default:
                    case "medium":
                        setDefaultCurveSegments(50);
                        break;
                    case "low":
                        setDefaultCurveSegments(10)
                    }
                else
                    !isNaN(t) && t > 1 && setDefaultCurveSegments(t)
            }
            function inBrowser() {
                return "undefined" != typeof navigator
            }
            function installPlugin(t, e) {
                "expressions" === t && setExpressionsPlugin(e)
            }
            function getFactory(t) {
                switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null
                }
            }
            function checkReady() {
                "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
            }
            function getQueryVariable(t) {
                for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                    var r = e[i].split("=");
                    if (decodeURIComponent(r[0]) == t)
                        return decodeURIComponent(r[1])
                }
                return null
            }
            lottie.play = animationManager.play,
            lottie.pause = animationManager.pause,
            lottie.setLocationHref = setLocation,
            lottie.togglePause = animationManager.togglePause,
            lottie.setSpeed = animationManager.setSpeed,
            lottie.setDirection = animationManager.setDirection,
            lottie.stop = animationManager.stop,
            lottie.searchAnimations = searchAnimations,
            lottie.registerAnimation = animationManager.registerAnimation,
            lottie.loadAnimation = loadAnimation,
            lottie.setSubframeRendering = setSubframeRendering,
            lottie.resize = animationManager.resize,
            lottie.goToAndStop = animationManager.goToAndStop,
            lottie.destroy = animationManager.destroy,
            lottie.setQuality = setQuality,
            lottie.inBrowser = inBrowser,
            lottie.installPlugin = installPlugin,
            lottie.freeze = animationManager.freeze,
            lottie.unfreeze = animationManager.unfreeze,
            lottie.setVolume = animationManager.setVolume,
            lottie.mute = animationManager.mute,
            lottie.unmute = animationManager.unmute,
            lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
            lottie.useWebWorker = setWebWorker,
            lottie.setIDPrefix = setPrefix,
            lottie.__getFactory = getFactory,
            lottie.version = "5.12.2";
            var queryString = "",
                scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                };
            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "",
            getQueryVariable("renderer");
            var readyStateCheckInterval = setInterval(checkReady, 100);
            try {
                "object" !== _typeof$3(exports) && (window.bodymovin = lottie)
            } catch (t) {}
            var ShapeModifiers = function() {
                var t = {},
                    e = {};
                return t.registerModifier = function(t, i) {
                    e[t] || (e[t] = i)
                }, t.getModifier = function(t, i, r) {
                    return new e[t](i, r)
                }, t
            }();
            function ShapeModifier() {}
            function TrimModifier() {}
            function PuckerAndBloatModifier() {}
            ShapeModifier.prototype.initModifierProperties = function() {},
            ShapeModifier.prototype.addShapeToModifier = function() {},
            ShapeModifier.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(e),
                    this.addShapeToModifier(e),
                    this._isAnimated && t.setAsAnimated()
                }
            },
            ShapeModifier.prototype.init = function(t, e) {
                this.shapes = [],
                this.elem = t,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                this.frameId = initialDefaultFrame,
                this.closed = !1,
                this.k = !1,
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            },
            ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
            },
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            TrimModifier.prototype.initModifierProperties = function(t, e) {
                this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
                this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
                this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
                this.sValue = 0,
                this.eValue = 0,
                this.getValue = this.processKeys,
                this.m = e.m,
                this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            },
            TrimModifier.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
            },
            TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, a) {
                var s = [];
                e <= 1 ? s.push({
                    s: t,
                    e: e
                }) : t >= 1 ? s.push({
                    s: t - 1,
                    e: e - 1
                }) : (s.push({
                    s: t,
                    e: 1
                }), s.push({
                    s: 0,
                    e: e - 1
                }));
                var n,
                    o,
                    h = [],
                    l = s.length;
                for (n = 0; n < l; n += 1) {
                    var p,
                        f;
                    (o = s[n]).e * a < r || o.s * a > r + i || (p = o.s * a <= r ? 0 : (o.s * a - r) / i, f = o.e * a >= r + i ? 1 : (o.e * a - r) / i, h.push([p, f]))
                }
                return h.length || h.push([0, 0]), h
            },
            TrimModifier.prototype.releasePathsData = function(t) {
                var e,
                    i = t.length;
                for (e = 0; e < i; e += 1)
                    segmentsLengthPool.release(t[e]);
                return t.length = 0, t
            },
            TrimModifier.prototype.processShapes = function(t) {
                var e,
                    i,
                    r,
                    a;
                if (this._mdf || t) {
                    var s = this.o.v % 360 / 360;
                    if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (i = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
                        var n = e;
                        e = i,
                        i = n
                    }
                    e = 1e-4 * Math.round(1e4 * e),
                    i = 1e-4 * Math.round(1e4 * i),
                    this.sValue = e,
                    this.eValue = i
                } else
                    e = this.sValue,
                    i = this.eValue;
                var o,
                    h,
                    l,
                    p,
                    f,
                    c = this.shapes.length,
                    d = 0;
                if (i === e)
                    for (a = 0; a < c; a += 1)
                        this.shapes[a].localShapeCollection.releaseShapes(),
                        this.shapes[a].shape._mdf = !0,
                        this.shapes[a].shape.paths = this.shapes[a].localShapeCollection,
                        this._mdf && (this.shapes[a].pathsData.length = 0);
                else if (1 === i && 0 === e || 0 === i && 1 === e) {
                    if (this._mdf)
                        for (a = 0; a < c; a += 1)
                            this.shapes[a].pathsData.length = 0,
                            this.shapes[a].shape._mdf = !0
                } else {
                    var m,
                        u,
                        y = [];
                    for (a = 0; a < c; a += 1)
                        if ((m = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                            if (h = (r = m.shape.paths)._length, f = 0, !m.shape._mdf && m.pathsData.length)
                                f = m.totalShapeLength;
                            else {
                                for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1)
                                    p = bez.getSegmentsLength(r.shapes[o]),
                                    l.push(p),
                                    f += p.totalLength;
                                m.totalShapeLength = f,
                                m.pathsData = l
                            }
                            d += f,
                            m.shape._mdf = !0
                        } else
                            m.shape.paths = m.localShapeCollection;
                    var g,
                        v = e,
                        _ = i,
                        b = 0;
                    for (a = c - 1; a >= 0; a -= 1)
                        if ((m = this.shapes[a]).shape._mdf) {
                            for ((u = m.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (g = this.calculateShapeEdges(e, i, m.totalShapeLength, b, d), b += m.totalShapeLength) : g = [[v, _]], h = g.length, o = 0; o < h; o += 1) {
                                v = g[o][0],
                                _ = g[o][1],
                                y.length = 0,
                                _ <= 1 ? y.push({
                                    s: m.totalShapeLength * v,
                                    e: m.totalShapeLength * _
                                }) : v >= 1 ? y.push({
                                    s: m.totalShapeLength * (v - 1),
                                    e: m.totalShapeLength * (_ - 1)
                                }) : (y.push({
                                    s: m.totalShapeLength * v,
                                    e: m.totalShapeLength
                                }), y.push({
                                    s: 0,
                                    e: m.totalShapeLength * (_ - 1)
                                }));
                                var E = this.addShapes(m, y[0]);
                                if (y[0].s !== y[0].e) {
                                    if (y.length > 1)
                                        if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                                            var S = E.pop();
                                            this.addPaths(E, u),
                                            E = this.addShapes(m, y[1], S)
                                        } else
                                            this.addPaths(E, u),
                                            E = this.addShapes(m, y[1]);
                                    this.addPaths(E, u)
                                }
                            }
                            m.shape.paths = u
                        }
                }
            },
            TrimModifier.prototype.addPaths = function(t, e) {
                var i,
                    r = t.length;
                for (i = 0; i < r; i += 1)
                    e.addShape(t[i])
            },
            TrimModifier.prototype.addSegment = function(t, e, i, r, a, s, n) {
                a.setXYAt(e[0], e[1], "o", s),
                a.setXYAt(i[0], i[1], "i", s + 1),
                n && a.setXYAt(t[0], t[1], "v", s),
                a.setXYAt(r[0], r[1], "v", s + 1)
            },
            TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
                e.setXYAt(t[1], t[5], "o", i),
                e.setXYAt(t[2], t[6], "i", i + 1),
                r && e.setXYAt(t[0], t[4], "v", i),
                e.setXYAt(t[3], t[7], "v", i + 1)
            },
            TrimModifier.prototype.addShapes = function(t, e, i) {
                var r,
                    a,
                    s,
                    n,
                    o,
                    h,
                    l,
                    p,
                    f = t.pathsData,
                    c = t.shape.paths.shapes,
                    d = t.shape.paths._length,
                    m = 0,
                    u = [],
                    y = !0;
                for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), u.push(i), r = 0; r < d; r += 1) {
                    for (h = f[r].lengths, i.c = c[r].c, s = c[r].c ? h.length : h.length + 1, a = 1; a < s; a += 1)
                        if (m + (n = h[a - 1]).addedLength < e.s)
                            m += n.addedLength,
                            i.c = !1;
                        else {
                            if (m > e.e) {
                                i.c = !1;
                                break
                            }
                            e.s <= m && e.e >= m + n.addedLength ? (this.addSegment(c[r].v[a - 1], c[r].o[a - 1], c[r].i[a], c[r].v[a], i, o, y), y = !1) : (l = bez.getNewSegment(c[r].v[a - 1], c[r].v[a], c[r].o[a - 1], c[r].i[a], (e.s - m) / n.addedLength, (e.e - m) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1),
                            m += n.addedLength,
                            o += 1
                        }
                    if (c[r].c && h.length) {
                        if (n = h[a - 1], m <= e.e) {
                            var g = h[a - 1].addedLength;
                            e.s <= m && e.e >= m + g ? (this.addSegment(c[r].v[a - 1], c[r].o[a - 1], c[r].i[0], c[r].v[0], i, o, y), y = !1) : (l = bez.getNewSegment(c[r].v[a - 1], c[r].v[0], c[r].o[a - 1], c[r].i[0], (e.s - m) / g, (e.e - m) / g, h[a - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1)
                        } else
                            i.c = !1;
                        m += n.addedLength,
                        o += 1
                    }
                    if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), m > e.e)
                        break;
                    r < d - 1 && (i = shapePool.newElement(), y = !0, u.push(i), o = 0)
                }
                return u
            },
            extendPrototype([ShapeModifier], PuckerAndBloatModifier),
            PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
                this._isAnimated = !!this.amount.effectsSequence.length
            },
            PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                var i = e / 100,
                    r = [0, 0],
                    a = t._length,
                    s = 0;
                for (s = 0; s < a; s += 1)
                    r[0] += t.v[s][0],
                    r[1] += t.v[s][1];
                r[0] /= a,
                r[1] /= a;
                var n,
                    o,
                    h,
                    l,
                    p,
                    f,
                    c = shapePool.newElement();
                for (c.c = t.c, s = 0; s < a; s += 1)
                    n = t.v[s][0] + (r[0] - t.v[s][0]) * i,
                    o = t.v[s][1] + (r[1] - t.v[s][1]) * i,
                    h = t.o[s][0] + (r[0] - t.o[s][0]) * -i,
                    l = t.o[s][1] + (r[1] - t.o[s][1]) * -i,
                    p = t.i[s][0] + (r[0] - t.i[s][0]) * -i,
                    f = t.i[s][1] + (r[1] - t.i[s][1]) * -i,
                    c.setTripleAt(n, o, h, l, p, f, s);
                return c
            },
            PuckerAndBloatModifier.prototype.processShapes = function(t) {
                var e,
                    i,
                    r,
                    a,
                    s,
                    n,
                    o = this.shapes.length,
                    h = this.amount.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (n = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, r = 0; r < a; r += 1)
                                n.addShape(this.processPath(e[r], h));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            };
            var TransformPropertyFactory = function() {
                var t = [0, 0];
                function e(t, e, i) {
                    if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this), e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                            var r,
                                a = e.or.k.length;
                            for (r = 0; r < a; r += 1)
                                e.or.k[r].to = null,
                                e.or.k[r].ti = null
                        }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this),
                        this.or.sh = !0
                    } else
                        this.r = PropertyFactory.getProp(t, e.r || {
                            k: 0
                        }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)),
                    this.a = PropertyFactory.getProp(t, e.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this),
                    this.s = PropertyFactory.getProp(t, e.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this),
                    e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                        _mdf: !1,
                        v: 1
                    },
                    this._isDirty = !0,
                    this.dynamicProperties.length || this.getValue(!0)
                }
                return e.prototype = {
                    applyToMatrix: function(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(),
                        this._mdf = this._mdf || e,
                        this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                var i;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var r,
                                        a;
                                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                                        this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        r = [],
                                        a = [];
                                        var s = this.px,
                                            n = this.py;
                                        s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (r[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), r[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (r[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), r[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (r = [s.pv, n.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                                    } else
                                        r = a = t;
                                    this.v.rotate(-Math.atan2(r[1] - a[1], r[0] - a[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                                    return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                                this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                    this._addDynamicProperty(t),
                    this.elem.addDynamicProperty(t),
                    this._isDirty = !0
                }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function(t, i, r) {
                        return new e(t, i, r)
                    }
                }
            }();
            function RepeaterModifier() {}
            function RoundCornersModifier() {}
            function floatEqual(t, e) {
                return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
            }
            function floatZero(t) {
                return Math.abs(t) <= 1e-5
            }
            function lerp(t, e, i) {
                return t * (1 - i) + e * i
            }
            function lerpPoint(t, e, i) {
                return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)]
            }
            function quadRoots(t, e, i) {
                if (0 === t)
                    return [];
                var r = e * e - 4 * t * i;
                if (r < 0)
                    return [];
                var a = -e / (2 * t);
                if (0 === r)
                    return [a];
                var s = Math.sqrt(r) / (2 * t);
                return [a - s, a + s]
            }
            function polynomialCoefficients(t, e, i, r) {
                return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
            }
            function singlePoint(t) {
                return new PolynomialBezier(t, t, t, t, !1)
            }
            function PolynomialBezier(t, e, i, r, a) {
                a && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)),
                a && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
                var s = polynomialCoefficients(t[0], e[0], i[0], r[0]),
                    n = polynomialCoefficients(t[1], e[1], i[1], r[1]);
                this.a = [s[0], n[0]],
                this.b = [s[1], n[1]],
                this.c = [s[2], n[2]],
                this.d = [s[3], n[3]],
                this.points = [t, e, i, r]
            }
            function extrema(t, e) {
                var i = t.points[0][e],
                    r = t.points[t.points.length - 1][e];
                if (i > r) {
                    var a = r;
                    r = i,
                    i = a
                }
                for (var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < s.length; n += 1)
                    if (s[n] > 0 && s[n] < 1) {
                        var o = t.point(s[n])[e];
                        o < i ? i = o : o > r && (r = o)
                    }
                return {
                    min: i,
                    max: r
                }
            }
            function intersectData(t, e, i) {
                var r = t.boundingBox();
                return {
                    cx: r.cx,
                    cy: r.cy,
                    width: r.width,
                    height: r.height,
                    bez: t,
                    t: (e + i) / 2,
                    t1: e,
                    t2: i
                }
            }
            function splitData(t) {
                var e = t.bez.split(.5);
                return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
            }
            function boxIntersect(t, e) {
                return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
            }
            function intersectsImpl(t, e, i, r, a, s) {
                if (boxIntersect(t, e))
                    if (i >= s || t.width <= r && t.height <= r && e.width <= r && e.height <= r)
                        a.push([t.t, e.t]);
                    else {
                        var n = splitData(t),
                            o = splitData(e);
                        intersectsImpl(n[0], o[0], i + 1, r, a, s),
                        intersectsImpl(n[0], o[1], i + 1, r, a, s),
                        intersectsImpl(n[1], o[0], i + 1, r, a, s),
                        intersectsImpl(n[1], o[1], i + 1, r, a, s)
                    }
            }
            function crossProduct(t, e) {
                return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
            }
            function lineIntersection(t, e, i, r) {
                var a = [t[0], t[1], 1],
                    s = [e[0], e[1], 1],
                    n = [i[0], i[1], 1],
                    o = [r[0], r[1], 1],
                    h = crossProduct(crossProduct(a, s), crossProduct(n, o));
                return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
            }
            function polarOffset(t, e, i) {
                return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
            }
            function pointDistance(t, e) {
                return Math.hypot(t[0] - e[0], t[1] - e[1])
            }
            function pointEqual(t, e) {
                return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
            }
            function ZigZagModifier() {}
            function setPoint(t, e, i, r, a, s, n) {
                var o = i - Math.PI / 2,
                    h = i + Math.PI / 2,
                    l = e[0] + Math.cos(i) * r * a,
                    p = e[1] - Math.sin(i) * r * a;
                t.setTripleAt(l, p, l + Math.cos(o) * s, p - Math.sin(o) * s, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length())
            }
            function getPerpendicularVector(t, e) {
                var i = [e[0] - t[0], e[1] - t[1]],
                    r = .5 * -Math.PI;
                return [Math.cos(r) * i[0] - Math.sin(r) * i[1], Math.sin(r) * i[0] + Math.cos(r) * i[1]]
            }
            function getProjectingAngle(t, e) {
                var i = 0 === e ? t.length() - 1 : e - 1,
                    r = (e + 1) % t.length(),
                    a = getPerpendicularVector(t.v[i], t.v[r]);
                return Math.atan2(0, 1) - Math.atan2(a[1], a[0])
            }
            function zigZagCorner(t, e, i, r, a, s, n) {
                var o = getProjectingAngle(e, i),
                    h = e.v[i % e._length],
                    l = e.v[0 === i ? e._length - 1 : i - 1],
                    p = e.v[(i + 1) % e._length],
                    f = 2 === s ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0,
                    c = 2 === s ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
                setPoint(t, e.v[i % e._length], o, n, r, c / (2 * (a + 1)), f / (2 * (a + 1)))
            }
            function zigZagSegment(t, e, i, r, a, s) {
                for (var n = 0; n < r; n += 1) {
                    var o = (n + 1) / (r + 1),
                        h = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                        l = e.normalAngle(o);
                    setPoint(t, e.point(o), l, s, i, h / (2 * (r + 1)), h / (2 * (r + 1))),
                    s = -s
                }
                return s
            }
            function linearOffset(t, e, i) {
                var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
                return [polarOffset(t, r, i), polarOffset(e, r, i)]
            }
            function offsetSegment(t, e) {
                var i,
                    r,
                    a,
                    s,
                    n,
                    o,
                    h;
                i = (h = linearOffset(t.points[0], t.points[1], e))[0],
                r = h[1],
                a = (h = linearOffset(t.points[1], t.points[2], e))[0],
                s = h[1],
                n = (h = linearOffset(t.points[2], t.points[3], e))[0],
                o = h[1];
                var l = lineIntersection(i, r, a, s);
                null === l && (l = r);
                var p = lineIntersection(n, o, a, s);
                return null === p && (p = n), new PolynomialBezier(i, l, p, o)
            }
            function joinLines(t, e, i, r, a) {
                var s = e.points[3],
                    n = i.points[0];
                if (3 === r)
                    return s;
                if (pointEqual(s, n))
                    return s;
                if (2 === r) {
                    var o = -e.tangentAngle(1),
                        h = -i.tangentAngle(0) + Math.PI,
                        l = lineIntersection(s, polarOffset(s, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100)),
                        p = l ? pointDistance(l, s) : pointDistance(s, n) / 2,
                        f = polarOffset(s, o, 2 * p * roundCorner);
                    return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = polarOffset(n, h, 2 * p * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n
                }
                var c = lineIntersection(pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], s, n, pointEqual(n, i.points[1]) ? i.points[3] : i.points[1]);
                return c && pointDistance(c, s) < a ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : s
            }
            function getIntersection(t, e) {
                var i = t.intersections(e);
                return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null
            }
            function pruneSegmentIntersection(t, e) {
                var i = t.slice(),
                    r = e.slice(),
                    a = getIntersection(t[t.length - 1], e[0]);
                return a && (i[t.length - 1] = t[t.length - 1].split(a[0])[0], r[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(a[0])[0]], [e[e.length - 1].split(a[1])[1]]] : [i, r]
            }
            function pruneIntersections(t) {
                for (var e, i = 1; i < t.length; i += 1)
                    e = pruneSegmentIntersection(t[i - 1], t[i]),
                    t[i - 1] = e[0],
                    t[i] = e[1];
                return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
            }
            function offsetSegmentSplit(t, e) {
                var i,
                    r,
                    a,
                    s,
                    n = t.inflectionPoints();
                if (0 === n.length)
                    return [offsetSegment(t, e)];
                if (1 === n.length || floatEqual(n[1], 1))
                    return i = (a = t.split(n[0]))[0], r = a[1], [offsetSegment(i, e), offsetSegment(r, e)];
                i = (a = t.split(n[0]))[0];
                var o = (n[1] - n[0]) / (1 - n[0]);
                return s = (a = a[1].split(o))[0], r = a[1], [offsetSegment(i, e), offsetSegment(s, e), offsetSegment(r, e)]
            }
            function OffsetPathModifier() {}
            function getFontProperties(t) {
                for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", a = e.length, s = 0; s < a; s += 1)
                    switch (e[s].toLowerCase()) {
                    case "italic":
                        r = "italic";
                        break;
                    case "bold":
                        i = "700";
                        break;
                    case "black":
                        i = "900";
                        break;
                    case "medium":
                        i = "500";
                        break;
                    case "regular":
                    case "normal":
                        i = "400";
                        break;
                    case "light":
                    case "thin":
                        i = "200"
                    }
                return {
                    style: r,
                    weight: t.fWeight || i
                }
            }
            extendPrototype([ShapeModifier], RepeaterModifier),
            RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
                this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
                this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
                this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
                this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
                this.data = e,
                this.dynamicProperties.length || this.getValue(!0),
                this._isAnimated = !!this.dynamicProperties.length,
                this.pMatrix = new Matrix,
                this.rMatrix = new Matrix,
                this.sMatrix = new Matrix,
                this.tMatrix = new Matrix,
                this.matrix = new Matrix
            },
            RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, a, s) {
                var n = s ? -1 : 1,
                    o = r.s.v[0] + (1 - r.s.v[0]) * (1 - a),
                    h = r.s.v[1] + (1 - r.s.v[1]) * (1 - a);
                t.translate(r.p.v[0] * n * a, r.p.v[1] * n * a, r.p.v[2]),
                e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                e.rotate(-r.r.v * n * a),
                e.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
                i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                i.scale(s ? 1 / o : o, s ? 1 / h : h),
                i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
            },
            RepeaterModifier.prototype.init = function(t, e, i, r) {
                for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;)
                    i -= 1,
                    this._elements.unshift(e[i]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            },
            RepeaterModifier.prototype.resetElements = function(t) {
                var e,
                    i = t.length;
                for (e = 0; e < i; e += 1)
                    t[e]._processed = !1,
                    "gr" === t[e].ty && this.resetElements(t[e].it)
            },
            RepeaterModifier.prototype.cloneElements = function(t) {
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e), e
            },
            RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                var i,
                    r = t.length;
                for (i = 0; i < r; i += 1)
                    t[i]._render = e,
                    "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
            },
            RepeaterModifier.prototype.processShapes = function(t) {
                var e,
                    i,
                    r,
                    a,
                    s,
                    n = !1;
                if (this._mdf || t) {
                    var o,
                        h = Math.ceil(this.c.v);
                    if (this._groups.length < h) {
                        for (; this._groups.length < h;) {
                            var l = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            l.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [{
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    }, {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }),
                            this.arr.splice(0, 0, l),
                            this._groups.splice(0, 0, l),
                            this._currentCopies += 1
                        }
                        this.elem.reloadShapes(),
                        n = !0
                    }
                    for (s = 0, r = 0; r <= this._groups.length - 1; r += 1) {
                        if (o = s < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                            var p = this.elemsData[r].it,
                                f = p[p.length - 1];
                            0 !== f.transform.op.v ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
                        }
                        s += 1
                    }
                    this._currentCopies = h;
                    var c = this.o.v,
                        d = c % 1,
                        m = c > 0 ? Math.floor(c) : Math.ceil(c),
                        u = this.pMatrix.props,
                        y = this.rMatrix.props,
                        g = this.sMatrix.props;
                    this.pMatrix.reset(),
                    this.rMatrix.reset(),
                    this.sMatrix.reset(),
                    this.tMatrix.reset(),
                    this.matrix.reset();
                    var v,
                        _,
                        b = 0;
                    if (c > 0) {
                        for (; b < m;)
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                            b += 1;
                        d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), b += d)
                    } else if (c < 0) {
                        for (; b > m;)
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                            b -= 1;
                        d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), b -= d)
                    }
                    for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                        if (_ = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== b) {
                            for ((0 !== r && 1 === a || r !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < _; v += 1)
                                i[v] = this.matrix.props[v];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(), v = 0; v < _; v += 1)
                                i[v] = this.matrix.props[v];
                        b += 1,
                        s -= 1,
                        r += a
                    }
                } else
                    for (s = this._currentCopies, r = 0, a = 1; s;)
                        i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props,
                        e[e.length - 1].transform.mProps._mdf = !1,
                        e[e.length - 1].transform.op._mdf = !1,
                        s -= 1,
                        r += a;
                return n
            },
            RepeaterModifier.prototype.addShape = function() {},
            extendPrototype([ShapeModifier], RoundCornersModifier),
            RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
                this._isAnimated = !!this.rd.effectsSequence.length
            },
            RoundCornersModifier.prototype.processPath = function(t, e) {
                var i,
                    r = shapePool.newElement();
                r.c = t.c;
                var a,
                    s,
                    n,
                    o,
                    h,
                    l,
                    p,
                    f,
                    c,
                    d,
                    m,
                    u,
                    y = t._length,
                    g = 0;
                for (i = 0; i < y; i += 1)
                    a = t.v[i],
                    n = t.o[i],
                    s = t.i[i],
                    a[0] === n[0] && a[1] === n[1] && a[0] === s[0] && a[1] === s[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = a[0] + (o[0] - a[0]) * l, f = u = a[1] - (a[1] - o[1]) * l, c = p - (p - a[0]) * roundCorner, d = f - (f - a[1]) * roundCorner, r.setTripleAt(p, f, c, d, m, u, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = a[0] + (o[0] - a[0]) * l, f = d = a[1] + (o[1] - a[1]) * l, m = p - (p - a[0]) * roundCorner, u = f - (f - a[1]) * roundCorner, r.setTripleAt(p, f, c, d, m, u, g), g += 1) : (r.setTripleAt(a[0], a[1], n[0], n[1], s[0], s[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
                return r
            },
            RoundCornersModifier.prototype.processShapes = function(t) {
                var e,
                    i,
                    r,
                    a,
                    s,
                    n,
                    o = this.shapes.length,
                    h = this.rd.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (n = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, r = 0; r < a; r += 1)
                                n.addShape(this.processPath(e[r], h));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            },
            PolynomialBezier.prototype.point = function(t) {
                return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
            },
            PolynomialBezier.prototype.derivative = function(t) {
                return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
            },
            PolynomialBezier.prototype.tangentAngle = function(t) {
                var e = this.derivative(t);
                return Math.atan2(e[1], e[0])
            },
            PolynomialBezier.prototype.normalAngle = function(t) {
                var e = this.derivative(t);
                return Math.atan2(e[0], e[1])
            },
            PolynomialBezier.prototype.inflectionPoints = function() {
                var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(t))
                    return [];
                var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                    i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                if (i < 0)
                    return [];
                var r = Math.sqrt(i);
                return floatZero(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter((function(t) {
                    return t > 0 && t < 1
                }))
            },
            PolynomialBezier.prototype.split = function(t) {
                if (t <= 0)
                    return [singlePoint(this.points[0]), this];
                if (t >= 1)
                    return [this, singlePoint(this.points[this.points.length - 1])];
                var e = lerpPoint(this.points[0], this.points[1], t),
                    i = lerpPoint(this.points[1], this.points[2], t),
                    r = lerpPoint(this.points[2], this.points[3], t),
                    a = lerpPoint(e, i, t),
                    s = lerpPoint(i, r, t),
                    n = lerpPoint(a, s, t);
                return [new PolynomialBezier(this.points[0], e, a, n, !0), new PolynomialBezier(n, s, r, this.points[3], !0)]
            },
            PolynomialBezier.prototype.bounds = function() {
                return {
                    x: extrema(this, 0),
                    y: extrema(this, 1)
                }
            },
            PolynomialBezier.prototype.boundingBox = function() {
                var t = this.bounds();
                return {
                    left: t.x.min,
                    right: t.x.max,
                    top: t.y.min,
                    bottom: t.y.max,
                    width: t.x.max - t.x.min,
                    height: t.y.max - t.y.min,
                    cx: (t.x.max + t.x.min) / 2,
                    cy: (t.y.max + t.y.min) / 2
                }
            },
            PolynomialBezier.prototype.intersections = function(t, e, i) {
                void 0 === e && (e = 2),
                void 0 === i && (i = 7);
                var r = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i), r
            },
            PolynomialBezier.shapeSegment = function(t, e) {
                var i = (e + 1) % t.length();
                return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0)
            },
            PolynomialBezier.shapeSegmentInverted = function(t, e) {
                var i = (e + 1) % t.length();
                return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0)
            },
            extendPrototype([ShapeModifier], ZigZagModifier),
            ZigZagModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this),
                this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this),
                this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this),
                this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
            },
            ZigZagModifier.prototype.processPath = function(t, e, i, r) {
                var a = t._length,
                    s = shapePool.newElement();
                if (s.c = t.c, t.c || (a -= 1), 0 === a)
                    return s;
                var n = -1,
                    o = PolynomialBezier.shapeSegment(t, 0);
                zigZagCorner(s, t, 0, e, i, r, n);
                for (var h = 0; h < a; h += 1)
                    n = zigZagSegment(s, o, e, i, r, -n),
                    o = h !== a - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % a) : null,
                    zigZagCorner(s, t, h + 1, e, i, r, n);
                return s
            },
            ZigZagModifier.prototype.processShapes = function(t) {
                var e,
                    i,
                    r,
                    a,
                    s,
                    n,
                    o = this.shapes.length,
                    h = this.amplitude.v,
                    l = Math.max(0, Math.round(this.frequency.v)),
                    p = this.pointsType.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (n = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, r = 0; r < a; r += 1)
                                n.addShape(this.processPath(e[r], h, l, p));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            },
            extendPrototype([ShapeModifier], OffsetPathModifier),
            OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
                this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this),
                this.lineJoin = e.lj,
                this._isAnimated = 0 !== this.amount.effectsSequence.length
            },
            OffsetPathModifier.prototype.processPath = function(t, e, i, r) {
                var a = shapePool.newElement();
                a.c = t.c;
                var s,
                    n,
                    o,
                    h = t.length();
                t.c || (h -= 1);
                var l = [];
                for (s = 0; s < h; s += 1)
                    o = PolynomialBezier.shapeSegment(t, s),
                    l.push(offsetSegmentSplit(o, e));
                if (!t.c)
                    for (s = h - 1; s >= 0; s -= 1)
                        o = PolynomialBezier.shapeSegmentInverted(t, s),
                        l.push(offsetSegmentSplit(o, e));
                l = pruneIntersections(l);
                var p = null,
                    f = null;
                for (s = 0; s < l.length; s += 1) {
                    var c = l[s];
                    for (f && (p = joinLines(a, f, c[0], i, r)), f = c[c.length - 1], n = 0; n < c.length; n += 1)
                        o = c[n],
                        p && pointEqual(o.points[0], p) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()),
                        a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()),
                        p = o.points[3]
                }
                return l.length && joinLines(a, f, l[0][0], i, r), a
            },
            OffsetPathModifier.prototype.processShapes = function(t) {
                var e,
                    i,
                    r,
                    a,
                    s,
                    n,
                    o = this.shapes.length,
                    h = this.amount.v,
                    l = this.miterLimit.v,
                    p = this.lineJoin;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (n = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, r = 0; r < a; r += 1)
                                n.addShape(this.processPath(e[r], h, p, l));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            };
            var FontManager = function() {
                var t = {
                        w: 0,
                        size: 0,
                        shapes: [],
                        data: {
                            shapes: []
                        }
                    },
                    e = [];
                e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var i = 127988,
                    r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
                function a(t, e) {
                    var i = createTag("span");
                    i.setAttribute("aria-hidden", !0),
                    i.style.fontFamily = e;
                    var r = createTag("span");
                    r.innerText = "giItT1WQy@!-/#",
                    i.style.position = "absolute",
                    i.style.left = "-10000px",
                    i.style.top = "-10000px",
                    i.style.fontSize = "300px",
                    i.style.fontVariant = "normal",
                    i.style.fontStyle = "normal",
                    i.style.fontWeight = "normal",
                    i.style.letterSpacing = "0",
                    i.appendChild(r),
                    document.body.appendChild(i);
                    var a = r.offsetWidth;
                    return r.style.fontFamily = function(t) {
                        var e,
                            i = t.split(","),
                            r = i.length,
                            a = [];
                        for (e = 0; e < r; e += 1)
                            "sans-serif" !== i[e] && "monospace" !== i[e] && a.push(i[e]);
                        return a.join(",")
                    }(t) + ", " + e, {
                        node: r,
                        w: a,
                        parent: i
                    }
                }
                function s(t, e) {
                    var i,
                        r = document.body && e ? "svg" : "canvas",
                        a = getFontProperties(t);
                    if ("svg" === r) {
                        var s = createNS("text");
                        s.style.fontSize = "100px",
                        s.setAttribute("font-family", t.fFamily),
                        s.setAttribute("font-style", a.style),
                        s.setAttribute("font-weight", a.weight),
                        s.textContent = "1",
                        t.fClass ? (s.style.fontFamily = "inherit", s.setAttribute("class", t.fClass)) : s.style.fontFamily = t.fFamily,
                        e.appendChild(s),
                        i = s
                    } else {
                        var n = new OffscreenCanvas(500, 500).getContext("2d");
                        n.font = a.style + " " + a.weight + " 100px " + t.fFamily,
                        i = n
                    }
                    return {
                        measureText: function(t) {
                            return "svg" === r ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
                        }
                    }
                }
                function n(t) {
                    var e = 0,
                        i = t.charCodeAt(0);
                    if (i >= 55296 && i <= 56319) {
                        var r = t.charCodeAt(1);
                        r >= 56320 && r <= 57343 && (e = 1024 * (i - 55296) + r - 56320 + 65536)
                    }
                    return e
                }
                function o(t) {
                    var e = n(t);
                    return e >= 127462 && e <= 127487
                }
                var h = function() {
                    this.fonts = [],
                    this.chars = null,
                    this.typekitLoaded = 0,
                    this.isLoaded = !1,
                    this._warned = !1,
                    this.initTime = Date.now(),
                    this.setIsLoadedBinded = this.setIsLoaded.bind(this),
                    this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                h.isModifier = function(t, e) {
                    var i = t.toString(16) + e.toString(16);
                    return -1 !== r.indexOf(i)
                },
                h.isZeroWidthJoiner = function(t) {
                    return 8205 === t
                },
                h.isFlagEmoji = function(t) {
                    return o(t.substr(0, 2)) && o(t.substr(2, 2))
                },
                h.isRegionalCode = o,
                h.isCombinedCharacter = function(t) {
                    return -1 !== e.indexOf(t)
                },
                h.isRegionalFlag = function(t, e) {
                    var r = n(t.substr(e, 2));
                    if (r !== i)
                        return !1;
                    var a = 0;
                    for (e += 2; a < 5;) {
                        if ((r = n(t.substr(e, 2))) < 917601 || r > 917626)
                            return !1;
                        a += 1,
                        e += 2
                    }
                    return 917631 === n(t.substr(e, 2))
                },
                h.isVariationSelector = function(t) {
                    return 65039 === t
                },
                h.BLACK_FLAG_CODE_POINT = i;
                var l = {
                    addChars: function(t) {
                        if (t) {
                            var e;
                            this.chars || (this.chars = []);
                            var i,
                                r,
                                a = t.length,
                                s = this.chars.length;
                            for (e = 0; e < a; e += 1) {
                                for (i = 0, r = !1; i < s;)
                                    this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0),
                                    i += 1;
                                r || (this.chars.push(t[e]), s += 1)
                            }
                        }
                    },
                    addFonts: function(t, e) {
                        if (t) {
                            if (this.chars)
                                return this.isLoaded = !0, void (this.fonts = t.list);
                            if (!document.body)
                                return this.isLoaded = !0, t.list.forEach((function(t) {
                                    t.helper = s(t),
                                    t.cache = {}
                                })), void (this.fonts = t.list);
                            var i,
                                r = t.list,
                                n = r.length,
                                o = n;
                            for (i = 0; i < n; i += 1) {
                                var h,
                                    l,
                                    p = !0;
                                if (r[i].loaded = !1, r[i].monoCase = a(r[i].fFamily, "monospace"), r[i].sansCase = a(r[i].fFamily, "sans-serif"), r[i].fPath) {
                                    if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                                        if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                                            var f = createTag("style");
                                            f.setAttribute("f-forigin", r[i].fOrigin),
                                            f.setAttribute("f-origin", r[i].origin),
                                            f.setAttribute("f-family", r[i].fFamily),
                                            f.type = "text/css",
                                            f.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}",
                                            e.appendChild(f)
                                        }
                                    } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                                        for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1)
                                            -1 !== h[l].href.indexOf(r[i].fPath) && (p = !1);
                                        if (p) {
                                            var c = createTag("link");
                                            c.setAttribute("f-forigin", r[i].fOrigin),
                                            c.setAttribute("f-origin", r[i].origin),
                                            c.type = "text/css",
                                            c.rel = "stylesheet",
                                            c.href = r[i].fPath,
                                            document.body.appendChild(c)
                                        }
                                    } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                                        for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1)
                                            r[i].fPath === h[l].src && (p = !1);
                                        if (p) {
                                            var d = createTag("link");
                                            d.setAttribute("f-forigin", r[i].fOrigin),
                                            d.setAttribute("f-origin", r[i].origin),
                                            d.setAttribute("rel", "stylesheet"),
                                            d.setAttribute("href", r[i].fPath),
                                            e.appendChild(d)
                                        }
                                    }
                                } else
                                    r[i].loaded = !0,
                                    o -= 1;
                                r[i].helper = s(r[i], e),
                                r[i].cache = {},
                                this.fonts.push(r[i])
                            }
                            0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else
                            this.isLoaded = !0
                    },
                    getCharData: function(e, i, r) {
                        for (var a = 0, s = this.chars.length; a < s;) {
                            if (this.chars[a].ch === e && this.chars[a].style === i && this.chars[a].fFamily === r)
                                return this.chars[a];
                            a += 1
                        }
                        return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, r)), t
                    },
                    getFontByName: function(t) {
                        for (var e = 0, i = this.fonts.length; e < i;) {
                            if (this.fonts[e].fName === t)
                                return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(t, e, i) {
                        var r = this.getFontByName(e),
                            a = t;
                        if (!r.cache[a]) {
                            var s = r.helper;
                            if (" " === t) {
                                var n = s.measureText("|" + t + "|"),
                                    o = s.measureText("||");
                                r.cache[a] = (n - o) / 100
                            } else
                                r.cache[a] = s.measureText(t) / 100
                        }
                        return r.cache[a] * i
                    },
                    checkLoadedFonts: function() {
                        var t,
                            e,
                            i,
                            r = this.fonts.length,
                            a = r;
                        for (t = 0; t < r; t += 1)
                            this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                        0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                };
                return h.prototype = l, h
            }();
            function SlotManager(t) {
                this.animationData = t
            }
            function slotFactory(t) {
                return new SlotManager(t)
            }
            function RenderableElement() {}
            SlotManager.prototype.getProp = function(t) {
                return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
            },
            RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1,
                    this.hidden = !1,
                    this.isTransparent = !1,
                    this.renderableComponents = []
                },
                addRenderableComponent: function(t) {
                    -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                },
                removeRenderableComponent: function(t) {
                    -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                },
                prepareRenderableFrame: function(t) {
                    this.checkLayerLimits(t)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                },
                renderRenderable: function() {
                    var t,
                        e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1)
                        this.renderableComponents[t].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return 5 === this.data.ty ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            };
            var getBlendMode = (blendModeEnums = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                }, function(t) {
                    return blendModeEnums[t] || ""
                }),
                blendModeEnums;
            function SliderEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function AngleEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function ColorEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
            }
            function PointEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
            }
            function LayerIndexEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function MaskIndexEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function CheckboxEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function NoValueEffect() {
                this.p = {}
            }
            function EffectsManager(t, e) {
                var i,
                    r = t.ef || [];
                this.effectElements = [];
                var a,
                    s = r.length;
                for (i = 0; i < s; i += 1)
                    a = new GroupEffect(r[i], e),
                    this.effectElements.push(a)
            }
            function GroupEffect(t, e) {
                this.init(t, e)
            }
            function BaseElement() {}
            function FrameElement() {}
            function FootageElement(t, e, i) {
                this.initFrame(),
                this.initRenderable(),
                this.assetData = e.getAssetData(t.refId),
                this.footageData = e.imageLoader.getAsset(this.assetData),
                this.initBaseData(t, e, i)
            }
            function AudioElement(t, e, i) {
                this.initFrame(),
                this.initRenderable(),
                this.assetData = e.getAssetData(t.refId),
                this.initBaseData(t, e, i),
                this._isPlaying = !1,
                this._canPlay = !1;
                var r = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(r),
                this._currentTime = 0,
                this.globalData.audioController.addAudio(this),
                this._volumeMultiplier = 1,
                this._volume = 1,
                this._previousVolume = null,
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                },
                this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                    k: [100]
                }, 1, .01, this)
            }
            function BaseRenderer() {}
            extendPrototype([DynamicPropertyContainer], GroupEffect),
            GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
            GroupEffect.prototype.init = function(t, e) {
                var i;
                this.data = t,
                this.effectElements = [],
                this.initDynamicPropertyContainer(e);
                var r,
                    a = this.data.ef.length,
                    s = this.data.ef;
                for (i = 0; i < a; i += 1) {
                    switch (r = null, s[i].ty) {
                    case 0:
                        r = new SliderEffect(s[i], e, this);
                        break;
                    case 1:
                        r = new AngleEffect(s[i], e, this);
                        break;
                    case 2:
                        r = new ColorEffect(s[i], e, this);
                        break;
                    case 3:
                        r = new PointEffect(s[i], e, this);
                        break;
                    case 4:
                    case 7:
                        r = new CheckboxEffect(s[i], e, this);
                        break;
                    case 10:
                        r = new LayerIndexEffect(s[i], e, this);
                        break;
                    case 11:
                        r = new MaskIndexEffect(s[i], e, this);
                        break;
                    case 5:
                        r = new EffectsManager(s[i], e, this);
                        break;
                    default:
                        r = new NoValueEffect(s[i], e, this)
                    }
                    r && this.effectElements.push(r)
                }
            },
            BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask)
                        return !1;
                    for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl)
                            return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    var t = getExpressionInterfaces();
                    if (t) {
                        var e = t("layer"),
                            i = t("effects"),
                            r = t("shape"),
                            a = t("text"),
                            s = t("comp");
                        this.layerInterface = e(this),
                        this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var n = i.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(n),
                        0 === this.data.ty || this.data.xt ? this.compInterface = s(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
                    }
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, i) {
                    this.globalData = e,
                    this.comp = i,
                    this.data = t,
                    this.layerId = createElementID(),
                    this.data.sr || (this.data.sr = 1),
                    this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            },
            FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1,
                    this.dynamicProperties = [],
                    this._mdf = !1
                },
                prepareProperties: function(t, e) {
                    var i,
                        r = this.dynamicProperties.length;
                    for (i = 0; i < r; i += 1)
                        (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                }
            },
            FootageElement.prototype.prepareFrame = function() {},
            extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
            FootageElement.prototype.getBaseElement = function() {
                return null
            },
            FootageElement.prototype.renderFrame = function() {},
            FootageElement.prototype.destroy = function() {},
            FootageElement.prototype.initExpressions = function() {
                var t = getExpressionInterfaces();
                if (t) {
                    var e = t("footage");
                    this.layerInterface = e(this)
                }
            },
            FootageElement.prototype.getFootageData = function() {
                return this.footageData
            },
            AudioElement.prototype.prepareFrame = function(t) {
                if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder)
                    this._currentTime = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    this._currentTime = e
                }
                this._volume = this.lv.v[0];
                var i = this._volume * this._volumeMultiplier;
                this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
            },
            extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
            AudioElement.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
            },
            AudioElement.prototype.show = function() {},
            AudioElement.prototype.hide = function() {
                this.audio.pause(),
                this._isPlaying = !1
            },
            AudioElement.prototype.pause = function() {
                this.audio.pause(),
                this._isPlaying = !1,
                this._canPlay = !1
            },
            AudioElement.prototype.resume = function() {
                this._canPlay = !0
            },
            AudioElement.prototype.setRate = function(t) {
                this.audio.rate(t)
            },
            AudioElement.prototype.volume = function(t) {
                this._volumeMultiplier = t,
                this._previousVolume = t * this._volume,
                this.audio.volume(this._previousVolume)
            },
            AudioElement.prototype.getBaseElement = function() {
                return null
            },
            AudioElement.prototype.destroy = function() {},
            AudioElement.prototype.sourceRectAtTime = function() {},
            AudioElement.prototype.initExpressions = function() {},
            BaseRenderer.prototype.checkLayers = function(t) {
                var e,
                    i,
                    r = this.layers.length;
                for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1)
                    this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e),
                    this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            },
            BaseRenderer.prototype.createItem = function(t) {
                switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                default:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t)
                }
            },
            BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            },
            BaseRenderer.prototype.createAudio = function(t) {
                return new AudioElement(t, this.globalData, this)
            },
            BaseRenderer.prototype.createFootage = function(t) {
                return new FootageElement(t, this.globalData, this)
            },
            BaseRenderer.prototype.buildAllItems = function() {
                var t,
                    e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    this.buildItem(t);
                this.checkPendingElements()
            },
            BaseRenderer.prototype.includeLayers = function(t) {
                var e;
                this.completeLayers = !1;
                var i,
                    r = t.length,
                    a = this.layers.length;
                for (e = 0; e < r; e += 1)
                    for (i = 0; i < a;) {
                        if (this.layers[i].id === t[e].id) {
                            this.layers[i] = t[e];
                            break
                        }
                        i += 1
                    }
            },
            BaseRenderer.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
            },
            BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            },
            BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                for (var r = this.elements, a = this.layers, s = 0, n = a.length; s < n;)
                    a[s].ind == e && (r[s] && !0 !== r[s] ? (i.push(r[s]), r[s].setAsParent(), void 0 !== a[s].parent ? this.buildElementParenting(t, a[s].parent, i) : t.setHierarchy(i)) : (this.buildItem(s), this.addPendingElement(t))),
                    s += 1
            },
            BaseRenderer.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
            },
            BaseRenderer.prototype.searchExtraCompositions = function(t) {
                var e,
                    i = t.length;
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var r = this.createComp(t[e]);
                        r.initExpressions(),
                        this.globalData.projectInterface.registerComposition(r)
                    }
            },
            BaseRenderer.prototype.getElementById = function(t) {
                var e,
                    i = this.elements.length;
                for (e = 0; e < i; e += 1)
                    if (this.elements[e].data.ind === t)
                        return this.elements[e];
                return null
            },
            BaseRenderer.prototype.getElementByPath = function(t) {
                var e,
                    i = t.shift();
                if ("number" == typeof i)
                    e = this.elements[i];
                else {
                    var r,
                        a = this.elements.length;
                    for (r = 0; r < a; r += 1)
                        if (this.elements[r].data.nm === i) {
                            e = this.elements[r];
                            break
                        }
                }
                return 0 === t.length ? e : e.getElementByPath(t)
            },
            BaseRenderer.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new FontManager,
                this.globalData.slotManager = slotFactory(t),
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
                this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
                this.globalData.imageLoader = this.animationItem.imagePreloader,
                this.globalData.audioController = this.animationItem.audioController,
                this.globalData.frameId = 0,
                this.globalData.frameRate = t.fr,
                this.globalData.nm = t.nm,
                this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                }
            };
            var effectTypes = {
                TRANSFORM_EFFECT: "transformEFfect"
            };
            function TransformElement() {}
            function MaskElement(t, e, i) {
                this.data = t,
                this.element = e,
                this.globalData = i,
                this.storedData = [],
                this.masksProperties = this.data.masksProperties || [],
                this.maskElement = null;
                var r,
                    a,
                    s = this.globalData.defs,
                    n = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(n),
                this.solidPath = "";
                var o,
                    h,
                    l,
                    p,
                    f,
                    c,
                    d = this.masksProperties,
                    m = 0,
                    u = [],
                    y = createElementID(),
                    g = "clipPath",
                    v = "clip-path";
                for (r = 0; r < n; r += 1)
                    if (("a" !== d[r].mode && "n" !== d[r].mode || d[r].inv || 100 !== d[r].o.k || d[r].o.x) && (g = "mask", v = "mask"), "s" !== d[r].mode && "i" !== d[r].mode || 0 !== m ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), a = createNS("path"), "n" === d[r].mode)
                        this.viewData[r] = {
                            op: PropertyFactory.getProp(this.element, d[r].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, d[r], 3),
                            elem: a,
                            lastPath: ""
                        },
                        s.appendChild(a);
                    else {
                        var _;
                        if (m += 1, a.setAttribute("fill", "s" === d[r].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== d[r].x.k ? (g = "mask", v = "mask", c = PropertyFactory.getProp(this.element, d[r].x, 0, null, this.element), _ = createElementID(), (p = createNS("filter")).setAttribute("id", _), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), s.appendChild(p), a.setAttribute("stroke", "s" === d[r].mode ? "#000000" : "#ffffff")) : (f = null, c = null), this.storedData[r] = {
                            elem: a,
                            x: c,
                            expan: f,
                            lastPath: "",
                            lastOperator: "",
                            filterId: _,
                            lastRadius: 0
                        }, "i" === d[r].mode) {
                            h = u.length;
                            var b = createNS("g");
                            for (o = 0; o < h; o += 1)
                                b.appendChild(u[o]);
                            var E = createNS("mask");
                            E.setAttribute("mask-type", "alpha"),
                            E.setAttribute("id", y + "_" + m),
                            E.appendChild(a),
                            s.appendChild(E),
                            b.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + m + ")"),
                            u.length = 0,
                            u.push(b)
                        } else
                            u.push(a);
                        d[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                        this.viewData[r] = {
                            elem: a,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, d[r].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, d[r], 3),
                            invRect: l
                        },
                        this.viewData[r].prop.k || this.drawPath(d[r], this.viewData[r].prop.v, this.viewData[r])
                    }
                for (this.maskElement = createNS(g), n = u.length, r = 0; r < n; r += 1)
                    this.maskElement.appendChild(u[r]);
                m > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), s.appendChild(this.maskElement)),
                this.viewData.length && this.element.addRenderableComponent(this)
            }
            TransformElement.prototype = {
                initTransform: function() {
                    var t = new Matrix;
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _localMatMdf: !1,
                        _opMdf: !1,
                        mat: t,
                        localMat: t,
                        localOpacity: 1
                    },
                    this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                    this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var t,
                            e = this.finalTransform.mat,
                            i = 0,
                            r = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; i < r;) {
                                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                i += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1)
                                e.multiply(this.hierarchy[i].finalTransform.mProp.v)
                    }
                    this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf),
                    this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                },
                renderLocalTransform: function() {
                    if (this.localTransforms) {
                        var t = 0,
                            e = this.localTransforms.length;
                        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                            for (; t < e;)
                                this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0),
                                this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0),
                                t += 1;
                        if (this.finalTransform._localMatMdf) {
                            var i = this.finalTransform.localMat;
                            for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                                var r = this.localTransforms[t].matrix;
                                i.multiply(r)
                            }
                            i.multiply(this.finalTransform.mat)
                        }
                        if (this.finalTransform._opMdf) {
                            var a = this.finalTransform.localOpacity;
                            for (t = 0; t < e; t += 1)
                                a *= .01 * this.localTransforms[t].opacity;
                            this.finalTransform.localOpacity = a
                        }
                    }
                },
                searchEffectTransforms: function() {
                    if (this.renderableEffectsManager) {
                        var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                        if (t.length) {
                            this.localTransforms = [],
                            this.finalTransform.localMat = new Matrix;
                            var e = 0,
                                i = t.length;
                            for (e = 0; e < i; e += 1)
                                this.localTransforms.push(t[e])
                        }
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var i, r = !0, a = this.comp; r;)
                        a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : r = !1;
                    var s,
                        n = e.length;
                    for (i = 0; i < n; i += 1)
                        s = e[i].mat.applyToPointArray(0, 0, 0),
                        t = [t[0] - s[0], t[1] - s[1], 0];
                    return t
                },
                mHelper: new Matrix
            },
            MaskElement.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
            },
            MaskElement.prototype.renderFrame = function(t) {
                var e,
                    i = this.element.finalTransform.mat,
                    r = this.masksProperties.length;
                for (e = 0; e < r; e += 1)
                    if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                        var a = this.storedData[e].expan;
                        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                    }
            },
            MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            },
            MaskElement.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
            },
            MaskElement.prototype.drawPath = function(t, e, i) {
                var r,
                    a,
                    s = " M" + e.v[0][0] + "," + e.v[0][1];
                for (a = e._length, r = 1; r < a; r += 1)
                    s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
                if (e.c && a > 1 && (s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
                    var n = "";
                    i.elem && (e.c && (n = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", n)),
                    i.lastPath = s
                }
            },
            MaskElement.prototype.destroy = function() {
                this.element = null,
                this.globalData = null,
                this.maskElement = null,
                this.data = null,
                this.masksProperties = null
            };
            var filtersFactory = function() {
                    var t = {
                        createFilter: function(t, e) {
                            var i = createNS("filter");
                            return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                        },
                        createAlphaToLuminanceFilter: function() {
                            var t = createNS("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }
                    };
                    return t
                }(),
                featureSupport = function() {
                    var t = {
                        maskType: !0,
                        svgLumaHidden: !0,
                        offscreenCanvas: "undefined" != typeof OffscreenCanvas
                    };
                    return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
                }(),
                registeredEffects$1 = {},
                idPrefix = "filter_result_";
            function SVGEffects(t) {
                var e,
                    i,
                    r = "SourceGraphic",
                    a = t.data.ef ? t.data.ef.length : 0,
                    s = createElementID(),
                    n = filtersFactory.createFilter(s, !0),
                    o = 0;
                for (this.filters = [], e = 0; e < a; e += 1) {
                    i = null;
                    var h = t.data.ef[e].ty;
                    registeredEffects$1[h] && (i = new (0, registeredEffects$1[h].effect)(n, t.effectsManager.effectElements[e], t, idPrefix + o, r), r = idPrefix + o, registeredEffects$1[h].countsAsEffect && (o += 1)),
                    i && this.filters.push(i)
                }
                o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")),
                this.filters.length && t.addRenderableComponent(this)
            }
            function registerEffect$1(t, e, i) {
                registeredEffects$1[t] = {
                    effect: e,
                    countsAsEffect: i
                }
            }
            function SVGBaseElement() {}
            function HierarchyElement() {}
            function RenderableDOMElement() {}
            function IImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId),
                this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)),
                this.initElement(t, e, i),
                this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }
            function ProcessedElement(t, e) {
                this.elem = t,
                this.pos = e
            }
            function IShapeElement() {}
            SVGEffects.prototype.renderFrame = function(t) {
                var e,
                    i = this.filters.length;
                for (e = 0; e < i; e += 1)
                    this.filters[e].renderFrame(t)
            },
            SVGEffects.prototype.getEffects = function(t) {
                var e,
                    i = this.filters.length,
                    r = [];
                for (e = 0; e < i; e += 1)
                    this.filters[e].type === t && r.push(this.filters[e]);
                return r
            },
            SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"),
                    this.transformedElement = this.layerElement,
                    this.maskedElement = this.layerElement,
                    this._sizeChanged = !1;
                    var t = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var e = createNS("g");
                        e.setAttribute("id", this.layerId),
                        e.appendChild(this.layerElement),
                        t = e,
                        this.globalData.defs.appendChild(e)
                    } else
                        this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                        var i = createNS("clipPath"),
                            r = createNS("path");
                        r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var a = createElementID();
                        if (i.setAttribute("id", a), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
                            var s = createNS("g");
                            s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"),
                            s.appendChild(this.layerElement),
                            this.transformedElement = s,
                            t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else
                            this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
                    }
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()),
                    this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                },
                destroyBaseElement: function() {
                    this.layerElement = null,
                    this.matteElement = null,
                    this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData),
                    this.renderableEffectsManager = new SVGEffects(this),
                    this.searchEffectTransforms()
                },
                getMatte: function(t) {
                    if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                        var e,
                            i,
                            r,
                            a,
                            s = this.layerId + "_" + t;
                        if (1 === t || 3 === t) {
                            var n = createNS("mask");
                            n.setAttribute("id", s),
                            n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"),
                            (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                            n.appendChild(r),
                            this.globalData.defs.appendChild(n),
                            featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS("g")).appendChild(r), n.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
                        } else if (2 === t) {
                            var o = createNS("mask");
                            o.setAttribute("id", s),
                            o.setAttribute("mask-type", "alpha");
                            var h = createNS("g");
                            o.appendChild(h),
                            e = createElementID(),
                            i = filtersFactory.createFilter(e);
                            var l = createNS("feComponentTransfer");
                            l.setAttribute("in", "SourceGraphic"),
                            i.appendChild(l);
                            var p = createNS("feFuncA");
                            p.setAttribute("type", "table"),
                            p.setAttribute("tableValues", "1.0 0.0"),
                            l.appendChild(p),
                            this.globalData.defs.appendChild(i);
                            var f = createNS("rect");
                            f.setAttribute("width", this.comp.data.w),
                            f.setAttribute("height", this.comp.data.h),
                            f.setAttribute("x", "0"),
                            f.setAttribute("y", "0"),
                            f.setAttribute("fill", "#ffffff"),
                            f.setAttribute("opacity", "0"),
                            h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"),
                            h.appendChild(f),
                            (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                            h.appendChild(r),
                            featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), h.appendChild(f), a.appendChild(this.layerElement), h.appendChild(a)),
                            this.globalData.defs.appendChild(o)
                        }
                        this.matteMasks[t] = s
                    }
                    return this.matteMasks[t]
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
                }
            },
            HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [],
                    this._isParent = !1,
                    this.checkParenting()
                },
                setHierarchy: function(t) {
                    this.hierarchy = t
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            },
            extendPrototype([RenderableElement, createProxyFunction({
                initElement: function(t, e, i) {
                    this.initFrame(),
                    this.initBaseData(t, e, i),
                    this.initTransform(t, e, i),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(t) {
                    this._mdf = !1,
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null,
                    this.destroyBaseElement()
                }
            })], RenderableDOMElement),
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
            IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"),
                this.innerElem.setAttribute("width", this.assetData.w + "px"),
                this.innerElem.setAttribute("height", this.assetData.h + "px"),
                this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
                this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
                this.layerElement.appendChild(this.innerElem)
            },
            IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            },
            IShapeElement.prototype = {
                addShapeToModifiers: function(t) {
                    var e,
                        i = this.shapeModifiers.length;
                    for (e = 0; e < i; e += 1)
                        this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                    for (var e = this.shapeModifiers.length; 0 < e;)
                        if (this.shapeModifiers[0].isAnimatedWithShape(t))
                            return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t,
                            e = this.shapes.length;
                        for (t = 0; t < e; t += 1)
                            this.shapes[t].sh.reset();
                        for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1)
                            ;
                    }
                },
                searchProcessedElement: function(t) {
                    for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                        if (e[i].elem === t)
                            return e[i].pos;
                        i += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    for (var i = this.processedElements, r = i.length; r;)
                        if (i[r -= 1].elem === t)
                            return void (i[r].pos = e);
                    i.push(new ProcessedElement(t, e))
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange)
                }
            };
            var lineCapEnum = {
                    1: "butt",
                    2: "round",
                    3: "square"
                },
                lineJoinEnum = {
                    1: "miter",
                    2: "round",
                    3: "bevel"
                };
            function SVGShapeData(t, e, i) {
                this.caches = [],
                this.styles = [],
                this.transformers = t,
                this.lStr = "",
                this.sh = i,
                this.lvl = e,
                this._isAnimated = !!i.k;
                for (var r = 0, a = t.length; r < a;) {
                    if (t[r].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    r += 1
                }
            }
            function SVGStyleData(t, e) {
                this.data = t,
                this.type = t.ty,
                this.d = "",
                this.lvl = e,
                this._mdf = !1,
                this.closed = !0 === t.hd,
                this.pElem = createNS("path"),
                this.msElem = null
            }
            function DashProperty(t, e, i, r) {
                var a;
                this.elem = t,
                this.frameId = -1,
                this.dataProps = createSizedArray(e.length),
                this.renderer = i,
                this.k = !1,
                this.dashStr = "",
                this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
                this.dashoffset = createTypedArray("float32", 1),
                this.initDynamicPropertyContainer(r);
                var s,
                    n = e.length || 0;
                for (a = 0; a < n; a += 1)
                    s = PropertyFactory.getProp(t, e[a].v, 0, 0, this),
                    this.k = s.k || this.k,
                    this.dataProps[a] = {
                        n: e[a].n,
                        p: s
                    };
                this.k || this.getValue(!0),
                this._isAnimated = this.k
            }
            function SVGStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
                this.d = new DashProperty(t, e.d || {}, "svg", this),
                this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
                this.style = i,
                this._isAnimated = !!this._isAnimated
            }
            function SVGFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
                this.style = i
            }
            function SVGNoStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.style = i
            }
            function GradientProperty(t, e, i) {
                this.data = e,
                this.c = createTypedArray("uint8c", 4 * e.p);
                var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", r),
                this._cmdf = !1,
                this._omdf = !1,
                this._collapsable = this.checkCollapsable(),
                this._hasOpacity = r,
                this.initDynamicPropertyContainer(i),
                this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
                this.k = this.prop.k,
                this.getValue(!0)
            }
            function SVGGradientFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.initGradientData(t, e, i)
            }
            function SVGGradientStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
                this.d = new DashProperty(t, e.d || {}, "svg", this),
                this.initGradientData(t, e, i),
                this._isAnimated = !!this._isAnimated
            }
            function ShapeGroupData() {
                this.it = [],
                this.prevViewData = [],
                this.gr = createNS("g")
            }
            function SVGTransformData(t, e, i) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: i
                },
                this.elements = [],
                this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }
            SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            },
            SVGStyleData.prototype.reset = function() {
                this.d = "",
                this._mdf = !1
            },
            DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                    var e = 0,
                        i = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1)
                        "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            },
            extendPrototype([DynamicPropertyContainer], DashProperty),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
            GradientProperty.prototype.comparePoints = function(t, e) {
                for (var i = 0, r = this.o.length / 2; i < r;) {
                    if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01)
                        return !1;
                    i += 1
                }
                return !0
            },
            GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4)
                    return !1;
                if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e;) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                            return !1;
                        t += 1
                    }
                else if (!this.comparePoints(this.data.k.k, this.data.p))
                    return !1;
                return !0
            },
            GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                    var e,
                        i,
                        r,
                        a = 4 * this.data.p;
                    for (e = 0; e < a; e += 1)
                        i = e % 4 == 0 ? 100 : 255,
                        r = Math.round(this.prop.v[e] * i),
                        this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                    if (this.o.length)
                        for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1)
                            i = e % 2 == 0 ? 100 : 1,
                            r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e],
                            this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
                    this._mdf = !t
                }
            },
            extendPrototype([DynamicPropertyContainer], GradientProperty),
            SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
                this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
                this.h = PropertyFactory.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this),
                this.a = PropertyFactory.getProp(t, e.a || {
                    k: 0
                }, 0, degToRads, this),
                this.g = new GradientProperty(t, e.g, this),
                this.style = i,
                this.stops = [],
                this.setGradientData(i.pElem, e),
                this.setGradientOpacity(e, i),
                this._isAnimated = !!this._isAnimated
            },
            SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var i = createElementID(),
                    r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                r.setAttribute("id", i),
                r.setAttribute("spreadMethod", "pad"),
                r.setAttribute("gradientUnits", "userSpaceOnUse");
                var a,
                    s,
                    n,
                    o = [];
                for (n = 4 * e.g.p, s = 0; s < n; s += 4)
                    a = createNS("stop"),
                    r.appendChild(a),
                    o.push(a);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"),
                this.gf = r,
                this.cst = o
            },
            SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var i,
                        r,
                        a,
                        s = createNS("mask"),
                        n = createNS("path");
                    s.appendChild(n);
                    var o = createElementID(),
                        h = createElementID();
                    s.setAttribute("id", h);
                    var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    l.setAttribute("id", o),
                    l.setAttribute("spreadMethod", "pad"),
                    l.setAttribute("gradientUnits", "userSpaceOnUse"),
                    a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var p = this.stops;
                    for (r = 4 * t.g.p; r < a; r += 2)
                        (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"),
                        l.appendChild(i),
                        p.push(i);
                    n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"),
                    "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
                    this.of = l,
                    this.ms = s,
                    this.ost = p,
                    this.maskId = h,
                    e.msElem = n
                }
            },
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var buildShapeString = function(t, e, i, r) {
                    if (0 === e)
                        return "";
                    var a,
                        s = t.o,
                        n = t.i,
                        o = t.v,
                        h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                    for (a = 1; a < e; a += 1)
                        h += " C" + r.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + r.applyToPointStringified(n[a][0], n[a][1]) + " " + r.applyToPointStringified(o[a][0], o[a][1]);
                    return i && e && (h += " C" + r.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                },
                SVGElementsRenderer = function() {
                    var t = new Matrix,
                        e = new Matrix;
                    function i(t, e, i) {
                        (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v),
                        (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                    }
                    function r() {}
                    function a(i, r, a) {
                        var s,
                            n,
                            o,
                            h,
                            l,
                            p,
                            f,
                            c,
                            d,
                            m,
                            u = r.styles.length,
                            y = r.lvl;
                        for (p = 0; p < u; p += 1) {
                            if (h = r.sh._mdf || a, r.styles[p].lvl < y) {
                                for (c = e.reset(), d = y - r.styles[p].lvl, m = r.transformers.length - 1; !h && d > 0;)
                                    h = r.transformers[m].mProps._mdf || h,
                                    d -= 1,
                                    m -= 1;
                                if (h)
                                    for (d = y - r.styles[p].lvl, m = r.transformers.length - 1; d > 0;)
                                        c.multiply(r.transformers[m].mProps.v),
                                        d -= 1,
                                        m -= 1
                            } else
                                c = t;
                            if (n = (f = r.sh.paths)._length, h) {
                                for (o = "", s = 0; s < n; s += 1)
                                    (l = f.shapes[s]) && l._length && (o += buildShapeString(l, l._length, l.c, c));
                                r.caches[p] = o
                            } else
                                o = r.caches[p];
                            r.styles[p].d += !0 === i.hd ? "" : o,
                            r.styles[p]._mdf = h || r.styles[p]._mdf
                        }
                    }
                    function s(t, e, i) {
                        var r = e.style;
                        (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                        (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
                    }
                    function n(t, e, i) {
                        o(t, e, i),
                        h(0, e, i)
                    }
                    function o(t, e, i) {
                        var r,
                            a,
                            s,
                            n,
                            o,
                            h = e.gf,
                            l = e.g._hasOpacity,
                            p = e.s.v,
                            f = e.e.v;
                        if (e.o._mdf || i) {
                            var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                            e.style.pElem.setAttribute(c, e.o.v)
                        }
                        if (e.s._mdf || i) {
                            var d = 1 === t.t ? "x1" : "cx",
                                m = "x1" === d ? "y1" : "cy";
                            h.setAttribute(d, p[0]),
                            h.setAttribute(m, p[1]),
                            l && !e.g._collapsable && (e.of.setAttribute(d, p[0]), e.of.setAttribute(m, p[1]))
                        }
                        if (e.g._cmdf || i) {
                            r = e.cst;
                            var u = e.g.c;
                            for (s = r.length, a = 0; a < s; a += 1)
                                (n = r[a]).setAttribute("offset", u[4 * a] + "%"),
                                n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")")
                        }
                        if (l && (e.g._omdf || i)) {
                            var y = e.g.o;
                            for (s = (r = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < s; a += 1)
                                n = r[a],
                                e.g._collapsable || n.setAttribute("offset", y[2 * a] + "%"),
                                n.setAttribute("stop-opacity", y[2 * a + 1])
                        }
                        if (1 === t.t)
                            (e.e._mdf || i) && (h.setAttribute("x2", f[0]), h.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                        else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                            o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                            var g = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                v = e.h.v;
                            v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                            var _ = o * v,
                                b = Math.cos(g + e.a.v) * _ + p[0],
                                E = Math.sin(g + e.a.v) * _ + p[1];
                            h.setAttribute("fx", b),
                            h.setAttribute("fy", E),
                            l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", E))
                        }
                    }
                    function h(t, e, i) {
                        var r = e.style,
                            a = e.d;
                        a && (a._mdf || i) && a.dashStr && (r.pElem.setAttribute("stroke-dasharray", a.dashStr), r.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])),
                        e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                        (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v),
                        (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
                    }
                    return {
                        createRenderFunction: function(t) {
                            switch (t.ty) {
                            case "fl":
                                return s;
                            case "gf":
                                return o;
                            case "gs":
                                return n;
                            case "st":
                                return h;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return a;
                            case "tr":
                                return i;
                            case "no":
                                return r;
                            default:
                                return null
                            }
                        }
                    }
                }();
            function SVGShapeElement(t, e, i) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.shapeModifiers = [],
                this.itemsData = [],
                this.processedElements = [],
                this.animatedContents = [],
                this.initElement(t, e, i),
                this.prevViewData = []
            }
            function LetterProps(t, e, i, r, a, s) {
                this.o = t,
                this.sw = e,
                this.sc = i,
                this.fc = r,
                this.m = a,
                this.p = s,
                this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!i,
                    fc: !!r,
                    m: !0,
                    p: !0
                }
            }
            function TextProperty(t, e) {
                this._frameId = initialDefaultFrame,
                this.pv = "",
                this.v = "",
                this.kf = !1,
                this._isFirstFrame = !0,
                this._mdf = !1,
                e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)),
                this.data = e,
                this.elem = t,
                this.comp = this.elem.comp,
                this.keysIndex = 0,
                this.canResize = !1,
                this.minimumFontSize = 1,
                this.effectsSequence = [],
                this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                },
                this.copyData(this.currentData, this.data.d.k[0].s),
                this.searchProperty() || this.completeTextData(this.currentData)
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
            SVGShapeElement.prototype.initSecondaryElement = function() {},
            SVGShapeElement.prototype.identityMatrix = new Matrix,
            SVGShapeElement.prototype.buildExpressionInterface = function() {},
            SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                this.filterUniqueShapes()
            },
            SVGShapeElement.prototype.filterUniqueShapes = function() {
                var t,
                    e,
                    i,
                    r,
                    a = this.shapes.length,
                    s = this.stylesList.length,
                    n = [],
                    o = !1;
                for (i = 0; i < s; i += 1) {
                    for (r = this.stylesList[i], o = !1, n.length = 0, t = 0; t < a; t += 1)
                        -1 !== (e = this.shapes[t]).styles.indexOf(r) && (n.push(e), o = e._isAnimated || o);
                    n.length > 1 && o && this.setShapesAsAnimated(n)
                }
            },
            SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                var e,
                    i = t.length;
                for (e = 0; e < i; e += 1)
                    t[e].setAsAnimated()
            },
            SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var i,
                    r = new SVGStyleData(t, e),
                    a = r.pElem;
                return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, r) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, r) : "gf" === t.ty || "gs" === t.ty ? (i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new SVGNoStyleData(this, t, r)), "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
            },
            SVGShapeElement.prototype.createGroupElement = function(t) {
                var e = new ShapeGroupData;
                return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
            },
            SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                    r = new SVGTransformData(i, i.o, e);
                return this.addToAnimatedContents(t, r), r
            },
            SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                var r = 4;
                "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
                var a = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
                return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
            },
            SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                for (var i = 0, r = this.animatedContents.length; i < r;) {
                    if (this.animatedContents[i].element === e)
                        return;
                    i += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(t),
                    element: e,
                    data: t
                })
            },
            SVGShapeElement.prototype.setElementStyles = function(t) {
                var e,
                    i = t.styles,
                    r = this.stylesList.length;
                for (e = 0; e < r; e += 1)
                    this.stylesList[e].closed || i.push(this.stylesList[e])
            },
            SVGShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                    this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue();
                this.renderModifiers()
            },
            SVGShapeElement.prototype.searchShapes = function(t, e, i, r, a, s, n) {
                var o,
                    h,
                    l,
                    p,
                    f,
                    c,
                    d = [].concat(s),
                    m = t.length - 1,
                    u = [],
                    y = [];
                for (o = m; o >= 0; o -= 1) {
                    if ((c = this.searchProcessedElement(t[o])) ? e[o] = i[c - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty)
                        c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a),
                        t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem),
                        u.push(e[o].style);
                    else if ("gr" === t[o].ty) {
                        if (c)
                            for (l = e[o].it.length, h = 0; h < l; h += 1)
                                e[o].prevViewData[h] = e[o].it[h];
                        else
                            e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, d, n),
                        t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
                    } else
                        "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, d.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], d, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (c ? (f = e[o]).closed = !1 : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), y.push(f)) : "rp" === t[o].ty && (c ? (f = e[o]).closed = !0 : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = !1), y.push(f));
                    this.addProcessedElement(t[o], o + 1)
                }
                for (m = u.length, o = 0; o < m; o += 1)
                    u[o].closed = !0;
                for (m = y.length, o = 0; o < m; o += 1)
                    y[o].closed = !0
            },
            SVGShapeElement.prototype.renderInnerContent = function() {
                var t;
                this.renderModifiers();
                var e = this.stylesList.length;
                for (t = 0; t < e; t += 1)
                    this.stylesList[t].reset();
                for (this.renderShape(), t = 0; t < e; t += 1)
                    (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
            },
            SVGShapeElement.prototype.renderShape = function() {
                var t,
                    e,
                    i = this.animatedContents.length;
                for (t = 0; t < i; t += 1)
                    e = this.animatedContents[t],
                    (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
            },
            SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(),
                this.shapesData = null,
                this.itemsData = null
            },
            LetterProps.prototype.update = function(t, e, i, r, a, s) {
                this._mdf.o = !1,
                this._mdf.sw = !1,
                this._mdf.sc = !1,
                this._mdf.fc = !1,
                this._mdf.m = !1,
                this._mdf.p = !1;
                var n = !1;
                return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, n = !0), n
            },
            TextProperty.prototype.defaultBoxWidth = [0, 0],
            TextProperty.prototype.copyData = function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            },
            TextProperty.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t),
                this.currentData = t,
                this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
                this._mdf = !0
            },
            TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            },
            TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
            },
            TextProperty.prototype.addEffect = function(t) {
                this.effectsSequence.push(t),
                this.elem.addDynamicProperty(this)
            },
            TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData,
                        i = this.keysIndex;
                    if (this.lock)
                        this.setCurrentData(this.currentData);
                    else {
                        var r;
                        this.lock = !0,
                        this._mdf = !1;
                        var a = this.effectsSequence.length,
                            s = t || this.data.d.k[this.keysIndex].s;
                        for (r = 0; r < a; r += 1)
                            s = i !== this.keysIndex ? this.effectsSequence[r](s, s.t) : this.effectsSequence[r](this.currentData, s.t);
                        e !== s && this.setCurrentData(s),
                        this.v = this.currentData,
                        this.pv = this.v,
                        this.lock = !1,
                        this.frameId = this.elem.globalData.frameId
                    }
                }
            },
            TextProperty.prototype.getKeyframeValue = function() {
                for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);)
                    i += 1;
                return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
            },
            TextProperty.prototype.buildFinalText = function(t) {
                for (var e, i, r = [], a = 0, s = t.length, n = !1, o = !1, h = ""; a < s;)
                    n = o,
                    o = !1,
                    e = t.charCodeAt(a),
                    h = t.charAt(a),
                    FontManager.isCombinedCharacter(e) ? n = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, a) ? h = t.substr(a, 14) : (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343 && (FontManager.isModifier(e, i) ? (h = t.substr(a, 2), n = !0) : h = FontManager.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (i = t.charCodeAt(a + 1), FontManager.isVariationSelector(e) && (n = !0)) : FontManager.isZeroWidthJoiner(e) && (n = !0, o = !0),
                    n ? (r[r.length - 1] += h, n = !1) : r.push(h),
                    a += h.length;
                return r
            },
            TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e,
                    i,
                    r,
                    a,
                    s,
                    n,
                    o,
                    h = this.elem.globalData.fontManager,
                    l = this.data,
                    p = [],
                    f = 0,
                    c = l.m.g,
                    d = 0,
                    m = 0,
                    u = 0,
                    y = [],
                    g = 0,
                    v = 0,
                    _ = h.getFontByName(t.f),
                    b = 0,
                    E = getFontProperties(_);
                t.fWeight = E.weight,
                t.fStyle = E.style,
                t.finalSize = t.s,
                t.finalText = this.buildFinalText(t.t),
                i = t.finalText.length,
                t.finalLineHeight = t.lh;
                var S,
                    x = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                    for (var P, A, C = !0, T = t.sz[0], w = t.sz[1]; C;) {
                        P = 0,
                        g = 0,
                        i = (A = this.buildFinalText(t.t)).length,
                        x = t.tr / 1e3 * t.finalSize;
                        var k = -1;
                        for (e = 0; e < i; e += 1)
                            S = A[e].charCodeAt(0),
                            r = !1,
                            " " === A[e] ? k = e : 13 !== S && 3 !== S || (g = 0, r = !0, P += t.finalLineHeight || 1.2 * t.finalSize),
                            h.chars ? (o = h.getCharData(A[e], _.fStyle, _.fFamily), b = r ? 0 : o.w * t.finalSize / 100) : b = h.measureText(A[e], t.f, t.finalSize),
                            g + b > T && " " !== A[e] ? (-1 === k ? i += 1 : e = k, P += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, k === e ? 1 : 0, "\r"), k = -1, g = 0) : (g += b, g += x);
                        P += _.ascent * t.finalSize / 100,
                        this.canResize && t.finalSize > this.minimumFontSize && w < P ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, i = t.finalText.length, C = !1)
                    }
                g = -x,
                b = 0;
                var M,
                    D = 0;
                for (e = 0; e < i; e += 1)
                    if (r = !1, 13 === (S = (M = t.finalText[e]).charCodeAt(0)) || 3 === S ? (D = 0, y.push(g), v = g > v ? g : v, g = -2 * x, a = "", r = !0, u += 1) : a = M, h.chars ? (o = h.getCharData(M, _.fStyle, h.getFontByName(t.f).fFamily), b = r ? 0 : o.w * t.finalSize / 100) : b = h.measureText(a, t.f, t.finalSize), " " === M ? D += b + x : (g += b + x + D, D = 0), p.push({
                        l: b,
                        an: b,
                        add: d,
                        n: r,
                        anIndexes: [],
                        val: a,
                        line: u,
                        animatorJustifyOffset: 0
                    }), 2 == c) {
                        if (d += b, "" === a || " " === a || e === i - 1) {
                            for ("" !== a && " " !== a || (d -= b); m <= e;)
                                p[m].an = d,
                                p[m].ind = f,
                                p[m].extra = b,
                                m += 1;
                            f += 1,
                            d = 0
                        }
                    } else if (3 == c) {
                        if (d += b, "" === a || e === i - 1) {
                            for ("" === a && (d -= b); m <= e;)
                                p[m].an = d,
                                p[m].ind = f,
                                p[m].extra = b,
                                m += 1;
                            d = 0,
                            f += 1
                        }
                    } else
                        p[f].ind = f,
                        p[f].extra = 0,
                        f += 1;
                if (t.l = p, v = g > v ? g : v, y.push(g), t.sz)
                    t.boxWidth = t.sz[0],
                    t.justifyOffset = 0;
                else
                    switch (t.boxWidth = v, t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0
                    }
                t.lineWidths = y;
                var I,
                    F,
                    R,
                    L,
                    B = l.a;
                n = B.length;
                var O = [];
                for (s = 0; s < n; s += 1) {
                    for ((I = B[s]).a.sc && (t.strokeColorAnim = !0), I.a.sw && (t.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (t.fillColorAnim = !0), L = 0, R = I.s.b, e = 0; e < i; e += 1)
                        (F = p[e]).anIndexes[s] = L,
                        (1 == R && "" !== F.val || 2 == R && "" !== F.val && " " !== F.val || 3 == R && (F.n || " " == F.val || e == i - 1) || 4 == R && (F.n || e == i - 1)) && (1 === I.s.rn && O.push(L), L += 1);
                    l.a[s].s.totalChars = L;
                    var $,
                        N = -1;
                    if (1 === I.s.rn)
                        for (e = 0; e < i; e += 1)
                            N != (F = p[e]).anIndexes[s] && (N = F.anIndexes[s], $ = O.splice(Math.floor(Math.random() * O.length), 1)[0]),
                            F.anIndexes[s] = $
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize,
                t.ls = t.ls || 0,
                t.ascent = _.ascent * t.finalSize / 100
            },
            TextProperty.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s);
                i = this.copyData(i, t),
                this.data.d.k[e].s = i,
                this.recalculate(e),
                this.setCurrentData(i),
                this.elem.addDynamicProperty(this)
            },
            TextProperty.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1,
                this.keysIndex = 0,
                this._isFirstFrame = !0,
                this.getValue(e)
            },
            TextProperty.prototype.canResizeFont = function(t) {
                this.canResize = t,
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this)
            },
            TextProperty.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1,
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this)
            };
            var TextSelectorProp = function() {
                var t = Math.max,
                    e = Math.min,
                    i = Math.floor;
                function r(t, e) {
                    this._currentTextLength = -1,
                    this.k = !1,
                    this.data = e,
                    this.elem = t,
                    this.comp = t.comp,
                    this.finalS = 0,
                    this.finalE = 0,
                    this.initDynamicPropertyContainer(t),
                    this.s = PropertyFactory.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this),
                    this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    },
                    this.o = PropertyFactory.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this),
                    this.xe = PropertyFactory.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this),
                    this.ne = PropertyFactory.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this),
                    this.sm = PropertyFactory.getProp(t, e.sm || {
                        k: 100
                    }, 0, 0, this),
                    this.a = PropertyFactory.getProp(t, e.a, 0, .01, this),
                    this.dynamicProperties.length || this.getValue()
                }
                return r.prototype = {
                    getMult: function(r) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var a = 0,
                            s = 0,
                            n = 1,
                            o = 1;
                        this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100,
                        this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                        var h = BezierFactory.getBezierEasing(a, s, n, o).get,
                            l = 0,
                            p = this.finalS,
                            f = this.finalE,
                            c = this.data.sh;
                        if (2 === c)
                            l = h(l = f === p ? r >= f ? 1 : 0 : t(0, e(.5 / (f - p) + (r - p) / (f - p), 1)));
                        else if (3 === c)
                            l = h(l = f === p ? r >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (r - p) / (f - p), 1)));
                        else if (4 === c)
                            f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (r - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5),
                            l = h(l);
                        else if (5 === c) {
                            if (f === p)
                                l = 0;
                            else {
                                var d = f - p,
                                    m = -d / 2 + (r = e(t(0, r + .5 - p), f - p)),
                                    u = d / 2;
                                l = Math.sqrt(1 - m * m / (u * u))
                            }
                            l = h(l)
                        } else
                            6 === c ? (f === p ? l = 0 : (r = e(t(0, r + .5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (f - p))) / 2), l = h(l)) : (r >= i(p) && (l = t(0, e(r - p < 0 ? e(f, 1) - (p - r) : f - r, 1))), l = h(l));
                        if (100 !== this.sm.v) {
                            var y = .01 * this.sm.v;
                            0 === y && (y = 1e-8);
                            var g = .5 - .5 * y;
                            l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1)
                        }
                        return l * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(),
                        this._mdf = t || this._mdf,
                        this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                        t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            i = this.o.v / e,
                            r = this.s.v / e + i,
                            a = this.e.v / e + i;
                        if (r > a) {
                            var s = r;
                            r = a,
                            a = s
                        }
                        this.finalS = r,
                        this.finalE = a
                    }
                }, extendPrototype([DynamicPropertyContainer], r), {
                    getTextSelectorProp: function(t, e, i) {
                        return new r(t, e, i)
                    }
                }
            }();
            function TextAnimatorDataProperty(t, e, i) {
                var r = {
                        propType: !1
                    },
                    a = PropertyFactory.getProp,
                    s = e.a;
                this.a = {
                    r: s.r ? a(t, s.r, 0, degToRads, i) : r,
                    rx: s.rx ? a(t, s.rx, 0, degToRads, i) : r,
                    ry: s.ry ? a(t, s.ry, 0, degToRads, i) : r,
                    sk: s.sk ? a(t, s.sk, 0, degToRads, i) : r,
                    sa: s.sa ? a(t, s.sa, 0, degToRads, i) : r,
                    s: s.s ? a(t, s.s, 1, .01, i) : r,
                    a: s.a ? a(t, s.a, 1, 0, i) : r,
                    o: s.o ? a(t, s.o, 0, .01, i) : r,
                    p: s.p ? a(t, s.p, 1, 0, i) : r,
                    sw: s.sw ? a(t, s.sw, 0, 0, i) : r,
                    sc: s.sc ? a(t, s.sc, 1, 0, i) : r,
                    fc: s.fc ? a(t, s.fc, 1, 0, i) : r,
                    fh: s.fh ? a(t, s.fh, 0, 0, i) : r,
                    fs: s.fs ? a(t, s.fs, 0, .01, i) : r,
                    fb: s.fb ? a(t, s.fb, 0, .01, i) : r,
                    t: s.t ? a(t, s.t, 0, 0, i) : r
                },
                this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i),
                this.s.t = e.s.t
            }
            function TextAnimatorProperty(t, e, i) {
                this._isFirstFrame = !0,
                this._hasMaskedPath = !1,
                this._frameId = -1,
                this._textData = t,
                this._renderType = e,
                this._elem = i,
                this._animatorsData = createSizedArray(this._textData.a.length),
                this._pathData = {},
                this._moreOptions = {
                    alignment: {}
                },
                this.renderedLetters = [],
                this.lettersChangedFlag = !1,
                this.initDynamicPropertyContainer(i)
            }
            function ITextElement() {}
            TextAnimatorProperty.prototype.searchProperties = function() {
                var t,
                    e,
                    i = this._textData.a.length,
                    r = PropertyFactory.getProp;
                for (t = 0; t < i; t += 1)
                    e = this._textData.a[t],
                    this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                    a: r(this._elem, this._textData.p.a, 0, 0, this),
                    f: r(this._elem, this._textData.p.f, 0, 0, this),
                    l: r(this._elem, this._textData.p.l, 0, 0, this),
                    r: r(this._elem, this._textData.p.r, 0, 0, this),
                    p: r(this._elem, this._textData.p.p, 0, 0, this),
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
                this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
            },
            TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var i,
                        r,
                        a,
                        s,
                        n,
                        o,
                        h,
                        l,
                        p,
                        f,
                        c,
                        d,
                        m,
                        u,
                        y,
                        g,
                        v,
                        _,
                        b,
                        E = this._moreOptions.alignment.v,
                        S = this._animatorsData,
                        x = this._textData,
                        P = this.mHelper,
                        A = this._renderType,
                        C = this.renderedLetters.length,
                        T = t.l;
                    if (this._hasMaskedPath) {
                        if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            var w,
                                k = b.v;
                            for (this._pathData.r.v && (k = k.reverse()), n = {
                                tLength: 0,
                                segments: []
                            }, s = k._length - 1, g = 0, a = 0; a < s; a += 1)
                                w = bez.buildBezierData(k.v[a], k.v[a + 1], [k.o[a][0] - k.v[a][0], k.o[a][1] - k.v[a][1]], [k.i[a + 1][0] - k.v[a + 1][0], k.i[a + 1][1] - k.v[a + 1][1]]),
                                n.tLength += w.segmentLength,
                                n.segments.push(w),
                                g += w.segmentLength;
                            a = s,
                            b.v.c && (w = bez.buildBezierData(k.v[a], k.v[0], [k.o[a][0] - k.v[a][0], k.o[a][1] - k.v[a][1]], [k.i[0][0] - k.v[0][0], k.i[0][1] - k.v[0][1]]), n.tLength += w.segmentLength, n.segments.push(w), g += w.segmentLength),
                            this._pathData.pi = n
                        }
                        if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = !0, u = n.segments, o < 0 && b.v.c)
                            for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (m = u[c = u.length - 1].points).length - 1; o < 0;)
                                o += m[f].partialLength,
                                (f -= 1) < 0 && (f = (m = u[c -= 1].points).length - 1);
                        d = (m = u[c].points)[f - 1],
                        y = (h = m[f]).partialLength
                    }
                    s = T.length,
                    i = 0,
                    r = 0;
                    var M,
                        D,
                        I,
                        F,
                        R,
                        L = 1.2 * t.finalSize * .714,
                        B = !0;
                    I = S.length;
                    var O,
                        $,
                        N,
                        V,
                        z,
                        H,
                        G,
                        Z,
                        j,
                        U,
                        q,
                        W,
                        K = -1,
                        Y = o,
                        X = c,
                        J = f,
                        Q = -1,
                        tt = "",
                        et = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var it = 0,
                            rt = 0,
                            at = 2 === t.j ? -.5 : -1,
                            st = 0,
                            nt = !0;
                        for (a = 0; a < s; a += 1)
                            if (T[a].n) {
                                for (it && (it += rt); st < a;)
                                    T[st].animatorJustifyOffset = it,
                                    st += 1;
                                it = 0,
                                nt = !0
                            } else {
                                for (D = 0; D < I; D += 1)
                                    (M = S[D].a).t.propType && (nt && 2 === t.j && (rt += M.t.v * at), (R = S[D].s.getMult(T[a].anIndexes[D], x.a[D].s.totalChars)).length ? it += M.t.v * R[0] * at : it += M.t.v * R * at);
                                nt = !1
                            }
                        for (it && (it += rt); st < a;)
                            T[st].animatorJustifyOffset = it,
                            st += 1
                    }
                    for (a = 0; a < s; a += 1) {
                        if (P.reset(), V = 1, T[a].n)
                            i = 0,
                            r += t.yOffset,
                            r += B ? 1 : 0,
                            o = Y,
                            B = !1,
                            this._hasMaskedPath && (f = J, d = (m = u[c = X].points)[f - 1], y = (h = m[f]).partialLength, l = 0),
                            tt = "",
                            q = "",
                            j = "",
                            W = "",
                            et = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (Q !== T[a].line) {
                                    switch (t.j) {
                                    case 1:
                                        o += g - t.lineWidths[T[a].line];
                                        break;
                                    case 2:
                                        o += (g - t.lineWidths[T[a].line]) / 2
                                    }
                                    Q = T[a].line
                                }
                                K !== T[a].ind && (T[K] && (o += T[K].extra), o += T[a].an / 2, K = T[a].ind),
                                o += E[0] * T[a].an * .005;
                                var ot = 0;
                                for (D = 0; D < I; D += 1)
                                    (M = S[D].a).p.propType && ((R = S[D].s.getMult(T[a].anIndexes[D], x.a[D].s.totalChars)).length ? ot += M.p.v[0] * R[0] : ot += M.p.v[0] * R),
                                    M.a.propType && ((R = S[D].s.getMult(T[a].anIndexes[D], x.a[D].s.totalChars)).length ? ot += M.a.v[0] * R[0] : ot += M.a.v[0] * R);
                                for (p = !0, this._pathData.a.v && (o = .5 * T[0].an + (g - this._pathData.f.v - .5 * T[0].an - .5 * T[T.length - 1].an) * K / (s - 1), o += this._pathData.f.v); p;)
                                    l + y >= o + ot || !m ? (v = (o + ot - l) / h.partialLength, $ = d.point[0] + (h.point[0] - d.point[0]) * v, N = d.point[1] + (h.point[1] - d.point[1]) * v, P.translate(-E[0] * T[a].an * .005, -E[1] * L * .01), p = !1) : m && (l += h.partialLength, (f += 1) >= m.length && (f = 0, u[c += 1] ? m = u[c].points : b.v.c ? (f = 0, m = u[c = 0].points) : (l -= h.partialLength, m = null)), m && (d = h, y = (h = m[f]).partialLength));
                                O = T[a].an / 2 - T[a].add,
                                P.translate(-O, 0, 0)
                            } else
                                O = T[a].an / 2 - T[a].add,
                                P.translate(-O, 0, 0),
                                P.translate(-E[0] * T[a].an * .005, -E[1] * L * .01, 0);
                            for (D = 0; D < I; D += 1)
                                (M = S[D].a).t.propType && (R = S[D].s.getMult(T[a].anIndexes[D], x.a[D].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? R.length ? o += M.t.v * R[0] : o += M.t.v * R : R.length ? i += M.t.v * R[0] : i += M.t.v * R));
                            for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (G = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < I; D += 1)
                                (M = S[D].a).a.propType && ((R = S[D].s.getMult(T[a].anIndexes[D], x.a[D].s.totalChars)).length ? P.translate(-M.a.v[0] * R[0], -M.a.v[1] * R[1], M.a.v[2] * R[2]) : P.translate(-M.a.v[0] * R, -M.a.v[1] * R, M.a.v[2] * R));
                            for (D = 0; D < I; D += 1)
                                (M = S[D].a).s.propType && ((R = S[D].s.getMult(T[a].anIndexes[D], x.a[D].s.totalChars)).length ? P.scale(1 + (M.s.v[0] - 1) * R[0], 1 + (M.s.v[1] - 1) * R[1], 1) : P.scale(1 + (M.s.v[0] - 1) * R, 1 + (M.s.v[1] - 1) * R, 1));
                            for (D = 0; D < I; D += 1) {
                                if (M = S[D].a, R = S[D].s.getMult(T[a].anIndexes[D], x.a[D].s.totalChars), M.sk.propType && (R.length ? P.skewFromAxis(-M.sk.v * R[0], M.sa.v * R[1]) : P.skewFromAxis(-M.sk.v * R, M.sa.v * R)), M.r.propType && (R.length ? P.rotateZ(-M.r.v * R[2]) : P.rotateZ(-M.r.v * R)), M.ry.propType && (R.length ? P.rotateY(M.ry.v * R[1]) : P.rotateY(M.ry.v * R)), M.rx.propType && (R.length ? P.rotateX(M.rx.v * R[0]) : P.rotateX(M.rx.v * R)), M.o.propType && (R.length ? V += (M.o.v * R[0] - V) * R[0] : V += (M.o.v * R - V) * R), t.strokeWidthAnim && M.sw.propType && (R.length ? H += M.sw.v * R[0] : H += M.sw.v * R), t.strokeColorAnim && M.sc.propType)
                                    for (Z = 0; Z < 3; Z += 1)
                                        R.length ? z[Z] += (M.sc.v[Z] - z[Z]) * R[0] : z[Z] += (M.sc.v[Z] - z[Z]) * R;
                                if (t.fillColorAnim && t.fc) {
                                    if (M.fc.propType)
                                        for (Z = 0; Z < 3; Z += 1)
                                            R.length ? G[Z] += (M.fc.v[Z] - G[Z]) * R[0] : G[Z] += (M.fc.v[Z] - G[Z]) * R;
                                    M.fh.propType && (G = R.length ? addHueToRGB(G, M.fh.v * R[0]) : addHueToRGB(G, M.fh.v * R)),
                                    M.fs.propType && (G = R.length ? addSaturationToRGB(G, M.fs.v * R[0]) : addSaturationToRGB(G, M.fs.v * R)),
                                    M.fb.propType && (G = R.length ? addBrightnessToRGB(G, M.fb.v * R[0]) : addBrightnessToRGB(G, M.fb.v * R))
                                }
                            }
                            for (D = 0; D < I; D += 1)
                                (M = S[D].a).p.propType && (R = S[D].s.getMult(T[a].anIndexes[D], x.a[D].s.totalChars), this._hasMaskedPath ? R.length ? P.translate(0, M.p.v[1] * R[0], -M.p.v[2] * R[1]) : P.translate(0, M.p.v[1] * R, -M.p.v[2] * R) : R.length ? P.translate(M.p.v[0] * R[0], M.p.v[1] * R[1], -M.p.v[2] * R[2]) : P.translate(M.p.v[0] * R, M.p.v[1] * R, -M.p.v[2] * R));
                            if (t.strokeWidthAnim && (j = H < 0 ? 0 : H), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), t.fillColorAnim && t.fc && (q = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), this._hasMaskedPath) {
                                if (P.translate(0, -t.ls), P.translate(0, E[1] * L * .01 + r, 0), this._pathData.p.v) {
                                    _ = (h.point[1] - d.point[1]) / (h.point[0] - d.point[0]);
                                    var ht = 180 * Math.atan(_) / Math.PI;
                                    h.point[0] < d.point[0] && (ht += 180),
                                    P.rotate(-ht * Math.PI / 180)
                                }
                                P.translate($, N, 0),
                                o -= E[0] * T[a].an * .005,
                                T[a + 1] && K !== T[a + 1].ind && (o += T[a].an / 2, o += .001 * t.tr * t.finalSize)
                            } else {
                                switch (P.translate(i, r, 0), t.ps && P.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    P.translate(T[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[a].line]), 0, 0);
                                    break;
                                case 2:
                                    P.translate(T[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[a].line]) / 2, 0, 0)
                                }
                                P.translate(0, -t.ls),
                                P.translate(O, 0, 0),
                                P.translate(E[0] * T[a].an * .005, E[1] * L * .01, 0),
                                i += T[a].l + .001 * t.tr * t.finalSize
                            }
                            "html" === A ? tt = P.toCSS() : "svg" === A ? tt = P.to2dCSS() : et = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]],
                            W = V
                        }
                        C <= a ? (F = new LetterProps(W, j, U, q, tt, et), this.renderedLetters.push(F), C += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[a], this.lettersChangedFlag = F.update(W, j, U, q, tt, et) || this.lettersChangedFlag)
                    }
                }
            },
            TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
            },
            TextAnimatorProperty.prototype.mHelper = new Matrix,
            TextAnimatorProperty.prototype.defaultPropsArray = [],
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            ITextElement.prototype.initElement = function(t, e, i) {
                this.lettersChangedFlag = !0,
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.textProperty = new TextProperty(this, t.t, this.dynamicProperties),
                this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this),
                this.initTransform(t, e, i),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties)
            },
            ITextElement.prototype.prepareFrame = function(t) {
                this._mdf = !1,
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange)
            },
            ITextElement.prototype.createPathShape = function(t, e) {
                var i,
                    r,
                    a = e.length,
                    s = "";
                for (i = 0; i < a; i += 1)
                    "sh" === e[i].ty && (r = e[i].ks.k, s += buildShapeString(r, r.i.length, !0, t));
                return s
            },
            ITextElement.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
            },
            ITextElement.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
            },
            ITextElement.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
            },
            ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, a) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                }
                e.translate(r, a, 0)
            },
            ITextElement.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
            },
            ITextElement.prototype.emptyProp = new LetterProps,
            ITextElement.prototype.destroy = function() {},
            ITextElement.prototype.validateText = function() {
                (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
            };
            var emptyShapeData = {
                shapes: []
            };
            function SVGTextLottieElement(t, e, i) {
                this.textSpans = [],
                this.renderType = "svg",
                this.initElement(t, e, i)
            }
            function ISolidElement(t, e, i) {
                this.initElement(t, e, i)
            }
            function NullElement(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initFrame(),
                this.initTransform(t, e, i),
                this.initHierarchy()
            }
            function SVGRendererBase() {}
            function ICompElement() {}
            function SVGCompElement(t, e, i) {
                this.layers = t.layers,
                this.supports3d = !0,
                this.completeLayers = !1,
                this.pendingElements = [],
                this.elements = this.layers ? createSizedArray(this.layers.length) : [],
                this.initElement(t, e, i),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function SVGRenderer(t, e) {
                this.animationItem = t,
                this.layers = null,
                this.renderedFrame = -1,
                this.svgElement = createNS("svg");
                var i = "";
                if (e && e.title) {
                    var r = createNS("title"),
                        a = createElementID();
                    r.setAttribute("id", a),
                    r.textContent = e.title,
                    this.svgElement.appendChild(r),
                    i += a
                }
                if (e && e.description) {
                    var s = createNS("desc"),
                        n = createElementID();
                    s.setAttribute("id", n),
                    s.textContent = e.description,
                    this.svgElement.appendChild(s),
                    i += " " + n
                }
                i && this.svgElement.setAttribute("aria-labelledby", i);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var h = createNS("g");
                this.svgElement.appendChild(h),
                this.layerElement = h,
                this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    id: e && e.id || "",
                    focusable: e && e.focusable,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "100%",
                        height: e && e.filterSize && e.filterSize.height || "100%",
                        x: e && e.filterSize && e.filterSize.x || "0%",
                        y: e && e.filterSize && e.filterSize.y || "0%"
                    },
                    width: e && e.width,
                    height: e && e.height,
                    runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                },
                this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                },
                this.elements = [],
                this.pendingElements = [],
                this.destroyed = !1,
                this.rendererType = "svg"
            }
            function ShapeTransformManager() {
                this.sequences = {},
                this.sequenceList = [],
                this.transform_key_count = 0
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
            SVGTextLottieElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            },
            SVGTextLottieElement.prototype.buildTextContents = function(t) {
                for (var e = 0, i = t.length, r = [], a = ""; e < i;)
                    t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(a), a = "") : a += t[e],
                    e += 1;
                return r.push(a), r
            },
            SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
                if (t.shapes && t.shapes.length) {
                    var i = t.shapes[0];
                    if (i.it) {
                        var r = i.it[i.it.length - 1];
                        r.s && (r.s.k[0] = e, r.s.k[1] = e)
                    }
                }
                return t
            },
            SVGTextLottieElement.prototype.buildNewText = function() {
                var t,
                    e;
                this.addDynamicProperty(this);
                var i = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(i ? i.l.length : 0),
                i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)),
                this.layerElement.setAttribute("font-size", i.finalSize);
                var r = this.globalData.fontManager.getFontByName(i.f);
                if (r.fClass)
                    this.layerElement.setAttribute("class", r.fClass);
                else {
                    this.layerElement.setAttribute("font-family", r.fFamily);
                    var a = i.fWeight,
                        s = i.fStyle;
                    this.layerElement.setAttribute("font-style", s),
                    this.layerElement.setAttribute("font-weight", a)
                }
                this.layerElement.setAttribute("aria-label", i.t);
                var n,
                    o = i.l || [],
                    h = !!this.globalData.fontManager.chars;
                e = o.length;
                var l = this.mHelper,
                    p = this.data.singleShape,
                    f = 0,
                    c = 0,
                    d = !0,
                    m = .001 * i.tr * i.finalSize;
                if (!p || h || i.sz) {
                    var u,
                        y = this.textSpans.length;
                    for (t = 0; t < e; t += 1) {
                        if (this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            childSpan: null,
                            glyph: null
                        }), !h || !p || 0 === t) {
                            if (n = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
                                if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
                                    var g = createNS("g");
                                    n.appendChild(g),
                                    this.textSpans[t].childSpan = g
                                }
                                this.textSpans[t].span = n,
                                this.layerElement.appendChild(n)
                            }
                            n.style.display = "inherit"
                        }
                        if (l.reset(), p && (o[t].n && (f = -m, c += i.yOffset, c += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(i, l, o[t].line, f, c), f += o[t].l || 0, f += m), h) {
                            var v;
                            if (1 === (u = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t)
                                v = new SVGCompElement(u.data, this.globalData, this);
                            else {
                                var _ = emptyShapeData;
                                u.data && u.data.shapes && (_ = this.buildShapeData(u.data, i.finalSize)),
                                v = new SVGShapeElement(_, this.globalData, this)
                            }
                            if (this.textSpans[t].glyph) {
                                var b = this.textSpans[t].glyph;
                                this.textSpans[t].childSpan.removeChild(b.layerElement),
                                b.destroy()
                            }
                            this.textSpans[t].glyph = v,
                            v._debug = !0,
                            v.prepareFrame(0),
                            v.renderFrame(),
                            this.textSpans[t].childSpan.appendChild(v.layerElement),
                            1 === u.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                        } else
                            p && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"),
                            n.textContent = o[t].val,
                            n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                    }
                    p && n && n.setAttribute("d", "")
                } else {
                    var E = this.textContainer,
                        S = "start";
                    switch (i.j) {
                    case 1:
                        S = "end";
                        break;
                    case 2:
                        S = "middle";
                        break;
                    default:
                        S = "start"
                    }
                    E.setAttribute("text-anchor", S),
                    E.setAttribute("letter-spacing", m);
                    var x = this.buildTextContents(i.finalText);
                    for (e = x.length, c = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)
                        (n = this.textSpans[t].span || createNS("tspan")).textContent = x[t],
                        n.setAttribute("x", 0),
                        n.setAttribute("y", c),
                        n.style.display = "inherit",
                        E.appendChild(n),
                        this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            glyph: null
                        }),
                        this.textSpans[t].span = n,
                        c += i.finalLineHeight;
                    this.layerElement.appendChild(E)
                }
                for (; t < this.textSpans.length;)
                    this.textSpans[t].span.style.display = "none",
                    t += 1;
                this._sizeChanged = !0
            },
            SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                    this._sizeChanged = !1;
                    var t = this.layerElement.getBBox();
                    this.bbox = {
                        top: t.y,
                        left: t.x,
                        width: t.width,
                        height: t.height
                    }
                }
                return this.bbox
            },
            SVGTextLottieElement.prototype.getValue = function() {
                var t,
                    e,
                    i = this.textSpans.length;
                for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)
                    (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
            },
            SVGTextLottieElement.prototype.renderInnerContent = function() {
                if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var t,
                        e;
                    this._sizeChanged = !0;
                    var i,
                        r,
                        a,
                        s = this.textAnimator.renderedLetters,
                        n = this.textProperty.currentData.l;
                    for (e = n.length, t = 0; t < e; t += 1)
                        n[t].n || (i = s[t], r = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
                }
            },
            extendPrototype([IImageElement], ISolidElement),
            ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.layerElement.appendChild(t)
            },
            NullElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            },
            NullElement.prototype.renderFrame = function() {},
            NullElement.prototype.getBaseElement = function() {
                return null
            },
            NullElement.prototype.destroy = function() {},
            NullElement.prototype.sourceRectAtTime = function() {},
            NullElement.prototype.hide = function() {},
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
            extendPrototype([BaseRenderer], SVGRendererBase),
            SVGRendererBase.prototype.createNull = function(t) {
                return new NullElement(t, this.globalData, this)
            },
            SVGRendererBase.prototype.createShape = function(t) {
                return new SVGShapeElement(t, this.globalData, this)
            },
            SVGRendererBase.prototype.createText = function(t) {
                return new SVGTextLottieElement(t, this.globalData, this)
            },
            SVGRendererBase.prototype.createImage = function(t) {
                return new IImageElement(t, this.globalData, this)
            },
            SVGRendererBase.prototype.createSolid = function(t) {
                return new ISolidElement(t, this.globalData, this)
            },
            SVGRendererBase.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
                this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility),
                this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
                this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height),
                this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
                this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
                void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
                this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
                this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e),
                this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
                this.data = t;
                var i = createNS("clipPath"),
                    r = createNS("rect");
                r.setAttribute("width", t.w),
                r.setAttribute("height", t.h),
                r.setAttribute("x", 0),
                r.setAttribute("y", 0);
                var a = createElementID();
                i.setAttribute("id", a),
                i.appendChild(r),
                this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"),
                e.appendChild(i),
                this.layers = t.layers,
                this.elements = createSizedArray(t.layers.length)
            },
            SVGRendererBase.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
                this.layerElement = null,
                this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                this.elements.length = 0,
                this.destroyed = !0,
                this.animationItem = null
            },
            SVGRendererBase.prototype.updateContainerSize = function() {},
            SVGRendererBase.prototype.findIndexByInd = function(t) {
                var e = 0,
                    i = this.layers.length;
                for (e = 0; e < i; e += 1)
                    if (this.layers[e].ind === t)
                        return e;
                return -1
            },
            SVGRendererBase.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    e[t] = !0;
                    var i = this.createItem(this.layers[t]);
                    if (e[t] = i, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                        var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                        if (-1 === r)
                            return;
                        if (this.elements[r] && !0 !== this.elements[r]) {
                            var a = e[r].getMatte(this.layers[t].tt);
                            i.setMatte(a)
                        } else
                            this.buildItem(r),
                            this.addPendingElement(i)
                    }
                }
            },
            SVGRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(), t.data.tt)
                        for (var e = 0, i = this.elements.length; e < i;) {
                            if (this.elements[e] === t) {
                                var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                    a = this.elements[r].getMatte(this.layers[e].tt);
                                t.setMatte(a);
                                break
                            }
                            e += 1
                        }
                }
            },
            SVGRendererBase.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    var e;
                    null === t ? t = this.renderedFrame : this.renderedFrame = t,
                    this.globalData.frameNum = t,
                    this.globalData.frameId += 1,
                    this.globalData.projectInterface.currentFrame = t,
                    this.globalData._mdf = !1;
                    var i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)
                        (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < i; e += 1)
                            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            },
            SVGRendererBase.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    for (var r, a = 0; a < e;)
                        this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (r = this.elements[a].getBaseElement()),
                        a += 1;
                    r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
                }
            },
            SVGRendererBase.prototype.hide = function() {
                this.layerElement.style.display = "none"
            },
            SVGRendererBase.prototype.show = function() {
                this.layerElement.style.display = "block"
            },
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
            ICompElement.prototype.initElement = function(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initTransform(t, e, i),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                !this.data.xt && e.progressiveLoad || this.buildAllItems(),
                this.hide()
            },
            ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                    if (this.tm._placeholder)
                        this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1),
                        this.renderedFrame = e
                    }
                    var i,
                        r = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)
                        (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                }
            },
            ICompElement.prototype.renderInnerContent = function() {
                var t,
                    e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            },
            ICompElement.prototype.setElements = function(t) {
                this.elements = t
            },
            ICompElement.prototype.getElements = function() {
                return this.elements
            },
            ICompElement.prototype.destroyElements = function() {
                var t,
                    e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy()
            },
            ICompElement.prototype.destroy = function() {
                this.destroyElements(),
                this.destroyBaseElement()
            },
            extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
            SVGCompElement.prototype.createComp = function(t) {
                return new SVGCompElement(t, this.globalData, this)
            },
            extendPrototype([SVGRendererBase], SVGRenderer),
            SVGRenderer.prototype.createComp = function(t) {
                return new SVGCompElement(t, this.globalData, this)
            },
            ShapeTransformManager.prototype = {
                addTransformSequence: function(t) {
                    var e,
                        i = t.length,
                        r = "_";
                    for (e = 0; e < i; e += 1)
                        r += t[e].transform.key + "_";
                    var a = this.sequences[r];
                    return a || (a = {
                        transforms: [].concat(t),
                        finalTransform: new Matrix,
                        _mdf: !1
                    }, this.sequences[r] = a, this.sequenceList.push(a)), a
                },
                processSequence: function(t, e) {
                    for (var i = 0, r = t.transforms.length, a = e; i < r && !e;) {
                        if (t.transforms[i].transform.mProps._mdf) {
                            a = !0;
                            break
                        }
                        i += 1
                    }
                    if (a)
                        for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1)
                            t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
                    t._mdf = a
                },
                processSequences: function(t) {
                    var e,
                        i = this.sequenceList.length;
                    for (e = 0; e < i; e += 1)
                        this.processSequence(this.sequenceList[e], t)
                },
                getNewKey: function() {
                    return this.transform_key_count += 1, "_" + this.transform_key_count
                }
            };
            var lumaLoader = function() {
                var t = "__lottie_element_luma_buffer",
                    e = null,
                    i = null,
                    r = null;
                function a() {
                    var a,
                        s,
                        n;
                    e || (a = createNS("svg"), s = createNS("filter"), n = createNS("feColorMatrix"), s.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(n), a.appendChild(s), a.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), r = a, document.body.appendChild(r), e = createTag("canvas"), (i = e.getContext("2d")).filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
                }
                return {
                    load: a,
                    get: function(r) {
                        return e || a(), e.width = r.width, e.height = r.height, i.filter = "url(#" + t + ")", e
                    }
                }
            };
            function createCanvas(t, e) {
                if (featureSupport.offscreenCanvas)
                    return new OffscreenCanvas(t, e);
                var i = createTag("canvas");
                return i.width = t, i.height = e, i
            }
            var assetLoader = {
                    loadLumaCanvas: lumaLoader.load,
                    getLumaCanvas: lumaLoader.get,
                    createCanvas: createCanvas
                },
                registeredEffects = {};
            function CVEffects(t) {
                var e,
                    i,
                    r = t.data.ef ? t.data.ef.length : 0;
                for (this.filters = [], e = 0; e < r; e += 1) {
                    i = null;
                    var a = t.data.ef[e].ty;
                    registeredEffects[a] && (i = new (0, registeredEffects[a].effect)(t.effectsManager.effectElements[e], t)),
                    i && this.filters.push(i)
                }
                this.filters.length && t.addRenderableComponent(this)
            }
            function registerEffect(t, e) {
                registeredEffects[t] = {
                    effect: e
                }
            }
            function CVMaskElement(t, e) {
                var i;
                this.data = t,
                this.element = e,
                this.masksProperties = this.data.masksProperties || [],
                this.viewData = createSizedArray(this.masksProperties.length);
                var r = this.masksProperties.length,
                    a = !1;
                for (i = 0; i < r; i += 1)
                    "n" !== this.masksProperties[i].mode && (a = !0),
                    this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                this.hasMasks = a,
                a && this.element.addRenderableComponent(this)
            }
            function CVBaseElement() {}
            CVEffects.prototype.renderFrame = function(t) {
                var e,
                    i = this.filters.length;
                for (e = 0; e < i; e += 1)
                    this.filters[e].renderFrame(t)
            },
            CVEffects.prototype.getEffects = function(t) {
                var e,
                    i = this.filters.length,
                    r = [];
                for (e = 0; e < i; e += 1)
                    this.filters[e].type === t && r.push(this.filters[e]);
                return r
            },
            CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var t,
                        e,
                        i,
                        r,
                        a = this.element.finalTransform.mat,
                        s = this.element.canvasContext,
                        n = this.masksProperties.length;
                    for (s.beginPath(), t = 0; t < n; t += 1)
                        if ("n" !== this.masksProperties[t].mode) {
                            var o;
                            this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)),
                            r = this.viewData[t].v,
                            e = a.applyToPointArray(r.v[0][0], r.v[0][1], 0),
                            s.moveTo(e[0], e[1]);
                            var h = r._length;
                            for (o = 1; o < h; o += 1)
                                i = a.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]),
                                s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                            i = a.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]),
                            s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                        }
                    this.element.globalData.renderer.save(!0),
                    s.clip()
                }
            },
            CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
            CVMaskElement.prototype.destroy = function() {
                this.element = null
            };
            var operationsMap = {
                1: "source-in",
                2: "source-out",
                3: "source-in",
                4: "source-out"
            };
            function CVShapeData(t, e, i, r) {
                this.styledShapes = [],
                this.tr = [0, 0, 0, 0, 0, 0];
                var a,
                    s = 4;
                "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7),
                this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
                var n,
                    o = i.length;
                for (a = 0; a < o; a += 1)
                    i[a].closed || (n = {
                        transforms: r.addTransformSequence(i[a].transforms),
                        trNodes: []
                    }, this.styledShapes.push(n), i[a].elements.push(n))
            }
            function CVShapeElement(t, e, i) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.itemsData = [],
                this.prevViewData = [],
                this.shapeModifiers = [],
                this.processedElements = [],
                this.transformsManager = new ShapeTransformManager,
                this.initElement(t, e, i)
            }
            function CVTextElement(t, e, i) {
                this.textSpans = [],
                this.yOffset = 0,
                this.fillColorAnim = !1,
                this.strokeColorAnim = !1,
                this.strokeWidthAnim = !1,
                this.stroke = !1,
                this.fill = !1,
                this.justifyOffset = 0,
                this.currentRender = null,
                this.renderType = "canvas",
                this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                },
                this.initElement(t, e, i)
            }
            function CVImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId),
                this.img = e.imageLoader.getAsset(this.assetData),
                this.initElement(t, e, i)
            }
            function CVSolidElement(t, e, i) {
                this.initElement(t, e, i)
            }
            function CanvasRendererBase() {}
            function CanvasContext() {
                this.opacity = -1,
                this.transform = createTypedArray("float32", 16),
                this.fillStyle = "",
                this.strokeStyle = "",
                this.lineWidth = "",
                this.lineCap = "",
                this.lineJoin = "",
                this.miterLimit = "",
                this.id = Math.random()
            }
            function CVContextData() {
                var t;
                for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
                    var e = new CanvasContext;
                    this.stack[t] = e
                }
                this._length = 15,
                this.nativeContext = null,
                this.transformMat = new Matrix,
                this.currentOpacity = 1,
                this.currentFillStyle = "",
                this.appliedFillStyle = "",
                this.currentStrokeStyle = "",
                this.appliedStrokeStyle = "",
                this.currentLineWidth = "",
                this.appliedLineWidth = "",
                this.currentLineCap = "",
                this.appliedLineCap = "",
                this.currentLineJoin = "",
                this.appliedLineJoin = "",
                this.appliedMiterLimit = "",
                this.currentMiterLimit = ""
            }
            function CVCompElement(t, e, i) {
                this.completeLayers = !1,
                this.layers = t.layers,
                this.pendingElements = [],
                this.elements = createSizedArray(this.layers.length),
                this.initElement(t, e, i),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function CanvasRenderer(t, e) {
                this.animationItem = t,
                this.renderConfig = {
                    clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    className: e && e.className || "",
                    id: e && e.id || "",
                    runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                },
                this.renderConfig.dpr = e && e.dpr || 1,
                this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
                this.renderedFrame = -1,
                this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                },
                this.contextData = new CVContextData,
                this.elements = [],
                this.pendingElements = [],
                this.transformMat = new Matrix,
                this.completeLayers = !1,
                this.rendererType = "canvas",
                this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
            }
            function HBaseElement() {}
            function HSolidElement(t, e, i) {
                this.initElement(t, e, i)
            }
            function HShapeElement(t, e, i) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.shapeModifiers = [],
                this.itemsData = [],
                this.processedElements = [],
                this.animatedContents = [],
                this.shapesContainer = createNS("g"),
                this.initElement(t, e, i),
                this.prevViewData = [],
                this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }
            }
            function HTextElement(t, e, i) {
                this.textSpans = [],
                this.textPaths = [],
                this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                },
                this.renderType = "svg",
                this.isMasked = !1,
                this.initElement(t, e, i)
            }
            function HCameraElement(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initHierarchy();
                var r = PropertyFactory.getProp;
                if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                    var a,
                        s = t.ks.or.k.length;
                    for (a = 0; a < s; a += 1)
                        t.ks.or.k[a].to = null,
                        t.ks.or.k[a].ti = null
                }
                this.or = r(this, t.ks.or, 1, degToRads, this),
                this.or.sh = !0,
                this.rx = r(this, t.ks.rx, 0, degToRads, this),
                this.ry = r(this, t.ks.ry, 0, degToRads, this),
                this.rz = r(this, t.ks.rz, 0, degToRads, this),
                this.mat = new Matrix,
                this._prevMat = new Matrix,
                this._isFirstFrame = !0,
                this.finalTransform = {
                    mProp: this
                }
            }
            function HImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId),
                this.initElement(t, e, i)
            }
            function HybridRendererBase(t, e) {
                this.animationItem = t,
                this.layers = null,
                this.renderedFrame = -1,
                this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    }
                },
                this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                },
                this.pendingElements = [],
                this.elements = [],
                this.threeDElements = [],
                this.destroyed = !1,
                this.camera = null,
                this.supports3d = !0,
                this.rendererType = "html"
            }
            function HCompElement(t, e, i) {
                this.layers = t.layers,
                this.supports3d = !t.hasMask,
                this.completeLayers = !1,
                this.pendingElements = [],
                this.elements = this.layers ? createSizedArray(this.layers.length) : [],
                this.initElement(t, e, i),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function HybridRenderer(t, e) {
                this.animationItem = t,
                this.layers = null,
                this.renderedFrame = -1,
                this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    },
                    runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                },
                this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                },
                this.pendingElements = [],
                this.elements = [],
                this.threeDElements = [],
                this.destroyed = !1,
                this.camera = null,
                this.supports3d = !0,
                this.rendererType = "html"
            }
            CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    if (this.data.tt >= 1) {
                        this.buffers = [];
                        var t = this.globalData.canvasContext,
                            e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                        this.buffers.push(e);
                        var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                        this.buffers.push(i),
                        this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                    }
                    this.canvasContext = this.globalData.canvasContext,
                    this.transformCanvas = this.globalData.transformCanvas,
                    this.renderableEffectsManager = new CVEffects(this),
                    this.searchEffectTransforms()
                },
                createContent: function() {},
                setBlendMode: function() {
                    var t = this.globalData;
                    if (t.blendMode !== this.data.bm) {
                        t.blendMode = this.data.bm;
                        var e = getBlendMode(this.data.bm);
                        t.canvasContext.globalCompositeOperation = e
                    }
                },
                createRenderableComponents: function() {
                    this.maskManager = new CVMaskElement(this.data, this),
                    this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                },
                clearCanvas: function(t) {
                    t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                },
                prepareLayer: function() {
                    if (this.data.tt >= 1) {
                        var t = this.buffers[0].getContext("2d");
                        this.clearCanvas(t),
                        t.drawImage(this.canvasContext.canvas, 0, 0),
                        this.currentTransform = this.canvasContext.getTransform(),
                        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                        this.clearCanvas(this.canvasContext),
                        this.canvasContext.setTransform(this.currentTransform)
                    }
                },
                exitLayer: function() {
                    if (this.data.tt >= 1) {
                        var t = this.buffers[1],
                            e = t.getContext("2d");
                        if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                            var i = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                            i.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0),
                            this.clearCanvas(this.canvasContext),
                            this.canvasContext.drawImage(i, 0, 0)
                        }
                        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt],
                        this.canvasContext.drawImage(t, 0, 0),
                        this.canvasContext.globalCompositeOperation = "destination-over",
                        this.canvasContext.drawImage(this.buffers[0], 0, 0),
                        this.canvasContext.setTransform(this.currentTransform),
                        this.canvasContext.globalCompositeOperation = "source-over"
                    }
                },
                renderFrame: function(t) {
                    if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
                        this.renderTransform(),
                        this.renderRenderable(),
                        this.renderLocalTransform(),
                        this.setBlendMode();
                        var e = 0 === this.data.ty;
                        this.prepareLayer(),
                        this.globalData.renderer.save(e),
                        this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),
                        this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),
                        this.renderInnerContent(),
                        this.globalData.renderer.restore(e),
                        this.exitLayer(),
                        this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                        this._isFirstFrame && (this._isFirstFrame = !1)
                    }
                },
                destroy: function() {
                    this.canvasContext = null,
                    this.data = null,
                    this.globalData = null,
                    this.maskManager.destroy()
                },
                mHelper: new Matrix
            },
            CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
            CVBaseElement.prototype.show = CVBaseElement.prototype.showElement,
            CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
            CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
            CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            },
            CVShapeElement.prototype.dashResetter = [],
            CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
            },
            CVShapeElement.prototype.createStyleElement = function(t, e) {
                var i = {
                        data: t,
                        type: t.ty,
                        preTransforms: this.transformsManager.addTransformSequence(e),
                        transforms: [],
                        elements: [],
                        closed: !0 === t.hd
                    },
                    r = {};
                if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                    if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                        var a = new DashProperty(this, t.d, "canvas", this);
                        r.d = a,
                        r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
                    }
                } else
                    i.r = 2 === t.r ? "evenodd" : "nonzero";
                return this.stylesList.push(i), r.style = i, r
            },
            CVShapeElement.prototype.createGroupElement = function() {
                return {
                    it: [],
                    prevViewData: []
                }
            },
            CVShapeElement.prototype.createTransformElement = function(t) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                    }
                }
            },
            CVShapeElement.prototype.createShapeElement = function(t) {
                var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                return this.shapes.push(e), this.addShapeToModifiers(e), e
            },
            CVShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                    this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue();
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame)
            },
            CVShapeElement.prototype.addTransformToStyleList = function(t) {
                var e,
                    i = this.stylesList.length;
                for (e = 0; e < i; e += 1)
                    this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
            },
            CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var t,
                    e = this.stylesList.length;
                for (t = 0; t < e; t += 1)
                    this.stylesList[t].closed || this.stylesList[t].transforms.pop()
            },
            CVShapeElement.prototype.closeStyles = function(t) {
                var e,
                    i = t.length;
                for (e = 0; e < i; e += 1)
                    t[e].closed = !0
            },
            CVShapeElement.prototype.searchShapes = function(t, e, i, r, a) {
                var s,
                    n,
                    o,
                    h,
                    l,
                    p,
                    f = t.length - 1,
                    c = [],
                    d = [],
                    m = [].concat(a);
                for (s = f; s >= 0; s -= 1) {
                    if ((h = this.searchProcessedElement(t[s])) ? e[s] = i[h - 1] : t[s]._shouldRender = r, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty)
                        h ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], m),
                        c.push(e[s].style);
                    else if ("gr" === t[s].ty) {
                        if (h)
                            for (o = e[s].it.length, n = 0; n < o; n += 1)
                                e[s].prevViewData[n] = e[s].it[n];
                        else
                            e[s] = this.createGroupElement(t[s]);
                        this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, r, m)
                    } else
                        "tr" === t[s].ty ? (h || (p = this.createTransformElement(t[s]), e[s] = p), m.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? h || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty || "zz" === t[s].ty || "op" === t[s].ty ? (h ? (l = e[s]).closed = !1 : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = l, this.shapeModifiers.push(l)), d.push(l)) : "rp" === t[s].ty && (h ? (l = e[s]).closed = !0 : (l = ShapeModifiers.getModifier(t[s].ty), e[s] = l, l.init(this, t, s, e), this.shapeModifiers.push(l), r = !1), d.push(l));
                    this.addProcessedElement(t[s], s + 1)
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(c), f = d.length, s = 0; s < f; s += 1)
                    d[s].closed = !0
            },
            CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1,
                this.transformHelper._opMdf = !1,
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame),
                this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
            },
            CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
            },
            CVShapeElement.prototype.drawLayer = function() {
                var t,
                    e,
                    i,
                    r,
                    a,
                    s,
                    n,
                    o,
                    h,
                    l = this.stylesList.length,
                    p = this.globalData.renderer,
                    f = this.globalData.canvasContext;
                for (t = 0; t < l; t += 1)
                    if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                        for (p.save(), s = h.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? h.co : h.grd), p.ctxLineWidth(h.wi), p.ctxLineCap(h.lc), p.ctxLineJoin(h.lj), p.ctxMiterLimit(h.ml || 0)) : p.ctxFillStyle("fl" === o ? h.co : h.grd), p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = s.length, e = 0; e < i; e += 1) {
                            for ("st" !== o && "gs" !== o || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), a = (n = s[e].trNodes).length, r = 0; r < a; r += 1)
                                "m" === n[r].t ? f.moveTo(n[r].p[0], n[r].p[1]) : "c" === n[r].t ? f.bezierCurveTo(n[r].pts[0], n[r].pts[1], n[r].pts[2], n[r].pts[3], n[r].pts[4], n[r].pts[5]) : f.closePath();
                            "st" !== o && "gs" !== o || (p.ctxStroke(), h.da && f.setLineDash(this.dashResetter))
                        }
                        "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(h.r),
                        p.restore()
                    }
            },
            CVShapeElement.prototype.renderShape = function(t, e, i, r) {
                var a,
                    s;
                for (s = t, a = e.length - 1; a >= 0; a -= 1)
                    "tr" === e[a].ty ? (s = i[a].transform, this.renderShapeTransform(t, s)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], i[a]) : "fl" === e[a].ty ? this.renderFill(e[a], i[a], s) : "st" === e[a].ty ? this.renderStroke(e[a], i[a], s) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], i[a], s) : "gr" === e[a].ty ? this.renderShape(s, e[a].it, i[a].it) : e[a].ty;
                r && this.drawLayer()
            },
            CVShapeElement.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                    var i,
                        r,
                        a,
                        s = t.trNodes,
                        n = e.paths,
                        o = n._length;
                    s.length = 0;
                    var h = t.transforms.finalTransform;
                    for (a = 0; a < o; a += 1) {
                        var l = n.shapes[a];
                        if (l && l.v) {
                            for (r = l._length, i = 1; i < r; i += 1)
                                1 === i && s.push({
                                    t: "m",
                                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                }),
                                s.push({
                                    t: "c",
                                    pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                                });
                            1 === r && s.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }),
                            l.c && r && (s.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                            }), s.push({
                                t: "z"
                            }))
                        }
                    }
                    t.trNodes = s
                }
            },
            CVShapeElement.prototype.renderPath = function(t, e) {
                if (!0 !== t.hd && t._shouldRender) {
                    var i,
                        r = e.styledShapes.length;
                    for (i = 0; i < r; i += 1)
                        this.renderStyledShape(e.styledShapes[i], e.sh)
                }
            },
            CVShapeElement.prototype.renderFill = function(t, e, i) {
                var r = e.style;
                (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
            },
            CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                var r,
                    a = e.style;
                if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                    var s,
                        n = this.globalData.canvasContext,
                        o = e.s.v,
                        h = e.e.v;
                    if (1 === t.t)
                        r = n.createLinearGradient(o[0], o[1], h[0], h[1]);
                    else {
                        var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                            p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                            f = e.h.v;
                        f >= 1 ? f = .99 : f <= -1 && (f = -.99);
                        var c = l * f,
                            d = Math.cos(p + e.a.v) * c + o[0],
                            m = Math.sin(p + e.a.v) * c + o[1];
                        r = n.createRadialGradient(d, m, 0, o[0], o[1], l)
                    }
                    var u = t.g.p,
                        y = e.g.c,
                        g = 1;
                    for (s = 0; s < u; s += 1)
                        e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * s + 1]),
                        r.addColorStop(y[4 * s] / 100, "rgba(" + y[4 * s + 1] + "," + y[4 * s + 2] + "," + y[4 * s + 3] + "," + g + ")");
                    a.grd = r
                }
                a.coOp = e.o.v * i.opacity
            },
            CVShapeElement.prototype.renderStroke = function(t, e, i) {
                var r = e.style,
                    a = e.d;
                a && (a._mdf || this._isFirstFrame) && (r.da = a.dashArray, r.do = a.dashoffset[0]),
                (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity),
                (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
            },
            CVShapeElement.prototype.destroy = function() {
                this.shapesData = null,
                this.globalData = null,
                this.canvasContext = null,
                this.stylesList.length = 0,
                this.itemsData.length = 0
            },
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
            CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
            CVTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)",
                this.fill = e;
                var i = !1;
                t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                var r,
                    a,
                    s,
                    n,
                    o,
                    h,
                    l,
                    p,
                    f,
                    c,
                    d,
                    m,
                    u = this.globalData.fontManager.getFontByName(t.f),
                    y = t.l,
                    g = this.mHelper;
                this.stroke = i,
                this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily,
                a = t.finalText.length;
                var v = this.data.singleShape,
                    _ = .001 * t.tr * t.finalSize,
                    b = 0,
                    E = 0,
                    S = !0,
                    x = 0;
                for (r = 0; r < a; r += 1) {
                    n = (s = this.globalData.fontManager.getCharData(t.finalText[r], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {},
                    g.reset(),
                    v && y[r].n && (b = -_, E += t.yOffset, E += S ? 1 : 0, S = !1),
                    f = (l = n.shapes ? n.shapes[0].it : []).length,
                    g.scale(t.finalSize / 100, t.finalSize / 100),
                    v && this.applyTextPropertiesToMatrix(t, g, y[r].line, b, E),
                    d = createSizedArray(f - 1);
                    var P = 0;
                    for (p = 0; p < f; p += 1)
                        if ("sh" === l[p].ty) {
                            for (h = l[p].ks.k.i.length, c = l[p].ks.k, m = [], o = 1; o < h; o += 1)
                                1 === o && m.push(g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)),
                                m.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[o][0], c.i[o][1], 0), g.applyToY(c.i[o][0], c.i[o][1], 0), g.applyToX(c.v[o][0], c.v[o][1], 0), g.applyToY(c.v[o][0], c.v[o][1], 0));
                            m.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[0][0], c.i[0][1], 0), g.applyToY(c.i[0][0], c.i[0][1], 0), g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)),
                            d[P] = m,
                            P += 1
                        }
                    v && (b += y[r].l, b += _),
                    this.textSpans[x] ? this.textSpans[x].elem = d : this.textSpans[x] = {
                        elem: d
                    },
                    x += 1
                }
            },
            CVTextElement.prototype.renderInnerContent = function() {
                var t,
                    e,
                    i,
                    r,
                    a,
                    s;
                this.validateText(),
                this.canvasContext.font = this.values.fValue,
                this.globalData.renderer.ctxLineCap("butt"),
                this.globalData.renderer.ctxLineJoin("miter"),
                this.globalData.renderer.ctxMiterLimit(4),
                this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var n,
                    o = this.textAnimator.renderedLetters,
                    h = this.textProperty.currentData.l;
                e = h.length;
                var l,
                    p,
                    f = null,
                    c = null,
                    d = null,
                    m = this.globalData.renderer;
                for (t = 0; t < e; t += 1)
                    if (!h[t].n) {
                        if ((n = o[t]) && (m.save(), m.ctxTransform(n.p), m.ctxOpacity(n.o)), this.fill) {
                            for (n && n.fc ? f !== n.fc && (m.ctxFillStyle(n.fc), f = n.fc) : f !== this.values.fill && (f = this.values.fill, m.ctxFillStyle(this.values.fill)), r = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                for (s = (p = l[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), a = 2; a < s; a += 6)
                                    this.globalData.canvasContext.bezierCurveTo(p[a], p[a + 1], p[a + 2], p[a + 3], p[a + 4], p[a + 5]);
                            this.globalData.canvasContext.closePath(),
                            m.ctxFill()
                        }
                        if (this.stroke) {
                            for (n && n.sw ? d !== n.sw && (d = n.sw, m.ctxLineWidth(n.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, m.ctxLineWidth(this.values.sWidth)), n && n.sc ? c !== n.sc && (c = n.sc, m.ctxStrokeStyle(n.sc)) : c !== this.values.stroke && (c = this.values.stroke, m.ctxStrokeStyle(this.values.stroke)), r = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                for (s = (p = l[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), a = 2; a < s; a += 6)
                                    this.globalData.canvasContext.bezierCurveTo(p[a], p[a + 1], p[a + 2], p[a + 3], p[a + 4], p[a + 5]);
                            this.globalData.canvasContext.closePath(),
                            m.ctxStroke()
                        }
                        n && this.globalData.renderer.restore()
                    }
            },
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
            CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
            CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
            CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var t = createTag("canvas");
                    t.width = this.assetData.w,
                    t.height = this.assetData.h;
                    var e,
                        i,
                        r = t.getContext("2d"),
                        a = this.img.width,
                        s = this.img.height,
                        n = a / s,
                        o = this.assetData.w / this.assetData.h,
                        h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (i = s) * o : i = (e = a) / o,
                    r.drawImage(this.img, (a - e) / 2, (s - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h),
                    this.img = t
                }
            },
            CVImageElement.prototype.renderInnerContent = function() {
                this.canvasContext.drawImage(this.img, 0, 0)
            },
            CVImageElement.prototype.destroy = function() {
                this.img = null
            },
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
            CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
            CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
            CVSolidElement.prototype.renderInnerContent = function() {
                this.globalData.renderer.ctxFillStyle(this.data.sc),
                this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
            },
            extendPrototype([BaseRenderer], CanvasRendererBase),
            CanvasRendererBase.prototype.createShape = function(t) {
                return new CVShapeElement(t, this.globalData, this)
            },
            CanvasRendererBase.prototype.createText = function(t) {
                return new CVTextElement(t, this.globalData, this)
            },
            CanvasRendererBase.prototype.createImage = function(t) {
                return new CVImageElement(t, this.globalData, this)
            },
            CanvasRendererBase.prototype.createSolid = function(t) {
                return new CVSolidElement(t, this.globalData, this)
            },
            CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
            CanvasRendererBase.prototype.ctxTransform = function(t) {
                1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
            },
            CanvasRendererBase.prototype.ctxOpacity = function(t) {
                this.canvasContext.globalAlpha *= t < 0 ? 0 : t
            },
            CanvasRendererBase.prototype.ctxFillStyle = function(t) {
                this.canvasContext.fillStyle = t
            },
            CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
                this.canvasContext.strokeStyle = t
            },
            CanvasRendererBase.prototype.ctxLineWidth = function(t) {
                this.canvasContext.lineWidth = t
            },
            CanvasRendererBase.prototype.ctxLineCap = function(t) {
                this.canvasContext.lineCap = t
            },
            CanvasRendererBase.prototype.ctxLineJoin = function(t) {
                this.canvasContext.lineJoin = t
            },
            CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
                this.canvasContext.miterLimit = t
            },
            CanvasRendererBase.prototype.ctxFill = function(t) {
                this.canvasContext.fill(t)
            },
            CanvasRendererBase.prototype.ctxFillRect = function(t, e, i, r) {
                this.canvasContext.fillRect(t, e, i, r)
            },
            CanvasRendererBase.prototype.ctxStroke = function() {
                this.canvasContext.stroke()
            },
            CanvasRendererBase.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
            },
            CanvasRendererBase.prototype.save = function() {
                this.canvasContext.save()
            },
            CanvasRendererBase.prototype.restore = function(t) {
                this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
            },
            CanvasRendererBase.prototype.configAnimation = function(t) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag("canvas");
                    var e = this.animationItem.container.style;
                    e.width = "100%",
                    e.height = "100%";
                    var i = "0px 0px 0px";
                    e.transformOrigin = i,
                    e.mozTransformOrigin = i,
                    e.webkitTransformOrigin = i,
                    e["-webkit-transform"] = i,
                    e.contentVisibility = this.renderConfig.contentVisibility,
                    this.animationItem.wrapper.appendChild(this.animationItem.container),
                    this.canvasContext = this.animationItem.container.getContext("2d"),
                    this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
                    this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                } else
                    this.canvasContext = this.renderConfig.context;
                this.contextData.setContext(this.canvasContext),
                this.data = t,
                this.layers = t.layers,
                this.transformCanvas = {
                    w: t.w,
                    h: t.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                },
                this.setupGlobalData(t, document.body),
                this.globalData.canvasContext = this.canvasContext,
                this.globalData.renderer = this,
                this.globalData.isDashed = !1,
                this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
                this.globalData.transformCanvas = this.transformCanvas,
                this.elements = createSizedArray(t.layers.length),
                this.updateContainerSize()
            },
            CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
                var i,
                    r,
                    a,
                    s;
                if (this.reset(), t ? (i = t, r = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                    var n = this.renderConfig.preserveAspectRatio.split(" "),
                        o = n[1] || "meet",
                        h = n[0] || "xMidYMid",
                        l = h.substr(0, 4),
                        p = h.substr(4);
                    a = i / r,
                    (s = this.transformCanvas.w / this.transformCanvas.h) > a && "meet" === o || s < a && "slice" === o ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)),
                    this.transformCanvas.tx = "xMid" === l && (s < a && "meet" === o || s > a && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (s < a && "meet" === o || s > a && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : 0,
                    this.transformCanvas.ty = "YMid" === p && (s > a && "meet" === o || s < a && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (s > a && "meet" === o || s < a && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else
                    "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
                this.ctxTransform(this.transformCanvas.props),
                this.canvasContext.beginPath(),
                this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
                this.canvasContext.closePath(),
                this.canvasContext.clip(),
                this.renderFrame(this.renderedFrame, !0)
            },
            CanvasRendererBase.prototype.destroy = function() {
                var t;
                for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)
                    this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                this.elements.length = 0,
                this.globalData.canvasContext = null,
                this.animationItem.container = null,
                this.destroyed = !0
            },
            CanvasRendererBase.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                    var i;
                    this.renderedFrame = t,
                    this.globalData.frameNum = t - this.animationItem._isFirstFrame,
                    this.globalData.frameId += 1,
                    this.globalData._mdf = !this.renderConfig.clearCanvas || e,
                    this.globalData.projectInterface.currentFrame = t;
                    var r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), i = r - 1; i >= 0; i -= 1)
                        (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                    if (this.globalData._mdf) {
                        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)
                            (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore()
                    }
                }
            },
            CanvasRendererBase.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    var i = this.createItem(this.layers[t], this, this.globalData);
                    e[t] = i,
                    i.initExpressions()
                }
            },
            CanvasRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;)
                    this.pendingElements.pop().checkParenting()
            },
            CanvasRendererBase.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
            },
            CanvasRendererBase.prototype.show = function() {
                this.animationItem.container.style.display = "block"
            },
            CVContextData.prototype.duplicate = function() {
                var t = 2 * this._length,
                    e = 0;
                for (e = this._length; e < t; e += 1)
                    this.stack[e] = new CanvasContext;
                this._length = t
            },
            CVContextData.prototype.reset = function() {
                this.cArrPos = 0,
                this.cTr.reset(),
                this.stack[this.cArrPos].opacity = 1
            },
            CVContextData.prototype.restore = function(t) {
                this.cArrPos -= 1;
                var e,
                    i = this.stack[this.cArrPos],
                    r = i.transform,
                    a = this.cTr.props;
                for (e = 0; e < 16; e += 1)
                    a[e] = r[e];
                if (t) {
                    this.nativeContext.restore();
                    var s = this.stack[this.cArrPos + 1];
                    this.appliedFillStyle = s.fillStyle,
                    this.appliedStrokeStyle = s.strokeStyle,
                    this.appliedLineWidth = s.lineWidth,
                    this.appliedLineCap = s.lineCap,
                    this.appliedLineJoin = s.lineJoin,
                    this.appliedMiterLimit = s.miterLimit
                }
                this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
                (t || -1 !== i.opacity && this.currentOpacity !== i.opacity) && (this.nativeContext.globalAlpha = i.opacity, this.currentOpacity = i.opacity),
                this.currentFillStyle = i.fillStyle,
                this.currentStrokeStyle = i.strokeStyle,
                this.currentLineWidth = i.lineWidth,
                this.currentLineCap = i.lineCap,
                this.currentLineJoin = i.lineJoin,
                this.currentMiterLimit = i.miterLimit
            },
            CVContextData.prototype.save = function(t) {
                t && this.nativeContext.save();
                var e = this.cTr.props;
                this._length <= this.cArrPos && this.duplicate();
                var i,
                    r = this.stack[this.cArrPos];
                for (i = 0; i < 16; i += 1)
                    r.transform[i] = e[i];
                this.cArrPos += 1;
                var a = this.stack[this.cArrPos];
                a.opacity = r.opacity,
                a.fillStyle = r.fillStyle,
                a.strokeStyle = r.strokeStyle,
                a.lineWidth = r.lineWidth,
                a.lineCap = r.lineCap,
                a.lineJoin = r.lineJoin,
                a.miterLimit = r.miterLimit
            },
            CVContextData.prototype.setOpacity = function(t) {
                this.stack[this.cArrPos].opacity = t
            },
            CVContextData.prototype.setContext = function(t) {
                this.nativeContext = t
            },
            CVContextData.prototype.fillStyle = function(t) {
                this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
            },
            CVContextData.prototype.strokeStyle = function(t) {
                this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
            },
            CVContextData.prototype.lineWidth = function(t) {
                this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
            },
            CVContextData.prototype.lineCap = function(t) {
                this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
            },
            CVContextData.prototype.lineJoin = function(t) {
                this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
            },
            CVContextData.prototype.miterLimit = function(t) {
                this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
            },
            CVContextData.prototype.transform = function(t) {
                this.transformMat.cloneFromProps(t);
                var e = this.cTr;
                this.transformMat.multiply(e),
                e.cloneFromProps(this.transformMat.props);
                var i = e.props;
                this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
            },
            CVContextData.prototype.opacity = function(t) {
                var e = this.stack[this.cArrPos].opacity;
                e *= t < 0 ? 0 : t,
                this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
            },
            CVContextData.prototype.fill = function(t) {
                this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle),
                this.nativeContext.fill(t)
            },
            CVContextData.prototype.fillRect = function(t, e, i, r) {
                this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle),
                this.nativeContext.fillRect(t, e, i, r)
            },
            CVContextData.prototype.stroke = function() {
                this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle),
                this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth),
                this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap),
                this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin),
                this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit),
                this.nativeContext.stroke()
            },
            extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
            CVCompElement.prototype.renderInnerContent = function() {
                var t,
                    e = this.canvasContext;
                for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)
                    (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            },
            CVCompElement.prototype.destroy = function() {
                var t;
                for (t = this.layers.length - 1; t >= 0; t -= 1)
                    this.elements[t] && this.elements[t].destroy();
                this.layers = null,
                this.elements = null
            },
            CVCompElement.prototype.createComp = function(t) {
                return new CVCompElement(t, this.globalData, this)
            },
            extendPrototype([CanvasRendererBase], CanvasRenderer),
            CanvasRenderer.prototype.createComp = function(t) {
                return new CVCompElement(t, this.globalData, this)
            },
            HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"),
                    this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
                    styleDiv(this.baseElement)
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects(this),
                    this.transformedElement = this.baseElement,
                    this.maskedElement = this.layerElement,
                    this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                    this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    var t = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var e = this.finalTransform.mat.toCSS();
                        t.transform = e,
                        t.webkitTransform = e
                    }
                    this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.layerElement = null,
                    this.transformedElement = null,
                    this.matteElement && (this.matteElement = null),
                    this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData)
                },
                addEffects: function() {},
                setMatte: function() {}
            },
            HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
            HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
            HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting,
            extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
            HSolidElement.prototype.createContent = function() {
                var t;
                this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc),
                this.layerElement.appendChild(t)
            },
            extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
            HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
            HShapeElement.prototype.createContent = function() {
                var t;
                if (this.baseElement.style.fontSize = 0, this.data.hasMask)
                    this.layerElement.appendChild(this.shapesContainer),
                    t = this.svgElement;
                else {
                    t = createNS("svg");
                    var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                    t.setAttribute("width", e.w),
                    t.setAttribute("height", e.h),
                    t.appendChild(this.shapesContainer),
                    this.layerElement.appendChild(t)
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
                this.filterUniqueShapes(),
                this.shapeCont = t
            },
            HShapeElement.prototype.getTransformedPoint = function(t, e) {
                var i,
                    r = t.length;
                for (i = 0; i < r; i += 1)
                    e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                return e
            },
            HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                var i,
                    r,
                    a,
                    s,
                    n,
                    o = t.sh.v,
                    h = t.transformers,
                    l = o._length;
                if (!(l <= 1)) {
                    for (i = 0; i < l - 1; i += 1)
                        r = this.getTransformedPoint(h, o.v[i]),
                        a = this.getTransformedPoint(h, o.o[i]),
                        s = this.getTransformedPoint(h, o.i[i + 1]),
                        n = this.getTransformedPoint(h, o.v[i + 1]),
                        this.checkBounds(r, a, s, n, e);
                    o.c && (r = this.getTransformedPoint(h, o.v[i]), a = this.getTransformedPoint(h, o.o[i]), s = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, a, s, n, e))
                }
            },
            HShapeElement.prototype.checkBounds = function(t, e, i, r, a) {
                this.getBoundsOfCurve(t, e, i, r);
                var s = this.shapeBoundingBox;
                a.x = bmMin(s.left, a.x),
                a.xMax = bmMax(s.right, a.xMax),
                a.y = bmMin(s.top, a.y),
                a.yMax = bmMax(s.bottom, a.yMax)
            },
            HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            },
            HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
                for (var a, s, n, o, h, l, p, f = [[t[0], r[0]], [t[1], r[1]]], c = 0; c < 2; ++c)
                    s = 6 * t[c] - 12 * e[c] + 6 * i[c],
                    a = -3 * t[c] + 9 * e[c] - 9 * i[c] + 3 * r[c],
                    n = 3 * e[c] - 3 * t[c],
                    s |= 0,
                    n |= 0,
                    0 == (a |= 0) && 0 === s || (0 === a ? (o = -n / s) > 0 && o < 1 && f[c].push(this.calculateF(o, t, e, i, r, c)) : (h = s * s - 4 * n * a) >= 0 && ((l = (-s + bmSqrt(h)) / (2 * a)) > 0 && l < 1 && f[c].push(this.calculateF(l, t, e, i, r, c)), (p = (-s - bmSqrt(h)) / (2 * a)) > 0 && p < 1 && f[c].push(this.calculateF(p, t, e, i, r, c))));
                this.shapeBoundingBox.left = bmMin.apply(null, f[0]),
                this.shapeBoundingBox.top = bmMin.apply(null, f[1]),
                this.shapeBoundingBox.right = bmMax.apply(null, f[0]),
                this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
            },
            HShapeElement.prototype.calculateF = function(t, e, i, r, a, s) {
                return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bmPow(t, 2) * r[s] + bmPow(t, 3) * a[s]
            },
            HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                var i,
                    r = t.length;
                for (i = 0; i < r; i += 1)
                    t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
            },
            HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
                var i = 0;
                if (t.keyframes) {
                    for (var r = 0; r < t.keyframes.length; r += 1) {
                        var a = t.keyframes[r].s;
                        a > i && (i = a)
                    }
                    i *= t.mult
                } else
                    i = t.v * t.mult;
                e.x -= i,
                e.xMax += i,
                e.y -= i,
                e.yMax += i
            },
            HShapeElement.prototype.currentBoxContains = function(t) {
                return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            },
            HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var t = this.tempBoundingBox,
                        e = 999999;
                    if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t))
                        return;
                    var i = !1;
                    if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                        this.currentBBox.w = t.width,
                        this.currentBBox.h = t.height,
                        this.currentBBox.x = t.x,
                        this.currentBBox.y = t.y,
                        this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                        var r = this.shapeCont.style,
                            a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        r.transform = a,
                        r.webkitTransform = a
                    }
                }
            },
            extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
            HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(), this.isMasked) {
                    this.renderType = "svg",
                    this.compW = this.comp.data.w,
                    this.compH = this.comp.data.h,
                    this.svgElement.setAttribute("width", this.compW),
                    this.svgElement.setAttribute("height", this.compH);
                    var t = createNS("g");
                    this.maskedElement.appendChild(t),
                    this.innerElem = t
                } else
                    this.renderType = "html",
                    this.innerElem = this.layerElement;
                this.checkParenting()
            },
            HTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style,
                    i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                e.fill = i,
                e.color = i,
                t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                var r,
                    a,
                    s = this.globalData.fontManager.getFontByName(t.f);
                if (!this.globalData.fontManager.chars)
                    if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass)
                        this.innerElem.className = s.fClass;
                    else {
                        e.fontFamily = s.fFamily;
                        var n = t.fWeight,
                            o = t.fStyle;
                        e.fontStyle = o,
                        e.fontWeight = n
                    }
                var h,
                    l,
                    p,
                    f = t.l;
                a = f.length;
                var c,
                    d = this.mHelper,
                    m = "",
                    u = 0;
                for (r = 0; r < a; r += 1) {
                    if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u], h = this.textPaths[u]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                        var y,
                            g = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                        if (y = g ? g.data : null, d.reset(), y && y.shapes && y.shapes.length && (c = y.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(d, c), h.setAttribute("d", m)), this.isMasked)
                            this.innerElem.appendChild(h);
                        else {
                            if (this.innerElem.appendChild(l), y && y.shapes) {
                                document.body.appendChild(p);
                                var v = p.getBBox();
                                p.setAttribute("width", v.width + 2),
                                p.setAttribute("height", v.height + 2),
                                p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                var _ = p.style,
                                    b = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                _.transform = b,
                                _.webkitTransform = b,
                                f[r].yOffset = v.y - 1
                            } else
                                p.setAttribute("width", 1),
                                p.setAttribute("height", 1);
                            l.appendChild(p)
                        }
                    } else if (h.textContent = f[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
                        this.innerElem.appendChild(h);
                    else {
                        this.innerElem.appendChild(l);
                        var E = h.style,
                            S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                        E.transform = S,
                        E.webkitTransform = S
                    }
                    this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l,
                    this.textSpans[u].style.display = "block",
                    this.textPaths[u] = h,
                    u += 1
                }
                for (; u < this.textSpans.length;)
                    this.textSpans[u].style.display = "none",
                    u += 1
            },
            HTextElement.prototype.renderInnerContent = function() {
                var t;
                if (this.validateText(), this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag)
                        return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
                        t = this.svgElement.style;
                        var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                        t.transform = e,
                        t.webkitTransform = e
                    }
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var i,
                        r,
                        a,
                        s,
                        n,
                        o = 0,
                        h = this.textAnimator.renderedLetters,
                        l = this.textProperty.currentData.l;
                    for (r = l.length, i = 0; i < r; i += 1)
                        l[i].n ? o += 1 : (s = this.textSpans[i], n = this.textPaths[i], a = h[o], o += 1, a._mdf.m && (this.isMasked ? s.setAttribute("transform", a.m) : (s.style.webkitTransform = a.m, s.style.transform = a.m)), s.style.opacity = a.o, a.sw && a._mdf.sw && n.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && n.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (n.setAttribute("fill", a.fc), n.style.color = a.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var p = this.innerElem.getBBox();
                        if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                            this.currentBBox.w = p.width + 2,
                            this.currentBBox.h = p.height + 2,
                            this.currentBBox.x = p.x - 1,
                            this.currentBBox.y = p.y - 1,
                            this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                            t = this.svgElement.style;
                            var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            t.transform = f,
                            t.webkitTransform = f
                        }
                    }
                }
            },
            extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
            HCameraElement.prototype.setup = function() {
                var t,
                    e,
                    i,
                    r,
                    a = this.comp.threeDElements.length;
                for (t = 0; t < a; t += 1)
                    if ("3d" === (e = this.comp.threeDElements[t]).type) {
                        i = e.perspectiveElem.style,
                        r = e.container.style;
                        var s = this.pe.v + "px",
                            n = "0px 0px 0px",
                            o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        i.perspective = s,
                        i.webkitPerspective = s,
                        r.transformOrigin = n,
                        r.mozTransformOrigin = n,
                        r.webkitTransformOrigin = n,
                        i.transform = o,
                        i.webkitTransform = o
                    }
            },
            HCameraElement.prototype.createElements = function() {},
            HCameraElement.prototype.hide = function() {},
            HCameraElement.prototype.renderFrame = function() {
                var t,
                    e,
                    i = this._isFirstFrame;
                if (this.hierarchy)
                    for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                        i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(), this.hierarchy)
                        for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                            var r = this.hierarchy[t].finalTransform.mProp;
                            this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]),
                            this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]),
                            this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v),
                            this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]),
                            this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                        }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                        var a;
                        a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                        var s = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)),
                            n = [a[0] / s, a[1] / s, a[2] / s],
                            o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                            h = Math.atan2(n[1], o),
                            l = Math.atan2(n[0], -n[2]);
                        this.mat.rotateY(l).rotateX(-h)
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                    this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                    this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                    this.mat.translate(0, 0, this.pe.v);
                    var p = !this._prevMat.equals(this.mat);
                    if ((p || this.pe._mdf) && this.comp.threeDElements) {
                        var f,
                            c,
                            d;
                        for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                            if ("3d" === (f = this.comp.threeDElements[t]).type) {
                                if (p) {
                                    var m = this.mat.toCSS();
                                    (d = f.container.style).transform = m,
                                    d.webkitTransform = m
                                }
                                this.pe._mdf && ((c = f.perspectiveElem.style).perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
                            }
                        this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            },
            HCameraElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            },
            HCameraElement.prototype.destroy = function() {},
            HCameraElement.prototype.getBaseElement = function() {
                return null
            },
            extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
            HImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData),
                    e = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e),
                e.crossOrigin = "anonymous",
                e.src = t,
                this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            },
            extendPrototype([BaseRenderer], HybridRendererBase),
            HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem,
            HybridRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;)
                    this.pendingElements.pop().checkParenting()
            },
            HybridRendererBase.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    var r = this.layers[e];
                    if (r.ddd && this.supports3d)
                        this.addTo3dContainer(i, e);
                    else if (this.threeDElements)
                        this.addTo3dContainer(i, e);
                    else {
                        for (var a, s, n = 0; n < e;)
                            this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n], a = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : s.getBaseElement()) || a),
                            n += 1;
                        a ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, a) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                    }
                }
            },
            HybridRendererBase.prototype.createShape = function(t) {
                return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
            },
            HybridRendererBase.prototype.createText = function(t) {
                return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
            },
            HybridRendererBase.prototype.createCamera = function(t) {
                return this.camera = new HCameraElement(t, this.globalData, this), this.camera
            },
            HybridRendererBase.prototype.createImage = function(t) {
                return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
            },
            HybridRendererBase.prototype.createSolid = function(t) {
                return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
            },
            HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
            HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
                for (var e = 0, i = this.threeDElements.length; e < i;) {
                    if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                        return this.threeDElements[e].perspectiveElem;
                    e += 1
                }
                return null
            },
            HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
                var i,
                    r,
                    a = createTag("div");
                styleDiv(a);
                var s = createTag("div");
                if (styleDiv(s), "3d" === e) {
                    (i = a.style).width = this.globalData.compSize.w + "px",
                    i.height = this.globalData.compSize.h + "px";
                    var n = "50% 50%";
                    i.webkitTransformOrigin = n,
                    i.mozTransformOrigin = n,
                    i.transformOrigin = n;
                    var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    (r = s.style).transform = o,
                    r.webkitTransform = o
                }
                a.appendChild(s);
                var h = {
                    container: s,
                    perspectiveElem: a,
                    startPos: t,
                    endPos: t,
                    type: e
                };
                return this.threeDElements.push(h), h
            },
            HybridRendererBase.prototype.build3dContainers = function() {
                var t,
                    e,
                    i = this.layers.length,
                    r = "";
                for (t = 0; t < i; t += 1)
                    this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1)
                    this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
            },
            HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
                for (var i = 0, r = this.threeDElements.length; i < r;) {
                    if (e <= this.threeDElements[i].endPos) {
                        for (var a, s = this.threeDElements[i].startPos; s < e;)
                            this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()),
                            s += 1;
                        a ? this.threeDElements[i].container.insertBefore(t, a) : this.threeDElements[i].container.appendChild(t);
                        break
                    }
                    i += 1
                }
            },
            HybridRendererBase.prototype.configAnimation = function(t) {
                var e = createTag("div"),
                    i = this.animationItem.wrapper,
                    r = e.style;
                r.width = t.w + "px",
                r.height = t.h + "px",
                this.resizerElem = e,
                styleDiv(e),
                r.transformStyle = "flat",
                r.mozTransformStyle = "flat",
                r.webkitTransformStyle = "flat",
                this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
                i.appendChild(e),
                r.overflow = "hidden";
                var a = createNS("svg");
                a.setAttribute("width", "1"),
                a.setAttribute("height", "1"),
                styleDiv(a),
                this.resizerElem.appendChild(a);
                var s = createNS("defs");
                a.appendChild(s),
                this.data = t,
                this.setupGlobalData(t, a),
                this.globalData.defs = s,
                this.layers = t.layers,
                this.layerElement = this.resizerElem,
                this.build3dContainers(),
                this.updateContainerSize()
            },
            HybridRendererBase.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
                this.animationItem.container = null,
                this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                this.elements.length = 0,
                this.destroyed = !0,
                this.animationItem = null
            },
            HybridRendererBase.prototype.updateContainerSize = function() {
                var t,
                    e,
                    i,
                    r,
                    a = this.animationItem.wrapper.offsetWidth,
                    s = this.animationItem.wrapper.offsetHeight,
                    n = a / s;
                this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, i = 0, r = (s - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, i = (a - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, r = 0);
                var o = this.resizerElem.style;
                o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)",
                o.transform = o.webkitTransform
            },
            HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
            HybridRendererBase.prototype.hide = function() {
                this.resizerElem.style.display = "none"
            },
            HybridRendererBase.prototype.show = function() {
                this.resizerElem.style.display = "block"
            },
            HybridRendererBase.prototype.initItems = function() {
                if (this.buildAllItems(), this.camera)
                    this.camera.setup();
                else {
                    var t,
                        e = this.globalData.compSize.w,
                        i = this.globalData.compSize.h,
                        r = this.threeDElements.length;
                    for (t = 0; t < r; t += 1) {
                        var a = this.threeDElements[t].perspectiveElem.style;
                        a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px",
                        a.perspective = a.webkitPerspective
                    }
                }
            },
            HybridRendererBase.prototype.searchExtraCompositions = function(t) {
                var e,
                    i = t.length,
                    r = createTag("div");
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var a = this.createComp(t[e], r, this.globalData.comp, null);
                        a.initExpressions(),
                        this.globalData.projectInterface.registerComposition(a)
                    }
            },
            extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
            HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
            HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(),
                this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
            },
            HCompElement.prototype.addTo3dContainer = function(t, e) {
                for (var i, r = 0; r < e;)
                    this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()),
                    r += 1;
                i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
            },
            HCompElement.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
            },
            extendPrototype([HybridRendererBase], HybridRenderer),
            HybridRenderer.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
            };
            var CompExpressionInterface = function(t) {
                function e(e) {
                    for (var i = 0, r = t.layers.length; i < r;) {
                        if (t.layers[i].nm === e || t.layers[i].ind === e)
                            return t.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
            };
            function _typeof$2(t) {
                return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$2(t)
            }
            function seedRandom(t, e) {
                var i = this,
                    r = 256,
                    a = e.pow(r, 6),
                    s = e.pow(2, 52),
                    n = 2 * s,
                    o = 255;
                function h(t) {
                    var e,
                        i = t.length,
                        a = this,
                        s = 0,
                        n = a.i = a.j = 0,
                        h = a.S = [];
                    for (i || (t = [i++]); s < r;)
                        h[s] = s++;
                    for (s = 0; s < r; s++)
                        h[s] = h[n = o & n + t[s % i] + (e = h[s])],
                        h[n] = e;
                    a.g = function(t) {
                        for (var e, i = 0, s = a.i, n = a.j, h = a.S; t--;)
                            e = h[s = o & s + 1],
                            i = i * r + h[o & (h[s] = h[n = o & n + e]) + (h[n] = e)];
                        return a.i = s, a.j = n, i
                    }
                }
                function l(t, e) {
                    return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                }
                function p(t, e) {
                    var i,
                        r = [],
                        a = _typeof$2(t);
                    if (e && "object" == a)
                        for (i in t)
                            try {
                                r.push(p(t[i], e - 1))
                            } catch (t) {}
                    return r.length ? r : "string" == a ? t : t + "\0"
                }
                function f(t, e) {
                    for (var i, r = t + "", a = 0; a < r.length;)
                        e[o & a] = o & (i ^= 19 * e[o & a]) + r.charCodeAt(a++);
                    return c(e)
                }
                function c(t) {
                    return String.fromCharCode.apply(0, t)
                }
                e.seedrandom = function(o, d, m) {
                    var u = [],
                        y = f(p((d = !0 === d ? {
                            entropy: !0
                        } : d || {}).entropy ? [o, c(t)] : null === o ? function() {
                            try {
                                var e = new Uint8Array(r);
                                return (i.crypto || i.msCrypto).getRandomValues(e), c(e)
                            } catch (e) {
                                var a = i.navigator,
                                    s = a && a.plugins;
                                return [+new Date, i, s, i.screen, c(t)]
                            }
                        }() : o, 3), u),
                        g = new h(u),
                        v = function() {
                            for (var t = g.g(6), e = a, i = 0; t < s;)
                                t = (t + i) * r,
                                e *= r,
                                i = g.g(1);
                            for (; t >= n;)
                                t /= 2,
                                e /= 2,
                                i >>>= 1;
                            return (t + i) / e
                        };
                    return v.int32 = function() {
                        return 0 | g.g(4)
                    }, v.quick = function() {
                        return g.g(4) / 4294967296
                    }, v.double = v, f(c(g.S), t), (d.pass || m || function(t, i, r, a) {
                        return a && (a.S && l(a, g), t.state = function() {
                            return l(g, {})
                        }), r ? (e.random = t, i) : t
                    })(v, y, "global" in d ? d.global : this == e, d.state)
                },
                f(e.random(), t)
            }
            function initialize$2(t) {
                seedRandom([], t)
            }
            var propTypes = {
                SHAPE: "shape"
            };
            function _typeof$1(t) {
                return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$1(t)
            }
            var ExpressionManager = function() {
                    var ob = {},
                        Math = BMMath,
                        window = null,
                        document = null,
                        XMLHttpRequest = null,
                        fetch = null,
                        frames = null,
                        _lottieGlobal = {};
                    function resetFrame() {
                        _lottieGlobal = {}
                    }
                    function $bm_isInstanceOfArray(t) {
                        return t.constructor === Array || t.constructor === Float32Array
                    }
                    function isNumerable(t, e) {
                        return "number" === t || e instanceof Number || "boolean" === t || "string" === t
                    }
                    function $bm_neg(t) {
                        var e = _typeof$1(t);
                        if ("number" === e || t instanceof Number || "boolean" === e)
                            return -t;
                        if ($bm_isInstanceOfArray(t)) {
                            var i,
                                r = t.length,
                                a = [];
                            for (i = 0; i < r; i += 1)
                                a[i] = -t[i];
                            return a
                        }
                        return t.propType ? t.v : -t
                    }
                    initialize$2(BMMath);
                    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
                    function sum(t, e) {
                        var i = _typeof$1(t),
                            r = _typeof$1(e);
                        if (isNumerable(i, t) && isNumerable(r, e) || "string" === i || "string" === r)
                            return t + e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
                            return (t = t.slice(0))[0] += e, t;
                        if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                            return (e = e.slice(0))[0] = t + e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                            for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)
                                ("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] + e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a],
                                a += 1;
                            return o
                        }
                        return 0
                    }
                    var add = sum;
                    function sub(t, e) {
                        var i = _typeof$1(t),
                            r = _typeof$1(e);
                        if (isNumerable(i, t) && isNumerable(r, e))
                            return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
                            return (t = t.slice(0))[0] -= e, t;
                        if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                            return (e = e.slice(0))[0] = t - e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                            for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)
                                ("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] - e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a],
                                a += 1;
                            return o
                        }
                        return 0
                    }
                    function mul(t, e) {
                        var i,
                            r,
                            a,
                            s = _typeof$1(t),
                            n = _typeof$1(e);
                        if (isNumerable(s, t) && isNumerable(n, e))
                            return t * e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                            for (a = t.length, i = createTypedArray("float32", a), r = 0; r < a; r += 1)
                                i[r] = t[r] * e;
                            return i
                        }
                        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                            for (a = e.length, i = createTypedArray("float32", a), r = 0; r < a; r += 1)
                                i[r] = t * e[r];
                            return i
                        }
                        return 0
                    }
                    function div(t, e) {
                        var i,
                            r,
                            a,
                            s = _typeof$1(t),
                            n = _typeof$1(e);
                        if (isNumerable(s, t) && isNumerable(n, e))
                            return t / e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                            for (a = t.length, i = createTypedArray("float32", a), r = 0; r < a; r += 1)
                                i[r] = t[r] / e;
                            return i
                        }
                        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                            for (a = e.length, i = createTypedArray("float32", a), r = 0; r < a; r += 1)
                                i[r] = t / e[r];
                            return i
                        }
                        return 0
                    }
                    function mod(t, e) {
                        return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                    }
                    var $bm_sum = sum,
                        $bm_sub = sub,
                        $bm_mul = mul,
                        $bm_div = div,
                        $bm_mod = mod;
                    function clamp(t, e, i) {
                        if (e > i) {
                            var r = i;
                            i = e,
                            e = r
                        }
                        return Math.min(Math.max(t, e), i)
                    }
                    function radiansToDegrees(t) {
                        return t / degToRads
                    }
                    var radians_to_degrees = radiansToDegrees;
                    function degreesToRadians(t) {
                        return t * degToRads
                    }
                    var degrees_to_radians = radiansToDegrees,
                        helperLengthArray = [0, 0, 0, 0, 0, 0];
                    function length(t, e) {
                        if ("number" == typeof t || t instanceof Number)
                            return e = e || 0, Math.abs(t - e);
                        var i;
                        e || (e = helperLengthArray);
                        var r = Math.min(t.length, e.length),
                            a = 0;
                        for (i = 0; i < r; i += 1)
                            a += Math.pow(e[i] - t[i], 2);
                        return Math.sqrt(a)
                    }
                    function normalize(t) {
                        return div(t, length(t))
                    }
                    function rgbToHsl(t) {
                        var e,
                            i,
                            r = t[0],
                            a = t[1],
                            s = t[2],
                            n = Math.max(r, a, s),
                            o = Math.min(r, a, s),
                            h = (n + o) / 2;
                        if (n === o)
                            e = 0,
                            i = 0;
                        else {
                            var l = n - o;
                            switch (i = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
                            case r:
                                e = (a - s) / l + (a < s ? 6 : 0);
                                break;
                            case a:
                                e = (s - r) / l + 2;
                                break;
                            case s:
                                e = (r - a) / l + 4
                            }
                            e /= 6
                        }
                        return [e, i, h, t[3]]
                    }
                    function hue2rgb(t, e, i) {
                        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                    }
                    function hslToRgb(t) {
                        var e,
                            i,
                            r,
                            a = t[0],
                            s = t[1],
                            n = t[2];
                        if (0 === s)
                            e = n,
                            r = n,
                            i = n;
                        else {
                            var o = n < .5 ? n * (1 + s) : n + s - n * s,
                                h = 2 * n - o;
                            e = hue2rgb(h, o, a + 1 / 3),
                            i = hue2rgb(h, o, a),
                            r = hue2rgb(h, o, a - 1 / 3)
                        }
                        return [e, i, r, t[3]]
                    }
                    function linear(t, e, i, r, a) {
                        if (void 0 !== r && void 0 !== a || (r = e, a = i, e = 0, i = 1), i < e) {
                            var s = i;
                            i = e,
                            e = s
                        }
                        if (t <= e)
                            return r;
                        if (t >= i)
                            return a;
                        var n,
                            o = i === e ? 0 : (t - e) / (i - e);
                        if (!r.length)
                            return r + (a - r) * o;
                        var h = r.length,
                            l = createTypedArray("float32", h);
                        for (n = 0; n < h; n += 1)
                            l[n] = r[n] + (a[n] - r[n]) * o;
                        return l
                    }
                    function random(t, e) {
                        if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                            var i,
                                r = e.length;
                            t || (t = createTypedArray("float32", r));
                            var a = createTypedArray("float32", r),
                                s = BMMath.random();
                            for (i = 0; i < r; i += 1)
                                a[i] = t[i] + s * (e[i] - t[i]);
                            return a
                        }
                        return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                    }
                    function createPath(t, e, i, r) {
                        var a,
                            s = t.length,
                            n = shapePool.newElement();
                        n.setPathData(!!r, s);
                        var o,
                            h,
                            l = [0, 0];
                        for (a = 0; a < s; a += 1)
                            o = e && e[a] ? e[a] : l,
                            h = i && i[a] ? i[a] : l,
                            n.setTripleAt(t[a][0], t[a][1], h[0] + t[a][0], h[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, !0);
                        return n
                    }
                    function initiateExpression(elem, data, property) {
                        function noOp(t) {
                            return t
                        }
                        if (!elem.globalData.renderConfig.runExpressions)
                            return noOp;
                        var val = data.x,
                            needsVelocity = /velocity(?![\w\d])/.test(val),
                            _needsRandom = -1 !== val.indexOf("random"),
                            elemType = elem.data.ty,
                            transform,
                            $bm_transform,
                            content,
                            effect,
                            thisProperty = property;
                        thisProperty.valueAtTime = thisProperty.getValueAtTime,
                        Object.defineProperty(thisProperty, "value", {
                            get: function() {
                                return thisProperty.v
                            }
                        }),
                        elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
                        elem.comp.displayStartTime = 0;
                        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                            outPoint = elem.data.op / elem.comp.globalData.frameRate,
                            width = elem.data.sw ? elem.data.sw : 0,
                            height = elem.data.sh ? elem.data.sh : 0,
                            name = elem.data.nm,
                            loopIn,
                            loop_in,
                            loopOut,
                            loop_out,
                            smooth,
                            toWorld,
                            fromWorld,
                            fromComp,
                            toComp,
                            fromCompToSurface,
                            position,
                            rotation,
                            anchorPoint,
                            scale,
                            thisLayer,
                            thisComp,
                            mask,
                            valueAtTime,
                            velocityAtTime,
                            scoped_bm_rt,
                            expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                            numKeys = property.kf ? data.k.length : 0,
                            active = !this.data || !0 !== this.data.hd,
                            wiggle = function(t, e) {
                                var i,
                                    r,
                                    a = this.pv.length ? this.pv.length : 1,
                                    s = createTypedArray("float32", a),
                                    n = Math.floor(5 * time);
                                for (i = 0, r = 0; i < n;) {
                                    for (r = 0; r < a; r += 1)
                                        s[r] += -e + 2 * e * BMMath.random();
                                    i += 1
                                }
                                var o = 5 * time,
                                    h = o - Math.floor(o),
                                    l = createTypedArray("float32", a);
                                if (a > 1) {
                                    for (r = 0; r < a; r += 1)
                                        l[r] = this.pv[r] + s[r] + (-e + 2 * e * BMMath.random()) * h;
                                    return l
                                }
                                return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h
                            }.bind(this);
                        function loopInDuration(t, e) {
                            return loopIn(t, e, !0)
                        }
                        function loopOutDuration(t, e) {
                            return loopOut(t, e, !0)
                        }
                        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn),
                        thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut),
                        thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                        this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                        this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                            time,
                            velocity,
                            value,
                            text,
                            textIndex,
                            textTotal,
                            selectorValue;
                        function lookAt(t, e) {
                            var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                            return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
                        }
                        function easeOut(t, e, i, r, a) {
                            return applyEase(easeOutBez, t, e, i, r, a)
                        }
                        function easeIn(t, e, i, r, a) {
                            return applyEase(easeInBez, t, e, i, r, a)
                        }
                        function ease(t, e, i, r, a) {
                            return applyEase(easeInOutBez, t, e, i, r, a)
                        }
                        function applyEase(t, e, i, r, a, s) {
                            void 0 === a ? (a = i, s = r) : e = (e - i) / (r - i),
                            e > 1 ? e = 1 : e < 0 && (e = 0);
                            var n = t(e);
                            if ($bm_isInstanceOfArray(a)) {
                                var o,
                                    h = a.length,
                                    l = createTypedArray("float32", h);
                                for (o = 0; o < h; o += 1)
                                    l[o] = (s[o] - a[o]) * n + a[o];
                                return l
                            }
                            return (s - a) * n + a
                        }
                        function nearestKey(t) {
                            var e,
                                i,
                                r,
                                a = data.k.length;
                            if (data.k.length && "number" != typeof data.k[0])
                                if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                                    i = 1,
                                    r = data.k[0].t;
                                else {
                                    for (e = 0; e < a - 1; e += 1) {
                                        if (t === data.k[e].t) {
                                            i = e + 1,
                                            r = data.k[e].t;
                                            break
                                        }
                                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                                            t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                                            break
                                        }
                                    }
                                    -1 === i && (i = e + 1, r = data.k[e].t)
                                }
                            else
                                i = 0,
                                r = 0;
                            var s = {};
                            return s.index = i, s.time = r / elem.comp.globalData.frameRate, s
                        }
                        function key(t) {
                            var e,
                                i,
                                r;
                            if (!data.k.length || "number" == typeof data.k[0])
                                throw new Error("The property has no keyframe at index " + t);
                            t -= 1,
                            e = {
                                time: data.k[t].t / elem.comp.globalData.frameRate,
                                value: []
                            };
                            var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                            for (r = a.length, i = 0; i < r; i += 1)
                                e[i] = a[i],
                                e.value[i] = a[i];
                            return e
                        }
                        function framesToTime(t, e) {
                            return e || (e = elem.comp.globalData.frameRate), t / e
                        }
                        function timeToFrames(t, e) {
                            return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                        }
                        function seedRandom(t) {
                            BMMath.seedrandom(randSeed + t)
                        }
                        function sourceRectAtTime() {
                            return elem.sourceRectAtTime()
                        }
                        function substring(t, e) {
                            return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                        }
                        function substr(t, e) {
                            return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                        }
                        function posterizeTime(t) {
                            time = 0 === t ? 0 : Math.floor(time * t) / t,
                            value = valueAtTime(time)
                        }
                        var index = elem.data.ind,
                            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                            parent,
                            randSeed = Math.floor(1e6 * Math.random()),
                            globalData = elem.globalData;
                        function executeExpression(t) {
                            return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                        }
                        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                    }
                    return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
                }(),
                Expressions = function() {
                    var t = {
                        initExpressions: function(t) {
                            var e = 0,
                                i = [];
                            t.renderer.compInterface = CompExpressionInterface(t.renderer),
                            t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                            t.renderer.globalData.pushExpression = function() {
                                e += 1
                            },
                            t.renderer.globalData.popExpression = function() {
                                0 == (e -= 1) && function() {
                                    var t,
                                        e = i.length;
                                    for (t = 0; t < e; t += 1)
                                        i[t].release();
                                    i.length = 0
                                }()
                            },
                            t.renderer.globalData.registerExpressionProperty = function(t) {
                                -1 === i.indexOf(t) && i.push(t)
                            }
                        }
                    };
                    return t.resetFrame = ExpressionManager.resetFrame, t
                }(),
                MaskManagerInterface = function() {
                    function t(t, e) {
                        this._mask = t,
                        this._data = e
                    }
                    return Object.defineProperty(t.prototype, "maskPath", {
                        get: function() {
                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                        }
                    }), Object.defineProperty(t.prototype, "maskOpacity", {
                        get: function() {
                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                        }
                    }), function(e) {
                        var i,
                            r = createSizedArray(e.viewData.length),
                            a = e.viewData.length;
                        for (i = 0; i < a; i += 1)
                            r[i] = new t(e.viewData[i], e.masksProperties[i]);
                        return function(t) {
                            for (i = 0; i < a;) {
                                if (e.masksProperties[i].nm === t)
                                    return r[i];
                                i += 1
                            }
                            return null
                        }
                    }
                }(),
                ExpressionPropertyInterface = function() {
                    var t = {
                            pv: 0,
                            v: 0,
                            mult: 1
                        },
                        e = {
                            pv: [0, 0, 0],
                            v: [0, 0, 0],
                            mult: 1
                        };
                    function i(t, e, i) {
                        Object.defineProperty(t, "velocity", {
                            get: function() {
                                return e.getVelocityAtTime(e.comp.currentFrame)
                            }
                        }),
                        t.numKeys = e.keyframes ? e.keyframes.length : 0,
                        t.key = function(r) {
                            if (!t.numKeys)
                                return 0;
                            var a = "";
                            a = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                            var s = "unidimensional" === i ? new Number(a) : Object.assign({}, a);
                            return s.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === i ? a[0] : a, s
                        },
                        t.valueAtTime = e.getValueAtTime,
                        t.speedAtTime = e.getSpeedAtTime,
                        t.velocityAtTime = e.getVelocityAtTime,
                        t.propertyGroup = e.propertyGroup
                    }
                    function r() {
                        return t
                    }
                    return function(a) {
                        return a ? "unidimensional" === a.propType ? function(e) {
                            e && "pv" in e || (e = t);
                            var r = 1 / e.mult,
                                a = e.pv * r,
                                s = new Number(a);
                            return s.value = a, i(s, e, "unidimensional"), function() {
                                return e.k && e.getValue(), a = e.v * r, s.value !== a && ((s = new Number(a)).value = a, i(s, e, "unidimensional")), s
                            }
                        }(a) : function(t) {
                            t && "pv" in t || (t = e);
                            var r = 1 / t.mult,
                                a = t.data && t.data.l || t.pv.length,
                                s = createTypedArray("float32", a),
                                n = createTypedArray("float32", a);
                            return s.value = n, i(s, t, "multidimensional"), function() {
                                t.k && t.getValue();
                                for (var e = 0; e < a; e += 1)
                                    n[e] = t.v[e] * r,
                                    s[e] = n[e];
                                return s
                            }
                        }(a) : r
                    }
                }(),
                TransformExpressionInterface = function(t) {
                    function e(t) {
                        switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity;
                        default:
                            return null
                        }
                    }
                    var i,
                        r,
                        a,
                        s;
                    return Object.defineProperty(e, "rotation", {
                        get: ExpressionPropertyInterface(t.r || t.rz)
                    }), Object.defineProperty(e, "zRotation", {
                        get: ExpressionPropertyInterface(t.rz || t.r)
                    }), Object.defineProperty(e, "xRotation", {
                        get: ExpressionPropertyInterface(t.rx)
                    }), Object.defineProperty(e, "yRotation", {
                        get: ExpressionPropertyInterface(t.ry)
                    }), Object.defineProperty(e, "scale", {
                        get: ExpressionPropertyInterface(t.s)
                    }), t.p ? s = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                        get: function() {
                            return t.p ? s() : [i(), r(), a ? a() : 0]
                        }
                    }), Object.defineProperty(e, "xPosition", {
                        get: ExpressionPropertyInterface(t.px)
                    }), Object.defineProperty(e, "yPosition", {
                        get: ExpressionPropertyInterface(t.py)
                    }), Object.defineProperty(e, "zPosition", {
                        get: ExpressionPropertyInterface(t.pz)
                    }), Object.defineProperty(e, "anchorPoint", {
                        get: ExpressionPropertyInterface(t.a)
                    }), Object.defineProperty(e, "opacity", {
                        get: ExpressionPropertyInterface(t.o)
                    }), Object.defineProperty(e, "skew", {
                        get: ExpressionPropertyInterface(t.sk)
                    }), Object.defineProperty(e, "skewAxis", {
                        get: ExpressionPropertyInterface(t.sa)
                    }), Object.defineProperty(e, "orientation", {
                        get: ExpressionPropertyInterface(t.or)
                    }), e
                },
                LayerExpressionInterface = function() {
                    function t(t) {
                        var e = new Matrix;
                        return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
                    }
                    function e(t, e) {
                        var i = this.getMatrix(e);
                        return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
                    }
                    function i(t, e) {
                        var i = this.getMatrix(e);
                        return this.applyPoint(i, t)
                    }
                    function r(t, e) {
                        var i = this.getMatrix(e);
                        return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
                    }
                    function a(t, e) {
                        var i = this.getMatrix(e);
                        return this.invertPoint(i, t)
                    }
                    function s(t, e) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var i,
                                r = this._elem.hierarchy.length;
                            for (i = 0; i < r; i += 1)
                                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                        }
                        return t.applyToPointArray(e[0], e[1], e[2] || 0)
                    }
                    function n(t, e) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var i,
                                r = this._elem.hierarchy.length;
                            for (i = 0; i < r; i += 1)
                                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                        }
                        return t.inversePoint(e)
                    }
                    function o(t) {
                        var e = new Matrix;
                        if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var i,
                                r = this._elem.hierarchy.length;
                            for (i = 0; i < r; i += 1)
                                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                            return e.inversePoint(t)
                        }
                        return e.inversePoint(t)
                    }
                    function h() {
                        return [1, 1, 1, 1]
                    }
                    return function(l) {
                        var p;
                        function f(t) {
                            switch (t) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return f.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return p;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return f.effect;
                            case "ADBE Text Properties":
                                return f.textInterface;
                            default:
                                return null
                            }
                        }
                        f.getMatrix = t,
                        f.invertPoint = n,
                        f.applyPoint = s,
                        f.toWorld = i,
                        f.toWorldVec = e,
                        f.fromWorld = a,
                        f.fromWorldVec = r,
                        f.toComp = i,
                        f.fromComp = o,
                        f.sampleImage = h,
                        f.sourceRectAtTime = l.sourceRectAtTime.bind(l),
                        f._elem = l;
                        var c = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                        return Object.defineProperties(f, {
                            hasParent: {
                                get: function() {
                                    return l.hierarchy.length
                                }
                            },
                            parent: {
                                get: function() {
                                    return l.hierarchy[0].layerInterface
                                }
                            },
                            rotation: getDescriptor(p, "rotation"),
                            scale: getDescriptor(p, "scale"),
                            position: getDescriptor(p, "position"),
                            opacity: getDescriptor(p, "opacity"),
                            anchorPoint: c,
                            anchor_point: c,
                            transform: {
                                get: function() {
                                    return p
                                }
                            },
                            active: {
                                get: function() {
                                    return l.isInRange
                                }
                            }
                        }), f.startTime = l.data.st, f.index = l.data.ind, f.source = l.data.refId, f.height = 0 === l.data.ty ? l.data.h : 100, f.width = 0 === l.data.ty ? l.data.w : 100, f.inPoint = l.data.ip / l.comp.globalData.frameRate, f.outPoint = l.data.op / l.comp.globalData.frameRate, f._name = l.data.nm, f.registerMaskInterface = function(t) {
                            f.mask = new MaskManagerInterface(t, l)
                        }, f.registerEffectsInterface = function(t) {
                            f.effect = t
                        }, f
                    }
                }(),
                propertyGroupFactory = function(t, e) {
                    return function(i) {
                        return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
                    }
                },
                PropertyInterface = function(t, e) {
                    var i = {
                        _name: t
                    };
                    return function(t) {
                        return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
                    }
                },
                EffectsExpressionInterface = function() {
                    var t = {
                        createEffectsInterface: function(t, i) {
                            if (t.effectsManager) {
                                var r,
                                    a = [],
                                    s = t.data.ef,
                                    n = t.effectsManager.effectElements.length;
                                for (r = 0; r < n; r += 1)
                                    a.push(e(s[r], t.effectsManager.effectElements[r], i, t));
                                var o = t.data.ef || [],
                                    h = function(t) {
                                        for (r = 0, n = o.length; r < n;) {
                                            if (t === o[r].nm || t === o[r].mn || t === o[r].ix)
                                                return a[r];
                                            r += 1
                                        }
                                        return null
                                    };
                                return Object.defineProperty(h, "numProperties", {
                                    get: function() {
                                        return o.length
                                    }
                                }), h
                            }
                            return null
                        }
                    };
                    function e(t, r, a, s) {
                        function n(e) {
                            for (var i = t.ef, r = 0, a = i.length; r < a;) {
                                if (e === i[r].nm || e === i[r].mn || e === i[r].ix)
                                    return 5 === i[r].ty ? l[r] : l[r]();
                                r += 1
                            }
                            throw new Error
                        }
                        var o,
                            h = propertyGroupFactory(n, a),
                            l = [],
                            p = t.ef.length;
                        for (o = 0; o < p; o += 1)
                            5 === t.ef[o].ty ? l.push(e(t.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, s)) : l.push(i(r.effectElements[o], t.ef[o].ty, s, h));
                        return "ADBE Color Control" === t.mn && Object.defineProperty(n, "color", {
                            get: function() {
                                return l[0]()
                            }
                        }), Object.defineProperties(n, {
                            numProperties: {
                                get: function() {
                                    return t.np
                                }
                            },
                            _name: {
                                value: t.nm
                            },
                            propertyGroup: {
                                value: h
                            }
                        }), n.enabled = 0 !== t.en, n.active = n.enabled, n
                    }
                    function i(t, e, i, r) {
                        var a = ExpressionPropertyInterface(t.p);
                        return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)), function() {
                            return 10 === e ? i.comp.compInterface(t.p.v) : a()
                        }
                    }
                    return t
                }(),
                ShapePathInterface = function(t, e, i) {
                    var r = e.sh;
                    function a(t) {
                        return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? a.path : null
                    }
                    var s = propertyGroupFactory(a, i);
                    return r.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, {
                        path: {
                            get: function() {
                                return r.k && r.getValue(), r
                            }
                        },
                        shape: {
                            get: function() {
                                return r.k && r.getValue(), r
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        ix: {
                            value: t.ix
                        },
                        propertyIndex: {
                            value: t.ix
                        },
                        mn: {
                            value: t.mn
                        },
                        propertyGroup: {
                            value: i
                        }
                    }), a
                },
                ShapeExpressionInterface = function() {
                    function t(t, n, c) {
                        var d,
                            m = [],
                            u = t ? t.length : 0;
                        for (d = 0; d < u; d += 1)
                            "gr" === t[d].ty ? m.push(e(t[d], n[d], c)) : "fl" === t[d].ty ? m.push(i(t[d], n[d], c)) : "st" === t[d].ty ? m.push(a(t[d], n[d], c)) : "tm" === t[d].ty ? m.push(s(t[d], n[d], c)) : "tr" === t[d].ty || ("el" === t[d].ty ? m.push(o(t[d], n[d], c)) : "sr" === t[d].ty ? m.push(h(t[d], n[d], c)) : "sh" === t[d].ty ? m.push(ShapePathInterface(t[d], n[d], c)) : "rc" === t[d].ty ? m.push(l(t[d], n[d], c)) : "rd" === t[d].ty ? m.push(p(t[d], n[d], c)) : "rp" === t[d].ty ? m.push(f(t[d], n[d], c)) : "gf" === t[d].ty ? m.push(r(t[d], n[d], c)) : m.push((t[d], n[d], function() {
                                return null
                            })));
                        return m
                    }
                    function e(e, i, r) {
                        var a = function(t) {
                            switch (t) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return a.content;
                            default:
                                return a.transform
                            }
                        };
                        a.propertyGroup = propertyGroupFactory(a, r);
                        var s = function(e, i, r) {
                                var a,
                                    s = function(t) {
                                        for (var e = 0, i = a.length; e < i;) {
                                            if (a[e]._name === t || a[e].mn === t || a[e].propertyIndex === t || a[e].ix === t || a[e].ind === t)
                                                return a[e];
                                            e += 1
                                        }
                                        return "number" == typeof t ? a[t - 1] : null
                                    };
                                s.propertyGroup = propertyGroupFactory(s, r),
                                a = t(e.it, i.it, s.propertyGroup),
                                s.numProperties = a.length;
                                var o = n(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                                return s.transform = o, s.propertyIndex = e.cix, s._name = e.nm, s
                            }(e, i, a.propertyGroup),
                            o = n(e.it[e.it.length - 1], i.it[i.it.length - 1], a.propertyGroup);
                        return a.content = s, a.transform = o, Object.defineProperty(a, "_name", {
                            get: function() {
                                return e.nm
                            }
                        }), a.numProperties = e.np, a.propertyIndex = e.ix, a.nm = e.nm, a.mn = e.mn, a
                    }
                    function i(t, e, i) {
                        function r(t) {
                            return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
                        }
                        return Object.defineProperties(r, {
                            color: {
                                get: ExpressionPropertyInterface(e.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(e.o)
                            },
                            _name: {
                                value: t.nm
                            },
                            mn: {
                                value: t.mn
                            }
                        }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                    }
                    function r(t, e, i) {
                        function r(t) {
                            return "Start Point" === t || "start point" === t ? r.startPoint : "End Point" === t || "end point" === t ? r.endPoint : "Opacity" === t || "opacity" === t ? r.opacity : null
                        }
                        return Object.defineProperties(r, {
                            startPoint: {
                                get: ExpressionPropertyInterface(e.s)
                            },
                            endPoint: {
                                get: ExpressionPropertyInterface(e.e)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(e.o)
                            },
                            type: {
                                get: function() {
                                    return "a"
                                }
                            },
                            _name: {
                                value: t.nm
                            },
                            mn: {
                                value: t.mn
                            }
                        }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                    }
                    function a(t, e, i) {
                        var r,
                            a = propertyGroupFactory(l, i),
                            s = propertyGroupFactory(h, a);
                        function n(i) {
                            Object.defineProperty(h, t.d[i].nm, {
                                get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                            })
                        }
                        var o = t.d ? t.d.length : 0,
                            h = {};
                        for (r = 0; r < o; r += 1)
                            n(r),
                            e.d.dataProps[r].p.setGroupProperty(s);
                        function l(t) {
                            return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
                        }
                        return Object.defineProperties(l, {
                            color: {
                                get: ExpressionPropertyInterface(e.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(e.o)
                            },
                            strokeWidth: {
                                get: ExpressionPropertyInterface(e.w)
                            },
                            dash: {
                                get: function() {
                                    return h
                                }
                            },
                            _name: {
                                value: t.nm
                            },
                            mn: {
                                value: t.mn
                            }
                        }), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), e.w.setGroupProperty(PropertyInterface("Stroke Width", a)), l
                    }
                    function s(t, e, i) {
                        function r(e) {
                            return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
                        }
                        var a = propertyGroupFactory(r, i);
                        return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", a)), e.e.setGroupProperty(PropertyInterface("End", a)), e.o.setGroupProperty(PropertyInterface("Offset", a)), r.propertyIndex = t.ix, r.propertyGroup = i, Object.defineProperties(r, {
                            start: {
                                get: ExpressionPropertyInterface(e.s)
                            },
                            end: {
                                get: ExpressionPropertyInterface(e.e)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(e.o)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                    function n(t, e, i) {
                        function r(e) {
                            return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
                        }
                        var a = propertyGroupFactory(r, i);
                        return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", a)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", a)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", a)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", a)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", a)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", a)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", a))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", a)), Object.defineProperties(r, {
                            opacity: {
                                get: ExpressionPropertyInterface(e.transform.mProps.o)
                            },
                            position: {
                                get: ExpressionPropertyInterface(e.transform.mProps.p)
                            },
                            anchorPoint: {
                                get: ExpressionPropertyInterface(e.transform.mProps.a)
                            },
                            scale: {
                                get: ExpressionPropertyInterface(e.transform.mProps.s)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(e.transform.mProps.r)
                            },
                            skew: {
                                get: ExpressionPropertyInterface(e.transform.mProps.sk)
                            },
                            skewAxis: {
                                get: ExpressionPropertyInterface(e.transform.mProps.sa)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = i, r
                    }
                    function o(t, e, i) {
                        function r(e) {
                            return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
                        }
                        var a = propertyGroupFactory(r, i);
                        r.propertyIndex = t.ix;
                        var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return s.s.setGroupProperty(PropertyInterface("Size", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), Object.defineProperties(r, {
                            size: {
                                get: ExpressionPropertyInterface(s.s)
                            },
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                    function h(t, e, i) {
                        function r(e) {
                            return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
                        }
                        var a = propertyGroupFactory(r, i),
                            s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return r.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", a)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", a)), s.pt.setGroupProperty(PropertyInterface("Points", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", a)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", a))), Object.defineProperties(r, {
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(s.r)
                            },
                            points: {
                                get: ExpressionPropertyInterface(s.pt)
                            },
                            outerRadius: {
                                get: ExpressionPropertyInterface(s.or)
                            },
                            outerRoundness: {
                                get: ExpressionPropertyInterface(s.os)
                            },
                            innerRadius: {
                                get: ExpressionPropertyInterface(s.ir)
                            },
                            innerRoundness: {
                                get: ExpressionPropertyInterface(s.is)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                    function l(t, e, i) {
                        function r(e) {
                            return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
                        }
                        var a = propertyGroupFactory(r, i),
                            s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return r.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", a)), s.s.setGroupProperty(PropertyInterface("Size", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), Object.defineProperties(r, {
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            roundness: {
                                get: ExpressionPropertyInterface(s.r)
                            },
                            size: {
                                get: ExpressionPropertyInterface(s.s)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                    function p(t, e, i) {
                        function r(e) {
                            return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
                        }
                        var a = propertyGroupFactory(r, i),
                            s = e;
                        return r.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", a)), Object.defineProperties(r, {
                            radius: {
                                get: ExpressionPropertyInterface(s.rd)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                    function f(t, e, i) {
                        function r(e) {
                            return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
                        }
                        var a = propertyGroupFactory(r, i),
                            s = e;
                        return r.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", a)), s.o.setGroupProperty(PropertyInterface("Offset", a)), Object.defineProperties(r, {
                            copies: {
                                get: ExpressionPropertyInterface(s.c)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(s.o)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                    return function(e, i, r) {
                        var a;
                        function s(t) {
                            if ("number" == typeof t)
                                return 0 === (t = void 0 === t ? 1 : t) ? r : a[t - 1];
                            for (var e = 0, i = a.length; e < i;) {
                                if (a[e]._name === t)
                                    return a[e];
                                e += 1
                            }
                            return null
                        }
                        return s.propertyGroup = propertyGroupFactory(s, (function() {
                            return r
                        })), a = t(e, i, s.propertyGroup), s.numProperties = a.length, s._name = "Contents", s
                    }
                }(),
                TextExpressionInterface = function(t) {
                    var e;
                    function i(t) {
                        return "ADBE Text Document" === t ? i.sourceText : null
                    }
                    return Object.defineProperty(i, "sourceText", {
                        get: function() {
                            t.textProperty.getValue();
                            var i = t.textProperty.currentData.t;
                            return e && i === e.value || ((e = new String(i)).value = i || new String(i), Object.defineProperty(e, "style", {
                                get: function() {
                                    return {
                                        fillColor: t.textProperty.currentData.fc
                                    }
                                }
                            })), e
                        }
                    }), i
                };
            function _typeof(t) {
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof(t)
            }
            var FootageInterface = (dataInterfaceFactory = function(t) {
                    function e(t) {
                        return "Outline" === t ? e.outlineInterface() : null
                    }
                    return e._name = "Outline", e.outlineInterface = function(t) {
                        var e = "",
                            i = t.getFootageData();
                        function r(t) {
                            if (i[t])
                                return e = t, "object" === _typeof(i = i[t]) ? r : i;
                            var a = t.indexOf(e);
                            if (-1 !== a) {
                                var s = parseInt(t.substr(a + e.length), 10);
                                return "object" === _typeof(i = i[s]) ? r : i
                            }
                            return ""
                        }
                        return function() {
                            return e = "", i = t.getFootageData(), r
                        }
                    }(t), e
                }, function(t) {
                    function e(t) {
                        return "Data" === t ? e.dataInterface : null
                    }
                    return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
                }),
                dataInterfaceFactory,
                interfaces = {
                    layer: LayerExpressionInterface,
                    effects: EffectsExpressionInterface,
                    comp: CompExpressionInterface,
                    shape: ShapeExpressionInterface,
                    text: TextExpressionInterface,
                    footage: FootageInterface
                };
            function getInterface(t) {
                return interfaces[t] || null
            }
            var expressionHelpers = {
                searchExpressions: function(t, e, i) {
                    e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                },
                getSpeedAtTime: function(t) {
                    var e = this.getValueAtTime(t),
                        i = this.getValueAtTime(t + -.01),
                        r = 0;
                    if (e.length) {
                        var a;
                        for (a = 0; a < e.length; a += 1)
                            r += Math.pow(i[a] - e[a], 2);
                        r = 100 * Math.sqrt(r)
                    } else
                        r = 0;
                    return r
                },
                getVelocityAtTime: function(t) {
                    if (void 0 !== this.vel)
                        return this.vel;
                    var e,
                        i,
                        r = -.001,
                        a = this.getValueAtTime(t),
                        s = this.getValueAtTime(t + r);
                    if (a.length)
                        for (e = createTypedArray("float32", a.length), i = 0; i < a.length; i += 1)
                            e[i] = (s[i] - a[i]) / r;
                    else
                        e = (s - a) / r;
                    return e
                },
                getValueAtTime: function(t) {
                    return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                },
                getStaticValueAtTime: function() {
                    return this.pv
                },
                setGroupProperty: function(t) {
                    this.propertyGroup = t
                }
            };
            function addPropertyDecorator() {
                function t(t, e, i) {
                    if (!this.k || !this.keyframes)
                        return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var r,
                        a,
                        s,
                        n,
                        o,
                        h = this.comp.renderedFrame,
                        l = this.keyframes,
                        p = l[l.length - 1].t;
                    if (h <= p)
                        return this.pv;
                    if (i ? a = p - (r = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = p - (a = l[l.length - 1 - e].t)), "pingpong" === t) {
                        if (Math.floor((h - a) / r) % 2 != 0)
                            return this.getValueAtTime((r - (h - a) % r + a) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                                c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                d = this.getValueAtTime(((h - a) % r + a) / this.comp.globalData.frameRate, 0),
                                m = Math.floor((h - a) / r);
                            if (this.pv.length) {
                                for (n = (o = new Array(f.length)).length, s = 0; s < n; s += 1)
                                    o[s] = (c[s] - f[s]) * m + d[s];
                                return o
                            }
                            return (c - f) * m + d
                        }
                        if ("continue" === t) {
                            var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (n = (o = new Array(u.length)).length, s = 0; s < n; s += 1)
                                    o[s] = u[s] + (u[s] - y[s]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                return o
                            }
                            return u + (h - p) / .001 * (u - y)
                        }
                    }
                    return this.getValueAtTime(((h - a) % r + a) / this.comp.globalData.frameRate, 0)
                }
                function e(t, e, i) {
                    if (!this.k)
                        return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var r,
                        a,
                        s,
                        n,
                        o,
                        h = this.comp.renderedFrame,
                        l = this.keyframes,
                        p = l[0].t;
                    if (h >= p)
                        return this.pv;
                    if (i ? a = p + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (a = l[e].t) - p), "pingpong" === t) {
                        if (Math.floor((p - h) / r) % 2 == 0)
                            return this.getValueAtTime(((p - h) % r + p) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                c = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                                d = this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0),
                                m = Math.floor((p - h) / r) + 1;
                            if (this.pv.length) {
                                for (n = (o = new Array(f.length)).length, s = 0; s < n; s += 1)
                                    o[s] = d[s] - (c[s] - f[s]) * m;
                                return o
                            }
                            return d - (c - f) * m
                        }
                        if ("continue" === t) {
                            var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (n = (o = new Array(u.length)).length, s = 0; s < n; s += 1)
                                    o[s] = u[s] + (u[s] - y[s]) * (p - h) / .001;
                                return o
                            }
                            return u + (u - y) * (p - h) / .001
                        }
                    }
                    return this.getValueAtTime((r - ((p - h) % r + p)) / this.comp.globalData.frameRate, 0)
                }
                function i(t, e) {
                    if (!this.k)
                        return this.pv;
                    if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1)
                        return this.pv;
                    var i,
                        r,
                        a = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        s = a - t,
                        n = e > 1 ? (a + t - s) / (e - 1) : 1,
                        o = 0,
                        h = 0;
                    for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                        if (r = this.getValueAtTime(s + o * n), this.pv.length)
                            for (h = 0; h < this.pv.length; h += 1)
                                i[h] += r[h];
                        else
                            i += r;
                        o += 1
                    }
                    if (this.pv.length)
                        for (h = 0; h < this.pv.length; h += 1)
                            i[h] /= e;
                    else
                        i /= e;
                    return i
                }
                function r(t) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var e = this._transformCachingAtTime.v;
                    if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                        var i = this.a.getValueAtTime(t);
                        e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                    }
                    if (this.appliedTransformations < 2) {
                        var r = this.s.getValueAtTime(t);
                        e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var a = this.sk.getValueAtTime(t),
                            s = this.sa.getValueAtTime(t);
                        e.skewFromAxis(-a * this.sk.mult, s * this.sa.mult)
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var n = this.r.getValueAtTime(t);
                        e.rotate(-n * this.r.mult)
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var o = this.rz.getValueAtTime(t),
                            h = this.ry.getValueAtTime(t),
                            l = this.rx.getValueAtTime(t),
                            p = this.or.getValueAtTime(t);
                        e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                    }
                    if (this.data.p && this.data.p.s) {
                        var f = this.px.getValueAtTime(t),
                            c = this.py.getValueAtTime(t);
                        if (this.data.p.z) {
                            var d = this.pz.getValueAtTime(t);
                            e.translate(f * this.px.mult, c * this.py.mult, -d * this.pz.mult)
                        } else
                            e.translate(f * this.px.mult, c * this.py.mult, 0)
                    } else {
                        var m = this.p.getValueAtTime(t);
                        e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult)
                    }
                    return e
                }
                function a() {
                    return this.v.clone(new Matrix)
                }
                var s = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                    var n = s(t, e, i);
                    return n.dynamicProperties.length ? n.getValueAtTime = r.bind(n) : n.getValueAtTime = a.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
                };
                var n = PropertyFactory.getProp;
                PropertyFactory.getProp = function(r, a, s, o, h) {
                    var l = n(r, a, s, o, h);
                    l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l),
                    l.setGroupProperty = expressionHelpers.setGroupProperty,
                    l.loopOut = t,
                    l.loopIn = e,
                    l.smooth = i,
                    l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l),
                    l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l),
                    l.numKeys = 1 === a.a ? a.k.length : 0,
                    l.propertyIndex = a.ix;
                    var p = 0;
                    return 0 !== s && (p = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: p
                    }, expressionHelpers.searchExpressions(r, a, l), l.k && h.addDynamicProperty(l), l
                };
                var o = ShapePropertyFactory.getConstructorFunction(),
                    h = ShapePropertyFactory.getKeyframedConstructorFunction();
                function l() {}
                l.prototype = {
                    vertices: function(t, e) {
                        this.k && this.getValue();
                        var i,
                            r = this.v;
                        void 0 !== e && (r = this.getValueAtTime(e, 0));
                        var a = r._length,
                            s = r[t],
                            n = r.v,
                            o = createSizedArray(a);
                        for (i = 0; i < a; i += 1)
                            o[i] = "i" === t || "o" === t ? [s[i][0] - n[i][0], s[i][1] - n[i][1]] : [s[i][0], s[i][1]];
                        return o
                    },
                    points: function(t) {
                        return this.vertices("v", t)
                    },
                    inTangents: function(t) {
                        return this.vertices("i", t)
                    },
                    outTangents: function(t) {
                        return this.vertices("o", t)
                    },
                    isClosed: function() {
                        return this.v.c
                    },
                    pointOnPath: function(t, e) {
                        var i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0)),
                        this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                        for (var r, a = this._segmentsLength, s = a.lengths, n = a.totalLength * t, o = 0, h = s.length, l = 0; o < h;) {
                            if (l + s[o].addedLength > n) {
                                var p = o,
                                    f = i.c && o === h - 1 ? 0 : o + 1,
                                    c = (n - l) / s[o].addedLength;
                                r = bez.getPointInSegment(i.v[p], i.v[f], i.o[p], i.i[f], c, s[o]);
                                break
                            }
                            l += s[o].addedLength,
                            o += 1
                        }
                        return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
                    },
                    vectorOnPath: function(t, e, i) {
                        1 == t ? t = this.v.c : 0 == t && (t = .999);
                        var r = this.pointOnPath(t, e),
                            a = this.pointOnPath(t + .001, e),
                            s = a[0] - r[0],
                            n = a[1] - r[1],
                            o = Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2));
                        return 0 === o ? [0, 0] : "tangent" === i ? [s / o, n / o] : [-n / o, s / o]
                    },
                    tangentOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "tangent")
                    },
                    normalOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                },
                extendPrototype([l], o),
                extendPrototype([l], h),
                h.prototype.getValueAtTime = function(t) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                },
                h.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var p = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(t, e, i, r, a) {
                    var s = p(t, e, i, r, a);
                    return s.propertyIndex = e.ix, s.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
                }
            }
            function initialize$1() {
                addPropertyDecorator()
            }
            function addDecorator() {
                TextProperty.prototype.getExpressionValue = function(t, e) {
                    var i = this.calculateExpression(e);
                    if (t.t !== i) {
                        var r = {};
                        return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
                    }
                    return t
                },
                TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes(),
                        e = this.searchExpressions();
                    return this.kf = t || e, this.kf
                },
                TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                }
            }
            function initialize() {
                addDecorator()
            }
            function SVGComposableEffect() {}
            SVGComposableEffect.prototype = {
                createMergeNode: function(t, e) {
                    var i,
                        r,
                        a = createNS("feMerge");
                    for (a.setAttribute("result", t), r = 0; r < e.length; r += 1)
                        (i = createNS("feMergeNode")).setAttribute("in", e[r]),
                        a.appendChild(i),
                        a.appendChild(i);
                    return a
                }
            };
            var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
            function SVGTintFilter(t, e, i, r, a) {
                this.filterManager = e;
                var s = createNS("feColorMatrix");
                s.setAttribute("type", "matrix"),
                s.setAttribute("color-interpolation-filters", "linearRGB"),
                s.setAttribute("values", linearFilterValue + " 1 0"),
                this.linearFilter = s,
                s.setAttribute("result", r + "_tint_1"),
                t.appendChild(s),
                (s = createNS("feColorMatrix")).setAttribute("type", "matrix"),
                s.setAttribute("color-interpolation-filters", "sRGB"),
                s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                s.setAttribute("result", r + "_tint_2"),
                t.appendChild(s),
                this.matrixFilter = s;
                var n = this.createMergeNode(r, [a, r + "_tint_1", r + "_tint_2"]);
                t.appendChild(n)
            }
            function SVGFillFilter(t, e, i, r) {
                this.filterManager = e;
                var a = createNS("feColorMatrix");
                a.setAttribute("type", "matrix"),
                a.setAttribute("color-interpolation-filters", "sRGB"),
                a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                a.setAttribute("result", r),
                t.appendChild(a),
                this.matrixFilter = a
            }
            function SVGStrokeEffect(t, e, i) {
                this.initialized = !1,
                this.filterManager = e,
                this.elem = i,
                this.paths = []
            }
            function SVGTritoneFilter(t, e, i, r) {
                this.filterManager = e;
                var a = createNS("feColorMatrix");
                a.setAttribute("type", "matrix"),
                a.setAttribute("color-interpolation-filters", "linearRGB"),
                a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
                t.appendChild(a);
                var s = createNS("feComponentTransfer");
                s.setAttribute("color-interpolation-filters", "sRGB"),
                s.setAttribute("result", r),
                this.matrixFilter = s;
                var n = createNS("feFuncR");
                n.setAttribute("type", "table"),
                s.appendChild(n),
                this.feFuncR = n;
                var o = createNS("feFuncG");
                o.setAttribute("type", "table"),
                s.appendChild(o),
                this.feFuncG = o;
                var h = createNS("feFuncB");
                h.setAttribute("type", "table"),
                s.appendChild(h),
                this.feFuncB = h,
                t.appendChild(s)
            }
            function SVGProLevelsFilter(t, e, i, r) {
                this.filterManager = e;
                var a = this.filterManager.effectElements,
                    s = createNS("feComponentTransfer");
                (a[10].p.k || 0 !== a[10].p.v || a[11].p.k || 1 !== a[11].p.v || a[12].p.k || 1 !== a[12].p.v || a[13].p.k || 0 !== a[13].p.v || a[14].p.k || 1 !== a[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)),
                (a[17].p.k || 0 !== a[17].p.v || a[18].p.k || 1 !== a[18].p.v || a[19].p.k || 1 !== a[19].p.v || a[20].p.k || 0 !== a[20].p.v || a[21].p.k || 1 !== a[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)),
                (a[24].p.k || 0 !== a[24].p.v || a[25].p.k || 1 !== a[25].p.v || a[26].p.k || 1 !== a[26].p.v || a[27].p.k || 0 !== a[27].p.v || a[28].p.k || 1 !== a[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)),
                (a[31].p.k || 0 !== a[31].p.v || a[32].p.k || 1 !== a[32].p.v || a[33].p.k || 1 !== a[33].p.v || a[34].p.k || 0 !== a[34].p.v || a[35].p.k || 1 !== a[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)),
                (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)),
                (a[3].p.k || 0 !== a[3].p.v || a[4].p.k || 1 !== a[4].p.v || a[5].p.k || 1 !== a[5].p.v || a[6].p.k || 0 !== a[6].p.v || a[7].p.k || 1 !== a[7].p.v) && ((s = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", r), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s))
            }
            function SVGDropShadowEffect(t, e, i, r, a) {
                var s = e.container.globalData.renderConfig.filterSize,
                    n = e.data.fs || s;
                t.setAttribute("x", n.x || s.x),
                t.setAttribute("y", n.y || s.y),
                t.setAttribute("width", n.width || s.width),
                t.setAttribute("height", n.height || s.height),
                this.filterManager = e;
                var o = createNS("feGaussianBlur");
                o.setAttribute("in", "SourceAlpha"),
                o.setAttribute("result", r + "_drop_shadow_1"),
                o.setAttribute("stdDeviation", "0"),
                this.feGaussianBlur = o,
                t.appendChild(o);
                var h = createNS("feOffset");
                h.setAttribute("dx", "25"),
                h.setAttribute("dy", "0"),
                h.setAttribute("in", r + "_drop_shadow_1"),
                h.setAttribute("result", r + "_drop_shadow_2"),
                this.feOffset = h,
                t.appendChild(h);
                var l = createNS("feFlood");
                l.setAttribute("flood-color", "#00ff00"),
                l.setAttribute("flood-opacity", "1"),
                l.setAttribute("result", r + "_drop_shadow_3"),
                this.feFlood = l,
                t.appendChild(l);
                var p = createNS("feComposite");
                p.setAttribute("in", r + "_drop_shadow_3"),
                p.setAttribute("in2", r + "_drop_shadow_2"),
                p.setAttribute("operator", "in"),
                p.setAttribute("result", r + "_drop_shadow_4"),
                t.appendChild(p);
                var f = this.createMergeNode(r, [r + "_drop_shadow_4", a]);
                t.appendChild(f)
            }
            extendPrototype([SVGComposableEffect], SVGTintFilter),
            SVGTintFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"),
                    this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
                }
            },
            SVGFillFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[2].p.v,
                        i = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                }
            },
            SVGStrokeEffect.prototype.initialize = function() {
                var t,
                    e,
                    i,
                    r,
                    a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1)
                    t = createNS("path"),
                    e.appendChild(t),
                    this.paths.push({
                        p: t,
                        m: i
                    });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var s = createNS("mask"),
                        n = createElementID();
                    s.setAttribute("id", n),
                    s.setAttribute("mask-type", "alpha"),
                    s.appendChild(e),
                    this.elem.globalData.defs.appendChild(s);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); a[0];)
                        o.appendChild(a[0]);
                    this.elem.layerElement.appendChild(o),
                    this.masker = s,
                    e.setAttribute("stroke", "#fff")
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v)
                        for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length;)
                            this.elem.layerElement.removeChild(a[0]);
                    this.elem.layerElement.appendChild(e),
                    this.elem.layerElement.removeAttribute("mask"),
                    e.setAttribute("stroke", "#fff")
                }
                this.initialized = !0,
                this.pathMasker = e
            },
            SVGStrokeEffect.prototype.renderFrame = function(t) {
                var e;
                this.initialized || this.initialize();
                var i,
                    r,
                    a = this.paths.length;
                for (e = 0; e < a; e += 1)
                    if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                        var s;
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                h = r.getTotalLength();
                            s = "0 0 0 " + h * n + " ";
                            var l,
                                p = h * (o - n),
                                f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                c = Math.floor(p / f);
                            for (l = 0; l < c; l += 1)
                                s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            s += "0 " + 10 * h + " 0 0"
                        } else
                            s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        r.setAttribute("stroke-dasharray", s)
                    }
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                    var d = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
                }
            },
            SVGTritoneFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v,
                        a = r[0] + " " + i[0] + " " + e[0],
                        s = r[1] + " " + i[1] + " " + e[1],
                        n = r[2] + " " + i[2] + " " + e[2];
                    this.feFuncR.setAttribute("tableValues", a),
                    this.feFuncG.setAttribute("tableValues", s),
                    this.feFuncB.setAttribute("tableValues", n)
                }
            },
            SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                var i = createNS(t);
                return i.setAttribute("type", "table"), e.appendChild(i), i
            },
            SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, a) {
                for (var s, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                        length: 256
                    }), f = 0, c = a - r, d = e - t; o <= 256;)
                    n = (s = o / 256) <= h ? d < 0 ? a : r : s >= l ? d < 0 ? r : a : r + c * Math.pow((s - t) / d, 1 / i),
                    p[f] = n,
                    f += 1,
                    o += 256 / 255;
                return p.join(" ")
            },
            SVGProLevelsFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e,
                        i = this.filterManager.effectElements;
                    this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)),
                    this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)),
                    this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)),
                    this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)),
                    this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                }
            },
            extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
            SVGDropShadowEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var i = this.filterManager.effectElements[3].p.v,
                            r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            a = i * Math.cos(r),
                            s = i * Math.sin(r);
                        this.feOffset.setAttribute("dx", a),
                        this.feOffset.setAttribute("dy", s)
                    }
                }
            };
            var _svgMatteSymbols = [];
            function SVGMatte3Effect(t, e, i) {
                this.initialized = !1,
                this.filterManager = e,
                this.filterElem = t,
                this.elem = i,
                i.matteElement = createNS("g"),
                i.matteElement.appendChild(i.layerElement),
                i.matteElement.appendChild(i.transformedElement),
                i.baseElement = i.matteElement
            }
            function SVGGaussianBlurEffect(t, e, i, r) {
                t.setAttribute("x", "-100%"),
                t.setAttribute("y", "-100%"),
                t.setAttribute("width", "300%"),
                t.setAttribute("height", "300%"),
                this.filterManager = e;
                var a = createNS("feGaussianBlur");
                a.setAttribute("result", r),
                t.appendChild(a),
                this.feGaussianBlur = a
            }
            function TransformEffect() {}
            function SVGTransformEffect(t, e) {
                this.init(e)
            }
            function CVTransformEffect(t) {
                this.init(t)
            }
            return SVGMatte3Effect.prototype.findSymbol = function(t) {
                for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                    if (_svgMatteSymbols[e] === t)
                        return _svgMatteSymbols[e];
                    e += 1
                }
                return null
            }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                    for (var r, a = i.children, s = 0, n = a.length; s < n && a[s] !== t.layerElement;)
                        s += 1;
                    s <= n - 2 && (r = a[s + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e),
                    r ? i.insertBefore(o, r) : i.appendChild(o)
                }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                if (!this.findSymbol(e)) {
                    var i = createElementID(),
                        r = createNS("mask");
                    r.setAttribute("id", e.layerId),
                    r.setAttribute("mask-type", "alpha"),
                    _svgMatteSymbols.push(e);
                    var a = t.globalData.defs;
                    a.appendChild(r);
                    var s = createNS("symbol");
                    s.setAttribute("id", i),
                    this.replaceInParent(e, i),
                    s.appendChild(e.layerElement),
                    a.appendChild(s);
                    var n = createNS("use");
                    n.setAttribute("href", "#" + i),
                    r.appendChild(n),
                    e.data.hd = !1,
                    e.show()
                }
                t.setMatte(e.layerId)
            }, SVGMatte3Effect.prototype.initialize = function() {
                for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;)
                    e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]),
                    i += 1;
                this.initialized = !0
            }, SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3 * this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = 3 == i ? 0 : e,
                        a = 2 == i ? 0 : e;
                    this.feGaussianBlur.setAttribute("stdDeviation", r + " " + a);
                    var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", s)
                }
            }, TransformEffect.prototype.init = function(t) {
                this.effectsManager = t,
                this.type = effectTypes.TRANSFORM_EFFECT,
                this.matrix = new Matrix,
                this.opacity = -1,
                this._mdf = !1,
                this._opMdf = !1
            }, TransformEffect.prototype.renderFrame = function(t) {
                if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                    var e = this.effectsManager.effectElements,
                        i = e[0].p.v,
                        r = e[1].p.v,
                        a = 1 === e[2].p.v,
                        s = e[3].p.v,
                        n = a ? s : e[4].p.v,
                        o = e[5].p.v,
                        h = e[6].p.v,
                        l = e[7].p.v;
                    this.matrix.reset(),
                    this.matrix.translate(-i[0], -i[1], i[2]),
                    this.matrix.scale(.01 * n, .01 * s, 1),
                    this.matrix.rotate(-l * degToRads),
                    this.matrix.skewFromAxis(-o * degToRads, (h + 90) * degToRads),
                    this.matrix.translate(r[0], r[1], 0),
                    this._mdf = !0,
                    this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
                }
            }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
        }, module.exports = factory())
    })(lottie, lottie.exports);
    var styles$1 = r$2(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --lottie-player-toolbar-height: 35px;\n    --lottie-player-toolbar-background-color: transparent;\n    --lottie-player-toolbar-icon-color: #999;\n    --lottie-player-toolbar-icon-hover-color: #222;\n    --lottie-player-toolbar-icon-active-color: #555;\n    --lottie-player-seeker-track-color: #ccc;\n    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n    --lottie-player-seeker-display: block;\n\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .animation {\n    width: 100%;\n    height: 100%;\n    display: flex;\n  }\n  .animation.controls {\n    height: calc(100% - 35px);\n  }\n\n  .toolbar {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    background-color: var(--lottie-player-toolbar-background-color);\n    margin: 0 5px;\n    height: 35px;\n  }\n\n  .toolbar button {\n    cursor: pointer;\n    fill: var(--lottie-player-toolbar-icon-color);\n    display: flex;\n    background: none;\n    border: 0;\n    padding: 0;\n    outline: none;\n    height: 100%;\n  }\n\n  .toolbar button:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button.active {\n    fill: var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button.active:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button:focus {\n    outline: 1px dotted var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button svg {\n  }\n\n  .toolbar button.disabled svg {\n    display: none;\n  }\n\n  .seeker {\n    -webkit-appearance: none;\n    width: 95%;\n    outline: none;\n    background-color: var(--lottie-player-toolbar-background-color);\n    display: var(--lottie-player-seeker-display);\n  }\n\n  .seeker::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5px;\n  }\n  .seeker:focus::-webkit-slider-runnable-track {\n    background: #999;\n  }\n  .seeker::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-moz-range-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  .seeker::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-thumb {\n    border: 0;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker:focus::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n  }\n  .seeker:focus::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n  }\n\n  .error {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    align-items: center;\n  }\n"]))),
        LOTTIE_PLAYER_VERSION = "2.0.3",
        LOTTIE_WEB_VERSION = "^5.12.2",
        _templateObject$1,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        PlayerState,
        PlayMode,
        PlayerEvents;
    function parseSrc(t) {
        if ("object" == typeof t)
            return t;
        try {
            return JSON.parse(t)
        } catch (e) {
            return new URL(t, window.location.href).toString()
        }
    }
    function isLottie(t) {
        return ["v", "ip", "op", "layers", "fr", "w", "h"].every((e => Object.prototype.hasOwnProperty.call(t, e)))
    }
    function fromURL(t) {
        return _fromURL.apply(this, arguments)
    }
    function _fromURL() {
        return (_fromURL = _asyncToGenerator((function* (t) {
            if ("string" != typeof t)
                throw new Error("The url value must be a string");
            var e;
            try {
                var i = new URL(t),
                    r = yield fetch(i.toString());
                e = yield r.json()
            } catch (t) {
                throw new Error("An error occurred while trying to load the Lottie file from URL")
            }
            return e
        }))).apply(this, arguments)
    }
    !function(t) {
        t.Destroyed = "destroyed",
        t.Error = "error",
        t.Frozen = "frozen",
        t.Loading = "loading",
        t.Paused = "paused",
        t.Playing = "playing",
        t.Stopped = "stopped"
    }(PlayerState || (PlayerState = {})),
    function(t) {
        t.Bounce = "bounce",
        t.Normal = "normal"
    }(PlayMode || (PlayMode = {})),
    function(t) {
        t.Complete = "complete",
        t.Destroyed = "destroyed",
        t.Error = "error",
        t.Frame = "frame",
        t.Freeze = "freeze",
        t.Load = "load",
        t.Loop = "loop",
        t.Pause = "pause",
        t.Play = "play",
        t.Ready = "ready",
        t.Rendered = "rendered",
        t.Stop = "stop"
    }(PlayerEvents || (PlayerEvents = {}));
    var LottiePlayer = class  extends s{
            constructor()
            {
                super(...arguments),
                this.autoplay = !1,
                this.background = "transparent",
                this.controls = !1,
                this.currentState = PlayerState.Loading,
                this.description = "Lottie animation",
                this.direction = 1,
                this.disableCheck = !1,
                this.disableShadowDOM = !1,
                this.hover = !1,
                this.intermission = 1,
                this.loop = !1,
                this.mode = PlayMode.Normal,
                this.preserveAspectRatio = "xMidYMid meet",
                this.renderer = "svg",
                this.speed = 1,
                this._io = void 0,
                this._counter = 1
            }
            load(t)
            {
                var e = this;
                return _asyncToGenerator((function* () {
                    var i = {
                        container: e.container,
                        loop: !1,
                        autoplay: !1,
                        renderer: e.renderer,
                        rendererSettings: Object.assign({
                            preserveAspectRatio: e.preserveAspectRatio,
                            clearCanvas: !1,
                            progressiveLoad: !0,
                            hideOnTransparent: !0
                        }, e.viewBoxSize && {
                            viewBoxSize: e.viewBoxSize
                        })
                    };
                    try {
                        var r = parseSrc(t),
                            a = {},
                            s = "string" == typeof r ? "path" : "animationData";
                        e._lottie && e._lottie.destroy(),
                        e.webworkers && lottie.exports.useWebWorker(!0),
                        e._lottie = lottie.exports.loadAnimation(Object.assign(Object.assign({}, i), {
                            [s]: r
                        })),
                        e._attachEventListeners(),
                        e.disableCheck || ("path" === s ? (a = yield fromURL(r), s = "animationData") : a = r, isLottie(a) || (e.currentState = PlayerState.Error, e.dispatchEvent(new CustomEvent(PlayerEvents.Error))))
                    } catch (t) {
                        e.currentState = PlayerState.Error,
                        e.dispatchEvent(new CustomEvent(PlayerEvents.Error))
                    }
                }))()
            }
            getLottie()
            {
                return this._lottie
            }
            getVersions()
            {
                return {
                    lottieWebVersion: LOTTIE_WEB_VERSION,
                    lottiePlayerVersion: LOTTIE_PLAYER_VERSION
                }
            }
            play()
            {
                this._lottie && (this._lottie.play(), this.currentState = PlayerState.Playing, this.dispatchEvent(new CustomEvent(PlayerEvents.Play)))
            }
            pause()
            {
                this._lottie && (this._lottie.pause(), this.currentState = PlayerState.Paused, this.dispatchEvent(new CustomEvent(PlayerEvents.Pause)))
            }
            stop()
            {
                this._lottie && (this._counter = 1, this._lottie.stop(), this.currentState = PlayerState.Stopped, this.dispatchEvent(new CustomEvent(PlayerEvents.Stop)))
            }
            destroy()
            {
                this._lottie && (this._lottie.destroy(), this._lottie = null, this.currentState = PlayerState.Destroyed, this.dispatchEvent(new CustomEvent(PlayerEvents.Destroyed)), this.remove())
            }
            seek(t)
            {
                if (this._lottie) {
                    var e = /^(\d+)(%?)$/.exec(t.toString());
                    if (e) {
                        var i = "%" === e[2] ? this._lottie.totalFrames * Number(e[1]) / 100 : Number(e[1]);
                        this.seeker = i,
                        this.currentState === PlayerState.Playing ? this._lottie.goToAndPlay(i, !0) : (this._lottie.goToAndStop(i, !0), this._lottie.pause())
                    }
                }
            }
            snapshot()
            {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.shadowRoot) {
                    var e = this.shadowRoot.querySelector(".animation svg"),
                        i = (new XMLSerializer).serializeToString(e);
                    if (t) {
                        var r = document.createElement("a");
                        r.href = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(i)),
                        r.download = "download_".concat(this.seeker, ".svg"),
                        document.body.appendChild(r),
                        r.click(),
                        document.body.removeChild(r)
                    }
                    return i
                }
            }
            setSpeed()
            {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this._lottie && this._lottie.setSpeed(t)
            }
            setDirection(t)
            {
                this._lottie && this._lottie.setDirection(t)
            }
            setLooping(t)
            {
                this._lottie && (this.loop = t, this._lottie.loop = t)
            }
            togglePlay()
            {
                return this.currentState === PlayerState.Playing ? this.pause() : this.play()
            }
            toggleLooping()
            {
                this.setLooping(!this.loop)
            }
            resize()
            {
                this._lottie && this._lottie.resize()
            }
            static get styles()
            {
                return styles$1
            }
            disconnectedCallback()
            {
                this.isConnected || (this._io && (this._io.disconnect(), this._io = void 0), document.removeEventListener("visibilitychange", (() => this._onVisibilityChange())), this.destroy())
            }
            render()
            {
                var t = this.controls ? "main controls" : "main",
                    e = this.controls ? "animation controls" : "animation";
                return $(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral([' <div\n      id="animation-container"\n      class=', '\n      lang="en"\n      aria-label=', '\n      role="img"\n    >\n      <div\n        id="animation"\n        class=', '\n        style="background:', ';"\n      >\n        ', "\n      </div>\n      ", "\n    </div>"])), t, this.description, e, this.background, this.currentState === PlayerState.Error ? $(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(['<div class="error">вљ пёЏ</div>']))) : void 0, this.controls && !this.disableShadowDOM ? this.renderControls() : void 0)
            }
            createRenderRoot()
            {
                return this.disableShadowDOM && (this.style.display = "block"), this.disableShadowDOM ? this : super.createRenderRoot()
            }
            firstUpdated()
            {
                "IntersectionObserver" in window && (this._io = new IntersectionObserver((t => {
                    t[0].isIntersecting ? this.currentState === PlayerState.Frozen && this.play() : this.currentState === PlayerState.Playing && this.freeze()
                })), this._io.observe(this.container)),
                void 0 !== document.hidden && document.addEventListener("visibilitychange", (() => this._onVisibilityChange())),
                this.src && this.load(this.src),
                this.dispatchEvent(new CustomEvent(PlayerEvents.Rendered))
            }
            renderControls()
            {
                var t = this.currentState === PlayerState.Playing,
                    e = this.currentState === PlayerState.Paused,
                    i = this.currentState === PlayerState.Stopped;
                return $(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(['\n      <div\n        id="lottie-controls"\n        aria-label="lottie-animation-controls"\n        class="toolbar"\n      >\n        <button\n          id="lottie-play-button"\n          @click=', "\n          class=", '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="play-pause"\n        >\n          ', '\n        </button>\n        <button\n          id="lottie-stop-button"\n          @click=', "\n          class=", '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="stop"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path d="M6 6h12v12H6V6z" />\n          </svg>\n        </button>\n        <input\n          id="lottie-seeker-input"\n          class="seeker"\n          type="range"\n          min="0"\n          step="1"\n          max="100"\n          .value=', "\n          @input=", "\n          @mousedown=", "\n          @mouseup=", '\n          aria-valuemin="1"\n          aria-valuemax="100"\n          role="slider"\n          aria-valuenow=', '\n          tabindex="0"\n          aria-label="lottie-seek-input"\n        />\n        <button\n          id="lottie-loop-toggle"\n          @click=', "\n          class=", '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="loop-toggle"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path\n              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"\n            />\n          </svg>\n        </button>\n      </div>\n    '])), this.togglePlay, t || e ? "active" : "", $(t ? _templateObject4 || (_templateObject4 = _taggedTemplateLiteral(['<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path\n                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"\n                />\n              </svg>'])) : _templateObject5 || (_templateObject5 = _taggedTemplateLiteral(['<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />\n              </svg>']))), this.stop, i ? "active" : "", this.seeker, this._handleSeekChange, (() => {
                    this._prevState = this.currentState,
                    this.freeze()
                }), (() => {
                    this._prevState === PlayerState.Playing && this.play()
                }), this.seeker, this.toggleLooping, this.loop ? "active" : "")
            }
            _onVisibilityChange()
            {
                !0 === document.hidden && this.currentState === PlayerState.Playing ? this.freeze() : this.currentState === PlayerState.Frozen && this.play()
            }
            _handleSeekChange(t)
            {
                if (this._lottie && !isNaN(t.target.value)) {
                    var e = t.target.value / 100 * this._lottie.totalFrames;
                    this.seek(e)
                }
            }
            _attachEventListeners()
            {
                this._lottie.addEventListener("enterFrame", (() => {
                    this.seeker = this._lottie.currentFrame / this._lottie.totalFrames * 100,
                    this.dispatchEvent(new CustomEvent(PlayerEvents.Frame, {
                        detail: {
                            frame: this._lottie.currentFrame,
                            seeker: this.seeker
                        }
                    }))
                })),
                this._lottie.addEventListener("complete", (() => {
                    if (this.currentState === PlayerState.Playing) {
                        if (!this.loop || this.count && this._counter >= this.count) {
                            if (this.dispatchEvent(new CustomEvent(PlayerEvents.Complete)), this.mode !== PlayMode.Bounce)
                                return;
                            if (0 === this._lottie.currentFrame)
                                return
                        }
                        this.mode === PlayMode.Bounce ? (this.count && (this._counter += .5), setTimeout((() => {
                            this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),
                            this.currentState === PlayerState.Playing && (this._lottie.setDirection(-1 * this._lottie.playDirection), this._lottie.play())
                        }), this.intermission)) : (this.count && (this._counter += 1), window.setTimeout((() => {
                            this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),
                            this.currentState === PlayerState.Playing && (-1 === this.direction ? (this.seek("99%"), this.play()) : (this._lottie.stop(), this._lottie.play()))
                        }), this.intermission))
                    } else
                        this.dispatchEvent(new CustomEvent(PlayerEvents.Complete))
                })),
                this._lottie.addEventListener("DOMLoaded", (() => {
                    this.setSpeed(this.speed),
                    this.setDirection(this.direction),
                    this.autoplay && (-1 === this.direction && this.seek("100%"), this.play()),
                    this.dispatchEvent(new CustomEvent(PlayerEvents.Ready))
                })),
                this._lottie.addEventListener("data_ready", (() => {
                    this.dispatchEvent(new CustomEvent(PlayerEvents.Load))
                })),
                this._lottie.addEventListener("data_failed", (() => {
                    this.currentState = PlayerState.Error,
                    this.dispatchEvent(new CustomEvent(PlayerEvents.Error))
                })),
                this.container.addEventListener("mouseenter", (() => {
                    this.hover && this.currentState !== PlayerState.Playing && this.play()
                })),
                this.container.addEventListener("mouseleave", (() => {
                    this.hover && this.currentState === PlayerState.Playing && this.stop()
                }))
            }
            freeze()
            {
                this._lottie && (this._lottie.pause(), this.currentState = PlayerState.Frozen, this.dispatchEvent(new CustomEvent(PlayerEvents.Freeze)))
            }
        }
        ,
        _templateObject;
    __decorate([e$3({
        type: Boolean
    })], LottiePlayer.prototype, "autoplay", void 0),
    __decorate([e$3({
        type: String,
        reflect: !0
    })], LottiePlayer.prototype, "background", void 0),
    __decorate([e$3({
        type: Boolean
    })], LottiePlayer.prototype, "controls", void 0),
    __decorate([e$3({
        type: Number
    })], LottiePlayer.prototype, "count", void 0),
    __decorate([e$3({
        type: String
    })], LottiePlayer.prototype, "currentState", void 0),
    __decorate([e$3({
        type: String
    })], LottiePlayer.prototype, "description", void 0),
    __decorate([e$3({
        type: Number
    })], LottiePlayer.prototype, "direction", void 0),
    __decorate([e$3({
        type: Boolean
    })], LottiePlayer.prototype, "disableCheck", void 0),
    __decorate([e$3({
        type: Boolean
    })], LottiePlayer.prototype, "disableShadowDOM", void 0),
    __decorate([e$3({
        type: Boolean
    })], LottiePlayer.prototype, "hover", void 0),
    __decorate([e$3()], LottiePlayer.prototype, "intermission", void 0),
    __decorate([e$3({
        type: Boolean,
        reflect: !0
    })], LottiePlayer.prototype, "loop", void 0),
    __decorate([e$3()], LottiePlayer.prototype, "mode", void 0),
    __decorate([e$3({
        type: String
    })], LottiePlayer.prototype, "preserveAspectRatio", void 0),
    __decorate([e$3({
        type: String
    })], LottiePlayer.prototype, "renderer", void 0),
    __decorate([e$3({
        type: String
    })], LottiePlayer.prototype, "viewBoxSize", void 0),
    __decorate([e$3()], LottiePlayer.prototype, "seeker", void 0),
    __decorate([e$3({
        type: Number
    })], LottiePlayer.prototype, "speed", void 0),
    __decorate([e$3({
        type: String
    })], LottiePlayer.prototype, "src", void 0),
    __decorate([e$3({
        type: Boolean
    })], LottiePlayer.prototype, "webworkers", void 0),
    __decorate([i$2(".animation")], LottiePlayer.prototype, "container", void 0),
    LottiePlayer = __decorate([n$5("lottie-player")], LottiePlayer),
    /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
    console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");
    var styles = r$2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  :host {\n    width: 512px;\n    height: 512px;\n  }\n"])), styles$1);
    function fetchPath(t) {
        return _fetchPath.apply(this, arguments)
    }
    function _fetchPath() {
        return _fetchPath = _asyncToGenerator((function* (t) {
            return new Promise(((e, i) => {
                var r = new XMLHttpRequest;
                r.open("GET", t, !0),
                r.responseType = "arraybuffer",
                r.send(),
                r.onreadystatechange = function() {
                    if (4 == r.readyState && 200 == r.status)
                        try {
                            var t = String.fromCharCode.apply(null, new Uint8Array(r.response));
                            return e(JSON.parse(t))
                        } catch (t) {
                            try {
                                var a = inflate_1(r.response, {
                                    to: "string"
                                });
                                return e(JSON.parse(a))
                            } catch (t) {
                                return i(t)
                            }
                        }
                }
            }))
        })), _fetchPath.apply(this, arguments)
    }
    exports.TGSPlayer = class  extends LottiePlayer{
        constructor()
        {
            super(...arguments),
            this.strict = !0
        }
        load(t)
        {
            var e = () => super.load,
                i = this;
            return _asyncToGenerator((function* () {
                var r = parseSrc(t);
                if ("path" === ("string" == typeof r ? "path" : "animationData") && (r = yield fetchPath(r)), !0 === i.strict) {
                    var a = i.formatCheck(r);
                    0 !== a.length && i.dispatchEvent(new CustomEvent(PlayerEvents.Error, {
                        detail: a
                    }))
                }
                return delete r.tgs, e().call(i, r)
            }))()
        }
        static get styles()
        {
            return styles
        }
        formatCheck(t)
        {
            var e = [];
            return "tgs" in t && 1 === t.tgs || e.push("Must be marked as a TGS Lottie variant"), (t.op - t.ip) / t.fr > 3 && e.push("Longer than 3 seconds"), 512 == t.w && 512 == t.h || e.push("Dimensions should be exactly 512pxx512px"), null != t.ddd && 0 != t.ddd && e.push("Must not have 3D layers"), "markers" in t && e.push("Must not have markers"), null != t.assets && t.assets.forEach((t => {
                e.concat(this.checkLayer(t.layers))
            })), t.layers.forEach((t => {
                e.concat(this.checkLayer(t))
            })), e
        }
        checkLayer(t)
        {
            var e = [];
            return null != t.ddd && 0 != t.ddd && e.push("Composition should not include any 3D Layers"), null != t.sr && 1 != t.sr && e.push("Composition should not include any Time Stretching"), null != t.tm && e.push("Composition should not include any Time Remapping"), 1 === t.ty && e.push("Composition should not include any Solids"), 2 === t.ty && e.push("Composition should not include any Images"), 5 === t.ty && e.push("Composition should not include any Texts"), !0 !== t.hasMask && null == t.masksProperties || e.push("Composition should not include any Masks"), null != t.tt && e.push("Composition should not include any Mattes"), 1 === t.ao && e.push("Composition should not include any Auto-Oriented Layers"), null != t.ef && e.push("Composition should not include any Layer Effects"), e.concat(this.checkItems(t.shapes, !0)), e
        }
        checkItems(t, e)
        {
            var i = [];
            return null != t && t.forEach((t => {
                "rp" == t.ty && i.push("Composition should not include any Repeaters"),
                "sr" == t.ty && i.push("Composition should not include any Star Shapes"),
                "mm" == t.ty && i.push("Composition should not include any Merge Paths"),
                "gs" == t.ty && i.push("Composition should not include any Gradient Strokes"),
                !0 === e && i.concat(this.checkItems(t.it, !1))
            })), i
        }
    }
    ,
    __decorate([e$3({
        type: Boolean
    })], exports.TGSPlayer.prototype, "strict", void 0),
    exports.TGSPlayer = __decorate([n$5("tgs-player")], exports.TGSPlayer),
    Object.defineProperty(exports, "__esModule", {
        value: !0
    })
}));
//# sourceMappingURL=tgs-player.js.map
