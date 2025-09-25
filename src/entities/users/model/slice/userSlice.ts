import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from "@/entities/users/api/usersApi";

const usersAdapter = createEntityAdapter<User>({
});

const userSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    loading: false,
    error: null as string | null,
    selectedUserId: null as number | null,
  }),
  reducers: {
    userAdded: usersAdapter.addOne,
    userUpdated: usersAdapter.updateOne,
    usersReceived: (state, action: PayloadAction<User[]>) => {
      usersAdapter.setAll(state, action.payload);
    },
    setSelectedUserId: (state, action: PayloadAction<number>) => {
      state.selectedUserId = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors();

export const {
  userAdded,
  userUpdated,
  usersReceived,
  setSelectedUserId,
  setLoading,
  setError,
} = userSlice.actions;

export default userSlice.reducer;