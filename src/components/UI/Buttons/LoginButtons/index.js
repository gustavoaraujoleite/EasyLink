/**
 * COMPONENT RESPONSIBLE FOR HOLDING THE STRUCTURE OF THE LOGIN BUTTON
 */

import { View, Pressable, Text, StyleSheet, Image } from "react-native";

export default function LoginButton(props) {
  return (
    <View>
      <Pressable style={[styles.btn]}>
        <View style={styles.text_container}>
          <Image source={props.source} style={styles.image} />

          <Text style={styles.btnText}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 36,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginVertical: 16,
  },
  image: {
    marginRight: 40,
  },
  text_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnText: {
    color: "#594D4D",
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
});
