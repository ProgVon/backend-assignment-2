const express = require("express")
const logger = require("./logger")
const studentRoutes = require("./studentRoutes")

const app = express()
const PORT = 3000

app.use(express.json())
app.use(logger)

app.use("/students", studentRoutes)

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "Something went wrong" })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
