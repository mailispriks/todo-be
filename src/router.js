const express = require('express')
const router = express.Router()

const { getTasks, createTask, moveTask, downloadFile } = require('./controllers')

router.get('/tasks', getTasks)
// id is mongo object _id and toTask is todo or done
router.get('/moveTask/:id/:toTask', moveTask)
router.post('/createTask', createTask)
router.post('/downloadFile', downloadFile)

module.exports = router
