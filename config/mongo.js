const mongoose = require('mongoose');

const connectDB = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect( DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        (!err) ? console.log(`Conected success!`): console.log(err);
    })
}

module.exports = { connectDB };
