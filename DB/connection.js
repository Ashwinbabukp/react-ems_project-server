const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongodb Atles connected to EMS server...!!");
}).catch((err)=>{
    console.log(`Mongodb Atles connection failed!! Error:${err}`);
})