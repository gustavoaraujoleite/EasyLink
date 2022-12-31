/**
 * COMPONENT RESPONSIBLE FOR HOLDING THE STRUCTURE OF THE ACTION BUTTON
 * (BUTTON THAT INCLUDES BACKGROUND COLOR FEATURE TO BE CHOSEN DYNAMICALLY)
 */

import { View, Pressable, Text, StyleSheet } from "react-native";

export default function DefaultVerboseButton(props) {
  return (
    <View>
      <Pressable style={[styles.btn, props.backgroundColor]}>
        <Text style={styles.btnText}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 36,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
});
