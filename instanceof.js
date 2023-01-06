class Employee{};

let kush = new Employee();

console.log(kush instanceof Employee);


function instanceOf(obj = null,Constructor=null){
    if(typeof (obj) !== "object"){
        return false;
    }
    if(typeof(Constructor) !== "function"){
        return false;
    }

    if(Object.getPrototypeOf(obj) === Constructor.prototype)
    return true;


    if(Object.getPrototypeOf(obj) == null)
    return false;

    return instanceOf(Object.getPrototypeOf(obj),Constructor);
}

console.log(instanceOf(kush,Function));