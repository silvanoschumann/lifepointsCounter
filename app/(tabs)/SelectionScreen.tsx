import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../css/styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/types";
import { Deck, GameParameter, Spieler, SpielModus } from "../components/model";
import { deckColors, spielModi } from "../components/constants";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export default function SelectionScreen() {
  const DEFAULTSPIELERANZAHL: number = 2;
  const [spielModus, setSpielModus] = useState(spielModi[0]);
  const [zeigeCommanderSpielerAnzahl, setZeigeCommanderSpielerAnzahl] =
    useState(false);
  const [spieler, setSpieler] = useState<Spieler[]>([]);

  const gameParameter: GameParameter = {
    spieler: spieler,
  };

  const navigation = useNavigation<HomeScreenNavigationProp>();

  useFocusEffect(
    React.useCallback(() => {
      modifySpielerLength(DEFAULTSPIELERANZAHL, spielModi[0]);
    }, [])
  );

  const createNewPlayer = (): Spieler => {
    const newSpieler: Spieler = {
      name: "",
      lifePoints: spielModus.lifePoints,
      deckColor: createDeckList(),
    };

    return newSpieler;
  };

  const createDeckList = (): Deck[] => {
    const alleDecks: Deck[] = [];
    deckColors.forEach((color) => {
      const deck: Deck = {
        color: color.name,
        selected: false,
      };
      alleDecks.push(deck);
    });

    return alleDecks;
  };

  const onPressStandard = () => {
    setSpielModus(spielModi[0]);
    modifySpielerLength(DEFAULTSPIELERANZAHL, spielModi[0]);
    setZeigeCommanderSpielerAnzahl(false);
  };

  const onPressCommander = () => {
    setSpielModus(spielModi[1]);
    modifySpielerLength(DEFAULTSPIELERANZAHL);
    setZeigeCommanderSpielerAnzahl(true);
  };

  const onPressTwoPlayer = () => {
    modifySpielerLength(DEFAULTSPIELERANZAHL);
  };

  const onPressThreePlayer = () => {
    modifySpielerLength(3);
  };

  const onPressFourPlayer = () => {
    modifySpielerLength(4);
  };

  const onPressFivePlayer = () => {
    modifySpielerLength(5);
  };

  const modifySpielerLength = (
    expectedLength: number,
    spielFormat: SpielModus = spielModi[1]
  ) => {
    const newSpieler = spieler.slice(0, expectedLength);

    while (newSpieler.length < expectedLength) {
      newSpieler.push(createNewPlayer());
    }

    const updatedSpieler = newSpieler.map((spieler) => ({
      ...spieler,
      lifePoints: spielFormat.lifePoints,
    }));

    setSpieler(updatedSpieler);
  };

  const handleNameChange = (name: string, index: number) => {
    const updatedNames = [...spieler];
    updatedNames[index].name = name;
    setSpieler(updatedNames);
  };

  const onPressCreateCounter = () => {
    for (let index = 0; index < spieler.length; index++) {
      if (spieler[index].name === "" || spieler[index].name === undefined) {
        Alert.alert("Spieler " + (index + 1) + " hat keinen Namen");
        return;
      }
    }

    navigation.navigate("Counter", { gameParameter });
  };

  const onPressIcon = (colorName: string, index: number) => {
    setSpieler((prevSpieler) => {
      const newSpieler: Spieler[] = [...prevSpieler];
      const updatedDeck: Deck = newSpieler[index].deckColor.find(
        (e) => e.color === colorName
      )!;

      if (updatedDeck) {
        updatedDeck.selected = !updatedDeck.selected;
      }

      return newSpieler;
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={
            spielModus === spielModi[0] ? styles.selectedButton : styles.button
          }
          onPress={onPressStandard}
        >
          <Text style={styles.buttonText}>Standard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            spielModus === spielModi[1] ? styles.selectedButton : styles.button
          }
          onPress={onPressCommander}
        >
          <Text style={styles.buttonText}>Commander</Text>
        </TouchableOpacity>
      </View>

      {zeigeCommanderSpielerAnzahl && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={spieler.length === 2 ? styles.selectedButton : styles.button}
            onPress={onPressTwoPlayer}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={spieler.length === 3 ? styles.selectedButton : styles.button}
            onPress={onPressThreePlayer}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={spieler.length === 4 ? styles.selectedButton : styles.button}
            onPress={onPressFourPlayer}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={spieler.length === 5 ? styles.selectedButton : styles.button}
            onPress={onPressFivePlayer}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
        </View>
      )}
      <View>
        {spieler.map((spieler, index) => (
          <View key={index} style={{ marginBottom: 10, flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              placeholder={`Name von Spieler ${index + 1}`}
              value={spieler.name}
              onChangeText={(text) => handleNameChange(text, index)}
            />
            {spieler.deckColor.map((deck, innerChild) => (
              <View key={innerChild}>
                <TouchableOpacity
                  onPress={() => onPressIcon(deck.color, index)}
                >
                  <Image
                    style={styles.selectedDeckColorButton}
                    source={
                      deck.selected
                        ? deckColors.find((e) => e.name === deck.color)?.path
                        : deckColors.find((e) => e.name === deck.color)
                            ?.unselectedPath
                    }
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPressCreateCounter}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
