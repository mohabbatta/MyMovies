import React from "react";
import { Button } from "react-native-elements";


const RoundButton = (props)=>{
    return(
        <Button
        title={props.title}
        icon={{
            name: props.iconName,
            type: 'font-awesome',
            size: 15,
            color: 'white',
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '500' }}
        buttonStyle={{
            backgroundColor: 'rgba(90, 154, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
        }}
        containerStyle={{
            width: 130,
            marginHorizontal: 0,
            marginRight: 20,
            marginVertical: 10,
        }}
        loading={props.isLoading}
        onPress={props.action}
    />
    );
}

export default RoundButton