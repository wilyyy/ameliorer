const express = require("express");
const router = express.Router();
const { GetAllTranslations } = require("../Controller/translations");

router.get("/translations", GetAllTranslations);

module.exports = router;
