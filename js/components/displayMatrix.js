import { changeIndividualMatrixCell } from "../helper/matrixChangeCell.js";
import { emojisData } from "../data/emojisData.js";

export function displayMatrix(matrixData) {
  const tableContainer = document.querySelector("#table-container");

  tableContainer.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("table");

  matrixData.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    tr.classList.add("table__row");

    row.forEach((cell, cellIndex) => {
      const td = document.createElement("td");
      td.classList.add("table__cell");

      if (cell === 1) {
        td.innerHTML =
          emojisData[Math.floor(Math.random() * emojisData.length)];
      }

      tr.appendChild(td);
      td.addEventListener("click", () => {
        displayMatrix(
          changeIndividualMatrixCell(rowIndex, cellIndex, matrixData)
        );
      });
    });

    table.appendChild(tr);
  });

  tableContainer.appendChild(table);
}
