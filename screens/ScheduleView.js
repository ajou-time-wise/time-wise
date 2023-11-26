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
    <View style={{ flex: 1 }}>
      <Calendar
        events={events}
        height={600}
        eventCellStyle={styles.eventCellStyle}
        scrollViewStyle={styles.scrollViewStyle}
        bodyContainerStyle={{ flex: 1, backgroundColor: "white" }}
        headerContainerStyle={{ height: 70 }}
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
    backgroundColor: Colors.cellColor,
    borderRadius: 5,
  },
});
