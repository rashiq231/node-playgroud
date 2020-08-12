const http = require('http');

const url ='http://api.weatherstack.com/current?access_key=52629b106a822d1efda86ae758a58792&query=14.14,72.41&units=m';

const request =http.request(url,(response)=>{
    //console.log(response.body);
    let data=''
    response.on('data',(chunk)=>{
        //console.log(chunk);
        data =data+chunk.toString();

    });

    response.on('end',()=>
    {
        console.log(data);
    });

})

request.end();