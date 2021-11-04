export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    search: import("./data-manager.slice").searchBy;
    swApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getCharacters: import("@reduxjs/toolkit/dist/query").QueryDefinition<number | null, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        searchPeople: import("@reduxjs/toolkit/dist/query").QueryDefinition<string, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        getSpecies: import("@reduxjs/toolkit/dist/query").QueryDefinition<number, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        searchSpecies: import("@reduxjs/toolkit/dist/query").QueryDefinition<string, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
    }, never, "swApi">;
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    search: import("./data-manager.slice").searchBy;
    swApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getCharacters: import("@reduxjs/toolkit/dist/query").QueryDefinition<number | null, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        searchPeople: import("@reduxjs/toolkit/dist/query").QueryDefinition<string, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        getSpecies: import("@reduxjs/toolkit/dist/query").QueryDefinition<number, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        searchSpecies: import("@reduxjs/toolkit/dist/query").QueryDefinition<string, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
    }, never, "swApi">;
}, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
    search: import("./data-manager.slice").searchBy;
    swApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getCharacters: import("@reduxjs/toolkit/dist/query").QueryDefinition<number | null, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        searchPeople: import("@reduxjs/toolkit/dist/query").QueryDefinition<string, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        getSpecies: import("@reduxjs/toolkit/dist/query").QueryDefinition<number, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
        searchSpecies: import("@reduxjs/toolkit/dist/query").QueryDefinition<string, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, any, string>;
    }, never, "swApi">;
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
export default store;
