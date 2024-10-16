const mongoose = require('mongoose')

const propertySchema = mongoose.Schema({
  propertyType: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  address: {
    type: 'String',
    required: true
  },
  images: [String],
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true,
    lowercase: true,
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  bedroom: {
    type: String,
    required: true
  },
  bathroom: {
    type: String,
    required: true
  },
  amenities: [
    {
      wifi: {type: Boolean, required: true},
      dryer: {type: Boolean, required: true},
      gym: {type: Boolean, required: true},
      refrigerator: {type: Boolean, required: true},
      sauna: {type: Boolean, required: true},
      pool: {type: Boolean, required: true},
      washer: {type: Boolean, required: true},
      dryer: {type: Boolean, required: true},
      parking: {type: Boolean, required: true},
    }
  ],
  coordinates: [Number],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property
