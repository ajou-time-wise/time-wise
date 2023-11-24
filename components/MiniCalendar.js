import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import Todos from "../data/Todos";
import { isEqulsDate } from "../utils/date";

function MiniCalendar({ setTodo }) {
  return (
    <View>
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
