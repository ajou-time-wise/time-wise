import { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, Button } from "react-native";
import TodoContent from "../components/ManageTodo/TodoContent";
import TodoTime from "../components/ManageTodo/TodoTime";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Colors } from "../constant/colors";
import { useTodoContext } from "../hooks/TodoProvider";
import TodoDate from "../components/ManageTodo/TodoDate";
import { useScheduleContext } from "../hooks/ScheduleProvider";
import TodoChart from "../components/ManageTodo/TodoChart";

function ManageTodoView({ navigation }) {
  const { data, addTodo } = useTodoContext();
  const { scheduleData } = useScheduleContext();

  const [todo, setTodo] = useState({
    date: new Date(),
    content: "",
    requireTime: new Date(0, 0, 0, 1, 0, 0, 0),
  });

  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(0, 0, 0, 1, 0, 0, 0),
      onChange: (event, selectTime) => {
        const currentTime = selectTime || todo.requireTime;
        setTodo((prevTodo) => ({ ...prevTodo, requireTime: currentTime }));
      },
      mode: "time",
      is24Hour: true,
    });
  };

  const addTodoHandler = async () => {
    await addTodo(todo.date, todo.content, todo.requireTime);
    navigation.navigate("TimeWiseMainView");
  };

  return (
    <View style={styles.container}>
      <TodoDate todo={todo} setTodo={setTodo} />
      <TodoChart todos={data} schedules={scheduleData} todo={todo} />
      <TodoContent todo={todo} setTodo={setTodo} />
      <Pressable
        onPress={showTimePicker}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <TodoTime todo={todo} setTodo={setTodo} text={"Require Time"} />
      </Pressable>
      <View style={{ width: 200, borderRadius: 5 }}>
        <Button title="ADD" color={Colors.color50} onPress={addTodoHandler} />
      </View>
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
