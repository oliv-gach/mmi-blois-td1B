let userData = [];

/**
 * Enregistre un utilisateur qui pourra être affiché par la suite
 * @param {*} name : nom de l'utilisateur
 * @param {*} avatarURL : URL dans le site de l'image représentant l'utilisateur
 */
async function registerUser(name) {
   let response = await fetch('./users/' + name + '.json');

   if (response.ok) {
      let json = await response.json();
      userData.push(json);
   }
   return response.status;
}

/**
 * Affiche en HTML la liste des développeurs enregistrés
 * par registerDev. L'affichage se fait dans l'élément HTML fourni.
 * @param {HTMLElement} htmlItem - Element du DOM dans lequel afficher les développeurs
 */
function showUser(htmlItem) {
   let code = '';
   let num = 0;
   userData.forEach(function (item) {
      num++;
      code = code + '<li class="user" data-style="' + item.style + '"><span class="user-name">' +
         num + ' - ' + item.name +
         '</span><img src="' + item.avatar + '" class="user-avatar"></li>';
   });
   htmlItem.innerHTML = code;
}