const express = require('express');
const cors = require ('cors');
const dotenv = require('dotenv');
const connectDB = require('user/config/db');
const authRoutes = require('user/routes/userRoutes');

dotenv.config();
connectDB();
const app = express();
//middleware
app.use(cors());//pour autoriser les requetes cross origine
app.use(express.json());//pour analyser les requetes json

//routes
app.use('/api/user',authRoutes);
//demarrer le serveur
const PORT =process.env.PORT|| 5000;
app.listen(PORT,()=>{
    console.log("serveur en cours dexecution sur le port $(PORT)");
})