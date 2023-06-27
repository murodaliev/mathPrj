let person_name = prompt("iltimos o'z ismingizni kiriting");
let person_age = +prompt("iltimos o'z yoshingizni kiriting");
while(!isNaN(person_name)) {
    alert("ismingizni xato kiritdingiz qaytadan urinib ko'ring");
    person_name = prompt("iltimos o'z ismingizni kiriting");
}
console.log("Kiritilgan ism: " + person_name);
while(isNaN(person_age)){
    alert("yoshingizni xato kiritdingiz qaytadan urinib ko'ring");
    person_age = +prompt("iltimos o'z yoshingizni kiriting");
}
console.log("Kiritilgan yosh: " + person_age);
let a = 95;
let b = 5;
let ex1 = +prompt("95 + 5 = ?  <-- javobingiz");
let ex2 = +prompt("95 - 5 = ?  <-- javobingiz");
let ex3 = +prompt("95 * 5 = ?  <-- javobingiz");
let ex4 = +prompt("95 % 5 = ?  <-- javobingiz");
let ex5 = +prompt("95 / 5 = ?  <-- javobingiz");
while(isNaN(ex1)){
    alert("95 + 5 = ? ushbu misolga son bilan javob berilmagan");
    ex1 = +prompt("iltimos son kiriting");
}
while(isNaN(ex2)){
    alert("95 - 5 = ? ushbu misolga son bilan javob berilmagan");
    ex2 = +prompt("iltimos son kiriting");
}
while(isNaN(ex3)){
    alert("95 * 5 = ? ushbu misolga son bilan javob berilmagan");
    ex3 = +prompt("iltimos son kiriting");
}
while(isNaN(ex4)){
    alert("95 % 5 = ? ushbu misolga son bilan javob berilmagan");
    ex4 = +prompt("iltimos son kiriting");
}
while(isNaN(ex5)){
    alert("95 / 5 = ? ushbu misolga son bilan javob berilmagan");
    ex5 = +prompt("iltimos son kiriting");
}
if(ex1 == (a + b)) {
    console.log("sizning javobingiz --> 95 + 5 = " + ex1 + " to'g'ri ");
}else{
    console.log("sizning javobingiz --> 95 + 5 = " + ex1 + " noto'g'ri. --> to'g'ri javob: " + (a + b));
}
if(ex2 == (a - b)) {
    console.log("sizning javobingiz --> 95 - 5 = " + ex2 + " to'g'ri ");
}else{
    console.log("sizning javobingiz --> 95 - 5 = " + ex2 + " noto'g'ri. --> to'g'ri javob: " + (a - b));
}
if(ex3 == (a * b)) {
    console.log("sizning javobingiz --> 95 * 5 = " + ex3 + " to'g'ri ");
}else{
    console.log("sizning javobingiz --> 95 * 5 = " + ex3 + " noto'g'ri. --> to'g'ri javob: " + (a * b));
}
if(ex4 == (a % b)) {
    console.log("sizning javobingiz --> 95 % 5 = " + ex4 + " to'g'ri ");
}else{
    console.log("sizning javobingiz --> 95 % 5 = " + ex4 + " noto'g'ri. --> to'g'ri javob: " + (a % b));
}
if(ex5 == (a / b)) {
    console.log("sizning javobingiz --> 95 / 5 = " + ex5 + " to'g'ri ");
}else{
    console.log("sizning javobingiz --> 95 / 5 = " + ex5 + " noto'g'ri. --> to'g'ri javob: " + (a / b))
}

