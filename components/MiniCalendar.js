import { View } from "react-native";
import { Calendar } from "react-native-calendars";

function MiniCalendar({ setClickDate }) {
  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          setClickDate(new Date(day.dateString));
        }}
      />
    </View>
  );
}

export default MiniCalendar;
