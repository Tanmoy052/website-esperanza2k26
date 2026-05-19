export function convertTo12HourFormat(time24?: string) {
  if (!time24) return "";
  const [hoursStr, minutes, seconds] = time24.split(":");
  let hours = parseInt(hoursStr, 10);
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12; // 0 should be 12 in 12-hour format

  return `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
}
