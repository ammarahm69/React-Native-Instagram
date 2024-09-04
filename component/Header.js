import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.IconsContainer}>
        {/* Add Icons */}
        <TouchableOpacity>
          <Image
            source={require("../assets/instagram-post-removebg-preview.png")}
            style={styles.iconsPost}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://icon-library.com/images/white-heart-icon/white-heart-icon-23.jpg",
            }}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
          <Image
            source={{
              uri: "https://i.pinimg.com/564x/da/55/0c/da550c8592639e347418c90c83c9110d.jpg",
            }}
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  IconsContainer: {
    flexDirection: "row",
    gap: 15,
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsPost: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    borderRadius: 100,
  },
  icons: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  badge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
  },
});
