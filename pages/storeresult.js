// storeResult.js

let storedresult = null;

const storeresult = (result) => {
  storedresult = result;
};

const getResult = () => {
  return storedresult;
};

export { getResult, storeresult };

