import React, { useContext, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Button } from "react-native";
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
  const route = useRoute<RouteProp<RootStackParamList, "Home">>();

  useEffect(() => {
    if (route.params?.post) {
      console.log(JSON.stringify(route));
    }
  }, [route.params?.post]);

  return (
    <Container style={{ flex: 1, backgroundColor: theme.background }}>
      <BaseText theme={theme}>Home Screen</BaseText>
      <Button
        title="Create Post"
        onPress={() => navigation.navigate(Routes.CreatePost)}
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
