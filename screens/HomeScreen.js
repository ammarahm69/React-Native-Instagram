import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../component/Header";
import Stories from "../component/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />
      <Stories />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
