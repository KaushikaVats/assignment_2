   //1 
    let grade = 50
if(grade>90){
    console.log("A")
}else if(grade >70 && grade<90){
    console.log("B")
}else if(grade >50 && grade<70){
    console.log("C")
}else{
    console.log("F")
}


//2
function getRandomNumber(min, max) {
    return (Math.random() * (max - min + 1) + min);
  }

  console.log(getRandomNumber(10,25))
//3.
 let check = num => num > 0 ? "POSITIVE" : num<0 ? "NEGATIVE" : "ZERO"
console.log(check(-9))

//4.
//the comma operator (,) allows us to evaluate multiple expression returning the value of the last expression.. It's often used in situations where we need to perform multiple operations in a single statement.
//Multiple Assignments: We can use the comma operator to assign values to multiple variables in a single statement.
let a = 1, b = 2, c = 3;
console.log(result) 
let x, y;
x = (y = 5, y * 2)
console.log(x)
//5.
function login(){
    let username = "admin"
    let password = 12345
    if(username === "admin" && password === 1235) console.log("LOGIN SUCCESSFUL")
    else console.log("invalid credentials")
     

}

login()
 //6.
let payment_methods = "paypal";
switch(payment_methods){
    case "credit":
    console.log("PROCESSING FEE IS 2%")
    break;
    case "debit":
    console.log("PROCESSING FEE IS 1.5%")
    break;
    case "paypal":
    console.log("PROCESSING FEE IS 3%")
    break;
}
//7.
const weather_app = temp => temp>30 ? "HOT" : "MODERATE"

console.log(weather_app(67))

//8.
let result = 0;
let i = 0;
let n = 5;

do {
  i = i + 1;
  result = result + i;
} while (i < n);

console.log(result);
