const dictionaryEp = require("../endpoints/dictionary-endpoints");


const logger = require("../logger/logger").getLogger();

var tenantId;


function _getDefinition(req, res) {
   
  dictionaryEp
    .getDefinition(req.query.word)
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json(error));
}
function _getSynonyms(req, res) {
   
  dictionaryEp
    .getSynonyms(req.query.word)
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json(error));
}
function _getTranslation(req, res) {
   
  dictionaryEp
    .getTranslation(req.query.word)
    .then(result => res.status(200).json(result))
    .catch(error => res.status(500).json(error));
}

module.exports = {
  getDefinition: _getDefinition,
  getSynonyms:_getSynonyms,
  getTranslation:_getTranslation
  
  
};