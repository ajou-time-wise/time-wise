import { StyleSheet, Text, View } from "react-native";

function ManageScheduleView() {
  return (
    <View style={styles.container}>
      <Text>ManageSchedule</Text>
    </View>
  );
}

export default ManageScheduleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
