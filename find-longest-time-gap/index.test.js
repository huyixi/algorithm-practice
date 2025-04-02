import { describe, it, expect } from "vitest";
import { findLongestTimeGap } from "./index.js";

describe("findLongestTimeGap", () => {
  it("should return 0 for a single time entry", () => {
    expect(findLongestTimeGap(["12:00"])).toBe(0);
  });

  it("should calculate the correct gap between two times", () => {
    expect(findLongestTimeGap(["09:00", "11:00"])).toBe(120);
  });

  it("should find the longest gap in an unsorted list of times", () => {
    expect(findLongestTimeGap(["14:00", "09:00", "15:00", "10:30"])).toBe(210);
  });

  it("should handle times that span across a 24-hour period", () => {
    expect(findLongestTimeGap(["08:00", "10:00", "10:00", "14:00"])).toBe(240);
  });
});
