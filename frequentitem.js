var arr = [1, 5, 9, 6, 3, 7, 5, 3, 4, 9, 2, 5, 8, 3, 4, 5];
var arr1 = new Array();
var frequentitem;
function frequentitem() {
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count = count + 1;
      }
    }
    arr1.push(count);
  }
  let max = arr1[0];
  for (x in arr1) {
    if (x > max) {
      max = x;
    }
  }
  frequentitem = arr[max];
  return frequentitem;
}

console.log(frequentitem());
