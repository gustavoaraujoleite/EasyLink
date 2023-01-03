/**
 * COMPONENT RESPONSIBLE FOR RENDERING THE DELETE MODAL CONTENT
 */

import { StyleSheet, Text, View } from "react-native";
import DefaultVerboseButton from "../../UI/Buttons/DefaultVerboseButton";
import SecondaryInputButton from "../../UI/Buttons/SecondaryInputButton";
import Card from "../../UI/Card/CardModel";
import CardTitle from "../../UI/Card/DefaultCardTitle";

export default function DeleteModal() {
  return (
    <>
      <Card>
        <View style={styles.cardTitleContainer}>
          <CardTitle color="#CB151C" title="Excluir" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.questionText}>
            Tem certeza que deseja excluir?
          </Text>
          <Text style={styles.explanationText}>
            Essa pasta será excluída permanentemente
          </Text>
        </View>
        <DefaultVerboseButton title="Excluir" backgroundColor={"#CB151C"} />
        <View style={styles.cancelBtnContainer}>
          <SecondaryInputButton text="Cancelar" textStyle={styles.cancelBtn} />
        </View>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  cardTitleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  textContainer: {
    alignItems: "center",
  },
  questionText: {
    fontFamily: "Inter-500",
    color: "#333333",
    fontSize: 16,
    marginBottom: 4,
  },
  explanationText: {
    fontFamily: "Inter-400",
    color: "#CB151C",
    fontSize: 12,
    marginBottom: 48,
  },
  cancelBtnContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  cancelBtn: {
    color: "#333",
  },
});
