// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let lcdrivers = drivers.map(driver => driver.toLowerCase());
  return lcdrivers;
}

function nameToAttributes(drivers){
  drivers.map(functon(createnameobject){
    let newname = name.split(drivers);
    let firstName = newname[0];
    let lastName = newname[1];
    return {firstname:firstName, lastname:lastName};
  })
}
