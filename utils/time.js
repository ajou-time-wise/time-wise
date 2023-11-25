export function getFormattedTime(time) {
  return `${time.getHours()}H ${time.getMinutes()}M`;
}

export function printScheduleTime(startTime, endTime) {
  return `${startTime.getHours()}:${startTime.getMinute()} ${
    startTime.getHours() > 11 ? "PM" : "AM"
  } - ${endTime.getHours()}:${endTime.getMinute()} ${
    startTime.getHours() > 11 ? "PM" : "AM"
  }`;
}
