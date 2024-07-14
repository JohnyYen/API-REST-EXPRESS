import pkg from "pg";
const {Pool} = pkg;
const pg = new Pool({
    user: 'postgres',
    password: '0403',
    database: 'Empresa',
    port: 5432,
    host: 'localhost'
});

export default function query(text, data){
    return pg.query(text, data);
}