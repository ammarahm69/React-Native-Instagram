import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const SignUp = () => {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("An email is required"),
    username: Yup.string()
      .required("A username is required")
      .min(2, "Username must be at least 2 characters"),
    password: Yup.string()
      .required("A password is required")
      .min(6, "Your password has to have at least 6 characters"),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            {/* Username Input */}
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    touched.username && errors.username ? "red" : "#ccc",
                },
              ]}
            >
              <TextInput
                placeholder="Username"
                autoCapitalize="none"
                autoFocus={true}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                style={styles.textInput}
              />
            </View>
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            {/* Email Input */}
            <View
              style={[
                styles.inputField,
                {
                  borderColor: touched.email && errors.email ? "red" : "#ccc",
                },
              ]}
            >
              <TextInput
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={styles.textInput}
              />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            {/* Password Input */}
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    touched.password && errors.password ? "red" : "#ccc",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={styles.textInput}
              />
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Submit Button */}
            <Pressable
              onPress={handleSubmit}
              style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
              ]}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
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
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    padding: 6,
  },
  textInput: {
    height: 15,
    flex: 1,
    fontSize:19,
    marginBottom: 10,
    marginTop:3
  },
  button: {
    backgroundColor: "#0096F6",
    borderRadius: 5,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "#007BB6",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -5,
    marginBottom: 5,
  },
});

export default SignUp;
