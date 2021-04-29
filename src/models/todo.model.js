const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    title: { type: String, required: true, trim: true  },
    color: {
        type: String,
        enum: ['GRAY', 'BLUE', 'INDIGO', 'PURPLE', 'PINK'],
    },
    priorityNumber: { type: Number },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
    },
    date: { type: Date, required: true },
    createdDate: { type: Date, default: Date.now }
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('todo', schema)
