import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { getFormattedDate } from "../utils/date";
import { Colors } from "../constant/colors";
import TodoDate from "../components/ManageTodo/TodoDate";
import TodoContent from "../components/ManageTodo/TodoContent";
import Time from "../components/ManageTodo/Time";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

function ManageTodoView() {
  const [todo, setTodo] = useState({
    date: new Date(),
    isChecked: false,
    content: "",
    requireTime: new Date(),
  });
  const [selectTime, setSelectTime] = useState(todo.requireTime);
  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: selectTime,
      onChange: (event, selectTime) => {
        const currentTime = selectTime || todo.requireTime;
        setTodo((prevTodo) => ({ ...prevTodo, requireTime: currentTime }));
      },
      mode: "time",
      is24Hour: true,
    });
  };
  return (
    <View style={styles.container}>
      <TodoDate todo={todo} setTodo={setTodo} />
      <TodoContent todo={todo} setTodo={setTodo} />
      <Pressable
        onPress={showTimePicker}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Time todo={todo} setTodo={setTodo} text={"Require Time"} />
      </Pressable>
    </View>
  );
}

export default ManageTodoView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
