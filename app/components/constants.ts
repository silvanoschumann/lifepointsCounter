import { SpielModus } from "./model";

export const deckColors = {
  green: "#51B06C",
  blue: "#73BFF0",
  black: "#818181",
  red: "#E95355",
  white: "#FDF9C2",
};

export const spielModi: SpielModus[] = [
  {
    name: "Standard", 
    lifePoints: 20
  },
  {
    name: "Commander", 
    lifePoints:40
  }
]