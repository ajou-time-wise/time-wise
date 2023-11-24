import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Todos from "../../data/Todos";
import { isEqulsDate } from "../../utils/date";

function MiniCalendar({ setTodo }) {
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          const todos = Todos.filter((todo) =>
            isEqulsDate(new Date(day.dateString), todo.date)
          );
          setTodo(todos);
        }}
      />
    </View>
  );
}

export default MiniCalendar;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
