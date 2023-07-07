// DEPENDENCIES
const inv = require('express').Router()
const db = require('../models')
const { Inv } = db 
const { Op } = require('sequelize')


// ALL ITEMS
inv.get('/', async (req, res) => {
    try {
        const foundItem = await Inv.findOne({
            where: { item_name: req.params.id }
        })
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
}})



// EXPORT
module.exports = inv
