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

router.get('/:id', async (req, res, next) => {
  try {
    const resource = await resources.getResourcesById(req.params.id)
    return res.json(resource)
  } catch (err) {
    return next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const resource = await resources.addResource(req.body)
    return res.json(resource);
  }catch(err){
    return next(err)
  }
})

router.get('/resources/:id', async (req, res, next) => {
  try {
    const projectResources = await resources.getProjectsByResource(req.params.id)
    return res.json(projectResources)
  } catch (err) {
    return next(err)
  }
})

module.exports = router;