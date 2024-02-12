const Todo = require('../models/todo_models');

const createTodo = async (req, res) => {
    // Decide how to insert data to DB
    try {
        const todo = new Todo(req.body);
        const result = await todo.save();
        res.send({
            status: "success",
            message: "Todo created successfully",
            _id: result._id,
        });
    } catch (error) {
        res.send({
            status: "error",
            message: "Todo creation failed",
            error,
        });
    }
};
const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.send({
            status: "success",
            message: "Todo Get successfully",
            data: todos,
        });
    } catch (error) {
        res.send({
            status: "error",
            message: "Todo Get failed",
            error,
        });
    }
};
const putTodo = async (req, res) => {
    try {
        const id = req.body._id;
        // record find
        const todo = await Todo.findById(id);
        // change set
        todo.userName = req.body.userName;
        todo.mobile = req.body.mobile;
        // save
        await todo.save();
        res.send({
            status: "success",
            message: "Todo Update successfully",
        });
    } catch (error) {
        res.send({
            status: "error",
            message: "Todo Update failed",
            error,
        });
    }
};
const deleteTodo = async (req, res) => {
    try {
        const id = req.body._id;
        // record find
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                status: "error",
                message: "Todo not found",
            });
        }

        await todo.deleteOne();
        res.json({
            status: "success",
            message: "Todo deleted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Todo delete failed",
            error: error.message,
        });
    }
};

module.exports = { createTodo, getTodo, putTodo, deleteTodo };