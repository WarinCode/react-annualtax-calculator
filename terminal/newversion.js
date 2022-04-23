// จงเขียนโปนแกรมคำนวณภาษี
// run Terminal: node New version.js

const promptsync = require('prompt-sync')();
let _function = (incorrect_information, check, result) => {

    while (true) {

        function calculation() {

            const use = promptsync("จำนวนเงินที่ได้รับ >>>  ");
            const money = use * 12; // รายได้ทั้งหมดใน 1ปี รวมหักค่าภาษีตลอดทั้งเดือน
            const salary = [150000, 300000, 1000000]; // เกณฑ์ในการใช้ลดภาษี
            incorrect_information = "" && null && undefined || false;
            check = incorrect_information.toString();
            result;

            if (money <= salary[0]) {
                result = money / 2 // 2%
                console.log(`ต้องเสียภาษีรายปี = ${Math.round(result)}`);
            } else if (money <= salary[1]) {
                result = money / 5 // 5%
                console.log(`ต้องเสียภาษีรายปี = ${Math.round(result)}`);
            } else if (money <= salary[2]) {
                result = money / 7 // 7%
                console.log(`ต้องเสียภาษีรายปี = ${Math.round(result)}`);
            } else if (money >= salary[2]) {
                result = money / 10 // 10%
                console.log(`ต้องเสียภาษีรายปี = ${Math.round(result)}`);
            } else if (money !== check) {
                console.log(`โปรดใส่ข้อมูลให้ถูกต้อง`);
            } else {
                return Error;
            }
        };
        calculation();
    };
};

_function();