import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const starshipListItemStyle = StyleSheet.create({
    container: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: Colors.deathStarSilver
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default starshipListItemStyle