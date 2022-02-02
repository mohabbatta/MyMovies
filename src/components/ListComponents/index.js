import React from "react"
import { FlatList, ActivityIndicator, View } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import MovieCard  from '../MovieCard'
import { updatePage,fetchMovies } from "../../redux/reducers/popularMoviesSlice"

const ListComponent = (props) => {
 
    const dispatch = useDispatch();
    const state = useSelector(state => state.popularMovies)

    renderFooter = () => {
        return (
            state.status == 'moreLoading'?
                <View >
                    <ActivityIndicator size='large' />
                </View> : null)
    }


    return (
        <FlatList
            data={props.data}
            keyExtractor={({ id }, index) => id}
            onEndReached={() => {
                if(state.status != 'moreLoading'){
                    dispatch(fetchMovies(state.page)) 
                    dispatch(updatePage())                           
                }              
            }}
            onEndReachedThreshold={0}
            ListFooterComponent={this.renderFooter}
            renderItem={({ item }) =>
                <MovieCard title={item.title}
                    overview={item.overview}
                    date={item.release_date?.toString()}
                    imagePath={ "https://image.tmdb.org/t/p/original"+item.poster_path} />}
        />

    );
}


export default ListComponent