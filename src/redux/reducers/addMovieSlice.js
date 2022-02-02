
import { launchImageLibrary } from 'react-native-image-picker';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const uploadImage = createAsyncThunk('posts/fetchPosts', async () => {
  const result = await launchImageLibrary();
  return result.assets[0].uri;
})

export const addMovieSlice = createSlice({
  name: 'movies',
  initialState: {
    isLoading: false,
    isDateOpen: false,
    date: "",
    imagePath: "",
    movies: []
  },
  reducers: {
    add(state, action) {
      state.movies.push(action.payload)
    },
    afterAdd(state,action){
      state.date = '';
      state.imagePath = ''
    },
    openDatePicker(state, action) {
      state.isDateOpen = true;
    },
    closeDatePicker(state, action) {
      state.isDateOpen = false;
    },
    setDate(state, action) {
      state.isDateOpen = false;
      state.date = action.payload.getFullYear() + "/" +
        action.payload.getMonth() + "/" +
        action.payload.getDay();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(uploadImage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false,
        state.imagePath = action.payload
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error.message);
      })
  }


})

export const { add, openDatePicker, closeDatePicker,
  setDate, loadingImage, setImage ,afterAdd} = addMovieSlice.actions

export default addMovieSlice.reducer

