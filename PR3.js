function generateArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

function formatArray(arr) {

  const items = arr.map((value, index) => `[ ${index}, ${value}]`);
  return `{${items.join(",")}}`;
}

function bblSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < (arr.length - i - 1); j++) {


            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
return arr
}

function InsertionSort(arr) {

    let n = arr.length;
    let key;
    let i, j;
    
    for (i = 0; i < n ; ++i) {
        key = arr[i];
        j = i - 1;
        
            for (j; j >= 0, arr[j] > key; --j){
            arr[j+1]=arr[j];
            }
        arr[j+1]=key;
    }
return arr
}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
    
        let min_idx = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
            
                min_idx = j;
            }
        }
        
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
return arr
}

const arr = generateArray(10, -10, 10);
console.log("Початковий масив");
console.log(formatArray(arr));

console.log("Bubble sort");
console.log(formatArray(bblSort([...arr])));

console.log("Insertion Sort");
console.log(formatArray(InsertionSort([...arr])));

console.log("Selection Sort");
console.log(formatArray(selectionSort([...arr])));