const dbConfig = require("../config/db")
const mongoose = require("mongoose")

module.exports = {
    mongoose,
    url: dbConfig.url,
    user: require('./user')(mongoose)
}