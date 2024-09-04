import { View, Text, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: post.profile_picture }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
        />
        <Text style={{ color: "white", fontWeight: "700" }}>{post.user}</Text>
        <Text style={{ color: "white", marginLeft: 5 }}>•</Text>

      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <Image
      source={{ uri: post.imageURL }}
      style={{ height: 300, resizeMode: 'cover' }}
    />
  );
};

export default Post;
