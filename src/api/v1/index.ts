import express from 'express'

import { checkApiKey } from '../../middleware/auth'
import gamesRouter from './games/games.router'
import publishersRouter from './publishers/publishers.router'

const router = express.Router()

router.use('/games', checkApiKey, gamesRouter)
router.use('/publishers', checkApiKey, publishersRouter)

export default router
