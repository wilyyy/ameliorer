const mongoose = require("mongoose");
const { Schema } = mongoose;

const TranslationsSchema = new Schema({
   englishWords: {
      sentences: String,
   },
   frenchWords: {
      sentences: String,
   },
});

const Translations = mongoose.model("Model", TranslationsSchema, "translation");

module.exports = Translations;
