const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.get('/',(req, res) => {
    res.send('Welcome to ChooseNBuild Backend!');
});

app.listen(postMessage, () => {
    console.log('Server is running on http://localhost:${PORT}');
});