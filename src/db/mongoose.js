const mongoose = require('mongoose');

mongoose.connect(process.env.mongoosedb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
