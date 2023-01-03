/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE DEFAULT TEXT AREA STRUCTURE
 */

import { StyleSheet, Text, TextInput, View } from "react-native";

export default function DefaultTextArea(props) {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.text}>{props.label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder={props.placeholder}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#333",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  input: {
    textAlignVertical: "top",
  },
});
