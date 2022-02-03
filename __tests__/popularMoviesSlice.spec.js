import reducer, { updatePage } from '../src/redux/reducers/popularMoviesSlice'


//createAsyncThunk and extraReducers tested by redux
test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
            status: 'idle',
            page: 1,
            movies: []
        }
    )
})


test('should update page', () => {
    const lastState = {
        status: 'idle',
        page: 1,
        movies: []
    };
    expect(reducer(lastState, updatePage())).toEqual(
        {
            status: 'idle',
            page: 2,
            movies: []
        }
    )
})
