/*В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, через console.warn выводится “Выслать повестку”.*/
var age=(randomInteger(1, 100));
document.body.innerHTML = "";

	if (age >= 18 && age < 27 ) 
	{
	console.log(`Повестка age= ${age}`);
	document.writeln(`Повестка age= ${age}`);
	}
	else 
	{
	console.log(`не Повестка age= ${age}`);
	document.writeln(`не Повестка age= ${age}`);
	}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}