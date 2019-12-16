/*Создайте три переменные с любыми числовыми значениями. Используя условный оператор 
 и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение.
 */
var aaa=(randomInteger(1, 100)), bbb=(randomInteger(1, 200)), ccc=(randomInteger(1, 300));
document.body.innerHTML = "";

if(aaa < bbb){
	if (aaa < ccc) 
	{
	console.log(`a= ${aaa} < ${ccc} < ${bbb}`);
	document.writeln(`a= ${aaa} < ${ccc} < ${bbb}`);
	}
}

if(bbb < aaa){
	if (bbb < ccc) 
	{
	console.log(`b= ${bbb} < ${ccc} < ${aaa}`);
	document.writeln(`b= ${bbb} < ${ccc} < ${aaa}`);
	}
}

if(ccc < aaa){
	if (ccc < bbb) 
	{
	console.log(`c= ${ccc} < ${aaa} < ${bbb}`);
	document.writeln(`c= ${ccc} < ${aaa} < ${bbb}`);
	}
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
