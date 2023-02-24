const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

app.use(require("./routes/todos.route"))

mongoose.connect("mongodb+srv://vakha:vakha123@cluster0.jzwrdu1.mongodb.net/todo")
.then(() => console.log("Успешно соединились с сервером MongoDB"))
.catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3010, () => {
console.log("Сревер успешно запушен");
});