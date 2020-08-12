const doPromises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve("Promise works...!!")
        //reject("We have a failure..")
        resolve("check two")
    },2000);
});

doPromises.then((result=>{
    console.log('Sucess ..! '+ result)
})).catch((error=>{
    console.log("There is a failure.."+error)
}))


const add =(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a + b);
        },2000)
    })
}

add(4,7).then((sum)=>{
    console.log(sum)

    add(sum,8).then((sum2)=>{
        console.log(sum2)
    }).catch((error)=>{
        console.log(error)
    })
}).catch((error)=>{
    console.log(error)
})


add(1,2).then((sum)=>{
    console.log(sum);
    return add(sum,7);
}).then((sum2)=>{
    console.log(sum2)
}).catch((error)=>{
    console.log(error)
})