async function promiseall(promises){

    const result = [];

    for(let i of promises){
        try {
            const ans = await i;
            result.push(ans);
        } catch (error) {
            return new Promise ((resolve,reject)=>{
                reject(error);
            })
        }
    }

    return new Promise((resolve,reject)=>{
        resolve(result);
    })
}



