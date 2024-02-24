import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const searchBarStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
        backgroundColor: Colors.starkillerWhite,
        borderRadius: 25,
        alignItems: "center",
        marginHorizontal: 20,
    },
    icon: {
        padding: 10,
    },
    input: {
        fontSize: 20,
        backgroundColor: Colors.starkillerWhite,
        color: Colors.tieFighterGrey,
        height: 40,
        marginRight: 20,
    },
});

export default searchBarStyle;