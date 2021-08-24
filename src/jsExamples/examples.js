const sum = (x, y) => x + y;

const getStageOfChildhood = age => {
  if (age < 1) {
    return 'baby';
  } else if (age < 3) {
    return 'toddler';
  } else if (age < 11) {
    return 'child';
  } else if (age < 13) {
    return 'preteen';
  } else if (age < 18) {
    return 'teenager';
  } else {
    return 'adult';
  }
};

module.exports = {
  sum,
  safeSum,
  getStageOfChildhood,
};
