import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const fabStyles = StyleSheet.create({
    goToTopButton: {
      position: 'absolute',
      right: 20,
      bottom: 30,
      backgroundColor: 'rgba(128, 128, 128, 0.3)',
      padding: 12,
      borderRadius: 20,
    },
    buttonText: {
      elevation: 2,
      color: Colors.imperialWhite,
      fontSize: 16,
    },
});

export default fabStyles