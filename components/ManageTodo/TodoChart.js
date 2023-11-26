import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { calculateTotalRequiredTimeForIncompleteTodos } from "../../utils/todo";
import { calculateTotalScheduleDuration } from "../../utils/schedule";
import { calculateRemainingTime } from "../../utils/time";
import TimeFormat from "../TimeFormat";
import { Pie } from "react-native-progress";
import { Colors } from "../../constant/colors";
import { calculateTimeProgress } from "../../utils/progres";
import { getColor } from "../../utils/color";

function TodoChart({ todos, schedules, todo }) {
  const [todoDuration, setTodoDuration] = useState(0);
  const [scheduleDration, setScheduleDuration] = useState(0);
  const [freeTime, setFreeTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    const todoDuration = calculateTotalRequiredTimeForIncompleteTodos(
      todos,
      todo.date,
      todo.requireTime
    );
    const scheduleDration = calculateTotalScheduleDuration(
      schedules,
      todo.date
    );
    const freeTime = calculateRemainingTime(
      new Date(todoDuration),
      new Date(scheduleDration)
    );
    const progress = calculateTimeProgress(
      new Date(todoDuration),
      new Date(scheduleDration)
    );
    const color = getColor(progress);

    setTodoDuration(new Date(todoDuration));
    setScheduleDuration(new Date(scheduleDration));
    setFreeTime(new Date(freeTime));
    setProgress(progress);
    setColor(color);
  }, [todo]);

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Spend Time</Text>
        <Pie progress={progress} size={100} color={color} />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <TimeFormat
          text={"Schedule Requrie Time"}
          time={new Date(scheduleDration)}
        />
        <TimeFormat text={"Todo Reuqire Time"} time={new Date(todoDuration)} />
        <TimeFormat text={"Today's Free Time"} time={new Date(freeTime)} />
      </View>
    </View>
  );
}

export default TodoChart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.chartBackgroundColor,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 300,
  },
});
