import express from 'express'

import {
  create,
  createdGames,
  details,
  edit,
  list,
  remove,
} from './publishers.controller'

const router = express.Router()

router.get('/createdGames/:id', createdGames)
router.get('/', list)
router.get('/:id', details)
router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', remove)

export default router
