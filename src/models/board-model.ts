export class BoardModel {
  private readonly _columns = [
    { index: 0, display: "A" },
    { index: 1, display: "B" },
    { index: 2, display: "C" },
    { index: 3, display: "D" },
    { index: 4, display: "E" },
    { index: 5, display: "F" },
    { index: 6, display: "G" },
    { index: 7, display: "H" },
  ];

  private readonly _rows = [
    {
      index: 7,
      display: "8",
    },
    {
      index: 6,
      display: "7",
    },
    {
      index: 5,
      display: "6",
    },
    {
      index: 4,
      display: "5",
    },
    {
      index: 3,
      display: "4",
    },
    {
      index: 2,
      display: "3",
    },
    {
      index: 1,
      display: "2",
    },
    {
      index: 0,
      display: "1",
    },
  ];

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
