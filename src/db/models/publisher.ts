import mongoose from 'mongoose'

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
})

const Publisher = mongoose.model('Publisher', publisherSchema)

export default Publisher
