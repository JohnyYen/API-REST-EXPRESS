import query from "./connect.js";

export async function allEmployement(){
    return (await query('SELECT * FROM empresarios')).rows;
};

export async function addEmployement(data){
    query(`INSERT INTO empresarios (name, lastname, salary) VALUES ($1, $2, $3)`, data);
    return (await query('SELECT * FROM empresarios')).rows;
}

