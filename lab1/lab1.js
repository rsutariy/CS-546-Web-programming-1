
/**
 * Created by Ruchika Sutariya on 5/25/2017.
 */


function UserException(message) {
    this.message = message;
}

// Function 1 :.git

function sumOfSquares(num1, num2, num3)
{
    try {
        if (typeof num1 === 'undefined' || typeof num2 === 'undefined' || typeof num3 === 'undefined') {
            throw new UserException("Error ! Please enter three numbers");
        }

        if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
            var a = num1 * num1;
            var b = num2 * num2;
            var c = num3 * num3;
            var sum = a + b + c;
            return sum;
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
            throw new UserException("Please enter numeric value only for ..!");
        }
    }

    catch(error)
    {
        return error;
    }
}

// Check Output for function 1:
console.log(sumOfSquares("a", 3, 10));
console.log(sumOfSquares(5, 3, 10));
console.log(sumOfSquares());



// Function 2:
function sayHelloTo(firstName, lastName, title)
{
    try {
        if (typeof firstName === 'undefined' && typeof lastName ==='undefined' && typeof title ==='undefined')
            console.log( new UserException("Throws : Please pass the parameters of function..! "));
        if(typeof firstName ==='string' && typeof lastName ==='undefined' && typeof title ==='undefined')
            console.log (('Hello,' + firstName));
        if (typeof firstName ==='string' && typeof lastName ==='string' && typeof title ==='undefined')
            console.log(('Hello,' + firstName +' '+ lastName + '. I hope you are having a good day!'));
        if (typeof firstName ==='string' && typeof lastName ==='string' && typeof title ==='string')
            console.log(('Hello, ' + title +' '+ firstName +' '+ lastName + '! Have a good evening!'));
        }
    catch(error)
        {
            console.log(error) ;
        }
}


// Check Output for function 2:

sayHelloTo();
sayHelloTo("Ruchika");
sayHelloTo("Ruchika", "Sutariya");
sayHelloTo("Ruchika", "Sutariya", "Miss.");


function cupsOfCoffee(num)
{
    try{
        var i;
        var array='';
        if(typeof num === 'undefined')
            throw "Please Enter Value for Function cupOfCoffee";
        if(typeof num !=='number')
            throw "Please enter numeric input for function which is grater than zero ";

        if(typeof num ==='number')
        {
            for( i=num; i>=1;i--)
            {
                if(i!==1)
                {
                    array= array+ '\n'+i.toString()+'cups of coffee on the desk!' + i.toString() +' cups of coffee!\n';
                    array+= 'Pick one up, drink the cup, ' + (i-1).toString() +' cups of coffee on the desk';
                }
                else
                {
                    array+= '\n'+i.toString()+ 'cup of coffee on the desk! '+ i +' cup of coffee!\n';
                    array+= 'Pick it up, drink the cup, no more coffee left on the desk!';
                }
            }
            return array;
        }

    }
    catch(error)
    {
        return error;
    }
}


//Check Output for Function 3:
console.log(cupsOfCoffee("a"));
console.log(cupsOfCoffee(5));
console.log(cupsOfCoffee());



function occurrencesOfSubstring(fullString, substring)
{
    try{
        if(typeof fullString === 'undefined' && typeof substring === 'undefined')
        {
            throw "Please Enter a String for a Function occurrencesOfSubstring";
        }

        if(typeof fullString !=='string' && typeof substring !== 'string' )
            throw "Please Enter Valid String, not includes number in the function";

        if(typeof fullString ==='string' && typeof substring === 'string')
        {
            var count = 0;
            for(var i=0; i<=fullString.length; i++){
                if(fullString.includes(substring)=== true){

                    i=fullString.indexOf(substring);
                    fullString=fullString.slice(i+1,(fullString.length))
                    ++count;
                }
            }
            return count;
        }

    }
    catch(error)
    {
        return error;
    }

}


// Check the Function
console.log(occurrencesOfSubstring());
console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));
console.log(occurrencesOfSubstring("hello world", "o"));
console.log(occurrencesOfSubstring(222222, 2));


function randomizeSentences(paragraph)
{
    try
    {
        var randomarr = new Array();
        var count = 0;
        var index = 0;

        if(typeof paragraph ==='undefined')
            throw "Please Enter a String for a function randomizeSentences";
        if(typeof paragraph !== 'string')
            throw "Please Enter String value only";
        for (var i = 0 ; i < paragraph.length ; i ++ )
        {
            if(paragraph.charAt(i) === "." || paragraph.charAt(i) === "?" || paragraph.charAt(i)=== "!")
            {
                randomarr[count] = paragraph.substring ( index, (i+1) ); index =i+1; count++;
            }
        }
        for (var i = randomarr.length - 1; i >= 0; i--)
        {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = randomarr[i];
            randomarr[i] = randomarr[j];
            randomarr[j] = temp;
        }
        return randomarr.join();
    }

    catch(e)
    {
        return e;
    }
}

// Check the Function
var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log(randomizeSentences(paragraph));




