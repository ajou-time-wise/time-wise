import { Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { useScheduleContext } from "../hooks/ScheduleProvider";
import { useEffect, useState } from "react";

function ScheduleView() {
  const { scheduleData } = useScheduleContext();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(scheduleData);
  }, [scheduleData]);
  return (
    <View>
      <Calendar events={events} height={600} />
    </View>
  );
}

export default ScheduleView;
