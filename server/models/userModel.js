const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'firstname should be more than 8'],
  },
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid email'],
    required: [true, 'Please provide your email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    minlength: [8, 'firstname should be more than 8'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please provide your password'],
    validate: {
      validator: function(el) {
        return el === this.password
      },
      message: 'Passwords are not the same'
    }
  },
  role: {
    type: String,
    default: 'user'
  }
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12)

  this.passwordConfirm = undefined

  next()

})

userSchema.methods.checkPasswords = async function (candidatePassword, password) {
  return await bcrypt.compare(candidatePassword, password)
}

const User = mongoose.model('User', userSchema)

module.exports = User