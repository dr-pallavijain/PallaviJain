// It is used for ES6
//Promise is an object
//well suited for Asynchronous prg.
Pronise is a way of communication with API



var sayHi = ()=>{
 return new Promise((resolve, reject)=>{
    let response = true
    if (response)
    {
resolve("yes! completed my promise")
    }
    else
 {
    reject("I failed my promise")
 }

})
}
console.log(sayHi())
//Hndle or consume the Promise when it received
sayHi().then(response=>console.log(response)).catch(err=>console.log(err)); 
