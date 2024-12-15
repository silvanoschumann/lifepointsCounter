import { ImageSourcePropType } from "react-native";

export class GameParameter{
  lifePoints!: number;
  spielerNamen!: string[];
  spieler!: Spieler[];
}

export class SpielModus{
  name!: string;
  lifePoints!: number;
}

export class Spieler{
  name!: string;
  lifePoints!: number;
  deckColor!: string[];
}

export class DeckColors{
  name!: string;
  code!: string;
  brighterCode!: string;
  path!: ImageSourcePropType ;
}