import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import * as db from './db/connection'
import apiV1 from './api/v1'

db.createDbConnection()

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1', apiV1)

app.use('*', (req, res) => {
  res.status(404).send('Endpoint not found')
})

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  } else {
    res.status(500).send('Something went wrong!')
  }
})

export default app
