const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  const newDriver = {...driver, [key] = value};
  return newDriver;
}
