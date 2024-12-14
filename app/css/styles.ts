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
    flexDirection: "row", // Buttons horizontal anordnen
    justifyContent: "center", // Zentrieren der Buttons
    marginVertical: 20, // Abstand nach oben und unten
  },
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: deckColors.green,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
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
    flexDirection: "column", // Buttons werden vertikal aufgeteilt
  },
  counterButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: deckColors.black,
    borderWidth: 1,
    borderColor: "#000",
  },
});
