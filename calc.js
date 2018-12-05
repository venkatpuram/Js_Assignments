function calc()
{
    var num=prompt("select your type:\n1.Add\n2. Substract\n3. Multiply\n4. Division\n5. Exponent\n6. Mean\n7. Exit","");
    if(num<=7)
    {
        if(num==1)
        {
        var num1=prompt("enter the first number");
        var num2=prompt("enter the second number");
        var num3=Number(num1)+Number(num2);
        document.getElementById("one").innerHTML=num3;
        }
        if(num==2)
        {
        var num1=prompt("enter the first number");
        var num2=prompt("enter the second number");
        var num3=Number(num1)-Number(num2);
        document.getElementById("one").innerHTML=num3;
        }
        if(num==3)
        {
        var num1=prompt("enter the first number");
        var num2=prompt("enter the second number");
        var num3=Number(num1)*Number(num2);
        document.getElementById("one").innerHTML=num3;
        }
        if(num==4)
        {
        var num1=prompt("enter the first number");
        var num2=prompt("enter the second number");
        var num3=Number(num1)/Number(num2);
        document.getElementById("one").innerHTML=num3;
        }
        if(num==5)
        {
        var num1=prompt("enter the Base");
        var num2=prompt("enter the Exponent");
        var num3=Math.pow(num1,num2);
        document.getElementById("one").innerHTML=num3;
        }
        if(num==6)
        {
            var sum=0;
            var count=0;
            var num=prompt("enter the series to calculate mean")
            while(num!="***"){
            count++;
            sum=sum+parseInt(num);
            num=prompt("enter the series to calculate mean")
        }

            document.getElementById("one").innerHTML=sum/count;
        }
        if(num==7)
        {
            
        }
    }
    else
    alert("Enter correct input")
}