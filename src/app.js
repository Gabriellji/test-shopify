require('dotenv').config()

const express = require('express')
const db = require('./db/db.client')

const app = express()

db.connector
    .sync()
    .then(() => console.log('find current DB'))
    .catch((err) => console.error(`sync faild: ${err}`))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req, res, next) => {
    let err = new Error('Not found')
    err.status = 404
    next(err)
})

module.exports = app