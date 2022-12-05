let lang = confirm('ваш язык ru ?');
//через if
if (lang) {
    console.log('пн, вт, ср, чт, пт, сб, вс');
} else {
    lang = confirm('ваш язык en ?'); {
        if (lang) {
            console.log('Mo, Tu, We, Th, Fr, Sa, Su');
        } else {
            console.log('язык не выбран');
        }
    }
}
// через switch-case
let langDefine = confirm('Ваш язык русский?');
let lang2 = (langDefine === true) ? 'ru' : 'en';
switch (lang2){
    case 'ru':
        console.log('пн, вт, ср, чт, пт, сб, вс');
        break;
    case 'en':
        console.log('Mo, Tu, We, Th, Fr, Sa, Su');
        break;
    default :
        console.log('язык не выбран');
        break;
}

//через многомерный массив без ифов и switch.
let week = [
    ['пн, вт, ср, чт, пт, сб, вс'],
    ['Mo, Tu, We, Th, Fr, Sa, Su']
];
let defineLang = confirm('ваш язык русский? ');
let lang3 = (defineLang === true) ? 'ru' : 'en';
for (let i=0; i<week.length; i++){
    if (lang3 === 'ru'){
    console.log(week[0]);
    break;
    } else {
    console.log(week[1]);
    break;
    }
}

// 2. Несколько тернарных операторов
const namePerson =  prompt('ваше имя').trim().toLowerCase();

personPosition = (namePerson === 'артем') ? 'Директор' : 
                (namePerson === 'александр')  ? 'преподаватель' : 
                ((namePerson !== 'александр') && (namePerson !== 'артем')) ? 'студент' :

console.log(personPosition);

