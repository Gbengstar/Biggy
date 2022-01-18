const dotenv = require('dotenv')
dotenv.config()
const connectDB = require("./configuration/dbConfiguration.js")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const express = require('express')
const router = require("./routes/route.js")
const wRouter = require("./routes/wRoute.js")
const app = express()


app.use(express.json())
app.use(cookieParser())

app.use("/winners", wRouter)
app.use("/", router);

app.all("*", (req, res)=>{
    res.send("welcome to biggy competition site, check your url again")
    
})

//connect to database
const PORT = process.env.PORT || 8080

const server = connectDB()

mongoose.connection.once("open", () => {
    console.log("database connected!!");
    app.listen(PORT, ()=>{
      console.log(`successfully launch server http://localhost:${PORT}`)
  })
});
