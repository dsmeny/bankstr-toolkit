import { createSlice } from "@reduxjs/toolkit";

const initialState = { balance: 170, deposit: 150, withdraw: 20 };

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducer: {
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

const transactionSliceActions = transactionSlice.actions;

export default transactionSlice.reducer;
