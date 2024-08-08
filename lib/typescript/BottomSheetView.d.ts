import { ParamListBase } from '@react-navigation/native';
import * as React from 'react';
import type { BottomSheetDescriptorMap, BottomSheetNavigationConfig, BottomSheetNavigationHelpers, BottomSheetNavigationState } from './types';
type Props = BottomSheetNavigationConfig & {
    state: BottomSheetNavigationState<ParamListBase>;
    navigation: BottomSheetNavigationHelpers;
    descriptors: BottomSheetDescriptorMap;
};
export declare function BottomSheetView({ state, descriptors }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=BottomSheetView.d.ts.map