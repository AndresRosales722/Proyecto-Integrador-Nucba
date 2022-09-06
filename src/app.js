const express = require('express') // requiero express
const app = express() // ejecuto express
const PORT = 3000 // Puerto
const path = require('path') // requiero el modulo path para las ruta de archivos 

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))


/* Enrutadores */
let indexRouter = require('./routes/indexRouter')


// Middlewares de rutas
app.use('/', indexRouter) // la ruta a la que responde es la raiz

app.use(express.static('public'))








app.listen(PORT, () => console.log(`Servidor levantado en el ${PORT}     
http://localhost:${PORT} 
`))