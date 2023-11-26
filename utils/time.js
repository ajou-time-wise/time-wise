export function getFormattedTime(time) {
  return `${time.getHours()}H ${
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
  }M`;
}

export function printScheduleTime(startTime, endTime) {
  return `${startTime.getHours()}:${startTime.getMinute()} ${
    startTime.getHours() > 11 ? "PM" : "AM"
  } - ${endTime.getHours()}:${endTime.getMinute()} ${
    startTime.getHours() > 11 ? "PM" : "AM"
  }`;
}

export function printTime(time) {
  return `${time.getHours() < 10 ? "0" + time.getHours() : time.getHours()} : ${
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
  }`;
}

export function calculateRemainingTime(todo, schedule) {
  const totalMillisInDay = 24 * 60 * 60 * 1000;
  const todoDuration = (todo.getHours() * 60 + todo.getMinutes()) * 60 * 1000;
  const scheduleDration =
    (schedule.getHours() * 60 + schedule.getMinutes()) * 60 * 1000;
  const scheduleTotalDuration = todoDuration + scheduleDration;

  const remainingMillis =
    totalMillisInDay - scheduleTotalDuration > 0
      ? totalMillisInDay - scheduleTotalDuration
      : 0;

  return remainingMillis;
}
