import { useEffect, useState } from "react";
import MiniCalendar from "../components/CalendarTodoList/MiniCalendar";
import Todos from "../data/Todos";
import TodoList from "../components/CalendarTodoList/TodoList";
import { useTodoContext } from "../hooks/TodoProvider";
import { getFormattedDate } from "../utils/date";
import ProgressBar from "../components/ProgressBar";
import { calculateProgress } from "../utils/progres";
import { getBarColor } from "../utils/color";

function CalendarTodoListView() {
  const [selectedDate, setSeletedDate] = useState(new Date());
  const { data, clearAllAsyncStorage } = useTodoContext();
  const [findTodos, setFindTodos] = useState([]);
  const [progress, setProgress] = useState(calculateProgress(findTodos));
  const [barColor, setBarColor] = useState("red");

  useEffect(() => {
    // clearAllAsyncStorage();
    const foundTodos =
      data.find((item) => item.date === getFormattedDate(selectedDate))
        ?.todos || [];
    const progress = calculateProgress(foundTodos);
    const barColor = getBarColor(progress);
    setFindTodos(foundTodos);
    setProgress(progress);
    setBarColor(barColor);
  }, [selectedDate, data]);

  return (
    <>
      <MiniCalendar setSeletedDate={setSeletedDate} />
      <ProgressBar progress={progress} color={barColor} />
      <TodoList todos={findTodos} selectedDate={selectedDate} />
    </>
  );
}

export default CalendarTodoListView;
