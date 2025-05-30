import express from 'express'
import contactsRouter from './routes/contactsRouter'
const app = express()

app.use(express.json())

app.use('/api/contacts', contactsRouter)

export default app