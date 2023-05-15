for(let i=0;i<=10;i++)
{
    console.log(i)
}
console.log("Outside the block")
console.log(i)
// function scope
function sayhello()
{
    var x=10;       // Function scope using var
    console.log(x)
    if (true)
    { 
        let x = 15   // Block scope using let only
        console.log(x)
    }
}  
        console.log(x)
    sayhello()

 // const keyword : creating a 
    const age = [30,40,50]

    age.push(60)
    console.log(age)

var fname="Pallavi"
var lname="jain"
console.log("Hello" + "  " + fname + "  " + lname)
console.log(`Hello \$`)




