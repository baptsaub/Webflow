document.addEventListener("DOMContentLoaded", function() {
    // Select the 'Connexion' link, 'Connectez-vous ici.' link, 'Créer un compte.' link, 'Je m'inscris !' button, and the logo link
    var connexionLink = document.getElementById('Lien-connexion-header');
    var connectezVousLink = document.getElementById('lien-connectez-vous-block-inscription');
    var creerCompteLink = document.getElementById('Lien-cr-er-un-compte-block-connexion');
    var inscriptionButton = document.getElementById('Boutin-je-m-inscris-texte-page-d-accueil');
    var logoLink = document.getElementById('Lien-page-d-accueil-header');

    // Select the blocks
    var blockTextePageDAcceuil = document.getElementById('Block-texte-page-d-acceuil');
    var blockSeConnecter = document.getElementById('Block-connexion');
    var blockInscription = document.getElementById('Block-inscription');

    // Functions to change block visibility
    function showConnexionBlock() {
        blockTextePageDAcceuil.style.display = 'none';
        blockSeConnecter.style.display = 'flex';
        blockInscription.style.display = 'none';
    }

    function showInscriptionBlock() {
        blockTextePageDAcceuil.style.display = 'none';
        blockSeConnecter.style.display = 'none';
        blockInscription.style.display = 'block';
    }

    function showAccueilBlock() {
        blockTextePageDAcceuil.style.display = 'block';
        blockSeConnecter.style.display = 'none';
        blockInscription.style.display = 'none';
    }

    // Add event listeners for links and button
    connexionLink.addEventListener('click', function(event) {
        event.preventDefault();
        showConnexionBlock();
    });

    connectezVousLink.addEventListener('click', function(event) {
        event.preventDefault();
        showConnexionBlock();
    });

    creerCompteLink.addEventListener('click', function(event) {
        event.preventDefault();
        showInscriptionBlock();
    });

    inscriptionButton.addEventListener('click', function(event) {
        event.preventDefault();
        showInscriptionBlock();
    });

    logoLink.addEventListener('click', function(event) {
        event.preventDefault();
        showAccueilBlock();
    });
});
