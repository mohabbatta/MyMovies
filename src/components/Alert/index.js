import { Alert } from "react-native";



const createAlert = () =>
Alert.alert(
  "new Movie add",
  [
    { text: "OK", onPress: () =>{}}
  ]
);

export default createAlert


