let submit = document.querySelector('#submit');
let reply = document.querySelector('#reply');
submit.onclick = function(event) {

    let use = document.getElementById('use')

    const money = use.value * 12;
    const salary = [150000, 300000, 1000000];
    const incorrect_information = "";
    const check = incorrect_information.toString();
    var result;

    if (money <= salary[0]) {
        result = money / 2
        alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
    } else if (money <= salary[1]) {
        result = money / 5
        alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
    } else if (money <= salary[2]) {
        result = money / 7
        alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
    } else if (money >= salary[2]) {
        result = money / 10
        alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
    } else if (money !== check) {
        alert('โปรดใส่ข้อมูลให้ถูกต้อง !!!')
    } else {
        return Error
    };
};