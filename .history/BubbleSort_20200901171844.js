function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; i < array.length - i - 1; j++) {
            if (array[i] > array[j + 1]) {
                [array[i], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
}
let array = [4, 8, 5, 6, 54, 8, 2, 6, 2, 1, 4];
BubbleSort(array);
console.log(array);
