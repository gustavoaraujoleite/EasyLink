/**
 * COMPONENT RESPONSIBLE FOR HOLDING THE DEFAULT TITLE TO BE USED IN THE MODAL
 */

import { StyleSheet, Text, View } from "react-native";

export default function CardTitle(props) {
  return (
    <View>
      <Text style={[styles.text, { color: props.color }]}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "Inter-600",
  },
});
