import { RootState } from './store';
export interface searchBy {
    sortBy: string;
    actualPage: number;
}
export declare const changeSort: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, nextPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, prevPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
export declare const getSearchSelector: (state: RootState) => searchBy;
declare const _default: import("redux").Reducer<searchBy, import("redux").AnyAction>;
export default _default;
