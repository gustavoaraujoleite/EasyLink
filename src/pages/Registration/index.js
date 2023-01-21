import { useState } from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import easyLinkLogo from "../../../assets/easy_link_logo.png";
import DefaultVerboseButton from "../../components/UI/Buttons/DefaultVerboseButton";
import LoginButton from "../../components/UI/Buttons/LoginButtons";
import SecondaryInputButton from "../../components/UI/Buttons/SecondaryInputButton";
import Checkbox from "../../components/UI/Checkbox";
import DefaultInput from "../../components/UI/DefaultTextInput";

export default function Registration() {
  const [rememberUser, setRememberUser] = useState(null);
  return (
    <SafeAreaView>
      <View style={styles.upper_container}>
        <View style={styles.logo_container}>
          <Image source={easyLinkLogo} />
        </View>
        <View>
          <Text style={styles.welcome_text}>Crie sua conta</Text>
        </View>
        <View style={styles.back_login_container}>
          <Text style={styles.back_login_question}>Não possui uma conta? </Text>
          <SecondaryInputButton
            text="Criar conta"
            textStyle={styles.back_login_btn}
          />
        </View>
      </View>
      <View style={styles.input_container}>
        <DefaultInput placeholder="Nome" />
        <DefaultInput placeholder="E-mail" />
        <DefaultInput placeholder="Senha" />
        <DefaultInput placeholder="Confirmar Senha" />
      </View>

      <View style={styles.checkbox_container}>
        <Checkbox
          value={(data) => setRememberUser(data)}
          text="Lembre de mim"
        />
      </View>

      <View style={styles.verbose_button_container}>
        <DefaultVerboseButton title="Criar conta" backgroundColor="#1268B3" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upper_container: {
    alignItems: "center",
    marginTop: 56,
  },
  logo_container: {
    marginBottom: 32,
  },
  welcome_text: {
    fontFamily: "Inter-600",
    fontSize: 32,
    marginBottom: 8,
    color: "#141414",
  },
  back_login_container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
  },
  back_login_question: {
    color: "#595959",
    fontSize: 12,
    fontFamily: "Inter-500",
  },
  back_login_btn: {
    color: "#2D86B8",
    fontSize: 12,
    fontFamily: "Inter-500",
  },
  input_container: {
    marginHorizontal: 16,
  },
  checkbox_container: {
    marginTop: 17,
    marginHorizontal: 26,
  },
  verbose_button_container: {
    marginTop: 32,
    marginHorizontal: 16,
  },
});
