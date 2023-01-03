/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE COPY LINK BUTTON STRUCTURE
 */

import { Pressable, StyleSheet, Text } from "react-native";

export default function CopyLinkButton(props) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  text: {
    color: "#2D86B8",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
});
