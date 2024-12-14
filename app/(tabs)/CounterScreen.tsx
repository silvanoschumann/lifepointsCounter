import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../components/types";
import styles from "../css/styles";
import { useEffect, useState } from "react";

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

  return (
    <View style={styles.counterContainer}>
      <StatusBar style="auto" />
      {spielerNamen.map((spieler, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.counterButton, { flex: 1 / spielerNamen.length }]}
          onPress={() => onPressDecrementLifePoints(index)}
        >
          <Text style={styles.buttonText}>{lifePoints[index]}</Text>
          <Text style={styles.buttonText}>{spieler}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
