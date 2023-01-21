import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function Checkbox(props) {
  const [pressed, setPressed] = useState(false);

  function checkedHandler() {
    props.value(!pressed);
    setPressed(!pressed);
  }
  return (
    <View style={styles.main_container}>
      <Pressable onPress={checkedHandler}>
        <View
          style={[
            styles.checkbox,
            {
              backgroundColor: !pressed ? "#fff" : "#3882c7",
              borderColor: !pressed ? "#585858" : "transparent",
            },
          ]}
        >
          {pressed ? <Feather name="check" size={12} color="#fff" /> : ""}
        </View>
      </Pressable>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 14,
    width: 14,
    borderWidth: 1,
    borderColor: "#585858",
    borderRadius: 4,
  },
  text: {
    color: "#595959",
    fontSize: 12,
    marginLeft: 10,
  },
});
