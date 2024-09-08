import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { Button, Divider } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Your password has to have at least 8 characters"),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            {/* Email Input */}
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Email or Phone Number"
                placeholderTextColor="#444"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                style={styles.textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputField}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#444"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                style={styles.textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text>Forget Password?</Text>
            </View>

            <Button
              title="Log In"
              buttonStyle={styles.loginButton}
              onPress={handleSubmit}
            />

            <View style={styles.signUpContainer}>
              <Text style={{ fontWeight: "600" }}>Don't have an account?</Text>
              <Pressable onPress={() => console.log("Sign Up button clicked")}>
                <Text style={{ color: "#0096F6" }}>Sign Up</Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
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
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"center",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    padding: 5,
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
  signUpContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -5,
    marginBottom: 5,
  },
});

export default LoginForm;
