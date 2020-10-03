exports.min = function min (array) {
    if (array && array.length) {
        let res = array[0];
        for (let i = 1; i < array.length; i++) {
            if(res > array[i]) {
                res = array[i];
            }
        }
        return res;
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array && array.length) {
        let res = array[0];
        for (let i = 1; i < array.length; i++) {
            if(res < array[i]) {
                res = array[i];
            }
        }
        return res;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (array && array.length) {
        let res = 0;
        for (let i = 0; i < array.length; i++) {
            res = res + array[i];
        }
        return res / array.length;
    } else {
        return 0;
    }
}
