const request = require("request");
const logger = require("../logger/logger").getLogger();
const apiResponse = require("../../models/api-response");

const host = "https://api.oip.tm.com.my";
const path = "/app/t/common.api.com/oxford/v1.0.0/entries/en";
const token = "";

function _getDefinition(word) {
  return new Promise((resolve, reject) => {
    request(
      {
        method: "GET",
        uri: `${host}${path}/${word}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          app_id: "",
          app_key: ""
        },
        rejectUnauthorized: false
      },
      (error, response, body) => {
        if (error) {
          logger.log("error", ` ${error}`);
          reject(new apiResponse(500, error));
        } else {
          if (response.statusCode != 200) {
            logger.log("error", ` ${response.statusCode}`);
            reject(
              new apiResponse(
                500,
                `Failed to get users ${response.statusCode}`
              )
            );
          } else {
            resolve(new apiResponse(200, JSON.parse(body)));
          }
        }
      }
    );
  });
}

function _getSynonyms(word) {
  return new Promise((resolve, reject) => {
    request(
      {
        method: "GET",
        uri: `${host}${path}/${word}/synonyms`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          app_id: "",
          app_key: ""
        },
        rejectUnauthorized: false
      },
      (error, response, body) => {
        if (error) {
          logger.log("error", ` ${error}`);
          reject(new apiResponse(500, error));
        } else {
          if (response.statusCode != 200) {
            logger.log("error", ` ${response.statusCode}`);
            reject(
              new apiResponse(
                500,
                `Failed to get users ${response.statusCode}`
              )
            );
          } else {
            resolve(new apiResponse(200, JSON.parse(body)));
          }
        }
      }
    );
  });
}

function _getTranslation(word) {
  return new Promise((resolve, reject) => {
    request(
      {
        method: "GET",
        uri: `${host}${path}/${word}/translations=ms`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          app_id: "",
          app_key: ""
        },
        rejectUnauthorized: false
      },
      (error, response, body) => {
        if (error) {
          logger.log("error", ` ${error}`);
          reject(new apiResponse(500, error));
        } else {
          if (response.statusCode != 200) {
            logger.log("error", ` ${response.statusCode}`);
            reject(
              new apiResponse(
                500,
                `Failed to get users ${response.statusCode}`
              )
            );
          } else {
            resolve(new apiResponse(200, JSON.parse(body)));
          }
        }
      }
    );
  });
}

module.exports = {
  getDefinition: _getDefinition,
  getSynonyms: _getSynonyms,
  getTranslation: _getTranslation
  
  
};
