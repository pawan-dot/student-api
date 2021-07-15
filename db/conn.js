// Database connection
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/students-api", 
{ useNewUrlParser: true, 
    useCreateIndex:true, 
    useUnifiedTopology: true,
    useFindAndModify : true
 }).then(()=>{
    console.log('Database connected...');
 
 }).catch(err => {
        console.log('Connection failed...')
 });