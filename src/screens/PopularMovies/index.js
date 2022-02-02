import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import ListComponent from '../../components/ListComponents';
import { fetchMovies, updatePage } from '../../redux/reducers/popularMoviesSlice';

const PopularMovies = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.popularMovies)

  useEffect(() => {
    if (state.status === 'idle') {
      dispatch(fetchMovies(state.page))
      dispatch(updatePage())
    }
  }, [state.status, dispatch])

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {state.status == 'loading' ? <ActivityIndicator color={"#000"}
        style={{ justifyContent: 'center' }} /> :
        state.status == 'error' ? <Text> some thing wrong </Text> :
          <ListComponent data={state.movies} />
      }
    </View>
  )
}


export default PopularMovies
