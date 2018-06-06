// Create a gradeCalculator
//Two arguments for the function
// 1 student score 2. total possible score
// Generate percent output with the following string
// You got a A/B/C with following percentage
//For example - You got a C (75%)

//Grade Group are - A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalculator = function(studentScore, total=100){

    const percent = (studentScore/total)*100
    if (percent>=90){
        return(`You got A ${percent}% `)
    } else if (percent>=80 && percent<90){
        return (`You got B ${percent}%`)
    }else if(percent>=70 && percent <80){
        return (`You got C ${percent}%`)
    }else if (percent>=60 && percent<70){
        return (`You got D ${percent}%`)
    }else if(percent>=0 && percent<60){
        return (`Youu got F ${percent}%`)
    }else {
        return ("Invalid input")
    }
    
}

let student1=gradeCalculator(90,100)
let student2=gradeCalculator(89)
let student3=gradeCalculator(79)
let student4=gradeCalculator(69)
let student5=gradeCalculator(50)
console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)
