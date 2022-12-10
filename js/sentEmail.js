function validteEmail() {
  console.log("click")
  var email = document.getElementById("email").value;
  var validRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  var suggestion=document.getElementById("suggestion");
  if (email.match(validRegex)) {
    suggestion.innerText = "valid email address";
    suggestion.style.color = "green";
    return true;
  } else {
    console.log("Invalid email address!");
    suggestion.innerText = "invalid email address";
    suggestion.style.color = "red";

    return false;
  }
}

const sentEmail = () => {
  if(
  document.getElementById("name").value!=""
    && document.getElementById("email").value!=""
    && document.getElementById("subject").value!=""
    && document.getElementById("message").value!=""){

      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
      const servicId = "service_b20cg0a";
      const templateId = "template_k9r6hra";
    
      emailjs
        .send(servicId, templateId, params)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("message sent successfull");
          },
          function (error) {
            console.log("FAILED...", error);
            alert("message sent failed");
          }
        )
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      alert("Enter full details");
    }
};
