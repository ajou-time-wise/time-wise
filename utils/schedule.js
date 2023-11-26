export function calculateTotalScheduleDuration(schedules, date) {
  const startTime = date.setHours(0, 0, 0, 0);
  const endTime = date.setHours(23, 59, 59, 999);

  const filteredSchedules = schedules.filter((event) => {
    const eventStart = new Date(event.start).getTime();
    const eventEnd = new Date(event.end).getTime();
    return eventStart >= startTime && eventEnd <= endTime;
  });

  const totalDuration = filteredSchedules.reduce((total, event) => {
    const eventStart = new Date(event.start).getTime();
    const eventEnd = new Date(event.end).getTime();
    return total + (eventEnd - eventStart);
  }, 0);

  return totalDuration;
}
