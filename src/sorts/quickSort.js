function quickSort(myArray) {
    
    if (myArray.length < 2) {
        return myArray;
    }

    var pivotIndex = Math.floor(myArray.length / 2);

    var pivot = myArray.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];

    for(var i = 0; i < myArray.length; i++) {
        if (myArray[i] < pivot) {
            left.push(myArray[i]);
        } else {
            right.push(myArray[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));
}