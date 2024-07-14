import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  cover: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
