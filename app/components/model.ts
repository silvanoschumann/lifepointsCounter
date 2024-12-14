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