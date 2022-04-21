const Translations = require("../Models/translations");

const GetAllTranslations = async (req, res) => {
   try {
      const translations = await Translations.find({}, null, { limit: 20 });
      res.send(translations);
   } catch (e) {
      console.log(e); // let user know if an error has occured not in console
      res.send(e);
   }
};

module.exports = { GetAllTranslations };
