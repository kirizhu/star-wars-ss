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
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    paddingHorizontal: 20,
    paddingVertical:30,
    overflow:'hidden',
  },
  overlay:{
    position: 'absolute',
    overflow:'hidden',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position:'absolute',
    top:5,
    right:5,
    zIndex:1
  },
  buttonClose: {
    backgroundColor: Colors.lightsaberBlue,
    marginVertical:10
  },
  headerStyle:{
    textAlign: "center",
    fontWeight:'bold',
    fontSize:20,
    paddingVertical: 16,
    textDecorationLine:'underline',
    color: Colors.cpoGold
  },
  textStyle: {
    color: Colors.imperialWhite,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: "center",
    fontWeight:'bold',
    color:Colors.cpoGold
  }
});

export default starshipDetailModalStyle