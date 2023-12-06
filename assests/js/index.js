const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/calculadora', (req, res) => {
 const { operacao, valor1, valor2 } = req.query;

 switch (operacao) {
    case 'adição':
      return res.json({ resultado: parseFloat(valor1) + parseFloat(valor2) });
    case 'subtração':
      return res.json({ resultado: parseFloat(valor1) - parseFloat(valor2) });
    case 'multiplicação':
      return res.json({ resultado: parseFloat(valor1) * parseFloat(valor2) });
    case 'divisão':
      return res.json({ resultado: parseFloat(valor1) / parseFloat(valor2) });
    case 'resto':
      return res.json({ resultado: parseFloat(valor1) % parseFloat(valor2) });
    default:
      return res.status(400).json({ erro: 'Operação inválida' });
 }
});

app.post('/calculadora', (req, res) => {
 const { operacao, valor1, valor2 } = req.body;

 switch (operacao) {
    case 'adição':
      return res.json({ resultado: parseFloat(valor1) + parseFloat(valor2) });
    case 'subtração':
      return res.json({ resultado: parseFloat(valor1) - parseFloat(valor2) });
    case 'multiplicação':
      return res.json({ resultado: parseFloat(valor1) * parseFloat(valor2) });
    case 'divisão':
      return res.json({ resultado: parseFloat(valor1) / parseFloat(valor2) });
    case 'resto':
      return res.json({ resultado: parseFloat(valor1) % parseFloat(valor2) });
    default:
      return res.status(400).json({ erro: 'Operação inválida' });
 }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));