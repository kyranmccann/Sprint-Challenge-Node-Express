const server = require('./server');
const express = require('express'); 

const path = require('path');

server.use(express.static(path.resolve(__dirname, './client/', 'build')));
server.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, './client/', 'build/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const port = process.env.PORT || 9000;
server.listen(port, () => console.log('it lives on ', port));
