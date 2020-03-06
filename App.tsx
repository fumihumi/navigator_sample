import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Button } from "react-native";
import { HomeScreen } from "./src/HomeScreen";
import { DetailsScreen } from "./src/DetailsScreen";
import { ThemeContext, themes } from "./src/ThemeContext";
import Routes, { RootStackParamList } from "./src/routes";
import { CreatePostScreen } from "./src/CreatePostScreen";
import ReactNativeIcon from "./assets/rn.png";

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" }
          }}
        >
          <Stack.Screen
            name={Routes.Home}
            options={{
              // title: "Overview",
              headerTitle: props => <LogoTitle {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="Info"
                  color="#fff"
                />
              )
            }}
          >
            {props => <HomeScreen {...props} title="sample" />}
          </Stack.Screen>

          <Stack.Screen name={Routes.Details} component={DetailsScreen} />
          <Stack.Screen name={Routes.CreatePost} component={CreatePostScreen} />
          <Stack.Screen
            name={Routes.Profile}
            component={HomeScreen}
            options={({ route }) => ({
              title: route.params?.name || "xxx"
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;

function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} source={ReactNativeIcon} />;
}
