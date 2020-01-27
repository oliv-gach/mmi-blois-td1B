/**
 * Script principal
 */

 /**
  * @function
  * Enregistrement de tous les utilisateurs
  * Pour chaque appel registerUser(x), un fichier x.json doit exister
  * dans /users pour décrire les caractéristiques de l'utilisateur sous la forme :
  * {
      "name": "nom de l'utilisateur",
      "avatar": "url de son image",
      "style": "theme = feuille sans le css"
    }
    Par exemple :
    {
      "name": "Olivier GACH",
      "avatar": "/img/gach.svg",
      "style": "dark"
    } 
  */
async function registerAllusers() {
   await registerUser('julie');
   await registerUser('gach');
   await registerUser('julie');
}

/**
 * Après chargement de la page, chargement et affichage des utilisateurs
 * L'événement personnalisé ListUserLoaded est déclenché pour prévenir
 * les autres script que la liste est prête
 */
document.addEventListener('DOMContentLoaded', function () {
   registerAllusers().then(function(res) {
      showUser(document.getElementById('users'));
   });
})