import express from 'express'

import { getFindParams } from '../../../middleware/query'
import { details, list, create, edit, remove } from './games.controller'

const router = express.Router()

router.get('/', getFindParams)
router.get('/', list)
router.get('/:id', details)
router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', remove)

export default router
