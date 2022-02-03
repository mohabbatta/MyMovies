import reducer, { add, setDate } from '../src/redux/reducers/addMovieSlice'

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
            isLoading: false,
            isDateOpen: false,
            date: "",
            imagePath: "",
            movies: []
        }
    )
})

test('should handle a movie being added to an empty list', () => {
    const previousState = {
        isLoading: false,
        isDateOpen: false,
        date: "",
        imagePath: "",
        movies: []
    }
    expect(reducer(previousState, add({
        id: 1,
        title: "test title",
        overview: "test over view",
        imagePath: "test image path",
        date: "date"
    }))).toEqual(
        {
            isLoading: false,
            isDateOpen: false,
            date: "",
            imagePath: "",
            movies: [
                {
                    id: 1,
                    title: "test title",
                    overview: "test over view",
                    imagePath: "test image path",
                    date: "date"
                }]
        }
    )
})


test('should handle a setDate to added as string to change the state', () => {
    const date = new Date();
    const previousState = {
        isLoading: false,
        isDateOpen: false,
        date: "",
        imagePath: "",
        movies: []
    }
    expect(reducer(previousState, setDate(date))).toEqual(
        {
            isLoading: false,
            isDateOpen: false,
            date: date.getFullYear() + "/" +
                date.getMonth() + "/" +
                date.getDay(),
            imagePath: "",
            movies: []
        }
    )
})


