const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    "You're on Shortify. To start, send the POST request with longUrl" +
      "parameter provided in body (JSON). You'll get response with your shorten link."
  );
});

module.exports = router;
