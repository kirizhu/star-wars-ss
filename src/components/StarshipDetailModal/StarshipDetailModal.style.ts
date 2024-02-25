import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const starshipDetailModalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    marginTop: 40,
    width:'100%',
    backgroundColor: Colors.imperialWhite,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: Colors.darthVaderBlack,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: Colors.coruscantSkyline
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default starshipDetailModalStyle