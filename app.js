const express = require("express")
const volleyball = require("volleyball")
const app = new express()
app.use(volleyball)

//Middleware

//Routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "You requested index page 🔥",
  })
})

// Catch 404 error and forward them to error handler function
app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

//Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env" === "development" ? err : {})
  const status = err.status || 500
  // Respond to client
  res.status(status).json({
    error: {
      message: error.message,
    },
  })
  // Respond to ourselves
  console.error(err)
})

//Start the server
const port = app.get("port") || 3000
app.listen(port, () =>
  console.log(`Server is live on http://localhost:${port}`)
)
