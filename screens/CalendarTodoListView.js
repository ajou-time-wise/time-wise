import { useEffect, useState } from "react";
import MiniCalendar from "../components/CalendarTodoList/MiniCalendar";
import Todos from "../data/Todos";
import TodoList from "../components/CalendarTodoList/TodoList";
import { useTodoContext } from "../hooks/TodoProvider";
import { getFormattedDate } from "../utils/date";

function CalendarTodoListView() {
  const [selectedDate, setSeletedDate] = useState(new Date());
  const { data, clearAllAsyncStorage } = useTodoContext();
  const [findTodos, setFindTodos] = useState([]);

  useEffect(() => {
    setFindTodos(
      data.find((item) => item.date === getFormattedDate(selectedDate))
        ?.todos || []
    );
  }, [selectedDate, data]);

  return (
    <>
      <MiniCalendar setSeletedDate={setSeletedDate} />
      <TodoList todos={findTodos} />
    </>
  );
}

export default CalendarTodoListView;
