import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const errorStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    retryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    title: {
        color: Colors.tieFighterGrey,
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
    },
    buttonText: {
        color: Colors.sithRed,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
    },
});

export default errorStyle;