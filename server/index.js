const express=require('express');
const app=express();
const connectDb=require('./config/connection');
const router=require('./router/authRouter');
const cors=require('cors');
require('dotenv').config();



app.use(express.json())
app.use(cors({origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}))
app.use(router)

port=4000;

connectDb();

app.listen(port,()=>{
    console.log('Server is Running Port',port);
    
})