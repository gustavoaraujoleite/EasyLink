import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import DeleteModal from "./src/components/Modals/DeleteModal";
import RenameModal from "./src/components/Modals/RenameModal";
import ShareModal from "./src/components/Modals/ShareModal";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Inter-600": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-500": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-400": require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ShareModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  btnText: {
    color: "red",
  },
});
