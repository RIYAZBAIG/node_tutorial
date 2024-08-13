const mongoose = require("mongoose");

const mongoURL=" mongodb://127.0.0.1:27017/myDatabase";

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.error('Connected to MongoDB error');
});

db.on('diconnected',()=>{
    console.log('Connected to MongoDB disconnected');
});


module.exports = db