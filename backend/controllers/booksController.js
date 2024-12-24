const db = require('../config/db')

const getBooks = async (req, res) => {
  try {
    const [data] = await db.query('SELECT * FROM books_table');
    if (!data.length) return res.status(404).json({ message: "No books found" });
    return res.json(data);  
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An error occurred while fetching books" });
  }
}

const createBook = async (req, res) => {
  try {
    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
    const sql = "INSERT INTO books_table (`title`, `desc`, `price`, `cover`) VALUES (?, ?, ?, ?)";
    const [data] = await db.query(sql, values);
    return res.json({ message: "Book created successfully", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An error occurred while creating the book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookID = req.params.id
    const sql = "DELETE FROM books_table WHERE book_id = ?"
    const data = await db.query(sql, bookID)
    return res.json({message: "Book successfully deleted", data})
  } catch (error) {
    console.log(error)
  }
}

const updateBook = async (req, res) => {
  try {
    const bookID = req.params.id
    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover, bookID];
    const sql = "UPDATE books_table SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE book_id = ?"
    const data = await db.query(sql, values)
    return res.json({message: "Book successfully updated", data})
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getBooks, createBook, deleteBook, updateBook }
