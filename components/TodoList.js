import { View, Text, FlatList } from "react-native";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  const renderItem = ({ item }) => {
    return <TodoItem todo={item} />;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default TodoList;
