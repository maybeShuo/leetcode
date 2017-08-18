function selectionSort(myArray) {
    var len = myArray.length;
    var min, i, j;

    for (i = 0; i < len; i++) {
        
        min = i;

        for (j = i + 1; j < len; j++) {
            if (myArray[j] < myArray[min]) {
                min = j;
            }           
        }

        if (i != min) {
            swap(myArray, i, min);
        }        
    }

    return myArray;
}

function swap(myArray, p1, p2) {
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}