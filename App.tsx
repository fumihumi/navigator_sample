import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/HomeScreen";
import { DetailsScreen } from "./src/DetailsScreen";
import { ThemeContext, themes } from "./src/ThemeContext";
import Routes, { RootStackParamList } from "./src/routes";
import { CreatePostScreen } from "./src/CreatePostScreen";

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Routes.Home} options={{ title: "Overview" }}>
            {props => <HomeScreen {...props} title="sample" />}
          </Stack.Screen>

          <Stack.Screen name={Routes.Details} component={DetailsScreen} />
          <Stack.Screen name={Routes.CreatePost} component={CreatePostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;
