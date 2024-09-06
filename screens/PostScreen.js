import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AddNewPost from "../newPost/AddNewPost";


const PostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'black' , flex:1}}>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default PostScreen;
