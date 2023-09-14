/* 1 */
console.log('#1: https://w/ww.codewars.com/kata/54a2e93b22d236498400134b /kata/54a2e93b22d236498400134b');
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

  console.log({inpit: phrase, output: sum});
}

presses('LOL');
