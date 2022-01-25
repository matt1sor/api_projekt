import express from 'express'

import {
  create,
  createdGames,
  details,
  edit,
  list,
  remove,
} from './publishers.controller'
import { getFindParams } from '../../../middleware/query'

const router = express.Router()

router.get('/createdGames/:id', createdGames)
router.get('/', getFindParams)
router.get('/', list)
router.get('/:id', details)
router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', remove)

export default router
