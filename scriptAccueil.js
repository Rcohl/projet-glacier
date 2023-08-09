document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    var username = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    // les identifiants sont valides
    if (username === "foo@example.com" && password === "123") {
      // Rediriger vers une autre page après la connexion réussie
      window.location.href = "indexUtilisateurs.html";
    } else {
      alert("Identifiants invalides. Veuillez réessayer.");
    }
  });
