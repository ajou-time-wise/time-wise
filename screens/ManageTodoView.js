import { useState } from "react";
import { View, StyleSheet, Pressable, Button } from "react-native";
import TodoContent from "../components/ManageTodo/TodoContent";
import Time from "../components/Time";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Colors } from "../constant/colors";
import { useTodoContext } from "../hooks/TodoProvider";
import DatePicker from "../components/DatePicker";

function ManageTodoView({ navigation }) {
  const { data, addTodo } = useTodoContext();

  const [todo, setTodo] = useState({
    date: new Date(),
    content: "",
    requireTime: new Date(),
  });

  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
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
      <DatePicker todo={todo} setTodo={setTodo} />
      <TodoContent todo={todo} setTodo={setTodo} />
      <Pressable
        onPress={showTimePicker}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Time todo={todo} setTodo={setTodo} text={"Require Time"} />
      </Pressable>
      <Button
        title="ADD"
        color={Colors.color50}
        onPress={() => addTodo(todo.date, todo.content, todo.requireTime)}
      />
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
