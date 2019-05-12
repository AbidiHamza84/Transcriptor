let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let port = 5000;

let transcriptorRouter = require('./routes/transcriptor');

let app = express();

app.use(logger('prod'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/transcriptor', transcriptorRouter);

app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }
    return console.log(`server is listening on ${port}`)
});

module.exports = app;
