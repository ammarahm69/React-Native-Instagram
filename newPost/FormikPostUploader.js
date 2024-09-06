import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Divider } from "react-native-elements";

const PLACEHOLDER_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpZaeWxczipxrTdSIThz5hmwrRYhEeeAl5A&s";
const uploadPostSchema = Yup.object().shape({
  imageURL: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached  the characters limit."),
});
const FormikPostUploader = () => {
  const [thumbnailURL, setThumbnailURL] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{ caption: "", imageURL: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 15,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: thumbnailURL ? thumbnailURL : PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                style={{ color: "white", fontSize: 20 }}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={1} orientation="horizontal" />
          <TextInput
            placeholder="Enter Image URL"
            onChange={(e) => setThumbnailURL(e.nativeEvent.text)}
            placeholderTextColor="gray"
            style={{ color: "white", fontSize: 18 }}
            multiline={true}
            onChangeText={handleChange("imageURL")}
            onBlur={handleBlur("imageURL")}
            value={values.imageURL}
          />
          {errors.imageURL && (
            <Text style={{ color: "red" }}>{errors.imageURL}</Text>
          )}

          <Button
            onPress={handleSubmit}
            title="Share"
            disabled={!isValid}
            style={{ marginTop: 30 }}
          />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
