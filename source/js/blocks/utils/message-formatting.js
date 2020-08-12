import timeFormatting from './time-formatting';

export default function messageFormatting(message, user) {
  const date = new Date();
  return { name: user, message, time: `${timeFormatting(date.getHours())}:${timeFormatting(date.getMinutes())}` };
}
