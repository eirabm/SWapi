import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const DATAMANAGER_FEATURE_KEY = 'dataManager';

/*
 * Update these interfaces according to your requirements.
 */
export interface DataManagerEntity {
  id: number;
}

export interface DataManagerState extends EntityState<DataManagerEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const dataManagerAdapter = createEntityAdapter<DataManagerEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchDataManager())
 * }, [dispatch]);
 * ```
 */
export const fetchDataManager = createAsyncThunk(
  'dataManager/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getDataManagers()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialDataManagerState: DataManagerState =
  dataManagerAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
  });

export const dataManagerSlice = createSlice({
  name: DATAMANAGER_FEATURE_KEY,
  initialState: initialDataManagerState,
  reducers: {
    add: dataManagerAdapter.addOne,
    remove: dataManagerAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataManager.pending, (state: DataManagerState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchDataManager.fulfilled,
        (
          state: DataManagerState,
          action: PayloadAction<DataManagerEntity[]>
        ) => {
          dataManagerAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchDataManager.rejected, (state: DataManagerState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const dataManagerReducer = dataManagerSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(dataManagerActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const dataManagerActions = dataManagerSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllDataManager);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = dataManagerAdapter.getSelectors();

export const getDataManagerState = (rootState: unknown): DataManagerState =>
  rootState[DATAMANAGER_FEATURE_KEY];

export const selectAllDataManager = createSelector(
  getDataManagerState,
  selectAll
);

export const selectDataManagerEntities = createSelector(
  getDataManagerState,
  selectEntities
);
