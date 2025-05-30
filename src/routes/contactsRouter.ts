import { Router } from 'express'
import { param } from 'express-validator'

import { ContactController } from '../controllers/ContactsController'

const router = Router()

router.get('/', ContactController.getAll)
router.get('/:contactsId', 
    param('contactsId'),

    ContactController.getAll)

export default router