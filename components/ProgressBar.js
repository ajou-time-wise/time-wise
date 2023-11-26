import { View, Text, StyleSheet } from "react-native";
import { Bar } from "react-native-progress";

function ProgressBar({ progress, color }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Progres</Text>
        <Bar
          progress={progress}
          width={290}
          height={10}
          color={color}
          style={{ borderColor: "grey", borderWidth: 1.5 }}
        />
      </View>
    </View>
  );
}

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 5,
    fontWeight: "bold",
  },
});
