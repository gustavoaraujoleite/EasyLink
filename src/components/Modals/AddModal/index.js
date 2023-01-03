/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE ADD MODAL CONTENT
 */

import { StyleSheet, View } from "react-native";
import DefaultVerboseButton from "../../UI/Buttons/DefaultVerboseButton";
import Card from "../../UI/Card/CardModel";
import CardTitle from "../../UI/Card/DefaultCardTitle";
import DefaultInput from "../../UI/DefaultTextInput";

export default function AddModal() {
  return (
    <Card>
      <View style={styles.titleContainer}>
        <CardTitle title="Adicionar" color="#1268B3" />
      </View>
      <View>
        <DefaultInput placeholder="Nome" />
      </View>
      <View style={styles.linkInputContainer}>
        <DefaultInput placeholder="Link" />
      </View>

      <DefaultVerboseButton backgroundColor={"#1268B3"} title="Adicionar Link" />
    </Card>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  linkInputContainer: {
    marginTop: 24,
    marginBottom: 40,
  },
});
