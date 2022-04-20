let form = document.querySelector('form');
let render = document.querySelector('#render');
let rendeerror = document.querySelector('#rendeerror')

class setsalary {
    constructor(first, second, third) {
        this.first = first
        this.second = second
        this.third = third
    };
};

const salary = new setsalary(150000, 300000, 1000000)


form.addEventListener('submit', (event) => {

    event.preventDefault();

    let use = document.getElementById('use')
    let result;
    const money = use.value * 12;
    const incorrect_information = "";
    const check = incorrect_information.toString();


    new Promise((resolve, reject) => {
            if (money <= salary.first) {
                resolve(result = money / 2)
                    // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
            } else if (money <= salary.second) {
                resolve(result = money / 5)
                    // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
            } else if (money <= salary.third) {
                resolve(result = money / 7)
                    // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
            } else if (money >= salary.third) {
                resolve(result = money / 10)
                    // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
            } else if (money !== check) {
                reject('โปรดใส่ข้อมูลให้ถูกต้อง !!!')
            }
        }).then((result) => render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`)
        .catch((reason) => alert(`${reason}`))
});























// var form = document.querySelector('form');
// var render = document.querySelector('#render');
// var rendeerror = document.querySelector('#rendeerror')


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let use = document.getElementById('use')

//     const money = use.value * 12;
//     const salary = [150000, 300000, 1000000];
//     const incorrect_information = "";
//     const check = incorrect_information.toString();
//     var result;

//     if (money <= salary[0]) {
//         result = money / 2
//         render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`
//             // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
//     } else if (money <= salary[1]) {
//         result = money / 5
//         render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`
//             // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
//     } else if (money <= salary[2]) {
//         result = money / 7
//         render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`
//             // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
//     } else if (money >= salary[2]) {
//         result = money / 10
//         render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`
//             // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
//     } else if (money !== check) {
//         rendeerror.innerHTML = `โปรดใส่ข้อมูลให้ถูกต้อง !!!`
//             // alert('โปรดใส่ข้อมูลให้ถูกต้อง !!!')
//     } else {
        return Error
    };
});
