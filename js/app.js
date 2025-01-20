import { matrixData } from "./data/matrixData.js";
import { displayMatrix } from "./components/displayMatrix.js";
import { matrixInvert } from "./helper/matrixInvert.js";

(() => {
  const inverBtn = document.querySelector("#invertBtn");
  displayMatrix(matrixData);

  let toggleInvertMatrix = matrixData;
  inverBtn.addEventListener("click", () => {
    toggleInvertMatrix = matrixInvert(toggleInvertMatrix);
    displayMatrix(toggleInvertMatrix);
  });
})();
