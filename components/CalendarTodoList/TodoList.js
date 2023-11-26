import { View, FlatList, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

function TodoList({ todos, selectedDate }) {
  const renderItem = ({ item }) => {
    return <TodoItem todo={item} selectedDate={selectedDate} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.text}>Today's Todo</Text>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
  listContainer: {
    backgroundColor: "#ffffff",
    marginBottom: 20,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    width: 310,
    height: 200,
  },
});
