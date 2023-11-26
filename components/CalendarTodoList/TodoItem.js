import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import IconButton from "../../components/IconButton";
import { Colors } from "../../constant/colors";
import { getFormattedTime } from "../../utils/time";
import { useTodoContext } from "../../hooks/TodoProvider";
import { getRequireTimeColor } from "../../utils/color";

function TodoItem({ todo, selectedDate }) {
  const { deleteTodo, changeTodoStatus } = useTodoContext();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.contentContainer}>
        <Checkbox
          value={todo.isComplete}
          onValueChange={() => changeTodoStatus(selectedDate, todo.id)}
        />
        <Text style={[styles.textStyle, styles.todoContentStyle]}>
          {todo.content}
        </Text>
        <View
          style={[
            styles.requireTimeContainer,
            {
              backgroundColor: getRequireTimeColor(new Date(todo.requireTime)),
            },
          ]}
        >
          <Text style={styles.textStyle}>
            {getFormattedTime(new Date(todo.requireTime))}
          </Text>
        </View>
        <IconButton
          icon="close"
          size={20}
          color={"#787878"}
          onPress={() => deleteTodo(selectedDate, todo.id)}
        />
      </View>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: Colors.color30,
    padding: 7,
    marginVertical: 5,
    borderRadius: 10,
  },
  textStyle: {
    marginHorizontal: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  todoContentStyle: {
    width: 130,
  },
  requireTimeContainer: {
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 1,
    width: 80,
  },
});
