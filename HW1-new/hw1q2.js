var num = 50;
var numarr = new Array();
for (var i=1;i<num;i++)
{
//console.log("i iterator =" + i);
var sqrt = Math.sqrt(i);
var floor = Math.floor(sqrt);
//console.log("Floor = "+floor);
var divided=false;
//console.log("Just set divided to false");
for (var j=2;(j<=floor) && (divided==false);j++)
	{
    //console.log("j iterator ="+j);
	var calc = i/j;
	var calcfloor = Math.floor(calc);
	var check = calc-calcfloor;
	//console.log("check =" + check);
	if (check==0)
		{
		divided = true;
		//console.log("Divided =" + divided + ", number =" + i + ", divisor =" + j);
		} 
	}
//console.log("Out of the loop, divided =" +divided)
if (divided==false) {
    console.log("This number is prime! : " + i);
    } else {
    console.log("NOT PRIME! > "+ i)
    };
};
