import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/components/Card";
import CardTitle from "./src/components/UI/CardTitle";
export default function App() {

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Inter-600": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Card>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
  },
});
