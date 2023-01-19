const express = require("express")
const mongoose = require("mongoose")
const routes = require("./app/routes")
var cors = require('cors')
var app = express()

mongoose.set('strictQuery', false)
app.use(cors())
mongoose
	.connect("mongodb://localhost:27017/calculator", { useNewUrlParser: true })
	.then(() => {
		app.use(express.json()) // new
		app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})