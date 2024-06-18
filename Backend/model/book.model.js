import mongoose from "mongoose";

const bookschema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String

})

// schema that comes in bookschema will go to "Book" collection in database
const Book = mongoose.model("Book",bookschema);

export default Book;