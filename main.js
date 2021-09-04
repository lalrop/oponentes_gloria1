
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let array_puntos = [0,0,0,0,0,0,0,0,0,0,0]
let sum = 0
let array_potFren = [0,0]
let sum_potFren = 0

// while (sum<12) {
//     array_puntos.push(getRandomInt(10))
//     sum = array_puntos.reduce(function (acc, val) {
//         return acc + val       
//     })
// }

array_puntos = array_puntos.map(x => x = getRandomInt(10))

sum = array_puntos.reduce(function (acc, val) {
    return acc + val       
})

do {
    array_puntos = array_puntos.map(x => x = getRandomInt(10))
    sum = array_puntos.reduce(function (acc, val) {
        return acc + val       
    })        
} while (sum > 12 || sum<12);

// distribuyendo puntos de potencialidad y frenesis


do {
    array_potFren = array_potFren.map(x => x = getRandomInt(50))
    sum_potFren = array_potFren.reduce(function (acc, val) {
        return acc + val       
    })        
} while (sum_potFren > 45 || sum_potFren<45);



$(function () {
    $("button").on("click",function () {
        $("#1").append(array_puntos[0]);
        $("#2").append(array_puntos[1]);
        $("#3").append(array_puntos[2]);
        $("#4").append(array_puntos[3]);
        $("#5").append(array_puntos[4]);
        $("#6").append(array_puntos[5]);
        $("#7").append(array_puntos[6]);
        $("#8").append(array_puntos[7]);
        $("#9").append(array_puntos[8]);
        $("#10").append(array_puntos[9]);
        $("#11").append(array_puntos[10]);
        $("#12").append(5);
        $("#13").append(array_potFren[0]);
        $("#14").append(array_potFren[1]);
        $("#15").append(array_potFren[0]*12)
    })
})


console.log(array_puntos);
console.log(array_potFren);
