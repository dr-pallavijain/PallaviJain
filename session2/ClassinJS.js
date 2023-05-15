let btn "document.querySelector"('button');
//console.log(btn)
btn.onclick=function(e){
    e.preventDefault()
    console.log
}


//ES6Class concept

class Employee {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
        display(){
            console.log(this.name, this.age, this.salary)
        }
    }
}
let obj1 = new Employee("Pallavi",24,10000
obj1.dispaly()

//ES5
function Employee(name,age,salary)
{
this.name=name
this.age=age
this.salary=salary
Employee.display=function(){
    console.log(this.name,this.age,this.salary)
}
}

class student extends Employee{
constructo(name,age,salary,rollno){
    super(name,age,salary)
    this.rollno=rollno
    }
    Deatils() {
        console.log(`Rollno: ${this.rollno} \nName:${this.name}`)
        console.log(`Rollno: ${this.rollno}`)
        super.display()
    }
    student stu1 = new student("Manish",19,10,121)
    stu1.Details()