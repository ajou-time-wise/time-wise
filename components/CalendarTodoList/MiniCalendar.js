import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Todos from "../../data/Todos";
import { isEqulsDate } from "../../utils/date";

function MiniCalendar({ setSeletedDate }) {
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          setSeletedDate(new Date(day.dateString));
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
