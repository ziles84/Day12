function myRecursion(arr, n) {

var sum = 0;

for (var i = 0; i < n; i++) {
  sum+= arr[i];
}

return sum;

}

myRecursion([1, 2, 3, 4], 2));



console.log(myRecursion([1, 2, 3, 4], 2));
console.log(myRecursion([1, 2, 3, 4], 3));
console.log(myRecursion([1, 2, 3, 4, 5, 6], 5));

module.exports = myRecursion;
