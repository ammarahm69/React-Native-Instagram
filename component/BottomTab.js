import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Divider } from "react-native-elements";

const BottomTab = () => {
  return (
    <View style={{position:'relative'}}>
      <Divider width={1} orientation="vertical" />
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity>
          <Icon
            name="home"
            size={25}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="search"
            size={25}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 25, height: 25, marginRight: 10 }}
            source={{
              uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-reels-white-icon.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="shopping-bag"
            size={25}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="user-circle"
            size={25}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
