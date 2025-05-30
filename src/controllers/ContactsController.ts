import { Request, Response } from 'express'
import agenda from './contacts.json' assert { type: 'json' }


export class ContactController {
    static getAll = async (req: Request, res: Response) =>  {
        res.json(agenda)
        return
    }

    static getById = async (req: Request, res: Response) =>  {

    }
}