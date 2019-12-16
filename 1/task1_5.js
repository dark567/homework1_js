/*Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.*/

var priznak = true;
var line = "";
for (var i = 0; i < 10; i++)
{
    if (priznak)
	{
		line +=".";
		priznak = false;
	}
	else{
		line +="*";
		priznak = true;
	}	
    document.writeln(`${i} - ${line} </br>`);
	console.log(`${i} - ${line}`);
}

document.writeln(line + "</br>");
console.log(line);