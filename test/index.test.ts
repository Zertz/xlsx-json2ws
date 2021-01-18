import { json2xlsx } from "../src";

describe("json2xlsx", () => {
  it("returns undefined with empty data", () => {
    expect(json2xlsx([])).toBeUndefined();
  });

  it("returns something", () => {
    expect(json2xlsx([{ bonjour: "hi" }])).toBeTruthy();
  });
});
