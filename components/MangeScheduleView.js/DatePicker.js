import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constant/colors";
import { getFormattedDate } from "../../utils/date";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

function DatePicker({ date, setDate }) {
  const [selectedDate, setSelectDate] = useState(date);
  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: selectedDate,
      onChange: (event, selectedDate) => {
        const currentDate = selectedDate || selectedDate; // Android에서 취소할 경우 null이 올 수 있음
        setDate(currentDate);
      },
      mode: "date",
      is24Hour: true,
    });
  };
  return (
    <Pressable
      onPress={showDatePicker}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{getFormattedDate(date)}</Text>
      </View>
    </Pressable>
  );
}

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.color50,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.75,
  },
});
