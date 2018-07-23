//格式化日期格式

Date.prototype.format = function () {
    var s = '';
    var mouth = (this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) : ('0' + (this.getMonth() + 1));
    var day = this.getDate() >= 10 ? this.getDate() : ('0' + this.getDate());
    s += this.getFullYear() + '-'; // 获取年份。
    s += mouth + "-"; // 获取月份。
    s += day; // 获取日。
    return (s); // 返回日期。
  },



// 获取当月所有日期

 function getMondthDay() {
    let now = new Date();
    let date = now.getDate();
    let nowDay = [];
    for (let i = 1; i <= date; i++) {
        let time =
            now.getFullYear() +
            "-" +
            (now.getMonth() + 1 < 9 ?
                "0" + (now.getMonth() + 1) :
                now.getMonth() + 1) +
            "-" +
            (i < 9 ? "0" + i : i);
        nowDay.push(time);
    }
    return nowDay;
}

//获取上个月日期
function getEndMonthDay() {
    let now = new Date();
    now.setMonth(now.getMonth() - 1);
    now.setDate(1);
    let next = new Date();
    next.setDate(1);
    let beforeDay = [];
    let time = "";
    while (now < next) {
        // arr.push(now.getDate());
        time =
            now.getFullYear() +
            "-" +
            (now.getMonth() + 1 < 9 ?
                "0" + (now.getMonth() + 1) :
                now.getMonth() + 1) +
            "-" +
            (now.getDate() < 9 ? "0" + now.getDate() : now.getDate());
        beforeDay.push(time);
        now.setDate(now.getDate() + 1);
    }
    return beforeDay;
}