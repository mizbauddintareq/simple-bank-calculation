document.getElementById("loginBtn").addEventListener("click", function () {
  const emailField = document.getElementById("emailField");
  const getEmail = emailField.value;
  const passWordField = document.getElementById("passField");
  const getPassword = passWordField.value;
  if (getEmail === "mizba@gmail.com" && getPassword === "Mizba23") {
    window.location.href = "../bank.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Wrong credentials",
    });
  }
});
