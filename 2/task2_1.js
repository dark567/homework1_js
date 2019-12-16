/*1. Напишите код вычисления суммы всех нечетных чисел от 0 до заданного числа N
- Спрашиваем у пользователя через prompt
- Переводим в number(потому что из prompt мы получаем строку)
- Дальше думаем сами
В конце просто я должен увидеть сумму от 0 до N числа, который я ввёл
*/


var num = parseInt(prompt('Какое число?'));

for (var i = 1; i < num; i++)
{
  console.log(`${i} - ${SomeLogic(num,i)}`);
  document.writeln(`${i} - ${SomeLogic(num,i)} </br>`);
}

function SomeLogic(someNumber, i) {
	return Math.pow(someNumber, i);
};