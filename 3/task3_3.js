/*Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива. Через for of*/


var Array = [2, 3, 4, 5];
var result = 1;
for (var i = 0; i < Array.length; i++)
{	
    result *=Array[i];
	console.log(result);
}

console.log(result);
document.writeln(`Результат произведения  - ${result}`);