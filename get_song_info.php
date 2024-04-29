<?php
// Récupérer le contenu de la page de la radio
$pageContent = file_get_contents('https://lillefm.radio12345.com');

// Extraire le titre de la chanson actuelle
if (preg_match('/<td width="100" nowrap><font class=default>Current Song: <\/font><\/td><td><font class=default><b>(.*?)<\/b>/', $pageContent, $matches)) {
    $currentSong = $matches[1]; // Titre de la chanson actuelle
} else {
    $currentSong = 'Titre de la chanson non disponible'; // Si le titre n'est pas trouvé
}

// Afficher le titre de la chanson actuelle
echo $currentSong;
?>
