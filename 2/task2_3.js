/*Напишите скрипт, который считает количество секунд в часе.
- Спрашиваем сколько часов у пользователя через prompt
- Выводи это всё дело через alert
- Пример вывода - В 10 часах 3536365 секунд (10 ввёл пользователь)
*/


var hours = prompt('Сколько часов');

alert(`В  ${hours} часах ${hours*60*60} секунд`);