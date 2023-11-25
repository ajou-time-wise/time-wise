export function calculateProgress(todos) {
  const checkedCount = todos.filter((todo) => todo.isComplete).length;
  const totalCount = todos.length;
  const newProgress = totalCount === 0 ? 0 : checkedCount / totalCount;
  return newProgress;
}
