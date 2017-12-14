(function($) {
  const theForm = $("#email-form");
  const theEmail = $("#the-email");
  const theMessage = $("#the-message");
  const theResult = $("#the-result");

  theForm.submit(e => {
    e.preventDefault();
    const formData = {
      email: theEmail.val(),
      text: theMessage.val()
    };

    
      $.ajax({
            method: "POST",
            url: "/",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function(data) {
                let parseddata = JSON.parse(data);
                theResult.html(parseddata.reply);
                //console.log(x);
      }
      });
    
    
  });
})(window.jQuery); // jQuery is exported as $ and jQuery
