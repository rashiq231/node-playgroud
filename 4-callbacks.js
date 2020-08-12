setTimeout(()=>{
    console.log("Two seconds are up...!!")
},2000) 

// using returns
const geocode =(address,callback)=>{
    setTimeout(()=>{
        const data={
            lat :1,
            long:0
    
            }
            return data;
    },2000)
}

// using callback

const geocode2 =(address, callback)=>{
    setTimeout(()=>{
        const data2 ={
            lat:2,
            lon:2
        }
        callback(data2);
    },2000)
}

const data = geocode('kadapa');
console.log('without callback '+data);

geocode2('kadapa',(dat)=>{
    console.log(dat);
});


//challenge

const add=(a, b, callback)=>{
    setTimeout(()=>{
        console.log(a,b)
        callback(a+b);
    },2000)
};

add(2,5,(sum)=>{
    console.log(sum);
});

const doWorkCallback = ((callback)=>{
    setTimeout(()=>{
        callback('There is an error', undefined)
        callback(undefined,[1,4,7])
    },5000);
});

doWorkCallback((error,result)=>{
    if(error){
        return console.log(error)
    }
    console.log(result);
})