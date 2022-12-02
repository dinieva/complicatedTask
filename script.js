//1
let num = 266219;
//2 произведение (умножение) цифр числа
let str = String(num);

let multi = 1;
for(let elem of str){
    multi *= elem;
}
console.log(multi);
//3 результат возвести в степень 3, используя только 1 оператор
let multiInPower = multi**3;
console.log(multiInPower);
//4 первые 2 цифры полученного числа
let twoFigure = (String(multiInPower)).substring(0,2);
console.log(twoFigure);
