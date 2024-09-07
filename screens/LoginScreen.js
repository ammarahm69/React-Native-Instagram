import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import LoginForm from "../component/LoginForm";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("../assets/1_Instagram_colored_svg_1-512.webp")} style={styles.logo}/>
      </View>
      {/* LogoForm */}
      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
    flex: 1,
  },
  logo:{
    marginTop: 60,
    alignSelf: "center",
    height: 80,
    width: 80
  }
});

export default LoginScreen;
