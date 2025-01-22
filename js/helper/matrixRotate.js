export function matrixRotate(matrixData, direction) {
  let rotateMatrix = [];

  const rowLength = matrixData.length;
  matrixData.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (!rotateMatrix[rowLength - cellIndex - 1]) {
        rotateMatrix[rowLength - cellIndex - 1] = [];
      }

      if (direction === "right") {
        if (!rotateMatrix[cellIndex]) {
          rotateMatrix[cellIndex] = [];
        }
        rotateMatrix[cellIndex][rowLength - rowIndex - 1] = cell;
      } else if (direction === "left") {
        if (!rotateMatrix[rowLength - cellIndex - 1]) {
          rotateMatrix[rowLength - cellIndex - 1] = [];
        }
        rotateMatrix[rowLength - cellIndex - 1][rowIndex] = cell;
      }
    });
  });

  return rotateMatrix;
}
