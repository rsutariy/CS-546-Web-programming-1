let exportedMethods = {
    checkpalindrome(string) {
        
        let mainstring = text;
        if (typeof string !== "string") throw "Must provide a String as a Input";
        var removeChar = string.replace(/[^A-Z0-9]/ig, "").toLowerCase(); 
        console.log(removeChar);
        var checkPalindrome = removeChar.split('').reverse().join('');
        console.log(checkPalindrome);
        if(removeChar === checkPalindrome)
        {
            //console.log(string+'is palindrome');
             //List[mainstring] = 1;
        }
        else
        {
            //console.log(string+'is  not palindrome');
            //List[mainstring] = 0;
        }
    }  
}

 

module.exports = exportedMethods;

//exportedMethods.checkpalindrome('"Oh who was it I saw, oh who?"')