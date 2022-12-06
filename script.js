function checkArg(arg) {
    if (typeof arg !== 'string'){
        alert('У аргумента не строчный тип данных');
    } else {
        arg = arg.trim();
        if (arg.length > 30){
            return arg.slice(0,31) + '...';
        }
    }
}

console.log(checkArg('Послушайте! Ведь, если звезды зажигают —значит — это кому-нибудь нужно? Значит — кто-то хочет, чтобы они были? Значит — кто-то называет эти плевочки'));
