import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import bookIcon from "../../../assets/images/icons/bookIcon.png";
import camera from "../../../assets/images/icons/camera.png";
import chain from "../../../assets/images/icons/chain.png";
import computer from "../../../assets/images/icons/computer.png";
import lamp from "../../../assets/images/icons/lamp.png";
import medal from "../../../assets/images/icons/medal.png";
import musicScore from "../../../assets/images/icons/musicScore.png";
import rocket from "../../../assets/images/icons/rocket.png";
import tools from "../../../assets/images/icons/tools.png";
import PressableIcon from "../UI/Icons/PressableIcons";

export default function NewFolderGridIcons() {
  const [icons, setIcons] = useState([
    { id: 1, name: bookIcon, focused: false },
    { id: 2, name: camera, focused: false },
    { id: 3, name: chain, focused: false },
    { id: 4, name: computer, focused: false },
    { id: 5, name: lamp, focused: false },
    { id: 6, name: medal, focused: false },
    { id: 7, name: musicScore, focused: false },
    { id: 8, name: rocket, focused: false },
    { id: 9, name: tools, focused: false },
  ]);
  return (
    <View style={styles.container}>
      {icons.map((element) => {
        return (
          <PressableIcon
            key={element.id}
            source={element.name}
            style={styles.pressableIcon}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: 10,
  },
  pressableIcon: {
    marginRight: 50,
    marginBottom: 40,
    marginLeft: 16,
  },
});
