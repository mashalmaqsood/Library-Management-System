const {Book} = require("../db/models/book");

const createBook = async(req,res) => {
 console.log("controller working!");
const { title,
    author,
    ISBN,
    genre,
    publishedYear,
    publisher
}= req.body;
try{
    const bookTitle = await Book.findOne({
        where : {title}
    })
if(bookTitle) return res.json({message : "The book already exists."})
 await Book.create({
    title,
    author,
    ISBN,
    genre,
    publishedYear,
    publisher
})
return res.status(200).send({message : "Book created successfully."})
}catch(err){
console.log(err);
return res.status(500).send({message : "Couldn't create the book."})
}


}
module.exports = {createBook}