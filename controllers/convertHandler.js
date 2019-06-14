/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  // units supported
    // miles (mi) to kilometers (km),
    // pounds (lbs) to kilograms (kg), and
    // gallons (gal) to liters (L).

  const units={
    mi:{name:'Miles',to:'km',toString:'Kilometers',rate:1.60934},
    lbs:{name:'Pounds',to:'kg',toString:'Kilograms', rate:0.453592},
    gal:{name:'Gallons',to:'l',toString:'Liters',rate:3.78541},
    km:{name:'Kilometers',to:'mi',toString:'Miles',rate:1/1.60934},
    kg:{name:'Kilograms',to:'lbs',toString:'Pounds',rate:1/0.453592},
    l:{name:'Liters',to:'gal',toString:'Gallons',rate:1/3.78541},
        
  }
  this.getNum = function(input) {
    var result;
    const err="invalid number";
    //get the number from the input string
    // ex. 1gal or 1 gal will return integer 1
    //make sure it can handle fractions
    if(input.match(/^[0-9]+/g)==null
        || input.match(/^[0-9]+/g).length==0
      ) {
      return 1;
    };
    if(input.includes('/')){
      if(input.match(/\//g).length>1 ) {
        return err;
      }
             let regex=/([0-9\.]+)\/([0-9\.]+)/gi;
             let res=regex.exec(input);
     // console.log(res)
             result=res[1]/res[2];
             }else if(input.includes('.')){
                if(input.match(/\./g).length>2 ) {
        return err;
      }
    result=parseFloat(input);  
    }
    else{
      result=parseInt(input);
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    //unit is the end of string
    // it could be one,2,or 3 letters
    var result;
    //input=input.toLowerCase();
    const err="invalid unit";
    let regex=/^[0-9\.\/]*(.*)/g;
    let unit=regex.exec(input);
    if(unit==null || unit.length<=1){
      return err;
    }else {
      //make sure the unit is defined 
      result=units[unit[1].toLowerCase()];
      if(result==undefined){
        return err;
      }else{
      return unit[1];
      }
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    //console.log(initUnit)
    result=units[initUnit.toLowerCase()].to;
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    result=units[unit.toLowerCase()].name;
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
   
    var result;
   // console.log(units[initUnit.toLowerCase()])
    let factor=units[initUnit.toLowerCase()].rate;
    result=initNum*factor;
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result=`${initNum} ${this.spellOutUnit(initUnit.toLowerCase())} converts to ${this.convert(initNum,initUnit.toLowerCase()).toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
