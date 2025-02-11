const steps = ["one", "two","three"];

function listTemplate(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector('#myList').innerHTML = stepsHtml.join('');

let grades = ['A','B','A', 'C'];
let point;
let gpapoints = grades.map(function(grade){
    switch (grade){
        case 'A':
            point = 4;
            break;
        case 'B':
            point = 3;
            break;
        case 'C':
            point = 2;
            break;
        case 'D':
            point = 1;
            break;
        case 'F':
            point = 0;
            break;
        default:
            alert("not a valid grade");
        }
    return point
           

})
console.log(gpapoints);

let totalPoint = gpapoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}
console.log(totalPoint);

let gpaAverages = totalPoint/gpapoints
console.log(gpaAverages);

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

let shortFruit = fruits.filter((item)=> item.length < 6);
console.log(shortFruit);