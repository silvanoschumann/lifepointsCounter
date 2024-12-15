import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../components/types";
import styles from "../css/styles";
import React, { useEffect, useState } from "react";
import { deckColors } from "../components/constants";
import { FontAwesome } from "@expo/vector-icons";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Counter">;

export default function Counter() {
  const route = useRoute<DetailScreenRouteProp>();
  const { gameParameter } = route.params;
  const initialLifePoints: number = gameParameter.lifePoints;

  const [lifePoints, setLifePoints] = useState<number[]>([]);
  const spielerNamen: string[] = gameParameter.spielerNamen;

  useEffect(() => {
    for (let index = 0; index < spielerNamen.length; index++) {
      lifePoints.push(initialLifePoints);
    }
    setLifePoints(lifePoints);
  }, []);

  const onPressDecrementLifePoints = (index: number) => {
    setLifePoints((prevState) => {
      const updateLifePoints = [...prevState];
      if (updateLifePoints[index] > 0) {
        updateLifePoints[index] = updateLifePoints[index] - 1;
      }

      return updateLifePoints;
    });
  };

  const onPressIncrementLifePoints = (index: number) => {
    setLifePoints((prevState) => {
      const updateLifePoints = [...prevState];
      updateLifePoints[index] = updateLifePoints[index] + 1;

      return updateLifePoints;
    });
  };

  return (
    <View style={styles.counterContainer}>
      <StatusBar style="auto" />
      {spielerNamen.map((spieler, index) => (
        <View
          key={index}
          style={[
            styles.playerContainer,
            {
              backgroundColor: deckColors[4].brighterCode,
            },
          ]}
        >
          <Image
            style={[styles.imagePosition, { flex: 0 }]}
            source={deckColors[4].path}
          />
          <TouchableOpacity
            style={[
              styles.counterButton,
              {
                flex: 1,
                backgroundColor: "transparent",
              },
            ]}
            onPress={() => onPressIncrementLifePoints(index)}
          >
            <View style={styles.playerPosition}>
              <Text style={styles.buttonText}>{lifePoints[index]}</Text>
              <Text style={styles.buttonText}>{spieler}</Text>
            </View>
            <FontAwesome name="plus" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.counterButton,
              {
                flex: 1,
                backgroundColor: "transparent",
              },
            ]}
            onPress={() => onPressDecrementLifePoints(index)}
          >
            <FontAwesome name="minus" size={40} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
