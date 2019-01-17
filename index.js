const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = {...driver, [key] = value};
  return newDriver;
}
