'use strict'

let userName = prompt("Please Enter Your Name ?");
alert(`Welcome ${userName} to my site :) `);
let score = 0;

let coffee = prompt("Do you think I love coffee ?").toUpperCase();
while (coffee != 'Y' && coffee != 'N' && coffee != 'YES' && coffee != 'NO') {
    coffee = prompt("Do you think I love coffee ?").toUpperCase();
}
if (coffee == "Y" || coffee == "YES") {
    score++;
    alert(`Great, CORRECT Answer ${score} of 1`);


} else if (coffee == "N" || coffee == "NO") {

    alert(`WRONG Answer !! ${score} of 1`);

}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let football = prompt("Do you think I watch football ?").toUpperCase();

while (football != 'Y' && football != 'N' && football != 'YES' && football != 'NO') {
    football = prompt("Do you think I watch football ?").toUpperCase();
}
if (football == "N" || football == "NO") {
    score++;
    alert(`Great, CORRECT Answer ${score} of 2`);

} else if (football == "Y" || football == "YES") {
    alert(`WRONG Answer !! ${score} of 2`);


}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let movie = prompt("Do you think I like action movie more than romance ?").toUpperCase();
while (movie != 'Y' && movie != 'N' && movie != 'YES' && movie != 'NO') {
    movie = prompt("Do you think I like action movie more than romance ?").toUpperCase();
}
if (movie == "Y" || movie == "YES") {
    score++;
    alert(`Great, CORRECT Answer ${score} of 3`);

} else if (movie == "N" || movie == "NO") {
    alert(`WRONG Answer !! ${score} of 3`);


}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let degree = prompt("Do you think I have master degree ?").toUpperCase();
while (degree != 'Y' && degree != 'N' && degree != 'YES' && degree != 'NO') {
    degree = prompt("Do you think I have master degree ?").toUpperCase();
}
if (degree == "N" || degree == "NO") {
    score++;
    alert(`Great, CORRECT Answer ${score} of 4`);

} else if (degree == "Y" || degree == "YES") {
    alert(`WRONG Answer !! ${score} of 4`);


}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let weather = prompt("Do you think I prefer Summer more than Winter ?").toUpperCase();
while (weather != 'Y' && weather != 'N' && weather != 'YES' && weather != 'NO') {
    weather = prompt("Do you think I prefer Summer more than Winter ?").toUpperCase();
}
if (weather == "N" || weather == "NO") {
    score++;
    alert(`Great, CORRECT Answer ${score} of 5`);

} else if (weather == "Y" || weather == "YES") {
    alert(`WRONG Answer !! ${score} of 5`);


}

alert(`Nice to meet you ${userName} :) `);