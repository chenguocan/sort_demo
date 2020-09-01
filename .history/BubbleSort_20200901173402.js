function sorts(arr) {
    var len = arr.length - 1;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[i]];
            }
        }
    }
}
let arr = [4, 6, 546, 123, 45, 12, 346, 13, 2];
sorts(arr);
console.log(arr);