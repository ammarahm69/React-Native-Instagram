import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false, // "header" should be "headerShown"
};

const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="LoginScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInStack;
