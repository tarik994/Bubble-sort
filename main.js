
var niz = [4,3,6,2,7];

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }

        }   
    } return arr;
}
console.log(bubbleSort(niz))
niz.sort((a, b) => a - b)
console.log(niz);

