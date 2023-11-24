import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFormattedDate } from "../utils/date";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState();

  useEffect(() => {
    retrieveTodos();
  }, []);

  const addTodo = async (date, content, requireTime) => {
    const newTodo = {
      id: Date.now().toString,
      content,
      isComplete: false,
      requireTime,
    };

    try {
      const existingTodos = await AsyncStorage.getItem(getFormattedDate(date));
      const paredExistingTodos = existingTodos ? JSON.parse(existingTodos) : [];
      const updatedTodos = [...paredExistingTodos, newTodo];

      await AsyncStorage.setItem(
        getFormattedDate(date),
        JSON.stringify(updatedTodos)
      );
      retrieveTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveTodos = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const allTodos = await AsyncStorage.multiGet(keys);

      const parsedTodos = allTodos.map(([key, value]) => ({
        date: key,
        todos: JSON.parse(value),
      }));
      setTodos(parsedTodos);
    } catch (error) {
      console.log("Error restrieving todos:", error);
    }
  };

  const deleteTodo = async (date, todoId) => {
    try {
      const existingTodos = await AsyncStorage.getItem(getFormattedDate(date));
      const parsedExistingTodos = existingTodos
        ? JSON.parse(existingTodos)
        : [];
      const updatedTodos = parsedExistingTodos.filter(
        (todo) => todo.id !== todoId
      );

      await AsyncStorage.setItem(
        getFormattedDate(date),
        JSON.stringify(updatedTodos)
      );
      retrieveTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => {
  return useContext(TodoContext);
};
