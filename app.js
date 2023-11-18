const express = require('express');
const app = express();
const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
