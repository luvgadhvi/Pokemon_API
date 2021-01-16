const mongoose = require('mongoose');
//Method to connect Application to mongoDb Cloud Server.
mongoose.connect(process.env.mongoosedb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
