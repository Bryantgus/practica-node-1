import { Router } from 'express'

import { ContactController } from '../controllers/ContactsController'

const router = Router()

router.get('/', ContactController.getAll)
router.get('/:contactsId', 
    ContactController.getById)

export default router