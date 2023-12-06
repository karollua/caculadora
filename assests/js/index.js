const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.json({ result: sum });
});

app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const difference = num1 - num2;
    res.json({ result: difference });
});

app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const product = num1 * num2;
    res.json({ result: product });
});

app.get('/divide/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const quotient = num1 / num2;
    res.json({ result: quotient });
});

app.get('/remainder/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const remainder = num1 % num2;
    res.json({ result: remainder });
});

app.post('/add', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const sum = num1 + num2;
    res.json({ result: sum });
});

app.post('/subtract', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const difference = num1 - num2;
    res.json({ result: difference });
});

app.post('/multiply', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const product = num1 * num2;
    res.json({ result: product });
});

app.post('/divide', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const quotient = num1 / num2;
    res.json({ result: quotient });
});

app.post('/remainder', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const remainder = num1 % num2;
    res.json({ result: remainder });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});