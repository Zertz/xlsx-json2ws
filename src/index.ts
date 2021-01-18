import * as xlsx from "xlsx";

function datenum(v: Date) {
  return (
    (v.getTime() - new Date(Date.UTC(1899, 11, 30)).getTime()) /
    (24 * 60 * 60 * 1000)
  );
}

export function json2xlsx(
  data: Record<string, boolean | number | string | Date | null>[],
) {
  if (data.length === 0) {
    return;
  }

  const worksheet: xlsx.WorkSheet = {};

  const header = Object.keys(data[0]);

  const range = {
    s: {
      // First cell
      c: 0,
      r: 0,
    },
    e: {
      // Last cell
      c: header.length - 1,
      r: data.length - 1,
    },
  };

  for (let headerCol = 0; headerCol < header.length; headerCol += 1) {
    const cell = {
      v: header[headerCol],
      t: "s",
    };

    worksheet[xlsx.utils.encode_cell({ c: headerCol, r: 0 })] = cell;
  }

  range.e.r++;

  for (let row = 0, rows = data.length; row < rows; row++) {
    for (let col = 0, columns = header.length; col < columns; col++) {
      const cell = {
        t: "s",
        v: data[row][header[col]],
        z: undefined,
      };

      if (cell.v === null) {
        continue;
      }

      if (typeof cell.v === "boolean") {
        cell.t = "b";
      } else if (typeof cell.v === "number") {
        cell.t = "n";
      } else if (cell.v instanceof Date) {
        cell.t = "n";
        cell.v = datenum(cell.v);
        // @ts-expect-error
        cell.z = xlsx.SSF._table[14];
      }

      worksheet[xlsx.utils.encode_cell({ c: col, r: row + 1 })] = cell;
    }
  }

  worksheet["!ref"] = xlsx.utils.encode_range(range);

  return worksheet;
}
