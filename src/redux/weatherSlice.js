import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// OpenWeatherMap API'den veri çekmek için bir async thunk
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=feadfc7ceff6fee37d2d342f2109778a&units=metric&lang=tr`;
    const response = await fetch(url);
    return response.json();
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default weatherSlice.reducer;
