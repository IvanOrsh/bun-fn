import { describe, it, expect } from "bun:test";

import { validatePhoneNumber } from "./04-validate-phone-number";

describe("Test validatePhoneNumber", () => {
  // (nnn)-nnn-nnnn
  // nnn.nnn.nnnn
  // nnn-nnn-nnnn
  // nnnnnnnnnn
  // (nnn)nnn-nnnn

  it.each([
    {
      phoneNum: "(801)-766-9754",
      result: true,
    },
    {
      phoneNum: "499.975.9754",
      result: true,
    },
    {
      phoneNum: "095-374-9754",
      result: true,
    },
    {
      phoneNum: "5555555555",
      result: true,
    },
    {
      phoneNum: "(555)555-5555",
      result: true,
    },
    {
      phoneNum: "(72)1234-555",
      result: false,
    },
  ])("$phoneNum should return $result", ({ phoneNum, result }) => {
    const res = validatePhoneNumber(phoneNum);
    expect(res).toEqual(result);
  });
});
