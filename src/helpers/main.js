export function roundDegrees(value) {
  return Math.round(value)
}
export const weekDayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


export function getFormattedDateTime(dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];
  return `${weekDayName} ${date.getUTCDate()}, ${monthName} `
}
export function getFormattedDate(value) {
  const date = new Date(value);
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const formattedDate = `${day} ${month.slice(0, 3)}`;
  return formattedDate;
}
export function getWeekDay(value) {
  const date = new Date(value);
  const weekDay = weekDayNames[date.getDay()];
  return weekDay;
}
export function formatVisibility(visibility) {
  const visibilityFormatted = (visibility / 1000).toFixed(1);
  return visibilityFormatted;
}
export function formatUnixTime(unixTime) {
  const date = new Date(unixTime * 1000);
  const options = {
    hour: 'numeric',
    minute: 'numeric'
  };
  const formattedTime = date.toLocaleTimeString([], options);
  return formattedTime;
}
export function formatPressure(pressure) {
  const hPa = Math.round(pressure * 68.9476) / 10;
  return hPa + "hPa";
}
export function formatHour(value) {
  const date = new Date(value);
  const options = {
    hour: 'numeric',
    hour12: true
  };
  const formattedTime = date.toLocaleTimeString([], options);
  return formattedTime;
}
export function mptToKmh(value) {
  const mph = value * 3600;
  return mph / 1000;
}