function sorts(arr) {
    var len = arr.length - 1;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
sorts(arr);
console.log(arr);