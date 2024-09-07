import { View, TextInput, StyleSheet, Text } from "react-native";
import React from "react";
import { Button, Divider } from "react-native-elements";

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Email or Phone Number"
          placeholderTextColor="#444"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          style={styles.textInput}
        />
        <Divider width={1} orientation="horizontal" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#444"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          style={styles.textInput}
        />
      </View>
      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text>Forget Password ?</Text>
      </View>
      <Button title="Log In" buttonStyle={styles.loginButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  inputField: {
    backgroundColor: "#FAFAFA",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#0096F6",
    borderRadius: 5,
    height: 45,
  },
});

export default LoginForm;
