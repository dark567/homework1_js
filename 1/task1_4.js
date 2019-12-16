/*В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в console.log сообщение о необходимости идти на работу.*/

var day = "Saturday";
document.body.innerHTML = "";
switch(day.toLowerCase()){
 
    case "saturday" : 
        console.log(`день отдыха "${day}"`);
		document.writeln(`день отдыха "${day}"`);
        break;
    case "sunday"  : 
        console.log(`день отдыха "${day}"`);
		document.writeln(`день отдыха "${day}"`);
        break;
    default: 
       	console.log(`надо идти на работу "${day}"`);
	    document.writeln(`надо идти на работу "${day}"`);
        break;
}


var day = "Monday";
document.body.innerHTML = "";

if (day.toLowerCase() != "saturday" && day.toLowerCase() != "sunday") 
	{
		console.log(`надо идти на работу "${day}"`);
	    document.writeln(`надо идти на работу "${day}"`);
	}
	else{
		console.log(`день отдыха"${day}"`);
	    document.writeln(`день отдыха "${day}"`);
	}
	

var day = "Monday";
document.body.innerHTML = "";
var result = day.toLowerCase() == "saturday"? `день отдыха "${day}"`: day.toLowerCase() == "sunday" ? `день отдыха "${day}"` : `день НЕ отдыха "${day}"`;
console.log(result);

