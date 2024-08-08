function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { createNavigatorFactory, useNavigationBuilder } from '@react-navigation/native';
import * as React from 'react';
import { BottomSheetRouter } from './BottomSheetRouter';
import { BottomSheetView } from './BottomSheetView';
function BottomSheetNavigator({
  id,
  children,
  screenListeners,
  screenOptions,
  ...rest
}) {
  const {
    state,
    descriptors,
    navigation,
    NavigationContent
  } = useNavigationBuilder(BottomSheetRouter, {
    id,
    children,
    screenListeners,
    screenOptions
  });
  return /*#__PURE__*/React.createElement(NavigationContent, null, /*#__PURE__*/React.createElement(BottomSheetView, _extends({}, rest, {
    state: state,
    navigation: navigation,
    descriptors: descriptors
  })));
}
export const createBottomSheetNavigator = createNavigatorFactory(BottomSheetNavigator);
//# sourceMappingURL=createBottomSheetNavigator.js.map