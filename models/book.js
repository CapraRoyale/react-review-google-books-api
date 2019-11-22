//  Putting constraints on our data format because Mongo is OUT OF CONTROL
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Schema. It sounds cool, doesn't it? Skee-mah. Like you're hatching a plan....
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
