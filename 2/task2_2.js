/*Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'. 
Перебираем через цикл строку и при переборе строки если текушее значение в цикле будет равно 'a', 'b', 'e' - вывести через console 'Я знаю эту букву'*/


var str = "abcde";

var symbols = str.split(""); // разбиваем на массив символов
console.log(`${0} - ${symbols[0]}`);
console.log(`${1} - ${symbols[1]}`);
console.log(`${4} - ${symbols[4]}`); 

console.log("-----Array-----");
for (var i = 0; i < symbols.length; i++)
{
  console.log(`${i} - ${symbols[i]}`);
  if(symbols[i] =="a" || symbols[i] =="b" || symbols[i] =="c") 
  {
	  console.log(`я знаю эту букву "${symbols[i]}"`);
	  document.writeln(`я знаю эту букву "${symbols[i]}" </br>`);
	  }
  
  document.writeln(`${i} - ${symbols[i]} </br>`);
}