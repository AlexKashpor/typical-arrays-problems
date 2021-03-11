
exports.min = function min(array) {
  if (array !=[] && array !=Infinity) {
    return Math.min(...array);

  } else {
    return 0;
  }


}

exports.max = function max(array) {
  if (array !=[] && array !=Infinity) {
    return Math.max(...array);
  } else {
    return 0;
  }

}

exports.avg = function avg(array) {
  if (array !=[] && array !=Infinity) {
    return array.reduce(function (a, b) {
  return a + b;
     }) / array.length;
  } else {
    return 0;
  }

}
