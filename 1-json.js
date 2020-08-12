const fs = require('fs');
const book = {
    title: 'My book Title',
    author: 'Rashiq'
}

var bookJson = JSON.stringify(book);
// console.log(bookJson);

// const parsData = JSON.parse(bookJson);
// console.log(parsData.author , parsData.title);


//fs.writeFileSync('1-json.json',bookJson);

// var databuffer = fs.readFileSync('1-json.json');
// var dataJson = databuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title, data.author)

var dataString = fs.readFileSync('test.json', 'utf-8');
const dataJson = JSON.parse(dataString);

dataJson.name = 'rashiq';
dataJson.age = 28;
dataJson.planet = 'mars';

var backtString = JSON.stringify(dataJson);
fs.writeFileSync('./test.json', backtString);