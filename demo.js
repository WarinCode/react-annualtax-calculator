// จงเขียนโปรแกรมคำนวณภาษี

const promptsync = require('prompt-sync')();
const use = promptsync("จำนวนเงินที่ได้รับ >>>  ");
const money = use * 12;
var salary = [150000, 300000, 1000000];

if (money < salary[0]) {
    console.log(money / 2);
} else if (money < salary[1]) {
    console.log(money / 5);
} else if (money < salary[2]) {
    console.log(money / 7);
} else if (money > salary[2]) {
    console.log(money / 10);
}
