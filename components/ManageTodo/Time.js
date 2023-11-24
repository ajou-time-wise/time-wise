import { View, Text, StyleSheet } from "react-native";

function Time({ text, todo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{text}</Text>
      <Text style={styles.timeText}>
        {todo.requireTime.getHours()} : {todo.requireTime.getMinutes()}
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
    marginHorizontal: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 30,
  },
});
