import { View, TextInput, StyleSheet } from "react-native";

function Content({ placeholder, text, setText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
}

export default Content;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 0.5,
    width: 300,
    padding: 10,
    fontSize: 16,
    margin: 5,
  },
});
