const express = require('express');
const router = express.Router();
const Url = require('../data/models/url');

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({
      urlCode: req.params.code,
    });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL found.');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Internal server error.');
  }
});

module.exports = router;
