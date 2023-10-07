const mongoose = require('mongoose')
require('dotenv').config()

exports.dbConnect = async () => {
    try {
        const db = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Db Connected');
    } catch (error) {
        console.log(error);
    }
}