import ReactDOMServer from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';
import express from 'express';

import App from '../src/App';

const app = express();

app.use('^/$', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error occured');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

// loading static files form buiild folder
app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
