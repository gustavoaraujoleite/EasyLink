/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE SHARE MODAL CONTENT
 */

import { StyleSheet, Text, View } from "react-native";
import CardTitle from "../../UI/Card/DefaultCardTitle";
import DefaultInput from "../../UI/DefaultTextInput";
import DefaultVerboseButton from "../../UI/Buttons/DefaultVerboseButton";
import Card from "../../UI/Card/CardModel";
import CopyLinkButton from "../../UI/Buttons/CopyLinkButton";

export default function ShareModal() {
  return (
    <Card>
      <View style={styles.titleContainer}>
        <CardTitle title="Compartilhar" color="#1268B3" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Compartilhe com seus amigos</Text>
      </View>
      <View style={styles.inputContainer}>
        <DefaultInput placeholder="Email" />
      </View>

      <DefaultVerboseButton backgroundColor={"#1268B3"} title="Concluir" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>ou</Text>
      </View>
      <View style={styles.copyLinkBtnContainer}>
        <CopyLinkButton text="Copiar Link" />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 24,
  },
  text: {
    fontFamily: "Inter-500",
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 48,
  },
  copyLinkBtnContainer: {
    alignItems: "center",
  },
});
