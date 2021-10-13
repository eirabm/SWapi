import {
  fetchDataManager,
  dataManagerAdapter,
  dataManagerReducer,
} from './data-manager.slice';

describe('dataManager reducer', () => {
  it('should handle initial state', () => {
    const expected = dataManagerAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(dataManagerReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchDataManagers', () => {
    let state = dataManagerReducer(
      undefined,
      fetchDataManager.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = dataManagerReducer(
      state,
      fetchDataManager.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = dataManagerReducer(
      state,
      fetchDataManager.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
