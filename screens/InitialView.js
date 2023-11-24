import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

function InitialView() {
  return (
    <View style={styles.container}>
      <Ionicons name="time" size={100} color="black" />
      <Text style={styles.title}>Time Wise</Text>
    </View>
  );
}

export default InitialView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
