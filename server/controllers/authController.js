const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET , {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

exports.signUp = async function(req, res) {
  try {
    const newUser = await User.create(req.body)

    res.status(200).send({
      user: newUser,
    })
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
}

exports.login = async function(req, res) {
  try {

    let {email, password} = req.body

    console.log(email, password)

    let user =  await User.findOne({email})


    if (!user || !(await user.checkPasswords(password, user.password))) throw new Error('user not found')

    res.status(200).json({
      status: 'success',
      token: signToken(user._id)
    })

  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    })
  }

}


exports.protect = async function(req, res, next) {
  let token

  //checking for jwt from the header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    throw new Error('You are not logged in! Please log in to gain access to resource')
  }

  //verify token
  const decoded = await jwt.verify(token, process.env.JWT_SECRET)

  //check if user still exists
  const currentUser = await User.findById(decoded.id)

  if(!currentUser) {
    throw new Error('User with this token does not exist')
  }

  req.user = currentUser

  next()
}