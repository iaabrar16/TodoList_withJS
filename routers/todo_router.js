const { createTodo, getTodo, putTodo, deleteTodo } = require('../controllers/todo_controller');

const express = require("express");

const router = express.Router();

// POST

router.post("/", createTodo);

// GET

router.get("/", getTodo);

// PUT

router.put("/", putTodo);

// DELETE

router.delete("/", deleteTodo);

module.exports = router;