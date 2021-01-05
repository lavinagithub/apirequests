
//settimeout

const displayName = () => {
  console.log("Lavina");
};
setTimeout(displayName, 1000);

// Promises

var isMomHappy = true;

const willIGetNewPhone = (resolve, reject) => {
  if (isMomHappy) {
    resolve("Mum's getting a Samsung phone"); // resolved
  } else {
    reject("Mum's not getting a new phone"); // rejected
  }
};

const newPr = new Promise(willIGetNewPhone);
console.log(newPr);

newPr // fullfilled and handle the status
  .then(function () {
    console.log("Request succeeded : Get money from bank");
  })
  .then(function () {
    console.log("Request succeeded : Buy phone for Christmas");
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
