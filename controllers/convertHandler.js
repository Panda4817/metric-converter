/*
*
*
*       Complete the handler logic below
*       
*       
*/



function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    const arr = input.match(/([0-9]+(\.)?([0-9]+)?)(\/)?([0-9]+(\.)?([0-9]+)?)?/g)
    if (!arr) {
      return 1;
    } else if (arr.length > 1) {
      return "invalid number"
    } else {
      const newArr = arr[0].split("/")
      if (newArr.length == 2) {
        result = parseFloat(newArr[0]) / parseFloat(newArr[1])
      } else {
        result = parseFloat(arr[0])
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    const arr = input.match(/[a-z]+/gi)
    if (!arr) {
      return "no unit"
    } else if (arr.length > 1) {
      return "invalid unit"
    } else {
      const units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
      var noMatch = false;
      for (var i=0; i<6; i++) {
        if (arr[0].toLowerCase() == units[i]) {
          result = units[i];
          noMatch = false;
          break;
        } else {
          noMatch = true;
        }
      }
    }
    if (noMatch == true) {
      return "invalid unit"
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    const pairs = {'gal': 'l', 'l': 'gal', 'lbs': 'kg', 'kg': 'lbs', 'mi': 'km', 'km': 'mi'}
    for (const property in pairs) {
      if (initUnit == property) {
        result = pairs[property];
      }
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    const long = {'gal': 'gallons', 'l': 'liters', 'lbs': 'pounds', 'kg': 'kilograms', 'mi': 'miles', 'km': 'kilometers'}
    for (const property in long) {
      if (unit == property) {
        result = long[property];
      }
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case 'gal':
        result = galToL * initNum;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = lbsToKg * initNum;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = miToKm * initNum;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = String(parseFloat(initNum.toFixed(5))) + " " + this.spellOutUnit(initUnit) + " converts to " + String(parseFloat(returnNum.toFixed(5))) + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
