import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    data: [
      {
        id: 1,
        sn: "1",
        accountNo: "001234",
        division: "23",
        country: "US",
        legacyNo: "12",
        legacyDivision: "23"
      },
      {
        id: 2,
        sn: "2",
        accountNo: "002345",
        country: "US",
        division: "23",
        legacyNo: "13",
        legacyDivision: "456"
      }
    ]
  },
  reducers: {
    addRow: (state, action) => {
      state.data.push(action.payload);
    },
    editRow: (state, action) => {
      const index = state.data.findIndex((row) => row.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteRow: (state, action) => {
      state.data = state.data.filter((row) => row.id !== action.payload);
    }
  }
});

export const { addRow, editRow, deleteRow } = tableSlice.actions;

export default tableSlice.reducer;


