let obj = {
    val:0,

    sum(a){
        this.val = this.val+a;
        return this;
    },

    sub(a){
        this.val = this.val-a;
        return this;
    },
    mult(a){
        this.val = this.val*a;
        return this;
    },
    divide(a){
        this.val = this.val/a;
        return this;
    }
}

let ans = obj.sum(2).sub(1).mult(10).divide(5).val;

console.log(ans);