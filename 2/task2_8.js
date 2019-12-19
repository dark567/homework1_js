/*Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите сумму всех charCode этой переменной*/

var str = "Привет мир";

var strArr = str.split("");
var result = 0;

for (var i = 0; i < strArr.length; i++)
{
	result+= str.charCodeAt(i);
}
console.log("-----result-----");
console.log(result);