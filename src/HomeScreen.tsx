import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Button, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Routes, { RootStackParamList } from "./routes";
import { ThemeContext } from "./ThemeContext";
import { Container, BaseText } from "./atoms";

type HomeScreenProps = {
  title: string;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ title }) => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [count, setCount] = React.useState(0);
  const route = useRoute<RouteProp<RootStackParamList, "Home">>();

  useEffect(() => {
    if (route.params?.post) {
      console.log(JSON.stringify(route));
    }
  }, [route]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      )
    });
  }, [navigation, setCount]);

  return (
    <Container style={{ flex: 1, backgroundColor: theme.background }}>
      <BaseText theme={theme}>{`${route.name}Screen`}</BaseText>
      <BaseText theme={theme}>{`count: ${count}`}</BaseText>
      <Button
        title="Create Post"
        onPress={() => navigation.navigate(Routes.CreatePost)}
      />
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate(Routes.Profile, {
            name: `Profile${Math.random()
              .toString(36)
              .slice(-8)}`
          });
        }}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate(Routes.Details, {
            itemId: 88,
            otherParam: "hogehoge"
          });
        }}
      />
    </Container>
  );
};
