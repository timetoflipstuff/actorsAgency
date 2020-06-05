import express from "express";
import { join } from "path";
const app = express();

const port = 3000;

// Main page
app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: join(__dirname, './')
    });
});

app.get('/index.css', function (req, res) {
    res.sendFile('index.css', {
        root: join(__dirname, './')
    });
});

app.get('/indexParallax.js', function(req, res) {
    res.sendFile('indexParallax.js', {
        root: join(__dirname, './')
    });
});

// Actors page
app.get('/actors.html', function (req, res) {
    res.sendFile('actors.html', {
        root: join(__dirname, './')
    });
});

app.get('/actors.css', function (req, res) {
    res.sendFile('index.css', {
        root: join(__dirname, './')
    });
});

// Single Actor page
// app.get('/', function (req, res) {
//     res.sendFile('index.html', {
//         root: join(__dirname, './')
//     });
// });

// app.get('/index.css', function (req, res) {
//     res.sendFile('index.css', {
//         root: join(__dirname, './')
//     });
// });

app.listen(process.env.PORT || 3000);