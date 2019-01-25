stringArray = ["[5, 9]", "[1, 2, 6 ,7]"];

const scaleBalancing = (strArr) => {
  debugger;
  const startingWeights = [];
  const availableWeights = [];
  let diff = 0;
  let str = [];

  // Split string Array items into arrays with strings
  let startingStr = strArr[0].split('');
  let availableStr = strArr[1].split('');

  // Iterate over every string, and check if it is a number
  // if so, push into respective arrays.
  startingStr.forEach(str => {
    if (parseInt(str) > 0) {
      startingWeights.push(parseInt(str));
    }
  });

  availableStr.forEach(str => {
    if (parseInt(str) > 0) {
      availableWeights.push(parseInt(str));
    }
  });

  // Find the difference between the 2 starting weights
  if (startingWeights[0] > startingWeights[1]) {
    diff = startingWeights[0] - startingWeights[1];
  } else {
    diff = startingWeights[1] - startingWeights[0];
  }

  // If the difference is available among the available weights, return that number
  // otherwise, iterate over the available numbers try available combos
  // If a match is found, push the matches into the array stored in "str" variable
  if (availableWeights.includes(diff)) {
    return `${diff}`;
  } else {
    for (let i = 0; i < availableWeights.length; i++) {
      let right = startingWeights[1] + availableWeights[i];
      let left = 0;
      for (let x = 0; x < availableWeights.length; x++) {
        if (x !== i) {
          left = startingWeights[0] + availableWeights[x];
        }
        if (left === right) {
          str.push(availableWeights[i]);
          str.push(availableWeights[x]);
          return;
        }
      }
    }
  }

  // If a match was found, str will have 2 items in it
  // Join the array into a string and return it
  // otherwise, at this point, we know there are no viable options
  // so we return "not possible"
  if (str.length === 2) {
    return str.join(",");
  } else {
    return "not possible";
  }
};

scaleBalancing(stringArray);