export function findLongestTimeGap(times) {
  if (times.length < 2) return 0;

  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const minutesArray = times.map(toMinutes).sort((a, b) => a - b);

  let maxGap = minutesArray.reduce((acc, curr, index, arr) => {
    if (index === 0) return acc;
    const gap = curr - arr[index - 1];
    return gap > acc ? gap : acc;
  }, 0);

  return maxGap;
}
