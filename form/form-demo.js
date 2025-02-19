// form-demo.js
function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can can call e.preventDefault()
    // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
  
    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }
  
function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.querySelector("#checkoutForm")
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.querySelector("#creditCardNumberContainer");
    const paypalContainer = document.querySelector("#paypalUsernameContainer");
    const creditInput = document.querySelector('#creditCardNumberContainer input');
    const paypalInput = document.querySelector('#paypalUsernameContainer input');
  
    let value = e.target.value;
    creditCardContainer.classList.add('hide');
    paypalContainer.classList.add('hide');
    creditInput.required=false;
    paypalInput.required=false;

    if (value == 'creditCard'){
        creditCardContainer.classList.remove('hide');
        creditInput.required=true;
    }
    else if (value == 'paypal'){
        paypalContainer.classList.remove('hide');
        paypalInput.required=true;
        
    }
    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!
  
  
    // Show the container based on the selected payment method, and add the required attribute back.
  
}
  
  // helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  // attach a change event handler to the paymentMethod input
  const selectElement = document.getElementById("paymentMethod");
  // attach a submit event handler to the form
  selectElement.addEventListener('change', togglePaymentDetails);