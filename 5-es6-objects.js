// Object property shorthand

const name = 'Rashiq';
const userage = 27;

const user ={
    name : name,
    age: userage,
    location:'India'
}

console.log(user)

// Names need to match
const userShorthand={
    name,
    userage,
    location:'India'
}

console.log(userShorthand);


//Object desctructring 

const product ={
    label:'Note book',
    price:3,
    stock:203,
    saleprice:undefined,
    rating:4.2
}

const{label:productLabel,saleprice,stock, rating=2.5}=product;
//console.log(label);
console.log(stock);
console.log(rating);
console.log(saleprice);
console.log(productLabel);


var transcation =(type,{label,stock})=>{
    console.log(type,label,stock);
}

transcation('order',product);