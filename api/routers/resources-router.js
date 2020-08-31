express= require('express');

const resources = require("../models/resources-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allResources = await resources.getResources()
    return res.json(allResources);
  } catch (err) {
    return next(err);
  }
})

module.exports = router;