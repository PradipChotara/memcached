import express from 'express';
import Memcached from 'memcached';

const app = express();
const port = 3000;

const memcached = new Memcached('localhost:11211');

app.use(express.urlencoded({ extended: true }));

app.post('/cache', (req, res) => {
  const { key, value } = req.body;
  memcached.set(key, value, 10, (err) => {
    if (err) {
      res.status(500).send('Error setting cache');
    } else {
      res.send(`Cached key: ${key} with value: ${value}`);
    }
  });
});

app.get('/cache/:key', (req, res) => {
  const { key } = req.query;
  memcached.get(key, (err, data) => {
    if (err) {
      res.status(500).send('Error retrieving cache');
    } else if (data) {
      res.send(`Cached value for key ${key}: ${data}`);
    } else {
      res.status(404).send('Key not found');
    }
  });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
