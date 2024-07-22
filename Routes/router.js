import {request, response, Router} from 'express'
import { insertEmployement, getAllEmployements, createTableEmployement } from "../Controllers/empresary.controller.js";
import { getEmployementPDF } from '../Controllers/pdf.controller.js';

export const router = new Router();

router.get('/', getAllEmployements);
router.post('/', insertEmployement);

//PDF
router.get('/pdf', getEmployementPDF);

//Create
router.get('/create', createTableEmployement);