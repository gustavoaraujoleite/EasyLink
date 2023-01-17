/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE NEW FOLDER MODAL CONTENT
 */

import { StyleSheet, Text, View } from "react-native";
import NewFolderGridIcons from "../../NewFolderIconsGrid";
import DefaultVerboseButton from "../../UI/Buttons/DefaultVerboseButton";
import Card from "../../UI/Card/CardModel";
import CardTitle from "../../UI/Card/DefaultCardTitle";
import DefaultTextArea from "../../UI/DefaultTextArea";
import DefaultInput from "../../UI/DefaultTextInput";
import PressableIcon from "../../UI/Icons/PressableIcons";
export default function NewFolder() {
  return (
    <Card>
      <View style={styles.titleContainer}>
        <CardTitle title="Criar Nova Pasta" color="#1268B3" />
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
      <View>
        <Text style={styles.text}>Escolha um ícone abaixo</Text>
      </View>
      <NewFolderGridIcons />
      <DefaultVerboseButton backgroundColor={"#1268B3"} title="Criar Pasta" />
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
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
});
