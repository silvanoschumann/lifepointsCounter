import { ImageSourcePropType } from "react-native";

export class GameParameter {
  spieler!: Spieler[];
}

export class SpielModus {
  name!: string;
  lifePoints!: number;
}

export class Spieler {
  name!: string;
  lifePoints!: number;
  deckColor!: Deck[];
}

export class Deck {
  color!: string;
  selected!: boolean;
}

export class DeckColors {
  name!: string;
  code!: string;
  brighterCode!: string;
  path!: ImageSourcePropType;
  unselectedPath!: ImageSourcePropType;
}