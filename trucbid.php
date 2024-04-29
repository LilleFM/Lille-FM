<?php
// Récupère le contenu de la page
$url = 'https://lillefm.radio12345.com';
$content = file_get_contents($url);

// Trouve la ligne 49 dans le contenu
$lines = explode("\n", $content);
$line49 = $lines[48]; // L'index commence à 0

// Inclut le contenu dans le code HTML
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" sizes="192x192" href="Lille_FM_icon.ico" type="image/png" />
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Radio</title>
</head>
<body>
    <center><h1>Web Radio</h1></center>
    <br>
    <!-- Ajoute le contenu récupéré de la ligne 49 ici -->
    <div id="currentSong"><?php echo $line49; ?></div>

    <audio controls autoplay>
        <source src="https://uk9freenew.listen2myradio.com/live.mp3?typeportmount=s1_10341_stream_1862423" type="audio/mpeg">
        Votre navigateur ne supporte pas l'élément audio.
    </audio>
</body>
<style>
    lecteur {
        left: 42.5%;
        bottom: 45%;
        position: absolute;
    }
</style>
</html>
