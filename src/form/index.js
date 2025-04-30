import dayjs from "dayjs";
import { mapCoordinates, mapFields } from "./utils/utils";
import { fetchPdfTemplate, updatePdf } from "./utils/pdf";
import { initializeFormListeners, getFormData } from "./formDataManager";

console.log("✅ Content script loaded! " + dayjs().format("HH:mm:ss"));

initializeFormListeners();

const submitButton = document.querySelector("#submit");

if (submitButton) {
  submitButton.addEventListener("click", () => {
    const data = getFormData();
    const mappedFields = mapFields(data);
    const coords = mapCoordinates(mappedFields);
    updatePdf(coords);
  });
}

fetchPdfTemplate();
