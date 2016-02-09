const xlsx = require('xlsx')

module.exports = function (data, options = { header: true }) {
  if (data.length === 0) {
    return
  }

  let datenum = function (v, date1904) {
    if (date1904) {
      v += 1462
    }

    let epoch = Date.parse(v)

    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
  }

  let worksheet = {}
  let header = Object.keys(data[0])
  let range = {
    s: { // First cell
      c: 0,
      r: 0
    },
    e: { // Last cell
      c: header.length - 1,
      r: data.length - 1
    }
  }
  let cell

  if (options.header) {
    for (let headerCol = 0, headers = header.length; headerCol < headers; headerCol++) {
      cell = {
        v: header[headerCol],
        t: 's'
      }

      worksheet[xlsx.utils.encode_cell({ c: headerCol, r: 0 })] = cell
    }

    range.e.r++
  }

  for (let row = 0, rows = data.length; row < rows; row++) {
    for (let col = 0, columns = header.length; col < columns; col++) {
      cell = {
        v: data[row][header[col]]
      }

      if (cell.v === null) {
        continue
      }

      if (typeof cell.v === 'boolean') {
        cell.t = 'b'
      } else if (typeof cell.v === 'number') {
        cell.t = 'n'
      } else if (cell.v instanceof Date) {
        cell.t = 'n'
        cell.v = datenum(cell.v)
        cell.z = xlsx.SSF._table[14]
      } else {
        cell.t = 's'
      }

      worksheet[xlsx.utils.encode_cell({ c: col, r: options.header ? row + 1 : row })] = cell
    }
  }

  worksheet['!ref'] = xlsx.utils.encode_range(range)

  return worksheet
}
