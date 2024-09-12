const express=require('express')
const app=express()
const colors=require('colors')
const dotenv=require('dotenv')
dotenv.config()

const userRoutes  =require('./routes/userRoutes')
const chatRoutes=require('./routes/chatRoutes');
const {notFound,errorHandler} = require('./middlewares/errorMiddleware')

app.use(express.json()) //to accept json data

const connectdb =require('./config/db')
// this is a function written inside the config->db.js
connectdb();

// const chats= require('./data/data')

const port=process.env.PORT

// end points then goes to routes with default api/user
app.use('/api/user',userRoutes)

// chat route
app.use('/api/chat',chatRoutes)

// error handling middlewares
app.use(notFound)
app.use(errorHandler)



app.listen(port,()=>
console.log(`server is running on port ${port}`.yellow.bold)//.yellow.bold is just an added color to differentiate using npm i colors
)

