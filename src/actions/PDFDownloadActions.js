export const PDF_DOWNLOAD = "PDF_DOWNLOAD";

export function onPDFDownloadAction(ref) {
  ref.click();
  return {
    type: PDF_DOWNLOAD,
  };
}
