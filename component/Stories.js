import { View, Text, ScrollView, Image, StyleSheet } from "react-native"; // Add Image to the import statement
import { USERS } from "../data/users";
import React from "react";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index}>
            <Image source={{ uri: story.imageUrl }} style={styles.storyImage} />
            <Text style={{ color: "white", marginRight: 5 }}>
              {story.username.length > 11
                ? story.username.slice(0, 10).toUpperCase() + "..."
                : story.username.toUpperCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
