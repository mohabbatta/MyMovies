
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import addMovieSlice from './reducers/addMovieSlice';
import  popularMoviesSlice  from './reducers/popularMoviesSlice';


const rootReducer = combineReducers({
    popularMovies: popularMoviesSlice,
 addMovie:addMovieSlice
});

const middlewareEnhancer = applyMiddleware(thunk)
const store = createStore(rootReducer, middlewareEnhancer)

export default store



