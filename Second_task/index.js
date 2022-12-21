const express = require('express');
const {spwan, spawn} = require('child_process');
const exec = require('child_process').exec
const app = express()
const port = 3000
app.get('/', (req,res) => {

    var dataToSend;
    const python = spawn('python', ['run_at_server.py', img1, img2]);
    
    console.log('data sended')
    

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.send(dataToSend)
    });
})

app.listen(port, () => console.log(`example app listening on port ${port}`))
