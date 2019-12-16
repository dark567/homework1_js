/*Нужно написать такой же код, только с проверкой, что это точно будет число! Если нет, то справишваем еще раз.
Можно посмотреть цикл while)*/


	
var hours = prompt ("Сколько часов?", "");
while (!isNumeric(hours)) {
    alert("Это не число!");
    hours = prompt ("Сколько часов?",);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
	
var second = hours * 60 *60;

alert(`В  ${hours} часах ${second} секунд`);

