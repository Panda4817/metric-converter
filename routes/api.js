/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      if ((initNum === "invalid number"|| input === "") && (initUnit === "invalid unit" || initUnit === "no unit")) {
        res.json({"error": "invalid number and unit", "string": "Error"})
      } else if (initUnit === "invalid unit"){
        res.json({"initUnit": 'invalid unit', "string": "Error"})
      }else if (initUnit === "no unit"){
        res.json({"initUnit":'no unit', "string": "Error"})
      }
      else if (initNum === "invalid number"){
        res.json({"initNum": initNum, "string": "Error"})
      }
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({
        "initNum":parseFloat(initNum.toFixed(5)),
        "initUnit":initUnit,
        "returnNum":parseFloat(returnNum.toFixed(5)),
        "returnUnit":returnUnit,
        "string":toString
      })
    });
    
};
