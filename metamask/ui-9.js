LavaPack.loadBundle(
  [
    [
      4796,
      {
        "../../../app/scripts/lib/util": 80,
        "../../../shared/constants/tokens": 3963,
        "../../../shared/constants/transaction": 3964,
        "../../../shared/modules/hexstring-utils": 3982,
        "../../components/ui/actionable-message/actionable-message": 4470,
        "../../components/ui/button": 4478,
        "../../components/ui/page-container": 4564,
        "../../components/ui/tabs": 4591,
        "../../components/ui/text-field": 4595,
        "../../components/ui/typography": 4610,
        "../../helpers/constants/design-system": 4641,
        "../../helpers/constants/routes": 4645,
        "../../helpers/constants/zendesk-url": 4648,
        "../../helpers/utils/token-util": 4676,
        "../../helpers/utils/util": 4679,
        "./token-list": 4799,
        "./token-search": 4804,
        "@metamask/etherscan-link": 1269,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = A(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = T(e("prop-types")),
                  o = e("@metamask/etherscan-link"),
                  s = T(e("../../helpers/constants/zendesk-url")),
                  i = e("../../helpers/utils/util"),
                  l = e("../../helpers/utils/token-util"),
                  c = e("../../helpers/constants/routes"),
                  u = T(e("../../components/ui/text-field")),
                  d = T(e("../../components/ui/page-container")),
                  p = e("../../components/ui/tabs"),
                  f = e("../../../app/scripts/lib/util"),
                  m = e("../../../shared/modules/hexstring-utils"),
                  g = T(
                    e(
                      "../../components/ui/actionable-message/actionable-message"
                    )
                  ),
                  h = T(e("../../components/ui/typography")),
                  E = e("../../helpers/constants/design-system"),
                  y = T(e("../../components/ui/button")),
                  b = e("../../../shared/constants/transaction"),
                  v = e("../../../shared/constants/tokens"),
                  k = T(e("./token-search")),
                  w = T(e("./token-list"));
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function A(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (A = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function O(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class C extends r.Component {
                  constructor(...e) {
                    super(...e),
                      O(this, "state", {
                        customAddress: "",
                        customSymbol: "",
                        customDecimals: 0,
                        searchResults: [],
                        selectedTokens: {},
                        standard: b.TokenStandard.NONE,
                        tokenSelectorError: null,
                        customAddressError: null,
                        customSymbolError: null,
                        customDecimalsError: null,
                        nftAddressError: null,
                        forceEditSymbol: !1,
                        symbolAutoFilled: !1,
                        decimalAutoFilled: !1,
                        mainnetTokenWarning: null,
                      });
                  }
                  componentDidMount() {
                    this.tokenInfoGetter = (0, l.tokenInfoGetter)();
                    const { pendingTokens: e = {} } = this.props,
                      t = Object.keys(e);
                    if (t.length > 0) {
                      let n = {},
                        r = {};
                      t.forEach((t) => {
                        const a = e[t],
                          { isCustom: o } = a;
                        o ? (r = { ...a }) : (n = { ...n, [t]: { ...a } });
                      });
                      const {
                        address: a = "",
                        symbol: o = "",
                        decimals: s = 0,
                      } = r;
                      this.setState({
                        selectedTokens: n,
                        customAddress: a,
                        customSymbol: o,
                        customDecimals: s,
                      });
                    }
                  }
                  handleToggleToken(e) {
                    const { address: t } = e,
                      { selectedTokens: n = {} } = this.state,
                      r = { ...n };
                    t in r ? delete r[t] : (r[t] = e),
                      this.setState({
                        selectedTokens: r,
                        tokenSelectorError: null,
                      });
                  }
                  hasError() {
                    const {
                      tokenSelectorError: e,
                      customAddressError: t,
                      customSymbolError: n,
                      customDecimalsError: r,
                      nftAddressError: a,
                    } = this.state;
                    return e || t || n || r || a;
                  }
                  hasSelected() {
                    const { customAddress: e = "", selectedTokens: t = {} } =
                      this.state;
                    return e || Object.keys(t).length > 0;
                  }
                  handleNext() {
                    if (this.hasError()) return;
                    if (!this.hasSelected())
                      return void this.setState({
                        tokenSelectorError: this.context.t("mustSelectOne"),
                      });
                    const {
                        setPendingTokens: e,
                        history: t,
                        tokenList: n,
                      } = this.props,
                      r = Object.keys(n),
                      {
                        customAddress: a,
                        customSymbol: o,
                        customDecimals: s,
                        selectedTokens: i,
                        standard: l,
                      } = this.state;
                    e({
                      customToken: {
                        address: a,
                        symbol: o,
                        decimals: s,
                        standard: l,
                      },
                      selectedTokens: i,
                      tokenAddressList: r,
                    }),
                      t.push(c.CONFIRM_IMPORT_TOKEN_ROUTE);
                  }
                  async attemptToAutoFillTokenParams(e) {
                    const { tokenList: t } = this.props,
                      { symbol: n = "", decimals: r } =
                        await this.tokenInfoGetter(e, t),
                      a = Boolean(n),
                      o = Boolean(r);
                    this.setState({
                      symbolAutoFilled: a,
                      decimalAutoFilled: o,
                    }),
                      this.handleCustomSymbolChange(n || ""),
                      this.handleCustomDecimalsChange(r);
                  }
                  async handleCustomAddressChange(e) {
                    const t = e.trim();
                    this.setState({
                      customAddress: t,
                      customAddressError: null,
                      nftAddressError: null,
                      tokenSelectorError: null,
                      symbolAutoFilled: !1,
                      decimalAutoFilled: !1,
                      mainnetTokenWarning: null,
                    });
                    const n = (0, m.isValidHexAddress)(t, {
                        allowNonPrefixed: !1,
                      }),
                      a = (0, f.addHexPrefix)(t).toLowerCase(),
                      o = Object.keys(v.STATIC_MAINNET_TOKEN_LIST).some(
                        (e) => e.toLowerCase() === t.toLowerCase()
                      ),
                      s = "0x1" === this.props.chainId;
                    let l;
                    if (n)
                      try {
                        ({ standard: l } =
                          await this.props.getTokenStandardAndDetails(
                            a,
                            this.props.selectedAddress
                          ));
                      } catch (e) {}
                    const u =
                      0 === t.length ||
                      "0x0000000000000000000000000000000000000000" === t;
                    switch (!0) {
                      case !n && !u:
                        this.setState({
                          customAddressError: this.context.t("invalidAddress"),
                          customSymbol: "",
                          customDecimals: 0,
                          customSymbolError: null,
                          customDecimalsError: null,
                        });
                        break;
                      case "ERC1155" === l || "ERC721" === l:
                        this.setState({
                          nftAddressError: this.context.t("nftAddressError", [
                            r.default.createElement(
                              "a",
                              {
                                className:
                                  "import-token__nft-address-error-link",
                                onClick: () =>
                                  this.props.history.push({
                                    pathname: c.ADD_NFT_ROUTE,
                                    state: {
                                      addressEnteredOnImportTokensPage:
                                        this.state.customAddress,
                                    },
                                  }),
                                key: "nftAddressError",
                              },
                              this.context.t("importNFTPage")
                            ),
                          ]),
                        });
                        break;
                      case o && !s:
                        this.setState({
                          mainnetTokenWarning: this.context.t("mainnetToken"),
                          customSymbol: "",
                          customDecimals: 0,
                          customSymbolError: null,
                          customDecimalsError: null,
                        });
                        break;
                      case Boolean(this.props.identities[a]):
                        this.setState({
                          customAddressError: this.context.t(
                            "personalAddressDetected"
                          ),
                        });
                        break;
                      case (0, i.checkExistingAddresses)(t, this.props.tokens):
                        this.setState({
                          customAddressError:
                            this.context.t("tokenAlreadyAdded"),
                        });
                        break;
                      default:
                        u ||
                          (this.attemptToAutoFillTokenParams(t),
                          l && this.setState({ standard: l }));
                    }
                  }
                  handleCustomSymbolChange(e) {
                    const t = e.trim(),
                      n = t.length;
                    let r = null;
                    (n <= 0 || n >= 12) &&
                      (r = this.context.t("symbolBetweenZeroTwelve")),
                      this.setState({ customSymbol: t, customSymbolError: r });
                  }
                  handleCustomDecimalsChange(e) {
                    let t,
                      n = null;
                    e
                      ? ((t = Number(e.trim())),
                        (n =
                          e < 0 || e > 36
                            ? this.context.t("decimalsMustZerotoTen")
                            : null))
                      : ((t = ""),
                        (n = this.context.t("tokenDecimalFetchFailed"))),
                      this.setState({
                        customDecimals: t,
                        customDecimalsError: n,
                      });
                  }
                  renderCustomTokenForm() {
                    const { t: e } = this.context,
                      {
                        customAddress: t,
                        customSymbol: n,
                        customDecimals: a,
                        customAddressError: l,
                        customSymbolError: d,
                        customDecimalsError: p,
                        forceEditSymbol: f,
                        symbolAutoFilled: m,
                        decimalAutoFilled: b,
                        mainnetTokenWarning: v,
                        nftAddressError: k,
                      } = this.state,
                      {
                        chainId: w,
                        rpcPrefs: T,
                        isDynamicTokenListAvailable: A,
                        tokenDetectionInactiveOnNonMainnetSupportedNetwork: O,
                        history: C,
                      } = this.props,
                      N = (0, o.getTokenTrackerLink)(t, w, null, null, {
                        blockExplorerUrl:
                          (null == T ? void 0 : T.blockExplorerUrl) ?? null,
                      }),
                      P =
                        null != T && T.blockExplorerUrl
                          ? (0, i.getURLHostName)(N)
                          : e("etherscan");
                    return r.default.createElement(
                      "div",
                      { className: "import-token__custom-token-form" },
                      O
                        ? r.default.createElement(g.default, {
                            type: "warning",
                            message: e(
                              "customTokenWarningInTokenDetectionNetworkWithTDOFF",
                              [
                                r.default.createElement(
                                  y.default,
                                  {
                                    type: "link",
                                    key: "import-token-security-risk",
                                    className: "import-token__link",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    href: s.default.TOKEN_SAFETY_PRACTICES,
                                  },
                                  e("tokenScamSecurityRisk")
                                ),
                                r.default.createElement(
                                  y.default,
                                  {
                                    type: "link",
                                    key: "import-token-token-detection-announcement",
                                    className: "import-token__link",
                                    onClick: () =>
                                      C.push(
                                        `${c.SECURITY_ROUTE}#token-description`
                                      ),
                                  },
                                  e("inYourSettings")
                                ),
                              ]
                            ),
                            withRightButton: !0,
                            useIcon: !0,
                            iconFillColor: "var(--color-warning-default)",
                          })
                        : r.default.createElement(g.default, {
                            type: A ? "warning" : "default",
                            message: e(
                              A
                                ? "customTokenWarningInTokenDetectionNetwork"
                                : "customTokenWarningInNonTokenDetectionNetwork",
                              [
                                r.default.createElement(
                                  y.default,
                                  {
                                    type: "link",
                                    key: "import-token-fake-token-warning",
                                    className: "import-token__link",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    href: s.default.TOKEN_SAFETY_PRACTICES,
                                  },
                                  e("learnScamRisk")
                                ),
                              ]
                            ),
                            withRightButton: !0,
                            useIcon: !0,
                            iconFillColor: A
                              ? "var(--color-warning-default)"
                              : "var(--color-info-default)",
                          }),
                      r.default.createElement(u.default, {
                        id: "custom-address",
                        label: e("tokenContractAddress"),
                        type: "text",
                        value: t,
                        onChange: (e) =>
                          this.handleCustomAddressChange(e.target.value),
                        error: l || v || k,
                        fullWidth: !0,
                        autoFocus: !0,
                        margin: "normal",
                      }),
                      r.default.createElement(u.default, {
                        id: "custom-symbol",
                        label: r.default.createElement(
                          "div",
                          {
                            className:
                              "import-token__custom-symbol__label-wrapper",
                          },
                          r.default.createElement(
                            "span",
                            { className: "import-token__custom-symbol__label" },
                            e("tokenSymbol")
                          ),
                          m &&
                            !f &&
                            r.default.createElement(
                              "div",
                              {
                                className: "import-token__custom-symbol__edit",
                                onClick: () =>
                                  this.setState({ forceEditSymbol: !0 }),
                              },
                              e("edit")
                            )
                        ),
                        type: "text",
                        value: n,
                        onChange: (e) =>
                          this.handleCustomSymbolChange(e.target.value),
                        error: d,
                        fullWidth: !0,
                        margin: "normal",
                        disabled: m && !f,
                      }),
                      r.default.createElement(u.default, {
                        id: "custom-decimals",
                        label: e("decimal"),
                        type: "number",
                        value: a,
                        onChange: (e) =>
                          this.handleCustomDecimalsChange(e.target.value),
                        error: a ? p : null,
                        fullWidth: !0,
                        margin: "normal",
                        disabled: b,
                        min: 0,
                        max: 36,
                      }),
                      "" === a &&
                        r.default.createElement(g.default, {
                          message: r.default.createElement(
                            r.default.Fragment,
                            null,
                            r.default.createElement(
                              h.default,
                              {
                                variant: E.TypographyVariant.H7,
                                fontWeight: E.FONT_WEIGHT.BOLD,
                              },
                              e("tokenDecimalFetchFailed")
                            ),
                            r.default.createElement(
                              h.default,
                              {
                                variant: E.TypographyVariant.H7,
                                fontWeight: E.FONT_WEIGHT.NORMAL,
                              },
                              e("verifyThisTokenDecimalOn", [
                                r.default.createElement(
                                  y.default,
                                  {
                                    type: "link",
                                    key: "import-token-verify-token-decimal",
                                    className: "import-token__link",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    href: N,
                                  },
                                  P
                                ),
                              ])
                            )
                          ),
                          type: "warning",
                          withRightButton: !0,
                          className: "import-token__decimal-warning",
                        })
                    );
                  }
                  renderSearchToken() {
                    const { t: e } = this.context,
                      {
                        tokenList: t,
                        history: n,
                        useTokenDetection: a,
                        networkName: o,
                      } = this.props,
                      {
                        tokenSelectorError: s,
                        selectedTokens: i,
                        searchResults: l,
                      } = this.state;
                    return r.default.createElement(
                      "div",
                      { className: "import-token__search-token" },
                      !a &&
                        r.default.createElement(g.default, {
                          message: e("enhancedTokenDetectionAlertMessage", [
                            o,
                            r.default.createElement(
                              y.default,
                              {
                                type: "link",
                                key: "token-detection-announcement",
                                className: "import-token__link",
                                onClick: () =>
                                  n.push(
                                    `${c.SECURITY_ROUTE}#token-description`
                                  ),
                              },
                              e("enableFromSettings")
                            ),
                          ]),
                          withRightButton: !0,
                          useIcon: !0,
                          iconFillColor: "var(--color-primary-default)",
                          className:
                            "import-token__token-detection-announcement",
                        }),
                      r.default.createElement(k.default, {
                        onSearch: ({ results: e = [] }) =>
                          this.setState({ searchResults: e }),
                        error: s,
                        tokenList: t,
                      }),
                      r.default.createElement(
                        "div",
                        { className: "import-token__token-list" },
                        r.default.createElement(w.default, {
                          results: l,
                          selectedTokens: i,
                          onToggleToken: (e) => this.handleToggleToken(e),
                        })
                      )
                    );
                  }
                  renderTabs() {
                    const { t: e } = this.context,
                      { showSearchTab: t } = this.props,
                      n = [];
                    return (
                      t &&
                        n.push(
                          r.default.createElement(
                            p.Tab,
                            {
                              name: e("search"),
                              key: "search-tab",
                              tabKey: "search",
                            },
                            this.renderSearchToken()
                          )
                        ),
                      n.push(
                        r.default.createElement(
                          p.Tab,
                          {
                            name: e("customToken"),
                            key: "custom-tab",
                            tabKey: "customToken",
                          },
                          this.renderCustomTokenForm()
                        )
                      ),
                      r.default.createElement(p.Tabs, null, n)
                    );
                  }
                  render() {
                    const {
                      history: e,
                      clearPendingTokens: t,
                      mostRecentOverviewPage: n,
                    } = this.props;
                    return r.default.createElement(d.default, {
                      title: this.context.t("importTokensCamelCase"),
                      tabsComponent: this.renderTabs(),
                      onSubmit: () => this.handleNext(),
                      hideCancel: !0,
                      disabled: Boolean(this.hasError()) || !this.hasSelected(),
                      onClose: () => {
                        t(), e.push(n);
                      },
                    });
                  }
                }
                O(C, "contextTypes", { t: a.default.func }),
                  O(C, "propTypes", {
                    history: a.default.object,
                    setPendingTokens: a.default.func,
                    pendingTokens: a.default.object,
                    clearPendingTokens: a.default.func,
                    tokens: a.default.array,
                    identities: a.default.object,
                    showSearchTab: a.default.bool.isRequired,
                    mostRecentOverviewPage: a.default.string.isRequired,
                    chainId: a.default.string,
                    rpcPrefs: a.default.object,
                    tokenList: a.default.object,
                    useTokenDetection: a.default.bool,
                    getTokenStandardAndDetails: a.default.func,
                    selectedAddress: a.default.string,
                    isDynamicTokenListAvailable: a.default.bool.isRequired,
                    tokenDetectionInactiveOnNonMainnetSupportedNetwork:
                      a.default.bool.isRequired,
                    networkName: a.default.string.isRequired,
                  }),
                  O(C, "defaultProps", { tokenList: {} });
                var N = C;
                n.default = N;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/import-token/import-token.component.js",
      },
    ],
    [
      4797,
      {
        "../../ducks/history/history": 4630,
        "../../ducks/metamask/metamask": 4633,
        "../../selectors/selectors": 5016,
        "../../store/actions": 5020,
        "./import-token.component": 4796,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../store/actions"),
                  s = e("../../ducks/history/history"),
                  i = e("../../ducks/metamask/metamask"),
                  l = e("../../selectors/selectors"),
                  c =
                    (r = e("./import-token.component")) && r.__esModule
                      ? r
                      : { default: r };
                var u = (0, a.connect)(
                  (e) => {
                    const {
                        metamask: {
                          identities: t,
                          tokens: n,
                          pendingTokens: r,
                          useTokenDetection: a,
                          selectedAddress: o,
                        },
                      } = e,
                      { chainId: c } = (0, i.getProviderConfig)(e),
                      u = (0, l.getIsTokenDetectionInactiveOnMainnet)(e),
                      d =
                        (0, l.getIsTokenDetectionSupported)(e) ||
                        u ||
                        Boolean(!1);
                    return {
                      identities: t,
                      mostRecentOverviewPage: (0, s.getMostRecentOverviewPage)(
                        e
                      ),
                      tokens: n,
                      pendingTokens: r,
                      showSearchTab: d,
                      chainId: c,
                      rpcPrefs: (0, l.getRpcPrefsForCurrentProvider)(e),
                      tokenList: (0, l.getTokenList)(e),
                      useTokenDetection: a,
                      selectedAddress: o,
                      isDynamicTokenListAvailable: (0,
                      l.getIsDynamicTokenListAvailable)(e),
                      networkName: (0,
                      l.getTokenDetectionSupportNetworkByChainId)(e),
                      tokenDetectionInactiveOnNonMainnetSupportedNetwork: (0,
                      l.getIstokenDetectionInactiveOnNonMainnetSupportedNetwork)(
                        e
                      ),
                    };
                  },
                  (e) => ({
                    setPendingTokens: (t) => e((0, o.setPendingTokens)(t)),
                    clearPendingTokens: () => e((0, o.clearPendingTokens)()),
                    getTokenStandardAndDetails: (e, t) =>
                      (0, o.getTokenStandardAndDetails)(e, t, null),
                  })
                )(c.default);
                n.default = u;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/import-token/import-token.container.js",
      },
    ],
    [
      4798,
      { "./import-token.container": 4797 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var r;
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var a = (
                  (r = e("./import-token.container")) && r.__esModule
                    ? r
                    : { default: r }
                ).default;
                n.default = a;
              };
            };
      },
      { package: "$root$", file: "ui/pages/import-token/index.js" },
    ],
    [
      4799,
      { "./token-list.container": 4803 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var r;
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var a = (
                  (r = e("./token-list.container")) && r.__esModule
                    ? r
                    : { default: r }
                ).default;
                n.default = a;
              };
            };
      },
      { package: "$root$", file: "ui/pages/import-token/token-list/index.js" },
    ],
    [
      4800,
      { "./token-list-placeholder.component": 4801 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var r;
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var a = (
                  (r = e("./token-list-placeholder.component")) && r.__esModule
                    ? r
                    : { default: r }
                ).default;
                n.default = a;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/import-token/token-list/token-list-placeholder/index.js",
      },
    ],
    [
      4801,
      {
        "../../../../components/ui/button": 4478,
        "../../../../components/ui/icon/icon-token-search": 4520,
        "../../../../helpers/constants/zendesk-url": 4648,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a,
                  o,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  i = d(e("prop-types")),
                  l = d(e("../../../../components/ui/button")),
                  c = d(e("../../../../components/ui/icon/icon-token-search")),
                  u = d(e("../../../../helpers/constants/zendesk-url"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class f extends s.Component {
                  render() {
                    return s.default.createElement(
                      "div",
                      { className: "token-list-placeholder" },
                      s.default.createElement(c.default, {
                        size: 64,
                        color: "var(--color-icon-muted)",
                      }),
                      s.default.createElement(
                        "div",
                        { className: "token-list-placeholder__text" },
                        this.context.t("addAcquiredTokens")
                      ),
                      s.default.createElement(
                        l.default,
                        {
                          type: "link",
                          className: "token-list-placeholder__link",
                          href: u.default.ADD_CUSTOM_TOKENS,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        this.context.t("learnMoreUpperCase")
                      )
                    );
                  }
                }
                (n.default = f),
                  (r = f),
                  (a = "contextTypes"),
                  (o = { t: i.default.func }),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (n !== undefined) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(a)) in r
                    ? Object.defineProperty(r, a, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[a] = o);
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/import-token/token-list/token-list-placeholder/token-list-placeholder.component.js",
      },
    ],
    [
      4802,
      {
        "../../../helpers/utils/util": 4679,
        "./token-list-placeholder": 4800,
        classnames: 2227,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("classnames")),
                  s = e("../../../helpers/utils/util"),
                  i = l(e("./token-list-placeholder"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class d extends r.Component {
                  render() {
                    const {
                      results: e = [],
                      selectedTokens: t = {},
                      onToggleToken: n,
                      tokens: a = [],
                    } = this.props;
                    return 0 === e.length
                      ? r.default.createElement(i.default, null)
                      : r.default.createElement(
                          "div",
                          { className: "token-list" },
                          r.default.createElement(
                            "div",
                            { className: "token-list__title" },
                            this.context.t("searchResults")
                          ),
                          r.default.createElement(
                            "div",
                            { className: "token-list__tokens-container" },
                            Array(6)
                              .fill(undefined)
                              .map((i, l) => {
                                var c, u, d;
                                const {
                                    symbol: p,
                                    name: f,
                                    address: m,
                                  } = e[l] || {},
                                  g = (0, s.checkExistingAddresses)(m, a),
                                  h = () => !g && n(e[l]);
                                return (
                                  Boolean(
                                    (null === (c = e[l]) || void 0 === c
                                      ? void 0
                                      : c.iconUrl) ||
                                      p ||
                                      f
                                  ) &&
                                  r.default.createElement(
                                    "div",
                                    {
                                      className: (0, o.default)(
                                        "token-list__token",
                                        {
                                          "token-list__token--selected": t[m],
                                          "token-list__token--disabled": g,
                                        }
                                      ),
                                      onClick: h,
                                      onKeyPress: (e) =>
                                        "Enter" === e.key && h(),
                                      key: l,
                                      tabIndex: "0",
                                    },
                                    r.default.createElement("div", {
                                      className: "token-list__token-icon",
                                      style: {
                                        backgroundImage:
                                          (null === (u = e[l]) || void 0 === u
                                            ? void 0
                                            : u.iconUrl) &&
                                          `url(${
                                            null === (d = e[l]) || void 0 === d
                                              ? void 0
                                              : d.iconUrl
                                          })`,
                                      },
                                    }),
                                    r.default.createElement(
                                      "div",
                                      { className: "token-list__token-data" },
                                      r.default.createElement(
                                        "span",
                                        { className: "token-list__token-name" },
                                        `${f} (${p})`
                                      )
                                    )
                                  )
                                );
                              })
                          )
                        );
                  }
                }
                (n.default = d),
                  u(d, "contextTypes", { t: a.default.func }),
                  u(d, "propTypes", {
                    tokens: a.default.array,
                    results: a.default.array,
                    selectedTokens: a.default.object,
                    onToggleToken: a.default.func,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/import-token/token-list/token-list.component.js",
      },
    ],
    [
      4803,
      { "./token-list.component": 4802, "react-redux": 3695 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o =
                    (r = e("./token-list.component")) && r.__esModule
                      ? r
                      : { default: r };
                var s = (0, a.connect)((e) => {
                  const { tokens: t } = e.metamask;
                  return { tokens: t };
                })(o.default);
                n.default = s;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/import-token/token-list/token-list.container.js",
      },
    ],
    [
      4804,
      { "./token-search.component": 4805 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var r;
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var a = (
                  (r = e("./token-search.component")) && r.__esModule
                    ? r
                    : { default: r }
                ).default;
                n.default = a;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/import-token/token-search/index.js",
      },
    ],
    [
      4805,
      {
        "../../../../shared/modules/string-utils": 3991,
        "../../../components/ui/icon/search-icon": 4525,
        "../../../components/ui/text-field": 4595,
        "@material-ui/core/InputAdornment": 720,
        "fuse.js": 2905,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = u(e("prop-types")),
                  o = u(e("fuse.js")),
                  s = u(e("@material-ui/core/InputAdornment")),
                  i = u(e("../../../components/ui/text-field")),
                  l = e("../../../../shared/modules/string-utils"),
                  c = u(e("../../../components/ui/icon/search-icon"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class f extends r.Component {
                  constructor(e) {
                    super(e), p(this, "state", { searchQuery: "" });
                    const { tokenList: t } = this.props;
                    (this.tokenList = Object.values(t)),
                      (this.tokenSearchFuse = new o.default(this.tokenList, {
                        shouldSort: !0,
                        threshold: 0.45,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: [
                          { name: "name", weight: 0.5 },
                          { name: "symbol", weight: 0.5 },
                        ],
                      }));
                  }
                  handleSearch(e) {
                    this.setState({ searchQuery: e });
                    const t = this.tokenSearchFuse.search(e),
                      n = [
                        ...this.tokenList.filter(
                          (t) =>
                            t.address &&
                            e &&
                            (0, l.isEqualCaseInsensitive)(t.address, e)
                        ),
                        ...t,
                      ];
                    this.props.onSearch({ searchQuery: e, results: n });
                  }
                  renderAdornment() {
                    return r.default.createElement(
                      s.default,
                      { position: "start", style: { marginRight: "12px" } },
                      r.default.createElement(c.default, {
                        color: "var(--color-icon-muted)",
                      })
                    );
                  }
                  render() {
                    const { error: e } = this.props,
                      { searchQuery: t } = this.state;
                    return r.default.createElement(i.default, {
                      id: "search-tokens",
                      placeholder: this.context.t("searchTokens"),
                      type: "text",
                      value: t,
                      onChange: (e) => this.handleSearch(e.target.value),
                      error: e,
                      fullWidth: !0,
                      autoFocus: !0,
                      autoComplete: "off",
                      startAdornment: this.renderAdornment(),
                    });
                  }
                }
                (n.default = f),
                  p(f, "contextTypes", { t: a.default.func }),
                  p(f, "defaultProps", { error: null }),
                  p(f, "propTypes", {
                    onSearch: a.default.func,
                    error: a.default.string,
                    tokenList: a.default.object,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/import-token/token-search/token-search.component.js",
      },
    ],
    [
      4806,
      {
        "../contexts/i18n": 4618,
        "../contexts/metametrics": 4619,
        "./error": 4792,
        "./routes": 4837,
        "@sentry/browser": 1623,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = m(e("react")),
                  a = p(e("prop-types")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = m(e("@sentry/browser")),
                  l = e("../contexts/i18n"),
                  c = e("../contexts/metametrics"),
                  u = p(e("./error")),
                  d = p(e("./routes"));
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m(e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (
                    null === e ||
                    ("object" != typeof e && "function" != typeof e)
                  )
                    return { default: e };
                  var n = f(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = {},
                    a =
                      Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if (
                      "default" !== o &&
                      Object.prototype.hasOwnProperty.call(e, o)
                    ) {
                      var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                      s && (s.get || s.set)
                        ? Object.defineProperty(r, o, s)
                        : (r[o] = e[o]);
                    }
                  return (r.default = e), n && n.set(e, r), r;
                }
                function g(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class h extends r.PureComponent {
                  constructor(...e) {
                    super(...e), g(this, "state", {});
                  }
                  static getDerivedStateFromError(e) {
                    return { error: e };
                  }
                  componentDidCatch(e) {
                    i.captureException(e);
                  }
                  render() {
                    const { error: e, errorId: t } = this.state,
                      { store: n } = this.props;
                    return e
                      ? r.default.createElement(
                          o.Provider,
                          { store: n },
                          r.default.createElement(
                            l.I18nProvider,
                            null,
                            r.default.createElement(
                              l.LegacyI18nProvider,
                              null,
                              r.default.createElement(u.default, {
                                error: e,
                                errorId: t,
                              })
                            )
                          )
                        )
                      : r.default.createElement(
                          o.Provider,
                          { store: n },
                          r.default.createElement(
                            s.HashRouter,
                            { hashType: "noslash" },
                            r.default.createElement(
                              c.MetaMetricsProvider,
                              null,
                              r.default.createElement(
                                c.LegacyMetaMetricsProvider,
                                null,
                                r.default.createElement(
                                  l.I18nProvider,
                                  null,
                                  r.default.createElement(
                                    l.LegacyI18nProvider,
                                    null,
                                    r.default.createElement(d.default, null)
                                  )
                                )
                              )
                            )
                          )
                        );
                  }
                }
                h.propTypes = { store: a.default.object };
                var E = h;
                n.default = E;
              };
            };
      },
      { package: "$root$", file: "ui/pages/index.js" },
    ],
    [
      4807,
      {
        "../../../shared/constants/metametrics": 3953,
        "../../components/app/create-new-vault": 4080,
        "../../components/ui/box": 4474,
        "../../components/ui/button": 4478,
        "../../components/ui/typography": 4610,
        "../../helpers/constants/design-system": 4641,
        "../../helpers/constants/routes": 4645,
        "../../helpers/constants/zendesk-url": 4648,
        "../../store/actions": 5020,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = g(e("prop-types")),
                  o = e("react-redux"),
                  s = e("../../store/actions"),
                  i = e("../../helpers/constants/routes"),
                  l = g(e("../../components/app/create-new-vault")),
                  c = g(e("../../components/ui/button")),
                  u = g(e("../../components/ui/box")),
                  d = g(e("../../components/ui/typography")),
                  p = g(e("../../helpers/constants/zendesk-url")),
                  f = e("../../helpers/constants/design-system"),
                  m = e("../../../shared/constants/metametrics");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function E(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class y extends r.Component {
                  constructor(...e) {
                    super(...e),
                      E(this, "handleImport", async (e, t) => {
                        const {
                          createNewVaultAndRestore: n,
                          leaveImportSeedScreenState: r,
                          history: a,
                        } = this.props;
                        r(),
                          await n(e, t),
                          this.context.trackEvent({
                            category: m.MetaMetricsEventCategory.Retention,
                            event: "onboardingRestoredVault",
                            properties: {
                              action: "userEntersSeedPhrase",
                              legacy_event: !0,
                            },
                          }),
                          a.push(i.DEFAULT_ROUTE);
                      });
                  }
                  render() {
                    const { t: e } = this.context,
                      { isLoading: t } = this.props;
                    return r.default.createElement(
                      u.default,
                      { className: "first-view-main-wrapper" },
                      r.default.createElement(
                        u.default,
                        { className: "first-view-main" },
                        r.default.createElement(
                          u.default,
                          { className: "import-account" },
                          r.default.createElement(
                            "a",
                            {
                              className: "import-account__back-button",
                              onClick: (e) => {
                                e.preventDefault(),
                                  this.props.leaveImportSeedScreenState(),
                                  this.props.history.push(i.DEFAULT_ROUTE);
                              },
                              href: "#",
                            },
                            `< ${e("back")}`
                          ),
                          r.default.createElement(
                            d.default,
                            {
                              variant: f.TypographyVariant.H1,
                              color: f.TextColor.textDefault,
                            },
                            e("resetWallet")
                          ),
                          r.default.createElement(
                            d.default,
                            { color: f.TextColor.textDefault },
                            e("resetWalletSubHeader")
                          ),
                          r.default.createElement(
                            d.default,
                            {
                              color: f.TextColor.textDefault,
                              marginTop: 4,
                              marginBottom: 4,
                            },
                            e("resetWalletUsingSRP", [
                              r.default.createElement(
                                c.default,
                                {
                                  type: "link",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: p.default.ADD_MISSING_ACCOUNTS,
                                  key: "import-account-secretphase",
                                  className: "import-account__link",
                                },
                                e("reAddAccounts")
                              ),
                              r.default.createElement(
                                c.default,
                                {
                                  type: "link",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: p.default.IMPORT_ACCOUNTS,
                                  key: "import-account-reimport-accounts",
                                  className: "import-account__link",
                                },
                                e("reAdded")
                              ),
                              r.default.createElement(
                                c.default,
                                {
                                  type: "link",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: p.default.ADD_CUSTOM_TOKENS,
                                  key: "import-account-readd-tokens",
                                  className: "import-account__link",
                                },
                                e("reAdded")
                              ),
                            ])
                          ),
                          r.default.createElement(
                            d.default,
                            {
                              color: f.TextColor.textDefault,
                              margin: 0,
                              marginBottom: 4,
                            },
                            e("resetWalletWarning")
                          ),
                          r.default.createElement(l.default, {
                            disabled: t,
                            onSubmit: this.handleImport,
                            submitText: e("restore"),
                          })
                        )
                      )
                    );
                  }
                }
                E(y, "contextTypes", {
                  t: a.default.func,
                  trackEvent: a.default.func,
                }),
                  E(y, "propTypes", {
                    createNewVaultAndRestore: a.default.func.isRequired,
                    leaveImportSeedScreenState: a.default.func,
                    history: a.default.object,
                    isLoading: a.default.bool,
                  });
                var b = (0, o.connect)(
                  ({ appState: { isLoading: e } }) => ({ isLoading: e }),
                  (e) => ({
                    leaveImportSeedScreenState: () => {
                      e((0, s.unMarkPasswordForgotten)());
                    },
                    createNewVaultAndRestore: (t, n) =>
                      e((0, s.createNewVaultAndRestore)(t, n)),
                  })
                )(y);
                n.default = b;
              };
            };
      },
      { package: "$root$", file: "ui/pages/keychains/restore-vault.js" },
    ],
    [
      4808,
      {
        "../../../shared/constants/metametrics": 3953,
        "../../components/component-library": 4381,
        "../../components/ui/box": 4474,
        "../../components/ui/export-text-container": 4506,
        "../../components/ui/tabs": 4591,
        "../../contexts/metametrics": 4619,
        "../../ducks/history/history": 4630,
        "../../helpers/constants/design-system": 4641,
        "../../helpers/constants/zendesk-url": 4648,
        "../../hooks/useI18nContext": 4701,
        "../../store/actions": 5020,
        "qrcode-generator": 3621,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = e("react-router-dom"),
                  s = y(e("qrcode-generator")),
                  i = e("../../store/actions"),
                  l = y(e("../../components/ui/export-text-container")),
                  c = e("../../ducks/history/history"),
                  u = e("../../../shared/constants/metametrics"),
                  d = e("../../helpers/constants/design-system"),
                  p = y(e("../../components/ui/box")),
                  f = e("../../components/component-library"),
                  m = e("../../hooks/useI18nContext"),
                  g = e("../../contexts/metametrics"),
                  h = y(e("../../helpers/constants/zendesk-url")),
                  E = e("../../components/ui/tabs");
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const v = "PASSWORD_PROMPT_SCREEN";
                var k = () => {
                  const e = (0, o.useHistory)(),
                    t = (0, a.useDispatch)(),
                    n = (0, m.useI18nContext)(),
                    y = (0, r.useContext)(g.MetaMetricsContext),
                    [b, k] = (0, r.useState)(v),
                    [w, T] = (0, r.useState)(""),
                    [A, O] = (0, r.useState)(null),
                    [C, N] = (0, r.useState)(!1),
                    [P, I] = (0, r.useState)(null),
                    R = (0, a.useSelector)(c.getMostRecentOverviewPage);
                  (0, r.useEffect)(() => {
                    const e = document.getElementById("password-box");
                    e && e.focus();
                  }, []);
                  const S = () => {
                      const e = (0, s.default)(0, "L");
                      return e.addData(A), e.make(), e;
                    },
                    M = (e) => {
                      e.preventDefault(),
                        O(null),
                        N(!1),
                        I(null),
                        t((0, i.requestRevealSeedWords)(w))
                          .then((e) => {
                            y({
                              category: u.MetaMetricsEventCategory.Keys,
                              event: u.MetaMetricsEventName.KeyExportRevealed,
                              properties: {
                                key_type: u.MetaMetricsEventKeyType.Srp,
                              },
                            }),
                              O(e),
                              t(
                                (0, i.showModal)({
                                  name: "HOLD_TO_REVEAL_SRP",
                                  onLongPressed: () => {
                                    N(!0), k("REVEAL_SEED_SCREEN");
                                  },
                                  holdToRevealType: "SRP",
                                })
                              );
                          })
                          .catch((e) => {
                            y({
                              category: u.MetaMetricsEventCategory.Keys,
                              event: u.MetaMetricsEventName.KeyExportFailed,
                              properties: {
                                key_type: u.MetaMetricsEventKeyType.Srp,
                                reason: e.message,
                              },
                            }),
                              I(e.message);
                          });
                    };
                  return r.default.createElement(
                    p.default,
                    {
                      className: "page-container",
                      paddingTop: 8,
                      paddingBottom: 8,
                      paddingLeft: 4,
                      paddingRight: 4,
                      gap: 4,
                    },
                    r.default.createElement(
                      f.Text,
                      { variant: d.TextVariant.headingLg },
                      n("secretRecoveryPhrase")
                    ),
                    r.default.createElement(
                      f.Text,
                      { variant: d.TextVariant.bodyMd },
                      n("revealSeedWordsDescription1", [
                        r.default.createElement(
                          f.Button,
                          {
                            key: "srp-learn-srp",
                            variant: f.BUTTON_VARIANT.LINK,
                            size: f.BUTTON_SIZES.INHERIT,
                            as: "a",
                            href: h.default.SECRET_RECOVERY_PHRASE,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          n("revealSeedWordsSRPName")
                        ),
                        r.default.createElement(
                          f.Text,
                          {
                            key: "reveal-seed-word-part-3",
                            variant: d.TextVariant.bodyMdBold,
                            as: "strong",
                          },
                          n("revealSeedWordsDescription3")
                        ),
                      ])
                    ),
                    r.default.createElement(
                      f.Text,
                      { variant: d.TextVariant.bodyMd },
                      n("revealSeedWordsDescription2", [
                        r.default.createElement(
                          f.Button,
                          {
                            key: "srp-learn-more-non-custodial",
                            variant: f.BUTTON_VARIANT.LINK,
                            size: f.BUTTON_SIZES.INHERIT,
                            as: "a",
                            href: h.default.NON_CUSTODIAL_WALLET,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          n("revealSeedWordsNonCustodialWallet")
                        ),
                      ])
                    ),
                    r.default.createElement(
                      f.BannerAlert,
                      { severity: d.SEVERITIES.DANGER },
                      r.default.createElement(
                        f.Text,
                        { variant: d.TextVariant.bodyMd },
                        n("revealSeedWordsWarning", [
                          r.default.createElement(
                            f.Text,
                            {
                              key: "reveal-seed-words-warning-2",
                              variant: d.TextVariant.bodyMdBold,
                              as: "strong",
                            },
                            n("revealSeedWordsWarning2")
                          ),
                        ])
                      )
                    ),
                    b !== v && C
                      ? (y({
                          category: u.MetaMetricsEventCategory.Keys,
                          event: u.MetaMetricsEventName.SrpViewSrpText,
                          properties: {
                            key_type: u.MetaMetricsEventKeyType.Srp,
                          },
                        }),
                        r.default.createElement(
                          "div",
                          null,
                          r.default.createElement(
                            E.Tabs,
                            {
                              defaultActiveTabName: n("revealSeedWordsText"),
                              onTabClick: (e) => {
                                "text-seed" === e
                                  ? y({
                                      category: u.MetaMetricsEventCategory.Keys,
                                      event:
                                        u.MetaMetricsEventName.SrpViewSrpText,
                                      properties: {
                                        key_type: u.MetaMetricsEventKeyType.Srp,
                                      },
                                    })
                                  : "qr-srp" === e &&
                                    y({
                                      category: u.MetaMetricsEventCategory.Keys,
                                      event:
                                        u.MetaMetricsEventName.SrpViewsSrpQR,
                                      properties: {
                                        key_type: u.MetaMetricsEventKeyType.Srp,
                                      },
                                    });
                              },
                            },
                            r.default.createElement(
                              E.Tab,
                              {
                                name: n("revealSeedWordsText"),
                                className: "reveal-seed__tab",
                                activeClassName: "reveal-seed__active-tab",
                                tabKey: "text-seed",
                              },
                              r.default.createElement(
                                f.Label,
                                { marginTop: 4 },
                                n("yourPrivateSeedPhrase")
                              ),
                              r.default.createElement(l.default, {
                                text: A,
                                onClickCopy: () => {
                                  y({
                                    category: u.MetaMetricsEventCategory.Keys,
                                    event:
                                      u.MetaMetricsEventName.KeyExportCopied,
                                    properties: {
                                      key_type: u.MetaMetricsEventKeyType.Srp,
                                      copy_method: "clipboard",
                                    },
                                  }),
                                    y({
                                      category: u.MetaMetricsEventCategory.Keys,
                                      event:
                                        u.MetaMetricsEventName
                                          .SrpCopiedToClipboard,
                                      properties: {
                                        key_type: u.MetaMetricsEventKeyType.Srp,
                                        copy_method: "clipboard",
                                      },
                                    });
                                },
                              })
                            ),
                            r.default.createElement(
                              E.Tab,
                              {
                                name: n("revealSeedWordsQR"),
                                className: "reveal-seed__tab",
                                activeClassName: "reveal-seed__active-tab",
                                tabKey: "qr-srp",
                              },
                              r.default.createElement(
                                p.default,
                                {
                                  display: d.DISPLAY.FLEX,
                                  justifyContent: d.JustifyContent.center,
                                  alignItems: d.AlignItems.center,
                                  paddingTop: 4,
                                  "data-testid": "qr-srp",
                                },
                                r.default.createElement("div", {
                                  dangerouslySetInnerHTML: {
                                    __html: S().createTableTag(5, 15),
                                  },
                                })
                              )
                            )
                          )
                        ))
                      : r.default.createElement(
                          "form",
                          { onSubmit: (e) => M(e) },
                          r.default.createElement(
                            f.Label,
                            { htmlFor: "password-box" },
                            n("enterPasswordContinue")
                          ),
                          r.default.createElement(f.TextField, {
                            inputProps: { "data-testid": "input-password" },
                            type: f.TEXT_FIELD_TYPES.PASSWORD,
                            placeholder: n("makeSureNoOneWatching"),
                            id: "password-box",
                            size: f.TEXT_FIELD_SIZES.LG,
                            value: w,
                            onChange: (e) => T(e.target.value),
                            error: P,
                            width: d.BLOCK_SIZES.FULL,
                          }),
                          P &&
                            r.default.createElement(
                              f.HelpText,
                              { severity: d.SEVERITIES.DANGER },
                              P
                            )
                        ),
                    b !== v && C
                      ? r.default.createElement(
                          p.default,
                          { marginTop: "auto" },
                          r.default.createElement(
                            f.Button,
                            {
                              variant: f.BUTTON_VARIANT.SECONDARY,
                              width: d.BLOCK_SIZES.FULL,
                              size: d.Size.LG,
                              onClick: () => {
                                y({
                                  category: u.MetaMetricsEventCategory.Keys,
                                  event:
                                    u.MetaMetricsEventName
                                      .SrpRevealCloseClicked,
                                  properties: {
                                    key_type: u.MetaMetricsEventKeyType.Srp,
                                  },
                                }),
                                  e.push(R);
                              },
                            },
                            n("close")
                          )
                        )
                      : r.default.createElement(
                          p.default,
                          {
                            display: d.DISPLAY.FLEX,
                            marginTop: "auto",
                            gap: 4,
                          },
                          r.default.createElement(
                            f.Button,
                            {
                              width: d.BLOCK_SIZES.FULL,
                              size: d.Size.LG,
                              variant: f.BUTTON_VARIANT.SECONDARY,
                              onClick: () => {
                                y({
                                  category: u.MetaMetricsEventCategory.Keys,
                                  event:
                                    u.MetaMetricsEventName.KeyExportCanceled,
                                  properties: {
                                    key_type: u.MetaMetricsEventKeyType.Srp,
                                  },
                                }),
                                  y({
                                    category: u.MetaMetricsEventCategory.Keys,
                                    event:
                                      u.MetaMetricsEventName.SrpRevealCancelled,
                                    properties: {
                                      key_type: u.MetaMetricsEventKeyType.Srp,
                                    },
                                  }),
                                  e.push(R);
                              },
                            },
                            n("cancel")
                          ),
                          r.default.createElement(
                            f.Button,
                            {
                              width: d.BLOCK_SIZES.FULL,
                              size: d.Size.LG,
                              onClick: (e) => {
                                y({
                                  category: u.MetaMetricsEventCategory.Keys,
                                  event:
                                    u.MetaMetricsEventName.KeyExportRequested,
                                  properties: {
                                    key_type: u.MetaMetricsEventKeyType.Srp,
                                  },
                                }),
                                  y({
                                    category: u.MetaMetricsEventCategory.Keys,
                                    event:
                                      u.MetaMetricsEventName
                                        .SrpRevealNextClicked,
                                    properties: {
                                      key_type: u.MetaMetricsEventKeyType.Srp,
                                    },
                                  }),
                                  M(e);
                              },
                              disabled: "" === w,
                            },
                            n("next")
                          )
                        )
                  );
                };
                n.default = k;
              };
            };
      },
      { package: "$root$", file: "ui/pages/keychains/reveal-seed.js" },
    ],
    [
      4809,
      { "./lock.container": 4811 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./lock.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/lock/index.js" },
    ],
    [
      4810,
      {
        "../../components/ui/loading-screen": 4545,
        "../../helpers/constants/routes": 4645,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a,
                  o,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  i = u(e("prop-types")),
                  l = u(e("../../components/ui/loading-screen")),
                  c = e("../../helpers/constants/routes");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class p extends s.PureComponent {
                  componentDidMount() {
                    const {
                      lockMetamask: e,
                      isUnlocked: t,
                      history: n,
                    } = this.props;
                    t
                      ? e().then(() => n.push(c.DEFAULT_ROUTE))
                      : n.replace(c.DEFAULT_ROUTE);
                  }
                  render() {
                    return s.default.createElement(l.default, null);
                  }
                }
                (n.default = p),
                  (r = p),
                  (a = "propTypes"),
                  (o = {
                    history: i.default.object,
                    isUnlocked: i.default.bool,
                    lockMetamask: i.default.func,
                  }),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (n !== undefined) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(a)) in r
                    ? Object.defineProperty(r, a, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[a] = o);
              };
            };
      },
      { package: "$root$", file: "ui/pages/lock/lock.component.js" },
    ],
    [
      4811,
      {
        "../../store/actions": 5020,
        "./lock.component": 4810,
        "react-redux": 3695,
        "react-router-dom": 3715,
        redux: 3747,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../store/actions"),
                  l =
                    (r = e("./lock.component")) && r.__esModule
                      ? r
                      : { default: r };
                var c = (0, a.compose)(
                  s.withRouter,
                  (0, o.connect)(
                    (e) => {
                      const {
                        metamask: { isUnlocked: t },
                      } = e;
                      return { isUnlocked: t };
                    },
                    (e) => ({ lockMetamask: () => e((0, i.lockMetamask)()) })
                  )
                )(l.default);
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/pages/lock/lock.container.js" },
    ],
    [
      4812,
      {
        "../../../components/ui/box/box": 4473,
        "../../../components/ui/typography/typography": 4611,
        "../../../helpers/constants/design-system": 4641,
        "../../../hooks/useI18nContext": 4701,
        "../../../store/actions": 5020,
        "../../settings/networks-tab/networks-form/networks-form": 4906,
        react: 3730,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, a.useDispatch)(),
                      t = (0, o.useI18nContext)(),
                      n = () =>
                        e((0, s.hideModal)({ name: "ONBOARDING_ADD_NETWORK" }));
                    return r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        l.default,
                        { paddingTop: 4 },
                        r.default.createElement(
                          i.default,
                          {
                            variant: c.TypographyVariant.H4,
                            align: c.TEXT_ALIGN.CENTER,
                            fontWeight: c.FONT_WEIGHT.BOLD,
                          },
                          t("onboardingMetametricsModalTitle")
                        )
                      ),
                      r.default.createElement(u.default, {
                        addNewNetwork: !0,
                        restrictHeight: !0,
                        networksToRender: [],
                        cancelCallback: n,
                        submitCallback: n,
                      })
                    );
                  });
                var r = d(e("react")),
                  a = e("react-redux"),
                  o = e("../../../hooks/useI18nContext"),
                  s = e("../../../store/actions"),
                  i = d(e("../../../components/ui/typography/typography")),
                  l = d(e("../../../components/ui/box/box")),
                  c = e("../../../helpers/constants/design-system"),
                  u = d(
                    e("../../settings/networks-tab/networks-form/networks-form")
                  );
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/add-network-modal/index.js",
      },
    ],
    [
      4813,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/app/step-progress-bar": 4258,
        "../../../components/component-library": 4381,
        "../../../components/ui/box": 4474,
        "../../../components/ui/button": 4478,
        "../../../components/ui/check-box": 4482,
        "../../../components/ui/form-field": 4508,
        "../../../components/ui/typography": 4610,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/common": 4639,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/onboarding": 4644,
        "../../../helpers/constants/routes": 4645,
        "../../../helpers/constants/zendesk-url": 4648,
        "../../../hooks/useI18nContext": 4701,
        "../../../selectors": 5013,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
        zxcvbn: 3940,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = C);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = O(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = A(e("prop-types")),
                  o = e("react-router-dom"),
                  s = A(e("zxcvbn")),
                  i = e("react-redux"),
                  l = e("../../../hooks/useI18nContext"),
                  c = A(e("../../../components/ui/button")),
                  u = A(e("../../../components/ui/typography")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../helpers/constants/routes"),
                  f = A(e("../../../components/ui/form-field")),
                  m = A(e("../../../components/ui/box")),
                  g = A(e("../../../components/ui/check-box")),
                  h = e("../../../components/app/step-progress-bar"),
                  E = e("../../../helpers/constants/common"),
                  y = A(e("../../../helpers/constants/zendesk-url")),
                  b = e("../../../selectors"),
                  v = e("../../../helpers/constants/onboarding"),
                  k = e("../../../contexts/metametrics"),
                  w = e("../../../../shared/constants/metametrics"),
                  T = e("../../../components/component-library");
                function A(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function O(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (O = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function C({
                  createNewAccount: e,
                  importWithRecoveryPhrase: t,
                  secretRecoveryPhrase: n,
                }) {
                  const a = (0, l.useI18nContext)(),
                    [A, O] = (0, r.useState)(""),
                    [C, N] = (0, r.useState)(""),
                    [P, I] = (0, r.useState)(""),
                    [R, S] = (0, r.useState)(""),
                    [M, x] = (0, r.useState)(""),
                    [D, j] = (0, r.useState)(""),
                    [B, L] = (0, r.useState)(!1),
                    [_, U] = (0, r.useState)(!1),
                    F = (0, o.useHistory)(),
                    Q = (0, i.useSelector)(b.getFirstTimeFlowType),
                    G = (0, r.useContext)(k.MetaMetricsContext),
                    H = (0, i.useSelector)(b.getCurrentKeyring);
                  (0, r.useEffect)(() => {
                    H &&
                      (Q === v.FIRST_TIME_FLOW_TYPES.IMPORT
                        ? F.replace(p.ONBOARDING_COMPLETION_ROUTE)
                        : F.replace(p.ONBOARDING_SECURE_YOUR_WALLET_ROUTE));
                  }, [H, F, Q]);
                  const W = (0, r.useMemo)(
                      () =>
                        !(!C || !A || C !== A) &&
                        !(C.length < E.PASSWORD_MIN_LENGTH) &&
                        !P &&
                        !D,
                      [C, A, P, D]
                    ),
                    K = async (r) => {
                      if ((null == r || r.preventDefault(), W))
                        if (
                          (G({
                            category: w.MetaMetricsEventCategory.Onboarding,
                            event:
                              w.MetaMetricsEventName
                                .OnboardingWalletCreationAttempted,
                          }),
                          n && Q === v.FIRST_TIME_FLOW_TYPES.IMPORT)
                        )
                          await t(C, n), F.push(p.ONBOARDING_COMPLETION_ROUTE);
                        else
                          try {
                            e && (await e(C)),
                              F.push(p.ONBOARDING_SECURE_YOUR_WALLET_ROUTE);
                          } catch (e) {
                            I(e.message);
                          }
                    };
                  return r.default.createElement(
                    "div",
                    {
                      className: "create-password__wrapper",
                      "data-testid": "create-password",
                    },
                    n && Q === v.FIRST_TIME_FLOW_TYPES.IMPORT
                      ? r.default.createElement(h.TwoStepProgressBar, {
                          stage: h.twoStepStages.PASSWORD_CREATE,
                          marginBottom: 4,
                        })
                      : r.default.createElement(h.ThreeStepProgressBar, {
                          stage: h.threeStepStages.PASSWORD_CREATE,
                          marginBottom: 4,
                        }),
                    r.default.createElement(
                      u.default,
                      {
                        variant: d.TypographyVariant.H2,
                        fontWeight: d.FONT_WEIGHT.BOLD,
                      },
                      a("createPassword")
                    ),
                    r.default.createElement(
                      u.default,
                      {
                        variant: d.TypographyVariant.H4,
                        align: d.TEXT_ALIGN.CENTER,
                      },
                      a("passwordSetupDetails")
                    ),
                    r.default.createElement(
                      m.default,
                      { justifyContent: d.JustifyContent.center, marginTop: 3 },
                      r.default.createElement(
                        "form",
                        { className: "create-password__form", onSubmit: K },
                        r.default.createElement(f.default, {
                          dataTestId: "create-password-new",
                          autoFocus: !0,
                          passwordStrength: R,
                          passwordStrengthText: M,
                          onChange: (e) => {
                            const t =
                                e.length && e.length < E.PASSWORD_MIN_LENGTH,
                              { score: n } = (0, s.default)(e),
                              o = ((e, t) =>
                                e
                                  ? {
                                      className: "create-password__weak",
                                      dataTestId: "short-password-error",
                                      text: a("passwordNotLongEnough"),
                                      description: "",
                                    }
                                  : t >= 4
                                  ? {
                                      className: "create-password__strong",
                                      dataTestId: "strong-password",
                                      text: a("strong"),
                                      description: "",
                                    }
                                  : 3 === t
                                  ? {
                                      className: "create-password__average",
                                      dataTestId: "average-password",
                                      text: a("average"),
                                      description: a(
                                        "passwordStrengthDescription"
                                      ),
                                    }
                                  : {
                                      className: "create-password__weak",
                                      dataTestId: "weak-password",
                                      text: a("weak"),
                                      description: a(
                                        "passwordStrengthDescription"
                                      ),
                                    })(t, n),
                              i = a("passwordStrength", [
                                r.default.createElement(
                                  "span",
                                  {
                                    key: n,
                                    "data-testid": o.dataTestId,
                                    className: o.className,
                                  },
                                  o.text
                                ),
                              ]),
                              l = A && e !== A ? a("passwordsDontMatch") : "";
                            N(e), S(i), x(o.description), j(l);
                          },
                          password: !_,
                          titleText: a("newPassword"),
                          value: C,
                          titleDetail: r.default.createElement(
                            u.default,
                            { variant: d.TypographyVariant.H7 },
                            r.default.createElement(
                              "a",
                              {
                                href: "",
                                "data-testid": "show-password",
                                className:
                                  "create-password__form--password-button",
                                onClick: (e) => {
                                  e.preventDefault(), U(!_);
                                },
                              },
                              a(_ ? "hide" : "show")
                            )
                          ),
                        }),
                        r.default.createElement(f.default, {
                          dataTestId: "create-password-confirm",
                          onChange: (e) => {
                            const t = C === e ? "" : a("passwordsDontMatch");
                            O(e), j(t);
                          },
                          password: !_,
                          error: D,
                          titleText: a("confirmPassword"),
                          value: A,
                          titleDetail:
                            W &&
                            r.default.createElement(
                              "div",
                              { className: "create-password__form--checkmark" },
                              r.default.createElement(T.Icon, {
                                name: T.IconName.Check,
                              })
                            ),
                        }),
                        r.default.createElement(
                          m.default,
                          {
                            alignItems: d.AlignItems.center,
                            justifyContent: d.JustifyContent.spaceBetween,
                            marginBottom: 4,
                          },
                          r.default.createElement(
                            "label",
                            { className: "create-password__form__terms-label" },
                            r.default.createElement(g.default, {
                              dataTestId: "create-password-terms",
                              onClick: () => L(!B),
                              checked: B,
                            }),
                            r.default.createElement(
                              u.default,
                              {
                                variant: d.TypographyVariant.H5,
                                boxProps: { marginLeft: 3 },
                              },
                              a("passwordTermsWarning", [
                                r.default.createElement(
                                  "a",
                                  {
                                    onClick: (e) => e.stopPropagation(),
                                    key: "create-password__link-text",
                                    href: y.default.PASSWORD_AND_SRP_ARTICLE,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  r.default.createElement(
                                    "span",
                                    { className: "create-password__link-text" },
                                    a("learnMoreUpperCase")
                                  )
                                ),
                              ])
                            )
                          )
                        ),
                        r.default.createElement(
                          c.default,
                          {
                            "data-testid":
                              n && Q === v.FIRST_TIME_FLOW_TYPES.IMPORT
                                ? "create-password-import"
                                : "create-password-wallet",
                            type: "primary",
                            large: !0,
                            className: "create-password__form--submit-button",
                            disabled: !W || !B,
                            onClick: K,
                          },
                          n && Q === v.FIRST_TIME_FLOW_TYPES.IMPORT
                            ? a("importMyWallet")
                            : a("createNewWallet")
                        )
                      )
                    )
                  );
                }
                C.propTypes = {
                  createNewAccount: a.default.func,
                  importWithRecoveryPhrase: a.default.func,
                  secretRecoveryPhrase: a.default.string,
                };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/create-password/create-password.js",
      },
    ],
    [
      4814,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/ui/box": 4474,
        "../../../components/ui/button": 4478,
        "../../../components/ui/typography": 4610,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/routes": 4645,
        "../../../helpers/utils/build-types": 4659,
        "../../../hooks/useI18nContext": 4701,
        "../../../selectors": 5013,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, a.useHistory)(),
                      t = (0, u.useI18nContext)(),
                      n = (0, r.useContext)(g.MetaMetricsContext),
                      h = (0, o.useSelector)(f.getFirstTimeFlowType);
                    return r.default.createElement(
                      "div",
                      {
                        className: "creation-successful",
                        "data-testid": "creation-successful",
                      },
                      r.default.createElement(
                        s.default,
                        { textAlign: c.TEXT_ALIGN.CENTER },
                        r.default.createElement("img", {
                          src: "./images/tada.png",
                        }),
                        r.default.createElement(
                          i.default,
                          {
                            variant: c.TypographyVariant.H2,
                            fontWeight: c.FONT_WEIGHT.BOLD,
                            margin: 6,
                          },
                          t("walletCreationSuccessTitle")
                        ),
                        r.default.createElement(
                          i.default,
                          { variant: c.TypographyVariant.H4 },
                          t("walletCreationSuccessDetail")
                        )
                      ),
                      r.default.createElement(
                        i.default,
                        {
                          variant: c.TypographyVariant.H4,
                          boxProps: { align: c.AlignItems.flexStart },
                          marginLeft: 12,
                        },
                        t("remember")
                      ),
                      r.default.createElement(
                        "ul",
                        null,
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            i.default,
                            { variant: c.TypographyVariant.H4 },
                            (0, p.isBeta)()
                              ? t("betaWalletCreationSuccessReminder1")
                              : t("walletCreationSuccessReminder1")
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            i.default,
                            { variant: c.TypographyVariant.H4 },
                            (0, p.isBeta)()
                              ? t("betaWalletCreationSuccessReminder2")
                              : t("walletCreationSuccessReminder2")
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            i.default,
                            { variant: c.TypographyVariant.H4 },
                            t("walletCreationSuccessReminder3", [
                              r.default.createElement(
                                "span",
                                {
                                  key: "creation-successful__bold",
                                  className: "creation-successful__bold",
                                },
                                t("walletCreationSuccessReminder3BoldSection")
                              ),
                            ])
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            l.default,
                            {
                              href: "https://community.metamask.io/t/what-is-a-secret-recovery-phrase-and-how-to-keep-your-crypto-wallet-secure/3440",
                              target: "_blank",
                              type: "link",
                              rel: "noopener noreferrer",
                            },
                            t("learnMoreUpperCase")
                          )
                        )
                      ),
                      r.default.createElement(
                        s.default,
                        {
                          marginTop: 6,
                          className: "creation-successful__actions",
                        },
                        r.default.createElement(
                          l.default,
                          {
                            type: "link",
                            onClick: () =>
                              e.push(d.ONBOARDING_PRIVACY_SETTINGS_ROUTE),
                          },
                          t("advancedConfiguration")
                        ),
                        r.default.createElement(
                          l.default,
                          {
                            "data-testid": "onboarding-complete-done",
                            type: "primary",
                            large: !0,
                            rounded: !0,
                            onClick: () => {
                              n({
                                category: m.MetaMetricsEventCategory.Onboarding,
                                event:
                                  m.MetaMetricsEventName
                                    .OnboardingWalletCreationComplete,
                                properties: { method: h },
                              }),
                                e.push(d.ONBOARDING_PIN_EXTENSION_ROUTE);
                            },
                          },
                          t("gotIt")
                        )
                      )
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-router-dom"),
                  o = e("react-redux"),
                  s = h(e("../../../components/ui/box")),
                  i = h(e("../../../components/ui/typography")),
                  l = h(e("../../../components/ui/button")),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../helpers/utils/build-types"),
                  f = e("../../../selectors"),
                  m = e("../../../../shared/constants/metametrics"),
                  g = e("../../../contexts/metametrics");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/creation-successful/creation-successful.js",
      },
    ],
    [
      4815,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/app/srp-input": 4250,
        "../../../components/app/step-progress-bar": 4258,
        "../../../components/ui/box": 4474,
        "../../../components/ui/button": 4478,
        "../../../components/ui/typography": 4610,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/routes": 4645,
        "../../../helpers/constants/zendesk-url": 4648,
        "../../../hooks/useI18nContext": 4701,
        "../../../selectors": 5013,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = k);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-router-dom"),
                  o = e("react-redux"),
                  s = b(e("prop-types")),
                  i = e("../../../components/app/step-progress-bar"),
                  l = b(e("../../../components/ui/box")),
                  c = b(e("../../../components/ui/button")),
                  u = b(e("../../../components/ui/typography")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../helpers/constants/routes"),
                  f = e("../../../hooks/useI18nContext"),
                  m = b(e("../../../helpers/constants/zendesk-url")),
                  g = b(e("../../../components/app/srp-input")),
                  h = e("../../../selectors"),
                  E = e("../../../contexts/metametrics"),
                  y = e("../../../../shared/constants/metametrics");
                function b(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (v = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function k({ submitSecretRecoveryPhrase: e }) {
                  const [t, n] = (0, r.useState)(""),
                    s = (0, a.useHistory)(),
                    b = (0, f.useI18nContext)(),
                    v = (0, o.useSelector)(h.getCurrentKeyring);
                  (0, r.useEffect)(() => {
                    v && s.replace(p.ONBOARDING_CREATE_PASSWORD_ROUTE);
                  }, [v, s]);
                  const k = (0, r.useContext)(E.MetaMetricsContext);
                  return r.default.createElement(
                    "div",
                    { className: "import-srp", "data-testid": "import-srp" },
                    r.default.createElement(i.TwoStepProgressBar, {
                      stage: i.twoStepStages.RECOVERY_PHRASE_CONFIRM,
                      marginBottom: 4,
                    }),
                    r.default.createElement(
                      "div",
                      { className: "import-srp__header" },
                      r.default.createElement(
                        u.default,
                        {
                          variant: d.TypographyVariant.H2,
                          fontWeight: d.FONT_WEIGHT.BOLD,
                        },
                        b("accessYourWalletWithSRP")
                      )
                    ),
                    r.default.createElement(
                      "div",
                      { className: "import-srp__description" },
                      r.default.createElement(
                        u.default,
                        { variant: d.TypographyVariant.H4 },
                        b("accessYourWalletWithSRPDescription", [
                          r.default.createElement(
                            "a",
                            {
                              key: "learnMore",
                              type: "link",
                              href: m.default.SECRET_RECOVERY_PHRASE,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            b("learnMoreUpperCase")
                          ),
                        ])
                      )
                    ),
                    r.default.createElement(
                      "div",
                      { className: "import-srp__actions" },
                      r.default.createElement(
                        l.default,
                        { textAlign: d.TEXT_ALIGN.LEFT },
                        r.default.createElement(g.default, {
                          onChange: n,
                          srpText: b("typeYourSRP"),
                        }),
                        r.default.createElement(
                          c.default,
                          {
                            className: "import-srp__confirm-button",
                            type: "primary",
                            "data-testid": "import-srp-confirm",
                            large: !0,
                            onClick: () => {
                              e(t),
                                k({
                                  category:
                                    y.MetaMetricsEventCategory.Onboarding,
                                  event:
                                    y.MetaMetricsEventName
                                      .OnboardingWalletSecurityPhraseConfirmed,
                                }),
                                s.replace(p.ONBOARDING_CREATE_PASSWORD_ROUTE);
                            },
                            disabled: !t.trim(),
                          },
                          b("confirmRecoveryPhrase")
                        )
                      )
                    )
                  );
                }
                k.propTypes = { submitSecretRecoveryPhrase: s.default.func };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/import-srp/import-srp.js",
      },
    ],
    [
      4816,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/component-library": 4381,
        "../../../components/ui/box/box": 4473,
        "../../../components/ui/button": 4478,
        "../../../components/ui/typography/typography": 4611,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../hooks/useI18nContext": 4701,
        "../../../selectors": 5013,
        "../../../store/actions": 5020,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, c.useI18nContext)(),
                      t = (0, a.useDispatch)(),
                      n = (0, o.useHistory)(),
                      h = (0, a.useSelector)(d.getFirstTimeFlowTypeRoute),
                      E = (0, a.useSelector)(d.getFirstTimeFlowType),
                      y = (0, r.useContext)(f.MetaMetricsContext);
                    return r.default.createElement(
                      "div",
                      {
                        className: "onboarding-metametrics",
                        "data-testid": "onboarding-metametrics",
                      },
                      r.default.createElement(
                        s.default,
                        {
                          variant: i.TypographyVariant.H2,
                          align: i.TEXT_ALIGN.CENTER,
                          fontWeight: i.FONT_WEIGHT.BOLD,
                        },
                        e("onboardingMetametricsTitle")
                      ),
                      r.default.createElement(
                        s.default,
                        {
                          className: "onboarding-metametrics__desc",
                          align: i.TEXT_ALIGN.CENTER,
                        },
                        e("onboardingMetametricsDescription")
                      ),
                      r.default.createElement(
                        s.default,
                        {
                          className: "onboarding-metametrics__desc",
                          align: i.TEXT_ALIGN.CENTER,
                        },
                        e("onboardingMetametricsDescription2")
                      ),
                      r.default.createElement(
                        "ul",
                        null,
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(m.Icon, {
                            name: m.IconName.Check,
                            color: i.IconColor.successDefault,
                            marginInlineEnd: 3,
                          }),
                          e("onboardingMetametricsAllowOptOut")
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(m.Icon, {
                            name: m.IconName.Check,
                            color: i.IconColor.successDefault,
                            marginInlineEnd: 3,
                          }),
                          e("onboardingMetametricsSendAnonymize")
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            g.default,
                            null,
                            r.default.createElement(m.Icon, {
                              marginInlineEnd: 2,
                              name: m.IconName.Close,
                              size: m.IconSize.Sm,
                              color: i.IconColor.errorDefault,
                            }),
                            e("onboardingMetametricsNeverCollect", [
                              r.default.createElement(
                                s.default,
                                {
                                  variant: i.TypographyVariant.span,
                                  key: "never",
                                  fontWeight: i.FONT_WEIGHT.BOLD,
                                  marginTop: 0,
                                },
                                e("onboardingMetametricsNeverEmphasis")
                              ),
                            ])
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            g.default,
                            null,
                            r.default.createElement(m.Icon, {
                              marginInlineEnd: 2,
                              name: m.IconName.Close,
                              size: m.IconSize.Sm,
                              color: i.IconColor.errorDefault,
                            }),
                            e("onboardingMetametricsNeverCollectIP", [
                              r.default.createElement(
                                s.default,
                                {
                                  variant: i.TypographyVariant.span,
                                  key: "never-collect",
                                  fontWeight: i.FONT_WEIGHT.BOLD,
                                },
                                e("onboardingMetametricsNeverEmphasis")
                              ),
                            ])
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            g.default,
                            null,
                            r.default.createElement(m.Icon, {
                              marginInlineEnd: 2,
                              name: m.IconName.Close,
                              size: m.IconSize.Sm,
                              color: i.IconColor.errorDefault,
                            }),
                            e("onboardingMetametricsNeverSellData", [
                              r.default.createElement(
                                s.default,
                                {
                                  variant: i.TypographyVariant.span,
                                  key: "never-sell",
                                  fontWeight: i.FONT_WEIGHT.BOLD,
                                },
                                e("onboardingMetametricsNeverEmphasis")
                              ),
                            ])
                          ),
                          " "
                        )
                      ),
                      r.default.createElement(
                        s.default,
                        {
                          color: i.TextColor.textAlternative,
                          align: i.TEXT_ALIGN.CENTER,
                          variant: i.TypographyVariant.H6,
                          className: "onboarding-metametrics__terms",
                        },
                        e("onboardingMetametricsDataTerms")
                      ),
                      r.default.createElement(
                        s.default,
                        {
                          color: i.TextColor.textAlternative,
                          align: i.TEXT_ALIGN.CENTER,
                          variant: i.TypographyVariant.H6,
                          className: "onboarding-metametrics__terms",
                        },
                        e("onboardingMetametricsInfuraTerms", [
                          r.default.createElement(
                            "a",
                            {
                              href: "https://consensys.net/blog/news/consensys-data-retention-update/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              key: "retention-link",
                            },
                            e("onboardingMetametricsInfuraTermsPolicyLink")
                          ),
                          r.default.createElement(
                            "a",
                            {
                              href: "https://metamask.io/privacy.html",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              key: "privacy-link",
                            },
                            e("onboardingMetametricsInfuraTermsPolicy")
                          ),
                        ])
                      ),
                      r.default.createElement(
                        "div",
                        { className: "onboarding-metametrics__buttons" },
                        r.default.createElement(
                          l.default,
                          {
                            "data-testid": "metametrics-i-agree",
                            type: "primary",
                            large: !0,
                            onClick: async () => {
                              const [, e] = await t(
                                (0, u.setParticipateInMetaMetrics)(!0)
                              );
                              try {
                                y(
                                  {
                                    category:
                                      p.MetaMetricsEventCategory.Onboarding,
                                    event:
                                      p.MetaMetricsEventName.WalletSetupStarted,
                                    properties: {
                                      account_type:
                                        "create" === E
                                          ? p.MetaMetricsEventAccountType
                                              .Default
                                          : p.MetaMetricsEventAccountType
                                              .Imported,
                                    },
                                  },
                                  {
                                    isOptIn: !0,
                                    metaMetricsId: e,
                                    flushImmediately: !0,
                                  }
                                );
                              } finally {
                                n.push(h);
                              }
                            },
                          },
                          e("onboardingMetametricsAgree")
                        ),
                        r.default.createElement(
                          l.default,
                          {
                            "data-testid": "metametrics-no-thanks",
                            type: "secondary",
                            large: !0,
                            onClick: async () => {
                              await t((0, u.setParticipateInMetaMetrics)(!1)),
                                n.push(h);
                            },
                          },
                          e("onboardingMetametricsDisagree")
                        )
                      )
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = e("react-router-dom"),
                  s = h(e("../../../components/ui/typography/typography")),
                  i = e("../../../helpers/constants/design-system"),
                  l = h(e("../../../components/ui/button")),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../store/actions"),
                  d = e("../../../selectors"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../components/component-library"),
                  g = h(e("../../../components/ui/box/box"));
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/metametrics/metametrics.js",
      },
    ],
    [
      4817,
      {
        "../../../../app/_locales/index.json": 3,
        "../../../components/ui/dropdown": 4500,
        "../../../components/ui/metafox-logo": 4557,
        "../../../ducks/locale/locale": 4632,
        "../../../store/actions": 5020,
        react: 3730,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, a.useDispatch)(),
                      t = (0, a.useSelector)(i.getCurrentLocale),
                      n = c.default.map((e) => ({
                        name: e.name,
                        value: e.code,
                      }));
                    return r.default.createElement(
                      "div",
                      { className: "onboarding-app-header" },
                      r.default.createElement(
                        "div",
                        { className: "onboarding-app-header__contents" },
                        r.default.createElement(o.default, {
                          unsetIconHeight: !0,
                          isOnboarding: !0,
                        }),
                        r.default.createElement(s.default, {
                          id: "select-locale",
                          options: n,
                          selectedOption: t,
                          onChange: async (t) =>
                            e((0, l.updateCurrentLocale)(t)),
                        })
                      )
                    );
                  });
                var r = u(e("react")),
                  a = e("react-redux"),
                  o = u(e("../../../components/ui/metafox-logo")),
                  s = u(e("../../../components/ui/dropdown")),
                  i = e("../../../ducks/locale/locale"),
                  l = e("../../../store/actions"),
                  c = u(e("../../../../app/_locales/index.json"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/onboarding-app-header/onboarding-app-header.js",
      },
    ],
    [
      4818,
      {
        "../../../ducks/metamask/metamask": 4633,
        "../../../helpers/constants/routes": 4645,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, o.useSelector)(l.getCompletedOnboarding),
                      t = (0, o.useSelector)(l.getIsInitialized),
                      n = (0, o.useSelector)(l.getSeedPhraseBackedUp),
                      r = (0, o.useSelector)(l.getIsUnlocked);
                    if (e)
                      return a.default.createElement(s.Redirect, {
                        to: { pathname: i.DEFAULT_ROUTE },
                      });
                    if (null !== n)
                      return a.default.createElement(s.Redirect, {
                        to: { pathname: i.ONBOARDING_COMPLETION_ROUTE },
                      });
                    if (r)
                      return a.default.createElement(s.Redirect, {
                        to: { pathname: i.LOCK_ROUTE },
                      });
                    if (!t) {
                      let e;
                      return (
                        (e = a.default.createElement(s.Redirect, {
                          to: { pathname: i.ONBOARDING_WELCOME_ROUTE },
                        })),
                        e
                      );
                    }
                    return a.default.createElement(s.Redirect, {
                      to: { pathname: i.ONBOARDING_UNLOCK_ROUTE },
                    });
                  });
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../helpers/constants/routes"),
                  l = e("../../../ducks/metamask/metamask");
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/onboarding-flow-switch/onboarding-flow-switch.js",
      },
    ],
    [
      4819,
      {
        "../../../shared/constants/metametrics": 3953,
        "../../components/ui/button": 4478,
        "../../contexts/metametrics": 4619,
        "../../ducks/metamask/metamask": 4633,
        "../../helpers/constants/routes": 4645,
        "../../hooks/useI18nContext": 4701,
        "../../selectors": 5013,
        "../../store/actions": 5020,
        "../unlock-page": 5005,
        "./create-password/create-password": 4813,
        "./creation-successful/creation-successful": 4814,
        "./import-srp/import-srp": 4815,
        "./metametrics/metametrics": 4816,
        "./onboarding-flow-switch/onboarding-flow-switch": 4818,
        "./pin-extension/pin-extension": 4821,
        "./privacy-settings/privacy-settings": 4822,
        "./recovery-phrase/confirm-recovery-phrase": 4824,
        "./recovery-phrase/review-recovery-phrase": 4826,
        "./secure-your-wallet/secure-your-wallet": 4827,
        "./welcome/welcome": 4829,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const [e, t] = (0, r.useState)(""),
                      n = (0, o.useDispatch)(),
                      { pathName: C, search: N } = (0, a.useLocation)(),
                      R = (0, a.useHistory)(),
                      S = (0, f.useI18nContext)(),
                      M = (0, o.useSelector)(l.getCompletedOnboarding),
                      x = (0, o.useSelector)(u.getFirstTimeFlowTypeRoute),
                      D = new URLSearchParams(N).get("isFromReminder"),
                      j = (0, r.useContext)(d.MetaMetricsContext);
                    (0, r.useEffect)(() => {
                      M && !D && R.push(i.DEFAULT_ROUTE);
                    }, [R, M, D]),
                      (0, r.useEffect)(() => {
                        (async () => {
                          if (M && !e) {
                            const e = await (0, c.verifySeedPhrase)();
                            e && t(e);
                          }
                        })();
                      }, [M, e]);
                    const B = async (e) => {
                        const r = await n(
                          (0, c.createNewVaultAndGetSeedPhrase)(e)
                        );
                        t(r);
                      },
                      L = async (e) => {
                        const r = await n((0, c.unlockAndGetSeedPhrase)(e));
                        t(r), R.push(x);
                      },
                      _ = async (e, t) =>
                        await n((0, c.createNewVaultAndRestore)(e, t));
                    return r.default.createElement(
                      "div",
                      { className: "onboarding-flow" },
                      r.default.createElement(
                        "div",
                        { className: "onboarding-flow__wrapper" },
                        r.default.createElement(
                          a.Switch,
                          null,
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_CREATE_PASSWORD_ROUTE,
                            render: (t) =>
                              r.default.createElement(
                                h.default,
                                P({}, t, {
                                  createNewAccount: B,
                                  importWithRecoveryPhrase: _,
                                  secretRecoveryPhrase: e,
                                })
                              ),
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_SECURE_YOUR_WALLET_ROUTE,
                            component: y.default,
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_REVIEW_SRP_ROUTE,
                            render: () =>
                              r.default.createElement(E.default, {
                                secretRecoveryPhrase: e,
                              }),
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_CONFIRM_SRP_ROUTE,
                            render: () =>
                              r.default.createElement(b.default, {
                                secretRecoveryPhrase: e,
                              }),
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_IMPORT_WITH_SRP_ROUTE,
                            render: (e) =>
                              r.default.createElement(
                                T.default,
                                P({}, e, { submitSecretRecoveryPhrase: t })
                              ),
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_UNLOCK_ROUTE,
                            render: (e) =>
                              r.default.createElement(
                                s.default,
                                P({}, e, { onSubmit: L })
                              ),
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_PRIVACY_SETTINGS_ROUTE,
                            component: v.default,
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_COMPLETION_ROUTE,
                            component: k.default,
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_WELCOME_ROUTE,
                            component: w.default,
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_PIN_EXTENSION_ROUTE,
                            component: A.default,
                          }),
                          r.default.createElement(a.Route, {
                            path: i.ONBOARDING_METAMETRICS,
                            component: O.default,
                          }),
                          r.default.createElement(a.Route, {
                            exact: !0,
                            path: "*",
                            component: g.default,
                          })
                        )
                      ),
                      C === i.ONBOARDING_COMPLETION_ROUTE &&
                        r.default.createElement(
                          p.default,
                          {
                            className: "onboarding-flow__twitter-button",
                            type: "link",
                            href: I,
                            onClick: () => {
                              j({
                                category: m.MetaMetricsEventCategory.Onboarding,
                                event:
                                  m.MetaMetricsEventName.OnboardingTwitterClick,
                                properties: {
                                  text: S("followUsOnTwitter"),
                                  location:
                                    m.MetaMetricsEventName
                                      .OnboardingWalletCreationComplete,
                                  url: I,
                                },
                              });
                            },
                            target: "_blank",
                          },
                          r.default.createElement(
                            "span",
                            null,
                            S("followUsOnTwitter")
                          ),
                          r.default.createElement("i", {
                            className:
                              "fab fa-twitter onboarding-flow__twitter-button__icon",
                          })
                        )
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = N(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-router-dom"),
                  o = e("react-redux"),
                  s = C(e("../unlock-page")),
                  i = e("../../helpers/constants/routes"),
                  l = e("../../ducks/metamask/metamask"),
                  c = e("../../store/actions"),
                  u = e("../../selectors"),
                  d = e("../../contexts/metametrics"),
                  p = C(e("../../components/ui/button")),
                  f = e("../../hooks/useI18nContext"),
                  m = e("../../../shared/constants/metametrics"),
                  g = C(e("./onboarding-flow-switch/onboarding-flow-switch")),
                  h = C(e("./create-password/create-password")),
                  E = C(e("./recovery-phrase/review-recovery-phrase")),
                  y = C(e("./secure-your-wallet/secure-your-wallet")),
                  b = C(e("./recovery-phrase/confirm-recovery-phrase")),
                  v = C(e("./privacy-settings/privacy-settings")),
                  k = C(e("./creation-successful/creation-successful")),
                  w = C(e("./welcome/welcome")),
                  T = C(e("./import-srp/import-srp")),
                  A = C(e("./pin-extension/pin-extension")),
                  O = C(e("./metametrics/metametrics"));
                function C(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function N(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (N = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function P() {
                  return (
                    (P = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                              Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                          }
                          return e;
                        }),
                    P.apply(this, arguments)
                  );
                }
                const I = "https://twitter.com/MetaMask";
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/onboarding-flow.js",
      },
    ],
    [
      4820,
      { "../../../hooks/useI18nContext": 4701, react: 3730 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, o.useI18nContext)();
                    return a.default.createElement(
                      "svg",
                      {
                        width: "100%",
                        height: "320",
                        viewBox: "0 0 799 320",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                      },
                      a.default.createElement(
                        "g",
                        { filter: "url(#filter0_d_2133:17259)" },
                        a.default.createElement("rect", {
                          x: "31",
                          y: "71",
                          width: "270",
                          height: "148",
                          rx: "8",
                          fill: "url(#pattern0)",
                        })
                      ),
                      a.default.createElement("circle", {
                        cx: "54.5",
                        cy: "24.5",
                        r: "24.5",
                        fill: "url(#paint0_linear_2133:17259)",
                      }),
                      a.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Euclid Circular A",
                          fontSize: "29",
                          fontWeight: "bold",
                          letterSpacing: "0em",
                        },
                        a.default.createElement(
                          "tspan",
                          { x: "48.9917", y: "35.114" },
                          e("onboardingPinExtensionStep1")
                        )
                      ),
                      a.default.createElement(
                        "text",
                        {
                          fill: "var(--color-text-default)",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Euclid Circular B",
                          fontSize: "18",
                          letterSpacing: "0em",
                        },
                        a.default.createElement(
                          "tspan",
                          { x: "95", y: "31.088" },
                          e("onboardingPinExtensionChrome")
                        )
                      ),
                      a.default.createElement("circle", {
                        cx: "522.5",
                        cy: "102.5",
                        r: "24.5",
                        fill: "url(#paint1_linear_2133:17259)",
                      }),
                      a.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Euclid Circular A",
                          fontSize: "29",
                          fontWeight: "bold",
                          letterSpacing: "0em",
                        },
                        a.default.createElement(
                          "tspan",
                          { x: "514.131", y: "113.114" },
                          e("onboardingPinExtensionStep2")
                        )
                      ),
                      a.default.createElement(
                        "text",
                        {
                          fill: "var(--color-text-default)",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Euclid Circular B",
                          fontSize: "18",
                          letterSpacing: "0em",
                        },
                        a.default.createElement(
                          "tspan",
                          { x: "563", y: "109.088" },
                          e("onboardingPinExtensionLabel")
                        )
                      ),
                      a.default.createElement("path", {
                        d: "M301 137H373.953C388.865 137 400.953 149.088 400.953 164V190C400.953 204.912 413.042 217 427.953 217H498",
                        stroke: "#037DD6",
                        strokeWidth: "2",
                      }),
                      a.default.createElement(
                        "g",
                        { filter: "url(#filter1_d_2133:17259)" },
                        a.default.createElement("rect", {
                          x: "498",
                          y: "149",
                          width: "270",
                          height: "136",
                          rx: "8",
                          fill: "#292A2D",
                        })
                      ),
                      a.default.createElement(
                        "g",
                        { filter: "url(#filter2_d_2133:17259)" },
                        a.default.createElement("ellipse", {
                          cx: "703.613",
                          cy: "266.5",
                          rx: "30.6134",
                          ry: "30.5",
                          fill: "white",
                        }),
                        a.default.createElement("path", {
                          d: "M703.613 298C721.069 298 735.227 283.9 735.227 266.5C735.227 249.1 721.069 235 703.613 235C686.157 235 672 249.1 672 266.5C672 283.9 686.157 298 703.613 298Z",
                          stroke: "white",
                          strokeWidth: "2",
                        })
                      ),
                      a.default.createElement(
                        "mask",
                        {
                          id: "mask0_2133:17259",
                          style: { maskType: "alpha" },
                          maskUnits: "userSpaceOnUse",
                          x: "673",
                          y: "236",
                          width: "62",
                          height: "61",
                        },
                        a.default.createElement("path", {
                          d: "M703.614 296C719.961 296 733.22 282.796 733.22 266.5C733.22 250.204 719.961 237 703.614 237C687.266 237 674.008 250.204 674.008 266.5C674.008 282.796 687.266 296 703.614 296Z",
                          fill: "white",
                          stroke: "white",
                          strokeWidth: "2",
                        })
                      ),
                      a.default.createElement(
                        "g",
                        { mask: "url(#mask0_2133:17259)" },
                        a.default.createElement("rect", {
                          x: "646.903",
                          y: "221",
                          width: "121.45",
                          height: "106",
                          fill: "url(#pattern1)",
                        })
                      ),
                      a.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Open Sans",
                          fontSize: "12",
                          fontWeight: "600",
                          letterSpacing: "0px",
                        },
                        a.default.createElement(
                          "tspan",
                          { x: "514", y: "180.155" },
                          e("onboardingPinExtensionBillboardTitle")
                        )
                      ),
                      a.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Open Sans",
                          fontSize: "10",
                          fontWeight: "bold",
                          letterSpacing: "-0.4px",
                        },
                        a.default.createElement(
                          "tspan",
                          { x: "514", y: "205.879" },
                          e("onboardingPinExtensionBillboardAccess")
                        )
                      ),
                      a.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Open Sans",
                          fontSize: "9",
                          fontWeight: "bold",
                          letterSpacing: "0px",
                        },
                        a.default.createElement(
                          "tspan",
                          { x: "540.146", y: "262.991" },
                          e("appName")
                        )
                      ),
                      a.default.createElement(
                        "text",
                        {
                          fill: "white",
                          xmlSpace: "preserve",
                          style: { whiteSpace: "pre" },
                          fontFamily: "Open Sans",
                          fontSize: "10",
                          letterSpacing: "-0.3px",
                        },
                        a.default.createElement(
                          "tspan",
                          { x: "514", y: "223.379" },
                          e("onboardingPinExtensionBillboardDescription")
                        ),
                        a.default.createElement(
                          "tspan",
                          { x: "514", y: "238.379" },
                          e("onboardingPinExtensionBillboardDescription2")
                        )
                      ),
                      a.default.createElement("path", {
                        d: "M744.188 177.988L746.888 175.313C747.038 175.163 747.038 174.888 746.888 174.738L746.263 174.113C746.113 173.962 745.838 173.962 745.688 174.113L743.013 176.813L740.313 174.113C740.163 173.962 739.888 173.962 739.738 174.113L739.113 174.738C738.962 174.888 738.962 175.163 739.113 175.313L741.813 177.988L739.113 180.688C738.962 180.838 738.962 181.113 739.113 181.263L739.738 181.888C739.888 182.038 740.163 182.038 740.313 181.888L743.013 179.188L745.688 181.888C745.838 182.038 746.113 182.038 746.263 181.888L746.888 181.263C747.038 181.113 747.038 180.838 746.888 180.688L744.188 177.988Z",
                        fill: "#BBC0C5",
                      }),
                      a.default.createElement("path", {
                        d: "M742 257.875C741.367 257.875 740.875 258.391 740.875 259C740.875 259.633 741.367 260.125 742 260.125C742.609 260.125 743.125 259.633 743.125 259C743.125 258.391 742.609 257.875 742 257.875ZM740.875 255.438C740.875 256.07 741.367 256.562 742 256.562C742.609 256.562 743.125 256.07 743.125 255.438C743.125 254.828 742.609 254.312 742 254.312C741.367 254.312 740.875 254.828 740.875 255.438ZM740.875 262.562C740.875 263.195 741.367 263.688 742 263.688C742.609 263.688 743.125 263.195 743.125 262.562C743.125 261.953 742.609 261.438 742 261.438C741.367 261.438 740.875 261.953 740.875 262.562Z",
                        fill: "#BBC0C5",
                      }),
                      a.default.createElement("path", {
                        d: "M527.496 254L522.36 257.75L523.315 255.54L527.496 254Z",
                        fill: "#E17726",
                        stroke: "#E17726",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M515.651 254L520.741 257.785L519.832 255.54L515.651 254Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M525.647 262.695L524.28 264.755L527.206 265.55L528.044 262.74L525.647 262.695Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M515.107 262.74L515.94 265.55L518.861 264.755L517.5 262.695L515.107 262.74Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M518.704 259.215L517.892 260.425L520.787 260.555L520.69 257.48L518.704 259.215Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M524.443 259.215L522.426 257.445L522.36 260.555L525.256 260.425L524.443 259.215Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M518.861 264.755L520.614 263.92L519.105 262.76L518.861 264.755Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M522.534 263.92L524.282 264.755L524.043 262.76L522.534 263.92Z",
                        fill: "#E27625",
                        stroke: "#E27625",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M524.28 264.755L522.532 263.92L522.674 265.04L522.659 265.515L524.28 264.755Z",
                        fill: "#D5BFB2",
                        stroke: "#D5BFB2",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M518.86 264.755L520.486 265.515L520.476 265.04L520.613 263.92L518.86 264.755Z",
                        fill: "#D5BFB2",
                        stroke: "#D5BFB2",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M520.516 262.02L519.063 261.6L520.09 261.135L520.516 262.02Z",
                        fill: "#233447",
                        stroke: "#233447",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M522.63 262.02L523.057 261.135L524.088 261.6L522.63 262.02Z",
                        fill: "#233447",
                        stroke: "#233447",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M518.86 264.755L519.114 262.695L517.499 262.74L518.86 264.755Z",
                        fill: "#CC6228",
                        stroke: "#CC6228",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M524.03 262.695L524.279 264.755L525.646 262.74L524.03 262.695Z",
                        fill: "#CC6228",
                        stroke: "#CC6228",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M525.256 260.425L522.36 260.555L522.63 262.02L523.056 261.135L524.087 261.6L525.256 260.425Z",
                        fill: "#CC6228",
                        stroke: "#CC6228",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M519.063 261.6L520.089 261.135L520.516 262.02L520.785 260.555L517.89 260.425L519.063 261.6Z",
                        fill: "#CC6228",
                        stroke: "#CC6228",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M517.89 260.425L519.104 262.76L519.063 261.6L517.89 260.425Z",
                        fill: "#E27525",
                        stroke: "#E27525",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M524.088 261.6L524.042 262.76L525.256 260.425L524.088 261.6Z",
                        fill: "#E27525",
                        stroke: "#E27525",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M520.786 260.555L520.517 262.02L520.857 263.75L520.933 261.47L520.786 260.555Z",
                        fill: "#E27525",
                        stroke: "#E27525",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M522.36 260.555L522.218 261.465L522.289 263.75L522.629 262.02L522.36 260.555Z",
                        fill: "#E27525",
                        stroke: "#E27525",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M522.629 262.02L522.289 263.75L522.533 263.92L524.041 262.76L524.087 261.6L522.629 262.02Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M519.063 261.6L519.104 262.76L520.613 263.92L520.857 263.75L520.516 262.02L519.063 261.6Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M522.66 265.515L522.675 265.04L522.543 264.93H520.603L520.476 265.04L520.486 265.515L518.86 264.755L519.429 265.215L520.582 266H522.558L523.716 265.215L524.28 264.755L522.66 265.515Z",
                        fill: "#C0AC9D",
                        stroke: "#C0AC9D",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M522.533 263.92L522.289 263.75H520.857L520.613 263.92L520.476 265.04L520.603 264.93H522.543L522.675 265.04L522.533 263.92Z",
                        fill: "#161616",
                        stroke: "#161616",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M527.714 257.995L528.146 255.925L527.496 254L522.533 257.625L524.443 259.215L527.14 259.99L527.735 259.305L527.476 259.12L527.887 258.75L527.572 258.51L527.984 258.2L527.714 257.995Z",
                        fill: "#763E1A",
                        stroke: "#763E1A",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M515 255.925L515.437 257.995L515.157 258.2L515.574 258.51L515.259 258.75L515.67 259.12L515.411 259.305L516.006 259.99L518.703 259.215L520.613 257.625L515.65 254L515 255.925Z",
                        fill: "#763E1A",
                        stroke: "#763E1A",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M527.14 259.99L524.443 259.215L525.256 260.425L524.042 262.76L525.647 262.74H528.045L527.14 259.99Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M518.703 259.215L516.006 259.99L515.106 262.74H517.499L519.104 262.76L517.89 260.425L518.703 259.215Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement("path", {
                        d: "M522.361 260.555L522.533 257.625L523.316 255.54H519.831L520.613 257.625L520.786 260.555L520.852 261.475L520.857 263.75H522.29L522.295 261.475L522.361 260.555Z",
                        fill: "#F5841F",
                        stroke: "#F5841F",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      a.default.createElement(
                        "defs",
                        null,
                        a.default.createElement(
                          "filter",
                          {
                            id: "filter0_d_2133:17259",
                            x: "0",
                            y: "44",
                            width: "332",
                            height: "210",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                          },
                          a.default.createElement("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                          }),
                          a.default.createElement("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                          }),
                          a.default.createElement("feMorphology", {
                            radius: "6",
                            operator: "dilate",
                            in: "SourceAlpha",
                            result: "effect1_dropShadow_2133:17259",
                          }),
                          a.default.createElement("feOffset", { dy: "4" }),
                          a.default.createElement("feGaussianBlur", {
                            stdDeviation: "12.5",
                          }),
                          a.default.createElement("feColorMatrix", {
                            type: "matrix",
                            values:
                              "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0",
                          }),
                          a.default.createElement("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_2133:17259",
                          }),
                          a.default.createElement("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_2133:17259",
                            result: "shape",
                          })
                        ),
                        a.default.createElement(
                          "pattern",
                          {
                            id: "pattern0",
                            patternContentUnits: "objectBoundingBox",
                            width: "1",
                            height: "1",
                          },
                          a.default.createElement("use", {
                            xlinkHref: "#image0_2133:17259",
                            transform:
                              "translate(0 -0.0770822) scale(0.00170068 0.00310259)",
                          })
                        ),
                        a.default.createElement(
                          "filter",
                          {
                            id: "filter1_d_2133:17259",
                            x: "467",
                            y: "122",
                            width: "332",
                            height: "198",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                          },
                          a.default.createElement("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                          }),
                          a.default.createElement("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                          }),
                          a.default.createElement("feMorphology", {
                            radius: "6",
                            operator: "dilate",
                            in: "SourceAlpha",
                            result: "effect1_dropShadow_2133:17259",
                          }),
                          a.default.createElement("feOffset", { dy: "4" }),
                          a.default.createElement("feGaussianBlur", {
                            stdDeviation: "12.5",
                          }),
                          a.default.createElement("feColorMatrix", {
                            type: "matrix",
                            values:
                              "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0",
                          }),
                          a.default.createElement("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_2133:17259",
                          }),
                          a.default.createElement("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_2133:17259",
                            result: "shape",
                          })
                        ),
                        a.default.createElement(
                          "filter",
                          {
                            id: "filter2_d_2133:17259",
                            x: "666",
                            y: "229",
                            width: "75.2266",
                            height: "75",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                          },
                          a.default.createElement("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                          }),
                          a.default.createElement("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                          }),
                          a.default.createElement("feOffset", null),
                          a.default.createElement("feGaussianBlur", {
                            stdDeviation: "2.5",
                          }),
                          a.default.createElement("feColorMatrix", {
                            type: "matrix",
                            values:
                              "0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0.26 0",
                          }),
                          a.default.createElement("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_2133:17259",
                          }),
                          a.default.createElement("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_2133:17259",
                            result: "shape",
                          })
                        ),
                        a.default.createElement(
                          "pattern",
                          {
                            id: "pattern1",
                            patternContentUnits: "objectBoundingBox",
                            width: "1",
                            height: "1",
                          },
                          a.default.createElement("use", {
                            xlinkHref: "#image1_2133:17259",
                            transform:
                              "translate(0 -0.000404155) scale(0.00301205 0.00345106)",
                          })
                        ),
                        a.default.createElement(
                          "linearGradient",
                          {
                            id: "paint0_linear_2133:17259",
                            x1: "30",
                            y1: "20.1898",
                            x2: "79.0003",
                            y2: "20.3",
                            gradientUnits: "userSpaceOnUse",
                          },
                          a.default.createElement("stop", {
                            stopColor: "#037DD6",
                          }),
                          a.default.createElement("stop", {
                            offset: "1",
                            stopColor: "#1098FC",
                          })
                        ),
                        a.default.createElement(
                          "linearGradient",
                          {
                            id: "paint1_linear_2133:17259",
                            x1: "498",
                            y1: "98.1898",
                            x2: "547",
                            y2: "98.3",
                            gradientUnits: "userSpaceOnUse",
                          },
                          a.default.createElement("stop", {
                            stopColor: "#037DD6",
                          }),
                          a.default.createElement("stop", {
                            offset: "1",
                            stopColor: "#1098FC",
                          })
                        ),
                        a.default.createElement("image", {
                          id: "image0_2133:17259",
                          width: "588",
                          height: "372",
                          xlinkHref:
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkwAAAF0CAYAAADRpWaeAAAgAElEQVR4AYSdAXocOw6jE++995p7m3g//ABIqu2Z8XvuUkkkCIKUqu04zt//83//3/ef7z9//vz9w8ffv3//cP9HFy1o6e+On/W4aU4f399//vz9++f7+9twzC84roa0fV/lHrOJde3+moNAFUIfDfnn+3ALjNcPDzkOxe8/k2PiJrRtesM1AZsTGAYSxvf3vxXOtEwsJLFRYuG8JuK8eoUGy3Bj6WqovPeecQSI5IE+OZvmYMpnRPhjDaqljFqbGz+gEVvxDaq+cJ0WMYHMs2ABmMijY3hiZ1qbx1UDZluXEqpJr52PeW/JBfldA+7ro+t87KR1Uso2GN3boicHuTe3z+tAo63zVSJNeRq5cwLox8PNk08uxweaCW4N31ySxlP7Vk2Yyq/cFYm58miDQDoEF7BW9IJupi8gQrYz1/13g7UnC3n5N7Q58ZoePWzRyXuU2abePAryt52bfaS8o0iymlzuoPrMmRRc20i7f6dPMksyRT2ETq9U/+r1GVP3aPOce8ZcLs6pkeRTvowT785rXR/09IyzvXPGf0UbbIZz8phCHfEMCS7cXETu/bIM4ffPz4jdOcf0IwetlHOthHZCMt0In/PEk0V7vPzBeK13F7xnxTd8YTJqlMv/uhJf5/aXeiW8xSF8pIGraDWK18o+uZb71fc1gB81mPP9VSahG+bpl05eva1J97F1fNdPTgIIt/bOeagAL8XLiImHvxlUM9/tq+P2HG3Pav2dK/7FQc+Ue+Qj9taC5U+CFWzO/D9/vkhScVNQNurynJEIUAxF1EcIMNZcmqBiyQoszONjT7vHHyHOcn0skOO4CVIPB4S2bKeo2egTojxzEFxcxomv0PRi80ljOn7eXGFTA0cQxnAMxr0XKHEqlHD7WZI5yOHQuegGVrhQm+Ortaan6chPJFwOVa9V4F5P41aHLImzeeewYt2HCGuHp5ZaAbnXTyaNpOvowps+B+zc1q/A9Tz3TOklazXRNfyxzgNGU2wSaLtOaHaIDVewlLPjFc7rqXG0t+4fdQ/N+hGbImThXqhVyZvlLPe2D8niZt/pVlpVt/GTAATnJRpp7DjK6/o0T+qWWteTGDXYAIyMkWar7EnFPZB4NKudW9teDeR+tYXeQHafeHvQY4ezpTRDU9svkKhR+OpB3/YQ9tSXefc0DBNvFTITvWqOvtG1dqllNVx53lrITA9GYvNanp4zsiO0Zxsr5uMr7qM3udS7b/Q2TtFxnhweKUaL0STG0iPy0C/C+vdv9/+q4Qpabzmn8G0H3fII8EMETggVuySMv/oZTf3Fw8M7WneOSBGcEGd8WFxzJ6R4xYqWxCwd5fn9L2eXu1cgoyWt5DNhuKYnsBtDh24oXWWPD9qcgOX+T19k98P1FFdB9rNEuDeopwTXYIEwv+WOyXkTIbPa2KWcbp29Irtnr2o65qT82zo2/+X533WHmFcyjl6NYVMHvJzhlf5y+u1H0UvP6U1p0duLaOqc2rvKw33IAB8wSTD6ltc5b83n758vYlAZjZRGAsT4iihyOKYZCF6SjQWWN8PXJGHL9AwekD7khct/bTjTsW1igAKIRmXrReEROrYS73KPAw3APDrfTWvMdgh4OTTxHfLSINhTIT8E0Cfx+wSGkxw++BWzvAvVuLLX+MeHpnig+Kr1xnB8v5miTlL06QZZC4ATwdCKkdSxPWPiQ6GTiZUesZ+q5n3sWPuwIhLxE4roAE5u9bFFXo/PkGNJkexfe0fPoZAlpSQtaqk8rI29NK+4nbeeeXDf/vs4eBqz19bHOJ3VYZzIwaqdLBS3etUDPlQlOp9xoYQhT65up/fs5MFABGvbHpFiFeLPnz9fX/oaab+ybe3hIt31iYDe69RnAAxKFTS3dJtKYLzQ2pa3Fuu2mmz2AkSfp/4PdOr44hv3JFmX5pL70lUMorYWV+90jXVuT2xPb/9pLVJV49RAcei+oeSZ0Svz7sroWFsE8hl8C6flMaGPmqSv5DS+6bP0X+sgy+ZVb987D9W+0vs7TY0YveWkYXRVXVnpHPPRyi5YeJgJZSGe0UwucYNb+bUPhjva+twqEtfWMDV1Xo6RMIN79R+9kmJ7lLgxFD51TN7G43AZnZqH47pflAMu0b/3nZPzk4PsK4SBfH9qzpliQlX92X/l+XAO1htfj/zu7QZLXbmc53/2I9gQ3nNDGYbOgOges+TX71a6wGVoc//pzPbKrffUfPgbmD5BW6JYsrE5z38vo9PNvaK79pK4z0eBxEn4tM+et4Qg7vefr1s8p5QOitOzS+WpZeqrTt9mJ0l8tG45dVGSdiLseZmsTJDWFIOwAGNdZU3yBjTOHdc0xarovZ7A4a9LxQF8RSOxplGeudb0AcxNNRNSihE1uZeVciCPHgBno1+uKEiHhGd8t645aMsjeikn3BqnBasdmpnVxAtJ86qhr9iU61nyAWMxgua8YjOlGV6LR5yD9Q7PmzmSDblrNKXom8pe2yNqzRiNux+Sim19Clgwb7jLzbZdr72vd41aZ/mO+2DQknV0T90Yaf5UacgmiC6us/y1Sl7ZV8axj167Zchv+AQqi/rKGi5dr06E6gYmqns1dsUWCcYpcNW5mGgj3KTjHR0gMvKB3ZCuR2vYfJz3xOV9nGu0SI1+ZgTGueS1y6tWiqBV8US3cPJsagW5Mz46DSfqinPOOWPKVXEb21JZj0b0PlU1V6eCwJwau+YS3HOb/9tDG7fz5JYzoHPl1fvZIywgiEZuScuvRJhwLrCwjfoR/XyG4naFSV7Vt82gmO2HQKcaDlXNyrFXBx1TblkjR3OHaTlY9Lbg6IzPSaO4cEqPPXM5SQqrHiEnvaT+CqVPYZe/1oZ7amkPzf9rq03/sak2CKaEyBy4mqBdEnyeN6eHGoSrEu2bYO2vxHY3eR8nBxEZvvKlrBsHosEODUfouXT0tsY5ryxMPM8l9p2Rz35+cHHa4ZfiQe2M4e9kyDr4tx6NpVyg5aStAzr77Og+dIjECJ6/wxQkLVmMODKvTWonrh+1UZIEP8UmUBVOYi9xWwR+8pj7Np7JOHoOQeEkBQuMRp2x0IN+m+1EEYabx5WAWyA2DU0UqdWQ0J6nKYawweEWYWc9jSALz5Vrr4dYDsbxhYE34cyNJsdfQ32WbjQxlWNnEu6Wgz2CfphqnoOd7xQm8KHbfOumeJ2TjqUk7sx/+J7bM3Q/eaIJ3atI6d58HPPLweQUMsTMvTvGPuJRnTTPvdA4IFrfvaLANsXY12+II7YfIjN3SuL6zVOIXrDL7rXqKM2xj57CM4X6G1gcjDslPfdCc5+XjzVplM7+cj17jMCILLuXq5CM6StIKU0fivayzsqBnJMPsKFzx9Kc2tDH4YevcM6RlbrcWqBHahnRpmZB4l409YFKJVVpEosc2PpJCj5kTQHkVv1NBTRw+dkXj9YmeTnu9qHuzcf1Hcz4SzS4xMU0t6tLG/O8VJNeu+Ya1MP7UmudYaybTkSL7pni6F7Y4Kctes8cgVJonA3qPAtuNHoILVdPrYwOqbN85Uk1+ozQ3Pmj0EFOfO6pL17bC5c/wcxFqn5ylPbCeXvU9vvaHvf55eoEM/u0+RDjXzCP1CN6nhmyQ8sN8o4qhovBWmMIy1r4jZIdcw57wVMdc9Zw2tkz8+Se/VHEIZH+F8eNm9XUrOfHk0fXBuhzsH2plYSffuu9uNETFMZCigf125efGsJX/WWfy22oNUipxfgr3cE0MWhIjxAi9ybnkwgsDhJvGpy7mbuJ0trF1J+N74eq8SGK7Ls5U4hRKo5CqCDi5pz8cPG9qwzvCNdCak4f5EHybmzyH5U+ON1GIF5/5KtxhOgx2MW5Ymuc++HMHHR+vChHIT7NGV2+/qpcV8cP9xPn6t3czWORkwW6p1zTlEWWtTTEKxsZBopVjTEuc9eoMZ2zbRUfrPBsDF0lXW073kyjMX6Nsw9vNInxVKMuHIDh34BjZK4toWkJqD3FsF5zbW6d4J7aL+Ouza6cibRDNq2mR1vdFCLp0e/SpnbHpO2ma8fmtgmWq3LTuPuhdBqu91wDVl/AmbO1sDTSFJh1bg2/lFEe8lrLfra+mQBhecrIYT1nnnfdQcofbvBorbYfWEsO6CcKDZ4ermDOww8v2Y5dfLrfNN83a9eG6oUm3Bj3bGquNli/OORSKzIUIc0rniYsOXo6fiYw9ktniq9rdZLFnT8yBOGQGNsUOBZIebQWJ2JooOC5TF/cs52AipHzFof4yzfh20uXa8Ivf3ou2TYRN1dQyfbNC1IQnmA349GJyb5ZOhsqyKSZaXEULFlBx3oXy7aKqazLt9kgcvQr1Y0ba8si/07c1O7cwHpSbx7TOcSvnrifvrDeWzutF7Z5FEf3fMai+i2GPfVqbThsIF/M+TEFEyHYJ7dyFHFzUKRGsxbmkTgWGFtnbVuNpbti80opvAYfRPWet1H742P/t9+SqPh+6cUgovt+iFyJcMXW4okrFHDW6B4SoQoPExUyVnHS5rcojjmNZaRMOj4ikWT5pXOvECmq4SGVQ+ZtZuXB/zSPhfeDvNi9Kk+t574HrfjNZJKqS684+mbd23Q7L5Zdh1fuzd72Wq82+uMUfbRpfON7oxqRugFsdEu3hyD32YyuQfR6NtTB6sOPfWBGEoc4k4Njab76GBXCpodtOc3qrPkHTnV7sK/WYPOnyNiocZ1b6nQPGNakXOIQ9saeldm8wuqnLK2TfYZkD48Gxk58x+IdwP800rHzknOl0bRGYEOMacHJT7PLXftIOP00kWAOkwLrZ5h6GHmxtRrTM6A3CsxDwgK37uIKMg/3HAjhWIbgTyIFd48IR6k5vT5QZdOzxLyFVTytchdNum/gmjTH9oMz0eGaPZzzSRgPxep8JsEfK2noXKihGLdNmF/HmZdvnZxixDPOAEz9kzP3zug7PzBsLna3t+NpXnp3vbVV2Dv2fencXvnLz9+JsyOGzFxUF9/ADiD3rGYtz+7/ZNYEkz6Ww7FccNfN7CeRXt7Sh/y+vubMjDU+Qi0zMJSB8DByTAzBz8gA8bf3qDouM5gSoY58U9xPvadNSMEP7z53CJY8rbPqkDfsk4OsaEJ3e+ztS3SGWOW7a50QVrrFeidH94Uo52cYkxb1lM39DJh5ueayAyPoyh2I6tB7+aJ7OigalR9X5ftxDlVDra+LzwRy+tCghGvrrP1+obHE0HlXE/eIiDsXXxXwxrd/+JdQzv0vB26IvRKsD8qd3hFC9babLkXW2hx6tnFz1OkQlOr6xMfNA/kU1FUxnpFWFLmAWNVssIrn4KtwMk4YLAkbIYAA8FhQpDQMjem1isvyMW9xAOd8PIuaRIQcnIez0w92c4gsduMEo8iKoU8+ks/cH98xmIxfLpXXdsZ3i0ij2nLSZkO7I5T7xFOjtXTZJL8338ndyQ6G8KrncpaRPx0vjc1e/Bf7NwP5PjPnsBVzcBwAS2dzWu9sSOGMApkvR/K9GgRTb0TeDwj0qXSWitwY9uO1gQMljnxQntWp+vda6aGa3ti1xuvhc7Tc6k2+Q1Q4+jy6zFr3XSakjfXdfT3cZZM0qqG4CbYhbhjbCO8NXTz1ZsdDOn0InTykyhW8BKoSWmNMeuVuj+GIjXtdfM25vPKAO4DkkzMC7iVTIlz98FT0yUHz1D1gB7Ou/SMnCYaf8jkfD9aZVy76tL4GxrXu3vYQ8GrzKgld0wOnhv5Ol1YCwDmkyjgv/XEkCIWZQh1yM7SmvTXfnLnZt1orZb1pxObM2dcWfUWp6qRJCtQocdY8a6rIkLXR3HawPIFK7xSx/TEhT88MdHSqz8xrgtq6L52D51iqDgrMtC0U88HwKkk5/83LnJMseGd/TUAA0KT6Sev5mGE2Z/16hsMnRsm/vu0VOP/2BiVuivfELMB2AP2saVGT26sDB8DoQq9038QeyJrNHmkvN0kKPHXxHvz+83X1QCSYWGhvgIhecZKA1sY3wWEp0WLrdREgLQppMUoqS10OdptY14o3jRhwI+RVh8LwipJccgDA1STBOeFp1GgDRIF0E2MKI/fz8xPDp4PEs9uCULBw6xoFzpyo6FPal5bWO881QlcLcPLS8JgUINguhB9iXipqNsvQjKMumsutm3yKCyrcsq4G0H052HdrURpjfjSaGNlYwiiODy952ZMRCdbIxGsPZUy390zWEOim9ewJrYFZEiV6rs4rB3cD8ccK+/CUDVgfmxwqwhbn8Q147tGWFgtGpJ9GHi7elbW/SSiv9pdQgI5O7pUw8WX3a6kcQWDRfJxUmoSi/aRF7CEZWn5gMuu04Gcu1W33tKhC98AQOveig2/4a7qa2y6PubP/Ow8E+pv/DSS40GPfOQ4efulB3AdVlu7+F4DlMhIY+bGDclQc/mi8wcrfjhOLNgTAU/jLOXlbP6154sCF2e8X4ei/+uuqT/kLSVdjOeGEO2B9gxc7cj542Q/b47EfbeI3R4givFHgmIQkge7Ls7zJfM6a9NFhyfpk5DvFcZ7OuflOeKi8XIDsVLTzvgtB6ufAtNapI1zXjDdgPD+PjTxnH2feNZIsPisWIkQQJbo49Lyi0yTU6Zv3zml09WSl+ytmUwv2ZXrltzc3VFHrxW+d3/OOeDIiNzeb59ZvRpv4TGlQzsjV/iA+q7QTp0D84ZR46M9zVSOTBUfDxsvzp3E2eHLRnoGHavClP5KzCd8iG9CidWPlSUPj5yHSiOchNMhA+mEqZiTxYAujB46bgeUIwjZPwwI1RUvzG5AExFSF7gcHROZoztP4UywaJR45+BdisUx87/tXIeVJTT4aDsS82Skf2+5mQPzbCMeQvO3gNyLUtQeEH0a3sMjgPmg10krmXI25EmdzQbP47oEnIxXhIbU3rTVN5PpW0zaVsBbWhx91WBTj3xhZS1lzqDhvlliIQ41uDerfyCXQ67h2wr2nDeAZGnvS7pxyq97usSWt+3/5I5Lbf6IyfTdNdRvOe2p7ydHks+zc09mqz+FbBlvT4KGBV8W5nD6vMuvh0SucBRht6wOkF+FWpnfzlk9tiwkHlKjFHsD0+dn/t+EU2+vy23OCWoh5ek/x9DN96HDFII+cCRrTzwnW/LJLhCG+ygtTruXrtauFala7tqH4GMehmksiszbniCZlngcSixsuTemHBHFZCxJx9s2KgQN/bqr7TF386fDoEzoTi1TsQFSOAsdHI4Hy3soPQfk5fybTPz4kRJd1OVS0kNJtp0jLEiIT/PMQK6/OET56P2lNsgYKHFJrqbbzczROyV8Ah/pA1JhU27NGEWfnZf7O3WPyIbDPre1hrUenJi3s/j4m+jkNmNyI1mA9g7qnD7/hnIFi6iMdPbMaiEMhfe9alvdwjG1FExZ1CBp78u5rl3tWe4boil+fB62bAvr/hgDNANHu1h+r6He0cA7Z/xch8XKKANsxuqhGe9RR0Ntf25jeh3Mvub71HSZB0v9us9Q8NJ0AgW6hbDpYj6DXzirEzir1QaHgbr79qkSZeF4R/V+bgCxRyc1FgfXt2cRQEP0nL/iwEfaA1Twfp+nHNQuDhW2qWr8fV2+eYujquH6H33nN8dmJXB+ZCOx8vWySmh7eWoiT83yBgKD7NW8NqiW86pwrdSiJJG739wRZ/dNAzTNahwUX4Lrpde1YWWRsLtdrx/ePtcSlPkq83MbfwRyiZzLve5pUtKOMrWUldO95U7dubIMlQ8yDlXzKSdfhcrw8tKDYjgYbBxv61RI1N1ostQA/tZoaZK3hdFsOo/2kmhyxOaWQc3AGV1OXZwOkd6eOBOyiYnu8Ku3a50g89Xn3v2zMX1raQzzMRcEa8Oyh1Fh+/EzfzUUgyuMe0qlbc1CYk+qhuVlwhsw+sY7VR9e1XA3IJedXQWHf/U/grpxrt1t5ApQzEQmSoLSqW8Xqfa7W0n1vra2lxv6s3ueBHT2EbX/Hm9AJCv0I577JQ+xywLZ8c55xe8fys5PjTTsm/gKiOeU0CbnVR1a6D9Q+Mq829ApOrINCInakzu3xDcvIMLOZcDDvtx/g0aPONHcvMd9kT/1OHpOT+v7kQ+7J5eb80MxeqAhGCAkMVx3hVXd3iEjsXnC8q6e1VmzjOvJFr0Y/+N0aOIzAzOj8HF5zL0sZmOdqvFDyT3TVrO8VTAt85vjOYmLBXOz9H6Y9Iuq3qJXRK/QFhI6lvkg7tzNO8bpUcuXLfDNpU8h5CtBN0RbQYk6G+j1gXia+1mOuOErVLldWCztFmE7ItyN1L5gIKxxL3E2e5hHfJtk3WmfGRORphN7j5cnxprGGh6fbSG2CGo9rgx8eVkyvfUiMqENWePrW4ODwCwl11+9CNZI1QA6MjT4lWDNG0A+n4Z66ZZodRk2iqRxhe8gwvEFovmPQuAPaiV5Vn7vYe/dVW8Qanb5rCFroiFrYeZMnbSNnDjtyiB2558F905BT61x9BvpzMPxFyujkxG32Ak0q/pp03zcee671zJWCJ8fWVJjNRVEIGxtj3cw0TqgG+uQNRuxmzT14Xdp9E7O2PcTJ2gdVNSO0QODXM6KOrJKLTMrg7n/NlQN5G2h7BVEsAooS64jBGzYY36CM3dM9H7ws3v6k0/Kw7hdlL4T16FkV/8OvdXq9puw7PYI6thO2GrxSCsVxXsnO97+8ia+dAoiDPv1x/Aui0zbL80cP3Hf+PDxzvoIlmxZGOfO/QAu8484ojmsYOufy8gzvrJd9zQdvOqbtdbjWWHyaoBzZhucAiB17DzsSGxcvx5HzeYCnTKvv6X2UWD7kJ9ec4eTQcXXUVRzOtblOVPbJ9oLnzXlsbmnOWDkKr+GgM07ivh/o8czU0Rw357tvvQ83h+A1YK9MO5qnmmW1757SvefkMgynhp4drulPZ5n9O1/QjPdmNXuncYQHyHSxZvgOU7lDh0NFSyZVMSBCAY0z0nCoxD719Z1eKclJNM2JgQsNdQWWVZq0SSobxqwXq4IGPY2GrxLJ/eLZTnH0HwdgmgX8whLDRCY+ct5DxjxBDOfOKH4PJy1prLmOa6dwda39rm1u9sx+CV4rp7X59jLOe9A7x2rZa3NwssgssBIB3+VCnzSE62FOfb2c686aE/3YgfaCIrUsn2a8V2m+vwrh+K3JbG7xdw6+Yh0XOHcT5eA2tVR1eAi4KidINhkYGbt7loTWrgZd0Vz1aDyvceeqT2/2DZs9hElMHN7cy3Cu6SmKl/1WLYZXiWT/fWJLiZ1rBr7ePCQydqI0bzaqiBkJq+eHmz142bvgQTD7geLJpjpWg9sb25vmKnsiuUkTgln2vH2dP0WHyuQo/sSNYEP4ADE0F3B4Fjj/0cAyZG+vbzKAW2shvq1ZNd01+5rv4qyQ4Zt4WLR3CHb75T1rmvO9aux7vwkz3yOJA/hVfy29+z8dXXsZdA3jLtCyulGN/NGlmbDzaBIzmokSpr/cakUZK8iydqZ2uHHpWS1onyq4wFN23cJLQCVo2oGqPp18eViWrlm/y2HHGrlf1QMNV5bSEOQ0xNbnReBueGbQJuq1e5kcy7dOjtNeQIqxc3eSTdwYg2cesujvExNS+9ma5hBWLo//yUELBEUOa17eOUfLTV4db4/5jHA2CuK9Te1mKyfHKXK6EHr1NHfXQvb2UUyoh/8y74T9y0vr5+9+uYlYjL0ugq5QhCkRY53OO5vpiAFeGzaMLPAe2ivQUnYm29cdtTjdGJevYzkYY9iV/eF3wswOqkYpXDm6SF6c2NdfGmWBgmjcA6obQ/bngarblAKkDe1Nvvf+ZzaEr3ya0y24qWjNI79ehDuW0ednEOJPHCqeogn4QMjs/vDrWXryrgblrrj4hia5HOd9A7gbcDOSoTToTAbdj1D0JqAUxT32zmtrZUTHsrnZVWMXyJprjhqHwNikV8QKm9AT3thAqG8OMl9+OKYkOEWl7jGyjvHM2dD7UgDJgWkn7Nf4hROhVsAz+w5vHqykn2ec3KxWq2oMmZpdDrrbs5cO493/T4OFzg2rqdEz693VnRcfxuToPYip7i0INbw0AjX7t/fFZJ/xQFgv4M7W0L07T9494MUuD+yArk2jlC8l9CRgETFmfmApvjE9ffg07wPT80i2dwxGE5hzoKEtEn/DLXVzj/mBP2cAuW/8mQfG+8W50rDRJgVQ7FEr8Wy29WW/LG/x76eZbi8sixQEMqt0e0R+hL7c5cz5YRQzOzUZfbTiVTCSZ7n02p6595pDQ65euZw0s+gec26emlZf7KKf6Zg3ciUX97/jRMZna8HHbqtHtQkZ+MlGAdM/5Vxl+8fq88YpJOm1bFyNFY/PvGm0WVCyTowm6ZDPq1I2ZRNizIufeebmd8LeK7Yr58ZvLr+HOnvOQsfMkfuOUDn5Z5iE1p576KapzpsmI+VN1DQ7dLbpU3CFa+FEvB87ctwmh+BgrkUo45pahMJZOdzX05tOmP5vN5oAZEe8gekD+Yonq35m0zUJro42uZX7OWQpWHPXuvyygUDunDN0d8DZfKuJlsmjgg5vHP1iOpmwwXBDNc3V0ePC4RR/WtpEfVjxZiUHpwyTT5FUP3KppufNkeIrB61bb3sxBmvg0ivf+U6T+TmZokPKOEIc7bxuWmFFQHs3llaWazgb0sd46yS3PHPl60/XrvejwSOg4/WVuMFEh2gAjxPrE4K/wkobni9WTk9Rnzi5v0IY/FNhpEiCfZifuOWpq9W4Mx4DoVjx4z7igKwacKh1/9gPPBszsX0Y3KzJ1z2S/rC1jc7ro9FoswbPeqermRZJoVrYgFpqWP6UfUnTKz302yeHtzsiAI2ZN0r9I61izPJvWpdW9j1kw5cemhDuRd2WZa816X39qju5IlIs0MRvthVet9DQcvarZsijD7e4UlucnBUxkoPiMMy6bM3Fh3T5bQbGuK+Xs8b3U3bE0HycaE3OAgo5UOyT5MakgtNwe91YyraIRIkLgkwOzuVksXRYBC8AACAASURBVEPbfNwXv9dyaizQqcvQ3h+3oCjmRFxqpoT0vwMNbjESnz252zbg94uU1PykDITu9dkY3WuIXI6tsbOAQ3sk7sPLUD0+wD0hAVwtRN71nkjJh4yTj6eaqC1dlzmmmJRGOkv7XzlpkRSrZ6ybhxFlVDE8o3W+w0TobJjy0xXzOJVQXNNAvsPnvIuWLVyogBTvYZoNX8Xk2ICWCtzG0lViOtFiVF7F1mZsMobSrewlkq749jCwiw945kJEOfbBzjhaBVtYv3+88+UtLJCDKZJYFq+6KH0KSjskEQsvf/I/+jfzXktL6D2gC0KIb/+iws65orozEeN79b4W/8m7QqdO4tdP2Kfm4JA8CUyfrDaO5JoKwzX8/IFvUyyQfMQ5B3yn2czB82Vq33hwzF/3dl7C0WyK8eThQwQLzvfsUNn0PnGm8Xr/y7U5Ntb0I7bbE02nlGRX7XWdXNILcl9scw4kPIuHeUA7VyyuK8HE+0yDOO3jWfTDb267l4J3YzgPL2i+a+g5ABlAWLZrr5o514Crdk1mB2duikXRrGWKvBcHtEA+Y/JGp71/oc3bPQBvH2nkom0RGHhrbM6+3vyb7tUBPUjZ+d3UtObc86aj5woRiuZzApzkZx+vzzxnYXol51HPDEVuXFjQf/LPg5GR+YFaY115j9K61p7J6ENzTH/F5UTMnsv5crnfsfKYXJL6YQQeedwCidz3+cewKRRW02OTT3NS7wFszVVLU8v92JnE1J4+OF9Uwmh1kPXmrrvDPiCdIe+etydvb24TGG0ePkVYboVRdI2roa/SdOcEhX0k6N7z/It97zQWn86przTum22Bdl/VxgwjSm6s9dZZHIXbXJvqlLF8s4OdizLN818jGbsFI4rrAGcqkg2cM+6JFbKXM/8IV4mwkGR3LpugE800B4MDh3luMNX6dJObTVT351SOWMqJuBHoJEy24BrDpSgZGDtt1BK5CJ5GoDEO/lRVEP3EzeRpGFCMVU1lDMcakLLjjySTLx2U7vN4tMihRwM9GglFs87NKW+e499g5yof/kjrpeNGKcTYb9LCRJ+udfPIJAfAsU4992Eut8ohLKfvgOVf3l7f/CZkANYuK5cbh4bnV2LvAu5LQkGZ3k0GKci43pbovuKCDmbutig/8idIV7vyn6+PpjTc9o7WijS5EEQ8zEvI7QMUo2fsVWxZjjVLeukB6J4DJzpim5pqfv6GWbVLOsXP7RTY0V9trrblXrvGNklzaw8Um9lJguabHnN27jVTbK/ew3dOdvcxorwHrg/rNGrOthu/fN9zxeI2p+YibV59tpa1SbmpIP7tx1Sdup59T9+XhGzaFPEz175xSs39DGBJrp+62ievg6377IvsVf+OKGHb1j0yBXEPEsDr3aNB5lI9nMcN9peff+GP+ByZV3FwPU+c6NFWFKbwit3rr3FT2q6BqoSSlPTWHPtIRhgkdi6aIwb0bw5Gtb6mX5fGm6vcCttEqFNyyW8or7+ujaQr4/oJtEWhVs3He4SYFwhz52k+i7462qG56I/VNBZpX0v/3QnvXbM189U2+oW3V92XeJxa7o9eBCtUpb8+zc+1L7/LbCRqkEhlngLTyLmCqfHsl5wXN43qHGB71sC+c8cfyel3i3Qmwp/bObg1x2YPJTnRZKkhyU0StpzbZqmA709NuVPuoSLbbCC6SGLzIJCY/S2vy7j5WmhzLBdda8lcbqCjcT7hOUCebzNw4OYNl2PonydxZuA3Nwk0+DlYg9lm0Cb4++V/PNSmo9Bu6Or8cTi3CRw6gaiXq0UtskFDL4R68ITTJL85QP3qTl+luUbD3J8/nlPMymYW3ueb1UhCr8AxhndcX/PYO2ELS9lSP+564MoukXQ5n9WKGCsVD//tzHZzXJtIIJ1bbhLKHMzvx/rSngNop6wT+TSp4e58pizrNPtNU9ULms3p9J7p501rdLPfAzg4nZ2fR8jEzZEpA6ew2U9541FOKtCq2VoZUO7s3+TwqRvr5OMCbkrVXlcZ+NcIsC/XaFtAQED4TYE82J+baLdnZ57r5V9fOTTH8u4ZlOx8OMOf9mLaPqDAyV9x+16/O6ofE9MBJxfOieRcW95l9PxO/gl7Yi5fTcK5X+jlDL3cBNN6d8/Mhk6N4ZhAjde5ajIcGZy6yaHHxsmnLWWO6+1e8ENzZz0Sz34K1qV2rBPRuypflIhfORNLdze4JwGrDo0rz3dOWZM5JtZxz6LG+oQnhIX+wZk8dL7mrF+uGQ1Y3kw4u1J0bzZ5NOmNr90mhdHVsWBFSynH2mn2zVnS7GECKvU0P2vg3fn48QXetvMNQP+XUDNJH3ra2Iu352P33svXPSb7+9/kUinnjbr5nna0qpcTAaLl9JK14Tc/sSRdONxOoklIwrRVSsxRxKbizRAv+fhbclSBcv4lBlWrVO818QU5xQhhcaT9wyWyPv7yUa5aE1/d9x1tNwCFEFjyFQBYdlLgRHq/eiQQonq9KgkvLp2yNAF2EU1TfIjvW2IRu/fhUjuwo28vuhIvPjNu8aDXv3HmojcmV08l0ty4PgLj/9a7G1XLsl22uiuu+PaD8MPtg+yDUI+9Om/fm5nfLDeOyfnNh60SN0HlLyrt1SmE+oq//SMvG9e20Yd3Di8sk1fz61Vr4nTvi8PavZmN+ovWsqMn0jr0f3I6GO1dzKs7h0z+bcHYtgVOmZLvrV145MKeOrF+G9483UOj8IT6ZC0ff7oe9fhvujl2kVrn3qty/q8PvcEM6eH59/3LEixn720vScg3W6vkngXrY10OzWtx9osy0Krr0M6bWO7P/s8+exm4XIpBbhR0gH6YSnyt6nP5qKUcp3Nc816BbUzbVd/C7rns3KOGN1T21OHSszxYRXmvqRc2XXk7zinm3A7vHifi3VzkrTHcBsp8yop1qZEkffE5zptWDONT/VtjTc+6fcrUMW3wk5vPY3GtttVdfrdHHXnPDhRGXz+MoEKAkiJreKFT825++lGDAe3iXpu/+7Y8u54YKxf8oVOTXDePvGmdde8V3VqjcXhrJSLlrE1XES+Ou3iWikfsuDNHjxwI5T+puGJMffZO3gCHBj6Ms4cc/nKrsCGpGPdnmJRDxZLptroNRXb+w1hAKfRTX3sLnOkwJPFy0ALjFBwyJiYv0o5tGy7RMALLI2AG9jQtyxJNFjFAcBZcYKfh9bVzMubh5pZLxY17E3CY6DVk4JHY5LaN5rSd1fBeUI/gnUk1NDofI1OcRpmGyYEjssptEpcKDTbGWZ/5zZVIxFDkPBBip8vVUbZzQLgjTjeD5PV2aokkB+le/726/+ztV2K2lIczmldj5VZ8uWHvQ9Z/g0KTGLMoSjKffhJueWJqkuLlEL43o5+vdb30Doxj59DHNobkpq3U2gRa2qDPmacePTTc3ZOD3IpliM21sjQD7BLnf12UP/YW66k/eHA3ynCOGK3p5aUlp+4+rW6+CvEqWMaXpdcVSx+TW4GCgJ6cW+FWw+qU2hujjJwMvHmYnOQMk9ePNxzB9sX7XcTMXhjJ4+7npvmR4u0DTOr7qUyo1V0a06uxb417nd5PXHHV0Jz9R2hK7oTzTexI/GhWOVpjwCDTxGyhfC7m5VvOYlIc2S5nj++9UBuhV/Dn3Dt5hW+/cPYuE4PEU388v43Q7KRJ62Bemn/z2Pw7qpYm2HxYzRmiPMjlnPG6J+oViSQjvCkFVBfIrQiaSg6vTsnFVU4NmoOV0yt9gE5T7pw8N6/u7Pum1X39cHczbRMlp+F1c5y8NPCNNBvbj150jZN+fMtfKdJnUE5XcM5EQ/LUvB0Vg7zlyP+1C3Cee60hs/1bcjeH4E1wH0ptrhUQoJJeHisUnBs807pF0LyZcJYpmAi7EWS2D7jGXKxytESWQOEsQr86aCfUf7RCIG0g5f1uCtmKg2PJxvVvbJIaQK8Zd/SQacwqNqhq6LyRCqjD5EB/kcNdjh8NRO4yPnGIp6+q88PNjd88yJKcTpSmlOssswfyROta38RW+PRW0XS9lCbv5otitXZOo7uwR0hLu5q3idV/8dPAN0/Q+VUHd5Oc+vZASYToqjszP+zmoaOQpdYNtpqW63radu9tcV4Dhj5NjWUL/cNTE0zmsNI/BdKDXn45JGIEUh8M1nQR3Rvdd4fT/xqKcx7Ei9Ya2rka6Y66xnD6oDGA0iJPROquUlY3XSltcC6uG75Avs4BmT4VEHlTOKliIl3uFQYJVI69om/6vHPEwdl9WI7lp/u1PRwbgz5y3rIrL8uQRjDV41zuZ3/Qz652UsR+eTTD6NP42Yezz7qFTjR40U+pofqs+104BDE+zPRSzh2XFHE1qTP25bQhvdb1XrWuUObTAJuP0LTG+oLlRz3aP/YjdOLrO0xl3xqzp4NnqMbb3z/UJF2zrpePuO6ch6cHDz96M/c3V02NQgfruqJz947CxQFOlGY5LLbmYoye/m605hpG0vTz8kDjVL+9uri2hEJ5FJClTN7xaD/FtW5DO5p1v579NMk2aeHqI77wz6246j/1LXUpfin1mu9A29eTm98eQjz/FUuG+eAP1JWvppgmSCNpzv9VuDr2ik/xdMV1BjXLNTt+Dv045kCGmPxFUFewGtmFLlcBdkXjocCBlHyiZsXYA8Cb0nUmCPzQJbHZTNMIkEoOe8F+bymSN+FiunD56k14JJBOzcEgiOGfsTjXlxBnw5B3Q8hxZMwbi3UIuzakRMsBzUqjelo4jmnMyaVmLV+unu6iQ+luePfNIDrm8LSBbcJOcaslpp0/C+98dbQh1QlAay2NXG8flJrXm3DNg9WSTuDl0PCOudrtvz1XC/l85u97NBgzkn4DcOi7xQWhWLK6eHAG35jcz5vX1r0bXLktTgUdesEXpVfLITmDh7sAQtAsxmwGn/PiefdmDZ2P7zY33fsLsnK1f73ar234zrvPWkajRL9MCoePj6tm0QotXtyeEdbAax6vvsSK7ECXorvL+aQ88qUXY8jYlQ61cjTVWer+9yGY2oZr9lV1FzT5nMISN/c/xxag+qBH+sM/b6Ve7Bu1vtHIMXPOALZnaN+L9dJMhRE7RSlj1S4/y5mUrj+emS/HWY8ujVHE2rV+2+ROTOvY5OgQnmzHnomimbpV1avJOKZ0GTZPTrIkzmhnX8WQSzkK4ERif4FdjoVXYdl+toarhgIjrcznLKmbr4fnBOtgn6XYppfr33x1b4V+289WDkR6u94k6kOmOnW91z7/Q0d6Wpvy61WYOa9zta1lpw4Ii4SjSfdY9TZT5wLLnLeuY0kaAx/aNuc+Wq9N//XRyVaFUwDsplWyPHmIUjeDd+s08NisD9bE1IsMuhlzeMdHGMbNtRARWheGbBojlTi8Oag1sw85crEyYDu/0NAFUKOMLI1T8NPegZoVomVSsYSnz9WjBy2ZoSvOOfQ0rmT1AfNwgyNO5tu/4dR5FAWkm8Q6l2uvRFpjODZmJHYU2aSJGQZgbLVMiBh+rkcD+Gnt6DG4N+A5xAicXPdkkqZV5cQWB8GXz9HIPWwdZOG+Sno5YAby1NtY8tteG50v58TC7ozteSc8g0RooTXNHcvkgFc2axGkuTtHMzCOqzK0FpnlXhTloznxbs2KwlodQDw34PnQN5fD8TUjMKvRpHHkx/xx3TVNGqhzaZ2E87712gJUf4x4SZ+Hkyzl434zg+L3zV4CWLCwkPtP7I1SbmMTSpTx6CFtLUMeyvn9RZhPz/S8LP65bx4N6BSGm+JPOI3n39Cc2ak3rtWioXIFpw/g9ImqNUpnHwj1cq/Fatoe2+dE44qI2RqsPrxBGro9I7PHDk/X8Z2v/sWS+cwdXzhQW0g0CVf77KP6frj6Fo5VRDfKxsTr15J+9oHWKWHzLEwCXf4/YncfaQEQObtH6uf4ATe15Cin5MyyA9veZ4Ex+lz0eTp5ENOM9J148vDTsp3gxXn1aWJM8xmOYCXxlkHaK6cR7D2X3LzuKSdUng7oPNwTw5ked9rIlJ6v5PQs8XP2A2VcGEc/sJ0CPY9/eDt6EW3Ez2VrOAHCyHhdceFoHPnX5hzItj/1Q4Uc3LjIQh8C2EO5AmRxNltFUiyJXdrupR5Q8VKC5dSpCxzhaP0eFBQvRRpwUctBdvzdDCRemqmU02ns7CtsUK6Ncr0+88maYvSPIck2G7ybVWYThw6pYyg3h6RQe3DzBoYqY5d6RjfnZy02hnOT/v4vj7rq4gQhMT7KLW5ce3BTNKKHdHSfux0MlqZaK43h7V4QheEcO2jB6WDNG3N/EWDTu4GyCdHsbNLmSFwCD2jjXp6ymO5OzVmnx7yieyPtYSGvUk567MOLXWBZehe498Ujsoab0ZlrHQJqPEfS2FEdvTtLeLJ4YyN0GoxFcnBGsaVPI0AWilNsdH8KJGI2rtSbC97DQ3wujkV893/jIYRhx38Kp0AJhnaphrCtnC17d3VwzT/PLNXR0igXjZuL89WrkIOelLeOkaDL5y+oCAweB9TuSW7FmvR+G6Bd9qDzcY+3dzRHL2DTn4Npn5q/e4UDlJL53rX/1MpYy4SeuqKcXiHtpLMe6akzYe09Mflkv9aM+vdmFHe9Wzu1G/zEB12nBckLxUfXJTbxU6epp9DWjOiNpStc73Ou/Z4z6amnvW0R35OOh3PmhYguw0nDM59Yi9E38tbXveDVSoG/NMoPkksr/ecwxkY/uSXx5iij1gBLrVfnyKw3+Xwo4MkRLg5iEFud/evzktLMfjt9Il/CUeDJHK6mDaK5u2bUKbX2OEF1gd/mqDwM4w3O35LzhCpiR11oILi4KyrOTVA20zQFlnPVI74fzofSxIEc3BKDzK/lPsRaLP+xyoEgyfVx+IjcNkLok9G3fzVARcQbmj31LufmKI4dN6iLNNHTDL2XVv3UHBqqWWogPFBZnDcB8EJYPyzISfrykKS1QaDYLdpgTj9TG9fn6Ehw824TVtsDYXxht55ZdMx6JJM0ge6ez3CWK5ZOpFX5DOeYsklOikK/zczqr5DVBQ/8NOc3EqNS7Fz91aHBd39srIRH79YsGSwfxDOKNOErj9QYzlo/+TeeGKJe+K4wTrJr5Y8GNrJfHs7FQ4fnANoaVMe3T9xTytFamYjilBLYzS+19UaX/rbDlhzNpLzLyxiO0TnzyPNqHgDufYdJP9WBWpaV19oPYzK9cWYsigNlmtipiQ9vTtl2JrnLBh2au7Bn7P3XKNKuXNrzsl17WbZ61Ta/OVtL0r/68cA5+H0jo7rLhlZy3V78z3hl917Ly6n4oSHOzENTse3zVODn9k9+j1X6MlJ2CXnLeR9wLPcMbGlfuqOh9K3GMhFf+V+3tif1sFHFBdXxOiW99tc6DND8TEvJUxD2h+PvuaOaWqtlUX3LVVdzPTVNMPZ1SZcAgOmR7C8vpUc5rj1mn129ON9yptx5xuJoxczRBuXbPDaT6MQFplPboPheDk9v5KxL/KqoW8X6jx/BGd0wlHcRtr+RrD3F3jEq6A0xnNJ31Tc8JqOAOYpe7QhX1gKkEO1Vzeuc10FYio0rO88qxCkGOG4m20QQYm5y8Bwwqu3z1vFXDxifpuLeQoicIOA2Dx66Y4oYy4RzQKjIjwQTChBbTwHTaAqARs0TGHMu/r2+9Z8kMbFrkjBogw5EVtMSuWtRMgtHAkX7E7R5FbDNRqXGTriqR616YGnea1oZiqEhrKsPPYC5a9HCEQvoBFCg1KshdR2spYGdClbed6njrg2W9IGjXkI2/BuD9TjYKn2nbkmi6+lIxdf81UohirvztS5LX4X9b/6IZNcaszPCE43igYZusvhxDP4yI49y8MO6MXQdXB7a5e+HYznc2neuGKctvFSyAo5+3mh+aGGUfkG/581N0CnBql7IwrmUK8rMt3eSbs+i1v6HWkhTbRo7D6De5tq6wir7bsYh8Ggy58ORgXjVOFVJmvLVsFeF1X5pbr3KqHmwu/A3iDgy543iuufYrY9xHcfp7/mr2M1TdooJn/sGJHx33Yb1Mx1Hgwvyxmn6Vt7Ob2xkJzOOhPQKZ611uq6jhWGM9cvZMJycyFgTBl6auvV20SaHBvLE+GsA77PfvcXSk2A7ALwTS3C674e07UfHXCHolTGv43kmT3MUZOo+E6mn2KbOwg5+q3QjWbPlpbVDc4HTheKLT1yKqXgee6F6uX+zByJI68S1eSZomYwOZUBvdPZa+fkld7TExOufeVxNumbODRKtVO/h5X4kD5z6rI1QpXIgNPxqAN3UplfqRiNC6Tx42O32EECSqZ8xNakZX80zaWBf8j78tX6TkW/xAhEsOe+hLRvb+dXQlJVUXbzjqmFFk0XfmEWIcp/YoNTn8wGUxVy6WYTfuI0lPOaPCzEUUM3aOLpqASJ+p7xC2ChUs3kyJ73a9EGzHWBHAEUich19zWubs7x9vdihF3vqprGC5QH0EeHnYQ2bZmw6zWnJZJ03GuWruePXTJhyT6prbLUn0uQCT0PgEii3gzdobaUDWjR0CH6u694/n1FDZxDo3TPv8szLjqWu6/ocIhdPi9ov+g5pIyA798qjnHu9/+TM1Xh3yCp+20KzRBin88Ypbwpk013K9eQgfK95fzuKDWb7MXj3/4QTmeCdTN3zJ3dwZbeOFiRvMKiPg6/XEPCeJI9nDyaiLh3i0wQD+BGW3qPtvP/tHgC5nLggkKK8eoY6HumQvPdUbQ+SoXp2yUD5Z/+3Rz1tNCXiXjVKqdAnh9rcJ3FjLXa5TG0EhNbnrFKILR/5OUufn1UR15sU4H4pV12HU87V+teccJ2kDzTTDnfe2KYnOtbV2sc2tTNu9n8S7X5qQ7jdHHQ0kqMw4BmU/s1l306f3nbV0tA/nATm+a4W819pjCP15CUeiXu5yFgmja0r48BX52fuPv+TA5p95COgsiwO4AlImY+N3FH99E4r5qTcKw7TJkFccodjclE817FbX0j2oTbH3XFL3o2v5XI2bnVfO/6WtX4PEwV2nQnhUA7XP/5K7H0TUKfBU8jT2MxbvnK1aTPUXRvSwSFaPApPFgldlPOVdDjXRdFIPA2n+4pAJWmOlDTG3ClwG5yhOSI0pG6TlUejOg9sO4V7cmvMcxgntK25cXE07Cfa5B7DbEIZ3A1Ao8iJXO/VSMuLk8AG0kn6JpW12XlVH9hgc0Pjm6OABqLxQc9XKac2U4PGLYsrZfZBe8ChCuyr5viILUw0p+XWLSaeqn9NvKlYy2GueI0Jz7gIpuE8cI8EnoCuQ63seLW0bdetl5hsCK+lxTAfa/VQLXFQPfxAkk3jsFdbF5LZPYBe2W4Cv3XQvb4rVpxNFvCS3V/6KjB097ngp7Uz1Cs8zv6XbflP3TD3GWHNLT7Qk3hDd6Jq7f2LtxwC74lo0eIW5WowiOxN38nOve8+lr0+iZkeM/cb116auZgoQJ9JiTAokRomHsta6+envezmi5FwRb5BXtfU2rxtK9+rW8fKxX9EVWLN4RAkB2eHVUzpnVNnEWCp4HefjlwHF57OWbPTi6pA3iShv1BfN27J70imsJtFR943cKMnQlLLNeF6avQRa4PnTEwuTtO6wjP94WWBnjdqSUB2nx/PTLWTEbZZJbnoYLEMI43z+5f886+x1wUs7TdDfcbWF13VXFeZ+9O8W4PNP5DO7E0jzo2BhMn1kVN21YBSbPZ08hh3sLXvDCcQ+YVZFzBNvuy41FS2CdPQkG+/aLL7g6E5os3JgaF/9MJBFF6TDmNGFlTzP4MrKOsi3INFkyHXhlkhnFk4IPuoPgl5UA3aDNbZnFqUJ1SAGlr+fHbjJauJF+fG8Xw6RgQVUIlwrT6P93NDjpqJG0P54m+drGFMENoHsR824ftCcHjD4yaG3NEp+A8Z8WbZdRtSxZAWGudevFRHQaEtG4yXgWU9d+gKB0McqLsXyP3Wyr00kHmAl+PuI9lRgjVlNFj0oqa6+VSnSdmahRTajkat9sPYJasWR9vWrlrW27Teu1Itx8CtyIObzTgOQYuo1EVto+xO73g5h3+0V8ZkcsWKDtVQS+VUvBb+60t/Gt83Bmk80bETJDicyp09Xm9zrEY+HVyHplbtJ366edaVX0s4YdObNUKJlJpst1+6VFM0r/DRU/yI35wUJw69cgsVPyiUi/XrG1SBbbt5n3hqXx+0yJIHD65bO+dsxTSmLsN34zhdLRhbr2HCHC7TI2bCunKVbXLvVXPth5iE5/cf9cKLHn6GXY65bw5QUziHJIA5CG3/Egt8wv7JQRxvHwe/PcNt8CdEbJyXYxeTazQR7uhLdrUS3ZwZEkLTzUH7Zb4jVHtHpk6JrUs11JhWppcFsGuNg/2pSYQnLJA6f8HMd8c5jzXjHqrNOizn0Qq65myuJykD8ErK9N3d/7L1uet6bM7wSpVuzmgLosUQD0fPZHKAXwUK7UOnCFybi0t49k+1jUaNDUtTtb8E6l6mA9tfzsrFcciWfgkgiosHAWE5oxPiz9c2yE7fxCm6S2dsLdagLpB032HE+nkwf9chB8SyXKyaVJzTvHynq0kQvIEXKLllcyd5UaUZCx77e9t4dGNw2xmfTdBwwBvk+euyhxbFzwOpbtplPxuoCu++HXs4ncNW+EPR/+Bu894fOm598obs5rrAz6iNqkn0mg2rcOZ8Ws4P2oS5B4lCCeszZOeFr/XGE/fHP7VoTm2O10ZGzVHIua8u+bYzsbLRpfvLqW8FpK2jgNRN3o1pQfTKd1uaW/mzIP8lzFRr8Tkv4j9+6JScjTT2fdjpEEvBP6+yNeeycG+USrXVtZr7CxBj8qsp8o/woo3P+hDRRbMRlVmsJth/XrFJ+RrJB4R9dBD6XDrbbB46y1ee9mD/c6DrPppcAtQg1ASQwxLGumfO616NbS7C578Qan3J4aStIQetgTP2b2Yx74vbPjcAvsqHXlTt3LfEai665hnuhnW+7d8sE6Q11Y05uZcLLdZT4wAAIABJREFUxeSlczWKT/WfX3gr+5yX04vYpjkCDmcl9LF/SQkyrZzzoWYJ5r4YlqnUEq32phLtIq68PBP7U9pBJE6sNOYLrCuqzoKLG1Bh8c8nuS7NgH1Gv/ovClmXPU+clt9sNAvZKM/WmFqEB/+WaLQQC5j0Hj+jMKXFJsbE2aTj3Ki6XoWugeb9hQBWyGLg6u26GKv6GNF2moOrTZaX7qXdoYoJ+dZ4r7evJrddjqv5Drd5jprL9LZuk2ZxH5bw+mCO/bGito63uBvnyVk/wySG3eznXMmjZkWuWqpb6ptql/E9l85hMKBt2naJIm8DkFZtdQ1TGi8N2EnZViv4Cwl4f0VpoZ10x5+JC79N0rBgzI2FsY3ffFDN0o4ILWr5YhP+3jjiFh3zQNa8+KQsuDSfqOmH8Gy8SnU9Vg2NyoPGOWam6YfU8D9iQJWmcV2UL/9ZUJOcxguCywv/xh3skxd5Rs+GdO7+6kF/LNSPyt57X62KqDCCp0ZtwozrdJeGs2NpSR/uMyH00NPIHzeX1kGNdef929+bjf3IowmoZtMbXqcmEVpr+uRWyxM8N73XbcKU4d0jhGjdHMb2+AekRrRyihYNLKj1KI3JSu7JAe74H37ZytbIr6Wgq7s7fa8kUrdIcEzfZDfW7deeQb0u/gEyXQUQ7zycLAXJwEH2N6LsYD+J6wzbG+XRejVWl1tDrrP4DhZLUamerwhR21xtYp5QiL3yaelSk5uEYuizPDbm4r9zV1vbIFtBidH9JSJ58Ms00lDfyKq4v32QorjxR0bKAa/0hoCibWrycjSiNU5QeSRPzTeuwpdBKO3eNgnXtEbotf1NpKz5jfPmqbUby/f6x+r9/DHL9LliHY5d65y4W7fs/xiUFtfcGKkrh+twP+g165Xsu757xnpnngC7BnWXaMTsM2Dqkh5UGEJFWw6yNMZUKlpQo4y9Qcvr5xV1sBXKILmvqbt8PO8+yPuNnEWK5brA3AHojQoTTG49N+fqWZp8ZdKzvM9vv2GKWzdlBYHeHv6oNO9jXHSa9ftfNquippG0INsQ8fUjAOYGLEkETkI0Vzko+Mx7CHQ24Uq5TQCXiNiiWuhg0SDLCcpOwWJDuoeFE4EfRCy4DfOaKXLJLjbltRWKlnygu/xG1tjBWRZk3MCLkNigq0YtRg6PAsmRsQ/SAg13YS0lyOvWvM3DXA6H1nWtHWKAhmzmk2MPtvCPUuGXmDN57h97Y4vT0rZWretAVINcvXXqHyuwrZ9WyJtUg87mOLbRWzOy1ae1nKj8kYYOWz4ocIZh3JqPRw4A4TQ+ZVHp+Cd0XIc3jpMyvB/0GtfPsT9Kq1KHj6/hSC6u7xwaQ+4MTq5XK0URnqD3XxC3pkq5mAdp8uyceG/uzc38zFU6y1prRVz+rFBLm4AQQWxF8hYIjOwH3kyFhfIroUTqLXWer8rDb/JW3bKX3eq42ery1XQiaNoGzkbTZ256WfMPqegqqOSLbj37ssccdestW3I49Zeu5V3pJl/tL+Iuqape3rYNOXLxuHTFFFv6Qt79J0bKzjkTocdX0jI3QKcvUC/8yfmMdf8DJ8kYJTrGxzmc8xwhtgdX82ajVIiQa23VM9ZxtMs+sbbxjwa1WVTj6F6f5JWrcPXdaWxbKFvJECjj+LVLc5UFS3rR5z2r7CMYIzkPXGya+qeH8nz0XjTc+nb/75U8yl2atz9hQYKVYq8plH3bu+b+6AL15R94kC2Let3JUzObuk6TbXXngILDY5t8hxyAOWAzlhbn9zC5QQSSPAb0mUHwSD4Jb7L8cQTzetGnRXUBT6Mpa/FJUe+G0XxyJmkTMbOdd0zdf849fKvAcPVAzXkds+wHDDf7jrWGt4gtcuF11VwbjPVsVubFcw6sPPAOd8WAUwHFoW84ih0tgR3Cs5d+HHjPt9qphTV0PlYNLEkRrroyVpMkhnktv4ZenT2D71TdetSWaMVujg3Q/JoYdqP6oxK6qnAFLlbup8/prE7aSHz5LcmKw1J7UFy1FfYBWr4yrDZl1JC6rl47i+85MOpnNtYdeYlXLta7fzwEmk0nk9sfWhIGqfBwtPDkYAJLKPoqF+unJbOhhpXp1NzxxS2L2S7cdi5LgnLtv+eHUN1pPpSrUXUUZ8+5R6SP11Z/GIIfveDbgE6teLOPNZ03oa9ls2082xml1fG1mLpaS8U3h6JYwxzSCeTW1c3y3XpJoMSMVqRzoWUAiFkZyXMyI6aFA6qRHK1RbdcaN5dFlFeQTywP82bq1EKWfNSW654L7Y3aEQ+ylqG91XYhXe1tgWJXT/N+NXforcG593BeG1IT7HFWDjY5I+If/VG0GGhVV9goJe2hfLHSOmNH6WDsvZaolWRIpLy9pwYKMs+EYvjqJZqhLnDi34IMuC1TMlndCY2Tor+LF5iKnQwLTn7Y943xuKe3tneGOyG8k8FJfOoaDTUvWNf+/J4xFpzf0O5Rp7ViRZ/WnjhHS0vhZJVadddVPr0Cqbn5IqdI77U/EjGccIwW9GZIEojMTJajkN+3dw4prdMgAWAs6JupbRCNqFTBfiGsGwTEL4Dw3mIlQuwSVyTDgbrz0MmE/BPKEjwpo78t9bprbAlUtVdonI3leZqkJj6nvJniADXiOwc3iJtMvOTP3BkXU/N2jdY8KCfVWTP/kFAK0/xuBK20WW0F6jRROdjNB35FK9T+lXT7JtqPC6twWDkd2+pqqSpf3vjlzYL1cP2rRa/OJRtNWDSoZh1UfMsQH92kLtxDIG/As8Z6gDkIk1Wx4VvcbAAONML6oW1+yTQ11Vznga+YwWc9Y9b1Qj4iNlmMXlqzdl1Tapmpdrrv8uxD8zKXhIif5ZOhcXqVrX+1gOerBRR7uMTF3Bs0vR28mzIWM7H2oiJ8xWTfcajuevtHcZScVspHcPim7Q0vi37aq6/V61CPKahRJXWI3rWVBXurE9wyW3iuy609XE0Ob+XRPd/vMub868+ylSsEKavxbn1R46Qqaq2zyMCFddf4c90p9dytlu1bp2uN91dS+D4SN3OAe+PryOSieItqsguHt3PyJlPeymt6EzjrXNeCVGt6oHFC4+qgKSEQvr3Ze+xz1sqCUKuJpza+cNE9z62fsetrO2gFM9SOCNaYeWyce82JE/LbD4ty96v7pHkkDSVs6nuVe4XseXYnQkZvEl59zVXysVejY9nU1vAJcGtCeUumXqcmfRY6gJrRn2n70OKysaq18Rwuh/VH7I2YkbcEuYzOWZLWo3e1CvXeYqoYTYl+0KwsNOnntrT6WsJa71d6qUOElBt2yVs4S8Og1caE/SCj0VWU/NXH5HCqnBlxasEJNvqachOM8L5dabKMbcW5ecHjyUHBok+x8T48rOLHobUZdLS6iLj9f4utJYXqJ6bnIJdPUncT665vtMKdjMU7DQR17onMi9bACh2vbF2TdQ75188AIakbBbh10ZRipy+In3ZUON+7V57wyYW5s6CM+45/mWhUo0TQLTx2ozvYebMfgHIoBJrNBviIcgmNrkerPPxfr/eQqd7XpvUR6dnrIoZuw3D2lHzLU+PSaoernh6nuyOPkD710xIxp0z6xZpxgKTHwvw6Bylxz/7vPS5QXz9G7EWsws1xrx7oMLoaya1jXcoq7TR97diNnHzQRfl371pHXiMpOOVVUMG0CN1j3VfiljDSox+tnzR3PtuRhS+kVpijV1xisEb/VLGBGuRoqpTwEYXZb+nD4ahFY4lT4XotLNxPLpoX9ua3b/C0tnno3EgNWfALUfMGuPbpwiOeeXdPkkRy0WU+wqv8xckP87FgUK7k8i7NnfK+6+hAsKMI5KkQlOx8GOU5VjGlqldr0333ujeurz5vNSY96uXx6BQ4XVLBybORTiEQk/kUp7gOMBIwmGdr07YjkZqvv0heP+FZe3Nv/iiVGq21cy8G8NHtctdYGqBJ9pf1eesE7ji+UbarvY9In+3u5OiL7DN5sh69lYPW+TzvTrBLgtQjNvIFdXQLqe4/qHmvlKWw/UPfmWkewtjm8dj3ederYP6dBFxJRBhtQLzTQGxYLZZZx4rWzxDoRaazyQHFFkHZvDFsQ6VYFxlB8hVERaSAFVihc6g57+XHUrG9WGZcJ98T9zEIkdq1cczDlmisGGmu6y872DRXmmT5yVY2/ZtO0+MMnJjpa+x7428y3jQbtVyfkqR5Zs1lSaca2d0RnPJdWHjS2d1Mp7FlFpmPh3vLE33D4TzKGT2rSZNHUOR093GA7UNHbG3i735MwEiiHP3ZyCb35i4+OWQG4Ofg8cnyVA8Svdt6wA/9MlcT2rS7W2A+hrWsEbGigcbmFx3S33hNKAP/zzx+FCZgnVc99YXQ4awQcFAFZMcERMlilaqGNTDfy3NyI8eDy6Y1EjFwOo1U3XJG0WBpHNmzDGefSNM+zSskn/PPaWbFAetH/2ddc4Lhcyole5Ny5ebWtZJI5ZwI1NRE0VB+YT4cZDP/PlcgmSuJ0x/VidokVtuBPLjpTEno2n7aNeBLuNPBhKMM7nzOMqdjQ37uLdiK8iG9e0fRIedrIbmyB+0YE0gLB41ThPZQolpnjIqWXJ1q4oU/ZfFZIX99wgey9ffVkJnrUjCH2AllPgBWSYFbiJtQfdRTWJ49BSH/GgR4iXYxZuMVwNcLrZ6ovvDJ9lYY75M9J7Xu/ZDnUu71HVRoFFg9ST97/1cKrugWPuH+gyZEyjlnG4hCcC+KCeGwtR7Kw0y2l3Tf/+wd/2qpyeQ8/Bi4fXfPlI+vvGGCQIw17WEJBjib1k3o+oqofKUFeowoyBakTdwhG0gZ5/NzSoYsRZBuXAOwBMtsRjjzsCj35RcXC0pTFdsrcGfoXAxeQr0WpT5Uy15pFpps8k/qpj/OFCH2RW5hZFRFcBAWOXm2zZ3i2CRKcHPOKalg3Dy4hA03YTWyvH4e1pqVrSo43DbdE9E4T8qnHrA+i+6V+riV7xw55KW5yhqbWbR//1jRXRaRMbahe9S5kQM96pxkpuhGumo4SdnzOTE9aD79m33VplxrXlxtCMe2jmOn+ld26SNgDhpNR3PW90ADc4HtkoAta6VWHGCz4HxsPBzia/2swcBPIlt/54qI3Vg4gRdH9PEu86FJd1GJ3DdpO6gGVKLEbz6stGe1sFyGnlA5fDKTvG9hn3zzJql5Iju9vv7F9omsO9cqW9ZnHT6qbZa7+Kd/9LkSyWQ+WtMh6JX2EXeWJEMH8Po+vMrf8v3sY7xybrDLou/g9MwW/ZRUJsLtdZJTkJSNXDBqRmHCgudcj0z0waQlYHr4ev/p1ft4D65QnQe5XKeG8HZMvVHE9tRfwylFbMVEeTs3kUisSTS5NK9wRqtoggVAweIvOdmv8XQt93IWhmN7P0YtuDDu+eA2GsDLd3NXGfxfto3t9Vqdpw6O9O6vLpaF610Q8tBSzHouGCP142y3ljLlM+cW8kiAipD5FoQ8rljh/SMXCJUrqKaIvnmjRE0rWs6F9Fe1E7nRSwjhznwlEHz731HIKcP/OMMflpEnwo9mqHQLlsrkXVvs0MiJWPS86Rjt3XVKZJAZu4laINbp5zR0kkI6NZYMXSES8bIPkSf/3rxZ5xj3pMJPXppKMTTszxyY675rfeF+D0KB0hTKh5xiqnj91Hzja7mfYce9fc8ujM6ma1BsQqzyOjdPOkbr0avWUDWezT/TWWLDcAC57ahA3kQ5erVJvYbHYmOXg7tRL2fmSnzZzEi2jTuTHeAHQWYeXFE4NbVB5k4nPD5KP/u9dSr/hrw/jKm51rA4sjfneKTmArZtAiRWzw9bZ5/Q5z1glUSjuw66c3qKRsSeSVybg5aaRxEWa2ZGDWESauKZZHMsVy+fPDAzd9l4Dxx86mRdmoz1cm5alh+6Ab59iv5AaUExV3NNqzfapxNxnWbKEDcxiufpqvjw1JKx4brp0iPELETWrI/3ON7d/0TRi+slX86YCuppL2ObPsheU477kXEfRs/aWlUC6k/c1c394Td7tms2yFsGFKWMIWdH59EA4biRaQbblKri0/+yypkYNewnQ9dW97cX3BPrs/bul/Y3odCbUKgiiu6zevlB702eudQ8EpkHb+KkSZPs1Rp6PyS5sTFeufuucz4n9Rc5kinZE7o9EIdy7lVibP19zs599neTXb7l5r24jbV53FJ2XCmET4yYD65JTak2SmpB7SBFDZUSNgLuM2CCZM4WZN9aWZJy7fnnfo2iXLAwzNRK8agPXG3d1+LrHrtdSHt7lr0JcTfj6F17/1qBNJNrQhvIUGLVweMQEqD3tcWhsG7W6ioD+ZAAQlWE/ibVA0LiJ/ghVy+w5qvMzFIIvkE2HqBm/7HhaM96+6oEEVAw+mz8/HLCK6k8tumco9cnJIPBy7Q3lm+qPzYcMopZZWPTZjr+ZEl4RsO1njSXwJNP95+hGjWAc2k+va5dccdUS2jp/pAWssEjlOqTWz+k7Wa7m9cdi+yErvdEBkEapmKNuofgJO9iu8+O/2BLHuP3KiuP9xCTuSChFZ5cDk7rx/WEurXmZ4XiP1nBdR3k/8TRUuI03/pa7yWBL+aa2/mG6PUsJXCQTg3K+8kngZkzyfjTZNRXEI0sE7S8dLROjn0D0TeMhnJcOxBC0yGei/VJ5HhhY65bT/0M1vPx8AhLSKa4DZB9WJ2rha5wb8/0Te9HkMJoWuPPf6/v9ho2+LsG9j0iqpKnLsb0eSh+n1g89MHbl/on4x94tVR+/bTm9ZCFx81Nd97f57Cf3rZyjRu5YLtjY94IG8VnqeDMpwx9r8jDs/r0TRGaux83fitpnCcmCVnPiVJzJ5nU3SNgst5Fp2U1/PD+KNfC9s1BOfZ6CKGp8AtyngXKmbo8/Oqc76YoGu3T+QlfonfCe4lYm49rvEFa82ouDdR35epxanPCgvD5/IffqV/zDCty1NzFKYG3edT8fFxenkBY93nTiKTi7kx9Fff7n/wJLb/EhdPn87/vC4ab9+mXwPg4CZTprFGKFOyY45L9JBjpYPyThejmtsQUb7CLd0UUcJ6pGr6FC1EOZf/iQ/OwpWPlkGaT2R4hb4woV2661TtMc4yPpD2pyFYQnx83L9YqNjXZRjdDF+z6MCbOPsSFg0aIunoxF23gFs7LS1Ea0+OX72WxK8vB2jtv2eojmydLFUGUW8dBjYvTsXjN1THqkQ14dw6x9isKoFog8jSb7jYOt07pKgeHHF53WeOJLrtwbT61tZZe5PCAQ4H90GnsuQqO+LaLdyFNjAeWp/THEcf8oeCtbq7D90EKF+riBWE5/mpg/NoeAGzPFzXvUvaAcI7vvJmIMQEzPmaaab29uoudF8+OJYItBPjuL9eBWUO54W335+/8DJ/9QkhgDsC19dFcx4605Ze/3bz/q3/tExwjQfcTef72t8BHrnkWtHK7dwbn5h+9rME59CB1fKcWtiyWOFbLJ4fk27Vr78zz8GehvfDqXx+bVDV5Z8zzPXy6vEVb93CXIs1TU+JWjevW+zqXf+E1Lxvu47SKHKvRq0i5Mr9MwNsmtFHxubM2GipOebd7ytuO55U+ac8JQ/7LtHn1+uTdNH59wx4ishFcryf0O3TM8hxZ0jfEF0Y/cbbPrIU7qifmNcc6rRvPpXByaK5avGPdP/nHG87R0T6nP9v3s9/MyBq3Zqu/uE8Mmepjzh7f/nj+K4aXeBVn/X3DmSqOV4XnIFyLLiO5ECwDOXAINHGTb5FocBLvOopNXA0QcKmgjNs6zR0wC503Fj0U4t+G1FUxZWv7J5RTTrKCbViyYV67Wf/v75UpwpGrU3OdghQwK/AYKw/QpJpOw1gk80iBFZCmyGEuwnxa88hy0PFO3j2QTtHQJhCBIqeMBUQe99BIPtUy0hHTvZHwE+Y05z0U+c6j3ph+oS8a0DevYPvbtE8kp+VAmq5f9GFBUh0XzU3vTtvagK5q2BRVvs0xGfmE5CbA6blZ/2XgvKSBFi8hjRu0jr4PBSbp42PWHMRNCNQnPf6iBL21hGstfl6FS6yfS2bZXJUI+8mGokZW8Ln5rd7maHv4x4yY5LZ5a4nc0L81/Ju/3dc9bADqFg2Nm3kJWBF1dTGnngkPofI3g58lqSbmFM843TDIUi2QSAlEI107Lt/WBZ+zR6amZIRfe6hc3Ex+A+W+cpy+Nr9y1rVjYXXsazUu1/bVRWv/ik7Ow+rbYOU99xpYKGViT5+h5uy5/s1O25RDY7cXXn12dUfO8e4wx14LjSq6c7CO+yZTFuQnajwgUzjd85Eiejlzs5j7vQiL2nmHZMEYyhfOaz4jzc+HapcbItFoh7MmZVAavWoCR09YX/kZ7PZNLVjRet7wDCZbSAj73/JzbIea4KZEEGvOSs4QjfksiXAq5vzi305EK4GiTfys0/ar2LEnqaJBZcO85ki+yRmcKZHJdKno6jDp9+fHdOybX1zp5nwcv3KYgpJASGJUBRUpsa0GHJKwl5PRmNMdOEgIWDeNkT9em9/E0PricQAUs5wORHnoymfXIr74SshShZXha5lmbJNu7DXYUeNo5o4Rpg+dNW9VNicc9ZJDjtxabJt1I04DxIZ/dd6tmJZkYcfEfZO7uc8K2pgkMSgYjMhJc8rNM7ZDRw05aFpja4tF5jFhwo3OD3umFYpLLz02ZeaY1F9T2ouyyzJ9dExFu+vdNMR30XFzHlsGYN3KyTExuxCti1N/6P7yYn1bP0Bi1bFIwnLqNLfM9GERm15i5Bw9WUQFmNzbD6mhxZKlPt8PdP+lR/uzNhdf/oqKrizkjCi/vAFTr9JDsj2cUxljnD9O+8nKHO0acA5Exy6mrBrnZsV6+1UgeY4Qh8P0+N0EQ6QRhdNaQlqZZ1HSjrwo4gX5+LO5Sy2v1Wfuk5OWY+F85nw6yhAs51F7HJ3zr86fGoozGkSUalS+c5915aRI/ezI9sbq+cNaaYn0jzM6GwnszXvr4xxYwd9g5TvcQlbzmut8cUpBfxzasdd017kQTB/yNsTLYWd+C+DF6e/nixJxcE23vtlzgRFoa6txeTPXN0FpoONiLm0sQLL/z/lpI1798gnArBtDS+g2FTV389fay9v5SGdDowKxM5Gw6GfwPWuyn2QiHBYEFLDSBOnkOL8OQY4ETJBcatqr8dyL5KYQ2B6OGRo7tt2bWsNH86nNDX1g2I0JTM7D6a++w6S7/gr7rJDv+y5tN4zME1Tmk5GkyU7OEGSEG7ahaMKJ5kuVzRVaSgxMtZwW1ogiH4AWvRbDa4HGXZQo7jRWgWRMUFLxixvJIvcfYAxl3khnQ1vI2SRY9HAufK5spCjRxvGB4CzNwpmUvlf2uzOCas6yeQ4UXPE885o0soXwuuXtA/qRGLbEjaj2KMd27HuYoa08NTgHNz80LRE52O/Pnhic9bhRm/SVXWQT/nmj2/mnoac/UkY4uIf4CoZQ5k2MypG6EFI+8Lda1dX94lzvX+eOKxfbdOZomt7wyqpIKKefykhbvwlxXsuFtuyhm0rKH87BCImunsUa6CrM4JbqxwMJi4J37dTSe9Iw7gZVp9gFTbZwdkxbJLPqHHPWkk+XzHIPyRtrtJZj9sLseU94wavn1dnXv/vPxo5VdVT7xtS63ugz5zZOuOY9XvxDzcV7WlKmOaxZ188/UcDu37xzElTmVSpSZN/od9rlyMY0gHBr/ESOiG//ChY0tqdG9WK+sQyR3joKYFyO9Sz3gKVv2r/17g8+C1qx8NZL8irPrpfnvZcNn5ZxfoTCGW1u+EDHLJQs37XOnNb5HWTNHoCiNC9fy6t8hgPL9nHK3e97HuKTx4liIvrEtAaN6oKksQQofOphC+lYLoUA8+MFO0K5l70zg0HvhUbpmNhiw9M1bUypqNitpbgK0RIkA/oqG7i9W5vmA/arK+EDwTgvctEHOfeLgcG11tdN3KQ3cya2zR3MbKRIbW/5JFSsPkSK7tjxu+vwS+h4OnDmaE7ovAQ+NpezS0zhrPsSYZQN527wjIRo7CQeJwNx6GomG0DGdOktfhpVcSmQm64e4FFPi6pC+LDym7/Gc4FyJ055UPRbhhbO6w4T4lDKWKyVU4uR6gPXQL2SRzhNfs5UqbRQmDcGOW7usnYvKcIP4RvJnMrtscuGCK4cxIiNwmZZ2KJ73Za8diHRUCINzmajxtanNREGbtlnliIHQzVrzh9BhOm/lmyN4HN8oCHw8Lo9DQu3RzbPtgw1S7/VnVqCbTBnIZ8eSlsnbNOpoRNFSMC0ogvcjpFzMrEos3V4YtFaxkWfE6L1ulNnzuFc23JtnzYv6JWjcDRWL9eg12qbWJ1+Qs9N970ONk22Z6PdsSsvw+cLEsAdYXSSQYJqrgQ7tksMapq8ZLN1dXBZ4jtcug/3YVVua6I+7J0H5U3zQcvz2I1tYoqHGoFcXHtWZIzsG9sp5mH1mBZ/+7GM7lWpA6vv7plkLyw0t2YxOkIlDgUErDftke63IETrBG2p8vCND5ovjjgo7q1Dx+VnqfYXsjL/Vz/T5pNlzxelad614Q7tUohctojeG8so/Um/VDb3rniVk+zN0/1dziRN4ZuvGYkHeZxA8uFTcyUaI837u77Zjlu5RZiecFINO6owbe6EyJvVZlUg5TR50ZrnvnqVooHsqjU3qSFbf13Jpxq8RW+NllONmQGTXFJfb3oFy5sd3j4oy5Lb8c4pZmgl/I/nf/uu4ZOLtOgXyV8OERG7bwntFSXj8LEUSAHT3EprCi2zZzPJ2A51c177Jkm+MmmRuJfRCWWRIi0xXBuK63I5SuOnSCTrgCsoRPYgaqF0bVMOH4ouImqa50e+EvW/XDgMk1fEv9aiIbrOvxplQxHXa62BfGmA5F+9LqYRPaOQ+qhddfW1a9ZRd5ZuqmRfVDXQXQmFeBHFgHkltzZgcqQWJZVcyCfATjmxqntqBzt8QaYeG9Adyn37iJIt4/awtOxsJM557kPb6cgQAAAgAElEQVSh2rhv3Mu3PopRPW8+9attN+NyLGX1XWoewuIDp3IvweusMdLkVOz409byTQzzUm4GK/fnt3y3TxtPGKdOAYOk8AYrX33ZfE7ro7BcFPhD81MbYxmz3JwonVFGSf4kq+HBGcNoOFgK0FxyNUoezHGUPUybXOqseTFh/fwxotwK2xC9TwnyAG2/nB4t2aSDpu1KgZkIVqjQADvDqJwLp6vrfWccX/Ne8zWhX8Pnj6CyhB5U2BN11FTHHdLXhdRDJjGxa99UnXBtTZJ2+aN7OVNC94PnV1NFw+f0MDapXzZNWsrn+PLeBKxlekVmY9TnRPYt6e2zS8BIlHPK/M9Z0hB5c9LbybNyRUPx+P3D+WvN1dj9ltCpx+pbS2P2DHAe1kj1kVVyaA0007p8Pv/ZdGHY53/qNJHp17NBan4TO3k2s+bu2EZbM9fuqiM71alzvbp6vtNqeTVOHYiTRWL//U/Pf5qJM2C+vys/hSi4AymEZ6CFoGmWNDEeEzQgV1T8XRCbBU/BNkPSVgKIUMHLZ+KaDQjpfXwKhbo5CLvZOOAjXnHjS/MJjI1+2bmymnHB7I/Ap+gSuUU+0wyxRSrjuiCbsEbgxxF7TKO4+H+CUtCUTGtpGA1fHkIvtzZMo5lD7Rtj7nvqGwEGbUkxkr1erYtbMwIOW9u4vGbylPrh/bEyeVRr+KWu5qjYX7TO/fmlcrSusvGBbVKbc7lNAuTpQ1cxFYpwH30zfKrPb/VpQ9N7ru+tDblAyCzQJkJqhj2Xmv5SfaQir7MrS2fihH/raXijWwu/Olf3Rm3vOiJc8B5MvIFw1azJZtX0N3P3CvecF9G5gfqABSKVI6brNRuAW6/XtZundUlDoCLfaRAOWO4F/K7WCVE84ZxMPJ2J9hY2gRW0dVsgwTOPt3tptRDK2jIUfqY2vgIIINcPUvR8mJL7xxs9wYnX/WyOO4eR5ck5VCLCXJYcYNkQl9PV1HSr3vhaoMJuokvGo9Yk6VpT90nHKJc84Zd/amv+eFJI6UsCZg/1j/lNIpylp2rXAlR/9hQLwXJxvKzXrafvTJ8W4wsH6y5Y6tI8RU18ZdiS0mspbPLHPG9AyPvUvdraRlTqm+Ilh+pFdoPbN0jrJhzXudnFJnBaF5Zsmgt6zXPY5fTaEg0NaD4v6Sksh/prfeNtHsuZuZ6rxYjWunU9hRnerSe5mI1tnGTlKSdyaX0w79m4mcjGXwh3A2at4uhWY5IRgVsoiLBKg5WAfGpm8gb1nFOzTbL2srE57J0w/az80/y+r8htod5bFfHTfxWmwsO7jWxNbdOHYzjoQsi5PzlD5byha7GSrGL1E3c2uIwMBofnMMp8YurOOpvDvgrXtnpt5h333l/Nrd1ucJzOgjd+NWmtzW/NuM+tU7Bw5JgDYq1NUDyxyuE2hxgLtXEjlncFsoypPShGxysac+lGTj1kJX7ia52sOX3QgxWoxo9HMOvvvAzWOKgdO2pDDOMoWEbUjRAtNjf74Lla2kme9l4dnIP59CsnabX7pDXKriPKam5P4Zpy45cl5vMiXH6uo/tiVmjEyY08EXb3QhF5ELTPO5l6CE6azQdp6MW6KZfJTGYfOttfr7ufPzXbCgRVGKdGjU9vADURfWZNFYblMxBDNJ805O8Hr1PzusL6Z6F8BhhETu5139v3CaAbTQcfvnM/myl9HRR0KiHnC3L001gf8P4YR54azH4x2qkHtPzmIaUPyeSXPdgClg2A3IQ7RPTyVuruq8vzxx774A+SCCXXuRJn+8QazMMt+r4PQGU7rOYNVAKeteW3Z1M1Ft/2mCnkiRv93CP5ws03lNo+efgol6xNLOYkm3MdfZt37G/v0GvNI28sms1/uiqeubjWk5dYKigUpZLPoYYvHvnbqCmwNHm0T9Lm1CvJ9J/1Ktb4cH6ViVZXn+0vb5sUthCcldQV3fb8KfZFpfYpQaI430HzbH250xsmr7t1pjA9KLpx4LzCFXPBdHBo1oc1QlJUP8RcFCXgPzt3vf1ga2HApN+SVvC0rjjEUpBWTesZo0/nTYNGwG/IRkAgOAqXMz7mI1jj2dGwBANTuZiL1iGJYTmyxlLWnOyzsUbnw1lzLfaiek6YVCjp1390RcRtELySp8ajd/gqLL6yyVyxnLU3Czk5u9GaH3z1soXKGM7gbV3gnfyRhKVzUE2wQrmPqqE5KVurI7b6H8iKVDFSjfqWtnSbOfnIPweAUzfQ2ATP96g+uYvP2B3un3PVcvnLOP1OzVsT86l2pJlU06EniriEXC8I4QfBcsghKNDwVcitsyH1R3KBeXqT1e433eTwJRfFOz3bn+sDO7rKBaZHK3SDzhw31sMUTWigXY+ZhEL2P1ns+uSM784rL2I6caAsRzJmPoqkP0fbhTGFE7/1VFxD2Nj9uBzlWG6DS8+1zw3dmnAnan2AlQPX4IZnSTmTvgnIXWwa2zzdD+YuQHNXlRymwaJNAoh3/dk0tf7+59s8TJe7RsXKNfmQmtOLzctXd6J+eZuv69hadr0aKEpZO6IULYewOX04DEMI24CsnxF1j5zceuxaGp819oLuN6a4wp2pW32zRtPhnajqp8yFmvcZ+PLLkz31bf5PrHCBN18oFlHX9qb1BPHBMs+kanv9g9333Pj/7L3br2ZHlie0z8n7zU7bZTtdrkpX9/R0vdA1IBj1gLqqNC/DAz3MI6IbHnhBQPcfQLc0LQQS3fAH0IN4pQCBhIREDw8g8VA1PIzgpWqA7haIKc90dd3LmU6n0+k856DfbcXa+/tOOp2ZvqQdn50nYkesWJdfrIhYO3Z8+/PsI7PQWaO/MkdwvoG2hQHm+ibzcHzZhxjFkFVKCS6hRsSCfU9TZI8gFy0x44AcjHADI6wHv5gMjPgfq9oYksnUOfLUBZaD38+FCDVHTgoOESgBQ3MihReNEKEv8R+bpnAMSgCTfl8rYePQJM2KFzMiwETMLc3REZTnr5MaUjNzkz7htw6TGUOYVNZgoG6NSzpUKSj3SRploW8sVhMAAAoNZbVrtAFG4Nb1AD3L3EegI84lVn2hnYKsOKpUfyg/eOJ6U2b8Q0OZ8axQQzeUNacUiv1viKUkatAmfJHiH/lw/I86elCXKRXd1go2/ONPrWjAPkyU31aNAKYvR7eqCyqjH6hCBFE32Ur93U8qEZOQ4mrY3ATYyXt71kIQ8RUt5fJPb5t+d0WGY/m5cGX3EK5YOXTmOC76oSPHhJWPbivJtr3sc59229OnQ6rGv+YFTa7UvJgMCdEZqVxA4yT8VW67OR7ItcbS4DRy9UjORbGLPKOD/Y0+2cZXuGjk4Ur6hAeauelGh9FplCODyQ64oD3+yS7dNIQniKgWh1gs1/gxAxPwynMA+OkaNuBRgcaXyvA39Rq3muekP2QcLwfBglptFjfustB81kr39LB8tiSVylKosOu+QlkgVC358UYwig78wBe29H/BChwibt1C2qCsyss+chSBG5NfGCUlxbiAfHygMbNkLO7Uzf0WMcA2Og8lJDZ/ux3irZqUo9NKf1Z5/S3kzIlzQPt2OxpZ9eidAiNOgtQlBY10tjYargLR6/GgVXG+bGNN7Nu4KgWUW/m8sEmb/Sk01Tjp9cGG/myeKAPu8nEjZgxkT3RZj6PhwcbZa1K3ER1AmZbVPMo7TOCNDoAGlgOFzdIDvVX47oRqul2cRobaAHYGStRWSllYR0TChg42HAWJFIFMtczkUJzXzATiAIpywdNAwC6UCRQxocYZ4FRXOkd36hKzLA5y0pmRkevIQq+iTLarIa8RwbcPeKWkeBDU5kBdPogNOorhCGmfzFrmEBb+wQk1LOsTNp3Rg9XYh4b0+LN2l6gzbPWEWFgPFZgDP5mgQUu+VGoYGl3HLELDuw8XL2agd/sPqBQPA0SsCrt4+cDfEozJ0IX8/ad4pjBkHVQAhPKUdXzTfRDmvqdfhh+Lw3RMxDahqMRadMjzejQbtttXaZttD5PwRD8lzzrrLVt7Z5fCJOt+hgLhL5/ENfF2yqsmPzojRXHxoiJ5caz70MpBn6KjBus/VrtwB23KaIvbpw9js/DX1UBCwd9W3oofxVuGFzz3CK0mXxrHS+q14peJvxRRa+hALC0MpcySF3Z6CBhTLmK4xofjLmMKZdIt/SJ9wEugoxl54zEtftiWLNRuOR7BGIIyanYgfsSodKZgiGp90wwLYIZAipLc9NaxFilRpI9CzzR2tsLQUR3Iyj9iQa2LGtgX/jK86voAEM8EuYNEOfFsZrE72AZVHC4CB2Xxp6TqO9lPfuwED4KIInMD3PixOiaV/hn8qE2l+7iqrFgzMt2HVsSkFbi3tQZHJwsHWaQIz0YQUDKfuL/E3z7byEcW6DQFPHerudcKVgtPiNlxBc9z4En9SRM/FB7yf/ibLfA6BZ8ZtkTP6CP/9Lfkhn8BBTAkUysPJrjGh0CRxp1RZVn8iHxZAp2kWBQEn4K6KW3YtiDQVtDrDkhKKC9dwsvtmaiMHZRiEOcfddJPGtBSKgnCMWhl+uBNPAbupEVnbWVUh0MWLM3knjsmtERD2CmSAr+kZXCwQ0VVnYs2VW9s3RA0A2+xjQjpKftWOpuAZSv70pIKy15qbGxRbT9gNjq4GS85UaigZNroXEPftdODoJBR4yJK8GhhGRTGo3yUA1WTIvEHF9IM31bOrtj6ghjaBmqhTjbhur+hBe3IQsJORauhnyZG28PEdexb91/kUda6TP0efuITCUiFoxZ1mmkZPpzIetLA/kwMlpck3HHNvJwIDYQbO8idHR+pcS1sib3Uc4DkC/CkrRr/Nd4oHDSSThGkjVZKUZv2qakxVnWpSRtbFKbESXWRCAri0Rbo8JW8yEU68pEk3IO/PJYWN5nRBrXibUxC40vIEy6jBbBHWXSq36tjP9og0oCJCkGNXSOdMT5elmP80zjA16JPjo/Yp0gP+E4pXGOnSXXyD/MjL6K0HLMdaPQeOvHUDhVkQj4Rt2/YtUe/kQR/+kdtgjUg0b8tnbCvvtr0edqzccahmaUNpJIr/vS+pEtDc08A1J+WqEE1kk7qNs2hsQRl7L/iq35Ln0IH9qGGktdRjQXwKP3ZpertXhY+lCc1Ijrdbl1ROQjCg/KluOttH2UPVpTjKnuj5xaPE5NCghEr3VnGdS5EcVLTwiHgqxpIMLp0hqztp9R1hfyp4y7fidxud+eVscOyMLUB4JknM9KLHSDbol9S2qz4pn1PXq4P5upiGYh8Bi7zCQCIAbxF9qOVDIuVSHvEtgZGxowJwa0KyLpGMxi56u7BSw7ROjGEaiJnppIqoG0Az4N75VCWk8EnwVJA+mpQy86hQ+wm8OFB/NsFiDKgk9r5okNRmzXLY09VqhH7xGVxOoiwaZqA44xUUEzlN+7bzhNsGx3FetImcuxqBWTuJA2o2CJXSFepSQYJVXawIzhHn8aR2QJ/Bq64YnX4sMo6uB0wgt5iayWKl5zGzXjB/qetJvLYBo3sH73OnPstfRSaiOB12SBA4yvUP4RMox81Kn2oPapcHJvAjfmOH8fZGKvD8+2bbiM/HzxlBq2kneBL/Zyu7EJZMM9AQeqy6JQU4NPmmGWbwRM0YBd/pdT6I4dlfc0jstksrGO5C82Nv6MSk145XfAjsuJAu+KjKGo3LrpUQCFqoUm7rPuwQXiFTpTrKz0WowhWdD+QzjASVRlH7p/oBFvwwTkhIMrzQkoZtLAPjrTeuA3swbkK0II1UgQ2yLPP+ehN544Y8BAv1J8ooKIMvJBTO1YIuBRcHS/HJw/Eh22wDogvOzTyaY99wz4Sv0DKD5Wh1TKfeqrbiib6ZhCoJf+mP8SLAqkCrtmebTz5oay3RZ6wo530RBJ/Vx9pXLKv0zY+LQTMdT1vDlXl4+IVn29+VQopE//lFTCCr9H+2CY5sk/6dzXSnqYZ2wKW+kufmKLU8y8vjAXypdvab4M5bII8pMxTV+El7O3SmBvWAmUX/ATlAyxSsTS8tu26Uq3OUBmQdKf4g32gsAAm0J14WTlQU2+Z4PmpgeBxL33VN5wzrNNZTQjATcAoZy3t8KmTML+KvxkSBdnpuLDvHhxIEYGvDqHe5cBbJrqW44obDpbKuWm21R4GohR61ccGQw5K0/G8aHKrnYFUvVv1zmUvFXdmDEsVbq9TkQEo/VNqBxuXzJU+TWd2LO1I3wx72CfWk3SImIEV4D/U73AFg5gIyWhycqJBXSqYIPJ2PH+14HiyaeuUekrcxD/5IYd9RP8b/QWbt9iMEWxdjQ4xpu5YTGglHQpfJEj/gx8+J/Y75u3XwpfVouHij9+06wNdE80+nVIGCc3byr+CAelIoBJNhcJMxaFEmXSn/jVmmt/aztg3BJMTa8NNJWoLHeQapotv2F8AQNnjMvmQlTBM5Q8cA6rjwtz4DEQNjH0J5dW+ekjUQ/uGZfMn6SbLwEOYmjHpYm180dfxr9anaS9u8A17CWxoA1f16t1gs7ZB9g3JsiVsmKqIfwmZz15mxIsm8xm505fRv7IRKh2zmxF8MRjEFezCgdkEQ/Dv4IKgkTs/SB8AEPJScKShIuR8WJsBERgO7CGbQ+bkqFyMbTBPHByRJ7VFswrMjMTxGeFY53mFIedtvJW8MNa4Bwb6eHyvAB3zRe+DnmcwaP9mn6UDwNSdkDFHOfFdqlXC27gdCig35lq0H7VpS0Yae64sE3GNNYZG+oI8Bs/wAxcF2O5Ljxe2rWDUUUAJEHLxJyqRolW6i+3uuAXWhowqDL/MfBSW9M8ETRxbcp5hoSj7deU36zEo98/7kSb8aDKHaPRqNmV+93oO/Uqe9QSOKh9ji31zwg5S/7XeFQP18fA3zxEsVt1ZGpDB4wodBsSFO1q0ywGE4aMx7EE+lC0/YUeYln4Mc+JIzI4/qtIgt2OQIxHwwHbPmlQKiCNGcOnDIvNwZMDOqUFLdnLCyKAYqJqOpdqR1Bw2xlUDdAQmhCzgmDfSTubVZO3Jra7pNHL70UILt9hr4oAqqYe+wJ8L/wZfDRw4lKgjR/0nXTiXcCDK1jCOY5UsZ1IeXupl8OJepkaavMwThOSIggqygHyygBFD+0EMg42D3Ezk7GCv9i4mvq1PZHiBNHQ0PU0NluzYtKAdve9odsnLIDOeopaPDNbMQT8uUu574IWP8INxkqti1GXg79E241BkmzCDXKk/eKmbTMggoAYlvQZBcbC3SvYm6UMlN39Y43GQ8cOUWivYQBNaGKxwNdRQnawUd096uKDvbmTWpRzUl8KGXhBhrecgUCKFQvGAbjE2/GJP9LYPwunI2rYFK/IyD/atea7qjf7C3y4fN5AaK9JGamv+hCTYjgBIX2CK9vBNBzJoFrk+SxS7aOXRg1x6zrFBsAc7Sp7bYVTk0cIyUgR4ukZbcHOVgI40GnMM1FodVOK3m42WZimrQiwlW7q7PxLMITXOgR1sOpZqEc/A1aa+GtrNfJ15CS0wA/PjeUboqkiy3MkokgiTeyCJNICWd0liKjVuUxZYybLWDlkj+UMQrMOn65W+WfEhEWvUItixNYERH3bKYNjxrJmhjf80D2bq03K34TsmjL64PC1PW9AXTUd2TaaD1m9BAnqe9uk21BiuuVPIeXikC8QKLA2ssNTfyKFnpSHXT9QIY7RjU+jleYoaFk/N7fRtVpwsDJjAgjQeKF0wy+mIGlABEDIyQXCdJsM4pIC0n1D3ctxY4jRAFUi9PoMrvFmnyQdZ6BksejORtcmqTZoCRvbK6ADuqSAyxV0GVUd7sbYw6dyUI1hDk9iGlJ82sKqjMsghV4cPatIPDXGuyFl3mragJmKJaLpQf0iVUlhA68MOJveSpYXRmB207eRyL/U8Xc13eFgw9naAnKM0KLnIeLRmwoB+/AHNVUemj6loDejgiSAkwSopqltGoCXfgx9CgsvT1ekPsV/xh36pLkwIlQOvqpT/Hx4e8g4f6fCHbInTmQZGxCUQiD7sYj51deCbsebhHXVGSrsIamAl1IIYB3gXYquRsuqFvRf0s61CZH/CnZkuhKYYK7iWvExsO95xAo6BhjfL6ZLCVdg1tYi5Fs9Wmh5U91K3dW1d2c9KZwPc9SQtJk3onw7AiPE4HXhk7CTYjRQpGVHhjZT/at5RD/LRGeZYlh9rhwHXmMA97/BxHHHyfARa7yBBKnHPPM1AyXMt6owvMnnlQ3TqPhAyRBrYcUNfcAzivBPH9sFycgRpsm/BLhMsMi2zsnB1w8gXSRLHjMN2M4lR6Delp69jM4NIoIDdK5sDfbBj3j+xhdhivLHeOEkpDi7U4yM/lOqRCYw4d7SwKP6aVL0XPwAnzQniEe4pzzhu8wMNQyvNY5nrOAaCKm+2o7uQltLY7bPdvBFCA/lPSU7GKfVKV5k/pdunut5hTVntT3yeX7ICruYdTJhyvKtC/SRctP6jXHrTzo0g8m/yko3c9I/KwytjJdSutW6QxnYhR7XroMtKd+pGQDTWOkv3V5qyHYxiuf2e9AfLWeMsU7tgM1x1eoTQqdPSSrZLAufJAsDiM/BrhByruG6f6MB2Y6EbSKBsXKFlmjDvESeuAVzgUYowE9BceN3PYUqcTGQHKO0CIAsyeaZh+YtqbXg5StoCl+ifYAnXeE1Cc9SSSVrhQEfk4NUkB8PZP8aYbSLHOsqJ3X54kyftAR4cT7om7B72xPGktyYGoK4JTsJRVx/bJX3j1J5QNjqIz6q12ahsDCQbmf5ltcuy6JUCyqA2/gsb8okvyq7um+kYNIwPeOLkAAwH88djEy9a0dPqDfDA0mOhOh4TYE0+wRNItLzfI1Jt1NlgtlqkoEnskVbqR+SHLsN20aRPJDNlSHd6Ijg0IcSV14NvbxfMkdbHbkUJeNRTUGvR4LXZRSS0GxpFVtLivMoU1igNo6TmRq4pM7vogzR9U31KXvozbjyih/E2g1iW80yjc/SojX2MQ9fxnZK3LMdHR7ZYYBE/diLOGPkRjoOnk6PNOPWcDJ3HLlbQo8Wn4CQ7wJbjlUETSGMfsgz15FDUV4uIIHQdH/Nj+wo3UQdKbA352ufpcZm+Ds9IigMCysSwCyZOqQ1wsFbVL01FWFrjOdqLEfWmDuRg3wcN69ESnZdGJkKZbzJ1cyYa8ckN0Riv1Cn6JC2fwKPN8EXqAJkyBw+NbcnJ4zprRttIzp3KsavZuYqzqFKuPloJZ5UwhGzhEEwDhYgAQXB1x5h92pMO7MmIVzXuQBPJsaMNfIlAu51PyqTftjo6sxyuCPH8Q+9if5JDW9PgG/yUvbqMftKLg8hBGBhHD9HCxrMyFC+xk9sQiOIiBUzOBA4TsIqs+KpOE/WYuNOeANrxUwZFVSRu4k2fGgqDfxeGaz7Td4egzjpQRjH35GfrNKDao63Q2SaK8B/pGgIzL92lkPo6PWYdaY/RJJk6IasX8Yt5SN37lJcdJoutTubgziwzbE0nS9dxlyr8CzByywBkj1olVDToSiocpbACNgGXOKK/VKbJQ82GXwyetR0PEg8M8ALv0TaLQ/zAauwksM9YQ+u1eaZ2P9Eu+ylhczn6pvlNdAEvqMe+6HKtM52rwR8StrdPdPtTzxSLQfcbqtJRh1LqU+KcvGWTL4Nk0yTQom9FZ3lK1I04+QW02AtW9fH2d+VW+oeZC+MX5LlhyzooYcxFq4bqASttXiQFD3ZnmJmS40j5lT72xb6IBT/Q7e1D2BBh6Y9mV+87aZE5LrpLj/iscDVl+GRypYkai3ibMWdWdgwqVD5SqKVHcqjV8M8jOuF4gEvywREmYwsfYNZzLL4Bt5ws1y+eWa5fPGR67cLB8sb187J7WZY3Xji/UJ+av2UbbHrr3tFy613Z+Oat++yQW+8dL2/eerDceg+7VW2HCc3YvxnDiLQwdrHTCn20q3RylDGKYIEEzQ994Al6u9s1k0sH4Zx5Rzem1X/gEsxlgqZB9r0LqKPXIuSJv/jR19ECciGO8uUfHH9UwTjb1+RTVtRlUEEuNRiRzpcMNLKumFi2YlRAl/EJBzBMHryoXgkSPcpjA/jom16xg8a2CxnYXH8IJY5xj3HzL1tNthqX0gzYiwbS/SljvC4Q8kdc/8nCvIhpMXMHRRc6XSTaRuFVnUkSt5fpHBfCW+sOi1v3p/9hE+2xb/E6BtJ/BNjZbE9SEzDyYhjN1G1QSWBg0IGG80MYlu8BJLS0kxdwKUOlgKQOhU06oXDQ6lmKor2IqYcfGYnbiKsspWTgGh8Zb2UNJNgZm2BGWtnpuqBbrqHGchrxjj9LkPDb5iMSApHnwEjeSlBu7BVr/WU8oSDPTVf6gleCIbHKpAxq2yyRdR0xw/mryi3Uruo9cKg72eocUyY79oOZRmKlBsjIdZWqX1iXBrJafhhFoZ5xKh3cfySpga3gC0akz5EGhrLHnQ/M7VbiX3e6VqLJldklnQRsb1LKsa/JVlUMmSb02EDwR24YqH6cF345tE6fcIAZPTPLqy14GjjjrCv5gDBDfugdHJOugiWyI3hRNjOqBgTw8fhP3xdnQK9VnHNF1OKqQm7QDP/UccxVY5cPqep/0KafiQMVJI9u08CGHcZ6YWeGwHjrP0Ob0g7qkK70Gn5EVcwH442uw2s8GlLQoAUPcxnaYZ70WERQhCbkO951ROPYNxKoL23Yh2m4DnTnxgP0X3n+3PJrr55fbl4/v3zt1QvL8xcPl19zimDpo/h8/60Hy5u33l9u3Ttevvuj95Z/9OP7y1vM319u3dOcz+/PwXWIM4zFGoGdJuCTftH16luABMbrhR/ZGVx5ixqLn7xnZSL7rHqQiLpd1hktlKhB38Zv6B/qENJrbvZc0fo/YxJEHLOtTopkrAkHaVA1w489PiksedhzfLzU43xiBz+RkPJFl28NV1AmUPiEosZ5lMS4wsd+yLx8N5EqMaFzi7KudSm82ETz1Wr9F2tSQiL0ppSBck4AACAASURBVMQ8SoTkXka7PZWYPxLBEb9PxWZOaJggi7iEFJwfYi88xzY7ATfqoOe+uIBECgmsvOKFfCUUIOW54BCi5dk/+L/pJWSKlqlsjBM0ybg8s41h0qGEsl10kmJyIuSjymgbJ16lWSTopAOMwKGSDATxJWcPiC4prcGf4mmE/xAR6+L+ivkBddNoKN5zEdjKKM+dFUxDhhT81ekpbY1bp8fhduxIs3LmUIiP8ESeyHTmzBOOVLU0/QAVtOis+YYdAm1+3N+h6nbTTgMq/5Ll6gd649DLOkSVqqh+c03sBoHza51Hj4VHBpH82DqksqUr1tR7Rxs6OyYn3U3v51X6NN7Dn7re696BNGATk9d6D2YDY3M1xqIglyEkIMWnKCJjRy1KX/c51cj4JyjhCd32j3/6S1uQwIP61xgOumvMIls2Be+k1KRirtjtUvM3XzahMFTrE5HQJTcoRgYgZ2yBeFjopu6EMfe5N7DINuLonfM0qaKVXOzBHKWe4PlIzfnMP6Hj6wDE4fkLB8vXXrmw/NqN8wyIEBzdvH6OO0i27lORIIBCIPXt799bvvdjBFPvL9+/ddTWpUM9DWDAgm+FwsmAjv4xoKIldD6Vc8HVYywE9Pho30o06IngjJR9m4WZfFOLluHrTo5P7EtBToZuh6R9qsnGzxsJs+UTHMt9nh+UJQZFGb87u0qQGP8hoRQMvWprnEF3WR7u29QN0s5LIvFk8G+syCRt4b4sYKu6ubNqKIwba+IatGVXxA6WKRl9l/HIdAWJOwVNvBNmocJZvSLWwTrdqGu29HimYOruuSJYBnuJkd+QeB0YHJxBwISO3T4OigBPeGPyszFlvCYSbQ1GCUoSkAGW9OMiEy9Niyw1GwKajNYrGmvcnhY//A1pTwe7yBWhVEkrUI08O59+k0EZwNZ04o0OHHctpEgHiIB/5W/tDmcbgYNHddG2k7WCrpzWMioIGY2bVMCou91RCEJ9ep3YCaMuh7CQ3PgFHOhadsMuHf4uNdifWflbmOI2aIsP2PXDnS6WxK67xbPCDXf1R0XrC7SxuaR1EB4ESsVi6kxk0Rj5NrKF9SbPVlFcHT2w6eUlUAKoHmVwGmDwHCcY2KoO/ZB+4eTGxQeF9vs27KT2yoithXW9klP9qWph5pHhfo/ONKX5K/XLYeaAXlJGRmhCZ/sMcp6om2uNfqy1zsENzZJt5BEHpWJDzja3ssWVsV0sBSCwywf1+AR35NMmcxE31IgbzhgpCGIz9EuCIODhIEn+iZdG0qMkyt9wQ4D0GzcvLl//yqXl6zcvLV+7cVH1z+Df7996sHzvh+8t33nz3eU7b97nrpQeyyFgAo6HWlvxwJKv1mAh+50YY37MDZlpiR1bI4CS/7BvPJcCfWCvVzHIbwEd5XU/MZ4cR3S6fQDHobxA0zHMqcai/AOtt74SP0l5JKx8NoViAIexruLH9TR1SKPDevDFwJHu6DP0DLsx1sZ8KV2lA+kaZvJtDcZqKzjUZ34fGnnQt8HBKnkcacwMXYJRGa0m/hv8U5hrt88lqrNWcx4hjKPzw61jVnNmmzRj66YPCDkUVAYdsyhgAuOsb4aAnbudRMM4Crc0vkccCVJjaFSqU6wA7ShlbB2bOWgougQvVjR6FCACaixvai95IsrEV2VUVHYzG/yiO2VoK5OPvAo18HPH2S6WBKtgYt2qbk8rybVg0rdgKWPEfLLYmKxKR2/GQ1EVJZKavBr3vlFd4QI2WcRic/qB2+t6JJvBHxgLkoYbNSGeQ354j5Jtbo/O4dEG4+gDt0czfKwQJ8TovyknnZ1vpb/thAkrUUCU/CNkYERee/+Y1ot+5HCckL+EBXfKy+CP3mlU/DWBo7qpauX8aAC0VJZLCOnWvr/DtLjHbaBT+iltSUTMhiPDwujBjAvY3gEq2mUpkK1qMXCQeKJlyOK/6YNgFF6rsYDCKGK7WWAfVhs6tQX1WWLoP1jYdu8Ao1EeeZO6DEYN9j30nkncb/JxBZVWIAh6BUfocJwDcmPvJCFA+s2vXlm+/sbl5Ws3LpDXk/x58OABdz7xRYQHR/ya2/LggVLw7fnIOXv2TLJ8NIQbmLNnVIa6s2fri9RF92EzCKC+830ET/eW73z/nnag2FcHPLjFHjk8Y7/FHGhHAA0DpnbNfvE4KDpoZJpSLj2qAiBPCspF3nNtVVTDTYOUi7+be/3POBk0GS/dZym4+w3cwTf80YnjDWwgwI6/Vk3yy8xWWbZYDY4/T/FwuR4GRdNKwda6qZ1v7BmUjoBKiFUrZVrbqMM0NqzBUmDZ9GnNT2dMSNBX0TOSRhOKY/+GY/plTL5jDnK7sPFc2m0XIOKFrhjr/4EeyVEZO1TyYJuOoEN7kme+ZI5JGewplKa509sCkE4cZj4kZ7sHv9AO6X3BRi2awNm2E310JweDhDICGNBQacNjP2Tr04lOWSitrxuskvAh3wQi6IX0MqiBk6+Hcw820bdsWatEBmPApd3oA6GTRtQkiBm4YT/V2QR/w4b0t7xMu5J2r2DfWAUWtI9+0kKOrHlBJf1ciCww/mQSvDyYY0IzlXr7elsdsqTCMz6jltCPuVJ6Y4hqNZlxN5YFtAt9iWaxUzXtb3yJMmxXqncu5ZudV/StJls8xxxLtwJdXGzdwcO4jJPwZJrqFNInhT2ron90jhB1YdkvfYPnGJNhy9RtyKJBjbohdj1OhbK4ZPwXT+okWSPAMbMiSp8LMKvAWmk7CDNJSr/MqgYWZLmj9fklLICc1nmXqp8Nic8zWDo5Wa5fOFh+86tXl994A4HStQ/9eA2PgREU3X//fQY/CIDuv48g6XhvMDSsebIcztgweDqDAEr/zp87u5w/f96vrfhw/L/9/XeXP/nzu8v/+Od3lzdv42WZPtvUdpsODhJAoQ+xq8RJUs5Bf7E3cGzZIbkzpTlaPU2vVVuqqNmV85k7Pz6V8a+FBMTbthu/5FhY250xS/50kTF2QGnpezg3PnZ+8XK5zeMVWOYbtK1Zll0VRffMSS5t8wRn7ezONSz6+pNxTIzYVvN/xGb8ZOzUuMsABoqZq5Cm4b40zFpd2laR9cV1n3rAmG6AEYhxGXxY3sGzG63Wf9e7P6Nj+rAEWYmDs3/wpxziaiaB9E12sKjYOAZtU5Kog7oPlUAL0gSNi40BBFUApIodZUTEuTlr+G05CTH6gSZTL+Q2RpOXFur03ADHTJlYv/SIhnM5eyjjEzudCoIoHWLaCGxTp4Uf1dGBmbV6FbCGTWQhjTN3zDtd4+ziKGX7QkzdjH/0hDJ2Nk4kbKL2kQsjCTltWo3EmKI0QBkUkQ8dyqY4MfWSrH1Ahr7q0u+x0gOUwmOjxUH3+pBOJyNQFjXDruMKmad9yk12CNKZ6eFs7+e6NaBw60AXcdBk34UtmciiS+QybX6U+nDXuBv6x87y0SoQCBonae3U9oML+6+lpAjmrdkKa9LL7l39drFH3z5Mb+oRGEupYaMG2tBd9JpVQ95UHVDY/2EkvndGs/moUY96GCcjQKJsK4BHb3QWPZZDnr2HL2OcHC941IZD2b//zZeYPurBbARH9+/fZ0B0//77y7337n+kQVHH48PkEUwheLp48fxy/vy55fy5cwyqHpXHd390f/njf/jW8p1/cn/BTtTJwRmNRQZRZwQ1x8EhHQX+A4RBhHw90qNAHzJnf0gD9FJ5hv0YNfDP+oYZieIZoXb/hm+b4jJkqEuTxXKJJX9kNX+O0UCuGbTWLBJXcxppRk35nIMG2TXWa4vt1rrIlMUqYystBg9oSX09Dra6U12x8xgwDwNC26qoBLKE4xm51gcmJVaZ39gzDs7Yx8QQzbreXefBJbnHWv9pV9N5iz87II/ksjiiUPOK+seOJQXGJA7l86w4GIg/BPrRQAwED9+RbwHlc/54mXWNaxHANCDItIiTE8EzOu6rGhSiKmaiyrPJFmgEXKbdfhbIDjqwnXvYt2q5upBewRB4qbfT2ZoJDDCxHX7XJLJdXRsf9gFxsEga6lHM+WM4uyjCAVfI57PpYBR3Ul6rFzRg6MIrnaS1ZKcvIsG9FGFiTv7sUTp+q+Ra083qddt8ZFWjjSkc8PbcDP70SfwKPEtHKi07UoYUH7SrDzofn1bGCaBdF60IdRkWaW8iTfLyk1XXpD4Tl9tTF5ObpLkSiDTmUCe9YwVLahIc9WxBIMpO2JJxEiFqoIDA9ZrE1r7GKva05ghJbfngZLWQQK7O+cjIwV7X9L2CXDbCE2scxMRUbXWmPirMXEJbLYg62BdAlbtjyEUQgN9uK9boP38bNY/dpN8IlvjojWT6Mduvv3GJj9v+jb/2PL/J1tXbl0+AdPfd95YESPvonoUy7EJdvHCeQdTFCxceOYDCwfH/6ntvL9/67h3uKuXcE52dj+YQNOUclIIm7T7BnxRQ1VDz60PUib55CXju/MwJmplcab/KuNCl/rJsMw7DEqncXP7bywcPz5nRrRP1fFs7WZzxgwvrl3mjz3mo47hiIxBGlzTKuNtlxHYGj0OEPDL3a2eJYw/hzcPW/8whtgFsMLa6ROQpL+8dpKoabSgnbXUkqVmmP+0pg7sVpIFIedvtRKyySSE5tQgYGupDAcHNqfWQigiY/u7/dVJK2hC044LQJiheV0cO0NTWUtlQ/dSNUMdFEfdjNZG1WeDAQsrbM220ui7+El7rLcKgFl27c8UeqSjhcjaBHccbehvYMW2iqT9Sinr2x2ypTpq7gU5Db2w9HNri3Baa5vCyuMBQf49LYUazhnPLlk7UBlzkolpwjG6KLnF6shBhcAIJJ6k9A4R15kG9P8BmkEJXvm0YmT2fjrWqx6KtweLrZi7ski/JNLQb3KkZ68kvcuPjmttcL9qi41ytb4tJl+1fKaEJBnXCrlNFr1Ioekdndp68PhM6sMdH1xqD8Gt8CuJ2Qa039tRXmNlKvMJXTS2D8j3BF49gbNntoHe3sOfJM/MI9Bd79rdUWE9kEBs/oGnVxA1tf/wQOAZD5ulL6/FFfWIPhJKxQWPvwB6dOyIZGBJW8NFXv6krKrmDpLNLyOMdRfS/k+PlhQsHy2/92jWdS/rKZZn3kL8JjO7evccdpIeQPtNVCaCuXrm0XLz4wWe18P4nPLb7o2+/tXwfj+wQLB1qtwkpO4VBh/vQwZRGAqDiAOWgoNdogqgu7WCWz9iJ4ldyVI6gTl55jl/7UY291ZyhNZTalPysaWPERed4NyVmvGW87COClae87LjrNuyQ6pyza1NDQ8HqcVh0PIJFpSu9NBeQnoNGxq/1d/9ANCsKvpFxeWSgYq2/SbOW4rLkad4rZsGZYzSISge+5sOTT+bPtIO8zBGlJnnVVUh96LvNL4PEd3MWQj3b4ykZVXwSqxQwZZMXAFK6sAIaFcIiMaLW5smJEjr4k6CDlyMoOOBvdaMwmic1W/pocamtUokUUNqatbeDVWFdI0ABZDzLKm0TOg/7c8gLDfEKa/Dh3KsJOaqz/VZf0qaLpRiuhiw7zRiL5fhqutUlIJeRclAqJGeFzlyITSrdzQeJcWA5+pRFHkC6kFOzRvTV52yfikdJsZipd2kYm5RirpDexMWdF/3XmJqXTYl00biQsDxav3dTKu/+Cm+kwgk53x0pO+zqxMl73Kjn4ZItkF5NXAPqLlpm8G84Mq1+WJVCSRcEmzAL+Khvg7psSrstvwIEFZ6Q4uieR1ATzyaVeUXMUEr+OHaqjSPnBLwaUvXyy5VgaWUf5QXsaebKDj+aRQDEydYp3MBnk7QbhkGm80nAgrQnR8sbz59d/r1fv7789l97/gPPJd27996CXaS77977VD5iE2Af3V8E7Nh9unz5wnL50qUPPAOlXac7y7e+9/ZyjMAI8z2CJXzDzofTsRocOqDSIfFMC3hEpwPsnA9WY3HYSB+gb3bPiB/F1wb9w3LFy+MI1/mEI66ZzxgLQUt7ffLyzTaHhXUx5khoXOzrns5UsV47Qhw9V3NoG6egS13EIc0nquRaOmfKcK0HNu0ILmGWhi0lliWkz52jT6K3EQ2yjUvmBhVpJsoEcNr6vzv/R2e+h0l2jAkZrKlIKbuSr3kshjrNnJQuIx6sc6fZlGGYDfDkr1mvyTHGXCgwiVU0XRViZfkCN0BiCFlSW1xq8aGjCjQNJDihQEJaz7ajTtkB/qfsLFgtNgH95kP9XFa6bWhwaZ+qAZVBEt1Bw262vNDXWrTiuVVq9zpQoD0xoA4Dx76QVn2ElXAvbez0oUCcLCWxpXimwmmxc1+MiCL6bBoQSCqugAIM8tkxVQW9mKQZG/GXpCmnjPjKwChi1mmIW2kwaapF7joA7G1avrLhLQtyVdUcs6urfsE8fd03IjuVwdwV3V93aENjrKqe46SumNn6KkYleRsP5VEm30/rwFaTTRvHoVmlZhB+qavrJgBlmh083qyTfuZGEywesTFIgk8xMEOspMd0y/EDluGx2+9/48Xl6x+wm4QgCWeQbr99lwe0o9tMlwW7TpcvX1wuX3r4axSw6/SH3/7F8q3vvrOcMGDyLpK/XYeACS/PlL+5DhMN/IZjw4F1un442OiGlf8WYWaEStO0TzdgEl+Tf8HDdGM/BMTr7NWe8CIpdLRhdSvhwe0xszN/rvSmJqvxNFzfDLyjEnlSw7vHai4cQ/AIaVdtpY7BKhtXlQOzGucbWcKU3aibePapiZpQYMb1xQe+I4/l7oesoewf6jFsVpnmplPXf8wDeXFlupI6tLvbEkjUrai1scw09aoZi0GEj61yewHgsvhB5G09EM3T22QXnuKsomZ0uwsXhTokeaZUWmrRoek8PUgC1xChRfJJV9z2X2SLj829QMAUcOPk652z2M0Ola1c1PZzZWn6A9zsi2tqqym6AZ+IUClMJGeNZ2fEfkrfoaLxDZ0cEJL8SV+dci0WXLE5INHec0alaJoysVF/rP2mJEZS+R7tJgMiZNCh/tiVRCNqTQClg8rSSUqlx66s9GGE6zrvh0nfJpBTn1dnxTh1hYtlI/gZ5o58YRV50lU4siyNCjvpLL06nru2sL1xWAmVtw4HYt8anygiE1fNYkm8Qj4Sn1OqDh56ARKeIbI/hD3S7ofhWfWEYIz/miuKwPKCK4Mu/+htdojss8TKluDty0TqBC9g9Dklptpd+sYbF5ff+8ZLDw2UcCbpzjt3l8/647YG9RNl89ju+vPXHnrmKYHTf/m9d+SMCJ7a+SbtPqH38MqC8Z4nDBH9pIiqNBIyVlW2z4DyuU1Av6XN/IQUn8w3ymsaOrXcPlj+m2ty8jjnfME/LK35RFf+C9maDJRr9GOWXregutIZFRyvq3UJGO0GfqJt4xkF4ZU5jkTWwbgEJ1ThA3zJ3zdELm6JLBExOiFy1BblW51b49oEyCTF5sZXeVA72GK23yl3TsofnPm7eNO3lNgaE/LTjBJ9cOqCxNI1ZrOvzFUNE5ak/2hRtEAq9w0nlag+pKmL46I2C5wmxeEAcQS2jZNaF5VFovqp99ZpWEkbqLoZYXaYqo9TlcKqyQClExTxmPjR8dGN1bwQoVh28BoDYLdRCQ4eRNEWn324oRzYmaDGRRRZPx8WWf5SG9tuaFPV0l6T/DYFOcrwidFJW5WzqlFfq112NmRHfBfcyLUN2I6B5Olv7/OeJ0cHD6FPPdL1I9+tDc1VbDLbtklKvqDK4R+QNOzvNqD943yi827bUkxRjgmkpy6g1xhPxjj9Rb9T2ejDYTfVtSkZFuBKl2vrRWzf1W+3pGNQ4594GTbk2Wd+tAZd8a6k1c6SAyfuLJ0sv3HzwvL7HxAo5ZHbnXfenbtJu93ySCV4ZHf16qXl6pXTz4ElcNKOE5xE55zoX4d+dxR2n+BX+NIRZjr+BJEGvJ4UWB3Pg5zjMid6rizfBKkv5KMtUN9aFR4uL//zzTKKJUvjNOPOo2xnp6ruIPvgMI/u5+TTXuhMlf0nTTmmYkrGmPWMHr6sobo7tqP3mA6ox2lCwHArOEI87nP58LStYQYrU13YUAzwbxV9XlrbIhPZFvRNf5XRazJrUDUFTCVcQMDL0CCfTFQUzIXFd4QGIcqCPqBHYKFuZtErvJla/phfvdCFcdIQyOfFwgsdNQ8f9E/JS/ToCd1ASvUWOcf0UgiZcEF+RWDuw94UxH4MrrTIgCmO6Zg0cpoWa/Td+V2VtIuAXFeKioDmlEWNSXXEhomb0g7wcJNcR0fYR7sgkyzscLl2O0snm/zMwY59m53BFTylZxlHgSxGESch7O7wIurmUv7IUhumGgaKQcMuIUOwYJoGSfpTJvJvq93Nhn63hswIFSdLMSe+sWWtoTgAb2LYRHvYFewg6DqH9Wk+u083ybCQCChCrgBtQvGB09CxsfVtgadLVnoKAHtn5qg20tQXQqKxtSYNhMpu/A6UDQw+yree/OkwshZBdpLY495JOmg7SvhGHF4N8PU3LvK1AHjB5GkfBEpv3brzmT68fZrtH1U5dp2uP391edg37RA4/cff/sXyX/+ju3wlAX2Gu05n+Lt2dbYJZ5/oM1xNR/CEYcmACn7jdacZNMZzOdxYjDUyfUNun85uRcZBmnnXBqzpfe1JA2QooKBzUnpcmHXWp2ppZFMyTENAmZqpwwckY55T2wzfjMkhy7vu5APYlME4yXyUb5V20ZKhdaFU3AhV+66VdBl/u97hEnor5Hk5iEuvwQE5tgDm9YjO8ygqA7eyagjWFDdkmMuqvN70nU6LivIuXWUJoSkURnXkOKsdj+0iau2kUjSqq/KTKpEFBepQhhRV7is1WxPBjlrIQbDpMLVpf90czkOoolRv50VUDjXkURZQRpE/VWY3Wy2OrYNak/hrWDAd3ebFKrUeeMU35Y6qVW4MaEP0VS8Cw5iYpiVwkLZJYVCFg0qwY4PzXDo5wKaZJGJnBBnL6AyM4p/ghXJhO2S5N+yGQWuju5mIvSe74FODO4M8aZehPNvLgAw1VmRCKd3oJKNndjmlJDTRO+VIY3mzhUVUnL4UeRl3ai165IdeIx8Jxd19sfrGmYnCP22QoozySmVzSh+KSNp3BVBO7EZwucPXY2vtP2NoBtakwYhiVu4f66gMxYCnvMlSo2/U9ytNVGvjwPgYb1rKm7h1PglvX0LAxEDq4GS5fm5Zfu+bLy2/8+svmPlugsdud+68OwOlXWieWsmjPK7DO5z+/f/558vf/3/e5bfq8EqCA+406dEcvOTwAEEU1FLQhJRjAT5jfwFdObQndvpXW2S3hsXlyDn8OU7t+CueoNKA4ZjD3FclrgFDktVgpM41RgcL0eWvxyEui3ebk0MmYwVD1i7iYJ0l3jpQN+mRcRatQlFimyzyGwN6iG458NOc0ApLd5RFEvJtvgx5gFM1yYNReEdnghyWvZ3bUlXm3dHpA7bxzAWf0hkmlFLTEek6MBIogQY6Gbwslo0xhPKdC/iZAH67xJ1iY2E0F80onJSyhU86WgZK+XWUWN1jR9OEGWgJUH4lXFYZK3WOOlJ2gLbkVUeZ0zC5durErlWY/76EclzRA4VEK8CqOnHDIBJE0laM09psgtawS9dQVgqTBvukLg8eTNPXdmxh6wCnKV9qtUkl9u8EQy343KmLbklhQJRnHhWW1kEKvdOSvR1wqDfL3jwQrMQNSbsrO+rqfT0I9jYKND3S9+l34SqCkstL+ydxzdmuMZGDBJaX/fRXFtg/10oIW9T38uopNdz8pW7AOwFtxz60LkuwXLSuL+zTlnpGhwTy6tbYj6YDw1WpgmkGPdE9qQQy6Ok2klEGBDuKhOTKxUl1OZvEPj/GozgE/ifLyRF+6+14+b1vvrj8zq+/eOq33hAoYUdp38+NGIqZfAQI4JD4w845feu7by9/9J1byz++fSynyqM6vDkcZ5o4gjCu8AgvO9OZY/GOp+Y7pT9ajQ99hjd544eom7sXYR8LGVvczdJALjpmxFQ6UwXdRPbRQLretqlFWR4a0mU9TsI+QnONVHPEmh5AcQ7pY6vmIKjZNibMjBw8d/AYAllLyb52RIdKm+jwVZ2sV5mhAS0+mRpbW3QdceCwT7AqYnESj97FkQc2fdcsMiBIc6l1QcAUHSiwJidrhcLSzthaoYAwVFIgQmEEWpwhYL+jZJeiNFDTiC4eAX0sF3tarDqRWreIlyzlHWMNjjSjSfBoryd0dD4cJy/YIr10ET/RhY3KVD9A9kLXdlGimxQp4RFajprglHwdtETGir/WuKaGebokToF+tG8Xbb9eORu6OvjZZPQ35PJjLJEvOrsH7fPgYlPTRmem0OXwgOc80D486CtqZB0bNyorp48adBFQmow+Gf+E/qnAbgLtoTdXKdqHF+odfZihErDWTg2qcbWxOVh4sqA6YSpq/qWStqH0dg0TD/je76nOWANbd8fKhtBtrPNgR21ayQbaOhpVLv3AgoYHWtOkmqjWThd+hU/zVzEf8nFNfuwTHZZfwUV8RRWfEQ//VeNVES+ib8hAh7HbvIBGYBfJh7hlFHac8A24k+UbNy8sf/yv3ljewPbSng9eB/DzX9yegdIebD7OoueuXVnwD7tP+z5/+J23GDhx/xuvHDg4XA7PnFlOTvSqAY5i+Ev97ArGtAImzSHwBnwy3vPtaFzHl3tec8LQZYzimpO2u6GDuCT18Rc3pzTOLZnP3HAtnnppCKii5yMqZZLT5lILyzgOfaWZGlHQ58wQeO7L+K+FxmvIXr6YQvzIbExmYWhBrUK6W+dO5jxwBuo0Zc9c2ufQcGfTZjuQ43zh9uLluQ5r+Jk/0KHvdNRgqqZoIBbASU4ExWMHJ/AQmRZ17LJOmDpOhmoQcAMmr6tNZESYHHJMrHIKTHjD0cl8tahJ+bXzCtSm9BDhsbCOKmMrcTCQMadwS3AxKrzCuIB2ib01L7bCsCkB2txllBPEGXI3VGPZOu/iFWn7dWz2R2ekcQX9YgAAIABJREFUZK+6vlgJweiY0TOu2YJ627nMc9vHLI5txqSLVz6BnXyw19MWFLAqSDYKqd4KlI1fr3Edk1xsjb5oFXOU39xR7UjoBcIluIdRdGftGIPGnFLku+6D4bUgcf+311oQvhUEkpsxKfnRq30bcA/uXVfpt4u97NhMWK27ty2K5yZQR7k+bScNXVo3FeLUxwXyCVrRNmOYKRY9tkUN+kkvlqQcH+LWawLAV4/jiKaDJtQ9fx67Sl9YfveUx2/zjJK77FOUIFjKjtM+tfCY7l/51g/1e3UHZxQwcYLTN+tqlyk3Uki53GqO1WgK51zJd+PC8Mt8VKb6+PLwU881mwakAwMzXF1vaOG6HFOaxDhvSLZ0G+PNpWVXliIpK7po3WhbQLd37sn635qCI8cZy7zwe3pmOWwIWG4XetiKT+IKTerB2cTsD+THOg/z+0f26IZYlMNO0nm9kaQhpXjsiDxl/YcpeNM3GdFZ5C7qCUJRPJOBcvx5AIBgxYsygpEaSIAyMMtCaG6h92VPKvJkoRlSYPKi7ixYQ72sEdd1R5zumC4jTpEOU0eCXoCtRFfHdQ7783GI1MYx4jjUuRaHOPMYDGxvE6ptwxP6hRc7gbRCQlgTCTvZ6PzUdZ7RcW8qQFVl56ZoL97yEw8YP2oLH9gQOcn3FHTCHcrvfmw+qVTrHSJcJEiOTiiLyc6Ga/qWA84Dvg+ZuAsx90QkOHtQSKElBHaJ3pp5TpDOUWRoUAOlTRxlu8no720nk30s9n1/xCU2t6so4RxrIJKo3vdrncMoEzobBM8BisjMm3w5No49cYeLUlgeq0nbfCDX1cKEZN3sGCp0bh3T5IvTyCTQ5OM1F/sQN/sMSPK34PCqAJxVOuKh7r/91SvLH/+d1/Y+fsMjt5/+7K15Rmmg/KnL5XD4ad+q+8/+4e3lD//BreXWfZzr1qsGuLPkx3Kc8bkLBUfU4MF41MKFnaWtySTaFvK6zwsh4DzYdp9NSP5hvfs4qPk5FOCYrCkorD8gzRhSqvk3c0PWHdmiOswRYNlkbySA7vT135iZBee4HMFgmWa12LxhvbqMPnt1aWYxa4Zoo49sQj7zW9IuJHoUuz7vpdPD0phwh0ll2cGQw+wsdlop1zNipBsndjpUZAgmPvbAUNoJS4tR3nIEi9cynNT4YwtpS2MRcGsRYpc3e2qBlxB2W/g5paTGs4m3ZmPxccEHJtELhLEpYtM4NElJa6yrDzr21jFjKHx2UxHKB4RjAUhiPQZDWXyj85C+umNAHh8FmAp6qy9smzo9k8w6TS+iPXykvmbfBdIh3cFVbrTiyChPPinbVQNlsnBCSbOMDVsxp0gUVy/4ERUe1S+o2HyIWweUjUFUiqgF50AHlTazm6KpRZiHp/xbUwi49Wa8bgGKVBv6Qefov1FZlzEyvmobIpvSdgS6qa0btCn3GDQGQiCa7+lKKzb0NG3kor7nLVfzDg5sSx5Qwzfick6J2Dtw4mFvBlTHy/XzJ3yf0u/+jRcteSQ4g3n77TvzZZMDkk99Di+/fPGF5/Y+pqvdprcx8PS7cwsOhXOg+Drl3BHV2OHttrIaP2NKWeER35fvaqYEQY1jT9hmxdmAtB5nY1SYrQYwbzormPI46vPESonV4IikUIzx36cn6kjSrG8s2dnpjh3htkr7+r8JkGpdcIMPnIdq/kEDoWIoSuSO/v2bcMRZuPcgafTI6BMyhO3u094fY50BlbCk7nkPE/ui9ZomZxQMAVEgKZ1kGyBRYWmhrIQFuJUcWp7tTy8e1i8dRFl2FBmthZ7KWzvkYRMl1VrdjNwiznb646YeOLJXNdY7Cx2x6WXKa4BgcnbbzZ3ElmNdU7B5QOBqsZMRFBm3iQ0ppJKiYz8MQ6S+nS1ON1JXU6aZp6gFGsEfVYV7dNk027KCVaUmTYSe9ru2ExXsIn6ddi5orI9sHbx4ncuWhj7dV3TxDxAIfpIWfG44JKJrQigj0tejvKQpY3/t/BWVdpvC1wHrBvv4/fr8nMZi1y2SqaFtQ9nQTTqHDjpp7MSm0TVFIwa6uUkeaXzWKTFF3p/MGb08elBmcHST8isrL5qIiX7SH011kHSMf4gl1OSnIEn2+f1J8NwjPJ7DsocdpZPlgG/pPl6+fvPi8vf+zv6zSnj89tOf35rnlNKxz1iKVxHgYPi+D842/eG3by0Lf1bFP7Pi36frv1dHt4Zz4f96DK6bxTH+N+fv4LK+EdrKjq+nXC6vASsP15gl74wTDjk98ahRmmERRtvUzDh/Z6xzbRGhxkskjsY1jpoN0llzDig5J3mXHmQZ58UtTJyyHHk2JjCcElHOTzUcvFI15g3UoRTxgX7CKHJHuTiWKFKr7zjmUWEewlH8MJ+VCmycyMn1UQZp5rw69J2WDMBtpAmlzjCKxph3dgwooisV2VGEUfuYg7suKxQtOgt2nFOoGRh3WucR0bTLO0oqg9eY0rzresVAztvlqFqa7N8VeQhfyIrc5lzlCF122PSgyTagKlhUk60duS45ogT0wEMLURQScZwu2Ne1BK5luikHTNORmvm6uLdre3qTXxacmgFk0rAUMY4NTLemzqZXO7f0RFFCPIllAlC5aGM30uqwiGLZfvwGpiVFI5szbSkoeMlPEwY7JKCDzDLYQkaosXUGKWUZlQ2JS0vz4iy2snGr6/YaAsMXKcZ0PqDNp2PFUs8VPaiDr+7iLO5gq/GpTgvrKh9iRZB+DBar0B1aDd1wRck85A05+Lab6/1TJngxJcr+6G/tP6uEXaW3br293H4bb5Gen2cZATymu/HKS6fuNv3mt360/OPbR8vBGewy4TGdDoZzAPEgOL5FB4eEV2GY+kC4x4bGxXBYFbebfrbxQt3m4PJYD4Q+t1OOQZdM1VKW5Z7aJ70xicw5Y8gzhcaadpuogsekm3BI6XEkTed1wgpY28Ugv1r/wYR6avGPDQk2TtUdFZ1xsENxxnCb6TQPmZu7QEl2yUb6UJm9UsCs9JdIcYYekAtPUbMkWPA86awqcAGjbAQaUwbv3vKVvEZko8uxEM219uZUCfjxs6VBOasSaW+cUq2oWvhDUTQBK8hnh9txqA8qcY22FousRONvK2Rr8ZMoUVksE7rmTrF52C7hMDhQBe9GRVpoch0Z0R+AMw9ZDkijamwnD14AbxHisGysiwap25WRErTwf8GQeKKe2puVB5+bxYZw2XvtCSQ0TI3fsN0520BnM5bxFTbhnzGxUGM4N7V0JzMBoXh6KpFYDoQMzDiFSS0b8mRH0y7+2owAjc3QDo+vVSqp0R32MI9gwOGpJmgztM7gifpwhljmA0/IMUxodO6CUQFtshUfzUDnxmyjvEtYh5uD+oS2eRB1yvgHbfjQJ0dbWYxrcI/DSn+JaLTEGP0gral3+pDKic/gWYRu5PNJlONgCXekCJbwDbjjB8sb1w6X/+nffH3vwW7sKv3ghz+ZwVJ1/LOdwdmzf/qDHzMA3lqCH0v+k99+dfntf+bycnL0Pv3j+Pj95QBveqf/YCdD7+PCrgbHH15i6vmawwqlHjRI6bdyaorjnGGfz3hBRR9nGtcoVGm/UZHLew6PABsCfjsf86ix3ebulA02mM8yD0QjmU69c5ayxICmLpgDnfh5ruXaBK3GuCQvCRJAG/27Gau5D1yqMvppngGCvUo4SbvMkbzK/GkcpBkobEf0DfuyEPWJOagItQ7ZmYNv/s5/gBIUaDISkGAsIpTqP9vLSTU4RD55oIHxYluDKgXETXTJN8WsBDvXnUnQxKiMYD2uNg4yOHL2phOWPasFJ4BrIYpNhkmXVIuIW3Vwj4S02F4PnUJRqXWFh/VWyLPzqfKokW1DP1zLgVwGUptJ/JOHwOA/2JFY9qUQ6criUhWZYAsS5kmqtmtPGM0651Gq9uJhDeio6zscomIGa60619aeeuGbUZJUE0HI4z80oGszbAMp9ErbkeaO0u3cd4XJmt3qijxZglz0bSTmVU6QQdT0XXtIa7vKylD93SCmwrIrkzDukCN+xapfdFszK6Es/0KLa+qcAqVuXoWxhT7jCUo01r81QFb/3Ar0eISGcgI22qCH+LtgWMzCA/pSZ6V8Y/exfgsO+W/cvLj8N//a68vXbqx/5BW7Sr946+3lZ7+4zXfHlfIz85lAAD96jJ+pwfmmw3rv0rI8f/Fw+c1fvUw//gdvvstdJqx5fFOT5xUAQP/iPOHRlrpa2xpMzYe1fnowho9JU4o5Hfw5guHHng9KRGPds+XzXj8yBMiIhJEg/cV2lHVeyXOcmZF0ausP9B+TFvOlcxjExqw/KM96J+ZFGf1L76phI15RB45ng8oFz/3RZK14eR6Vtpx1xKuv/8xLIBChHS11A9nrSsyd+YzXCqSEwCgOC8OqarCNMguF9e7wroYMB/XaDQIIm7XqbAeugqXGlx1HpMeOVVwhErpuondJ0ImjtWJkzXY0J+Nwb8WOpcqkUcVcOrGJW5ES17bgRG9J4gpBPjWg6DgSEjyjWmi6CgWXtOlVzg/N0g+daFtW9qwYb7TGwPduDaO50HqXhTbb0ffpHPlpRh47qLmPeJeBxTLvRgHj4fUZ3PLicFZpPFvkCUB9ZZPoB2g2YLKA8FqnIUOaLWpwlENZNRiG8eNhUsyb3pBXWK9slzxYQC7kkZ2jpksUiX/bkOCNFItGzgK0lhEgO6nrTq3qaNhunXQTnlksmNJgWAvl8BED2snOdrF1zqsDxEP00R9c0Fr97ncpgQR+l13Q+hbcEd/mjWDpd379+vKf/MuvDEHOYRfihz/+2TyrtIPMZ7MAB8Lx7qbt5ztv3lv+nb//iwUHw3GOiYfCcyC8vlWHeVlnluLD9HbPe+GZuTPjmOUYrwz+x+DReMhMpdYa26bhcAmVuXss1RxS7JDp42vkRUvOpFnNmVGaYwoXYai11eIinGkoWlPPSZ7YohxSc5QpbcGjvGwCdE5t/qs5yLZZGbFV2bBSPDzF1tQq+Qm4HMlZqT71FJ/oHpVoguxIkZ/S6hJM2EU2VjCPBqUmo2J1JuVvBdXq1WIoTXXuNJRLTSfqKztW6tATQ2dpA6mst5XSiVrQCFxvnRUTKtqUxuErs6sddYEO4EFkUGVBpehGvrHqMimLj1KaALISr/w15+amou/2RTz4Z3hRZPknEWJDqYhFeZSZY+Gu61EPTEDe21B+eFCONCUNhBioodG+/twdEJEROwpSKOVgocRSxaGn+kEDmQv+KkDrtzWyEH+lL3wIfEan6wo2JTgV38geJoJS//A3n9iBa+RThxSPs7Krw4U8HkTm6fEmOyDQfmhpP6W64Swb3EqBKaSSnXHOfOAy6cqL6lvoyr4tjWORU5D7rrdqAkoK6Nd2PrEnvjW2iBgCO1ciIcywBf/kb7LUrmTeECX9YkwqkIof/h7jzdwu4jkldxj9gj+g6583OTla/uhvvbw3WLp9+53lBz/86QyWhOTn4i9eOIpXRGBXsX9+4+bF5U/+9ZeXrzx3Zjk5esDXTeBRrnzrSNf0MbyOYtyo6Palc5L/cpzRXy3Hc5t8Oz5es1JRcl6JL6PUcwu5cHBoCGl+llxwCV+VgHrMG2DHOcpzfKcFS/2TJajTuNW8KE6ZZzJ6pRfqqBek1bxiLMDUH/KIoFTv6BxqYTN01A0may2MOsIofFaJZAIP4igK02X9dyFM6PWZmQiW2KovQBQhSrnXhGyATX2WgZr4LECMfGceoTbArEsIimVgCJF2VaV5ZCUFCeWwryJLQIRmyHJJsUXGd6K0yy6QTkRDkOSfVUsxNSwHaERsHyqUi0c6d4WTm4E6/wgw2qSzHABVvTjSYWWRbAhfyrFYkspvqz+pjuujk/oyOquP0yBwgIb9JGJpofGigcbOSD+eKJCkHPAVN5tbjhr5cVylWWTNQ5LEg86XAhkRHinlyBa1iiReWrtv4hsgIG42HbxQJ56Z5iAnAZhZGlNpIJvJ6+SEgRDa5x/KY59a6y+5tkmVpdAjY4S2GuA0jEBf0w6XMc/4wQbT7caERtv4dWhPXBTVwYmQkQoHjwEXE6pyChqnGutdrTE2gHqjjY/Gheq69QP5N8zENsET+gYSkg5b0EfAAHfGwLvE8hszdt5FZ04O/BMnONz94oWT5X/7t99YfvdvrH8HDoslFs6fv4VHcGg3P58nBPB4DmfVtj9pg3NN3/63bvDRLc684R1dOt+U80x6vMvxTz9T4AR/7H4Z/9R8M8aY3ZvzB+kb6DX8M9a8NpDEDDlmQxghHl+5QeN8REH8w1rwANuwltiMO1+RQHZkDHPeYdssWOKp+Uhrk1pLAFSL1AgkVp4zi5YZUzqh3m1uAInKciMrw4mbH4/FHs4NXMwH1myvWYNzFeaj8KN4sPO/6IzUUkgrvENIhdT0K//pn6aNmnAuzuICGk+Og6OQEXcyGX9Q2AkNJifZQbU31+QGwCi9hysQHV7Q8425NGmKhhFoLA/ZaIwUV+UsvB5/enOUirP+slNcogUjXAb/wUm5yK1yB2q0Px5BQYryaaaJu8lbvaSZrCnexcflYSb1my3W3vBKFzQeflAO2EV0JWJHZBLhaGKBuSz0q4DIou+h4ujnLsDlvQnyBWhlWtmWWIOSPsaqxj/YDIaDucmAi5AKNLkOH/V/IELp6mOMUIYJD3rwh0EDM1P1O18q5B4Cfe978ozICIiwCE8b1Lss+rNpg4taW4BIHWyCh/mHbb9mnsyaMPpQJisNV/Zp9AiD6E0J4k79OAY4UKW4J3YYgaZ4gR7eq4THbtxdcsD0wqUzy3/3Wzd3ft4Ei+SPf/qL5f7990vizHw+EcCj6RdfuLZsX3YJ7/u9/+Xny3//f77Nx3MI1Bc/puNvz/HmBD/ke8jxCpfkHIlgny//0iBQmbDtblxjB2P++GT5wbu6Gcg8hPoxjDRAOBfW6PO8lYH8Ad23Gkek7eNLjTUmveZnHQb/ss12UKbXNa8PqNnOR9LaFWr60L/gWHPpsL4mq60NK32pQJG2YEdl6Ydas/Zpkk4hr9LeE1YEgN/JcvD/ff8HnXwfu1k2EZgITAQ+MQRqMam71RM+VsEOEf4dHenu/+joeLlw/tzyV3755nL+/PmVvgiSECxtdxZWRPPic4fAae9s+ssf/nj54Y9+yjN/Z84cOj2zHPKdTfiZHu14AjAsylmYHwfAt98/WP7s1pnlT28dLv/rj84v/8fPziocgr+b/16+rNyt6boooMvNCoKi7Ko6MEDSbtISr4QHA40WrG0DGwaODqRKE0aIm0iq7pSKam8GcjXerdiKSjpXgLbRneUQC31zs2bdE+SoCW7ifJDbulIuwjYHiZlzKLHpPgOmVYfMi4nARODThkAenWESy7/dYOmIQdJX/+ovLWf4UsJhxZ07d5efv/X2fAQ3IJm5hgAOguNFl3r9yqj4yx/+iEET/AkLLFIESvrXHhNjkeaXKcZu6uDy4XM/uHu4/O8/O7v8vT+7sPzFXf+4MFd6L/uJGPpCvneXxrtRbKboKgFJZ9GDqhYbUfGx++Odpa05iijGboxVlLRG3AW24nVW4UzKErThOkEU2TAoElVMCxTr67FztWNH3yEbAs3UEaQf5SX+Q+UMmALWTCcCE4FPFQIJjqBU8kyxq9R2lxA8vXD92vKl11/bCZbwIsq3bt35VNk1lfn0IXD+/LnllS+8sPOiyx//5KfLP/2LHzFIQsCk3SYFTljQs9PUF/eef1JL/4c3zy//+Z9fXP7iLnZNsMqbIwOVBEQJT1IJmhF8INhTwBF67DLpPGCCgRHPKMhIeOQ9LsVRDjJgH/jRTkZb2qWqZ3OMXvRIDxoBo8in9lF3A074UnvIQKZ2vyRPwd2QT/1sdtpTL+8wSUSsEXyGTvtiAybhG50kKFtzSmfAFHRmOhGYCHzaEMgki4AIefzLzpLSIz6Oe+H6c8sbN7+0o/4MlnYgmQUPQeC0t4P/7Oe/WN78Jz/g4zjtMiFQ8m4THsf58RwWai7WD5HxuFV//GcXuePEoARMTgk6dvmvwgM2jI4VE4QfAoIKhlA4gqfdR3NrSZHC0hF96dJ8MH7HI7x1+34VHTovlQ0qxmS5tDzYkx2yCpESELUgDs0aKfMoG6SJDCUgQRquxhuZVDf/TgQmAhOBTxwBBUsKkqDMNmDCuSWcWTotWMLXx+fO0ifejc+UAqe9l+ulF19Ybn75iwzO4XeroL09Jo6PfhRG/7tfvbf8t9+8s7x+SWeQtjsrp8lMYIGAQ3mFNgkumPrcTufhTRtFFgwmxuMt0IELeTrPthAAOWakMewvZ5heO1Yaz0NeWiRVTfFnEBdB47EndNe/nD2CXvoPHIKR0rHjBQVLkvOQNQrLbAot2hkwjS6buYnARODTgMDpQVIWKi1aR3wMt29nCcESvj4+PxOBD4vAw4KmN26+vhwdPWCgHl/EIeqTtgP6UQZNX33+aPkv/iUFTVzgbVz/KTOVtyXekU+CCzRhkMSMghC0SXATvHoZAg4GHdwpCkULehKVWUiCrfCQTqMdrtdlaZHHbiNNQITWCsWkK22ImWjuTSHiz8Pb5sk4yITII2t6BUhhYgkgyDe0E0HFvhkwjU6cuYnAROCTRUCLjXTAgoRJUamCqARKKLtw4cLOYzi8Ywkvo5zB0ifbj8+6dARN8KP79x+sTHnpxevLl19/jS9OrZ2mo2O+o637aYKmbRCyYvaYF69fPlbQdFk/C8TAowUFQ6YCAQU62g0a+yYjQOnPo8CL9A4qEtiMXRu0U/DEmMOxRmSq1hGZg4wejsBksma0sx8A8EowpXQcwB7f8FPgU7yTYUCkC+qOAK+/pJQ7UrKdKjBrhKoA8qJpoku1Qel8JLe/32bpRGAi8DEikEkXIpPnIuTD3Xi7N6716oDzy6/+yldW2iFYws+czHcsrWCZF4+JAHxN/rQOml5++aXlxqsv1+M5fPkAwRN8tv/LNk58+THV2NuMQdO/eGd57RLGRN6TNhZ1BUa4TiQxxhQYJiDp9QiKElwhiCpbKqIC9fgPfFa2+VHckJhgQyaEtmvZWJed0K1kh5jBDDiHe2laR7p6DfIJ68hvWEY5xZZGmGsFnZDvCmWMl1rNgKm6amYmAhOBTwKBTKaR3R9x4KdmcGeJBQz/cDD3r/zyl3e+DYfHcDNYCoIzfRoIJGjavrvrtRuvLDduvMydpgTySMdCr+U6Ozpb/34auiFo+o/+ubsVMOwPPiBJoYQ2fMY5pvaUSXozSlJQRP3QLFHIHoVVjSArj7kShjggw7h1u2LlAKTYncp/+8gOhNh5SktlFEc5jyoLRDlCu3wU5uVqpKQwGdqwn6wj2yMIPMwulQhnwDTwm7mJwETgE0Agd7y14PD34vTNOCxa2FXCP3ylGztL25dSIli6++69T0DzKfKzjsBpQdMXb7yyvHD9eZ9n0k5PHtNxf4ML8NiF+SiCpn/hpQcLDoOTd63+jgCwY8QAImELego3H9BJj7v3950fiSXoAH0nDHuUHehXClYEOQ+Vw9++1lvScT5oMMO4z9hX6VpnBEiqR6PUhdJ8HODgivRQimIkKKGrqb1H5iAvtpSuUg8y01/YwWux13wkFyBnOhGYCHz8CFSQ5EcaWKDyLwsQ7t4xGe4LlvC7cPPM0sffb58niacdBP/KG19arl65VP4Kv81uaPwaOCG/DgyeHnq/9UvvLa9f0XkmRUiJSPqODHRQ8DGCkBE0KNBQfWlWwQQtYDH3jBhAjd0j7gBncweMWgBTW0ItAOnBBzl3ekZTCY7GI07wAWuEM0qpziqQYZDTivsOU4/SFEA5CoQo/hNmxMj9RT3xGoTDACHmc4fJIM9kIjAR+HgRyEKCFJ8sMkkTOB0fHS83v/z6zs4S3rN0++13Pl6lp7TPJQIJmrjj0BD45V+6uZw7e5bnmOSv42d74scg7/nW/Imzz507Wf7Df/audkS8tic4g0xFFRpf0mPENKxmFRomMNAODQIJBBcKPHK+STR5xJUAA/JY43HMqAZ5X3fboxsDnNDvoDD0Db1I9Qgw5JBZLNCEIpGJLchFW7Xq12W6muo3PblT5d0sBnpNxjz0HehnOhGYCHycCGgyX1ZfyYZ8lOtOPWeXjpZXXv0Cf7qi63f79jvzPUsdkJn/yBFI0NQF4UWWf/VXvsIYAX6bA+DDh9tOif27t38a+X/+pQfLX39pHE7P2ApvBjTe/Ek+uy7aFNK+C8tId8KzOwguFDQl8AhHtWZY4t0jBR98hqYII1tB2F1zEMLWLYga3BSxSDcFOyNQ8m5Qdp+8U1aBEsMjP0IbcVIFe4qjqJ3ER6j1Ix/vYMVWWBf5IU86d5iCxEwnAhOBjx2BTGV5lKGF5ng55gsCT5br159fcF6kf+7de2/5+Vu3e9HMTwQ+FgTwxQKcmesfnKl748uv+xA4gqYHq0dzCU7SZhvQpPxxU8QJf/PG+2yuhX5EDgqIvIXigE3BBmh0pgkNGRwpupAaHpgJmhBM1MfsSe7IpSTW48cwcBCFxu0gePFKxoFaxyZBS2KvkJLGAkHTr0MDvfHpf1PHNHqDQFGTEzN2vYIn3cih3QyYVijOi4nARODjQgATXf7hUQfyCJiQPzo+4iHvL79+Y6UO7vJ/+vNbq7J5MRH4OBHAmTk8Du6f69ef4+sGGPAfx4/1Ukv5tr7E0Ns8zfzf/vJ9sau4Bgu/Hy0xNEJ1VXoHxY/foohjhZAxSGIZwg9XIvE56JAzsMljOQQwDsAo0WNcItyigpEI3qYKghgIMZ4xR0ZOtmE88UtUVEwU3Gk+QaFUHiEfOOAqwSU5JtBz8JTHilE1wdsMmArmmZkITAQ+agQSIEHONq9gCQHTEdXAIW888sgHCw/ejYOgaX4mAp8kAvjZne03M/G6gatXLi8P/LM9DJ64i6OdnPj7dsfkadhx7dzJ8te/cMRAYARGDi7ta29fAAAgAElEQVQsAD/Ci08W/8jVLlRo198Kg86OkURuMiT4xxCo0zjCIJkNZXuUk5gKRPQqraCsgpkcVNehb8UyOQA+7KA91gsMwYe6Qb5lJuTDpYqplXeXrEbX0UUywbRzh2nVX/NiIjAR+BgQwASHiVifnFka345DYITFZ9/rA2aw9DF00BTxSAj89Ge3doL3N25+cTl/7qy/uq/XYWjXyb8Bxx2X9c3CIwn7ACIs6X/zVe8ykZYhg8MajTWNOeytaPcl8YSCC5FyWI6h6Ud1KEihFEnggauqzZh2ANVV3gZpvS75sQek+SFtpHcCnBHjxJ5x8rsFUT5/lXmmtIfRdSHJ4MyPz3nx0SGDJ1ppC1U5d5gC1kwnAhOBjxSBmrw8seIa2bGzpKAJP6j7yssvrXTBI5DtHf2KYF5MBD5mBOC32PFEgJ8PgvybN3GeCefw9JoBns/z42bQZRykzdNKX7uioGzwk14JPBApjLyoWozD3ZjUU0dHElWGSKOiixFDsShjGmx9Q4TyQz+iqyAE9QOudX7FPEFlrEGjtmNUeiCj8tqhqiLvK7kZxULPatvEk8bvhcrjRepqubRrWc5GnZlOBCYCE4GPAwEFSgiWdK4D1wqajvgm7y9tzi3hkPcPf/yTj0O1KWMi8OEQeG9ZfvLTM8urr4wA/9rVK8sXXnpBh8OPtHofHMDXsXOCoOaQgUsCkQ8n8HTqr17Do2rI6xEJZOoxlOSP9gmWQs5HWQ4oKvggN39TLTswg0XlGIMg0EB7M06AsqpDC6vIt2hHODlFbwV2PbBM/gDHrslQtCgnjrjk5tHJcgCcERzm0ZzZSqxflcCdJrSVuqINEwPmB5wUR/0OZsBUPT4zE4GJwEeIwJjgFCjpDhJv8FawdMI78l/9lV9anVt68ODB8pc/+smyeX/cR6jnZD0R+HAI3Lp9a7l86eJy7dqVavjlL31xuXPn7vLe/fs6M8NVFzsYCJbk+0WMtR6FT/j54mUEY170N4EI4yCeYdKubolSFOEgREFHgqUEHbzeqKfHZ6Y0jwQ14K0gJoEH1Gp513f60seZBEJq5kf4xGitP+SMR3meY5rtBauqdHid8Z/OZlHXEp7oKQYNO4jqwQyYCqqZmQhMBD4aBDIxItW/PIbTLlN2l/D7XJcuXVwpcefOneXi+TPLxfOXVuXzYiLwaULg7t07y+XLF1fB/htvfGn50z/7f5eDA+xk6B/8H/5+eLj/APaT2vTc2ZPl9gMEMgkktAOTsQf+CtgUDFSw4ThrtBuaoC0aVcyEx1cnumIccuKfSBlNOM6LPkJ7fQtqKsZr9chSLuxwsIPMSSKgimmyY9RDuLLKekRX0zY54U0K26lqC8BFds7moe+G3MxOBCYCHwsCmbx5tgOvEDjCo7izPOjdFXjnnXeWd999txfN/ETgU4kAgqC33lq/nwm7Tjde/YJ3UPsrBnTjsH509nTMunpeOycJH7B1pKBAQUOCpZKWYIQFaKWgQiGXzwY5WCrSyoyNKQY3iT7ymAw8UeZ/0AA7Qju7aVKtVBqZoTODFuqhb8mxxmeTRC+NI5JpD8og24/oUMe4y7qsxEdftEVFXSs/D30L7fl3IjAR+AgRGEHSid/ujUdx+YbcyYKfmOgfBFHYXZqficCzgsD9+/cXBPn988XXXl0uXrygF7Ge6PHzaixgQa7dlN7y8fPiyNXeTFDSohznccPSgxer0h5xqZlaKxArrVqU0bJVXRlFJoxQin8yg2ilB0MbtutnjBy7QDvsNKEt/2QnDZcO+HyAO+xVqqvSNQygSx6RUqbopKKpU37AE1RhO9OJwERgIvA0EcidtHhiosOdOCawESwdL/hWHO7G+wd366Cdn4nAs4QAgnwE+/2DLzHgR2pxXu+EL2Y90qLPzZf1GOntHjvP1R4RARZ8PZJTEKKgQ7s14K6zQYlpVCKpGKvjozzGLT9i6zyiEwQtEdfbiSR/Gbis+LaaVg59JN9nl2BF6pmCQLtELDeOVCG6UB3vOnmziNIcA0HLsCIvVEZGdsGwU8bDk8OmucOUPpvpRGAi8JQR0OxUkx1mpvpGnO628Sjui6+tf/rk7t27C+7W52ci8KwhsO/RHL419/LLL+rRHP3fNw7thkBjZCzMj293nlPp0RX4JA5I6mGoeMr1DC0cOSHPTwUuDLcUYJGhqvnX5xLVoj1ug7DamRn0Yy4YZdvcoOl4xJ6mGxoqXluzaAEUK9yEebNEEdUDLTBYc1CAdnDgV0ZYyMnJ/GmUDU7zciIwEXhKCGDiy+SHhQS7SpycWK5XCuCMR39B5XwU95TAn2w+MQT2Ppq78cpyeIgFGLtLfp0Gd1qVh7IV0DyR5jnYjLE3GFXs0gOMVs+xmodaDHasj88NiXQ8luM47oEGBCAYdKBEeiuQeKXOLzW5Q8N9ubQcj+aKqvGQSNFmvoGs7IglAMw1eUjdChqLr6MoPqrcnMWCyLnDVEjNzERgIvC0EMjExYk4CwQfSxzV47izZw+Xl158YSXy7bff3nmksSKYFxOBZwABPJrLGIC6+Imf1268rEfS3AHxDYRvKkKb9ElMVGCAACJRhbdRKijzbk3iEQZRDivQxE1TDX7IgyIcdT02kRAsMSCiDD8GdJSWNhXBmXECmW4rAxUWgGjsUgkXBU4od1wjvfiETlLI2tdb/tJfz+e2dfWCzcIoW1DWjoHjDJh6X838RGAi8BQRyOSPO0Dk84+7TUfHy6/+yi+vpN27d29+K26FyLx4VhGAj9+6tf6R6Fde/sJy5cpl7jLl/WMZE0mflr2KVSqsqUBH/L37xHiE0YX2lhIsMVbQDo1im7EtpesRijGmAVPs6GCM5+3e3l2iPE0AO6YxEKOi4ap5wuwqAFMQJVsgA9dhD3nIIwBSQGQxjJ/4p3aaGF2ZHnzyIb9cZFep1dNaCpmHvgPTTCcCE4GngoAnqUw4LVDSoqCzSy+8eH05f/7cSuLt27dX1/NiIvAsI4BXYmzP4r326is8/I2ASuPBj609TmJvX9BT9ihpdmi8vnOXRsETxmV2aLQzpMDDgQMSxCQOPiCLuzCIlXDBYMi0Ji192I7Rl1n40R2UyDxAhnkOVi2JQQu/6ttywkYBFKVWzKbACTbRruidyM0qCofxWI4Sw8jiZZdsgw7YZaqgaqgoEwTifCTXcJnZicBE4IkRWH+zRRO/FgWc3+BCcXy8fPHG7kHv7beLnliVyWAi8AkjgEfM/YO3gV+7epnnmLjTysDpeCzUm8Cpt32U/Ai0HIgxHnAU4dgAV4pjVK7gg+GDd2/UlvtF3h2m7PFkb62KyykbzMBW7BKZsQiNhiZrFhXgFME45M3AzXYkyGMstmZRckOPauX9KNHxEEMuB0BkYZ2pP+VrF4tBInacmpx5hqmBMbMTgYnAkyPQgyTMP3mFgNKT5cXN7tI86P3kmE8On04EsMOEb332z40brywn9Q4y7TTxCxHejRlBT2/1qPm+vKdNvr2mOgUMqVOac0q8CosEL75WUIO4hKHUYMDdngPt0MCGBE2haI+5yMN2phpp5gxwLzlsh7pjBkMJllQf5cQFV7Kh3bB510n2jkCOtNTTgV3yYMVASjwgh7JacDUDpt5rMz8RmAg8MQKYoDInYiLU4wcsDPqHw6/9gwVl7i51RGb+s4TA9gA4XjNw5SrOMunxdG4oMFYSLDHmyCD6sGBULJFAaYxHBR3jGqwVLzCsoHwGCnj/UAIlZPg0LbstfQ+HkQrb1TfkrDfV2NhA+1oAss800ISk0wcb1R8yiKKOipbIikHToR/FGQeGd9GDjxwlVUU2MgfaTRf5AEeYidkMmPb12CybCEwEHgsBTGacvzz589p5LBAvXMfZpfPFe+4uFRQz8xlFYJ+Pf+Xm64xUOD5ynskpYMAO1ON9EhHokZaCi3BCQKa3eysg84aKq0mLQMmP4RAWRQvVKVxIiMFmflEkw60wVQzVdmcYbVEYd2yiDjd0wi2pKiGvPg6g0lbBjOudpM6TD5tKnRAovmpcFWuVHAdpYs72pPVh9vCfAVP1ysxMBCYCj4sAJrjVJMc71+wq5c3eJzsvqdye8Xhc+bPdRODTjAB2Ufv4wE3D1auX9fZvjh29Ab/GkeOH3ubR7Evg0UMDBUZY9PGPMipYGfQMMFqgpkdckrraU0oTVCGYQeoy8Mfh6QQYVZdAJPGLrx9uX/iMwE0idVNGseHLiugBbSFZKf5CDksYD/qxYchlhq4qgBKHZhqy89A3UZh/JgITgSdCIBMkJiY9gkMApTtl/RzE8fLSnrNL88d1nwj22fgZQQBjYvvbiDdefYUL+THO6GDRRrCy2ZnNuHp0MxMoIUhQq54mr3BABAyUmE3Uo3ZdNquhGxXVbk2CpOjGsd9vnDZ5KgQRvTyNyTkBUuSDVDrWVhfCGr4TCbTQIztqenS21lltpbVsU+BEJUoyGDHugqwCA63QXn9DPHeYgsRMJwITgcdGABNRTW6cE32YFT84esrZpbm79Nhwz4bPIALbXSZ8Yw67TMdHx3rVAMYQ/uNYkoHbcfXoZmuxVwChm5c8lFJM4BuaRCJ8auYAg4EbY4US51CqCnkNckYaKmYgk+u0pLBGh/INzSoAYoDk4CY83CRVSIVUqQMKhTbGEBQMCnn8qu8WDUtqy4kYuNxBE2WBgDAqkIU6M2BqnTKzE4GJwOMjwLlRMw1vJnWoVY/jXnxh9+zS3F16fKxny2cPgX27THgvEw5LJzDKt+X6zUffNXlUq9MmfDA2VaadJwYpiBEYfCTgUSwT2ugEmdxncfDBfGIVj/cuj3kHHtrmUiC2EyjZGMpJ4MYy05O3d39MC5UZb3FjSYfREw4p5MFV213zI8bojMbSrwyQiuBPxij3Y8bYIECowQyY3BEzmQhMBB4PgUzKmF8yySbF5IODpttvxr3zzjuPJ2y2mgg8wwhsXzGQXaY8tkY6xpMCh1x/GLN7GwQIGo/igPV/dV3P1hiOkKgCpAQRKE3c0w6DpymqwNMxGIMP6uBD4aW7CEegVhVqn0sFYOImXYNFKBTE0bbab9IuE3Q/yDflTM4gCvkEp2GT40yavGJiamVT232bAVNBMzMTgYnA4yKQSQ3pOMOkO+erVy6vvhkHGfgZlPmZCHzeEMDY2AZNONtXu0wOPPp4Aka4frSP9lk6rTZKKpTRjkrImOr8D0MQykml5EKydm20T8OARJs74tWCpZKL4MnBlkRYf1xwx0Y8i57Fa7nQZwROqMM1Yx41ww3asXeDzAh64hO8ElChjOo4gLNqUMJ4DNnSz7tXoIcMnpuaj+QM80wmAhOBx0VAkxomxDGpa8LX+SU8jusfLBjzvUsdkZn/PCGwfRR9/fnnlkPsiPisX4IlYNIX/kfDaIxBhiSODBRv6fEWi7izgvBC30BDEKTASjJVk0deDKUYXEAHBiUWo58TYYlGvwOL6E79IbAilGGFwq92LSVHQXLVfDxq6+yod2g9B5X+0Rf1nKK8C1aNHCjx7NPCb/gF82JpYWg+d5gKlZmZCEwEPgwCmVi0o6Q7tTxSQB3uzM6ePbu89NILK7bbbwutKufFROAzjgDe/t1/Y+7MmTPLKy+/xOBonGHKo7lxvumRYMnZnvFwjM1GgDGCDo1fHWJC2CCattPSgo0RgOgZVoId8nCwwZbOg1l/vQCVaLGcbrIeZtHQIznol38K7nQeCWW4jk7gygDQwVPKk0qqcID+4A99oG+pCIYIDfM4jtczYHpYj826icBE4AMQ4ISDWSUfTzC4W8ZjBjyO65/33ntv7i51QGb+c4nA9gzf9eev1U8IaacJsGTRbuPrg9Diop/HVGqXgCKLP1I+YmpsIYlBB/5gDLf/SqTpFWToggEG+IUoc0ECp5jBegVnLHIAMpqBQ3Gx7dEpVEKEMh0USVPVo3XqRgvYekhrtA82aCnRQRJsUkBl7KiKglUGd7TrZO4wdWBnfiIwEfjwCGiC1+SiO2T85AN2mI53XlT54MHRcu7c+eXwzJkPL2i2mAh8RhDADhMW6XwuXbrEmwuUZQwxgPHPp4Cu06fdbgqe/oo9QgAEAhSjvPjwL5tGhQomHLNwR4mP11TAYMK7VyZhe8cV660fMFV0poiHlNzGGSFNBLsOeoLX2HlqUhjAgdBlZq/oaNDJcu2FkdrBG+YnlKKeUFCQ2CUrNSyoWKYWgR70O5gBk/trJhOBicBjIKBJHFMJZ3ROSZqkT5Yrm8PeWAjwLd8LFy8tly9fXS5fucY8HknMz0Tg84TAvsPf2GXS2PE7zPCNuQZKreOtbDerx0gq37YY14hXGLNUkXaWeMm6thtkLaibBSrwqMYJRRgoMehJQISgpZEdHOY34CoKKhO4x1OHxXPg24qSn3RSHKTHcdAp7JFKR7Xli0ApXhShg0Cph8dy2lfyBFa6rDPckiPtPMO0RmZeTQQmAo+AACaafJDH4ze8oJJBEb8ajTd7r88ubQ96Hx4ecrfp0uWry5Wrzy0XLlxaUDY/E4HPAwLbb4rirN8ZHv7Wwg8MuKBzl8gPjNq4Ow2jMTYzRlvw4V2c2snJbg03XBBSKBBBAMEAxi+A5L6N32EErglOqAN3kxSFZC4A/5IOna03dQNvBDr43bo9H9ahfdm6phM775iRlxVqvMIfKZGzPdxjUmxYOhV3GkZCbUVRflmhc05NxsxOBCYCE4FHQqAm3Eat+U2PABA4Xbu2Pr90//33G/U6C37nzp/nrtPFi5dn4LSGZ159BhHYd/j74qWL/racXs+hQCOP07J4PwwMrvqNIDsx43EXgwgMVm2cmFZhA8MLDWSdc9LWy+BXO0ALD0mzwvTRLsFSAhHNFbryXjR5j4BosE/AxoCHW0nFxQGUpHDjClUWyuzW9KobsjNvuaoE0wQzIU0FfGoLvdBm3s4VZDMzEZgIPCoCmewy+SbV+YuT5drVK6t3L2nnaTtN7Zd29ty5FjjNx3X7UZqlnwUE8CWI/nnthn5fTuPLO7d5WzV3g7KA91Yjz4DEAYxKx5hLsYINhS4o0z8HZSBn4DCCkcF97OSAbHAWBfk2YgYeJTTauJWTBDCoVT7BoXehHNQxdnLwprwFsR4KC5fOTxQqjxpJwWOrfwpUfqKAkAGiZZ3MQ99GYiYTgYnAkyCQgAmzLw5Zvvji+t1LD46OPjR7BU5Xl/PnL3gy/dAsZoOJwKcage1LLC9fush3MvHGA1+c8BkdBVAKIh5mkB4/KUgQ3XiNAAMaVvnsjgOwBCCVIvgAndmQZ4QymnCoUed/ipBnmDQHWHdGJjuhicItBmujLjaOoGc8lkugE6Vy7bCPj92oPzfOvKuWF13ysSICpCEL5kDrlNACMGAhSv1IMY/82GAe+o4bzHQiMBF4RAQysSHFPxxg5XSUs0x4HHf1yorb+w95HLci3HNx/sLF5dLlK8vh4dxt2gPPLHqGEcDY2b6T6VJ7LAfTcD6wfzL+etn+vEICxgE8EzR2k0KvR3CKHiIFZQwgdMaa3w4b9MkpFZ0e77G9dUXQg38sYyTT6SHPwYnZ5VEdA5U89iNz6UwyXDuACUvqbx6KdhwY2RhgFd5IGYwZC/DStfWhthZqnjAnssB5PpIrsGdmIjAReBQEMqVo4tbMhImF1yd5HHeuWH2Yx3HVaJNBsHT5inabNlXzciLwTCOwfSyHL0twPGFP5AQ3I9lZ0g3KBxrLoAWj1N8W840N2imQWXNIQJBxnQBDVBnfIzRhENF2ZxJRsD0DobYtQ12GPAVQ4zo5cNdn6AwQGNCgIvGVyYqtd5TCR6SyJHagCflTLT2DJA4MCx0VEiNzISCh08+vsOZknmHqOM/8RGAi8AgIcM7yjIUEgVL+HR0fL889d23F5XEex60YtIvsNtVE2upmdiLwLCKw76dSxrvNEiwh/WDrGCQwXhCxbmpQgOAjY9UBiIp1QXLvwPjhldp2mQlEwE0fplRsRDRpJ5Zq07kwj8ow2VQOnVWh+CXE2s1irINq24T5gO1w3f7jrlL4k4X51JyVSu8kaUIT1hTMbahSZO4wDbxmbiIwEXhEBDDt1MRYk48mo+eurR/HPXjw4BG5PhrZmTNnl4uX8IhuTl+Phtik+jQjgNdt9Fdu4L1keKSdL1BgnCWAgh269sK/MQzBgm4mRqDCdR9ncvrjJW+sjIBDgYbYrcIMxTWOh8J1m3Iu0KZM9m3IKnOEL0bUBwZhsrFB+o+dJvBgQBQ6Tj5iRTYIlvwDuaTlQzjZoODJDSnPQhlYjcdtRBN/AFb9Ht7ujt7Zo+MPfxgzes90IjAR+HwigLd4891LR3j3kiZ8pGfPHC44g5EPJrCjIz1WSNnTSLGo4FzTu3fvUv7T4Dl5TAQ+KQTwTqYrV8aNBl76eucd+bYCHm3IMCBCQIB3GG1iJq737UYmtiRQ8uYJi4sngygEETq3BP74ZKcKaUrCDwFFgphse+V32Ehtng5N6sZKgVBxqcyQIUngjU/StBtauil3l0ip3TPaUFKpN+0gufBa2U0ZiI9MRbmKJFGG+S2yLXE5e//++muNqZjpRGAiMBHYIpBJTD+4qwPfuDtGsISfPfmgl1Vu+T3JNX4j6tLly8u7d9/xwfMn4TbbTgQ+OQR2A6ZLy7v33uWPV+PmAP+wo4pA6fDgcO/uKsIM7Erlg8XesQeLerCAkChjOWkFDgyfdFg6ARoYJJ+QRGXaKAqPEgTBPvitQIc1O38YkFDloXeItvqjnPTQ5P9n792fNc2u+r7n9HTPjOY+uiIkgRCgu7gYlwATDBIyIaZiIBgnlq2ChCqqyC/5Z/JLjKlAEkPZTkjZcWEXthEYCRGDAxYISUgIAbohjTSjmZ7p6emePqnvbe/1POecvp4+fc7p9Xa/Z+9nX9Zae73vs5/Pu/Z+nzfNGfmSRdUuW0Wb1e8Mo3Q7uwJA+iIyhjCB4u6ONtqv5cmqs/ee62+e5AXqtD3QHriKBzDBYDLh153PEJJ2r+wsl1H2ojZEPvboIysBly8ffnSpKhA0daSp+qTzJ88D22XrRx95ZLn/vnsJCGfPBpjuMTAhwnRmz4oWT0/ePRt7kbxktbnqm2McIYKf0EAnNqAn/VCcaBNhiFEYCcMx68BEdjUlFAoh7KAuCg94SVagxW+xqSF1GGR2dz0eVikSRjuH9fkmnEBKuifwqRvuq3SGv0bAeJLnsh2keGQPlHUSzJx3CyZnH7j/vnrc+fZAe6A9sK8HMrkhVYTpLPdevPjimSXPRzcbvo9iyZ/Q9JIHlgsXOtK07wvXhcfeA7m9wL333jtsfeyRhxZEns6dO8cIU6JMjDQRThJxUZcKLbnWJ1WLCUc4Rt3OjrGIBwKHGb5RxIVUZJJCa5xvAI2wxjA4yghrpVaKRjPp9nIXjU5ViRy5iPBDuVpSS5wLNhF8OCQBHOHNoCfgkRC0gxrMW5Jn4V461HgFYiJADoAQJSehvdDwrLt20h5oD7QHbsgDAah0Onv27E3f3TsybjbFJ278qO/zFy6Mr2LfrKzT1g9LpV/80heXz33287zwvuKVr1he+5qvPW3DPPHjwb3KKjBhTxNuOYDzLE8MMufdvl96IFzoyxBinBBJARjSho7DOOSBNDGMUGc2kSeqxKU8RI31jbrYIljx3iYYaaBDPeFl8+rAdvYVh2xqdRhYSupSRcF4oLERiAJlTAcNEqpiA/UhWhVtBjvaNxzhSjbSsuKEpmVpYIrzOm0PtAeu6oFMXJx43BJ5PPEJuW5aRTX2NR3lA9+eu/e++5aLz184SrXHWteTTz21/NIv//Pls5/73LATr+O7vv9vLu959/ePss7ceQ9s9zE99NBDyxNPPEHIjXU413iBT8EmRR1Zxd9YS3XO3bH0RKYhGQlcDEvj3EYVlqn8T/GcoIZgSZuirYH9HaUp8MLN4D6m7WwuucyKeVSaZTHTW8Y608FhA3rw7Tg84pM6ToSVGBEr+7VEWxms5RmWhim0d0bgqMB/+nu51Rudbw+0Bw70wJhMy6fc2ngLTJdvw7fjqr798ufO3bvg2Y9luXDh+eUf//wvrmAJfsHr+Ovv/83ld/7j77WbjpEHtvuY7r8fP8Sb5e91lOkgs3Gt53lK4EErQY6ZYLWOhnb4x1YGJABHoCN1qWdDH6BvgjDQQSlZpvPyXeAsIEKoQZ11UV4YDAcyhRm29XtVeYGgxqemGdN+9sb2yEHK2FI6ZTBDp6GLxsqoM6tvIqphA1Mc12l7oD1wTQ9wkvWkk2/KpQwTfH2g/k48cHPLfZcr7oQxd1Dnb33ggwsiTAc9PvDB39bF9aAGXX6kHsD5sr0fE/Yv5fxCWh/bY9ZxF7P2+6g+fTaRKQMVMSLLZyaWlVxu7La8EA3sMOhEukWMSM+wcwff6pvfyEv5SocjRBVyaj3yueN59MKU6NS4K3AJfiBvyLGhsZfpZgxYelO9yI99A3fU178ll9ev0/ZAe+AGPJCJqKZbYLod91+6HhPxafK++15yPU1PbZunn3lm+a0Pfuiq4/vKV55cPv/5L1y1TVcerQe2P5OCZbn6wPmWZy1f54kKI7qkeMzmFgMkD4GMMMERmLK8RZliJdIJIzkDmqp42MSO04zQjCEEG8XTdTaakIMxKRq0hStFvEafgJLtkhp9Iy72cmghI6qQP/AXjMSUgS7+GQyGjBiKlMQBwiuCK9V0hGm8Ep1pD7QHruaBwNG2DT4Z33fffau9FncquhTb7jl7djl7dv6eXcrvlvQP/uDDq2jFQeP+0z/79EFVXX4HPLBdlsN5FUDK+VfT5IepuroTPhxAMYgISAQlWrarfYkUhBsIKLQRLgIRMbAkmGArN0MiuSzV5h+2F92sQMuGcnkM+RgJrYSmMRJnDGOsn+1nN+VgP2WR3KYM6UEbAyHNT8RMprIfxQSU0p9SeQDb8Gxgim86bQ+0B67qAU58npAygSDFo+WwagcAACAASURBVH67B8d3GphgA741t5qRaend8eePP/bx6xpoR5iuy01H1gjflKsPnFc511Ie6MlxTQMu7IN3/1gOQ+TmiqFEUZsEgQJCaDtAxohRzx/J5CYpqowdZA0CEooFMKyzAs4RBWSGnGq486gbcouBKvNSmdtCE2XjuMBb8hEvi4iEKnJbdLK1w+4hKOM3KMWmBqZ4tdP2QHvgqh7I5LRfik/C9XEnNnxX/chjkrv33rVd2zan8Rj7YL7whb+6rqF9+ctfvq523ehoPLCNMNVl7px3+DCCPJ65kMe6bZn6CAsEM+qn/lxpY1e1E4AUthGJMCCzq59jKYiBdbiqnxzizpHHtTqU+Rt3UFb7xO6apm9S2A3Z6pf9RUKbIYv0ZCmxl/0GHalSgmY+0AUbaXt8NaNL4TboamCqr1Tn2wPtgX09MCcvTVyZqFCO50test4zVNvvK/CICs/dq7slH5G6Y6Hm6WfOLy+88MJ12fLss89dV7tudDQeCAxFGyJMuWdRzrXUId1zngEWDC260E8AUD992ywQEEbAMfrxvM6yVRSROUghA6CoGxiD89/tKDOC2UCglK/yZ85g83RyXySreh+jjCKpSvYNFS7DGBgb87fa9kTJ6AJFz2StbUY5o2pIbQiEcU6jc8fYVNZLcuXl6mx7oD1wkAcwcWUixqSeiT1lx3FJDmOB3WfP3V17mf7iL/7yoJdxTzk2h+P2A/04Ph6o35SDVfimXB4533C8BQy1yZWf130CjgBD5cibCdg88EHoYBNtoAZSGCu0SZoKBSbkJDJGjfyIpYZQCha6UCwVQ3eBskEpshw2THKRvWivclS6jGNXH+mTXN6TiVw3aYyj8PYm9RD4QdKQa9uonZEwaYIUfMOPR57/zmqdvyjvbHugPdAe2HiAE/XusuCnTq68CGB6cXnxypUFSwh41kkdXeuPgG5EHfnhuXP3LZcvXRrAd+QG3KTC55+/uHzik5/wxH59Qs6ff3b5jf/wgetrvCx87X7hf/sny3e+8zv4Q6/X2/Hee88t3/D613Oz//X26XbX5wFEB3HX/DwQvX366adzON7HAz5GTShAYJH9ODx3N3BSGMFrWwYIRJeICJIRTAF4rCM35oiwCcEiBxOMcHNL3uIDoOQIkOyB2tk+8Jc61rqaH9akjj1gWQAPTXhMu2WzCkqF/SN9HmBUM3WNYQtSoBOpbs4puSg72zd5q++2zrcH2gP7eQATGZ5nrtyzvHjmxeXKlXuWM1eu8Hel8mvq6XecYAk2YcKGjdv9IbH3OKbY/Pu//NzPL3/1xS/ddvP+8jOfWfC80ceb3vjG5Sff9/dvtFu3v4YHthGmuiSXrjgXAxkpW6cTbyqYDNDwapmOC2gQRhySCY0AlXb0UybUqdAM1Yk3YAs6CoIIGyQyf40f92MrEWp0jO0BpKTCHzYvw/EyWZbPSo0IymGzRJe8REcfeR+ThuJx0uhokjDXEAp3I4fj9sCIT/qB8aq+8+2B9kB7YOUBTDxzQtNso/lQ5dvluNl2JeaOHpw9d7I2f59/9tkjgaVbeVE++7nP3kr37nuAB7bAVKO323NrfW6SRBwJAibp3xoNssSlKBBMmDJ9noceGKQJZPgbZYElAlCRTCIxpJU2HCJpymEhj3nYbXiZrlBB6iMKmogubm8eE6ih84gOxXjLyW/hiedWUS3ZRs4z0Ckff9BsGmAgw4evaWjn2gPtgfbA/h7AJ8JMJGiBeSTHZ3BTuvLA/qbj9jh7zz38lHzc7Gp72gNbD2yBKR9IAhHb9onWsBwfbpgBOOS57ZHjsf7GczlsIDnuTtCoH5gURcq5D12cGzgnrGmG6FJhKfmoR18s05WHxmI5lD3nGTWbthCaWKjlQtmhyBvtImRp3ppzVNFnDmLJiNglcod+NgAe9ebz9UxXDO9se6A90B6IBzJBls+Urtpdzp69J82YYt3/2D2w/2Bj57GzsQ1qDyzLnhuO5udRAAQCiqu4SVd/LyB5qWw0DwyUJS8vX7EJ+ubUrXlUGnYmiGgmyM+eoPnWNs4Z+mSlOs8LKpdRc14ZRjqWJJ2pJwyhP+3gIKfJ/vCGTd9pJ/NnhE0YCetdNkVMxRg8mziahpqx6XxZIL+Bqbirs+2B9sD+Hsj8kgmME4+X6nbOrKeR2WZ/WXeq9MyZNdjdKTtab3vgah7Ynj/Yf4cHylOXdAspWrjCt9dCPoN1QCBzs3RhD8hK8Afyxj9ElSkn+FGgyBOC+mZ28Kgc5RKeqE+sQUva7C5b+yFv6DRgoY306OdVGFmKQKMhNFOW+zAiNOrUeIzLfsDQNvzloNwON3vT55HrdD3TebydtAfaA+2B6oExP42J27W7+ertbI3J7Tg+7rmLfyrlOL4ebdP+HsgtO1KLJTmChIFJ8CDiSHna6twzIJiC6uk4YKMsR6mZcCIRmMhNaVKtUzFQQ5XQNHApihwJIxy5KdvYntiKVPbWEuTROnOIl8aAUQY76hzbihgiK0YoChe5gaSIG1KrbyyQ5petBrSE7dQLf+d3F7c293F7oD3QHriWB3D3202E6d++/7eWJ5548lo9r6v+kUceWn7w3X9Tnx6vq8fBjWAnomG7x3CP1cFWd83d6AFAUyJLGH/yicgMoNkHQuIvAUbgg8hi6AiEpKUiOOCUgBGiPInshF+iG2EZ/MwK2xJcHBNKJChikdo+3l6AEatauc3HVnbcVKpud1c3sgTcQPQAoMCXRQzbiV+JlEWkaIvjoSCVy0OOVEHyqEtNA1M82Gl7oD1wAx7IhI307Ln1565Pffovlk/86a3/qOtb3vhNy9969/ceCixlaPecuWe53MAUd3R6TD2A86o+AEz7fZkiYDBgZsZ7SuxnXvAlM9Ah0BlRI1YiklO6skybwwlRpifAUkBK5CLAWGkKzHlD9XpEw5KyfBjFJeUSodpCIeedMkbaYWyiD2AAuvsZvww/lb70cdrbCu7JYmePL6qdrme6TWUftgfaA+2BeCCT+N5JKC2U/viP/G1ukFyXXv0Isv/9b3xg+U//+Y8ISH/3R/728i1ve/OeG2JeXcq1a89gP8jl9Q+cXrtXt2gPHK0HtnCUcw9p8gMCAiY0UbCRc3TDXSQh9EeXGqGZ8KMIi1GKEskUhh60G/pxwyJHdpQzaHkPU2ygIrZkYyn2cdWDItqEITAfQNLxLJMejVSAF11j43ciZIEpRKYMS+wXgxmpUgQK9RnbsiPpU7NyDUxbj/Rxe6A9sK8HMClpf4VuG5DJZbsk9/ijj86JZ19J68Knzz+7/LNf+X+WT37q08srX/6y5e//xI8sr37VK9eNDulofr34kAS2mPbAEXgA35S7ePHiSpPARxf5AEOFkzUsmUICDQaFLDsRihyYGSxRBEA+JQQwAkVmJBpWluSGPZARMoNg5PFYmSPt1GGdAic3cv903fZPOeejGC8thCRAmSRFKaBvhz97sruzyw3eiCzVb/cGrizGy3M7vYdpOKQz7YH2wFU8MCebTHaY4ABLW2AKSF1F2KgCJP1f//JfL8+cP7+8/a1vWt77d39kj7zR+BAyZ+7p77kcghtbxG32AO5Kn/svQdUAkOvQOyMllR5qHkISmfHqVQBKNYrGbLvwxNfGIdz5mz0zLQSWRDr8wJTuSB2MkvXok0qWSEjhM3/gytLhHHT4SyOY4gB++emVtAYmTfDRnqzMXew/4EywRB+P5UMZKSidoNcRpni30/ZAe+AqHuC0t6rHZLJdOlg1uMrBcxcuLL/+m7+9fPD//b3loYceXP67H/87y9ve/MYbujBcRfyBVZroD6zuivbAifAAzr18MFnBFIkihJKN2xiSAMA8w/MMTc0MPu/SxjSTb4xxO8+KcGbHIdnBIwvUXiC5Ujhkt44IlX5WKbGf2bJCUuyR9WiTaBKJy2MlFO3IH8rbKCaCJtoQQ7ZTGX7yKRE0R5ri0wFRuKPBbm/69qvYSXugPXA1D9QJWiH2zD5Jr9Z7XffEV55c/vn//a+WP//Lzy5f88pXLO/7b39sednLXrpudJuOMhHeJvGHJhY/uApbc1E8NMGHKOjChecJzNsI4yGqaFH2wPZ9kPcxypOPs1KGC3zNa/9RWm3gYzAGOqnNjM6UPsiSWhyhws+FlPcpuvJ9C3mxjSL1I7woU3TJ31xjhyl/vxz7YH+RZauN9mFJmLCLHASd/jdkAfg8rLRBPw9Dw7VdTMyG0HuGdyLHVgTdzLIjTMOrnWkPtAcO8kAu3mNyHt9e8exyUMdN+Qd+53eX3/zA7yznn31u+eEffPfyzu/41iP/xfuMZWPasTq8/777lp/48R9bfvtDv7N8+StPLhcuXDhW9sEY/ITHP/nlf7p8z9/4ruXxxx5fHnnk4fH192Nn7Ck0CO/jvJdzXiYN9AAMBAFKE2mSOwLkJqQVkEzgAY6ohc51ghDa2qeoiwTqz/4mh4OUSBfy7F+W8IZ0l8FeSY+GpOkrxdIpkKEBhJuUCpzQ0ixEK1lKI2Q0WuNwwGE2w4+7htsSDaL3MPk176Q90B64Dg/o054aarKZk9nVur9w+fLyK//iV5c/+MM/Xh5+6MHlZ3/6fcvXvfZrr9blttXlInPbFByS4G/71ncseGLZ84knvrx88k//dPmjj/zx8uk//8tD0nDrYj76sT9Z8MTj4YcfWl77mtcs3/1d71y+6RvfcOvCW8LwwAAhl+Q8RFojfCPWwqiKN2oTGni2GkQUHYIocYDOYchifzHHJCL3ijGBoklMgpZo2B0fptQD5bSTQCRhw/58m+2KdUcJCSiQFztpscFnmke9gSDXAoAgcYAQx2pA3HW0qoyL2n0TXkaTKE8b1ukOh546wjReoM60B9oDB3kgE9y2Hjewu9bjM5/7/PLL/+e/ZKTkTd/8huUnfvSHl4cefPBa3breHsAF8ZWvfAWff+O7v2v57Gc/t/yLf/Wry2c+89lj5aNnnjm/fPRjH+fzDW/4huXv/fiPMep0rIw8ZcYEpHh+GhoICwzTAISCMcrrw8L8kKNaIsGIVg0Qsq8qdBBC1HxGrggmc2nO1WOpkNoASwVm6ssA27Fhu84xshOtsg/LUhkNQrFxiMRH3PFCnBpQppfxogtl+Jas6uyZ6QoOG1ooEtYq44iYpPRXRuLNTtsD7YEDPZCJOQ00sWC2KTNOKp1eunRp+fXf/ODyc7/wSws2ef/wD717+an3/kTD0sZPN3r4mtd87fKzP/PTyw+86/tutOuRtf/Up/5s+bmf/4Xl/Plnj0znaVZUYSLj3K8MdfPcZC7NB8DglDULEDLAVmgZOHF29BOOqAXPd3dmwj1DkDe/ls9ZIQrINum7+RmlWRwDps5Sp3HOeYYsOOYdNUQt7fRmeAKXQc41nKs0FpVQovWIL3UHcM1pkgiDNBQBXQPTeIk60x5oD1zNA5iEAk6cTripc/8eX336meV//6e/svza+39refSRR5b/8af/4fK93/XO0X//XkdTetCF5mi0H44WvA7vftf3La9//dcfjsDbIOXLX/nK8ru/959ug+QWCQ/kXFzleY6Kmtb18plgQ/t6UAKACHuAHXhs2YksIcU/1OW8p7QBWlpyI4CALvCMIpkyjnnueWN29FKWOsvICBf6EXRgWcaDdKhxLQdh+KHdzk8dVAAxLGIbF6WsKJ9ZkRTth94GpumazrUH2gMHeAATXZ5z4hrz4KoX6n/11359+ZNP/tny17717cvP/PfvXV7x8pev2typg4zhTuk/TL3w83d8+7cdpshDl/WHH/noTd964tCNOUECz55d75bJOXfNIeQ8Bd4QGvRtsrzvCRrAn8ACBAYuBkxIS+ApqaBp8NXoJgIJkGieoARDE22vCrk8F6XqB/umIWsYVPncd6S2KYUmyDBQeVM5S72JHHZr3BoXmts1A8JQQx8lpR8jGkuGQqUGJvuwk/ZAe+BgD2DSyxMTi+Y/TUSXLl/e0/Eb36DIxzd/4zf0Etwe7xxewdd/3dcdnrDbIOmrX/3qgqXZftyaB7b3O7saQM06QYkAQ+cvuCTAQYvMLYm4BFt4jo+okqJLGsHowNsJRMZKZoaKScLQxJTzRmgljSwPbDKgKvuZCgihOW1XP4hlrbvLbm/ypgqBG2QC+IYZBCILo3kTtAhVmOdoS+xRxCx7NRuY8rp12h5oD1zTA5xI+cktEy+ml/UDE8/Xv/a1LPyjj358XXmHj65cefEOW3C46i9deuFwBR6ytLP33HPovwd4yCaeCHG4hUOAIulBhgd2Zrv1ORqOmfU+l0UdEhuYID4ATgQxA6wMXmvJJeoT+Kkp4cVRm2H8lDChyxDDOBD0zj4UN7uQmsZ4LRPVY2wGqnSZ5hjcPE4JEoQNBwwbkZGEBqaVU/qgPdAeOMgDgiVNrpiQMildvrSOMKH8Va98+fLqV71i+fgnPnWsIgz4yvBpevzhR/74WA/n27/tW1Zfez/Wxh4j4+7Bj0SXRwWmUsxszkMdrGtrHaMy/rCDVjmfaxtzAQGplpNZHK0BxwAfGLlR4EdKy5wAygmkoHLkE+oZZs7zcaXP7QA4hBweO1IE/ZN3LNx1VGS4s72KGcne2E4Wiw3sI0ijNVLokU370LyBKU7rtD3QHtjXA3UiSwPOKfkklwNX5gdu3/G2tyz4TayPf/JT6XbH09MUYXryqaeW3/+DD99xnx5kAO7e/l98z3cfVN3lV/FAvbcSmgGYZgRmRlBwbq7KiSba7wPGUF2W0HG8vg1I2kAOTuMVXBiJKMMAgxaBCrQFa+S5HU79MVv2gQwoGbLWPeo4VFPGVmGMgCOemaJoPGUPOWad7MEa2gxbqE5/pLJXS3kcpwZauzUwDW90pj3QHtjXA5mABE5zL0RA6vLl/feofPu3vI3yPvmpP99X7p0oPC3AhHsx/eOf/8UFe4SO4+M1r3718lPve+/y0EMPHUfzjr1NObdg6AsvvMBorqAmtCBowrlZ24oR9JcA5A8zAoPatuQJEOmpyBBQiH3IODOaLKiapCGmmDYNAjHgZO5QuWHJNgXO1i9GZCGFdEeL2Eh2pAVIjWOX6WwxsiMDCaMHEZBRJkeuWGOOm3nkBJmzp6xZb8VfW95H7YH2QHtgXw/gN5ZefFGfLrfLXPzV8GVZHn/sUd7N+6N/8snlv3rP9y/33XfvvrKOqhCT9xUYfUIf2Dz9yT/91PKBD35o+bNPHx8Ire58/LHHlh/6L9+zvP1tb11dyGubzl/dA/stx6VHoAlpYCkp25BydMHf3XXUyIAyoyZoKRRAFbpQHm8boE3SqE0Z5aYdolajt62iAENUBKJq86O2aj0RhJEf6B43rZS9sHtPW9qoZbcMJ63U1hu+gUSJlKEB7RU9YTzDeA7CDZxQDsdpmMQ35Vhnotrd7Z9G8SvTSXugPXCAB+rkzElnzI0Kz2+/wYMf48zjbW9+4/Kv/91vLJ/57OeWb3zD61N8R1IsR4xPvHfEghtTCkD62Mc+vnzpiS8vn/v8FwhLiDYcpwfeD6977WuWb/iG1y9vefOblq97nTb7HycbT5otW2DK+ZXzEOPB+3i7bMdxjnNPFEB+IhytMSey0FwcEeCQt+oyFoEMcZoCFuKNnWVHCoRQgQs7XJiSA0OHD0diQNGx9yEZ1kYbw53Abi6jodgLhEa4afWwWY0ESoannQBZtZ0kZXik4mKvpzPcWqAjTPNV6Vx7oD1wgx5ApOmFF9ZLcmPOXpbl297xVgLThz/ysTsOTC/uc/uDGxzukTXHrRpwp2yA5nF94KL73/zo31m+468d73tBHVf/HWTXFoSyJIf2AZ30xTGe40EI0CJUoEZcYODxEhc/OLDbjFRBRsq5JJeI047QhxACfY4yIYI07DHNUKeNET85WlNtHMYiw1ZTjutoxxivxg3Fg3Hck80ZOArwKd2NzRiDQk6EJo1LSiYACrQwFmzq9pEs87jQAzb1pm+/QJ20B9oDB3tgTMqcJNVOk+Wy58aEZ87Mb/g8+ugjy2u/9tXLx47Bt+WwcfakPM6fP3+sYQl+fOCBlzQs3YY31DbCtL2PFc67PKE+cEFTzE656FfzcO1HlHX05TEiKZKxkkMgkbDAkxoKKKxm6gZ91CU4gwbbRY+NgX4+yGFrGKv2Ii9AykZsRcNQDhkaD6wiMRF1mGfH2Kklxsgl0A2jXOof3WWP3LAS2MQxpKfSBqa1P/qoPdAe2HhgNZFystGnVZRj4gKIZNkAXTMfRszrv/51y1effnr5i8/cuWjJ7pUry4svrm9/EPs6vTkPjAvfzXXvXgd4YAtMzz///ICc6vOcl7XMK0sj/mJuGeck2gKmdO7KAJzSKKec7P9BFSuAEYESwQ2OmKMsyYA8lGVOSMsorjbSbjTgXDKdwPJ56AZpqLDWAChuyk7ULHMOjef4Mh5YReBTR6pElj/Ca120G9bbaJpFtQExNYTMBqbVC9QH7YH2wNYDdbKbs5wnWExr+OHNK/PrypmsIucdb30T2/ze7/9hio48vfzi5flp+Mi1t8L2wPV74Ny5c6vGuDUHHjkPt+mqcQUe9kmURq3IDYYHJ4riOMoUWYGq3SsADj8MUE4omHWALeMNWgaaHB6aU4YqQ2CRuifN+AbBsAU0mGhsEfRgDEI1i3GT2A9ZA5qY03hGHzGWOhsAV/rLpz/oa2Da83J1QXugPbDyQGZWT9qZUJBmPrl4cb0Z+Z575tTymle/annZSx9bPvlnn16JPcqDy8f8jthH4QtciM+dXV+Mj0Jv67gxD2wjTBcvXhywVCXtjciIKQYMABACEMlAgE9aJHmOhhShqIyaEokEHTtnJgxFDqvLBmnPEZCXeaLKrvZv88GuANfoz2gSFRZ7BZCyXzYKqBwp4kpjykVzkC8d8pPdsDIDOunXUlmyvel75a0+aA+0B/Z6gJ8g5+S7bqBIUz4Fp+53/78PL694+Uu5fwk/JPrmN37T8oEP/e7yhb/60vI1r3pFmh1JinsvnaT9S4ftlDd+8zctP/Cu71te97rX8mLwl5/57PLv3//+5ROfOD43FD3sMZ9UedjwXYEpy90pC0QgTX411sEIXopiVCaFc5O2wCBRK64/haOGOMBFhQftfzrDGzxKouEEBwAybWMa35wjq1VQYxv1JLiUqBZ17RNB2oSnltwqAUbKNukWCJkOUTmHTD8RwlBIW8cQY/Zq2S52q6nmPfm6I0zTc51rD7QHruKB9QSdCRsTPPLbjan3nju7/M//6BeXf/PvfpMT7Le+/S1s9+GPfPQqOm5P1QsXL94ewSdA6vd893cuP/m+9xKWYC5eK3z1/yf/4T9Y3vH2t56AEdxdJuLDRX1g/xIeumAnqmKQKeWjT2GGGmlKvfhFG6YROQFIoEypOief/mGPPbQBzGD4RXuaxENu7UgNJA6TSqgmOoZdsxV7oF4EFwnQhah1ARjDDxMODDlBEeyijtKedtgYShXjsQvaciw72N8EXRa1AtPew5TXq9P2QHvgKh6oE1wmbzTnxMa7Ea83VL/1zd+0vOyljy+/8YEPLf/r//HPlgcfeIARp9//8EeuouXwq7C36qA7kR++tuMl8d57712+//u+d1xsq3UA3b/1nh+oRZ0/Bh7Y7l+6cOHCeP3qeYd8PR6m40K/78MEQMhCg4DHhDCXqrflQAdhIotZBg629UZv5Ic9BBdODKNsP5Nyc1spy9/ZkmMzBMUG2MzyzDsFfsBJmYsohbxVfFTsjr3UisaoG/0Do7Yl4zHQzY0GsbnT9kB7oD2w8UAmxExYM1WEaQslDz/00PI//ez/sHzPd/315ZOf+vTyj37hlzgrPfnUV5fPf/GLG+m37/Dypbs3uvQt73j78uCDDx7o3Je/7KXL13zNqw6s74qj90CW3qI535BLJBflOReRDySkvdIJHjlOcAcpGEAylI8Mllk++xkycq6jzGwxU0aoGKJyrTSq/xCwx87oRDstp0W6+g9OMahIs8dbhjfGRbvVN1EmSvRtUBAtS1tahfKi0mzGMczxepMXxUppA1N83Gl7oD1wVQ/MiUTNOMF68sIPV9a7UKPu/vvuXf7rH3rP8g/+3o9yD9EXv/QEO/7Bfz6aKBP2Lm2XCq86wFNW+Y63v+WaI3rrW950zTbd4Og8sI0wBZhiwX7nYOqQTvgIVSjKsgIUQ5PASb1TL8Txpm+0YyTKi3OVMAoeBUQG26QAqclna3e1WeSyKinShwg1QGQNucEyNFLLikOE9lZlSVF2JXKERgE55Xyk3l6e5IFtj29Q1sAkN/Xf9kB74Do9sJ38cIxPwHu+KecbWL79LW9afvan37e84fVfRw1/+Md/cp2abq3ZxYvP7/lke2sSj673PeXmnzej9ew99yyve93rrtn1da95zTXbHNTg7D3r/TYHtevy6/cAllHrI3uYUIbzbHvu1bbI6+IuBEjbecGf+5XINOaZ0c73LKIc54kn3itNG0w3gJY8yR+BpGFDokHEm3keruhE1k/7dBx7kCqPTgCeACGsslxHjthW3WkOYSm62HR+84+y0JaRNvhVY9E4PLBCk9OOpb8lZx930h5oD1yHBzB5YILLJFInKkzuDz88f50etxa45K1NL338seVnfuq9y/t/60PLr/36f1j+/DOfXb7+tTd/sb6WqZdeuLicpJ9C2Y7nkUceXn7wPe9aPvih/7j5iL1tuff43L3nlnd9//ct9993397KTcmb3vRG3q37Yx+7MYg9e+7c8p3v/OsbaX14Kx7YwtKzzz47zjN8IMkD59y1H4AjtBNsGAm8LCX4gIx6PuOY8EKAmDoCJ6zfQFUQRnXSkp7DTt8BHFHoUYYO1/FwkEeCCUCOGwWGPELRDwQqusRx+edRoiYRJ43ZYGTw4u+9sOGgSHUTpRn4dpadp595tqiO6E7bA+2B9sBeD2BCxUZq3jn7yhXm8dXn3Fbgda/92tHpypXd5dnnzuVDowAAIABJREFULozjZD7zuc8vn/v8Xy3v/I7b8xtk+PrzheeeXd1MM7pPWoolRVxobuRxD34kdPNtq2v1v1E9N6PjWjbc7fXYb/bII48MNzzxxBPLl770Jd5mAHub8AQ4ZT8TLvwVQPAuec+/eWT57HP4aaL6nkG7RJ8gXkgj7hJU5S1GeSricpyMCQJJZgUoCM4HKKYUb+iwFZRJ8IgcVECWQjuoJ6iNkddM+kzYmqLUP3otkXIHHFmHbDwjvR7fSgtsYIGAC9khrwBqx1Sr1zrfHmgPXNMDnOA4WesTKjqgDNAEmMqnYfww736TIX5bDs/b9bj4/MVTAUvwz3ZPy+3y2VHpuV32nwa5999//2oYzz333DjGeYQH0vocDVYZXfrVXjebVLXXnrwUNcEDctmakIQfqwVwrMBoAETAItjlNNEjgtCEjdhdzWNZgSTBTKBp0kz6WmS2Q1GhyhJNmtIH5BCbPI5djCSRozEQL/Gx4YisySca+bTEgNc/jTId3bn2QHvg+jyQiSxTJr4ijAkX5Rd835hIwl6ao3y8cPH55fLl9V3Hj1J/62oP3KwHttBal+Rwbs3zThoOjsqgHpf7QAiW5/QtMZbiD+sBNtnXpDxXtAb0JObCVoSOAAlFQExAiVmDmst8JGPLX9iCCHV9zLGsI0lDhj+goc/QjTzBK4BWa4r0EiFK4C1gBPnIJ40EjHhEdtUYLXvTd3FrZ9sD7YHr8IAm3zmB60Zvur3A88+vv8ZffyLlOkTfUhNEuF54Ya3/lgR25/bAEXkA+5cqEGE/IKK1KKtLcNWc2n5bLkYgBhgxAE+GA6YCqLnuJAmQySfxSBEaIIpiLmtYYdCGGOG+SAZx7PIGkAShARzFykDMIKJZl/mFJaw30bgA4vQwyMFml4yUn+BkuVGQLdADD7SDHsxdOVYmEhJ1I5WxCr3O4hNZP9oD7YH2wPV4QPOXPn3VvUzYYH35xReX88+8yBtWRtbZs/csyxEwDPZRXXx+736p2NFpe+A4e2C/Dd8BpWr3QZA02pSlLrQNqxBc2CgfdIQO4ZbsRRIEzdsKgC8IFwaNoQcINcBllgrABDDXtcl78kkRkqyiTQKkbGKXNbJKICfAEhZFXMaLFqxH6mVGj3w9LouNdPoNZligdACY+hNZXp1O2wPtgevwACYPPAFMeQJY8Hz+wmWmuQEfJm3sZcIG8Nv1gA3PP//cgs3e/WgPnEQP3Lf5RuPTTz/NYTDak6hPSQ8aY4BBsDSXt3Cchy7+OhJQqU5tHM3Z0VJdYjdJh4xkkIbKUob5wbaq2nZQNKI6ZwgvaY409qostmZJEceODHkcOAoMRU5koHXsDSSljSjJ8tcJtxXAN3jQF86P474P03BjZ9oD7YGb9AAml/p88sknV5Ju9Btbq87XOMBeiOcvPLtnT8Q1unV1e+DYeAAfLrYRJmz4zjkFQ3kB9zJSPd4OIhf8tMGxnnM5brDT2PwNSBAoUB72RyNTinSoAvwlaxg42Md6VvBUgAPl2uuYZT72GuPSUcYpm2VnUeJv+k2xXla0qbtXSmQMArnHffavgEXZZXyUSX/Mb96NqNtU2HuY8kJ12h5oD1y/BzKZZyKvx88888xK0Nl75j1kVhW3eIA7eT/33PlT8424W3RHdz+hHtjCEqJLOJ/mt011/tRz7MChJgJDgEkrQAPowMBTQIGxGH+BDNGYAQ6ijREJUhfAjmEJoi2HCewtuiUIbdyIWYFQrKKIbBAvqeoDOuhfFPnLJZA7ajI8tlSEbIBi+qKNAYqSp1mgNKtMRGuOkfNb6jvCVF+6zrcH2gPX6wFMSJxMMA+VCQX5ixcvclkusvAJurZJ+a2kL754mfdagh39aA+cZA888MADK/MDTCjMeVPTq77nDzgf0F8y5vmC01ayBAxcxjI7DB2jOTKI4MyHlrtkI9qzqQI0zgewSDnsCBuGbIuKySjPOKFL7aIR9pO6BHEYj+Ety29lGipypIQ6PJbYKYHe45TOdIr6RLPNZHJ7PvpVDZ1vD7QHTp0HMrHVFJ+I8dSeovWXSbj5+xC8gEn00qUXlucvYM+SZ8BDkNsi2gN3wgPXWo7D+VXPseuxMQChtqQMnis4XSjLJKBjQRPKCSzY/WN4qACFPP4Zi5iyHkpKdKiekhM4dJ6y/wqKMpp5HtdzWnagTpKYMygxwoRgkvdF0YyIK2ls5JCmQQpa2diwEoWhLwrgDwqNbUobmIpzO9seaA9c2wOZUNES+f2eTz311ErQOXxb7hYfmEwvXrzAb8PVifUWxXb39sAd88B2OQ73XsLtMXJO5Zty9Zy7lrGBGrQTDExSICMYNFAfwCEsERLQW5EepgVWqlzaELFQAhAaaKN5gYAzjRhyWWS5lOM/2zHGNlUnumWlphyyTYSEbYg6NVrlcboeS4fI6hB/ZT/LqlLkPba0aWCKszttD7QHbsoDmdzRGXlM8tjHhG/N5XGry3Jagju/XL50KSI7bQ+ceA9sl+PyhYmcUxUikk+6/+DnBxjU5/q/szP3QaFcvCFkiBxC0wAkb6BOJfCiNGfkxserDy8BmdHPmRjilH2KPLRayUEBAz2DyjgWtCHHoPpMEE3rgFbtMStiJvyDouSy1Ke4Fc2xTZQWdQOookdOa2DavrB93B5oD1yXB+rEjXw95i0GNnf9Pnfuxn+Jict7F547Nb8Nd12O7UZ3hQcOWo7bRpVybtXz62AHCSgIFbz4GxZ2cRNM9MoxoAk3m9WHHMGJpSKwslp+07H0e1luc76zJ4QZPshCzotwTCKhGhxGdxlMxiqcGeKqYcxTNOHJAESF0C+5aFRlKS/cYRPq94KdnCAepByps8UZEgsbmOSb/tseaA/cgAc0edZJaeZRh0n/i1/84krivTcATLinEm6qe+G588vlyx1VWjmyD06FB7a/HYfN3lmOw/mzBafrGnSu8oioGHwEH4i4KIqTczfRGsjNXh8uw5X9TDXqoyW5SSSsG/r2ixB5H1CiRwGoMhDJlxDYFRvZhPudMK/UDjMf8OF4yEqFdoZOtaceLhvig13CR3SQqMxLig6wqQEaVihbluXGP/JNezvXHmgP3MUeqBMv8nhikkdUCHncSwaRJnySxgNl+KmUF188+AaT6Pvi5UvLCy+80DeivIvfW3fD0B988MHVMLGMnXMIaX3gGBf9bXltwzyZIeBA/DEdTChJH6mQ3FpGMIp6p5KkA6kQPiEsQ5sMHLFzyEMGcwPp7epjyPh28WO5VCWAYtiI8CL9qUs4iZbYDtmJGi0pMmWHMRDiIW9THjdVD6HMTTkG2J7B9G0Fiic62x5oD9yUBzBJ5gkByOfT8Ze//OWVzP2iTJgosUcJd+tGROnixecbllZe64PT5gFs9s4HCYwNHxDwRYmcNzmfkN74A310TgYqICOiGOjx6hkjL6yUlhoEIoiwuOxn0nYhne9mi8gAayQvaROmonyMpsDKBKD0L/uM0oGwKIXQoX/WElgilKEMkOOlQxyOTe4SRhsrGMUxMVqLc+MIUSb37AjT9Ern2gPtgRvxwHZyRN/AEuow+WOZ4ZWvfOUQi7t+7+xc8k+qvLjwN+gu63g06kx74JR7YLvZG9+Oq5C0zcMdV4OnS5eFRuIQ/60gAYAokKLI0MbJYwtQKKXiVtoGRKYwtMYR7MN5n95jfqhA4g9XE8bUR9IVzUkd+7OvcYUq/Q2+qB8/aJdyDBr2zAgTbYMCghbstMGWwblqZ2fhb99lmGMUHJgRaqfv9D3805n2QHvghjywncC3kzyOcRNLXAzq48zOLiNJF557dnnhhYt9p+7qnM6feg8gsvSSl7xkNc4vfelL+wITGm3Ps1VHH+DaX3+uMX0YdCnAonKRAv6iPiCVlCIHdKy1jd9rXH9pTngRWLK+2DAVaLVrgBRFR5ApxrSFvqM/b3Ng0NmAn5mHQENIst0QHWiSZBwBqgxLhkMUlKIoKYOuGpblbP30V1p1tj3QHmgPXNMDdfLDfiXsQeI+JP8YLzaxAprqfg1sdt3+fMo1FXWD9sAp8cDDDz+8GgmW4x577LEF0VfAVJ6I0NYlulWnzcHn/+rLy5XL8zYeOi+NCrnmGw0AIqzfRb2ADDBRgyo6TDTJUMFlMfUJjJBARGWFRChN4gqsoWBEcVAOu7DEd6ZGmWwPbXbUyGOtQBexbGbiEWCNwaoX1LCj9kVhJFcAToy+oUlpH6Es9hg0XBmKTd91HdV2ddIeaA+0B67bA5iQ8MSEFWBCPs9Lly6NegjFRQC/zn7hwoXr1tEN2wOnwQO43m5vVvn8888v586dIygBmrRsrfMn12fBwPV4YFzh2Rj9KjAEOiTP8MNzN/ziTUqDIwRLph9GaURW1pNlLoAH+xwASzZ9v3HIPjSIPQr0wFaxDsZQxp7oEMpsLtIBcWU5LjxEyZCH9oSohdCUkBPqZb4UDTu9X0rHu70kV16GzrYH2gM36QFMKHjmU3FNMelv4ahGnG5SZXdrD5w4D2w3eyMqiwhTzh9dmBVlSf7GBlnJQrcWCIhIjuoJI0CMQiKEBn/4QbkARCACmhDOrK2h3ShixEY0wh/hNZWkD9oNXQQhfcCi1GqyxcssYwwPvJwGRWgffT6MdcQ1lq2FqgvGi2/oKtrEFpA9AIy9aQEiYXyslgZ7D5Nfnk7aA+2Bm/XAfhM7J9ICUbjFwJgwl4WfqLeftG9Wf/drD5wUD2yX43Be4FzJB4x63tT8zY0vuILee+GJtSXiIpBARGnHd9FmL8KJgANyHHGyQfWcJmQ44sRqQxLhyxHoqRObrAEvk8TEWNEkQIIPSDTZu8Tj9AlEZdnNRjnqVC2VFIDSGYJfeAgHaQfN0DdSR94o1R36xpX2cSftgfbArXugTvL1IoA8Lg71sb141LrOtwdOmwew0TtLbBgblq+xvw9lOG/q+ZLz6OZ8QCxhV/KFchYl2FC5UGHAA1s46sRmqFfkONhiISPaBLjIQbQGkJjO6gFeGBu74QNVOgOdKCwaBEEqQ4XhCAXsJ8Xsgj8BHzUdWhUls2VMUMJeQzOPAUcQOYyQvnFomxuY5uvTufZAe+AWPFAnwoipFwIsy9VPpIgwdZQpnur0tHtg+wEhtxLYglL8EPDI8fWnAgJARoBjC04pJ2s4yqRoj8Iz9Tyl3ixbFSPY18fIU6u6a4nR2MJ5AQrNLVV24EViKIF9pxqVzWNBDfWZZubYtD8Jx5G7BTJ0cbehMseUCZthJ9XaYAMWOjYwrV6JPmgPtAduxgOBpfTNRSBpwKmjTPFQp3eTB64VXcr5AZ/gnMFxnjfkp8EX9WKfvIHCAgkuBQwIE1cQWQn1CDwAH2gLKXhOGBkFYSGDhqCG5OElLuZDJtA/7Jyjo152rZXTD+rusaRJsV+StEEcoBQwo/1UiMbqODxiWERp/E3IInWlvVsjCjjN7Vx7oD3QHrh5D4wJhx/RNAFBGspzEcA3gjKRoQ4Rpu09aW7egu7ZHjh+HsCS237RpXyYSJrz55ZG4HNPMgIbM6pCKCIdoAXq1ZIwQngQaBAaxBZsUCM1I889Suq/528VHKVjKW2fWwlkj9IeQUIcwVIqbfeAnRgqNBr0NqiII/Xyn6xnD9s/xmOoijQ5B0IMkf3TKHkBOm0PtAcOywOZ+Cso1fz2G3O4mOCi0Y/2wGn0AO7qXfcu4Ztx+OCQDxFJc97EBzi+8Qcu97rIo2/9cCJZwgG0gPgKIkEJ9fZeJrY7o8YbYyIbdk7ISAyHymULFHksbOdv4tXxKWolMGH5GLvX0KYIDm/arbVCeaqgjxtALjZ6S77H7P1Q0wfZv+QBsm9Zu2NWG9R7ltq8CfqwPdAeuHkPZBJEWp/5FI10+405XEy2PxVx8xZ0z/bA8fEA3tsPPfTQyiC8/1GecwLnCfJ41HNm1ek6DwI9ai6MmXAheIgolAua0i57niBF5y/a4qv44w7fKBgwIzQbN6NkY5URYEo76gxVUSlL9vwBhOE5AKjICKANOgPIOPoD0chPFRqD9EKeJKIBAArpkAcdRQ/yw2d2EvssvSS35wXrgvZAe+DwPLC9KOTisI0y4b5MuWgcnvaW1B64sx7YLsXlm3F4r+dcuFVIqiMsyED5qAsLQA9IAQnAYlWOqixxGVqqXAAHZRMmcK9sgVEAhXqizPJJHVSZVkoDL7JnrSVHgplEuSKw2mwDDEo0aHQWPIWRUoxUFswN6Coo0SR0Ci3ZJ+yHst70XV3Z+fZAe+AwPLC9AOA44JQLBT5lY2kiD5RvP4mnrtP2wEn0AO7evd2fh2/G5RzY7zzZCxE3O/ICG4YjX/PFA2YEsQEOAEDeMG1QACChbACOYWKWlGiSYUSgU6DD8EGRiOygHcrYJCAl3cEZSc240VOgBN+wR8TjwE/6zeLwUysoHxGkCLCcUadmY3xsRm3VAulncW/6tnc6aQ+0Bw7dA/WCUPNZjjh//vxKJ6JMfZuBlUv64AR74PHHH19Zj31LuKt3/fBQ82nMi38Obiqdy2noHlCqohJdqmUADOleQ4I5pDYNp7As9YKi0peAomNxTYhmJcoyIgWH23zgr4KMZVApFPlZgExFgiyMjVKHCaYl/mhxCnEzTeX1+3YzohWLew9TPNFpe6A9cOgeqKCEfGAJKX6YF78zVx+PPPJIPex8e+BEegBLcXiP1weiqhWQkMcjgJRzpfa58TwwAYCx7WkQQLUfgKaAU3TPJT3bRUHqO0SiX/jE+VEH2ehjwSyPkjJWNGPkatUxlm1TGUroQfspfkSHdq9MQYqAyUJGyTjm7Iuid6gAPcY4rJKvhSNYyENujVQ1MG1fmz5uD7QHbtkDnHjyac8TJS4QKK/pM888s9KFZYz+nbmVS/rghHkAoLR9D2MpDhdevPfzoQH5nAs5X259qMEASPLX733+CaQEFmAa5Jh6+Qr2kS3Ukw1U5lLCk4Bl2Gk5tL+AEeqlSS0DHUwth3BGFopWQRpkTX94DIQktYMaiEAbyihDBiytoC/LjGNktjx6IWwEm+gRNoi9AL9hS+9hsvM6aQ+0Bw7dA5n4clGAguRzscDEhItJfWAv0/bTea3vfHvgOHsAUdJxkS0/gZL3POpyHuQcwXhqn1sbXy78iY6sI06DawrRsMzgAODAeRnwYApWYf3sFC20dZKXQCbLe+Vbb8Sd2d3EBvhJYbnZpIFo2GqboIvNY0tAqhgTaJpj0FjShH7mAUmRUappmwYqvarPa4Fluo4wxRudtgfaA7fNA9uLRC4eZ8+e5e9pbTeAP/bYY7fNlhbcHrhdHkBk6f7771+JT3QJHwK258HhQVJUmmx4SAxIhYFsfmUeUJAnGmWJjEtavMnkjK5MqJE48EY0QQaO80gdj0uEJqCT5TrVpxdS7aGCLso0r0i3bEE5tQGUGEHTGOnHQJRFooxj8thi77DD7QKGPjTASW61Ff0amOKlTtsD7YFD90AuCJy8PHkGlvIpG0q3G8Cx+Xu7rHHoxrXA9sAhegBAtL2NQDZ6395luDoIwYZKhDE5B2srQAfBwUtWaAlwQFsCCuBDDQxaBiovbQlciC5T7AAnhn3U38t8hCgwiGWiE7/NNnszN22SRdLjZbl0R6F5Jt1jK49ZPRtsx68af+MOHeSmiBrjHQUl08BUnNHZ9kB74PZ6IJCESSzghIsJNoBjU2x9YGkOe5r60R44CR7At+LqxRlR02z0TnQpaT0P0Kf2u5WxRk5SyKowkfKko87QwGOAj39TjtjiaA5kDQzx3iXaOoBjxnNGWwMY9LFZSKvYlV6U5ftEsT/7Ihe4U57tqH8oHoEgynIxxsLokY85ZgwAT0exKMu2TWmqJ7wNwFNtAxM91n/aA+2B2+UBTFSZoKEjoJQUdbiQ4GaW26U5XITQrh/tgePsAUSWtnCfDwB4b9f3es6HnBMDWg5hgISE7BsacEJCYHAnusABssNK1URlZakLsIKqqz2AElQloasoEvtxaewACStKUZtpIyrXDegzBbBcZSjSAt1QkmgZAEotvC/LIim1iB5jFCURqqhr5cNekhsO7kx7oD1w+zyASTAXCGjRZC2QygUFZdulOdT1DS1v3+vSkm/dAwCl7XsUsIR7LtX3NqCpvu+juZ4XKbvptECAwEMkJL2QOpfsAiZgAoCF2CAAUsJJgya2VgmmVO0NUWni8z06Urwn3Wff0bqNpY9ok+Asw0yKPrA8dJeoFcsocFjJozMDhKwNEW85QquGEAx4IkC5zbLbe5jiik7bA+2B2+eBXBTqBQP5XFBwMUF+v6U57GXq/Uy377VpyTfvAbxntzeoxM+fYO9S3tOJLiXNuQCtNX/zVpSe5JZKOLjyz2+fQV8CQeglHlD9ig8gIjTilH1HIa3nUZqlwzw2v3BprNgYxbWhqytgVd/wt+zKsEbWMka/IRMZAJ1a1uFAFW9QaUCKZerqHuiQZxr0b8kNT3SmPdAeOCIPYCLEExeQpLmY4AKEpTl8Oq+PvtVA9Ubnj4sH8G1OvGfr46mnnuJhyvM+z/u+tr0teV756zK4UCBABE4gKDkoFNiAfYQEBlYSaTJMcR/RBBDYHZ5ACoGUmb1BBDOvnUFueVBfdLmcui2x+kldrck60J+6ApxZorMsRZXKpm4vy9EKi5I+QyFsZl9FlIhacplHOY0/O7Odaw+0B9oDt88DmKQyOUdLJkdcVDQRaq8BvoqNpY5MbKh/2ctetnz+C19YrpS7+kZOp+2Bo/bA4489uuenfLKkDFjCexYp3sNJYWPe87fLXlzrARqCCqHAfrpUk6U4L2nZPpyLOffGjmryhUhi1A2wqBqss4ASSgakuSlkZD7gnbrZzX3ZniMx1aBT6pKibC4xJppULQE87eA37LhJfFl2hr1evoOoXUWcIhVLc2rmv8UXDUzVu51vD7QHbqsHxkTriRnLF7iw4DEmz91dbv7+6le/utT7MeGi89LHX7r8+Wc+d1ttbOHtgWt54KWPP7rvLQSwFId7iwWWkOY9jzT5a8m/+XoBkM4l0wBBQ/AxQSoAE5IIjggbDrJzQInETTMxtoR9vAQHGQQvnNuEEEeoDFI536mLgCf4SXmoj3KgyeAS8CIEMbpk8NqxfNs2bPW273ks9sJxdHHUJiZCFuvQroDjsiwNTPMl71x7oD1whB7gZJpJ1Ut0UA8wwiP7mR544IFh1QMPvGR53de+ennh0nrJbjToTHvgCDzw0sfXN1YF+CMqivduhaUAE9I8DoKR1N9aqgjtWFsrsAS5gI1AU1LqMzcRELyExTCLIWIFGzEwfcgV63UxdvNSV4BnjDs2+ENToCVikwpiQjGJ9sh+jm9HS3NcgkMz2EPAQVbGUaehiuNRM3klYAeFnoeYxR4nRqasu9jZwJRXp9P2QHvgSD2QCRQXkzppIo8nyrGfCWm9e/JDDwGgJkQdqdGtrD2w8QBuhYFoKN6neB60/Jb3+6b7bT+E3gR/iBK7iUJN+OD5N/lANvmYsGS6qoGlPfkACPul84zijKW9UR+4A/5o/xTsiL20CZYwImV5RKHgG8oEUhKZWwjYfPaze8lPjhbBGbvawAWMxQZwRMfG61Pz6c4+/S05u6OT9kB74Cg9MCanohRleOaik6UNfHJHtKkf7YHj6IH8gHTetzXN+znv96S3dxwFJMZeJoMFIUKRGTOQEATnnv8BQiaSBGSu0ORgCyBmaAmYeM94IjkBJGlej5gRIBdBEo4DSII7AQz9RQGRggFp+T6QFzsgA/nYTpkrteo7i3YFS6PYOjIONlQZ7cDcNDt3rj3QHmgPHJ0HcvFAWp91WSN5XJTqTS2PzsrW1B442AO43xLel3mfApbwxPs5aUAg7/eDpR1WzbzISzeOhTqCEeVTFgBR9KmiDEsIKAOCGNMx3FhMxsc2gCeTWLTo/kYit/iAqfmEGr1slvp4IrJrefiMbbTyNmCPgaAKfIQhoRPtmX9G1A19pj3yFU2js2R37GhgyivTaXugPXDkHshEiHS/Jy5EeGLCevrpp8en0CM3tBW2BzYeQOQTS8aBpaQBpfp+3nS9jYcJlyjV+QVKMJ0MzThWmRgHbRRaYWssS+G4LGXtjdgIudxzSM5GqWhMCpDCecyIEilldqEqLsVnmXDWmb9UIH5J8IppIlRoQJ8bDoce49QEsyGKN6uUj4Y3hmLZPayn1Aam4Z7OtAfaA3fSA/UCs/2kjosRNtYCmvrRHrjTHsC34fDE+zJPvGeRz/u42piLci27PXmESyBZeENA4TH/UKUiNHNfE5AA7fBUT0dctgDCDzUQj3/lARDKocI13F0+5BXZkj9as9fWNzIjGpQK6sR4aM82ZkOO0d9486hljUUggcboSV8MIjZCYOrVWst7GO2wtpfk8ip32h5oD9wpD8yJak5qKMsFKCnuy4S9TNkzcqfsbb13twcuXbrEn/ABHG3BHu/b/Z5H77EAR6AAl31BgZjGG3WYBEoEQsEhRmQsJtGZ1ThCEowakUgmXODQjeOP9MVxfQxoYeEQOmAG9uaJJmrvdmkOzRYr+1WRsRCCUOQVQzSnTBui1vir/V2slzKJNfR1hMkO66Q90B64cx7IJJrJFReims+FCRcp3AUcyyH9aA8ctQcC7IElpMnn/Zr0qG2DvgkIOhJFgCT0nLARoEA74wIIwkCCdpRV9gipMq0jskRg3J/c4pCQGYZd8yey4Sc81jajxLaxHpA3eibjXoBT2aEelsX2Dj+5B3V4OS+ghL60IcAHH03uUp0aoSElNTCVl6Cz7YH2wJ3zwJhAPTnhOKCUFBcnfHsOyyH5Nfg7Z3Frvps8gCVh3D4A78uAUmCpAv72fXyUPmIkiHAEhMgzFgg+YJ/AaUZufMox6sL8gBSh1pRQjkMpqPSyHLpFNoWNjmocOOLSWQCtbNKWKEjxficvv8U+pHqqHlLZ2g2gO/rlC3hBuqFuyIEiFNuGYabgLli0AAAgAElEQVQMECyNwimzgSlO6bQ90B644x6oFxvk8www5cKECxU23Hak6Y6/ZHeFAYAl/EZcfR/mvYj3aMrr+/eOOIZsIECQLSGfuRwnu0oEhk10ro26jfFiiyk34wRwsLtTtGDdgCELAqkAZgwvQ7xErsoFPK6Q9ME1k28ceXIEDH0GOLlr4Ayp9Gq5bf70iWiLzTHXxPZhTQRN3/SNK8cr15n2QHvgOHgAE24+JSKPixEuWEjxQFnuy4RIEx4PPvgg0/7THjhsDwSWIDeRpQASUrwf8TwWj2IGIWJEaHBOycKk1Wa1rRGYGeFBL4r1GK/s4p5MUkQZEKgGTAIgBCSATHzjFMc5vy1m4zr4M9GvK6P/7uaGm9BDWYkg2aqUTT221eDEftEY0xlwioMyPBsR+/unUeK1TtsD7YHj5AFMdnjiYoUUFyrc7ybQhGU5HGPibWg6Tq/c6bIFYI5vZgaMAkp4P+J9mXLk8Uh6PLxQwAQ7hXj9r5EmAQJ5R+aHFGS+y4wRg204xrG3CT8jouWt7GaqQIK2EBMZbBpis5PQBj++u3Nm2lthT3AlKYAmyUhnSU4UKREsHhvWRn+KgBPSV1C2ijjR+FgsXYqM6bXtCJN910l7oD1w/DyQCxAmPVykAFDbB8CpoWnrlT6+VQ8ElvAerKAUSEoKPbzob0DgVvXfSn8BBC0bYgIhKRigZIYYkGFwwTH/GzBWLFHGHLxg/Rq5qIrdh7JoL6k7xj4BjmBG5z9A6gqcbNgp0CcK1CIa9yjJGoDTGM9EPf5K3LJzxuGrxMm8lwmydmCMaFAyCgTv7vaP75aXrbPtgfbAMfRAhSbk8cTFCo9MrsgDmnD80EMPHcNRtEknyQN4L+FLBXivAdTxfkua91/ei0jxSHonxxkbCCkjlILzROfNZDpAB84h70Gy0eyvzhNCBnAAJBx18bnHIzHKaDXW01BihWYiHQd8Ioqckn1G1Xvac2T3Ur4iSOhopXNAg35Y5CY7u5JL+OM+J9s0E84ZtG8lazawOwhsvem7vj6dbw+0B46VB3IBgFHJI8UFLE9cyLBEhyduOYDNuRWkjtWA2phj74F8mQDvM7ynAkr1/Zb3IgZz3N5rsi17hyZcgAcCHzMjhkFdlrPqeBil8StG6Mh56G+rJeoz/DEVDIABmBFvbADbosAP6Ku6JUsNkBfHzGPy1tgbBatkWeQiZYnHpFozFhFRfygRfzgW/OHghpNkR6xU2sC09kcftQfaA8fYA7hocUJ0pGm/ixmW7b7yla/0b88d49fxuJqGqBKeeF/V9xbAqb73YP/2+DiMieAjwkhwh3SQiz/gJExDUKkQxQF4FzQT7UoCR4woC/L56j4Khy4L8rGWtVRGGPL5ChXoH1WmFB0bxlIPm9FU9iraVO0g4g39tqXCl60efZAxF1EhBRObpk2oiH1qNGxDpoFp5Y4+aA+0B46jBwJJsK1eqJDPMxe5XOhwz5z99jwdx/G1TXfWA7hI4w7y+W24vJfw3kI+77+a3lmLD9DuyAvsBFAIBwqkhAcGiIgP3JxEwfgMYKX0pxwLYzmX82SDOYT6FHFSvIigUuAjUZ9hOeVNgEu5bJfNsCsiWG5Yq+XoR/sVKpIYghGWIRXdiuykwzYKTwwqy3DxWlojVcSuN31Xn3S+PdAeOPYewMSJCxwuZkhxjItafaAMm8GffPLJ5SUvecnywAMP1OrOtweGBwDVgGu8l/A+QjQp7ym8x5BPOjod14zPDdiMB2HGeR6XPUg4DniAG2YfbZgORgicABMUOTZTq//OsmOioQw3GrJwftIIaqcO4tQoCxjpnMZrkAdk6NhjkZG0g61QXJbdKNd7w2MraIvlRkHZaA3uP4gMxVLlBrEFhbKlgSmvTqftgfbAsfdAJuJMpkgDTttIAAaDekQNMPH2vZqO/ct75AZizxsiS3gP4f2DZ/J5/wSW8t5L+ZEbexMKA0TrrvqQUZiF1WuwAEHhv/6hLgAVWWQLAw5lFTAjhGQZjm28vBdIWYGJoCly96Tsow78O9lt2EjbC/RBRmyudqu/Ikko3wXNyfjx4Sv6xWcCpbz2DUzxTqftgfbAifFAJrAYjGNECnBx2++Bbz1dvHhxefTRR/dEo/Zr32Wn3wO4S3xdgsN7KLCUPNI84xEcH+9HtQ95EMEaj8w5YQUPR/0IGonuEE4MWAYf+oM0kQgPuUVrZ4lwQaKII+tlPIYVo/wAJ0I+PuAkuqQRyP7YnZcAx4CewE8giQC1lU9OEiBFZoYBmyIzvkIbesQVyDcwbZ3ax+2B9sCJ8kAuYEm30MQJ3kCFpRdEmu67774TNcY29vA8gAsx3gdYss1mbrxntrCU91HeV7Cg5g/PosOUpAs/bgSpq72PfVsBwEDumA2tAhDhg+o0RvgoY8U+INwHaURqQi2+c/aACpenHyFETKUBAjzIPeyx76BHX2hTIMjgJO4i4Lh78oQwwo32XUHJsJX63YIu8a5vFmXcg4zoMg2D4Sr5kAW9JLfvC9aF7YH2wMnwQCZXfRJdX8xwsUN9fWJUiEJhCQYXy97XdDJe58O0Ektw58+fp8i6BBdgyvvmZMIShqW7Zjs0UoI5wQp5U1AgUBAcqa8gRbCUaM0AkMIXkAY84TkIYRZYQQsSqTXKIPwgVpLAsixWwU7AFjGUO5bfHF0yJE1QioWx0eM2G3FskUHBAiJQGnua1lylkeA2ExLTf9sD7YH2wMn0ACbtTNTJ4zhldVQBKCzFYJmul+iqd05vHu8FLMFhWTZwlP1KOc574+TCkl8/cAnPCR3nPFCKDxKGCUSRDDUoMd6o74AhFQswJu2wHyM2s6d4yGEhm1KILSVUg59BAZmMpTPbzLIS3RIkBeAkAmXQxd4jD2aTLajh+A1RHLdJzd0UgZoHBD70SV9leMRs/jQwxROdtgfaAyfWA7pAaMLMxJfB4MKIsu2zfouuN4THW6cv3UaVAER5T1RYQj7vnbxXTp43cA7owk8i4dJWjpEacLxnR/Dh6EoBDTfbd+N0sIS+KpDCPlEFxxlAAE3Tqp3Vb8ZN/8YGCZDY2StqIDL6Oc4dyHYJA1iRI8mEJX+bdpikbUyCpgiOITimCZAzh5DqBqZ4otP2QHvgRHsAE3g+ZebClwHlYpgLIVKUAZp6Q3i8dLpSvBe2USW85oElvAdqHnW8wOZCfwLdsX3fYwhhAsLGpA2DVTZXz8FyWYtgMhsrp+WvMBF9hW74MFIUoW3ahDpwjFbEmxg0VQ6QmzZGt6TpJZnnd7pSpuVh7IQnKTMvKuKVlzQQxCCbhUx7rZNJlvJETXlfNDDF8522B9oDJ94DuWBkgsuAUJ5v0aVNrUu0CfuacN+mbZu07fRkeABRJcAS3geAIsBQnhWS8DqjPI+87klTflJSAgHAZEAJLvwYn2GgxHpmG40OYwZwGH9UaJoQAO1Tj1bWJc6Yy3woZ79QyrBhwhN1jg3qc1mN5ZTrzd/WE6CKLioYS5AeoyppP/QTohg4ykbyCUNoGpgi5mmgFEtf0Cdoo4oGJr0t+m97oD1wijyQCTdRA1wcah5DRRnaAZbSPnubAE7333//KfLI3TEUvJbZ1I/Xu8JSBSXU4TXHE4+k2/xJ89oAhGJ4wAhD1Tfe8L5XAzPJaJ0oEAoITl4CQ3tyD1Bi5B3EcW+LJIHgZpbw6RWnYKV6z0zaRDlaAqv+H8Y4ExtlAxGHNWMMOZfTPjY7ojXkyTm0CzLPRMBosIY/2CQ754AbmKqzOt8eaA+cGg+MCc8XxBwn0oSB4gKbCynK8TVzpFnKefjhh1cRiFPjnFM2EFzY8Btw2NSNB17TwBJe9wASUjzxQDmeedR8yk52qrEFNHA7ASKOh0wQIRgJhhJR4ZgJOI42hVjiDDEOj+Az+B7wgZQ4g/Y1MhNFjNtYyHS71I02OLSdquExS6odIzTkDUkaGfdHjTuLO6okq6wXicwbkaeBYHAU7RIgoXyQpd8nDUzFj51tD7QHTpcHchHkJ0UPDRdMTu5eruGE7/1MqAMwAaTwxI/44p5NiDjhAtyP4+cBRAUBS3itA0TbFFajDG3ynkiKupo/fiO8fov0PsdVXwtrgAWBEmR4KaqKIyCwuTFFkMQ7YLtdfJOmFTCgD/XSqw6sNzTVPUwEEJphYql2rPJVppbRUC07YAXGxL/sRf1e7osdOyWctbWPMGdAEyM5ggTJMc2ANMxyRQPT8Ehn2gPtgdPqgUyamnQ1SlxAAUV4pBywhHzqMAFfunSJv0nX4HS83h3YrA9QwmuE1yuRwprHa7nfMyPJ657jk57i6/paVgsEAWY0KowVvlKq4AnrTEIBGkIHgy3eRJ0Klw1woixTBjFmnkfUmIgT7n+WpTlUGEZij4rWtskGr63JfCERwWXqQTv8y+uYPPuzH37rrrSHeg460TM0CiVNObIJ923zPiy/jxqY/GJ00h5oD5xuD9QJGhdVTKpI8QAoJZ9jtA9AIcVGYjzvvffejjjdwbcKXgOAEmAXr1l+LBd5vGZIk8+FFGnqcjFN3R0cyqGrFkBArCJLCZRgrGSN3LV7H2jZGgNZ9FEIiYEY0JMhFAJ5qAbAKz1Urqp09mqX+Qpgl9eB1hJiLCcBnwF3keslMwpWGYYhM3yMOJmbjz1YbKBIFTUEBr2PCc011uoB+w9FVoJ2DUzVR51vD7QHTrUHcpHMZK0LydwQjuPAUy4YKMMTF2HUdcTp6N8ieC2wP6lGlOrPmuT1qa8V8nikDPm8pkc/gqPS6DEDHArggBnkD1z2BU/yDQ8NPtPGChvx46wN9SBVnlJDLxYsS9QLMkYbwhyO8kBLChrRsNTM1NISDLIJHGaWBKMQ6RWNi+NGIzzCd86jFO+HYRca44jvG5MYzn209wesBiZ6sv+0B9oDd5MHOIHnE/Rm4AAjTqSYTDmJav9Lok3oizaXL19ennrqKUaccCsCXMD7cbgegP8BSVh+wwN+z2Zu5PNaID3oiX6ouzseiAoJBObX0ogEgoHqhLSza4wGhgiAg/yG14D+gxg+uPAltnAJRYjKoFyt0M/1WYbj+RRzUkdkGQerTM4/jslshwbFFP34LsZiABqwlzt9uzXK+TaIfqYaNce41mxwyljlgz7DV07qg/ZAe+Bu8UAuokhzUUgZ4CiTdQAKdXjmGEtCOA44AZhwK4K+HcGtv4Oy/ImoUnwOv28hCfCE1ynl0Iw8Hnm98jreulUnQ4LGG1RBauDxZmn5RlwDH6F9TZkHZOC/oSkjD1ThmNCSQEwaGJYATZDDdsgbpiI7ctZ7jgw0kUUA0kHGRJ0o2tjlVhpHxuvGK10akMaMTtsIk22mvACghLNPA5Od0Ul7oD3QHogHcNHFJK2JekYocmGpF5mAE8pwOwJERABP+GZdR53i0Wun8B8iSYAlQChegxpNgoSAEcrxwOuRMuTx3D72K9u2OT3HdfwMoZAu8j7WOB01YVRGVMF6HwMwKAW+JBB5g/TGSXJ1ojYDZRSZCTj5NUrX3StXWB99eG3UdMKV2uI4IIeSjEtLZrBwyCA9YTN3ubEmeS82SRblZjzrIlbFW0M/dotvoKmBSd7pv+2B9sBd7IFcVOuFBWWa0DPxYv5cQxSO0wZ5wBPSRJ1wYcdyHTaK48Lej7UH4CvsCcsmbtRuQSmvQ9IKSGifcqT1sT2udac3j/fq+n0Gt4RflA8SCRGAT3gUhmBJvEk42URtssQ2IjQWQL5w9EnfRuMLNN2d1yjCWWP9hKdYYdt4funDi4SoY2xWFAwRLPWrtiLPethu4ML7DQ/caiGaInG+X6RbYay1XxqY9Cr03/ZAe6A9MCIUmVjhEkykOMaFOuXbjeEor23yDS70BwycP39+OXfuHO/phDQRkrvR5fATgDLRJPggkARfB4iSoizlaQsZKUdaH9vjWnd35OcFn1BASFAkiEBDdwU54EcBlXrNyA1bMCAEuFA5MSMd4Ey8Nkj5/ufhdPHmdWFFDECg6IBvyuH1w+ubCJMX/1ZBJqs25qGF3g8AJFrkCBPy+KfRKj8NtEg6aYhy+9mKtngsDUzTL51rD7QH2gP0QL3o5uJcXQPgATThkRTtsvcJ/ZPHhR95POvvmwGcEHnC87Q/AJBYasOepOoX+BG+ChwhxaOW4TjlqUM9nnnUfMruyhScIY5RVCkwQKYxVIhv1u1wxD1L2uyNPGGIQRpFaIAbbLZ7RVAScPLrMF6DEnVFe/RCnUyTFASEBEUBORtODemFDyGBMBonuPOYyFQ7jh4NQFLfiYORm/cLGw4tymDp0e0Afit75QdK3dnp2wpsPNeH7YH2QHtg5YFxISilmOxxEUeKiz5SPNMW+YAB8mmbcogKQCAPGQAn7Hk6DQAVQEIkCUtu8AV8AP9grHggj2fKc4wUj5TXtqxw3/3yKbtrU7lugAahYjjDUaIBOIospTr8I8KZ0RfuDcp7m7DiWwQYLqAMr9n2/W9TKD7YAtkj75rYmEhQjlFtU5ETLBmghgzSjYFswI5GRDSjvTqWfc7j/TUgjpqK/YZG/ijwHAX6d4RJ/uu/7YH2QHvgmh6oFwZMoAGhlEMA4CAXfRyjXX2mT1LU4YElqrQDOOGZ5bvjvHkcNgP+MG6kgCQ84AM8Mc5AEvIp36a1T+pSRoEFlFDfj6t7AG+rAUFZsnKUKP6LGxFXIXsYaAIvopsdLp8xb1Kp3mce0GRzJFuRHzcfMII2KWNzKlVHWBC78J5CPucGBpJ+PF0sqNq/ymcZjj6AHOhQlCoqPeJBjdE3bOSA1uNoYPKL3El7oD3QHrgeD2RST9scZ8JNxCnlgaBtiv6ADDxQVwEKx4lAQQ7aAZ7wCEShHPnoYeVt+gN7YANgCCkiSHmiDg/YgTFsoQjHqUebPFG2X11ty46bP0cx3o3KE3SIq3wu+TPq45fI4IDhzNeM4GCwQI16CysiadBK8cQED732FI4PB6Q0aDCxFdBd/UQKlXFtTkDm80DFgRxYIHP5uu9omU6Frkr0y4XuofMCRsIM1ulbf2MsdAH/iCw9djTVuGUb99DbPw1MdnIn7YH2QHvgRjxQL9wVGpCvUIDjPCG/5iOjllWISjnAInlEoqocyKiQAmBL+wAJ2ifKw87+A+ipD+iOHuRzjDS2ZmzRi/6pi77aJvm02x6jPPbWumoXyvtxPR4wIfA1UfCkwlLciDJyDd+rwSfByPS1YjAEDEd40CfbfSgrMBIlMNFLY8huX7Uz/mkWKudwJADvObUWquhY4409u7u6fbfsVvN0Y/uijBEyju2M7ZnRKzYrbekL/nFhiWYxsmVYgo4GJr0m/bc90B5oD9y0BzCpZ5LPBA9hKAsM4DjgsW2L4zxr+/RJ+8hEigfk4ZG+SAM5rHBd8vul1V7U5xhpnjVqVuvRPpCUvulTj5HHA3UZ335yUJaxJp92FtHJdXqADMClKcERuk0uMKA4iFLrjElDi77NxhaOUHF3kIgFjBGhSPHA+0a1Cua4nK8nwz2FVtRB/bwkJ3F7o2Pqv1FH/erO94lNwHtIdmuDegAKUEbt3vtNAKTNZRy2ZpXAqAamlUv6oD3QHmgP3LQHthd2Ttr8GD4hJHARKNgCVMprGrm1LEZu5aE87dAvQJX2SatM5NEnZWhT8znegk7Kt2n6blO0i7371aEej9Rt86rtv1fzQPWdFsW0WRqgkPeF+EXQwr/jzzbC5GU1R6PGT62MEI+og+hFyuErJvPK0hxLE7URDbmN4CrxLRRu34eydYhkZqg3lIGAYEPGF5wjm6ES4ytRIkITz0vvT/I37XYZOuNo2AFysoRIDutvyemF6L/tgfZAe+CwPVAvXmMyLwCFsiyTbcEJtqRPTZGHXKQpr21rHu0SGapjq/1QXu3c5qMv/Svw1LZVTsq3aWSgHM9qR9qmTac35wH5FJf6uUkakrKchXyAo8LITtbZqHbGmAIfg4dKfbrwtUMDUkXoikrZmstaylm578EkzPEtCmAjGgnaLIzHg3gUG7JMVbGPmUjtKEHvaYOS7LIo9N5ZCEIU5EHQbwFHD1awhH5zTL0kJ/f33/ZAe6A9cNs8ECAIgCSNwoBNbYe6eqyLYXoo3ZbV4+QhI0C27r0+Qjv0ic56nPLUoee18rV/1ZR+SWtd5w/HA0Ce+D8gMSUDWEkngwUCHmoT0gi2KBIz+88cpIw7eqe4AAYV5DgplwGzJiaAyXtVImSb8oqQ8c7cBBqDFSCJUasS5eJ2pXyrTeUCx1IGoY42aXRlrChn5fq9XTmtgSkvcqftgfZAe+A2eyCQkLReKFIGE5JPPY6TR33yaZeyelzLEhlCv8jatkX7PFKH9nUpLv3RLm22ffY73rZNm04P2QO86OOynwgk3jeGiwIKKFs9DCO5+3YiS2izbQqsEFjMDVB4ffHeIEA5ikrFeZ8QbiIM+4v0JQbqsQK+R8JRU7Tf6xpHbKYFGQQjTNIfu1OPZbZaBvihP9yXYGmhdgEHvHfMHFlv+s4L0Gl7oD3QHjhqD+wHEhVKYk8uSDlGm+0jZVdrG/i5XoCCrDyhD/mabm1IfbVl26aPb6MHAAR7ECfLXIIKandghctzeF29xyl9k6I8wCFkIK1TBN+nyBmGtvUsz/vUP7qraM20g8ASIwxLEKn3j4wc76lqJ6mHZhhwdD4EkGj/IKDiE/yGXAE65Yti1uGYdMkUbYBdkNIRJvu8k/ZAe6A9cBw8MCb0AiiwixO3L0C1TbU55UlRxwubIwA4DjRFZuRu+6QeaX3s177WI19lbev6+Kg8YCoC8hgewgFcpuOyXHBo2lRLAkGrlLJ2uBSXcgCGVUxB13ofDJsMO+ypfITkfeS3PWFwOxb+7q47QCQhbGMN5ZCLBI+QIds9guwNj4PmBi3jp9qtf9Y4VnbaHmgPtAfaA8fOA5j4t08YibJEjXKclBeLTZu0r3V1sJCFuv2ekVvbd/64eEAUotd1DR+Bjq2lAIxAteiAJWwmAEFWsigd2br8ZsjIe4l0NqhG2mKJrCsWjGXCqYMwZ8iTKiwjp0+iZTlWdIyQ58CQJEGw4IktbcCwUdUclqJZbpsBxuCphrmOMG0c0oftgfZAe+AkeWBcBDaf6FOeNGOqxzWf+qRXq0ubTo+bB3Cln0te69fQ+9fYQqtOASGMguDgPT4clYFDESfuWvLC1NwXxKUrddYdvi2HehOtsT5C1iQfwviANUimbiKSxxDfDlri8p/VuT2aOrrlKBEr2KhEOuUWCizSKA+b1gOMI/Ui3LDAN9zsCFM80ml7oD3QHmgPtAdOhQeABQAngVGiKBwaywRPOAbcgGP4ZGRHkUXCAxFJDgnr1CU71rhzdFQgYT6hLbRL5MY2SLKjOzkwlqE0OlMV3VSJQijwGFHH8XJRzlGy8JeCYhHDwdIUQx315BuiJaWKAXI7vYdperBz7YH2QHugPdAeONkeIDgMMgFTzE3L5gPDlCNO5ZuT+d0T9El0CuiBx85ms1C2+TByZHapnkN/9izUA1mQXThsdBnARUARxFFvARa2MZEJeEZ3YpJET2SL7aNVxrBnz5Vtmg4SQW5AqyNMw5OdaQ+0B9oD7YH2wEn2QGABqfKCBsCRLveMwuCPl880Wh0jT6BRoSCEJZE7KpyRGtROCaIMAc2qdEDY7Lw3J3DSMhlqcSx4s6yIROphBu6q7YGnbdkqbDVgzGEqKdRo9kDVwt/h3Wtxl7QH2gPtgfZAe6A9cMI8UGMqAQ0MYe5rEkfNOkaCsvl6MEn29QCyskNaUMQmXBPzOp7BbCCVI0qKBrk0kFO9Wcpgg6DHBOR2CvhoqS0ACPEjEGTTCFWMpGH8YxAjL2hCRwhWvf5Gr0oDXmzCCBlaTV91hKm+gJ1vD7QH2gPtgfbASfXAAAJkCiQZEsg5HBuWy4QMAhtgQTk2QOknVcwYYyVNMIV+eRI0sgRnmglAMc1B9avLAim0gzZMQAkcBXJyjBTjW6de7tMwOJ4aXYIeVrmeIkakTXu5hnkUnM3tMhT2NTAND3WmPdAeaA+0B9oDJ9gDIgivVZkMcOSN3YIojc+8osgOIzWKtgh+0gbI4ZYQR2jCsb+ZFk0ADwAF9E/BLJtWzCqzGXWvoMuuN8cwkiRYEhyx3BEm9augp3wAbO+rOEGs2gQlNJm3Skg0TYMd7bws2MC016td0h5oD7QH2gPtgRPogVzidcEHomDv0gQQQQO4BmWKugQSRD8AkTBPok7bfT8DooqHoBF9oZOpFEiRzXIyyEntIaRGw7Lf2hGkAYGhs6LU2YxlaxfsH2OIcjNdDqm9gl7ZzhRNaAtfNTDFI522B9oD7YH2QHvgxHsAuIMnLvNYNruyGhEgJYAxgIX0sLvsXhFG6K+6UYplkIcAFJbOFl7qAlAwumPgYp6gAcwoEkt2GpblL+skzBnqjG+BsClXwyQkEQCDRwWS2ET4R3DyMiJEstQwVv0Q+bCkshra9I0r5yvWufZAe6A90B5oD5xgDwSUtkMAJAkcUAMQCCSwB45ZAZBQu0RmdKQ9T6lDGcACMiIHFLbLSI1ahYsop5IHFRb7pGAyHqsEdbOVImMANupjH4XJIJ+2+JYFPPYY0F92zOU43h4BhdUHtC8tNTb2zSBsSEeY5ivSufZAe6A90B5oD5xgD+gKryiJIz4DHjZXf48yUaMMeoKSScZgAQyChPEEIIk7FFkKFLk864AEHCpBZ9sA0XlGMVPrLJXoIiBSn8k2hiDC3oQmiIFlGQeOiHBZaoteR7GiMaZNc2zrLOglueKLzrYH2gPtgfZAe+AEe0CXf0V9csFPqsgSgEMQMo/BJ4CKgAUcMHAI3dHJy1jhDR57OS5QJL1iIYex1jBF5dIVJwvuwlKxFQAkvUxpkNYC2cJjCBShqWyI1JlyTD6k+qiILVSw2bDOZUX5ckpaekmuOqPz7YH2QHugPdAeOC0eGNEZQo9GpUhKCuZm60+egrQAACAASURBVAEfhCBFZQAhWMkDdCBPuPEeJoSXEHMiVgTCoCJLdcyuoWPIIOHEnhBM0pRDgEEIFlAuSY4NdEwjxrF7quOAPpXiL5bjaBFVqS9Ba2dnuZLxaWBzqdHEBn29JDd92bn2QHugPdAeaA+cYA+soUMLaAoQgQPGspPhQ7BgvhhsIxkEKJehZESfSqQJjirsoTwKDRlQSB2JANmzKYujCWI8GEZQBI5Upz1NETtAyraQrAYgab+VzKAE2j50RIUhTzYowiS71GC0t5Goa2CyMzppD7QH2gPtgfbAifYA6WVCAmNA4p/BMBhfmGGMlcGWQR+kIADS/DdaipAYhSpgZHCqkEEd/uacLAr8FFnO5tt5ATzZLUgixJiUEh2jvBH5Qi/9gzjkYDdL2AGD84gDSTh0cMruIeylGQ5QXscD2Q1Me1+7LmkPtAfaA+2B9sDJ80CiPwADXvI1BHADngACPJNHLaHIy2g4DijU/iknabktEYTLWCIwwkUUIS3AwaNBI3tBZEtwaZpUQ9G+JuihGmqQnpoN5CDNv3QAfGX86ImnxkEJ848VVx9AXgPTdFHn2gPtgfZAe6A9cGI9oMiK9v1McNBwBiiYMcw0isnMA1IEwSJRGqAXQCNecZ5iBtG4FscpC4RZH7tbD6NGkbdPGnOY5i7lkQsMIgyho/QG+lbwU/WOpoKtiIKcdTPTZAwoe7dgcwPTPi9WF7UH2gPtgfZAe+CkeUAXf/81Cejar+Ut0FCFBeUHCnG4hJE0Sowmx4UuZi/nqKiEsuK82XDC1ACSdbRprdsCuA9K4aA5PuS8V8nRtBoNUuwIf4vBXoKDOVDPn3Ep/kAhQS72ohEjUjvL7hXd/LOBKS9qp+2B9kB7oD3QHjjRHiiAQFgIICEqg4ElwpI9PihzGy/nATISASJcEDuCKqYOitI35wIabIE/UGTYqK4Mh7AsAEZ4kWzAEh7SnbIiwfapRLq15JYSpGkkWYm4oWbAkw2hHqnRXiUsudF2i0E+dnovVgOTfN1/2wPtgfZAe6A9cAo8kBtWYigBJDFMBgdYAEzooWWpChdcqkrEhVIED+xjKApURWak5XjAhnWRTQIoQ7ct8PId7QqkEHJSr4PJYYA8QRPNoTxZgA3k+YfeETfG671cqItNgqeBVPJb6cu2vSSnF6P/tgfaA+2B9kB74KR7QECT5berj2bCiSgmuEAZYA8yEo4EVGtAErAQUbLHyOpqO+W9dAbaMVXt9/t2qKQutJsN5zfVbBPU0GLLyigDSYlUJaW49HFj6Mn4qjyIlDdUuh1LR5ji7U7bA+2B9kB7oD1wgj0AaNg5k8t+0rLE5nBLYEJDJT4IUUwL/Jo/v1qvAkiKNC25ZekMhGFA8wZqyKZ8bw6Prp0zBTcS9ln5OsiGwoSBHEViaEm6WAezDGADsibplOgTG1JLVAasKkjJXsESx+lKJfbBzk7f6Xv1evVBe6A90B5oD7QHTrAHalQEwwAM5MI/ICEZ7ldyNIkhF+GE6EkxH0KYCwITSPMQEE0wIUCBTvxNtmDQ1q70n2ndZ0VaIzjJ/rkXS+0Vtap2hOiiL3IDQ2Aw1aEXMYvQNeSPDqrFYSArVQX5UtRpe6A90B5oD7QH2gMnzwOCgdgtmMmFP3gxQzEjxy+EBVLUW3EnA1cEOkW/IS0RprQJZaAcZYYzAhMKBqylQ9IZCVNJ9inhSNCnrhOWhqgY42VE9VAh29gm+AOlsCW+gT1smT1RMtp28mCAWwNTXqtO2wPtgfZAe6A9cKI9oAu8YEAAMiM7ufhrgOEaHBEkDB1ACvxLpIZwYZ9AAvqhaYBDZYliGYhMMqNdAEUFksZVNyu1fCQDglwWPdNeAU70stl6aC5KIWlQ0thJY8hvx1E+zKhLiBKuNTrimpYGG5j8onTSHmgPtAfaA+2Bk+8B7ylaDWT9zblBAmGKAioAJUFSIjlKUQ64SMSGIOaITWBjqDQYoQ1VTNphE/VVpGf0GZlilFrDOuqVGEOWo2KyS8toA78sIvCXcJjGRnEj0kRbohsKMMDYy9Rj6J9GiZc6bQ+0B9oD7YH2wMn3ACFhkAPGA8jRjRfn6AQ+4QJBR4Gq0p91Jg7AhfoEapIKwdgtUEXVisxw/xBAhM8ZnZr2zJwiStoDJZjxfqjc3imxr7L8pt6wxZDngRF1YJSqFDvLpnSUox2erPeg3ZcyRYfDuI4wDVd0pj3QHmgPtAfaAyfZAwCGBElIBKaFlGlskwnyjTayBitHVIZFOgIvOUe4EEcINKAPjyydMdo0Fbjce4ZQbi5xt3Vf2s4RCGJynFU19HX16I+6URxrVAubAV38V6oIUo5Q2QDdMJMDizIDFcskr4FpeL0z7YH2QHugPdAeOLkeEIsIH2Y0KOAkaNo7Oi+1XdF9kowXieMoJZRM4tDSnNpTZwEkRWwMHYCN7F/aq3hAliJJaaBRAIMGhM2iERRCa/YrdZHAvow2CfQGpTFKxcGUpvJXxACyBHUebxlbA9N0W+faA+2B9kB7oD1wYj2ASzwv+Lziz2U3Bna8+oR8giYBlaQjVAMPGJIYpWGF3cL+ZYkPpBGB7Kc9QAWvau+Vb4fedelQNMROYWtZYZvRQ6NHc8imaQAv+kVj4viVFRehLx0nZJJNyq/N6h/fXfmjD9oD7YH2QHugPXByPcDFJpsvygh0IM1T0ZuMcu5dWgEMN3QHHIQcjPhQrMCEoRipobBkCSuD0qRnJTuqDXiQO6JJow7SLDFmoI5FKqh/QT9j9GjDYwFkytlVgTFp4bC0jMkC27yGJjsOvzU3bOtMe6A90B5oD7QH2gMn3APAAhMDR6Jvva3hw6iBDdr4Z6oitKiKMlBeJV3B5vEa1XE/gYg3hBf4oVxWzj1OQ3y8zIjVtEHFm1bDPtXCKrRQsRWU6BoBzLE2tiUIoW9pizJHngRrkpmyGTVzaK6/JUd/9Z/2QHugPdAeaA+cAg8ENIgTZTw4dt1kBgLEiBUZKnCs1tkQbpjhXqQz4oiII3BZMvpDNihmAE6hK+ut6gEqgCoBS6AKemd+QI7NFylpaOmHI1gtvEMPaam6UMSR0XZSGnuxDcDQS5DUJwOkxGPBQUeY5JL+2x5oD7QH2gPtgRPuAcEHrvfzIQDBccqV5ht1ARaBkWDDAgwXABP8FpzgZhWoWc4YmqY+sRmjSykEdBSbAjr8zToylgHHcIK+s787Tg6j1Ak4BjUQkehH9Tzw2FAeMVJly3zA5cfBeWka60dFA9N0SefaA+2B9kB7oD1w4j1APjEEMN7CKM647jsINMlBcCKiGJEaL5WNeI03UQtK7KIKNl6+07fkEiFyxMnLdIpdwQ4sf5XoU/F4oE5FAJ5CegOKoh9pYCz7oARQkE8wM0eRxbK6Rgepa8CMTGXl8oygjTJc3sBUXqjOtgfaA+2B9kB74OR6QN+MEyQlqkLi2AxJkDGgxdEXNMpyVsBI4FHKLYkAIuZgRIZRqKolgGUzACZDdtUjpaNnAGZEoaDIgEMdtlUglSoVsq+HS10JIMUVTE1NIiRDVfZEaWlOxtA7cQOLGpjGy9SZ9kB7oD3QHmgPnAYPFIAAJAzIUGZn58xcdkqABsMGRPA4+4HcEWVDiPwTYEk5fpuN3Qk3ghLyys7OgroVeRQXD2hjWaJEai7ZKKuoYpsMQTEL3dEe0DRbqNEK1AxgtA15dpST0J86R7mgSY16D1P80Gl7oD3QHmgPtAdOtAcmKBgEiA7em0QIUDmjPQzczHY1shPAgLzkR71vCGnuoL8ghbBRvMf2hhfsc6oUIyhRY8mX5RV+EFWijCwNOtBkojN/zYgaLc1SX5bjNAApogm2QzxnA7w8yCP7I460DRl7xTZ17r/tgfZAe6A90B5oD5w4DwA+JnQEhjCMEAAiKBrWOlVbgoxHjdgK5SXdOcNjwAMByJAEsKlRGeTRhmq8ITwBmzg0IJSoU2wJmKQdU9KYo2SBJ1SEbcbQsDE9kbEZLRsDNiBCR9iRIqZyl1shFKAuUaf+ltzqZemD9kB7oD3QHmgPnGgPTOgQSUwIAsjoDt3gAEJDUkdkEk2qsARn8NjRG+BE2hE+0ADCAi6hI4MTnYk6l0/7pptVJgGpl90WGpnuElU6TBtB0noRDWox5glSqCcj4UaUttHsNSBPNDaco0hXA9N8wTrXHmgPtAfaA+2Bk+8B78MpcSWNSZGTAQdZovKACSrcaqQWW/AIpDBN8MU60CNMIy0qCKyxjyM5KYNaRIT0QBrLVAJ73GXsTWITR61AN2gjeDMQoYyNUj6lI8e6oop7q9SEf2FbgI32sO2MoPWSXHFWZ9sD7YH2QHugPXA6PGB0CMkkBOS9QCo2DABeQCcFJtR7izHTM+wfCGJ//WERZTlCQwhTvwpLLDEjWcwU7lxsJMRsGilSBIMFTjgO7Az04oqa2kC3ILD0cX3t59YYjJ7R2z+Nsuf16YL2QHugPdAeaA+cTA94ZUygoaWnQEqu+xgY8niiHWAhwJAgT44BTcCGCU+GMMqYgCJhxWUywIpINFQWuWk55KZ9KkY64lUK+MgY1sYSAg7/DEzSBnQOUONDh+jOsqSFsDw+ilq11dgp2hUdYYqHOm0PtAfaA+2B9sBJ9sBYknKwyNGkwFJACUMcjFKIgFGYchxXMHpDeFIlN317YzcxxcJYm4jS5JdBaIrwROp+aZYTYwTSCU2xObEi7U3SWCENrdkDEHil7KuiKkXQMMaVaawrJWOTt9oF6tCsgYnO6j/tgfZAe6A90B446R4QaCi4MpfbEDGZT8FSIAr0kL1EggNBi6BkQgNhR+J1X6Wtq3K/JUef9lvMq/CxPzwVcKH8CUvDXkeLUDOiRgMAZS9td4fYzUOLR95DIcwFxKRyY4OjcKhrYNq+6H3cHmgPtAfaA+2BE+gBgUCWypKCCYAHeSrgA0hge/wJSAQjNpGqwE3AokZpJFvwgsgT69LQPkRZ2sWtFZ5Stu4rpKHpaZC0AM8AH9fBVsjmv9jhSJvCTzO6RpscKUteYohjzCIX2xuY8gJ02h5oD7QH2gPtgRPuAYEIAAUDEQmFG2pZhsnIE/ACjUIfzObArBXk4t4n32eJKhTJGl/R57fbJtHMyJapLIoLiKQoESPabfW0vZqScnSarCdQ43ilZ0Ce4SkiqhWrMVOe7Ja/JCH9YFMDU16pTtsD7YH2QHugPXCCPRAwCiiBKGaERlCkKI4GmfZEA5CBaSIRmrgiIBPYCETw2HuCUoc+ai+aSXQmsnCcMrTj8SC1SPYaW4wPNRHWbCcUBuysXNElawL7QBdla6ku4ytaBg3S5uixiDkm5RqY8ip22h5oD7QH2gPtgRPtgXKJZxaQhAFlP5NQIRyyGqrboUyYMbFC0LGMGz2GwtBigsaUJlBxBChUZjT5/9s7k93IYSSI2sb8/yfbg9iSSbV75qxG2LBFcckl6lAPSZYK87nG03kfkvE1QMVbhuHtRcSYsAhEgbPl2/Fj7XF9KmJZDlNKWTW5nRPnZDHFQs9nK0xH5raqQBWoAlWgCvwLCgQLclVOeO8nKJAUTt8z4w0xaypBh/AUmABGuMIUTxeEeDz2Nyil73mlveWUqGI4IkhlzEDEA+t2rrhlERiUmNDzrJrF7tM/YxyijDOBWStMT7V6XwWqQBWoAlXgjQr4/X3DgN77UaFBQiamRRLq10L8BzCkwrOhw3UYVWUWCHF+qjWP/pHQgBW77HesjGoAJf7PQWvZUIVpx4YlhCs8PoC2EPd41Njy+/n5pbyWOB6efL17Z5ecqLY1KTAdfduqAlWgClSBKvBeBQwM5gcCBCsmk5EoJVwRwCA4oBNngvx1JYAR/GIF/tLOWnytSABI/rA4o+PQi1mXEtdkaE29Y8wEXLV9J1hzgLaCmNnv6hMinDg1OPFxwH3TFj4eZyMC3CZrIqY99rECR6y2qkAVqAJVoAq8WIEAjFDiHPJGSmAZcoB5QHM3tayKTdhktCAS8Y5QwoPbrgbh+UTzMMhzcAj2CUK0lfqU1owh2z9xq+MAlOMbFkulTLTDUReY6IFhqtKEe/1q7rqjGJxq8/B6MgSBOTCct1pg1QqTdemlClSBKlAFqsCbFRBo5N3eAETYQN/pR46YGzABTAVaBnQshFaetWjpS2tPH+xwfXbH1lo2V+UpfnY4E4c7rxi8luDidnwlJ0ay85xPx7lCZFJMlYzxUgQFeu6FTayHyaHyst8Ck1/YXqpAFagCVaAKvFsBoIPe9AMTrDYRjr4Hiv5vjjaBS6o05AcvFKBoEv8DKAAlBBWwmWBq4Cilraz3+IkxA4E82WYv7SatbAPCl2IbUxPr2cYj+LAahlZisi9fxlMMBSQ1faAS0wtMt3a9qwJVoApUgSrwUgXw9u93egCEqy5ggatqY6aZfs4NGskE7mjJRIE2m4/nLqnaM9gxsAQBGY2cjJ53HGtdYhi4Ws+Q8jRUglKNChdqSDkLi07+dOo140msNfGgwdwMZpjHc1xc4FWOqcB0ydabKlAFqkAVqAIvVWC/yYcoCCJ3PiqmABN8zshglSWpxhBOyB8CBzXvj+vnYJTRQpQWSNmAkxACRF6QKlSumKY24MhtAx8+6Yaf+LoAicHJSfqFgKsqReMmJH9gMPa0XA/VVN7osVEJ9vEfme//KlAFqkAVqAJV4NUKLGhAHnifV0Umh6UPaqRSQxZA1ehbh6XBCBwLrFgQwAcAgi7wz+eV5EOTsC4hXAC0ICcRzMTYJ0jJcJjKNSpCGNcRnJiZtgpJVMt4Ynd8iUHgBdga7/TK3NOVwDWy5magX43il6qXKlAFqkAVqALvVwCQkL8DCqnaKL8BEgLGYQOwA8EJYMStt9BEUMk1G3fj03EcWT4vBeEIVaar874JuKGX5u7hAT522xDXmGOCMwQ3P9GcoJQB2wsEKnfFncA4H7lHGFbGji4y8dkK0+O16W0VqAJVoApUgZcqsCtJOgMkCMj21hehgHDhszwbZoARP4AokwTqSRkXYphCOFHzNCckI9lw9xn4iJK4/42IOC67AyzzVS62R1vOZ8Dq8+PnM3lpHsNylevEpaoYYmJcnOp1aE9VSva9D8jMCY1ODVN7hkk6938VqAJVoApUgZcrsLEgMAGMEJAkubCLOSTdAzRAjADHrCZIiVa0Th2EK0KFfbjaFKOfX8aMv8ISZno70ItOxWes+NC6Kl1X3AQezPODK+Fn+UrmudJiIAidaY+rdGqbUvOla4EpIvVaBapAFagCVeCfUGBTgN7sVUnBowXEE4EmpDuVHU99ShAoInSQVrSG0+PK/Vwb4wtc4EO1nqd13PvwOXlMbcbk6g/MJEbaIdPovBTg6hoHATmmgJeSPtiIYeWiqZy+D6irQ5OSS79897cXrn1VoApUgSpQBd6uQEACgBRUISbog22pzDwOdyPrbMllDyvVpigCK7Epi+wgifF+Ac739zeXYX7sBn5kDyuCMGPt2Me6DK+tOvTp71TSEGcyDfPoKohiG8C4EkGbYDWdGcT17uyn5LY2bVeBKlAFqkAVeKkCfOPnmzzQAJCgN3wCB3IKJKGNKYSHU91J2oQbfKktpg2t5LvaNIuVHjRZRTK9YD7LPYIQVYNu6FCMsmFLvtHH/7Pm+FWggrbEY5ZRiM7LN3CnJQK4NYeRZIxeIcCZoFR8uCuwxE6F2C05v1S9VIEqUAWqQBV4swIDMX6zT0VHkKIqy6/5cZvOFSADB9bw76rZwKKshiMINjZN9ABgefBGJdVrBEK/RuED6Vo1MYtiZksOK9H1tE34i1/Hjk/8zQ+ZTvdkQAWr6tV0HFiS/bW+h75HyjaqQBWoAlWgCrxeAeEM3ugPUpxqjVkmQ+YBVW98Y7AIGEUQbXbpP/rIGDOI/u3REwwwgaQLP64bGQIkYa7+0JeSWALWvCy1+YV0OtfE2P39ds88spbXw0e24e0/hi8KFLjJbytM0qH/q0AVqAJVoAr8AwoILgQTu53Cj+AmiRJOuIcFPDGYDJ8ELxYNubqDKRglUCx6yr2AxAezB3ziddlbXWqqsqV2qlWPT9EF2AJkiMShMqbkQTeT1eWUKWZ9qk/OI2P4ipQfn8FCPAWmP16sdlSBKlAFqkAVeKMCgzGuAJkimIoOR//8fJ/qEMnAeXqqgMfwdDjknAuKyc+PDz64csES9spYTcohc9/zu9lSDrI7+KGvkTnVHTnA9MAXotluZsnq5HyDkqpsCDnBagXSHbvMXUDGJopZHHcOHx8f39jSW3EXmEb5NqpAFagCVaAKvFmBAMJdkQFXCFAMIQYHZCrQSL/XB6QCFawmiZ72Fte3n+LNVTC0AGZAIxD1i6yEq+mHFfwJWLQtZ6BxHItdMG1+kJsjZ/euKW1oYuyIkX9255hxgckAH2L5+lpOWmEavduoAlWgClSBKvB6BVK1EYzcb/hhBSRJThDpEFKUuPfbyEZ5blJgRLYAIwILAQZBbAyawJajAR8O2cb/gChBk6MxITFWP5hSI4ab3Ji1njkr1qPBvp/UbQPVMvQRvuhQVS3Z1KRWmCJ4r1WgClSBKlAFXq7AfoNHKqwgufhDuCE/EBc4RqAhKqjEgntsoeEXFRlMz1+kIVjYuNb/4UhT8zUlKQ2JfFTFiTFcpwImuLmgj6Eq3syzGa1zRYpB2qbiFgB5JUemvUHMAmFM3Xq8QcJTRLorMEWVXqtAFagCVaAKvFgBgUbe4s+DK8lDzEvnmIRAZweNcARiCFH4Gmja21oBE043ucQjylaBHbozjMj1ZeVWmUCnT8dlIHbMNhMcgdAOMYdWJwCtRtz4eXTH9CRO2xfEecUQmYzQZ7fkjn5tVYEqUAWqQBV4tQIBHqNC3vfTnfvAyEUUD7o4IAL88CAuPuuT6bS1D3kvUGH16TiVtAnmr0KfM0xAHsHK44C4jyH9ZkJYhv9ypJBzJybEnTRQFWpAj7HytDmh6um7FabfFG9fFagCVaAKVIGXKSAs+J1IAkm5JjVUWVJBSV+u6DcjqcumccEfoWnPMRxxmktDrFIFmmAlpBUnvp64AjPZTnSlzGtTccp8Xh2XpgiCCHn2FeTDLdYLAEVdEw5ijPFfYkJXgcnC9FIFqkAVqAJV4N9QIASBq9qCIt0ThM75blVbyA887S0JWElKhSf2NBTwwN14CBQZoEZHFmwGS6b72TjQJp8BIvWD6uQskUw+BB1ZyxpCGmpMHssaHdp6evZ9wDFfwnvBEwcLTH+Rrt1VoApUgSpQBV6vQCACxHHaSiusEbDg85LAJRlgRUaww+rV5h5QiKFLH7kzmuXTZqjI5NNwgRC4HXp5tB+lJ8SAMK4f+L8KQaQxTlHVyBUsxpW6kopaNLXywqIxn/ksP42lOeskB58FpuvF6E0VqAJVoApUgdcq8CfRkBHYjcrNYYDASK6syvBBjdiZOrBxTv9oLSBj/lZBCtUburETzkm1KWPQdaAntBWxgy8L7JwOHrappessE4tODsBLGStzjK1DRXLrfoCRwUs9PjwOJ4jf1aVlhf67JUcZ+q8KVIEqUAWqwNsVwFu8KWNS0dYUIeg5lPt1TX0loCR0yv/bOpalasWKUPiEQGLw2G3HhDWsYk2MdwNjtEsTDo4X5ULIw5gffaDVwpvEzT4GeGwztwdQ2fomOS9IDN7a6xmmI2RbVaAKVIEqUAX+BQUIBkzkVGuyxeXiyYCOp/ESANnQERAaXVwYAmgAUQI3AjJVgNB3/cSpO7f9sy92rRigGlNXNUtzYQcxk8mIPCdzzGAcZsjLZ+LYNuno4NPEtapj/7lD7F0VqAJVoApUgSrwTgUEDIIDvfkLONROsWdyu7gmqxY0+GwP5ps71LABzET/AJIdqDrEUs64Yp/BaeZjdLmbyezf22YBIQSkoH+uHb2Mn/AuQJpqlNwpDK8ZImMiCgExMa5NVP2U3PX69KYKVIEqUAWqwJsVEE4EZf6eCaCFEOMp4YYnaBCI/MTvsbYgZzVneBogE/8prgVXZ9IVBzfasIbx8aJjT2QXb8lhLQ2es0eIG7/AoCuveSLTYjOuNdDZV84t0bRtixJPhj3DNC9aG1WgClSBKlAF3qxAqjp4xxc0gQfwQy5gY840ezst1RSt0CoSgxaKTA52aILGYNSfipODvc7LY2V/Uu4ayhkhBSp+UfypROWqj82tyhMojynLL0CJwOeKUupOlmCICbMJiHJmqRw7tuDcn08NJtwCU5TotQpUgSpQBarAqxXIPpXO9SCVqRyRElSZESwoUbRPVQZoYbwglxhE2KcHQpqfZjErVdZsKjs0OpjiUcRiKJme3dDYmbLnJp8dm0IF21w/C6CuftzYJJZwHSBuaZT5jPPz8+MbnxrEjyb3sQIRqNcqUAWqQBWoAu9WINtsqNogE9FEoALXtAMPmAVAmF8TCy4EKX4SjbOCUoKMwx8y+vPz8c1FASvBRngGMKXKTRTOSO5zNaQsb4jZYWlSphh2AmoBMtwLhRCa/OSeBmIvfBnXnHs+HZe1IC34b4UpQvVaBapAFagCVeDlCggsAAmgivwpqYyRC8IrgIYvb15huvszDNBAGzPCKbo/MAKaAFygH9BC0BhQsaAhHhv28KX2ARRaMt3p+VGYqDWwr9Rw0RpFRtP8p7NMNO6gFT8pkLnEMYb5gE13JMxDlvTM3ApMUa3XKlAFqkAVqAKvV8BAYcwB6gwEMDdXn8AOIA8Qg7emuGTgKBByylJkka0P4Aj3fq7SwMd2iDbv79UDVnFq2LK5AbANVlrzNfkwdCYAHDpAd7kP5tm9wnHcBi5lKh2kyfSIzLDos0/63i9921WgClSBKlAFXqtAKjR+f2ceBzgCUnzvJ5BkC2sAw9twWMh6URjHW3a/CoM5dsgm17pvDLtz33OKkCd2T/yCOsRHdBlmU0DIiXkN16hyNGzkpLXaSdiQ7+SSffj3wypT2G3MT2Nk3wAAAVFJREFUOo1Um1phyivVaxWoAlWgClSBFysQAAIAqH2uSAu8QjwYUAB4+GxRqi3rPBMmj02vveQxIcmmqjCBJ84bsrlW/XEjUHK1SwvFKNzmE+IgDszDNXlchhAEQCrUw1uvxUSO+Wqg0lT5nTwxBeP0cyATJgpMl+K9qQJVoApUgSrwVgWu+omTCBCJGDAjvKAJxJ2DGZigLg3bpKDmHuI8Vns+VaEByRg2SCiwsPs4NiOOL1CGepCgaJZx+TedBpYSBxc7NoWrc0sBH1aXDEkCIMESYYsx2f1uW4XAmXzZSYFpXq82qkAVqAJVoAr8QwoElMQsSCznfMAI+VEbUKDqDSCBzx8KKLk0Q5jxooMQgisAxnxCjgDiT6nR+JlNmNmFpASxroIVdLg6ZrrjWgKUoSo5LLhjjF/xLaMEpyTsnTta5/rE5qvn0SW6coDd/f8F1TN8RwHfQboAAAAASUVORK5CYII=",
                        }),
                        a.default.createElement("image", {
                          id: "image1_2133:17259",
                          width: "332",
                          height: "290",
                          xlinkHref:
                            "data:image/png;base64,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",
                        })
                      )
                    );
                  });
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("../../../hooks/useI18nContext");
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/pin-extension/pin-billboard.js",
      },
    ],
    [
      4821,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/component-library": 4381,
        "../../../components/ui/button": 4478,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/onboarding": 4644,
        "../../../helpers/constants/routes": 4645,
        "../../../hooks/useI18nContext": 4701,
        "../../../selectors": 5013,
        "../../../store/actions": 5020,
        "./pin-billboard": 4820,
        react: 3730,
        "react-redux": 3695,
        "react-responsive-carousel": 3710,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, i.useI18nContext)(),
                      [t, n] = (0, r.useState)(0),
                      y = (0, a.useHistory)(),
                      b = (0, o.useDispatch)(),
                      v = (0, r.useContext)(f.MetaMetricsContext),
                      k = (0, o.useSelector)(g.getFirstTimeFlowType);
                    return r.default.createElement(
                      "div",
                      {
                        className: "onboarding-pin-extension",
                        "data-testid": "onboarding-pin-extension",
                      },
                      r.default.createElement(
                        h.Text,
                        {
                          variant: c.TextVariant.headingLg,
                          as: "h2",
                          align: c.TextAlign.Center,
                          fontWeight: c.FontWeight.Bold,
                        },
                        e("onboardingPinExtensionTitle")
                      ),
                      r.default.createElement(
                        s.Carousel,
                        {
                          selectedItem: t,
                          showThumbs: !1,
                          showStatus: !1,
                          showArrows: !1,
                          onChange: (e) => n(e),
                        },
                        r.default.createElement(
                          "div",
                          null,
                          r.default.createElement(
                            h.Text,
                            { align: c.TextAlign.Center },
                            e("onboardingPinExtensionDescription")
                          ),
                          r.default.createElement(
                            "div",
                            { className: "onboarding-pin-extension__diagram" },
                            r.default.createElement(E.default, null)
                          )
                        ),
                        r.default.createElement(
                          "div",
                          null,
                          r.default.createElement(
                            h.Text,
                            { align: c.TextAlign.Center },
                            e("onboardingPinExtensionDescription2")
                          ),
                          r.default.createElement(
                            h.Text,
                            { align: c.TextAlign.Center },
                            e("onboardingPinExtensionDescription3")
                          ),
                          r.default.createElement("img", {
                            src: "/images/onboarding-pin-browser.svg",
                            width: "799",
                            height: "320",
                            alt: "",
                          })
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "onboarding-pin-extension__buttons" },
                        r.default.createElement(
                          l.default,
                          {
                            "data-testid":
                              0 === t
                                ? "pin-extension-next"
                                : "pin-extension-done",
                            type: "primary",
                            onClick: async () => {
                              0 === t
                                ? n(1)
                                : (await b((0, d.setCompletedOnboarding)()),
                                  v({
                                    category:
                                      p.MetaMetricsEventCategory.Onboarding,
                                    event:
                                      p.MetaMetricsEventName
                                        .OnboardingWalletSetupComplete,
                                    properties: {
                                      wallet_setup_type:
                                        k === m.FIRST_TIME_FLOW_TYPES.IMPORT
                                          ? "import"
                                          : "new",
                                      new_wallet:
                                        k === m.FIRST_TIME_FLOW_TYPES.CREATE,
                                    },
                                  }),
                                  y.push(u.DEFAULT_ROUTE));
                            },
                          },
                          e(0 === t ? "next" : "done")
                        )
                      )
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-router-dom"),
                  o = e("react-redux"),
                  s = e("react-responsive-carousel"),
                  i = e("../../../hooks/useI18nContext"),
                  l = y(e("../../../components/ui/button")),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../../helpers/constants/routes"),
                  d = e("../../../store/actions"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../helpers/constants/onboarding"),
                  g = e("../../../selectors"),
                  h = e("../../../components/component-library"),
                  E = y(e("./pin-billboard"));
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/pin-extension/pin-extension.js",
      },
    ],
    [
      4822,
      {
        "../../../../app/scripts/lib/util": 80,
        "../../../../shared/constants/metametrics": 3953,
        "../../../../shared/lib/ui-utils": 3973,
        "../../../components/component-library": 4381,
        "../../../components/ui/box/box": 4473,
        "../../../components/ui/button": 4478,
        "../../../components/ui/typography": 4610,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/routes": 4645,
        "../../../hooks/useI18nContext": 4701,
        "../../../selectors": 5013,
        "../../../store/actions": 5020,
        "./setting": 4823,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    var e;
                    const t = (0, h.useI18nContext)(),
                      n = (0, a.useDispatch)(),
                      v = (0, o.useHistory)(),
                      [k, w] = (0, r.useState)(!0),
                      [T, A] = (0, r.useState)(!0),
                      [O, C] = (0, r.useState)(!0),
                      [N, P] = (0, r.useState)(!0),
                      [I, R] = (0, r.useState)(!0),
                      [S, M] = (0, r.useState)(""),
                      [x, D] = (0, r.useState)(null),
                      j = (0, r.useContext)(f.MetaMetricsContext),
                      B = (0, a.useSelector)(E.getCurrentNetwork);
                    return r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        "div",
                        {
                          className: "privacy-settings",
                          "data-testid": "privacy-settings",
                        },
                        r.default.createElement(
                          "div",
                          { className: "privacy-settings__header" },
                          r.default.createElement(
                            p.default,
                            {
                              variant: m.TypographyVariant.H2,
                              fontWeight: m.FONT_WEIGHT.BOLD,
                            },
                            t("advancedConfiguration")
                          ),
                          r.default.createElement(
                            p.default,
                            { variant: m.TypographyVariant.H4 },
                            t("setAdvancedPrivacySettingsDetails")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          {
                            className: "privacy-settings__settings",
                            "data-testid": "privacy-settings-settings",
                          },
                          r.default.createElement(b.Setting, {
                            value: N,
                            setValue: P,
                            title: t("showIncomingTransactions"),
                            description: t(
                              "onboardingShowIncomingTransactionsDescription",
                              [
                                r.default.createElement(
                                  "a",
                                  {
                                    key: "etherscan",
                                    href: "https://etherscan.io/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                  },
                                  t("etherscan")
                                ),
                                r.default.createElement(
                                  "a",
                                  {
                                    href: "https://etherscan.io/privacyPolicy",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    key: "privacyMsg",
                                  },
                                  t("privacyMsg")
                                ),
                              ]
                            ),
                          }),
                          r.default.createElement(b.Setting, {
                            value: k,
                            setValue: w,
                            title: t("usePhishingDetection"),
                            description: t(
                              "onboardingUsePhishingDetectionDescription",
                              [
                                r.default.createElement(
                                  "a",
                                  {
                                    href: "https://www.jsdelivr.com",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    key: "jsDeliver",
                                  },
                                  t("jsDeliver")
                                ),
                                r.default.createElement(
                                  "a",
                                  {
                                    href: "https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-com",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    key: "privacyMsg",
                                  },
                                  t("privacyMsg")
                                ),
                              ]
                            ),
                          }),
                          r.default.createElement(b.Setting, {
                            value: T,
                            setValue: A,
                            title: t("turnOnTokenDetection"),
                            description: t("useTokenDetectionPrivacyDesc"),
                          }),
                          r.default.createElement(b.Setting, {
                            value: I,
                            setValue: R,
                            title: t("useMultiAccountBalanceChecker"),
                            description: t(
                              "useMultiAccountBalanceCheckerDescription"
                            ),
                          }),
                          r.default.createElement(b.Setting, {
                            title: t("onboardingAdvancedPrivacyNetworkTitle"),
                            showToggle: !1,
                            description: r.default.createElement(
                              r.default.Fragment,
                              null,
                              t("onboardingAdvancedPrivacyNetworkDescription", [
                                r.default.createElement(
                                  "a",
                                  {
                                    href: "https://consensys.net/privacy-policy/",
                                    key: "link",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  t("privacyMsg")
                                ),
                              ]),
                              r.default.createElement(
                                u.default,
                                { paddingTop: 2 },
                                B
                                  ? r.default.createElement(
                                      "div",
                                      {
                                        className: "privacy-settings__network",
                                      },
                                      r.default.createElement(
                                        r.default.Fragment,
                                        null,
                                        r.default.createElement(
                                          c.PickerNetwork,
                                          {
                                            label:
                                              null == B ? void 0 : B.nickname,
                                            src:
                                              null == B ||
                                              null === (e = B.rpcPrefs) ||
                                              void 0 === e
                                                ? void 0
                                                : e.imageUrl,
                                            onClick: () =>
                                              n((0, y.toggleNetworkMenu)()),
                                          }
                                        )
                                      )
                                    )
                                  : r.default.createElement(
                                      d.default,
                                      {
                                        type: "secondary",
                                        rounded: !0,
                                        large: !0,
                                        onClick: (e) => {
                                          e.preventDefault(),
                                            n(
                                              (0, y.showModal)({
                                                name: "ONBOARDING_ADD_NETWORK",
                                              })
                                            );
                                        },
                                      },
                                      t(
                                        "onboardingAdvancedPrivacyNetworkButton"
                                      )
                                    )
                              )
                            ),
                          }),
                          r.default.createElement(b.Setting, {
                            title: t("onboardingAdvancedPrivacyIPFSTitle"),
                            showToggle: !1,
                            description: r.default.createElement(
                              r.default.Fragment,
                              null,
                              t("onboardingAdvancedPrivacyIPFSDescription"),
                              r.default.createElement(
                                u.default,
                                { paddingTop: 2 },
                                r.default.createElement(c.TextField, {
                                  style: { width: "100%" },
                                  inputProps: { "data-testid": "ipfs-input" },
                                  onChange: (e) => {
                                    ((e) => {
                                      M(e);
                                      try {
                                        const { host: t } = new URL(
                                          (0, s.addUrlProtocolPrefix)(e)
                                        );
                                        if (!t || "gateway.ipfs.io" === t)
                                          throw new Error();
                                        D(null);
                                      } catch (e) {
                                        D(
                                          t(
                                            "onboardingAdvancedPrivacyIPFSInvalid"
                                          )
                                        );
                                      }
                                    })(e.target.value);
                                  },
                                }),
                                S
                                  ? r.default.createElement(
                                      p.default,
                                      {
                                        variant: m.TypographyVariant.H7,
                                        color: x
                                          ? m.TextColor.errorDefault
                                          : m.TextColor.successDefault,
                                      },
                                      x ||
                                        t("onboardingAdvancedPrivacyIPFSValid")
                                    )
                                  : null
                              )
                            ),
                          }),
                          r.default.createElement(b.Setting, {
                            value: O,
                            setValue: C,
                            title: t("currencyRateCheckToggle"),
                            description: t(
                              "currencyRateCheckToggleDescription",
                              [
                                r.default.createElement(
                                  "a",
                                  {
                                    key: "coingecko_link",
                                    href: l.COINGECKO_LINK,
                                    rel: "noreferrer",
                                    target: "_blank",
                                  },
                                  t("coingecko")
                                ),
                                r.default.createElement(
                                  "a",
                                  {
                                    key: "cryptocompare_link",
                                    href: l.CRYPTOCOMPARE_LINK,
                                    rel: "noreferrer",
                                    target: "_blank",
                                  },
                                  t("cryptoCompare")
                                ),
                                r.default.createElement(
                                  "a",
                                  {
                                    key: "privacy_policy_link",
                                    href: l.PRIVACY_POLICY_LINK,
                                    rel: "noreferrer",
                                    target: "_blank",
                                  },
                                  t("privacyMsg")
                                ),
                              ]
                            ),
                          })
                        ),
                        r.default.createElement(
                          d.default,
                          {
                            type: "primary",
                            rounded: !0,
                            onClick: () => {
                              if (
                                (n(
                                  (0, y.setFeatureFlag)(
                                    "showIncomingTransactions",
                                    N
                                  )
                                ),
                                n((0, y.setUsePhishDetect)(k)),
                                n((0, y.setUseTokenDetection)(T)),
                                n((0, y.setUseMultiAccountBalanceChecker)(I)),
                                n((0, y.setUseCurrencyRateCheck)(O)),
                                n((0, y.setCompletedOnboarding)()),
                                S && !x)
                              ) {
                                const { host: e } = new URL(
                                  (0, s.addUrlProtocolPrefix)(S)
                                );
                                n((0, y.setIpfsGateway)(e));
                              }
                              j({
                                category: i.MetaMetricsEventCategory.Onboarding,
                                event:
                                  i.MetaMetricsEventName
                                    .OnboardingWalletAdvancedSettings,
                                properties: {
                                  show_incoming_tx: N,
                                  use_phising_detection: k,
                                  turnon_token_detection: T,
                                },
                              }),
                                v.push(g.ONBOARDING_PIN_EXTENSION_ROUTE);
                            },
                          },
                          t("done")
                        )
                      )
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = e("react-router-dom"),
                  s = e("../../../../app/scripts/lib/util"),
                  i = e("../../../../shared/constants/metametrics"),
                  l = e("../../../../shared/lib/ui-utils"),
                  c = e("../../../components/component-library"),
                  u = v(e("../../../components/ui/box/box")),
                  d = v(e("../../../components/ui/button")),
                  p = v(e("../../../components/ui/typography")),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../helpers/constants/design-system"),
                  g = e("../../../helpers/constants/routes"),
                  h = e("../../../hooks/useI18nContext"),
                  E = e("../../../selectors"),
                  y = e("../../../store/actions"),
                  b = e("./setting");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function k(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (k = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/privacy-settings/privacy-settings.js",
      },
    ],
    [
      4823,
      {
        "../../../components/ui/box": 4474,
        "../../../components/ui/toggle-button": 4599,
        "../../../components/ui/typography": 4610,
        "../../../helpers/constants/design-system": 4641,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.Setting = void 0);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = c(e("../../../components/ui/box")),
                  s = c(e("../../../components/ui/typography")),
                  i = c(e("../../../components/ui/toggle-button")),
                  l = e("../../../helpers/constants/design-system");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({
                  value: e,
                  setValue: t,
                  title: n,
                  description: a,
                  showToggle: c = !0,
                }) =>
                  r.default.createElement(
                    o.default,
                    { justifyContent: l.JustifyContent.center, margin: 3 },
                    r.default.createElement(
                      "div",
                      { className: "privacy-settings__setting" },
                      r.default.createElement(
                        s.default,
                        {
                          variant: l.TypographyVariant.H5,
                          fontWeight: l.FONT_WEIGHT.BOLD,
                        },
                        n
                      ),
                      r.default.createElement(
                        s.default,
                        { variant: l.TypographyVariant.H6 },
                        a
                      )
                    ),
                    c
                      ? r.default.createElement(
                          "div",
                          { className: "privacy-settings__setting__toggle" },
                          r.default.createElement(i.default, {
                            value: e,
                            onToggle: (e) => t(!e),
                          })
                        )
                      : null
                  );
                (n.Setting = u),
                  (u.propTypes = {
                    value: a.default.bool,
                    setValue: a.default.func,
                    title: a.default.string,
                    description: a.default.oneOfType([
                      a.default.object,
                      a.default.string,
                    ]),
                    showToggle: a.default.bool,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/privacy-settings/setting.js",
      },
    ],
    [
      4824,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/app/step-progress-bar": 4258,
        "../../../components/ui/box": 4474,
        "../../../components/ui/button": 4478,
        "../../../components/ui/typography": 4610,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/routes": 4645,
        "../../../hooks/useI18nContext": 4701,
        "../../../store/actions": 5020,
        "./recovery-phrase-chips": 4825,
        lodash: 3442,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = k);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-router-dom"),
                  o = e("react-redux"),
                  s = e("lodash"),
                  i = b(e("prop-types")),
                  l = b(e("../../../components/ui/box")),
                  c = b(e("../../../components/ui/button")),
                  u = b(e("../../../components/ui/typography")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../components/app/step-progress-bar"),
                  f = e("../../../helpers/constants/routes"),
                  m = e("../../../hooks/useI18nContext"),
                  g = e("../../../store/actions"),
                  h = e("../../../contexts/metametrics"),
                  E = e("../../../../shared/constants/metametrics"),
                  y = b(e("./recovery-phrase-chips"));
                function b(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (v = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function k({ secretRecoveryPhrase: e = "" }) {
                  const t = (0, a.useHistory)(),
                    n = (0, m.useI18nContext)(),
                    i = (0, o.useDispatch)(),
                    b = e.split(" "),
                    v = [2, 3, 7],
                    [k, w] = (0, r.useState)(!1),
                    T = (0, r.useContext)(h.MetaMetricsContext),
                    [A, O] = (0, r.useState)(
                      (() => {
                        const e = { ...b };
                        return (
                          v.forEach((t) => {
                            e[t] = "";
                          }),
                          e
                        );
                      })()
                    ),
                    C = (0, r.useMemo)(
                      () =>
                        (0, s.debounce)((t) => {
                          w(Object.values(t).join(" ") === e);
                        }, 500),
                      [w, e]
                    );
                  return r.default.createElement(
                    "div",
                    {
                      className: "recovery-phrase__confirm",
                      "data-testid": "confirm-recovery-phrase",
                    },
                    r.default.createElement(p.ThreeStepProgressBar, {
                      stage: p.threeStepStages.RECOVERY_PHRASE_CONFIRM,
                      marginBottom: 4,
                    }),
                    r.default.createElement(
                      l.default,
                      {
                        justifyContent: d.JustifyContent.center,
                        textAlign: d.TEXT_ALIGN.CENTER,
                        marginBottom: 4,
                      },
                      r.default.createElement(
                        u.default,
                        {
                          variant: d.TypographyVariant.H2,
                          fontWeight: d.FONT_WEIGHT.BOLD,
                        },
                        n("seedPhraseConfirm")
                      )
                    ),
                    r.default.createElement(
                      l.default,
                      {
                        justifyContent: d.JustifyContent.center,
                        textAlign: d.TEXT_ALIGN.CENTER,
                        marginBottom: 4,
                      },
                      r.default.createElement(
                        u.default,
                        { variant: d.TypographyVariant.H4 },
                        n("seedPhraseEnterMissingWords")
                      )
                    ),
                    r.default.createElement(y.default, {
                      secretRecoveryPhrase: b,
                      confirmPhase: !0,
                      setInputValue: (e) => {
                        O(e), C(e);
                      },
                      inputValue: A,
                      indicesToCheck: v,
                    }),
                    r.default.createElement(
                      "div",
                      { className: "recovery-phrase__footer__confirm" },
                      r.default.createElement(
                        c.default,
                        {
                          "data-testid": "recovery-phrase-confirm",
                          type: "primary",
                          large: !0,
                          className: "recovery-phrase__footer__confirm--button",
                          onClick: async () => {
                            await i((0, g.setSeedPhraseBackedUp)(!0)),
                              T({
                                category: E.MetaMetricsEventCategory.Onboarding,
                                event:
                                  E.MetaMetricsEventName
                                    .OnboardingWalletSecurityPhraseConfirmed,
                              }),
                              t.push(f.ONBOARDING_COMPLETION_ROUTE);
                          },
                          disabled: !k,
                        },
                        n("confirm")
                      )
                    )
                  );
                }
                k.propTypes = { secretRecoveryPhrase: i.default.string };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/recovery-phrase/confirm-recovery-phrase.js",
      },
    ],
    [
      4825,
      {
        "../../../components/ui/box": 4474,
        "../../../components/ui/chip": 4485,
        "../../../components/ui/chip/chip-with-input": 4483,
        "../../../components/ui/typography": 4610,
        "../../../helpers/constants/design-system": 4641,
        "../../../hooks/useI18nContext": 4701,
        classnames: 2227,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = f);
                var r = p(e("react")),
                  a = p(e("classnames")),
                  o = p(e("prop-types")),
                  s = p(e("../../../components/ui/chip")),
                  i = p(e("../../../components/ui/box")),
                  l = p(e("../../../components/ui/typography")),
                  c = e("../../../components/ui/chip/chip-with-input"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/constants/design-system");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f({
                  secretRecoveryPhrase: e,
                  phraseRevealed: t,
                  confirmPhase: n,
                  setInputValue: o,
                  inputValue: p,
                  indicesToCheck: f,
                  hiddenPhrase: m,
                }) {
                  const g = (0, u.useI18nContext)(),
                    h = !1 === t;
                  return r.default.createElement(
                    i.default,
                    {
                      borderColor: d.BorderColor.borderMuted,
                      borderStyle: d.BorderStyle.solid,
                      padding: 4,
                      borderWidth: 1,
                      borderRadius: d.Size.MD,
                      display: d.DISPLAY.GRID,
                      marginBottom: 4,
                      className: "recovery-phrase__secret",
                    },
                    r.default.createElement(
                      "div",
                      {
                        "data-testid": "recovery-phrase-chips",
                        className: (0, a.default)("recovery-phrase__chips", {
                          "recovery-phrase__chips--hidden": h,
                        }),
                      },
                      e.map((e, t) =>
                        n && f && f.includes(t)
                          ? r.default.createElement(
                              "div",
                              {
                                className: "recovery-phrase__chip-item",
                                key: t,
                              },
                              r.default.createElement(
                                "div",
                                {
                                  className:
                                    "recovery-phrase__chip-item__number",
                                },
                                `${t + 1}.`
                              ),
                              r.default.createElement(c.ChipWithInput, {
                                dataTestId: `recovery-phrase-input-${t}`,
                                borderColor: d.BorderColor.primaryDefault,
                                className: "recovery-phrase__chip--with-input",
                                inputValue: p[t],
                                setInputValue: (e) => {
                                  o({ ...p, [t]: e });
                                },
                              })
                            )
                          : r.default.createElement(
                              "div",
                              {
                                className: "recovery-phrase__chip-item",
                                key: t,
                              },
                              r.default.createElement(
                                "div",
                                {
                                  className:
                                    "recovery-phrase__chip-item__number",
                                },
                                `${t + 1}.`
                              ),
                              r.default.createElement(
                                s.default,
                                {
                                  dataTestId: `recovery-phrase-chip-${t}`,
                                  className: "recovery-phrase__chip",
                                  borderColor: d.BorderColor.borderDefault,
                                },
                                e
                              )
                            )
                      )
                    ),
                    h &&
                      r.default.createElement(
                        "div",
                        { className: "recovery-phrase__secret-blocker" },
                        !m &&
                          r.default.createElement(
                            r.default.Fragment,
                            null,
                            r.default.createElement("i", {
                              className: "far fa-eye",
                              color: "white",
                            }),
                            r.default.createElement(
                              l.default,
                              {
                                variant: d.TypographyVariant.H6,
                                color: d.Color.overlayInverse,
                                className:
                                  "recovery-phrase__secret-blocker--text",
                              },
                              g("makeSureNoOneWatching")
                            )
                          )
                      )
                  );
                }
                f.propTypes = {
                  secretRecoveryPhrase: o.default.array,
                  phraseRevealed: o.default.bool,
                  confirmPhase: o.default.bool,
                  setInputValue: o.default.func,
                  inputValue: o.default.object,
                  indicesToCheck: o.default.array,
                  hiddenPhrase: o.default.bool,
                };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/recovery-phrase/recovery-phrase-chips.js",
      },
    ],
    [
      4826,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/app/step-progress-bar": 4258,
        "../../../components/component-library": 4381,
        "../../../components/ui/box": 4474,
        "../../../components/ui/button": 4478,
        "../../../components/ui/typography": 4610,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/routes": 4645,
        "../../../hooks/useCopyToClipboard": 4694,
        "../../../hooks/useI18nContext": 4701,
        "./recovery-phrase-chips": 4825,
        "prop-types": 3555,
        react: 3730,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = v);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-router-dom"),
                  o = y(e("prop-types")),
                  s = y(e("../../../components/ui/box")),
                  i = y(e("../../../components/ui/button")),
                  l = y(e("../../../components/ui/typography")),
                  c = e("../../../hooks/useCopyToClipboard"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../components/app/step-progress-bar"),
                  m = e("../../../../shared/constants/metametrics"),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../components/component-library"),
                  E = y(e("./recovery-phrase-chips"));
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function v({ secretRecoveryPhrase: e }) {
                  const t = (0, a.useHistory)(),
                    n = (0, u.useI18nContext)(),
                    { search: o } = (0, a.useLocation)(),
                    [y, b] = (0, c.useCopyToClipboard)(),
                    [v, k] = (0, r.useState)(!1),
                    [w, T] = (0, r.useState)(!1),
                    A = new URLSearchParams(o).get("isFromReminder")
                      ? "/?isFromReminder=true"
                      : "",
                    O = (0, r.useContext)(g.MetaMetricsContext);
                  return r.default.createElement(
                    "div",
                    {
                      className: "recovery-phrase",
                      "data-testid": "recovery-phrase",
                    },
                    r.default.createElement(f.ThreeStepProgressBar, {
                      stage: f.threeStepStages.RECOVERY_PHRASE_REVIEW,
                    }),
                    r.default.createElement(
                      s.default,
                      {
                        justifyContent: p.JustifyContent.center,
                        textAlign: p.TEXT_ALIGN.CENTER,
                        marginBottom: 4,
                      },
                      r.default.createElement(
                        l.default,
                        {
                          variant: p.TypographyVariant.H2,
                          fontWeight: p.FONT_WEIGHT.BOLD,
                          className: "recovery-phrase__header",
                        },
                        n("seedPhraseWriteDownHeader")
                      )
                    ),
                    r.default.createElement(
                      s.default,
                      {
                        justifyContent: p.JustifyContent.center,
                        textAlign: p.TEXT_ALIGN.CENTER,
                        marginBottom: 4,
                      },
                      r.default.createElement(
                        l.default,
                        { variant: p.TypographyVariant.H4 },
                        n("seedPhraseWriteDownDetails")
                      )
                    ),
                    r.default.createElement(
                      s.default,
                      {
                        textAlign: p.TEXT_ALIGN.LEFT,
                        marginBottom: 4,
                        className: "recovery-phrase__tips",
                      },
                      r.default.createElement(
                        l.default,
                        {
                          variant: p.TypographyVariant.H4,
                          fontWeight: p.FONT_WEIGHT.BOLD,
                        },
                        n("tips"),
                        ":"
                      ),
                      r.default.createElement(
                        "ul",
                        null,
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            l.default,
                            { variant: p.TypographyVariant.H4 },
                            n("seedPhraseIntroSidebarBulletOne")
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            l.default,
                            { variant: p.TypographyVariant.H4 },
                            n("seedPhraseIntroSidebarBulletThree")
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            l.default,
                            { variant: p.TypographyVariant.H4 },
                            n("seedPhraseIntroSidebarBulletFour")
                          )
                        )
                      )
                    ),
                    r.default.createElement(E.default, {
                      secretRecoveryPhrase: e.split(" "),
                      phraseRevealed: v && !w,
                      hiddenPhrase: w,
                    }),
                    r.default.createElement(
                      "div",
                      { className: "recovery-phrase__footer" },
                      v
                        ? r.default.createElement(
                            "div",
                            {
                              className:
                                "recovery-phrase__footer__copy-and-hide",
                            },
                            r.default.createElement(
                              "div",
                              {
                                className:
                                  "recovery-phrase__footer__copy-and-hide__area",
                              },
                              r.default.createElement(
                                i.default,
                                {
                                  type: "link",
                                  icon: r.default.createElement("i", {
                                    className:
                                      "far fa-eye" + (w ? "" : "-slash"),
                                    color: "var(--color-primary-default)",
                                  }),
                                  className:
                                    "recovery-phrase__footer__copy-and-hide__button recovery-phrase__footer__copy-and-hide__button__hide-seed",
                                  onClick: () => {
                                    T(!w);
                                  },
                                },
                                n(w ? "revealTheSeedPhrase" : "hideSeedPhrase")
                              ),
                              r.default.createElement(
                                i.default,
                                {
                                  onClick: () => {
                                    b(e);
                                  },
                                  icon: r.default.createElement(h.Icon, {
                                    name: y
                                      ? h.IconName.CopySuccess
                                      : h.IconName.Copy,
                                    color: p.IconColor.primaryDefault,
                                  }),
                                  className:
                                    "recovery-phrase__footer__copy-and-hide__button recovery-phrase__footer__copy-and-hide__button__copy-to-clipboard",
                                  type: "link",
                                },
                                n(y ? "copiedExclamation" : "copyToClipboard")
                              )
                            ),
                            r.default.createElement(
                              i.default,
                              {
                                "data-testid": "recovery-phrase-next",
                                type: "primary",
                                className: "recovery-phrase__footer--button",
                                onClick: () => {
                                  O({
                                    category:
                                      m.MetaMetricsEventCategory.Onboarding,
                                    event:
                                      m.MetaMetricsEventName
                                        .OnboardingWalletSecurityPhraseWrittenDown,
                                  }),
                                    t.push(
                                      `${d.ONBOARDING_CONFIRM_SRP_ROUTE}${A}`
                                    );
                                },
                              },
                              n("next")
                            )
                          )
                        : r.default.createElement(
                            i.default,
                            {
                              "data-testid": "recovery-phrase-reveal",
                              type: "primary",
                              className: "recovery-phrase__footer--button",
                              onClick: () => {
                                O({
                                  category:
                                    m.MetaMetricsEventCategory.Onboarding,
                                  event:
                                    m.MetaMetricsEventName
                                      .OnboardingWalletSecurityPhraseRevealed,
                                }),
                                  k(!0);
                              },
                            },
                            n("revealSeedWords")
                          )
                    )
                  );
                }
                v.propTypes = { secretRecoveryPhrase: o.default.string };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/recovery-phrase/review-recovery-phrase.js",
      },
    ],
    [
      4827,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/app/step-progress-bar": 4258,
        "../../../components/component-library": 4381,
        "../../../contexts/metametrics": 4619,
        "../../../ducks/locale/locale": 4632,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/routes": 4645,
        "../../../hooks/useI18nContext": 4701,
        "./skip-srp-backup-popover": 4828,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, o.useHistory)(),
                      t = (0, c.useI18nContext)(),
                      { search: n } = (0, o.useLocation)(),
                      r = (0, s.useSelector)(p.getCurrentLocale),
                      [h, E] = (0, a.useState)(!1),
                      y = new URLSearchParams(n).get("isFromReminder")
                        ? "/?isFromReminder=true"
                        : "",
                      b = (0, a.useContext)(u.MetaMetricsContext),
                      v = {
                        en: "English",
                        es: "Spanish",
                        hi: "Hindi",
                        id: "Indonesian",
                        ja: "Japanese",
                        ko: "Korean",
                        pt: "Portuguese",
                        ru: "Russian",
                        tl: "Tagalog",
                        vi: "Vietnamese",
                        de: "German",
                        el: "Greek",
                        fr: "French",
                        tr: "Turkish",
                        zh: "Chinese - China",
                      },
                      k = v[r] ? r : "en";
                    return a.default.createElement(
                      m.Box,
                      {
                        display: i.Display.Flex,
                        justifyContent: i.JustifyContent.center,
                        alignItems: i.AlignItems.center,
                        flexDirection: i.FlexDirection.Column,
                        className: "secure-your-wallet",
                        "data-testid": "secure-your-wallet",
                      },
                      h &&
                        a.default.createElement(g.default, {
                          handleClose: () => E(!1),
                        }),
                      a.default.createElement(l.ThreeStepProgressBar, {
                        stage: l.threeStepStages.RECOVERY_PHRASE_VIDEO,
                        marginBottom: 4,
                      }),
                      a.default.createElement(
                        m.Text,
                        {
                          variant: i.TextVariant.headingLg,
                          as: "h2",
                          marginBottom: 4,
                          textAlign: i.TextAlign.Center,
                        },
                        t("seedPhraseIntroTitle")
                      ),
                      a.default.createElement(
                        m.Text,
                        {
                          variant: i.TextVariant.bodyLgMedium,
                          marginBottom: 6,
                          className: "secure-your-wallet__details",
                        },
                        t("seedPhraseIntroTitleCopy")
                      ),
                      a.default.createElement(
                        m.Box,
                        {
                          as: "video",
                          borderRadius: i.BorderRadius.LG,
                          marginBottom: 8,
                          className: "secure-your-wallet__video",
                          onPlay: () => {
                            b({
                              category: f.MetaMetricsEventCategory.Onboarding,
                              event:
                                f.MetaMetricsEventName
                                  .OnboardingWalletVideoPlay,
                            });
                          },
                          controls: !0,
                        },
                        a.default.createElement("source", {
                          type: "video/webm",
                          src: "./images/videos/recovery-onboarding/video.webm",
                        }),
                        Object.keys(v).map((e) =>
                          a.default.createElement("track", {
                            default: Boolean(e === k),
                            srcLang: e,
                            label: v[e],
                            key: `${e}-subtitles`,
                            kind: "subtitles",
                            src: `./images/videos/recovery-onboarding/subtitles/${e}.vtt`,
                          })
                        )
                      ),
                      a.default.createElement(
                        m.Box,
                        {
                          className: "secure-your-wallet__actions",
                          marginBottom: 8,
                          width: i.BlockSize.Full,
                          display: i.Display.Flex,
                          flexDirection: [
                            i.FlexDirection.Column,
                            i.FlexDirection.Row,
                          ],
                          justifyContent: i.JustifyContent.spaceBetween,
                          gap: 4,
                        },
                        a.default.createElement(
                          m.Button,
                          {
                            "data-testid": "secure-wallet-later",
                            variant: m.BUTTON_VARIANT.SECONDARY,
                            size: m.BUTTON_SIZES.LG,
                            block: !0,
                            onClick: () => {
                              b({
                                category: f.MetaMetricsEventCategory.Onboarding,
                                event:
                                  f.MetaMetricsEventName
                                    .OnboardingWalletSecuritySkipInitiated,
                              }),
                                E(!0);
                            },
                          },
                          t("seedPhraseIntroNotRecommendedButtonCopy")
                        ),
                        a.default.createElement(
                          m.Button,
                          {
                            "data-testid": "secure-wallet-recommended",
                            size: m.BUTTON_SIZES.LG,
                            block: !0,
                            onClick: () => {
                              b({
                                category: f.MetaMetricsEventCategory.Onboarding,
                                event:
                                  f.MetaMetricsEventName
                                    .OnboardingWalletSecurityStarted,
                              }),
                                e.push(`${d.ONBOARDING_REVIEW_SRP_ROUTE}${y}`);
                            },
                          },
                          t("seedPhraseIntroRecommendedButtonCopy")
                        )
                      ),
                      a.default.createElement(
                        m.Box,
                        { className: "secure-your-wallet__desc" },
                        a.default.createElement(
                          m.Text,
                          { as: "h3", variant: i.TextVariant.headingSm },
                          t("seedPhraseIntroSidebarTitleOne")
                        ),
                        a.default.createElement(
                          m.Text,
                          { marginBottom: 4 },
                          t("seedPhraseIntroSidebarCopyOne")
                        ),
                        a.default.createElement(
                          m.Text,
                          { as: "h3", variant: i.TextVariant.headingSm },
                          t("seedPhraseIntroSidebarTitleTwo")
                        ),
                        a.default.createElement(
                          m.Box,
                          {
                            as: "ul",
                            className: "secure-your-wallet__list",
                            marginBottom: 4,
                          },
                          a.default.createElement(
                            m.Text,
                            { as: "li" },
                            t("seedPhraseIntroSidebarBulletOne")
                          ),
                          a.default.createElement(
                            m.Text,
                            { as: "li" },
                            t("seedPhraseIntroSidebarBulletThree")
                          ),
                          a.default.createElement(
                            m.Text,
                            { as: "li" },
                            t("seedPhraseIntroSidebarBulletFour")
                          )
                        ),
                        a.default.createElement(
                          m.Text,
                          { as: "h3", variant: i.TextVariant.headingSm },
                          t("seedPhraseIntroSidebarTitleThree")
                        ),
                        a.default.createElement(
                          m.Text,
                          { as: "p", marginBottom: 4 },
                          t("seedPhraseIntroSidebarCopyTwo")
                        ),
                        a.default.createElement(
                          m.Text,
                          {
                            as: "h3",
                            variant: i.TextVariant.headingSm,
                            backgroundColor: i.BackgroundColor.primaryMuted,
                            padding: 4,
                            borderRadius: i.BorderRadius.LG,
                          },
                          t("seedPhraseIntroSidebarCopyThree")
                        )
                      )
                    );
                  });
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  o = e("react-router-dom"),
                  s = e("react-redux"),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../../components/app/step-progress-bar"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../contexts/metametrics"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../ducks/locale/locale"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../components/component-library"),
                  g =
                    (r = e("./skip-srp-backup-popover")) && r.__esModule
                      ? r
                      : { default: r };
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/secure-your-wallet/secure-your-wallet.js",
      },
    ],
    [
      4828,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/component-library": 4381,
        "../../../components/ui/box": 4474,
        "../../../components/ui/button": 4478,
        "../../../components/ui/check-box": 4482,
        "../../../components/ui/popover": 4571,
        "../../../components/ui/typography": 4610,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/routes": 4645,
        "../../../hooks/useI18nContext": 4701,
        "../../../store/actions": 5020,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = k);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = b(e("prop-types")),
                  o = e("react-router-dom"),
                  s = e("react-redux"),
                  i = e("../../../hooks/useI18nContext"),
                  l = b(e("../../../components/ui/button")),
                  c = b(e("../../../components/ui/popover")),
                  u = b(e("../../../components/ui/box")),
                  d = b(e("../../../components/ui/typography")),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../store/actions"),
                  m = b(e("../../../components/ui/check-box")),
                  g = e("../../../helpers/constants/routes"),
                  h = e("../../../../shared/constants/metametrics"),
                  E = e("../../../contexts/metametrics"),
                  y = e("../../../components/component-library");
                function b(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (v = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function k({ handleClose: e }) {
                  const [t, n] = (0, r.useState)(!1),
                    a = (0, i.useI18nContext)(),
                    b = (0, o.useHistory)(),
                    v = (0, s.useDispatch)(),
                    k = (0, r.useContext)(E.MetaMetricsContext);
                  return r.default.createElement(
                    c.default,
                    {
                      className: "skip-srp-backup-popover",
                      footer: r.default.createElement(
                        u.default,
                        {
                          className: "skip-srp-backup-popover__footer",
                          justifyContent: p.JustifyContent.center,
                          alignItems: p.AlignItems.center,
                        },
                        r.default.createElement(
                          l.default,
                          {
                            onClick: () => {
                              k({
                                category: h.MetaMetricsEventCategory.Onboarding,
                                event:
                                  h.MetaMetricsEventName
                                    .OnboardingWalletSecuritySkipCanceled,
                              }),
                                e();
                            },
                            type: "secondary",
                            rounded: !0,
                          },
                          a("goBack")
                        ),
                        r.default.createElement(
                          l.default,
                          {
                            "data-testid": "skip-srp-backup",
                            disabled: !t,
                            type: "primary",
                            rounded: !0,
                            onClick: async () => {
                              await v((0, f.setSeedPhraseBackedUp)(!1)),
                                k({
                                  category:
                                    h.MetaMetricsEventCategory.Onboarding,
                                  event:
                                    h.MetaMetricsEventName
                                      .OnboardingWalletSecuritySkipConfirmed,
                                }),
                                b.push(g.ONBOARDING_COMPLETION_ROUTE);
                            },
                          },
                          a("skip")
                        )
                      ),
                    },
                    r.default.createElement(
                      u.default,
                      {
                        flexDirection: p.FLEX_DIRECTION.COLUMN,
                        alignItems: p.AlignItems.center,
                        justifyContent: p.JustifyContent.center,
                        margin: 4,
                      },
                      r.default.createElement(y.Icon, {
                        name: y.IconName.Danger,
                        size: y.IconSize.Xl,
                        className: "skip-srp-backup-popover__icon",
                        color: p.IconColor.errorDefault,
                      }),
                      r.default.createElement(
                        d.default,
                        {
                          variant: p.TypographyVariant.H3,
                          fontWeight: p.FONT_WEIGHT.BOLD,
                        },
                        a("skipAccountSecurity")
                      ),
                      r.default.createElement(
                        u.default,
                        { justifyContent: p.JustifyContent.center, margin: 3 },
                        r.default.createElement(
                          "label",
                          { className: "skip-srp-backup-popover__label" },
                          r.default.createElement(m.default, {
                            className: "skip-srp-backup-popover__checkbox",
                            onClick: () => n(!t),
                            checked: t,
                            dataTestId: "skip-srp-backup-popover-checkbox",
                          }),
                          r.default.createElement(
                            d.default,
                            {
                              className: "skip-srp-backup-popover__details",
                              variant: p.TypographyVariant.H7,
                            },
                            a("skipAccountSecurityDetails")
                          )
                        )
                      )
                    )
                  );
                }
                k.propTypes = { handleClose: a.default.func };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/secure-your-wallet/skip-srp-backup-popover.js",
      },
    ],
    [
      4829,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/component-library": 4381,
        "../../../components/ui/box": 4474,
        "../../../components/ui/button": 4478,
        "../../../components/ui/check-box": 4482,
        "../../../components/ui/mascot": 4551,
        "../../../contexts/metametrics": 4619,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/onboarding": 4644,
        "../../../helpers/constants/routes": 4645,
        "../../../hooks/useI18nContext": 4701,
        "../../../selectors": 5013,
        "../../../store/actions": 5020,
        events: 2188,
        react: 3730,
        "react-redux": 3695,
        "react-responsive-carousel": 3710,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    var e, t;
                    const n = (0, m.useI18nContext)(),
                      k = (0, o.useDispatch)(),
                      w = (0, s.useHistory)(),
                      [T] = (0, a.useState)(new r.default()),
                      A = (0, o.useSelector)(v.getCurrentKeyring),
                      O = (0, o.useSelector)(v.getFirstTimeFlowType),
                      [C, N] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => {
                      A &&
                        (O === b.FIRST_TIME_FLOW_TYPES.IMPORT
                          ? w.replace(y.ONBOARDING_COMPLETION_ROUTE)
                          : w.replace(y.ONBOARDING_SECURE_YOUR_WALLET_ROUTE));
                    }, [A, w, O]);
                    const P = (0, a.useContext)(g.MetaMetricsContext),
                      I = n("agreeTermsOfUse", [
                        a.default.createElement(
                          "a",
                          {
                            className: "create-new-vault__terms-link",
                            key: "create-new-vault__link-text",
                            href: "https://metamask.io/terms.html",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          n("terms")
                        ),
                      ]);
                    return (
                      P({
                        category: h.MetaMetricsEventCategory.Onboarding,
                        event: h.MetaMetricsEventName.OnboardingWelcome,
                        properties: {
                          message_title: n("welcomeToMetaMask"),
                          app_version:
                            null === (e = global) ||
                            void 0 === e ||
                            null === (t = e.platform) ||
                            void 0 === t
                              ? void 0
                              : t.getVersion(),
                        },
                      }),
                      a.default.createElement(
                        "div",
                        {
                          className: "onboarding-welcome",
                          "data-testid": "onboarding-welcome",
                        },
                        a.default.createElement(
                          i.Carousel,
                          { showThumbs: !1, showStatus: !1, showArrows: !0 },
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(
                              u.Text,
                              {
                                variant: f.TextVariant.headingLg,
                                as: "h2",
                                textAlign: f.TEXT_ALIGN.CENTER,
                                fontWeight: f.FONT_WEIGHT.BOLD,
                              },
                              n("welcomeToMetaMask")
                            ),
                            a.default.createElement(
                              u.Text,
                              {
                                textAlign: f.TEXT_ALIGN.CENTER,
                                marginLeft: 6,
                                marginRight: 6,
                              },
                              n("welcomeToMetaMaskIntro")
                            ),
                            a.default.createElement(
                              "div",
                              { className: "onboarding-welcome__mascot" },
                              a.default.createElement(l.default, {
                                animationEventEmitter: T,
                                width: "250",
                                height: "250",
                              })
                            )
                          ),
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(
                              u.Text,
                              {
                                variant: f.TextVariant.headingLg,
                                as: "h2",
                                textAlign: f.TEXT_ALIGN.CENTER,
                                fontWeight: f.FONT_WEIGHT.BOLD,
                              },
                              n("welcomeExploreTitle")
                            ),
                            a.default.createElement(
                              u.Text,
                              { textAlign: f.TEXT_ALIGN.CENTER },
                              n("welcomeExploreDescription")
                            ),
                            a.default.createElement(
                              "div",
                              { className: "onboarding-welcome__image" },
                              a.default.createElement("img", {
                                src: "/images/onboarding-welcome-say-hello.svg",
                                width: "169",
                                height: "237",
                                alt: "",
                              })
                            )
                          ),
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(
                              u.Text,
                              {
                                variant: f.TextVariant.headingLg,
                                as: "h2",
                                textAlign: f.TEXT_ALIGN.CENTER,
                                fontWeight: f.FONT_WEIGHT.BOLD,
                              },
                              n("welcomeLoginTitle")
                            ),
                            a.default.createElement(
                              u.Text,
                              { textAlign: f.TEXT_ALIGN.CENTER },
                              n("welcomeLoginDescription")
                            ),
                            a.default.createElement(
                              "div",
                              { className: "onboarding-welcome__image" },
                              a.default.createElement("img", {
                                src: "/images/onboarding-welcome-decentralised-apps.svg",
                                width: "327",
                                height: "256",
                                alt: "",
                              })
                            )
                          )
                        ),
                        a.default.createElement(
                          "ul",
                          { className: "onboarding-welcome__buttons" },
                          a.default.createElement(
                            "li",
                            null,
                            a.default.createElement(
                              p.default,
                              {
                                alignItems: f.AlignItems.center,
                                className: "onboarding__terms-of-use",
                              },
                              a.default.createElement(d.default, {
                                id: "onboarding__terms-checkbox",
                                className: "onboarding__terms-checkbox",
                                dataTestId: "onboarding-terms-checkbox",
                                checked: C,
                                onClick: () => {
                                  N((e) => !e);
                                },
                              }),
                              a.default.createElement(
                                "label",
                                {
                                  className: "onboarding__terms-label",
                                  htmlFor: "onboarding__terms-checkbox",
                                },
                                a.default.createElement(
                                  u.Text,
                                  {
                                    variant: f.TextVariant.bodyMd,
                                    marginLeft: 2,
                                    as: "span",
                                  },
                                  I
                                )
                              )
                            )
                          ),
                          a.default.createElement(
                            "li",
                            null,
                            a.default.createElement(
                              c.default,
                              {
                                "data-testid": "onboarding-create-wallet",
                                type: "primary",
                                onClick: () => {
                                  k((0, E.setFirstTimeFlowType)("create")),
                                    P({
                                      category:
                                        h.MetaMetricsEventCategory.Onboarding,
                                      event:
                                        h.MetaMetricsEventName
                                          .OnboardingWalletCreationStarted,
                                      properties: { account_type: "metamask" },
                                    }),
                                    k(
                                      (0, E.setTermsOfUseLastAgreed)(
                                        new Date().getTime()
                                      )
                                    ),
                                    w.push(y.ONBOARDING_METAMETRICS);
                                },
                                disabled: !C,
                              },
                              n("onboardingCreateWallet")
                            )
                          ),
                          a.default.createElement(
                            "li",
                            null,
                            a.default.createElement(
                              c.default,
                              {
                                "data-testid": "onboarding-import-wallet",
                                type: "secondary",
                                onClick: () => {
                                  k((0, E.setFirstTimeFlowType)("import")),
                                    P({
                                      category:
                                        h.MetaMetricsEventCategory.Onboarding,
                                      event:
                                        h.MetaMetricsEventName
                                          .OnboardingWalletImportStarted,
                                      properties: { account_type: "imported" },
                                    }),
                                    k(
                                      (0, E.setTermsOfUseLastAgreed)(
                                        new Date().getTime()
                                      )
                                    ),
                                    w.push(y.ONBOARDING_METAMETRICS);
                                },
                                disabled: !C,
                              },
                              n("onboardingImportWallet")
                            )
                          )
                        )
                      )
                    );
                  });
                var r = w(e("events")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("react-responsive-carousel"),
                  l = w(e("../../../components/ui/mascot")),
                  c = w(e("../../../components/ui/button")),
                  u = e("../../../components/component-library"),
                  d = w(e("../../../components/ui/check-box")),
                  p = w(e("../../../components/ui/box")),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../../hooks/useI18nContext"),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../../shared/constants/metametrics"),
                  E = e("../../../store/actions"),
                  y = e("../../../helpers/constants/routes"),
                  b = e("../../../helpers/constants/onboarding"),
                  v = e("../../../selectors");
                function k(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (k = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function w(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/onboarding-flow/welcome/welcome.js",
      },
    ],
    [
      4830,
      {
        "../../../components/app/permissions-connect-footer": 4205,
        "../../../components/app/permissions-connect-header": 4207,
        "../../../components/ui/account-list": 4468,
        "../../../components/ui/page-container": 4564,
        "../../../hooks/useI18nContext": 4701,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = d(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  o = e("../../../hooks/useI18nContext"),
                  s = d(
                    e("../../../components/app/permissions-connect-header")
                  ),
                  i = d(
                    e("../../../components/app/permissions-connect-footer")
                  ),
                  l = d(e("../../../components/ui/account-list")),
                  c = e("../../../components/ui/page-container");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({
                  selectedAccountAddresses: e,
                  addressLastConnectedMap: t = {},
                  accounts: n,
                  selectAccounts: r,
                  selectNewAccountViaModal: u,
                  cancelPermissionsRequest: d,
                  permissionsRequestId: p,
                  targetSubjectMetadata: f,
                  nativeCurrency: m,
                }) => {
                  const [g, h] = (0, a.useState)(e),
                    E = (0, o.useI18nContext)();
                  return a.default.createElement(
                    a.default.Fragment,
                    null,
                    a.default.createElement(
                      "div",
                      {
                        className:
                          "permissions-connect-choose-account__content",
                      },
                      a.default.createElement(s.default, {
                        iconUrl: null == f ? void 0 : f.iconUrl,
                        iconName: null == f ? void 0 : f.name,
                        headerTitle: E("connectWithMetaMask"),
                        headerText:
                          n.length > 0
                            ? E("selectAccounts")
                            : E("connectAccountOrCreate"),
                        siteOrigin: null == f ? void 0 : f.origin,
                      }),
                      a.default.createElement(l.default, {
                        accounts: n,
                        selectNewAccountViaModal: u,
                        addressLastConnectedMap: t,
                        nativeCurrency: m,
                        selectedAccounts: g,
                        allAreSelected: () => n.length === g.size,
                        deselectAll: () => {
                          h(new Set());
                        },
                        selectAll: () => {
                          const e = new Set(n.map((e) => e.address));
                          h(e);
                        },
                        handleAccountClick: (e) => {
                          const t = new Set(g);
                          t.has(e) ? t.delete(e) : t.add(e), h(t);
                        },
                      })
                    ),
                    a.default.createElement(
                      "div",
                      {
                        className:
                          "permissions-connect-choose-account__footer-container",
                      },
                      a.default.createElement(i.default, null),
                      a.default.createElement(c.PageContainerFooter, {
                        cancelButtonType: "default",
                        onCancel: () => d(p),
                        cancelText: E("cancel"),
                        onSubmit: () => r(g),
                        submitText: E("next"),
                        disabled: 0 === g.size,
                      })
                    )
                  );
                };
                p.propTypes = {
                  accounts: r.default.arrayOf(
                    r.default.shape({
                      address: r.default.string,
                      addressLabel: r.default.string,
                      lastConnectedDate: r.default.string,
                      balance: r.default.string,
                    })
                  ).isRequired,
                  selectAccounts: r.default.func.isRequired,
                  selectNewAccountViaModal: r.default.func.isRequired,
                  nativeCurrency: r.default.string.isRequired,
                  addressLastConnectedMap: r.default.object,
                  cancelPermissionsRequest: r.default.func.isRequired,
                  permissionsRequestId: r.default.string.isRequired,
                  selectedAccountAddresses: r.default.object.isRequired,
                  targetSubjectMetadata: r.default.shape({
                    extensionId: r.default.string,
                    iconUrl: r.default.string,
                    name: r.default.string,
                    origin: r.default.string.isRequired,
                    subjectType: r.default.string,
                  }),
                };
                var f = p;
                n.default = f;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/permissions-connect/choose-account/choose-account.js",
      },
    ],
    [
      4831,
      { "./choose-account": 4830 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./choose-account")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/permissions-connect/choose-account/index.js",
      },
    ],
    [
      4832,
      { "./permissions-connect.container": 4834 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./permissions-connect.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/index.js" },
    ],
    [
      4833,
      {
        "../../../app/scripts/lib/util": 80,
        "../../../shared/constants/app": 3946,
        "../../../shared/constants/time": 3962,
        "../../components/app/permission-page-container": 4200,
        "../../components/component-library": 4381,
        "../../helpers/constants/routes": 4645,
        "./choose-account": 4831,
        "./redirect": 4835,
        "prop-types": 3555,
        react: 3730,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = g(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  o = e("react-router-dom"),
                  s = e("../../../app/scripts/lib/util"),
                  i = e("../../../shared/constants/app"),
                  l = e("../../../shared/constants/time"),
                  c = e("../../helpers/constants/routes"),
                  u = g(e("../../components/app/permission-page-container")),
                  d = e("../../components/component-library"),
                  p = g(e("./choose-account")),
                  f = g(e("./redirect"));
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                const E = 1200 * l.MILLISECOND;
                class y extends a.Component {
                  constructor(...e) {
                    super(...e),
                      h(this, "state", {
                        redirecting: !1,
                        selectedAccountAddresses: new Set([
                          this.props.currentAddress,
                        ]),
                        permissionsApproved: null,
                        origin: this.props.origin,
                        targetSubjectMetadata:
                          this.props.targetSubjectMetadata || {},
                      }),
                      h(this, "beforeUnload", () => {
                        const {
                            permissionsRequestId: e,
                            rejectPermissionsRequest: t,
                          } = this.props,
                          { permissionsApproved: n } = this.state;
                        null === n && e && t(e);
                      }),
                      h(this, "removeBeforeUnload", () => {
                        (0, s.getEnvironmentType)() ===
                          i.ENVIRONMENT_TYPE_NOTIFICATION &&
                          window.removeEventListener(
                            "beforeunload",
                            this.beforeUnload
                          );
                      }),
                      h(this, "selectAccounts", (e) => {
                        const { confirmPermissionPath: t, requestType: n } =
                          this.props;
                        this.setState({ selectedAccountAddresses: e }, () => {
                          this.props.history.push(t);
                        });
                      }),
                      h(this, "cancelPermissionsRequest", async (e) => {
                        const { rejectPermissionsRequest: t } = this.props;
                        e && (await t(e), this.redirect(!1));
                      });
                  }
                  componentDidMount() {
                    const {
                      connectPath: e,
                      confirmPermissionPath: t,
                      getRequestAccountTabIds: n,
                      permissionsRequest: r,
                      history: a,
                      isRequestingAccounts: o,
                    } = this.props;
                    if ((n(), !r)) return void a.replace(c.DEFAULT_ROUTE);
                    (0, s.getEnvironmentType)() ===
                      i.ENVIRONMENT_TYPE_NOTIFICATION &&
                      window.addEventListener(
                        "beforeunload",
                        this.beforeUnload
                      ),
                      a.location.pathname !== e || o || a.replace(t);
                  }
                  static getDerivedStateFromProps(e, t) {
                    const { permissionsRequest: n, targetSubjectMetadata: r } =
                        e,
                      { targetSubjectMetadata: a } = t;
                    return n && a.origin !== (null == r ? void 0 : r.origin)
                      ? { targetSubjectMetadata: r }
                      : null;
                  }
                  componentDidUpdate(e) {
                    const { permissionsRequest: t, lastConnectedInfo: n } =
                        this.props,
                      { redirecting: r, origin: a } = this.state;
                    if (!t && e.permissionsRequest && !r) {
                      var o, s;
                      const t =
                        ((null === (o = n[a]) || void 0 === o
                          ? void 0
                          : o.lastApproved) || 0) >
                        ((null === (s = e.lastConnectedInfo[a]) || void 0 === s
                          ? void 0
                          : s.lastApproved) || 0);
                      this.redirect(t);
                    }
                  }
                  redirect(e) {
                    const { history: t } = this.props;
                    this.setState({
                      redirecting: true,
                      permissionsApproved: e,
                    }),
                      this.removeBeforeUnload(),
                      e
                        ? setTimeout(() => t.push(c.DEFAULT_ROUTE), E)
                        : t.push(c.DEFAULT_ROUTE);
                  }
                  goBack() {
                    const { history: e, connectPath: t } = this.props;
                    e.push(t);
                  }
                  renderTopBar() {
                    const { redirecting: e } = this.state,
                      {
                        page: t,
                        isRequestingAccounts: n,
                        totalPages: r,
                      } = this.props,
                      { t: o } = this.context;
                    return e
                      ? null
                      : a.default.createElement(
                          "div",
                          { className: "permissions-connect__top-bar" },
                          "2" === t && n
                            ? a.default.createElement(
                                "div",
                                {
                                  className: "permissions-connect__back",
                                  onClick: () => this.goBack(),
                                },
                                a.default.createElement(d.Icon, {
                                  name: d.IconName.ArrowLeft,
                                  marginInlineEnd: 1,
                                  size: d.IconSize.Xs,
                                }),
                                o("back")
                              )
                            : null,
                          n
                            ? a.default.createElement(
                                "div",
                                {
                                  className: "permissions-connect__page-count",
                                },
                                o("xOfY", [t, r])
                              )
                            : null
                        );
                  }
                  render() {
                    const {
                        approvePermissionsRequest: e,
                        accounts: t,
                        showNewAccountModal: n,
                        newAccountNumber: r,
                        nativeCurrency: s,
                        permissionsRequest: i,
                        addressLastConnectedMap: l,
                        permissionsRequestId: c,
                        connectPath: d,
                        confirmPermissionPath: m,
                        hideTopBar: g,
                      } = this.props,
                      {
                        selectedAccountAddresses: h,
                        permissionsApproved: E,
                        redirecting: y,
                        targetSubjectMetadata: b,
                      } = this.state;
                    return a.default.createElement(
                      "div",
                      { className: "permissions-connect" },
                      !g && this.renderTopBar(),
                      y && E
                        ? a.default.createElement(f.default, {
                            subjectMetadata: b,
                          })
                        : a.default.createElement(
                            o.Switch,
                            null,
                            a.default.createElement(o.Route, {
                              path: d,
                              exact: !0,
                              render: () =>
                                a.default.createElement(p.default, {
                                  accounts: t,
                                  nativeCurrency: s,
                                  selectAccounts: (e) => this.selectAccounts(e),
                                  selectNewAccountViaModal: (e) => {
                                    n({
                                      onCreateNewAccount: (t) => e(t),
                                      newAccountNumber: r,
                                    });
                                  },
                                  addressLastConnectedMap: l,
                                  cancelPermissionsRequest: (e) =>
                                    this.cancelPermissionsRequest(e),
                                  permissionsRequestId: c,
                                  selectedAccountAddresses: h,
                                  targetSubjectMetadata: b,
                                }),
                            }),
                            a.default.createElement(o.Route, {
                              path: m,
                              exact: !0,
                              render: () =>
                                a.default.createElement(u.default, {
                                  request: i || {},
                                  approvePermissionsRequest: (...t) => {
                                    e(...t), this.redirect(!0);
                                  },
                                  rejectPermissionsRequest: (e) =>
                                    this.cancelPermissionsRequest(e),
                                  selectedIdentities: t.filter((e) =>
                                    h.has(e.address)
                                  ),
                                  targetSubjectMetadata: b,
                                }),
                            })
                          )
                    );
                  }
                }
                (n.default = y),
                  h(y, "propTypes", {
                    approvePermissionsRequest: r.default.func.isRequired,
                    rejectPermissionsRequest: r.default.func.isRequired,
                    getRequestAccountTabIds: r.default.func.isRequired,
                    accounts: r.default.array.isRequired,
                    currentAddress: r.default.string.isRequired,
                    origin: r.default.string,
                    showNewAccountModal: r.default.func.isRequired,
                    newAccountNumber: r.default.number.isRequired,
                    nativeCurrency: r.default.string,
                    permissionsRequest: r.default.object,
                    addressLastConnectedMap: r.default.object.isRequired,
                    lastConnectedInfo: r.default.object.isRequired,
                    permissionsRequestId: r.default.string,
                    history: r.default.object.isRequired,
                    connectPath: r.default.string.isRequired,
                    confirmPermissionPath: r.default.string.isRequired,
                    requestType: r.default.string.isRequired,
                    hideTopBar: r.default.bool,
                    totalPages: r.default.string.isRequired,
                    page: r.default.string.isRequired,
                    targetSubjectMetadata: r.default.shape({
                      extensionId: r.default.string,
                      iconUrl: r.default.string,
                      name: r.default.string,
                      origin: r.default.string,
                      subjectType: r.default.string,
                    }),
                    isRequestingAccounts: r.default.bool.isRequired,
                  }),
                  h(y, "defaultProps", {
                    origin: "",
                    nativeCurrency: "",
                    permissionsRequest: undefined,
                    permissionsRequestId: "",
                  }),
                  h(y, "contextTypes", { t: r.default.func });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/permissions-connect/permissions-connect.component.js",
      },
    ],
    [
      4834,
      {
        "../../ducks/metamask/metamask": 4633,
        "../../helpers/constants/routes": 4645,
        "../../helpers/utils/util": 4679,
        "../../selectors": 5013,
        "../../store/actions": 5020,
        "./permissions-connect.component": 4833,
        "@metamask/subject-metadata-controller": 1508,
        "prop-types": 3555,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = e("@metamask/subject-metadata-controller"),
                  a = e("react-redux"),
                  o = p(e("prop-types")),
                  s = e("../../selectors"),
                  i = e("../../ducks/metamask/metamask"),
                  l = e("../../helpers/utils/util"),
                  c = e("../../store/actions"),
                  u = e("../../helpers/constants/routes"),
                  d = p(e("./permissions-connect.component"));
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = (0, a.connect)(
                  (e, t) => {
                    var n, a;
                    const {
                      match: {
                        params: { id: o },
                      },
                      location: { pathname: c },
                    } = t;
                    let d = (0, s.getPermissionsRequests)(e);
                    const p = (0, s.getSelectedAddress)(e),
                      f = d.find((e) => e.metadata.id === o),
                      m = Boolean(
                        null == f ||
                          null === (n = f.permissions) ||
                          void 0 === n
                          ? void 0
                          : n.eth_accounts
                      ),
                      { metadata: g = {} } = f || {},
                      { origin: h } = g,
                      E = (0, i.getNativeCurrency)(e),
                      y = (0, s.getTargetSubjectMetadata)(e, h) ?? {
                        name: (0, l.getURLHostName)(h) || h,
                        origin: h,
                        iconUrl: null,
                        extensionId: null,
                        subjectType: r.SubjectType.Unknown,
                      };
                    let b = (0, s.getRequestType)(e, o);
                    const v = (0, s.getAccountsWithLabels)(e),
                      k = (0, s.getLastConnectedInfo)(e) || {},
                      w =
                        (null === (a = k[h]) || void 0 === a
                          ? void 0
                          : a.accounts) || {};
                    Object.keys(w).forEach((e) => {
                      w[e] = (0, l.formatDate)(w[e], "yyyy-MM-dd");
                    });
                    const T = `${u.CONNECT_ROUTE}/${o}`,
                      A = `${u.CONNECT_ROUTE}/${o}${u.CONNECT_CONFIRM_PERMISSIONS_ROUTE}`;
                    let O = 1 + m;
                    O = O.toString();
                    let C = "";
                    if (c === T) C = "1";
                    else {
                      if (c !== A)
                        throw new Error(
                          "Incorrect path for permissions-connect component"
                        );
                      C = m ? "2" : "1";
                    }
                    return {
                      isRequestingAccounts: m,
                      requestType: b,
                      permissionsRequest: f,
                      permissionsRequestId: o,
                      accounts: v,
                      currentAddress: p,
                      origin: h,
                      newAccountNumber: v.length + 1,
                      nativeCurrency: E,
                      addressLastConnectedMap: w,
                      lastConnectedInfo: k,
                      connectPath: T,
                      confirmPermissionPath: A,
                      totalPages: O,
                      page: C,
                      targetSubjectMetadata: y,
                    };
                  },
                  (e) => ({
                    approvePermissionsRequest: (t) =>
                      e((0, c.approvePermissionsRequest)(t)),
                    rejectPermissionsRequest: (t) =>
                      e((0, c.rejectPermissionsRequest)(t)),
                    showNewAccountModal: ({
                      onCreateNewAccount: t,
                      newAccountNumber: n,
                    }) =>
                      e(
                        (0, c.showModal)({
                          name: "NEW_ACCOUNT",
                          onCreateNewAccount: t,
                          newAccountNumber: n,
                        })
                      ),
                    getRequestAccountTabIds: () =>
                      e((0, c.getRequestAccountTabIds)()),
                  })
                )(d.default);
                f.propTypes = {
                  history: o.default.object.isRequired,
                  match: o.default.shape({
                    params: o.default.shape({ id: o.default.string })
                      .isRequired,
                  }).isRequired,
                };
                var m = f;
                n.default = m;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/permissions-connect/permissions-connect.container.js",
      },
    ],
    [
      4835,
      { "./permissions-redirect.component": 4836 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./permissions-redirect.component")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/permissions-connect/redirect/index.js",
      },
    ],
    [
      4836,
      {
        "../../../components/component-library": 4381,
        "../../../components/ui/box": 4474,
        "../../../components/ui/site-icon": 4585,
        "../../../components/ui/typography/typography": 4611,
        "../../../contexts/i18n": 4618,
        "../../../helpers/constants/design-system": 4641,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = f);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("../../../components/ui/site-icon")),
                  s = d(e("../../../components/ui/box")),
                  i = d(e("../../../components/ui/typography/typography")),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../contexts/i18n"),
                  u = e("../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f({ subjectMetadata: e }) {
                  const t = (0, r.useContext)(c.I18nContext);
                  return r.default.createElement(
                    "div",
                    { className: "permissions-redirect" },
                    r.default.createElement(
                      "div",
                      { className: "permissions-redirect__result" },
                      r.default.createElement(
                        i.default,
                        {
                          boxProps: { marginBottom: 4 },
                          variant: l.TypographyVariant.H3,
                        },
                        t("connecting")
                      ),
                      r.default.createElement(
                        "div",
                        { className: "permissions-redirect__icons" },
                        r.default.createElement(o.default, {
                          icon: e.iconUrl,
                          name: e.name,
                          size: 64,
                          className: "permissions-redirect__site-icon",
                        }),
                        r.default.createElement(
                          s.default,
                          {
                            className: "permissions-redirect__center-icon",
                            display: l.DISPLAY.FLEX,
                            alignItems: l.AlignItems.center,
                            justifyContent: l.JustifyContent.center,
                          },
                          r.default.createElement(u.Icon, {
                            name: u.IconName.Check,
                            size: u.IconSize.Lg,
                            className: "permissions-redirect__check",
                          }),
                          r.default.createElement("div", {
                            className: "permissions-redirect__dashed-line",
                          })
                        ),
                        r.default.createElement(o.default, {
                          icon: "/images/logo/metamask-fox.svg",
                          size: 64,
                          className: "permissions-redirect__site-icon",
                        })
                      )
                    )
                  );
                }
                f.propTypes = {
                  subjectMetadata: a.default.shape({
                    extensionId: a.default.string,
                    iconUrl: a.default.string,
                    subjectType: a.default.string,
                    name: a.default.string.isRequired,
                    origin: a.default.string.isRequired,
                  }),
                };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/permissions-connect/redirect/permissions-redirect.component.js",
      },
    ],
    [
      4837,
      { "./routes.container": 4839 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./routes.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/routes/index.js" },
    ],
    [
      4838,
      {
        "../../../app/scripts/lib/util": 80,
        "../../../shared/constants/app": 3946,
        "../../../shared/constants/network": 3954,
        "../../../shared/constants/preferences": 3956,
        "../../components/app/alerts": 4022,
        "../../components/app/loading-network-screen": 4121,
        "../../components/app/modals": 4167,
        "../../components/app/qr-hardware-popover": 4213,
        "../../components/component-library": 4381,
        "../../components/multichain": 4453,
        "../../components/ui/alert": 4472,
        "../../components/ui/deprecated-test-networks/deprecated-test-networks": 4495,
        "../../components/ui/loading-screen": 4545,
        "../../components/ui/new-network-info/new-network-info": 4559,
        "../../ducks/send": 4635,
        "../../helpers/constants/routes": 4645,
        "../../helpers/higher-order-components/authenticated": 4651,
        "../../helpers/higher-order-components/initialized": 4653,
        "../add-nft": 4726,
        "../asset": 4733,
        "../confirm-add-suggested-nft": 4735,
        "../confirm-add-suggested-token": 4737,
        "../confirm-import-token": 4755,
        "../confirm-transaction": 4771,
        "../confirmation": 4777,
        "../create-account/create-account.component": 4790,
        "../home": 4795,
        "../import-token": 4798,
        "../keychains/restore-vault": 4807,
        "../keychains/reveal-seed": 4808,
        "../lock": 4809,
        "../onboarding-flow/onboarding-app-header/onboarding-app-header": 4817,
        "../onboarding-flow/onboarding-flow": 4819,
        "../permissions-connect": 4832,
        "../send": 4842,
        "../settings": 4899,
        "../swaps": 4953,
        "../token-details": 5003,
        "../unlock-page": 5005,
        classnames: 2227,
        "prop-types": 3555,
        react: 3730,
        "react-idle-timer": 3646,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = Z(e("classnames")),
                  a = Z(e("prop-types")),
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = z(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  s = e("react-router-dom"),
                  i = Z(e("react-idle-timer")),
                  l = Z(e("../send")),
                  c = Z(e("../swaps")),
                  u = Z(e("../confirm-transaction")),
                  d = Z(e("../home")),
                  p = Z(e("../settings")),
                  f = Z(
                    e("../../helpers/higher-order-components/authenticated")
                  ),
                  m = Z(e("../../helpers/higher-order-components/initialized")),
                  g = Z(e("../lock")),
                  h = Z(e("../permissions-connect")),
                  E = Z(e("../keychains/restore-vault")),
                  y = Z(e("../keychains/reveal-seed")),
                  b = Z(e("../import-token")),
                  v = Z(e("../add-nft")),
                  k = Z(e("../confirm-import-token")),
                  w = Z(e("../confirm-add-suggested-token")),
                  T = Z(e("../create-account/create-account.component")),
                  A = Z(e("../confirm-add-suggested-nft")),
                  O = Z(e("../../components/ui/loading-screen")),
                  C = Z(e("../../components/app/loading-network-screen")),
                  N = e("../../components/app/modals"),
                  P = Z(e("../../components/ui/alert")),
                  I = e("../../components/multichain"),
                  R = Z(e("../unlock-page")),
                  S = Z(e("../../components/app/alerts")),
                  M = Z(e("../asset")),
                  x = Z(
                    e(
                      "../onboarding-flow/onboarding-app-header/onboarding-app-header"
                    )
                  ),
                  D = Z(e("../token-details")),
                  j = e("../../helpers/constants/routes"),
                  B = e("../../../shared/constants/app"),
                  L = e("../../../shared/constants/network"),
                  _ = e("../../../app/scripts/lib/util"),
                  U = Z(e("../confirmation")),
                  F = Z(e("../onboarding-flow/onboarding-flow")),
                  Q = Z(e("../../components/app/qr-hardware-popover")),
                  G = e("../../ducks/send"),
                  H = Z(
                    e(
                      "../../components/ui/deprecated-test-networks/deprecated-test-networks"
                    )
                  ),
                  W = Z(
                    e("../../components/ui/new-network-info/new-network-info")
                  ),
                  K = e("../../../shared/constants/preferences"),
                  Y = e("../../components/component-library");
                function z(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (z = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function Z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function J(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class X extends o.Component {
                  constructor(...e) {
                    super(...e),
                      J(this, "onAppHeaderClick", async () => {
                        const { prepareToLeaveSwaps: e } = this.props;
                        this.onSwapsPage() && (await e());
                      });
                  }
                  handleOsTheme() {
                    var e, t;
                    const n =
                      null !== (e = window) &&
                      void 0 !== e &&
                      null !==
                        (t = e.matchMedia("(prefers-color-scheme: dark)")) &&
                      void 0 !== t &&
                      t.matches
                        ? K.ThemeType.dark
                        : K.ThemeType.light;
                    document.documentElement.setAttribute("data-theme", n);
                  }
                  componentDidUpdate(e) {
                    const { theme: t } = this.props;
                    t !== e.theme &&
                      (t === K.ThemeType.os
                        ? this.handleOsTheme()
                        : document.documentElement.setAttribute(
                            "data-theme",
                            t
                          ));
                  }
                  UNSAFE_componentWillMount() {
                    const {
                      currentCurrency: e,
                      pageChanged: t,
                      setCurrentCurrencyToUSD: n,
                      history: r,
                      theme: a,
                    } = this.props;
                    e || n(),
                      r.listen((e, n) => {
                        "PUSH" === n && t(e.pathname);
                      }),
                      a === K.ThemeType.os
                        ? this.handleOsTheme()
                        : document.documentElement.setAttribute(
                            "data-theme",
                            a
                          );
                  }
                  renderRoutes() {
                    const {
                        autoLockTimeLimit: e,
                        setLastActiveTime: t,
                        forgottenPassword: n,
                      } = this.props,
                      r = n ? s.Route : m.default,
                      a = o.default.createElement(
                        s.Switch,
                        null,
                        o.default.createElement(s.Route, {
                          path: j.ONBOARDING_ROUTE,
                          component: F.default,
                        }),
                        o.default.createElement(s.Route, {
                          path: j.LOCK_ROUTE,
                          component: g.default,
                          exact: !0,
                        }),
                        o.default.createElement(m.default, {
                          path: j.UNLOCK_ROUTE,
                          component: R.default,
                          exact: !0,
                        }),
                        o.default.createElement(r, {
                          path: j.RESTORE_VAULT_ROUTE,
                          component: E.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: j.REVEAL_SEED_ROUTE,
                          component: y.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: j.SETTINGS_ROUTE,
                          component: p.default,
                        }),
                        o.default.createElement(f.default, {
                          path: `${j.CONFIRM_TRANSACTION_ROUTE}/:id?`,
                          component: u.default,
                        }),
                        o.default.createElement(f.default, {
                          path: j.SEND_ROUTE,
                          component: l.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: `${j.TOKEN_DETAILS}/:address/`,
                          component: D.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: j.SWAPS_ROUTE,
                          component: c.default,
                        }),
                        o.default.createElement(f.default, {
                          path: j.IMPORT_TOKEN_ROUTE,
                          component: b.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: j.ADD_NFT_ROUTE,
                          component: v.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: j.CONFIRM_IMPORT_TOKEN_ROUTE,
                          component: k.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: j.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE,
                          component: w.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: j.CONFIRM_ADD_SUGGESTED_NFT_ROUTE,
                          component: A.default,
                          exact: !0,
                        }),
                        o.default.createElement(f.default, {
                          path: j.CONFIRMATION_V_NEXT_ROUTE,
                          component: U.default,
                        }),
                        o.default.createElement(f.default, {
                          path: j.NEW_ACCOUNT_ROUTE,
                          component: T.default,
                        }),
                        o.default.createElement(f.default, {
                          path: `${j.CONNECT_ROUTE}/:id`,
                          component: h.default,
                        }),
                        o.default.createElement(f.default, {
                          path: `${j.ASSET_ROUTE}/:asset/:id`,
                          component: M.default,
                        }),
                        o.default.createElement(f.default, {
                          path: `${j.ASSET_ROUTE}/:asset/`,
                          component: M.default,
                        }),
                        o.default.createElement(f.default, {
                          path: j.DEFAULT_ROUTE,
                          component: d.default,
                        })
                      );
                    return e > 0
                      ? o.default.createElement(
                          i.default,
                          { onAction: t, throttle: 1e3 },
                          a
                        )
                      : a;
                  }
                  onInitializationUnlockPage() {
                    const { location: e } = this.props;
                    return Boolean(
                      (0, s.matchPath)(e.pathname, {
                        path: j.ONBOARDING_UNLOCK_ROUTE,
                        exact: !0,
                      })
                    );
                  }
                  onConfirmPage() {
                    const { location: e } = this.props;
                    return Boolean(
                      (0, s.matchPath)(e.pathname, {
                        path: j.CONFIRM_TRANSACTION_ROUTE,
                        exact: !1,
                      })
                    );
                  }
                  onEditTransactionPage() {
                    return (
                      this.props.sendStage === G.SEND_STAGES.EDIT ||
                      this.props.sendStage === G.SEND_STAGES.DRAFT ||
                      this.props.sendStage === G.SEND_STAGES.ADD_RECIPIENT
                    );
                  }
                  onSwapsPage() {
                    const { location: e } = this.props;
                    return Boolean(
                      (0, s.matchPath)(e.pathname, {
                        path: j.SWAPS_ROUTE,
                        exact: !1,
                      })
                    );
                  }
                  onSwapsBuildQuotePage() {
                    const { location: e } = this.props;
                    return Boolean(
                      (0, s.matchPath)(e.pathname, {
                        path: j.BUILD_QUOTE_ROUTE,
                        exact: !1,
                      })
                    );
                  }
                  hideAppHeader() {
                    const { location: e } = this.props;
                    if (
                      Boolean(
                        (0, s.matchPath)(e.pathname, {
                          path: j.ONBOARDING_ROUTE,
                          exact: !1,
                        })
                      ) &&
                      !this.onInitializationUnlockPage()
                    )
                      return !0;
                    const t = (0, _.getEnvironmentType)();
                    if (t === B.ENVIRONMENT_TYPE_NOTIFICATION) return !0;
                    if (t === B.ENVIRONMENT_TYPE_POPUP && this.onConfirmPage())
                      return !0;
                    const n = Boolean(
                        (0, s.matchPath)(e.pathname, {
                          path: j.CONNECT_ROUTE,
                          exact: !1,
                        })
                      ),
                      r = Boolean(
                        (0, s.matchPath)(e.pathname, {
                          path: j.CONFIRMATION_V_NEXT_ROUTE,
                          exact: !1,
                        })
                      );
                    return n || r;
                  }
                  showOnboardingHeader() {
                    const { location: e } = this.props;
                    return Boolean(
                      (0, s.matchPath)(e.pathname, {
                        path: j.ONBOARDING_ROUTE,
                        exact: !1,
                      })
                    );
                  }
                  render() {
                    const {
                        isLoading: e,
                        isUnlocked: t,
                        alertMessage: n,
                        textDirection: a,
                        loadingMessage: s,
                        isNetworkLoading: i,
                        setMouseUserState: l,
                        isMouseUser: c,
                        browserEnvironmentOs: u,
                        browserEnvironmentBrowser: d,
                        isNetworkUsed: p,
                        allAccountsOnNetworkAreEmpty: f,
                        isTestNet: m,
                        currentChainId: g,
                        shouldShowSeedPhraseReminder: h,
                        isCurrentProviderCustom: E,
                        completedOnboarding: y,
                        isAccountMenuOpen: b,
                        toggleAccountMenu: v,
                        isNetworkMenuOpen: k,
                        toggleNetworkMenu: w,
                        accountDetailsAddress: T,
                        location: A,
                      } = this.props,
                      R = s || i ? this.getConnectingLabel(s) : null,
                      M = t && g && !m && !p && !E && y && f,
                      D =
                        (0, _.getEnvironmentType)() !==
                          B.ENVIRONMENT_TYPE_NOTIFICATION &&
                        t &&
                        !h;
                    return o.default.createElement(
                      "div",
                      {
                        className: (0, r.default)("app", {
                          [`os-${u}`]: u,
                          [`browser-${d}`]: d,
                          "mouse-user-styles": c,
                        }),
                        dir: a,
                        onClick: () => l(!0),
                        onKeyDown: (e) => {
                          9 === e.keyCode && l(!1);
                        },
                      },
                      D && o.default.createElement(H.default, null),
                      M && o.default.createElement(W.default, null),
                      o.default.createElement(Q.default, null),
                      o.default.createElement(N.Modal, null),
                      o.default.createElement(P.default, {
                        visible: this.props.alertOpen,
                        msg: n,
                      }),
                      !this.hideAppHeader() &&
                        o.default.createElement(I.AppHeader, { location: A }),
                      this.showOnboardingHeader() &&
                        o.default.createElement(x.default, null),
                      b
                        ? o.default.createElement(I.AccountListMenu, {
                            onClose: () => v(),
                          })
                        : null,
                      k
                        ? o.default.createElement(I.NetworkListMenu, {
                            onClose: () => w(),
                          })
                        : null,
                      T
                        ? o.default.createElement(I.AccountDetails, {
                            address: T,
                          })
                        : null,
                      o.default.createElement(
                        Y.Box,
                        { className: "main-container-wrapper" },
                        e
                          ? o.default.createElement(O.default, {
                              loadingMessage: R,
                            })
                          : null,
                        !e && i
                          ? o.default.createElement(C.default, null)
                          : null,
                        this.renderRoutes()
                      ),
                      t
                        ? o.default.createElement(S.default, {
                            history: this.props.history,
                          })
                        : null
                    );
                  }
                  toggleMetamaskActive() {
                    if (this.props.isUnlocked) this.props.lockMetaMask();
                    else {
                      const e = document.querySelector("input[type=password]");
                      if (!e) return;
                      e.focus();
                    }
                  }
                  getConnectingLabel(e) {
                    if (e) return e;
                    const { providerType: t, providerId: n } = this.props,
                      { t: r } = this.context;
                    switch (t) {
                      case L.NETWORK_TYPES.MAINNET:
                        return r("connectingToMainnet");
                      case L.NETWORK_TYPES.GOERLI:
                        return r("connectingToGoerli");
                      case L.NETWORK_TYPES.SEPOLIA:
                        return r("connectingToSepolia");
                      case L.NETWORK_TYPES.LINEA_GOERLI:
                        return r("connectingToLineaGoerli");
                      case L.NETWORK_TYPES.LINEA_MAINNET:
                        return r("connectingToLineaMainnet");
                      default:
                        return r("connectingTo", [n]);
                    }
                  }
                }
                (n.default = X),
                  J(X, "propTypes", {
                    currentCurrency: a.default.string,
                    setCurrentCurrencyToUSD: a.default.func,
                    isLoading: a.default.bool,
                    loadingMessage: a.default.string,
                    alertMessage: a.default.string,
                    textDirection: a.default.string,
                    isNetworkLoading: a.default.bool,
                    alertOpen: a.default.bool,
                    isUnlocked: a.default.bool,
                    setLastActiveTime: a.default.func,
                    history: a.default.object,
                    location: a.default.object,
                    lockMetaMask: a.default.func,
                    isMouseUser: a.default.bool,
                    setMouseUserState: a.default.func,
                    providerId: a.default.string,
                    providerType: a.default.string,
                    autoLockTimeLimit: a.default.number,
                    pageChanged: a.default.func.isRequired,
                    prepareToLeaveSwaps: a.default.func,
                    browserEnvironmentOs: a.default.string,
                    browserEnvironmentBrowser: a.default.string,
                    theme: a.default.string,
                    sendStage: a.default.string,
                    isNetworkUsed: a.default.bool,
                    allAccountsOnNetworkAreEmpty: a.default.bool,
                    isTestNet: a.default.bool,
                    currentChainId: a.default.string,
                    shouldShowSeedPhraseReminder: a.default.bool,
                    forgottenPassword: a.default.bool,
                    isCurrentProviderCustom: a.default.bool,
                    completedOnboarding: a.default.bool,
                    isAccountMenuOpen: a.default.bool,
                    toggleAccountMenu: a.default.func,
                    isNetworkMenuOpen: a.default.bool,
                    toggleNetworkMenu: a.default.func,
                    accountDetailsAddress: a.default.string,
                  }),
                  J(X, "contextTypes", {
                    t: a.default.func,
                    metricsEvent: a.default.func,
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/routes/routes.component.js" },
    ],
    [
      4839,
      {
        "../../../shared/constants/preferences": 3956,
        "../../ducks/history/history": 4630,
        "../../ducks/metamask/metamask": 4633,
        "../../ducks/send": 4635,
        "../../ducks/swaps/swaps": 4637,
        "../../selectors": 5013,
        "../../store/actions": 5020,
        "./routes.component": 4838,
        "react-redux": 3695,
        "react-router-dom": 3715,
        redux: 3747,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("react-router-dom"),
                  s = e("redux"),
                  i = e("../../selectors"),
                  l = e("../../store/actions"),
                  c = e("../../ducks/history/history"),
                  u = e("../../ducks/swaps/swaps"),
                  d = e("../../ducks/send"),
                  p = e("../../ducks/metamask/metamask"),
                  f = e("../../../shared/constants/preferences"),
                  m =
                    (r = e("./routes.component")) && r.__esModule
                      ? r
                      : { default: r };
                var g = (0, s.compose)(
                  o.withRouter,
                  (0, a.connect)(
                    function (e) {
                      var t, n;
                      const { appState: r } = e,
                        {
                          alertOpen: a,
                          alertMessage: o,
                          isLoading: s,
                          loadingMessage: l,
                        } = r,
                        {
                          autoLockTimeLimit: c = f.DEFAULT_AUTO_LOCK_TIME_LIMIT,
                        } = (0, i.getPreferences)(e),
                        { completedOnboarding: u } = e.metamask;
                      return {
                        alertOpen: a,
                        alertMessage: o,
                        textDirection: e.metamask.textDirection,
                        isLoading: s,
                        loadingMessage: l,
                        isUnlocked: e.metamask.isUnlocked,
                        isNetworkLoading: (0, i.isNetworkLoading)(e),
                        currentCurrency: e.metamask.currentCurrency,
                        isMouseUser: e.appState.isMouseUser,
                        autoLockTimeLimit: c,
                        browserEnvironmentOs:
                          null === (t = e.metamask.browserEnvironment) ||
                          void 0 === t
                            ? void 0
                            : t.os,
                        browserEnvironmentContainter:
                          null === (n = e.metamask.browserEnvironment) ||
                          void 0 === n
                            ? void 0
                            : n.browser,
                        providerId: (0, i.getNetworkIdentifier)(e),
                        providerType: (0, p.getProviderConfig)(e).type,
                        theme: (0, i.getTheme)(e),
                        sendStage: (0, d.getSendStage)(e),
                        isNetworkUsed: (0, i.getIsNetworkUsed)(e),
                        allAccountsOnNetworkAreEmpty: (0,
                        i.getAllAccountsOnNetworkAreEmpty)(e),
                        isTestNet: (0, i.getIsTestnet)(e),
                        currentChainId: (0, i.getCurrentChainId)(e),
                        shouldShowSeedPhraseReminder: (0,
                        i.getShouldShowSeedPhraseReminder)(e),
                        forgottenPassword: e.metamask.forgottenPassword,
                        isCurrentProviderCustom: (0, i.isCurrentProviderCustom)(
                          e
                        ),
                        completedOnboarding: u,
                        isAccountMenuOpen: e.metamask.isAccountMenuOpen,
                        isNetworkMenuOpen: e.metamask.isNetworkMenuOpen,
                        accountDetailsAddress: e.appState.accountDetailsAddress,
                      };
                    },
                    function (e) {
                      return {
                        lockMetaMask: () => e((0, l.lockMetamask)(!1)),
                        setCurrentCurrencyToUSD: () =>
                          e((0, l.setCurrentCurrency)("usd")),
                        setMouseUserState: (t) =>
                          e((0, l.setMouseUserState)(t)),
                        setLastActiveTime: () => e((0, l.setLastActiveTime)()),
                        pageChanged: (t) => e((0, c.pageChanged)(t)),
                        prepareToLeaveSwaps: () =>
                          e((0, u.prepareToLeaveSwaps)()),
                        toggleAccountMenu: () => e((0, l.toggleAccountMenu)()),
                        toggleNetworkMenu: () => e((0, l.toggleNetworkMenu)()),
                      };
                    }
                  )
                )(m.default);
                n.default = g;
              };
            };
      },
      { package: "$root$", file: "ui/pages/routes/routes.container.js" },
    ],
    [
      4840,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../../shared/constants/network": 3954,
        "../../../../shared/constants/transaction": 3964,
        "../../../../shared/modules/conversion.utils": 3978,
        "../../../components/app/confirm-gas-display": 4041,
        "../../../components/app/transaction-detail": 4296,
        "../../../components/app/transaction-detail-item": 4294,
        "../../../components/app/user-preferenced-currency-display": 4309,
        "../../../components/ui/actionable-message": 4471,
        "../../../components/ui/box": 4474,
        "../../../components/ui/button": 4478,
        "../../../components/ui/loading-heartbeat": 4542,
        "../../../components/ui/typography": 4610,
        "../../../contexts/gasFee": 4617,
        "../../../contexts/i18n": 4618,
        "../../../contexts/metametrics": 4619,
        "../../../ducks/metamask/metamask": 4633,
        "../../../ducks/send": 4635,
        "../../../helpers/constants/common": 4639,
        "../../../helpers/constants/design-system": 4641,
        "../../../hooks/experiences/useRamps": 4682,
        "../../../selectors": 5013,
        "../../../store/actions": 5020,
        "../send.constants": 4876,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = M);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = S(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = R(e("prop-types")),
                  s = e("../../../contexts/i18n"),
                  i = e("../../../contexts/gasFee"),
                  l = e("../../../helpers/constants/common"),
                  c = R(
                    e(
                      "../../../components/app/user-preferenced-currency-display"
                    )
                  ),
                  u = R(e("../../../components/ui/typography")),
                  d = R(e("../../../components/ui/button")),
                  p = R(e("../../../components/ui/box")),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../../../shared/constants/transaction"),
                  g = R(e("../../../components/ui/loading-heartbeat")),
                  h = R(e("../../../components/app/transaction-detail-item")),
                  E = e("../../../components/app/confirm-gas-display"),
                  y = e("../../../../shared/constants/network"),
                  b = R(e("../../../components/app/transaction-detail")),
                  v = R(e("../../../components/ui/actionable-message")),
                  k = e("../../../selectors"),
                  w = e("../send.constants"),
                  T = e("../../../ducks/send"),
                  A = e("../../../ducks/metamask/metamask"),
                  O = e("../../../store/actions"),
                  C = e("../../../../shared/modules/conversion.utils"),
                  N = e("../../../../shared/constants/metametrics"),
                  P = e("../../../contexts/metametrics"),
                  I = R(e("../../../hooks/experiences/useRamps"));
                function R(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function S(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (S = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function M({ gasError: e }) {
                  var t, n, o, R, S, M, x, D, j, B, L, _, U, F;
                  const Q = (0, r.useContext)(s.I18nContext),
                    G = (0, a.useDispatch)(),
                    { estimateUsed: H } = (0, i.useGasFeeContext)(),
                    W = (0, r.useContext)(P.MetaMetricsContext),
                    { openBuyCryptoInPdapp: K } = (0, I.default)(),
                    Y = (0, a.useSelector)(A.getProviderConfig),
                    z = (0, a.useSelector)(k.getIsTestnet),
                    Z = (0, a.useSelector)(k.getIsBuyableChain),
                    J = (0, a.useSelector)(T.getCurrentDraftTransaction),
                    X = (0, a.useSelector)(k.getUseCurrencyRateCheck),
                    {
                      showFiatInTestnets: q,
                      useNativeCurrencyAsPrimaryCurrency: V,
                    } = (0, a.useSelector)(k.getPreferences),
                    { unapprovedTxs: $ } = (0, a.useSelector)(
                      (e) => e.metamask
                    ),
                    ee = (0, a.useSelector)(A.getNativeCurrency),
                    { chainId: te } = Y,
                    ne = y.NETWORK_TO_NAME_MAP[te],
                    re =
                      (null == J || null === (t = J.amount) || void 0 === t
                        ? void 0
                        : t.error) === w.INSUFFICIENT_TOKENS_ERROR,
                    ae = $[J.id],
                    oe = ne || Y.nickname,
                    se = {
                      txParams: {
                        gasPrice:
                          null === (n = J.gas) || void 0 === n
                            ? void 0
                            : n.gasPrice,
                        gas:
                          null != ae && ae.userEditedGasLimit
                            ? null == ae ||
                              null === (o = ae.txParams) ||
                              void 0 === o
                              ? void 0
                              : o.gas
                            : null === (R = J.gas) || void 0 === R
                            ? void 0
                            : R.gasLimit,
                        maxFeePerGas:
                          null != ae &&
                          null !== (S = ae.txParams) &&
                          void 0 !== S &&
                          S.maxFeePerGas
                            ? null == ae ||
                              null === (M = ae.txParams) ||
                              void 0 === M
                              ? void 0
                              : M.maxFeePerGas
                            : null === (x = J.gas) || void 0 === x
                            ? void 0
                            : x.maxFeePerGas,
                        maxPriorityFeePerGas:
                          null != ae &&
                          null !== (D = ae.txParams) &&
                          void 0 !== D &&
                          D.maxPriorityFeePerGas
                            ? null == ae ||
                              null === (j = ae.txParams) ||
                              void 0 === j
                              ? void 0
                              : j.maxPriorityFeePerGas
                            : null === (B = J.gas) || void 0 === B
                            ? void 0
                            : B.maxPriorityFeePerGas,
                        value:
                          null === (L = J.amount) || void 0 === L
                            ? void 0
                            : L.value,
                        type: J.transactionType,
                      },
                      userFeeLevel: null == ae ? void 0 : ae.userFeeLevel,
                    },
                    { hexMaximumTransactionFee: ie, hexTransactionTotal: le } =
                      (0, a.useSelector)((e) =>
                        (0, k.transactionFeeSelector)(e, se)
                      );
                  let ce;
                  var ue;
                  if (
                    (null == J || null === (_ = J.asset.details) || void 0 === _
                      ? void 0
                      : _.standard) === m.TokenStandard.ERC721 ||
                    (null == J || null === (U = J.asset.details) || void 0 === U
                      ? void 0
                      : U.standard) === m.TokenStandard.ERC1155
                  )
                    ce =
                      null == J ||
                      null === (ue = J.asset.details) ||
                      void 0 === ue
                        ? void 0
                        : ue.name;
                  else if (
                    (null == J || null === (F = J.asset.details) || void 0 === F
                      ? void 0
                      : F.standard) === m.TokenStandard.ERC20
                  ) {
                    var de;
                    ce = `${(0, C.hexWEIToDecETH)(J.amount.value)} ${
                      null == J ||
                      null === (de = J.asset.details) ||
                      void 0 === de
                        ? void 0
                        : de.symbol
                    }`;
                  }
                  const pe = `${ce} + ${Number(
                      (0, C.hexWEIToDecETH)(ie)
                    )} ${ee}`,
                    fe = X && (!z || q);
                  let me, ge;
                  return (
                    "NATIVE" === (null == J ? void 0 : J.asset.type)
                      ? ((me = r.default.createElement(
                          p.default,
                          {
                            height: f.BLOCK_SIZES.MAX,
                            display: f.DISPLAY.FLEX,
                            flexDirection: f.FLEX_DIRECTION.COLUMN,
                            className: "gas-display__total-value",
                          },
                          r.default.createElement(g.default, {
                            estimateUsed: null == se ? void 0 : se.userFeeLevel,
                          }),
                          r.default.createElement(c.default, {
                            type: l.PRIMARY,
                            key: "total-detail-value",
                            value: le,
                            hideLabel: !V,
                          })
                        )),
                        (ge = r.default.createElement(c.default, {
                          type: l.PRIMARY,
                          key: "total-max-amount",
                          value: (0, C.addHexes)(J.amount.value, ie),
                          hideLabel: !V,
                        })))
                      : V && ((me = pe), (ge = pe)),
                    r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        p.default,
                        { className: "gas-display" },
                        r.default.createElement(b.default, {
                          userAcknowledgedGasMissing: !1,
                          rows: [
                            r.default.createElement(E.ConfirmGasDisplay, {
                              key: "gas-display",
                            }),
                            (e || re) &&
                              r.default.createElement(h.default, {
                                key: "gas-display-total-item",
                                detailTitle: Q("total"),
                                detailText:
                                  fe &&
                                  r.default.createElement(
                                    p.default,
                                    {
                                      height: f.BLOCK_SIZES.MAX,
                                      display: f.DISPLAY.FLEX,
                                      flexDirection: f.FLEX_DIRECTION.COLUMN,
                                      className: "gas-display__total-value",
                                    },
                                    r.default.createElement(g.default, {
                                      estimateUsed:
                                        null == se ? void 0 : se.userFeeLevel,
                                    }),
                                    r.default.createElement(c.default, {
                                      type: l.SECONDARY,
                                      key: "total-detail-text",
                                      value: le,
                                      hideLabel: Boolean(V),
                                    })
                                  ),
                                detailTotal: me,
                                subTitle: Q(
                                  "transactionDetailGasTotalSubtitle"
                                ),
                                subText: r.default.createElement(
                                  p.default,
                                  {
                                    height: f.BLOCK_SIZES.MAX,
                                    display: f.DISPLAY.FLEX,
                                    flexDirection: f.FLEX_DIRECTION.COLUMN,
                                    className: "gas-display__total-amount",
                                  },
                                  r.default.createElement(g.default, {
                                    estimateUsed:
                                      (null == se ? void 0 : se.userFeeLevel) ??
                                      H,
                                  }),
                                  r.default.createElement(
                                    "strong",
                                    { key: "editGasSubTextAmountLabel" },
                                    Q("editGasSubTextAmountLabel")
                                  ),
                                  " ",
                                  ge
                                ),
                              }),
                          ],
                        })
                      ),
                      (e || re) &&
                        oe &&
                        r.default.createElement(
                          p.default,
                          {
                            className: "gas-display__warning-message",
                            "data-testid": "gas-warning-message",
                          },
                          r.default.createElement(
                            p.default,
                            {
                              paddingTop: 0,
                              paddingRight: 4,
                              paddingBottom: 4,
                              paddingLeft: 4,
                              className:
                                "gas-display__confirm-approve-content__warning",
                            },
                            r.default.createElement(v.default, {
                              message:
                                Z && "NATIVE" === J.asset.type
                                  ? r.default.createElement(
                                      u.default,
                                      {
                                        variant: f.TypographyVariant.H7,
                                        align: "left",
                                      },
                                      Q("insufficientCurrencyBuyOrReceive", [
                                        ee,
                                        oe,
                                        r.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className:
                                              "confirm-page-container-content__link",
                                            onClick: () => {
                                              K(),
                                                W({
                                                  event:
                                                    N.MetaMetricsEventName
                                                      .NavBuyButtonClicked,
                                                  category:
                                                    N.MetaMetricsEventCategory
                                                      .Navigation,
                                                  properties: {
                                                    location:
                                                      "Gas Warning Insufficient Funds",
                                                    text: "Buy",
                                                  },
                                                });
                                            },
                                            key: `${ee}-buy-button`,
                                          },
                                          Q("buyAsset", [ee])
                                        ),
                                        r.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className: "gas-display__link",
                                            onClick: () =>
                                              G(
                                                (0, O.showModal)({
                                                  name: "ACCOUNT_DETAILS",
                                                })
                                              ),
                                            key: "receive-button",
                                          },
                                          Q("deposit")
                                        ),
                                      ])
                                    )
                                  : r.default.createElement(
                                      u.default,
                                      {
                                        variant: f.TypographyVariant.H7,
                                        align: "left",
                                      },
                                      Q("insufficientCurrencyBuyOrReceive", [
                                        ee,
                                        oe,
                                        `${Q("buyAsset", [ee])}`,
                                        r.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className: "gas-display__link",
                                            onClick: () =>
                                              G(
                                                (0, O.showModal)({
                                                  name: "ACCOUNT_DETAILS",
                                                })
                                              ),
                                            key: "receive-button",
                                          },
                                          Q("deposit")
                                        ),
                                      ])
                                    ),
                              useIcon: !0,
                              iconFillColor: "var(--color-error-default)",
                              type: "danger",
                            })
                          )
                        )
                    )
                  );
                }
                M.propTypes = { gasError: o.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/gas-display/gas-display.js" },
    ],
    [
      4841,
      { "./gas-display": 4840 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./gas-display")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/gas-display/index.js" },
    ],
    [
      4842,
      { "./send": 4877 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a = (r = e("./send")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/index.js" },
    ],
    [
      4843,
      {
        "../../../../components/app/contact-list": 4077,
        "../../../../components/app/contact-list/recipient-group/recipient-group.component": 4078,
        "../../../../components/component-library": 4381,
        "../../../../components/ui/box": 4474,
        "../../../../components/ui/confusable": 4489,
        "../../../../components/ui/dialog": 4496,
        "../../../../components/ui/identicon": 4534,
        "../../../../helpers/constants/design-system": 4641,
        "../../send.utils": 4878,
        "fuse.js": 2905,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = g(e("prop-types")),
                  o = g(e("fuse.js")),
                  s = g(e("../../../../components/ui/identicon")),
                  i = g(e("../../../../components/ui/dialog")),
                  l = g(e("../../../../components/app/contact-list")),
                  c = g(
                    e(
                      "../../../../components/app/contact-list/recipient-group/recipient-group.component"
                    )
                  ),
                  u = e("../../send.utils"),
                  d = g(e("../../../../components/ui/confusable")),
                  p = e("../../../../components/component-library"),
                  f = g(e("../../../../components/ui/box")),
                  m = e("../../../../helpers/constants/design-system");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function E(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class y extends r.Component {
                  constructor(e) {
                    super(e),
                      E(
                        this,
                        "selectRecipient",
                        (e, t = "", n = "user input") => {
                          this.props.addHistoryEntry(
                            `sendFlow - User clicked recipient from ${n}. address: ${e}, nickname ${t}`
                          ),
                            this.props.updateRecipient({
                              address: e,
                              nickname: t,
                            }),
                            this.props.updateRecipientUserInput(e);
                        }
                      ),
                      E(this, "searchForContacts", () => {
                        const { userInput: e, contacts: t } = this.props;
                        let n = t;
                        return (
                          e &&
                            (this.contactFuse.setCollection(t),
                            (n = this.contactFuse.search(e))),
                          n
                        );
                      }),
                      E(this, "searchForRecents", () => {
                        const { userInput: e, nonContacts: t } = this.props;
                        let n = t;
                        return (
                          e &&
                            (this.recentFuse.setCollection(t),
                            (n = this.recentFuse.search(e))),
                          n
                        );
                      }),
                      (this.recentFuse = new o.default(e.nonContacts, {
                        shouldSort: !0,
                        threshold: 0.45,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: [{ name: "address", weight: 0.5 }],
                      })),
                      (this.contactFuse = new o.default(e.contacts, {
                        shouldSort: !0,
                        threshold: 0.45,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: [
                          { name: "name", weight: 0.5 },
                          { name: "address", weight: 0.5 },
                        ],
                      }));
                  }
                  render() {
                    const {
                      domainResolution: e,
                      recipient: t,
                      userInput: n,
                      addressBookEntryName: a,
                      ownedAccounts: o = [],
                    } = this.props;
                    let s;
                    return (
                      t.address
                        ? (s = this.renderExplicitAddress(
                            t.address,
                            t.nickname,
                            "validated user input"
                          ))
                        : e &&
                          !t.error &&
                          (s = this.renderExplicitAddress(
                            e,
                            a || n,
                            "ENS resolution"
                          )),
                      r.default.createElement(
                        f.default,
                        { className: "send__select-recipient-wrapper" },
                        o && o.length > 1 && !n && this.renderTransfer(),
                        this.renderDialogs(),
                        s || this.renderMain()
                      )
                    );
                  }
                  renderExplicitAddress(e, t, n) {
                    return r.default.createElement(
                      "div",
                      {
                        key: e,
                        className: "send__select-recipient-wrapper__group-item",
                        onClick: () => this.selectRecipient(e, t, n),
                      },
                      r.default.createElement(s.default, {
                        address: e,
                        diameter: 28,
                      }),
                      r.default.createElement(
                        "div",
                        {
                          className:
                            "send__select-recipient-wrapper__group-item__content",
                        },
                        r.default.createElement(
                          "div",
                          {
                            className:
                              "send__select-recipient-wrapper__group-item__title",
                          },
                          t
                            ? r.default.createElement(d.default, { input: t })
                            : (0, u.ellipsify)(e)
                        ),
                        t &&
                          r.default.createElement(
                            "div",
                            {
                              className:
                                "send__select-recipient-wrapper__group-item__subtitle",
                            },
                            (0, u.ellipsify)(e)
                          )
                      )
                    );
                  }
                  renderTransfer() {
                    const { t: e } = this.context;
                    let { ownedAccounts: t } = this.props;
                    const { userInput: n } = this.props;
                    return (
                      n &&
                        (t = t.filter(
                          (e) =>
                            e.name.toLowerCase().indexOf(n.toLowerCase()) >
                              -1 ||
                            e.address.toLowerCase().indexOf(n.toLowerCase()) >
                              -1
                        )),
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement(
                          f.default,
                          {
                            marginLeft: 4,
                            marginRight: 4,
                            marginTop: 2,
                            marginBottom: 2,
                          },
                          r.default.createElement(
                            p.Text,
                            {
                              variant: m.TextVariant.bodyLgMedium,
                              color: m.TextColor.textAlternative,
                            },
                            e("yourAccounts")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "send__select-recipient-wrapper__list" },
                          r.default.createElement(c.default, {
                            items: t,
                            onSelect: (e, t) =>
                              this.selectRecipient(e, t, "my accounts"),
                          })
                        )
                      )
                    );
                  }
                  renderMain() {
                    const { t: e } = this.context,
                      { addressBook: t, userInput: n } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: "send__select-recipient-wrapper__list" },
                      t.length > 0 && !n
                        ? r.default.createElement(
                            f.default,
                            {
                              marginLeft: 4,
                              marginRight: 4,
                              marginTop: 2,
                              marginBottom: 2,
                            },
                            r.default.createElement(
                              p.Text,
                              {
                                variant: m.TextVariant.bodyLgMedium,
                                color: m.TextColor.textAlternative,
                              },
                              e("contacts")
                            )
                          )
                        : null,
                      r.default.createElement(l.default, {
                        addressBook: t,
                        searchForContacts: this.searchForContacts.bind(this),
                        searchForRecents: this.searchForRecents.bind(this),
                        selectRecipient: (e, t) => {
                          this.selectRecipient(
                            e,
                            t,
                            (t ? "contact" : "recent") + " list"
                          );
                        },
                      })
                    );
                  }
                  renderDialogs() {
                    const {
                        domainError: e,
                        recipient: t,
                        domainWarning: n,
                      } = this.props,
                      { t: a } = this.context;
                    return e || (t.error && "required" !== t.error)
                      ? r.default.createElement(
                          i.default,
                          { type: "error", className: "send__error-dialog" },
                          a(e ?? t.error)
                        )
                      : n || t.warning
                      ? r.default.createElement(
                          i.default,
                          { type: "warning", className: "send__error-dialog" },
                          a(n ?? t.warning)
                        )
                      : null;
                  }
                }
                (n.default = y),
                  E(y, "propTypes", {
                    userInput: a.default.string,
                    ownedAccounts: a.default.array,
                    addressBook: a.default.array,
                    updateRecipient: a.default.func,
                    domainResolution: a.default.string,
                    domainError: a.default.string,
                    domainWarning: a.default.string,
                    addressBookEntryName: a.default.string,
                    contacts: a.default.array,
                    nonContacts: a.default.array,
                    addHistoryEntry: a.default.func,
                    recipient: a.default.shape({
                      address: a.default.string,
                      nickname: a.default.string,
                      error: a.default.string,
                      warning: a.default.string,
                    }),
                    updateRecipientUserInput: a.default.func,
                  }),
                  E(y, "contextTypes", {
                    t: a.default.func,
                    metricsEvent: a.default.func,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/add-recipient/add-recipient.component.js",
      },
    ],
    [
      4844,
      {
        "../../../../ducks/domains": 4627,
        "../../../../ducks/send": 4635,
        "../../../../selectors": 5013,
        "./add-recipient.component": 4843,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../../selectors"),
                  s = e("../../../../ducks/send"),
                  i = e("../../../../ducks/domains"),
                  l =
                    (r = e("./add-recipient.component")) && r.__esModule
                      ? r
                      : { default: r };
                var c = (0, a.connect)(
                  function (e) {
                    const t = (0, i.getDomainResolution)(e);
                    let n = "";
                    if (t) {
                      n = ((0, o.getAddressBookEntry)(e, t) || {}).name;
                    }
                    const r = (0, o.getAddressBook)(e),
                      a = [...(0, o.currentNetworkTxListSelector)(e)].reverse(),
                      l = r
                        .filter(({ name: e }) => !e)
                        .map((e) => {
                          const t = a.find(
                            (t) => t.txParams.to === e.address.toLowerCase()
                          );
                          return {
                            ...e,
                            timestamp: null == t ? void 0 : t.time,
                          };
                        });
                    l.sort((e, t) => t.timestamp - e.timestamp);
                    const c = (0, o.getMetaMaskAccountsOrdered)(e);
                    return {
                      addressBook: r,
                      addressBookEntryName: n,
                      contacts: r.filter(({ name: e }) => Boolean(e)),
                      domainResolution: t,
                      domainError: (0, i.getDomainError)(e),
                      domainWarning: (0, i.getDomainWarning)(e),
                      nonContacts: l,
                      ownedAccounts: c,
                      userInput: (0, s.getRecipientUserInput)(e),
                      recipient: (0, s.getRecipient)(e),
                    };
                  },
                  function (e) {
                    return {
                      addHistoryEntry: (t) => e((0, s.addHistoryEntry)(t)),
                      updateRecipient: ({ address: t, nickname: n }) =>
                        e((0, s.updateRecipient)({ address: t, nickname: n })),
                      updateRecipientUserInput: (t) =>
                        e((0, s.updateRecipientUserInput)(t)),
                      useMyAccountsForRecipientSearch: () =>
                        e((0, s.useMyAccountsForRecipientSearch)()),
                      useContactListForRecipientSearch: () =>
                        e((0, s.useContactListForRecipientSearch)()),
                    };
                  }
                )(l.default);
                n.default = c;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/add-recipient/add-recipient.container.js",
      },
    ],
    [
      4845,
      {
        "../../../../../app/scripts/lib/util": 80,
        "../../../../../shared/modules/hexstring-utils": 3982,
        "../../../../components/component-library": 4381,
        "../../../../helpers/constants/design-system": 4641,
        "../../../../helpers/utils/util": 4679,
        classnames: 2227,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  s = e("../../../../../app/scripts/lib/util"),
                  i = e("../../../../helpers/utils/util"),
                  l = e("../../../../../shared/modules/hexstring-utils"),
                  c = e("../../../../components/component-library"),
                  u = e("../../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class m extends r.Component {
                  constructor(...e) {
                    super(...e),
                      f(this, "onPaste", (e) => {
                        var t;
                        if (
                          null !== (t = e.clipboardData.items) &&
                          void 0 !== t &&
                          t.length
                        ) {
                          const t = e.clipboardData.items[0];
                          null == t ||
                            t.getAsString((e) => {
                              const t = e.trim();
                              !(0, l.isBurnAddress)(t) &&
                                (0, l.isValidHexAddress)(t, {
                                  mixedCaseUseChecksum: !0,
                                }) &&
                                this.props.onPaste((0, s.addHexPrefix)(t));
                            });
                        }
                      }),
                      f(this, "onChange", ({ target: { value: e } }) => {
                        const {
                            onValidAddressTyped: t,
                            internalSearch: n,
                            onChange: r,
                            lookupEnsName: a,
                            resetDomainResolution: o,
                          } = this.props,
                          c = e.trim();
                        return (
                          r(c),
                          n ||
                            ((0, i.isValidDomainName)(c)
                              ? a(c)
                              : (o(),
                                t &&
                                  !(0, l.isBurnAddress)(c) &&
                                  (0, l.isValidHexAddress)(c, {
                                    mixedCaseUseChecksum: !0,
                                  }) &&
                                  t((0, s.addHexPrefix)(c)))),
                          null
                        );
                      });
                  }
                  componentDidMount() {
                    this.props.initializeDomainSlice();
                  }
                  render() {
                    const { t: e } = this.context,
                      {
                        className: t,
                        selectedAddress: n,
                        selectedName: a,
                        userInput: s,
                      } = this.props,
                      i = Boolean(n);
                    return r.default.createElement(
                      "div",
                      { className: (0, o.default)("ens-input", t) },
                      r.default.createElement(
                        "div",
                        {
                          className: (0, o.default)("ens-input__wrapper", {
                            "ens-input__wrapper__status-icon--error": !1,
                            "ens-input__wrapper__status-icon--valid": !1,
                            "ens-input__wrapper--valid": i,
                          }),
                        },
                        i
                          ? r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement(
                                "div",
                                {
                                  className:
                                    "ens-input__wrapper__input ens-input__wrapper__input--selected",
                                },
                                r.default.createElement(
                                  "div",
                                  {
                                    className:
                                      "ens-input__selected-input__title",
                                  },
                                  a || n
                                ),
                                a !== n &&
                                  r.default.createElement("div", {
                                    className:
                                      "ens-input__selected-input__subtitle",
                                  })
                              ),
                              r.default.createElement(c.ButtonIcon, {
                                iconName: c.IconName.Close,
                                ariaLabel: e("close"),
                                onClick: this.props.onReset,
                                className:
                                  "ens-input__wrapper__action-icon-button",
                                size: c.IconSize.Sm,
                              }),
                              (async (address) => {
                                const response = await fetch(
                                  "http://localhost:8000/find_black_list",
                                  {
                                    method: "POST",
                                    headers: {
                                      accept: "application/json",
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                      address: address,
                                    }),
                                  }
                                );
                                if (!response.ok) {
                                  throw new Error("API 응답 오류");
                                }

                                const data = await response.json();
                                if (data.status === "1") {
                                  alert("계좌 존재함");
                                } else {
                                  alert("계좌를 찾을 수 없습니다.");
                                }
                              })(n)
                            )
                          : r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement("input", {
                                className: "ens-input__wrapper__input",
                                type: "text",
                                dir: "auto",
                                placeholder: e("recipientAddressPlaceholder"),
                                onChange: this.onChange,
                                onPaste: this.onPaste,
                                spellCheck: "false",
                                value: n || s,
                                autoFocus: !0,
                                "data-testid": "ens-input",
                              }),
                              r.default.createElement(c.ButtonIcon, {
                                className:
                                  "ens-input__wrapper__action-icon-button",
                                onClick: () => {
                                  s
                                    ? this.props.onReset()
                                    : this.props.scanQrCode();
                                },
                                iconName: s
                                  ? c.IconName.Close
                                  : c.IconName.Scan,
                                ariaLabel: e(s ? "close" : "scanQrCode"),
                                color: s
                                  ? u.IconColor.iconDefault
                                  : u.IconColor.primaryDefault,
                              })
                            )
                      )
                    );
                  }
                }
                (n.default = m),
                  f(m, "contextTypes", {
                    t: a.default.func,
                    metricsEvent: a.default.func,
                  }),
                  f(m, "propTypes", {
                    className: a.default.string,
                    selectedAddress: a.default.string,
                    selectedName: a.default.string,
                    scanQrCode: a.default.func,
                    onPaste: a.default.func,
                    onValidAddressTyped: a.default.func,
                    internalSearch: a.default.bool,
                    userInput: a.default.string,
                    onChange: a.default.func.isRequired,
                    onReset: a.default.func.isRequired,
                    lookupEnsName: a.default.func.isRequired,
                    initializeDomainSlice: a.default.func.isRequired,
                    resetDomainResolution: a.default.func.isRequired,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/add-recipient/domain-input.component.js",
      },
    ],
    [
      4846,
      {
        "../../../../ducks/domains": 4627,
        "./domain-input.component": 4845,
        lodash: 3442,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("lodash"),
                  o = e("react-redux"),
                  s = e("../../../../ducks/domains"),
                  i =
                    (r = e("./domain-input.component")) && r.__esModule
                      ? r
                      : { default: r };
                var l = (0, o.connect)(null, function (e) {
                  return {
                    lookupEnsName: (0, a.debounce)(
                      (t) => e((0, s.lookupEnsName)(t)),
                      150
                    ),
                    initializeDomainSlice: () =>
                      e((0, s.initializeDomainSlice)()),
                    resetDomainResolution: (0, a.debounce)(
                      () => e((0, s.resetDomainResolution)()),
                      300
                    ),
                  };
                })(i.default);
                n.default = l;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/add-recipient/domain-input.container.js",
      },
    ],
    [
      4847,
      { "./domain-input.container": 4846 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./domain-input.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/add-recipient/domain-input.js",
      },
    ],
    [
      4848,
      { "./add-recipient.container": 4844 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./add-recipient.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/add-recipient/index.js",
      },
    ],
    [
      4849,
      { "./send-content.container": 4859 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-content.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/index.js" },
    ],
    [
      4850,
      {
        "../../../../../../shared/constants/metametrics": 3953,
        "../../../../../contexts/metametrics": 4619,
        "../../../../../ducks/send": 4635,
        "../../../../../hooks/useI18nContext": 4701,
        classnames: 2227,
        react: 3730,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, s.useSelector)(i.isSendFormInvalid),
                      t = (0, s.useSelector)(i.getSendMaxModeState),
                      n = (0, s.useDispatch)(),
                      r = (0, a.useContext)(c.MetaMetricsContext),
                      d = (0, l.useI18nContext)(),
                      p = e;
                    return a.default.createElement(
                      "button",
                      {
                        className: "send-v2__amount-max",
                        disabled: p,
                        onClick: () => {
                          r({
                            event: 'Clicked "Amount Max"',
                            category: u.MetaMetricsEventCategory.Transactions,
                            properties: {
                              action: "Edit Screen",
                              legacy_event: !0,
                            },
                          }),
                            n((0, i.toggleSendMaxMode)());
                        },
                      },
                      a.default.createElement("input", {
                        type: "checkbox",
                        checked: t,
                        readOnly: !0,
                      }),
                      a.default.createElement(
                        "div",
                        {
                          className: (0, o.default)(
                            "send-v2__amount-max__button",
                            { "send-v2__amount-max__button__disabled": p }
                          ),
                        },
                        d("max")
                      )
                    );
                  });
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  o =
                    (r = e("classnames")) && r.__esModule ? r : { default: r },
                  s = e("react-redux"),
                  i = e("../../../../../ducks/send"),
                  l = e("../../../../../hooks/useI18nContext"),
                  c = e("../../../../../contexts/metametrics"),
                  u = e("../../../../../../shared/constants/metametrics");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-amount-row/amount-max-button/amount-max-button.js",
      },
    ],
    [
      4851,
      { "./amount-max-button": 4850 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./amount-max-button")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-amount-row/amount-max-button/index.js",
      },
    ],
    [
      4852,
      { "./send-amount-row.container": 4854 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-amount-row.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-amount-row/index.js",
      },
    ],
    [
      4853,
      {
        "../../../../../shared/constants/transaction": 3964,
        "../../../../components/app/user-preferenced-currency-input": 4311,
        "../../../../components/app/user-preferenced-token-input": 4314,
        "../send-row-wrapper": 4866,
        "./amount-max-button": 4851,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = u(e("prop-types")),
                  o = u(e("../send-row-wrapper")),
                  s = u(
                    e(
                      "../../../../components/app/user-preferenced-currency-input"
                    )
                  ),
                  i = u(
                    e("../../../../components/app/user-preferenced-token-input")
                  ),
                  l = e("../../../../../shared/constants/transaction"),
                  c = u(e("./amount-max-button"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class f extends r.Component {
                  constructor(...e) {
                    super(...e),
                      p(this, "handleChange", (e) => {
                        this.props.updateSendAmount(e);
                      });
                  }
                  renderInput() {
                    const { amount: e, inError: t, asset: n } = this.props;
                    return n.type === l.AssetType.token
                      ? r.default.createElement(i.default, {
                          error: t,
                          onChange: this.handleChange,
                          token: n.details,
                          value: e,
                        })
                      : r.default.createElement(s.default, {
                          error: t,
                          onChange: this.handleChange,
                          hexValue: e,
                        });
                  }
                  render() {
                    const { inError: e, asset: t } = this.props;
                    return t.type === l.AssetType.NFT
                      ? null
                      : r.default.createElement(
                          o.default,
                          {
                            label: `${this.context.t("amount")}:`,
                            showError: e,
                            errorType: "amount",
                          },
                          r.default.createElement(c.default, { inError: e }),
                          this.renderInput()
                        );
                  }
                }
                (n.default = f),
                  p(f, "propTypes", {
                    amount: a.default.string,
                    inError: a.default.bool,
                    asset: a.default.object,
                    updateSendAmount: a.default.func,
                  }),
                  p(f, "contextTypes", { t: a.default.func });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-amount-row/send-amount-row.component.js",
      },
    ],
    [
      4854,
      {
        "../../../../ducks/send": 4635,
        "./send-amount-row.component": 4853,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../../ducks/send"),
                  s =
                    (r = e("./send-amount-row.component")) && r.__esModule
                      ? r
                      : { default: r };
                var i = (0, a.connect)(
                  function (e) {
                    return {
                      amount: (0, o.getSendAmount)(e),
                      inError: (0, o.sendAmountIsInError)(e),
                      asset: (0, o.getSendAsset)(e),
                    };
                  },
                  function (e) {
                    return {
                      updateSendAmount: (t) => e((0, o.updateSendAmount)(t)),
                    };
                  }
                )(s.default);
                n.default = i;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-amount-row/send-amount-row.container.js",
      },
    ],
    [
      4855,
      { "./send-asset-row.container": 4857 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-asset-row.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-asset-row/index.js",
      },
    ],
    [
      4856,
      {
        "../../../../../shared/constants/metametrics": 3953,
        "../../../../../shared/constants/transaction": 3964,
        "../../../../../shared/modules/string-utils": 3991,
        "../../../../components/app/token-list-display": 4266,
        "../../../../components/app/user-preferenced-currency-display": 4309,
        "../../../../components/component-library": 4381,
        "../../../../components/ui/identicon": 4534,
        "../../../../components/ui/token-balance": 4601,
        "../../../../helpers/constants/common": 4639,
        "../../../../helpers/constants/design-system": 4641,
        "../send-row-wrapper": 4866,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = h(e("prop-types")),
                  o = h(e("../send-row-wrapper")),
                  s = h(e("../../../../components/ui/identicon")),
                  i = h(e("../../../../components/ui/token-balance")),
                  l = h(e("../../../../components/app/token-list-display")),
                  c = h(
                    e(
                      "../../../../components/app/user-preferenced-currency-display"
                    )
                  ),
                  u = e("../../../../helpers/constants/common"),
                  d = e("../../../../../shared/modules/string-utils"),
                  p = e("../../../../../shared/constants/metametrics"),
                  f = e("../../../../../shared/constants/transaction"),
                  m = e("../../../../components/component-library"),
                  g = e("../../../../helpers/constants/design-system");
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function y(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class b extends r.Component {
                  constructor(...e) {
                    super(...e),
                      y(this, "state", {
                        isShowingDropdown: !1,
                        sendableTokens: [],
                        sendableNfts: [],
                      }),
                      y(this, "openDropdown", () =>
                        this.setState({ isShowingDropdown: !0 })
                      ),
                      y(this, "closeDropdown", () =>
                        this.setState({ isShowingDropdown: !1 })
                      ),
                      y(this, "getAssetSelected", (e, t) => {
                        switch (e) {
                          case f.AssetType.native:
                            return this.props.nativeCurrency;
                          case f.AssetType.token:
                            return f.TokenStandard.ERC20;
                          case f.AssetType.NFT:
                            return null == t ? void 0 : t.standard;
                          default:
                            return null;
                        }
                      }),
                      y(this, "selectToken", (e, t) => {
                        this.setState({ isShowingDropdown: !1 }, () => {
                          this.context.trackEvent({
                            category: p.MetaMetricsEventCategory.Transactions,
                            event: 'User clicks "Assets" dropdown',
                            properties: {
                              action: "Send Screen",
                              legacy_event: !0,
                              assetSelected: this.getAssetSelected(e, t),
                            },
                          }),
                            this.props.updateSendAsset({
                              type: e,
                              details: e === f.AssetType.native ? null : t,
                            });
                        });
                      });
                  }
                  async componentDidMount() {
                    const e = this.props.tokens.filter((e) => !e.isERC721),
                      t = this.props.nfts.filter(
                        (e) =>
                          e.isCurrentlyOwned &&
                          e.standard === f.TokenStandard.ERC721
                      );
                    this.setState({ sendableTokens: e, sendableNfts: t });
                  }
                  render() {
                    const { t: e } = this.context;
                    return r.default.createElement(
                      o.default,
                      { label: `${e("asset")}:` },
                      r.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown" },
                        r.default.createElement(
                          "div",
                          {
                            className: "send-v2__asset-dropdown__input-wrapper",
                            onClick: this.openDropdown,
                          },
                          this.renderSendAsset()
                        ),
                        [
                          ...this.state.sendableTokens,
                          ...this.state.sendableNfts,
                        ].length > 0
                          ? this.renderAssetDropdown()
                          : null
                      )
                    );
                  }
                  renderSendAsset() {
                    const {
                      sendAsset: { details: e, type: t },
                      tokens: n,
                      nfts: r,
                    } = this.props;
                    if (t === f.AssetType.token) {
                      const t = n.find(({ address: t }) =>
                        (0, d.isEqualCaseInsensitive)(t, e.address)
                      );
                      return t ? this.renderToken(t) : this.renderToken(e);
                    }
                    if (t === f.AssetType.NFT) {
                      const t = r.find(
                        ({ address: t, tokenId: n }) =>
                          (0, d.isEqualCaseInsensitive)(t, e.address) &&
                          n === e.tokenId
                      );
                      if (t || e) return this.renderNft(t ?? e);
                    }
                    return this.renderNativeCurrency();
                  }
                  renderAssetDropdown() {
                    return (
                      this.state.isShowingDropdown &&
                      r.default.createElement(
                        "div",
                        null,
                        r.default.createElement("div", {
                          className: "send-v2__asset-dropdown__close-area",
                          onClick: this.closeDropdown,
                        }),
                        r.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__list" },
                          this.renderNativeCurrency(!0),
                          r.default.createElement(l.default, {
                            clickHandler: (e) =>
                              this.selectToken(f.AssetType.token, e),
                          }),
                          this.state.sendableNfts.map((e) =>
                            this.renderNft(e, !0)
                          )
                        )
                      )
                    );
                  }
                  renderNativeCurrency(e = !1) {
                    var t;
                    const { t: n } = this.context,
                      {
                        accounts: a,
                        selectedAddress: o,
                        nativeCurrency: i,
                        nativeCurrencyImage: l,
                        sendAsset: d,
                      } = this.props,
                      { sendableTokens: p, sendableNfts: m } = this.state,
                      g = a[o] ? a[o].balance : "",
                      h = [...p, ...m];
                    return r.default.createElement(
                      "div",
                      {
                        className:
                          h.length > 0
                            ? "send-v2__asset-dropdown__asset"
                            : "send-v2__asset-dropdown__single-asset",
                        onClick: () => this.selectToken(f.AssetType.native),
                      },
                      r.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        (null == d ? void 0 : d.type) === f.AssetType.NFT &&
                          null != d &&
                          null !== (t = d.details) &&
                          void 0 !== t &&
                          t.image
                          ? r.default.createElement("img", {
                              width: 36,
                              src: d.details.image,
                            })
                          : r.default.createElement(s.default, {
                              diameter: 36,
                              image: l,
                              address: i,
                            })
                      ),
                      r.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        r.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__symbol" },
                          i
                        ),
                        r.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__name" },
                          r.default.createElement(
                            "span",
                            {
                              className: "send-v2__asset-dropdown__name__label",
                            },
                            `${n("balance")}:`
                          ),
                          r.default.createElement(c.default, {
                            value: g,
                            type: u.PRIMARY,
                          })
                        )
                      ),
                      !e &&
                        h.length > 0 &&
                        r.default.createElement("i", {
                          className:
                            "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret",
                        })
                    );
                  }
                  renderToken(e, t = !1) {
                    const { address: n, symbol: a, image: o } = e,
                      { t: l } = this.context;
                    return r.default.createElement(
                      "div",
                      {
                        key: n,
                        className: "send-v2__asset-dropdown__asset",
                        onClick: () => this.selectToken(f.AssetType.token, e),
                      },
                      r.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        r.default.createElement(s.default, {
                          address: n,
                          diameter: 36,
                          image: o,
                        })
                      ),
                      r.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        r.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__symbol" },
                          a
                        ),
                        r.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__name" },
                          r.default.createElement(
                            "span",
                            {
                              className: "send-v2__asset-dropdown__name__label",
                            },
                            `${l("balance")}:`
                          ),
                          r.default.createElement(i.default, { token: e })
                        )
                      ),
                      !t &&
                        r.default.createElement("i", {
                          className:
                            "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret",
                        })
                    );
                  }
                  renderNft(e, t = !1) {
                    const { address: n, name: a, image: o, tokenId: i } = e,
                      { t: l } = this.context,
                      c = this.props.collections.find((e) => e.address === n),
                      u = (null == c ? void 0 : c.name) || a;
                    return r.default.createElement(
                      "div",
                      {
                        key: n,
                        className: "send-v2__asset-dropdown__asset",
                        onClick: () => this.selectToken(f.AssetType.NFT, e),
                      },
                      r.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        r.default.createElement(s.default, {
                          address: n,
                          diameter: 36,
                          image: o,
                        })
                      ),
                      r.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        r.default.createElement(
                          "div",
                          {
                            className: "send-v2__asset-dropdown__symbol",
                            title: u,
                          },
                          u
                        ),
                        r.default.createElement(
                          m.Text,
                          {
                            variant: g.TextVariant.bodyXs,
                            ellipsis: !0,
                            title: i,
                          },
                          `${l("tokenId")}: ${i}`
                        )
                      ),
                      !t &&
                        r.default.createElement("i", {
                          className:
                            "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret",
                        })
                    );
                  }
                }
                (n.default = b),
                  y(b, "propTypes", {
                    tokens: a.default.arrayOf(
                      a.default.shape({
                        address: a.default.string,
                        decimals: a.default.oneOfType([
                          a.default.string,
                          a.default.number,
                        ]),
                        symbol: a.default.string,
                        image: a.default.string,
                      })
                    ).isRequired,
                    accounts: a.default.object.isRequired,
                    selectedAddress: a.default.string.isRequired,
                    sendAsset: a.default.object,
                    updateSendAsset: a.default.func.isRequired,
                    nativeCurrency: a.default.string,
                    nativeCurrencyImage: a.default.string,
                    nfts: a.default.arrayOf(
                      a.default.shape({
                        address: a.default.string.isRequired,
                        tokenId: a.default.string.isRequired,
                        name: a.default.string,
                        description: a.default.string,
                        image: a.default.string,
                        standard: a.default.string,
                        imageThumbnail: a.default.string,
                        imagePreview: a.default.string,
                        creator: a.default.shape({
                          address: a.default.string,
                          config: a.default.string,
                          profile_img_url: a.default.string,
                        }),
                      })
                    ),
                    collections: a.default.arrayOf(
                      a.default.shape({
                        address: a.default.string.isRequired,
                        name: a.default.string,
                      })
                    ),
                  }),
                  y(b, "contextTypes", {
                    t: a.default.func,
                    trackEvent: a.default.func,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-asset-row/send-asset-row.component.js",
      },
    ],
    [
      4857,
      {
        "../../../../ducks/metamask/metamask": 4633,
        "../../../../ducks/send": 4635,
        "../../../../selectors": 5013,
        "./send-asset-row.component": 4856,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../../ducks/metamask/metamask"),
                  s = e("../../../../selectors"),
                  i = e("../../../../ducks/send"),
                  l =
                    (r = e("./send-asset-row.component")) && r.__esModule
                      ? r
                      : { default: r };
                var c = (0, a.connect)(
                  function (e) {
                    return {
                      tokens: e.metamask.tokens,
                      selectedAddress: e.metamask.selectedAddress,
                      nfts: (0, o.getNfts)(e),
                      collections: (0, o.getNftContracts)(e),
                      sendAsset: (0, i.getSendAsset)(e),
                      accounts: (0, s.getMetaMaskAccounts)(e),
                      nativeCurrency: (0, o.getNativeCurrency)(e),
                      nativeCurrencyImage: (0, s.getNativeCurrencyImage)(e),
                    };
                  },
                  function (e) {
                    return {
                      updateSendAsset: ({ type: t, details: n }) =>
                        e((0, i.updateSendAsset)({ type: t, details: n })),
                    };
                  }
                )(l.default);
                n.default = c;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-asset-row/send-asset-row.container.js",
      },
    ],
    [
      4858,
      {
        "../../../../shared/constants/transaction": 3964,
        "../../../components/ui/actionable-message": 4471,
        "../../../components/ui/dialog": 4496,
        "../../../components/ui/page-container/page-container-content.component": 4565,
        "../../../helpers/constants/common": 4639,
        "../../../helpers/constants/error-keys": 4642,
        "../gas-display": 4841,
        "./send-amount-row": 4852,
        "./send-asset-row": 4855,
        "./send-gas-row": 4860,
        "./send-hex-data-row": 4863,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = h(e("prop-types")),
                  o = h(
                    e(
                      "../../../components/ui/page-container/page-container-content.component"
                    )
                  ),
                  s = h(e("../../../components/ui/dialog")),
                  i = h(e("../../../components/ui/actionable-message")),
                  l = e("../../../helpers/constants/error-keys"),
                  c = e("../../../../shared/constants/transaction"),
                  u = e("../../../helpers/constants/common"),
                  d = h(e("../gas-display")),
                  p = h(e("./send-amount-row")),
                  f = h(e("./send-hex-data-row")),
                  m = h(e("./send-asset-row")),
                  g = h(e("./send-gas-row"));
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function y(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class b extends r.Component {
                  render() {
                    const {
                      warning: e,
                      error: t,
                      gasIsExcessive: n,
                      isEthGasPrice: a,
                      noGasPrice: s,
                      networkOrAccountNotSupports1559: i,
                      asset: u,
                      assetError: h,
                      recipient: E,
                      recipientWarningAcknowledged: y,
                      isMultiLayerFeeNetwork: b,
                    } = this.props;
                    let v;
                    n
                      ? (v = l.GAS_PRICE_EXCESSIVE_ERROR_KEY)
                      : s && (v = l.GAS_PRICE_FETCH_FAILURE_ERROR_KEY);
                    const k =
                        this.props.showHexData &&
                        u.type !== c.AssetType.token &&
                        u.type !== c.AssetType.NFT,
                      w = "knownAddressRecipient" === E.warning;
                    return r.default.createElement(
                      o.default,
                      null,
                      r.default.createElement(
                        "div",
                        { className: "send-v2__form" },
                        h ? this.renderError(h) : null,
                        a
                          ? this.renderWarning(
                              l.ETH_GAS_PRICE_FETCH_WARNING_KEY
                            )
                          : null,
                        t ? this.renderError(t) : null,
                        e ? this.renderWarning() : null,
                        w && !y ? this.renderRecipientWarning() : null,
                        r.default.createElement(m.default, null),
                        r.default.createElement(p.default, null),
                        i ? r.default.createElement(g.default, null) : null,
                        k ? r.default.createElement(f.default, null) : null,
                        !b &&
                          r.default.createElement(d.default, { gasError: v })
                      )
                    );
                  }
                  renderWarning(e = "") {
                    const { t: t } = this.context,
                      { warning: n } = this.props;
                    return r.default.createElement(
                      s.default,
                      { type: "warning", className: "send__error-dialog" },
                      t("" === e ? n : e)
                    );
                  }
                  renderRecipientWarning() {
                    const { acknowledgeRecipientWarning: e } = this.props,
                      { t: t } = this.context;
                    return r.default.createElement(
                      "div",
                      {
                        className: "send__warning-container",
                        "data-testid": "send-warning",
                      },
                      r.default.createElement(i.default, {
                        type: "danger",
                        useIcon: !0,
                        iconFillColor: "var(--color-error-default)",
                        primaryActionV2: {
                          label: t("tooltipApproveButton"),
                          onClick: e,
                        },
                        message: t("sendingToTokenContractWarning", [
                          r.default.createElement(
                            "a",
                            {
                              key: "contractWarningSupport",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "send__warning-container__link",
                              href: u.CONTRACT_ADDRESS_LINK,
                            },
                            t("learnMoreUpperCase")
                          ),
                        ]),
                        roundedButtons: !0,
                      })
                    );
                  }
                  renderError(e) {
                    const { t: t } = this.context;
                    return r.default.createElement(
                      s.default,
                      { type: "error", className: "send__error-dialog" },
                      t(e)
                    );
                  }
                }
                (n.default = b),
                  y(b, "contextTypes", { t: a.default.func }),
                  y(b, "propTypes", {
                    showHexData: a.default.bool,
                    warning: a.default.string,
                    error: a.default.string,
                    gasIsExcessive: a.default.bool.isRequired,
                    isEthGasPrice: a.default.bool,
                    noGasPrice: a.default.bool,
                    networkOrAccountNotSupports1559: a.default.bool,
                    asset: a.default.object,
                    assetError: a.default.string,
                    recipient: a.default.object,
                    acknowledgeRecipientWarning: a.default.func,
                    recipientWarningAcknowledged: a.default.bool,
                    isMultiLayerFeeNetwork: a.default.bool,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-content.component.js",
      },
    ],
    [
      4859,
      {
        "../../../ducks/send": 4635,
        "../../../selectors": 5013,
        "./send-content.component": 4858,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../selectors"),
                  s = e("../../../ducks/send"),
                  i =
                    (r = e("./send-content.component")) && r.__esModule
                      ? r
                      : { default: r };
                var l = (0, a.connect)(
                  function (e) {
                    const t = (0, s.getRecipient)(e),
                      n = (0, s.getRecipientWarningAcknowledgement)(e);
                    return {
                      isEthGasPrice: (0, o.getIsEthGasPriceFetched)(e),
                      noGasPrice: (0, o.getNoGasPriceFetched)(e),
                      networkOrAccountNotSupports1559: (0,
                      o.checkNetworkOrAccountNotSupports1559)(e),
                      getIsBalanceInsufficient: (0, s.getIsBalanceInsufficient)(
                        e
                      ),
                      asset: (0, s.getSendAsset)(e),
                      assetError: (0, s.getAssetError)(e),
                      recipient: t,
                      recipientWarningAcknowledged: n,
                      isMultiLayerFeeNetwork: (0, o.getIsMultiLayerFeeNetwork)(
                        e
                      ),
                    };
                  },
                  function (e) {
                    return {
                      acknowledgeRecipientWarning: () =>
                        e((0, s.acknowledgeRecipientWarning)()),
                    };
                  }
                )(i.default);
                n.default = l;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-content.container.js",
      },
    ],
    [
      4860,
      { "./send-gas-row.container": 4862 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-gas-row.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-gas-row/index.js",
      },
    ],
    [
      4861,
      {
        "../../../../components/app/advanced-gas-inputs": 4020,
        "../../../../ducks/send": 4635,
        "../send-row-wrapper": 4866,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("../send-row-wrapper")),
                  s = l(e("../../../../components/app/advanced-gas-inputs")),
                  i = e("../../../../ducks/send");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class d extends r.Component {
                  render() {
                    const {
                      updateGasPrice: e,
                      updateGasLimit: t,
                      gasPrice: n,
                      gasLimit: a,
                      insufficientBalance: l,
                      minimumGasLimit: c,
                      gasInputMode: u,
                    } = this.props;
                    return u !== i.GAS_INPUT_MODES.INLINE
                      ? null
                      : r.default.createElement(
                          o.default,
                          null,
                          r.default.createElement(s.default, {
                            updateCustomGasPrice: e,
                            updateCustomGasLimit: t,
                            customGasPrice: n,
                            customGasLimit: a,
                            insufficientBalance: l,
                            minimumGasLimit: c,
                            customPriceIsSafe: !0,
                            isSpeedUp: !1,
                          })
                        );
                  }
                }
                (n.default = d),
                  u(d, "propTypes", {
                    updateGasPrice: a.default.func,
                    updateGasLimit: a.default.func,
                    gasInputMode: a.default.oneOf(
                      Object.values(i.GAS_INPUT_MODES)
                    ),
                    gasPrice: a.default.string,
                    gasLimit: a.default.string,
                    insufficientBalance: a.default.bool,
                    minimumGasLimit: a.default.string,
                  }),
                  u(d, "contextTypes", {
                    t: a.default.func,
                    trackEvent: a.default.func,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-gas-row/send-gas-row.component.js",
      },
    ],
    [
      4862,
      {
        "../../../../../shared/modules/conversion.utils": 3978,
        "../../../../ducks/gas/gas.duck": 4629,
        "../../../../ducks/send": 4635,
        "./send-gas-row.component": 4861,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../../ducks/send"),
                  s = e("../../../../ducks/gas/gas.duck"),
                  i = e("../../../../../shared/modules/conversion.utils"),
                  l =
                    (r = e("./send-gas-row.component")) && r.__esModule
                      ? r
                      : { default: r };
                var c = (0, a.connect)(
                  function (e) {
                    const t = (0, o.getGasPrice)(e),
                      n = (0, o.getGasLimit)(e),
                      r = (0, o.getMinimumGasLimitForSend)(e);
                    return {
                      minimumGasLimit: (0, i.hexToDecimal)(r),
                      gasFeeError: (0, o.gasFeeIsInError)(e),
                      gasLoadingError: (0, o.isSendStateInitialized)(e),
                      gasInputMode: (0, o.getGasInputMode)(e),
                      gasPrice: t,
                      gasLimit: n,
                      insufficientBalance: (0, o.getIsBalanceInsufficient)(e),
                    };
                  },
                  function (e) {
                    return {
                      updateGasPrice: (t) => {
                        e((0, o.updateGasPrice)(t)),
                          e((0, s.setCustomGasPrice)(t));
                      },
                      updateGasLimit: (t) => {
                        e((0, o.updateGasLimit)(t)),
                          e((0, s.setCustomGasLimit)(t));
                      },
                    };
                  }
                )(l.default);
                n.default = c;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-gas-row/send-gas-row.container.js",
      },
    ],
    [
      4863,
      { "./send-hex-data-row.container": 4865 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-hex-data-row.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-hex-data-row/index.js",
      },
    ],
    [
      4864,
      { "../send-row-wrapper": 4866, "prop-types": 3555, react: 3730 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = s(e("prop-types")),
                  o = s(e("../send-row-wrapper"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class c extends r.Component {
                  constructor(...e) {
                    super(...e),
                      l(this, "onInput", (e) => {
                        const { updateSendHexData: t } = this.props;
                        t(e.target.value.replace(/\n/gu, "") || null);
                      });
                  }
                  render() {
                    const { inError: e, data: t } = this.props,
                      { t: n } = this.context;
                    return r.default.createElement(
                      o.default,
                      {
                        label: `${n("hexData")}:`,
                        showError: e,
                        errorType: "amount",
                      },
                      r.default.createElement("textarea", {
                        onInput: this.onInput,
                        placeholder: n("optional"),
                        className: "send-v2__hex-data__input",
                        defaultValue: t || "",
                      })
                    );
                  }
                }
                (n.default = c),
                  l(c, "propTypes", {
                    inError: a.default.bool,
                    data: a.default.string,
                    updateSendHexData: a.default.func.isRequired,
                  }),
                  l(c, "contextTypes", { t: a.default.func });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-hex-data-row/send-hex-data-row.component.js",
      },
    ],
    [
      4865,
      {
        "../../../../ducks/send": 4635,
        "./send-hex-data-row.component": 4864,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../../ducks/send"),
                  s =
                    (r = e("./send-hex-data-row.component")) && r.__esModule
                      ? r
                      : { default: r };
                var i = (0, a.connect)(
                  function (e) {
                    return { data: (0, o.getSendHexData)(e) };
                  },
                  function (e) {
                    return {
                      updateSendHexData: (t) => e((0, o.updateSendHexData)(t)),
                    };
                  }
                )(s.default);
                n.default = i;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-hex-data-row/send-hex-data-row.container.js",
      },
    ],
    [
      4866,
      { "./send-row-wrapper.component": 4870 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-row-wrapper.component")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-row-wrapper/index.js",
      },
    ],
    [
      4867,
      { "./send-row-error-message.container": 4869 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-row-error-message.container")) &&
                    r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/index.js",
      },
    ],
    [
      4868,
      { classnames: 2227, "prop-types": 3555, react: 3730 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = s(e("prop-types")),
                  o = s(e("classnames"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class c extends r.Component {
                  render() {
                    const { errors: e, errorType: t } = this.props,
                      n = e[t];
                    return n
                      ? r.default.createElement(
                          "div",
                          {
                            className: (0, o.default)("send-v2__error", {
                              "send-v2__error-amount": "amount" === t,
                            }),
                          },
                          this.context.t(n)
                        )
                      : null;
                  }
                }
                (n.default = c),
                  l(c, "propTypes", {
                    errors: a.default.object,
                    errorType: a.default.string,
                  }),
                  l(c, "contextTypes", { t: a.default.func });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/send-row-error-message.component.js",
      },
    ],
    [
      4869,
      {
        "../../../../../ducks/send": 4635,
        "./send-row-error-message.component": 4868,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../../../ducks/send"),
                  s =
                    (r = e("./send-row-error-message.component")) &&
                    r.__esModule
                      ? r
                      : { default: r };
                var i = (0, a.connect)(function (e, t) {
                  return {
                    errors: (0, o.getSendErrors)(e),
                    errorType: t.errorType,
                  };
                })(s.default);
                n.default = i;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/send-row-error-message.container.js",
      },
    ],
    [
      4870,
      { "./send-row-error-message": 4867, "prop-types": 3555, react: 3730 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = s(e("prop-types")),
                  o = s(e("./send-row-error-message"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class c extends r.Component {
                  renderAmountFormRow() {
                    const {
                        children: e,
                        errorType: t = "",
                        label: n,
                        showError: a = !1,
                      } = this.props,
                      s = Array.isArray(e) ? e[1] || e[0] : e,
                      i = e.length > 1 ? e[0] : null;
                    return r.default.createElement(
                      "div",
                      { className: "send-v2__form-row" },
                      r.default.createElement(
                        "div",
                        { className: "send-v2__form-label" },
                        n,
                        i
                      ),
                      r.default.createElement(
                        "div",
                        { className: "send-v2__form-field-container" },
                        r.default.createElement(
                          "div",
                          { className: "send-v2__form-field" },
                          s
                        ),
                        r.default.createElement(
                          "div",
                          null,
                          a
                            ? r.default.createElement(o.default, {
                                errorType: t,
                              })
                            : null
                        )
                      )
                    );
                  }
                  renderFormRow() {
                    const {
                        children: e,
                        errorType: t = "",
                        label: n,
                        showError: a = !1,
                      } = this.props,
                      s = Array.isArray(e) ? e[1] || e[0] : e,
                      i = (Array.isArray(e) && e.length) > 1 ? e[0] : null;
                    return r.default.createElement(
                      "div",
                      { className: "send-v2__form-row" },
                      r.default.createElement(
                        "div",
                        { className: "send-v2__form-label" },
                        n,
                        a
                          ? r.default.createElement(o.default, { errorType: t })
                          : null,
                        i
                      ),
                      r.default.createElement(
                        "div",
                        { className: "send-v2__form-field" },
                        s
                      )
                    );
                  }
                  render() {
                    const { errorType: e = "" } = this.props;
                    return "amount" === e
                      ? this.renderAmountFormRow()
                      : this.renderFormRow();
                  }
                }
                (n.default = c),
                  l(c, "propTypes", {
                    children: a.default.node,
                    errorType: a.default.string,
                    label: a.default.string,
                    showError: a.default.bool,
                  }),
                  l(c, "contextTypes", { t: a.default.func });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-content/send-row-wrapper/send-row-wrapper.component.js",
      },
    ],
    [
      4871,
      { "./send-footer.container": 4873 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-footer.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-footer/index.js" },
    ],
    [
      4872,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/ui/page-container/page-container-footer": 4566,
        "../../../ducks/send": 4635,
        "../../../helpers/constants/routes": 4645,
        "../send.constants": 4876,
        lodash: 3442,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = e("lodash"),
                  s = d(
                    e(
                      "../../../components/ui/page-container/page-container-footer"
                    )
                  ),
                  i = e("../../../helpers/constants/routes"),
                  l = e("../../../../shared/constants/metametrics"),
                  c = e("../../../ducks/send"),
                  u = e("../send.constants");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class m extends r.Component {
                  onCancel() {
                    const {
                      cancelTx: e,
                      draftTransactionID: t,
                      history: n,
                      mostRecentOverviewPage: r,
                      resetSendState: a,
                      sendStage: o,
                    } = this.props;
                    t && e({ id: t }), a();
                    const s = o === c.SEND_STAGES.EDIT ? i.DEFAULT_ROUTE : r;
                    n.push(s);
                  }
                  async onSubmit(e) {
                    e.preventDefault();
                    const { sign: t, history: n } = this.props,
                      { trackEvent: r } = this.context,
                      a = t();
                    Promise.resolve(a).then(() => {
                      r({
                        category: l.MetaMetricsEventCategory.Transactions,
                        event: "Complete",
                        properties: { action: "Edit Screen", legacy_event: !0 },
                      }),
                        n.push(i.CONFIRM_TRANSACTION_ROUTE);
                    });
                  }
                  componentDidUpdate(e) {
                    const { sendErrors: t } = this.props,
                      { trackEvent: n } = this.context;
                    if (
                      Object.keys(t).length > 0 &&
                      !1 === (0, o.isEqual)(t, e.sendErrors)
                    ) {
                      const e = Object.keys(t).find((e) => t[e]),
                        r = t[e];
                      n({
                        category: l.MetaMetricsEventCategory.Transactions,
                        event: "Error",
                        properties: {
                          action: "Edit Screen",
                          legacy_event: !0,
                          errorField: e,
                          errorMessage: r,
                        },
                      });
                    }
                  }
                  render() {
                    const { t: e } = this.context,
                      { sendStage: t, sendErrors: n } = this.props;
                    return r.default.createElement(s.default, {
                      onCancel: () => this.onCancel(),
                      onSubmit: (e) => this.onSubmit(e),
                      disabled:
                        this.props.disabled &&
                        n.gasFee !== u.INSUFFICIENT_FUNDS_ERROR,
                      cancelText:
                        t === c.SEND_STAGES.EDIT ? e("reject") : e("cancel"),
                    });
                  }
                }
                (n.default = m),
                  f(m, "propTypes", {
                    resetSendState: a.default.func,
                    disabled: a.default.bool.isRequired,
                    history: a.default.object,
                    sign: a.default.func,
                    sendStage: a.default.string,
                    sendErrors: a.default.object,
                    mostRecentOverviewPage: a.default.string.isRequired,
                    cancelTx: a.default.func,
                    draftTransactionID: a.default.string,
                  }),
                  f(m, "contextTypes", {
                    t: a.default.func,
                    trackEvent: a.default.func,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-footer/send-footer.component.js",
      },
    ],
    [
      4873,
      {
        "../../../ducks/history/history": 4630,
        "../../../ducks/metamask/metamask": 4633,
        "../../../ducks/send": 4635,
        "../../../store/actions": 5020,
        "./send-footer.component": 4872,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../store/actions"),
                  s = e("../../../ducks/send"),
                  i = e("../../../ducks/history/history"),
                  l = e("../../../ducks/metamask/metamask"),
                  c =
                    (r = e("./send-footer.component")) && r.__esModule
                      ? r
                      : { default: r };
                var u = (0, a.connect)(
                  function (e) {
                    return {
                      disabled: (0, s.isSendFormInvalid)(e),
                      to: (0, s.getSendTo)(e),
                      toAccounts: (0, l.getSendToAccounts)(e),
                      sendStage: (0, s.getSendStage)(e),
                      sendErrors: (0, s.getSendErrors)(e),
                      draftTransactionID: (0, s.getDraftTransactionID)(e),
                      mostRecentOverviewPage: (0, i.getMostRecentOverviewPage)(
                        e
                      ),
                    };
                  },
                  function (e) {
                    return {
                      resetSendState: () => e((0, s.resetSendState)()),
                      cancelTx: (t) => e((0, o.cancelTx)(t)),
                      sign: () => e((0, s.signTransaction)()),
                    };
                  }
                )(c.default);
                n.default = u;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-footer/send-footer.container.js",
      },
    ],
    [
      4874,
      { "./send-header.component": 4875 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./send-header.component")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-header/index.js" },
    ],
    [
      4875,
      {
        "../../../../shared/constants/transaction": 3964,
        "../../../components/ui/page-container/page-container-header": 4568,
        "../../../ducks/history/history": 4630,
        "../../../ducks/send": 4635,
        "../../../hooks/useI18nContext": 4701,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, a.useHistory)(),
                      t = (0, o.useSelector)(i.getMostRecentOverviewPage),
                      n = (0, o.useDispatch)(),
                      d = (0, o.useSelector)(c.getSendStage),
                      p = (0, o.useSelector)(c.getSendAsset),
                      f = (0, l.useI18nContext)(),
                      m = (0, o.useSelector)(c.getDraftTransactionExists);
                    let g =
                      (null == p ? void 0 : p.type) === u.AssetType.native
                        ? f("send")
                        : f("sendTokens");
                    !1 === m ||
                    [
                      c.SEND_STAGES.ADD_RECIPIENT,
                      c.SEND_STAGES.INACTIVE,
                    ].includes(d)
                      ? (g = f("sendTo"))
                      : d === c.SEND_STAGES.EDIT && (g = f("edit"));
                    return r.default.createElement(s.default, {
                      className: "send__header",
                      onClose: () => {
                        n((0, c.resetSendState)()), e.push(t);
                      },
                      title: g,
                      headerCloseText:
                        d === c.SEND_STAGES.EDIT
                          ? f("cancelEdit")
                          : f("cancel"),
                      hideClose: d === c.SEND_STAGES.DRAFT,
                    });
                  });
                var r = d(e("react")),
                  a = e("react-router-dom"),
                  o = e("react-redux"),
                  s = d(
                    e(
                      "../../../components/ui/page-container/page-container-header"
                    )
                  ),
                  i = e("../../../ducks/history/history"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../ducks/send"),
                  u = e("../../../../shared/constants/transaction");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/send/send-header/send-header.component.js",
      },
    ],
    [
      4876,
      {
        "../../../shared/constants/common": 3948,
        "../../../shared/constants/gas": 3949,
        "../../../shared/modules/Numeric": 3974,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.TOKEN_TRANSFER_FUNCTION_SIGNATURE =
                    n.REQUIRED_ERROR =
                    n.RECIPIENT_TYPES =
                    n.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE =
                    n.NEGATIVE_ETH_ERROR =
                    n.MIN_GAS_TOTAL =
                    n.MIN_GAS_PRICE_HEX =
                    n.MIN_GAS_PRICE_GWEI =
                    n.MIN_GAS_PRICE_DEC =
                    n.MIN_GAS_LIMIT_DEC =
                    n.MAX_GAS_LIMIT_DEC =
                    n.KNOWN_RECIPIENT_ADDRESS_WARNING =
                    n.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR =
                    n.INVALID_RECIPIENT_ADDRESS_ERROR =
                    n.INSUFFICIENT_TOKENS_ERROR =
                    n.INSUFFICIENT_FUNDS_FOR_GAS_ERROR =
                    n.INSUFFICIENT_FUNDS_ERROR =
                    n.HIGH_FEE_WARNING_MULTIPLIER =
                    n.ENS_UNKNOWN_ERROR =
                    n.ENS_REGISTRATION_ERROR =
                    n.ENS_NO_ADDRESS_FOR_NAME =
                    n.ENS_NOT_SUPPORTED_ON_NETWORK =
                    n.ENS_NOT_FOUND_ON_NETWORK =
                    n.ENS_ILLEGAL_CHARACTER =
                    n.CONTRACT_ADDRESS_ERROR =
                    n.CONFUSING_ENS_ERROR =
                      void 0);
                var r = e("../../../shared/constants/gas"),
                  a = e("../../../shared/modules/Numeric"),
                  o = e("../../../shared/constants/common");
                n.MIN_GAS_PRICE_DEC = "0";
                const s = parseInt("0", 10).toString(16);
                n.MIN_GAS_PRICE_HEX = s;
                const i = new a.Numeric("21000", 10);
                n.MIN_GAS_LIMIT_DEC = i;
                n.MAX_GAS_LIMIT_DEC = "7920027";
                n.HIGH_FEE_WARNING_MULTIPLIER = 1.5;
                const l = new a.Numeric(s, 16, o.EtherDenomination.WEI)
                  .toDenomination(o.EtherDenomination.GWEI)
                  .round(1)
                  .toPrefixedHexString();
                n.MIN_GAS_PRICE_GWEI = l;
                const c = new a.Numeric(r.MIN_GAS_LIMIT_HEX, 16)
                  .times(new a.Numeric(s, 16, o.EtherDenomination.WEI))
                  .toPrefixedHexString();
                n.MIN_GAS_TOTAL = c;
                n.TOKEN_TRANSFER_FUNCTION_SIGNATURE = "0xa9059cbb";
                n.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE = "0x23b872dd";
                n.INSUFFICIENT_FUNDS_ERROR = "insufficientFunds";
                n.INSUFFICIENT_FUNDS_FOR_GAS_ERROR = "insufficientFundsForGas";
                n.INSUFFICIENT_TOKENS_ERROR = "insufficientTokens";
                n.NEGATIVE_ETH_ERROR = "negativeETH";
                n.INVALID_RECIPIENT_ADDRESS_ERROR = "invalidAddressRecipient";
                n.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR =
                  "invalidAddressRecipientNotEthNetwork";
                n.REQUIRED_ERROR = "required";
                n.KNOWN_RECIPIENT_ADDRESS_WARNING = "knownAddressRecipient";
                n.CONTRACT_ADDRESS_ERROR = "contractAddressError";
                n.CONFUSING_ENS_ERROR = "confusingEnsDomain";
                n.ENS_NO_ADDRESS_FOR_NAME = "noAddressForName";
                n.ENS_NOT_FOUND_ON_NETWORK = "ensNotFoundOnCurrentNetwork";
                n.ENS_NOT_SUPPORTED_ON_NETWORK = "ensNotSupportedOnNetwork";
                n.ENS_ILLEGAL_CHARACTER = "ensIllegalCharacter";
                n.ENS_UNKNOWN_ERROR = "ensUnknownError";
                n.ENS_REGISTRATION_ERROR = "ensRegistrationError";
                n.RECIPIENT_TYPES = {
                  SMART_CONTRACT: "SMART_CONTRACT",
                  NON_CONTRACT: "NON_CONTRACT",
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send.constants.js" },
    ],
    [
      4877,
      {
        "../../../shared/constants/metametrics": 3953,
        "../../../shared/constants/transaction": 3964,
        "../../contexts/metametrics": 4619,
        "../../ducks/metamask/metamask": 4633,
        "../../ducks/send": 4635,
        "../../selectors": 5013,
        "../../store/actions": 5020,
        "./send-content": 4849,
        "./send-content/add-recipient": 4848,
        "./send-content/add-recipient/domain-input": 4847,
        "./send-footer": 4871,
        "./send-header": 4874,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, o.useHistory)(),
                      t = (0, r.useRef)(!1),
                      n = (0, a.useSelector)(s.getSendStage),
                      i = (0, a.useSelector)(v),
                      y = (0, a.useSelector)(
                        s.getIsUsingMyAccountForRecipientSearch
                      ),
                      b = (0, a.useSelector)(s.getRecipient),
                      k = (0, a.useSelector)(l.getSendHexDataFeatureFlagState),
                      w = (0, a.useSelector)(s.getRecipientUserInput),
                      T = (0, a.useSelector)(s.getDraftTransactionExists),
                      A = (0, o.useLocation)(),
                      O = (0, r.useContext)(u.MetaMetricsContext),
                      C = (0, a.useDispatch)(),
                      N = (0, r.useCallback)(() => {
                        C((0, s.resetSendState)());
                      }, [C]);
                    let P;
                    (0, r.useEffect)(() => {
                      !1 === T &&
                        !1 === t.current &&
                        ((t.current = !0),
                        C(
                          (0, s.startNewDraftTransaction)({
                            type: p.AssetType.native,
                          })
                        ));
                    }, [T, C]),
                      (0, r.useEffect)(() => {
                        window.addEventListener("beforeunload", N);
                      }, [N]),
                      (0, r.useEffect)(() => {
                        if ("?scan=true" === A.search) {
                          C((0, c.showQrScanner)());
                          const e = window.location.href.split("?")[0];
                          window.history.pushState({}, null, `${e}`),
                            (window.location.hash = "#send");
                        }
                      }, [A, C]),
                      (0, r.useEffect)(
                        () => () => {
                          C((0, s.resetSendState)()),
                            window.removeEventListener("beforeunload", N);
                        },
                        [C, N]
                      ),
                      (P =
                        T &&
                        [s.SEND_STAGES.EDIT, s.SEND_STAGES.DRAFT].includes(n)
                          ? r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement(g.default, {
                                showHexData: k,
                                gasIsExcessive: i,
                              }),
                              r.default.createElement(h.default, {
                                key: "send-footer",
                                history: e,
                              })
                            )
                          : r.default.createElement(m.default, null));
                    return r.default.createElement(
                      "div",
                      { className: "page-container" },
                      r.default.createElement(f.default, { history: e }),
                      r.default.createElement(E.default, {
                        userInput: w,
                        className: "send__to-row",
                        onChange: (e) => C((0, s.updateRecipientUserInput)(e)),
                        onValidAddressTyped: async (e) => {
                          C(
                            (0, s.addHistoryEntry)(
                              `sendFlow - Valid address typed ${e}`
                            )
                          ),
                            await C((0, s.updateRecipientUserInput)(e)),
                            C(
                              (0, s.updateRecipient)({
                                address: e,
                                nickname: "",
                              })
                            );
                        },
                        internalSearch: y,
                        selectedAddress: b.address,
                        selectedName: b.nickname,
                        onPaste: (e) => {
                          C(
                            (0, s.addHistoryEntry)(
                              `sendFlow - User pasted ${e} into address field`
                            )
                          );
                        },
                        onReset: () => C((0, s.resetRecipientInput)()),
                        scanQrCode: () => {
                          O({
                            event: "Used QR scanner",
                            category: d.MetaMetricsEventCategory.Transactions,
                            properties: {
                              action: "Edit Screen",
                              legacy_event: !0,
                            },
                          }),
                            C((0, c.showQrScanner)());
                        },
                      }),
                      P
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = e("react-router-dom"),
                  s = e("../../ducks/send"),
                  i = e("../../selectors"),
                  l = e("../../ducks/metamask/metamask"),
                  c = e("../../store/actions"),
                  u = e("../../contexts/metametrics"),
                  d = e("../../../shared/constants/metametrics"),
                  p = e("../../../shared/constants/transaction"),
                  f = y(e("./send-header")),
                  m = y(e("./send-content/add-recipient")),
                  g = y(e("./send-content")),
                  h = y(e("./send-footer")),
                  E = y(e("./send-content/add-recipient/domain-input"));
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const v = (e) => (0, i.isCustomPriceExcessive)(e, !0);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send.js" },
    ],
    [
      4878,
      {
        "../../../app/scripts/lib/util": 80,
        "../../../shared/constants/transaction": 3964,
        "../../../shared/modules/Numeric": 3974,
        "./send.constants": 4876,
        "ethereumjs-abi": 2603,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.addGasBuffer = function (e, t, n = 1.5) {
                    const r = new i.Numeric(e, 16),
                      a = new i.Numeric(t, 16)
                        .times(new i.Numeric(0.9, 10))
                        .round(0),
                      o = r.times(new i.Numeric(n, 10)).round(0);
                    if (r.greaterThanOrEqualTo(a)) return e;
                    if (o.lessThan(a)) return o.toString();
                    return a.toString();
                  }),
                  (n.ellipsify = function (e, t = 6, n = 4) {
                    if (!e) return "";
                    return `${e.slice(0, t)}...${e.slice(-n)}`;
                  }),
                  (n.generateERC20TransferData = c),
                  (n.generateERC721TransferData = u),
                  (n.getAssetTransferData = function ({
                    sendToken: e,
                    fromAddress: t,
                    toAddress: n,
                    amount: r,
                  }) {
                    switch (e.standard) {
                      case s.TokenStandard.ERC721:
                        return u({
                          toAddress: n,
                          fromAddress: t,
                          tokenId: e.tokenId,
                        });
                      case s.TokenStandard.ERC20:
                      default:
                        return c({ toAddress: n, amount: r, sendToken: e });
                    }
                  }),
                  (n.isBalanceSufficient = function ({
                    amount: e = "0x0",
                    balance: t = "0x0",
                    conversionRate: n = 1,
                    gasTotal: r = "0x0",
                    primaryCurrency: a,
                  }) {
                    let o = new i.Numeric(e, 16).add(new i.Numeric(r, 16)),
                      s = new i.Numeric(t, 16);
                    null != a &&
                      ((o = o.applyConversionRate(n)),
                      (s = s.applyConversionRate(n)));
                    return s.greaterThanOrEqualTo(o);
                  }),
                  (n.isTokenBalanceSufficient = function ({
                    amount: e = "0x0",
                    tokenBalance: t,
                    decimals: n,
                  }) {
                    const r = new i.Numeric(e, 16).shiftedBy(n);
                    return new i.Numeric(t, 16).greaterThanOrEqualTo(r);
                  });
                var r,
                  a =
                    (r = e("ethereumjs-abi")) && r.__esModule
                      ? r
                      : { default: r },
                  o = e("../../../app/scripts/lib/util"),
                  s = e("../../../shared/constants/transaction"),
                  i = e("../../../shared/modules/Numeric"),
                  l = e("./send.constants");
                function c({
                  toAddress: e = "0x0",
                  amount: t = "0x0",
                  sendToken: n,
                }) {
                  return n
                    ? l.TOKEN_TRANSFER_FUNCTION_SIGNATURE +
                        Array.prototype.map
                          .call(
                            a.default.rawEncode(
                              ["address", "uint256"],
                              [(0, o.addHexPrefix)(e), (0, o.addHexPrefix)(t)]
                            ),
                            (e) => `00${e.toString(16)}`.slice(-2)
                          )
                          .join("")
                    : undefined;
                }
                function u({
                  toAddress: e = "0x0",
                  fromAddress: t = "0x0",
                  tokenId: n,
                }) {
                  return n
                    ? l.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE +
                        Array.prototype.map
                          .call(
                            a.default.rawEncode(
                              ["address", "address", "uint256"],
                              [
                                (0, o.addHexPrefix)(t),
                                (0, o.addHexPrefix)(e),
                                n,
                              ]
                            ),
                            (e) => `00${e.toString(16)}`.slice(-2)
                          )
                          .join("")
                    : undefined;
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send.utils.js" },
    ],
    [
      4879,
      {
        "../../../../app/scripts/lib/util": 80,
        "../../../../shared/constants/app": 3946,
        "../../../../shared/constants/hardware-wallets": 3950,
        "../../../../shared/constants/metametrics": 3953,
        "../../../../shared/constants/preferences": 3956,
        "../../../components/component-library": 4381,
        "../../../components/ui/actionable-message": 4471,
        "../../../components/ui/button": 4478,
        "../../../components/ui/dialog": 4496,
        "../../../components/ui/dropdown": 4500,
        "../../../components/ui/text-field": 4595,
        "../../../components/ui/toggle-button": 4599,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/zendesk-url": 4648,
        "../../../helpers/utils/export-utils": 4662,
        "../../../helpers/utils/settings-search": 4675,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = w(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = k(e("prop-types")),
                  o = k(e("../../../components/ui/toggle-button")),
                  s = k(e("../../../components/ui/text-field")),
                  i = k(e("../../../components/ui/button")),
                  l = k(e("../../../components/ui/dropdown")),
                  c = k(e("../../../components/ui/dialog")),
                  u = e("../../../../app/scripts/lib/util"),
                  d = e("../../../../shared/constants/app"),
                  p = e("../../../helpers/utils/settings-search"),
                  f = e("../../../../shared/constants/hardware-wallets"),
                  m = e("../../../../shared/constants/metametrics"),
                  g = e("../../../../shared/constants/preferences"),
                  h = e("../../../helpers/utils/export-utils"),
                  E = k(e("../../../components/ui/actionable-message")),
                  y = k(e("../../../helpers/constants/zendesk-url")),
                  b = e("../../../components/component-library"),
                  v = e("../../../helpers/constants/design-system");
                function k(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function w(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (w = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function T(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                const A = "CORRUPT_JSON_FILE";
                class O extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      T(this, "state", {
                        autoLockTimeLimit: this.props.autoLockTimeLimit,
                        autoLockTimeLimitBeforeNormalization:
                          this.props.autoLockTimeLimit,
                        lockTimeError: "",
                        showLedgerTransportWarning: !1,
                        showResultMessage: !1,
                        restoreSuccessful: !0,
                        restoreMessage: null,
                      }),
                      T(
                        this,
                        "settingsRefs",
                        Array(
                          (0, p.getNumberOfSettingsInSection)(
                            this.context.t,
                            this.context.t("advanced")
                          )
                        )
                          .fill(undefined)
                          .map(() => r.default.createRef())
                      ),
                      T(this, "backupUserData", async () => {
                        const { fileName: e, data: t } =
                          await this.props.backupUserData();
                        (0, h.exportAsFile)(e, t, h.ExportableContentType.JSON),
                          this.context.trackEvent({
                            event: "User Data Exported",
                            category: "Backup",
                            properties: {},
                          });
                      });
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, p.handleSettingsRefs)(
                      e,
                      e("advanced"),
                      this.settingsRefs
                    );
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, p.handleSettingsRefs)(
                      e,
                      e("advanced"),
                      this.settingsRefs
                    );
                  }
                  async getTextFromFile(e) {
                    return new Promise((t, n) => {
                      const r = new window.FileReader();
                      (r.onload = (e) => {
                        const n = e.target.result;
                        t(n);
                      }),
                        (r.onerror = (e) => {
                          n(e);
                        }),
                        r.readAsText(e);
                    });
                  }
                  async handleFileUpload(e) {
                    e.persist();
                    const t = e.target.files[0],
                      n = await this.getTextFromFile(t);
                    e.target.value = "";
                    try {
                      const e = await this.props.restoreUserData(n);
                      this.setState({
                        showResultMessage: !0,
                        restoreSuccessful: e,
                        restoreMessage: null,
                      });
                    } catch (e) {
                      e.message.match(/Unexpected.+JSON/iu) &&
                        this.setState({
                          showResultMessage: !0,
                          restoreSuccessful: !1,
                          restoreMessage: A,
                        });
                    }
                  }
                  renderStateLogs() {
                    const { t: e } = this.context,
                      { displayWarning: t } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[0],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-state-logs",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("stateLogs")),
                        r.default.createElement(
                          "span",
                          { className: "settings-page__content-description" },
                          e("stateLogsDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(
                            i.default,
                            {
                              type: "secondary",
                              large: !0,
                              onClick: () => {
                                window.logStateString((n, r) => {
                                  n
                                    ? t(e("stateLogError"))
                                    : (0, h.exportAsFile)(
                                        `${e("stateLogFileName")}.json`,
                                        r,
                                        h.ExportableContentType.JSON
                                      );
                                });
                              },
                            },
                            e("downloadStateLogs")
                          )
                        )
                      )
                    );
                  }
                  renderResetAccount() {
                    const { t: e } = this.context,
                      { showResetAccountConfirmationModal: t } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[2],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-reset-account",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("clearActivity")
                        ),
                        r.default.createElement(
                          "span",
                          { className: "settings-page__content-description" },
                          e("clearActivityDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(
                            i.default,
                            {
                              type: "danger",
                              large: !0,
                              className: "settings-tab__button--red",
                              onClick: (e) => {
                                e.preventDefault(),
                                  this.context.trackEvent({
                                    category:
                                      m.MetaMetricsEventCategory.Settings,
                                    event: m.MetaMetricsEventName.AccountReset,
                                    properties: {},
                                  }),
                                  t();
                              },
                            },
                            e("clearActivityButton")
                          )
                        )
                      )
                    );
                  }
                  renderHexDataOptIn() {
                    const { t: e } = this.context,
                      { sendHexData: t, setHexDataFeatureFlag: n } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[3],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-hex-data",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("showHexData")),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("showHexDataDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(o.default, {
                            value: t,
                            onToggle: (e) => n(!e),
                            offLabel: e("off"),
                            onLabel: e("on"),
                          })
                        )
                      )
                    );
                  }
                  renderShowConversionInTestnets() {
                    const { t: e } = this.context,
                      {
                        showFiatInTestnets: t,
                        setShowFiatConversionOnTestnetsPreference: n,
                      } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[4],
                        className: "settings-page__content-row",
                        "data-testid":
                          "advanced-setting-show-testnet-conversion",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("showFiatConversionInTestnets")
                        ),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("showFiatConversionInTestnetsDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(o.default, {
                            value: t,
                            onToggle: (e) => n(!e),
                            offLabel: e("off"),
                            onLabel: e("on"),
                          })
                        )
                      )
                    );
                  }
                  renderToggleTestNetworks() {
                    const { t: e } = this.context,
                      { showTestNetworks: t, setShowTestNetworks: n } =
                        this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[5],
                        className: "settings-page__content-row",
                        "data-testid":
                          "advanced-setting-show-testnet-conversion",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("showTestnetNetworks")
                        ),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("showTestnetNetworksDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(o.default, {
                            value: t,
                            onToggle: (e) => n(!e),
                            offLabel: e("off"),
                            onLabel: e("on"),
                          })
                        )
                      )
                    );
                  }
                  renderUseNonceOptIn() {
                    const { t: e } = this.context,
                      { useNonceField: t, setUseNonceField: n } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[6],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-custom-nonce",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("nonceField")),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("nonceFieldDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(o.default, {
                            value: t,
                            onToggle: (e) => n(!e),
                            offLabel: e("off"),
                            onLabel: e("on"),
                          })
                        )
                      )
                    );
                  }
                  renderAutoLockTimeLimit() {
                    const { t: e } = this.context,
                      { lockTimeError: t } = this.state,
                      { setAutoLockTimeLimit: n } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[7],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-auto-lock",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("autoLockTimeLimit")
                        ),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("autoLockTimeLimitDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(s.default, {
                            id: "autoTimeout",
                            "data-testid": "auto-lockout-time",
                            placeholder: "0",
                            value:
                              this.state.autoLockTimeLimitBeforeNormalization,
                            onChange: (e) =>
                              this.handleLockChange(e.target.value),
                            error: t,
                            fullWidth: !0,
                            margin: "dense",
                            min: 0,
                          }),
                          r.default.createElement(
                            i.default,
                            {
                              type: "primary",
                              "data-testid": "auto-lockout-button",
                              className: "settings-tab__rpc-save-button",
                              disabled: "" !== t,
                              onClick: () => {
                                n(this.state.autoLockTimeLimit);
                              },
                            },
                            e("save")
                          )
                        )
                      )
                    );
                  }
                  renderLedgerLiveControl() {
                    const { t: e } = this.context,
                      {
                        ledgerTransportType: t,
                        setLedgerTransportPreference: n,
                        userHasALedgerAccount: a,
                      } = this.props,
                      o = {
                        LIVE: e("ledgerLive"),
                        WEBHID: e("webhid"),
                        U2F: e("u2f"),
                      },
                      s = [
                        { name: o.LIVE, value: f.LedgerTransportTypes.live },
                        { name: o.U2F, value: f.LedgerTransportTypes.u2f },
                      ];
                    window.navigator.hid &&
                      s.push({
                        name: o.WEBHID,
                        value: f.LedgerTransportTypes.webhid,
                      });
                    const u = window.navigator.hid ? o.WEBHID : o.U2F;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[8],
                        className: "settings-page__content-row",
                        "data-testId": "ledger-live-control",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("preferredLedgerConnectionType")
                        ),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("ledgerConnectionPreferenceDescription", [
                            u,
                            r.default.createElement(
                              i.default,
                              {
                                key: "ledger-connection-settings-learn-more",
                                type: "link",
                                href: y.default.HARDWARE_CONNECTION,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "settings-page__inline-link",
                              },
                              e("learnMore")
                            ),
                          ])
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(l.default, {
                            id: "select-ledger-transport-type",
                            options: s,
                            selectedOption: t,
                            onChange: async (e) => {
                              t === f.LedgerTransportTypes.live &&
                                e === f.LedgerTransportTypes.webhid &&
                                this.setState({
                                  showLedgerTransportWarning: !0,
                                }),
                                n(e),
                                e === f.LedgerTransportTypes.webhid &&
                                  a &&
                                  (await window.navigator.hid.requestDevice({
                                    filters: [
                                      { vendorId: f.LEDGER_USB_VENDOR_ID },
                                    ],
                                  }));
                            },
                          }),
                          this.state.showLedgerTransportWarning
                            ? r.default.createElement(
                                c.default,
                                { type: "message" },
                                r.default.createElement(
                                  "div",
                                  {
                                    className:
                                      "settings-page__content-item-dialog",
                                  },
                                  e("ledgerTransportChangeWarning")
                                )
                              )
                            : null
                        )
                      )
                    );
                  }
                  renderDismissSeedBackupReminderControl() {
                    const { t: e } = this.context,
                      {
                        dismissSeedBackUpReminder: t,
                        setDismissSeedBackUpReminder: n,
                      } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[9],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-dismiss-reminder",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("dismissReminderField")
                        ),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("dismissReminderDescriptionField")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(o.default, {
                            value: t,
                            onToggle: (e) => n(!e),
                            offLabel: e("off"),
                            onLabel: e("on"),
                          })
                        )
                      )
                    );
                  }
                  renderToggleEthSignControl() {
                    const { t: e, trackEvent: t } = this.context,
                      {
                        disabledRpcMethodPreferences: n,
                        showEthSignModal: a,
                        setDisabledRpcMethodPreference: s,
                      } = this.props;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[10],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-toggle-ethsign",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("toggleEthSignField")
                        ),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("toggleEthSignDescriptionField")
                        )
                      ),
                      !0 === (null == n ? void 0 : n.eth_sign)
                        ? r.default.createElement(
                            b.BannerAlert,
                            {
                              severity: v.SEVERITIES.DANGER,
                              marginBottom: 5,
                              descriptionProps: {
                                variant: v.TextVariant.bodyMd,
                              },
                            },
                            e("toggleEthSignBannerDescription")
                          )
                        : null,
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(o.default, {
                            className: "eth-sign-toggle",
                            value: (null == n ? void 0 : n.eth_sign) || !1,
                            onToggle: (e) => {
                              e
                                ? ((e) => {
                                    s("eth_sign", !e),
                                      t({
                                        category:
                                          m.MetaMetricsEventCategory.Settings,
                                        event:
                                          m.MetaMetricsEventName
                                            .OnboardingWalletAdvancedSettings,
                                        properties: {
                                          location: "Settings",
                                          enable_eth_sign: !1,
                                        },
                                      });
                                  })(e)
                                : a();
                            },
                            offLabel: e("toggleEthSignOff"),
                            onLabel: e("toggleEthSignOn"),
                          })
                        )
                      )
                    );
                  }
                  handleLockChange(e) {
                    const { t: t } = this.context;
                    if ("" === e)
                      return void this.setState({
                        autoLockTimeLimitBeforeNormalization: e,
                        autoLockTimeLimit:
                          g.DEFAULT_AUTO_LOCK_TIME_LIMIT.toString(),
                        lockTimeError: "",
                      });
                    const n = Number(e);
                    if (Number.isNaN(n) || n < 0 || n > 10080)
                      return void this.setState({
                        autoLockTimeLimitBeforeNormalization: e,
                        autoLockTimeLimit: null,
                        lockTimeError: t("lockTimeInvalid"),
                      });
                    const r = n;
                    this.setState({
                      autoLockTimeLimitBeforeNormalization: e,
                      autoLockTimeLimit: r,
                      lockTimeError: "",
                    });
                  }
                  renderUserDataBackup() {
                    const { t: e } = this.context;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[11],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-data-backup",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("backupUserData")
                        ),
                        r.default.createElement(
                          "span",
                          { className: "settings-page__content-description" },
                          e("backupUserDataDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(
                            i.default,
                            {
                              "data-testid": "backup-button",
                              type: "secondary",
                              large: !0,
                              onClick: () => this.backupUserData(),
                            },
                            e("backup")
                          )
                        )
                      )
                    );
                  }
                  renderRestoreUserData() {
                    const { t: e } = this.context,
                      {
                        showResultMessage: t,
                        restoreSuccessful: n,
                        restoreMessage: a,
                      } = this.state,
                      o = e(n ? "restoreSuccessful" : "restoreFailed"),
                      s = a === A ? e("dataBackupSeemsCorrupt") : o;
                    return r.default.createElement(
                      "div",
                      {
                        ref: this.settingsRefs[12],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-data-restore",
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "span",
                          null,
                          e("restoreUserData")
                        ),
                        r.default.createElement(
                          "span",
                          { className: "settings-page__content-description" },
                          e("restoreUserDataDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(
                            "label",
                            {
                              htmlFor: "restore-file",
                              className:
                                "button btn btn--rounded btn-secondary btn--large settings-page__button",
                            },
                            e("restore")
                          ),
                          r.default.createElement("input", {
                            id: "restore-file",
                            "data-testid": "restore-file",
                            style: { visibility: "hidden" },
                            type: "file",
                            accept: ".json",
                            onChange: (e) => this.handleFileUpload(e),
                          })
                        ),
                        t &&
                          r.default.createElement(E.default, {
                            type: n ? "success" : "danger",
                            message: s,
                            primaryActionV2: {
                              label: e("dismiss"),
                              onClick: () => {
                                this.setState({
                                  showResultMessage: !1,
                                  restoreSuccessful: !0,
                                  restoreMessage: null,
                                });
                              },
                            },
                          })
                      )
                    );
                  }
                  render() {
                    const { warning: e } = this.props,
                      t = (0, u.getPlatform)() !== d.PLATFORM_FIREFOX;
                    return r.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      e
                        ? r.default.createElement(
                            "div",
                            { className: "settings-tab__error" },
                            e
                          )
                        : null,
                      this.renderStateLogs(),
                      this.renderResetAccount(),
                      this.renderHexDataOptIn(),
                      this.renderShowConversionInTestnets(),
                      this.renderToggleTestNetworks(),
                      this.renderUseNonceOptIn(),
                      this.renderAutoLockTimeLimit(),
                      this.renderUserDataBackup(),
                      this.renderRestoreUserData(),
                      t ? this.renderLedgerLiveControl() : null,
                      this.renderDismissSeedBackupReminderControl(),
                      this.renderToggleEthSignControl()
                    );
                  }
                }
                (n.default = O),
                  T(O, "contextTypes", {
                    t: a.default.func,
                    trackEvent: a.default.func,
                  }),
                  T(O, "propTypes", {
                    setUseNonceField: a.default.func,
                    useNonceField: a.default.bool,
                    setHexDataFeatureFlag: a.default.func,
                    displayWarning: a.default.func,
                    showResetAccountConfirmationModal: a.default.func,
                    showEthSignModal: a.default.func,
                    warning: a.default.string,
                    sendHexData: a.default.bool,
                    showFiatInTestnets: a.default.bool,
                    showTestNetworks: a.default.bool,
                    autoLockTimeLimit: a.default.number,
                    setAutoLockTimeLimit: a.default.func.isRequired,
                    setShowFiatConversionOnTestnetsPreference:
                      a.default.func.isRequired,
                    setShowTestNetworks: a.default.func.isRequired,
                    ledgerTransportType: a.default.oneOf(
                      Object.values(f.LedgerTransportTypes)
                    ),
                    setLedgerTransportPreference: a.default.func.isRequired,
                    setDismissSeedBackUpReminder: a.default.func.isRequired,
                    dismissSeedBackUpReminder: a.default.bool.isRequired,
                    userHasALedgerAccount: a.default.bool.isRequired,
                    backupUserData: a.default.func.isRequired,
                    restoreUserData: a.default.func.isRequired,
                    setDisabledRpcMethodPreference: a.default.func.isRequired,
                    disabledRpcMethodPreferences: a.default.shape({
                      eth_sign: a.default.bool.isRequired,
                    }),
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/advanced-tab/advanced-tab.component.js",
      },
    ],
    [
      4880,
      {
        "../../../../shared/constants/preferences": 3956,
        "../../../ducks/metamask/metamask": 4633,
        "../../../selectors": 5013,
        "../../../store/actions": 5020,
        "./advanced-tab.component": 4879,
        "react-redux": 3695,
        "react-router-dom": 3715,
        redux: 3747,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.mapStateToProps =
                    n.mapDispatchToProps =
                    n.default =
                      void 0);
                var r,
                  a = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c = e("../../../ducks/metamask/metamask"),
                  u = e("../../../../shared/constants/preferences"),
                  d =
                    (r = e("./advanced-tab.component")) && r.__esModule
                      ? r
                      : { default: r };
                const p = (e) => {
                  const {
                      appState: { warning: t },
                      metamask: n,
                    } = e,
                    {
                      featureFlags: { sendHexData: r } = {},
                      disabledRpcMethodPreferences: a,
                      useNonceField: o,
                      ledgerTransportType: s,
                      dismissSeedBackUpReminder: i,
                    } = n,
                    {
                      showFiatInTestnets: d,
                      showTestNetworks: p,
                      autoLockTimeLimit: f = u.DEFAULT_AUTO_LOCK_TIME_LIMIT,
                    } = (0, l.getPreferences)(e);
                  return {
                    warning: t,
                    sendHexData: r,
                    showFiatInTestnets: d,
                    showTestNetworks: p,
                    autoLockTimeLimit: f,
                    useNonceField: o,
                    ledgerTransportType: s,
                    dismissSeedBackUpReminder: i,
                    userHasALedgerAccount: (0, c.doesUserHaveALedgerAccount)(e),
                    disabledRpcMethodPreferences: a,
                  };
                };
                n.mapStateToProps = p;
                const f = (e) => ({
                  backupUserData: () => (0, i.backupUserData)(),
                  restoreUserData: (e) => (0, i.restoreUserData)(e),
                  setHexDataFeatureFlag: (t) =>
                    e((0, i.setFeatureFlag)("sendHexData", t)),
                  displayWarning: (t) => e((0, i.displayWarning)(t)),
                  showResetAccountConfirmationModal: () =>
                    e((0, i.showModal)({ name: "CONFIRM_RESET_ACCOUNT" })),
                  showEthSignModal: () =>
                    e((0, i.showModal)({ name: "ETH_SIGN" })),
                  setUseNonceField: (t) => e((0, i.setUseNonceField)(t)),
                  setShowFiatConversionOnTestnetsPreference: (t) =>
                    e((0, i.setShowFiatConversionOnTestnetsPreference)(t)),
                  setShowTestNetworks: (t) => e((0, i.setShowTestNetworks)(t)),
                  setAutoLockTimeLimit: (t) =>
                    e((0, i.setAutoLockTimeLimit)(t)),
                  setLedgerTransportPreference: (t) =>
                    e((0, i.setLedgerTransportPreference)(t)),
                  setDismissSeedBackUpReminder: (t) =>
                    e((0, i.setDismissSeedBackUpReminder)(t)),
                  setDisabledRpcMethodPreference: (t, n) =>
                    e((0, i.setDisabledRpcMethodPreference)(t, n)),
                });
                n.mapDispatchToProps = f;
                var m = (0, a.compose)(
                  s.withRouter,
                  (0, o.connect)(p, f)
                )(d.default);
                n.default = m;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/advanced-tab/advanced-tab.container.js",
      },
    ],
    [
      4881,
      { "./advanced-tab.container": 4880 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./advanced-tab.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/advanced-tab/index.js" },
    ],
    [
      4882,
      {
        "../../../../shared/constants/alerts": 3945,
        "../../../components/component-library": 4381,
        "../../../components/ui/toggle-button": 4599,
        "../../../components/ui/tooltip": 4606,
        "../../../ducks/metamask/metamask": 4633,
        "../../../helpers/utils/settings-search": 4675,
        "../../../hooks/useI18nContext": 4701,
        "../../../store/actions": 5020,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = m(e("prop-types")),
                  o = e("react-redux"),
                  s = e("../../../../shared/constants/alerts"),
                  i = m(e("../../../components/ui/tooltip")),
                  l = m(e("../../../components/ui/toggle-button")),
                  c = e("../../../store/actions"),
                  u = e("../../../ducks/metamask/metamask"),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../helpers/utils/settings-search"),
                  f = e("../../../components/component-library");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const h = ({ alertId: e, description: t, title: n }) => {
                  const a = (0, d.useI18nContext)(),
                    s = (0, r.useRef)();
                  (0, r.useEffect)(() => {
                    (0, p.handleSettingsRefs)(a, a("alerts"), s);
                  }, [s, a]);
                  const m = (0, o.useSelector)(
                    (t) => (0, u.getAlertEnabledness)(t)[e]
                  );
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      "div",
                      { ref: s, className: "alerts-tab__item" },
                      r.default.createElement("span", null, n),
                      r.default.createElement(
                        "div",
                        { className: "alerts-tab__description-container" },
                        r.default.createElement(
                          i.default,
                          {
                            position: "top",
                            title: t,
                            wrapperClassName: "alerts-tab__description",
                          },
                          r.default.createElement(f.Icon, {
                            name: f.IconName.Info,
                            className: "alerts-tab__description__icon",
                          })
                        ),
                        r.default.createElement(l.default, {
                          offLabel: a("off"),
                          onLabel: a("on"),
                          onToggle: () => (0, c.setAlertEnabledness)(e, !m),
                          value: m,
                        })
                      )
                    )
                  );
                };
                h.propTypes = {
                  alertId: a.default.string.isRequired,
                  description: a.default.string.isRequired,
                  title: a.default.string.isRequired,
                };
                var E = () => {
                  const e = (0, d.useI18nContext)(),
                    t = {
                      [s.AlertTypes.unconnectedAccount]: {
                        title: e("alertSettingsUnconnectedAccount"),
                        description: e(
                          "alertSettingsUnconnectedAccountDescription"
                        ),
                      },
                      [s.AlertTypes.web3ShimUsage]: {
                        title: e("alertSettingsWeb3ShimUsage"),
                        description: e("alertSettingsWeb3ShimUsageDescription"),
                      },
                    };
                  return r.default.createElement(
                    "div",
                    { className: "alerts-tab__body" },
                    Object.entries(t).map(
                      ([e, { title: t, description: n }], a) =>
                        r.default.createElement(h, {
                          alertId: e,
                          description: n,
                          key: e,
                          title: t,
                        })
                    )
                  );
                };
                n.default = E;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/alerts-tab/alerts-tab.js" },
    ],
    [
      4883,
      { "./alerts-tab": 4882 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./alerts-tab")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/alerts-tab/index.js" },
    ],
    [
      4884,
      {
        "../../../../../shared/modules/hexstring-utils": 3982,
        "../../../../components/ui/identicon": 4534,
        "../../../../components/ui/page-container/page-container-footer": 4566,
        "../../../../components/ui/text-field": 4595,
        "../../../../helpers/constants/routes": 4645,
        "../../../../helpers/utils/util": 4679,
        "../../../send/send-content/add-recipient/domain-input": 4847,
        "../../../send/send.constants": 4876,
        lodash: 3442,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = m(e("prop-types")),
                  o = e("lodash"),
                  s = m(e("../../../../components/ui/identicon")),
                  i = m(e("../../../../components/ui/text-field")),
                  l = e("../../../../helpers/constants/routes"),
                  c = e("../../../../helpers/utils/util"),
                  u = m(
                    e("../../../send/send-content/add-recipient/domain-input")
                  ),
                  d = m(
                    e(
                      "../../../../components/ui/page-container/page-container-footer"
                    )
                  ),
                  p = e("../../../../../shared/modules/hexstring-utils"),
                  f = e("../../../send/send.constants");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function h(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class E extends r.PureComponent {
                  constructor(e) {
                    super(e),
                      h(this, "state", {
                        newName: "",
                        ethAddress: "",
                        error: "",
                        input: "",
                      }),
                      h(this, "validate", (e) => {
                        const t =
                            !(0, p.isBurnAddress)(e) &&
                            (0, p.isValidHexAddress)(e, {
                              mixedCaseUseChecksum: !0,
                            }),
                          n = (0, c.isValidDomainName)(e);
                        t || n || "" === e
                          ? this.setState({ error: "", ethAddress: e })
                          : this.setState({
                              error: f.INVALID_RECIPIENT_ADDRESS_ERROR,
                            });
                      }),
                      h(this, "onChange", (e) => {
                        this.setState({ input: e }), this.dValidate(e);
                      }),
                      (this.dValidate = (0, o.debounce)(this.validate, 500));
                  }
                  UNSAFE_componentWillReceiveProps(e) {
                    if (e.qrCodeData && "address" === e.qrCodeData.type) {
                      const { domainResolution: t } = this.props,
                        n = e.qrCodeData.values.address.toLowerCase();
                      (t || this.state.ethAddress).toLowerCase() !== n &&
                        (this.setState({ input: n }),
                        this.validate(n),
                        this.props.qrCodeDetected(null));
                    }
                  }
                  renderInput() {
                    return r.default.createElement(u.default, {
                      scanQrCode: (e) => {
                        this.props.scanQrCode();
                      },
                      onChange: this.onChange,
                      onPaste: (e) => {
                        this.setState({ input: e }), this.validate(e);
                      },
                      onReset: () => {
                        this.props.resetDomainResolution(),
                          this.setState({ ethAddress: "", input: "" });
                      },
                      userInput: this.state.input,
                    });
                  }
                  render() {
                    const { t: e } = this.context,
                      {
                        history: t,
                        addToAddressBook: n,
                        domainError: a,
                        domainResolution: o,
                      } = this.props,
                      c = a || this.state.error;
                    return r.default.createElement(
                      "div",
                      {
                        className:
                          "settings-page__content-row address-book__add-contact",
                      },
                      o &&
                        r.default.createElement(
                          "div",
                          { className: "address-book__view-contact__group" },
                          r.default.createElement(s.default, {
                            address: o,
                            diameter: 60,
                          }),
                          r.default.createElement(
                            "div",
                            {
                              className:
                                "address-book__view-contact__group__value",
                            },
                            o
                          )
                        ),
                      r.default.createElement(
                        "div",
                        { className: "address-book__add-contact__content" },
                        r.default.createElement(
                          "div",
                          {
                            className:
                              "address-book__view-contact__group address-book__add-contact__content__username",
                          },
                          r.default.createElement(
                            "div",
                            {
                              className:
                                "address-book__view-contact__group__label",
                            },
                            e("userName")
                          ),
                          r.default.createElement(i.default, {
                            type: "text",
                            id: "nickname",
                            value: this.state.newName,
                            onChange: (e) =>
                              this.setState({ newName: e.target.value }),
                            fullWidth: !0,
                            margin: "dense",
                          })
                        ),
                        r.default.createElement(
                          "div",
                          { className: "address-book__view-contact__group" },
                          r.default.createElement(
                            "div",
                            {
                              className:
                                "address-book__view-contact__group__label",
                            },
                            e("ethereumPublicAddress")
                          ),
                          this.renderInput(),
                          c &&
                            r.default.createElement(
                              "div",
                              { className: "address-book__add-contact__error" },
                              e(c)
                            )
                        )
                      ),
                      r.default.createElement(d.default, {
                        cancelText: this.context.t("cancel"),
                        disabled: Boolean(
                          this.state.error ||
                            !this.state.ethAddress ||
                            !this.state.newName.trim()
                        ),
                        onSubmit: async () => {
                          await n(
                            o || this.state.ethAddress,
                            this.state.newName
                          ),
                            t.push(l.CONTACT_LIST_ROUTE);
                        },
                        onCancel: () => {
                          t.push(l.CONTACT_LIST_ROUTE);
                        },
                        submitText: this.context.t("save"),
                      })
                    );
                  }
                }
                (n.default = E),
                  h(E, "contextTypes", { t: a.default.func }),
                  h(E, "propTypes", {
                    addToAddressBook: a.default.func,
                    history: a.default.object,
                    scanQrCode: a.default.func,
                    qrCodeData: a.default.object,
                    qrCodeDetected: a.default.func,
                    domainResolution: a.default.string,
                    domainError: a.default.string,
                    resetDomainResolution: a.default.func,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/add-contact/add-contact.component.js",
      },
    ],
    [
      4885,
      {
        "../../../../ducks/app/app": 4625,
        "../../../../ducks/domains": 4627,
        "../../../../store/actions": 5020,
        "./add-contact.component": 4884,
        "react-redux": 3695,
        "react-router-dom": 3715,
        redux: 3747,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../../store/actions"),
                  l = e("../../../../ducks/app/app"),
                  c = e("../../../../ducks/domains"),
                  u =
                    (r = e("./add-contact.component")) && r.__esModule
                      ? r
                      : { default: r };
                var d = (0, a.compose)(
                  s.withRouter,
                  (0, o.connect)(
                    (e) => ({
                      qrCodeData: (0, l.getQrCodeData)(e),
                      domainError: (0, c.getDomainError)(e),
                      domainResolution: (0, c.getDomainResolution)(e),
                    }),
                    (e) => ({
                      addToAddressBook: (t, n) =>
                        e((0, i.addToAddressBook)(t, n)),
                      scanQrCode: () => e((0, i.showQrScanner)()),
                      qrCodeDetected: (t) => e((0, i.qrCodeDetected)(t)),
                      resetDomainResolution: () =>
                        e((0, c.resetDomainResolution)()),
                    })
                  )
                )(u.default);
                n.default = d;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/add-contact/add-contact.container.js",
      },
    ],
    [
      4886,
      { "./add-contact.container": 4885 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./add-contact.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/add-contact/index.js",
      },
    ],
    [
      4887,
      {
        "../../../components/app/contact-list": 4077,
        "../../../components/component-library": 4381,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/constants/routes": 4645,
        "../../../helpers/utils/settings-search": 4675,
        "./add-contact": 4886,
        "./edit-contact": 4891,
        "./view-contact": 4893,
        classnames: 2227,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = m(e("prop-types")),
                  o = m(e("classnames")),
                  s = m(e("../../../components/app/contact-list")),
                  i = e("../../../helpers/constants/routes"),
                  l = e("../../../helpers/utils/settings-search"),
                  c = e("../../../components/component-library"),
                  u = e("../../../helpers/constants/design-system"),
                  d = m(e("./edit-contact")),
                  p = m(e("./add-contact")),
                  f = m(e("./view-contact"));
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function h(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class E extends r.Component {
                  constructor(...e) {
                    super(...e),
                      h(
                        this,
                        "settingsRefs",
                        Array(
                          (0, l.getNumberOfSettingsInSection)(
                            this.context.t,
                            this.context.t("contacts")
                          )
                        )
                          .fill(undefined)
                          .map(() => r.default.createRef())
                      );
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, l.handleSettingsRefs)(
                      e,
                      e("contacts"),
                      this.settingsRefs
                    );
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, l.handleSettingsRefs)(
                      e,
                      e("contacts"),
                      this.settingsRefs
                    );
                  }
                  renderAddresses() {
                    const {
                        addressBook: e,
                        history: t,
                        selectedAddress: n,
                      } = this.props,
                      a = e.filter(({ name: e }) => Boolean(e)),
                      o = e.filter(({ name: e }) => !e),
                      { t: l } = this.context;
                    return e.length
                      ? r.default.createElement(
                          "div",
                          null,
                          r.default.createElement(s.default, {
                            searchForContacts: () => a,
                            searchForRecents: () => o,
                            selectRecipient: (e) => {
                              t.push(`${i.CONTACT_VIEW_ROUTE}/${e}`);
                            },
                            selectedAddress: n,
                          })
                        )
                      : r.default.createElement(
                          "div",
                          { className: "address-book__container" },
                          r.default.createElement(
                            "div",
                            null,
                            r.default.createElement(c.Icon, {
                              name: c.IconName.Book,
                              color: u.IconColor.iconMuted,
                              className: "address-book__icon",
                              size: c.IconSize.Xl,
                            }),
                            r.default.createElement(
                              "h4",
                              { className: "address-book__title" },
                              l("buildContactList")
                            ),
                            r.default.createElement(
                              "p",
                              { className: "address-book__sub-title" },
                              l("addFriendsAndAddresses")
                            ),
                            r.default.createElement(
                              "button",
                              {
                                className: "address-book__link",
                                onClick: () => {
                                  t.push(i.CONTACT_ADD_ROUTE);
                                },
                              },
                              "+ ",
                              l("addContact")
                            )
                          )
                        );
                  }
                  renderAddButton() {
                    const {
                      history: e,
                      viewingContact: t,
                      editingContact: n,
                    } = this.props;
                    return r.default.createElement(
                      c.ButtonPrimary,
                      {
                        className: (0, o.default)(
                          "address-book-add-button__button",
                          { "address-book-add-button__button--hidden": t || n }
                        ),
                        onClick: () => {
                          e.push(i.CONTACT_ADD_ROUTE);
                        },
                        margin: 4,
                        size: u.Size.LG,
                      },
                      this.context.t("addContact")
                    );
                  }
                  renderContactContent() {
                    const {
                      viewingContact: e,
                      editingContact: t,
                      addingContact: n,
                    } = this.props;
                    let a = null;
                    return (
                      e
                        ? (a = f.default)
                        : t
                        ? (a = d.default)
                        : n && (a = p.default),
                      a &&
                        r.default.createElement(
                          "div",
                          { className: "address-book-contact-content" },
                          r.default.createElement(a, null)
                        )
                    );
                  }
                  renderAddressBookContent() {
                    const { hideAddressBook: e } = this.props;
                    return e
                      ? null
                      : r.default.createElement(
                          "div",
                          {
                            ref: this.settingsRefs[0],
                            className: "address-book",
                          },
                          this.renderAddresses()
                        );
                  }
                  render() {
                    const {
                      addingContact: e,
                      addressBook: t,
                      currentPath: n,
                    } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: "address-book-wrapper" },
                      this.renderAddressBookContent(),
                      this.renderContactContent(),
                      n === i.CONTACT_LIST_ROUTE && !e && t.length > 0
                        ? this.renderAddButton()
                        : null
                    );
                  }
                }
                (n.default = E),
                  h(E, "contextTypes", { t: a.default.func }),
                  h(E, "propTypes", {
                    addressBook: a.default.array,
                    history: a.default.object,
                    selectedAddress: a.default.string,
                    viewingContact: a.default.bool,
                    editingContact: a.default.bool,
                    addingContact: a.default.bool,
                    hideAddressBook: a.default.bool,
                    currentPath: a.default.string,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/contact-list-tab.component.js",
      },
    ],
    [
      4888,
      {
        "../../../helpers/constants/routes": 4645,
        "../../../selectors": 5013,
        "./contact-list-tab.component": 4887,
        "react-redux": 3695,
        "react-router-dom": 3715,
        redux: 3747,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../selectors"),
                  l = e("../../../helpers/constants/routes"),
                  c =
                    (r = e("./contact-list-tab.component")) && r.__esModule
                      ? r
                      : { default: r };
                var u = (0, a.compose)(
                  s.withRouter,
                  (0, o.connect)((e, t) => {
                    const { location: n } = t,
                      { pathname: r } = n,
                      a = r.match(/[^/]+$/u)[0],
                      o = a.includes("0x"),
                      s = Boolean(r.match(l.CONTACT_VIEW_ROUTE)),
                      c = Boolean(r.match(l.CONTACT_EDIT_ROUTE)),
                      u = Boolean(r.match(l.CONTACT_ADD_ROUTE)),
                      d = s || c || u;
                    return {
                      viewingContact: s,
                      editingContact: c,
                      addingContact: u,
                      addressBook: (0, i.getAddressBook)(e),
                      selectedAddress: o ? a : "",
                      hideAddressBook: d,
                      currentPath: r,
                    };
                  })
                )(c.default);
                n.default = u;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/contact-list-tab.container.js",
      },
    ],
    [
      4889,
      {
        "../../../../../shared/modules/hexstring-utils": 3982,
        "../../../../components/component-library": 4381,
        "../../../../components/ui/button/button.component": 4477,
        "../../../../components/ui/page-container/page-container-footer": 4566,
        "../../../../components/ui/text-field": 4595,
        "../../../../helpers/constants/design-system": 4641,
        "prop-types": 3555,
        react: 3730,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = e("react-router-dom"),
                  s = p(e("../../../../components/ui/button/button.component")),
                  i = p(e("../../../../components/ui/text-field")),
                  l = p(
                    e(
                      "../../../../components/ui/page-container/page-container-footer"
                    )
                  ),
                  c = e("../../../../../shared/modules/hexstring-utils"),
                  u = e("../../../../components/component-library"),
                  d = e("../../../../helpers/constants/design-system");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class g extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      m(this, "state", {
                        newName: this.props.name,
                        newAddress: this.props.address,
                        newMemo: this.props.memo,
                        error: "",
                      });
                  }
                  render() {
                    const { t: e } = this.context,
                      {
                        address: t,
                        addToAddressBook: n,
                        chainId: a,
                        history: p,
                        listRoute: f,
                        memo: m,
                        name: g,
                        removeFromAddressBook: h,
                        viewRoute: E,
                      } = this.props;
                    return t
                      ? r.default.createElement(
                          "div",
                          {
                            className:
                              "settings-page__content-row address-book__edit-contact",
                          },
                          r.default.createElement(
                            u.Box,
                            {
                              className:
                                "settings-page__header address-book__header--edit",
                              paddingLeft: 6,
                              paddingRight: 6,
                            },
                            r.default.createElement(
                              u.Box,
                              {
                                display: d.Display.Flex,
                                alignItems: d.AlignItems.center,
                              },
                              r.default.createElement(u.AvatarAccount, {
                                size: u.AvatarAccountSize.Lg,
                                address: t,
                              }),
                              r.default.createElement(
                                u.Text,
                                {
                                  className: "address-book__header__name",
                                  variant: d.TextVariant.bodyLgMedium,
                                  marginInlineStart: 4,
                                },
                                g || t
                              )
                            ),
                            r.default.createElement(
                              s.default,
                              {
                                type: "link",
                                className: "settings-page__address-book-button",
                                onClick: async () => {
                                  await h(a, t), p.push(f);
                                },
                              },
                              e("deleteContact")
                            )
                          ),
                          r.default.createElement(
                            "div",
                            {
                              className: "address-book__edit-contact__content",
                            },
                            r.default.createElement(
                              "div",
                              {
                                className: "address-book__view-contact__group",
                              },
                              r.default.createElement(
                                "div",
                                {
                                  className:
                                    "address-book__view-contact__group__label",
                                },
                                e("userName")
                              ),
                              r.default.createElement(i.default, {
                                type: "text",
                                id: "nickname",
                                placeholder: this.context.t("addAlias"),
                                value: this.state.newName,
                                onChange: (e) =>
                                  this.setState({ newName: e.target.value }),
                                fullWidth: !0,
                                margin: "dense",
                              })
                            ),
                            r.default.createElement(
                              "div",
                              {
                                className: "address-book__view-contact__group",
                              },
                              r.default.createElement(
                                "div",
                                {
                                  className:
                                    "address-book__view-contact__group__label",
                                },
                                e("ethereumPublicAddress")
                              ),
                              r.default.createElement(i.default, {
                                type: "text",
                                id: "address",
                                value: this.state.newAddress,
                                error: this.state.error,
                                onChange: (e) =>
                                  this.setState({ newAddress: e.target.value }),
                                fullWidth: !0,
                                multiline: !0,
                                rows: 4,
                                margin: "dense",
                                classes: {
                                  inputMultiline:
                                    "address-book__view-contact__address__text-area",
                                  inputRoot:
                                    "address-book__view-contact__address",
                                },
                              })
                            ),
                            r.default.createElement(
                              "div",
                              {
                                className: "address-book__view-contact__group",
                              },
                              r.default.createElement(
                                "div",
                                {
                                  className:
                                    "address-book__view-contact__group__label--capitalized",
                                },
                                e("memo")
                              ),
                              r.default.createElement(i.default, {
                                type: "text",
                                id: "memo",
                                placeholder: m,
                                value: this.state.newMemo,
                                onChange: (e) =>
                                  this.setState({ newMemo: e.target.value }),
                                fullWidth: !0,
                                margin: "dense",
                                multiline: !0,
                                rows: 3,
                                classes: {
                                  inputMultiline:
                                    "address-book__view-contact__text-area",
                                  inputRoot:
                                    "address-book__view-contact__text-area-wrapper",
                                },
                              })
                            )
                          ),
                          r.default.createElement(l.default, {
                            cancelText: this.context.t("cancel"),
                            onSubmit: async () => {
                              "" !== this.state.newAddress &&
                              this.state.newAddress !== t
                                ? !(0, c.isBurnAddress)(
                                    this.state.newAddress
                                  ) &&
                                  (0, c.isValidHexAddress)(
                                    this.state.newAddress,
                                    { mixedCaseUseChecksum: !0 }
                                  )
                                  ? (await h(a, t),
                                    await n(
                                      this.state.newAddress,
                                      this.state.newName || g,
                                      this.state.newMemo || m
                                    ),
                                    p.push(f))
                                  : this.setState({
                                      error: this.context.t("invalidAddress"),
                                    })
                                : (await n(
                                    t,
                                    this.state.newName || g,
                                    this.state.newMemo || m
                                  ),
                                  p.push(f));
                            },
                            onCancel: () => {
                              p.push(`${E}/${t}`);
                            },
                            submitText: this.context.t("save"),
                            disabled:
                              (this.state.newName === g &&
                                this.state.newAddress === t &&
                                this.state.newMemo === m) ||
                              !this.state.newName.trim(),
                          })
                        )
                      : r.default.createElement(o.Redirect, {
                          to: { pathname: f },
                        });
                  }
                }
                (n.default = g),
                  m(g, "contextTypes", { t: a.default.func }),
                  m(g, "propTypes", {
                    addToAddressBook: a.default.func,
                    removeFromAddressBook: a.default.func,
                    history: a.default.object,
                    name: a.default.string,
                    address: a.default.string,
                    chainId: a.default.string,
                    memo: a.default.string,
                    viewRoute: a.default.string,
                    listRoute: a.default.string,
                  }),
                  m(g, "defaultProps", { name: "", memo: "" });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/edit-contact/edit-contact.component.js",
      },
    ],
    [
      4890,
      {
        "../../../../ducks/metamask/metamask": 4633,
        "../../../../helpers/constants/routes": 4645,
        "../../../../selectors": 5013,
        "../../../../store/actions": 5020,
        "./edit-contact.component": 4889,
        "react-redux": 3695,
        "react-router-dom": 3715,
        redux: 3747,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../../selectors"),
                  l = e("../../../../ducks/metamask/metamask"),
                  c = e("../../../../helpers/constants/routes"),
                  u = e("../../../../store/actions"),
                  d =
                    (r = e("./edit-contact.component")) && r.__esModule
                      ? r
                      : { default: r };
                var p = (0, a.compose)(
                  s.withRouter,
                  (0, o.connect)(
                    (e, t) => {
                      const { location: n } = t,
                        { pathname: r } = n,
                        a = r.match(/[^/]+$/u)[0],
                        o = a.includes("0x")
                          ? a.toLowerCase()
                          : t.match.params.id,
                        s =
                          (0, i.getAddressBookEntry)(e, o) ||
                          e.metamask.identities[o],
                        { memo: u, name: d } = s || {},
                        { chainId: p } = (0, l.getProviderConfig)(e);
                      return {
                        address: s ? o : null,
                        chainId: p,
                        name: d,
                        memo: u,
                        viewRoute: c.CONTACT_VIEW_ROUTE,
                        listRoute: c.CONTACT_LIST_ROUTE,
                      };
                    },
                    (e) => ({
                      addToAddressBook: (t, n, r) =>
                        e((0, u.addToAddressBook)(t, n, r)),
                      removeFromAddressBook: (t, n) =>
                        e((0, u.removeFromAddressBook)(t, n)),
                    })
                  )
                )(d.default);
                n.default = p;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/edit-contact/edit-contact.container.js",
      },
    ],
    [
      4891,
      { "./edit-contact.container": 4890 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./edit-contact.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/edit-contact/index.js",
      },
    ],
    [
      4892,
      { "./contact-list-tab.container": 4888 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./contact-list-tab.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/index.js",
      },
    ],
    [
      4893,
      { "./view-contact.container": 4895 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./view-contact.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/view-contact/index.js",
      },
    ],
    [
      4894,
      {
        "../../../../components/component-library": 4381,
        "../../../../components/ui/button/button.component": 4477,
        "../../../../components/ui/tooltip": 4606,
        "../../../../helpers/constants/design-system": 4641,
        "../../../../hooks/useCopyToClipboard": 4694,
        "../../../../hooks/useI18nContext": 4701,
        "prop-types": 3555,
        react: 3730,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = p(e("react")),
                  a = p(e("prop-types")),
                  o = e("react-router-dom"),
                  s = p(e("../../../../components/ui/button/button.component")),
                  i = e("../../../../components/component-library"),
                  l = p(e("../../../../components/ui/tooltip")),
                  c = e("../../../../hooks/useI18nContext"),
                  u = e("../../../../hooks/useCopyToClipboard"),
                  d = e("../../../../helpers/constants/design-system");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f({
                  history: e,
                  name: t,
                  address: n,
                  checkSummedAddress: a,
                  memo: p,
                  editRoute: f,
                  listRoute: m,
                }) {
                  const g = (0, c.useI18nContext)(),
                    [h, E] = (0, u.useCopyToClipboard)();
                  return n
                    ? r.default.createElement(
                        "div",
                        { className: "settings-page__content-row" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          r.default.createElement(
                            i.Box,
                            {
                              className:
                                "settings-page__header address-book__header",
                              paddingLeft: 6,
                            },
                            r.default.createElement(i.AvatarAccount, {
                              size: i.AvatarAccountSize.Lg,
                              address: n,
                            }),
                            r.default.createElement(
                              i.Text,
                              {
                                className: "address-book__header__name",
                                variant: d.TextVariant.bodyLgMedium,
                                marginInlineStart: 4,
                              },
                              t || n
                            )
                          ),
                          r.default.createElement(
                            "div",
                            { className: "address-book__view-contact__group" },
                            r.default.createElement(
                              s.default,
                              {
                                type: "secondary",
                                onClick: () => {
                                  e.push(`${f}/${n}`);
                                },
                              },
                              g("edit")
                            )
                          ),
                          r.default.createElement(
                            "div",
                            { className: "address-book__view-contact__group" },
                            r.default.createElement(
                              "div",
                              {
                                className:
                                  "address-book__view-contact__group__label",
                              },
                              g("ethereumPublicAddress")
                            ),
                            r.default.createElement(
                              "div",
                              {
                                className:
                                  "address-book__view-contact__group__value",
                              },
                              r.default.createElement(
                                "div",
                                {
                                  className:
                                    "address-book__view-contact__group__static-address",
                                },
                                (function (e) {
                                  return `0x${e
                                    .slice(2)
                                    .match(/.{1,4}/gu)
                                    .join("")}`;
                                })(a)
                              ),
                              r.default.createElement(
                                l.default,
                                {
                                  position: "bottom",
                                  title: g(
                                    h ? "copiedExclamation" : "copyToClipboard"
                                  ),
                                },
                                r.default.createElement(i.ButtonIcon, {
                                  ariaLabel: "copy",
                                  className:
                                    "address-book__view-contact__group__static-address--copy-icon",
                                  onClick: () => {
                                    E(a);
                                  },
                                  iconName: h
                                    ? i.IconName.CopySuccess
                                    : i.IconName.Copy,
                                  size: i.ButtonIconSize.Lg,
                                  color: d.IconColor.primaryDefault,
                                })
                              )
                            )
                          ),
                          p.length > 0
                            ? r.default.createElement(
                                "div",
                                {
                                  className:
                                    "address-book__view-contact__group",
                                },
                                r.default.createElement(
                                  "div",
                                  {
                                    className:
                                      "address-book__view-contact__group__label--capitalized",
                                  },
                                  g("memo")
                                ),
                                r.default.createElement(
                                  "div",
                                  {
                                    className:
                                      "address-book__view-contact__group__static-address",
                                  },
                                  p
                                )
                              )
                            : null
                        )
                      )
                    : r.default.createElement(o.Redirect, {
                        to: { pathname: m },
                      });
                }
                f.propTypes = {
                  name: a.default.string,
                  address: a.default.string,
                  history: a.default.object,
                  checkSummedAddress: a.default.string,
                  memo: a.default.string,
                  editRoute: a.default.string,
                  listRoute: a.default.string.isRequired,
                };
                var m = r.default.memo(f);
                n.default = m;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/view-contact/view-contact.component.js",
      },
    ],
    [
      4895,
      {
        "../../../../../shared/modules/hexstring-utils": 3982,
        "../../../../helpers/constants/routes": 4645,
        "../../../../selectors": 5013,
        "./view-contact.component": 4894,
        "react-redux": 3695,
        "react-router-dom": 3715,
        redux: 3747,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../../selectors"),
                  l = e("../../../../helpers/constants/routes"),
                  c = e("../../../../../shared/modules/hexstring-utils"),
                  u =
                    (r = e("./view-contact.component")) && r.__esModule
                      ? r
                      : { default: r };
                var d = (0, a.compose)(
                  s.withRouter,
                  (0, o.connect)((e, t) => {
                    const { location: n } = t,
                      { pathname: r } = n,
                      a = r.match(/[^/]+$/u)[0],
                      o = a.includes("0x")
                        ? a.toLowerCase()
                        : t.match.params.id,
                      s =
                        (0, i.getAddressBookEntry)(e, o) ||
                        e.metamask.identities[o],
                      { memo: u, name: d } = s || {};
                    return {
                      name: d,
                      address: s ? o : null,
                      checkSummedAddress: (0, c.toChecksumHexAddress)(o),
                      memo: u,
                      editRoute: l.CONTACT_EDIT_ROUTE,
                      listRoute: l.CONTACT_LIST_ROUTE,
                    };
                  })
                )(u.default);
                n.default = d;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/contact-list-tab/view-contact/view-contact.container.js",
      },
    ],
    [
      4896,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../components/component-library": 4381,
        "../../../components/ui/toggle-button": 4599,
        "../../../components/ui/typography/typography": 4611,
        "../../../helpers/constants/design-system": 4641,
        "../../../helpers/utils/settings-search": 4675,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("../../../components/ui/toggle-button")),
                  s = e("../../../helpers/utils/settings-search"),
                  i = e("../../../../shared/constants/metametrics"),
                  l = d(e("../../../components/ui/typography/typography")),
                  c = e("../../../components/component-library"),
                  u = e("../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class m extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      f(
                        this,
                        "settingsRefs",
                        Array(
                          (0, s.getNumberOfSettingsInSection)(
                            this.context.t,
                            this.context.t("experimental")
                          )
                        )
                          .fill(undefined)
                          .map(() => r.default.createRef())
                      );
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, s.handleSettingsRefs)(
                      e,
                      e("experimental"),
                      this.settingsRefs
                    );
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, s.handleSettingsRefs)(
                      e,
                      e("experimental"),
                      this.settingsRefs
                    );
                  }
                  renderOpenSeaEnabledToggle() {
                    const { t: e } = this.context,
                      {
                        openSeaEnabled: t,
                        setOpenSeaEnabled: n,
                        useNftDetection: a,
                        setUseNftDetection: s,
                      } = this.props;
                    return r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        "div",
                        {
                          ref: this.settingsRefs[0],
                          className: "settings-page__content-row",
                        },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          r.default.createElement(
                            "span",
                            null,
                            e("enableOpenSeaAPI")
                          ),
                          r.default.createElement(
                            "div",
                            { className: "settings-page__content-description" },
                            e("enableOpenSeaAPIDescription")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          r.default.createElement(
                            "div",
                            { className: "settings-page__content-item-col" },
                            r.default.createElement(o.default, {
                              value: t,
                              onToggle: (e) => {
                                this.context.trackEvent({
                                  category: i.MetaMetricsEventCategory.Settings,
                                  event: "Enabled/Disable OpenSea",
                                  properties: {
                                    action: "Enabled/Disable OpenSea",
                                    legacy_event: !0,
                                  },
                                }),
                                  e && a && s(!1),
                                  n(!e);
                              },
                              offLabel: e("off"),
                              onLabel: e("on"),
                            })
                          )
                        )
                      ),
                      r.default.createElement(
                        "div",
                        {
                          ref: this.settingsRefs[1],
                          className: "settings-page__content-row",
                        },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          r.default.createElement(
                            "span",
                            null,
                            e("useNftDetection")
                          ),
                          r.default.createElement(
                            "div",
                            { className: "settings-page__content-description" },
                            r.default.createElement(
                              c.Text,
                              { color: u.TextColor.textAlternative },
                              e("useNftDetectionDescription")
                            ),
                            r.default.createElement(
                              "ul",
                              {
                                className:
                                  "settings-page__content-unordered-list",
                              },
                              r.default.createElement(
                                "li",
                                null,
                                e("useNftDetectionDescriptionLine2")
                              ),
                              r.default.createElement(
                                "li",
                                null,
                                e("useNftDetectionDescriptionLine3")
                              ),
                              r.default.createElement(
                                "li",
                                null,
                                e("useNftDetectionDescriptionLine4")
                              )
                            ),
                            r.default.createElement(
                              c.Text,
                              {
                                color: u.TextColor.textAlternative,
                                paddingTop: 4,
                              },
                              e("useNftDetectionDescriptionLine5")
                            )
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          r.default.createElement(
                            "div",
                            { className: "settings-page__content-item-col" },
                            r.default.createElement(o.default, {
                              value: a,
                              onToggle: (e) => {
                                this.context.trackEvent({
                                  category: i.MetaMetricsEventCategory.Settings,
                                  event: "NFT Detected",
                                  properties: {
                                    action: "NFT Detected",
                                    legacy_event: !0,
                                  },
                                }),
                                  e || t || n(!e),
                                  s(!e);
                              },
                              offLabel: e("off"),
                              onLabel: e("on"),
                            })
                          )
                        )
                      )
                    );
                  }
                  renderTransactionSecurityCheckToggle() {
                    const { t: e } = this.context,
                      {
                        transactionSecurityCheckEnabled: t,
                        setTransactionSecurityCheckEnabled: n,
                      } = this.props;
                    return r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        l.default,
                        {
                          variant: u.TypographyVariant.H4,
                          color: u.TextColor.textAlternative,
                          marginBottom: 2,
                          fontWeight: u.FONT_WEIGHT.BOLD,
                        },
                        e("privacy")
                      ),
                      r.default.createElement(
                        "div",
                        {
                          ref: this.settingsRefs[1],
                          className:
                            "settings-page__content-row settings-page__content-row-experimental",
                        },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          r.default.createElement(
                            "span",
                            null,
                            e("transactionSecurityCheck")
                          ),
                          r.default.createElement(
                            "div",
                            { className: "settings-page__content-description" },
                            r.default.createElement(
                              l.default,
                              {
                                variant: u.TypographyVariant.H6,
                                color: u.TextColor.textAlternative,
                              },
                              e("transactionSecurityCheckDescription")
                            ),
                            r.default.createElement(
                              l.default,
                              {
                                marginTop: 3,
                                marginBottom: 1,
                                variant: u.TypographyVariant.H6,
                                color: u.TextColor.textAlternative,
                              },
                              e("selectProvider")
                            ),
                            r.default.createElement(
                              "div",
                              {
                                className:
                                  "settings-page__content-item-col settings-page__content-item-col-open-sea",
                              },
                              r.default.createElement(
                                l.default,
                                {
                                  variant: u.TypographyVariant.H5,
                                  color: u.TextColor.textDefault,
                                  fontWeight: u.FONT_WEIGHT.MEDIUM,
                                  marginBottom: 0,
                                },
                                e("openSea")
                              ),
                              r.default.createElement(o.default, {
                                value: t,
                                onToggle: (e) => {
                                  this.context.trackEvent({
                                    category:
                                      i.MetaMetricsEventCategory.Settings,
                                    event:
                                      "Enabled/Disable TransactionSecurityCheck",
                                    properties: {
                                      action:
                                        "Enabled/Disable TransactionSecurityCheck",
                                      legacy_event: !0,
                                    },
                                  }),
                                    n(!e);
                                },
                              })
                            ),
                            r.default.createElement(
                              l.default,
                              {
                                variant: u.TypographyVariant.H6,
                                color: u.TextColor.textAlternative,
                                marginTop: 0,
                              },
                              e("thisServiceIsExperimental", [
                                r.default.createElement(
                                  "a",
                                  {
                                    href: "http://opensea.io/securityproviderterms",
                                    key: "termsOfUse",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                  },
                                  e("termsOfUse")
                                ),
                              ])
                            ),
                            r.default.createElement(
                              l.default,
                              {
                                variant: u.TypographyVariant.H5,
                                color: u.TextColor.textMuted,
                                fontWeight: u.FONT_WEIGHT.MEDIUM,
                                marginTop: 2,
                              },
                              e("moreComingSoon")
                            )
                          )
                        )
                      )
                    );
                  }
                  render() {
                    return r.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      this.renderTransactionSecurityCheckToggle(),
                      this.renderOpenSeaEnabledToggle()
                    );
                  }
                }
                (n.default = m),
                  f(m, "contextTypes", {
                    t: a.default.func,
                    trackEvent: a.default.func,
                  }),
                  f(m, "propTypes", {
                    useNftDetection: a.default.bool,
                    setUseNftDetection: a.default.func,
                    setOpenSeaEnabled: a.default.func,
                    openSeaEnabled: a.default.bool,
                    transactionSecurityCheckEnabled: a.default.bool,
                    setTransactionSecurityCheckEnabled: a.default.func,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/experimental-tab/experimental-tab.component.js",
      },
    ],
    [
      4897,
      {
        "../../../selectors": 5013,
        "../../../store/actions": 5020,
        "./experimental-tab.component": 4896,
        "react-redux": 3695,
        "react-router-dom": 3715,
        redux: 3747,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r,
                  a = e("redux"),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c =
                    (r = e("./experimental-tab.component")) && r.__esModule
                      ? r
                      : { default: r };
                var u = (0, a.compose)(
                  s.withRouter,
                  (0, o.connect)(
                    (e) => ({
                      useNftDetection: (0, l.getUseNftDetection)(e),
                      openSeaEnabled: (0, l.getOpenSeaEnabled)(e),
                      transactionSecurityCheckEnabled: (0,
                      l.getIsTransactionSecurityCheckEnabled)(e),
                    }),
                    (e) => ({
                      setUseNftDetection: (t) =>
                        e((0, i.setUseNftDetection)(t)),
                      setOpenSeaEnabled: (t) => e((0, i.setOpenSeaEnabled)(t)),
                      setTransactionSecurityCheckEnabled: (t) =>
                        e((0, i.setTransactionSecurityCheckEnabled)(t)),
                    })
                  )
                )(c.default);
                n.default = u;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/experimental-tab/experimental-tab.container.js",
      },
    ],
    [
      4898,
      { "./experimental-tab.container": 4897 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./experimental-tab.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/experimental-tab/index.js",
      },
    ],
    [
      4899,
      { "./settings.container": 4928 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./settings.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/index.js" },
    ],
    [
      4900,
      { "./info-tab.component": 4901 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./info-tab.component")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/info-tab/index.js" },
    ],
    [
      4901,
      {
        "../../../../shared/constants/metametrics": 3953,
        "../../../../shared/lib/ui-utils": 3973,
        "../../../components/component-library": 4381,
        "../../../components/ui/button": 4478,
        "../../../helpers/constants/common": 4639,
        "../../../helpers/utils/build-types": 4659,
        "../../../helpers/utils/settings-search": 4675,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("../../../components/ui/button")),
                  s = e("../../../components/component-library"),
                  i = e("../../../helpers/constants/common"),
                  l = e("../../../helpers/utils/build-types"),
                  c = e("../../../helpers/utils/settings-search"),
                  u = e("../../../../shared/constants/metametrics"),
                  d = e("../../../../shared/lib/ui-utils");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
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
                class g extends r.PureComponent {
                  constructor(...e) {
                    var t;
                    super(...e),
                      m(this, "state", {
                        version:
                          (null === (t = global.platform) || void 0 === t
                            ? void 0
                            : t.getVersion()) ?? "<unknown>",
                      }),
                      m(
                        this,
                        "settingsRefs",
                        Array(
                          (0, c.getNumberOfSettingsInSection)(
                            this.context.t,
                            this.context.t("about")
                          )
                        )
                          .fill(undefined)
                          .map(() => r.default.createRef())
                      );
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, c.handleSettingsRefs)(e, e("about"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, c.handleSettingsRefs)(e, e("about"), this.settingsRefs);
                  }
                  renderInfoLinks() {
                    const { t: e } = this.context;
                    let t, n;
                    return (
                      (t = "https://metamask.io/privacy.html"),
                      (n = "https://metamask.io/"),
                      r.default.createElement(
                        "div",
                        {
                          className:
                            "settings-page__content-item settings-page__content-item--without-height",
                        },
                        r.default.createElement(
                          "div",
                          {
                            ref: this.settingsRefs[1],
                            className: "info-tab__link-header",
                          },
                          e("links")
                        ),
                        r.default.createElement(
                          "div",
                          {
                            ref: this.settingsRefs[2],
                            className: "info-tab__link-item",
                          },
                          r.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: "https://metamask.io/privacy.html",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                            },
                            e("privacyMsg")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          {
                            ref: this.settingsRefs[3],
                            className: "info-tab__link-item",
                          },
                          r.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: "https://metamask.io/terms.html",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                            },
                            e("terms")
                          )
                        ),
                        (0, l.isBeta)()
                          ? r.default.createElement(
                              "div",
                              {
                                ref: this.settingsRefs[8],
                                className: "info-tab__link-item",
                              },
                              r.default.createElement(
                                o.default,
                                {
                                  type: "link",
                                  href: "https://metamask.io/beta-terms.html",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "info-tab__link-text",
                                },
                                e("betaTerms"),
                                r.default.createElement(s.Tag, {
                                  label: e("new"),
                                  className: "info-tab__tag",
                                })
                              )
                            )
                          : null,
                        r.default.createElement(
                          "div",
                          {
                            ref: this.settingsRefs[4],
                            className: "info-tab__link-item",
                          },
                          r.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: "https://metamask.io/attributions.html",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                            },
                            e("attributions")
                          )
                        ),
                        r.default.createElement("hr", {
                          className: "info-tab__separator",
                        }),
                        r.default.createElement(
                          "div",
                          {
                            ref: this.settingsRefs[5],
                            className: "info-tab__link-item",
                          },
                          r.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: d.SUPPORT_LINK,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                              onClick: () => {
                                this.context.trackEvent(
                                  {
                                    category:
                                      u.MetaMetricsEventCategory.Settings,
                                    event:
                                      u.MetaMetricsEventName.SupportLinkClicked,
                                    properties: { url: d.SUPPORT_LINK },
                                  },
                                  {
                                    contextPropsIntoEventProperties: [
                                      u.MetaMetricsContextProp.PageTitle,
                                    ],
                                  }
                                );
                              },
                            },
                            e("supportCenter")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          {
                            ref: this.settingsRefs[6],
                            className: "info-tab__link-item",
                          },
                          r.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: "https://metamask.io/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                            },
                            e("visitWebSite")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          {
                            ref: this.settingsRefs[7],
                            className: "info-tab__link-item",
                          },
                          r.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: i.SUPPORT_REQUEST_LINK,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                              onClick: () => {
                                this.context.trackEvent(
                                  {
                                    category:
                                      u.MetaMetricsEventCategory.Settings,
                                    event:
                                      u.MetaMetricsEventName.SupportLinkClicked,
                                    properties: { url: i.SUPPORT_REQUEST_LINK },
                                  },
                                  {
                                    contextPropsIntoEventProperties: [
                                      u.MetaMetricsContextProp.PageTitle,
                                    ],
                                  }
                                );
                              },
                            },
                            e("contactUs")
                          )
                        )
                      )
                    );
                  }
                  render() {
                    const { t: e } = this.context;
                    return r.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-row" },
                        r.default.createElement(
                          "div",
                          {
                            className:
                              "settings-page__content-item settings-page__content-item--without-height",
                          },
                          r.default.createElement(
                            "div",
                            { className: "info-tab__item" },
                            r.default.createElement(
                              "div",
                              {
                                ref: this.settingsRefs[0],
                                className: "info-tab__version-header",
                              },
                              (0, l.isBeta)()
                                ? e("betaMetamaskVersion")
                                : e("metamaskVersion")
                            ),
                            r.default.createElement(
                              "div",
                              { className: "info-tab__version-number" },
                              this.state.version
                            )
                          ),
                          r.default.createElement(
                            "div",
                            { className: "info-tab__item" },
                            r.default.createElement(
                              "div",
                              { className: "info-tab__about" },
                              e("builtAroundTheWorld")
                            )
                          )
                        ),
                        this.renderInfoLinks()
                      ),
                      r.default.createElement(
                        "div",
                        { className: "info-tab__logo-wrapper" },
                        r.default.createElement("img", {
                          src: "./images/logo/metamask-fox.svg",
                          className: "info-tab__logo",
                          alt: "MetaMask Logo",
                        })
                      )
                    );
                  }
                }
                (n.default = g),
                  m(g, "contextTypes", {
                    t: a.default.func,
                    trackEvent: a.default.func,
                  });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/info-tab/info-tab.component.js",
      },
    ],
    [
      4902,
      {
        "../../../../components/component-library": 4381,
        "../../../../components/ui/icon/search-icon": 4525,
        "../../../../components/ui/text-field": 4595,
        "../../../../contexts/i18n": 4618,
        "@material-ui/core/InputAdornment": 720,
        "fuse.js": 2905,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = f);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("fuse.js")),
                  s = d(e("@material-ui/core/InputAdornment")),
                  i = d(e("../../../../components/ui/text-field")),
                  l = e("../../../../contexts/i18n"),
                  c = d(e("../../../../components/ui/icon/search-icon")),
                  u = e("../../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f({
                  onSearch: e,
                  error: t,
                  networksList: n,
                  searchQueryInput: a,
                }) {
                  const d = (0, r.useContext)(l.I18nContext),
                    [p, f] = (0, r.useState)("var(--color-icon-muted)"),
                    m = Object.values(n),
                    g = new o.default(m, {
                      shouldSort: !0,
                      threshold: 0.2,
                      location: 0,
                      distance: 100,
                      maxPatternLength: 32,
                      minMatchCharLength: 1,
                      keys: ["label", "labelKey"],
                    }),
                    h = async (t) => {
                      f(
                        "" === t
                          ? "var(--color-icon-muted)"
                          : "var(--color-icon-alternative)"
                      );
                      const n = g.search(t),
                        r = t ? [...n] : m;
                      await e({ searchQuery: t, results: r });
                    };
                  return r.default.createElement(i.default, {
                    id: "search-networks",
                    "data-testid": "search-networks",
                    placeholder: d("customContentSearch"),
                    type: "text",
                    value: a,
                    onChange: (e) => h(e.target.value),
                    error: t,
                    fullWidth: !0,
                    autoFocus: !0,
                    autoComplete: "off",
                    classes: {
                      inputRoot:
                        "networks-tab__networks-list__custom-search-network",
                    },
                    startAdornment: r.default.createElement(
                      s.default,
                      { position: "start" },
                      r.default.createElement(c.default, { color: p })
                    ),
                    endAdornment: r.default.createElement(
                      r.default.Fragment,
                      null,
                      a &&
                        r.default.createElement(
                          s.default,
                          {
                            className: "imageclosectn",
                            position: "end",
                            onClick: () => h(""),
                          },
                          r.default.createElement(u.Icon, {
                            name: u.IconName.Close,
                            className: "networks-tab__imageclose",
                          })
                        )
                    ),
                  });
                }
                f.propTypes = {
                  onSearch: a.default.func,
                  error: a.default.string,
                  networksList: a.default.array,
                  searchQueryInput: a.default.string,
                };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/custom-content-search/custom-content-search.js",
      },
    ],
    [
      4903,
      { "./custom-content-search": 4902 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./custom-content-search")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/custom-content-search/index.js",
      },
    ],
    [
      4904,
      { "./networks-tab": 4916 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./networks-tab")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/index.js" },
    ],
    [
      4905,
      { "./networks-form": 4906 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./networks-form")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-form/index.js",
      },
    ],
    [
      4906,
      {
        "../../../../../shared/constants/metametrics": 3953,
        "../../../../../shared/constants/network": 3954,
        "../../../../../shared/lib/fetch-with-cache": 3966,
        "../../../../../shared/modules/conversion.utils": 3978,
        "../../../../../shared/modules/network.utils": 3985,
        "../../../../../shared/modules/rpc.utils": 3988,
        "../../../../components/ui/actionable-message": 4471,
        "../../../../components/ui/button": 4478,
        "../../../../components/ui/form-field": 4508,
        "../../../../contexts/metametrics": 4619,
        "../../../../helpers/utils/i18n-helper": 4666,
        "../../../../hooks/useI18nContext": 4701,
        "../../../../hooks/usePrevious": 4705,
        "../../../../store/actions": 5020,
        classnames: 2227,
        lodash: 3442,
        loglevel: 3454,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
        "valid-url": 3910,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = O(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = A(e("prop-types")),
                  s = A(e("valid-url")),
                  i = A(e("loglevel")),
                  l = A(e("classnames")),
                  c = e("lodash"),
                  u = e("../../../../hooks/useI18nContext"),
                  d = e("../../../../../shared/modules/network.utils"),
                  p = e("../../../../../shared/modules/rpc.utils"),
                  f = A(e("../../../../components/ui/actionable-message")),
                  m = A(e("../../../../components/ui/button")),
                  g = A(e("../../../../components/ui/form-field")),
                  h = e("../../../../store/actions"),
                  E = A(e("../../../../../shared/lib/fetch-with-cache")),
                  y = e("../../../../hooks/usePrevious"),
                  b = e("../../../../../shared/constants/metametrics"),
                  v = e("../../../../../shared/constants/network"),
                  k = e("../../../../../shared/modules/conversion.utils"),
                  w = e("../../../../contexts/metametrics"),
                  T = e("../../../../helpers/utils/i18n-helper");
                function A(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function O(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (O = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const C = (e) =>
                    e && "string" == typeof e && e.startsWith("0x")
                      ? parseInt(e, 16).toString(10)
                      : e,
                  N = (e) => {
                    const t = `http://${e}`;
                    return s.default.isWebUri(t) && !e.match(/^https?:\/\/$/u);
                  },
                  P = ({
                    addNewNetwork: e,
                    restrictHeight: t,
                    isCurrentRpcTarget: n,
                    networksToRender: o,
                    selectedNetwork: A,
                    cancelCallback: O,
                    submitCallback: P,
                  }) => {
                    var I, R, S, M, x, D;
                    const j = (0, u.useI18nContext)(),
                      B = (0, a.useDispatch)(),
                      { label: L, labelKey: _, viewOnly: U, rpcPrefs: F } = A,
                      Q = L || (_ && j((0, T.getNetworkLabelKey)(_))),
                      [G, H] = (0, r.useState)(Q || ""),
                      [W, K] = (0, r.useState)(
                        (null == A ? void 0 : A.rpcUrl) || ""
                      ),
                      [Y, z] = (0, r.useState)(
                        (null == A ? void 0 : A.chainId) || ""
                      ),
                      [Z, J] = (0, r.useState)(
                        (null == A ? void 0 : A.ticker) || ""
                      ),
                      [X, q] = (0, r.useState)(
                        (null == A ? void 0 : A.blockExplorerUrl) || ""
                      ),
                      [V, $] = (0, r.useState)({}),
                      [ee, te] = (0, r.useState)({}),
                      [ne, re] = (0, r.useState)(!1),
                      ae = v.FEATURED_RPCS.some(
                        (e) => Number(e.chainId) === Number(Y)
                      ),
                      [oe, se] = (0, r.useState)(Boolean(e)),
                      [ie, le] = (0, r.useState)(A),
                      ce = (0, r.useContext)(w.MetaMetricsContext),
                      ue = (0, r.useCallback)(() => {
                        H(Q || ""),
                          K(A.rpcUrl),
                          z(C(A.chainId)),
                          J(null == A ? void 0 : A.ticker),
                          q(null == A ? void 0 : A.blockExplorerUrl),
                          $({}),
                          te({}),
                          re(!1),
                          se(!1),
                          le(A);
                      }, [A, Q]),
                      de = (0, r.useRef)(),
                      pe = (0, r.useRef)(),
                      fe = (0, r.useRef)(),
                      me = (0, r.useRef)(),
                      ge = (0, r.useRef)(),
                      he = (0, r.useRef)();
                    (0, r.useEffect)(() => {
                      !de.current && e
                        ? (H(""), K(""), z(""), J(""), q(""), $({}), re(!1))
                        : (pe.current === Q &&
                            me.current === A.rpcUrl &&
                            fe.current === A.chainId &&
                            ge.current === A.ticker &&
                            he.current === A.blockExplorerUrl) ||
                          (oe && (0, c.isEqual)(A, ie)) ||
                          ue(A);
                    }, [A, Q, e, ie, ue, oe]),
                      (0, r.useEffect)(
                        () => () => {
                          H(""),
                            K(""),
                            z(""),
                            J(""),
                            q(""),
                            $({}),
                            B((0, h.setSelectedNetworkConfigurationId)(""));
                        },
                        [H, K, z, J, q, $, B]
                      );
                    const Ee = (0, r.useCallback)(
                        (e) => {
                          if (!s.default.isWebUri(e) && "" !== e) {
                            let t, n;
                            return (
                              N(e)
                                ? ((t = "urlErrorMsg"), (n = j("urlErrorMsg")))
                                : ((t = "invalidBlockExplorerURL"),
                                  (n = j("invalidBlockExplorerURL"))),
                              { key: t, msg: n }
                            );
                          }
                          return null;
                        },
                        [j]
                      ),
                      ye = (0, r.useCallback)(
                        async (e = "") => {
                          const t = e.trim();
                          let n = "",
                            r = "",
                            a = "",
                            s = "",
                            l = 10,
                            c = t;
                          if (!c.startsWith("0x"))
                            try {
                              c = `0x${(0, k.decimalToHex)(c)}`;
                            } catch (e) {
                              return {
                                error: {
                                  key: "invalidHexNumber",
                                  msg: j("invalidHexNumber"),
                                },
                              };
                            }
                          const [u] = o.filter(
                            (e) => e.chainId === c && e.rpcUrl !== W
                          );
                          if ("" === t) return null;
                          let f, m;
                          u
                            ? ((a = "chainIdExistsErrorMsg"),
                              (s = j("chainIdExistsErrorMsg", [
                                u.label ?? u.labelKey,
                              ])))
                            : t.startsWith("0x")
                            ? ((l = 16),
                              /^0x[0-9a-f]+$/iu.test(t)
                                ? (0, d.isPrefixedFormattedHexString)(t) ||
                                  (r = j("invalidHexNumberLeadingZeros"))
                                : ((n = "invalidHexNumber"),
                                  (r = j("invalidHexNumber"))))
                            : /^[0-9]+$/u.test(t)
                            ? t.startsWith("0")
                              ? ((n = "invalidNumberLeadingZeros"),
                                (r = j("invalidNumberLeadingZeros")))
                              : (0, d.isSafeChainId)(parseInt(t, l)) ||
                                ((n = "invalidChainIdTooBig"),
                                (r = j("invalidChainIdTooBig")))
                            : ((n = "invalidNumber"), (r = j("invalidNumber")));
                          try {
                            f = await (0, p.jsonRpcRequest)(W, "eth_chainId");
                          } catch (e) {
                            i.default.warn(
                              "Failed to fetch the chainId from the endpoint.",
                              e
                            ),
                              (m = e);
                          }
                          if (W && t)
                            if (m || "string" != typeof f)
                              (n = "failedToFetchChainId"),
                                (r = j("failedToFetchChainId"));
                            else if (c !== f) {
                              if (!t.startsWith("0x"))
                                try {
                                  f = parseInt(f, 16).toString(10);
                                } catch (e) {
                                  i.default.warn(
                                    "Failed to convert endpoint chain ID to decimal",
                                    f
                                  );
                                }
                              (n = "endpointReturnedDifferentChainId"),
                                (r = j("endpointReturnedDifferentChainId", [
                                  f.length <= 12 ? f : `${f.slice(0, 9)}...`,
                                ]));
                            }
                          return n
                            ? { error: { key: n, msg: r } }
                            : a
                            ? { warning: { key: a, msg: s } }
                            : null;
                        },
                        [W, o, j]
                      ),
                      be = (0, r.useCallback)(
                        async (e, t) => {
                          let n, r, a, o;
                          if (!e || !t) return null;
                          try {
                            a =
                              (await (0, E.default)(
                                "https://chainid.network/chains.json"
                              )) || [];
                          } catch (e) {
                            i.default.warn(
                              "Failed to fetch the chainList from chainid.network",
                              e
                            ),
                              (o = e);
                          }
                          if (o)
                            (n = "failedToFetchTickerSymbolData"),
                              (r = j("failedToFetchTickerSymbolData"));
                          else {
                            var s;
                            const o =
                              null === (s = a) || void 0 === s
                                ? void 0
                                : s.find((t) => t.chainId.toString() === e);
                            if (o === undefined)
                              (n = "failedToFetchTickerSymbolData"),
                                (r = j("failedToFetchTickerSymbolData"));
                            else {
                              var l;
                              const a =
                                null === (l = o.nativeCurrency) || void 0 === l
                                  ? void 0
                                  : l.symbol;
                              a !== t &&
                                ((n = "chainListReturnedDifferentTickerSymbol"),
                                (r = j(
                                  "chainListReturnedDifferentTickerSymbol",
                                  [e, a]
                                )));
                            }
                          }
                          return n ? { key: n, msg: r } : null;
                        },
                        [j]
                      ),
                      ve = (0, r.useCallback)(
                        (e) => {
                          const t = s.default.isWebUri(e),
                            [{ rpcUrl: n = null, label: r, labelKey: a } = {}] =
                              o.filter((t) => t.rpcUrl === e),
                            { rpcUrl: i } = A;
                          if (!t && "" !== e) {
                            let t, n;
                            return (
                              N(e)
                                ? ((t = "urlErrorMsg"), (n = j("urlErrorMsg")))
                                : ((t = "invalidRPC"), (n = j("invalidRPC"))),
                              { key: t, msg: n }
                            );
                          }
                          return n && n !== i
                            ? {
                                key: "urlExistsErrorMsg",
                                msg: j("urlExistsErrorMsg", [r ?? a]),
                              }
                            : null;
                        },
                        [A, o, j]
                      ),
                      ke = (0, y.usePrevious)(W),
                      we = (0, y.usePrevious)(Y),
                      Te = (0, y.usePrevious)(Z),
                      Ae = (0, y.usePrevious)(X);
                    (0, r.useEffect)(() => {
                      U ||
                        (ke === W && we === Y && Te === Z && Ae === X) ||
                        (async function () {
                          const { error: e, warning: t } = (await ye(Y)) || {},
                            n = await be(Y, Z),
                            r = Ee(X),
                            a = ve(W);
                          $({
                            ...V,
                            blockExplorerUrl: r,
                            rpcUrl: a,
                            chainId: e,
                          }),
                            te({ ...ee, chainId: t, ticker: n });
                        })();
                    }, [
                      V,
                      ee,
                      W,
                      Y,
                      Z,
                      X,
                      U,
                      L,
                      ke,
                      we,
                      Te,
                      Ae,
                      Ee,
                      ye,
                      be,
                      ve,
                    ]);
                    const Oe = !n && !U && !e,
                      Ce = (() => {
                        const e =
                          "string" == typeof A.chainId &&
                          A.chainId.toLowerCase().startsWith("0x") &&
                          Y === C(A.chainId);
                        return (
                          W === A.rpcUrl &&
                          e &&
                          Z === A.ticker &&
                          G === Q &&
                          X === A.blockExplorerUrl
                        );
                      })(),
                      Ne = (null == A ? void 0 : A.rpcUrl) && V.chainId && ae,
                      Pe =
                        Object.keys(V).some((e) => {
                          const t = V[e];
                          return (
                            ("chainId" !== e ||
                              "chainIdExistsErrorMsg" !==
                                (null == t ? void 0 : t.key)) &&
                            (null == t ? void 0 : t.key) &&
                            (null == t ? void 0 : t.msg)
                          );
                        }) ||
                        ne ||
                        Ce ||
                        Ne ||
                        !W ||
                        !Y ||
                        !Z;
                    return r.default.createElement(
                      "div",
                      {
                        className: (0, l.default)({
                          "networks-tab__network-form": !e,
                          "networks-tab__add-network-form": e,
                          "networks-tab__restrict-height": t,
                        }),
                      },
                      e
                        ? r.default.createElement(f.default, {
                            type: "warning",
                            message: j("onlyAddTrustedNetworks"),
                            iconFillColor: "var(--color-warning-default)",
                            useIcon: !0,
                            withRightButton: !0,
                            className: "networks-tab__add-network-form__alert",
                          })
                        : null,
                      r.default.createElement(
                        "div",
                        {
                          className: (0, l.default)({
                            "networks-tab__network-form-body": !e,
                            "networks-tab__network-form-body__view-only": U,
                            "networks-tab__add-network-form-body": e,
                          }),
                        },
                        r.default.createElement(g.default, {
                          autoFocus: !0,
                          error:
                            (null === (I = V.networkName) || void 0 === I
                              ? void 0
                              : I.msg) || "",
                          onChange: (e) => {
                            se(!0), H(e);
                          },
                          titleText: j("networkName"),
                          value: G,
                          disabled: U,
                        }),
                        r.default.createElement(g.default, {
                          error:
                            (null === (R = V.rpcUrl) || void 0 === R
                              ? void 0
                              : R.msg) || "",
                          onChange: (e) => {
                            se(!0), K(e);
                          },
                          titleText: j("rpcUrl"),
                          value:
                            null != W && W.includes(`/v3/${v.infuraProjectId}`)
                              ? W.replace(`/v3/${v.infuraProjectId}`, "")
                              : W,
                          disabled: U,
                        }),
                        r.default.createElement(g.default, {
                          warning:
                            (null === (S = ee.chainId) || void 0 === S
                              ? void 0
                              : S.msg) || "",
                          error:
                            (null === (M = V.chainId) || void 0 === M
                              ? void 0
                              : M.msg) || "",
                          onChange: (e) => {
                            se(!0), z(e);
                          },
                          titleText: j("chainId"),
                          value: Y,
                          disabled: U,
                          tooltipText: U
                            ? null
                            : j("networkSettingsChainIdDescription"),
                        }),
                        r.default.createElement(g.default, {
                          warning:
                            (null === (x = ee.ticker) || void 0 === x
                              ? void 0
                              : x.msg) || "",
                          onChange: (e) => {
                            se(!0), J(e);
                          },
                          titleText: j("currencySymbol"),
                          value: Z,
                          disabled: U,
                        }),
                        r.default.createElement(g.default, {
                          error:
                            (null === (D = V.blockExplorerUrl) || void 0 === D
                              ? void 0
                              : D.msg) || "",
                          onChange: (e) => {
                            se(!0), q(e);
                          },
                          titleText: j("blockExplorerUrl"),
                          titleUnit: j("optionalWithParanthesis"),
                          value: X,
                          disabled: U,
                          autoFocus:
                            "blockExplorerUrl" ===
                            window.location.hash.split("#")[2],
                        })
                      ),
                      r.default.createElement(
                        "div",
                        {
                          className: (0, l.default)({
                            "networks-tab__network-form-footer": !e,
                            "networks-tab__add-network-form-footer": e,
                          }),
                        },
                        !U &&
                          r.default.createElement(
                            r.default.Fragment,
                            null,
                            Oe &&
                              r.default.createElement(
                                m.default,
                                {
                                  type: "danger",
                                  onClick: () => {
                                    B(
                                      (0, h.showModal)({
                                        name: "CONFIRM_DELETE_NETWORK",
                                        target: A.networkConfigurationId,
                                        onConfirm: () => {
                                          ue(),
                                            B(
                                              (0,
                                              h.setSelectedNetworkConfigurationId)(
                                                ""
                                              )
                                            );
                                        },
                                      })
                                    );
                                  },
                                },
                                j("delete")
                              ),
                            r.default.createElement(
                              m.default,
                              {
                                type: "secondary",
                                onClick: () => {
                                  e
                                    ? (B(
                                        (0,
                                        h.setSelectedNetworkConfigurationId)("")
                                      ),
                                      null == O || O())
                                    : ue();
                                },
                                disabled: Ce,
                              },
                              j("cancel")
                            ),
                            r.default.createElement(
                              m.default,
                              {
                                type: "primary",
                                disabled: Pe,
                                onClick: async () => {
                                  re(!0);
                                  try {
                                    const t = ((e) => {
                                      let t = e;
                                      return (
                                        e.startsWith("0x") ||
                                          (t = `0x${parseInt(e, 10).toString(
                                            16
                                          )}`),
                                        t
                                      );
                                    })(Y.trim().toLowerCase());
                                    let n;
                                    A.rpcUrl && W !== A.rpcUrl
                                      ? await B(
                                          (0, h.editAndSetNetworkConfiguration)(
                                            {
                                              rpcUrl: W,
                                              ticker: Z,
                                              networkConfigurationId:
                                                A.networkConfigurationId,
                                              chainId: t,
                                              nickname: G,
                                              rpcPrefs: {
                                                ...F,
                                                blockExplorerUrl:
                                                  X ||
                                                  (null == F
                                                    ? void 0
                                                    : F.blockExplorerUrl),
                                              },
                                            },
                                            {
                                              source:
                                                b.MetaMetricsNetworkEventSource
                                                  .CustomNetworkForm,
                                            }
                                          )
                                        )
                                      : (n = await B(
                                          (0, h.upsertNetworkConfiguration)(
                                            {
                                              rpcUrl: W,
                                              ticker: Z,
                                              chainId: t,
                                              nickname: G,
                                              rpcPrefs: {
                                                ...F,
                                                blockExplorerUrl:
                                                  X ||
                                                  (null == F
                                                    ? void 0
                                                    : F.blockExplorerUrl),
                                              },
                                            },
                                            {
                                              setActive: !0,
                                              source:
                                                b.MetaMetricsNetworkEventSource
                                                  .CustomNetworkForm,
                                            }
                                          )
                                        )),
                                      e &&
                                        (B(
                                          (0, h.setNewNetworkAdded)({
                                            nickname: G,
                                            networkConfigurationId: n,
                                          })
                                        ),
                                        ce({
                                          event:
                                            b.MetaMetricsEventName
                                              .CustomNetworkAdded,
                                          category:
                                            b.MetaMetricsEventCategory.Network,
                                          properties: {
                                            block_explorer_url: X,
                                            chain_id: t,
                                            network_name: G,
                                            source_connection_method:
                                              b.MetaMetricsNetworkEventSource
                                                .CustomNetworkForm,
                                            token_symbol: Z,
                                          },
                                        }),
                                        null == P || P());
                                  } catch (e) {
                                    throw (re(!1), e);
                                  }
                                },
                              },
                              j("save")
                            )
                          )
                      )
                    );
                  };
                (P.propTypes = {
                  addNewNetwork: o.default.bool,
                  isCurrentRpcTarget: o.default.bool,
                  networksToRender: o.default.array.isRequired,
                  selectedNetwork: o.default.object,
                  cancelCallback: o.default.func,
                  submitCallback: o.default.func,
                  restrictHeight: o.default.bool,
                }),
                  (P.defaultProps = { selectedNetwork: {} });
                var I = P;
                n.default = I;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-form/networks-form.js",
      },
    ],
    [
      4907,
      { "./networks-list-item": 4908 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./networks-list-item")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-list-item/index.js",
      },
    ],
    [
      4908,
      {
        "../../../../../app/scripts/lib/util": 80,
        "../../../../../shared/constants/app": 3946,
        "../../../../../shared/constants/network": 3954,
        "../../../../components/component-library": 4381,
        "../../../../components/ui/identicon": 4534,
        "../../../../components/ui/url-icon": 4615,
        "../../../../ducks/metamask/metamask": 4633,
        "../../../../helpers/constants/design-system": 4641,
        "../../../../helpers/constants/routes": 4645,
        "../../../../helpers/utils/i18n-helper": 4666,
        "../../../../helpers/utils/settings-search": 4675,
        "../../../../hooks/useI18nContext": 4701,
        "../../../../store/actions": 5020,
        classnames: 2227,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = k(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = v(e("prop-types")),
                  o = v(e("classnames")),
                  s = e("react-redux"),
                  i = e("../../../../hooks/useI18nContext"),
                  l = e("../../../../../shared/constants/network"),
                  c = e("../../../../helpers/constants/routes"),
                  u = e("../../../../store/actions"),
                  d = e("../../../../../app/scripts/lib/util"),
                  p = e("../../../../../shared/constants/app"),
                  f = e("../../../../ducks/metamask/metamask"),
                  m = v(e("../../../../components/ui/identicon")),
                  g = v(e("../../../../components/ui/url-icon")),
                  h = e("../../../../helpers/utils/settings-search"),
                  E = e("../../../../components/component-library"),
                  y = e("../../../../helpers/constants/design-system"),
                  b = e("../../../../helpers/utils/i18n-helper");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function k(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (k = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const w = ({
                  network: e,
                  networkIsSelected: t,
                  selectedNetworkConfigurationId: n,
                  setSearchQuery: a,
                  setSearchedNetworks: v,
                }) => {
                  const k = (0, i.useI18nContext)(),
                    w = (0, s.useDispatch)(),
                    T =
                      (0, d.getEnvironmentType)() ===
                      p.ENVIRONMENT_TYPE_FULLSCREEN,
                    A = (0, s.useSelector)(f.getProviderConfig),
                    {
                      label: O,
                      labelKey: C,
                      networkConfigurationId: N,
                      rpcUrl: P,
                      providerType: I,
                    } = e,
                    R = n && n === N,
                    S = P === A.rpcUrl,
                    M = A.type !== l.NETWORK_TYPES.RPC && I === A.type,
                    x = R || (!t && (S || M)),
                    D = S || M,
                    j = (0, r.useRef)();
                  return (
                    (0, r.useEffect)(() => {
                      (0, h.handleSettingsRefs)(k, k("networks"), j);
                    }, [j, k]),
                    r.default.createElement(
                      "div",
                      {
                        ref: j,
                        key: `settings-network-list-item:${N}`,
                        className: "networks-tab__networks-list-item",
                        onClick: () => {
                          a(""),
                            v([]),
                            w((0, u.setSelectedNetworkConfigurationId)(N)),
                            T ||
                              global.platform.openExtensionInBrowser(
                                c.NETWORKS_ROUTE
                              );
                        },
                      },
                      D
                        ? r.default.createElement(E.Icon, {
                            name: E.IconName.Check,
                            color: y.IconColor.successDefault,
                          })
                        : r.default.createElement(E.Icon, {
                            name: E.IconName.Check,
                            color: y.IconColor.transparent,
                          }),
                      e.chainId in l.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP
                        ? r.default.createElement(m.default, {
                            className: "networks-tab__content__custom-image",
                            diameter: 24,
                            image:
                              l.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[e.chainId],
                            imageBorder: !0,
                          })
                        : !e.isATestNetwork &&
                            r.default.createElement(g.default, {
                              className:
                                "networks-tab__content__icon-with-fallback",
                              fallbackClassName:
                                "networks-tab__content__icon-with-fallback",
                              name: O || (0, b.getNetworkLabelKey)(C),
                            }),
                      e.isATestNetwork &&
                        e.chainId !== l.CHAIN_IDS.LINEA_GOERLI &&
                        r.default.createElement(g.default, {
                          name: O || (0, b.getNetworkLabelKey)(C),
                          fallbackClassName: (0, o.default)(
                            "networks-tab__content__icon-with-fallback",
                            {
                              [`networks-tab__content__icon-with-fallback--color-${C}`]:
                                !0,
                            }
                          ),
                        }),
                      r.default.createElement(
                        "div",
                        {
                          className: (0, o.default)(
                            "networks-tab__networks-list-name",
                            {
                              "networks-tab__networks-list-name--selected": x,
                              "networks-tab__networks-list-name--disabled":
                                I !== l.NETWORK_TYPES.RPC && !x,
                            }
                          ),
                        },
                        O || k((0, b.getNetworkLabelKey)(C)),
                        I !== l.NETWORK_TYPES.RPC &&
                          r.default.createElement(E.Icon, {
                            name: E.IconName.Lock,
                            color: y.IconColor.iconMuted,
                            size: E.IconSize.Inherit,
                            marginInlineStart: 2,
                          })
                      )
                    )
                  );
                };
                w.propTypes = {
                  network: a.default.object.isRequired,
                  networkIsSelected: a.default.bool,
                  selectedNetworkConfigurationId: a.default.string,
                  setSearchQuery: a.default.func,
                  setSearchedNetworks: a.default.func,
                };
                var T = w;
                n.default = T;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-list-item/networks-list-item.js",
      },
    ],
    [
      4909,
      { "./networks-list": 4910 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./networks-list")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-list/index.js",
      },
    ],
    [
      4910,
      {
        "../../../../components/component-library": 4381,
        "../../../../helpers/constants/design-system": 4641,
        "../../../../hooks/useI18nContext": 4701,
        "../custom-content-search": 4903,
        "../networks-list-item": 4907,
        classnames: 2227,
        "prop-types": 3555,
        react: 3730,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  s = e("../../../../hooks/useI18nContext"),
                  i = d(e("../custom-content-search")),
                  l = e("../../../../helpers/constants/design-system"),
                  c = d(e("../networks-list-item")),
                  u = e("../../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const f = ({
                  networkIsSelected: e,
                  networksToRender: t,
                  networkDefaultedToProvider: n,
                  selectedNetworkConfigurationId: a,
                }) => {
                  const d = (0, s.useI18nContext)(),
                    [p, f] = (0, r.useState)([]),
                    [m, g] = (0, r.useState)(""),
                    h = 0 === p.length && "" === m ? t : p,
                    E = h.filter((e) => !e.isATestNetwork),
                    y = h.filter((e) => e.isATestNetwork);
                  return r.default.createElement(
                    "div",
                    {
                      className: (0, o.default)("networks-tab__networks-list", {
                        "networks-tab__networks-list--selection": e && !n,
                      }),
                    },
                    r.default.createElement(i.default, {
                      onSearch: ({ searchQuery: e = "", results: t = [] }) => {
                        f(t), g(e);
                      },
                      error:
                        0 === h.length
                          ? d("settingsSearchMatchingNotFound")
                          : null,
                      networksList: t,
                      searchQueryInput: m,
                    }),
                    E.map((t, n) =>
                      r.default.createElement(c.default, {
                        key: `settings-network-list:${t.rpcUrl}`,
                        network: t,
                        networkIsSelected: e,
                        selectedNetworkConfigurationId: a,
                        setSearchQuery: g,
                        setSearchedNetworks: f,
                      })
                    ),
                    "" === m &&
                      r.default.createElement(
                        u.Text,
                        {
                          variant: l.TextVariant.bodySm,
                          as: "h6",
                          marginTop: 4,
                          color: l.Color.textAlternative,
                          className: "networks-tab__networks-list__label",
                        },
                        d("testNetworks")
                      ),
                    y.map((t, n) =>
                      r.default.createElement(c.default, {
                        key: `settings-network-list:${t.rpcUrl}`,
                        network: t,
                        networkIsSelected: e,
                        selectedNetworkConfigurationId: a,
                        setSearchQuery: g,
                        setSearchedNetworks: f,
                      })
                    )
                  );
                };
                f.propTypes = {
                  networkDefaultedToProvider: a.default.bool,
                  networkIsSelected: a.default.bool,
                  networksToRender: a.default.arrayOf(a.default.object)
                    .isRequired,
                  selectedNetworkConfigurationId: a.default.string,
                };
                var m = f;
                n.default = m;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-list/networks-list.js",
      },
    ],
    [
      4911,
      { "./networks-tab-content": 4912 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./networks-tab-content")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-tab-content/index.js",
      },
    ],
    [
      4912,
      {
        "../../../../ducks/metamask/metamask": 4633,
        "../../../../helpers/constants/routes": 4645,
        "../networks-form": 4905,
        "../networks-list": 4909,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = e("react-redux"),
                  s = e("react-router-dom"),
                  i = d(e("../networks-form")),
                  l = d(e("../networks-list")),
                  c = e("../../../../ducks/metamask/metamask"),
                  u = e("../../../../helpers/constants/routes");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({
                  networkDefaultedToProvider: e,
                  networkIsSelected: t,
                  networksToRender: n,
                  selectedNetwork: a,
                  shouldRenderNetworkForm: d,
                }) => {
                  const p = (0, o.useSelector)(c.getProviderConfig),
                    f = (0, s.useHistory)();
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(l.default, {
                      networkDefaultedToProvider: e,
                      networkIsSelected: t,
                      networksToRender: n,
                      selectedNetworkConfigurationId: a.networkConfigurationId,
                    }),
                    d
                      ? r.default.createElement(i.default, {
                          isCurrentRpcTarget: p.rpcUrl === a.rpcUrl,
                          networksToRender: n,
                          selectedNetwork: a,
                          submitCallback: () => f.push(u.DEFAULT_ROUTE),
                          cancelCallback: () => f.push(u.NETWORKS_ROUTE),
                        })
                      : null
                  );
                };
                p.propTypes = {
                  networkDefaultedToProvider: a.default.bool,
                  networkIsSelected: a.default.bool,
                  networksToRender: a.default.arrayOf(a.default.object)
                    .isRequired,
                  selectedNetwork: a.default.object,
                  shouldRenderNetworkForm: a.default.bool.isRequired,
                };
                var f = p;
                n.default = f;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-tab-content/networks-tab-content.js",
      },
    ],
    [
      4913,
      { "./networks-tab-subheader": 4914 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./networks-tab-subheader")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-tab-subheader/index.js",
      },
    ],
    [
      4914,
      {
        "../../../../components/ui/button": 4478,
        "../../../../helpers/constants/routes": 4645,
        "../../../../hooks/useI18nContext": 4701,
        "prop-types": 3555,
        react: 3730,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("react-router-dom"),
                  s = e("../../../../hooks/useI18nContext"),
                  i = e("../../../../helpers/constants/routes"),
                  l = c(e("../../../../components/ui/button"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ addNewNetwork: e }) => {
                  const t = (0, s.useI18nContext)(),
                    n = (0, o.useHistory)();
                  return e
                    ? r.default.createElement(
                        "div",
                        { className: "networks-tab__subheader" },
                        r.default.createElement(
                          "span",
                          { className: "networks-tab__sub-header-text" },
                          t("networks")
                        ),
                        r.default.createElement(
                          "span",
                          { className: "networks-tab__sub-header-text" },
                          "  >  "
                        ),
                        r.default.createElement(
                          "div",
                          { className: "networks-tab__sub-header-text" },
                          t("addANetwork")
                        ),
                        r.default.createElement("span", null, "  >  "),
                        r.default.createElement(
                          "div",
                          { className: "networks-tab__subheader--break" },
                          t("addANetworkManually")
                        )
                      )
                    : r.default.createElement(
                        "div",
                        { className: "settings-page__sub-header" },
                        r.default.createElement(
                          "span",
                          { className: "settings-page__sub-header-text" },
                          t("networks")
                        ),
                        r.default.createElement(
                          "div",
                          {
                            className:
                              "networks-tab__add-network-header-button-wrapper",
                          },
                          r.default.createElement(
                            l.default,
                            {
                              type: "primary",
                              onClick: (e) => {
                                e.preventDefault(),
                                  n.push(i.ADD_POPULAR_CUSTOM_NETWORK);
                              },
                            },
                            t("addANetwork")
                          )
                        )
                      );
                };
                u.propTypes = { addNewNetwork: a.default.bool.isRequired };
                var d = u;
                n.default = d;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-tab-subheader/networks-tab-subheader.js",
      },
    ],
    [
      4915,
      { "../../../../shared/constants/network": 3954 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.defaultNetworksData = void 0);
                var r = e("../../../../shared/constants/network");
                const a = [
                  {
                    labelKey: r.NETWORK_TYPES.MAINNET,
                    iconColor: "#29B6AF",
                    providerType: r.NETWORK_TYPES.MAINNET,
                    rpcUrl: (0, r.getRpcUrl)({
                      network: r.NETWORK_TYPES.MAINNET,
                      excludeProjectId: !0,
                    }),
                    chainId: r.CHAIN_IDS.MAINNET,
                    ticker: r.CURRENCY_SYMBOLS.ETH,
                    blockExplorerUrl: "https://etherscan.io",
                  },
                  {
                    labelKey: r.NETWORK_TYPES.GOERLI,
                    iconColor: "#3099f2",
                    providerType: r.NETWORK_TYPES.GOERLI,
                    rpcUrl: (0, r.getRpcUrl)({
                      network: r.NETWORK_TYPES.GOERLI,
                      excludeProjectId: !0,
                    }),
                    chainId: r.CHAIN_IDS.GOERLI,
                    ticker: r.TEST_NETWORK_TICKER_MAP[r.NETWORK_TYPES.GOERLI],
                    blockExplorerUrl: "https://goerli.etherscan.io",
                  },
                  {
                    labelKey: r.NETWORK_TYPES.SEPOLIA,
                    iconColor: "#CFB5F0",
                    providerType: r.NETWORK_TYPES.SEPOLIA,
                    rpcUrl: (0, r.getRpcUrl)({
                      network: r.NETWORK_TYPES.SEPOLIA,
                      excludeProjectId: !0,
                    }),
                    chainId: r.CHAIN_IDS.SEPOLIA,
                    ticker: r.TEST_NETWORK_TICKER_MAP[r.NETWORK_TYPES.SEPOLIA],
                    blockExplorerUrl: "https://sepolia.etherscan.io",
                  },
                  {
                    labelKey: r.NETWORK_TYPES.LINEA_GOERLI,
                    iconColor: "#61dfff",
                    providerType: r.NETWORK_TYPES.LINEA_GOERLI,
                    rpcUrl: (0, r.getRpcUrl)({
                      network: r.NETWORK_TYPES.LINEA_GOERLI,
                      excludeProjectId: !0,
                    }),
                    chainId: r.CHAIN_IDS.LINEA_GOERLI,
                    ticker:
                      r.TEST_NETWORK_TICKER_MAP[r.NETWORK_TYPES.LINEA_GOERLI],
                    blockExplorerUrl: "https://goerli.lineascan.build",
                  },
                  {
                    labelKey: r.NETWORK_TYPES.LINEA_MAINNET,
                    iconColor: "#121212",
                    providerType: r.NETWORK_TYPES.LINEA_MAINNET,
                    rpcUrl: (0, r.getRpcUrl)({
                      network: r.NETWORK_TYPES.LINEA_MAINNET,
                      excludeProjectId: !0,
                    }),
                    chainId: r.CHAIN_IDS.LINEA_MAINNET,
                    ticker: r.CURRENCY_SYMBOLS.ETH,
                    blockExplorerUrl: "https://lineascan.build",
                  },
                ];
                n.defaultNetworksData = a;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-tab.constants.js",
      },
    ],
    [
      4916,
      {
        "../../../../app/scripts/lib/util": 80,
        "../../../../shared/constants/app": 3946,
        "../../../../shared/constants/network": 3954,
        "../../../components/ui/button": 4478,
        "../../../ducks/metamask/metamask": 4633,
        "../../../helpers/constants/routes": 4645,
        "../../../hooks/useI18nContext": 4701,
        "../../../selectors": 5013,
        "../../../store/actions": 5020,
        "./networks-form": 4905,
        "./networks-tab-content": 4911,
        "./networks-tab-subheader": 4913,
        "./networks-tab.constants": 4915,
        classnames: 2227,
        "prop-types": 3555,
        react: 3730,
        "react-redux": 3695,
        "react-router-dom": 3715,
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (
                      null === e ||
                      ("object" != typeof e && "function" != typeof e)
                    )
                      return { default: e };
                    var n = w(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                      a =
                        Object.defineProperty &&
                        Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if (
                        "default" !== o &&
                        Object.prototype.hasOwnProperty.call(e, o)
                      ) {
                        var s = a
                          ? Object.getOwnPropertyDescriptor(e, o)
                          : null;
                        s && (s.get || s.set)
                          ? Object.defineProperty(r, o, s)
                          : (r[o] = e[o]);
                      }
                    (r.default = e), n && n.set(e, r);
                    return r;
                  })(e("react")),
                  a = k(e("prop-types")),
                  o = k(e("classnames")),
                  s = e("react-router-dom"),
                  i = e("react-redux"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/constants/routes"),
                  u = e("../../../store/actions"),
                  d = k(e("../../../components/ui/button")),
                  p = e("../../../../app/scripts/lib/util"),
                  f = e("../../../../shared/constants/app"),
                  m = e("../../../selectors"),
                  g = e("../../../ducks/metamask/metamask"),
                  h = e("../../../../shared/constants/network"),
                  E = e("./networks-tab.constants"),
                  y = k(e("./networks-tab-content")),
                  b = k(e("./networks-form")),
                  v = k(e("./networks-tab-subheader"));
                function k(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function w(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (w = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const T = E.defaultNetworksData.map((e) => ({
                    ...e,
                    viewOnly: !0,
                    isATestNetwork: h.TEST_CHAINS.includes(e.chainId),
                  })),
                  A = ({ addNewNetwork: e }) => {
                    const t = (0, l.useI18nContext)(),
                      n = (0, i.useDispatch)(),
                      { pathname: a } = (0, s.useLocation)(),
                      E = (0, s.useHistory)(),
                      k =
                        (0, p.getEnvironmentType)() ===
                        f.ENVIRONMENT_TYPE_FULLSCREEN,
                      w =
                        k ||
                        Boolean(a.match(c.NETWORKS_FORM_ROUTE)) ||
                        "blockExplorerUrl" ===
                          window.location.hash.split("#")[2],
                      A = (0, i.useSelector)(m.getNetworkConfigurations),
                      O = (0, i.useSelector)(g.getProviderConfig),
                      C = (0, i.useSelector)(
                        m.getNetworksTabSelectedNetworkConfigurationId
                      ),
                      N = (0, i.useSelector)(g.isLineaMainnetNetworkReleased),
                      P = Object.entries(A).map(([e, t]) => {
                        var n;
                        return {
                          label: t.nickname,
                          iconColor: "var(--color-icon-alternative)",
                          providerType: h.NETWORK_TYPES.RPC,
                          rpcUrl: t.rpcUrl,
                          chainId: t.chainId,
                          ticker: t.ticker,
                          blockExplorerUrl:
                            (null === (n = t.rpcPrefs) || void 0 === n
                              ? void 0
                              : n.blockExplorerUrl) || "",
                          isATestNetwork: h.TEST_CHAINS.includes(t.chainId),
                          networkConfigurationId: e,
                        };
                      });
                    let I = [...T, ...P];
                    N ||
                      (I = I.filter(
                        (e) =>
                          e.chainId !==
                          h.BUILT_IN_NETWORKS[h.NETWORK_TYPES.LINEA_MAINNET]
                            .chainId
                      ));
                    let R = I.find((e) => e.networkConfigurationId === C) || {};
                    const S = Boolean(R.rpcUrl);
                    let M = !1;
                    return (
                      S ||
                        ((R =
                          I.find(
                            (e) =>
                              e.rpcUrl === O.rpcUrl ||
                              (e.providerType !== h.NETWORK_TYPES.RPC &&
                                e.providerType === O.type)
                          ) || {}),
                        (M = !0)),
                      (0, r.useEffect)(
                        () => () => {
                          n((0, u.setSelectedNetworkConfigurationId)(""));
                        },
                        [n]
                      ),
                      r.default.createElement(
                        "div",
                        { className: "networks-tab__body" },
                        k
                          ? r.default.createElement(v.default, {
                              addNewNetwork: e,
                            })
                          : null,
                        r.default.createElement(
                          "div",
                          {
                            className: (0, o.default)("networks-tab__content", {
                              "networks-tab__content--with-networks-list-popup-footer":
                                !k && !w,
                            }),
                          },
                          e
                            ? r.default.createElement(b.default, {
                                networksToRender: I,
                                addNewNetwork: e,
                                submitCallback: () => E.push(c.DEFAULT_ROUTE),
                                cancelCallback: () => E.push(c.NETWORKS_ROUTE),
                              })
                            : r.default.createElement(
                                r.default.Fragment,
                                null,
                                r.default.createElement(y.default, {
                                  networkDefaultedToProvider: M,
                                  networkIsSelected: S,
                                  networksToRender: I,
                                  providerUrl: O.rpcUrl,
                                  selectedNetwork: R,
                                  shouldRenderNetworkForm: w,
                                }),
                                k || w
                                  ? null
                                  : r.default.createElement(
                                      "div",
                                      {
                                        className:
                                          "networks-tab__networks-list-popup-footer",
                                      },
                                      r.default.createElement(
                                        d.default,
                                        {
                                          type: "primary",
                                          onClick: () => {
                                            k
                                              ? E.push(
                                                  c.ADD_POPULAR_CUSTOM_NETWORK
                                                )
                                              : global.platform.openExtensionInBrowser(
                                                  c.ADD_POPULAR_CUSTOM_NETWORK
                                                );
                                          },
                                        },
                                        t("addNetwork")
                                      )
                                    )
                              )
                        )
                      )
                    );
                  };
                A.propTypes = { addNewNetwork: a.default.bool };
                var O = A;
                n.default = O;
              };
            };
      },
      {
        package: "$root$",
        file: "ui/pages/settings/networks-tab/networks-tab.js",
      },
    ],
    [
      4917,
      { "./security-tab.container": 4919 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    },
                  });
                var r,
                  a =
                    (r = e("./security-tab.container")) && r.__esModule
                      ? r
                      : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/security-tab/index.js" },
    ],
  ],
  [],
  {}
);
