import { Request, Response } from 'express'

import Game from '../../../db/models/game'
import type { GameType } from './games.types'

export const list = async (req: Request, res: Response) => {
  try {
    const games = await Game.find({})

    res.json(games)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const details = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const game = await Game.findById(req.params.id).populate('publisher')

    if (!game) {
      return res.sendStatus(404)
    }

    res.send(game)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const create = async (
  req: Request<{}, GameType, GameType>,
  res: Response
) => {
  try {
    const newGame = await Game.create(req.body)

    res.status(201).send(newGame)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const edit = async (
  req: Request<{ id: string }, GameType, Partial<GameType>>,
  res: Response
) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    res.send(updatedGame)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const remove = async (req: Request<{ id: string }>, res: Response) => {
  try {
    await Game.findByIdAndDelete(req.params.id)

    res.sendStatus(200)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}
