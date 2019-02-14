var myForm = document.myForm;
var submitBtn = document.myForm.submitBtn;

submitBtn.addEventListener('click', displayLyrics);

function displayLyrics(event) {
    event.preventDefault();

    var artist = document.myForm.artist.value;
    var song = document.myForm.song.value;
    var apiUrl = "https://api.lyrics.ovh/v1";
    var songURL = apiUrl + '/' + artist + '/' + song;
    var lyricsBox = document.getElementById('lyricsBox');

    // Fetch information from URL
    fetch(songURL)
    .then(function(response) {

        console.log(response);
        if (!response.ok){
            throw Error(response.statusText);
        }
        return response.json();
    })

    .then(function(data) {
        var lyrics = data.lyrics.replace(/\n/g, '<br>');
        lyricsBox.innerHTML = lyrics;
})
    .catch(function(error) {
        console.log(error);
    })

}






