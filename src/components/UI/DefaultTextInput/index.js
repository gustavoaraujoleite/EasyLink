/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE DEFAULT TEXT INPUT USED IN THE MODALS
 */

import { StyleSheet, Text, TextInput, View } from "react-native";

export default function DefaultInput(props) {
  return (
    <View>
      <Text style={styles.label}>{props?.label}</Text>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    padding: 16,
    borderRadius: 8,
  },
});
