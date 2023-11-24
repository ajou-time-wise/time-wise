import { useState } from "react";
import MiniCalendar from "../components/MiniCalendar";
import Todos from "../data/Todos";
import TodoList from "../components/TodoList";
import { View } from "react-native";

function CalendarTodoListView() {
  const [todos, setTodo] = useState(
    Todos.filter((item) => item.date.getTime() === new Date().getTime())
  );

  return (
    <>
      <MiniCalendar setTodo={setTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default CalendarTodoListView;
