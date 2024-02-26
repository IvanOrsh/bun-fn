const data = [
  "Jensen, Dale",
  "Smith, Andrea",
  "Jorgensen, Michael",
  "Vasefi, Annika",
  "Lopez, Luis",
  "Crockett, Steven",
];

/**
 * Given a list of names, return a list of names in the format "last, first"
 * @param data
 */
export function changeOrder(data: string[]): string[] {
  const pattern = /(\w+), (\w+)/;

  return data.map((name) => {
    const match = name.match(pattern);
    if (match) {
      return `${match[2]}, ${match[1]}`;
    }
    return name;
  });
}
