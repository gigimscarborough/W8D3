Array.prototype.myUniq = function(){
    const uniqArr = [];
    this.forEach((el)=>{
        if (!uniqArr.includes(el)){
            uniqArr.push(el);
        }
    })
    return uniqArr;

}

Array.prototype.twoSum = function(){
    const pos = [];
   for (i = 0; i < this.length; i++){
       for (j = 0; j < this.length; j++){
            if((this[i] + this[j] === 0) && j > i){
                pos.push([i, j]);
            }
       }
   }
   return pos;
}

Array.prototype.transpose = function(){
    const tArr = [];
    for (row = 0; row < this.length; row++) {
        const subArr = [];
        for (col = 0; col < this.length; col++) {
            subArr.push(this[col][row]);
        }
        tArr.push(subArr);
    }
    return tArr;
}



Array.prototype.myEach = function(callback){
    this.forEach((el) => {
        callback(el);
        }
}

[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

arr.each do |el1|
    arr.each do |el2|
    sub_arr << el2 if el2

    tarr << sub_arr
