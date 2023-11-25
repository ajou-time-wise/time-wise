import { View, Text, StyleSheet } from "react-native";

function Time({ text, time }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{text}</Text>
      <Text style={styles.timeText}>
        {time.getHours()} : {time.getMinutes()}
      </Text>
    </View>
  );
}

export default Time;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 30,
  },
});
