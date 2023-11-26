import { View, Text, StyleSheet } from "react-native";
import { printTime } from "../../utils/time";

function TodoTime({ text, todo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{text}</Text>
      <Text style={styles.timeText}>{printTime(todo.requireTime)}</Text>
    </View>
  );
}

export default TodoTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 30,
  },
});
