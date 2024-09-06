import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../component/Header";
import Stories from "../component/Stories";
import Post from "../component/Post";
import PostsData from "../data/post"; // Ensure this file path is correct
import BottomTab from "../component/BottomTab";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {PostsData.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTab />
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
