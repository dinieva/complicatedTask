// 1 способ

/* const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

for (let day = 0; day < week.length; day++) {
    let today = new Date().getDay() - 1;
    if( day === 5 || day === 6){
        document.write('<i>' + week[day] + ' </i>' + '<br>');
    } else if(day === today){
        document.write('<b>' + week[day] + ' </b>' + '<br>');
    } else {
        document.write(week[day] + '<br>' );
    }
} */

// 2 способ
const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

let today = new Date().getDay() - 1;

for (let day = 0; day < week.length; day++) {
    let text = document.createElement('p');
    text.innerHTML  = week[day];
    
    if (day === today) {
        text.style.fontWeight = 'bold';

        if (today === 5 || today ===6){
            text.style.fontStyle = 'italic';
        }
    } else if(day === 5 || day === 6){
        text.style.fontStyle = 'italic';
    }
    document.body.append(text);
}