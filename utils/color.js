export function getColor(progress) {
  if (progress > 0.66) return "red";
  else if (progress > 0.33) return "green";
  else return "blue";
}

export function getBarColor(progress) {
  if (progress > 0.75) return "blue";
  else if (progress > 0.5) return "green";
  else if (progress > 0.25) return "#d7b003";
  else return "red";
}

export function getRequireTimeColor(time) {
  if (time.getHours() > 6) return "#f48181";
  else if (time.getHours() > 3) return "#d8c758";
  else return "#58a7d8";
}
