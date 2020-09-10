const express = require('express');

const server = express()
server.use(express.json());


server.get('/', (req, res) => {
    res.json({ hello: "world!" });
});


const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})