document.addEventListener("DOMContentLoaded", function() {
    const podcastList = document.getElementById("podcast-list");

    fetch('podcasts/')
        .then(response => response.text())
        .then(data => {
            const files = data.split('\n').filter(file => file.trim() !== '');
            files.forEach(file => {
                const fileName = file.split('/').pop(); // Récupérer le nom du fichier sans le chemin complet
                if (fileName.endsWith('.mp3')) {
                    const listItem = document.createElement("li");
                    const audio = document.createElement("audio");
                    audio.controls = true;
                    const source = document.createElement("source");
                    source.src = `podcasts/${fileName}`;
                    source.type = "audio/mpeg";
                    audio.appendChild(source);
                    listItem.appendChild(audio);
                    podcastList.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error('Erreur:', error));
});
