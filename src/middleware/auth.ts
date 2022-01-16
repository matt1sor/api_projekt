import type { Handler } from 'express'

export const checkApiKey: Handler = (req, res, next) => {
  if (req.headers['x-api-key'] !== '123456') {
    res.sendStatus(403)
    return
  }

  next()
}
