document.addEventListener("DOMContentLoaded", function() {

    let formulaire = document.getElementById("form-inscription");

    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();

        let motdepasse = document.getElementById("motdepasse").value;
        let confirmation = document.getElementById("confirmation").value;
        let message = document.getElementById("message");

        if (motdepasse !== confirmation) {
            message.textContent = "Les deux mots de passe ne sont pas identiques.";
        } else {
            message.textContent = "Votre inscription est validée !";
            formulaire.reset();
        }
    });

});
