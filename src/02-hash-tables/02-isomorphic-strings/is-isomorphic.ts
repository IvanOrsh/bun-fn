export function isIsomorphic(s: string, t: string): boolean {
  // s = "green"
  // t = "abccd"
  // 1. length
  // 2. 2 hash maps
  if (s.length !== t.length) {
    return false;
  }

  const sHash: Record<string, string> = {};
  const tHash: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!sHash[sChar]) sHash[sChar] = tChar;
    if (!tHash[tChar]) tHash[tChar] = sChar;

    if (
      (sHash[sChar] && sHash[sChar] !== tChar) ||
      (tHash[tChar] && tHash[tChar] !== sChar)
    ) {
      return false;
    }
  }

  return true;
}
