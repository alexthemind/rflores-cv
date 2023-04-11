const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,'build')));
app.use('/images',express.static(path.join(__dirname,'public','images')));

app.get('/*', (req,res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname,'build')
    });
});

app.listen(PORT, () => {
    console.log('Server production listen in --port:',PORT);
});