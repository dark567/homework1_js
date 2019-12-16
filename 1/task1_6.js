/*Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика*/

for (var i = 1; i < 25; i++)
{
    if (checkNum(i))
	{
		document.writeln(`четное ${i} - ${Math.pow(i, 2)}</br>`);
		console.log(`четное ${i} - ${Math.pow(i, 2)}`);
	}
	else{
		document.writeln(`не четное ${i} </br>`);
		console.log(`не четное ${i}`);
	}	
}

function checkNum(someNumber) {
  return (someNumber % 2 == 0) ? true : false;
};