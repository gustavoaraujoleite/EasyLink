import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import easyLinkLogo from "../../../assets/easy_link_logo.png";
import DefaultVerboseButton from "../../components/UI/Buttons/DefaultVerboseButton";
import LoginButton from "../../components/UI/Buttons/LoginButtons";
import SecondaryInputButton from "../../components/UI/Buttons/SecondaryInputButton";
import DefaultInput from "../../components/UI/DefaultTextInput";
import googleLogo from "../../../assets/logos_google-icon.png";
import AppleLogo from "../../../assets/ic_baseline-apple.png";
export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.main_container}>
        <View style={styles.logo_container}>
          <Image source={easyLinkLogo} />
        </View>
        <View>
          <Text style={styles.welcome_text}>Olá, faça seu login!</Text>
        </View>
      </View>
      <View style={styles.input_container}>
        <DefaultInput placeholder="E-mail" />
        <DefaultInput placeholder="Senha" />

        <View style={styles.forgot_password_btn_container}>
          <SecondaryInputButton
            text="Esqueceu sua senha?"
            textStyle={styles.forgot_password_btn}
          />
        </View>

        <DefaultVerboseButton title="Entrar" backgroundColor="#1268B3" />

        <View style={styles.or_text_container}>
          <Text style={styles.or_text}>ou</Text>
        </View>
        <LoginButton source={googleLogo} title="Entrar com Gmail" />
        <LoginButton source={AppleLogo} title="Entrar com Apple" />
      </View>

      <View style={styles.footer_text}>
        <Text>Não possui uma conta? </Text>
        <SecondaryInputButton
          text="Criar conta"
          textStyle={styles.create_account_btn}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    alignItems: "center",
    marginTop: 56,
  },
  logo_container: {
    marginBottom: 32,
  },
  welcome_text: {
    fontFamily: "Inter-500",
    fontSize: 16,
    marginBottom: 42,
    color: "#141414",
  },
  input_container: {
    marginHorizontal: 16,
  },
  forgot_password_btn_container: {
    alignItems: "flex-end",
    marginBottom: 32,
  },
  forgot_password_btn: {
    color: "#2D86B8",
    fontSize: 12,
    marginTop: 8,
    fontFamily: "Inter-400",
  },
  or_text_container: {
    alignItems: "center",
    marginTop: 16,
  },
  or_text: {
    fontFamily: "Inter-400",
    fontSize: 12,
    color: "#141414",
  },
  footer_text: {
    marginTop: 64,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  create_account_btn: {
    color: "#2D86B8",
    fontSize: 12,
    fontFamily: "Inter-600",
  },
});
