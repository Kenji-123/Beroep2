function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }
 
  function play(muziekje) {
    //var audio = document.getElementById("audio2");
    let audioTag = document.createElement('audio');
    audioTag.src = muziekje;
    audioTag.play();
    console.log (muziekje)
  }