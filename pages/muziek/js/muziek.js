function play(muziekje) {
  var audio = document.getElementById("audio");  // Verkrijg de bestaande audio tag
  audio.src = muziekje;  // Stel het bronbestand van de audio in
  audio.play();  // Speel de muziek af
  console.log(muziekje);  // Log het pad naar het muziekbestand (voor debugging)
}
