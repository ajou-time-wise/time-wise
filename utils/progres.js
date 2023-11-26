export function calculateProgress(todos) {
  const checkedCount = todos.filter((todo) => todo.isComplete).length;
  const totalCount = todos.length;
  const newProgress = totalCount === 0 ? 0 : checkedCount / totalCount;
  return newProgress;
}

export function calculateTimeProgress(todo, schedule) {
  const totalMinutesInDay = 24 * 60;
  const todoDuration = todo.getHours() * 60 + todo.getMinutes();
  const scheduleDration = schedule.getHours() * 60 + schedule.getMinutes();
  const scheduleTotalDuration = todoDuration + scheduleDration;

  const usageRatio = scheduleTotalDuration / totalMinutesInDay;

  return usageRatio;
}
