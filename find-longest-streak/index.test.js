const findLongestStreak = require(".");

describe("findLongestStreak Test", () => {

  test("test 1: Array [true, true, false, true, true, true]，阈值 3 应返回 1", () => {
    const arr = [true, true, false, true, true, true];
    const threshold = 3;
    const result = findLongestStreak(arr, threshold);
    expect(result).toBe(3);
  });

  test("test 2: Array [true, true, true, false, true]，阈值 4 应返回 0", () => {
    const arr = [true, true, true, false, true];
    const threshold = 4;
    const result = findLongestStreak(arr, threshold);
    expect(result).toBe(0);
  });

  test("test 3: Array [true, true, true, true]，阈值 2 应返回 4", () => {
    const arr = [true, true, true, true];
    const threshold = 2;
    const result = findLongestStreak(arr, threshold);
    expect(result).toBe(4);
  });
});
