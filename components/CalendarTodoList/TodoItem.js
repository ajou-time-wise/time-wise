import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import IconButton from "../../components/IconButton";
import { Colors } from "../../constant/colors";
import { getFormattedTime } from "../../utils/time";

function TodoItem({ todo }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.contentContainer}>
        <Checkbox value={todo.isComplete} onValueChange={() => {}} />
        <Text style={[styles.textStyle, styles.todoContentStyle]}>
          {todo.content}
        </Text>
        {/* <Text style={styles.textStyle}>
          {getFormattedTime(todo.requireTime)}
        </Text> */}
        <IconButton icon="close" size={20} color={"grey"} onPress={() => {}} />
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
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
  },
  textStyle: {
    marginHorizontal: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  todoContentStyle: {
    width: 200,
  },
});
