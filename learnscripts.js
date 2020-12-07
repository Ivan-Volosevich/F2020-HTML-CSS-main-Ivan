let str = "some text";  //строка
let ololo2 = `text ${ololo}`; //шаблонные строки
let num = 5; //числа
let bign = 45646521819845461216498464n; //большое число
let bool = true; //true-false булинги

let n = null;
let u = undefined; //неопределено
let nan = NaN; //not a number
let inf = 6 / 0; //infinity

const car = {
    color: 'red',
    wheel: 4
};              //задаём переменную со своими свойствами
car.wheel

/*массивы*/
const arr = [7,2,3,43,54,4642352];


/*функции (вызываемый объект)*/
function sum (a,b) {
    let result = a + b;
    console.log(result);
    return result;
}

sum(4,5);

const newSum = (a,b) => a+b;