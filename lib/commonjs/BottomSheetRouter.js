"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheetActions = void 0;
exports.BottomSheetRouter = BottomSheetRouter;
var _nonSecure = require("nanoid/non-secure");
var _native = require("@react-navigation/native");
const BottomSheetActions = exports.BottomSheetActions = {
  ..._native.StackActions,
  snapTo(index) {
    return {
      type: 'SNAP_TO',
      index
    };
  }
};
function BottomSheetRouter(routerOptions) {
  const baseRouter = (0, _native.StackRouter)(routerOptions);
  return {
    ...baseRouter,
    type: 'bottom-sheet',
    getInitialState(options) {
      const state = baseRouter.getInitialState(options);
      return {
        ...state,
        stale: false,
        type: 'bottom-sheet',
        key: `bottom-sheet-${(0, _nonSecure.nanoid)()}`
      };
    },
    getStateForAction(state, action, options) {
      switch (action.type) {
        case 'SNAP_TO':
          {
            const index = action.target === state.key && action.source ? state.routes.findIndex(r => r.key === action.source) : state.index;
            return {
              ...state,
              routes: state.routes.map((route, i) => i === index ? {
                ...route,
                snapToIndex: action.index
              } : route)
            };
          }
        default:
          return baseRouter.getStateForAction(state, action, options);
      }
    },
    getRehydratedState(partialState, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) {
      if (partialState.stale === false) {
        return partialState;
      }
      const state = baseRouter.getRehydratedState(partialState, {
        routeNames,
        routeParamList,
        routeGetIdList
      });
      return {
        ...state,
        type: 'bottom-sheet',
        key: `bottom-sheet-${(0, _nonSecure.nanoid)()}`
      };
    },
    actionCreators: BottomSheetActions
  };
}
//# sourceMappingURL=BottomSheetRouter.js.map