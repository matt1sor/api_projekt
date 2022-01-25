import { Request, Response, NextFunction } from 'express'

export interface ReqWithFindParams extends Request {
  findParams: FindParams
}

export type FindParams = {
  limit?: number
  skip?: number
  sort?: {
    [field: string]: 1 | -1
  }
}

export const getFindParams = (
  req: Request<
    {},
    {},
    {},
    Omit<FindParams, 'sort'> & {
      sort: string
      order: 1 | -1
    }
  >,
  res: Response,
  next: NextFunction
) => {
  const findParams: FindParams = {}

  if (req.query.skip) {
    findParams.skip = +req.query.skip
    findParams.limit = req.query.limit
      ? Math.max(Math.min(req.query.limit, 100), 1)
      : 10
  }

  if (req.query.sort && req.query.order) {
    findParams.sort = {
      [req.query.sort]: req.query.order,
    }
  }

  ;(req as unknown as ReqWithFindParams).findParams = findParams

  next()
}
