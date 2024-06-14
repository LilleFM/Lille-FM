function downloadAPK() {
    // lien de l'emplacement du fichier apk : 
    var url = "https://lilegalaxie.netlify.app/Lille_FM.apk";
    
    // Crée un élément <a> invisible
    var a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
  
    // Définit l'URL du fichier à télécharger
    a.href = url;
  
    // Définit le nom de fichier pour le téléchargement
    a.download = 'LileGalaxie.apk';
  
    // Simule un clic sur l'élément <a> pour déclencher le téléchargement
    a.click();
  
    // Supprime l'élément <a> du DOM
    document.body.removeChild(a);
  }
  
