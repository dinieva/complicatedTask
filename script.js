let body = document.querySelector('body');
let time1 = document.createElement('div');
let time2 = document.createElement('div');

body.append(time1, time2);

//А) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды';
function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

setInterval(timing1, 1000);
function timing1() {
    let now = new Date();
    let weekDay = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    let mounth = ["Декабря", "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября"];
    let hour = now.getHours();
    function correctHourText() {
        let hourText = ' час';
        if (hour == 01 || hour == 21) {
            return hourText;
        } else if (hour > 0 && hour < 05 || hour > 20) {
            return hourText + 'a';
        }
        return hourText + 'ов';
    }
    time1.innerText = 'Сегодня ' + weekDay[now.getDay() - 1] + ', ' + now.getDate() + ' ' + mounth[now.getMonth()] + ' ' + now.getFullYear() + ' года, ' + addZero(hour) + correctHourText() + ' ' + now.getMinutes() + ' минут ' + addZero(now.getSeconds()) + ' секунды';
}
//Б) 4.02.2020 - 21:05:33'

setInterval(timing2, 1000);

function timing2() {
    let now = new Date();
    time2.innerHTML = addZero(now.getDate()) + '.' + addZero(now.getMonth()) + '.' + now.getFullYear() + ' - ' + addZero(now.getHours()) + ':' + addZero(now.getMinutes()) + ':' + addZero(now.getSeconds());
}
