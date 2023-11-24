import { View, Text, TextInput, StyleSheet } from "react-native";

function TodoContent({ todo, setTodo }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Todo Content"
        value={todo.TodoContent}
        onChangeText={(text) =>
          setTodo((prevTodo) => ({ ...prevTodo, content: text }))
        }
      />
    </View>
  );
}

export default TodoContent;

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
