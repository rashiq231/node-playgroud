const square = function(x){
    return x*x;
}


const cube = (x)=> {
    return square(x)*x;
}

const quad =(x)=> cube(x)*x;

console.log(square(2));
console.log(cube(2));
console.log(quad(2));


const event ={
    name : 'Birthday party',
    guest:['Rashiq', 'Taushiq','Shaik'],
    printguestList : function(){
        console.log('Guest List for '+this.name);
        this.guest.forEach((guest)=>{
            console.log("printingguest list "+guest+' '+this.name);
        })
    },
    // usingthis: ()=>{
    //     console.log('Guest lis using this '+this.name);
    //     this.guest.forEach((guest)=>{
    //         console.log("printingguest list "+guest +' '+this.name);
    //     })
    // },

    directfunc(){
        console.log('Guest list using direct function '+this.name);
        this.guest.forEach(function(guest){
            console.log("printingguest list "+guest +' '+this.name);
        })
    }
}

event.printguestList();
//event.usingthis();
event.directfunc();