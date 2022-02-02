import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';


const MovieCard = (props) => {

    return (
        <Card containerStyle={styles.cardStyle} >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {props.imagePath.length === 0 ?
                        <Card.Image source={require('../../../placeholder.png')}
                            style={{ resizeMode: 'contain', height: "100%" }}
                        /> :
                        <Card.Image
                            style={{ resizeMode: 'cover', height: "100%" }}
                            source={{ uri: props.imagePath, }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    }

                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <Text ellipsizeMode='tail' numberOfLines={4}>
                        {props.overview}
                    </Text>
                    <Text>
                        {props.date}
                    </Text>

                </View>
            </View>
        </Card>

    )
}

const styles = StyleSheet.create({

    cardStyle: {
        margin: 15,
        padding: 8,
        height: 200
    },
    container: {
        flexDirection: "row",
        padding: 0,
        margin: 0,
    },
    imageContainer: {
        flex: 1.5
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        flex: 2,
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
    },

});


export default MovieCard


