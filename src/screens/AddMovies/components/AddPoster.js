import React from "react";
import { View, Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { uploadImage } from "../../../redux/reducers/addMovieSlice";
import RoundButton from "../../../components/RoundButton";
import styles from '../style'


const AddPoster = () => {

    const state = useSelector(state => state.addMovie)
    const dispatch = useDispatch()

    return (
        <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
            <RoundButton title="poster" iconName="camera"
                action={() => { dispatch(uploadImage()) }}
                isLoading={state.isLoading}
            />

            {
                state.imagePath.length != 0 ?
                    <View key={state.imagePath} style={styles.image}>
                        <Image
                            resizeMode="cover"
                            resizeMethod="scale"
                            style={{ width: 100, height: 100 }}
                            source={{ uri: state.imagePath }}
                        />
                    </View>
                    : null
            }

        </View>
    );
};


export default AddPoster

