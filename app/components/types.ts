import { GameParameter } from "./model";

export type RootStackParamList = {
  Home: undefined;
  Counter: { gameParameter: GameParameter };
};