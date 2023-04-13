function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    // let tim = dateTime.toLocaleDateString()
    // let time1 = dateTime.toISOString()
    // let time2 = dateTime.toDateString()
    // console.log(time1);
    // console.log(tim);
    console.log(time)
    // console.log(time2);
    // setTimeout(showTime, 1000);
    setTimeout(function () {
        showTime()
    }, 1000);
}
showTime();

// let time2 = new Date().toTimeString()
// console.log(time2);

// let date = Date.now()
// console.log(date);

// let date1 = new Date().setFullYear(2020, 11, 3)
// console.log(date1);