const mongooes=require('mongoose');


const DB=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aea2zks.mongodb.net/quickBucksDB?retryWrites=true&w=majority&appName=Cluster0`

mongooes.connect(DB,{
    useUnifiedTopology: true ,
    useNewUrlParser: true,
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err)
})