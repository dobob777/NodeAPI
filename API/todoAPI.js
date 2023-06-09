const express = require('express');
const app = express();
const router = express.Router();

// Schema Added...
const TodoSchema = require('../model/todoSchema');

router.post('/add-todo', async (req, res) => {
    try {
        const todoAdd = await TodoSchema.create({
            name: req.body.nameTodo,
            email: req.body.emailTodo,
            password: req.body.passwordTodo,
            gender: req.body.genderTodo
        })
        return res.send(todoAdd);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})

router.get('/list-todo', async (req, res) => {
    try {
        const listTodo = await TodoSchema.find({});
        return res.send(listTodo);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})

module.exports = router;