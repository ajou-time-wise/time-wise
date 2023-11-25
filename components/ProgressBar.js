import { View, Text, StyleSheet } from "react-native";
import { Bar } from "react-native-progress";

function ProgressBar({ progress }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Progres</Text>
        <Bar progress={progress} width={300} height={10} />
      </View>
    </View>
  );
}

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
