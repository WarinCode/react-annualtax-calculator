var form = document.querySelector('form');
var render = document.querySelector('#render');
var rendeerror = document.querySelector('#rendeerror')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let use = document.getElementById('use')

    const money = use.value * 12;
    const salary = [150000, 300000, 1000000];
    const incorrect_information = "";
    const check = incorrect_information.toString();
    var result;

    if (money <= salary[0]) {
        result = money / 2
        render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`
            // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
    } else if (money <= salary[1]) {
        result = money / 5
        render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`
            // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
    } else if (money <= salary[2]) {
        result = money / 7
        render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`
            // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
    } else if (money >= salary[2]) {
        result = money / 10
        render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(result)} บาท`
            // alert(`ภาษีที่ต้องจ่ายคือ ${Math.round(result)}`)
    } else if (money !== check) {
        rendeerror.innerHTML = `โปรดใส่ข้อมูลให้ถูกต้อง !!!`
            // alert('โปรดใส่ข้อมูลให้ถูกต้อง !!!')
    } else {
        return Error
    };
});
