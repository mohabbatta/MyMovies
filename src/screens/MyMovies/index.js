import React from 'react';
import { View, FlatList, } from 'react-native';
import { FAB } from 'react-native-elements';
import { useSelector } from 'react-redux'
import NoFoundItem from '../../components/NoFoundItem';
import MovieCard  from '../../components/MovieCard'

const MyMovies = ({ navigation }) => {

    const state = useSelector(state => state.addMovie)
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>

            {state.movies.length === 0 ?
                <NoFoundItem /> :
                <FlatList
                    data={state.movies}
                    keyExtractor={({ id }, index) => index}
                    renderItem={({ item }) =>
                        <MovieCard title={item.title}
                            overview={item.overview}
                            date={item.date?.toString()}
                            imagePath={item.imagePath} />}
                />
            }
            <FAB
                onPress={() => navigation.navigate('AddMovie')}
                placement="right"
                icon={{ name: 'add', color: 'white' }}
                color="black"
            />
        </View>
    );
}

export default MyMovies

