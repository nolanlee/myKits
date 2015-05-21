/*

  arr = [
    {k1: ['1', '2', '3', '4', '5', '6', '7', '8', '9']},
    {k2: ['a', 'b', 'c', 'd']},
    {k3: ['@', '$', '%', '*']},
    {k4: ['一', '二', '三', '四']}
  ]

  -->

  result = [{
    k1: '1',
    k2: 'a',
    k3: '@'
  }, {
    k1: '1',
    k2: 'a',
    k3: '$'
  }, {
    k1: '1',
    k2: 'a',
    k3: '%'
  }, {
    k1: '1',
    k2: 'a',
    k3: '*'
  }...]

*/

function descartes (arr) {
	var results = [];

  var k1 = Object.keys(arr[0])[0], k2 = Object.keys(arr[1])[0];

  for(var i = 0, l1 = arr[0][k1].length; i < l1; i++) {
    for(var j = 0, l2 = arr[1][k2].length; j < l2; j++) {
      var obj = {};
      obj[k1] = arr[0][k1][i];
      obj[k2] = arr[1][k2][j];
      results.push(obj);
    }
  }

  return results;
}
var arr = [
  {k1: ['1', '2', '3', '4', '5', '6', '7', '8', '9']},
  {k2: ['a', 'b', 'c', 'd']}
];

console.log(descartes(arr));
