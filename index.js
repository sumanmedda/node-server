// importing express for server
const express = require('express');
const app = express();

// creating new port
const PORT = 5000;

// accessing files under folders
const fileAccess = ('demo');
app.use(`/${fileAccess}`,express.static(__dirname + '/public'));

// accessing files in root
app.get(`/`,(req,res) => {
    res.send(`Hey There we are doing a new connection in nodejs`);
});

// activating and launching server
app.listen(PORT, () => {
    console.log(`Hi, Your Server is running on : http://localhost:${PORT}`);
    console.log(`And You can access your internal files running on : http://localhost:${PORT}/${fileAccess}`);

    
})