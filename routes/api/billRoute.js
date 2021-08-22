const router = require('express').Router()
const Bill = require('../../models/Bill')

router.get('/', async (req, res) => {
    // const billData = await Bill.findAll().catch((err) => {
    //     res.json(err)
    // })
    res.json("billData")
})

module.exports = router
