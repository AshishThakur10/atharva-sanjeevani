require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    // await mongoose.connect(
    //   process.env.MONGO_URI || 'mongodb://127.0.0.1/ecom',
    //   {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   },
    // )

    await mongoose.connect('mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        dbName: 'atharvDB',
        useNewUrlParser: true,
        useUnifiedTopology: true

      }
    )
      .then(() => {
        console.log('Mongodb connected……');
      });

    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.error('MongoDB connection FAIL')
    process.exit(1)
  }
}

module.exports = { connectDB }
