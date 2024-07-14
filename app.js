import express from 'express';
import {router} from './Routes/router.js'
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(3000, () => console.log('Server listen on the port 3000'));