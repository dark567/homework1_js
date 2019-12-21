/*Выведите столбец четных чисел в промежутке от 0 до 100. через while*/

var i = 0;
do{
	if (checkNumTernal(i) && i !=0) console.log(`${i}`);
	i++;
}
while(i<=100)


function checkNumTernal(someNumber) {
	return (someNumber % 2 == 0);
};