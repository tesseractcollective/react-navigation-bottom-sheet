import { ParamListBase, StackNavigationState } from '@react-navigation/native';
import * as React from 'react';
import type { BottomSheetNavigationEventMap, BottomSheetNavigationOptions, BottomSheetNavigatorProps } from './types';
declare function BottomSheetNavigator({ id, children, screenListeners, screenOptions, ...rest }: BottomSheetNavigatorProps): React.JSX.Element;
export declare const createBottomSheetNavigator: <ParamList extends ParamListBase>() => import("@react-navigation/native").TypedNavigator<ParamList, StackNavigationState<ParamListBase>, BottomSheetNavigationOptions, BottomSheetNavigationEventMap, typeof BottomSheetNavigator>;
export {};
//# sourceMappingURL=createBottomSheetNavigator.d.ts.map