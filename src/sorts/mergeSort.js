function merge(left, right) {
    var result = [],
        left_index = 0,
        right_index = 0;

    while(left_index < left.length && right_index < right.length) {
        if (left[left_index] < right[right_index]) {
            result.push(left[left_index]);
            left_index++;
        } else {
            result.push(right[right_index]);
            right_index++;
        }
    }

    return result.concat(left.slice(left_index), right.slice(right_index));
}

function mergeSort(myArray) {
    if (myArray.length < 2) {
        return myArray;
    }

    var middle = Math.floor(myArray.length / 2),
        left = myArray.slice(0, middle),
        right = myArray.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}