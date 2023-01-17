import { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import camera from "../../../../../assets/images/icons/camera.png";
export default function PressableIcon(props) {
  return (
    <Pressable onPress={props.onPress} style={props.style}>
      <Image source={props.source} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerFocused: {
    backgroundColor: "#1268B3",
    padding: 6,
  },
});
