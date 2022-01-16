import mongoose from 'mongoose'

export const createDbConnection = () => {
  return mongoose.connect('mongodb://localhost:27017/mateusz', {})
}

export const getDbConnection = () => {
  return mongoose.connection
}
