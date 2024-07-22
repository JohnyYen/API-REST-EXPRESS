import express from 'express';
import {router} from './Routes/router.js'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
console.log(process.env.port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(3000, () => console.log('Server listen on the port 3000'));