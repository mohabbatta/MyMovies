import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";


const NoFoundItem = () => {
    return (
        <View>
            <Icon name="inbox" size={40} color="#000" />
            <Text style={styles.noFoundText}> No movies added </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    noFoundText: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 18,
        marginTop: 10
    }

});


export default NoFoundItem
