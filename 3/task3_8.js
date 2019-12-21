/*8. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.*/

var Array = [-2, 5, -9, 15, 0, -4];
var sum = 0;
for (var i = 0; i < Array.length; i++)
{	
if (checkNum(Array[i])) sum += Array[i];	
console.log(`${sum}`);
}
console.log(`${sum}`);

function checkNum(someNumber) {
	return (someNumber > 0);
};