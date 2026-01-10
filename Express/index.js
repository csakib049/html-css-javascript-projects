import express from 'express';
const app = express();

app.use(express.json()); // to read JSON body

app.post('/add', (req, res) => {
    const { a, b } = req.body;

    res.send(`Sum = ${a + b}`);
});

app.listen(3200);
