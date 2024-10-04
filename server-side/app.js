if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
  }

const express = require('express')
const cors = require('cors')
const router = require('./routers/index')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })