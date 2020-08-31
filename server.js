const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const server = express()
const port = process.env.PORT || 4000
const projectsRouter = require("./api/routers/projects-router")
const resourcesRouter = require("./api/routers/resources-router")
const tasksRouter = require("./api/routers/tasks-router")




server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/projects', projectsRouter);
server.use('/resources', resourcesRouter);
server.use('/tasks', tasksRouter);


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
