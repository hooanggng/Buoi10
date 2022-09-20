const minus = (a,b) =>{
    return Math.abs(a-b);
}
const minRange = (arr,k) =>{
    let resultArray = [];
    let minmin = Math.abs(k - arr[0]);
    for (let index = 1; index < arr.length; index++) {
        if (minus(k,arr[index]) < minmin){
            minmin = minus(k,arr[index]);
        }
    }
    if (arr.indexOf(k-minmin) !== -1){
        resultArray.push(arr[arr.indexOf(k-minmin)])
    }
    if (arr.indexOf(k+minmin) !== -1){
        resultArray.push(arr[arr.indexOf(k+minmin)])
    }
    console.log(resultArray);
}
minRange([1,2,3,4,6,7],8)
