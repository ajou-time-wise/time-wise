import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import DatePicker from "../components/MangeScheduleView.js/DatePicker";
import { useState } from "react";
import Time from "../components/MangeScheduleView.js/Time";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Content from "../components/MangeScheduleView.js/Content";
import { Colors } from "../constant/colors";
import { useScheduleContext } from "../hooks/ScheduleProvider";

function ManageScheduleView() {
  const { scheduleData, addSchedule } = useScheduleContext();

  const [date, setDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [startTime, setStartime] = useState(new Date());
  const [content, setContent] = useState("");

  const showEndTimePicker = () => {
    showTimePicker(endTime, setEndTime);
  };

  const showStartTimePicker = () => {
    showTimePicker(startTime, setStartime);
  };
  //    end: new Date(2020, 1, 11, 16, 30),
  const showTimePicker = (time, setTime) => {
    DateTimePickerAndroid.open({
      value: time,
      onChange: (event, selectTime) => {
        const currentTime = selectTime || time;
        setTime(
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            currentTime.getHours(),
            currentTime.getMinutes(),
            0
          )
        );
      },
      mode: "time",
      is24Hour: true,
    });
  };

  return (
    <View style={styles.container}>
      <DatePicker date={date} setDate={setDate} />
      <View style={styles.timeContainer}>
        <Pressable
          onPress={showStartTimePicker}
          style={(pressed) => pressed && styles.pressed}
        >
          <Time text={"Start Time"} time={startTime} />
        </Pressable>
        <Pressable
          onPress={showEndTimePicker}
          style={(pressed) => pressed && styles.pressed}
        >
          <Time text={"End Time"} time={endTime} />
        </Pressable>
      </View>
      <Content
        placeholder={"Schedule Content"}
        text={content}
        setText={setContent}
      />
      <Button
        title="ADD"
        color={Colors.color50}
        onPress={() => addSchedule(date, content, startTime, endTime)}
      />
    </View>
  );
}

export default ManageScheduleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
