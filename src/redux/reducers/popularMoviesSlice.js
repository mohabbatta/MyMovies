
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMovies = createAsyncThunk(
  'movies/fetchNewPage',
  async page => {
  const res = await (fetch('https://api.themoviedb.org/3/discover/movie?api_key=04efb4789b6885a2f87e6bc96e26a9a4&page='+page))
  const json = await res.json()
 return json.results
}
)

export const popularMoviesSlice = createSlice({
  name: 'movies',
  initialState: {
    status:'idle',  //idle loading successed failed moreLoading
    page:1,
    movies:[]
  },
  reducers: {
    updatePage(state,action){
      state.page  = state.page +1; 
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        if(state.page == 1){
          state.status = 'loading'
        }else{
          state.status = 'moreLoading';
        }
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.movies = state.movies.concat(action.payload)
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }

})
export const { updatePage } = popularMoviesSlice.actions

export default popularMoviesSlice.reducer
