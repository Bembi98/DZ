const value1 = Number(prompt("Введите первое число"));
const value2 = Number(prompt("Введите второе число"));

if (Number.isNaN(value1) ||  Number.isNaN(value2)) {
 console.log('Некорректный ввод');
} else {
    const result = parseInt((value1).toString(value2));
console.log(result); 
}
