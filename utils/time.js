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
