function BubbleSort(araay) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; i < array.length - i - 1; j++) {
            if (array[i] > array[j + 1]) {
                [array[i], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
}
