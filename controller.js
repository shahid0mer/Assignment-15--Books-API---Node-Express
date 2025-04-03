import { books } from "./Books.js";

export const getAllBooksController = (req, res) => {
    
  res.json(books);

}

export const viewBookbyIdController = (req, res) => {
  const bookid = parseInt(req.params.bookid)
  const book = books.find((b) => b.id === bookid)

  book ? res.json(book) : res.status(404).json({message:`Book not Found`})

  
  
};


export const ErrorController = (req,res) => {
    res.status(404).json({ error: "Route not found" })
}

