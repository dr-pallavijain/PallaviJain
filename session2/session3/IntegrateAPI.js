const api_url="https://jsonplaceholder.typicode.com/users"

function gerApiData(url){
fetch(url)
.then(response=>response.json())
.then(response=>{
    console.log(response)
    displayDatatable(response)
    }
)


    var result=fetch(url)
console.log(result)
}

getApiData(api_url)
function displayDataTable(apidata)
console.log(apidata)
for(let i of apidata)
// dynamic row
var newRow=document.createElement('tr')
//dynamic column
var newtd1=document.createElement(`td`)
var newtd2=document.createElement(`td`)
//Assigning data
newtd1.innerHTML = `${i.name}`
newtd2.innerHTML = `${i.email}`
//Appending column to row
newRow.appendChild(newtd1)
newRow.appendChild(newtd2) 
//Appending