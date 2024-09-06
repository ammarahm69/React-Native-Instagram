import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import SignedInStack from "./navigation";
export default function App() {
  return (
   <SignedInStack />
  );
}

