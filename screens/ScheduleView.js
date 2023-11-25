import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { useScheduleContext } from "../hooks/ScheduleProvider";
import { useEffect, useState } from "react";
import { Colors } from "../constant/colors";

function ScheduleView() {
  const { scheduleData } = useScheduleContext();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(scheduleData);
  }, [scheduleData]);
  return (
    <View>
      <Calendar
        events={events}
        height={600}
        eventCellStyle={styles.eventCellStyle}
        scrollViewStyle={styles.scrollViewStyle}
      />
    </View>
  );
}

export default ScheduleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eventCellStyle: {
    backgroundColor: Colors.color50,
    borderRadius: 5,
  },
});
