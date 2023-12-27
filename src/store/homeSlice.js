import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genres:{}
  },
  reducers: {
    getApiConfigurations:(state, action) => {
        state.url = action.payload
    },

    getAGenres:(state, action) => {
        state.genres = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfigurations, getAGenres } = homeSlice.actions

export default homeSlice.reducer