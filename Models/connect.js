import pkg from "pg";
import dotenv from 'dotenv'
dotenv.config();
const {Pool} = pkg;
const pg = new Pool({
    connectionString: process.env.POSTGRES_URL,
});
console.log(process.env.POSTGRES_URL);
// user: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DATABASE,
    // port: process.env.POSTGRES_PORT,
    // host: process.env.POSTGRES_HOST

export default function query(text, data){
    return pg.query(text, data);
}