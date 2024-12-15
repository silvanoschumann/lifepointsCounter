import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../css/styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/types";
import { GameParameter, Spieler } from "../components/model";
import { spielModi } from "../components/constants";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export default function SelectionScreen() {
  const [spielModus, setSpielModus] = useState(spielModi[0]);
  const [spielerAnzahl, setSpielerAnzahl] = useState(2);
  const [zeigeCommanderSpielerAnzahl, setZeigeCommanderSpielerAnzahl] =
    useState(false);
  const [spielerNamen, setSpielerNamen] = useState<string[]>(["", ""]);
  const [spieler, setSpieler] = useState<Spieler[]>([]);

  const gameParameter: GameParameter = {
    lifePoints: spielModus.lifePoints,
    spielerNamen: spielerNamen,
    spieler: spieler,
  };

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onPressStandard = () => {
    setSpielModus(spielModi[0]);
    setSpielerAnzahl(2);
    setZeigeCommanderSpielerAnzahl(false);
    setSpielerNamen([spielerNamen[0], spielerNamen[1]]);
  };

  const onPressCommander = () => {
    setSpielModus(spielModi[1]);
    setZeigeCommanderSpielerAnzahl(true);
  };

  const onPressTwoPlayer = () => {
    setSpielerAnzahl(2);
    setSpielerNamen([spielerNamen[0], spielerNamen[1]]);
  };

  const onPressThreePlayer = () => {
    setSpielerAnzahl(3);
    setSpielerNamen([spielerNamen[0], spielerNamen[1], spielerNamen[2]]);
  };

  const onPressFourPlayer = () => {
    setSpielerAnzahl(4);
    setSpielerNamen([
      spielerNamen[0],
      spielerNamen[1],
      spielerNamen[2],
      spielerNamen[3],
    ]);
  };

  const onPressFivePlayer = () => {
    setSpielerAnzahl(5);
    setSpielerNamen([
      spielerNamen[0],
      spielerNamen[1],
      spielerNamen[2],
      spielerNamen[3],
      spielerNamen[4],
    ]);
  };

  const handleNameChange = (text: string, index: number) => {
    const updatedNames = [...spielerNamen];
    updatedNames[index] = text;
    setSpielerNamen(updatedNames);
  };

  const onPressCreateCounter = () => {
    for (let index = 0; index < spielerAnzahl; index++) {
      if (spielerNamen[index] === "" || spielerNamen[index] === undefined) {
        Alert.alert("Spieler " + (index + 1) + " hat keinen Namen");
        return;
      }
    }
    navigation.navigate("Counter", { gameParameter });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Ausgewählter Spielmodus: {spielModus.name}</Text>
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

      <Text>Ausgewählter Spielanzahl: {spielerAnzahl}</Text>
      {zeigeCommanderSpielerAnzahl && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={spielerAnzahl === 2 ? styles.selectedButton : styles.button}
            onPress={onPressTwoPlayer}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={spielerAnzahl === 3 ? styles.selectedButton : styles.button}
            onPress={onPressThreePlayer}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={spielerAnzahl === 4 ? styles.selectedButton : styles.button}
            onPress={onPressFourPlayer}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={spielerAnzahl === 5 ? styles.selectedButton : styles.button}
            onPress={onPressFivePlayer}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
        </View>
      )}
      <View>
        {spielerNamen.map((name, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <TextInput
              style={styles.input}
              placeholder={`Name von Spieler ${index + 1}`}
              value={name}
              onChangeText={(text) => handleNameChange(text, index)}
            />
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
