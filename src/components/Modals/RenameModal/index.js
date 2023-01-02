/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE RENAME MODAL CONTENT
 */

import { StyleSheet, View } from "react-native";
import Card from "../../Card";
import CardTitle from "../../UI/DefaultCardTitle";
import DefaultInput from "../../UI/DefaultTextInput";
import DefaultVerboseButton from "../../UI/DefaultVerboseButton";

export default function RenameModal() {
  return (
    <Card>
      <View style={styles.titleContainer}>
        <CardTitle title="Renomear" color="#1268B3" />
      </View>
      <View style={styles.inputContainer}>
        <DefaultInput placeholder="Nome" />
      </View>

      <DefaultVerboseButton backgroundColor={"#1268B3"} title="Concluir" />
    </Card>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 48,
  },
});
