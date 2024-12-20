import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../components/types";
import styles from "../css/styles";
import React, { useEffect, useState } from "react";
import { deckColors } from "../components/constants";
import { FontAwesome } from "@expo/vector-icons";
import { Spieler } from "../components/model";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Counter">;

export default function Counter() {
  const route = useRoute<DetailScreenRouteProp>();
  const { gameParameter } = route.params;

  const [alleSpieler, setAlleSpieler] = useState<Spieler[]>([]);

  useEffect(() => {
    setAlleSpieler(gameParameter.spieler);
  }, []);

  const onPressDecrementLifePoints = (index: number) => {
    let updatedSpieler = [...alleSpieler];
    updatedSpieler[index].lifePoints = updatedSpieler[index].lifePoints - 1;
    setAlleSpieler(updatedSpieler);
  };

  const onPressIncrementLifePoints = (spieler: Spieler, index: number) => {
    const spielerCollection = [...alleSpieler];
    let updatedSpieler = spieler;
    updatedSpieler.lifePoints = spielerCollection[index].lifePoints + 1;
    spielerCollection[index] = updatedSpieler;

    console.log(updatedSpieler)
    setAlleSpieler(spielerCollection);
  };

  return (
    <View style={styles.counterContainer}>
      <StatusBar style="auto" />
      {alleSpieler.map((spieler, index) => (
        <View
          key={index}
          style={[
            styles.playerContainer,
            {
              backgroundColor: deckColors.find(e => e.name === spieler.deckColor.find(deck => deck.selected === true)?.color)?.brighterCode,
            },
          ]}>

          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => onPressIncrementLifePoints(spieler, index)}>
            <FontAwesome name="plus" size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => onPressDecrementLifePoints(index)}>
            <FontAwesome name="minus" size={40} color="white" />
          </TouchableOpacity>

          <View style={[styles.playerNamePosition, { backgroundColor: "blue" }]}>
            <Text>{spieler.name}</Text>
          </View>

          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>{spieler.lifePoints}</Text>
          </View>

          <Image
            style={styles.imagePosition}
            source={deckColors.find(e => e.name === spieler.deckColor.find(deck => deck.selected === true)?.color)?.path}
          />
        </View>
      ))}
    </View>
  );
}
