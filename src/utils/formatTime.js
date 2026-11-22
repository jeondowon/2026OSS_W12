export function formatTime(count) {
  let minutes = Math.floor(count / 60);
  let seconds = count % 60;

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return minutes + ":" + seconds;
}
