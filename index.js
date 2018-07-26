// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let lcdrivers = drivers.map(driver => driver.toLowerCase());
  return lcdrivers;
}

function nameToAttributes(drivers){
    let splitdrivers = drivers.map(createNameObject)
  return splitdrivers;
}

function createnameobject(driver){
let newname = driver.split(" ");
let firstName = newname[0];
let lastName = newname[1];
return {firstname:firstName, lastname:lastName};
}
