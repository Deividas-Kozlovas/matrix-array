export function matrixInvert(matrixData) {
  const invertMatrix = [];
  matrixData.forEach((row, rowIndex) => {
    invertMatrix[rowIndex] = [];
    row.forEach((cell, cellIndex) => {
      if (cell === 1) {
        invertMatrix[rowIndex][cellIndex] = 0;
      } else {
        invertMatrix[rowIndex][cellIndex] = 1;
      }
    });
  });
  return invertMatrix;
}
