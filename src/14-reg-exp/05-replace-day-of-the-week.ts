// day: of the week: monday, tuesday, wednesday, thursday, friday, saturday, sunday

export function changeDayOfTheWeek(str: string, newDay: string): string {
  const replacePattern =
    /\b(mon|tue(s)?|wed(nes)?|thu(rs)?|fri|sat(ur)?|sun)(day)?\b/gi;

  return str.replace(replacePattern, newDay);
}
