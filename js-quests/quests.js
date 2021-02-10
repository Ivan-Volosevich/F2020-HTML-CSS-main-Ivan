// test.pdf -> test194838015.pdf (вставить дату)
// const text = 'test.pdf';

function pdfDate(str) {
    if (typeof srt === 'string') {              // сделано для того, чтобы мы смотрели только на строки файла (проверялось программой) и чтобы код не упал с ошибкой
        const date = Date.now();                // задавать константу необязательно = можно просто вместо date сразу в return поместить Date.now()
        const arr = str.split('.');             // ["test", "pdf"]
        const ext = arr.pop();                  // ext = 'pdf', arr = 'test'    -> arr убрал из себя последний элемент массива и был передан переменной ext

        return arr.join('.') + date + '.' + ext;    // -> test1612371321524.pdf
    }
}

// Kata из Codewars "(()))()()()" https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
    const arr = word.toLowerCase().split('');
    const check = {};
    
    for (let i of arr) {
        if (check.hasOwnProperty(i)) {
            check[i]++;
        } else {
            check[i] = 1;
        }
    }

    const arr2 = [];

    for (let i of arr) {
        if (check[i] > 1) {
            arr2.push('\)');
        } else {
            arr2.push('/)');
        }
    }

    return arr2.join('');
}