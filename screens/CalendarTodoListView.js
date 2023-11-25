import { useEffect, useState } from "react";
import MiniCalendar from "../components/CalendarTodoList/MiniCalendar";
import Todos from "../data/Todos";
import TodoList from "../components/CalendarTodoList/TodoList";
import { useTodoContext } from "../hooks/TodoProvider";
import { getFormattedDate } from "../utils/date";
import ProgressBar from "../components/ProgressBar";
import { calculateProgress } from "../utils/progres";

function CalendarTodoListView() {
  const [selectedDate, setSeletedDate] = useState(new Date());
  const { data, clearAllAsyncStorage } = useTodoContext();
  const [findTodos, setFindTodos] = useState([]);
  const [progress, setProgress] = useState(calculateProgress(findTodos));

  useEffect(() => {
    // clearAllAsyncStorage();
    const foundTodos =
      data.find((item) => item.date === getFormattedDate(selectedDate))
        ?.todos || [];
    setFindTodos(foundTodos);
    setProgress(calculateProgress(foundTodos));
  }, [selectedDate, data]);

  return (
    <>
      <MiniCalendar setSeletedDate={setSeletedDate} />
      <ProgressBar progress={progress} />
      <TodoList todos={findTodos} selectedDate={selectedDate} />
    </>
  );
}

export default CalendarTodoListView;
