import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const starshipDetailModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    marginTop: 40,
    backgroundColor: Colors.imperialWhite,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical:30,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    color: Colors.imperialWhite,
    fontSize: 16,
  },
  buttonClose: {
    backgroundColor: Colors.ahchToBlue,
  },
  headerStyle:{
    textAlign: "center",
    fontWeight:'bold',
    fontSize:20,
    paddingBottom: 16,
    textDecorationLine:'underline'
  },
  textStyle: {
    color: Colors.imperialWhite,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    borderWidth:1,
    marginBottom: 15,
    fontSize: 16,
    textAlign: "center",
    fontWeight:'bold'
  }
});

export default starshipDetailModalStyle