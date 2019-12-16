/*08. Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:

- если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
- если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
- если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»; */

/*Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика*/

for (var i = 1; i < 50; i++)
{
  console.log(`${i} - ${checkNumIf(i)}`);
  console.log(`${i} - ${checkNumTernal(i)}`);

}

function checkNumIf(someNumber) {
	if(someNumber % 3 == 0)
	{
		if(someNumber % 5 == 0)
		{
		return "FizzBuzz";	
		}
		return "Fizz";
	}
	if(someNumber % 5 == 0)
	{
		return "Buzz";
	}
	
  return someNumber;
};

function checkNumTernal(someNumber) {
	return (someNumber % 3 == 0) ? (someNumber % 5 == 0)? "FizzBuzz": "Fizz": (someNumber % 5 == 0)? "Buzz": someNumber;
};