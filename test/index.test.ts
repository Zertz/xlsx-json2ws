import { json2xlsx } from "../src";

describe("json2xlsx", () => {
  it("works", () => {
    expect(json2xlsx([])).toBeTruthy();
  });
});
