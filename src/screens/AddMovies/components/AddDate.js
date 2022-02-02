import React from "react";
import { View, Text } from "react-native";
import DatePicker from 'react-native-date-picker'
import { useSelector, useDispatch } from 'react-redux'
import { openDatePicker, setDate, closeDatePicker } from "../../../redux/reducers/addMovieSlice";
import RoundButton from "../../../components/RoundButton";

const AddDate = () => {

    const state = useSelector(state => state.addMovie)
    const dispatch = useDispatch()

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <RoundButton title="date" iconName="calendar"
                action={() => dispatch(openDatePicker())} />
            <Text > {state.date.toString()}  </Text>

            <DatePicker
                modal
                open={state.isDateOpen}
                date={new Date()}
                onConfirm={(date) => { dispatch(setDate(date)) }}
                onCancel={() => { dispatch(closeDatePicker()) }}
            />
        </View>
    );
}


export default AddDate