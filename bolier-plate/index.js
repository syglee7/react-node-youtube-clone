const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key');

const { User } = require('./models/User');

// application/x-www-form/urlencoded
app.use(express.urlencoded({extended: true}));
// application/json
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnitfiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));


app.get('/', (req, res) => res.send('Hello World!~!!~!'));

app.post('/register', (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client 에서 가져오면
    // 그것들을 DB에 넣어준다.

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err});
        return res.status(200).json({
            success: true,
        });
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));