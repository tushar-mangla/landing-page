  const mongoose = require("mongoose");
 const dotenv = require("dotenv");
 const ck = require('ckey');
 const mongodb_url = ck.MONGODB_URL;

//console.log(typeof(JSON.stringify(mongodb_url)))
 dotenv.config()

// const ConnectDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log(`mongodb connected ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error ${error.message}`);
//     process.exit(1);
//   }
// };

// module.exports = ConnectDb;

const url = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/login-database";
// const mongoose = require('mongoose');
mongoose.connect( url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', function(){
  console.log('connected');
}).on('error', function(){
  console.log('error is: ');
})

