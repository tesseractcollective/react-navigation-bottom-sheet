import { ParamListBase, Router, StackActionType, StackRouterOptions } from '@react-navigation/native';
import type { BottomSheetNavigationState } from './types';
export type BottomSheetRouterOptions = StackRouterOptions;
export type BottomSheetActionType = StackActionType | {
    type: 'SNAP_TO';
    index: number;
    source?: string;
    target?: string;
};
export declare const BottomSheetActions: {
    snapTo(index: number): BottomSheetActionType;
    replace(name: string, params?: object | undefined): StackActionType;
    push(name: string, params?: object | undefined): StackActionType;
    pop(count?: number | undefined): StackActionType;
    popToTop(): StackActionType;
};
export declare function BottomSheetRouter(routerOptions: StackRouterOptions): Router<BottomSheetNavigationState<ParamListBase>, BottomSheetActionType>;
//# sourceMappingURL=BottomSheetRouter.d.ts.map