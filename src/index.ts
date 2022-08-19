let id = 5
let isValid:boolean = true;

let count:number[] = [1,1,23,4]

//tuple array
let employee:[number,string][];

employee = [
    [1,"rohan"],
    [2,"sid"]
]

//union (a variable can have more than one type)
let pid:string | number = 11;

pid = '11qwe'


//interface
interface userInterface{
    id:number,
    name:string
}

const user1 : userInterface = {
    id:1,
    name:"rohan"
}

console.log(user1)