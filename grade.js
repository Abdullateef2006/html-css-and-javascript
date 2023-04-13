let grade = Number(prompt("Enter your score from 1 to 100 "))
let Remarks = "Your result is "
switch(true){
    case grade >= 75 && grade <= 100:
        Remarks += " Excellent"
        break
    case grade <= 75 && grade >= 60:
        Remarks += " Very Good"
        break
    case grade <= 60 && grade >= 55:
        Remarks += " Good"
        break
    case grade <= 55 && grade >= 50:
        Remarks += " Fair"
        break
    case grade <= 50 && grade >= 40:
        Remarks += " Poor"
        break
    case grade <= 40 && grade >= 0:
        Remarks += " Fail"
        break
    default:
        Remarks += " There is no such grade"
    
}
console.log(Remarks)
