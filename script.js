let arr = ['1234', '4376', '245454', '476554', '87', '23', '45'];

for (let elem of arr) {
    if(elem[0] == 2 || elem[0] == 4){
        console.log(elem);
    }
}
// 2 
let n = 100;

for (let i = 2; i <= n; i++) {

    for (let j = 2; j <= i; j++) {

        if (i / j == 1) {
            console.log(i);
            break;
        } else if (i % j == 0) {
            break;
        } else {
            continue;
        }
    }
}