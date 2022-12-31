import { Pressable, Text, StyleSheet } from "react-native";

export default function SecondaryInputButton(props) {
  return (
    <Pressable>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter-600",
    fontSize: 16,
  },
});
