const knex = require('knex')

const knexfile = require('../knexfile')

const dbConfig = process.env.DB_CONFIG || 'development'

const db = knex(knexfile[dbConfig])

module.exports = db