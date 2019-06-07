const router = require('express').Router()
const {File} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const files = await File.findAll()
    res.json(files)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const file = await File.findByPk()
    res.json(file)
  } catch (err) {
    next(err)
  }
})
