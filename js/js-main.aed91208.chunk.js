(this.webpackJsonpagency = this.webpackJsonpagency || []).push([
    [0], {
        10: function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var C_Users_mirza_Desktop_react_agencyNew_trafficdigital_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3),
                C_Users_mirza_Desktop_react_agencyNew_trafficdigital_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4),
                C_Users_mirza_Desktop_react_agencyNew_trafficdigital_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6),
                C_Users_mirza_Desktop_react_agencyNew_trafficdigital_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),
                react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2),
                react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
                react_google_tag_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89),
                react_google_tag_manager__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(react_google_tag_manager__WEBPACK_IMPORTED_MODULE_6__),
                GoogleTagManager = function(_React$Component) {
                    Object(C_Users_mirza_Desktop_react_agencyNew_trafficdigital_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(GoogleTagManager, _React$Component);
                    var _super = Object(C_Users_mirza_Desktop_react_agencyNew_trafficdigital_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(GoogleTagManager);

                    function GoogleTagManager() {
                        return Object(C_Users_mirza_Desktop_react_agencyNew_trafficdigital_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this, GoogleTagManager), _super.apply(this, arguments)
                    }
                    return Object(C_Users_mirza_Desktop_react_agencyNew_trafficdigital_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(GoogleTagManager, [{
                        key: "componentDidMount",
                        value: function componentDidMount() {
                            var dataLayerName = this.props.dataLayerName || "dataLayer",
                                scriptId = this.props.scriptId || "react-google-tag-manager-gtm";
                            if (!window[dataLayerName]) {
                                var gtmScriptNode = document.getElementById(scriptId);
                                eval(gtmScriptNode.textContent)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = react_google_tag_manager__WEBPACK_IMPORTED_MODULE_6___default()({
                                id: this.props.gtmId,
                                dataLayerName: this.props.dataLayerName || "dataLayer",
                                additionalEvents: this.props.additionalEvents || {},
                                previewVariables: this.props.previewVariables || !1
                            });
                            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                                children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                                    children: e.noScriptAsReact()
                                }), Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                                    id: this.props.scriptId || "react-google-tag-manager-gtm",
                                    children: e.scriptAsReact()
                                })]
                            })
                        }
                    }]), GoogleTagManager
                }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
            __webpack_exports__.a = GoogleTagManager
        },
        126: function(e, t, s) {},
        194: function(e, t, s) {},
        195: function(e, t, s) {
            "use strict";
            s.r(t);
            var c = s(0),
                a = s(2),
                n = s.n(a),
                i = s(85),
                l = s.n(i),
                o = (s(98), s(3)),
                r = s(4),
                d = s(6),
                j = s(5),
                m = s(8),
                h = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/" : "/"
                            }) : Object(c.jsxs)("div", {
                                className: "col-12",
                                id: "index-video",
                                children: [Object(c.jsx)("video", {
                                    autoPlay: !0,
                                    muted: !0,
                                    id: "IntroVideo",
                                    children: Object(c.jsx)("source", {
                                        src: "assets/introtraffic.mp4",
                                        type: "video/mp4"
                                    })
                                }), setTimeout((function() {
                                    return e.props.history.push("/en")
                                }), 6e3)]
                            })
                        }
                    }]), s
                }(n.a.Component),
                b = s(7),
                p = s.n(b),
                u = s(9),
                v = s(1),
                x = function() {
                    var e = Object(m.g)();
                    return Object(c.jsxs)("header", {
                        id: "myDIV",
                        children: ["/en" === e.location.pathname ? Object(c.jsx)("a", {
                            href: "/en#home",
                            className: "brand-logo"
                        }) : Object(c.jsx)(v.b, {
                            to: "/en",
                            className: "brand-logo"
                        }), Object(c.jsxs)("ul", {
                            className: "Header-Nav",
                            children: [Object(c.jsx)("li", {
                                className: "header-getstarted",
                                children: Object(c.jsx)(v.b, {
                                    to: "/en/contact-us",
                                    children: "Get started"
                                })
                            }), Object(c.jsx)("li", {
                                className: "header-nav",
                                children: Object(c.jsx)("button", {})
                            })]
                        })]
                    })
                },
                O = function() {
                    return Object(c.jsxs)("div", {
                        className: "section footer-fullpage",
                        "data-pai": "footer",
                        id: "footerx",
                        children: [Object(c.jsxs)("div", {
                            className: "col-12 p-0 row m-0 align-content-center h-100 FooterContent",
                            children: [Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 mb-4 justify-content-center footerGetInTouch marquee",
                                children: Object(c.jsxs)("div", {
                                    className: "col-12 p-0 row m-0 Marquee-p",
                                    children: [Object(c.jsx)("span", {
                                        className: "gettouch1",
                                        children: "Let\u2019s Create Together"
                                    }), Object(c.jsx)("i", {}), Object(c.jsx)("span", {
                                        className: "gettouch2",
                                        children: Object(c.jsx)(v.b, {
                                            to: "/en/contact-us",
                                            children: "Get in touch"
                                        })
                                    })]
                                })
                            }), Object(c.jsx)("div", {
                                className: "col-12 p-0 border-top footeraddresscountry",
                                children: Object(c.jsx)("div", {
                                    className: "col-12 p-0 row m-0 justify-content-center",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-11 pl-5 row m-0 p-0 justify-content-between align-content-center",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-lg-3 Country-UAE",
                                            children: [Object(c.jsx)("div", {
                                                className: "country",
                                                children: "UAE"
                                            }), Object(c.jsx)("div", {
                                                className: "telephone",
                                                children: Object(c.jsx)("a", {
                                                    href: "tel:+971044542230",
                                                    children: "+971 (0)4 454 2230"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 address",
                                                children: Object(c.jsxs)("a", {
                                                    href: "https://goo.gl/maps/9BpePWbynzXGVMdFA",
                                                    target: "_blank",
                                                    children: [Object(c.jsx)("p", {
                                                        children: "Mazaya Business"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Avenue, Tower AA1 JLT,"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Dubai, UAE"
                                                    })]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-lg-3 Country-SRA",
                                            children: [Object(c.jsx)("div", {
                                                className: "country",
                                                children: "Saudi\xa0Arabia"
                                            }), Object(c.jsx)("div", {
                                                className: "telephone",
                                                children: Object(c.jsx)("a", {
                                                    href: "tel:+966 (1)1 511 7692",
                                                    children: "+966 (1)1 511 7692"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 address",
                                                children: Object(c.jsxs)("a", {
                                                    href: "https://goo.gl/maps/1g49g3PXDJY5JRJT9",
                                                    target: "_blank",
                                                    children: [Object(c.jsx)("p", {
                                                        children: "Eastern Ring Branch"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Rd, Ghirnatah, Riyadh"
                                                    }), Object(c.jsx)("p", {
                                                        children: "13241, KSA"
                                                    })]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-lg-3 Country-PK",
                                            children: [Object(c.jsx)("div", {
                                                className: "country",
                                                children: "Pakistan"
                                            }), Object(c.jsx)("div", {
                                                className: "telephone",
                                                children: Object(c.jsx)("a", {
                                                    href: "tel:+92 (2)1 3499 2028",
                                                    children: "+92 (2)1 3499 2028"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 address",
                                                children: Object(c.jsxs)("a", {
                                                    href: "https://goo.gl/maps/Pnm3MdA2SQrE6hMSA",
                                                    target: "_blank",
                                                    children: [Object(c.jsx)("p", {
                                                        children: "50-J, Shahrah-e-Faisal"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Rd, Block 6 PECHS,"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Karachi, Pakistan"
                                                    })]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-lg-3 Country-Egypt",
                                            children: [Object(c.jsx)("div", {
                                                className: "country",
                                                children: "Egypt"
                                            }), Object(c.jsx)("div", {
                                                className: "telephone",
                                                children: Object(c.jsx)("a", {
                                                    href: "tel:+971 (0)4 454 2230",
                                                    children: "+971 (0)4 454 2230"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 address",
                                                children: Object(c.jsxs)("a", {
                                                    href: "https://goo.gl/maps/UDrtnjHjscmGC8HVA",
                                                    target: "_blank",
                                                    children: [Object(c.jsx)("p", {
                                                        children: "10, Street 22, Maadi,"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Cairo, Egypt"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })]
                        }), Object(c.jsx)("div", {
                            className: "col-12 p-0 websiteFooter border-top",
                            children: Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 justify-content-center",
                                children: Object(c.jsxs)("div", {
                                    className: "col-10 row m-0 p-0 pt-5 pb-5 footerCopy",
                                    children: [Object(c.jsx)("div", {
                                        className: "col-md-6 p-0 footercopyright",
                                        children: Object(c.jsx)("div", {
                                            className: "col-12 p-0",
                                            children: "\xa9 The Collective Group Ltd 2020. UAE - Saudi Arabia - Pakistan - Egypt"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "col-md-6 p-0 row m-0 justify-content-end",
                                        children: [Object(c.jsx)("a", {
                                            href: "https://www.facebook.com/TrafficDigitalMEA/",
                                            target: "_Blank",
                                            className: "footer-fb"
                                        }), Object(c.jsx)("a", {
                                            href: "https://twitter.com/trafficdigital_?lang=en",
                                            target: "_Blank",
                                            className: "footer-tw"
                                        }), Object(c.jsx)("a", {
                                            href: "https://www.linkedin.com/company/traffic-digital/",
                                            target: "_Blank",
                                            className: "footer-in"
                                        }), Object(c.jsx)("a", {
                                            href: "https://www.instagram.com/trafficdigital/",
                                            target: "_Blank",
                                            className: "footer-ins"
                                        }), Object(c.jsx)("a", {
                                            href: "https://www.youtube.com/c/TrafficDigital",
                                            target: "_Blank",
                                            className: "footer-yt"
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                f = (s(45), Object(m.h)((function(e) {
                    Object(m.g)();
                    return Object(c.jsx)("div", {
                        className: "menuUp",
                        children: Object(c.jsx)("div", {
                            className: "col-12 p-0 menuoverbg",
                            children: Object(c.jsxs)("header", {
                                children: [Object(c.jsx)(v.b, {
                                    to: "/en/",
                                    className: "brand-logo"
                                }), Object(c.jsxs)("ul", {
                                    className: "Header-Nav",
                                    children: [Object(c.jsx)("li", {
                                        className: "nav-item header-getstarted",
                                        children: Object(c.jsx)(v.b, {
                                            to: "/en/contact-us",
                                            children: "Get started"
                                        })
                                    }), Object(c.jsx)("li", {
                                        class: "nav-item header-nav CloseMenuIcon",
                                        children: Object(c.jsx)("button", {
                                            class: "closing"
                                        })
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "MenuCenter col-12 row p-0 m-0 justify-content-center align-content-center",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-md-5 p-0",
                                        children: [Object(c.jsx)("div", {
                                            className: "col-12 p-0 MenuUp-menu mt-5",
                                            children: "Menu"
                                        }), Object(c.jsx)("div", {
                                            className: "col-12 p-0 pt-3 menuULBD",
                                            children: Object(c.jsxs)("ul", {
                                                children: [Object(c.jsxs)("li", {
                                                    className: "MenuLinkOver",
                                                    id: "about",
                                                    children: [Object(c.jsx)("span", {
                                                        className: "menu-link",
                                                        onClick: function() {
                                                            return e.history.push("/en/about-us")
                                                        },
                                                        children: "About us"
                                                    }), Object(c.jsx)("div", {
                                                        className: "overMenudescription",
                                                        children: "Where Art Meets Science"
                                                    })]
                                                }), Object(c.jsxs)("li", {
                                                    className: "MenuLinkOver",
                                                    id: "services",
                                                    children: [Object(c.jsx)("span", {
                                                        className: "menu-link",
                                                        onClick: function() {
                                                            return e.history.push("/en/services")
                                                        },
                                                        children: "Services"
                                                    }), Object(c.jsx)("div", {
                                                        className: "overMenudescription",
                                                        children: "Here's What We Offer"
                                                    })]
                                                }), Object(c.jsxs)("li", {
                                                    className: "MenuLinkOver",
                                                    id: "work",
                                                    children: [Object(c.jsx)("span", {
                                                        className: "menu-link",
                                                        onClick: function() {
                                                            return e.history.push("/en/case-studies")
                                                        },
                                                        children: "Work"
                                                    }), Object(c.jsx)("div", {
                                                        className: "overMenudescription",
                                                        children: "Take a Peek at What We've Achieved"
                                                    })]
                                                }), Object(c.jsxs)("li", {
                                                    className: "MenuLinkOver",
                                                    id: "contact",
                                                    children: [Object(c.jsx)("span", {
                                                        className: "menu-link",
                                                        onClick: function() {
                                                            return e.history.push("/en/contact-us")
                                                        },
                                                        children: "Contact"
                                                    }), Object(c.jsx)("div", {
                                                        className: "overMenudescription",
                                                        children: "Get In Touch"
                                                    })]
                                                })]
                                            })
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 pt-4 menu-social",
                                            children: [Object(c.jsx)("a", {
                                                href: "https://www.facebook.com/TrafficDigitalMEA/",
                                                target: "_Blank",
                                                className: "fb-icon"
                                            }), Object(c.jsx)("a", {
                                                href: "https://twitter.com/trafficdigital_?lang=en",
                                                target: "_Blank",
                                                className: "tw-icon"
                                            }), Object(c.jsx)("a", {
                                                href: "https://www.linkedin.com/company/traffic-digital/",
                                                target: "_Blank",
                                                className: "in-icon"
                                            }), Object(c.jsx)("a", {
                                                href: "https://www.instagram.com/trafficdigital/",
                                                target: "_Blank",
                                                className: "ins-icon"
                                            }), Object(c.jsx)("a", {
                                                href: "https://www.youtube.com/c/TrafficDigital",
                                                target: "_Blank",
                                                className: "yt-icon"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }))),
                w = s.p + "static/media/loader.517cb135.gif",
                y = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        return Object(o.a)(this, s), t.call(this, e)
                    }
                    return Object(r.a)(s, [{
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                style: {
                                    zIndex: 1,
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    textAlign: "center"
                                },
                                children: Object(c.jsx)("img", {
                                    src: w,
                                    alt: "loading..."
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                g = s(12),
                N = s(10),
                k = s(35),
                S = k.a({
                    space: "jaupjj8wiq63",
                    accessToken: "5IukFe1q6_HYdXYA_zHFWecVGEBWS_h1b5a2Mu7tfXc"
                });

            function _() {
                var e = document.createElement("script");
                e.src = "".concat("", "/js/js-fullpage.js"), e.async = !1, document.body.appendChild(e);
                var t = document.createElement("script");
                t.src = "".concat("", "/js/js-support.js"), t.async = !1, document.body.appendChild(t);
                var s = document.createElement("script");
                s.src = "".concat("", "/js/js-media-player.js"), s.async = !1, document.body.appendChild(s);
                var c = document.createElement("script");
                c.src = "".concat("", "/js/js-video.js"), c.async = !1, document.body.appendChild(c)
            }
            var C = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/removecss.js"), t.async = !1, _(), this.setState({
                                                isLoading: !1
                                            }), e.prev = 6, e.next = 9, S.getEntries({
                                                content_type: "homePageSecondScreen"
                                            });
                                        case 9:
                                            s = e.sent, c = s.items[0].fields.heading1.content[0].content[0].value, a = s.items[0].fields.subHeading.content[0].content[0].value, this.setState({
                                                heading: c,
                                                subheading: a
                                            }), e.next = 18;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(6), console.log(e.t0);
                                        case 18:
                                            return e.prev = 18, e.next = 21, S.getEntries({
                                                content_type: "homePageThirdScreen"
                                            });
                                        case 21:
                                            n = e.sent, i = n.items[0].fields.heading.content[0].content[0].value, l = n.items[0].fields.subHeading.content[0].content[0].value, this.setState({
                                                secondSectionHeading: i,
                                                secondSectionPara: l
                                            }), e.next = 30;
                                            break;
                                        case 27:
                                            e.prev = 27, e.t1 = e.catch(18), console.log(e.t1);
                                        case 30:
                                            return e.prev = 30, e.next = 33, S.getEntries({
                                                content_type: "homePageFourthScreen"
                                            });
                                        case 33:
                                            o = e.sent, r = o.items[0].fields.heading.content[0].content[0].value, d = o.items[0].fields.subheading.content[0].content[0].value, this.setState({
                                                forthSectionHeading: r,
                                                forthSectionPara: d
                                            }), e.next = 42;
                                            break;
                                        case 39:
                                            e.prev = 39, e.t2 = e.catch(30), console.log(e.t2);
                                        case 42:
                                            return e.prev = 42, e.next = 45, S.getEntries({
                                                content_type: "homePageFifthScreen"
                                            });
                                        case 45:
                                            j = e.sent, console.log(j), m = j.items[0].fields.heading.content[0].content[0].value, h = j.items[0].fields.subheading.content[0].content[0].value, this.setState({
                                                fifthSectionHeading: m,
                                                fifthSectionPara: h
                                            }), e.next = 55;
                                            break;
                                        case 52:
                                            e.prev = 52, e.t3 = e.catch(42), console.log(e.t3);
                                        case 55:
                                            return e.prev = 55, e.next = 58, S.getEntries({
                                                content_type: "homePageSixScreen"
                                            });
                                        case 58:
                                            b = e.sent, console.log(b), u = b.items[0].fields.heading.content[0].content[0].value, v = b.items[0].fields.subheading.content[0].content[0].value, this.setState({
                                                sixSectionHeading: u,
                                                sixSectionPara: v
                                            }), e.next = 68;
                                            break;
                                        case 65:
                                            e.prev = 65, e.t4 = e.catch(55), console.log(e.t4);
                                        case 68:
                                            return e.prev = 68, e.next = 71, S.getEntries({
                                                content_type: "homePageSevenScreen"
                                            });
                                        case 71:
                                            x = e.sent, console.log(x), O = x.items[0].fields.heading.content[0].content[0].value, f = x.items[0].fields.subheading.content[0].content[0].value, w = x.items[0].fields.link.content[0].content[0].value, this.setState({
                                                sevenSectionHeading: O,
                                                sevenSectionPara: f,
                                                sevenSectionLink: w
                                            }), e.next = 82;
                                            break;
                                        case 79:
                                            e.prev = 79, e.t5 = e.catch(68), console.log(e.t5);
                                        case 82:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [6, 15],
                                    [18, 27],
                                    [30, 39],
                                    [42, 52],
                                    [55, 65],
                                    [68, 79]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/" : "/en/"
                            }) : this.state.isLoading ? Object(c.jsx)(y, {}) : Object(c.jsxs)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "homepage",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "Home"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/m/en"
                                    }), Object(c.jsx)("meta", {
                                        name: "Traffic Digital: Full-service Digital Marketing Consultancy",
                                        content: "Basic example"
                                    })]
                                }), Object(c.jsx)(x, {}), Object(c.jsx)(f, {}), Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        children: Object(c.jsx)("source", {
                                            src: "assets/showreel.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section home-fullpage curs vh-100",
                                        "data-pai": "home",
                                        id: "section0",
                                        children: [Object(c.jsx)("figure", {
                                            id: "mouse-pointer",
                                            style: {
                                                top: "271px",
                                                left: "818px"
                                            }
                                        }), Object(c.jsx)("div", {
                                            className: "Playbtn-box",
                                            children: Object(c.jsxs)(v.b, {
                                                to: "/en/homeplayer",
                                                children: [Object(c.jsx)("i", {}), Object(c.jsx)("label", {})]
                                            })
                                        }), Object(c.jsx)("div", {
                                            "data-menuanchor": "about",
                                            className: "scroll-explore",
                                            children: Object(c.jsxs)("a", {
                                                href: "/en#about",
                                                className: "whitemouse",
                                                children: [Object(c.jsxs)("svg", {
                                                    viewBox: "0 0 247 390",
                                                    version: "1.1",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                    style: {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeMiterlimit: "1.5"
                                                    },
                                                    children: [Object(c.jsx)("path", {
                                                        id: "wheel",
                                                        d: "M123.359,79.775l0,72.843",
                                                        style: {
                                                            fill: "none",
                                                            stroke: "#fff",
                                                            strokeWidth: "20px"
                                                        }
                                                    }), Object(c.jsx)("path", {
                                                        id: "mouse",
                                                        d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                        style: {
                                                            fill: "none",
                                                            stroke: "#fff",
                                                            strokeWidth: "20px"
                                                        }
                                                    })]
                                                }), "Scroll to explore"]
                                            })
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section about-fullpage row m-0 align-content-center vh-100",
                                        "data-pai": "about",
                                        id: "section1",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0",
                                            children: [Object(c.jsxs)("div", {
                                                className: "row m-0 align-content-center aboutscrollpage",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 m-0 row",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "aboutyears",
                                                        children: [Object(c.jsx)("span", {
                                                            className: "liqleft-1-5",
                                                            children: "2010"
                                                        }), Object(c.jsx)("i", {
                                                            className: "liqleft-2"
                                                        }), Object(c.jsx)("span", {
                                                            className: "liqleft-2-5",
                                                            children: "2020"
                                                        })]
                                                    })
                                                }), Object(c.jsxs)("div", {
                                                    className: "abouthometext",
                                                    children: [Object(c.jsx)("h1", {
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.heading)
                                                        })
                                                    }), Object(c.jsx)("p", {
                                                        className: "col p-0 mt-4 mb-4",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.subheading)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: "/en/about-us",
                                                            className: "Pagelearnbtn liqright-3",
                                                            children: "Learn more"
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "aboutimagescrollpage"
                                            })]
                                        }), Object(c.jsx)("div", {
                                            className: "breadcrumbs text-blue",
                                            children: "About Us"
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section Slider-fullpage",
                                        "data-pai": "unicef",
                                        id: "section2",
                                        children: Object(c.jsxs)("div", {
                                            className: "unicep-fullpage",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                style: {
                                                    height: "100vh"
                                                },
                                                children: [Object(c.jsx)("p", {
                                                    className: "col-12 m-0 text-center pagetext-space",
                                                    children: "Recent work"
                                                }), Object(c.jsx)("div", {
                                                    children: Object(c.jsxs)("h1", {
                                                        className: "row m-0 col",
                                                        style: {
                                                            paddingLeft: "10vw"
                                                        },
                                                        children: [this.state.secondSectionHeading, Object(c.jsx)("p", {
                                                            className: "slider-p",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionPara)
                                                            })
                                                        })]
                                                    })
                                                }), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0  justify-content-center",
                                                    children: Object(c.jsx)(v.b, {
                                                        className: "playvideo-btn buttonanimation",
                                                        to: {
                                                            pathname: "/en/player/unicef",
                                                            state: {
                                                                name: "Unicef",
                                                                video: "assets/unicef.mp4",
                                                                backLink: "/en/#unicef"
                                                            }
                                                        },
                                                        children: "Play video"
                                                    })
                                                })]
                                            }), Object(c.jsxs)("div", {
                                                className: "SliderNumber slidernum",
                                                children: [Object(c.jsx)("i", {
                                                    children: "1"
                                                }), " / 4"]
                                            }), Object(c.jsxs)("div", {
                                                className: "breadcrumbs sliderbread text-white",
                                                children: [Object(c.jsx)("b", {
                                                    className: "text-gray",
                                                    children: "Case\xa0\xa0/\xa0\xa0"
                                                }), "unicef"]
                                            })]
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section Slider-fullpage honda-fullpage",
                                        "data-pai": "honda",
                                        id: "section2",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                            style: {
                                                height: "100vh"
                                            },
                                            children: [Object(c.jsx)("p", {
                                                className: "col-12 m-0 text-center pagetext-space",
                                                children: "Recent work"
                                            }), Object(c.jsxs)("h1", {
                                                className: "row m-0",
                                                style: {
                                                    paddingLeft: "8vw"
                                                },
                                                children: [this.state.forthSectionHeading, Object(c.jsx)("p", {
                                                    className: "slider-p",
                                                    children: Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: e(this.state.forthSectionPara)
                                                    })
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0  justify-content-center",
                                                children: Object(c.jsx)(v.b, {
                                                    className: "playvideo-btn buttonanimation",
                                                    to: {
                                                        pathname: "/en/player/honda",
                                                        state: {
                                                            name: "Honda",
                                                            video: "assets/honda.mp4",
                                                            backLink: "/en/#honda"
                                                        }
                                                    },
                                                    children: "Play video"
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "SliderNumber slidernum",
                                            children: [Object(c.jsx)("i", {
                                                children: "2"
                                            }), " / 4"]
                                        }), Object(c.jsxs)("div", {
                                            className: "breadcrumbs sliderbread text-white",
                                            children: [Object(c.jsx)("b", {
                                                className: "text-gray",
                                                children: "Case\xa0\xa0/\xa0\xa0"
                                            }), "Honda"]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section Slider-fullpage dpworld-fullpage",
                                        "data-pai": "dpworld",
                                        id: "section2",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                            style: {
                                                height: "100vh"
                                            },
                                            children: [Object(c.jsx)("p", {
                                                className: "col-12 m-0 text-center pagetext-space",
                                                children: "Recent work"
                                            }), Object(c.jsxs)("h1", {
                                                className: "row m-0",
                                                style: {
                                                    paddingLeft: "10vw"
                                                },
                                                children: [Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: e(this.state.fifthSectionHeading)
                                                }), Object(c.jsx)("p", {
                                                    className: "slider-p",
                                                    children: Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: e(this.state.fifthSectionPara)
                                                    })
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0  justify-content-center",
                                                children: Object(c.jsx)(v.b, {
                                                    className: "playvideo-btn buttonanimation",
                                                    to: {
                                                        pathname: "/en/player/dpworld",
                                                        state: {
                                                            name: "DP World",
                                                            video: "assets/dpworld.mp4",
                                                            backLink: "/en/#dpworld"
                                                        }
                                                    },
                                                    children: "Play video"
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "SliderNumber slidernum",
                                            children: [Object(c.jsx)("i", {
                                                children: "3"
                                            }), " / 4"]
                                        }), Object(c.jsxs)("div", {
                                            className: "breadcrumbs sliderbread text-white",
                                            children: [Object(c.jsx)("b", {
                                                className: "text-gray",
                                                children: "Case\xa0\xa0/\xa0\xa0"
                                            }), "DP World"]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section Slider-fullpage rexona-fullpage",
                                        "data-pai": "rexona",
                                        id: "section2",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                            style: {
                                                height: "100vh"
                                            },
                                            children: [Object(c.jsx)("p", {
                                                className: "col-12 m-0 text-center pagetext-space",
                                                children: "Recent work"
                                            }), Object(c.jsxs)("h1", {
                                                className: "row m-0",
                                                style: {
                                                    paddingLeft: "8vw"
                                                },
                                                children: [this.state.sixSectionHeading, Object(c.jsx)("p", {
                                                    className: "slider-p",
                                                    children: Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: e(this.state.sixSectionPara)
                                                    })
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0  justify-content-center",
                                                children: Object(c.jsx)(v.b, {
                                                    className: "playvideo-btn buttonanimation",
                                                    to: {
                                                        pathname: "/en/player/rexona",
                                                        state: {
                                                            name: "Rexona",
                                                            video: "assets/rexona.mp4",
                                                            backLink: "/en/#rexona"
                                                        }
                                                    },
                                                    children: "Play video"
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "SliderNumber slidernum",
                                            children: [Object(c.jsx)("i", {
                                                children: "4"
                                            }), " / 4"]
                                        }), Object(c.jsxs)("div", {
                                            className: "breadcrumbs sliderbread text-white",
                                            children: [Object(c.jsx)("b", {
                                                className: "text-gray",
                                                children: "Case\xa0\xa0/\xa0\xa0"
                                            }), "Rexona"]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section careers-fullpage",
                                        "data-pai": "careers",
                                        id: "section3",
                                        children: [Object(c.jsx)("div", {
                                            className: "career-pinkcircle row m-0 justify-content-center align-content-center",
                                            children: Object(c.jsxs)("div", {
                                                className: "careerpink-content text-center",
                                                children: [Object(c.jsx)("h1", {
                                                    style: {
                                                        lineHeight: .2
                                                    },
                                                    children: this.state.sevenSectionHeading
                                                }), Object(c.jsxs)("p", {
                                                    children: [this.state.sevenSectionPara, " ", Object(c.jsx)("br", {}), Object(c.jsx)("br", {}), " Email your resume to:", Object(c.jsx)("br", {}), Object(c.jsx)("a", {
                                                        href: "mailto:careers@wewanttraffic.com",
                                                        children: Object(c.jsx)("strong", {
                                                            children: this.state.sevenSectionLink
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), Object(c.jsx)("div", {
                                            className: "career-greencircle"
                                        }), Object(c.jsx)("div", {
                                            className: "breadcrumbs text-blue",
                                            children: "Careers"
                                        })]
                                    }), Object(c.jsx)(O, {})]
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                M = (s(126), function() {
                    return Object(c.jsxs)("div", {
                        className: "section footer-fullpage",
                        "data-pai": "footer",
                        id: "footerx",
                        children: [Object(c.jsx)(x, {}), Object(c.jsx)(f, {}), Object(c.jsxs)("div", {
                            className: "col-12 p-0 row m-0 align-content-center h-100 FooterContent",
                            children: [Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 mb-4 justify-content-center footerGetInTouch marquee",
                                children: Object(c.jsxs)("div", {
                                    className: "col-12 p-0 row m-0 Marquee-p",
                                    children: [Object(c.jsx)("span", {
                                        className: "gettouch1",
                                        children: "Let\u2019s Create Together"
                                    }), Object(c.jsx)("i", {}), Object(c.jsx)("span", {
                                        className: "gettouch2",
                                        children: Object(c.jsx)(v.b, {
                                            to: "/en/contact-us",
                                            children: "Get in touch"
                                        })
                                    })]
                                })
                            }), Object(c.jsx)("div", {
                                className: "col-12 p-0 border-top footeraddresscountry",
                                children: Object(c.jsx)("div", {
                                    className: "col-12 p-0 row m-0 justify-content-center",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-11 pl-5 row m-0 p-0 justify-content-between align-content-center",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-lg-3 Country-UAE",
                                            children: [Object(c.jsx)("div", {
                                                className: "country",
                                                children: "UAE"
                                            }), Object(c.jsx)("div", {
                                                className: "telephone",
                                                children: Object(c.jsx)("a", {
                                                    href: "tel:+971044542230",
                                                    children: "+971 (0)4 454 2230"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 address",
                                                children: Object(c.jsxs)("a", {
                                                    href: "https://goo.gl/maps/9BpePWbynzXGVMdFA",
                                                    target: "_blank",
                                                    children: [Object(c.jsx)("p", {
                                                        children: "Mazaya Business"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Avenue, Tower AA1, JLT,"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Dubai, UAE"
                                                    })]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-lg-3 Country-SRA",
                                            children: [Object(c.jsx)("div", {
                                                className: "country",
                                                children: "Saudi Arabia"
                                            }), Object(c.jsx)("div", {
                                                className: "telephone",
                                                children: Object(c.jsx)("a", {
                                                    href: "tel:+966 (1)1 511 7692",
                                                    children: "+966 (1)1 511 7692"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 address",
                                                children: Object(c.jsxs)("a", {
                                                    href: "https://goo.gl/maps/1g49g3PXDJY5JRJT9",
                                                    target: "_blank",
                                                    children: [Object(c.jsx)("p", {
                                                        children: "Eastern Ring Branch"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Rd, Ghirnatah, Riyadh"
                                                    }), Object(c.jsx)("p", {
                                                        children: "13241, KSA"
                                                    })]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-lg-3 Country-PK",
                                            children: [Object(c.jsx)("div", {
                                                className: "country",
                                                children: "Pakistan"
                                            }), Object(c.jsx)("div", {
                                                className: "telephone",
                                                children: Object(c.jsx)("a", {
                                                    href: "tel:+92 (2)1 3499 2028",
                                                    children: "+92 (2)1 3499 2028"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 address",
                                                children: Object(c.jsxs)("a", {
                                                    href: "https://goo.gl/maps/Pnm3MdA2SQrE6hMSA",
                                                    target: "_blank",
                                                    children: [Object(c.jsx)("p", {
                                                        children: "50-J, Shahrah-e-Faisal"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Rd, Block 6 PECHS,"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Karachi, Pakistan"
                                                    })]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-lg-3 Country-Egypt",
                                            children: [Object(c.jsx)("div", {
                                                className: "country",
                                                children: "Egypt"
                                            }), Object(c.jsx)("div", {
                                                className: "telephone",
                                                children: Object(c.jsx)("a", {
                                                    href: "tel:+971 (0)4 454 2230",
                                                    children: "+971 (0)4 454 2230"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 address",
                                                children: Object(c.jsxs)("a", {
                                                    href: "https://goo.gl/maps/UDrtnjHjscmGC8HVA",
                                                    target: "_blank",
                                                    children: [Object(c.jsx)("p", {
                                                        children: "10, Street 22, Maadi,"
                                                    }), Object(c.jsx)("p", {
                                                        children: "Cairo, Egypt"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })]
                        }), Object(c.jsx)("div", {
                            className: "col-12 p-0 websiteFooter border-top",
                            children: Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 justify-content-center",
                                children: Object(c.jsxs)("div", {
                                    className: "col-10 row m-0 p-0 pt-5 pb-5 footerCopy",
                                    children: [Object(c.jsx)("div", {
                                        className: "col-md-6 p-0 footercopyright",
                                        children: Object(c.jsx)("div", {
                                            className: "col-12 p-0",
                                            children: "\xa9 The Collective Group Ltd 2020. UAE - Saudi Arabia - Pakistan - Egypt"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "col-md-6 p-0 row m-0 justify-content-end",
                                        children: [Object(c.jsx)("a", {
                                            href: "https://www.facebook.com/TrafficDigitalMEA/",
                                            target: "_Blank",
                                            className: "footer-fb"
                                        }), Object(c.jsx)("a", {
                                            href: "https://twitter.com/trafficdigital_?lang=en",
                                            target: "_Blank",
                                            className: "footer-tw"
                                        }), Object(c.jsx)("a", {
                                            href: "https://www.linkedin.com/company/traffic-digital/",
                                            target: "_Blank",
                                            className: "footer-in"
                                        }), Object(c.jsx)("a", {
                                            href: "https://www.instagram.com/trafficdigital/",
                                            target: "_Blank",
                                            className: "footer-ins"
                                        }), Object(c.jsx)("a", {
                                            href: "https://www.youtube.com/c/TrafficDigital",
                                            target: "_Blank",
                                            className: "footer-yt"
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                }),
                P = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), _(), (t = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), t.async = !1, document.body.appendChild(t), s = this, t.onload = function() {
                                                s.isFunction(window.$) & s.isFunction(window.$(".outer,.nested").mCustomScrollbar) && (window.$(".outer,.nested").mCustomScrollbar(), window.$(".inner.horizontal-images").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 8, e.next = 11, S.getEntries({
                                                content_type: "aboutUsSection1"
                                            });
                                        case 11:
                                            c = e.sent, a = c.items[0].fields.heading1.content[0].content[0].value, n = c.items[0].fields.heading2.content[0].content[0].value, i = c.items[0].fields.heading3.content[0].content[0].value, this.setState({
                                                heading1: a,
                                                heading2: n,
                                                heading3: i
                                            }), e.next = 21;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(8), console.log(e.t0);
                                        case 21:
                                            return e.prev = 21, e.next = 24, S.getEntries({
                                                content_type: "aboutUsSectiontwo"
                                            });
                                        case 24:
                                            l = e.sent, o = l.items[0].fields.hedingpara.content[0].content[0].value, r = l.items[0].fields.link.content[0].content[0].value, d = l.items[0].fields.secondSectionPara.content[0].content[0].value, j = l.items[0].fields.secondSectionParaLink.content[0].content[0].value, this.setState({
                                                headingOrPara: o,
                                                link: r,
                                                secondSectionPara: d,
                                                secondSectionParaLink: j
                                            }), e.next = 35;
                                            break;
                                        case 32:
                                            e.prev = 32, e.t1 = e.catch(21), console.log(e.t1);
                                        case 35:
                                            return e.prev = 35, e.next = 38, S.getEntries({
                                                content_type: "aboutUsSection4"
                                            });
                                        case 38:
                                            m = e.sent, h = m.items[0].fields.heading.content[0].content[0].value, b = m.items[0].fields.subheading.content[0].content[0].value, this.setState({
                                                fourSectionHeading: h,
                                                fourSectionSubHeading: b
                                            }), e.next = 47;
                                            break;
                                        case 44:
                                            e.prev = 44, e.t2 = e.catch(35), console.log(e.t2);
                                        case 47:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [8, 18],
                                    [21, 32],
                                    [35, 44]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function(e) {
                            function t(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/about-us" : "/en/about-us"
                            }) : Object(c.jsxs)("div", {
                                className: "col-12 p-0 row m-0 stop-header currentpagename",
                                id: "aboutuspage",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "About"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/m/en/about-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Middle East Leading Digital Agency - Traffic Digital",
                                        content: "Traffic Digital is a multi-faceted digital agency serving across the MENA region since 2009. Traffic Digital headquarters in Dubai, and has offices in Jeddah, Riyadh (Saudi Arabia) & Karachi (Pakistan)."
                                    })]
                                }), Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    className: "scroll-control",
                                    children: [Object(c.jsxs)("div", {
                                        className: "section mainabout-fullpage curs",
                                        id: "section0",
                                        children: [Object(c.jsx)("figure", {
                                            id: "mouse-pointer",
                                            style: {
                                                top: "271px",
                                                left: "818px"
                                            }
                                        }), Object(c.jsx)(x, {}), Object(c.jsx)(f, {}), Object(c.jsx)("div", {
                                            className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                            children: Object(c.jsxs)("div", {
                                                className: "col-md-5",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutuspage-line",
                                                    children: "About Us"
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 aboutuspage-Content",
                                                    children: [Object(c.jsx)("h1", {
                                                        children: this.state.heading1
                                                    }), Object(c.jsx)("h1", {
                                                        children: this.state.heading2
                                                    }), Object(c.jsx)("h1", {
                                                        children: Object(c.jsx)("span", {
                                                            children: this.state.heading3
                                                        })
                                                    })]
                                                }), Object(c.jsx)("div", {
                                                    "data-menuanchor": "about-us",
                                                    className: "scroll-explore",
                                                    children: Object(c.jsxs)("a", {
                                                        href: "/en/about-us#description",
                                                        className: "bluemouse",
                                                        children: [Object(c.jsxs)("svg", {
                                                            viewBox: "0 0 247 390",
                                                            version: "1.1",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                            style: {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeMiterlimit: "1.5"
                                                            },
                                                            children: [Object(c.jsx)("path", {
                                                                id: "wheel",
                                                                d: "M123.359,79.775l0,72.843",
                                                                style: {
                                                                    fill: "none",
                                                                    stroke: "#fff",
                                                                    strokeWidth: "20px"
                                                                }
                                                            }), Object(c.jsx)("path", {
                                                                id: "mouse",
                                                                d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                                style: {
                                                                    fill: "none",
                                                                    stroke: "#fff",
                                                                    strokeWidth: "20px"
                                                                }
                                                            })]
                                                        }), "Scroll to explore"]
                                                    })
                                                })]
                                            })
                                        }), Object(c.jsx)("div", {
                                            className: "Playbtn-box",
                                            children: Object(c.jsxs)(v.b, {
                                                to: "/en/aboutplayer",
                                                children: [Object(c.jsx)("i", {}), Object(c.jsx)("label", {
                                                    className: "whitebtn"
                                                })]
                                            })
                                        }), Object(c.jsx)("div", {
                                            className: "aboutround-pic"
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section about-fullpage row m-0 align-content-center aboutover-bg",
                                        "data-pai": "about",
                                        id: "section1",
                                        children: [Object(c.jsx)("div", {
                                            className: "aboutround-second-pic"
                                        }), Object(c.jsx)("div", {
                                            className: "container",
                                            children: Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-md-8 row p-0 m-0  vh-100 align-content-center",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 row m-0",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-md-5"
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-md-7 pl-3 row m-0 align-content-center about-page-second",
                                                                children: Object(c.jsxs)("h4", {
                                                                    className: "liqleft-1-5",
                                                                    children: [Object(c.jsx)("div", {
                                                                        dangerouslySetInnerHTML: t(this.state.headingOrPara)
                                                                    }), Object(c.jsx)("a", {
                                                                        href: "#",
                                                                        className: "aboutOverlink",
                                                                        children: Object(c.jsx)("div", {
                                                                            dangerouslySetInnerHTML: t(this.state.link)
                                                                        })
                                                                    })]
                                                                })
                                                            })]
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 pl-5 ml-5",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 row m-0 border-top pt-5 mt-5",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "col-md-4 p-0",
                                                                    children: Object(c.jsx)("p", {
                                                                        className: "blue-about-text",
                                                                        children: Object(c.jsx)("div", {
                                                                            dangerouslySetInnerHTML: t(this.state.secondSectionParaLink)
                                                                        })
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-md-7 pl-2 p-0 row m-0",
                                                                    children: Object(c.jsx)("p", {
                                                                        className: "col-12 f1 about-description-text",
                                                                        children: Object(c.jsx)("div", {
                                                                            dangerouslySetInnerHTML: t(this.state.secondSectionPara)
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), Object(c.jsx)("div", {
                                                    className: "aboutFirstPic"
                                                }), Object(c.jsx)("div", {
                                                    className: "aboutOverPic"
                                                })]
                                            })
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section team-fullpage about-people",
                                        "data-pai": "sliders",
                                        id: "section2",
                                        children: Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 hv100 teamreach",
                                            children: [Object(c.jsx)(v.b, {
                                                to: "sami",
                                                className: "sami"
                                            }), Object(c.jsx)(v.b, {
                                                to: "ross",
                                                className: "ross"
                                            }), Object(c.jsx)(v.b, {
                                                to: "ruby",
                                                className: "ruby"
                                            }), Object(c.jsx)(v.b, {
                                                to: "dominic",
                                                className: "dom"
                                            }), Object(c.jsx)(v.b, {
                                                to: "rosslyndon",
                                                className: "rossl"
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0 hv100 teamreach-place",
                                                children: Object(c.jsxs)("div", {
                                                    style: {
                                                        position: "absolute",
                                                        overflow: "hidden",
                                                        width: "10px",
                                                        height: "10px",
                                                        opacity: 0,
                                                        bottom: 0,
                                                        left: "0px"
                                                    },
                                                    children: [Object(c.jsx)("img", {
                                                        src: "assets/about-dom.jpg"
                                                    }), Object(c.jsx)("img", {
                                                        src: "assets/about-ross.jpg"
                                                    }), Object(c.jsx)("img", {
                                                        src: "assets/about-ruby.jpg"
                                                    }), Object(c.jsx)("img", {
                                                        src: "assets/about-rossl.jpg"
                                                    }), Object(c.jsx)("img", {
                                                        src: "assets/about-sami.jpg"
                                                    })]
                                                })
                                            })]
                                        })
                                    }), Object(c.jsx)("div", {
                                        className: "section about-ourpartner-fullpage",
                                        "data-pai": "careers",
                                        id: "section3",
                                        children: Object(c.jsxs)("div", {
                                            className: "col-12 p-0",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-6 ml4 mt4",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 frame-title",
                                                    children: this.state.fourSectionHeading
                                                }), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 mt2 f1-1 frame-title-text",
                                                    children: Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: t(this.state.fourSectionSubHeading)
                                                    })
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0 justify-content-center align-content-center partner-logos",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-10",
                                                    children: Object(c.jsxs)("ul", {
                                                        className: "col-12 p-0 row m-0 justify-content-center",
                                                        children: [Object(c.jsx)("li", {
                                                            className: "facebook-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        }), Object(c.jsx)("li", {
                                                            className: "instagram-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        }), Object(c.jsx)("li", {
                                                            className: "google-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        }), Object(c.jsx)("li", {
                                                            className: "linkedin-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        }), Object(c.jsx)("li", {
                                                            className: "youtube-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        }), Object(c.jsx)("li", {
                                                            className: "twitter-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        }), Object(c.jsx)("li", {
                                                            className: "googlemap-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        }), Object(c.jsx)("li", {
                                                            className: "snapchat-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        }), Object(c.jsx)("li", {
                                                            className: "socialbakers-partner row m-0 justify-content-center",
                                                            children: Object(c.jsx)("i", {})
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    }), Object(c.jsx)(M, {})]
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                L = Object(m.h)(P),
                E = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, C, M, P, L, E, H, I, T, D, W;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), _(), (t = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), t.async = !1, document.body.appendChild(t), s = this, t.onload = function() {
                                                s.isFunction(window.$) & s.isFunction(window.$(".outer,.nested").mCustomScrollbar) && (window.$(".outer,.nested").mCustomScrollbar(), window.$(".inner.horizontal-images").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 8, e.next = 11, S.getEntries({
                                                content_type: "workPageSection1"
                                            });
                                        case 11:
                                            c = e.sent, a = c.items[0].fields.heading1.content[0].content[0].value, n = c.items[0].fields.heading2.content[0].content[0].value, i = c.items[0].fields.subHeading.content[0].content[0].value, this.setState({
                                                firstSectionHeading1: a,
                                                firstSectionHeading2: n,
                                                firstSectionsubHeading: i
                                            }), e.next = 21;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(8), console.log(e.t0);
                                        case 21:
                                            return e.prev = 21, e.next = 24, S.getEntries({
                                                content_type: "workPageSection2"
                                            });
                                        case 24:
                                            l = e.sent, o = l.items[0].fields.heading1.content[0].content[0].value, r = l.items[0].fields.subheading1.content[0].content[0].value, d = l.items[0].fields.hoverpara1.content[0].content[0].value, j = l.items[0].fields.heading2.content[0].content[0].value, m = l.items[0].fields.subheading2.content[0].content[0].value, h = l.items[0].fields.hoverpara2.content[0].content[0].value, b = l.items[0].fields.heading3.content[0].content[0].value, u = l.items[0].fields.subheading3.content[0].content[0].value, v = l.items[0].fields.hoverpara3.content[0].content[0].value, x = l.items[0].fields.heading4.content[0].content[0].value, O = l.items[0].fields.subheading4.content[0].content[0].value, f = l.items[0].fields.hoverpara4.content[0].content[0].value, w = l.items[0].fields.heading5.content[0].content[0].value, y = l.items[0].fields.subheading5.content[0].content[0].value, g = l.items[0].fields.hoverpara5.content[0].content[0].value, N = l.items[0].fields.heading6.content[0].content[0].value, k = l.items[0].fields.subheading6.content[0].content[0].value, C = l.items[0].fields.hoverpara6.content[0].content[0].value, M = l.items[0].fields.heading7.content[0].content[0].value, P = l.items[0].fields.subheading7.content[0].content[0].value, L = l.items[0].fields.hoverpara7.content[0].content[0].value, E = l.items[0].fields.heading8.content[0].content[0].value, H = l.items[0].fields.subheading8.content[0].content[0].value, I = l.items[0].fields.hoverpara8.content[0].content[0].value, T = l.items[0].fields.heading9.content[0].content[0].value, D = l.items[0].fields.subheading9.content[0].content[0].value, W = l.items[0].fields.hoverpara9.content[0].content[0].value, this.setState({
                                                secondSectionHeading1: o,
                                                secondSectionSubHeading1: r,
                                                secondSectionhoverpara1: d,
                                                secondSectionHeading2: j,
                                                secondSectionSubHeading2: m,
                                                secondSectionhoverpara2: h,
                                                secondSectionHeading3: b,
                                                secondSectionSubHeading3: u,
                                                secondSectionhoverpara3: v,
                                                secondSectionHeading4: x,
                                                secondSectionSubHeading4: O,
                                                secondSectionhoverpara4: f,
                                                secondSectionHeading5: w,
                                                secondSectionSubHeading5: y,
                                                secondSectionhoverpara5: g,
                                                secondSectionHeading6: N,
                                                secondSectionSubHeading6: k,
                                                secondSectionhoverpara6: C,
                                                secondSectionHeading7: M,
                                                secondSectionSubHeading7: P,
                                                secondSectionhoverpara7: L,
                                                secondSectionHeading8: E,
                                                secondSectionSubHeading8: H,
                                                secondSectionhoverpara8: I,
                                                secondSectionHeading9: T,
                                                secondSectionSubHeading9: D,
                                                secondSectionhoverpara9: W
                                            }), e.next = 58;
                                            break;
                                        case 55:
                                            e.prev = 55, e.t1 = e.catch(21), console.log(e.t1);
                                        case 58:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [8, 18],
                                    [21, 55]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/case-studies" : "/en/case-studies"
                            }) : Object(c.jsxs)("div", {
                                className: "col-12 p-0 row m-0 stop-header currentpagename",
                                id: "workpage",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "Work"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/m/en/case-studies"
                                    }), Object(c.jsx)("meta", {
                                        charset: "UTF-8"
                                    }), Object(c.jsx)("meta", {
                                        name: "Case Studies | Have a Glance At Our Enticing Portfolio - Traffic Digital",
                                        content: "Seeing is believing! Browse through our portfolio to witness how we have served across different industries in the Middle East and internationally. Our case studies will help you understand how we stand out as a creative digital agency."
                                    })]
                                }), Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsxs)("div", {
                                        className: "section workPagehome aboutmainpage-fullpage",
                                        id: "section0",
                                        children: [Object(c.jsx)(x, {}), Object(c.jsx)(f, {}), Object(c.jsx)("div", {
                                            className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                            children: Object(c.jsxs)("div", {
                                                className: "col-md-8",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutuspage-line",
                                                    children: "Work"
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 Workpage-Content",
                                                    children: [Object(c.jsx)("h1", {
                                                        children: this.state.firstSectionHeading1
                                                    }), Object(c.jsx)("h1", {
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.firstSectionHeading2)
                                                        })
                                                    }), Object(c.jsx)("p", {
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.firstSectionsubHeading)
                                                        })
                                                    })]
                                                }), Object(c.jsx)("div", {
                                                    "data-menuanchor": "links",
                                                    className: "scroll-explore",
                                                    children: Object(c.jsxs)("a", {
                                                        href: "/en/case-studies#links",
                                                        className: "bluemouse",
                                                        children: [Object(c.jsxs)("svg", {
                                                            viewBox: "0 0 247 390",
                                                            version: "1.1",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                            style: {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeMiterlimit: "1.5"
                                                            },
                                                            children: [Object(c.jsx)("path", {
                                                                id: "wheel",
                                                                d: "M123.359,79.775l0,72.843",
                                                                style: {
                                                                    fill: "none",
                                                                    stroke: "#fff",
                                                                    strokeWidth: "20px"
                                                                }
                                                            }), Object(c.jsx)("path", {
                                                                id: "mouse",
                                                                d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                                style: {
                                                                    fill: "none",
                                                                    stroke: "#fff",
                                                                    strokeWidth: "20px"
                                                                }
                                                            })]
                                                        }), "Scroll to explore"]
                                                    })
                                                })]
                                            })
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section mainabout-fullpages",
                                        id: "section0",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 justify-content-start align-content-end hv100",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-md-7 Work-Content",
                                                style: {
                                                    zIndex: 999999
                                                },
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0",
                                                    children: Object(c.jsx)("div", {
                                                        className: "content-scroller mCustomScrollbar",
                                                        "data-mcs-theme": "light-3",
                                                        children: Object(c.jsxs)("ul", {
                                                            className: "WorkList",
                                                            children: [Object(c.jsxs)("li", {
                                                                className: "unicefwork",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "unicef-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        to: {
                                                                            pathname: "/en/player/unicef",
                                                                            state: {
                                                                                name: "Unicef",
                                                                                video: "assets/unicef.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: this.state.secondSectionHeading1
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    children: this.state.secondSectionSubHeading1
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara1
                                                                })]
                                                            }), Object(c.jsxs)("li", {
                                                                className: "hondawork",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "honda-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        to: {
                                                                            pathname: "/en/player/honda",
                                                                            state: {
                                                                                name: "Honda",
                                                                                video: "assets/honda.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: this.state.secondSectionHeading2
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    children: this.state.secondSectionSubHeading2
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara2
                                                                })]
                                                            }), Object(c.jsxs)("li", {
                                                                className: "worklist-lines dpworldwork pb-5",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "dpworld-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        to: {
                                                                            pathname: "/en/player/dpworld",
                                                                            state: {
                                                                                name: "DP World",
                                                                                video: "assets/dpworld.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: this.state.secondSectionHeading3
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading3)
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara3
                                                                })]
                                                            }), Object(c.jsxs)("li", {
                                                                className: "rexonawork",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "rexona-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        to: {
                                                                            pathname: "/en/player/rexona",
                                                                            state: {
                                                                                name: "Rexona",
                                                                                video: "assets/rexona.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: this.state.secondSectionHeading4
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    children: this.state.secondSectionSubHeading4
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara4
                                                                })]
                                                            }), Object(c.jsxs)("li", {
                                                                className: "tresemmework",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "tresemme-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        to: {
                                                                            pathname: "/en/player/tresemme",
                                                                            state: {
                                                                                name: "TRESemme",
                                                                                video: "assets/tresemme.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: this.state.secondSectionHeading5
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    children: this.state.secondSectionSubHeading5
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara5
                                                                })]
                                                            }), Object(c.jsxs)("li", {
                                                                className: "emirateswork",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "emirates-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        to: {
                                                                            pathname: "/en/player/emirates",
                                                                            state: {
                                                                                name: "Emirates",
                                                                                video: "assets/emirates.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: this.state.secondSectionHeading6
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    children: this.state.secondSectionSubHeading6
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara6
                                                                })]
                                                            }), Object(c.jsxs)("li", {
                                                                className: "omowork",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "omo-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        to: {
                                                                            pathname: "/en/player/omocomfort",
                                                                            state: {
                                                                                name: "Omo - Comfort",
                                                                                video: "assets/omo_comfort.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: Object(c.jsx)("span", {
                                                                            dangerouslySetInnerHTML: e(this.state.secondSectionHeading7)
                                                                        })
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    children: this.state.secondSectionSubHeading7
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara7
                                                                })]
                                                            }), Object(c.jsxs)("li", {
                                                                className: "mamaswork",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "mamas-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        className: "text-center",
                                                                        to: {
                                                                            pathname: "/en/player/mamaspapas",
                                                                            state: {
                                                                                name: "Mamas & Papas",
                                                                                video: "assets/mamas_papas.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: Object(c.jsx)("span", {
                                                                            dangerouslySetInnerHTML: e(this.state.secondSectionHeading8)
                                                                        })
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    children: this.state.secondSectionSubHeading8
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara8
                                                                })]
                                                            }), Object(c.jsxs)("li", {
                                                                className: "aecbwork",
                                                                children: [Object(c.jsx)("h1", {
                                                                    id: "aecb-over",
                                                                    children: Object(c.jsx)(v.b, {
                                                                        to: {
                                                                            pathname: "/en/player/aecb",
                                                                            state: {
                                                                                name: "AECB",
                                                                                video: "assets/aecb.mp4",
                                                                                backLink: "/en/case-studies#links"
                                                                            }
                                                                        },
                                                                        children: this.state.secondSectionHeading9
                                                                    })
                                                                }), Object(c.jsx)("p", {
                                                                    children: this.state.secondSectionSubHeading9
                                                                }), Object(c.jsx)("div", {
                                                                    children: this.state.secondSectionhoverpara9
                                                                })]
                                                            }), Object(c.jsx)("li", {})]
                                                        })
                                                    })
                                                })
                                            }), Object(c.jsx)("div", {
                                                id: "KeepWorkImage",
                                                className: "workOver-image"
                                            }), Object(c.jsx)("div", {
                                                className: "WorkStaticImage"
                                            })]
                                        }), Object(c.jsx)("div", {
                                            className: "modal fade trafficModal",
                                            id: "aboutvideo",
                                            tabIndex: -1,
                                            role: "dialog",
                                            "aria-labelledby": "exampleModalCenterTitle",
                                            "aria-hidden": "true",
                                            children: Object(c.jsx)("div", {
                                                className: "modal-dialog modal-lg modal-dialog-centered",
                                                role: "document",
                                                children: Object(c.jsxs)("div", {
                                                    className: "modal-content",
                                                    children: [Object(c.jsx)("button", {
                                                        type: "button",
                                                        className: "close",
                                                        "data-dismiss": "modal",
                                                        "aria-label": "Close"
                                                    }), Object(c.jsxs)("div", {
                                                        className: "modal-body",
                                                        children: [Object(c.jsx)("video", {
                                                            autoPlay: !0,
                                                            muted: !0,
                                                            loop: !0,
                                                            id: "homeVideoPlay",
                                                            children: Object(c.jsx)("source", {
                                                                src: "assets/showreel.mp4",
                                                                type: "video/mp4"
                                                            })
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 videoProgressbar",
                                                            children: [Object(c.jsx)("progress", {
                                                                id: "progress-bar",
                                                                min: 0,
                                                                className: "videoprogress",
                                                                max: 100,
                                                                value: 0,
                                                                children: "0% played"
                                                            }), Object(c.jsx)("a", {
                                                                href: !0,
                                                                className: "video-moreinfo",
                                                                children: "More info"
                                                            })]
                                                        }), Object(c.jsx)("button", {
                                                            id: "play-pause-button",
                                                            className: "play",
                                                            title: "play",
                                                            onclick: "togglePlayPause();"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section footer-fullpage",
                                        "data-pai": "footer",
                                        id: "footerx",
                                        children: [Object(c.jsx)(x, {}), Object(c.jsx)(f, {}), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 align-content-center h-100 FooterContent",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0 mb-4 justify-content-center footerGetInTouch marquee",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 row m-0 Marquee-p",
                                                    children: [Object(c.jsx)("span", {
                                                        className: "gettouch1",
                                                        children: "Let\u2019s Create Together"
                                                    }), Object(c.jsx)("i", {}), Object(c.jsx)("span", {
                                                        className: "gettouch2",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: "/en/contact-us",
                                                            children: "Get in touch"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 border-top footeraddresscountry",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-11 pl-5 row m-0 p-0 justify-content-between align-content-center",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-lg-3 Country-UAE",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "country",
                                                                children: "UAE"
                                                            }), Object(c.jsx)("div", {
                                                                className: "telephone",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "tel:+971044542230",
                                                                    children: "+971 (0)4 454 2230"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 address",
                                                                children: Object(c.jsxs)("a", {
                                                                    href: "https://goo.gl/maps/9BpePWbynzXGVMdFA",
                                                                    target: "_blank",
                                                                    children: [Object(c.jsx)("p", {
                                                                        children: "Mazaya Business"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Avenue, Tower AA1, JLT,"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Dubai, UAE"
                                                                    })]
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-lg-3 Country-SRA",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "country",
                                                                children: "Saudi Arabia"
                                                            }), Object(c.jsx)("div", {
                                                                className: "telephone",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "tel:+966 (1)1 511 7692",
                                                                    children: "+966 (1)1 511 7692"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 address",
                                                                children: Object(c.jsxs)("a", {
                                                                    href: "https://goo.gl/maps/1g49g3PXDJY5JRJT9",
                                                                    target: "_blank",
                                                                    children: [Object(c.jsx)("p", {
                                                                        children: "Eastern Ring Branch"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Rd, Ghirnatah, Riyadh"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "13241, KSA"
                                                                    })]
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-lg-3 Country-PK",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "country",
                                                                children: "Pakistan"
                                                            }), Object(c.jsx)("div", {
                                                                className: "telephone",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "tel:+92 (2)1 3499 2028",
                                                                    children: "+92 (2)1 3499 2028"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 address",
                                                                children: Object(c.jsxs)("a", {
                                                                    href: "https://goo.gl/maps/Pnm3MdA2SQrE6hMSA",
                                                                    target: "_blank",
                                                                    children: [Object(c.jsx)("p", {
                                                                        children: "50-J, Shahrah-e-Faisal"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Rd, Block 6 PECHS,"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Karachi, Pakistan"
                                                                    })]
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-lg-3 Country-Egypt",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "country",
                                                                children: "Egypt"
                                                            }), Object(c.jsx)("div", {
                                                                className: "telephone",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "tel:+971 (0)4 454 2230",
                                                                    children: "+971 (0)4 454 2230"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 address",
                                                                children: Object(c.jsxs)("a", {
                                                                    href: "https://goo.gl/maps/UDrtnjHjscmGC8HVA",
                                                                    target: "_blank",
                                                                    children: [Object(c.jsx)("p", {
                                                                        children: "10, Street 22, Maadi,"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Cairo, Egypt"
                                                                    })]
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        }), Object(c.jsx)("div", {
                                            className: "col-12 p-0 websiteFooter border-top",
                                            children: Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0 justify-content-center",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-10 row m-0 p-0 pt-5 pb-5 footerCopy",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-md-6 p-0 footercopyright",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: "\xa9 The Collective Group Ltd 2020. UAE - Saudi Arabia - Pakistan - Egypt"
                                                        })
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-md-6 p-0 row m-0 justify-content-end",
                                                        children: [Object(c.jsx)("a", {
                                                            href: "https://www.facebook.com/TrafficDigitalMEA/",
                                                            target: "_Blank",
                                                            className: "footer-fb"
                                                        }), Object(c.jsx)("a", {
                                                            href: "https://twitter.com/trafficdigital_?lang=en",
                                                            target: "_Blank",
                                                            className: "footer-tw"
                                                        }), Object(c.jsx)("a", {
                                                            href: "https://www.linkedin.com/company/traffic-digital/",
                                                            target: "_Blank",
                                                            className: "footer-in"
                                                        }), Object(c.jsx)("a", {
                                                            href: "https://www.instagram.com/trafficdigital/",
                                                            target: "_Blank",
                                                            className: "footer-ins"
                                                        }), Object(c.jsx)("a", {
                                                            href: "https://www.youtube.com/c/TrafficDigital",
                                                            target: "_Blank",
                                                            className: "footer-yt"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                H = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, C, M, P, L, E, H, I, T, D, W, A, z, F, B, U, R, $, G, q, V, K, J, X, Z, Y, Q, ee;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), _(), e.prev = 2, e.next = 5, S.getEntries({
                                                content_type: "servicesPageSection1"
                                            });
                                        case 5:
                                            t = e.sent, s = t.items[0].fields.heading.content[0].content[0].value, c = t.items[0].fields.heading2.content[0].content[0].value, a = t.items[0].fields.para.content[0].content[0].value, this.setState({
                                                firstSectionHeading1: s,
                                                firstSectionHeading2: c,
                                                firstSectionpara1: a
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(2), console.log(e.t0);
                                        case 15:
                                            return e.prev = 15, e.next = 18, S.getEntries({
                                                content_type: "servicesPageSection2"
                                            });
                                        case 18:
                                            n = e.sent, i = n.items[0].fields.heading.content[0].content[0].value, l = n.items[0].fields.subheading.content[0].content[0].value, o = n.items[0].fields.para1.content[0].content[0].value, r = n.items[0].fields.para2.content[0].content[0].value, d = n.items[0].fields.para3.content[0].content[0].value, j = n.items[0].fields.para4.content[0].content[0].value, this.setState({
                                                secondSectionHeading: i,
                                                secondSectionsubHeading: l,
                                                secondSectionpara1: o,
                                                secondSectionpara2: r,
                                                secondSectionpara3: d,
                                                secondSectionpara4: j
                                            }), e.next = 31;
                                            break;
                                        case 28:
                                            e.prev = 28, e.t1 = e.catch(15), console.log(e.t1);
                                        case 31:
                                            return e.prev = 31, e.next = 34, S.getEntries({
                                                content_type: "servicesPageSection3"
                                            });
                                        case 34:
                                            m = e.sent, h = m.items[0].fields.heading.content[0].content[0].value, b = m.items[0].fields.subheading.content[0].content[0].value, u = m.items[0].fields.para1.content[0].content[0].value, v = m.items[0].fields.para2.content[0].content[0].value, x = m.items[0].fields.para3.content[0].content[0].value, O = m.items[0].fields.para4.content[0].content[0].value, this.setState({
                                                thirdSectionHeading: h,
                                                thirdSectionsubHeading: b,
                                                thirdSectionpara1: u,
                                                thirdSectionpara2: v,
                                                thirdSectionpara3: x,
                                                thirdSectionpara4: O
                                            }), e.next = 47;
                                            break;
                                        case 44:
                                            e.prev = 44, e.t2 = e.catch(31), console.log(e.t2);
                                        case 47:
                                            return e.prev = 47, e.next = 50, S.getEntries({
                                                content_type: "servicesPageSection4"
                                            });
                                        case 50:
                                            f = e.sent, w = f.items[0].fields.heading.content[0].content[0].value, y = f.items[0].fields.subheading.content[0].content[0].value, g = f.items[0].fields.point1, N = f.items[0].fields.point2, k = f.items[0].fields.point3, C = f.items[0].fields.point4.content[0].content[0].value, M = f.items[0].fields.point5, P = f.items[0].fields.point6, L = f.items[0].fields.point7, this.setState({
                                                forthSectionHeading: w,
                                                forthSectionsubHeading: y,
                                                forthSectionpara1: g,
                                                forthSectionpara2: N,
                                                forthSectionpara3: k,
                                                forthSectionpara4: C,
                                                forthSectionpara5: M,
                                                forthSectionpara6: P,
                                                forthSectionpara7: L
                                            }), e.next = 66;
                                            break;
                                        case 63:
                                            e.prev = 63, e.t3 = e.catch(47), console.log(e.t3);
                                        case 66:
                                            return e.prev = 66, e.next = 69, S.getEntries({
                                                content_type: "servicesPageSection5"
                                            });
                                        case 69:
                                            E = e.sent, H = E.items[0].fields.heading.content[0].content[0].value, I = E.items[0].fields.subheading.content[0].content[0].value, T = E.items[0].fields.para1.content[0].content[0].value, D = E.items[0].fields.para2.content[0].content[0].value, W = E.items[0].fields.para3.content[0].content[0].value, A = E.items[0].fields.para4.content[0].content[0].value, this.setState({
                                                fifthSectionHeading: H,
                                                fifthSectionsubHeading: I,
                                                fifthSectionpara1: T,
                                                fifthSectionpara2: D,
                                                fifthSectionpara3: W,
                                                fifthSectionpara4: A
                                            }), e.next = 82;
                                            break;
                                        case 79:
                                            e.prev = 79, e.t4 = e.catch(66), console.log(e.t4);
                                        case 82:
                                            return e.prev = 82, e.next = 85, S.getEntries({
                                                content_type: "servicesPageSection6"
                                            });
                                        case 85:
                                            z = e.sent, F = z.items[0].fields.heading.content[0].content[0].value, B = z.items[0].fields.subheading.content[0].content[0].value, U = z.items[0].fields.para1.content[0].content[0].value, R = z.items[0].fields.para2.content[0].content[0].value, $ = z.items[0].fields.para3.content[0].content[0].value, G = z.items[0].fields.para4.content[0].content[0].value, this.setState({
                                                sixSectionHeading: F,
                                                sixSectionsubHeading: B,
                                                sixSectionpara1: U,
                                                sixSectionpara2: R,
                                                sixSectionpara3: $,
                                                sixSectionpara4: G
                                            }), e.next = 98;
                                            break;
                                        case 95:
                                            e.prev = 95, e.t5 = e.catch(82), console.log(e.t5);
                                        case 98:
                                            return e.prev = 98, e.next = 101, S.getEntries({
                                                content_type: "servicesPageSection7"
                                            });
                                        case 101:
                                            q = e.sent, V = q.items[0].fields.heading.content[0].content[0].value, K = q.items[0].fields.subheading.content[0].content[0].value, J = q.items[0].fields.para1.content[0].content[0].value, X = q.items[0].fields.para2.content[0].content[0].value, Z = q.items[0].fields.para3.content[0].content[0].value, Y = q.items[0].fields.para4.content[0].content[0].value, Q = q.items[0].fields.para5.content[0].content[0].value, ee = q.items[0].fields.para6.content[0].content[0].value, this.setState({
                                                sevenSectionHeading: V,
                                                sevenSectionsubHeading: K,
                                                sevenSectionpara1: J,
                                                sevenSectionpara2: X,
                                                sevenSectionpara3: Z,
                                                sevenSectionpara4: Y,
                                                sevenSectionpara5: Q,
                                                sevenSectionpara6: ee
                                            }), e.next = 116;
                                            break;
                                        case 113:
                                            e.prev = 113, e.t6 = e.catch(98), console.log(e.t6);
                                        case 116:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 117:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 12],
                                    [15, 28],
                                    [31, 44],
                                    [47, 63],
                                    [66, 79],
                                    [82, 95],
                                    [98, 113]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/services" : "/en/services"
                            }) : Object(c.jsxs)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "servicespage",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "Services"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/m/en/services"
                                    }), Object(c.jsx)("meta", {
                                        name: "Digital Marketing Services | Internet Marketing Solutions - Traffic Digital",
                                        content: "Traffic Digital is a Google & Facebook partnered digital marketing agency that provides top-notch internet marketing solutions like SEO, PPC, SEM, and SMM, etc. We drive brand awareness & lead generation through all the digital channels."
                                    })]
                                }), Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsxs)("div", {
                                        className: "section serviceshome-fullpage",
                                        id: "section0",
                                        children: [Object(c.jsx)(x, {}), Object(c.jsx)(f, {}), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                            children: [Object(c.jsx)("div", {
                                                className: "ServicesCirlMainPage ServicesCirlMainPageCustom"
                                            }), Object(c.jsx)("div", {
                                                className: "ServicesCirlMainPageWire"
                                            }), Object(c.jsxs)("div", {
                                                className: "col-md-8",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutuspage-line",
                                                    children: "Services"
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 Servicespage-Content",
                                                    children: [Object(c.jsx)("h1", {
                                                        children: this.state.firstSectionHeading1
                                                    }), Object(c.jsx)("h1", {
                                                        children: this.state.firstSectionHeading2
                                                    }), Object(c.jsx)("p", {
                                                        className: "mt-3",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.firstSectionpara1)
                                                        })
                                                    })]
                                                }), Object(c.jsx)("div", {
                                                    "data-menuanchor": "possess",
                                                    className: "scroll-explore",
                                                    children: Object(c.jsxs)("a", {
                                                        href: "/en/services#assessment",
                                                        className: "bluemouse",
                                                        children: [Object(c.jsxs)("svg", {
                                                            viewBox: "0 0 247 390",
                                                            version: "1.1",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                            style: {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeMiterlimit: "1.5"
                                                            },
                                                            children: [Object(c.jsx)("path", {
                                                                id: "wheel",
                                                                d: "M123.359,79.775l0,72.843",
                                                                style: {
                                                                    fill: "none",
                                                                    stroke: "#fff",
                                                                    strokeWidth: "20px"
                                                                }
                                                            }), Object(c.jsx)("path", {
                                                                id: "mouse",
                                                                d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                                style: {
                                                                    fill: "none",
                                                                    stroke: "#fff",
                                                                    strokeWidth: "20px"
                                                                }
                                                            })]
                                                        }), "HERE\u2019S WHAT WE OFFER"]
                                                    })
                                                })]
                                            })]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section assessment-fullpage row align-content-center",
                                        id: "section0",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-6 p-0 serv-title",
                                            children: [Object(c.jsxs)("p", {
                                                className: "service-digits",
                                                children: [Object(c.jsx)("b", {
                                                    className: "digits",
                                                    children: "01 / "
                                                }), "Service"]
                                            }), Object(c.jsx)("h1", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: e(this.state.secondSectionHeading)
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "serv-list serv-list-height",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-12 p-0 serv-list-text",
                                                children: this.state.secondSectionsubHeading
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 serv-list-ul",
                                                children: Object(c.jsxs)("ul", {
                                                    children: [Object(c.jsx)("li", {
                                                        children: this.state.secondSectionpara1
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.secondSectionpara2
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.secondSectionpara3
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.secondSectionpara4
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section strategy-fullpage",
                                        id: "section0",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-6 p-0 serv-title",
                                            children: [Object(c.jsxs)("p", {
                                                className: "service-digits",
                                                children: [Object(c.jsx)("b", {
                                                    className: "digits",
                                                    children: "02 / "
                                                }), "Service"]
                                            }), Object(c.jsx)("h1", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: e(this.state.thirdSectionHeading)
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "serv-list serv-list-height",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-12 p-0 serv-list-text",
                                                children: this.state.thirdSectionsubHeading
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 serv-list-ul",
                                                children: Object(c.jsxs)("ul", {
                                                    children: [Object(c.jsx)("li", {
                                                        children: this.state.thirdSectionpara1
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.thirdSectionpara2
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.thirdSectionpara3
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.thirdSectionpara4
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section content-fullpage",
                                        id: "section0",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-6 p-0 serv-title",
                                            children: [Object(c.jsxs)("p", {
                                                className: "service-digits",
                                                children: [Object(c.jsx)("b", {
                                                    className: "digits",
                                                    children: "03 / "
                                                }), "Service"]
                                            }), Object(c.jsx)("h1", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: e(this.state.forthSectionHeading)
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "serv-list serv-list-height",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-12 p-0 serv-list-text",
                                                children: this.state.forthSectionsubHeading
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 serv-list-ul",
                                                children: Object(c.jsxs)("ul", {
                                                    children: [Object(c.jsx)("li", {
                                                        children: this.state.forthSectionpara1
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.forthSectionpara2
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.forthSectionpara3
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.forthSectionpara4
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.forthSectionpara5
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.forthSectionpara6
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.forthSectionpara7
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section community-fullpage",
                                        id: "section0",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-6 p-0 serv-title",
                                            children: [Object(c.jsxs)("p", {
                                                className: "service-digits",
                                                children: [Object(c.jsx)("b", {
                                                    className: "digits",
                                                    children: "04 / "
                                                }), "Service"]
                                            }), Object(c.jsx)("h1", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: e(this.state.fifthSectionHeading)
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "serv-list serv-list-height",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-12 p-0 serv-list-text",
                                                children: this.state.fifthSectionsubHeading
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 serv-list-ul",
                                                children: Object(c.jsxs)("ul", {
                                                    children: [Object(c.jsxs)("li", {
                                                        children: [" ", this.state.fifthSectionpara1, " "]
                                                    }), Object(c.jsxs)("li", {
                                                        children: [" ", this.state.fifthSectionpara2, " "]
                                                    }), Object(c.jsxs)("li", {
                                                        children: [" ", this.state.fifthSectionpara3, " "]
                                                    }), Object(c.jsxs)("li", {
                                                        children: [" ", this.state.fifthSectionpara4, " "]
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section amplification-fullpage ",
                                        id: "section0",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-6 p-0 serv-title",
                                            children: [Object(c.jsxs)("p", {
                                                className: "service-digits",
                                                children: [Object(c.jsx)("b", {
                                                    className: "digits",
                                                    children: "05 / "
                                                }), "Service"]
                                            }), Object(c.jsx)("h1", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: e(this.state.sixSectionHeading)
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "serv-list serv-list-height",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-12 p-0 serv-list-text",
                                                children: this.state.sixSectionsubHeading
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 serv-list-ul",
                                                children: Object(c.jsxs)("ul", {
                                                    children: [Object(c.jsxs)("li", {
                                                        children: [" ", this.state.sixSectionpara1, " "]
                                                    }), Object(c.jsxs)("li", {
                                                        children: [" ", this.state.sixSectionpara2, " "]
                                                    }), Object(c.jsxs)("li", {
                                                        children: [" ", this.state.sixSectionpara3, " "]
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsxs)("div", {
                                        className: "section media-fullpage",
                                        id: "section0",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-6 p-0 serv-title",
                                            children: [Object(c.jsxs)("p", {
                                                className: "service-digits",
                                                children: [Object(c.jsx)("b", {
                                                    className: "digits",
                                                    children: "06 / "
                                                }), "Service"]
                                            }), Object(c.jsx)("h1", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: e(this.state.sevenSectionHeading)
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "serv-list serv-list-height",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-12 p-0 serv-list-text",
                                                children: this.state.sevenSectionsubHeading
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 serv-list-ul",
                                                children: Object(c.jsxs)("ul", {
                                                    children: [Object(c.jsx)("li", {
                                                        children: this.state.sevenSectionpara1
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.sevenSectionpara2
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.sevenSectionpara3
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.sevenSectionpara4
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.sevenSectionpara5
                                                    }), Object(c.jsx)("li", {
                                                        children: this.state.sevenSectionpara6
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsx)(M, {})]
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                I = s(34),
                T = (s(127), s(144), function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.handleChange = function(e) {
                            var t = e.target,
                                s = t.value,
                                a = t.name;
                            c.setState(Object(I.a)({}, a, s))
                        }, c.handleSubmit = function() {
                            var e = Object(u.a)(p.a.mark((function e(t) {
                                var s, a, n, i, l;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), c.setState({
                                                isLoading: !0
                                            }), s = c.state.user, a = c.state.company, n = c.state.email, i = c.state.phone, l = c.state.project, e.next = 9, fetch("https://0x8ofb8k4a.execute-api.us-east-1.amazonaws.com/dev/sendmail", {
                                                method: "POST",
                                                body: JSON.stringify({
                                                    name: s,
                                                    companyName: a,
                                                    email: n,
                                                    phoneNumber: i,
                                                    projectDetails: l
                                                }),
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                        case 9:
                                            200 === e.sent.status ? (c.setState({
                                                isLoading: !1
                                            }), c.props.history.push("/en/contact-success")) : (c.setState({
                                                isLoading: !1
                                            }), console.log("FAILED SENDING EMAIL"));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), c.state = {
                            isMobile: window.innerWidth <= 768,
                            user: "",
                            company: "",
                            email: "",
                            phone: "",
                            project: "",
                            isLoading: !1
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), _(), e.prev = 2, e.next = 5, S.getEntries({
                                                content_type: "contactUsMainSection"
                                            });
                                        case 5:
                                            t = e.sent, s = t.items[0].fields.heading.content[0].content[0].value, c = t.items[0].fields.secondPara.content[0].content[0].value, a = t.items[0].fields.thirdpara.content[0].content[0].value, n = t.items[0].fields.fourthPara.content[0].content[0].value, this.setState({
                                                firstSectionHeading1: s,
                                                firstSectionpara1: c,
                                                firstSectionPara2: a,
                                                firstSectionPara3: n
                                            }), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(2), console.log(e.t0);
                                        case 16:
                                            return e.prev = 16, e.next = 19, S.getEntries({
                                                content_type: "contactUsSecondSection"
                                            });
                                        case 19:
                                            i = e.sent, l = i.items[0].fields.heading.content[0].content[0].value, this.setState({
                                                secondSectionHeading1: l
                                            }), e.next = 27;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t1 = e.catch(16), console.log(e.t1);
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 13],
                                    [16, 24]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/contact-us" : "/en/contact-us"
                            }) : Object(c.jsxs)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "contactpage",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "Contact"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/m/en/contact-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Contact - +971 (0)4 454 2230 - Traffic Digital",
                                        content: "Our team is always ready to help. Just give us a call, send us an email, or fill out the form."
                                    })]
                                }), Object(c.jsx)(x, {}), Object(c.jsx)(f, {}), Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("div", {
                                        className: "section Contacthome-fullpage",
                                        id: "section0",
                                        children: Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-md-8",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutuspage-line",
                                                    children: "Contact Us"
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 contactHomepage-Content",
                                                    children: [Object(c.jsx)("h1", {
                                                        children: this.state.firstSectionHeading1
                                                    }), Object(c.jsx)("h5", {
                                                        children: Object(c.jsx)("a", {
                                                            href: "mailto:".concat(this.state.firstSectionpara1),
                                                            children: this.state.firstSectionpara1
                                                        })
                                                    }), Object(c.jsx)("p", {
                                                        children: this.state.firstSectionPara2
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: Object(c.jsx)("a", {
                                                            href: "/en/contact-us#form",
                                                            className: "contactPage-getdown",
                                                            children: this.state.firstSectionPara3
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "ContactHomeCircleImage"
                                            })]
                                        })
                                    }), Object(c.jsx)("div", {
                                        className: "section ContactForm-fullpage",
                                        id: "section0",
                                        children: Object(c.jsx)("div", {
                                            className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                            children: Object(c.jsxs)("div", {
                                                className: "col-7 p-0",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 ContactFormTitle",
                                                    children: Object(c.jsx)("h1", {
                                                        children: this.state.secondSectionHeading1
                                                    })
                                                }), Object(c.jsx)("form", {
                                                    method: "POST",
                                                    action: "/m/en/contact-success",
                                                    onSubmit: this.handleSubmit,
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 mt-3 pt-3 Contact-Form",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-md-9",
                                                            children: [Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 row m-0",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "col-md-6 pl-md-0 mt2",
                                                                    children: Object(c.jsx)("input", {
                                                                        type: "text",
                                                                        name: "user",
                                                                        onChange: this.handleChange,
                                                                        value: this.state.user,
                                                                        required: !0,
                                                                        placeholder: "What's your name?",
                                                                        className: "contact-input3"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-md-6 pr-md-0 mt2",
                                                                    children: Object(c.jsx)("input", {
                                                                        type: "text",
                                                                        name: "company",
                                                                        onChange: this.handleChange,
                                                                        value: this.state.company,
                                                                        required: !0,
                                                                        placeholder: "Company Name",
                                                                        className: "contact-input2"
                                                                    })
                                                                })]
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 row m-0",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "col-md-6 pl-md-0 mt2",
                                                                    children: Object(c.jsx)("input", {
                                                                        type: "email",
                                                                        name: "email",
                                                                        onChange: this.handleChange,
                                                                        value: this.state.email,
                                                                        required: !0,
                                                                        placeholder: "Your email",
                                                                        className: "contact-input3"
                                                                    })
                                                                }), this.state.isLoading ? Object(c.jsx)(y, {}) : null, Object(c.jsx)("div", {
                                                                    className: "col-md-6 pr-md-0 mt2",
                                                                    children: Object(c.jsx)("input", {
                                                                        type: "text",
                                                                        name: "phone",
                                                                        onChange: this.handleChange,
                                                                        value: this.state.phone,
                                                                        required: !0,
                                                                        placeholder: "Phone number",
                                                                        className: "contact-input2"
                                                                    })
                                                                })]
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 mt2",
                                                                children: Object(c.jsx)("input", {
                                                                    type: "text",
                                                                    name: "project",
                                                                    onChange: this.handleChange,
                                                                    value: this.state.project,
                                                                    placeholder: "Tell us about your project",
                                                                    className: "contact-input4"
                                                                })
                                                            })]
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-md-3",
                                                            children: Object(c.jsx)("input", {
                                                                type: "submit",
                                                                className: "row justify-content-center align-content-center m-0 ContactBtn",
                                                                value: "Submit"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section footer-fullpage",
                                        "data-pai": "footer",
                                        id: "footerx",
                                        children: [Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 align-content-center h-100 FooterContent",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0 mb-4 justify-content-center footerGetInTouch marquee"
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-0 footeraddresscountry",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-11 pl-5 row m-0 p-0 justify-content-between align-content-center",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-lg-3 Country-UAE",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "country",
                                                                children: "UAE"
                                                            }), Object(c.jsx)("div", {
                                                                className: "telephone",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "tel:+971044542230",
                                                                    children: "+971 (0)4 454 2230"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 address",
                                                                children: Object(c.jsxs)("a", {
                                                                    href: "https://goo.gl/maps/9BpePWbynzXGVMdFA",
                                                                    target: "_blank",
                                                                    children: [Object(c.jsx)("p", {
                                                                        children: "Mazaya Business"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Avenue, Tower AA1 JLT,"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Dubai, UAE"
                                                                    })]
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-lg-3 Country-SRA",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "country",
                                                                children: "Saudi\xa0Arabia"
                                                            }), Object(c.jsx)("div", {
                                                                className: "telephone",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "tel:+966 (1)1 511 7692",
                                                                    children: "+966 (1)1 511 7692"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 address",
                                                                children: Object(c.jsxs)("a", {
                                                                    href: "https://goo.gl/maps/1g49g3PXDJY5JRJT9",
                                                                    target: "_blank",
                                                                    children: [Object(c.jsx)("p", {
                                                                        children: "Eastern Ring Branch"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Rd, Ghirnatah, Riyadh"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "13241, KSA"
                                                                    })]
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-lg-3 Country-PK",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "country",
                                                                children: "Pakistan"
                                                            }), Object(c.jsx)("div", {
                                                                className: "telephone",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "tel:+92 (2)1 3499 2028",
                                                                    children: "+92 (2)1 3499 2028"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 address",
                                                                children: Object(c.jsxs)("a", {
                                                                    href: "https://goo.gl/maps/Pnm3MdA2SQrE6hMSA",
                                                                    target: "_blank",
                                                                    children: [Object(c.jsx)("p", {
                                                                        children: "50-J, Shahrah-e-Faisal"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Rd, Block 6 PECHS,"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Karachi, Pakistan"
                                                                    })]
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-lg-3 Country-Egypt",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "country",
                                                                children: "Egypt"
                                                            }), Object(c.jsx)("div", {
                                                                className: "telephone",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "tel:+971 (0)4 454 2230",
                                                                    children: "+971 (0)4 454 2230"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 address",
                                                                children: Object(c.jsxs)("a", {
                                                                    href: "https://goo.gl/maps/UDrtnjHjscmGC8HVA",
                                                                    target: "_blank",
                                                                    children: [Object(c.jsx)("p", {
                                                                        children: "10, Street 22, Maadi,"
                                                                    }), Object(c.jsx)("p", {
                                                                        children: "Cairo, Egypt"
                                                                    })]
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        }), Object(c.jsx)("div", {
                                            className: "col-12 p-0 websiteFooter border-top",
                                            children: Object(c.jsx)("div", {
                                                className: "col-12 p-0 row m-0 justify-content-center",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-10 row m-0 p-0 pt-5 pb-5 footerCopy",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-md-6 p-0 footercopyright",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: "\xa9 The Collective Group Ltd 2020. UAE - Saudi Arabia - Pakistan - Egypt"
                                                        })
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-md-6 p-0 row m-0 justify-content-end",
                                                        children: [Object(c.jsx)("a", {
                                                            href: "https://www.facebook.com/TrafficDigitalMEA/",
                                                            target: "_Blank",
                                                            className: "footer-fb"
                                                        }), Object(c.jsx)("a", {
                                                            href: "https://twitter.com/trafficdigital_?lang=en",
                                                            target: "_Blank",
                                                            className: "footer-tw"
                                                        }), Object(c.jsx)("a", {
                                                            href: "https://www.linkedin.com/company/traffic-digital/",
                                                            target: "_Blank",
                                                            className: "footer-in"
                                                        }), Object(c.jsx)("a", {
                                                            href: "https://www.instagram.com/trafficdigital/",
                                                            target: "_Blank",
                                                            className: "footer-ins"
                                                        }), Object(c.jsx)("a", {
                                                            href: "https://www.youtube.com/c/TrafficDigital",
                                                            target: "_Blank",
                                                            className: "footer-yt"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component)),
                D = (s(24), function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/UnicefDubaiLynx.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "Unicef"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 unicef-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/UnicefDubaiLynx.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/unicef#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "Unicef"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "The Class of No Tomorrow"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Spain"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: ["On-Ground Activation,", Object(c.jsx)("br", {}), "Social Media"]
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: [console.log(this.state.backLink), Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/honda",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component)),
                W = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/HondaCase.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "Honda"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 honda-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/HondaCase.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/honda#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "Honda"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Can digital walkthroughs be the new physical test-drives?"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "GCC"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: ["Immersive Website,", Object(c.jsx)("br", {}), "Digital Advertising"]
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: [console.log(this.state.backLink), Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/dpworld",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                A = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && (this.setState({
                                name: this.props.location.state.name
                            }), this.setState({
                                video: this.props.location.state.video
                            }), this.setState({
                                backLink: this.props.location.state.backLink
                            })), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/DPWorld.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "DP World"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 dp-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/DPWorld.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/dpworld#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "DP World"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Curating the story of ports across the planet in 12 weeks and 12 films."
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "12 countries across the globe"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: ["Website Content, Digital Advertising,", Object(c.jsx)("br", {}), "Social Media"]
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: [console.log(this.state.backLink), Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/rexona",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                z = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/RexonaCase.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "Rexona"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 rexona-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/RexonaCase.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/rexona#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "Rexona"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "How we made Saudi men sweat, cry and buy."
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "KSA"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Digital Advertising Campaign"
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: [console.log(this.state.backLink), Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/tresemme",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                F = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/Emirates.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "Emirates"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 emirates-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/Emirates.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/emirates#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "Emirates"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Is it a bird, is it a plane, is it an Effie-winning prank?"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Global"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Viral Social Content"
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/omocomfort",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                B = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/TresemmeEmergeSmoothNowMoves.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "Tresemme"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 tresemme-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/TresemmeEmergeSmoothNowMoves.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/tresemme#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "TRESemme"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Creating hair chaos to show smooth hair now moves."
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "GCC"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: ["Digital Advertising,", Object(c.jsx)("br", {}), "Social Media"]
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: [console.log(this.state.backLink), Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/emirates",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                U = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsxs)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "contactsuccess",
                                children: [Object(c.jsx)(x, {}), Object(c.jsx)(f, {}), Object(c.jsx)("div", {
                                    id: "fullpage",
                                    children: Object(c.jsx)("div", {
                                        className: "section Contactsucess-fullpage",
                                        id: "section0",
                                        children: Object(c.jsx)("div", {
                                            className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                            children: Object(c.jsxs)("div", {
                                                className: "col-md-8",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 success-Content",
                                                    children: [Object(c.jsxs)("h1", {
                                                        children: ["We\u2019ll get back to", Object(c.jsx)("br", {}), "you in a bit"]
                                                    }), Object(c.jsxs)("p", {
                                                        children: ["While you wait, why not have a look at what", Object(c.jsx)("br", {}), "we can do for you?"]
                                                    })]
                                                }), Object(c.jsx)(v.b, {
                                                    to: "/en/contact-us#form",
                                                    className: "success-keep",
                                                    children: "Keep exploring"
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component);
            s(27);
            s(30).config();
            var R = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, _;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/support.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), s.async = !1, document.body.appendChild(s), c = this, s.onload = function() {
                                                c.isFunction(window.$) & c.isFunction(window.$(".outer,.nested").mCustomScrollbar) && (window.$(".outer,.nested").mCustomScrollbar(), window.$(".inner.horizontal-images").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 11, e.next = 14, S.getEntries({
                                                content_type: "teamMember1SamiIqbal"
                                            });
                                        case 14:
                                            a = e.sent, n = a.items[0].fields.FirstName.content[0].content[0].value, i = a.items[0].fields.LastName.content[0].content[0].value, l = a.items[0].fields.designation.content[0].content[0].value, o = a.items[0].fields.address1.content[0].content[0].value, r = a.items[0].fields.address2.content[0].content[0].value, d = a.items[0].fields.skillsCount.content[0].content[0].value, j = a.items[0].fields.skill1.content[0].content[0].value, m = a.items[0].fields.skill2.content[0].content[0].value, h = a.items[0].fields.skill3.content[0].content[0].value, b = a.items[0].fields.personalityHeading.content[0].content[0].value, u = a.items[0].fields.personalityPara.content[0].content[0].value, v = a.items[0].fields.lessonHeading.content[0].content[0].value, x = a.items[0].fields.lessonPara.content[0].content[0].value, O = a.items[0].fields.animalHeading.content[0].content[0].value, f = a.items[0].fields.animalPara.content[0].content[0].value, w = a.items[0].fields.favoriteFilm.content[0].content[0].value, y = a.items[0].fields.favoritefilmPara.content[0].content[0].value, g = a.items[0].fields.holydayHeading.content[0].content[0].value, N = a.items[0].fields.holydayPara.content[0].content[0].value, k = a.items[0].fields.bestperonHeading.content[0].content[0].value, _ = a.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                sami_Firstname: n,
                                                sami_Lastname: i,
                                                sami_designation: l,
                                                sami_address1: o,
                                                sami_address2: r,
                                                sami_skillsCount: d,
                                                sami_skill1: j,
                                                sami_skill2: m,
                                                sami_skill3: h,
                                                sami_personalityHeading: b,
                                                sami_personalityPara: u,
                                                sami_lessonHeading: v,
                                                sami_lessonPara: x,
                                                sami_animalHeading: O,
                                                sami_animalPara: f,
                                                sami_favoritefilmHeading: w,
                                                sami_favoritefilmPara: y,
                                                sami_holydayHeading: g,
                                                sami_holydayPara: N,
                                                sami_bestperonHeading: k,
                                                sami_bestperonPara: _
                                            }), e.next = 42;
                                            break;
                                        case 39:
                                            e.prev = 39, e.t0 = e.catch(11), console.log(e.t0);
                                        case 42:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [11, 39]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function(e) {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/about-us" : "/en/about-us"
                            }) : Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 stop-header currentpagename",
                                id: "aboutuspage",
                                children: Object(c.jsxs)("div", {
                                    className: "col-12 hv100 teamdetails",
                                    id: "sami",
                                    children: [Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/about-us#team",
                                        className: "about-back",
                                        children: "Go Back"
                                    }), Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/ross",
                                        className: "about-next",
                                        children: "Next BIO"
                                    }), Object(c.jsxs)("div", {
                                        className: "aboutteamdetailstitle",
                                        children: [Object(c.jsx)("h1", {
                                            children: this.state.sami_Firstname
                                        }), Object(c.jsxs)("h1", {
                                            children: [this.state.sami_Lastname, Object(c.jsx)("p", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: (t = this.state.sami_designation, {
                                                        __html: t
                                                    })
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "aboutteamdetails",
                                        children: Object(c.jsx)("div", {
                                            className: "col-12 p-0 aboutdetailslist-ralevent",
                                            children: Object(c.jsxs)("div", {
                                                className: "aboutdetailslist content mCustomScrollbar",
                                                style: {
                                                    height: "60vh"
                                                },
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.sami_address1
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.sami_address2
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.sami_skillsCount
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0",
                                                        children: [this.state.sami_skill1, Object(c.jsx)("br", {}), this.state.sami_skill2, Object(c.jsx)("br", {}), this.state.sami_skill3]
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.sami_personalityHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.sami_personalityPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.sami_lessonHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.sami_lessonPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.sami_animalHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.sami_animalPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.sami_favoritefilmHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.sami_favoritefilmPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.sami_holydayHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.sami_holydayPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.sami_bestperonHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.sami_bestperonPara
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            });
                            var t
                        }
                    }]), s
                }(n.a.Component),
                $ = Object(m.h)(R);
            s(30).config();
            var G = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, _, C, M;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/support.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), s.async = !1, document.body.appendChild(s), c = this, s.onload = function() {
                                                c.isFunction(window.$) & c.isFunction(window.$(".outer,.nested").mCustomScrollbar) && (window.$(".outer,.nested").mCustomScrollbar(), window.$(".inner.horizontal-images").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 11, e.next = 14, S.getEntries({
                                                content_type: "teamMember1DominicGothard"
                                            });
                                        case 14:
                                            a = e.sent, n = a.items[0].fields.FirstName.content[0].content[0].value, i = a.items[0].fields.LastName.content[0].content[0].value, l = a.items[0].fields.designation.content[0].content[0].value, o = a.items[0].fields.address1.content[0].content[0].value, r = a.items[0].fields.address2.content[0].content[0].value, d = a.items[0].fields.skillsCount.content[0].content[0].value, j = a.items[0].fields.skill1.content[0].content[0].value, m = a.items[0].fields.skill2.content[0].content[0].value, h = a.items[0].fields.skill3.content[0].content[0].value, b = a.items[0].fields.workProudHeading.content[0].content[0].value, u = a.items[0].fields.workProudPara.content[0].content[0].value, v = a.items[0].fields.personalityHeading.content[0].content[0].value, x = a.items[0].fields.personalityPara.content[0].content[0].value, O = a.items[0].fields.lessonHeading.content[0].content[0].value, f = a.items[0].fields.lessonPara.content[0].content[0].value, w = a.items[0].fields.animalHeading.content[0].content[0].value, y = a.items[0].fields.animalPara.content[0].content[0].value, g = a.items[0].fields.favoriteFilm.content[0].content[0].value, N = a.items[0].fields.favoritefilmPara.content[0].content[0].value, k = a.items[0].fields.holydayHeading.content[0].content[0].value, _ = a.items[0].fields.holydayPara.content[0].content[0].value, C = a.items[0].fields.bestperonHeading.content[0].content[0].value, M = a.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                dominic_Firstname: n,
                                                dominic_Lastname: i,
                                                dominic_designation: l,
                                                dominic_address1: o,
                                                dominic_address2: r,
                                                dominic_skillsCount: d,
                                                dominic_skill1: j,
                                                dominic_skill2: m,
                                                dominic_skill3: h,
                                                dominic_workProudHeading: b,
                                                dominic_workProudPara: u,
                                                dominic_personalityHeading: v,
                                                dominic_personalityPara: x,
                                                dominic_lessonHeading: O,
                                                dominic_lessonPara: f,
                                                dominic_animalHeading: w,
                                                dominic_animalPara: y,
                                                dominic_favoritefilmHeading: g,
                                                dominic_favoritefilmPara: N,
                                                dominic_holydayHeading: k,
                                                dominic_holydayPara: _,
                                                dominic_bestperonHeading: C,
                                                dominic_bestperonPara: M
                                            }), e.next = 44;
                                            break;
                                        case 41:
                                            e.prev = 41, e.t0 = e.catch(11), console.log(e.t0);
                                        case 44:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [11, 41]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function(e) {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/about-us" : "/en/about-us"
                            }) : Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 stop-header currentpagename",
                                id: "aboutuspage",
                                children: Object(c.jsxs)("div", {
                                    className: "col-12 hv100 teamdetails",
                                    id: "dom",
                                    children: [Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/about-us#team",
                                        className: "about-back",
                                        children: "Go Back"
                                    }), Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/rosslyndon",
                                        className: "about-next",
                                        children: "Next BIO"
                                    }), Object(c.jsxs)("div", {
                                        className: "aboutteamdetailstitle",
                                        children: [Object(c.jsx)("h1", {
                                            children: this.state.dominic_Firstname
                                        }), Object(c.jsxs)("h1", {
                                            children: [this.state.dominic_Lastname, Object(c.jsx)("p", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: (t = this.state.dominic_designation, {
                                                        __html: t
                                                    })
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "aboutteamdetails",
                                        children: Object(c.jsx)("div", {
                                            className: "col-12 p-0 aboutdetailslist-ralevent",
                                            children: Object(c.jsxs)("div", {
                                                className: "aboutdetailslist content mCustomScrollbar",
                                                style: {
                                                    height: "60vh"
                                                },
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: [this.state.dominic_address1, "."]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.dominic_address2
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.dominic_skillsCount
                                                        })
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0",
                                                        children: [this.state.dominic_skill1, " ", Object(c.jsx)("br", {}), this.state.dominic_skill2, Object(c.jsx)("br", {}), this.state.dominic_skill3]
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.dominic_personalityHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.dominic_personalityPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.dominic_lessonHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.dominic_lessonPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.dominic_animalHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.dominic_animalPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.dominic_favoritefilmHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.dominic_favoritefilmPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.dominic_holydayHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.dominic_holydayPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.dominic_bestperonHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.dominic_bestperonPara
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            });
                            var t
                        }
                    }]), s
                }(n.a.Component),
                q = Object(m.h)(G);
            s(30).config();
            var V = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/support.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), s.async = !1, document.body.appendChild(s), c = this, s.onload = function() {
                                                c.isFunction(window.$) & c.isFunction(window.$(".outer,.nested").mCustomScrollbar) && (window.$(".outer,.nested").mCustomScrollbar(), window.$(".inner.horizontal-images").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 11, e.next = 14, S.getEntries({
                                                content_type: "teamMember1RossMaclean"
                                            });
                                        case 14:
                                            a = e.sent, n = a.items[0].fields.FirstName.content[0].content[0].value, i = a.items[0].fields.LastName.content[0].content[0].value, l = a.items[0].fields.designation.content[0].content[0].value, o = a.items[0].fields.address1.content[0].content[0].value, r = a.items[0].fields.address2.content[0].content[0].value, d = a.items[0].fields.skillsCount.content[0].content[0].value, j = a.items[0].fields.skill1.content[0].content[0].value, m = a.items[0].fields.personalityHeading.content[0].content[0].value, h = a.items[0].fields.personalityPara.content[0].content[0].value, b = a.items[0].fields.lessonHeading.content[0].content[0].value, u = a.items[0].fields.lessonPara.content[0].content[0].value, v = a.items[0].fields.animalHeading.content[0].content[0].value, x = a.items[0].fields.animalPara.content[0].content[0].value, O = a.items[0].fields.favoriteFilm.content[0].content[0].value, f = a.items[0].fields.favoritefilmPara.content[0].content[0].value, w = a.items[0].fields.holydayHeading.content[0].content[0].value, y = a.items[0].fields.holydayPara.content[0].content[0].value, g = a.items[0].fields.bestperonHeading.content[0].content[0].value, N = a.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                maclean_Firstname: n,
                                                maclean_Lastname: i,
                                                maclean_designation: l,
                                                maclean_address1: o,
                                                maclean_address2: r,
                                                maclean_skillsCount: d,
                                                maclean_skill1: j,
                                                maclean_personalityHeading: m,
                                                maclean_personalityPara: h,
                                                maclean_lessonHeading: b,
                                                maclean_lessonPara: u,
                                                maclean_animalHeading: v,
                                                maclean_animalPara: x,
                                                maclean_favoritefilmHeading: O,
                                                maclean_favoritefilmPara: f,
                                                maclean_holydayHeading: w,
                                                maclean_holydayPara: y,
                                                maclean_bestperonHeading: g,
                                                maclean_bestperonPara: N
                                            }), e.next = 40;
                                            break;
                                        case 37:
                                            e.prev = 37, e.t0 = e.catch(11), console.log(e.t0);
                                        case 40:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [11, 37]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function(e) {
                            function t(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/about-us" : "/en/about-us"
                            }) : Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 stop-header currentpagename",
                                id: "aboutuspage",
                                children: Object(c.jsxs)("div", {
                                    className: "col-12 hv100 teamdetails",
                                    id: "ross",
                                    children: [Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/about-us#team",
                                        className: "about-back",
                                        children: "Go Back"
                                    }), Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/ruby",
                                        className: "about-next",
                                        children: "Next BIO"
                                    }), Object(c.jsxs)("div", {
                                        className: "aboutteamdetailstitle",
                                        children: [Object(c.jsx)("h1", {
                                            children: this.state.maclean_Firstname
                                        }), Object(c.jsxs)("h1", {
                                            children: [this.state.maclean_Lastname, Object(c.jsx)("p", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: t(this.state.maclean_designation)
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "aboutteamdetails",
                                        children: Object(c.jsx)("div", {
                                            className: "col-12 p-0 aboutdetailslist-ralevent",
                                            children: Object(c.jsxs)("div", {
                                                className: "aboutdetailslist content mCustomScrollbar",
                                                style: {
                                                    height: "60vh"
                                                },
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.maclean_address1
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.maclean_address2
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.maclean_skillsCount
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: t(this.state.maclean_skill1)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.maclean_personalityHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: t(this.state.maclean_personalityPara)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.maclean_lessonHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: t(this.state.maclean_lessonPara)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.maclean_animalHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.maclean_animalPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.maclean_favoritefilmHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.maclean_favoritefilmPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.maclean_holydayHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.maclean_holydayPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.maclean_bestperonHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.maclean_bestperonPara
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                K = Object(m.h)(V);
            s(30).config();
            var J = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, _, C;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/support.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/media-player.js"), s.async = !1, document.body.appendChild(s), (c = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), c.async = !1, document.body.appendChild(c), a = this, c.onload = function() {
                                                a.isFunction(window.$) & a.isFunction(window.$(".outer,.nested").mCustomScrollbar) && (window.$(".outer,.nested").mCustomScrollbar(), window.$(".inner.horizontal-images").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 15, e.next = 18, S.getEntries({
                                                content_type: "teamMember2RossLyndon"
                                            });
                                        case 18:
                                            n = e.sent, console.log(n), i = n.items[0].fields.FirstName.content[0].content[0].value, l = n.items[0].fields.LastName.content[0].content[0].value, o = n.items[0].fields.designation.content[0].content[0].value, r = n.items[0].fields.address1.content[0].content[0].value, d = n.items[0].fields.address2.content[0].content[0].value, j = n.items[0].fields.skillsCount.content[0].content[0].value, m = n.items[0].fields.skill1.content[0].content[0].value, h = n.items[0].fields.skill2.content[0].content[0].value, b = n.items[0].fields.skill3.content[0].content[0].value, u = n.items[0].fields.personalityHeading.content[0].content[0].value, v = n.items[0].fields.personalityPara.content[0].content[0].value, x = n.items[0].fields.lessonHeading.content[0].content[0].value, O = n.items[0].fields.lessonPara.content[0].content[0].value, f = n.items[0].fields.animalHeading.content[0].content[0].value, w = n.items[0].fields.animalPara.content[0].content[0].value, y = n.items[0].fields.favoriteFilm.content[0].content[0].value, g = n.items[0].fields.favoritefilmPara.content[0].content[0].value, N = n.items[0].fields.holydayHeading.content[0].content[0].value, k = n.items[0].fields.holydayPara.content[0].content[0].value, _ = n.items[0].fields.bestperonHeading.content[0].content[0].value, C = n.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                ross_Firstname: i,
                                                ross_Lastname: l,
                                                ross_designation: o,
                                                ross_address1: r,
                                                ross_address2: d,
                                                ross_skillsCount: j,
                                                ross_skill1: m,
                                                ross_skill2: h,
                                                ross_skill3: b,
                                                ross_personalityHeading: u,
                                                ross_personalityPara: v,
                                                ross_lessonHeading: x,
                                                ross_lessonPara: O,
                                                ross_animalHeading: f,
                                                ross_animalPara: w,
                                                ross_favoritefilmHeading: y,
                                                ross_favoritefilmPara: g,
                                                ross_holydayHeading: N,
                                                ross_holydayPara: k,
                                                ross_bestperonHeading: _,
                                                ross_bestperonPara: C
                                            }), e.next = 47;
                                            break;
                                        case 44:
                                            e.prev = 44, e.t0 = e.catch(15), console.log(e.t0);
                                        case 47:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [15, 44]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function(e) {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/about-us" : "/en/about-us"
                            }) : Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 stop-header currentpagename",
                                id: "aboutuspage",
                                children: Object(c.jsxs)("div", {
                                    className: "col-12 hv100 teamdetails",
                                    id: "rossl",
                                    children: [Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/about-us#team",
                                        className: "about-back",
                                        children: "Go Back"
                                    }), Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/sami",
                                        className: "about-next",
                                        children: "Next BIO"
                                    }), Object(c.jsxs)("div", {
                                        className: "aboutteamdetailstitle",
                                        children: [Object(c.jsx)("h1", {
                                            children: this.state.ross_Firstname
                                        }), Object(c.jsxs)("h1", {
                                            children: [this.state.ross_Lastname, Object(c.jsx)("p", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: (t = this.state.ross_designation, {
                                                        __html: t
                                                    })
                                                })
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "aboutteamdetails",
                                        children: Object(c.jsx)("div", {
                                            className: "col-12 p-0 aboutdetailslist-ralevent",
                                            children: Object(c.jsxs)("div", {
                                                className: "aboutdetailslist content mCustomScrollbar",
                                                style: {
                                                    height: "60vh"
                                                },
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [console.log("lyndon"), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.ross_address1
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.ross_address2
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.ross_skillsCount
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0",
                                                        children: [this.state.ross_skill1, " ", Object(c.jsx)("br", {}), this.state.ross_skill2, " ", Object(c.jsx)("br", {}), this.state.ross_skill3]
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.ross_personalityHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.ross_personalityPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.ross_lessonHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.ross_lessonPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.ross_animalHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.ross_animalPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.ross_favoritefilmHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.ross_favoritefilmPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.ross_holydayHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.ross_holydayPara
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 pb-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 aboutscroltitle",
                                                        children: this.state.ross_bestperonHeading
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0",
                                                        children: this.state.ross_bestperonPara
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            });
                            var t
                        }
                    }]), s
                }(n.a.Component),
                X = Object(m.h)(J);
            s(30).config();
            var Z = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, _, C;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/support.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/media-player.js"), s.async = !1, document.body.appendChild(s), (c = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), c.async = !1, document.body.appendChild(c), a = this, c.onload = function() {
                                                a.isFunction(window.$) & a.isFunction(window.$(".outer,.nested").mCustomScrollbar) && (window.$(".outer,.nested").mCustomScrollbar(), window.$(".inner.horizontal-images").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 15, e.next = 18, S.getEntries({
                                                content_type: "teamMember1RubyBarve"
                                            });
                                        case 18:
                                            n = e.sent, i = n.items[0].fields.FirstName.content[0].content[0].value, l = n.items[0].fields.LastName.content[0].content[0].value, o = n.items[0].fields.designation.content[0].content[0].value, r = n.items[0].fields.address1.content[0].content[0].value, d = n.items[0].fields.address2.content[0].content[0].value, j = n.items[0].fields.skillsCount.content[0].content[0].value, m = n.items[0].fields.skill1.content[0].content[0].value, h = n.items[0].fields.skill2.content[0].content[0].value, b = n.items[0].fields.skill3.content[0].content[0].value, u = n.items[0].fields.personalityHeading.content[0].content[0].value, v = n.items[0].fields.personalityPara.content[0].content[0].value, x = n.items[0].fields.lessonHeading.content[0].content[0].value, O = n.items[0].fields.lessonPara.content[0].content[0].value, f = n.items[0].fields.animalHeading.content[0].content[0].value, w = n.items[0].fields.animalPara.content[0].content[0].value, y = n.items[0].fields.favoriteFilm.content[0].content[0].value, g = n.items[0].fields.favoritefilmPara.content[0].content[0].value, N = n.items[0].fields.holydayHeading.content[0].content[0].value, k = n.items[0].fields.holydayPara.content[0].content[0].value, _ = n.items[0].fields.bestperonHeading.content[0].content[0].value, C = n.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                ruby_Firstname: i,
                                                ruby_Lastname: l,
                                                ruby_designation: o,
                                                ruby_address1: r,
                                                ruby_address2: d,
                                                ruby_skillsCount: j,
                                                ruby_skill1: m,
                                                ruby_skill2: h,
                                                ruby_skill3: b,
                                                ruby_personalityHeading: u,
                                                ruby_personalityPara: v,
                                                ruby_lessonHeading: x,
                                                ruby_lessonPara: O,
                                                ruby_animalHeading: f,
                                                ruby_animalPara: w,
                                                ruby_favoritefilmHeading: y,
                                                ruby_favoritefilmPara: g,
                                                ruby_holydayHeading: N,
                                                ruby_holydayPara: k,
                                                ruby_bestperonHeading: _,
                                                ruby_bestperonPara: C
                                            }), e.next = 46;
                                            break;
                                        case 43:
                                            e.prev = 43, e.t0 = e.catch(15), console.log(e.t0);
                                        case 46:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [15, 43]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function(e) {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/m/en/about-us" : "/en/about-us"
                            }) : Object(c.jsx)("div", {
                                children: Object(c.jsxs)("div", {
                                    className: "col-12 hv100 teamdetails",
                                    id: "ruby",
                                    children: [Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/about-us#team",
                                        className: "about-back",
                                        children: "Go Back"
                                    }), Object(c.jsx)(v.b, {
                                        to: this.state.backLink ? this.state.backLink : "/en/dominic",
                                        className: "about-next",
                                        children: "Next BIO"
                                    }), Object(c.jsxs)("div", {
                                        className: "aboutteamdetailstitle",
                                        children: [Object(c.jsx)("h1", {
                                            children: this.state.ruby_Firstname
                                        }), Object(c.jsxs)("h1", {
                                            children: [this.state.ruby_Lastname, Object(c.jsx)("p", {
                                                children: Object(c.jsx)("div", {
                                                    dangerouslySetInnerHTML: (t = this.state.ruby_designation, {
                                                        __html: t
                                                    })
                                                })
                                            })]
                                        }), Object(c.jsx)("div", {
                                            className: "aboutteamdetails",
                                            children: Object(c.jsx)("div", {
                                                className: "col-12 p-0 aboutdetailslist-ralevent",
                                                children: Object(c.jsxs)("div", {
                                                    className: "aboutdetailslist content mCustomScrollbar",
                                                    style: {
                                                        height: "60vh"
                                                    },
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 pb-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.ruby_address1
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: this.state.ruby_address2
                                                        })]
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 pb-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.ruby_skillsCount
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0",
                                                            children: [this.state.ruby_skill1, Object(c.jsx)("br", {}), this.state.ruby_skill2, Object(c.jsx)("br", {}), this.state.ruby_skill3]
                                                        })]
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 pb-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.ruby_personalityHeading
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: this.state.ruby_personalityPara
                                                        })]
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 pb-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.ruby_lessonHeading
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: this.state.ruby_lessonPara
                                                        })]
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 pb-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.ruby_animalHeading
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: this.state.ruby_animalPara
                                                        })]
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 pb-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.ruby_favoritefilmHeading
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: this.state.ruby_favoritefilmPara
                                                        })]
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 pb-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.ruby_holydayHeading
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: this.state.ruby_holydayPara
                                                        })]
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 pb-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutscroltitle",
                                                            children: this.state.ruby_bestperonHeading
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0",
                                                            children: this.state.ruby_bestperonPara
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })
                            });
                            var t
                        }
                    }]), s
                }(n.a.Component),
                Y = Object(m.h)(Z),
                Q = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s() {
                        return Object(o.a)(this, s), t.apply(this, arguments)
                    }
                    return Object(r.a)(s, [{
                        key: "render",
                        value: function() {
                            return Object(c.jsxs)("header", {
                                id: "myDIV",
                                children: [Object(c.jsx)(v.b, {
                                    to: "/m/en/",
                                    className: "brand-logo"
                                }), Object(c.jsxs)("ul", {
                                    className: "Header-Nav",
                                    children: [Object(c.jsx)("li", {
                                        class: "header-getstarted",
                                        children: Object(c.jsx)(v.b, {
                                            to: "/m/en/contact-us",
                                            style: {
                                                color: "#fff"
                                            },
                                            children: "Get started"
                                        })
                                    }), Object(c.jsx)("li", {
                                        className: "header-nav",
                                        children: Object(c.jsx)("button", {})
                                    })]
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                ee = Object(m.h)((function(e) {
                    Object(m.g)();
                    return Object(c.jsx)("div", {
                        className: "menuUp",
                        children: Object(c.jsx)("div", {
                            className: "col-12 p-0 menuoverbg",
                            children: Object(c.jsxs)("header", {
                                children: [Object(c.jsx)(v.b, {
                                    to: "/m/en/",
                                    className: "brand-logo"
                                }), Object(c.jsx)("ul", {
                                    className: "Header-Nav",
                                    children: Object(c.jsx)("li", {
                                        className: "nav-item header-nav CloseMenuIcon",
                                        children: Object(c.jsx)("button", {
                                            className: "closing"
                                        })
                                    })
                                }), Object(c.jsx)("div", {
                                    className: "MenuCenter col-12 row m-0 justify-content-center align-content-center",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-9",
                                        children: [Object(c.jsx)("div", {
                                            className: "col-12 p-0 MenuUp-menu mt-5",
                                            children: "Menu"
                                        }), Object(c.jsx)("div", {
                                            className: "col-12 p-0 pt-3 menuULBD",
                                            children: Object(c.jsxs)("ul", {
                                                children: [Object(c.jsx)("li", {
                                                    className: "MenuLinkOver",
                                                    id: "about",
                                                    children: Object(c.jsx)("span", {
                                                        className: "menu-link",
                                                        onClick: function() {
                                                            return e.history.push("/m/en/about-us")
                                                        },
                                                        children: "About us"
                                                    })
                                                }), Object(c.jsx)("li", {
                                                    className: "MenuLinkOver",
                                                    id: "services",
                                                    children: Object(c.jsx)("span", {
                                                        className: "menu-link",
                                                        onClick: function() {
                                                            return e.history.push("/m/en/services")
                                                        },
                                                        children: "Services"
                                                    })
                                                }), Object(c.jsx)("li", {
                                                    className: "MenuLinkOver",
                                                    id: "work",
                                                    children: Object(c.jsx)("span", {
                                                        className: "menu-link",
                                                        onClick: function() {
                                                            return e.history.push("/m/en/case-studies")
                                                        },
                                                        children: "Work"
                                                    })
                                                }), Object(c.jsx)("li", {
                                                    className: "MenuLinkOver",
                                                    id: "contact",
                                                    children: Object(c.jsx)("span", {
                                                        className: "menu-link",
                                                        onClick: function() {
                                                            return e.history.push("/m/en/contact-us")
                                                        },
                                                        children: "Contact"
                                                    })
                                                })]
                                            })
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 pt-5 menu-social justify-content-between",
                                            children: [Object(c.jsx)("a", {
                                                href: "https://www.facebook.com/TrafficDigitalMEA/",
                                                target: "_Blank",
                                                className: "fb-icon"
                                            }), Object(c.jsx)("a", {
                                                href: "https://twitter.com/trafficdigital_?lang=en",
                                                target: "_Blank",
                                                className: "tw-icon"
                                            }), Object(c.jsx)("a", {
                                                href: "https://www.linkedin.com/company/traffic-digital/",
                                                target: "_Blank",
                                                className: "in-icon"
                                            }), Object(c.jsx)("a", {
                                                href: "https://www.instagram.com/trafficdigital/",
                                                target: "_Blank",
                                                className: "ins-icon"
                                            }), Object(c.jsx)("a", {
                                                href: "https://www.youtube.com/c/TrafficDigital",
                                                target: "_Blank",
                                                className: "yt-icon"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })),
                te = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s() {
                        return Object(o.a)(this, s), t.apply(this, arguments)
                    }
                    return Object(r.a)(s, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return Object(c.jsxs)("div", {
                                className: "section footer-fullpage",
                                "data-pai": "footer",
                                id: "footerx",
                                children: [Object(c.jsx)("div", {
                                    className: "col-12 p-0 row m-0 mt-5 align-content-center FooterContent",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 mb-4 justify-content-center footerGetInTouch marquee-",
                                        children: Object(c.jsxs)("div", {
                                            className: "col-12 p-0 row m-0 text-center justify-content-center Marquee-p-",
                                            children: [Object(c.jsx)("span", {
                                                className: "col-12 gettouch1",
                                                children: "Let\u2019s Create Together"
                                            }), Object(c.jsx)("span", {
                                                onClick: function() {
                                                    return e.props.history.push("/m/en/contact-us")
                                                },
                                                className: "gettouch2",
                                                children: "Get in touch"
                                            })]
                                        })
                                    })
                                }), Object(c.jsxs)("div", {
                                    className: "col-12 p-0 mt-5 pt-4",
                                    children: [Object(c.jsx)("button", {
                                        className: "footerprev"
                                    }), Object(c.jsx)("button", {
                                        className: "footernext"
                                    }), Object(c.jsxs)("div", {
                                        className: "footerxscroller- FooterContent Marquee-pfooter-",
                                        children: [Object(c.jsx)("div", {
                                            className: "uaeloc loc show",
                                            "data-loc": "uaeloc",
                                            children: Object(c.jsxs)("div", {
                                                className: "loctabsize Country-UAEx text-center",
                                                children: [Object(c.jsx)("div", {
                                                    className: "country",
                                                    children: "UAE"
                                                }), Object(c.jsx)("div", {
                                                    className: "telephone",
                                                    children: Object(c.jsx)("a", {
                                                        href: "tel:+971 (0)4 454 2230",
                                                        children: "+971 (0)4 454 2230"
                                                    })
                                                }), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 address",
                                                    children: Object(c.jsxs)("a", {
                                                        href: "https://goo.gl/maps/9BpePWbynzXGVMdFA",
                                                        target: "_blank",
                                                        children: [Object(c.jsx)("p", {
                                                            children: "Mazaya Business"
                                                        }), Object(c.jsx)("p", {
                                                            children: "Avenue, Tower AA1 JLT,"
                                                        }), Object(c.jsx)("p", {
                                                            children: "Dubai, UAE"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), Object(c.jsx)("div", {
                                            className: "sraloc loc hide",
                                            "data-loc": "sraloc",
                                            children: Object(c.jsxs)("div", {
                                                className: "loctabsize Country-SRAx text-center",
                                                children: [Object(c.jsx)("div", {
                                                    className: "country",
                                                    children: "Saudi\xa0Arabia"
                                                }), Object(c.jsx)("div", {
                                                    className: "telephone",
                                                    children: Object(c.jsx)("a", {
                                                        href: "tel:+966 (1)1 511 7692",
                                                        children: "+966 (1)1 511 7692"
                                                    })
                                                }), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 address",
                                                    children: Object(c.jsxs)("a", {
                                                        href: "https://goo.gl/maps/1g49g3PXDJY5JRJT9",
                                                        target: "_blank",
                                                        children: [Object(c.jsx)("p", {
                                                            children: "Eastern Ring Branch"
                                                        }), Object(c.jsx)("p", {
                                                            children: "Rd, Ghirnatah, Riyadh"
                                                        }), Object(c.jsx)("p", {
                                                            children: "13241, KSA"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), Object(c.jsx)("div", {
                                            className: "pkloc loc hide",
                                            "data-loc": "pkloc",
                                            children: Object(c.jsxs)("div", {
                                                className: "loctabsize Country-PKx text-center",
                                                children: [Object(c.jsx)("div", {
                                                    className: "country",
                                                    children: "Pakistan"
                                                }), Object(c.jsx)("div", {
                                                    className: "telephone",
                                                    children: Object(c.jsx)("a", {
                                                        href: "tel:+92 (2)1 3499 2028",
                                                        children: "+92 (2)1 3499 2028"
                                                    })
                                                }), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 address",
                                                    children: Object(c.jsxs)("a", {
                                                        href: "https://goo.gl/maps/Pnm3MdA2SQrE6hMSA",
                                                        target: "_blank",
                                                        children: [Object(c.jsx)("p", {
                                                            children: "50-J, Shahrah-e-Faisal"
                                                        }), Object(c.jsx)("p", {
                                                            children: "Rd, Block 6 PECHS,"
                                                        }), Object(c.jsx)("p", {
                                                            children: "Karachi, Pakistan"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), Object(c.jsx)("div", {
                                            className: "egyloc loc hide",
                                            "data-loc": "egyloc",
                                            children: Object(c.jsxs)("div", {
                                                className: "loctabsize Country-Egyptx text-center",
                                                children: [Object(c.jsx)("div", {
                                                    className: "country",
                                                    children: "Egypt"
                                                }), Object(c.jsx)("div", {
                                                    className: "telephone",
                                                    children: Object(c.jsx)("a", {
                                                        href: "tel:+971 (0)4 454 2230",
                                                        children: "+971 (0)4 454 2230"
                                                    })
                                                }), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 address",
                                                    children: Object(c.jsxs)("a", {
                                                        href: "https://goo.gl/maps/UDrtnjHjscmGC8HVA",
                                                        target: "_blank",
                                                        children: [Object(c.jsx)("p", {
                                                            children: "10, Street 22, Maadi,"
                                                        }), Object(c.jsx)("p", {
                                                            children: "Cairo, Egypt"
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "col-12 p-0 websiteFooter border-top",
                                    children: Object(c.jsx)("div", {
                                        className: "container",
                                        children: Object(c.jsxs)("div", {
                                            className: "col-12 row m-0 p-0 pt-5 pb-5 footerCopy",
                                            children: [Object(c.jsx)("div", {
                                                className: "col-md-12 p-0 footercopyright",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 text-center",
                                                    children: "\xa9 The Collective Group Ltd 2020. UAE - Saudi Arabia - Pakistan - Egypt"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-md-12 p-0 row m-0 mt-4 mb-3 justify-content-center",
                                                children: [Object(c.jsx)("a", {
                                                    href: "https://www.facebook.com/TrafficDigitalMEA/",
                                                    target: "_Blank",
                                                    className: "footer-fb"
                                                }), Object(c.jsx)("a", {
                                                    href: "https://twitter.com/trafficdigital_?lang=en",
                                                    target: "_Blank",
                                                    className: "footer-tw"
                                                }), Object(c.jsx)("a", {
                                                    href: "https://www.linkedin.com/company/traffic-digital/",
                                                    target: "_Blank",
                                                    className: "footer-in"
                                                }), Object(c.jsx)("a", {
                                                    href: "https://www.instagram.com/trafficdigital/",
                                                    target: "_Blank",
                                                    className: "footer-ins"
                                                }), Object(c.jsx)("a", {
                                                    href: "https://www.youtube.com/c/TrafficDigital",
                                                    target: "_Blank",
                                                    className: "footer-yt"
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                se = Object(m.h)(te),
                ce = k.a({
                    space: "n270il9u0asdasdasdsadasdbkk",
                    accessToken: "asdsadasdasdsadsadsadasdasd"
                });

            function ae() {
                var e = document.createElement("script");
                e.src = "".concat("", "/js/js-video.js"), e.async = !1, document.body.appendChild(e);
                var t = document.createElement("script");
                t.src = "".concat("", "/js/js-fullpage.js"), t.async = !1, document.body.appendChild(t);
                var s = document.createElement("script");
                s.src = "".concat("", "/js/js-mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                var c = document.createElement("script");
                c.src = "".concat("", "/js/js-media-player.js"), c.async = !1, document.body.appendChild(c);
                var a = document.createElement("script");
                a.src = "".concat("", "/js/js-loadcss.js"), a.async = !1, document.body.appendChild(a);
                var n = document.createElement("script");
                n.src = "".concat("", "/js/js-footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n)
            }
            var ne = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), ae(), (t = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), t.async = !1, document.body.appendChild(t), s = this, t.onload = function() {
                                                s.isFunction(window.$) && s.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 8, e.next = 11, ce.getEntries({
                                                content_type: "homePageSecondScreen"
                                            });
                                        case 11:
                                            c = e.sent, a = c.items[0].fields.heading.content[0].content[0].value, n = c.items[0].fields.subHeading.content[0].content[0].value, this.setState({
                                                heading: a,
                                                subheading: n
                                            }), e.next = 20;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e.catch(8), console.log(e.t0);
                                        case 20:
                                            return e.prev = 20, e.next = 23, ce.getEntries({
                                                content_type: "homePageThirdScreen"
                                            });
                                        case 23:
                                            i = e.sent, l = i.items[0].fields.heading.content[0].content[0].value, o = i.items[0].fields.subHeading.content[0].content[0].value, this.setState({
                                                secondSectionHeading: l,
                                                secondSectionPara: o
                                            }), e.next = 32;
                                            break;
                                        case 29:
                                            e.prev = 29, e.t1 = e.catch(20), console.log(e.t1);
                                        case 32:
                                            return e.prev = 32, e.next = 35, ce.getEntries({
                                                content_type: "homePageFourthScreen"
                                            });
                                        case 35:
                                            r = e.sent, d = r.items[0].fields.heading.content[0].content[0].value, j = r.items[0].fields.subheading.content[0].content[0].value, this.setState({
                                                forthSectionHeading: d,
                                                forthSectionPara: j
                                            }), e.next = 44;
                                            break;
                                        case 41:
                                            e.prev = 41, e.t2 = e.catch(32), console.log(e.t2);
                                        case 44:
                                            return e.prev = 44, e.next = 47, ce.getEntries({
                                                content_type: "homePageFifthScreen"
                                            });
                                        case 47:
                                            m = e.sent, console.log(m), h = m.items[0].fields.heading.content[0].content[0].value, b = m.items[0].fields.subheading.content[0].content[0].value, this.setState({
                                                fifthSectionHeading: h,
                                                fifthSectionPara: b
                                            }), e.next = 57;
                                            break;
                                        case 54:
                                            e.prev = 54, e.t3 = e.catch(44), console.log(e.t3);
                                        case 57:
                                            return e.prev = 57, e.next = 60, ce.getEntries({
                                                content_type: "homePageSixScreen"
                                            });
                                        case 60:
                                            u = e.sent, console.log(u), v = u.items[0].fields.heading.content[0].content[0].value, x = u.items[0].fields.subheading.content[0].content[0].value, this.setState({
                                                sixSectionHeading: v,
                                                sixSectionPara: x
                                            }), e.next = 70;
                                            break;
                                        case 67:
                                            e.prev = 67, e.t4 = e.catch(57), console.log(e.t4);
                                        case 70:
                                            return e.prev = 70, e.next = 73, ce.getEntries({
                                                content_type: "homePageSevenScreen"
                                            });
                                        case 73:
                                            O = e.sent, console.log(O), f = O.items[0].fields.heading.content[0].content[0].value, w = O.items[0].fields.subheading.content[0].content[0].value, y = O.items[0].fields.link.content[0].content[0].value, this.setState({
                                                sevenSectionHeading: f,
                                                sevenSectionPara: w,
                                                sevenSectionLink: y
                                            }), e.next = 84;
                                            break;
                                        case 81:
                                            e.prev = 81, e.t5 = e.catch(70), console.log(e.t5);
                                        case 84:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 85:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [8, 17],
                                    [20, 29],
                                    [32, 41],
                                    [44, 54],
                                    [57, 67],
                                    [70, 81]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en" : "/m/en"
                            }) : this.state.isLoading ? Object(c.jsx)(y, {}) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "Home"
                                    }), Object(c.jsx)("meta", {
                                        name: "Traffic Digital: Full-service Digital Marketing Consultancy",
                                        content: "Basic example"
                                    }), Object(c.jsx)("link", {
                                        rel: "canonical",
                                        href: "http://test.wewanttraffic.com/en"
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "homepage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsxs)("div", {
                                                className: "section home-fullpage curs",
                                                "data-pai": "home",
                                                id: "section0",
                                                children: [Object(c.jsx)(Q, {}), Object(c.jsx)(ee, {}), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center playbtn-boxdiv",
                                                    children: Object(c.jsx)("div", {
                                                        className: "Playbtn-box",
                                                        children: Object(c.jsxs)(v.b, {
                                                            to: "/m/en/homeplayer",
                                                            children: [Object(c.jsx)("i", {}), Object(c.jsx)("label", {})]
                                                        })
                                                    })
                                                }), Object(c.jsx)("div", {
                                                    className: "scroll-explore",
                                                    children: Object(c.jsxs)("a", {
                                                        href: "/m/en#about",
                                                        className: "whitemouse",
                                                        children: [Object(c.jsxs)("svg", {
                                                            viewBox: "0 0 347 490",
                                                            children: [Object(c.jsx)("path", {
                                                                id: "wheel",
                                                                d: "M123.359,79.775l0,72.843"
                                                            }), Object(c.jsx)("path", {
                                                                id: "mouse",
                                                                d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                                                            })]
                                                        }), "Scroll to explore"]
                                                    })
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "section about-fullpage row m-0 align-content-center",
                                                "data-pai": "about",
                                                id: "section1",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-3 row m-0",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 row m-0 align-content-center aboutscrollpage",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 mb-5 eachScrolpageTitle",
                                                            children: "About us"
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0 m-0 row mt-2 mb-3",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "aboutyears",
                                                                children: [Object(c.jsx)("span", {
                                                                    className: "liqleft-1-5",
                                                                    children: "2010"
                                                                }), Object(c.jsx)("i", {
                                                                    className: "liqleft-2"
                                                                }), Object(c.jsx)("span", {
                                                                    className: "liqleft-2-5",
                                                                    children: "2020"
                                                                })]
                                                            })
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 abouthometext",
                                                            children: [Object(c.jsx)("h1", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.heading)
                                                                })
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 row m-0",
                                                                children: [Object(c.jsx)("p", {
                                                                    className: "col p-0 mt-5 mb-4",
                                                                    children: Object(c.jsx)("div", {
                                                                        dangerouslySetInnerHTML: e(this.state.subheading)
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "aboutimagescrollpage"
                                                                })]
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 mt-3",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: "/m/en/about-us",
                                                                    className: "Pagelearnbtn liqright-3",
                                                                    children: "Learn more"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section Slider-fullpage",
                                                "data-pai": "unicef",
                                                id: "section2",
                                                children: Object(c.jsx)("div", {
                                                    className: "unicep-fullpage",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                        style: {
                                                            height: "100vh"
                                                        },
                                                        children: [Object(c.jsx)("p", {
                                                            className: "col-12 m-0 text-center pagetext-space",
                                                            children: "Recent work"
                                                        }), Object(c.jsxs)("div", {
                                                            children: [Object(c.jsx)("h1", {
                                                                className: "row m-0 col",
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.secondSectionHeading)
                                                                })
                                                            }), Object(c.jsx)("p", {
                                                                className: "col-12 slider-p text-center text-white text-uppercase",
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.secondSectionPara)
                                                                })
                                                            })]
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0  justify-content-center",
                                                            children: Object(c.jsx)(v.b, {
                                                                to: {
                                                                    pathname: "/m/en/player/unicef",
                                                                    state: {
                                                                        name: "Unicef",
                                                                        video: "assets/unicef.mp4",
                                                                        backLink: "/m/en/#unicef"
                                                                    }
                                                                },
                                                                className: "playvideo-btn buttonanimation",
                                                                children: "Play video"
                                                            })
                                                        })]
                                                    })
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section Slider-fullpage honda-fullpage",
                                                "data-pai": "honda",
                                                id: "section2",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsx)("h1", {
                                                        className: "row m-0",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.forthSectionHeading)
                                                        })
                                                    }), Object(c.jsx)("p", {
                                                        className: "col-12 slider-p text-center text-white text-uppercase",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.forthSectionPara)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/honda",
                                                                state: {
                                                                    name: "Honda",
                                                                    video: "assets/honda.mp4",
                                                                    backLink: "/m/en/#honda"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section Slider-fullpage dpworld-fullpage",
                                                "data-pai": "dpworld",
                                                id: "section2",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsx)("h1", {
                                                        className: "row m-0",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.fifthSectionHeading)
                                                        })
                                                    }), Object(c.jsx)("p", {
                                                        className: "col-12 slider-p text-center text-white text-uppercase",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.fifthSectionPara)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/dpworld",
                                                                state: {
                                                                    name: "DP World",
                                                                    video: "assets/dpworld.mp4",
                                                                    backLink: "/m/en/#dpworld"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section Slider-fullpage rexona-fullpage",
                                                "data-pai": "rexona",
                                                id: "section2",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsx)("h1", {
                                                        className: "row m-0",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.sixSectionHeading)
                                                        })
                                                    }), Object(c.jsx)("p", {
                                                        className: "col-12 slider-p text-center text-white text-uppercase",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.sixSectionPara)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/rexona",
                                                                state: {
                                                                    name: "Rexona",
                                                                    video: "assets/rexona.mp4",
                                                                    backLink: "/m/en/#rexona"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section careers-fullpage",
                                                "data-pai": "careers",
                                                id: "section3",
                                                children: Object(c.jsx)("div", {
                                                    className: "career-pinkcircle row m-0 justify-content-center align-content-center",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "careerpink-content text-center",
                                                        children: [Object(c.jsx)("h1", {
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.sevenSectionHeading)
                                                            })
                                                        }), Object(c.jsxs)("p", {
                                                            children: [Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.sevenSectionPara)
                                                            }), Object(c.jsx)("a", {
                                                                href: "mailto:careers@wewanttraffic.com",
                                                                children: Object(c.jsx)("strong", {
                                                                    children: Object(c.jsx)("div", {
                                                                        dangerouslySetInnerHTML: e(this.state.sevenSectionLink)
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), Object(c.jsx)(se, {})]
                                        })
                                    })
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                ie = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/" : "/m/"
                            }) : Object(c.jsxs)("div", {
                                className: "col-12",
                                id: "index-video",
                                children: [Object(c.jsx)("video", {
                                    autoPlay: !0,
                                    muted: !0,
                                    id: "IntroVideo",
                                    children: Object(c.jsx)("source", {
                                        src: "assets/mobileintro.mp4",
                                        type: "video/mp4"
                                    })
                                }), setTimeout((function() {
                                    return e.props.history.push("/m/en")
                                }), 6e3)]
                            })
                        }
                    }]), s
                }(n.a.Component),
                le = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.handleChange = function(e) {
                            var t = e.target,
                                s = t.value,
                                a = t.name;
                            c.setState(Object(I.a)({}, a, s))
                        }, c.handleSubmit = function() {
                            var e = Object(u.a)(p.a.mark((function e(t) {
                                var s, a, n, i, l;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), c.setState({
                                                isLoading: !0
                                            }), s = c.state.user, a = c.state.company, n = c.state.email, i = c.state.phone, l = c.state.project, e.next = 9, fetch("https://0x8ofb8k4a.execute-api.us-east-1.amazonaws.com/dev/sendmail", {
                                                method: "POST",
                                                body: JSON.stringify({
                                                    name: s,
                                                    companyName: a,
                                                    email: n,
                                                    phoneNumber: i,
                                                    projectDetails: l
                                                }),
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                        case 9:
                                            200 === e.sent.status ? (c.setState({
                                                isLoading: !1
                                            }), c.props.history.push("/m/en/contact-success")) : (c.setState({
                                                isLoading: !1
                                            }), console.log("FAILED SENDING EMAIL"));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), c.state = {
                            isMobile: window.innerWidth >= 768,
                            user: "",
                            company: "",
                            email: "",
                            phone: "",
                            project: "",
                            isLoading: !1
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), ae(), (t = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), t.async = !1, document.body.appendChild(t), s = this, t.onload = function() {
                                                s.isFunction(window.$) && s.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 8, e.next = 11, ce.getEntries({
                                                content_type: "contactUsMainSection"
                                            });
                                        case 11:
                                            c = e.sent, a = c.items[0].fields.heading.content[0].content[0].value, n = c.items[0].fields.secondPara.content[0].content[0].value, i = c.items[0].fields.thirdpara.content[0].content[0].value, l = c.items[0].fields.fourthPara.content[0].content[0].value, this.setState({
                                                firstSectionHeading1: a,
                                                firstSectionpara1: n,
                                                firstSectionPara2: i,
                                                firstSectionPara3: l
                                            }), e.next = 22;
                                            break;
                                        case 19:
                                            e.prev = 19, e.t0 = e.catch(8), console.log(e.t0);
                                        case 22:
                                            return e.prev = 22, e.next = 25, ce.getEntries({
                                                content_type: "contactUsSecondSection"
                                            });
                                        case 25:
                                            o = e.sent, r = o.items[0].fields.heading.content[0].content[0].value, this.setState({
                                                secondSectionHeading1: r
                                            }), e.next = 33;
                                            break;
                                        case 30:
                                            e.prev = 30, e.t1 = e.catch(22), console.log(e.t1);
                                        case 33:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [8, 19],
                                    [22, 30]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/contact-us" : "/m/en/contact-us"
                            }) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "Contact"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/contact-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Contact - +971 (0)4 454 2230 - Traffic Digital",
                                        content: "Our team is always ready to help. Just give us a call, send us an email, or fill out the form."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 brand-blue p-0 row m-0 currentpagename stop-header",
                                        id: "contactpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsxs)("div", {
                                                className: "section Contacthome-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsx)(Q, {}), Object(c.jsx)(ee, {}), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-md-10 p-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutuspage-line",
                                                            children: "Contact Us"
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 contactHomepage-Content",
                                                            children: [Object(c.jsx)("h1", {
                                                                children: this.state.firstSectionHeading1
                                                            }), Object(c.jsx)("h5", {
                                                                children: Object(c.jsx)("a", {
                                                                    href: "mailto:office@wewanttraffic.com",
                                                                    children: this.state.firstSectionpara1
                                                                })
                                                            }), Object(c.jsx)("p", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.firstSectionPara2)
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "/m/en/contact-us#form",
                                                                    className: "contactPage-getdown",
                                                                    children: Object(c.jsx)("div", {
                                                                        dangerouslySetInnerHTML: e(this.state.firstSectionPara3)
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "ContactHomeCircleImage-device"
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "section ContactForm-fullpage",
                                                id: "section0",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-10 p-0",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 ContactFormTitle",
                                                            children: Object(c.jsx)("h1", {
                                                                children: this.state.secondSectionHeading1
                                                            })
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 mt-3 pt-3 Contact-Form",
                                                            children: Object(c.jsxs)("form", {
                                                                method: "POST",
                                                                action: "/m/en/contact-success",
                                                                onSubmit: this.handleSubmit,
                                                                children: [Object(c.jsxs)("div", {
                                                                    className: "col-12",
                                                                    children: [Object(c.jsx)("div", {
                                                                        className: "col-12 p-0",
                                                                        children: Object(c.jsx)("input", {
                                                                            required: !0,
                                                                            name: "user",
                                                                            onChange: this.handleChange,
                                                                            value: this.state.user,
                                                                            type: "text",
                                                                            placeholder: "What's your name?",
                                                                            className: "contact-input1"
                                                                        })
                                                                    }), Object(c.jsx)("div", {
                                                                        className: "col-12 p-0 mt10",
                                                                        children: Object(c.jsx)("input", {
                                                                            required: !0,
                                                                            name: "company",
                                                                            onChange: this.handleChange,
                                                                            value: this.state.company,
                                                                            type: "text",
                                                                            placeholder: "Company",
                                                                            className: "contact-input1"
                                                                        })
                                                                    }), Object(c.jsx)("div", {
                                                                        className: "col-12 p-0 mt10",
                                                                        children: Object(c.jsx)("input", {
                                                                            required: !0,
                                                                            name: "email",
                                                                            onChange: this.handleChange,
                                                                            value: this.state.email,
                                                                            type: "text",
                                                                            placeholder: "Your email",
                                                                            className: "contact-input3"
                                                                        })
                                                                    }), this.state.isLoading ? Object(c.jsx)(y, {}) : null, Object(c.jsx)("div", {
                                                                        className: "col-12 p-0 mt10",
                                                                        children: Object(c.jsx)("input", {
                                                                            required: !0,
                                                                            name: "phone",
                                                                            type: "text",
                                                                            onChange: this.handleChange,
                                                                            value: this.state.phone,
                                                                            placeholder: "Phone number",
                                                                            className: "contact-input2"
                                                                        })
                                                                    }), Object(c.jsx)("div", {
                                                                        className: "col-12 p-0 mt10",
                                                                        children: Object(c.jsx)("input", {
                                                                            required: !0,
                                                                            name: "project",
                                                                            type: "text",
                                                                            onChange: this.handleChange,
                                                                            value: this.state.project,
                                                                            placeholder: "Tell us about your project",
                                                                            className: "contact-input4"
                                                                        })
                                                                    })]
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-md-3 mt10",
                                                                    children: Object(c.jsx)("input", {
                                                                        type: "submit",
                                                                        className: "row justify-content-center align-content-center m-0 ContactBtn-device",
                                                                        value: "Submit"
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section footer-fullpage",
                                                "data-pai": "footer",
                                                id: "footerx",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 mt-5 align-content-center FooterContent",
                                                    children: Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0 mb-4 justify-content-center footerGetInTouch marquee-",
                                                        children: Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 row m-0 text-center justify-content-center Marquee-p-",
                                                            children: [Object(c.jsx)("span", {
                                                                className: "col-12 gettouch1",
                                                                children: "Let\u2019s Create Together"
                                                            }), Object(c.jsx)("span", {
                                                                className: "gettouch2",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "/m/en/contact-us#form",
                                                                    className: "gettouch2",
                                                                    style: {
                                                                        color: "#e81f76"
                                                                    },
                                                                    children: "Get in touch"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 mt-5 pt-4",
                                                    children: [Object(c.jsx)("button", {
                                                        className: "footerprev"
                                                    }), Object(c.jsx)("button", {
                                                        className: "footernext"
                                                    }), Object(c.jsxs)("div", {
                                                        className: "footerxscroller- FooterContent Marquee-pfooter-",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "uaeloc loc show",
                                                            "data-loc": "uaeloc",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "loctabsize Country-UAEx text-center",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "country",
                                                                    children: "UAE"
                                                                }), Object(c.jsx)("div", {
                                                                    className: "telephone",
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "tel:+971 (0)4 454 2230",
                                                                        children: "+971 (0)4 454 2230"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 address",
                                                                    children: Object(c.jsxs)("a", {
                                                                        href: "https://goo.gl/maps/9BpePWbynzXGVMdFA",
                                                                        target: "_blank",
                                                                        children: [Object(c.jsx)("p", {
                                                                            children: "Mazaya Business"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Avenue, Tower AA1 JLT,"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Dubai, UAE"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(c.jsx)("div", {
                                                            className: "sraloc loc hide",
                                                            "data-loc": "sraloc",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "loctabsize Country-SRAx text-center",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "country",
                                                                    children: "Saudi\xa0Arabia"
                                                                }), Object(c.jsx)("div", {
                                                                    className: "telephone",
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "tel:+966 (1)1 511 7692",
                                                                        children: "+966 (1)1 511 7692"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 address",
                                                                    children: Object(c.jsxs)("a", {
                                                                        href: "https://goo.gl/maps/1g49g3PXDJY5JRJT9",
                                                                        target: "_blank",
                                                                        children: [Object(c.jsx)("p", {
                                                                            children: "Eastern Ring Branch"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Rd, Ghirnatah, Riyadh"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "13241, KSA"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(c.jsx)("div", {
                                                            className: "pkloc loc hide",
                                                            "data-loc": "pkloc",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "loctabsize Country-PKx text-center",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "country",
                                                                    children: "Pakistan"
                                                                }), Object(c.jsx)("div", {
                                                                    className: "telephone",
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "tel:+92 (2)1 3499 2028",
                                                                        children: "+92 (2)1 3499 2028"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 address",
                                                                    children: Object(c.jsxs)("a", {
                                                                        href: "https://goo.gl/maps/Pnm3MdA2SQrE6hMSA",
                                                                        target: "_blank",
                                                                        children: [Object(c.jsx)("p", {
                                                                            children: "50-J, Shahrah-e-Faisal"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Rd, Block 6 PECHS,"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Karachi, Pakistan"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(c.jsx)("div", {
                                                            className: "egyloc loc hide",
                                                            "data-loc": "egyloc",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "loctabsize Country-Egyptx text-center",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "country",
                                                                    children: "Egypt"
                                                                }), Object(c.jsx)("div", {
                                                                    className: "telephone",
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "tel:+971 (0)4 454 2230",
                                                                        children: "+971 (0)4 454 2230"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 address",
                                                                    children: Object(c.jsxs)("a", {
                                                                        href: "https://goo.gl/maps/UDrtnjHjscmGC8HVA",
                                                                        target: "_blank",
                                                                        children: [Object(c.jsx)("p", {
                                                                            children: "10, Street 22, Maadi,"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Cairo, Egypt"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                }), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 websiteFooter border-top",
                                                    children: Object(c.jsx)("div", {
                                                        className: "container",
                                                        children: Object(c.jsxs)("div", {
                                                            className: "col-12 row m-0 p-0 pt-5 pb-5 footerCopy",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-md-12 p-0 footercopyright",
                                                                children: Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 text-center",
                                                                    children: "\xa9 The Collective Group Ltd 2020. UAE - Saudi Arabia - Pakistan - Egypt"
                                                                })
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-md-12 p-0 row m-0 mt-4 mb-3 justify-content-center",
                                                                children: [Object(c.jsx)("a", {
                                                                    href: "https://www.facebook.com/TrafficDigitalMEA/",
                                                                    target: "_Blank",
                                                                    className: "footer-fb"
                                                                }), Object(c.jsx)("a", {
                                                                    href: "https://twitter.com/trafficdigital_?lang=en",
                                                                    target: "_Blank",
                                                                    className: "footer-tw"
                                                                }), Object(c.jsx)("a", {
                                                                    href: "https://www.linkedin.com/company/traffic-digital/",
                                                                    target: "_Blank",
                                                                    className: "footer-in"
                                                                }), Object(c.jsx)("a", {
                                                                    href: "https://www.instagram.com/trafficdigital/",
                                                                    target: "_Blank",
                                                                    className: "footer-ins"
                                                                }), Object(c.jsx)("a", {
                                                                    href: "https://www.youtube.com/c/TrafficDigital",
                                                                    target: "_Blank",
                                                                    className: "footer-yt"
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                oe = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, S, _;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), ae(), (t = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), t.async = !1, document.body.appendChild(t), s = this, t.onload = function() {
                                                s.isFunction(window.$) && s.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 8, e.next = 11, ce.getEntries({
                                                content_type: "workPageSection1"
                                            });
                                        case 11:
                                            c = e.sent, a = c.items[0].fields.heading1.content[0].content[0].value, n = c.items[0].fields.heading2.content[0].content[0].value, i = c.items[0].fields.heading3.content[0].content[0].value, l = c.items[0].fields.subHeading.content[0].content[0].value, this.setState({
                                                firstSectionHeading1: a,
                                                firstSectionHeading2: n,
                                                firstSectionHeading3: i,
                                                firstSectionsubHeading: l
                                            }), e.next = 22;
                                            break;
                                        case 19:
                                            e.prev = 19, e.t0 = e.catch(8), console.log(e.t0);
                                        case 22:
                                            return e.prev = 22, e.next = 25, ce.getEntries({
                                                content_type: "workPageSection2"
                                            });
                                        case 25:
                                            o = e.sent, r = o.items[0].fields.heading1.content[0].content[0].value, d = o.items[0].fields.subheading1.content[0].content[0].value, j = o.items[0].fields.heading2.content[0].content[0].value, m = o.items[0].fields.subheading2.content[0].content[0].value, h = o.items[0].fields.heading3.content[0].content[0].value, b = o.items[0].fields.subheading3.content[0].content[0].value, u = o.items[0].fields.heading4.content[0].content[0].value, v = o.items[0].fields.subheading4.content[0].content[0].value, x = o.items[0].fields.heading5.content[0].content[0].value, O = o.items[0].fields.subheading5.content[0].content[0].value, f = o.items[0].fields.heading6.content[0].content[0].value, w = o.items[0].fields.subheading6.content[0].content[0].value, y = o.items[0].fields.heading7.content[0].content[0].value, g = o.items[0].fields.subheading7.content[0].content[0].value, N = o.items[0].fields.heading8.content[0].content[0].value, k = o.items[0].fields.subheading8.content[0].content[0].value, S = o.items[0].fields.heading9.content[0].content[0].value, _ = o.items[0].fields.subheading9.content[0].content[0].value, this.setState({
                                                secondSectionHeading1: r,
                                                secondSectionSubHeading1: d,
                                                secondSectionHeading2: j,
                                                secondSectionSubHeading2: m,
                                                secondSectionHeading3: h,
                                                secondSectionSubHeading3: b,
                                                secondSectionHeading4: u,
                                                secondSectionSubHeading4: v,
                                                secondSectionHeading5: x,
                                                secondSectionSubHeading5: O,
                                                secondSectionHeading6: f,
                                                secondSectionSubHeading6: w,
                                                secondSectionHeading7: y,
                                                secondSectionSubHeading7: g,
                                                secondSectionHeading8: N,
                                                secondSectionSubHeading8: k,
                                                secondSectionHeading9: S,
                                                secondSectionSubHeading9: _
                                            }), e.next = 50;
                                            break;
                                        case 47:
                                            e.prev = 47, e.t1 = e.catch(22), console.log(e.t1);
                                        case 50:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 51:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [8, 19],
                                    [22, 47]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/case-studies" : "/m/en/case-studies"
                            }) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "Work"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/case-studies"
                                    }), Object(c.jsx)("meta", {
                                        name: "Case Studies | Have a Glance At Our Enticing Portfolio - Traffic Digital",
                                        content: "Seeing is believing! Browse through our portfolio to witness how we have served across different industries in the Middle East and internationally. Our case studies will help you understand how we stand out as a creative digital agency."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 brand-blue p-0 row m-0 stop-header currentpagename",
                                        id: "workpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsxs)("div", {
                                                className: "section workPagehome aboutmainpage-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsx)(Q, {}), Object(c.jsx)(ee, {}), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-10",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutuspage-line",
                                                            children: "Work"
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 Workpage-Content",
                                                            children: [Object(c.jsx)("h1", {
                                                                children: this.state.firstSectionHeading1
                                                            }), Object(c.jsx)("h1", {
                                                                children: this.state.firstSectionHeading2
                                                            }), Object(c.jsx)("h1", {
                                                                children: Object(c.jsx)("span", {
                                                                    children: Object(c.jsx)("div", {
                                                                        dangerouslySetInnerHTML: e(this.state.firstSectionHeading3)
                                                                    })
                                                                })
                                                            }), Object(c.jsx)("p", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.firstSectionsubHeading)
                                                                })
                                                            })]
                                                        }), Object(c.jsx)("div", {
                                                            "data-menuanchor": "links",
                                                            className: "scroll-explore",
                                                            children: Object(c.jsxs)("a", {
                                                                href: "/m/en/case-studies#unicef",
                                                                className: "bluemouse",
                                                                children: [Object(c.jsxs)("svg", {
                                                                    viewBox: "0 0 247 390",
                                                                    version: "1.1",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                                    style: {
                                                                        fillRule: "evenodd",
                                                                        clipRule: "evenodd",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeMiterlimit: "1.5"
                                                                    },
                                                                    children: [Object(c.jsx)("path", {
                                                                        id: "wheel",
                                                                        d: "M123.359,79.775l0,72.843",
                                                                        style: {
                                                                            fill: "none",
                                                                            stroke: "#fff",
                                                                            strokeWidth: "20px"
                                                                        }
                                                                    }), Object(c.jsx)("path", {
                                                                        id: "mouse",
                                                                        d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                                        style: {
                                                                            fill: "none",
                                                                            stroke: "#fff",
                                                                            strokeWidth: "20px"
                                                                        }
                                                                    })]
                                                                }), "See for yourself"]
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "section unicef-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col",
                                                            children: this.state.secondSectionHeading1
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading1)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/unicef",
                                                                state: {
                                                                    name: "Unicef",
                                                                    video: "assets/unicef.mp4",
                                                                    backLink: "/m/en/case-studies#unicef"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section honda-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col",
                                                            children: this.state.secondSectionHeading2
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading2)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/honda",
                                                                state: {
                                                                    name: "Honda",
                                                                    video: "assets/honda.mp4",
                                                                    backLink: "/m/en/case-studies#honda"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section dp-world-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col",
                                                            children: this.state.secondSectionHeading3
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading3)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/dpworld",
                                                                state: {
                                                                    name: "DP World",
                                                                    video: "assets/dpworld.mp4",
                                                                    backLink: "/m/en/case-studies#dpworld"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section rexona-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col",
                                                            children: this.state.secondSectionHeading4
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading4)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/rexona",
                                                                state: {
                                                                    name: "Rexona",
                                                                    video: "assets/rexona.mp4",
                                                                    backLink: "/m/en/case-studies#rexona"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section tresemme-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col",
                                                            children: this.state.secondSectionHeading5
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading5)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/tresemme",
                                                                state: {
                                                                    name: "TRESemme",
                                                                    video: "assets/tresemme.mp4",
                                                                    backLink: "/m/en/case-studies#tresemme"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section emirates-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col",
                                                            children: this.state.secondSectionHeading6
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading6)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/emirates",
                                                                state: {
                                                                    name: "Emirates",
                                                                    video: "assets/emirates.mp4",
                                                                    backLink: "/m/en/case-studies#emirates"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section omo-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col",
                                                            children: this.state.secondSectionHeading7
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading7)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/omocomfort",
                                                                state: {
                                                                    name: "Omo - Comfort",
                                                                    video: "assets/omo_comfort.mp4",
                                                                    backLink: "/m/en/case-studies#omocomfort"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section mamas-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col text-center",
                                                            style: {
                                                                fontSize: "11vw"
                                                            },
                                                            children: this.state.secondSectionHeading8
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading8)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/mamaspapas",
                                                                state: {
                                                                    name: "Mamas & Papas",
                                                                    video: "assets/mamas_papas.mp4",
                                                                    backLink: "/m/en/case-studies#mamaspapas"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section aecb-fullpage Slider-fullpage",
                                                id: "section0",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 row p-0 m-0 align-content-center justify-content-center",
                                                    style: {
                                                        height: "100vh"
                                                    },
                                                    children: [Object(c.jsx)("p", {
                                                        className: "col-12 m-0 text-center pagetext-space",
                                                        children: "Recent work"
                                                    }), Object(c.jsxs)("div", {
                                                        children: [Object(c.jsx)("h1", {
                                                            className: "row m-0 col",
                                                            children: this.state.secondSectionHeading9
                                                        }), Object(c.jsx)("p", {
                                                            className: "col-12 slider-p text-center text-white text-uppercase",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.secondSectionSubHeading9)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0  justify-content-center",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/m/en/player/aecb",
                                                                state: {
                                                                    name: "AECB",
                                                                    video: "assets/aecb.mp4",
                                                                    backLink: "/m/en/case-studies#aecb"
                                                                }
                                                            },
                                                            className: "playvideo-btn buttonanimation",
                                                            children: "Play video"
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)(se, {})]
                                        })
                                    })
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                re = (s(194), function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), document.body.style.cssText = "overflow: scroll !important;", document.body.style.position = "fixed";
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, S, _, C, M, P, L, E, H, I, T, D, W, A, z, F, B, U, R, $, G, q, V, K, J, X, Z, Y, Q, ee, te, se;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), document.body.style.setProperty("scroll", "overflow", "important"), document.body.style.overflow = "scroll", document.body.style.position = "unset", ae(), (t = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), t.async = !1, document.body.appendChild(t), s = this, t.onload = function() {
                                                s.isFunction(window.$) && s.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 11, e.next = 14, ce.getEntries({
                                                content_type: "servicesPageSection1"
                                            });
                                        case 14:
                                            c = e.sent, a = c.items[0].fields.heading1.content[0].content[0].value, n = c.items[0].fields.heading2.content[0].content[0].value, i = c.items[0].fields.heading3.content[0].content[0].value, l = c.items[0].fields.heading4.content[0].content[0].value, o = c.items[0].fields.para.content[0].content[0].value, this.setState({
                                                firstSectionHeading1: a,
                                                firstSectionHeading2: n,
                                                firstSectionHeading3: i,
                                                firstSectionHeading4: l,
                                                firstSectionpara: o
                                            }), e.next = 26;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(11), console.log(e.t0);
                                        case 26:
                                            return e.prev = 26, e.next = 29, ce.getEntries({
                                                content_type: "servicesPageSection2"
                                            });
                                        case 29:
                                            r = e.sent, d = r.items[0].fields.heading.content[0].content[0].value, j = r.items[0].fields.subheading.content[0].content[0].value, m = r.items[0].fields.para1.content[0].content[0].value, h = r.items[0].fields.para2.content[0].content[0].value, b = r.items[0].fields.para3.content[0].content[0].value, u = r.items[0].fields.para4.content[0].content[0].value, this.setState({
                                                secondSectionHeading: d,
                                                secondSectionsubHeading: j,
                                                secondSectionpara1: m,
                                                secondSectionpara2: h,
                                                secondSectionpara3: b,
                                                secondSectionpara4: u
                                            }), e.next = 42;
                                            break;
                                        case 39:
                                            e.prev = 39, e.t1 = e.catch(26), console.log(e.t1);
                                        case 42:
                                            return e.prev = 42, e.next = 45, ce.getEntries({
                                                content_type: "servicesPageSection3"
                                            });
                                        case 45:
                                            v = e.sent, x = v.items[0].fields.heading.content[0].content[0].value, O = v.items[0].fields.subheading.content[0].content[0].value, f = v.items[0].fields.para1.content[0].content[0].value, w = v.items[0].fields.para2.content[0].content[0].value, y = v.items[0].fields.para3.content[0].content[0].value, g = v.items[0].fields.para4.content[0].content[0].value, this.setState({
                                                thirdSectionHeading: x,
                                                thirdSectionsubHeading: O,
                                                thirdSectionpara1: f,
                                                thirdSectionpara2: w,
                                                thirdSectionpara3: y,
                                                thirdSectionpara4: g
                                            }), e.next = 58;
                                            break;
                                        case 55:
                                            e.prev = 55, e.t2 = e.catch(42), console.log(e.t2);
                                        case 58:
                                            return e.prev = 58, e.next = 61, ce.getEntries({
                                                content_type: "servicesPageSection4"
                                            });
                                        case 61:
                                            N = e.sent, k = N.items[0].fields.heading.content[0].content[0].value, S = N.items[0].fields.subheading.content[0].content[0].value, _ = N.items[0].fields.point1, C = N.items[0].fields.point2, M = N.items[0].fields.point3, P = N.items[0].fields.point4.content[0].content[0].value, L = N.items[0].fields.point5, E = N.items[0].fields.point6, H = N.items[0].fields.point7, this.setState({
                                                forthSectionHeading: k,
                                                forthSectionsubHeading: S,
                                                forthSectionpara1: _,
                                                forthSectionpara2: C,
                                                forthSectionpara3: M,
                                                forthSectionpara4: P,
                                                forthSectionpara5: L,
                                                forthSectionpara6: E,
                                                forthSectionpara7: H
                                            }), e.next = 77;
                                            break;
                                        case 74:
                                            e.prev = 74, e.t3 = e.catch(58), console.log(e.t3);
                                        case 77:
                                            return e.prev = 77, e.next = 80, ce.getEntries({
                                                content_type: "servicesPageSection5"
                                            });
                                        case 80:
                                            I = e.sent, T = I.items[0].fields.heading.content[0].content[0].value, D = I.items[0].fields.subheading.content[0].content[0].value, W = I.items[0].fields.para1.content[0].content[0].value, A = I.items[0].fields.para2.content[0].content[0].value, z = I.items[0].fields.para3.content[0].content[0].value, F = I.items[0].fields.para4.content[0].content[0].value, this.setState({
                                                fifthSectionHeading: T,
                                                fifthSectionsubHeading: D,
                                                fifthSectionpara1: W,
                                                fifthSectionpara2: A,
                                                fifthSectionpara3: z,
                                                fifthSectionpara4: F
                                            }), e.next = 93;
                                            break;
                                        case 90:
                                            e.prev = 90, e.t4 = e.catch(77), console.log(e.t4);
                                        case 93:
                                            return e.prev = 93, e.next = 96, ce.getEntries({
                                                content_type: "servicesPageSection6"
                                            });
                                        case 96:
                                            B = e.sent, U = B.items[0].fields.heading.content[0].content[0].value, R = B.items[0].fields.subheading.content[0].content[0].value, $ = B.items[0].fields.para1.content[0].content[0].value, G = B.items[0].fields.para2.content[0].content[0].value, q = B.items[0].fields.para3.content[0].content[0].value, V = B.items[0].fields.para4.content[0].content[0].value, this.setState({
                                                sixSectionHeading: U,
                                                sixSectionsubHeading: R,
                                                sixSectionpara1: $,
                                                sixSectionpara2: G,
                                                sixSectionpara3: q,
                                                sixSectionpara4: V
                                            }), e.next = 109;
                                            break;
                                        case 106:
                                            e.prev = 106, e.t5 = e.catch(93), console.log(e.t5);
                                        case 109:
                                            return e.prev = 109, e.next = 112, ce.getEntries({
                                                content_type: "servicesPageSection7"
                                            });
                                        case 112:
                                            K = e.sent, J = K.items[0].fields.heading.content[0].content[0].value, X = K.items[0].fields.subheading.content[0].content[0].value, Z = K.items[0].fields.para1.content[0].content[0].value, Y = K.items[0].fields.para2.content[0].content[0].value, Q = K.items[0].fields.para3.content[0].content[0].value, ee = K.items[0].fields.para4.content[0].content[0].value, te = K.items[0].fields.para5.content[0].content[0].value, se = K.items[0].fields.para6.content[0].content[0].value, this.setState({
                                                sevenSectionHeading: J,
                                                sevenSectionsubHeading: X,
                                                sevenSectionpara1: Z,
                                                sevenSectionpara2: Y,
                                                sevenSectionpara3: Q,
                                                sevenSectionpara4: ee,
                                                sevenSectionpara5: te,
                                                sevenSectionpara6: se
                                            }), e.next = 127;
                                            break;
                                        case 124:
                                            e.prev = 124, e.t6 = e.catch(109), console.log(e.t6);
                                        case 127:
                                            this.setState({
                                                isLoading: !1
                                            });
                                        case 128:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [11, 23],
                                    [26, 39],
                                    [42, 55],
                                    [58, 74],
                                    [77, 90],
                                    [93, 106],
                                    [109, 124]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/services" : "/m/en/services"
                            }) : Object(c.jsxs)("div", {
                                className: "device device-service",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "Services"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/services"
                                    }), Object(c.jsx)("meta", {
                                        name: "Digital Marketing Services | Internet Marketing Solutions - Traffic Digital",
                                        content: "Traffic Digital is a Google & Facebook partnered digital marketing agency that provides top-notch internet marketing solutions like SEO, PPC, SEM, and SMM, etc. We drive brand awareness & lead generation through all the digital channels."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 brand-blue p-0 row m-0 stop-header currentpagename",
                                        id: "servicespage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpagex",
                                            children: [Object(c.jsxs)("div", {
                                                className: "sectionx serviceshome-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsxs)("header", {
                                                    id: "myDIV",
                                                    children: [Object(c.jsx)(v.b, {
                                                        to: "/m/en",
                                                        className: "brand-logo"
                                                    }), Object(c.jsxs)("ul", {
                                                        className: "Header-Nav",
                                                        children: [Object(c.jsx)("li", {
                                                            className: "header-getstarted",
                                                            children: Object(c.jsx)(v.b, {
                                                                to: "/m/en/contact-us",
                                                                children: "Get started"
                                                            })
                                                        }), Object(c.jsx)("li", {
                                                            className: "header-nav",
                                                            children: Object(c.jsx)("button", {
                                                                className: "service-menu-icon"
                                                            })
                                                        })]
                                                    })]
                                                }), Object(c.jsx)(ee, {}), Object(c.jsx)(ee, {}), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-md-10 p-0 row pl-4 pr-5",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutuspage-line",
                                                            children: "Services"
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 Servicespage-Content",
                                                            children: [Object(c.jsx)("h1", {
                                                                children: this.state.firstSectionHeading1
                                                            }), Object(c.jsx)("h1", {
                                                                children: this.state.firstSectionHeading2
                                                            }), Object(c.jsx)("h1", {
                                                                children: this.state.firstSectionHeading3
                                                            }), Object(c.jsx)("h1", {
                                                                children: this.state.firstSectionHeading4
                                                            }), Object(c.jsx)("p", {
                                                                children: this.state.firstSectionpara
                                                            })]
                                                        }), Object(c.jsx)("div", {
                                                            "data-menuanchor": "possess",
                                                            className: "scroll-explore justify-content-start",
                                                            children: Object(c.jsxs)("a", {
                                                                href: "/m/en/services#assessment",
                                                                className: "bluemouse mt-2",
                                                                children: [Object(c.jsxs)("svg", {
                                                                    viewBox: "0 0 247 390",
                                                                    version: "1.1",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                                    style: {
                                                                        fillRule: "evenodd",
                                                                        clipRule: "evenodd",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeMiterlimit: "1.5"
                                                                    },
                                                                    children: [Object(c.jsx)("path", {
                                                                        id: "wheel",
                                                                        d: "M123.359,79.775l0,72.843",
                                                                        style: {
                                                                            fill: "none",
                                                                            stroke: "#fff",
                                                                            strokeWidth: "20px"
                                                                        }
                                                                    }), Object(c.jsx)("path", {
                                                                        id: "mouse",
                                                                        d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                                        style: {
                                                                            fill: "none",
                                                                            stroke: "#fff",
                                                                            strokeWidth: "20px"
                                                                        }
                                                                    })]
                                                                }), "HERE\u2019S WHAT WE OFFER"]
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }), Object(c.jsxs)("div", {
                                                className: "sectionx assessment-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-11 p-0 serv-title",
                                                    children: [Object(c.jsxs)("p", {
                                                        children: [Object(c.jsx)("b", {
                                                            children: "01 / "
                                                        }), "Service"]
                                                    }), Object(c.jsx)("h1", {
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.secondSectionHeading)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "serv-list",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 serv-list-text",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.secondSectionsubHeading)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 serv-list-ul",
                                                        children: Object(c.jsxs)("ul", {
                                                            children: [Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.secondSectionpara1)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.secondSectionpara2)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.secondSectionpara3)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.secondSectionpara4)
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsxs)("div", {
                                                className: "sectionx strategy-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 serv-title",
                                                    children: [Object(c.jsxs)("p", {
                                                        children: [Object(c.jsx)("b", {
                                                            children: "02 / "
                                                        }), "Service"]
                                                    }), Object(c.jsx)("h1", {
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.thirdSectionHeading)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "serv-list",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 serv-list-text",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.thirdSectionsubHeading)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 serv-list-ul",
                                                        children: Object(c.jsxs)("ul", {
                                                            children: [Object(c.jsxs)("li", {
                                                                children: [Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.thirdSectionpara1)
                                                                }), "  "]
                                                            }), Object(c.jsxs)("li", {
                                                                children: [Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.thirdSectionpara2)
                                                                }), "  "]
                                                            }), Object(c.jsxs)("li", {
                                                                children: [Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.thirdSectionpara3)
                                                                }), "  "]
                                                            }), Object(c.jsxs)("li", {
                                                                children: [Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.thirdSectionpara4)
                                                                }), "  "]
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsxs)("div", {
                                                className: "sectionx content-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 serv-title",
                                                    children: [Object(c.jsxs)("p", {
                                                        children: [Object(c.jsx)("b", {
                                                            children: "03 / "
                                                        }), "Service"]
                                                    }), Object(c.jsx)("h1", {
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.forthSectionHeading)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "serv-list",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 serv-list-text",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.forthSectionsubHeading)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 serv-list-ul",
                                                        children: Object(c.jsxs)("ul", {
                                                            children: [Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.forthSectionpara1)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.forthSectionpara2)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.forthSectionpara3)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.forthSectionpara4)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.forthSectionpara5)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.forthSectionpara6)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.forthSectionpara7)
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsxs)("div", {
                                                className: "sectionx community-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 serv-title",
                                                    children: [Object(c.jsxs)("p", {
                                                        children: [Object(c.jsx)("b", {
                                                            children: "04 / "
                                                        }), "Service"]
                                                    }), Object(c.jsx)("h1", {
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.fifthSectionHeading)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "serv-list",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 serv-list-text",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.fifthSectionsubHeading)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 serv-list-ul",
                                                        children: Object(c.jsxs)("ul", {
                                                            children: [Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.fifthSectionpara1)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.fifthSectionpara2)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.fifthSectionpara3)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.fifthSectionpara4)
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsxs)("div", {
                                                className: "sectionx amplification-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 serv-title",
                                                    children: [Object(c.jsxs)("p", {
                                                        children: [Object(c.jsx)("b", {
                                                            children: "05 / "
                                                        }), "Service"]
                                                    }), Object(c.jsx)("h1", {
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.sixSectionHeading)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "serv-list",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 serv-list-text",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.sixSectionsubHeading)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 serv-list-ul",
                                                        children: Object(c.jsxs)("ul", {
                                                            children: [Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sixSectionpara1)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sixSectionpara2)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sixSectionpara3)
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsxs)("div", {
                                                className: "sectionx media-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 serv-title",
                                                    children: [Object(c.jsxs)("p", {
                                                        children: [Object(c.jsx)("b", {
                                                            children: "06 / "
                                                        }), "Service"]
                                                    }), Object(c.jsx)("h1", {
                                                        className: "col-12 p-0",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.sevenSectionHeading)
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "serv-list",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 p-0 serv-list-text",
                                                        children: Object(c.jsx)("div", {
                                                            dangerouslySetInnerHTML: e(this.state.sevenSectionsubHeading)
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 serv-list-ul",
                                                        children: Object(c.jsxs)("ul", {
                                                            children: [Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sevenSectionpara1)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sevenSectionpara2)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sevenSectionpara3)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sevenSectionpara4)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sevenSectionpara5)
                                                                })
                                                            }), Object(c.jsx)("li", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.sevenSectionpara6)
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsxs)("div", {
                                                className: "sectionx footer-fullpage",
                                                "data-pai": "footer",
                                                id: "footerx",
                                                children: [Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 mt-5 align-content-center FooterContent",
                                                    children: Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0 mb-4 justify-content-center footerGetInTouch marquee-",
                                                        children: Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 row m-0 text-center justify-content-center Marquee-p-",
                                                            children: [Object(c.jsx)("span", {
                                                                className: "col-12 p-0 gettouch1",
                                                                children: "Let\u2019s Create Together"
                                                            }), Object(c.jsxs)("span", {
                                                                className: "gettouch2",
                                                                children: [" ", Object(c.jsx)("a", {
                                                                    href: "/m/en/contact-us",
                                                                    style: {
                                                                        color: "#e81f76"
                                                                    },
                                                                    children: "Get in touch"
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 mt-5 pt-4",
                                                    children: [Object(c.jsx)("button", {
                                                        className: "footerprev"
                                                    }), Object(c.jsx)("button", {
                                                        className: "footernext"
                                                    }), Object(c.jsxs)("div", {
                                                        className: "footerxscroller- FooterContent Marquee-pfooter-",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "uaeloc loc show",
                                                            "data-loc": "uaeloc",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "loctabsize Country-UAEx text-center",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "country",
                                                                    children: "UAE"
                                                                }), Object(c.jsx)("div", {
                                                                    className: "telephone",
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "tel:+971 (0)4 454 2230",
                                                                        children: "+971 (0)4 454 2230"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 address",
                                                                    children: Object(c.jsxs)("a", {
                                                                        href: "https://goo.gl/maps/9BpePWbynzXGVMdFA",
                                                                        target: "_blank",
                                                                        children: [Object(c.jsx)("p", {
                                                                            children: "Mazaya Business"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Avenue, Tower AA1 JLT,"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Dubai, UAE"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(c.jsx)("div", {
                                                            className: "sraloc loc hide",
                                                            "data-loc": "sraloc",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "loctabsize Country-SRAx text-center",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "country",
                                                                    children: "Saudi\xa0Arabia"
                                                                }), Object(c.jsx)("div", {
                                                                    className: "telephone",
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "tel:+966 (1)1 511 7692",
                                                                        children: "+966 (1)1 511 7692"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 address",
                                                                    children: Object(c.jsxs)("a", {
                                                                        href: "https://goo.gl/maps/1g49g3PXDJY5JRJT9",
                                                                        target: "_blank",
                                                                        children: [Object(c.jsx)("p", {
                                                                            children: "Eastern Ring Branch"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Rd, Ghirnatah, Riyadh"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "13241, KSA"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(c.jsx)("div", {
                                                            className: "pkloc loc hide",
                                                            "data-loc": "pkloc",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "loctabsize Country-PKx text-center",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "country",
                                                                    children: "Pakistan"
                                                                }), Object(c.jsx)("div", {
                                                                    className: "telephone",
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "tel:+92 (2)1 3499 2028",
                                                                        children: "+92 (2)1 3499 2028"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 address",
                                                                    children: Object(c.jsxs)("a", {
                                                                        href: "https://goo.gl/maps/Pnm3MdA2SQrE6hMSA",
                                                                        target: "_blank",
                                                                        children: [Object(c.jsx)("p", {
                                                                            children: "50-J, Shahrah-e-Faisal"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Rd, Block 6 PECHS,"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Karachi, Pakistan"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), Object(c.jsx)("div", {
                                                            className: "egyloc loc hide",
                                                            "data-loc": "egyloc",
                                                            children: Object(c.jsxs)("div", {
                                                                className: "loctabsize Country-Egyptx text-center",
                                                                children: [Object(c.jsx)("div", {
                                                                    className: "country",
                                                                    children: "Egypt"
                                                                }), Object(c.jsx)("div", {
                                                                    className: "telephone",
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "tel:+971 (0)4 454 2230",
                                                                        children: "+971 (0)4 454 2230"
                                                                    })
                                                                }), Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 address",
                                                                    children: Object(c.jsxs)("a", {
                                                                        href: "https://goo.gl/maps/UDrtnjHjscmGC8HVA",
                                                                        target: "_blank",
                                                                        children: [Object(c.jsx)("p", {
                                                                            children: "10, Street 22, Maadi,"
                                                                        }), Object(c.jsx)("p", {
                                                                            children: "Cairo, Egypt"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                }), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 websiteFooter border-top",
                                                    children: Object(c.jsx)("div", {
                                                        className: "container",
                                                        children: Object(c.jsxs)("div", {
                                                            className: "col-12 row m-0 p-0 pt-5 pb-5 footerCopy",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-md-12 p-0 footercopyright",
                                                                children: Object(c.jsx)("div", {
                                                                    className: "col-12 p-0 text-center",
                                                                    children: "\xa9 The Collective Group Ltd 2020. UAE - Saudi Arabia - Pakistan - Egypt"
                                                                })
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-md-12 p-0 row m-0 mt-4 mb-3 justify-content-center",
                                                                children: [Object(c.jsx)("a", {
                                                                    href: "https://www.facebook.com/TrafficDigitalMEA/",
                                                                    target: "_Blank",
                                                                    className: "footer-fb"
                                                                }), Object(c.jsx)("a", {
                                                                    href: "https://twitter.com/trafficdigital_?lang=en",
                                                                    target: "_Blank",
                                                                    className: "footer-tw"
                                                                }), Object(c.jsx)("a", {
                                                                    href: "https://www.linkedin.com/company/traffic-digital/",
                                                                    target: "_Blank",
                                                                    className: "footer-in"
                                                                }), Object(c.jsx)("a", {
                                                                    href: "https://www.instagram.com/trafficdigital/",
                                                                    target: "_Blank",
                                                                    className: "footer-ins"
                                                                }), Object(c.jsx)("a", {
                                                                    href: "https://www.youtube.com/c/TrafficDigital",
                                                                    target: "_Blank",
                                                                    className: "footer-yt"
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component)),
                de = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, ce.getEntries({
                                                content_type: "aboutUsSection1"
                                            });
                                        case 3:
                                            t = e.sent, s = t.items[0].fields.heading1.content[0].content[0].value, c = t.items[0].fields.heading2.content[0].content[0].value, a = t.items[0].fields.heading3.content[0].content[0].value, this.setState({
                                                heading1: s,
                                                heading2: c,
                                                heading3: a
                                            }), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                                        case 13:
                                            return e.prev = 13, e.next = 16, ce.getEntries({
                                                content_type: "aboutUsSectiontwo"
                                            });
                                        case 16:
                                            n = e.sent, i = n.items[0].fields.hedingOrpara.content[0].content[0].value, l = n.items[0].fields.link.content[0].content[0].value, o = n.items[0].fields.secondSectionPara.content[0].content[0].value, r = n.items[0].fields.secondSectionParaLink.content[0].content[0].value, this.setState({
                                                headingOrPara: i,
                                                link: l,
                                                secondSectionPara: o,
                                                secondSectionParaLink: r
                                            }), e.next = 27;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t1 = e.catch(13), console.log(e.t1);
                                        case 27:
                                            return e.prev = 27, e.next = 30, ce.getEntries({
                                                content_type: "aboutUsSection4"
                                            });
                                        case 30:
                                            d = e.sent, j = d.items[0].fields.heading.content[0].content[0].value, m = d.items[0].fields.subheading.content[0].content[0].value, this.setState({
                                                fourSectionHeading: j,
                                                fourSectionSubHeading: m
                                            }), e.next = 39;
                                            break;
                                        case 36:
                                            e.prev = 36, e.t2 = e.catch(27), console.log(e.t2);
                                        case 39:
                                            window.addEventListener("resize", this.checkIfMobile), ae(), (h = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), h.async = !1, document.body.appendChild(h), b = this, h.onload = function() {
                                                b.isFunction(window.$) && b.isFunction(window.$.mCustomScrollbar) && (window.$(".deviceteambio").mCustomScrollbar({
                                                    axis: "y",
                                                    advanced: {}
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            };
                                        case 47:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 10],
                                    [13, 24],
                                    [27, 36]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/about-us" : "/m/en/about-us"
                            }) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "About"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/about-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Middle East Leading Digital Agency - Traffic Digital",
                                        content: "Traffic Digital is a multi-faceted digital agency serving across the MENA region since 2009. Traffic Digital headquarters in Dubai, and has offices in Jeddah, Riyadh (Saudi Arabia) & Karachi (Pakistan)."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 brand-blue p-0 row m-0 stop-header currentpagename",
                                        id: "aboutuspage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsxs)("div", {
                                                className: "section mainabout-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsx)(Q, {}), Object(c.jsx)(ee, {}), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-10",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 aboutuspage-line",
                                                            children: "About Us"
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 aboutuspage-Content",
                                                            children: [Object(c.jsx)("h1", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.heading1)
                                                                })
                                                            }), Object(c.jsx)("h1", {
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.heading2)
                                                                })
                                                            }), Object(c.jsx)("h1", {
                                                                children: Object(c.jsx)("span", {
                                                                    children: Object(c.jsx)("div", {
                                                                        dangerouslySetInnerHTML: e(this.state.heading3)
                                                                    })
                                                                })
                                                            })]
                                                        }), Object(c.jsx)("div", {
                                                            className: "scroll-explore",
                                                            children: Object(c.jsxs)("a", {
                                                                href: "/m/en/about-us#description",
                                                                className: "bluemouse",
                                                                children: [Object(c.jsxs)("svg", {
                                                                    viewBox: "0 0 247 390",
                                                                    version: "1.1",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                                    style: {
                                                                        fillRule: "evenodd",
                                                                        clipRule: "evenodd",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeMiterlimit: "1.5"
                                                                    },
                                                                    children: [Object(c.jsx)("path", {
                                                                        id: "wheel",
                                                                        d: "M123.359,79.775l0,72.843",
                                                                        style: {
                                                                            fill: "none",
                                                                            stroke: "#fff",
                                                                            strokeWidth: "20px"
                                                                        }
                                                                    }), Object(c.jsx)("path", {
                                                                        id: "mouse",
                                                                        d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                                        style: {
                                                                            fill: "none",
                                                                            stroke: "#fff",
                                                                            strokeWidth: "20px"
                                                                        }
                                                                    })]
                                                                }), "Scroll to explore"]
                                                            })
                                                        })]
                                                    })
                                                }), Object(c.jsx)("div", {
                                                    className: "aboutround-pic",
                                                    children: Object(c.jsx)("img", {
                                                        src: "../assets/about-roundpic.png",
                                                        className: "img-fluid"
                                                    })
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "section about-fullpage row m-0 align-content-center aboutover-bg",
                                                "data-pai": "about",
                                                id: "section1",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center",
                                                    children: Object(c.jsx)("div", {
                                                        className: "col-10 row p-0 m-0 vh-100",
                                                        children: Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 row m-0 align-content-center",
                                                            children: [Object(c.jsxs)("div", {
                                                                className: "col-12 aboutDescription-page",
                                                                children: [Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.headingOrPara)
                                                                }), Object(c.jsx)("p", {
                                                                    children: Object(c.jsx)("a", {
                                                                        href: "/m/en/about-us#",
                                                                        className: "aboutOverlink",
                                                                        children: Object(c.jsx)("div", {
                                                                            dangerouslySetInnerHTML: e(this.state.link)
                                                                        })
                                                                    })
                                                                })]
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutDescriptionWelcome",
                                                                children: Object(c.jsxs)("div", {
                                                                    children: [Object(c.jsx)("div", {
                                                                        dangerouslySetInnerHTML: e(this.state.secondSectionParaLink)
                                                                    }), Object(c.jsx)("div", {
                                                                        className: "col-12 p-0 mt-3 aboutDescriptionWelcome-text",
                                                                        children: Object(c.jsx)("div", {
                                                                            dangerouslySetInnerHTML: e(this.state.secondSectionPara)
                                                                        })
                                                                    })]
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section team-fullpage about-people",
                                                "data-pai": "sliders",
                                                id: "section2",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 hv100 teamreach",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 teambox",
                                                            children: [Object(c.jsxs)("div", {
                                                                className: "col-12 teamo team1 show",
                                                                "data-team": "team1",
                                                                children: [Object(c.jsx)(v.b, {
                                                                    to: "sami",
                                                                    className: "sami"
                                                                }), Object(c.jsx)(v.b, {
                                                                    to: "ross",
                                                                    className: "ross"
                                                                }), Object(c.jsxs)("div", {
                                                                    className: "teamMove",
                                                                    children: [Object(c.jsx)("button", {
                                                                        className: "teamprev"
                                                                    }), Object(c.jsx)("button", {
                                                                        className: "teamcircle"
                                                                    }), Object(c.jsx)("button", {
                                                                        className: "teamnext"
                                                                    })]
                                                                })]
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 teamo team2",
                                                                "data-team": "team2",
                                                                children: [Object(c.jsx)(v.b, {
                                                                    to: "ross",
                                                                    className: "ross"
                                                                }), Object(c.jsx)(v.b, {
                                                                    to: "ruby",
                                                                    className: "ruby"
                                                                }), Object(c.jsxs)("div", {
                                                                    className: "teamMove",
                                                                    children: [Object(c.jsx)("button", {
                                                                        className: "teamprev"
                                                                    }), Object(c.jsx)("button", {
                                                                        className: "teamcircle"
                                                                    }), Object(c.jsx)("button", {
                                                                        className: "teamnext"
                                                                    })]
                                                                })]
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 teamo team3",
                                                                "data-team": "team3",
                                                                children: [Object(c.jsx)(v.b, {
                                                                    to: "dominic",
                                                                    className: "dom"
                                                                }), Object(c.jsx)(v.b, {
                                                                    to: "rosslyndon",
                                                                    className: "rossl"
                                                                }), Object(c.jsxs)("div", {
                                                                    className: "teamMove",
                                                                    children: [Object(c.jsx)("button", {
                                                                        className: "teamprev"
                                                                    }), Object(c.jsx)("button", {
                                                                        className: "teamcircle"
                                                                    }), Object(c.jsx)("button", {
                                                                        className: "teamnext"
                                                                    })]
                                                                })]
                                                            })]
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 hv100 teamreach-place",
                                                            children: Object(c.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    overflow: "hidden",
                                                                    width: "10px",
                                                                    height: "10px",
                                                                    opacity: 0,
                                                                    bottom: 0,
                                                                    left: "0px"
                                                                },
                                                                children: [Object(c.jsx)("img", {
                                                                    src: "../assets/massets/team1.jpg"
                                                                }), Object(c.jsx)("img", {
                                                                    src: "../assets/massets/team2.jpg"
                                                                }), Object(c.jsx)("img", {
                                                                    src: "../assets/massets/team3.jpg"
                                                                }), ">"]
                                                            })
                                                        })]
                                                    })
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "section about-ourpartner-fullpage",
                                                "data-pai": "careers",
                                                id: "section3",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-11 ml4 mt4",
                                                        children: [Object(c.jsx)("div", {
                                                            className: "col-12 p-0 frame-title",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.fourSectionHeading)
                                                            })
                                                        }), Object(c.jsx)("div", {
                                                            className: "col-12 p-0 mt8 frame-title-text",
                                                            children: Object(c.jsx)("div", {
                                                                dangerouslySetInnerHTML: e(this.state.fourSectionSubHeading)
                                                            })
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center align-content-center partner-logos",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-11",
                                                            children: Object(c.jsxs)("ul", {
                                                                className: "col-12 row m-0",
                                                                children: [Object(c.jsx)("li", {
                                                                    className: "facebook-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                }), Object(c.jsx)("li", {
                                                                    className: "instagram-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                }), Object(c.jsx)("li", {
                                                                    className: "google-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                }), Object(c.jsx)("li", {
                                                                    className: "linkedin-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                }), Object(c.jsx)("li", {
                                                                    className: "twitter-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                }), Object(c.jsx)("li", {
                                                                    className: "googlemap-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                }), Object(c.jsx)("li", {
                                                                    className: "snapchat-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                }), Object(c.jsx)("li", {
                                                                    className: "socialbakers-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                }), Object(c.jsx)("li", {
                                                                    className: "youtube-partner row m-0 justify-content-center",
                                                                    children: Object(c.jsx)("i", {})
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })
                                            }), Object(c.jsx)(se, {})]
                                        })
                                    })
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                je = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename stop-header",
                                        id: "contactsuccess",
                                        children: Object(c.jsx)("div", {
                                            id: "fullpage",
                                            children: Object(c.jsxs)("div", {
                                                className: "section Contactsucess-fullpage",
                                                id: "section0",
                                                children: [Object(c.jsx)(Q, {}), Object(c.jsx)(ee, {}), Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 justify-content-center align-content-center hv100",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-9",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 success-Content",
                                                            children: [Object(c.jsxs)("h1", {
                                                                children: ["We\u2019ll get back to", Object(c.jsx)("br", {}), "you in a bit"]
                                                            }), Object(c.jsxs)("p", {
                                                                children: ["While you wait, why not have a look at what", Object(c.jsx)("br", {}), "we can do for you?"]
                                                            })]
                                                        }), Object(c.jsx)(v.b, {
                                                            to: "/m/en/contact-us#form",
                                                            className: "success-keep",
                                                            children: "Keep exploring"
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                me = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            style: {
                                                top: "0px !important"
                                            },
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/UnicefDubaiLynx.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "Unicef"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/UnicefDubaiLynx.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "Unicef"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "The Class of No Tomorrow"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Spain"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: ["On-Ground Activation,", Object(c.jsx)("br", {}), "Social Media"]
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/honda",
                                                                        state: {
                                                                            backLink: this.state.backLink
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                he = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/TresemmeEmergeSmoothNowMoves.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "Tresemme"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/TresemmeEmergeSmoothNowMoves.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "Tresemme"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Creating hair chaos to show smooth hair now moves."
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "GCC"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: ["Digital Advertising,", Object(c.jsx)("br", {}), "Social Media"]
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/emirates",
                                                                        state: {
                                                                            backLink: this.state.backLink
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                be = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/RexonaCase.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "Rexona"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/RexonaCase.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "Rexona"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "How we made Saudi men sweat, cry and buy."
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "KSA"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Digital Advertising Campaign"
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/tresemme",
                                                                        state: {
                                                                            backLink: this.state.backLink
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                pe = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/OMOTouchofLoveFinal.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "Omo - Comfort"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/OMOTouchofLoveFinal.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "Omo - Comfort"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Creating a loving, trusted online space to help children grow."
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "UAE"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Social Media"
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/mamaspapas",
                                                                        state: {
                                                                            backLink: this.state.backLink
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                ue = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/MamasPapas.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "Mamas & Papas"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/MamasPapas.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "Mamas & Papas"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Driving real engagement by bringing fairytale classics to life."
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "UAE"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Social Media"
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/aecb",
                                                                        state: {
                                                                            backLink: this.state.backLink
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                ve = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/HondaCase.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "Honda"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/HondaCase.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "Honda"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Can digital walkthroughs be the new physical test-drives?"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "GCC"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: ["Immersive Website,", Object(c.jsx)("br", {}), " Digital Advertising"]
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/dpworld",
                                                                        state: {
                                                                            backLink: this.state.backLink
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                xe = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/Emirates.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "Emirates"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/Emirates.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "Emirates"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Is it a bird, is it a plane, is it an Effie-winning prank?"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Global"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Viral Social Content"
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/omocomfort",
                                                                        state: {
                                                                            backLink: this.state.backLink
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                Oe = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/DPWorld.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "DP World"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/DPWorld.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "DP World"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Curating the story of ports across the planet in 12 weeks and 12 films."
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "12 countries across the globe"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: ["Website Content, Digital Advertising,", Object(c.jsx)("br", {}), "Social Media"]
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/rexona",
                                                                        state: {
                                                                            backLink: this.state.backLink
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                fe = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/AECBCreditScoreCaseStudy.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), "AECB"]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "assets/AECBCreditScoreCaseStudy.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: "AECB"
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Bringing financial responsibility into the palm of people\u2019s hands."
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "UAE"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: ["App Design & Development, Communications Strategy,", Object(c.jsx)("br", {}), "Creative Campaign, Digital Advertising"]
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 pl-5 pr-5 pt-4",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)(v.b, {
                                                                    to: {
                                                                        pathname: "/m/en/player/unicef",
                                                                        state: {
                                                                            name: "Unicef",
                                                                            video: "assets/unicef.mp4",
                                                                            backLink: "/m/en/#unicef"
                                                                        }
                                                                    },
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                we = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "unicef.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsx)(v.b, {
                                            to: "/en/",
                                            className: "fullplayergoback"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/showreelfull.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                })
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                ye = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, S, _;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/mobilesupport.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/loadcss.js"), s.async = !1, document.body.appendChild(s), (c = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), c.async = !1, document.body.appendChild(c), a = this, c.onload = function() {
                                                a.isFunction(window.$) && a.isFunction(window.$.mCustomScrollbar) && (window.$(".deviceteambio").mCustomScrollbar({
                                                    axis: "y",
                                                    advanced: {}
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 15, e.next = 18, ce.getEntries({
                                                content_type: "teamMember1SamiIqbal"
                                            });
                                        case 18:
                                            n = e.sent, i = n.items[0].fields.firstName.content[0].content[0].value, l = n.items[0].fields.lastname.content[0].content[0].value, o = n.items[0].fields.designation.content[0].content[0].value, r = n.items[0].fields.address1.content[0].content[0].value, d = n.items[0].fields.address2.content[0].content[0].value, j = n.items[0].fields.skillsCount.content[0].content[0].value, m = n.items[0].fields.skill1.content[0].content[0].value, h = n.items[0].fields.skill2.content[0].content[0].value, b = n.items[0].fields.skill3.content[0].content[0].value, u = n.items[0].fields.personalityHeading.content[0].content[0].value, v = n.items[0].fields.personalityPara.content[0].content[0].value, x = n.items[0].fields.lessonHeading.content[0].content[0].value, O = n.items[0].fields.lessonPara.content[0].content[0].value, f = n.items[0].fields.animalHeading.content[0].content[0].value, w = n.items[0].fields.animalPara.content[0].content[0].value, y = n.items[0].fields.favoritefilmHeading.content[0].content[0].value, g = n.items[0].fields.favoritefilmPara.content[0].content[0].value, N = n.items[0].fields.holydayHeading.content[0].content[0].value, k = n.items[0].fields.holydayPara.content[0].content[0].value, S = n.items[0].fields.bestperonHeading.content[0].content[0].value, _ = n.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                sami_Firstname: i,
                                                sami_Lastname: l,
                                                sami_designation: o,
                                                sami_address1: r,
                                                sami_address2: d,
                                                sami_skillsCount: j,
                                                sami_skill1: m,
                                                sami_skill2: h,
                                                sami_skill3: b,
                                                sami_personalityHeading: u,
                                                sami_personalityPara: v,
                                                sami_lessonHeading: x,
                                                sami_lessonPara: O,
                                                sami_animalHeading: f,
                                                sami_animalPara: w,
                                                sami_favoritefilmHeading: y,
                                                sami_favoritefilmPara: g,
                                                sami_holydayHeading: N,
                                                sami_holydayPara: k,
                                                sami_bestperonHeading: S,
                                                sami_bestperonPara: _
                                            }), e.next = 46;
                                            break;
                                        case 43:
                                            e.prev = 43, e.t0 = e.catch(15), console.log(e.t0);
                                        case 46:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [15, 43]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/about-us" : "/m/en/about-us"
                            }) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "About Us - Team"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/about-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Middle East Leading Digital Agency - Traffic Digital",
                                        content: "Traffic Digital is a multi-faceted digital agency serving across the MENA region since 2009. Traffic Digital headquarters in Dubai, and has offices in Jeddah, Riyadh (Saudi Arabia) & Karachi (Pakistan)."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-12 hv100 teamdetails",
                                        id: "sami",
                                        children: [Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/about-us#team",
                                            className: "about-back",
                                            children: "Go Back"
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/ross",
                                            className: "about-next",
                                            children: "Next BIO"
                                        }), Object(c.jsxs)("div", {
                                            className: "aboutteamdetailstitle",
                                            children: [Object(c.jsx)("h1", {
                                                children: this.state.sami_Firstname
                                            }), Object(c.jsxs)("h1", {
                                                children: [this.state.sami_Lastname, Object(c.jsxs)("p", {
                                                    className: "col-12 p-0",
                                                    children: [" ", Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: (e = this.state.sami_designation, {
                                                            __html: e
                                                        })
                                                    }), " "]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "scroll-explore",
                                                children: Object(c.jsxs)("a", {
                                                    className: "readbio",
                                                    "data-bio": "sami",
                                                    children: [Object(c.jsxs)("svg", {
                                                        viewBox: "0 0 247 390",
                                                        version: "1.1",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        style: {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeMiterlimit: "1.5"
                                                        },
                                                        children: [Object(c.jsx)("path", {
                                                            id: "wheel",
                                                            d: "M123.359,79.775l0,72.843",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        }), Object(c.jsx)("path", {
                                                            id: "mouse",
                                                            d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        })]
                                                    }), "Read Bio"]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 aboutteamdetails-bio",
                                            style: {
                                                display: "none"
                                            },
                                            children: [Object(c.jsx)("button", {
                                                className: "about-back-bio",
                                                "data-back": "sami"
                                            }), Object(c.jsx)("div", {
                                                className: "aboutteamdetails",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutdetailslist-ralevent",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "aboutdetailslist content mCustomScrollbar deviceteambio",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.sami_address1
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.sami_address2
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.sami_skillsCount
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0",
                                                                children: [this.state.sami_skill1, Object(c.jsx)("br", {}), this.state.sami_skill2, Object(c.jsx)("br", {}), this.state.sami_skill3]
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.sami_personalityHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.sami_personalityPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.sami_lessonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.sami_lessonPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.sami_animalHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.sami_animalPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.sami_favoritefilmHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.sami_favoritefilmPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.sami_holydayHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.sami_holydayPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.sami_bestperonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.sami_bestperonPara
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            });
                            var e
                        }
                    }]), s
                }(n.a.Component),
                ge = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/mobilesupport.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/loadcss.js"), s.async = !1, document.body.appendChild(s), (c = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), c.async = !1, document.body.appendChild(c), a = this, c.onload = function() {
                                                a.isFunction(window.$) && a.isFunction(window.$.mCustomScrollbar) && (window.$(".deviceteambio").mCustomScrollbar({
                                                    axis: "y",
                                                    advanced: {}
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 15, e.next = 18, ce.getEntries({
                                                content_type: "teamMember1RossMaclean"
                                            });
                                        case 18:
                                            n = e.sent, console.log(n), i = n.items[0].fields.firstName.content[0].content[0].value, l = n.items[0].fields.lastname.content[0].content[0].value, o = n.items[0].fields.designation.content[0].content[0].value, r = n.items[0].fields.address1.content[0].content[0].value, d = n.items[0].fields.address2.content[0].content[0].value, j = n.items[0].fields.skillsCount.content[0].content[0].value, m = n.items[0].fields.skill1.content[0].content[0].value, h = n.items[0].fields.personalityHeading.content[0].content[0].value, b = n.items[0].fields.personalityPara.content[0].content[0].value, u = n.items[0].fields.lessonHeading.content[0].content[0].value, v = n.items[0].fields.lessonPara.content[0].content[0].value, x = n.items[0].fields.animalHeading.content[0].content[0].value, O = n.items[0].fields.animalPara.content[0].content[0].value, f = n.items[0].fields.favoritefilmHeading.content[0].content[0].value, w = n.items[0].fields.favoritefilmPara.content[0].content[0].value, y = n.items[0].fields.holydayHeading.content[0].content[0].value, g = n.items[0].fields.holydayPara.content[0].content[0].value, N = n.items[0].fields.bestperonHeading.content[0].content[0].value, k = n.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                maclean_Firstname: i,
                                                maclean_Lastname: l,
                                                maclean_designation: o,
                                                maclean_address1: r,
                                                maclean_address2: d,
                                                maclean_skillsCount: j,
                                                maclean_skill1: m,
                                                maclean_personalityHeading: h,
                                                maclean_personalityPara: b,
                                                maclean_lessonHeading: u,
                                                maclean_lessonPara: v,
                                                maclean_animalHeading: x,
                                                maclean_animalPara: O,
                                                maclean_favoritefilmHeading: f,
                                                maclean_favoritefilmPara: w,
                                                maclean_holydayHeading: y,
                                                maclean_holydayPara: g,
                                                maclean_bestperonHeading: N,
                                                maclean_bestperonPara: k
                                            }), e.next = 45;
                                            break;
                                        case 42:
                                            e.prev = 42, e.t0 = e.catch(15), console.log(e.t0);
                                        case 45:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [15, 42]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            function e(e) {
                                return {
                                    __html: e
                                }
                            }
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/about-us" : "/m/en/about-us"
                            }) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "About Us - Team"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/about-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Middle East Leading Digital Agency - Traffic Digital",
                                        content: "Traffic Digital is a multi-faceted digital agency serving across the MENA region since 2009. Traffic Digital headquarters in Dubai, and has offices in Jeddah, Riyadh (Saudi Arabia) & Karachi (Pakistan)."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-12 hv100 teamdetails",
                                        id: "ross",
                                        children: [Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/about-us#team",
                                            className: "about-back",
                                            children: "Go Back"
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/ruby",
                                            className: "about-next",
                                            children: "Next BIO"
                                        }), Object(c.jsxs)("div", {
                                            className: "aboutteamdetailstitle",
                                            children: [Object(c.jsx)("h1", {
                                                children: this.state.maclean_Firstname
                                            }), Object(c.jsxs)("h1", {
                                                children: [this.state.maclean_Lastname, Object(c.jsxs)("p", {
                                                    className: "col-12 p-0",
                                                    children: [" ", Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: e(this.state.maclean_designation)
                                                    }), " "]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "scroll-explore",
                                                children: Object(c.jsxs)("a", {
                                                    className: "readbio",
                                                    "data-bio": "ross",
                                                    children: [Object(c.jsxs)("svg", {
                                                        viewBox: "0 0 247 390",
                                                        version: "1.1",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        style: {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeMiterlimit: "1.5"
                                                        },
                                                        children: [Object(c.jsx)("path", {
                                                            id: "wheel",
                                                            d: "M123.359,79.775l0,72.843",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        }), Object(c.jsx)("path", {
                                                            id: "mouse",
                                                            d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        })]
                                                    }), "Read Bio"]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 aboutteamdetails-bio",
                                            children: [Object(c.jsx)("button", {
                                                className: "about-back-bio",
                                                "data-back": "ross"
                                            }), Object(c.jsx)("div", {
                                                className: "aboutteamdetails",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutdetailslist-ralevent",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "aboutdetailslist content mCustomScrollbar deviceteambio",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.maclean_address1
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.maclean_address2
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.maclean_skillsCount
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.maclean_skill1
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.maclean_personalityHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.maclean_personalityPara)
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.maclean_lessonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: Object(c.jsx)("div", {
                                                                    dangerouslySetInnerHTML: e(this.state.maclean_lessonPara)
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.maclean_animalHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.maclean_animalPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.maclean_favoritefilmHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.maclean_favoritefilmPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.maclean_holydayHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.maclean_holydayPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.maclean_bestperonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.maclean_bestperonPara
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                Ne = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, S, _;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/mobilesupport.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/loadcss.js"), s.async = !1, document.body.appendChild(s), (c = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), c.async = !1, document.body.appendChild(c), a = this, c.onload = function() {
                                                a.isFunction(window.$) && a.isFunction(window.$.mCustomScrollbar) && (window.$(".deviceteambio").mCustomScrollbar({
                                                    axis: "y",
                                                    advanced: {}
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 15, e.next = 18, ce.getEntries({
                                                content_type: "teamMember3RubyBarve"
                                            });
                                        case 18:
                                            n = e.sent, i = n.items[0].fields.firstName.content[0].content[0].value, l = n.items[0].fields.lastname.content[0].content[0].value, o = n.items[0].fields.designation.content[0].content[0].value, r = n.items[0].fields.address1.content[0].content[0].value, d = n.items[0].fields.address2.content[0].content[0].value, j = n.items[0].fields.skillsCount.content[0].content[0].value, m = n.items[0].fields.skill1.content[0].content[0].value, h = n.items[0].fields.skill2.content[0].content[0].value, b = n.items[0].fields.skill3.content[0].content[0].value, u = n.items[0].fields.personalityHeading.content[0].content[0].value, v = n.items[0].fields.personalityPara.content[0].content[0].value, x = n.items[0].fields.lessonHeading.content[0].content[0].value, O = n.items[0].fields.lessonPara.content[0].content[0].value, f = n.items[0].fields.animalHeading.content[0].content[0].value, w = n.items[0].fields.animalPara.content[0].content[0].value, y = n.items[0].fields.favoritefilmHeading.content[0].content[0].value, g = n.items[0].fields.favoritefilmPara.content[0].content[0].value, N = n.items[0].fields.holydayHeading.content[0].content[0].value, k = n.items[0].fields.holydayPara.content[0].content[0].value, S = n.items[0].fields.bestperonHeading.content[0].content[0].value, _ = n.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                ruby_Firstname: i,
                                                ruby_Lastname: l,
                                                ruby_designation: o,
                                                ruby_address1: r,
                                                ruby_address2: d,
                                                ruby_skillsCount: j,
                                                ruby_skill1: m,
                                                ruby_skill2: h,
                                                ruby_skill3: b,
                                                ruby_personalityHeading: u,
                                                ruby_personalityPara: v,
                                                ruby_lessonHeading: x,
                                                ruby_lessonPara: O,
                                                ruby_animalHeading: f,
                                                ruby_animalPara: w,
                                                ruby_favoritefilmHeading: y,
                                                ruby_favoritefilmPara: g,
                                                ruby_holydayHeading: N,
                                                ruby_holydayPara: k,
                                                ruby_bestperonHeading: S,
                                                ruby_bestperonPara: _
                                            }), e.next = 46;
                                            break;
                                        case 43:
                                            e.prev = 43, e.t0 = e.catch(15), console.log(e.t0);
                                        case 46:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [15, 43]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/about-us" : "/m/en/about-us"
                            }) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "About Us - Team"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/about-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Middle East Leading Digital Agency - Traffic Digital",
                                        content: "Traffic Digital is a multi-faceted digital agency serving across the MENA region since 2009. Traffic Digital headquarters in Dubai, and has offices in Jeddah, Riyadh (Saudi Arabia) & Karachi (Pakistan)."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-12 hv100 teamdetails",
                                        id: "ruby",
                                        children: [Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/about-us#team",
                                            className: "about-back",
                                            children: "Go Back"
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/dominic",
                                            className: "about-next",
                                            children: "Next BIO"
                                        }), Object(c.jsxs)("div", {
                                            className: "aboutteamdetailstitle",
                                            children: [Object(c.jsx)("h1", {
                                                children: this.state.ruby_Firstname
                                            }), Object(c.jsxs)("h1", {
                                                children: [this.state.ruby_Lastname, Object(c.jsxs)("p", {
                                                    className: "col-12 p-0",
                                                    children: [" ", Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: (e = this.state.ruby_designation, {
                                                            __html: e
                                                        })
                                                    }), " "]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "scroll-explore",
                                                children: Object(c.jsxs)("a", {
                                                    className: "readbio",
                                                    "data-bio": "ruby",
                                                    children: [Object(c.jsxs)("svg", {
                                                        viewBox: "0 0 247 390",
                                                        version: "1.1",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        style: {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeMiterlimit: "1.5"
                                                        },
                                                        children: [Object(c.jsx)("path", {
                                                            id: "wheel",
                                                            d: "M123.359,79.775l0,72.843",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        }), Object(c.jsx)("path", {
                                                            id: "mouse",
                                                            d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        })]
                                                    }), "Read Bio"]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 aboutteamdetails-bio",
                                            children: [Object(c.jsx)("button", {
                                                className: "about-back-bio",
                                                "data-back": "ruby"
                                            }), Object(c.jsx)("div", {
                                                className: "aboutteamdetails",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutdetailslist-ralevent",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "aboutdetailslist content mCustomScrollbar deviceteambio",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ruby_address1
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ruby_address2
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ruby_skillsCount
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0",
                                                                children: [this.state.ruby_skill1, Object(c.jsx)("br", {}), this.state.ruby_skill2, Object(c.jsx)("br", {}), this.state.ruby_skill3]
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ruby_personalityHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ruby_personalityPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ruby_lessonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ruby_lessonPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ruby_animalHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ruby_animalPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ruby_favoritefilmHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ruby_favoritefilmPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ruby_holydayHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ruby_holydayPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ruby_bestperonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ruby_bestperonPara
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            });
                            var e
                        }
                    }]), s
                }(n.a.Component),
                ke = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, S, _;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/mobilesupport.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/loadcss.js"), s.async = !1, document.body.appendChild(s), (c = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), c.async = !1, document.body.appendChild(c), a = this, c.onload = function() {
                                                a.isFunction(window.$) && a.isFunction(window.$.mCustomScrollbar) && (window.$(".deviceteambio").mCustomScrollbar({
                                                    axis: "y",
                                                    advanced: {}
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 15, e.next = 18, ce.getEntries({
                                                content_type: "teamMember1DominicGothard"
                                            });
                                        case 18:
                                            n = e.sent, console.log(n), i = n.items[0].fields.firstName.content[0].content[0].value, l = n.items[0].fields.lastname.content[0].content[0].value, o = n.items[0].fields.designation.content[0].content[0].value, r = n.items[0].fields.address1.content[0].content[0].value, d = n.items[0].fields.address2.content[0].content[0].value, j = n.items[0].fields.skillsCount.content[0].content[0].value, m = n.items[0].fields.skill1.content[0].content[0].value, h = n.items[0].fields.skill2.content[0].content[0].value, b = n.items[0].fields.skill3.content[0].content[0].value, u = n.items[0].fields.personalityHeading.content[0].content[0].value, v = n.items[0].fields.personalityPara.content[0].content[0].value, x = n.items[0].fields.lessonHeading.content[0].content[0].value, O = n.items[0].fields.lessonPara.content[0].content[0].value, f = n.items[0].fields.animalHeading.content[0].content[0].value, w = n.items[0].fields.animalPara.content[0].content[0].value, y = n.items[0].fields.favoritefilmHeading.content[0].content[0].value, g = n.items[0].fields.favoritefilmPara.content[0].content[0].value, N = n.items[0].fields.holydayHeading.content[0].content[0].value, k = n.items[0].fields.holydayPara.content[0].content[0].value, S = n.items[0].fields.bestperonHeading.content[0].content[0].value, _ = n.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                dominic_Firstname: i,
                                                dominic_Lastname: l,
                                                dominic_designation: o,
                                                dominic_address1: r,
                                                dominic_address2: d,
                                                dominic_skillsCount: j,
                                                dominic_skill1: m,
                                                dominic_skill2: h,
                                                dominic_skill3: b,
                                                dominic_personalityHeading: u,
                                                dominic_personalityPara: v,
                                                dominic_lessonHeading: x,
                                                dominic_lessonPara: O,
                                                dominic_animalHeading: f,
                                                dominic_animalPara: w,
                                                dominic_favoritefilmHeading: y,
                                                dominic_favoritefilmPara: g,
                                                dominic_holydayHeading: N,
                                                dominic_holydayPara: k,
                                                dominic_bestperonHeading: S,
                                                dominic_bestperonPara: _
                                            }), e.next = 47;
                                            break;
                                        case 44:
                                            e.prev = 44, e.t0 = e.catch(15), console.log(e.t0);
                                        case 47:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [15, 44]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/about-us" : "/m/en/about-us"
                            }) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "About Us - Team"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/about-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Middle East Leading Digital Agency - Traffic Digital",
                                        content: "Traffic Digital is a multi-faceted digital agency serving across the MENA region since 2009. Traffic Digital headquarters in Dubai, and has offices in Jeddah, Riyadh (Saudi Arabia) & Karachi (Pakistan)."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-12 hv100 teamdetails",
                                        id: "dom",
                                        children: [Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/about-us#team",
                                            className: "about-back",
                                            children: "Go Back"
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/rosslyndon",
                                            className: "about-next",
                                            children: "Next BIO"
                                        }), Object(c.jsxs)("div", {
                                            className: "aboutteamdetailstitle",
                                            children: [Object(c.jsx)("h1", {
                                                children: this.state.dominic_Firstname
                                            }), Object(c.jsxs)("h1", {
                                                children: [this.state.dominic_Lastname, Object(c.jsxs)("p", {
                                                    className: "col-12 p-0",
                                                    children: [" ", Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: (e = this.state.dominic_designation, {
                                                            __html: e
                                                        })
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "scroll-explore",
                                                children: Object(c.jsxs)("a", {
                                                    className: "readbio",
                                                    "data-bio": "dom",
                                                    children: [Object(c.jsxs)("svg", {
                                                        viewBox: "0 0 247 390",
                                                        version: "1.1",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        style: {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeMiterlimit: "1.5"
                                                        },
                                                        children: [Object(c.jsx)("path", {
                                                            id: "wheel",
                                                            d: "M123.359,79.775l0,72.843",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        }), Object(c.jsx)("path", {
                                                            id: "mouse",
                                                            d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        })]
                                                    }), "Read Bio"]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 aboutteamdetails-bio",
                                            children: [Object(c.jsx)("button", {
                                                className: "about-back-bio",
                                                "data-back": "dom"
                                            }), Object(c.jsx)("div", {
                                                className: "aboutteamdetails",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutdetailslist-ralevent",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "aboutdetailslist content mCustomScrollbar deviceteambio",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.dominic_address1
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.dominic_address2
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.dominic_skillsCount
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0",
                                                                children: [this.state.dominic_skill1, Object(c.jsx)("br", {}), this.state.dominic_skill2, Object(c.jsx)("br", {}), this.state.dominic_skill3]
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.dominic_personalityHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.dominic_personalityPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.dominic_lessonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.dominic_lessonPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.dominic_animalHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.dominic_animalPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.dominic_favoritefilmHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.dominic_favoritefilmPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.dominic_holydayHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.dominic_holydayPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.dominic_bestperonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.dominic_bestperonPara
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            });
                            var e
                        }
                    }]), s
                }(n.a.Component),
                Se = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(u.a)(p.a.mark((function e() {
                                var t, s, c, a, n, i, l, o, r, d, j, m, h, b, u, v, x, O, f, w, y, g, N, k, S, _;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return window.addEventListener("resize", this.checkIfMobile), (t = document.createElement("script")).src = "".concat("", "/js/mobilesupport.js"), t.async = !1, document.body.appendChild(t), (s = document.createElement("script")).src = "".concat("", "/js/loadcss.js"), s.async = !1, document.body.appendChild(s), (c = document.createElement("script")).src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), c.async = !1, document.body.appendChild(c), a = this, c.onload = function() {
                                                a.isFunction(window.$) && a.isFunction(window.$.mCustomScrollbar) && (window.$(".deviceteambio").mCustomScrollbar({
                                                    axis: "y",
                                                    advanced: {}
                                                }), window.$(".footerxscroller").mCustomScrollbar({
                                                    axis: "x",
                                                    advanced: {
                                                        autoExpandHorizontalScroll: !0
                                                    }
                                                }))
                                            }, e.prev = 15, e.next = 18, ce.getEntries({
                                                content_type: "teamMember2RossLyndon"
                                            });
                                        case 18:
                                            n = e.sent, i = n.items[0].fields.firstName.content[0].content[0].value, l = n.items[0].fields.lastname.content[0].content[0].value, o = n.items[0].fields.designation.content[0].content[0].value, r = n.items[0].fields.address1.content[0].content[0].value, d = n.items[0].fields.address2.content[0].content[0].value, j = n.items[0].fields.skillsCount.content[0].content[0].value, m = n.items[0].fields.skill1.content[0].content[0].value, h = n.items[0].fields.skill2.content[0].content[0].value, b = n.items[0].fields.skill3.content[0].content[0].value, u = n.items[0].fields.personalityHeading.content[0].content[0].value, v = n.items[0].fields.personalityPara.content[0].content[0].value, x = n.items[0].fields.lessonHeading.content[0].content[0].value, O = n.items[0].fields.lessonPara.content[0].content[0].value, f = n.items[0].fields.animalHeading.content[0].content[0].value, w = n.items[0].fields.animalPara.content[0].content[0].value, y = n.items[0].fields.favoritefilmHeading.content[0].content[0].value, g = n.items[0].fields.favoritefilmPara.content[0].content[0].value, N = n.items[0].fields.holydayHeading.content[0].content[0].value, k = n.items[0].fields.holydayPara.content[0].content[0].value, S = n.items[0].fields.bestperonHeading.content[0].content[0].value, _ = n.items[0].fields.bestperonPara.content[0].content[0].value, this.setState({
                                                ross_Firstname: i,
                                                ross_Lastname: l,
                                                ross_designation: o,
                                                ross_address1: r,
                                                ross_address2: d,
                                                ross_skillsCount: j,
                                                ross_skill1: m,
                                                ross_skill2: h,
                                                ross_skill3: b,
                                                ross_personalityHeading: u,
                                                ross_personalityPara: v,
                                                ross_lessonHeading: x,
                                                ross_lessonPara: O,
                                                ross_animalHeading: f,
                                                ross_animalPara: w,
                                                ross_favoritefilmHeading: y,
                                                ross_favoritefilmPara: g,
                                                ross_holydayHeading: N,
                                                ross_holydayPara: k,
                                                ross_bestperonHeading: S,
                                                ross_bestperonPara: _
                                            }), e.next = 46;
                                            break;
                                        case 43:
                                            e.prev = 43, e.t0 = e.catch(15), console.log(e.t0);
                                        case 46:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [15, 43]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return N.a, this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/about-us" : "/m/en/about-us"
                            }) : Object(c.jsxs)("div", {
                                className: "device",
                                children: [Object(c.jsxs)(g.a, {
                                    children: [Object(c.jsx)("html", {
                                        lang: "en"
                                    }), Object(c.jsx)("title", {
                                        children: "About Us - Team"
                                    }), Object(c.jsx)("link", {
                                        rel: "alternate",
                                        media: "only screen and (max-width: 768px)",
                                        href: "http://test.wewanttraffic.com/en/about-us"
                                    }), Object(c.jsx)("meta", {
                                        name: "Middle East Leading Digital Agency - Traffic Digital",
                                        content: "Traffic Digital is a multi-faceted digital agency serving across the MENA region since 2009. Traffic Digital headquarters in Dubai, and has offices in Jeddah, Riyadh (Saudi Arabia) & Karachi (Pakistan)."
                                    })]
                                }), Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsxs)("div", {
                                        className: "col-12 hv100 teamdetails",
                                        id: "rossl",
                                        children: [Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/about-us#team",
                                            className: "about-back",
                                            children: "Go Back"
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/m/en/sami",
                                            className: "about-next",
                                            children: "Next BIO"
                                        }), Object(c.jsxs)("div", {
                                            className: "aboutteamdetailstitle",
                                            children: [Object(c.jsx)("h1", {
                                                children: this.state.ross_Firstname
                                            }), Object(c.jsxs)("h1", {
                                                children: [this.state.ross_Lastname, Object(c.jsx)("p", {
                                                    className: "col-12 p-0",
                                                    children: Object(c.jsx)("div", {
                                                        dangerouslySetInnerHTML: (e = this.state.ross_designation, {
                                                            __html: e
                                                        })
                                                    })
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "scroll-explore",
                                                children: Object(c.jsxs)("a", {
                                                    className: "readbio",
                                                    "data-bio": "rossl",
                                                    children: [Object(c.jsxs)("svg", {
                                                        viewBox: "0 0 247 390",
                                                        version: "1.1",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        style: {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeMiterlimit: "1.5"
                                                        },
                                                        children: [Object(c.jsx)("path", {
                                                            id: "wheel",
                                                            d: "M123.359,79.775l0,72.843",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        }), Object(c.jsx)("path", {
                                                            id: "mouse",
                                                            d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                                                            style: {
                                                                fill: "none",
                                                                stroke: "#fff",
                                                                strokeWidth: "20px"
                                                            }
                                                        })]
                                                    }), "Read Bio"]
                                                })
                                            })]
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 aboutteamdetails-bio",
                                            children: [Object(c.jsx)("button", {
                                                className: "about-back-bio",
                                                "data-back": "rossl"
                                            }), Object(c.jsx)("div", {
                                                className: "aboutteamdetails",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 aboutdetailslist-ralevent",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "aboutdetailslist content mCustomScrollbar deviceteambio",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ross_address1
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ross_address2
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ross_skillsCount
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0",
                                                                children: [this.state.ross_skill1, Object(c.jsx)("br", {}), this.state.ross_skill2, Object(c.jsx)("br", {}), this.state.ross_skill3]
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ross_personalityHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ross_personalityPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ross_lessonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ross_lessonPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ross_animalHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ross_animalPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ross_favoritefilmHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ross_favoritefilmPara
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ross_holydayHeading
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0",
                                                                children: ["E", this.state.ross_holydayPara]
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 p-0 pb-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 p-0 aboutscroltitle",
                                                                children: this.state.ross_bestperonHeading
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0",
                                                                children: this.state.ross_bestperonPara
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            });
                            var e
                        }
                    }]), s
                }(n.a.Component),
                _e = (s(84), function() {
                    return Object(c.jsx)("div", {
                        className: "body",
                        children: Object(c.jsxs)("div", {
                            className: "mainbox",
                            children: [Object(c.jsx)("div", {
                                className: "err",
                                children: "4"
                            }), Object(c.jsx)("i", {
                                className: "far fa-question-circle fa-spin"
                            }), Object(c.jsx)("div", {
                                className: "err2",
                                children: "4"
                            }), Object(c.jsxs)("div", {
                                className: "msg",
                                children: ["Either you aren't cool enough to visit this page or it doesn't exist . . .", Object(c.jsxs)("p", {
                                    children: ["Let's go ", Object(c.jsx)("a", {
                                        href: "/en",
                                        children: "home"
                                    }), " and try from there."]
                                })]
                            })]
                        })
                    })
                }),
                Ce = function() {
                    return Object(c.jsx)("div", {
                        className: "body",
                        children: Object(c.jsxs)("div", {
                            className: "mainbox",
                            children: [Object(c.jsx)("div", {
                                className: "err",
                                children: "5"
                            }), Object(c.jsx)("i", {
                                className: "far fa-question-circle fa-spin"
                            }), Object(c.jsx)("div", {
                                className: "err2",
                                children: "5"
                            }), Object(c.jsx)("div", {
                                className: "msg",
                                children: "Sorry, unexpected error . . ."
                            })]
                        })
                    })
                },
                Me = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                name: this.props.location.state.name
                            }), this.setState({
                                video: this.props.location.state.video
                            }), this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsxs)("div", {
                                            id: "fullpage",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !0,
                                                id: "myVideo",
                                                children: Object(c.jsx)("source", {
                                                    src: "../unicef.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "section player-fullpage curs",
                                                "data-pai": "player",
                                                id: "section0",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-12 p-0",
                                                    style: {
                                                        backgroundColor: "black"
                                                    },
                                                    children: [Object(c.jsxs)("dic", {
                                                        className: "playernav",
                                                        children: [Object(c.jsx)("span", {
                                                            children: "Case / "
                                                        }), this.state.name]
                                                    }), Object(c.jsx)(v.b, {
                                                        to: this.state.backLink,
                                                        className: "playergoback",
                                                        children: "Go Back"
                                                    }), Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        loop: !0,
                                                        id: "homeVideoPlay",
                                                        children: Object(c.jsx)("source", {
                                                            src: "../unicef.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                        children: Object(c.jsx)("progress", {
                                                            id: "progress-bar",
                                                            min: 0,
                                                            className: "videoprogress",
                                                            max: 100,
                                                            value: 0,
                                                            children: "0% played"
                                                        })
                                                    }), Object(c.jsx)("button", {
                                                        id: "play-pause-button",
                                                        className: "play",
                                                        title: "play",
                                                        onclick: "togglePlayPause();"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-12 player-details",
                                                    children: [Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 playerdetails-content",
                                                        children: [Object(c.jsxs)("div", {
                                                            className: "col-12 mt-4 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Client."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: Object(c.jsx)("h1", {
                                                                    children: this.state.name
                                                                })
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Project."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "The Class of No Tomorrow"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Location."
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: "Spain"
                                                            })]
                                                        }), Object(c.jsxs)("div", {
                                                            className: "col-12 mt-3 pl-5 pr-5",
                                                            children: [Object(c.jsx)("div", {
                                                                className: "col-12 playerhead-title",
                                                                children: "Channels."
                                                            }), Object(c.jsxs)("div", {
                                                                className: "col-12 p-0 playerhead-details",
                                                                children: ["On-Ground Activation,", Object(c.jsx)("br", {}), "Social Media"]
                                                            })]
                                                        })]
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-5 mt-5",
                                                        children: Object(c.jsx)("div", {
                                                            className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                            children: Object(c.jsx)("div", {
                                                                className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                                children: Object(c.jsx)("a", {
                                                                    href: "#",
                                                                    className: "next-project",
                                                                    children: "Next Project"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                Pe = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/OMOTouchofLoveFinal.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "Omo - Comfort"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 omo-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/OMOTouchofLoveFinal.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/omocomfort#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "Omo - Comfort"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Creating a loving, trusted online space to help children grow."
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "UAE"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Social Media"
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: [console.log(this.state.backLink), Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/mamaspapas",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                Le = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && (this.setState({
                                name: this.props.location.state.name
                            }), this.setState({
                                video: this.props.location.state.video
                            }), this.setState({
                                backLink: this.props.location.state.backLink
                            })), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/MamasPapas.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "Mamas & Papas"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 mamaspapas-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/MamasPapas.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/mamaspapas#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "Mamas & Papas"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Driving real engagement by bringing fairytale classics to life."
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "UAE"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Social Media"
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: [console.log(this.state.backLink), Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/aecb",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                Ee = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.props.location.state && this.setState({
                                backLink: this.props.location.state.backLink
                            }), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "assets/AECBCreditScoreCaseStudy.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsxs)("dic", {
                                            className: "playernav",
                                            children: [Object(c.jsx)("span", {
                                                children: "Case / "
                                            }), "AECB"]
                                        }), Object(c.jsx)(v.b, {
                                            to: this.state.backLink ? this.state.backLink : "/en/#unicef",
                                            className: "playergoback",
                                            children: "Go Back"
                                        }), Object(c.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0 aecb-player",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/AECBCreditScoreCaseStudy.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsxs)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: [Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                }), Object(c.jsx)("a", {
                                                    href: "/en/player/aecb#details",
                                                    className: "video-moreinfo",
                                                    children: "More info"
                                                })]
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    }), Object(c.jsx)("div", {
                                        className: "section player-details row m-0 align-content-center",
                                        "data-pai": "details",
                                        id: "section1",
                                        children: Object(c.jsxs)("div", {
                                            className: "container",
                                            children: [Object(c.jsxs)("div", {
                                                className: "col-12 p-0 row m-0 playerdetails-content",
                                                children: [Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Client."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: Object(c.jsx)("h1", {
                                                            children: "AECB"
                                                        })
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Project."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "Bringing financial responsibility into the palm of people\u2019s hands."
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Location."
                                                    }), Object(c.jsx)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: "UAE"
                                                    })]
                                                }), Object(c.jsxs)("div", {
                                                    className: "col-3 p-5",
                                                    children: [Object(c.jsx)("div", {
                                                        className: "col-12 playerhead-title",
                                                        children: "Channels."
                                                    }), Object(c.jsxs)("div", {
                                                        className: "col-12 p-0 playerhead-details",
                                                        children: ["App Design & Development, Communications Strategy,", Object(c.jsx)("br", {}), "Creative Campaign, Digital Advertising"]
                                                    })]
                                                })]
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 p-5 mt-5",
                                                children: Object(c.jsx)("div", {
                                                    className: "col-12 p-0 row m-0 PlayerNext-Project",
                                                    children: Object(c.jsx)("div", {
                                                        className: "col-12 p-0 row m-0 justify-content-center PlayerNext-Project-inner",
                                                        children: Object(c.jsx)(v.b, {
                                                            to: {
                                                                pathname: "/en/player/unicef",
                                                                state: {
                                                                    backLink: this.state.backLink
                                                                }
                                                            },
                                                            className: "next-project",
                                                            children: "Next Project"
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                He = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth <= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isLoading: !0,
                            isMobile: window.innerWidth <= 768
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1;
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/support.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            this.state.script = a, a.src = "".concat("", "/js/video.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(c.jsx)("div", {
                                className: "col-12 p-0 row m-0 currentpagename",
                                id: "playerpage",
                                children: Object(c.jsxs)("div", {
                                    id: "fullpage",
                                    children: [Object(c.jsx)("video", {
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        id: "myVideo",
                                        style: {
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            width: " 100%",
                                            minHeight: "100%",
                                            zIndex: "-11111",
                                            backgroundSize: "cover"
                                        },
                                        children: Object(c.jsx)("source", {
                                            src: "unicef.mp4",
                                            type: "video/mp4"
                                        })
                                    }), Object(c.jsxs)("div", {
                                        className: "section player-fullpage curs",
                                        "data-pai": "player",
                                        id: "section0",
                                        children: [Object(c.jsx)(v.b, {
                                            to: "/en/about-us",
                                            className: "fullplayergoback"
                                        }), Object(c.jsxs)("div", {
                                            className: "col-12 p-0",
                                            children: [Object(c.jsx)("video", {
                                                autoPlay: !0,
                                                loop: !0,
                                                id: "homeVideoPlay",
                                                children: Object(c.jsx)("source", {
                                                    src: "assets/showreelfull.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), Object(c.jsx)("div", {
                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                children: Object(c.jsx)("progress", {
                                                    id: "progress-bar",
                                                    min: 0,
                                                    className: "videoprogress",
                                                    max: 100,
                                                    value: 0,
                                                    children: "0% played"
                                                })
                                            }), Object(c.jsx)("button", {
                                                id: "play-pause-button",
                                                className: "play",
                                                title: "play",
                                                onclick: "togglePlayPause();"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                Ie = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s(e) {
                        var c;
                        return Object(o.a)(this, s), (c = t.call(this, e)).checkIfMobile = function() {
                            var e = c.state.isMobile,
                                t = window.innerWidth >= 768;
                            e !== t && c.setState({
                                isMobile: t
                            })
                        }, c.state = {
                            isMobile: window.innerWidth >= 768,
                            name: "",
                            video: "",
                            backLink: ""
                        }, c
                    }
                    return Object(r.a)(s, [{
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            e.src = "".concat("", "/js/removecss.js"), e.async = !1, document.body.appendChild(e), window.fullpage_api && window.fullpage_api.destroy && window.fullpage_api.destroy("all")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("resize", this.checkIfMobile);
                            var e = document.createElement("script");
                            this.state.script = e, e.src = "".concat("", "/js/video.js"), e.async = !1, document.body.appendChild(e);
                            var t = document.createElement("script");
                            t.src = "".concat("", "/js/fullpage.js"), t.async = !1, document.body.appendChild(t);
                            var s = document.createElement("script");
                            s.src = "".concat("", "/js/mobilesupport.js"), s.async = !1, document.body.appendChild(s);
                            var c = document.createElement("script");
                            c.src = "".concat("", "/js/media-player.js"), c.async = !1, document.body.appendChild(c);
                            var a = document.createElement("script");
                            a.src = "".concat("", "/js/loadcss.js"), a.async = !1, document.body.appendChild(a), this.setState({
                                isLoading: !1
                            });
                            var n = document.createElement("script");
                            n.src = "".concat("", "/js/footer-horizontal-scroll.js"), n.async = !1, document.body.appendChild(n);
                            var i = document.createElement("script");
                            i.src = "".concat("", "/js/jquery.mCustomScrollbar.concat.min.js"), i.async = !1, document.body.appendChild(i);
                            var l = this;
                            i.onload = function() {
                                l.isFunction(window.$) && l.isFunction(window.$.mCustomScrollbar) && (window.$(".teamscrolling").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }), window.$(".footerxscroller").mCustomScrollbar({
                                    axis: "x",
                                    advanced: {
                                        autoExpandHorizontalScroll: !0
                                    }
                                }))
                            }, this.setState({
                                isLoading: !1
                            })
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isMobile ? Object(c.jsx)(m.a, {
                                to: this.state.isMobile ? "/en/player" : "/m/en/player"
                            }) : Object(c.jsx)("div", {
                                className: "device",
                                children: Object(c.jsx)("div", {
                                    className: "device-continer",
                                    children: Object(c.jsx)("div", {
                                        className: "col-12 p-0 row m-0 currentpagename",
                                        id: "playerpage",
                                        children: Object(c.jsx)("div", {
                                            id: "fullpage",
                                            children: Object(c.jsx)("div", {
                                                className: "col-12 vh-100 row m-0 p-0 align-content-center",
                                                children: Object(c.jsxs)("div", {
                                                    className: "col-12 p-0 homeplayerheight",
                                                    children: [Object(c.jsx)("video", {
                                                        autoPlay: !0,
                                                        muted: !0,
                                                        loop: !0,
                                                        id: "myVideo",
                                                        style: {
                                                            opacity: ".3",
                                                            position: "fixed",
                                                            top: 0,
                                                            left: 0,
                                                            width: " 100%",
                                                            minHeight: "100%",
                                                            zIndex: "-11111",
                                                            backgroundSize: "cover"
                                                        },
                                                        children: Object(c.jsx)("source", {
                                                            src: "../assets/showreelfull.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    }), Object(c.jsx)("div", {
                                                        className: "section player-fullpage curs",
                                                        "data-pai": "player",
                                                        id: "section0",
                                                        children: Object(c.jsxs)("div", {
                                                            className: "col-12 p-0",
                                                            style: {
                                                                backgroundColor: "black"
                                                            },
                                                            children: [Object(c.jsx)(v.b, {
                                                                to: "/m/en/",
                                                                className: "fullplayergoback"
                                                            }), Object(c.jsx)("video", {
                                                                autoPlay: !0,
                                                                loop: !0,
                                                                id: "homeVideoPlay",
                                                                children: Object(c.jsx)("source", {
                                                                    src: "../assets/showreelfull.mp4",
                                                                    type: "video/mp4"
                                                                })
                                                            }), Object(c.jsx)("div", {
                                                                className: "col-12 videoProgressbar justify-content-center row p-0 m-0",
                                                                children: Object(c.jsx)("progress", {
                                                                    id: "progress-bar",
                                                                    min: 0,
                                                                    className: "videoprogress",
                                                                    max: 100,
                                                                    value: 0,
                                                                    children: "0% played"
                                                                })
                                                            }), Object(c.jsx)("button", {
                                                                id: "play-pause-button",
                                                                className: "play",
                                                                title: "play",
                                                                onclick: "togglePlayPause();"
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }]), s
                }(n.a.Component),
                Te = function(e) {
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s() {
                        return Object(o.a)(this, s), t.apply(this, arguments)
                    }
                    return Object(r.a)(s, [{
                        key: "render",
                        value: function() {
                            return Object(c.jsxs)(m.d, {
                                children: [Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/",
                                    component: h
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en",
                                    component: C
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: ["/en/about-us"],
                                    component: L
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/services",
                                    component: H
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/case-studies",
                                    component: E
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/contact-us",
                                    component: T
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/unicef",
                                    component: D
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/honda",
                                    component: W
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/dpworld",
                                    component: A
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/rexona",
                                    component: z
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/emirates",
                                    component: F
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/sami",
                                    component: $
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/ross",
                                    component: K
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/rosslyndon",
                                    component: X
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/ruby",
                                    component: Y
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/dominic",
                                    component: q
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/omocomfort",
                                    component: Pe
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/mamaspapas",
                                    component: Le
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/aecb",
                                    component: Ee
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/player/tresemme",
                                    component: B
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/homeplayer",
                                    component: we
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/aboutplayer",
                                    component: He
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/en/contact-success",
                                    component: U
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/",
                                    component: ie
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en",
                                    component: ne
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/about-us",
                                    component: de
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/services",
                                    component: re
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/case-studies",
                                    component: oe
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/contact-us",
                                    component: le
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/contact-success",
                                    component: je
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/sami",
                                    component: ye
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/ross",
                                    component: ge
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/rosslyndon",
                                    component: Se
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/ruby",
                                    component: Ne
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/dominic",
                                    component: ke
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player",
                                    component: Me
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/unicef",
                                    component: me
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/honda",
                                    component: ve
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/dpworld",
                                    component: Oe
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/rexona",
                                    component: be
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/emirates",
                                    component: xe
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/omocomfort",
                                    component: pe
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/mamaspapas",
                                    component: ue
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/aecb",
                                    component: fe
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/player/tresemme",
                                    component: he
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/homeplayer",
                                    component: Ie
                                }), Object(c.jsx)(m.b, {
                                    exact: !0,
                                    path: "/m/en/contact-success",
                                    component: je
                                }), Object(c.jsx)(m.b, {
                                    path: "/500",
                                    component: Ce
                                }), Object(c.jsx)(m.b, {
                                    component: _e
                                })]
                            })
                        }
                    }]), s
                }(n.a.Component),
                De = function(e) {
                    console.log("Must See Here",{e})
                    Object(d.a)(s, e);
                    var t = Object(j.a)(s);

                    function s() {
                        return Object(o.a)(this, s), t.apply(this, arguments)
                    }
                    return Object(r.a)(s, [{
                        key: "render",
                        value: function() {
                            return Object(c.jsx)(Te, {})
                        }
                    }]), s
                }(n.a.Component);
            l.a.hydrate(Object(c.jsx)(n.a.StrictMode, {
                children: Object(c.jsx)(v.a, {
                    children: Object(c.jsx)(De, {})
                })
            }), document.getElementById("root"))
        },
        24: function(e, t, s) {},
        44: function(e, t) {},
        45: function(e, t, s) {},
        84: function(e, t, s) {},
        98: function(e, t, s) {}
    },
    [
        [195, 1, 2]
    ]
]);
//# sourceMappingURL=main.aed91208.chunk.js.map