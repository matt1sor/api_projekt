import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
  },
})

const Game = mongoose.model('Game', gameSchema)

export default Game
