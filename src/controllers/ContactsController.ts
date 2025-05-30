import { Request, Response } from 'express'
import { getAllContacts } from '../middleware/contacts'

export class ContactController {
    static getAll = async (req: Request, res: Response) => {
        const allContacts = await getAllContacts()
        res.json(allContacts)
    }

    static getById = async (req: Request, res: Response) => {

    const allContacts = await getAllContacts();
    const id = Number(req.params.contactsId);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    const contact = allContacts.find((c: any) => c.id === id);

    if (!contact) {
        return res.status(404).json({ error: 'Id no existe' });
    }

    res.json(contact);
    }

}