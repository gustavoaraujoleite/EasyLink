/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE PLUS ICON IN ORDER TO ADD A FOLDER
 */

import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddFolderIcon(props) {
  return (
    <Pressable style={styles.container}>
      <AntDesign name="plus" size={40} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 66,
    backgroundColor: "#1268B3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
});
