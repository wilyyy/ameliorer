const mongoose = require("mongoose");
const { Schema } = mongoose;

const TranslationsSchema = new Schema({});

const Translations = mongoose.model("Translations", TranslationsSchema);

module.exports = Translations;
