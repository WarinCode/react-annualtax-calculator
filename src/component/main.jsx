
// react
import React from "react";

// lib
import Swal from 'sweetalert2'

// style
import { logoinformation , vent , renderbox , fontthai , render , frame , header } from '../style/style'

export default  function Main(){

    function submit(event){

        event.preventDefault();

        class setsalary {      // จำนวนเงิน
            constructor(first, second, third) {
                this.first = first
                this.second = second
                this.third = third
            };
        };

        const salary = new setsalary(150000, 300000, 1000000); // instance

        // เก็บค่า
        let render = document.querySelector('#render');
        let use = document.querySelector('#use');

        
        const money = use.value * 12;

        const string = "";
        const check = string.toString(); // ใส่ข้อมูลผิด
        let result = 0;

            new Promise((resolve, reject) => {

                    if(use.value === check || money === check){
                        return false
                    } else if (money <= salary.first) {
                        resolve(result = money / 2) // 2%
                    } else if (money <= salary.second) {
                        resolve(result = money / 5) // 5%
                    } else if (money <= salary.third) {
                        resolve(result = money / 7) // 7%
                    } else if (money >= salary.third) {
                        resolve(result = money / 10) // 10%
                    } else if (money !== check) {
                        reject('โปรดใส่ข้อมูลให้ถูกต้อง !!!');
                    } else{
                        return Error
                    };
                }).then((resultant) => render.innerHTML = `ภาษีที่ต้องจ่ายคือ ${Math.round(resultant)} บาท`) 
                .catch((reason) => Swal.fire({   // alert
                    icon: 'error',
                    title: 'Error',
                    text: `${reason}`
                  }));
          };

        const board_cleared = ()=>{   

            let timerInterval;
            Swal.fire({
            title: 'กำลังเริ่มต้นระบบใหม่',
            html: 'โปรดรอสักครู่',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 200)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            })
 
            const load = document.querySelector('.render');
            load.innerHTML = "Loading...."
        };

        

        const logo_i =()=>{

            const criterion = ["- เกณฑ์ที่ 1 เงินเดือนน้อยกว่า 150,000 คิด 2%","- เกณฑ์ที่ 2 เงินเดือนน้อยกว่า 300,000 คิด 5% ",`- เกณฑ์ที่ 3 เงินเดือนน้อยกว่า 1,000,000 คิด 7%` ," - เกณฑ์ที่ 4 เงินเดือนมากกว่า 1,000,000 คิด 10%"]
            Swal.fire({
                icon: 'info',
                title: '<h2 class=" position-relative top-50"><strong>เกณฑ์ที่ใช้ในการคำนวณ</strong></h2>',
                html: criterion.map(i => `<br>`  + `<span class=" text-center">${i}</span>`  )

              });
        };

            
        let setdefault = "o((>ω< ))o"; // defalut
          

    return(
        <>

    <section style={vent}></section>


    <section className="mt-5">
        <div className="container" style={fontthai}>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className=" col-lg-8" >
                    <form className=" text-center">
                        <h1 className="text-black mb-2" style={header}>โปรแกรมคำนวณภาษีเงินเดือน</h1>
                        <span style={{display: 'inline-flex'}}><h5 className=" text-muted mb-4">คำนวณภาษีทั้งหมดตลอดใน 1ปี</h5><i class="ri-information-fill text-muted ms-1 " style={logoinformation} onClick ={logo_i}></i></span>
                            <br />
                        <label className=" form-label" >
                            <input type="text" id="use" name=" use" placeholder="ใส่จำนวนเงิน" style={{width:'18rem'}} />
                        </label>

                        {/* button */}
                        <div className=" m-2 button-group mb-2">
                            <button className="btn btn-primary me-1" onClick={submit}>ยืนยัน</button>
                            <button className="btn btn-danger" type="reset">ยกเลิก</button>
                            <button className="btn btn-warning ms-1" onClick={board_cleared}>เคลียร์</button>
                        </div>
                        <hr />
                    </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>

        {/* render */}
        <div className="container mt-3" style={ renderbox }>
            <div className="row">
                <div className="col-lg">
                    <div className=" text-center mt-3" style={frame }>
                    <div id="ab"></div>
                            <h2 id="render" className="render ms-2" style={render}>{setdefault}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    );
};

