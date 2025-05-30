import { Request, Response } from 'express'
import agenda from '../data/agendaDeContactos'

export class ContactController {
    static getAll = async (req: Request, res: Response) => {
        res.json(agenda)
    }

    static getById = async (req: Request, res: Response) => {
        const id = req.params.contactsId;

        if (id === undefined) {
            res.status(404).json("Id no encontrado");
            return;
        }
        if (isNaN(Number(id))) {
            res.status(400).json("Id debe ser un número");
            return;
        }

        const contacto = agenda[id];

        if (!contacto) {
            res.status(404).json("Contacto no encontrado");
            return;
        }

        res.json(contacto);
    }



}