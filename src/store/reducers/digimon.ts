import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"

interface DigimonState {
  digimonList: { name: string; id: number; href: string; image: string }[]
  loading: boolean
  error: string | null
}

const initialState: DigimonState = {
  digimonList: [],
  loading: false,
  error: null,
}

export const fetchDigimon = createAsyncThunk(
  "digimon/fetchDigimonList",
  async () => {
    // axios.get('https://digi-api.com/api/v1/digimon').then(function(response){
    //     return response
    // })
    //  .catch(function(error){
    //     console.log(error)
    // })

    const response = await fetch("https://digi-api.com/api/v1/digimon")
    const jsonData = await response.json()
    return jsonData.content
  }
)

export const digimonSlice = createSlice({
  name: "digimon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDigimon.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchDigimon.fulfilled, (state, action) => {
        state.loading = false
        state.digimonList = action.payload
      })
      .addCase(fetchDigimon.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? "Unknown Error"
      })
  },
})

export default digimonSlice.reducer
