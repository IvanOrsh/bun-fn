import { describe, it, expect } from "bun:test";

import { filterByCodeArea } from "./03-phone-numbers";

describe("Test filterByCodeArea", () => {
  it.each([
    {
      phoneNums: [
        "801-766-9754",
        "801-545-5454",
        "435-666-4353",
        "801-838-345-",
        "801-796-5454",
        "435-555-4353",
        "801-222-435-",
        "801-009-0909",
        "435-222-8013",
        "801-777-6655",
        "801-777-66554",
        "801-777-665-",
      ],
      codeArea: "801",
      result: [
        "801-766-9754",
        "801-545-5454",
        "801-796-5454",
        "801-009-0909",
        "801-777-6655",
      ],
    },
  ])("$phoneNums should return $result", ({ phoneNums, codeArea, result }) => {
    const res = filterByCodeArea(phoneNums, codeArea);

    expect(res).toEqual(result);
  });
});
