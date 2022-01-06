import { createSlice } from "@reduxjs/toolkit";

const initialState = { withdrawal: 0, deposit: 0, balance: 0 };

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
    account(state) {
      return state;
    },
  },
});

const transactionSliceActions = transactionSlice.actions;

export default transactionSlice;
