import React, { useState } from "react";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";

function ScheduleView() {
  const [items, setItems] = useState({
    "2023-11-24": [
      { name: "Meeting with Client", time: "10:00 AM - 11:00 AM" },
      { name: "Lunch with Team", time: "12:00 PM - 1:00 PM" },
    ],
    "2023-11-24": [
      { name: "Meeting with Client", time: "10:00 AM - 11:00 AM" },
      { name: "Lunch with Team", time: "12:00 PM - 1:00 PM" },
    ],
    // Add more items for different dates as needed
  });

  const onDayPress = (day) => {
    // Check if the selected day has items, if not, set an empty array
    const selectedDayItems = items[day.dateString] || [];
    setItems({ [day.dateString]: selectedDayItems });
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
    <Agenda items={items} renderItem={renderItem} onDayPress={onDayPress} />
  );
}

export default ScheduleView;
