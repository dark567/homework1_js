/*7. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.*/


var Array = [2, 5, 9, 15, 0, 4];
for (var i = 0; i < Array.length; i++)
{	

	console.log(`${Array[i]} - ${checkNum(Array[i])}`);
}

function checkNum(someNumber) {
	return (someNumber > 3) && (someNumber <10);
};