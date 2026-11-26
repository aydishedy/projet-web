document.addEventListener("DOMContentLoaded", function() {

    let produits = document.querySelectorAll(".produit");

    function calculerCommande() {

        let sousTotal = 0;
        let liste = document.getElementById("liste-commande");
        let nombre = 0;

        liste.innerHTML = "";

        produits.forEach(function(produit) {

            let prix = Number(produit.dataset.prix);
            let champ = produit.querySelector(".quantite");
            let quantite = Number(champ.value);

            if (quantite < 0) {
                quantite = 0;
                champ.value = 0;
            }

            if (quantite > 99) {
                quantite = 99;
                champ.value = 99;
            }

            let totalProduit = prix * quantite;

            produit.querySelector(".total-produit").textContent = totalProduit + " DT";

            if (quantite > 0) {
                nombre = nombre + 1;
                sousTotal = sousTotal + totalProduit;

                let ligne = document.createElement("tr");
                let nom = produit.querySelector("h2").textContent;

                let cellule1 = document.createElement("td");
                let cellule2 = document.createElement("td");
                let cellule3 = document.createElement("td");
                let cellule4 = document.createElement("td");

                cellule1.textContent = nom;
                cellule2.textContent = prix + " DT";
                cellule3.textContent = quantite;
                cellule4.textContent = totalProduit + " DT";

                ligne.appendChild(cellule1);
                ligne.appendChild(cellule2);
                ligne.appendChild(cellule3);
                ligne.appendChild(cellule4);

                liste.appendChild(ligne);
            }
        });

        if (nombre === 0) {
            liste.innerHTML = "<tr><td colspan='4'>Aucun produit choisi</td></tr>";
        }

        let livraison = 0;

        if (sousTotal > 0) {
            livraison = 7;
        }

        let total = sousTotal + livraison;

        document.getElementById("sous-total").textContent = sousTotal + " DT";
        document.getElementById("livraison").textContent = livraison + " DT";
        document.getElementById("total").textContent = total + " DT";
    }

    produits.forEach(function(produit) {
        produit.querySelector(".quantite").addEventListener("input", calculerCommande);
    });

    document.getElementById("valider").addEventListener("click", function() {

        let total = document.getElementById("total").textContent;

        if (total === "0 DT") {
            alert("Veuillez choisir au moins un produit.");
        } else {
            alert("Merci pour votre commande ! Total à payer : " + total);
        }
    });

});
