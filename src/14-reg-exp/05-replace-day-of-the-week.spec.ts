import { describe, it, expect } from "bun:test";

import { changeDayOfTheWeek } from "./05-replace-day-of-the-week";

describe("Test changeDayOfTheWeek", () => {
  it.each([
    {
      str: "Today is Monday",
      newDay: "Tuesday",
      result: "Today is Tuesday",
    },
    {
      str: `Each and ever Tuesday, at the beginning of the day, we hold a staff meeting.
      At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and
      you will receive assignments for the following Tuesday. Just be aware that somedays this 
      Tuesday meeting might not occur. When that happens, we will make an announcement.`,
      newDay: "Wednesday",
      result: `Each and ever Wednesday, at the beginning of the day, we hold a staff meeting.
      At the Wednesday staff meeting, you will need to make a report on the past weeks progress, and
      you will receive assignments for the following Wednesday. Just be aware that somedays this 
      Wednesday meeting might not occur. When that happens, we will make an announcement.`,
    },
  ])("$str should return $result", ({ str, newDay, result }) => {
    const res = changeDayOfTheWeek(str, newDay);
    expect(res).toEqual(result);
  });
});
