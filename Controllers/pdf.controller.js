import { allEmployement } from "../Models/query.js";
import { arrayFormatter } from "./libs/jsonFormatter.js";
import buildPDF from "./libs/pdfKit.js";


export function getEmployementPDF(req, res){

    const stream = res.writeHead(200, {
        "Content-Type": "aplication/pdf",
        "Content-Disposition": "attachment; filename=employements.pdf",
    });

    allEmployement()
    .then((employements) => {
        const list = arrayFormatter(employements);
        buildPDF((data) => stream.write(data),
        () => stream.end(),
         Object.keys(employements[0]).filter((e) => e !== 'id'), list);
    })
    .catch((error) => console.log(error));

    
}