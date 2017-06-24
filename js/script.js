window.onload = function(){
  var database = firebase.database()
  var reference = database.ref()
  var submitButton = document.getElementById("vive-button5");
  submitButton.onclick = function(){
    alert("We have recieved you inf0!");
    var emailValue = document.getElementById("emailEnter").value;
    var cityValue = document.getElementById("emailEnter2").value;
    var usernameValue = document.getElementById("emailEnter3").value;

    // reference.push({ email: emailValue, city: cityValue, username: usernameValue })
  };

  function sendMail(){
    var link = "mailto:pairofweights@gmail.com"
      + "?cc=herman.saini@gmail.com"
      + "&subject= " + escape("Welcome to POW")
      + "&body=" + escape("Hi")
      ;

      window.location.href = link;
  }
}
