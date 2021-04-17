const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/app-chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;