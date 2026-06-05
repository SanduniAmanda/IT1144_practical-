for (let i=1; i<=5; i++)
{	console.log("count:"+i);
} 


let count=1;
while (count<=3)
{	console.log ("while count:" +count);
	count++;
}


let x=1;
do {
		console.log("value:" +x);
		x++;
}while (x<=5);



let fruitColors={apple:"red";banana:"Yellow"};

for (let key in fruitColors)
{	console.log (key+"is" +fruitColors[key]);
}