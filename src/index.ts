import colors from 'colors'
import app from './server'

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(colors.blue.bold( `REST API en el puerto ${port}`));
    
})