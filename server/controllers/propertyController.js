const Property = require('../models/propertyModel')

exports.createProperty = async function(req, res) {
  try {
    const newProperty = await Property.create(req.body)

    res.status(200).json({
      status: 'success',
      property: newProperty
    })

  } catch(err) {
    res.status(404).json({
      status: 'fail',
      err: err.message
    })
  }
}

exports.getAllProperties = async function(req, res) {

  const queryObj = {...req.query}

  const excludedFields = ['page', 'sort', 'limit', 'fields']
  excludedFields.forEach(el => delete queryObj[el])
  
  let queryStr = JSON.stringify(queryObj)
  queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)
  console.log('query' + ' ', queryStr)

  let query = Property.find(JSON.parse(queryStr))

  //sorting
  if(req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ')
    query = query.sort(sortBy)
  } else {
    query = query.sort('createdAt')
  }

  //field limiting
  if(req.query.fields) {
    const fields = req.query.fields.split(',').join(' ')
    query = query.select(fields)
  } 

  // const page = req.query.page * 1 || 1
  // const limit = req.query.limit * 1 || 3
  // const skip = (page - 1)
  // query = query.skip(skip).limit(limit)

  const properties =  await query

  res.status(200).json({
    length: properties.length,
    status: 'success',
    data: {
      properties
    }
  })
}

exports.getPropertyById = async function(req, res) {
  const property = await Property.findById(req.params.id)

  if (!property) throw new Error('property cannot be found')

  res.status(200).json({
    status: 'success',
    data: {
      property
    }
  })
}

exports.updatePropertyById = async function(req, res) {

  const  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true
  })

  if(!property) {
    throw new Error('property not found')
  }

  res.status(200).json({
    status: 'success', 
    property
  })

}