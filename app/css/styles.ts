import { StyleSheet } from "react-native";
import { deckColors } from "../components/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: deckColors[0].code,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  selectedDeckColorButton: {
    width: 30,
    height: 30,
    right: 0,
    bottom: -10
  },
  buttonText: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: 200,
    marginTop: 5,
  },
  counterContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  playerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  counterButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  image: {
    position: 'absolute',
    left: '30%',
    top: 0,
    height: '140%',
    width: '140%',
    resizeMode: 'cover',
    zIndex: 0,
  },
  playerNamePosition: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 40,
    zIndex: 1,
  },
  scoreText: {
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    zIndex: 1,
  },
});