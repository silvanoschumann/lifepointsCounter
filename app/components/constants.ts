import { DeckColors, SpielModus } from "./model";

export const deckColors: DeckColors[] = [
  {
    name: "green",
    code: "#51B06C",
    brighterCode: "#D8EDD6",
    path: require("../../assets/image/DeckColorGreen.png"),
    unselectedPath: require("../../assets/image/UnselectedDeckColorGreen.png"),
  },
  {
    name: "red",
    code: "#E95355",
    brighterCode: "#FFC6A7",
    path: require("../../assets/image/DeckColorRed.png"),
    unselectedPath: require("../../assets/image/UnselectedDeckColorRed.png"),
  },
  {
    name: "blue",
    code: "#73BFF0",
    brighterCode: "#EAF8FF",
    path: require("../../assets/image/DeckColorBlue.png"),
    unselectedPath: require("../../assets/image/UnselectedDeckColorBlue.png"),
  },
  {
    name: "white",
    code: "#FDF9C2",
    brighterCode: "#FFFFFF",
    path: require("../../assets/image/DeckColorWhite.png"),
    unselectedPath: require("../../assets/image/UnselectedDeckColorWhite.png"),
  },
  {
    name: "black",
    code: "#818181",
    brighterCode: "#CFCFCF",
    path: require("../../assets/image/DeckColorBlack.png"),
    unselectedPath: require("../../assets/image/UnselectedDeckColorBlack.png"),
  },
]

export const spielModi: SpielModus[] = [
  {
    name: "Standard",
    lifePoints: 20
  },
  {
    name: "Commander",
    lifePoints: 40
  }
]