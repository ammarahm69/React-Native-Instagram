import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
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
      style={{ height: 450, width: "100%", resizeMode: "cover" }}
    />
  );
};

const PostFooter = ({ post }) => {
  return (
    <View style={{ marginHorizontal: 15, marginTop: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity>
            <Icon
              name="heart-o"
              size={30}
              color="white"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="comment-o"
              size={30}
              color="white"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Icon name="bookmark-o" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text style={{ color: "white", fontWeight: "600", marginTop: 5 }}>
        {post.likes.toLocaleString()} likes
      </Text>

      {/* Caption */}
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "700" }}>{post.user} </Text>
        {post.caption}
      </Text>

      {/* Comments */}
      {post.comments.length > 0 && (
        <View style={{ marginTop: 5 }}>
          <Text style={{ color: "gray" }}>
            View all {post.comments.length} comments
          </Text>
          {post.comments.slice(0, 2).map((comment, index) => (
            <Text key={index} style={{ color: "white" }}>
              <Text style={{ fontWeight: "700" }}>{comment.user} </Text>
              {comment.comment}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Post;
