"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheetView = BottomSheetView;
var _bottomSheet = require("@gorhom/bottom-sheet");
var _native = require("@react-navigation/native");
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _reactNativeScreens = require("react-native-screens");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Overlay({
  children
}) {
  if (_reactNative.Platform.OS === 'ios') {
    return /*#__PURE__*/React.createElement(_reactNativeScreens.FullWindowOverlay, null, /*#__PURE__*/React.createElement(_reactNativeSafeAreaContext.SafeAreaProvider, {
      style: styles.safeAreaProvider
    }, children));
  } else {
    return children;
  }
}
function BottomSheetModalScreen({
  index,
  navigation,
  enableDynamicSizing,
  children,
  ...props
}) {
  const ref = React.useRef(null);
  const lastIndexRef = React.useRef(index);

  // Present on mount.
  React.useEffect(() => {
    ref.current?.present();
  }, []);
  const isMounted = React.useRef(true);
  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  React.useEffect(() => {
    if (index != null && lastIndexRef.current !== index) {
      ref.current?.snapToIndex(index);
    }
  }, [index]);
  const onChange = React.useCallback(newIndex => {
    lastIndexRef.current = newIndex;
    if (newIndex >= 0) {
      navigation.snapTo(newIndex);
    }
  }, [navigation]);
  const onDismiss = React.useCallback(() => {
    // BottomSheetModal will call onDismiss on unmount, be we do not want that since
    // we already popped the screen.
    if (isMounted.current) {
      navigation.goBack();
    }
  }, [navigation]);
  return /*#__PURE__*/React.createElement(_bottomSheet.BottomSheetModal, _extends({
    ref: ref,
    index: index,
    enableDynamicSizing: enableDynamicSizing,
    onChange: onChange,
    onDismiss: onDismiss
  }, props), enableDynamicSizing ? /*#__PURE__*/React.createElement(_bottomSheet.BottomSheetView, null, children) : children);
}
const DEFAULT_SNAP_POINTS = ['66%'];
function BottomSheetView({
  state,
  descriptors
}) {
  const {
    colors
  } = (0, _native.useTheme)();
  const themeBackgroundStyle = React.useMemo(() => ({
    backgroundColor: colors.card
  }), [colors.card]);
  const themeHandleIndicatorStyle = React.useMemo(() => ({
    backgroundColor: colors.border
  }), [colors.border]);
  const firstScreen = descriptors[state.routes[0].key];
  const {
    firstScreenIsModal = false
  } = firstScreen.options;

  // Avoid rendering provider if we only have one screen.
  const shouldRenderProvider = React.useRef(firstScreenIsModal);
  shouldRenderProvider.current = shouldRenderProvider.current || state.routes.length > 1;
  return /*#__PURE__*/React.createElement(React.Fragment, null, firstScreenIsModal ? null : firstScreen.render(), /*#__PURE__*/React.createElement(Overlay, null, shouldRenderProvider.current && /*#__PURE__*/React.createElement(_bottomSheet.BottomSheetModalProvider, null, state.routes.slice(firstScreenIsModal ? 0 : 1).map(route => {
    const {
      options,
      navigation,
      render
    } = descriptors[route.key];
    const {
      index,
      backgroundStyle,
      handleIndicatorStyle,
      snapPoints,
      enableDynamicSizing,
      ...sheetProps
    } = options;
    return /*#__PURE__*/React.createElement(BottomSheetModalScreen, _extends({
      key: route.key
      // Make sure index is in range, it could be out if snapToIndex is persisted
      // and snapPoints is changed.
      ,
      index: Math.min(route.snapToIndex ?? index ?? 0, snapPoints != null ? snapPoints.length - 1 : 0),
      snapPoints: snapPoints == null && !enableDynamicSizing ? DEFAULT_SNAP_POINTS : snapPoints,
      enableDynamicSizing: enableDynamicSizing,
      navigation: navigation,
      backgroundStyle: [themeBackgroundStyle, backgroundStyle],
      handleIndicatorStyle: [themeHandleIndicatorStyle, handleIndicatorStyle]
    }, sheetProps), render());
  }))));
}
const styles = _reactNative.StyleSheet.create({
  safeAreaProvider: {
    flex: 1,
    pointerEvents: 'box-none'
  }
});
//# sourceMappingURL=BottomSheetView.js.map