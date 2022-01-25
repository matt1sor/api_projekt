import { Request, Response } from 'express'

import Publisher from '../../../db/models/publisher'
import Game from '../../../db/models/game'
import type { PublisherType } from './publishers.types'
import { ReqWithFindParams } from '../../../middleware/query'

export const list = async (req: Request, res: Response) => {
  try {
    const publishersList = await Publisher.find(
      {},
      null,
      (req as unknown as ReqWithFindParams).findParams
    )

    res.send(publishersList)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const details = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const details = await Publisher.findById(req.params.id)

    if (!details) {
      return res.sendStatus(404)
    }

    res.send(details)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const create = async (
  req: Request<{}, PublisherType, PublisherType>,
  res: Response
) => {
  try {
    const newPublisher = await Publisher.create(req.body)

    res.status(201).send(newPublisher)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const edit = async (
  req: Request<{ id: string }, PublisherType, Partial<PublisherType>>,
  res: Response
) => {
  try {
    const updatedPublisher = await Publisher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.send(updatedPublisher)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const remove = async (req: Request<{ id: string }>, res: Response) => {
  try {
    await Publisher.findByIdAndDelete(req.params.id)

    await Game.deleteMany({ publisher: req.params.id })

    res.sendStatus(200)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}

export const createdGames = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const createdGames = await Game.find({ publisher: req.params.id })

    res.send(createdGames)
  } catch (e) {
    console.error(e)

    res.sendStatus(400)
  }
}
