import {request, response, Router} from 'express'
import { insertEmployement, getAllEmployements, createTableEmployement } from "../Controllers/empresary.controller.js";
import { getEmployementPDF } from '../Controllers/pdf.controller.js';

export const router = new Router();

router.get('/', (req, res) => {
    res.send("Hello World");
})

router.get('/e', getAllEmployements);
router.post('/e', insertEmployement);

//PDF
router.get('/e/pdf', getEmployementPDF);

//Create
router.get('/e/create', createTableEmployement);