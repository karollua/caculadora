const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the Simple Calculator API!');
});

app.post('/add', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
});

app.post('/subtract', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const difference = num1 - num2;
    res.send(`The difference between ${num1} and ${num2} is ${difference}.`);
});

app.post('/multiply', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const product = num1 * num2;
    res.send(`The product of ${num1} and ${num2} is ${product}.`);
});

app.post('/divide', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    if (num2 === 0) {
        res.send('Error: Division by zero is not allowed.');
    } else {
        const quotient = num1 / num2;
        res.send(`The quotient of ${num1} and ${num2} is ${quotient}.`);
    }
});

app.post('/remainder', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    if (num2 === 0) {
        res.send('Error: Division by zero is not allowed.');
    } else {
        const remainder = num1 % num2;
        res.send(`The remainder of ${num1} divided by ${num2} is ${remainder}.`);
    }
});

app.listen(port, () => {
    console.log(`Simple Calculator API listening at http://localhost:${port}`);
});