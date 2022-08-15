const express = require('express');
const { getAllTodo, getATodo, createTodo, updateTodo, deleteTodo } = require('../controllers/todos.js')
const router = express.Router({
    mergeParams: true
});

router.get('/', getAllTodo) // get all

router.get('/:id', getATodo) // get specific

router.post('/', createTodo) // creating todo

router.put('/:id', updateTodo) // update

router.delete('/:id', deleteTodo)// deleting

module.exports = router;