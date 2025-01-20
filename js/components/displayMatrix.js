import { matrixData } from "../data/matrixData.js";

export function displayMatrix() {
  const main = document.querySelector("#main");

  const table = document.createElement("table");
  table.classList.add("table");

  matrixData.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    tr.classList.add("table__row");

    row.forEach((cell, cellIndex) => {
      const td = document.createElement("td");
      td.classList.add("table__cell");

      if (cell === 1) {
        td.classList.add("table__cell--filled");
      }

      tr.appendChild(td);
    });

    table.appendChild(tr);
  });

  main.appendChild(table);
}
