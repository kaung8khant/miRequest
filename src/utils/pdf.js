import { PDFDocument, rgb } from "pdf-lib";

let existingPdfBytes = null;
const formUrl = chrome.runtime.getURL("absence-template-miview.pdf");

export const updatePdf = async (fields = []) => {
  try {
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    console.log("fields", fields);
    fields.map((item) => {
      firstPage.drawText(item.value, {
        x: item.x,
        y: item.y,
        size: 12,
        color: rgb(0, 0, 0),
      });
    });

    const updatedPdfBytes = await pdfDoc.save();

    const blob = new Blob([updatedPdfBytes], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);

    const printWindow = window.open(blobUrl);
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  } catch (error) {
    console.error("Error filling PDF:", error);
  }
};

export const fetchPdfTemplate = async () => {
  try {
    const response = await fetch(formUrl);
    existingPdfBytes = await response.arrayBuffer();
  } catch (err) {
    console.error("Error loading PDF template:", err);
  }
};
