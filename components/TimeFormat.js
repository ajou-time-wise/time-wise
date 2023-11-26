import { View, Text, StyleSheet } from "react-native";
import { printTime } from "../utils/time";

function TimeFormat({ text, time }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{text}</Text>
      <Text style={styles.timeText}>{printTime(time)}</Text>
    </View>
  );
}

export default TimeFormat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  titleText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 20,
  },
});
