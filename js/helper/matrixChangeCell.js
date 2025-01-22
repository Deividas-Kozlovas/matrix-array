export function changeIndividualMatrixCell(rowIndex, cellIndex, matrixData) {
  matrixData[rowIndex][cellIndex] =
    matrixData[rowIndex][cellIndex] === 0 ? 1 : 0;

  return matrixData;
}
