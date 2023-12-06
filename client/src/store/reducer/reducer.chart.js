import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  chartType: "pie",
  chartValues: [],
};
const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setChartType: (state, action) => {
      console.log(action);
      return { ...state, chartType: action.payload.data };
    },
    setChartValue: (state, action) => {
      return { ...state, chartValues: action.payload.chartValues };
    },
  },
});
export const { setChartType, setChartValue } = chartSlice.actions;
export default chartSlice.reducer;
