const db = require('./../db')
const Todo = db.Todo

module.exports = async function (req, res) {
  try {
    const priority = req.body.priority
    req.body.priorityNumber = priority === 'HIGH' ? 1 : priority === 'MEDIUM' ? 2 : 3
    await Todo.create(req.body)
    res.status(200).json({ message: 'Success' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
