import {allEmployement, addEmployement, createTable} from "../Models/query.js";


export function getAllEmployements(req, res){
    allEmployement()
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function insertEmployement(req, res){
    const {name, lastname, salary} = req.body;
    addEmployement([name, lastname, salary])
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
}

export function createTableEmployement(req, res) {
    createTable()
    .then((data) => res.json(data))
    .catch();
}

