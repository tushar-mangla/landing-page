const mongoose = require("mongoose");
require('dotenv').config();


let url = process.env.MONgODB_URL ;//|| 'mongodb+srv://taskapp:Tushar%40123%23@cluster0.otykb.mongodb.net/login-database?retryWrites=true&w=majority'

const ConnectDb = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:false
    });
    console.log(`mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error ${error}`);
    process.exit(1);
  }
};

mongoose.connection.once('open', function(){
  console.log('connected');
}).on('error', function(){
  console.log('error is: ');
})

 module.exports = ConnectDb;



