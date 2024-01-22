const data = "allthingsjavascript.com google.com youtube.com";

function extractDomain(data: string): string[] {
  const pattern = /\w+(?=\.com)/gi;

  return data.match(pattern) ?? [];
}

console.log(extractDomain(data));

function validPassword(password: string): boolean {
  /*
  1. at least 1 capital letter
  2. at least 1 lowercase letter
  3. at least 1 digit
  4. at least 1 special character
  5. at least 8 characters
  */
  const pattern =
    /^(?=.{8,})(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*\d{1,})(?=.*[!@#$%^&*]{1,}).*$/;

  return pattern.test(password);
}

// falsy:
console.log(validPassword("12345678"));
console.log(validPassword("aA#1"));
console.log(validPassword("aA#aabaca"));
console.log(validPassword("a1#aabaca"));

// truthy:
console.log(validPassword("aA#1abaca"));
console.log(validPassword("aA#aabaca1"));
