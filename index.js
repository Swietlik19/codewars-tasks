/* #1 https://www.codewars.com/kata/54a2e93b22d236498400134b */

function presses(phrase) {
  const alphabet = [
    ['1'],
    ['A','B','C','2'],
    ['D','E','F','3'],
    ['G','H','I','4'],
    ['J','K','L','5'],
    ['M','N','O','6'],
    ['P','Q','R','S','7'],
    ['T','U','V','8'],
    ['W','X','Y','Z','9'],
    ['*'],
    [' ','0'],
    ['#']
  ];
  let sum = 0;
  phrase = phrase.toUpperCase();

  for (const symbol of phrase) sum += alphabet[alphabet.findIndex(arr => arr.includes(symbol))].indexOf(symbol) + 1;

  return {inpit: phrase, output: sum};
}

const task1 = presses('LOL');


// ==========================
/* #2 */

function loneliest(str) {
  str = str.trim();
  let chars = str.split(/\s*/);
  let spaces = str.split(/\S/).map(x => x.length);
  let spacesPerChar = chars.map((c, i) => spaces[i] + spaces[i + 1]);
  let spaceSize = spacesPerChar.reduce((t, a) => t > a ? t : a);
  return chars.filter((c, i) => spacesPerChar[i] === spaceSize);
}

const task2 = loneliest('abc');


// ==========================
/* #3 https://www.codewars.com/kata/588468f3b3d02cf67b0005cd */

function additionWithoutCarrying(a,b) {
  let max = Math.max(a,b);
  let min = Math.min(a,b);
  let output = [];

  if (max === 0) return 0;

  while (max > 0) {
    let sum = max % 10 + min % 10;
    output.unshift(sum > 9 ? sum % 10 : sum);
    max = Math.floor(max / 10);
    min = Math.floor(min / 10);
  }

  return +output.join('');
}

additionWithoutCarrying(456, 1734);
