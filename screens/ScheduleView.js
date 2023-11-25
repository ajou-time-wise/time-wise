import React, { useState } from "react";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import Schdules from "../data/Schdules";
import { getFormattedDate } from "../utils/date";

function ScheduleView() {
  const [data, setData] = useState(Schdules);
  const [selectDate, setSelectDate] = useState(new Date());
  const [schdules, setSchdules] = useState(
    data[getFormattedDate(new Date())] || []
  );

  const onDayPress = (day) => {
    // Check if the selected day has items, if not, set an empty array
    const selectedDayItems = data[day.dateString] || [];
    setSchdules(selectedDayItems);
    setSelectDate(new Date(day.dateString));
  };

  const renderItem = (item) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#eee" }}
    >
      <Text>{item.name}</Text>
      <Text>{item.time}</Text>
    </View>
  );

  return (
    <Agenda
      items={{ [getFormattedDate(selectDate)]: schdules }}
      renderItem={renderItem}
      onDayPress={onDayPress}
    />
  );
}

export default ScheduleView;
