let obj = {
    name:"kush",
    id:1
}

function printf(funcid,city){
    console.log(this.name + " & " + this.id + funcid + city);
}

Function.prototype.myBind = function(obj, ...args){

    console.log(this);

    return (...newargs)=>{
        console.log(this);
        this.apply(obj,[...args,...newargs]);
    }

}


let newfunc = printf.myBind(obj,"a-random-id");

newfunc("California");



// Without using Apply

// let obj = {
//     name:"kush",
//     id:1
// }

// function printf(funcid,city){
//     console.log(this.name + " & " + this.id + funcid + city);
// }

// Function.prototype.myBind = function(obj, ...args){

//     console.log(this)

//     obj._obj = this;

//     return (...newargs)=>{
//         // this.apply(obj,[...args,...newargs]);

//         return obj._obj(...args,...newargs)
//     }

// }


// let newfunc = printf.myBind(obj,"a-random-id");

// newfunc("California");
