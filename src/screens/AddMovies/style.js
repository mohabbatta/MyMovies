import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#f5f5f5',
    },
    labelText:{
        marginTop: 10,
        marginBottom:10,
        fontSize:20,
        fontWeight:"500"
    },
    redLabel:{
        color: "red",
        padding:4,
        paddingLeft:12

    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
    },
    titleInput:{
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth:1,
        height: 40,
        padding: 10,
        borderRadius: 15,
    },
    overViewInput: {
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth:1,
        height: 40,
        padding: 10,
        borderRadius: 15,
        minHeight:100,
        maxHeight:500
    },
});


export default styles