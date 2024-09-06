import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Formik Post Uploader */}
      <FormikPostUploader />
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="chevron-left" size={25} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 17,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AddNewPost;
