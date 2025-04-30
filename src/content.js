import dayjs from "dayjs";
import { DATE_OF_ABSENCE_FROM, FIELDS_SELECTORS } from "./config";
import { mapCoordinates, mapFields } from "./utils/utils";
import { fetchPdfTemplate, updatePdf } from "./utils/pdf";

// src/content.js
console.log("✅ Content script loaded2! " + dayjs().format("hh:mm:ss"));

// from form data
let dateOfAbsenceFrom = "";
let category = null;
let numberOfDays = "";
let reasonForAbsence = "";

// from storage
let employeeName = "";
let departmentName = "";
let managerName = "";

// need calculate
let numberOfHours = "";
let dateOfAbsenceTo = ""; // need to add one day

chrome.storage.local.get(
  ["employeeName", "departmentName", "managerName"],
  function (result) {
    if (result.employeeName) {
      employeeName = result.employeeName;
    }

    if (result.departmentName) {
      departmentName = result.departmentName;
    }

    if (result.managerName) {
      managerName = result.managerName;
    }
  }
);

const fromInput = document.querySelector(
  FIELDS_SELECTORS[DATE_OF_ABSENCE_FROM]
);
const toInput = document.querySelector(FIELDS_SELECTORS[DATE_OF_ABSENCE_FROM]);

if (fromInput) {
  fromInput.addEventListener("input", (e) => {
    fromDate = dayjs(e.target.value);
  });
}

if (toInput) {
  toInput.addEventListener("input", (e) => {
    toDate = dayjs(e.target.value);
  });
}

const submitButton = document.querySelector("#submit");

if (submitButton) {
  submitButton.addEventListener("click", () => {
    updatePdf(
      mapCoordinates(
        mapFields({
          dateOfAbsenceFrom,
          numberOfDays,
          reasonForAbsence,
          employeeName,
          departmentName,
          managerName,
          numberOfHours,
          dateOfAbsenceTo,
        })
      )
    );
  });
}

fetchPdfTemplate();
