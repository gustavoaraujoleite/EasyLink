/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE DEFAULT TEXT INPUT USED IN THE MODALS
 */

import { StyleSheet, TextInput, View } from "react-native";

export default function DefaultInput(props) {
  return (
    <View>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    padding: 16,
    borderRadius: 8,
  },
});
