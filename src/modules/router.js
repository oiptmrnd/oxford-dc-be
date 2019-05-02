const express = require('express');
const dictionaryHandler = require('./handlers/dictionary-handler');

const router = express.Router();


// private routing. Require access validation


router.get("/api/dictionary/search", dictionaryHandler.getDefinition );
router.get("/api/dictionary/synonyms", dictionaryHandler.getSynonyms);
router.get("/api/dictionary/translate", dictionaryHandler.getTranslation);



module.exports = router;