export default function timeFormatting(time) {
  return time < 9 ? `0${time}` : time;
}
