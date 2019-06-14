/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
        
    test('No Numerical Input', function(done) {
      var input='kg';
      //console.log(convertHandler.getNum(input))
      assert.equal(convertHandler.getNum(input),1)
      done();
    }); 
    
    test('Whole number input with spaces', function(done) {
      var input = '32 gal';
      //console.log(convertHandler.getNum(input))
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Whole number input', function(done) {
      var input = '32L';
       
      
      assert.equal(convertHandler.getNum(input),32);
    
      done();
    });
        
    test('Decimal Input', function(done) {
      var input='1.556kg';
      assert.equal(convertHandler.getNum(input),1.556);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input='1/30 kg';
     
      assert.approximately(convertHandler.getNum(input),0.0333,0.001)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input='1/2.5kg';
     // console.log(convertHandler.getNum(input))
      assert.approximately(convertHandler.getNum(input),0.4,0.00001)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input='1/2.5/5kg';
      //console.log(convertHandler.getNum(input))
      assert.equal(convertHandler.getNum(input),'invalid number')
      done();
     
    });
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('getUnit For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele,i) {
        //assert
        assert.equal(convertHandler.getUnit(ele),input[i])
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('ele'),'invalid unit')
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['Gallons','Liters','Miles','Kilometers','Pounds','Kilograms'];
      input.forEach(function(ele, i) {
        //console.log(ele,convertHandler.spellOutUnit(ele), expect[i]); 
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
        var input = [20, 'l'];
      var expected = 5.28344;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
           var input = [20, 'MI'];
      var expected = 32.187;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
              var input = [20, 'Km'];
      var expected = 12.42737;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
             var input = [5, 'Lbs'];
      var expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
             var input = [5.2, 'kg'];
      var expected = 11.464046985;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});