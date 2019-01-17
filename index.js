const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  // const newDriver = {...driver};
  // newDriver[key] = value;
  // return newDriver;

  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;
  return driver;
}
