import { getFormattedDate } from "./date";

export function calculateTotalRequiredTimeForIncompleteTodos(
  data,
  date,
  requireTime
) {
  const foundTodos =
    data.find((item) => item.date === getFormattedDate(date))?.todos || [];

  const totalRequiredTime = foundTodos
    .filter((todo) => !todo.isComplete)
    .reduce((sum, todo) => {
      const hours = new Date(todo.requireTime).getHours();
      const minutes = new Date(todo.requireTime).getMinutes();
      return sum + hours * 60 + minutes;
    }, 0);

  const result = totalRequiredTime * 60 * 1000 + requireTime.getTime();
  return result;
}
