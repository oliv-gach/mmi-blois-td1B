/**
 * Une fois la liste des utilisateurs chargées et affichées, on déclare
 * les événements pour changer le thème au survol d'une cartouche d'utilisateur
 * Dans l'élément HTML représentant une cartouche d'utilisateur, l'attribut data-style
 * donne la feuille à appliquer (sans le .css à la fin)
 */
document.addEventListener('DOMContentLoaded', function() {

   // on récupère tous les bloc d'utilisateur par leur classe
   var items = document.getElementsByClassName('user');

   for(let i = 0; i< items.length; i++) {
      items[i].addEventListener('mouseenter', function(evt) {      
         if (this.dataset.style)
            document.getElementById('theme').href = this.dataset.style + '.css';
      });
      items[i].addEventListener('mouseleave', function(evt) {
         document.getElementById('theme').href = 'css/light.css';
      });
   }
})