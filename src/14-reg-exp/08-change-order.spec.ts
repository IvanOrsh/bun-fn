import { describe, it, expect } from "bun:test";

import { changeOrder } from "./08-change-order";

describe("Test changeOrder", () => {
  it.each([
    {
      data: ["last, first"],
      result: ["first, last"],
    },
    {
      data: [
        "Jensen, Dale",
        "Smith, Andrea",
        "Jorgensen, Michael",
        "Vasefi, Annika",
        "Lopez, Luis",
        "Crockett, Steven",
      ],
      result: [
        "Dale, Jensen",
        "Andrea, Smith",
        "Michael, Jorgensen",
        "Annika, Vasefi",
        "Luis, Lopez",
        "Steven, Crockett",
      ],
    },
  ])("$data should return $result", ({ data, result }) => {
    const res = changeOrder(data);
    expect(res).toEqual(result);
  });
});
