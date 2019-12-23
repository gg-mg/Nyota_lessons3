// business logic
function EmailAddress(email, password) {
    this.email = email;
    this.password = password;
  }
  
  EmailAddress.prototype.fullName = function() {
    return this.email + " " + this.password;
    //This is a method
  };
  //Property to be created
  
  // user interface logic
  $(document).ready(function() {
    $("form#new-email").submit(function(event) {
      var inputtedemail = $("input#exampleInputEmail1").val();
      var inputtedpassword = $("input#exampleInputPassword1").val();
  
      var newEmailAddress = new EmailAddress(inputtedemail, inputtedpassword);
      alert(newEmailAddress.email);
      alert(newEmailAddress.password);
  
      $("ul#contacts").append(
        "<li><span class='contact'>" + newEmailAddress.email + "</span></li>"
      );
  
      //   This piece of code clears input fields (.val(""))
      $("input#exampleInputEmail1").val("");
      $("input#exampleInputPassword1").val("");
  
      // $(".contact").last().click(function () {
      //   $("#show-contact").show();
      //   $("#show-contact h2").text(newContact.firstName);
      //   $(".first-name").text(newContact.firstName);
      //   $(".last-name").text(newContact.lastName);
      // });
  
      event.preventDefault();
    });
  });
  