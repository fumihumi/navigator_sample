import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Routes, { RootStackParamList } from "./routes";
import { Container, BaseText } from "./atoms";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

export function DetailsScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<DetailsScreenRouteProp>();

  return (
    <Container style={{ flex: 1 }}>
      <BaseText>Detail Screen, params:</BaseText>
      <BaseText>{JSON.stringify(route.params)}</BaseText>
      <Button
        title="Go to Detail ...again"
        onPress={() => {
          navigation.push(Routes.Details, {
            itemId: Math.floor(Math.random() * 100)
          });
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </Container>
  );
}
