export function getColor(progress) {
  if (progress > 0.66) return "red";
  else if (progress > 0.33) return "green";
  else return "blue";
}
