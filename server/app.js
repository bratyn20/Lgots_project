import express from 'express';

const app = express();

app.get('/' , (req,res) =>{
    res.send('hello world!');
});

const server = app.listen(8080, () => {
    console.log('server running :) port:8080')
});