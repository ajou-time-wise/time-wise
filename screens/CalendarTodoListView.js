import { useState } from "react";
import MiniCalendar from "../components/CalendarTodoList/MiniCalendar";
import Todos from "../data/Todos";
import TodoList from "../components/CalendarTodoList/TodoList";

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
