window.onload = function(){
  var database = firebase.database()
  var reference = database.ref()
  var submitButton = document.getElementById("vive-button5");

  submitButton.onclick = function(){
    var emailValue = document.getElementById("emailEnter").value;
    var cityValue = document.getElementById("emailEnter2").value;
    var usernameValue = document.getElementById("emailEnter3").value;

    reference.push({ email: emailValue, city: cityValue, username: usernameValue })
  };
}
