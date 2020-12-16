


Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function (callback) {
    const mapped = [];

    this.myEach((el) => {
        mapped.push(callback(el));
    })

    // for (let i = 0; i < this.length; i++) {
    //     mapped.push(callback(this[i]));
    // }

    return mapped;

}

Array.prototype.myReduce = function (callback, initialValue) {

    // const reduced = 0;

    if (initialValue) {
        let acc = initialValue;
    } else {
        let acc = this[0];
        // reduced += 1;        
    }

    for (let reduced = 0; reduced < array.length; i++) {
        
    }

    // this.myEach(callback) {
    //     acc = callback(acc, this[reduced]);
    //     i += 1;
    // }

    // return acc


}