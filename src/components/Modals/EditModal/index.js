/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE EDIT MODAL CONTENT
 */

import { StyleSheet, View } from "react-native";
import DefaultVerboseButton from "../../UI/Buttons/DefaultVerboseButton";
import Card from "../../UI/Card/CardModel";
import CardTitle from "../../UI/Card/DefaultCardTitle";
import DefaultTextArea from "../../UI/DefaultTextArea";
import DefaultInput from "../../UI/DefaultTextInput";

export default function EditModal() {
  return (
    <Card>
      <View style={styles.titleContainer}>
        <CardTitle title="Editar" color="#1268B3" />
      </View>
      <View>
        <DefaultInput placeholder="Nome" />
      </View>
      <View style={styles.linkInputContainer}>
        <DefaultTextArea
          placeholder={"Escreva aqui"}
          label="Descrição (Opcional)"
        />
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
  linkInputContainer: {
    marginTop: 24,
    marginBottom: 40,
  },
});
