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
    if (input==undefined || input==''){
      res.send( "invalid number and unit")
      return;
    }
      var initNum = convertHandler.getNum(input);
    
      var initUnit = convertHandler.getUnit(input);
   
    if(initNum=="invalid number" && initUnit=="invalid unit"){
      res.send("invalid number and unit");
      return;
    }
    if(initUnit=="invalid unit"){
      res.send("invalid unit");
      return ;
    }
    if(initNum=="invalid number"){
      res.send("invalid number");
      return ;
    }
    
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
  //     {
  //   initNum: 3.1,
  //   initUnit: 'mi',
  //   returnNum: 4.98895,
  //   returnUnit: 'km',
  //   string: '3.1 miles converts to 4.98895 kilometers'
  // }
    var result={
      initNum:initNum,
      initUnit:initUnit,
      returnNum:returnNum,
      returnUnit:returnUnit,
      string:toString,
    }
      res.json(result);
    });
    
};
