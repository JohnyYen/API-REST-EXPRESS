import PDFDocument from "pdfkit-table";

export default function buildPDF(dataCallback, endCallback, dataHeaders, dataRows){
    const doc = new PDFDocument();

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    const tableArray = {
        headers: dataHeaders,
        rows: dataRows,
    };

    doc.table(tableArray, {width: 300});
    doc.end();
}