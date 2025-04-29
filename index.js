const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.static(path.join(__dirname, 'Pages')));

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
    res.sendFile(__dirname + '/Pages/root.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/Pages/about.html');
});

app.get('/contact', (req, res) => {
    res.send(contact);
});

app.get('*', (req, res) => {
    res.status(404).send('You suck at hacking!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
