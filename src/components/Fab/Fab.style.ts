import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const fabStyles = StyleSheet.create({
    goToTopButton: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      backgroundColor: Colors.ahchToBlue,
      padding: 10,
      borderRadius: 20,
    },
    buttonText: {
      color: Colors.starkillerWhite,
      fontSize: 16,
    },
});

export default fabStyles