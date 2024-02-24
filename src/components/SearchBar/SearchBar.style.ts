import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const searchBarStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
        backgroundColor: Colors.starkillerWhite,
        borderRadius: 25,
        alignItems: "center",
    },
    icon: {
        padding: 10,
        marginLeft: 10,
    },
    input: {
        flex: 1,
        fontSize: 20,
        backgroundColor: Colors.starkillerWhite,
        color: Colors.tieFighterGrey,
        height: 40,
        marginRight: 10,
  
    },
});

export default searchBarStyle;