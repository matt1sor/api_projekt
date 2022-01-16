import express from 'express'

import { details, list, create, edit, remove } from './games.controller'

const router = express.Router()

router.get('/', list)
router.get('/:id', details)
router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', remove)

export default router
