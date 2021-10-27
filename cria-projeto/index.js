const _ = require('lodash');

const array1 = [ 1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [ 1, 3, 5, 11, 4, 7, 9, 0];

const diffArray = _.difference(array1, array2);
console.log(diffArray);

//execute com node index.js na pasta raiz do projeto