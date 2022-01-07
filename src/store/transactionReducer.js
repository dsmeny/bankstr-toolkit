import { createSlice } from "@reduxjs/toolkit";

const initialState = { balance: 100, deposit: 0, withdraw: 0 };

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    withdraw(state, payload) {
      state.withdrawal = payload;
      state.balance -= payload;
    },
    deposit(state, payload) {
      state.deposit = payload;
      state.balance += payload;
    },
  },
});

export const transactionSliceActions = transactionSlice.actions;

export default transactionSlice.reducer;
