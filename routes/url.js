const express = require('express');
const shortId = require('short-id');
const validUrl = require('valid-url');

const router = express.Router();
const Url = require('../data/models/url');

// TODO: менять в зависимости от process.env
const baseUrl = 'http://localhost:8888';

router.post('/shortify', async (req, res) => {
  const longUrl = req.body.longUrl;
  // TODO: сейчас требует наличие http:// или https:// в начале URL
  // добавлять их, если URL корректен
  if (!validUrl.isWebUri(longUrl)) {
    return res.status(400).json('Invalid URL.');
  }

  try {
    let url = await Url.findOne({ longUrl });

    if (url) {
      // TODO: проверять срок жизни полученной модели url
      res.json(url);
    } else {
      const urlCode = shortId.generate();
      const shortUrl = baseUrl + '/' + urlCode;

      url = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date: Date.now(),
      });

      await url.save();
      res.json(url);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Internal server error.');
  }
});

module.exports = router;
