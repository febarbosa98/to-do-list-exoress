const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/todo-list2')
.then(() => console.log('Conectado ao MongoDB'))
.catch((err)=> console.error(err))