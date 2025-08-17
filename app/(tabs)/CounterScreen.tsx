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
  }, [gameParameter]);

  const onPressDecrementLifePoints = (index: number) => {
    setAlleSpieler((prevState) =>
      prevState.map((spieler, i) =>
        i === index
          ? {
              ...spieler,
              lifePoints: Math.max(0, spieler.lifePoints - 1),
            }
          : spieler
      )
    );
  };

  const onPressIncrementLifePoints = (index: number) => {
    setAlleSpieler((prevState) =>
      prevState.map((spieler, i) =>
        i === index
          ? {
              ...spieler,
              lifePoints: Math.max(0, spieler.lifePoints + 1),
            }
          : spieler
      )
    );
  };

  const getTransformStyle = (index: number) => {
    const transforms = [];
    if (alleSpieler.length === 2 && index === 0) {
      transforms.push({ rotate: "180deg" });
    }

    if (alleSpieler.length === 3) {
      if (index === 0) {
        transforms.push({ rotate: "180deg" });
      }
      if (index === 1) {
        transforms.push({ rotate: "0deg" });
      }
      if (index === 2) {
        transforms.push({ rotate: "0deg" });
      }
    }

    if (alleSpieler.length === 4) {
      if (index === 0) {
        transforms.push({ rotate: "180deg" });
      }
      if (index === 1) {
        transforms.push({ rotate: "180deg" });
      }
    }

    return transforms;
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
              backgroundColor: deckColors.find(
                (e) =>
                  e.name ===
                  spieler.deckColor.find((deck) => deck.selected === true)
                    ?.color
              )?.brighterCode,
              transform: getTransformStyle(index),
            },
          ]}
        >
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => onPressIncrementLifePoints(index)}
          >
            <FontAwesome name="plus" size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => onPressDecrementLifePoints(index)}
          >
            <FontAwesome name="minus" size={40} color="white" />
          </TouchableOpacity>

          <Text style={styles.playerNamePosition}>{spieler.name}</Text>

          <Text style={styles.scoreText}>{spieler.lifePoints}</Text>

          <Image
            style={styles.image}
            source={
              deckColors.find(
                (e) =>
                  e.name ===
                  spieler.deckColor.find((deck) => deck.selected === true)
                    ?.color
              )?.path
            }
          />
        </View>
      ))}
    </View>
  );
}
