// ЗАДАЧА №1: Вывести пароль с 3х диапазонов: Цифры, бол.лат.буквы или мал.лат.буквы. !Не всегда срабатывает, бывает undefined! Done!
var pswdLength = 8,
randRange = 0,
password = "",
ranges = ["numbers","bigLetter","smallLetter"],
m = 0,
n = ranges.length - 1,
randIndex = Math.round(Math.random() * (n - m + 1)) + m,
computerChoice = ranges[randIndex];
console.log("Encoding:",computerChoice);
 for (i=0; i<pswdLength; i++){
if (computerChoice == "numbers"){
	var firstRange1 = 48, lastRange1 = 57;
   	randRange = Math.round(Math.random() * (lastRange1 - firstRange1 +1)) + firstRange1;
     password +=	String.fromCharCode(randRange);
};
if (computerChoice == "bigLetter"){
	var firstRange2 = 65, lastRange2 = 90;
   	randRange = Math.round(Math.random() * (lastRange2 - firstRange2 +1)) + firstRange2;
     password +=	String.fromCharCode(randRange);
};
if (computerChoice == "smallLetter"){
	var firstRange3 = 97, lastRange3 = 122;
  	randRange = Math.round(Math.random() * (lastRange3 - firstRange3 +1)) + firstRange3;
     password +=	String.fromCharCode(randRange);
}};
	console.log("password: ", password);
	

//ЗАДАЧА №2: Лотерея с трех чисел. Done!
var userTicket = 957,
randVarint = 0,
computerTicket = "",
varLength = 3,
firstNum = 1,
sum = 0,
lastNum = 8;
   for ( i= 0; i < varLength; i ++) {
        randVarint = Math.round(Math.random() * (lastNum - firstNum + 1)) + firstNum;
        computerTicket +=  randVarint;
 }
 console.log("ComputerTicket:",computerTicket + "\n" + "UserTicket:",userTicket);
 
 
 
//ЗАДАЧА №3: Вывести праздник на сегодня. !Не срабатывает условие в цикле! None!
var today = new Date();
dateToday = today.getDate();
monthToday = (today.getMonth() + 1);
console.log("dateToday:",dateToday);
console.log("monthToday:",monthToday);
events = {
4 :  {
	date : 8,
	event : "Buddha's Birthday."
	},
4 :  {
	date : 9,
    event : "Finnish language day."
	},
4 :  {
	date : 10,
    event : "Happy Banana day."
}};
 for (var months in events) {
	 if (months == monthToday && events[months].date == dateToday) {
			 console.log("Event today is: ", events[months].event);  
		 } 
		 else {
			console.log("No events today");  
		 }};