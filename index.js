const express = require('express')
require('./src/db/mongoose')

const validator = require('validator')

const userRouter = require('./src/routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



