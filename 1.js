function outputNth(array, n) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.get(array[i])) {
      if (map.get(array[i]) < n) {
        map.set(array[i], map.get(array[i]) + 1);
      }
    } else {
      map.set(array[i], 1);
    }
  }
  let arr = []
  map.forEach((item, index)=> {
    for(let i=0;i<item;i++) {
      arr.push(index);
    }
  })
  return arr
}
console.log(outputNth([20, 37, 20, 20, 21], 2))