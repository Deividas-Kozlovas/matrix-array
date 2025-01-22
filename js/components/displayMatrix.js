import { changeIndividualMatrixCell } from "../helper/matrixChangeCell.js";

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
        td.classList.add("table__cell--filled");
      } else {
        td.classList.remove("table__cell--filled");
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
