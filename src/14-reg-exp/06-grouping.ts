/* yyyy mm dd, we allow different separators */

const data = "2007-3-9";

function parseDate(
  dateStr: string
): { year: string; month: string; day: string; separator: string } | null {
  const pattern = /^(\d{4})([-./])?(\d{1,2})\2(\d{1,2})$/i;

  console.log(pattern.test(dateStr));

  if (!pattern.test(dateStr)) return null;

  const [_, year, separator, month, day] = pattern.exec(dateStr)!;

  return { year, month, day, separator };
}

console.dir(parseDate(data));
