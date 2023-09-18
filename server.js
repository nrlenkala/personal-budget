const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));


const budget = {
    myBudget : [
        {
            title: 'Housing',
            budget: 340
        },
        {
            title: 'Electricity',
            budget: 133
        },
    
        {
            title: 'Groceries',
            budget: 222
        },
        {
            title: 'Transportation',
            budget: 200
        },
        {
            title: 'Savings',
            budget: 300
        },
        {
            title: 'Entertainment',
            budget: 275
        },
        {
            title: 'others',
            budget: 150
        },
]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.use('/budget', (req, res) => {
    res.sendFile("C:\\Users\\nlenkala\\Desktop\\dev\\personal-budget\\server.json");
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});