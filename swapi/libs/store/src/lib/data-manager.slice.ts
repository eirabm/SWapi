
// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import * as apiClient from './api';

// export type Char = {
//   name: string
//   gender: string,

// };

// export type UserListState = {
//   data: Char[];
//   loading: boolean;
//   error: boolean;
//   nextPage: number;
// };

// const initialState: UserListState = {
//   data: [],
//   loading: false,
//   error: true,
//   nextPage: 1,
// };

// export const fetchData = createAsyncThunk<{data: Char[]}, {page: number}>(
//   'fetchData',
//   async ({page}) => {
//     const response = await apiClient.fetchData(page);
//     if (response.kind === 'success') {
//       console.log(response.body)

//       return {
//         data: response.body ?? [],
//       };
//     } else {
//       throw 'Error fetching users';
//     }
//   },
// );

// const dataListSlice = createSlice({
//   name: 'userList',
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.nextPage += 1;
//         state.data = state.data.concat(action.payload.data);
//         state.loading = false;
//       })
//       .addCase(fetchData.rejected, (state) => {
//         state.error = true;
//         state.loading = false;
//       });
//   },
// });

// export default dataListSlice.reducer;