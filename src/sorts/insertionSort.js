function insertionSort(myArray) {
    var len = myArray.length;
    var value, i, j;

    for(i = 0; i < len; i++) {
        value = myArray[i];

        for(j = i - 1; j > -1 && myArray[j] > value; j++) {
            myArray[j + 1] = myArray[j];
        }

        myArray[j + 1] = value;
    }

    return myArray;
}