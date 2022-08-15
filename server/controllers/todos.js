const pool = require('./../database.js');

module.exports.getAllTodo = async (req, res) => {
    try {
        const todos = await pool.query(`SELECT * FROM todo`);
        console.log(todos.rows)
        res.json(todos.rows);
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
}
module.exports.getATodo = async (req, res) => {
    try {
        const { id: todo_id } = req.params;
        if (!todo_id) {
            throw new Error('todo_id is required');
        }
        const todo = await pool.query(`SELECT * FROM todo WHERE todo_id='${todo_id}'`);
        console.log(todo.rows);
        res.json(todo.rows);
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
}

module.exports.createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        console.log(description);
        if (!description) {
            throw new Error('Description of todo is required');
        }
        const todos = await pool.query(`INSERT INTO todo(description) VALUES ('${description}') RETURNING *`);
        console.log(todos.rows);
        res.json(todos.rows);
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
}

module.exports.updateTodo = async (req, res) => {
    try {
        const { id: todo_id } = req.params;
        const { description } = req.body;
        if (!todo_id) {
            throw new Error('ID is required');
        }
        if (!description) {
            throw new Error('Description of todo is required');
        }
        const todos = await pool.query(`UPDATE todo SET description='${description}' WHERE todo_id='${todo_id}' RETURNING *`);
        if (todos.rows.length === 0) {
            throw new Error('Todo does not exist')
        }
        console.log(todos.rows);
        res.json(todos.rows);
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
}

module.exports.deleteTodo = async (req, res) => {
    try {
        const { id: todo_id } = req.params;
        if (!todo_id) {
            throw new Error("todo_id is required");
        }
        const todos = await pool.query(`DELETE FROM todo WHERE todo_id='${todo_id}' RETURNING *`);
        console.log(todos.rows);
        res.json(todos.rows);
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
}