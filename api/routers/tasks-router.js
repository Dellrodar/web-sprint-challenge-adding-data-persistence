express= require('express');

const tasks = require("../models/tasks-model");

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allTasks = await tasks.getTasks()
    return res.json(allTasks)
  } catch (err) {
    return next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const task = await tasks.getTasksById(req.params.id)
    return res.json(task)
  } catch (err) {
    return next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const task = await tasks.addTask(req.body)
    return res.json(task);
  }catch(err){
    return next(err)
  }
})

module.exports = router;