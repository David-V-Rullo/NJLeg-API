const router = require('express').Router()

const billRoute = require('./billRoute')

router.use('/bill', billRoute)

module.exports = router