/**
 * COMPONENT RESPONSIBLE FOR HOLDING THE STRUCTURE OF THE CARD TO BE USED AS
 * BASE FOR THE MAIN CONTENTS
 */

import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIconContainer}>
        <AntDesign name="close" size={20} color="#1c1c1c" />
      </View>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  closeIconContainer: {
    alignItems: "flex-end",
  },
});
