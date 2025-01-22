import { matrixData } from "./data/matrixData.js";
import { displayMatrix } from "./components/displayMatrix.js";
import { matrixInvert } from "./helper/matrixInvert.js";
import { matrixRotate } from "./helper/matrixRotate.js";

(() => {
  const inverBtn = document.querySelector("#invertBtn");
  const rotateLeft = document.querySelector("#rotateLeft");
  const rotateRight = document.querySelector("#rotateRight");
  displayMatrix(matrixData);

  let modifiedMatrix = matrixData;
  inverBtn.addEventListener("click", () => {
    modifiedMatrix = matrixInvert(modifiedMatrix);
    displayMatrix(modifiedMatrix);
  });

  rotateLeft.addEventListener("click", () => {
    modifiedMatrix = matrixRotate(modifiedMatrix, "left");
    displayMatrix(modifiedMatrix);
  });

  rotateRight.addEventListener("click", () => {
    modifiedMatrix = matrixRotate(modifiedMatrix, "right");
    displayMatrix(modifiedMatrix);
  });
})();
