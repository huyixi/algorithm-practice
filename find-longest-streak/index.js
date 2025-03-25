function findLongestStreak(arr, threshold) {
  let currentStreak = 0;
  let maxStreak = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      currentStreak++;
    } else {
      maxStreak = Math.max(currentStreak, maxStreak);
      currentStreak = 0;
    }
  }

  maxStreak = Math.max(currentStreak, maxStreak);

  return maxStreak >= threshold ? maxStreak : 0;
}

module.exports = findLongestStreak;
