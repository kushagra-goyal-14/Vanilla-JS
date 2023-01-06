let obj = {
    a: 2,
    b:5,
    c:{
        h:70,
        name:{
            kush:"goyal",
        }
    },
    color:"yellow"
}


let newobj = {
    a:2,
    b:5,
    "c.h" : 70,
    "c.name.kush": "goyal",
    color : "yellow"
}



function Objectdnest(obj){
    let newobj = {};

    for(let i in obj){
        if(typeof(obj[i]) === "object"){

            let temp = Objectdnest(obj[i]);

            for(let j in temp){
                newobj[i+"."+j]=temp[j];
            }

        }
        else{
            newobj[`${i}`]= obj[i];
        }
    }

    return newobj;
}

console.log(Objectdnest(obj));

console.log(JSON.parse(JSON.stringify(Objectdnest(obj))));