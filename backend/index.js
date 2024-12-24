const express = require('express')
const cors = require('cors')
const { getBooks, createBook, deleteBook, updateBook } = require('./controllers/booksController');
const db = require("./config/db")

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.json("hello")
})

app.get("/books", getBooks)

app.post("/books", createBook)

app.delete("/books/:id", deleteBook)

app.put("/books/:id", updateBook)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`)
})