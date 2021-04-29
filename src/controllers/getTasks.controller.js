const db = require('../db')
const Todo = db.Todo
const Done = db.Done

module.exports = async function (req, res) {
  try {
    const result = [
      {
        title: 'Todo',
        tasks: await Todo.find({}).sort( { 'priorityNumber': 0 } ).lean().exec()
      },
      {
        title: 'Done',
        tasks: await Done.find({}).lean().exec()
      }
    ]
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
