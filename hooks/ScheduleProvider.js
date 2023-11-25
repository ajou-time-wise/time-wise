import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFormattedDate } from "../utils/date";
import Schdules from "../data/Schdules";

const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    retrieveSchedules();
  }, []);

  const addSchedule = async (date, content, startTime, endTime) => {
    const newSchedule = {
      id: Date.now().toString(),
      content,
      startTime,
      endTime,
    };

    try {
      const existingSchedules = await AsyncStorage.getItem(
        `@Schedule:${getFormattedDate(date)}`
      );
      const paredExistingTodos = existingSchedules
        ? JSON.parse(existingSchedules)
        : [];
      const updatedSchedules = [...paredExistingTodos, newSchedule];

      await AsyncStorage.setItem(
        `@Schedule:${getFormattedDate(date)}`,
        JSON.stringify(updatedSchedules)
      );
      retrieveSchedules();
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveSchedules = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const scheduleKeys = keys.filter((key) => key.includes("@Schedule"));
      const allSchedules = await AsyncStorage.multiGet(scheduleKeys);

      const paredSchedules = allSchedules.map(([key, value]) => ({
        date: key.split(":")[1],
        todos: JSON.parse(value),
      }));
      setScheduleData(paredSchedules);
    } catch (error) {
      console.error("Error restrieving todos:", error);
    }
  };

  const deleteSchedule = async (date, scheduleId) => {
    try {
      const existingSchedules = await AsyncStorage.getItem(
        `@Schedule:${getFormattedDate(date)}`
      );
      const parsedExistingSchedules = existingSchedules
        ? JSON.parse(existingSchedules)
        : [];
      const updatedSchedules = parsedExistingSchedules.filter(
        (schedule) => schedule.id !== scheduleId
      );

      await AsyncStorage.setItem(
        `@Schedule:${getFormattedDate(date)}`,
        JSON.stringify(updatedSchedules)
      );
      retrieveSchedules();
    } catch (error) {
      console.error("Error delete schedule:", error);
    }
  };

  return (
    <ScheduleContext.Provider
      value={{ scheduleData, addSchedule, deleteSchedule, retrieveSchedules }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export const useScheduleContext = () => {
  return useContext(ScheduleContext);
};
