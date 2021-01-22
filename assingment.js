
//1. Kilometer to Meter Converter.
function kilometerToMeter(kilometer){
    if(kilometer < 0) {
        console.log('your input is not valid');
        return -1;
   }
    else{
        var meter = kilometer * 1000;   
    return meter;
         }
}
 /*  var convert = kilometerToMeter(17);
   console.log(convert);*/



//2. Budget Calculator for Watch, Phone, Laptop.
function budgetCalculator(watch, phone, laptop)
{
      var productbudget = 0;
    if(watch < 0 || phone < 0 || laptop <0)
    {
        console.log('your input is not valid');
        return -1;
    }
    
    else{
        var watchValue = watch * 50;
        var phoneValue = phone * 100;
        var laptopValue = laptop * 500;
        productbudget = watchValue + phoneValue + laptopValue;
        return productbudget;
    }
}

/*var TotalProductbudget= budgetCalculator(5,2,1);
console.log(TotalProductbudget);*/



//3. Calculate Hotel cost.

function hotelCost(day)
{
    var cost = 0

    if(day < 0){
        console.log('your input is not valid');
        return -1;
    
    }
    else if(day <= 10){
        cost=day*100;
    }
   
    else if(day <= 20){
        var FirstTenDays = 10 * 100;
        var RemainingDays = day - 10;
        var SecondTenDays = RemainingDays * 80;
        cost = FirstTenDays + SecondTenDays;
    }
    
    else{
        var FirstTenDays = 10 * 100;
        var SecondTenDays = 10 * 80;
        var RemainingDays = day - 20;
        var RestOfTheDays = RemainingDays * 50;
        cost = FirstTenDays + SecondTenDays + RestOfTheDays;
    }

    return cost
}

/*var TotalHoltelCost = hotelCost(38);
console.log( TotalHoltelCost );*/



// 4.from Array find largest name of friend


function megaFriend(friendname) {
    var megaName = friendname[0];
    var find = 0;
    for (var i = 0; i < friendname.length; i++) 
    {
        var typename = typeof (friendname[i]);
        var comparewith = typeof ("name");
        var freestring = '';
        var blankspace = ' ';
        if (friendname.length < 1 || typename != comparewith || friendname[i] == freestring || friendname[i] == blankspace) 
        {
           
            find = "Your input is not valid...";
        }
    }
    if(find != 0){
        console.log("Your input is not valid...");
        return -1;
    }
    for (var i = 0; i < friendname.length; i++) {
        if (megaName.length < friendname[i].length) {
            megaName = friendname[i];
        }
    }
    return megaName;
}

/*var friendNameArray = ['Nafiza', 'omi', 'sadia', 'tisha', 'sumaiya'];
var finalresult = megaFriend(friendNameArray);
console.log(finalresult);*/