import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFormattedDate } from "../utils/date";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    retrieveTodos();
  }, []);
  const addTodo = async (date, content, requireTime) => {
    const newTodo = {
      id: Date.now().toString(),
      content,
      isComplete: false,
      requireTime,
    };

    try {
      const existingTodos = await AsyncStorage.getItem(
        `@Todo:${getFormattedDate(date)}`
      );
      const paredExistingTodos = existingTodos ? JSON.parse(existingTodos) : [];
      const updatedTodos = [...paredExistingTodos, newTodo];

      await AsyncStorage.setItem(
        `@Todo:${getFormattedDate(date)}`,
        JSON.stringify(updatedTodos)
      );
      retrieveTodos();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveTodos = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const todoKeys = keys.filter((key) => key.includes("@Todo"));
      const allTodos = await AsyncStorage.multiGet(todoKeys);

      const parsedTodos = allTodos.map(([key, value]) => ({
        date: key.split(":")[1],
        todos: JSON.parse(value),
      }));
      setData(parsedTodos);
    } catch (error) {
      console.log("Error restrieving todos:", error);
    }
  };

  const deleteTodo = async (date, todoId) => {
    try {
      const existingTodos = await AsyncStorage.getItem(
        `@Todo:${getFormattedDate(date)}`
      );
      const parsedExistingTodos = existingTodos
        ? JSON.parse(existingTodos)
        : [];
      const updatedTodos = parsedExistingTodos.filter(
        (todo) => todo.id !== todoId
      );

      await AsyncStorage.setItem(
        `@Todo:${getFormattedDate(date)}`,
        JSON.stringify(updatedTodos)
      );
      retrieveTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const clearAllAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage 데이터가 모두 삭제되었습니다.");
    } catch (e) {
      console.error("AsyncStorage 데이터 삭제 중 오류 발생:", e);
    }
  };
  return (
    <TodoContext.Provider
      value={{ data, addTodo, deleteTodo, retrieveTodos, clearAllAsyncStorage }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => {
  return useContext(TodoContext);
};
