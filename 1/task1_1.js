/*Напилите кодец, который работает с массивом произвольных целых чисел
var numbers = [ 254, 115, 78, 25, 91, 45, 37 ]
*/
var numbers = [254, 115, 78, 25, 91, 45, 37];
clear();
document.body.innerHTML = "";

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    console.log(numbers[i]);
    document.writeln(numbers[i] + "</br>");
  }
}