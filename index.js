const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const instaData = require('./data.json');

const port = process.env.PORT || 5500;

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let obj = {
    name: 'John Doe',
    class: 'CS101'
};

let contact = {
    name: 'John Doe',
    email: 'johndoe@xyz.com',
    phone: '1234567890',
    socials: {
        facebook: 'facebook.com/johndoe',
        instagram: 'instagram.com/johndoe',
        twitter: 'twitter.com/johndoe'
    }
};

app.get('/', (req, res) => {
    res.send("Hello World, You are in the root directory");
});

app.get('/about', (req, res) => {
    res.send(obj);
});

app.get('/contact', (req, res) => {
    res.send(contact);
});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100 + 1)
    res.render("random.ejs", {
        num: randomNumber
    });
});

app.get('/ig/:username', (req, res) => {
    const { username } = req.params;

    // Check if the requested username exists in our data
    if (instaData[username]) {
        res.render("instagram.ejs", { profile: instaData[username], username, notFound: false });
    } else {
        // Instead of sending 404, render the template with a notFound flag
        res.render("instagram.ejs", { notFound: true, username });
    }
})

app.get('*', (req, res) => {
    res.status(404).send('You suck at hacking!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
