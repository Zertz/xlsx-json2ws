import * as xlsx from "xlsx";
import { json2xlsx } from "../src";

describe("json2xlsx", () => {
  it("returns undefined with empty data", () => {
    expect(json2xlsx([])).toBeUndefined();
  });

  it("returns something", () => {
    expect(json2xlsx([{ bonjour: "hi" }])).toBeTruthy();
  });

  it.skip("e2e", () => {
    const Sheet1 = json2xlsx([{ bonjour: "hi" }]);

    if (!Sheet1) {
      throw Error();
    }

    xlsx.writeFile(
      {
        SheetNames: ["Sheet1", "Sheet2"],
        Sheets: {
          Sheet1,
        },
      },
      "workbook.xlsx",
    );
  });
});
