const romanMap = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
};

// the function to convert romanMap

export const intToRoman = function (num) {
  return romanMap[num.toString()];
};

// use function
export const intToRoman2 = function (num) {
  return romanMap[num.toString()];
};
