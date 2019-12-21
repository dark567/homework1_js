/*6. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта. 
var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}*/

var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} - ${value}.`); 
}
