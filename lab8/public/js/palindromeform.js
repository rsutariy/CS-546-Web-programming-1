(function() {
  const staticForm = document.getElementById("static-form");
  const List = {};
  
  function checkpalindrome(string) {
        let mainstring = string;
        let arr=[];
        if (typeof string !== "string") throw "Must provide a String as a Input";
        var removeChar = string.replace(/[^A-Z0-9]/ig, "").toLowerCase(); 
       // console.log(removeChar);
        var checkPalindrome = removeChar.split('').reverse().join('');
       // console.log(checkPalindrome);
        if(removeChar === checkPalindrome)
        {
            console.log(string+'is palindrome');
             List[mainstring] = true;
             arr.push(mainstring);
             return true;
             
        }
        else
        {
            console.log(string+'is  not palindrome');
             List[mainstring] = false;
             return false;
        }
    
  }

  if (staticForm) {
    // We can store references to our elements; it's better to
    // store them once rather than re-query the DOM traversal each time
    // that the event runs.
    const textAreaElement = document.getElementById("text");

    const errorContainer = document.getElementById("error-container");
    const errorTextElement = errorContainer.getElementsByClassName(
      "text-goes-here"
    )[0];

    const resultContainer = document.getElementById("result-container");
    const resultTextElement = resultContainer.getElementsByClassName(
      "text-goes-here"
    )[0];

    // We can take advantage of functional scoping; our event listener has access to its outer functional scope
    // This means that these variables are accessible in our callback
    staticForm.addEventListener("submit", event => {
      event.preventDefault();

      try {
        // hide containers by default
        errorContainer.classList.add("hidden");
        resultContainer.classList.add("hidden");

        // Values come from inputs as strings, no matter what :(
        const textAreaElementValue = textAreaElement.value;

        const result = checkpalindrome(textAreaElementValue);

        resultTextElement.textContent = "The result is " + result;
        resultContainer.classList.remove("hidden");
      } catch (e) {
        const message = typeof e === "string" ? e : e.message;
        errorTextElement.textContent = e;
        errorContainer.classList.remove("hidden");
      }

      let output = "";
      Object.keys(List).forEach(function(key) {
        if (List[key]) {
          output = output + "<div class='is-palindrome'>" + key + "</div>";
        } else if (!List[key]) {
          output = output + "<div class='not-palindrome'>" + key + "</div>";
        }
      });
      console.log(output);
      $("#ans").html(output);
     

    });
  }
})();
