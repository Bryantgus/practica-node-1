import { readFile } from 'fs/promises';

export const getAllContacts = async () => {

    const data = await readFile('C:/Users/EJ/Desktop/practica-node-1/agendaDeContactos.json', 'utf-8');
    const json = JSON.parse(data);
    return json;
};  
