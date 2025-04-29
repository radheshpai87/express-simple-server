const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

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
    res.send('Accessed the root route');
});

app.get('/about', (req, res) => {
    res.send(obj);
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
